import React from "react";
import { ListGroup } from "react-bootstrap";

export default function LangListItem({name,iso,setFeature,clearSearch}) {
  return <ListGroup.Item style={{cursor:"pointer"}} onClick={() => {setFeature({name:name,iso:iso});clearSearch("")}}>{name}</ListGroup.Item>;
}
