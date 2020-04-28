var open = 0
function openClose() {
    if (open == 1) {
        document.querySelector(".sidebarMenu").style.right = -155 + "px"
        document.querySelector(".menu-background").style.right = -10000 + "px"
        open = 0
    } else {
        document.querySelector(".sidebarMenu").style.right = 0
        document.querySelector(".menu-background").style.right = 0
        open = 1
    }
}

