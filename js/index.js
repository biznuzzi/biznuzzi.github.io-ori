/* 2019.11.14 kang */
/* index js */


$(document).ready(function () {
  imagefloatup();
});

function imagefloatup(){
  $(".img_intro").animate({
    "top": 110
  }, 1000, null, imagefloatdown);
}

function imagefloatdown(){
  $(".img_intro").animate({
    "top" :100
  }, 700, null, imagefloatup);
}