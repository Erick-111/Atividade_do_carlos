const modal = document.querySelector('.modal-container')
var input = document.querySelector("#name");
var texto = input.value;


function openModal() {
  modal.classList.add('active')
}

function closeModal() {
  modal.classList.remove('active')
}

function Soma(n1,n2){
  return n1+n2
}