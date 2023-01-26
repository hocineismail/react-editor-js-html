import React, { useState } from "react";

import Collapse from "react-bootstrap/Collapse";
import { FaFolderOpen, FaFolder } from "react-icons/fa";
import JsContextMenu from "./jsfolder";
import HtmlFolder from "./htmlFolder";
function ContextMenu({
  onChangeFile,
  onCreateNewFile,
  onRemoveFile,
  intiFiles,
}) {
  const [open, setOpen] = useState(true);

  return (
    <div style={{ backgroundColor: "#181A1B", height: "100vh", color: "gray" }}>
      <div
        style={{ padding: "2px 10px", cursor: "pointer" }}
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        {!open ? <FaFolder color="gray" /> : <FaFolderOpen color="gray" />} src
      </div>
      <Collapse in={open}>
        <div style={{ padding: "2px 10px" }}>
          <JsContextMenu
            intiFiles={intiFiles || []}
            onChangeFile={onChangeFile}
            onCreateNewFile={onCreateNewFile}
            onRemoveFile={onRemoveFile}
          />
          <HtmlFolder onChangeFile={onChangeFile} />
        </div>
      </Collapse>{" "}
    </div>
  );
}
export default ContextMenu;
