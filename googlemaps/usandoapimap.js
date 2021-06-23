var map;

function iniciarMapa(){
    divdomapa = document.getElementById("map");
    propriedadeDoMapa = {
        center: {lat: 0, lng: 0},
        zoom: 5
    }
    map = new google.maps.Map(divdomapa, propriedadeDoMapa);

    const botaoCoordenadas = document.createElement("button");
    botaoCoordenadas.textContent = "Mudar Coordenadas";
    map.controls[google.maps.ControlPosition.TOP_CENTER].push(botaoCoordenadas);
    botaoCoordenadas.addEventListener("click", mudarCoordenadas);
    
    const inputLat = document.createElement("input");
    map.controls[google.maps.ControlPosition.TOP_CENTER].push(inputLat);
    

    //locationButton.classList.add("custom-map-control-button");
    
}

function mudarCoordenadas(){
    var latitude = parseFloat(document.getElementById("latitude").value);
    var longitude = parseFloat(document.getElementById("longitude").value);
    posicao = {lat: latitude, lng: longitude};
    map.setCenter(posicao);
    new google.maps.Marker({position: posicao, map: map}); 
}

function aumentarZoom(){
    var x = map.getZoom();
    x = x + 1;
    map.setZoom(x);
}

function diminuirZoom(){
    var x = map.getZoom();
    x = x - 1;
    map.setZoom(x);
}