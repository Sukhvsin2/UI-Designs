"use strict";

var listItems = document.querySelectorAll('li');
var photos = document.querySelectorAll('img');
listItems.forEach(function (item, i) {
  // item.addEventListener('click', () => {
  //     photos[i].classList = 'intro';
  // })
  item.addEventListener('mouseenter', function () {
    photos[i].classList = 'intro';
  });
  item.addEventListener('mouseleave', function () {
    photos[i].classList.remove('intro');
  });
  item.addEventListener('mousemove', function (e) {
    photos[i].style.left = e.clientX * 0.5 + 'px'; // photos[i].style.top = e.clientY * 0.5 + 'px'
  });
});