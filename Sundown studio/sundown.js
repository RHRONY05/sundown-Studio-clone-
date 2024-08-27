/* access main div using query selector, this code was copied from github*/
const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});
// smoth scrolling only works if the height and width is not set

// This part is for fixed image

let fixedImg = document.querySelector(".fixed-img");
let product = document.querySelector(".product-box");
let allProducts = document.querySelectorAll(".products")

// console.log(allProducts[0].getAttribute("data-image"));//Here, data-image is a cutomized attribute

function productAnimation() {
    product.addEventListener("mouseenter", () => {
        fixedImg.style.display = "block";
    })
    product.addEventListener("mouseleave", () => {
        fixedImg.style.display = "none";
    })

    // This is so much important(Adding video and img on floating box)

    allProducts.forEach(function (evt, idx) {
        // console.log(idx, "=", evt);

        if (idx == 3 || idx == 4) {
            evt.addEventListener("mouseenter", () => {
                let source = evt.getAttribute('data-image');
                fixedImg.style.backgroundImage = `url(${source})`;
            })
        }
        else {
            evt.addEventListener("mouseenter", () => {
                let source = evt.getAttribute('data-image');
                fixedImg.innerHTML = "";
                let video = document.createElement('video');
                video.src = source;
                video.autoplay = true;
                video.muted = true;
                video.loop = true;
                video.style.width = '25vw';
                video.style.height = '30vw';
                video.style.objectFit = 'cover';
                video.style.borderRadius = '1vw'

                fixedImg.appendChild(video);
            })
            evt.addEventListener("mouseleave", () => {
                fixedImg.innerHTML = "";
            })
        }
    });
}
productAnimation();
console.log("Hello");
// Swiper js
var swiper = new Swiper(".mySwiper", {
    cssMode: true,
    // navigation: {
    //     nextEl: ".swiper-button-next",
    //     prevEl: ".swiper-button-prev",
    // },
    // pagination: {
    //     el: ".swiper-pagination",
    // },
    mousewheel: true,
    keyboard: true,
});

// Menu
let nav = document.querySelector("nav");
let menu = document.querySelector(".menu");
let menuPage = document.querySelector(".menu-page");
let logo = document.querySelector("nav img");
let flag = 1;

menu.addEventListener("click", () => {
    if (flag) {
        menuPage.style.top = 0;
        flag = 0;
        logo.style.opacity = 0;
    }
    else {
        menuPage.style.top = '-100%';
        flag = 1;
        logo.style.opacity = 1;
    }
});

//Loading Animation
let load = document.querySelector("#loader");
setTimeout(()=>{
    load.style.top = '-100%';
},4000);