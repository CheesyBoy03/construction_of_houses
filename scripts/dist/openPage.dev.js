"use strict";

var openPage = function openPage(_class) {
  var open = document.querySelector('.active-tab');
  var page = document.querySelector(".".concat(_class));

  if (open) {
    open.classList.remove('active-tab');
  }

  page.classList.add('active-tab');
};