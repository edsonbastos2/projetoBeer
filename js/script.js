// Animação modal

const imagens = document.querySelectorAll('.card-img img');
const modal = document.querySelector('.modal');
const modalImg = document.querySelector('#modal-img');
const modalContainer = document.querySelector('.modal-container');
const btnClose = document.querySelector('#btn-close');

let srcVal = "";

function handleClick(index) {
  srcVal = imagens[index].getAttribute('src');
  modalImg.setAttribute('src', srcVal);
  modal.classList.toggle('modal_active');
}

imagens.forEach((imagem, index) => {
  imagem.addEventListener('click', () => handleClick(index))
})

function handleClickClose() {
  modal.classList.toggle('modal_active');
}

function cliqueForaModal(event) {
  if (event.target === this) {
    handleClickClose(event)
  }
}

btnClose.addEventListener('click', handleClickClose);
modalContainer.addEventListener('click', cliqueForaModal);