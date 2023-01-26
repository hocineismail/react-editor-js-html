import React, { useState } from "react";

import Collapse from "react-bootstrap/Collapse";
import { FaFolderOpen, FaFolder } from "react-icons/fa";
import { AiFillHtml5 } from "react-icons/ai";
function HtmlFolder({ onChangeFile }) {
  const [open, setOpen] = useState(true);

  return (
    <div>
      <div
        style={{ padding: "5px", cursor: "pointer", fontSize: "14px" }}
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        {!open ? <FaFolder color="gray" /> : <FaFolderOpen color="gray" />} html
      </div>
      <Collapse in={open}>
        <div
          style={{ paddingLeft: "14px", cursor: "pointer" }}
          onClick={() => onChangeFile("index.html")}
        >
          <span style={{ fontSize: "14px" }}>
            <AiFillHtml5 color="#e34c26" size="18" /> index.html
          </span>{" "}
        </div>
      </Collapse>{" "}
    </div>
  );
}
export default HtmlFolder;
