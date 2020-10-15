const hourHand=document.querySelector("#hourHand");
const minuteHand=document.querySelector("#minuteHand");
let hour, minute, totallyAnswered=0, correctlyAnswered=0;

const askQuestion = () => {
    hour = getRandomNumber(1,12); // Choose any hour of the day
    minute = getRandomNumber(0,3)*15; //This to ensure only 4 cases can be rolled: 0, 15, 30, 45 min
    let hourHandDegree = hour*30;//30 is 360/30=12 to get 1 step of an hour hand
    let minHandDegree = minute*6;// 6 is 360/6=60 to get 1 sep of an minute hand
    hourHand.style.transform=`rotateZ(${hourHandDegree+minHandDegree/12}deg)`;
    minuteHand.style.transform=`rotateZ(${minHandDegree}deg)`;
    document.querySelector("#answerMinutes").value="1";
    document.querySelector("#answerHours").value="0";
}
const checkAnswer = () => {
let answerMinutes = parseInt(document.querySelector("#answerMinutes").value);
let answerHours = parseInt(document.querySelector("#answerHours").value);
console.log(`hourQ: ${hour}, minuteQ: ${minute} hourA: ${answerHours} minutesA: ${answerMinutes}`)
if (answerMinutes!==1 && answerHours!==0){//to ensure answer is selected
    totallyAnswered++;
    document.querySelector("#totallyAnswered").innerHTML ="Answered questions: " + totallyAnswered;
    if(minute === 45){hour++}//quarter-to correction of hour
    if (hour === answerHours && minute===answerMinutes){correctlyAnswered ++;} //Check if answer is correct
    document.querySelector('#correctAnswers').innerHTML="Correct answers: "+(Math.floor(correctlyAnswered/totallyAnswered*100))+"%";
    askQuestion();}
}
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) ) + min; 
askQuestion();