// Time start Wednesday January 5 2023 @ 3:20pm
// Time end Wednesday January 5 2023 @ 11:29pm

// Code quiz pseudocode
// 1. The user loads the webpage
// 2. The user clicks the start quiz button
// 3. The timer function displays on the top right side
// 4. Question 1 of 8 loads onto the webpage
//    Which operator stands for equal to and same type of?
//    a. =
//    b. ===
//    c. +=
//    d. ==
//    Answer: b
//
//    function named checkAnswer:
//    > If answered correctly, textContent correct
//      > Then move to next question
//    > If answered incorrectly, textContent incorrect
//       > Then remove 5 seconds
//          > Then move to next question
//
// 5. Question 2 of 8
//    Which data type does JavaScript use to store numbers in a
//    variable?
//    a. int
//    b. float
//    c. char
//    d. None of the above
//       Answer: d
//    checkAnswer()
//
// 6. Question 3 of 8
//    checkAnswer()
//
// 7. Questions 4, 5, 6, 7 & 8
//    for each, check answer
//
// 8. If all questions answered check score
// 9. Display score
// 10. Load submit page with input
// 11. Placeholder initials in input box
// 12. Store score and intials as key value pair in API local storage array
// 13. Sort through all scores
// 14. Place highest score with initials on page
// 15. Display go back button or clear scores button at high score page
// 16. If timer goes to zero before answers
// 17. Display, "You ran out of time!"
// 18. Display button labeled: "Try again"

var timer = document.querySelector(".timer");
var startBtn = document.querySelector(".startBtn");
var question_field = document.querySelector(".question_field")
var time_note = document.querySelector(".time_note")
var intro = document.querySelector(".intro")
var duction = document.querySelector(".duction")
var duction1 = document.querySelector(".duction1")
var duction2 = document.querySelector(".duction2")
var answer1 = document.querySelector(".answer1")
var answer2 = document.querySelector(".answer2")
var answer3 = document.querySelector(".answer3")
var answer4 = document.querySelector(".answer4")
var result_terminal = document.querySelector(".result_terminal")

var quizTime = 75;
var question_number = 0;

// create var for questions object + array
// This is an array of objects.
var questions = [
    {
        // question 0
        title: "What is 1+1?",
        choices: [1,2,3,4],
        answer: 2
    },
    {
        // question 1
        title: "What is 1+2?",
        choices: [0,7,3,9],
        answer: 3
    },
    {
        // question 2
        title: "What is 1+3?",
        choices: [5,10,100,4],
        answer: 4
    },
    {
        // question 3
        title: "What is 1+4?",
        choices: [25,15,5,50],
        answer: 5
    },
    {
        // question 4
        title: "What is 1+5?",
        choices: [3,60,6,16],
        answer: 6
    },
    {
        // question 5
        title: "What is 1+6?",
        choices: [6,70,77,7],
        answer: 7
    },
    {
        // question 6
        title: "What is 1+7?",
        choices: [9,7,15,8],
        answer: 8
    },
    {
        // question 7
        title: "What is 1+9?",
        choices: [100,10,1,19],
        answer: 10
    },
]

function displayQuestions() {
  startBtn.classList.add("hide");
  intro.classList.add("hide");
  duction.classList.add("hide");
  duction1.classList.add("hide");
  duction2.classList.add("hide");
  question_field.textContent = questions[0].title;

  // revealing buttons
  answer1.setAttribute("style", "visibility:visible;");
  answer2.setAttribute("style", "visibility:visible;");
  answer3.setAttribute("style", "visibility:visible;");
  answer4.setAttribute("style", "visibility:visible;");
  // question_field.setAttribute("style", "background-color: blue;");
  // answer1.setAttribute("style", "padding:5px;");
  answer1.textContent = questions[0].choices[0];
  answer2.textContent = questions[0].choices[1];
  answer3.textContent = questions[0].choices[2];
  answer4.textContent = questions[0].choices[3];
  // answer1.textContent = questions[0].choices[0];
}


// console.log("Test of questions.title: ", questions.title[0])
// console.log("Test of questions: ", questions)
// console.log("Test of questions[0]: ", questions[0])
console.log("Test of questions[0].title: ", questions[0].title)
console.log("Test of questions[0].choices[0]", questions[0].choices[0])

function timeStart() {
  var timeStart = setInterval(function () {
    quizTime--;
    var note1 = "Time remaining: ";
    timer.textContent = quizTime;
    time_note.textContent = note1;

    if (quizTime === 0) {
      clearInterval(timeStart);

      quizTime = 0;
      timer.textContent = quizTime;
      // alert("You ran out of time")
    }
  }, 1000);
}

// reference
// var questions =
// title: "What is 1+1?",
// choices: [1,2,3,4],
// answer: 2
// answer1.textContent = questions[0].choices[0];
// answer2.textContent = questions[0].choices[1];
// answer3.textContent = questions[0].choices[2];
// answer4.textContent = questions[0].choices[3];

// Check answers 
answer1.addEventListener("click", function()
{
  // console.log("Answer 1 is clicked")
  // check if answer 1 is correct
  console.log("Question number:", question_number)
  console.log("The correct answer is:", questions[question_number].answer )
  console.log("Test of questions.length", questions.length)
  
  if (question_number >= questions.length - 1)
  {
    console.log("all answers completed")

    // pause time
    // setInterval(function () {
    //   quizTime--;
    //   var note1 = "Time remaining: ";
    //   timer.textContent = quizTime;
    //   time_note.textContent = note1;
    // }, 1000000)

    // window.clearInterval(timeStart)

    clearInterval(timeStart);
    quizTime = 0;
    timer.textContent = quizTime;

    // pause time
  
  }
  else {

    if (questions[question_number].choices[0] == questions[question_number].answer)
  {
    console.log("Question:", question_number, "Answer 1 is correct")
    result_terminal.textContent = "Answer 1 is correct";
    console.log("")
  }
  else {
    console.log("Question:", question_number, "Answer 1 is incorrect")
    result_terminal.textContent = "Answer 1 is incorrect";
    console.log("")
  }
  // Change to the next question
  question_number ++;
  question_field.textContent = questions[question_number].title;
  answer1.textContent = questions[question_number].choices[0];
  answer2.textContent = questions[question_number].choices[1];
  answer3.textContent = questions[question_number].choices[2];
  answer4.textContent = questions[question_number].choices[3];
}
}
);

answer2.addEventListener("click", function()
{
  // console.log("Answer 2 is clicked")
  console.log("Question number:", question_number)
  console.log("The correct answer is:", questions[question_number].answer )

  if (question_number >= questions.length - 1)
  {
    console.log("all answers completed")

    // pause time
    // setInterval(function () {
    //   quizTime--;
    //   var note1 = "Time remaining: ";
    //   timer.textContent = quizTime;
    //   time_note.textContent = note1;
    // }, 1000000)

    // window.clearInterval(timeStart)

    clearInterval(timeStart);
    quizTime = 0;
    timer.textContent = quizTime;
    // pause time
  }
  else {
  if (questions[question_number].choices[1] == questions[question_number].answer)
  {
    console.log("Question:", question_number + 1, "Answer 2 is correct")
    result_terminal.textContent = "Answer 2 is correct";
    console.log("")
  }
  else {
    console.log("Question:", question_number + 1, "Answer 2 is incorrect")
    result_terminal.textContent = "Answer 2 is incorrect";
    console.log("")
  }
  // Change to the next question
  question_number ++;
  question_field.textContent = questions[question_number].title;
  answer1.textContent = questions[question_number].choices[0];
  answer2.textContent = questions[question_number].choices[1];
  answer3.textContent = questions[question_number].choices[2];
  answer4.textContent = questions[question_number].choices[3];
}
}
);

answer3.addEventListener("click", function()
{
  // console.log("Answer 3 is clicked")
  console.log("Question number:", question_number)
  console.log("The correct answer is:", questions[question_number].answer )

  if (question_number >= questions.length - 1)
  {
    console.log("all answers completed")

    // pause time
    // setInterval(function () {
    //   quizTime--;
    //   var note1 = "Time remaining: ";
    //   timer.textContent = quizTime;
    //   time_note.textContent = note1;
    // }, 1000000)
    // window.clearInterval(timeStart)

    clearInterval(timeStart);
    quizTime = 0;
    timer.textContent = quizTime;

    // pause time

  }
  else {
  if (questions[question_number].choices[2] == questions[question_number].answer)
  {
    console.log("Question:", question_number + 1, "Answer 3 is correct")
    result_terminal.textContent = "Answer 3 is correct";
    console.log("")
  }
  else {
    console.log("Question:", question_number, "Answer 3 is incorrect")
    result_terminal.textContent = "Answer 3 is incorrect";
    console.log("")
  }
  // Change to the next question
  question_number ++;
  question_field.textContent = questions[question_number].title;
  answer1.textContent = questions[question_number].choices[0];
  answer2.textContent = questions[question_number].choices[1];
  answer3.textContent = questions[question_number].choices[2];
  answer4.textContent = questions[question_number].choices[3];
}
}
);

answer4.addEventListener("click", function()
{
  // console.log("Check that answer 4 is clicked")
  console.log("Question number:", question_number)
  console.log("The correct answer is:", questions[question_number].answer )

  if (question_number >= questions.length - 1)
  {
    console.log("all answers completed")

    // pause time
    // setInterval(function () {
    //   quizTime--;
    //   var note1 = "Time remaining: ";
    //   timer.textContent = quizTime;
    //   time_note.textContent = note1;
    // }, 1000000)

    // window.clearInterval(timeStart)

    clearInterval(timeStart);
    quizTime = 0;
    timer.textContent = quizTime;

    // pause time
  
  }
  else {
  if (questions[question_number].choices[3] == questions[question_number].answer)
  {
    console.log("Question:", question_number, "Answer 4 is correct")
    console.log("")
    result_terminal.textContent = "Answer 4 is correct";
  }
  else {
    console.log("Question:", question_number, "Answer 4 is incorrect")
    console.log("")
    result_terminal.textContent = "Answer 4 is incorrect";
  }
  // Change to the next question
  question_number ++;
  question_field.textContent = questions[question_number].title;
  answer1.textContent = questions[question_number].choices[0];
  answer2.textContent = questions[question_number].choices[1];
  answer3.textContent = questions[question_number].choices[2];
  answer4.textContent = questions[question_number].choices[3];
}
}
);

startBtn.addEventListener("click", function () {
  timeStart();
  displayQuestions();
});
