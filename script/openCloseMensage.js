var openMensage = 0
function openCloseMensage() {
    if (open == 1) {
        document.querySelector(".coFormContact").style.left = -600 + "px"
        open = 0
    } else {
        document.querySelector(".coFormContact").style.left = 5 + "vw"
        open = 1
    }
}