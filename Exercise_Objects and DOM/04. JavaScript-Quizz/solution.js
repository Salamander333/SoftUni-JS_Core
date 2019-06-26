function solve() {
  let questions = document.getElementsByTagName('section');
  let currentQuestion = 1;
  let rightAnswers = 0;

  let correctAnswers = ['onclick', 'JSON.stringify()', 'A programming API for HTML and XML documents'];

  let options = document.getElementsByTagName('p');
  for(let option of options) {
    option.addEventListener('click', onclick)
  }

  function onclick() {
    let answer;
    switch (currentQuestion) {
      case 1:
      case 2:
      case 3:
          answer = this.textContent;
    }

    if (currentQuestion < 4) {
      if (answer === correctAnswers[currentQuestion - 1]) {
        rightAnswers++;
      }
      questions[currentQuestion - 1].style.display = 'none';
      if (currentQuestion < 3) {
        questions[currentQuestion].style.display = 'block';
      }
      currentQuestion++;
    }
    if (currentQuestion === 4) {
      let resultDiv = document.getElementById('results').style.display = 'block';
      let result = document.getElementsByTagName('h1')[1];
      if (rightAnswers === 3) {
        result.textContent = 'You are recognized as top JavaScript fan!';
      }
      else {
        result.textContent = `You have ${rightAnswers} right answers`;
      }
    }
  }
}
