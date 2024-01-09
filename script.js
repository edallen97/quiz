// Quiz:
// Front page - click button to start. Record start time when quiz started.
// New "page" - question and 4 answers. Record the users answer and whether or not it's correct. Next button to take you to next question.
// Repeat 10 times.
// Final "page" - submit answers button and stop timer
// Review page:
// Score out of 10 and for extra credit list the questions the user got wrong and what the correct answer was


// selectors
let startQuizBtn = document.querySelector('.startQuizBtn')
let answerSelector = document.querySelector('.answerSelector')




// event listeners
startQuizBtn.addEventListener('click', startQuiz)




// question object
let questionObject = [
    {question: 'How old is Ed?',
    
    answers: [
        17,
        21,
        26,
        427
    ],
    correctAnswer : 2,
    },

    {question: 'Question 2',
    
    answers: [
        1,
        2,
        3,
        4
    ],
    correctAnswer : 2,
    },

    {question: 'Question 3',
    
    answers: [
        1,
        2,
        3,
        4
    ],
    correctAnswer : 2,
    },

    {question: 'Question 4',
    
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



// click button to start quiz
function startQuiz() {
    // record time when quiz was started 
    const timestamp = new Date().getTime() // this is a unix timestamp
    // divide by 1000 for seconds
    console.log(timestamp)
    // remove startQuizBtn
    startQuizBtn.remove()
    // display 1st question
    let questionDiv = document.createElement('div')
    questionDiv.setAttribute('class', 'questionDiv')
    
    let answerSelectorForm = document.createElement('form')
    questionDiv.appendChild(answerSelectorForm)

    let submitBtn = document.createElement('input')
    submitBtn.setAttribute('class', 'submitBtn')
    answerSelectorForm.appendChild(submitBtn)
    submitBtn.addEventListener('click', () => {
        submitAnswer()
        nextQuestion()
    })
    

    let currentIndex = 0


    for (let i = 1; i < 5; i++) {
        let answerBtn = document.createElement('input')
        let answerBtnLabel = document.createElement('label')
        let lineBreak = document.createElement('br')

        answerBtn.setAttribute('id', 'answer' + [i])
        answerBtn.setAttribute('type', 'radio')
        answerBtn.setAttribute('name', 'answer')
        
        submitBtn.setAttribute('type', 'button')
        submitBtn.innerHTML = 'Submit'

        answerBtnLabel.setAttribute('for', 'answer' + [i])

        // need to questionObject[++] on next question click
        answerBtnLabel.innerHTML = questionObject[currentIndex].answers[i]
        console.log(currentIndex + ' A')

        answerSelectorForm.append(answerBtn, answerBtnLabel, lineBreak);

        }

    
        // display next question
    function nextQuestion() {
        currentIndex++
        console.log(currentIndex + ' B')
    }

    document.body.appendChild(questionDiv)
    console.log(questionDiv)
    return answerSelector
    }



let answersArray = []


// submitBtn click, add answer choice to array, display next question
function submitAnswer() {
    let inputs = document.querySelectorAll('.questionDiv input[type="radio"]')
    for (let i = 0; i < inputs.length; i++){
        if (inputs[i].checked) {
            let checkedAnswer = inputs[i].id
            answersArray.push(checkedAnswer)
            console.log(answersArray)
        }
    }
}




// after 10 question move to a complete quiz section

// compare object of correct answers vs submitted answers, matches between the 2 score ++

// display score


     