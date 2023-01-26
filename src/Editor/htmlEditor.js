import React, { useState, useEffect } from "react";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/theme-github";
import { shareData } from "../App";

function HtmlCodeEditor({ code, onChangeCode }) {
  return (
    <>
      <AceEditor
        mode="html"
        theme="vscode"
        value={code}
        onChange={onChangeCode}
        name="code-editor"
        editorProps={{ $blockScrolling: true }}
      />
    </>
  );
}

export default HtmlCodeEditor;
