import React from "react";
import { ListGroup, Image } from "react-bootstrap";
import ProviderListItem from "./ProviderListItem";

export default function SearchProvider({ searchResults,search,setSearch,passFeature }) {
  return (
    <ListGroup>
      {searchResults.slice(0, 10).map((el) => {
        if (search !== "")
          return (
            <ProviderListItem key={el.id} id={el.id} name={el.name} image={el.image} setFeature={passFeature} clearSearch={setSearch}/>
          );
      })}
    </ListGroup>
  );
}
