const answerChoices = document.querySelectorAll('.answer_choice');
answerChoices.forEach( (answerChoice) => {
  answerChoice.addEventListener('click', () => {
    answerChoice.classList.add('is_clicked')
  })
})
// 一回クリックしたら他のやつはクリックできないようにする
let correct_html = ''