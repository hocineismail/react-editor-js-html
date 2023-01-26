import { useState, useRef, useEffect, useCallback } from "react";
import Swal from "sweetalert2";
import JavascriptEditor from "./JavascriptEditor";
import { Col, Row } from "react-bootstrap";
import HtmlCodeEditor from "./htmlEditor";
import { shareData } from "../classes/classes";
import Result from "./result";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { DiJavascript1 } from "react-icons/di";
import { AiFillHtml5, AiOutlineClose } from "react-icons/ai";
import ContextMenu from "./menu";

function MainEditor() {
  const [tabs, setTabs] = useState([
    {
      name: "index.html",
      code: `<h1>HTML Style Object</h1>
    <h2 id='h2'>The text color Property</h2> 
  <button type="button" onclick="myFunction()">Set background color</button>
      `,
      open: true,
    },
    {
      name: "main.js",
      code: `function myFunction() {
        document.getElementById("h2").style.color = "red";
}`,
      open: true,
    },
  ]);
  const [key, setKey] = useState("index.html");
  const [htmlCode, setHtmlCode] = useState(`<h1>HTML Style Object</h1>
<h2 id='h2'>The backgroundColor Property</h2> 
<button type="button" onclick="myFunction()">Set background color</button>
      `);
  const [script, setscript] = useState([]);
  const [html, sethtml] = useState(``);
  const onChangeCode = (code) => {
    const newData = tabs.map((item) => {
      if (item.name === code.name) {
        item.code = code.code;
        return item;
      }
      return item;
    });
    setTabs(newData);
  };
  const onChangeHtml = (htmlCode) => {
    setHtmlCode(htmlCode);
  };
  const [reload, setReload] = useState(false);
  const integrateScript = useCallback(() => {
    setReload(true);
    setTimeout(() => {
      setReload(false);
    }, 60);
    console.log("tabs");
    console.log(tabs);
    sethtml(htmlCode);
    const getScript = tabs.map((item) => {
      return item.code;
    });
    setscript(getScript);
  }, []);

  const openNewFile = (e) => {
    setTabs([...tabs, { name: e, code: ``, open: true }]);
    setKey(e);
  };
  const onCloseTab = (key) => {
    let updatedTabs = tabs.map((item) => {
      if (item.name === key) {
        item.open = false;
      }
      return item;
    });
    setTabs(updatedTabs);
  };
  return (
    <div>
      <Row>
        <Col md={2}>
          <ContextMenu
            intiFiles={tabs.map((item) => item.name)}
            onRemoveFile={(key) => {
              let updatedTabs = tabs.filter((item) => item.name !== key);
              setTabs(updatedTabs);
            }}
            onChangeFile={(key) => {
              let updatedTabs = tabs.map((item) => {
                if (item.name === key) {
                  item.open = true;
                }
                return item;
              });
              setTabs(updatedTabs);
              setKey(key);
            }}
            onCreateNewFile={openNewFile}
          />
        </Col>
        <Col>
          <Row>
            <Col style={{ height: "100vh" }}>
              <Tabs
                defaultActiveKey="profile"
                id="uncontrolled-tab-example"
                className="mb-3"
                onSelect={(k) => setKey(k)}
                activeKey={key}
              >
                {tabs.map((item) => {
                  if (item.open) {
                    if (item.name === "index.html") {
                      return (
                        <Tab
                          eventKey="index.html"
                          title={
                            <span
                              style={{
                                fontSize: "12px",
                                position: "relative",
                              }}
                            >
                              <AiFillHtml5 color="#e34c26" size="18" />
                              {item.name}
                              <span
                                style={{
                                  position: "aboslute",
                                  marginLeft: "10px",
                                  right: "10px",
                                }}
                                onClick={() => onCloseTab(item.name)}
                              >
                                <AiOutlineClose color="gray" size="18" />
                              </span>
                            </span>
                          }
                        >
                          <HtmlCodeEditor
                            code={htmlCode}
                            onChangeCode={onChangeHtml}
                          />
                        </Tab>
                      );
                    } else {
                      return (
                        <Tab
                          eventKey={item.name}
                          title={
                            <span
                              style={{
                                fontSize: "12px",
                                position: "relative",
                              }}
                            >
                              <DiJavascript1 color="#F0DB4F" size="18" />{" "}
                              {item.name}
                              <span
                                style={{
                                  position: "aboslute",
                                  marginLeft: "10px",
                                  right: "10px",
                                }}
                                onClick={() => onCloseTab(item.name)}
                              >
                                <AiOutlineClose color="gray" size="18" />
                              </span>
                            </span>
                          }
                        >
                          <JavascriptEditor
                            code={item.code}
                            name={item.name}
                            onChangeCode={onChangeCode}
                          />
                        </Tab>
                      );
                    }
                  }
                })}
              </Tabs>
            </Col>{" "}
            <Col>
              <div>
                {!reload ? (
                  <Result
                    script={script}
                    html={html}
                    onReload={integrateScript}
                  />
                ) : null}

                {/* <div ref={htmlRef} /> */}
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default MainEditor;
