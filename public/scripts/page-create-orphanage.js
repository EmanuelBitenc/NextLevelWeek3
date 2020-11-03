//Criando mapa
const map = L.map("mapid").setView([-27.222633, -49.6455874], 15);

//
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

//Criando icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68]
});


let marker;

//create and maker maker
map.on('click', (event)=> {

    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value =lat;
    document.querySelector('[name=lng]').value =lng;

    // remove o ultimo click event
   marker && map.removeLayer(marker)

    //add icon tileLayer
    marker = L.marker([lat,lng], {icon})
    .addTo(map)
})

//adiconar campo de foto
function addPhotoField(){
    //pegar o container de fotos #images
const container = document.querySelector('#images');

    // pegar o coantainer para duplicar.new-images
    const fieldsContainer = document.querySelectorAll('.new-upload')

    //realizar o clone, da ultima imagem add
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)

    //verificar se ta vazio, se sim não adicionar ao container de imagens
    const input = newFieldContainer.children[0]

    if(input.value == ""){
        return
    } 


    //limpar campo
    input.value = ""

    //adiocnar o clone ao container de #images
    container.appendChild(newFieldContainer)
}

function deleteField(event){
    const span = event.currentTarget


    const fieldsContainer = document.querySelectorAll('.new-upload')

    if(fieldsContainer.length <= 1){
        //limpar valor do campo
        span.parentNode.children[0].value=""
        return
    }

    //deletar o campo
    span.parentNode.remove();
}

//troca do sim e não
function toggleSelect(event) {

    //retirar a classe active
    document.querySelectorAll('.button-select button')
    .forEach(function(button){
        button.classList.remove('active');
    })
    //colocar a classe active no botão clicado
    const button = event.currentTarget
    button.classList.add('active')

    //atualizar o input hidden com o valor selecionado
    const input = document.querySelector('[name="open_on_weekends"]')
    
    input.value = button.dataset.value
}