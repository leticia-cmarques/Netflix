


let botaoSom = document.querySelector(".botao-som")
let video = document.querySelector(".video")
let som = document.querySelector(".video")
let botao1 = document.querySelector(".link-info")
let modal = document.querySelector(".modal")
let botao2 = document.querySelector(".link-assistir")
let audio = document.querySelector(".audio")

botaoSom.addEventListener("click", ligaSom)
som.addEventListener("click", desligaSom)

function ligaSom(){
    video.muted = false
}

function desligaSom(){
    video.muted = true
}

botao1.addEventListener("click", mostrarModal)
modal.addEventListener("click", esconderModal)

    function mostrarModal(){
        modal.style.display = "block"
    }

function esconderModal(){
    modal.style.display = "none"
}
botao2.addEventListener("click", playAudio)
botao2.addEventListener("click", desligaSom)

function playAudio(){
    audio.play()
}



