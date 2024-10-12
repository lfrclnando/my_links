function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // get tag img
  const img = document.querySelector("#profile img")

  // replace the image
  if (html.classList.contains("light")) {
    // For light mode, add the light image
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Foto de perfil de homem sorrindo com pele parda e óculos de sol com um fundo na cor amarelo."
    )
  } else {
    // For dark mode, keep the normal image
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute(
      "alt",
      "Foto de perfil de homem sorrindo com pele parda e óculos de sol com um fundo na cor azul."
    )
  }  
}