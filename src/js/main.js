const scrollToTop = document.getElementById('scroll-to-top');
const definition = document.querySelector('.definition');
const aboutRecycling = document.getElementById('about-recycling');

const trashHierarchyTitle = document.querySelector('.trash-hierarchy .title');
const threeRFigures = document.querySelectorAll('.trash-hierarchy .ThreeR figure');

const someRecyclableTitleHead = document.querySelector('.some-recyclable .title h3');
const someRecyclableTitleHr = document.querySelector('.some-recyclable .title > hr');
const someRecyclableTitleDesc = document.querySelector('.some-recyclable .title .desc');
const someRecyclableFigures = document.querySelectorAll('.some-recyclable .materials figure');

const benefitsRecyclingTitleH3 = document.querySelector('.benefits-recycling .title h3');
const benefitsRecyclingTitleHr = document.querySelector('.benefits-recycling .title hr ');
const benefitsRecyclingTitleP = document.querySelector('.benefits-recycling .title p');
const benefitsRecycling = document.querySelectorAll('.benefits-recycling .benefit');

// Recycling Example
const recyclingExampleTitle = document.querySelector('.recycling-example .title h3');
const recyclingExampleHorizontalLine = document.querySelector('.recycling-example .title hr');
const recyclingExampleFigure = document.querySelector('.recycling-example figure');


const nav = document.querySelector('nav');

// Animation related with documents, except animation scrollTop above
window.addEventListener('scroll', function() {

    if(document.documentElement.scrollTop > 100 || document.body.scrollTop > 100 ) {
        nav.style.boxShadow = "0 1px 20px rgba(0, 0, 0, 0.2)";
    } else {
         nav.style.boxShadow = "0 0 0 rgba(0, 0, 0, 0)";
    }

    // scroll To Top
    if(document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        scrollToTop.style.display = "block";
    } else {
        scrollToTop.style.display = "none";
    }

    // someRecyclable Title Head
    if(document.body.scrollTop > 580 || document.documentElement.scrollTop > 580) {
        someRecyclableTitleHead.style.opacity = 1;
        someRecyclableTitleHr.style.opacity = 1;
        someRecyclableTitleHead.style.transform = "scale(1)";
        setTimeout(() => {
            someRecyclableTitleDesc.style.opacity = 1;
            for(let i = 0; i < someRecyclableFigures.length; i++) {
                setTimeout(() => {
                    someRecyclableFigures[i].style.opacity = 1;
                    someRecyclableFigures[i].style.transform = "scale(1)";
                }, (i + 1) * 600);
            }   
        }, 500);
    }

    // Benefits Of Recycling
    if(document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
        benefitsRecyclingTitleH3.style.opacity = 1;
        benefitsRecyclingTitleH3.style.transform = "scale(1)";
        benefitsRecyclingTitleHr.style.opacity = 1;
         setTimeout(() => {
            benefitsRecyclingTitleP.style.opacity = 1;
            for(let i = 0; i < benefitsRecycling.length; i++) {
               setTimeout(() => {
                    benefitsRecycling[i].style.opacity = 1;
                    benefitsRecycling[i].style.transform = "scale(1)";
                }, (i + 1) * 600);
            }   
        }, 500);
    }

    // Recycling's Examples
    if(document.body.scrollTop > 1300 || document.documentElement.scrollTop > 1300) {
        recyclingExampleTitle.style.opacity = 1;
        recyclingExampleTitle.style.transform = "scale(1)";
        recyclingExampleHorizontalLine.style.opacity = 1;
        setTimeout(function() {
            recyclingExampleFigure.style.opacity = 1;
        }, 500);
    }
});

scrollToTop.addEventListener('click', function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});


window.onload = function() {
    // About Reccycling
    setTimeout(function(){
        aboutRecycling.style.opacity = 1;
    }, 500);

    setTimeout(function(){
        definition.style.opacity = 1;
    }, 500 * 2);

    // Trash Hierachy
    setTimeout(() => {
        trashHierarchyTitle.style.opacity = 1;    
        for(let i = 0; i < threeRFigures.length; i++) {
                setTimeout(() => {
                    threeRFigures[i].style.opacity = 1;
                    threeRFigures[i].style.transform = "scale(1)";
                }, (i + 1) * 600);
        }
    }, 500 * 3);
}


const hamburgerMenu = document.querySelector(".hamburger-menu");
const navLinks = document.querySelector(".nav-links");

hamburgerMenu.addEventListener('click', function() {
    navLinks.classList.toggle("fade-left");
});

