document.addEventListener("DOMContentLoaded", function(){
    var Accuse = document.createElement("h3")
    var accuseText = document.createTextNode('Accusation')
    Accuse.appendChild(accuseText)
    document.body.appendChild(Accuse)

    for (let i = 0; i < 100; i++) {
        document.body.appendChild(Accuse);
    }
})