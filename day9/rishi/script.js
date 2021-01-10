const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav-menu');

menu.addEventListener('click', function () {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active')
})

document.querySelector('#view-model').addEventListener('click', function () {
//     const images = document.querySelector('#images').position().top;

//     document.querySelector('html, body').animate(
//         {
//             scrollTop: images
//         },
//         900
//     );
    const images = document.querySelector('#images');
    images.scrollIntoView();
});
