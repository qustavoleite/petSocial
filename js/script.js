// function menuShow() {
//   let menuMobile = document.querySelector('.mobile-menu')
//   if (menuMobile.classList.contains('open')) {
//     menuMobile.classList.remove('open')
//     document.querySelector('.icon').src = './assets/hamburguer.svg'
//   } else {
//     menuMobile.classList.add('open')
//     document.querySelector('.icon').src = './assets/x.svg'
//   }
// }

// Sua função menuShow existente
function menuShow() {
  let menuMobile = document.querySelector('.mobile-menu');
  if (menuMobile.classList.contains('open')) {
    menuMobile.classList.remove('open');
    document.querySelector('.icon').src = './assets/hamburguer.svg';
  } else {
    menuMobile.classList.add('open');
    document.querySelector('.icon').src = './assets/x.svg';
  }
}

// Adicionando evento de clique para fechar o menu
document.querySelectorAll('.menu-item a').forEach(item => {
  item.addEventListener('click', () => {
    // Fecha o menu
    menuShow();
  });
});


const images = document.querySelectorAll('.carousel-images img')
let currentIndex = 0

function showNextImage() {
  images[currentIndex].classList.remove('active')
  currentIndex = (currentIndex + 1) % images.length
  images[currentIndex].classList.add('active')
}

setInterval(showNextImage, 3000)


