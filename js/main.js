const navBtn = document.querySelector('.hamburger');
const footerYear = document.querySelector('.footer-year');
const nav = document.querySelector('.nav');
const allNavItems = document.querySelectorAll('.nav__item');
const background = document.querySelector('.top');
const imgs = document.querySelectorAll('.realizations__box-img');
const wrapperNav = document.querySelector('.wrapperNav');
const block = document.querySelector('.block');
const cancel = document.querySelector('.cancel');

const swiper = new Swiper('.swiper', {
    autoplay: {
        delay: 5000,
      },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

const handleNav = () => {
    navBtn.classList.toggle('is-active');
    nav.classList.toggle('nav--active');
    wrapperNav.classList.toggle('wrapperNav--active');

    allNavItems.forEach(item=>{
        item.addEventListener('click', ()=>{
            navBtn.classList.remove('is-active');
            nav.classList.remove('nav--active');
            wrapperNav.classList.remove('wrapperNav--active');
        });
    });
    
}

const show = e => {
  //const Y = window.scrollY;
 // console.log(Y);
 cancel.classList.toggle('active');
 block.classList.toggle('shadow');

  e.target.classList.toggle('realizations__box-img-fit');
  e.target.classList.toggle('realizations__box-img');
}
const exit = () => {
  const NewImg = document.querySelector('.realizations__box-img-fit');
  NewImg.classList.toggle('realizations__box-img-fit');
  NewImg.classList.toggle('realizations__box-img');
  block.classList.toggle('shadow');
  cancel.classList.toggle('active');
}
const hideNav = () => {
    nav.classList.remove('nav--active');
    navBtn.classList.remove('is-active');
    wrapperNav.classList.remove('wrapperNav--active');
}

window.addEventListener('scroll', hideNav);

const handleCurrentYear = () => {
    const year = (new Date).getFullYear();
    footerYear.innerText = year;
}

/*const scrollNav= ()=> {
  const y = window.scrollY;
  if (y>600) {
    wrapperNav.style.backgroundColor="#fff";
  }
  else {
    wrapperNav.style.backgroundColor="rgba(255, 255, 255, 0.5)";
  }
  }*/


for (let img of imgs) {
  img.addEventListener("click", show);
}

handleCurrentYear();

cancel.addEventListener('click', exit);
//window.addEventListener('scroll', scrollNav);

navBtn.addEventListener('click', handleNav);