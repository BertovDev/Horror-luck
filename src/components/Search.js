import React, { useState, useEffect } from "react";
import { Col, Container, Form, ListGroup, Row } from "react-bootstrap";

import LangListItem from "./LangListItem";
import SearchLanReg from "./SearchLanReg";
import SearchProvider from "./SearchProvider";

export default function Search({ passFeature, array,name }) {
  const [search, setSearch] = useState("");
  const [searchResults, setSeatchResults] = useState([]);
  let auxArray = [];

  useEffect(() => {
    auxArray = [];
    array.map((el) => {
      if (el.name.toLowerCase().includes(search.toLowerCase())) {
        auxArray.push(el);
      }
    });
    setSeatchResults(auxArray);
  }, [search]);

  return (
    <Container>
      <Row>
        <Col xs={6} sm={12}>
          <h4 style={{fontSize:"45px"}} className="aply-font">{name.toUpperCase()}</h4>
        </Col>
        <Col xs={6} sm={12}>
          <Form.Control
            type="text"
            placeholder={`Search ${name}`}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </Col>
      </Row>
      <ul>
        {array[0] !== undefined && array[0].hasOwnProperty("id") ? (
          <SearchProvider
            searchResults={searchResults}
            search={search}
            setSearch={setSearch}
            passFeature={passFeature}
          />
        ) : (
          <SearchLanReg
            searchResults={searchResults}
            passFeature={passFeature}
            setSearch={setSearch}
            search={search}
          />
        )}
      </ul>
    </Container>
  );
}
