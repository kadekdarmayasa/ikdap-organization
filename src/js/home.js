const homeTitle = document.querySelector('.title');
const desc = document.querySelector('.desc');
const img = document.querySelector('img');
const button  = document.querySelector('a');


window.addEventListener('load', function() {

    setTimeout(() => img.style.opacity = 1 , 500)

    setTimeout(function() {
        homeTitle.style.opacity = 1;
    }, 1000);

    setTimeout(() => desc.style.opacity = 1, 1500);
    setTimeout(() => button.style.opacity = 1 , 1800)
}); 