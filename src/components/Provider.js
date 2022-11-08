import React, { useEffect, useState } from "react";
import axios from "axios";
import { Image } from "react-bootstrap";
import Search from "./Search";

export default function Provider({ language, region,passProvider }) {
  const [providers, setProviders] = useState([]);
  let providerArray = [];

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/watch/providers/movie?api_key=${process.env.REACT_APP_API_KEY}&language=${language}&watch_region=${region}`
      )
      .then((response) => {
        const resultArray = response.data.results;
        resultArray.map((el) => {
          providerArray.push({
            id: el.provider_id,
            name: el.provider_name,
            image: `https://image.tmdb.org/t/p/w45/${el.logo_path}`,
          });
        });
        setProviders(providerArray)
      });
  }, [language,region]);

  return <Search array={providers} passFeature={passProvider} name={"plataform"}/>;
}
