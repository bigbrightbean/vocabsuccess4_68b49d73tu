// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "She always felt the need to __________ her decisions, even when they were right.",
        chinese_question: "即使她的决定是正确的，她也总是觉得需要 __________ 自己的决定。",
        answers: [
            { option: "A", answer: "defend", chinese_answer: "辩护", chinese_romanization: "biànhù" },
            { option: "B", answer: "undermine", chinese_answer: "破坏", chinese_romanization: "pòhuài" },
            { option: "C", answer: "criticize", chinese_answer: "批评", chinese_romanization: "pīpíng" },
            { option: "D", answer: "neglect", chinese_answer: "忽视", chinese_romanization: "hūshì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'defend' metaphorically means to justify or support." +
            "<br><br>" +
            "(B) 'undermine' means to damage or weaken, especially gradually or insidiously." +
            "<br><br>" +
            "(C) 'criticize' means to indicate the faults of (someone or something) in a disapproving way." +
            "<br><br>" +
            "(D) 'neglect' means to fail to care for properly.",
        chinese_explanation: "(A) '辩护' 比喻为某事辩护或支持。" +
            "<br><br>" +
            "(B) '破坏' 意味着损害或削弱，尤其是逐渐或暗中。" +
            "<br><br>" +
            "(C) '批评' 意味着以不赞成的方式指出（某人或某事）的缺点。" +
            "<br><br>" +
            "(D) '忽视' 意味着未能适当照顾。"
    },
    {
        id: 2,
        question: "Using public transportation __________ the need for a personal vehicle in the city.",
        chinese_question: "在城市里使用公共交通工具 __________ 了对私家车的需要。",
        answers: [
                { option: "A", answer: "increases", chinese_answer: "增加", chinese_romanization: "zēngjiā" },
                { option: "B", answer: "obviates", chinese_answer: "消除", chinese_romanization: "xiāochú" },
                { option: "C", answer: "creates", chinese_answer: "创造", chinese_romanization: "chuàngzào" },
                { option: "D", answer: "complicates", chinese_answer: "使复杂", chinese_romanization: "shǐ fùzá" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'obviates' means to remove (a need or difficulty); to avoid or prevent." +
            "<br><br>" +
            "(A) 'increases' means to become or make greater in size, amount, or degree." +
            "<br><br>" +
            "(C) 'creates' means to bring (something) into existence." +
            "<br><br>" +
            "(D) 'complicates' means to make (something) more difficult or confusing by causing it to be more complex.",
        chinese_explanation: "(B) '消除' 意味着消除（需要或困难）；避免或预防。" +
            "<br><br>" +
            "(A) '增加' 意味着在大小、数量或程度上变得更大或使其变得更大。" +
            "<br><br>" +
            "(C) '创造' 意味着将（某物）带入存在。" +
            "<br><br>" +
            "(D) '使复杂' 意味着通过使其更加复杂来使（某事物）更加困难或令人困惑。"
    },
    {
        id: 3,
        question: "By turning a blind eye to the bullying, teachers can inadvertently __________ such behavior.",
        chinese_question: "通过对欺凌视而不见，教师可能无意中__________这种行为。",
        answers: [
            { option: "A", answer: "hinder", chinese_answer: "阻碍", chinese_romanization: "zǔ'ài" },
            { option: "B", answer: "abet", chinese_answer: "教唆", chinese_romanization: "jiàosuō" },
            { option: "C", answer: "prevent", chinese_answer: "阻止", chinese_romanization: "zǔzhǐ" },
            { option: "D", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'abet' means to assist or encourage, especially in wrongdoing. Figuratively, it can mean to indirectly support negative actions by not intervening." +
            "<br><br>" +
            "(A) 'hinder' means to make it difficult for someone to do something." +
            "<br><br>" +
            "(C) 'prevent' means to keep something from happening." +
            "<br><br>" +
            "(D) 'ignore' means to refuse to take notice of.",
        chinese_explanation: "(B) '教唆'一词意味着帮助或鼓励，尤其是在做坏事时。比喻地，它可以表示通过不干预而间接支持负面行为。" +
            "<br><br>" +
            "(A) '阻碍' 意味着使某人做某事变得困难。" +
            "<br><br>" +
            "(C) '阻止' 意味着阻止某事发生。" +
            "<br><br>" +
            "(D) '忽视' 意味着拒绝注意。"
    },
    {
        id: 4,
        question: "It took her a while to fully __________ the gravity of the situation and the decisions she had to make.",
        chinese_question: "她花了一段时间才完全__________情况的严重性以及她必须做出的决定。",
        answers: [
            { option: "A", answer: "release", chinese_answer: "释放", chinese_romanization: "shìfàng" },
            { option: "B", answer: "assist", chinese_answer: "协助", chinese_romanization: "xiézhù" },
            { option: "C", answer: "apprehend", chinese_answer: "理解", chinese_romanization: "lǐjiě" },
            { option: "D", answer: "confuse", chinese_answer: "使困惑", chinese_romanization: "shǐ kùnhuò" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'apprehend' means to arrest someone for a crime. Figuratively, it can mean to understand or grasp something." +
            "<br><br>" +
            "(A) 'release' means to allow someone or something to move or act freely." +
            "<br><br>" +
            "(B) 'assist' means to help someone." +
            "<br><br>" +
            "(D) 'confuse' means to make someone unable to think clearly.",
        chinese_explanation: "(C) '理解'一词意味着因犯罪而逮捕某人。比喻地，它可以表示理解或掌握某事。" +
            "<br><br>" +
            "(A) '释放' 意味着允许某人或某物自由移动或行动。" +
            "<br><br>" +
            "(B) '协助' 意味着帮助某人。" +
            "<br><br>" +
            "(D) '使困惑' 意味着使某人无法清晰思考。"
    },
    {
        id: 5,
        question: "He was __________ by doubts and fears before making his final decision.",
        chinese_question: "在做出最终决定之前，他被疑虑和恐惧 __________。",
        answers: [
            { option: "A", answer: "assailed", chinese_answer: "困扰", chinese_romanization: "kùnrǎo" },
            { option: "B", answer: "comforted", chinese_answer: "安慰", chinese_romanization: "ānwèi" },
            { option: "C", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "D", answer: "soothed", chinese_answer: "抚慰", chinese_romanization: "fǔwèi" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'assailed' metaphorically means to be troubled or disturbed by something." +
            "<br><br>" +
            "(B) 'comforted' means to ease the grief or distress of." +
            "<br><br>" +
            "(C) 'ignored' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(D) 'soothed' means to gently calm (a person or their feelings).",
        chinese_explanation: "(A) '困扰' 比喻被某事困扰或打扰。" +
            "<br><br>" +
            "(B) '安慰' 意味着减轻悲伤或困扰。" +
            "<br><br>" +
            "(C) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(D) '抚慰' 意味着轻轻地安抚（某人或他们的情感）。"
    },
    {
        id: 6,
        question: "Sometimes, you need to __________ on your instincts to make the right decision.",
        chinese_question: "有时，你需要根据直觉 __________ 来做出正确的决定。",
        answers: [
            { option: "A", answer: "think", chinese_answer: "思考", chinese_romanization: "sīkǎo" },
            { option: "B", answer: "doubt", chinese_answer: "怀疑", chinese_romanization: "huáiyí" },
            { option: "C", answer: "act", chinese_answer: "行动", chinese_romanization: "xíngdòng" },
            { option: "D", answer: "question", chinese_answer: "质疑", chinese_romanization: "zhíyí" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'act' metaphorically means to follow one's intuition or feelings in decision-making." + 
            "<br><br>" + 
            "(A) 'think' means direct one's mind toward someone or something; use one's mind actively to form connected ideas." + 
            "<br><br>" + 
            "(B) 'doubt' means feel uncertain about." + 
            "<br><br>" + 
            "(D) 'question' means ask questions about or doubt the truth or validity of.",
        chinese_explanation: "(C) '行动' 比喻在决策中遵循直觉或感觉。" + 
            "<br><br>" + 
            "(A) '思考' 意味着把心思集中在某人或某事上；积极用脑形成连贯的想法。" + 
            "<br><br>" + 
            "(B) '怀疑' 意味着对某事感到不确定。" + 
            "<br><br>" + 
            "(D) '质疑' 意味着对某事提出问题或怀疑其真实性或有效性。"
    },
    {
        id: 7,
        question: "They decided to __________ their team by hiring new members.",
        chinese_question: "他们决定通过招聘新成员来 __________ 他们的团队。",
        answers: [
            { option: "A", answer: "augment", chinese_answer: "增强", chinese_romanization: "zēngqiáng" },
            { option: "B", answer: "diminish", chinese_answer: "减少", chinese_romanization: "jiǎnshǎo" },
            { option: "C", answer: "neglect", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "D", answer: "weaken", chinese_answer: "削弱", chinese_romanization: "xuēruò" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'augment' metaphorically means to increase or enhance." +
            "<br><br>" +
            "(B) 'diminish' means to make or become less." +
            "<br><br>" +
            "(C) 'neglect' means to fail to care for properly." +
            "<br><br>" +
            "(D) 'weaken' means to make or become weaker in power, resolve, or physical strength.",
        chinese_explanation: "(A) '增强' 比喻增加或加强。" +
            "<br><br>" +
            "(B) '减少' 意味着使或变得更少。" +
            "<br><br>" +
            "(C) '忽视' 意味着未能适当照顾。" +
            "<br><br>" +
            "(D) '削弱' 意味着使或变得在力量、决心或体力上减弱。"
    },
    {
        id: 8,
        question: "His confidence began to __________ after facing repeated rejections.",
        chinese_question: "在面对反复的拒绝后，他的信心开始__________。",
        answers: [
            { option: "A", answer: "straighten", chinese_answer: "拉直", chinese_romanization: "lā zhí" },
            { option: "B", answer: "crumple", chinese_answer: "崩溃", chinese_romanization: "bēngkuì" },
            { option: "C", answer: "smooth", chinese_answer: "弄平", chinese_romanization: "nòng píng" },
            { option: "D", answer: "flatten", chinese_answer: "弄平", chinese_romanization: "nòng píng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'crumple' means to crush (something, typically paper or cloth) so that it becomes creased and wrinkled. Figuratively, it can mean to become weak or lose strength." + 
            "<br><br>" + 
            "(A) 'straighten' means to make or become straight." + 
            "<br><br>" + 
            "(C) 'smooth' means having an even and regular surface; free from roughness or projections." + 
            "<br><br>" + 
            "(D) 'flatten' means to make or become flat or flatter.",
        chinese_explanation: "(B) '崩溃' 一词意味着压碎（通常是纸或布）以使其变得有折痕和皱纹。比喻地，它可以表示变得虚弱或失去力量。" + 
            "<br><br>" + 
            "(A) '拉直' 意味着使其变直。" + 
            "<br><br>" + 
            "(C) '弄平' 意味着表面平滑和规则的；没有粗糙或突出物的。" + 
            "<br><br>" + 
            "(D) '弄平' 意味着使其变平或更平。"
    },
    {
        id: 9,
        question: "Realizing the enormity of the task, she reluctantly decided to __________ that she needed help to complete the project.",
        chinese_question: "在意识到任务的巨大性后，她不情愿地决定__________自己需要帮助才能完成这个项目。",
        answers: [
            { option: "A", answer: "deny", chinese_answer: "否认", chinese_romanization: "fǒurèn" },
            { option: "B", answer: "confess", chinese_answer: "承认", chinese_romanization: "chéngrèn" },
            { option: "C", answer: "acknowledge", chinese_answer: "承认", chinese_romanization: "chéngrèn" },
            { option: "D", answer: "refuse", chinese_answer: "拒绝", chinese_romanization: "jùjué" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'acknowledge' means to admit the existence or truth of something. Figuratively, it can mean to recognize or accept the reality of a situation." + 
            "<br><br>" + 
            "(A) 'deny' means to state that one refuses to admit the truth or existence of." + 
            "<br><br>" + 
            "(B) 'confess' means to admit or state that one has committed a crime or is at fault in some way." + 
            "<br><br>" + 
            "(D) 'refuse' means to indicate that one is not willing to do or accept something.",
        chinese_explanation: "(C) '承认' 一词意味着承认或声明自己犯了罪或在某种程度上有过错。比喻地，它可以表示不情愿或困难地承认某事。" + 
            "<br><br>" + 
            "(A) '否认' 意味着拒绝承认或存在的声明。" + 
            "<br><br>" + 
            "(B) '承认' 意味着承认或承认存在或真实性。" + 
            "<br><br>" + 
            "(D) '拒绝' 意味着表明不愿做或接受某事。"
    },
    {
        id: 10,
        question: "The economic downturn was __________ to global market fluctuations.",
        chinese_question: "经济下滑被__________全球市场波动。",
        answers: [
            { option: "A", answer: "attributed", chinese_answer: "归因于", chinese_romanization: "guīyīn yú" },
            { option: "B", answer: "forgotten", chinese_answer: "忘记", chinese_romanization: "wàngjì" },
            { option: "C", answer: "denied", chinese_answer: "否认", chinese_romanization: "fǒurèn" },
            { option: "D", answer: "celebrated", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'attributed' metaphorically means regarded as caused by something." +
            "<br><br>" +
            "(B) 'forgotten' means to fail to remember." +
            "<br><br>" +
            "(C) 'denied' means to state that one refuses to admit the truth or existence of." +
            "<br><br>" +
            "(D) 'celebrated' means acknowledged with a social gathering or enjoyable activity.",
        chinese_explanation: "(A) '归因于' 比喻被认为是由某事引起的。" +
            "<br><br>" +
            "(B) '忘记' 意味着未能记住。" +
            "<br><br>" +
            "(C) '否认' 意味着声明拒绝承认真相或存在。" +
            "<br><br>" +
            "(D) '庆祝' 意味着通过社交聚会或愉快的活动来承认。"
    }
];


// Function to restart the quiz
function restartQuiz() {
    // Reload the page to restart the quiz
    location.reload();
}

// Variable to keep track of the current question index
var currentQuestionIndex = 0;

// Variable to keep track of the total score
var totalScore = 0;

// Array to store the selected answers for each question
var selectedAnswers = new Array(questions.length).fill(null);

// Variable to track the state of the Chinese translations checkbox
var chineseTranslationsChecked = false;

// Function to toggle Chinese translations
function toggleChineseTranslations() {
    var toggleChineseCheckbox = document.getElementById('toggleChinese');
    chineseTranslationsChecked = !chineseTranslationsChecked; // Toggle checkbox state
    // Call the displayQuestion() function to update the display based on the checkbox state
    displayQuestion(chineseTranslationsChecked);
}



// Function to toggle question shuffling
function toggleQuestionShuffle() {
    var shuffleCheckbox = document.getElementById('shuffleQuestions');
    var shuffleEnabled = shuffleCheckbox.checked;

    // Check if the current question has been answered
    var currentQuestionAnswered = selectedAnswers[currentQuestionIndex] !== null;

    // If the current question has been answered and shuffling is enabled
    if (currentQuestionAnswered && shuffleEnabled) {
        // Move to the next question automatically
        nextQuestion();
    }

    // Call the shuffleQuestions() function to update the questions based on the checkbox state
    shuffleQuestions(shuffleEnabled);
}


// Function to shuffle the remaining unanswered questions
function shuffleQuestions(shuffleEnabled) {
    // Clear the selected answer for the current question
    selectedAnswers[currentQuestionIndex] = null;

    // Copy the questions array
    var remainingQuestions = questions.slice(currentQuestionIndex);

    // Sort the remaining questions based on their IDs
    remainingQuestions.sort((a, b) => a.id - b.id);

    // If shuffling is enabled, shuffle the remaining questions
    if (shuffleEnabled) {
        // Shuffle the remaining questions array using Fisher-Yates algorithm
        for (var i = remainingQuestions.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = remainingQuestions[i];
            remainingQuestions[i] = remainingQuestions[j];
            remainingQuestions[j] = temp;
        }
    }

    // Update the questions array with the shuffled remaining questions
    questions.splice(currentQuestionIndex, remainingQuestions.length, ...remainingQuestions);

    // Clear the selected MCQ option buttons
    var buttons = document.querySelectorAll('.option-btn');
    buttons.forEach(function(btn) {
        btn.classList.remove('option-selected', 'correct', 'wrong');
    });

    // Display the current question after shuffling
    displayQuestion(document.getElementById('toggleChinese').checked);

    // Update the progress bar
    updateProgressBar();
}


// Function to display the current question
function displayQuestion() {
    // Get the current question object
    var currentQuestion = questions[currentQuestionIndex];
    
    // Extract question texts and options
    var questionText = currentQuestion.question;
    var questionTextCN = currentQuestion.chinese_question;
    var options = currentQuestion.answers;

    // Display the question text in English without the question number
    document.getElementById('question').innerHTML = questionText;

    // Display the question text in Chinese if the checkbox is checked or if Chinese translations were manually toggled on
    if (document.getElementById('toggleChinese').checked || chineseTranslationsChecked) {
        document.getElementById('question_cn').innerHTML = questionTextCN;
    } else {
        document.getElementById('question_cn').innerHTML = ""; // Clear Chinese question
    }

    // Display the options as buttons with selected state
    var optionsHTML = "";
    for (var i = 0; i < options.length; i++) {
        var isSelected = selectedAnswers[currentQuestionIndex] === options[i].option;
        var optionClass = "option-btn";
        if (isSelected) {
            optionClass += ' option-selected'; // Add option-selected class if option is selected
            // Add correct or wrong class based on the correctness of the option
            if (options[i].option === currentQuestion.correctAnswer) {
                optionClass += ' correct';
            } else {
                optionClass += ' wrong';
            }
        }
        optionsHTML += '<button class="' + optionClass + '" onclick="selectAnswer(' + i + ')" value="' + options[i].option + '">' + options[i].option + '. ' + options[i].answer;
        
        // Append Chinese translation if the checkbox is checked or if Chinese translations were manually toggled on
        if (document.getElementById('toggleChinese').checked || chineseTranslationsChecked) {
            optionsHTML += ' (' + options[i].chinese_answer + ' ' + options[i].chinese_romanization + ')';
        }
        
        optionsHTML += '</button><br>'; // Modify this line to remove the "-"
    }
    document.getElementById('options').innerHTML = optionsHTML;

    // Update the progress bar
    updateProgressBar();
}




// Function to handle the answer selection
function selectAnswer(optionIndex) {
    // Update the selected answer for the current question
    selectedAnswers[currentQuestionIndex] = questions[currentQuestionIndex].answers[optionIndex].option;

    // Disable all option buttons to prevent further selection
    var buttons = document.querySelectorAll('.option-btn');
    buttons.forEach(function(btn) {
        btn.disabled = true;
    });

    // Check if the selected answer is correct
    var isCorrect = selectedAnswers[currentQuestionIndex] === questions[currentQuestionIndex].correctAnswer;

    // Display the result
    checkAnswer(selectedAnswers[currentQuestionIndex], isCorrect);
}


// Function to check the answer and display the result
function checkAnswer(selectedOption, isCorrect) {
    // Extract correct answer and explanation
    var correctAnswer = questions[currentQuestionIndex].correctAnswer;
    var correctAnswerEN = questions[currentQuestionIndex].answers.find(option => option.option === correctAnswer).answer;
    var correctAnswerCN = questions[currentQuestionIndex].answers.find(option => option.option === correctAnswer).chinese_answer;
    var correctAnswerRomanization = questions[currentQuestionIndex].answers.find(option => option.option === correctAnswer).chinese_romanization; // Add this line to extract the romanization
    var explanation = questions[currentQuestionIndex].explanation;
    var chineseExplanation = questions[currentQuestionIndex].chinese_explanation;

    // Display result and score
    var resultHTML = "";
    if (isCorrect) {
        // Increase the total score
        totalScore++;

        // Play correct sound
        var audio = new Audio('correct.mp3');
        audio.play();

        // Display correct message and explanation
        resultHTML += "<span class='correct-explanation'>Correct</span><br>"; // Added class for correct explanation
    } else {
        // Play incorrect sound
        var audio = new Audio('incorrect.mp3');
        audio.play();

        // Display incorrect message and correct answer
        resultHTML += "<span class='wrong-explanation'>Incorrect</span><br>"; // Added class for wrong explanation
    }

    resultHTML += "The correct answer is: " + correctAnswer + ": " + correctAnswerEN + ", " + correctAnswerCN + " (" + correctAnswerRomanization + ")<br><br>"; // Modify this line to include the romanization
    resultHTML += "Explanation (English):<br>" + explanation + "<br><br>";
    resultHTML += "Explanation (Chinese):<br>" + chineseExplanation + "<br><br>";

    // Display total score
    resultHTML += "Total Score: " + totalScore + "/" + questions.length;
    document.getElementById('result').innerHTML = resultHTML;

    // Apply correct or incorrect styling to the selected MCQ option button
    var selectedOptionButton = document.querySelector('.option-btn[value="' + selectedOption + '"]');
    if (isCorrect) {
        selectedOptionButton.classList.add('correct');
    } else {
        selectedOptionButton.classList.add('wrong');
    }
}



// Function to update the progress bar
function updateProgressBar() {
    // Calculate the progress percentage
    var progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    
    // Update the width of the progress bar
    document.getElementById('progress-bar').style.width = progress + '%';
}


// Function to move to the previous question
function previousQuestion() {
    // Decrease the current question index
    currentQuestionIndex--;

    // Ensure the index does not go below 0
    if (currentQuestionIndex < 0) {
        currentQuestionIndex = 0;
    }

    // Check the state of the checkbox for Chinese translations
    var showChineseTranslations = document.getElementById('toggleChinese').checked;

    // Display the previous question with the appropriate translations
    displayQuestion(showChineseTranslations);

    // Disable all MCQ buttons
    var buttons = document.querySelectorAll('.option-btn');
    buttons.forEach(function(btn) {
        btn.disabled = true;
    });

    // Enable the previously selected MCQ button
    var previousSelectedAnswer = selectedAnswers[currentQuestionIndex];
    buttons.forEach(function(btn) {
        if (btn.value === previousSelectedAnswer) {
            btn.disabled = false;
            // Check if the previously selected answer is correct or wrong and apply the appropriate class
            if (previousSelectedAnswer === questions[currentQuestionIndex].correctAnswer) {
                btn.classList.add('correct');
            } else {
                btn.classList.add('wrong');
            }
        }
    });

    // Show the selected answer and its correctness for the previous question
    var correctAnswer = questions[currentQuestionIndex].correctAnswer;

    // Display the explanation for the previous question
    var explanationHTML = "";
    if (previousSelectedAnswer) {
        var answerColorClass = previousSelectedAnswer === correctAnswer ? 'correct' : 'wrong';
        explanationHTML += "<span class='" + answerColorClass + "-explanation'>Your Answer is: " + (previousSelectedAnswer === correctAnswer ? "Correct" : "Incorrect") + "</span><br>";
    }
    explanationHTML += "The correct answer is: " + correctAnswer + " (" + questions[currentQuestionIndex].answers.find(option => option.option === correctAnswer).answer + ", " + questions[currentQuestionIndex].answers.find(option => option.option === correctAnswer).chinese_answer + ")<br><br>";
    explanationHTML += "Explanation (English):<br>" + questions[currentQuestionIndex].explanation + "<br><br>";
    explanationHTML += "Explanation (Chinese):<br>" + questions[currentQuestionIndex].chinese_explanation + "<br><br>";
    document.getElementById('result').innerHTML = explanationHTML;
}




// Function to end the quiz and display the total score in a popup box
function endQuiz() {
    // Display a popup box with the quiz ended message and total score
    alert("Congratulations! You've reached the end.\n\nYour Total Score: " + totalScore + "/" + questions.length);
}



// Function to move to the next question
// Function to move to the next question
function nextQuestion() {
    // Ensure the "Turn on Chinese translations" checkbox remains unchecked
    chineseTranslationsChecked = false;

    // Check if the player has selected an answer for the current question
    if (selectedAnswers[currentQuestionIndex] === null) {
        // If no answer is selected, display an error message in a popup box
        alert("Please select an answer for Question " + (currentQuestionIndex + 1) + " before moving to the next question.");
        return; // Exit the function to prevent moving to the next question
    }

    // Increase the current question index
    currentQuestionIndex++;

    // Check if all questions have been answered
    if (currentQuestionIndex >= questions.length) {
        // If all questions have been answered, end the quiz
        endQuiz();
        // Reset the current question index to prevent accessing out of bounds
        currentQuestionIndex = questions.length - 1;
    } else {
        // Display the next question with both English and Chinese translations by default
        displayQuestion(chineseTranslationsChecked);

        // Show the selected answer and its correctness for the next question
        var selectedAnswer = selectedAnswers[currentQuestionIndex];
        var correctAnswer = questions[currentQuestionIndex].correctAnswer;

        // Find the button corresponding to the selected answer
        var buttons = document.querySelectorAll('.option-btn');
        buttons.forEach(function(btn) {
            if (btn.value === selectedAnswer) {
                if (selectedAnswer === correctAnswer) {
                    btn.classList.add('correct');
                } else {
                    btn.classList.add('wrong');
                }
            }
        });

        // Display the explanation for the next question
        var explanationHTML = "";
        if (selectedAnswer) {
            var answerColorClass = selectedAnswer === correctAnswer ? 'correct' : 'wrong';
            explanationHTML += "<span class='" + answerColorClass + "-explanation'>Your Answer is: " + (selectedAnswer === correctAnswer ? "Correct" : "Incorrect") + "</span><br>";
            explanationHTML += "The correct answer is: " + correctAnswer + " (" + questions[currentQuestionIndex].answers.find(option => option.option === correctAnswer).answer + ", " + questions[currentQuestionIndex].answers.find(option => option.option === correctAnswer).chinese_answer + ")<br><br>";
            explanationHTML += "Explanation (English):<br>" + questions[currentQuestionIndex].explanation + "<br><br>";
            explanationHTML += "Explanation (Chinese):<br>" + questions[currentQuestionIndex].chinese_explanation + "<br><br>";
        }
        document.getElementById('result').innerHTML = explanationHTML;
    }
}



function startOver() {
    // Reset the current question index to the first question
    currentQuestionIndex = 0;

    // Reset the total score and selected answers
    totalScore = 0;
    selectedAnswers.fill(null);

    // Uncheck the checkbox for Chinese translations
    document.getElementById('toggleChinese').checked = false;

    // Uncheck the checkbox for shuffling questions
    document.getElementById('shuffleQuestions').checked = false;

    // Reset the order of questions to the default state
    // Sort the questions array based on the 'id' property to revert to the original order
    questions.sort((a, b) => a.id - b.id);

    // Display the first question
    // Display only English translations by passing 'false' to the displayQuestion function
    displayQuestion(false);

    // Clear the result section
    document.getElementById('result').innerHTML = "";

    // Reset font size to default
    increaseFontSize = true; // Set the flag to true for increasing font size
    adjustFontSize(); // Adjust font size of all elements
    adjustChineseFontSize(); // Adjust font size of Chinese elements and explanations
}




// Function to adjust font size of all elements
function adjustFontSize() {
    var container = document.querySelector('.container');
    var elements = container.querySelectorAll('*');
    var scaleFactor = increaseFontSize ? 1.1 : 0.9; // Scale factor for increasing or decreasing font size

    elements.forEach(function(element) {
        var currentFontSize = parseInt(window.getComputedStyle(element).fontSize);
        var newFontSize = currentFontSize * scaleFactor;
        element.style.fontSize = newFontSize + 'px';
    });
}

// Function to adjust font size of Chinese elements and explanations
function adjustChineseFontSize() {
    var container = document.querySelector('.container');
    var chineseElements = container.querySelectorAll('[lang="zh"]');
    var explanations = document.querySelectorAll('.explanation');
    var allElements = [...chineseElements, ...explanations];
    var scaleFactor = increaseFontSize ? 1.1 : 0.9; // Use the same scale factor as other elements

    allElements.forEach(function(element) {
        var currentFontSize = parseInt(window.getComputedStyle(element).fontSize);
        var newFontSize = currentFontSize * scaleFactor;
        element.style.fontSize = newFontSize + 'px';
    });
}

// Display the first question when the page loads with both English and Chinese translations by default
window.onload = function() {
    toggleChineseTranslations();
    adjustFontSize(); // Initialize font size
    adjustChineseFontSize(); // Initialize Chinese font size
};


// + button event listener
document.getElementById('increase-font-size').addEventListener('click', function() {
    increaseFontSize = true;
    adjustFontSize();
    adjustChineseFontSize();
});

// - button event listener
document.getElementById('decrease-font-size').addEventListener('click', function() {
    increaseFontSize = false;
    adjustFontSize();
    adjustChineseFontSize();
});

// Chinese translation checkbox event listener
document.getElementById('toggleChinese').addEventListener('click', function() {
    adjustChineseFontSize();
});

// Shuffle checkbox event listener
document.getElementById('shuffleQuestions').addEventListener('click', function() {
    adjustFontSize();
    adjustChineseFontSize();
});


function goToHomePage() {
    // Redirect to the main index page
    window.location.href = "../index.html";
}
