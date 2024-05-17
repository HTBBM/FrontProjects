const doc = document
const clear = doc.getElementById('clear')
const viewer = doc.getElementById('viewer')


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

  newText = doc.createTextNode('')
  newDiv = doc.createElement('div');
  newH1 = doc.createElement('h1');
  newH3 = doc.createElement('h3');
  newDialog = doc.createElement('dialog');
  newBr = doc.createElement('br');
  newInput = doc.createElement('input');
  newTextArea = doc.createElement('textarea');
  newBtn = doc.createElement('button')
  newSpan = doc.createElement('span')
  newDivDiv = doc.createElement('div')

  newDialog.setAttribute('open', 'true')
  clear.insertBefore(newDialog, clear[0])

  newSpan.setAttribute('id', 'dialog-span')
  newDialog.insertBefore(newSpan, newDialog[0])


  newText = doc.createTextNode('X')
  newBtn.appendChild(newText)
  newBtn.setAttribute('onclick', 'closeTask()')
  newBtn.setAttribute('id', 'close-btn')
  newSpan.insertBefore(newBtn, newSpan[0])


  newDiv.setAttribute('id', 'dialog-div')
  newDialog.insertBefore(newDiv, newDialog[0])

  newText = doc.createTextNode("TaskZ")
  newH1.appendChild(newText)
  newH1.setAttribute('id', 'dialog-title')
  newDiv.insertBefore(newH1, newDiv[0])

  /*   newDialog.appendChild(newBr, newDialog[0]) */
  newDiv = doc.createElement('div')
  newDiv.setAttribute('id', 'dialog-create')
  newDialog.insertBefore(newDiv, newDialog[0])

  newDivDiv.setAttribute('id', 'left-c-dialog')
  newDiv.insertBefore(newDivDiv, newDiv[0])

  newH3 = doc.createElement('h3')
  newText = doc.createTextNode('Color:')
  newH3.appendChild(newText)
  newH3.setAttribute('id', 'dialog-c-color')
  newDivDiv.insertBefore(newH3, newDivDiv[0])

  newInput = doc.createElement('input')

  newInput.setAttribute('type', 'color')
  newInput.setAttribute('id', 'dialog-c-inpcolor')
  newDivDiv.insertBefore(newInput, newDivDiv[0])

  newDivDiv = doc.createElement('div')
  newDiv.insertBefore(newDivDiv, newDiv[0])


  newH3 = doc.createElement('h3')

  newText = doc.createTextNode('Name:')
  newH3.appendChild(newText)
  newH3.setAttribute('id', 'dialog-c-name')
  newDivDiv.insertBefore(newH3, newDivDiv[0])

  newInput = doc.createElement('input')

  newInput.setAttribute('require', 'true')
  newInput.setAttribute('id', 'dialog-c-input')
  newDivDiv.insertBefore(newInput, newDivDiv[0])

  newH3 = doc.createElement('h3')

  newText = doc.createTextNode('Description:')
  newH3.appendChild(newText)
  newDivDiv.insertBefore(newH3, newDivDiv[0])

  newTextArea.setAttribute('id', 'dialog-c-textarea')
  newDivDiv.insertBefore(newTextArea, newDivDiv[0])


  newDiv = doc.createElement('div')
  newDialog.insertBefore(newDiv, newDialog[0])
  newDiv.setAttribute('id', 'dialog-div-btn')

  newBtn = doc.createElement('button')
  newText = doc.createTextNode('Criar Tarefa')
  newBtn.appendChild(newText)
  newBtn.setAttribute('id', 'dialog-button')
  newDiv.insertBefore(newBtn, newDiv[0])
}

function closeTask() {
  clear.innerHTML = ""
}