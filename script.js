function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // if (html.classList.contains("light")) {
  //  html.classList.remove("light")
  //} else {
  //  html.classList.add("light")
  //}

  //pegar a tag da imagem
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver em light mode:
    img.setAttribute("src", "./assets/assets/Ale-light.png")

    //se estiver em dark mode
  } else {
    img.setAttribute("src", "./assets/assets/Ale.png")
  }
}
