"use strict";
const hamburger=document.querySelector('.hamburger');
const navMenu=document.querySelector('.part2');
const home=document.querySelector('.home');
hamburger.addEventListener('click',()=>{
    navMenu.style.display='block';
})

home.addEventListener('click',()=>{
//navMenu.style.display='none';
})