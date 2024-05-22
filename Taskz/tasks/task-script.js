/* ----------------------------------- COOKIES ----------------------------------- */

let cookieID = 1;

function setCookie(name, desc, color) {
  let cookieValue = `${cookieID}|${name}|${desc}|${color}`
  doc.cookie = `randomCookie=` + encodeURIComponent(cookieValue) + "; path=/"
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

let CookieData = getCookie();
//console.log("Name: ", CookieData.name)

function eraseComplexCookie() {
  document.cookie = "randomCookie=; Max-Age=-99999999; path=/";
}

