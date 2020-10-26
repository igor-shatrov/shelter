"use strict";

document.querySelector('#logo').onclick = function () {
  document.location.href = '../main/index.html';
}; //mobile-menu


document.querySelector('#burger').addEventListener('click', function () {
  document.querySelector('#mobile-menu').style.right = 0;
  setTimeout(function () {
    document.querySelector('#under-burger').style.transform = "rotate(90deg)";
  }, 500);
  document.querySelector('#cover-elem').style.display = "block";
});
document.querySelector('#under-burger').addEventListener('click', closeMenu);
document.querySelector('#cover-elem').addEventListener('click', closeMenu);
document.querySelector('#our-pets').addEventListener('click', closeMenu);

function closeMenu() {
  document.querySelector('#under-burger').style.transform = "rotate(0deg)";
  setTimeout(function () {
    document.querySelector('#mobile-menu').style.right = '-320px';
  }, 500);
  document.querySelector('#cover-elem').style.display = "none";
}