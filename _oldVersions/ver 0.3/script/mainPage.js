window.onhashchange = function(e) {
    const oldURL = e.oldURL
    const newURL = e.newURL
    const oldLink = document.querySelector(`.menu a[href='#${oldURL}']`)
    const newLink = document.querySelector(`.menu a[href='#${newURL}']`)
    oldLink && oldLink.classList.remove('selected')
    newLink && newLink.classList.add('selected')
}

// document.querySelectorAll('a').forEach(link => {
//     link.onclick = function(e) {
//         e.preventDefault()
//         fetch(link.href)
//         .then(resp => resp.text())
//         .then(html => conteudo.innerHTML = html)
//     }
//     }  )