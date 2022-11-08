import React, { useEffect, useRef, useState } from "react";
import {
  Container,
  Row,
  Col,
  Image,
  Button,
  Card,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import axios from "axios";

import Region from "./Region";
import Language from "./Language";
import Provider from "./Provider";
import Movie from "./Movie";
import MyLinks from "./MyLinks";

function removeDuplicatedItem(myArr, prop) {
  return myArr.filter((obj, pos, arr) => {
    return arr.map((mapObj) => mapObj[prop]).indexOf(obj[prop]) === pos;
  });
}

export default function Discover() {
  const [lang, setLang] = useState({});
  const [reg, setReg] = useState({});
  const [prov, setProv] = useState({});
  const [movieArray, setMovieArray] = useState([]);
  const [clicked, setClicked] = useState(false);
  const [disabled, setDisabled] = useState(true);

  const refButton = useRef();

  const [movies, setMovies] = useState([]);

  const watch_provider = Object.keys(prov).length === 0 ? 8 : prov.id;
  const watch_region = Object.keys(reg).length === 0 ? "AR" : `${reg.iso}`;
  const language =
    Object.keys(lang).length === 0
      ? `es-ES`
      : `${lang.iso}-${lang.iso.toUpperCase()}`;

  let auxArray = [];
  const page = 1;

  useEffect(() => {
    const componentMount = async () => {
      const firstResponse = await axios
        .get(
          `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_watch_providers=${watch_provider}&watch_region=${watch_region}&with_genres=27&page=${page}&language=${language}`
        )
        .catch((err) => {
          console.log(err);
        });
      const randomPage = Math.floor(
        1 + Math.random() * firstResponse.data.total_pages
      );
      const secondResponse = await axios
        .get(
          `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_watch_providers=${watch_provider}&watch_region=${watch_region}&with_genres=27&page=${randomPage}&language=${language}`
        )
        .catch((err) => {
          console.log(err);
        });
      setMovies(secondResponse.data.results);
    };

    componentMount();
  }, [language, watch_region, watch_provider, clicked]);

  useEffect(() => {
    for (let i = 0; i < 3; i++) {
      if (movies[0] !== undefined) {
        const random = Math.floor(Math.random() * movies.length);
        auxArray.push(movies[random]);
        auxArray = removeDuplicatedItem(auxArray, "id");
        if (i === 2 && auxArray.length === 2) i--;
      }
      setMovieArray(auxArray);
    }
  }, [clicked]);

  useEffect(() => {
    if (
      reg.name !== undefined &&
      lang.name !== undefined &&
      prov.image !== undefined &&
      refButton.current !== undefined
    ) {
      setDisabled(false);
    }
  }, [reg.name, lang.name, prov.image]);

  const renderTool = (props) => (
    <Tooltip id="tooltip-disabled" {...props}>
      Select the parameters!
    </Tooltip>
  );

  return (
    <Container className="mx-3 mb-3" style={{ color: "#FF7930" }}>
      <Row>
        <Col xs={12} sm={4}>
          <Language passLanguage={setLang} />
        </Col>
        <Col xs={12} sm={4}>
          <Region language={language} passRegion={setReg} />
        </Col>
        <Col xs={12} sm={4}>
          <Provider
            language={language}
            region={watch_region}
            passProvider={setProv}
          />
        </Col>
        <Row>
          <Col className="parameters m-5">
            <Card bg={"dark"} border={"light"}>
              <Card.Body>
                <span>
                  {" "}
                  Movie parameters :{" "}
                  {lang.name === undefined &&
                  reg.name === undefined &&
                  prov.image === undefined
                    ? "Select parameters above"
                    : ``}
                </span>
                <span style={{ color: "white" }}>{lang.name}</span>
                <span style={{ color: "white" }}>{reg.name}</span>
                <span style={{ color: "white" }}>
                  <Image src={prov.image} />
                </span>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <OverlayTrigger
              overlay={
                <Tooltip id="tooltip-disabled">Select the parameters</Tooltip>
              }
            >
              <span className="d-inline-block">
                <Button
                  ref={refButton}
                  disabled={disabled}
                  variant="dark"
                  onClick={() => {
                    setClicked(!clicked);
                  }}
                >
                  Get my Movies
                </Button>
              </span>
            </OverlayTrigger>
          </Col>
        </Row>
        <Row>
          <Col>
            {movieArray.length > 0 ? (
              <h3>Your movies for tonight are ⬇</h3>
            ) : (
              ""
            )}
          </Col>
        </Row>
      </Row>
      {movieArray.length === 0 && clicked === true ? (
        <h1>Movies not avaibles</h1>
      ) : (
        ""
      )}
      <Row className="p-3">
        {movieArray.map((el) => {
          return (
            <Col
              className="d-flex justify-content-center"
              md={12}
              lg={4}
              key={el.id}
            >
              <Movie key={el.id} movie={el} />
            </Col>
          );
        })}
      </Row>
      <Row>
     
      </Row>
    </Container>
  );
}
