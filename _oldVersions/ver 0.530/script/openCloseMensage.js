var openMensage = 0
function openCloseMensage() {
    if (openMensage == 1) {
        document.querySelector(".coDivContact").style.display = "none"
        openMensage = 0
    } else {
        document.querySelector(".coDivContact").style.display = "block"
        openMensage = 1
    }
}