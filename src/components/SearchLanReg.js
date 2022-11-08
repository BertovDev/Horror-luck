import React from "react";
import { ListGroup } from "react-bootstrap";
import LangListItem from "./LangListItem";

export default function SearchLanReg({searchResults,passFeature,setSearch,search}) {
  return (
    <ListGroup> 
      {searchResults.slice(0, 10).map((el, index) => {
        if (search !== "")
          return (
            <LangListItem
              key={index}
              name={el.name}
              iso={el.iso}
              setFeature={passFeature}
              clearSearch={setSearch}
            />
          );
      })}
    </ListGroup>
  );
}
