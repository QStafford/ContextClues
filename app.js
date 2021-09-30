document.addEventListener("DOMContentLoaded", function () {
    var Accuse = document.createElement("h3")
    var accuseText = document.createTextNode('Accusation')
    Accuse.appendChild(accuseText)
    document.body.appendChild(Accuse)
//Needs Loops and click event Listener
    var i = 0
    
    while (i < 100) {
        i++
        document.body.append(Accuse)
       console.log(i)
    }


    var friends = ['James', "Jamie", 'Jane', 'Johnson', 'Jonathan']
    var location = ['Alabama', 'Georgia', 'Mississippi', 'Florida', 'Tennessee', 'New York', 'Texas', 'California', 'New Mexico', 'Nevada']
    var weapons = ['Knife', 'feather', 'paper clip', 'shoe', 'glasses', 'bookmark', 'book', 'pepper', 'salt shaker', 'jacket', 'straw', 'Big Mac', 'cardboard', 'Shopping cart', 'Mouse Trap', 'Slipper', 'Phone', 'Anime', 'BloodHound', 'Necklace']

})