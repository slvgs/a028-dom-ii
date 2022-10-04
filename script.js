function AdicionaItem (){
    const botao = document.getElementById("botao")
    

    let container = document.getElementById("container")
    let meuitem = document.createElement("article")
    meuitem.innerHTML = "Adicionando este item"
    container.appendChild(meuitem)
    meuitem.setAttribute("class", "item")
    
    meuitem.style.background = "orange"
    
}
function removeItem(){
    event.target.remove()
}



AdicionaItem()

