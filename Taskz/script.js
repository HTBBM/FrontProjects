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
let color;
let colors = [1, 2, 3, 4];
let colorIndex;


let taskArray = []


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
  //newText = doc.createTextNode("Color:");
  newText = doc.createTextNode("");
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
  newBtn.setAttribute("onclick", "changeColor(1)");
  newBtn.setAttribute("class", "color-input");
  newBtn.setAttribute("name", "color");
  newBtn.setAttribute("type", "button");
  newBtn.setAttribute("style", "box-sizing:border-box");
  newSpan.insertBefore(newBtn, newSpan[0]);
  newDivDiv.insertBefore(newSpan, newDivDiv[0]);
  newBtn = doc.createElement("button");
  newBtn.setAttribute("id", "color-2");
  newBtn.setAttribute("onclick", "changeColor(2)");
  newBtn.setAttribute("class", "color-input");
  newBtn.setAttribute("name", "color");
  newBtn.setAttribute("type", "button");
  newSpan.insertBefore(newBtn, newSpan[0]);
  newBtn = doc.createElement("button");
  newBtn.setAttribute("id", "color-3");
  newBtn.setAttribute("onclick", "changeColor(3)");
  newBtn.setAttribute("class", "color-input");
  newBtn.setAttribute("name", "color");
  newBtn.setAttribute("type", "button");
  newSpan.insertBefore(newBtn, newSpan[0]);
  newBtn = doc.createElement("button");
  newBtn.setAttribute("id", "color-4");
  newBtn.setAttribute("onclick", "changeColor(4)");
  newBtn.setAttribute("class", "color-input");
  newBtn.setAttribute("name", "color");
  newBtn.setAttribute("type", "button");
  newSpan.insertBefore(newBtn, newSpan[0]);


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
  newBtn.setAttribute("type", "button");
  newBtn.setAttribute("onclick", " addTask()");
  newDiv.insertBefore(newBtn, newDiv[0]);
}

function addTask() {



  let username = doc.getElementById('dialog-c-input').value
  let desc = doc.getElementById('dialog-c-textarea').value

  closeTask();

  ExportInfos(username, desc, color);

  return souza()

}



function ExportInfos(user, desc, colr) {

  if (user == "" || desc == "" || colr == "") {
    return console.log("Passa os baguio fi!")
  }
  else {

    usrObject = {

      name: user,
      desc: desc,
      color: color

    }

    //console.log("User: ", usrObject)

    return taskArray.push(usrObject)

  }




}


function closeTask() {
  clear.innerHTML = "";
}

function changeColor(number) {

  for (const cor of colors) {
    doc.getElementById(`color-${cor}`).style.opacity = 1;
  }

  //let colorButton = doc.getElementById(`color-${number}`)
  colorIndex = colors.indexOf(number);
  colors.splice(colorIndex, 1)

  if (number == 1) {
    color = '#c73a3a';
  }
  else if (number == 2) {
    color = '#6ec73a'
  }
  else if (number == 3) {
    color = '#3a81c7'
  }
  else if (number == 4) {
    color = '#c79d3a'
  }
  for (const cor of colors) {
    doc.getElementById(`color-${cor}`).style.opacity = 0.3;
  }

  colors.push(number)
}

/* ----------------------------------- COOKIES ----------------------------------- */
/* 
let cookieID = 1;

function setCookie(name, desc, color) {
  let cookieValue = `${name}|${desc}|${color}`
  doc.cookie = "Task=" + cookieValue + `; path=/${cookieID}`
  cookieID++;
}

//setCookie("Codar", "Importante", 1);

function getCookie() {
  let name = "randomCookie";
  let decodedCookie = decodeURIComponent(document.cookie)
  let ca = decodedCookie.split(';')

  for (let i = 0; i < ca.length; i++) {
    let c = ca[i].trim();
    console.log(`trim: ${c}`)

    if (c.indexOf(name) == 0) {

      let cookieValue = c.substring(name.length, c.length)
      let parts = cookieValue.split('|')

      if (parts.length === 4) {

        return {
          id: parts[0],
          name: parts[1],
          desc: parts[2],
          color: Number(parts[3])
        }
      }
    }
    return console.log("erro no cookie")
  }

  console.log(ca)
}

//let CookieData = getCookie();
//console.log("Name: ", CookieData.name)

function eraseComplexCookie() {
  document.cookie = "randomCookie=; Max-Age=-99999999; path=/";
}

 */

//TaskObject




//let Flocate = getElementById('Daniel')


function souza() {
  for (const task of taskArray) {
    console.log(task);

    const iframe = doc.querySelector("#iframe")
    let Flocate = iframe.contentDocument.querySelector("#Daniel")

    if (Flocate) {

      let TextTitle = doc.createElement('h2')
      let DescTitle = doc.createElement('h3')
      let SpanColor = doc.createElement('span')
      let taskItem = doc.createElement('div')
      let taskTitle = doc.createElement('div')
      let taskInfo = doc.createElement('div')
      let taskColor = doc.createElement('div')
      let taskDesc = doc.createElement('div')


      taskItem.setAttribute('class', 'task-item')
      Flocate.insertBefore(taskItem, Flocate[0])


      taskTitle.setAttribute('class', 'task-title')
      taskItem.insertBefore(taskTitle, taskItem[0])

      TextTitle.appendChild(doc.createTextNode(`${task.name}`))
      taskTitle.insertBefore(TextTitle, taskTitle[0])


      taskInfo.setAttribute('class', 'task-info')
      taskItem.insertBefore(taskInfo, taskItem[0])


      taskColor.setAttribute('class', 'task-color')
      taskInfo.insertBefore(taskColor, taskInfo[0])


      SpanColor.style.backgroundColor = `#${task.color}`
      SpanColor.setAttribute('class', 'span-color')
      taskColor.insertBefore(SpanColor, taskColor[0])


      taskDesc.setAttribute('class', 'task-desc')
      taskInfo.insertBefore(taskDesc, taskInfo[0])




      console.log(task)

    }
    else {
      console.log("Element not found")
    }
    console.log('iframe')

    let a = taskArray.indexOf(task)
    taskArray.splice(a, 1)


  }

}