import React, { useState, useRef } from "react";

import Collapse from "react-bootstrap/Collapse";
import { FaFolderOpen, FaFolder } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { AiOutlineFileAdd } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import useOutsideClick from "../hooks/useOutsideClick";

function JsContextMenu({
  intiFiles,
  onChangeFile,
  onCreateNewFile,
  onRemoveFile,
}) {
  const ref = useRef();
  const [open, setOpen] = useState(true);
  const [newFile, setnewFile] = useState(false);
  const [name, setName] = useState("");
  const [files, setfiles] = useState(intiFiles || []);
  const onChangeNameFile = (e) => {
    setName(e.target.value);
  };
  useOutsideClick(ref, () => {
    if (newFile && name == "") {
      setnewFile(false);
    }
  });
  const _handleKeyDown = (e) => {
    if (e.key === "Enter" && !files.includes(name + ".js")) {
      setfiles([...files, name + ".js"]);

      setName(null);
      setnewFile(false);
      onCreateNewFile(name + ".js");
    }
  };

  return (
    <div>
      <div
        style={{ float: "right", margin: "5px 5px 0px 0px", cursor: "pointer" }}
        onClick={() => {
          setTimeout(() => {
            setnewFile(true);
          }, 50);
        }}
      >
        <AiOutlineFileAdd size={16} />
      </div>
      <div
        style={{ padding: "5px", cursor: "pointer", fontSize: "14px" }}
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        {!open ? <FaFolder color="gray" /> : <FaFolderOpen color="gray" />}
        {"   "}
        Javascript
      </div>
      <Collapse in={open}>
        <>
          {files.map((item) => {
            if (item !== "index.html") {
              return (
                <div
                  style={{ paddingLeft: "14px", cursor: "pointer" }}
                  onClick={() => onChangeFile(item)}
                  key={item}
                >
                  <span style={{ fontSize: "14px" }}>
                    <DiJavascript1 color="#F0DB4F" size="18" />
                    {item}
                  </span>
                  <BsTrash
                    style={{
                      float: "right",
                      margin: "5px 5px 0px 0px",
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      let updatedTabs = files.filter((file) => file !== item);
                      setfiles(updatedTabs);
                      setTimeout(() => {
                        onRemoveFile(item);
                      }, 50);
                    }}
                  />
                </div>
              );
            }
          })}
          {newFile ? (
            <div style={{ marginLeft: "13px", marginTop: "10px" }} ref={ref}>
              <input
                type="text"
                value={name}
                className={`form form-control `}
                style={{
                  backgroundColor: "gray",
                  color: "white",
                  fontSize: "14px",
                  border: `1px solid ${
                    files.includes(name + ".js") ? "red" : ""
                  }  `,
                }}
                onChange={onChangeNameFile}
                onKeyDown={_handleKeyDown}
              />
            </div>
          ) : null}
        </>
      </Collapse>{" "}
    </div>
  );
}
export default JsContextMenu;
