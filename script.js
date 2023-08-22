const quizData = [
    {
        question:"Where is the Eiffel Tower?",
        a:"Adana",
        b:"Paris",
        c:"New York",
        d:"Berlin",
        correct:"b"
    },
    {
        question:"Who is the president of Turkey?",
        a:"Adana",
        b:"RTE",
        c:"KK",
        d:"SD",
        correct:"b"
    },
    {
        question:"Which one is the most popular?",
        a:"Cricket",
        b:"Basketball",
        c:"Tennis",
        d:"Football",
        correct:"d"
    },
]
const qText = document.querySelector(".question")
const aText = document.getElementById("aText");
const bText = document.getElementById("bText");
const cText = document.getElementById("cText");
const dText = document.getElementById("dText");
const myBtn = document.querySelector(".btn");
const container = document.querySelector(".container");
const ans = document.querySelectorAll(".ans");


let currentQ = 0;
let score = 0;

function loadQ(){

    let  currentQuiz = quizData[currentQ];
    
    qText.textContent = currentQuiz.question;
    aText.textContent = currentQuiz.a;
    bText.textContent = currentQuiz.b;
    cText.textContent = currentQuiz.c;
    dText.textContent = currentQuiz.d;

    
}
loadQ();
function checkAnswer(){
    let answer = undefined;
       ans.forEach(an => {
           if(an.checked){
               answer = an.id;
           }
       });
       return answer;
   }
   function checkAnswerIsTrue(){
   
    let answer = checkAnswer();

    if( answer === quizData[currentQ].correct){
        score++;
    }
    /* console.log("hi");
    console.log(score);
    console.log(quizData[currentQ].correct);
    console.log(checkAnswer()); */
   }
myBtn.addEventListener("click",() => {
    let answer = checkAnswer();
    checkAnswerIsTrue();
    if(answer){
        currentQ++;   
  
    if( currentQ < quizData.length ){
        loadQ();
    }else{
        container.innerHTML = `<div style="display: flex; flex-direction: column;" ><div style="padding:20px; color: #0cbaba;">You finished the quiz!</div><div style="padding:20px;">Your Score = ${score} </div><button class="btn" onclick="location.reload()" >Try Again!</div></div>`
        score = 0;
    }
    }
   
})



