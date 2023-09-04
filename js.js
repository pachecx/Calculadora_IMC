import { modal } from './modal.js'

const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')


form.onsubmit = (event) =>{
    event.preventDefault()

    const weight = inputWeight.value
    const height = inputHeight.value

    const result = IMC(weight, height)

    const message = `Seu IMC é de ${result}`

    modal.Message.innerText = message
    modal.open()
}


function IMC(weight, height){
    return (weight / ((height / 100) ** 2)).toFixed(2)
}

window.addEventListener('keydown', handlekeydown)

 function handlekeydown(event){
     if (event.key === 'Escape'){
            modal.close()
        }   
}

 











/*form.onsubmit = (event) =>{
    event.preventDefault()

    weight = inputWeight.value
    height = inputHeight.value

    const result = IMC(weight, height)

    const message = `Seu IMC é de ${result}`

    modalMessenger.innerText = message
    modalWrapper.classList.add('open')

}

btnClose.onclick = () =>{
    modalWrapper.classList.remove('open')
}

function IMC(weight, height){
    return (weight / ((height / 100) ** 2)).toFixed(2)
}
*/
