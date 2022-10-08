let button_1 = document.querySelector('.button_1')
let class_1 = document.querySelector('.score_num')
let hide = document.querySelector('.hide')
let img = document.querySelector('img')
let en_score = document.querySelector('.en_score')

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

button_1.onclick = function() {
  class_1.textContent ++;
   if (class_1.textContent === '10') {
    img.classList.add('hide')
    en_score.textContent ++ ;

  }
};

