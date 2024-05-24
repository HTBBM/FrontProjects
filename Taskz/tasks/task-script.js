/*
function getCookie() {

  const todosCookies = document.cookie;
  
    if (todosCookies === "") {
      console.log("Não há cookies disponíveis.");
      return;
    } 



  let name = "Task";
  let decodedCookie = document.cookie
  let ca = decodedCookie.split(';')

  for (let i = 0; i < ca.length; i++) {
    let c = ca[i].trim();
    console.log(`trim: ${c}`)

    if (c.indexOf(name) == 0) {

      let cookieValue = c.substring(name.length, c.length)
      let parts = cookieValue.split('|')

      if (parts.length === 3) {

        return {

          name: parts[0],
          desc: parts[1],
          color: Number(parts[2])
        }
      }
    }
    return console.log("erro no cookie")
  }

  console.log(ca)
}

getCookie();
function listarCookies() {
  // Obtém todos os cookies como uma única string
  //  const todosCookies = document.cookie;

  // Verifica se há cookies
   if (todosCookies === "") {
    console.log("Não há cookies disponíveis.");
    return;
  }
 
  // Divide a string de cookies em um array de cookies

  // Cria um objeto para armazenar os cookies

  // Itera sobre cada cookie e armazena-o no objeto
  arrayDeCookies.forEach(cookie => {
    // Divide cada cookie em nome e valor
    const [nome, valor] = cookie.split("=");
    cookies[nome] = valor;
  });

  // Lista os cookies no console
  console.log("Cookies:");
  for (const [nome, valor] of Object.entries(cookies)) {
    console.log(`${nome}: ${valor}`);
  }
}

//listarCookies();

//let CookieData = getCookie();
//console.log("Name: ", CookieData.name)

function eraseComplexCookie() {
  document.cookie = "randomCookie=; Max-Age=-99999999; path=/";
}
 */


