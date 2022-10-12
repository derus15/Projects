let button_1 = document.querySelector('.button_1')
let class_1 = document.querySelector('.score_num')
let img = document.querySelector('img')
let en_score = document.querySelector('.en_num')
let level_num = document.querySelector('.level_num')


button_1.onclick = function() {
    let counter = class_1.textContent
    class_1.textContent++;
    if (counter % 10 === 0 && counter !== '0') {
        img.classList.toggle('hide')
        en_score.textContent++;}
    if (counter % 50 === 0 && counter !== '0') {
        level_num.textContent++;
        }
}

