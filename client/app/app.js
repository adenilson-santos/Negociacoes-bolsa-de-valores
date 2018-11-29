const controller = new NegotiationController;

let form = document.querySelector(".form");

form.addEventListener('submit', controller.addNegotiation.bind(controller) );

let apagar = document.querySelector('#botao-apaga');

apagar.addEventListener('click', controller.delete.bind(controller));