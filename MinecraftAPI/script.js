const doc = document;

const docStatus = doc.getElementById('status');

const title = doc.getElementById('version');

const server = "35.199.99.17:25565";
const URL = `https://api.mcstatus.io/v2/status/java/${server}`;
let version = "....";

fetch(URL)
  .then(response => response.json())
  .then(APIres => {
    if (APIres.online) {
      console.log("Servidor Online");
      console.log(`Players Online: ${APIres.players.online}, ${APIres.players.list}. ${APIres.version}`)

      docStatus.style.color = "#2eff62"
      docStatus.innerText = "Online"

      doc.getElementById('p-total').innerText = `Total: ${APIres.players.online}`

    }
    else {
      console.log("Server Offline")

      docStatus.style.color = "#ff2b52"
      docStatus.innerText = "Offline"
    }
    title.innerText = APIres.version.name_clean;

  })
  .catch(error => console.log("Erro ao Processar JSON", error));



