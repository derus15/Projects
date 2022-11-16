let button_1 = document.querySelector('.button_1')
let score_num = document.querySelector('.score_num')
let figure = document.querySelector('figure')
let en_score = document.querySelector('.en_num')
let level_num = document.querySelector('.level_num')


button_1.onclick = function() {
    let counter = score_num.textContent
    score_num.textContent++;
    if (counter % 10 === 0 && counter !== '0') {
        figure.classList.toggle('hide')
        en_score.textContent++;}
    if (counter % 50 === 0 && counter !== '0') {
        level_num.textContent++;
        }
}

