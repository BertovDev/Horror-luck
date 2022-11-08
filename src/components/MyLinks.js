import React from "react";
import {Linkedin,Twitter,Github} from "react-bootstrap-icons"

export default function MyLinks() {
  return (
    <>
      <a href="https://www.linkedin.com/in/bautista-berto/" target="_blank">
        <Linkedin className="m-2" size={50} color={"dark"} />
      </a>
      <a href="https://twitter.com/tongenjs" target="_blank">
        <Twitter className="m-2" size={50} color={"dark"} />
      </a>
      <a href="https://github.com/BertovDev" target="_blank">
        <Github className="m-2" size={50} color={"dark"} />
      </a>
    </>
  );
}
