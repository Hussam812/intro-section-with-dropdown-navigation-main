"use strict";

/***** ADD  EVENT ELEMENT*/

const addEventToElement = (elem, type, callback) => {
    if (elem.length > 1){
        elem.forEach(element => {
            element.addEventListener(type, callback);
        });
    }else {
        elem.addEventListener(type, callback);
    }
};


const togglerBtn = document.querySelector("[data-toggler-btn]");
const navberList = document.querySelector("[data-nav]");

const togglerAction = () => {
    togglerBtn.classList.toggle("active");
    navberList.classList.toggle("active");

};

addEventToElement(togglerBtn, "click", togglerAction);



const arrows =  document.querySelectorAll("[data-arrow]");
const navLists =  document.querySelectorAll("[data-nav-link]");


navLists.forEach( (nav) =>{

    nav.addEventListener("click", () =>{
        navLists.forEach( (n) =>{
            if (nav !== n){
                n.classList.remove("active");
            }
        });
        nav.classList.toggle("active");
        nav.firstElementChild.classList.toggle("active");

    });
})
