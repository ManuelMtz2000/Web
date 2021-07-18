const btn = document.querySelector('#btnMenu');
const menu = document.querySelector("#menu");

btn.addEventListener('click', () =>{
    menu.classList.toggle('hidden');
})

anime({
    targets: '.tittleAnime',
    scale: 1.1,
    duration: 2000
  });

anime({
    targets: '.descripAnime',
    scale: 1.1,
    duration: 2000
});

anime({
    targets: '#main-logo',
    scale: 1.1,
    duration: 2000,
});

let btnMenu = anime({
    targets: '#btnMenu',
    rotate: {
        value: '1turn',
    },
    duration: 1500,
    autoplay: false,
});

document.querySelector("#btnMenu").onclick = btnMenu.restart;

let whiteL = document.querySelector('#white-logo')

function animateButton(scale, duration, elasticity) {
    anime.remove(whiteL);
    anime({
      targets: whiteL,
      scale: scale,
      duration: duration,
      elasticity: elasticity
    });
}

function enterButton() { animateButton(1.2, 800, 400) };
function leaveButton() { animateButton(1.0, 600, 300) };
  
whiteL.addEventListener('mouseenter', enterButton, false);
whiteL.addEventListener('mouseleave', leaveButton, false);

let mostrar = (language) => {
    let tittle = '';
    let desc = '';
    if(language === 'js'){
        tittle = 'Javascript';
        desc = `JavaScript es uno de los lenguajes más populares en el desarrollo de páginas Web, 
        gracias a su sencillez y amplia variedad de Framework con los que puedes trabajar a partir 
        de este lenguaje.`;
    } else if(language === 'java'){
        tittle = 'Java';
        desc = `Java es un potente lenguaje de programación dominante en equipos de sobremesa, 
        teléfonos android e incluso en la Web, además de ser uno de mis lenguajes preferidos en 
        el ámbito de escritorio.`;
    } else if(language === 'laravel'){
        tittle = 'Laravel';
        desc = `Laravel es uno de los frameworks más utilizados en el ámbito de Php, con una 
        filosofía de evitar una mezcla de código en los proyectos. Es uno de los frameworks 
        populares para el desarrollo de aplicaciones web.`;
    } else if(language === 'php'){
        tittle = 'Php';
        desc = `Php es otro de los lenguajes para desarrollo Web más populares, con una alta 
        presencia en el Back-End y con gran influencia en múltiples Framework.`;
    }
    document.getElementById("language").innerHTML = `<div class="text-white text-3xl whitespace-normal font-montserrat font-bold" id="tittleTar">${tittle}</div>
    <div class="text-white font-montserrat whitespace-normal" id="descTar">${desc}</div>`;
}

const scrollElements = document.querySelectorAll(".js-scroll");

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el)
    }
  })
}

window.addEventListener("scroll", () => {
    handleScrollAnimation();
});

const button = document.querySelector(".menu-el");
const scrollElement = window.document.scrollingElement ||
window.document.body ||
window.document.documentElement;

button.addEventListener('click', () => {
    anime({
        targets: scrollElement,
        scrollTop: 0,
        duration: 500,
        easing: 'easeInOutQuad'
    });
})
