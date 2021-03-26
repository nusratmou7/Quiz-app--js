const quiz=[{
    question:"Q1:what is the full from of html?",
    a:"hello to my land",
    b:" hey text markup language",
    c:" hyper text markup language",
    d:" hyper text makup language",
    ans:'ans3'
},
{
    question:"Q2:what is the full from of css?",
    a:"cascading style sheet",
    b:" cascading style shet",
    c:" cascading source sheet",
    d:" cascading style sheep",
    ans:'ans1'
},
{
    question:"Q3:what is the full from of htpp?",
    a:"hypertext markup",
    b:" hey text markup language",
    c:" hyper transfer protocol",
    d:" hypertext transfer protocol",
    ans:'ans4'
},
{
    question:"Q4:what is the full from of js",
    a:"justshow",
    b:" javascript",
    c:" justscript",
    d:" jordenshow",
    ans:'ans2'
},

]

const question=document.querySelector('.question')
const option1=document.querySelector('#option1')
const option2=document.querySelector('#option2')
const option3=document.querySelector('#option3')
const option4=document.querySelector('#option4')
const submit =document.querySelector('#submit')
const showScore=document.querySelector('#showScore')
const answers=document.querySelectorAll('.answer')

let questionCount=0; 
let score=0;
const loadQuestion=()=>{
    const questionList=quiz[questionCount]
    question.innerText=questionList.question
    option1.innerText=questionList.a
    option2.innerText=questionList.b
    option3.innerText=questionList.c
    option4.innerText=questionList.d
  
}
loadQuestion()


const getCheckAnswer=()=>{
let answer;
answers.forEach((cAe)=>{
    if(cAe.checked){
        answer=cAe.id
    }
   
})
return answer
}
const dselectAll=()=>{
    answers.forEach((cAe)=>cAe.checked=false)
}
submit.addEventListener('click',()=>{
    const checkedAnswer=getCheckAnswer();

    if(checkedAnswer===quiz[questionCount].ans){
        score++;
    }
questionCount++;

dselectAll()
    if(questionCount<quiz.length){
        loadQuestion()
    }else{
        showScore.innerHTML=`<h3> your score ${score}/${quiz.length}</h3>
       <button class="btn" onClick="location.reload()">play again</button> 
        `;

        showScore.classList.remove('sArea')
    }
})