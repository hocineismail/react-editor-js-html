import React from "react";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-github";
import { shareData } from "../classes/classes";

export default function JavascriptEditor({ code, onChangeCode, name }) {
  const data = new shareData();

  return (
    <>
      <AceEditor
        mode="javascript"
        theme="vscode"
        value={code}
        onChange={(code) =>
          onChangeCode({
            code: code,
            name: name,
          })
        }
        name="code-editor"
        editorProps={{ $blockScrolling: true }}
      />
    </>
  );
}
