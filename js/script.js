//alert('JS Carregado');

//Seleção de Document Object Model (DOM)

let btnMenu = document.querySelector('.btn-menu');
let menu = document.querySelector('.menu');

let links = document.querySelectorAll('.menu a'); //Array/Lista
//console.log(links);

//console.log(btnMenu);
//console.log(menu);

function manipularMenu(){
    //console.log('Função acionada');

    //add ou remove a classe menu-open
    menu.classList.toggle('menu-open');
    btnMenu.classList.toggle('x');
}

function fecharMenu(){
    menu.classList.remove('menu-open');
    btnMenu.classList.remove('x');
}

//Eventos -> Ações (Gatilhos) normalmente realizadas pelo usuário
btnMenu.addEventListener('click',manipularMenu);
//menu.addEventListener('click', fecharMenu);

//Estrutura de repetição que pega cada item do Array
links.forEach(function(link){
    //Para cada item do array que acionar o evento de click
    link.addEventListener('click',fecharMenu);
})

//Animações com GSAP

//HERO

gsap.from(".hero h1", {
    opacity: 0,
    x: -100,
    duration: 1.5,
});

gsap.from(".hero p:not(.slogan)", {
    opacity: 0,
    x: -100,
    duration: 1.5,
    delay: 0.5
});

gsap.from(".hero .container-btn", {
    opacity: 0,
    x: -100,
    duration: 1.5,
    delay: 1
});

//HERO

//SOBRE

gsap.from(".sobre-image, .sobre-content", {
    opacity: 0,
    x: 100,
    duration: 1.5,
    stagger: 0.5,

    scrollTrigger : {
        trigger: '.sobre',
        start: 'top, 70%'
    }
});

//SOBRE

//MISSÃO

gsap.from(".missao h2, .missao p, .missao .container-btn", {
    opacity: 0,
    x: -100,
    duration: 1.5,
    stagger: 0.5,

    scrollTrigger : {
        trigger: '.missao',
        start: 'top, 90%'
    }
});

//MISSÃO

//ARTISTAS

gsap.from(".artistas h2, .artistas p, .artistas figure", {
    opacity: 0,
    x: 100,
    duration: 1.5,
    stagger: 0.5,

    scrollTrigger : {
        trigger: '.artistas',
        start: 'top, 90%'
    }
});

//ARTISTAS

//AGENDE

gsap.from(".agende h2, .agende p, .agende .container-btn", {
    opacity: 0,
    x: -100,
    duration: 1.5,
    stagger: 0.5,

    scrollTrigger : {
        trigger: '.agende',
        start: 'top, 90%'
    }
});

//AGENDE

//DEPOIMENTOS

gsap.from(".depoimentos", {
    opacity: 0,
    duration: 2,

    scrollTrigger : {
        trigger: '.depoimentos',
        start: 'top, 90%'
    }
});

//DEPOIMENTOS

