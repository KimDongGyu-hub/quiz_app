const quizData = [
  {
    question: "뉴진스 멤버가 아닌것은?",
    a: "하니",
    b: "민지",
    c: "원영",
    d: "혜인",
    correct: "c",
  },
  {
    question: "자바스크립트에서 함수 선언식의 예시는 무엇인가요?",
    a: "let myFunction = function() {}",
    b: "function myFunction() {}",
    c: "const myFunction = () => {}",
    d: "myFunction() => {}",
    correct: "b",
  },
  {
    question: "자바스크립트 난이도",
    a: "매우어려움",
    b: "어려움",
    c: "보통",
    d: "쉬움",
    correct: "a",
  },
  {
    question: "css 난이도",
    a: "매우어려움",
    b: "어려움",
    c: "보통",
    d: "쉬움",
    correct: "a",
  },
];
// 라디오 버튼 가져오기
const answerEls = document.querySelectorAll(".answer");

//1. getElementByid로 보기,문제,버튼 태그 가져오기
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

const div = document.getElementById("quiz");
// 태그에 질문값 넣기

//3. 화면에 첫번째 문제의 보기와 제목을 보여주기
// 문제를 보여주는 코드를 함수로 묶어서 만들기

// 첫번째 문제 인덱스
let currentQuiz = 0;

// 첫번째 문제 출력
let score = 0;
loadQuiz();
function loadQuiz() {
  //체크초기화
  dselectAnswers();
  const currentQuizData = quizData[currentQuiz];
  // 태그에 질문값 넣기.
  questionEl.textContent = currentQuizData.question;
  // 보기 값넣기
  a_text.textContent = currentQuizData.a;
  b_text.textContent = currentQuizData.b;
  c_text.textContent = currentQuizData.c;
  d_text.textContent = currentQuizData.d;
}

// input태그의 체크 속성 초기화
function dselectAnswers() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}
// 선택된 라디오태그의 id값 가져오기
function getSelected() {
  let answer;

  answerEls.forEach((el) => {
    //el -> <input>
    //input태그에 checked속성이 true라면
    //태그의 id값을 answer에 넣기
    if (el.checked) {
      answer = el.id;
    }
  });
  //answer변수 반환
  return answer;
}

submitBtn.addEventListener("click", () => {
  console.log(quizData[currentQuiz]);
  // 선택된 보기 값
  const answer = getSelected();
  // 선택된id값이 존재한다며 실행
  if (answer) {
    // 선택한 값이 정답과 일치한다면
    if (answer === quizData[currentQuiz].correct) {
      // 점수 1점 추가
      score++;
    }
    // 문제 인덱스 1추가
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      // 퀴즈불러오기 함수 호출
      loadQuiz();
    } else {
      div.innerHTML = `<h2>총 ${score}/${quizData.length}개 맞추셨습니다.</h2>
    <button onclick="location.reload()">다시하기</button>`;
    }
  }
});

//4. 버튼을 클릭했을때 다음문제로 넘어가기
// 문제가 다음으로 바뀐다는것 = quiz배열의 인덱스값 증가

//선택된 라디오버튼의 id값을 가져오는 함수 생성

//5. 선택된 input의 id값과 문제객체의 정답이 일치하는지 비교
//6. 문제를 다풀고나면 맞춘문제/전체문제 알려주기
//7. 재시작버튼을 누르면 처음으로 돌아가기
