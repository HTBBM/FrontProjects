const doc = document;
const clear = doc.getElementById("clear");
const viewer = doc.getElementById("viewer");

let newText;
let locate;
let newDiv;
let newH1;
let newH3;
let newDialog;
let newBr;
let newInput;
let newTextArea;
let newBtn;
let newSpan;
let newDivDiv;

function createTask() {
  newText = doc.createTextNode("");
  newDiv = doc.createElement("div");
  newH1 = doc.createElement("h1");
  newH3 = doc.createElement("h3");
  newDialog = doc.createElement("dialog");
  newBr = doc.createElement("br");
  newInput = doc.createElement("input");
  newTextArea = doc.createElement("textarea");
  newBtn = doc.createElement("button");
  newSpan = doc.createElement("span");
  newDivDiv = doc.createElement("div");

  newDialog.setAttribute("open", "true");
  clear.insertBefore(newDialog, clear[0]);

  newSpan.setAttribute("id", "dialog-span");
  newDialog.insertBefore(newSpan, newDialog[0]);

  newText = doc.createTextNode("X");
  newBtn.appendChild(newText);
  newBtn.setAttribute("onclick", "closeTask()");
  newBtn.setAttribute("id", "close-btn");
  newSpan.insertBefore(newBtn, newSpan[0]);

  //Dialog Div

  newDiv.setAttribute("id", "dialog-div");
  newDialog.insertBefore(newDiv, newDialog[0]);

  //Dialog Title

  newText = doc.createTextNode("TaskZ");
  newH1.appendChild(newText);
  newH1.setAttribute("id", "dialog-title");
  newDiv.insertBefore(newH1, newDiv[0]);

  /*   newDialog.appendChild(newBr, newDialog[0]) */

  //NewDiv

  newDiv = doc.createElement("div");
  newDiv.setAttribute("id", "dialog-create");
  newDialog.insertBefore(newDiv, newDialog[0]);

  //NewDivDiv

  newDivDiv.setAttribute("id", "left-c-dialog");
  newDiv.insertBefore(newDivDiv, newDiv[0]);

  //Color H3

  newH3 = doc.createElement("h3");
  newText = doc.createTextNode("Color:");
  newH3.appendChild(newText);
  newH3.setAttribute("id", "dialog-c-color");
  newDivDiv.insertBefore(newH3, newDivDiv[0]);

  //Span

  //Color Input

  /*   newInput.setAttribute('type', 'color')
  newInput.setAttribute('id', 'dialog-c-inpcolor')
  newDivDiv.insertBefore(newInput, newDivDiv[0])
 */

  newBtn = doc.createElement("button");
  newSpan = doc.createElement("span");
  newSpan.setAttribute(
    "style",
    "display:grid; grid-template-columns: auto auto;"
  );
  newSpan.setAttribute("id", "color-span");
  newDivDiv.insertBefore(newSpan, newDivDiv[0]);

  newBtn.setAttribute("id", "color-1");
  newBtn.setAttribute("class", "color-input");
  newBtn.setAttribute("name", "color");
  newBtn.setAttribute("style", "box-sizing:border-box");
  newSpan.insertBefore(newBtn, newSpan[0]);
  newDivDiv.insertBefore(newSpan, newDivDiv[0]);
  newBtn = doc.createElement("button");
  newBtn.setAttribute("id", "color-2");
  newBtn.setAttribute("class", "color-input");
  newBtn.setAttribute("name", "color");
  newSpan.insertBefore(newBtn, newSpan[0]);
  newBtn = doc.createElement("button");
  newBtn.setAttribute("id", "color-3");
  newBtn.setAttribute("class", "color-input");
  newBtn.setAttribute("name", "color");
  newSpan.insertBefore(newBtn, newSpan[0]);
  newBtn = doc.createElement("button");
  newBtn.setAttribute("id", "color-4");
  newBtn.setAttribute("class", "color-input");
  newBtn.setAttribute("name", "color");
  newSpan.insertBefore(newBtn, newSpan[0]);

  {
    /* <input type="radio" checked="checked" name="radio"> */
  }

  //NewDivDiv

  newDivDiv = doc.createElement("div");
  newDiv.insertBefore(newDivDiv, newDiv[0]);

  //H3

  newH3 = doc.createElement("h3");

  //Name H3

  newText = doc.createTextNode("Name:");
  newH3.appendChild(newText);
  newH3.setAttribute("id", "dialog-c-name");
  newDivDiv.insertBefore(newH3, newDivDiv[0]);

  //Input

  newInput = doc.createElement("input");

  //Name Input

  newInput.setAttribute("require", "true");
  newInput.setAttribute("id", "dialog-c-input");
  newDivDiv.insertBefore(newInput, newDivDiv[0]);

  //H3

  newH3 = doc.createElement("h3");

  //Desc H3

  newText = doc.createTextNode("Description:");
  newH3.appendChild(newText);
  newDivDiv.insertBefore(newH3, newDivDiv[0]);

  //TextArea

  newTextArea.setAttribute("id", "dialog-c-textarea");
  newDivDiv.insertBefore(newTextArea, newDivDiv[0]);

  //NewDiv

  newDiv = doc.createElement("div");
  newDialog.insertBefore(newDiv, newDialog[0]);
  newDiv.setAttribute("id", "dialog-div-btn");

  //Submit Button

  newBtn = doc.createElement("button");
  newText = doc.createTextNode("Criar Tarefa");
  newBtn.appendChild(newText);
  newBtn.setAttribute("id", "dialog-button");
  newDiv.insertBefore(newBtn, newDiv[0]);
}

function closeTask() {
  clear.innerHTML = "";
}
