// Quiz:
// Front page - click button to start. Record start time when quiz started.
// New "page" - question and 4 answers. Record the users answer and whether or not it's correct. Next button to take you to next question.
// Repeat 10 times.
// Final "page" - submit answers button and stop timer
// Review page:
// Score out of 10 and for extra credit list the questions the user got wrong and what the correct answer was

// // selectors
let startQuizBtn = document.querySelector('.startQuizBtn')
// let answerSelector = document.querySelector('.answerSelector')




// event listeners
// startQuizBtn.addEventListener('click', startQuiz)



function initQuestions(){
    // question object
    questionObject = [
        {
            question: 'How old is Ed?',    
            answers: [
                17,
                21,
                26,
                427
            ],
            correctAnswer : 2,
        },

        {
            question: 'Question 2',
            answers: [
                1,
                2,
                3,
                4
            ],
            correctAnswer : 2,
        },

        {
            question: 'Question 3',
            answers: [
                1,
                2,
                3,
                4
            ],
            correctAnswer : 2,
        },

        {
            question: 'Question 4',
            answers: [
                1,
                2,
                3,
                4
            ],
            correctAnswer : 2,
        }
        //...
    ]
}

function storeTimestamp(){
    // record time when quiz was started 
    let timestamp = new Date().getTime() // this is a unix timestamp
    // divide by 1000 for seconds
    console.log(timestamp)
    return timestamp
}

// click button to start quiz
function startQuiz() {
    startTime = storeTimestamp()

    initQuestions()
    // remove startQuizBtn
    startQuizBtn.remove()
    // display 1st question

    currentIndex = 0

    let questionDiv = document.createElement('div')
    questionDiv.setAttribute('class', 'questionDiv')


    populateQuestion(currentIndex)
}

function populateQuestion(currentIndex, ammendedAnswer=false) {
    
    
    let answers = questionObject[currentIndex].answers
    let answerSelectorForm = document.querySelector('div.answerSelectorForm')
    for (let i = 0; i < answers.length; i++) {
        let answerBtn = document.createElement('input')
        answerBtn.setAttribute('id', 'answer' + [i])
        answerBtn.setAttribute('type', 'radio')
        answerBtn.setAttribute('name', 'answer' + [i])
        
        let answerBtnLabel = document.createElement('label')
        answerBtnLabel.setAttribute('for', 'answer' + [i])
        console.log(answers[1])
        answerBtnLabel.setAttribute('innerText', answers[i])

        let lineBreak = document.createElement('br')

        
        

        // need to questionObject[++] on next question click
        answerBtnLabel.innerHTML = questionObject[currentIndex].answers[i]
        console.log(currentIndex + ' A')

        answerSelectorForm.append(answerBtn, answerBtnLabel, lineBreak);

        }


    let submitBtn = document.createElement('button')
    submitBtn.setAttribute('class', 'submitBtn')

    answerSelectorForm.appendChild(submitBtn)
    submitBtn.addEventListener('click', () => {
        nextQuestion(currentIndex)
    })
    
    // if(ammendedAnswer){
    //     //mark the appropriate checkbox
    //     // show results page instead
    //     submitBtn.addEventListener('click', () => {
    //     finalScreen()
    // })
    // }

   

}
    
        // display next question
function nextQuestion(currentIndex){
    //check answer provided
    answerProvided = checkAnswer()
    if(answerProvided){
        if(currentIndex <= questionObject.length){
            //store answer
        submitAnswer(currentIndex)
        //remove existing question
        removeQuestion()
        //populate new question
        currentIndex++
        populateQuestion(currentIndex)
        console.log(questionDiv)
        } else {
            //show our final form
            displayResults()
        }
        
    } else {
    //if none provided:
        alert("you must provide an answer")
    }

    }

function checkAnswer(){
    //make this check if an answer has been selected
    return true // or true if it has been selected
}
function removeQuestion(){
    let answerSelectorForm = document.querySelector('div.answerSelectorForm')
    answerSelectorForm.innerHTML = ""
}

// submitBtn click, add answer choice to array, display next question
function submitAnswer(currentIndex) {
    currentQuestionObject = questionObject[currentIndex]
    console.log('here')
    let inputs = document.querySelectorAll('.answerSelectorForm input[type="radio"]')
    for (let i = 0; i < inputs.length; i++){
        console.log(i)
        if (inputs[i].checked) {
            currentQuestionObject.providedAnswer = i
            console.log(currentQuestionObject)
        }
    }
}

function displayResults(){

    //much harder:
    //additional features
    //final check screen: display all questions and your answer
    //functionality (button) to change an existing answer then return to final check screen after
    //call populateQuestion(index, ammendedAnswer=true)
    //final final submit button

    //loop over questionObject
    //check providedAnswer against correctAnswer
    //count number of correct
    //record completed timestamp
    //calculate how long it took
    //display score and time taken


    //easier:
    //provide correct answer for each incorrect answer
}


// after 10 question move to a complete quiz section

// compare object of correct answers vs submitted answers, matches between the 2 score ++

// display score


     