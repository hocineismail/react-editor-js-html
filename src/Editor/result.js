import React from "react";
import { Helmet } from "react-helmet";
import { shareData } from "../classes/classes";
import { RxReload } from "react-icons/rx";
const data = new shareData();
export default function Result({ script, html, onReload }) {
  console.log(script.map((item) => item));
  return (
    <div style={{ marginTop: "10px" }}>
      <Helmet>
        {script.map((item) => {
          return <script>{item}</script>;
        })}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        ></link>
      </Helmet>
      <div className="geeks">
        <div className="gfg left">
          <RxReload
            style={{ marginLeft: "10px", cursor: "pointer" }}
            onClick={onReload}
          />
        </div>

        <div className="gfg middle">
          <input
            type="text"
            value="http://localhost:3000/"
            style={{ display: "inline-block" }}
          />
        </div>
        <div className="gfg right">
          <div style={{ float: "right" }}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      </div>{" "}
      <div className="container">
        <div class="body" style={{ height: "100vh" }}>
          {script.map((item) => {
            return <script>{item.code}</script>;
          })}
          <div dangerouslySetInnerHTML={{ __html: html }} />{" "}
        </div>
      </div>
    </div>
  );
}
