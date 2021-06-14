function recuperarPs(){
    var paragrafos = document.getElementsByTagName("p");
    var i;
    for (i=0; i<paragrafos.length; i++){
        alert(paragrafos[i].innerHTML);
    } 
}

function mudarCorPlanoDeFundo(){
    var paragrafos = document.getElementsByTagName("p");
    var i;
    var cores = ["blue", "red", "yellow", "green"]
    for (i=0; i<paragrafos.length; i++){
        paragrafos[i].style.backgroundColor = cores[i];
    } 
}



function adicionarClasse(){
    var paragrafos = document.getElementsByTagName("p");
    var i;
    for (i=0; i<paragrafos.length; i++){
        paragrafos[i].classList.add(paragrafos[i].id);
    } 
}

function exibir(){
    /*var elementosOcultos = document.getElementsByClassName("oculto");
    while (elementosOcultos.length > 0){
        elementosOcultos[0].classList.remove("oculto");
    }*/

    var elementoOculto = document.querySelector("ul li.oculto");
    elementoOculto.classList.remove("oculto");
}

function criar(){
    var item = document.createElement("li");
    item.innerHTML = "Item 4";
    document.querySelector("ul").appendChild(item);
}

