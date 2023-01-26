export class shareData {
  constructor() {
    this.html = `<h1>HTML Style Object</h1>
<h2>The backgroundColor Property</h2>

<p>Click the "Try it" button to set the backgroundColor property of the DIV element to "lightblue":</p>

<button onclick="myFunction()">Try it</button>

<div id="myDIV">
  <h1>Hello</h1>
</div>

`;
    this.script = `function myFunction() {
  document.getElementById("myDIV").style.backgroundColor = "lightblue";
}`;
  }
  onChangeHtml(html) {
    this.html = html;
  }
  onChangeScript(script) {
    this.script = script;
  }
  getResult() {
    return {
      script: this.script,
      html: this.html,
    };
  }
}
