/*=============== SHOW MENU ===============*/

const   navMenu = document.getElementById('nav-menu'),
        navToggle = document.getElementById('nav-toggle'),
        navClose = document.getElementById('nav-close');

// === MENU SHOW ====

/* Validate if constant exists */
    if(navToggle){
        navToggle.addEventListener('click', () =>{ 
        navMenu.classList.add('show-menu')
        })
    }
// ==== MENU HIDDEN =====

/* Validate if constant exists */
    if(navClose) {
        navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
        })
    }
/*=============== REMOVE MENU MOBILE ===============*/

const navLink = document.querySelectorAll('.nav-link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // Khi nhấp vào từng nav_link, sẽ xóa lớp show-menu
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
    const header = document.getElementById('header')
    // Khi scroll lớn hơn 50 chiều cao khung nhìn, hãy thêm lớp tiêu đề cuộn vào thẻ tiêu đề
    this.scrollY >= 50 ? header.classList.add('bg-header')
                       : header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

// const sections = document.querySelectorAll('section[id]')
// const scrollActive = () =>{
//     const scrollY = window.pageYOffset

//     sections.forEach(current =>{
//         const sectionHeight = current.offsetHeight,
//               sectionTop= current.offsetTop - 58,
//               sectionId = current.getAttribute('id'),
//               sectionsClass = document.querySelector('.nav_menu a[href*=' + sectionId + ']')

//         if(scrollY > section Top && scrollY <= sectionTop + sectionHeight){
//             sectionsClass.classList.add('active-link')
//         } else{
//             sectionsClass.classList.remove('active-link')
//         }
//     })
// }
// window.addEventListener('scroll', scrollActive)
let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset &&  top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            sec.classList.add('show-animate');
        }
        else {
            sec.classList.remove('show-animate');

        }
    })
}
/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
        const scrollUp = document.getElementById('scroll-up')
// When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup 
this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                    : scrollup.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

// song halloween 

// $(document).ready(function() {
//     const playButton = $('#playButton');
//     const audio = $('#myAudio')[0];
  
//     playButton.click(function() {
//       if (audio.paused) {
//         audio.play();
//         playButton.text('Dừng');
//       } else {
//         audio.pause();
//         playButton.text('Phát');
//       }
//     });
//   });
  