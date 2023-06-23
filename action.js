const menuIcon = document.querySelector('#menuIcon');
const menuOpenIcon = document.querySelector('#menuOpenIcon');
const menuCloseIcon=document.querySelector('#menuCloseIcon');
const menuMobile=document.querySelector('.menu_mobile');
const body=document.getElementsByTagName('body')[0];


menuOpenIcon.addEventListener("click",()=>{
        menuCloseIcon.style.display='flex';
        menuOpenIcon.style.display='none';
        menuMobile.style.display='table-cell';
        console.log('open');
        body.style.overflow="hidden";
});

menuCloseIcon.addEventListener("click",()=>{
        menuCloseIcon.style.display='none';
        menuOpenIcon.style.display='flex';
        menuMobile.style.display='none';
        console.log('close');
        body.style.overflow="visible";

});