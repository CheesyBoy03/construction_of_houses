"use strict";

var Popup = function Popup() {
  var popup = document.querySelector('.popup');
  var body = document.querySelector('body');

  if (popup.classList.contains('close-popup')) {
    popup.classList.remove('close-popup');
    body.classList.add('block-body');
  } else {
    popup.classList.add('close-popup');
    body.classList.remove('block-body');
  }

  ;
};