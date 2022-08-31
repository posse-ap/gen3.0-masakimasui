{
  const answers = [
    "約79万人",
    "X-TECH",
    "Internet of Things",
    "Society5.0",
    "Web3.0",
    "約5倍",
  ];

  // クイズごとに1回だけクリックを可能にするプログラム
  for (let quizNumber = 1; quizNumber <= 6; quizNumber++) {
    answerChoices = document.querySelectorAll(".quiz_number_" + quizNumber);
    let clickNumber = 0;

    answerChoices.forEach((answerChoice) => {
      answerChoice.addEventListener("click", () => {
        if (clickNumber === 0) {
          clickNumber++;
          answerChoice.classList.add("is_clicked");

          let correctExplanation = `<div class="correct_explanation">
          <div class="correct_in_text">正解！</div>
          <div class="answer_explanation_sentence">
            <div class="answer_explanation_A">A</div>
            <div class="answer_explanation_content">${answers[quizNumber - 1]}</div>
          </div>
      </div>`;
      console.log(answerChoice)
          //クリックしたら上記のHTMLを表示する
          //⬇️insertAdjacentHTMLでどこの下に置きたいかを表示するために取得した要素
          const answerText = document.querySelectorAll(".answer_choices");
          // クリックしたらHTMLを表示する
          answerText[quizNumber - 1].insertAdjacentHTML(
            "afterend",
            correctExplanation
          );
        }
      });
    });
  }
}
