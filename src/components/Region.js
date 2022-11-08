import React, { useEffect, useState } from "react";
import axios from "axios";
import Search from "./Search";

export default function Region({ language,passRegion }) {
  const [regions, setRegions] = useState([]);
  let regionArray = [];

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/watch/providers/regions?api_key=${process.env.REACT_APP_API_KEY}&language=${language}`
      )
      .then((response) => {
        const resultsArray = response.data.results;
        resultsArray.map((el) => {
          regionArray.push({
            name: el.native_name,
            iso: el.iso_3166_1,
          });
        });
        setRegions(regionArray);
      });
  }, [language]);

  return <Search passFeature={passRegion} array={regions} name={"region"}/>;
}
