import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Container, Form, ListGroup } from "react-bootstrap";
import LangListItem from "./LangListItem";
import Search from "./Search";

export default function Language({ passLanguage }) {
  const [languages, setLanguages] = useState([]);

  let langArray = [];

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/configuration/languages?api_key=${process.env.REACT_APP_API_KEY}`
      )
      .then((response) => {
        const data = response.data;
        Object.keys(data).forEach((key, index) => {
          langArray.push({
            name: data[key].english_name,
            iso: data[key].iso_639_1,
          });
        });
        setLanguages(langArray);
      });
  }, []);

  return <Search passFeature={passLanguage} array={languages} name={"language"}/>;
}
