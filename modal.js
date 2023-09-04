export const modal = {

    Message: document.querySelector('.modal .title span'),
    Wrapper: document.querySelector('.modal-wrapper'),
    buttonClose: document.querySelector('.modal .title .close'),

    open(){
        modal.Wrapper.classList.add('open')
    },

    close(){
        modal.Wrapper.classList.remove('open')
    }
}

modal.buttonClose.onclick = () =>{
    modal.close()
}
 