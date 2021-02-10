/* Função de clique que abre e fecha menu mobile */

let c = (e)=>  document.querySelector(e);/* Retorna a seleção do elemento 'e' */
let cs = (el)=>  document.querySelectorAll(el);/* Retorna a seleção do elemento 'e' */

c('.botao-mobile').addEventListener('click',function () {
    if (
        c('.loguin-mobile').style.display == 'flex' &&
        c('.menu').style.display == 'block')
        
        { c('.loguin-mobile').style.display = 'none';
        c('.menu').style.display = 'none';
    }
    else{
        c('.loguin-mobile').style.display = 'flex';
        c('.menu').style.display = 'block';
    }
})

/*MUDA SLIDES*/
let totalSlides = document.querySelectorAll('.slide-item').length;
let larguraSlide = c('.slide-item').clientWidth;
c('.slides-todos').style.width = `${totalSlides * larguraSlide}px`;

let slideAtual = 0;

function slideAuto() {
    slideAtual++;
    if (slideAtual > totalSlides -1) {
        slideAtual = 0;
    }
    upDate();
};

cs('.bola-slide').forEach((e)=>{
    e.addEventListener('click', (e)=>{

        c('.bola-slide.slide-active').classList.remove('slide-active');
        e.target.classList.add('slide-active');
        upDateSlide();
    });
});

function upDateSlide() {
    slideAtual = parseInt( c('.bola-slide.slide-active').getAttribute('data-key'));
    let moveSlide = larguraSlide * slideAtual;
    c('.slides-todos').style.marginLeft= `-${moveSlide}px`;
}

function upDate() {
    let moveSlide = larguraSlide * slideAtual;
    c('.slides-todos').style.marginLeft= `-${moveSlide}px`;
}

setInterval(slideAuto, 4000);
