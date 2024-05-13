const doc = document;
const docStatus = doc.getElementById('status');
const title = doc.getElementById('version');
const container = doc.getElementById('container');


let newDiv = doc.createElement('div')
let newH1 = doc.createElement('h1')
let newImg = doc.createElement('img')
let newP = doc.createElement('p')

let locate_elem = doc.getElementById('container')

const server = "35.199.99.17:25565";
const URL = `https://api.mcsrvstat.us/3/${server}`;
let version = "....";

fetch(URL)
  .then(response => response.json())
  .then(APIres => {
    if (APIres.online) {
      console.log("Servidor Online");
      console.log(`Players Online: ${APIres.players.online}, ${APIres.version}`)

      docStatus.style.color = "#2eff62"
      docStatus.innerText = "Online"

      doc.getElementById('p-total').innerText = `Total: ${APIres.players.online}`

      if (APIres.players.online > 0) {
        const pessoas = APIres.players.list
        console.log(pessoas[0])

        for (let i = 0; i < pessoas.length; i++) {



          console.log(pessoas[i].name)

          textName = doc.createTextNode("");

          newDiv = doc.createElement('div')
          newH1 = doc.createElement('h1')
          newImg = doc.createElement('img')
          newP = doc.createElement('p')

          locate_elem = doc.getElementById('container')


          newDiv.setAttribute('class', 'player')
          newDiv.setAttribute('id', `${pessoas[i].name}`)
          /* newDiv.setAttribute('id', i) */
          locate_elem.insertBefore(newDiv, locate_elem.children[1])

          locate_elem = doc.getElementById(`${pessoas[i].name}`)
          newImg.setAttribute('class', 'img-player')
          /* newImg.setAttribute('id', `img-${i}`) */
          newImg.setAttribute('id', `img-${pessoas[i].name}`)
          newImg.setAttribute('src', `https://mc-heads.net/avatar/${pessoas[i].name}/200/`)
          locate_elem.insertBefore(newImg, locate_elem.children[1])

          newDiv = doc.createElement('div')
          newDiv.setAttribute('class', 'info-player')
          /* newDiv.setAttribute('id', `infoP-${i}`) */
          newDiv.setAttribute('id', `infoP-${pessoas[i].name}`)
          locate_elem.insertBefore(newDiv, locate_elem.children[1])

          newH1.setAttribute('class', 'nome-p')
          /* newH1.setAttribute('id', `nome-${pessoa}`) */
          newH1.setAttribute('id', `nome-${pessoas[i].name}`)

          locate_elem = doc.getElementById(`infoP-${pessoas[i].name}`)

          newH1.appendChild(doc.createTextNode(`${pessoas[i].name}`))
          locate_elem.insertBefore(newH1, locate_elem.children[0])

          newP.setAttribute('class', 'uuid-p')
          newP.setAttribute('id', `uuid-${pessoas[i].name}`)

          newP.appendChild(doc.createTextNode(`${pessoas[i].uuid}`))
          locate_elem.insertBefore(newP, locate_elem.children[1])



        }
      }
      else {
        console.log("Não tem ninguem")
      }

      function createNewPlayer() {

        textName = doc.createTextNode("");

        newDiv = doc.createElement('div')
        newH1 = doc.createElement('h1')
        newImg = doc.createElement('img')
        newP = doc.createElement('p')

        locate_elem = doc.getElementById('container')


        newDiv.setAttribute('class', 'player')
        newDiv.setAttribute('id', 'brunogamernvbr')
        /* newDiv.setAttribute('id', i) */
        locate_elem.insertBefore(newDiv, locate_elem.children[1])

        locate_elem = doc.getElementById('brunogamernvbr')
        newImg.setAttribute('class', 'img-player')
        /* newImg.setAttribute('id', `img-${i}`) */
        newImg.setAttribute('id', `img-brunogamernvbr`)
        locate_elem.insertBefore(newImg, locate_elem.children[1])

        newDiv = doc.createElement('div')
        newDiv.setAttribute('class', 'info-player')
        /* newDiv.setAttribute('id', `infoP-${i}`) */
        newDiv.setAttribute('id', `infoP-brunogamernvbr`)
        locate_elem.insertBefore(newDiv, locate_elem.children[1])

        newH1.setAttribute('class', 'nome-p')
        /* newH1.setAttribute('id', `nome-${pessoa}`) */
        newH1.setAttribute('id', `nome-brunogamernvbr}`)

        locate_elem = doc.getElementById(`infoP-brunogamernvbr`)

        newH1.appendChild(doc.createTextNode("brunogamernvbr"))
        locate_elem.insertBefore(newH1, locate_elem.children[0])

        newP.setAttribute('class', 'uuid-p')
        newP.setAttribute('id', 'uuid-brunogamernvbr')

        newP.appendChild(doc.createTextNode("uuid"))
        locate_elem.insertBefore(newP, locate_elem.children[1])


      }

      //createNewPlayer()


    }


    else {
      console.log("Server Offline")

      docStatus.style.color = "#ff2b52"
      docStatus.innerText = "Offline"
    }
    title.innerText = APIres.version;

  })
  .catch(error => console.log("Erro ao Processar JSON", error));

