const options = {
    dragging:false,
    touchZoom:false,
    doubleClickZoom:false,
    scrollWheelZoom:false,
    zoomControl:false
}

// get values from html
const lat = document.querySelector('span[data-lat]').dataset.lat
const lng = document.querySelector('span[data-lng]').dataset.lng

//Criando mapa
const map = L.map('mapid', options).setView([lat,lng], 15);

//
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
.addTo(map);

//Criando icon
const icon = L.icon({
    iconUrl:"/images/map-marker.svg",
    iconSize:[58,68],
    iconAnchor:[29,68],
    popupAnchor:[170,2]
})

L.marker([lat,lng],{icon})
.addTo(map)

/*Galeria de imagens*/

function selectImage(event){
    const button = event.currentTarget

    const buttons = document.querySelectorAll(".images button")
    buttons.forEach(removeActiveClass)
//remove a classe active
    function removeActiveClass(button){
        button.classList.remove('active'); 
    }

//seleciona a imagem clicada
    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details .imagem ")

//atualiza a imagem clicada para
    imageContainer.src = image.src


//adiciona aclasse active na imagem
    button.classList.add('active')

}