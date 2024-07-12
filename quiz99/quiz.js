// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "He didn't want to __________ over every small detail and preferred to make quick decisions.",
        chinese_question: "他不想为每个小细节 __________，更喜欢快速做决定。",
        answers: [
            { option: "A", answer: "haggle", chinese_answer: "争论", chinese_romanization: "zhēnglùn" },
            { option: "B", answer: "agree", chinese_answer: "同意", chinese_romanization: "tóngyì" },
            { option: "C", answer: "decide", chinese_answer: "决定", chinese_romanization: "juédìng" },
            { option: "D", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'haggle' metaphorically means to argue or dispute over something trivial." +
            "<br><br>" +
            "(B) 'agree' means have the same opinion about something; concur." +
            "<br><br>" +
            "(C) 'decide' means come to a resolution in the mind as a result of consideration." +
            "<br><br>" +
            "(D) 'ignore' means refuse to take notice of or acknowledge; disregard intentionally.",
        chinese_explanation: "(A) '争论' 比喻为某些琐碎的事情争论或讨价还价。" +
            "<br><br>" +
            "(B) '同意' 意味着对某事持相同意见；一致。" +
            "<br><br>" +
            "(C) '决定' 意味着作为考虑的结果在心里做出决议。" +
            "<br><br>" +
            "(D) '忽视' 意味着拒绝注意或承认；故意忽视。"
    },
    {
        id: 2,
        question: "The project began to __________ towards its deadline as everyone worked tirelessly.",
        chinese_question: "在大家不懈努力下，项目开始 __________ 向最后期限推进。",
        answers: [
            { option: "A", answer: "slow", chinese_answer: "减速", chinese_romanization: "jiǎnsù" },
            { option: "B", answer: "hurtle", chinese_answer: "飞速推进", chinese_romanization: "fēisù tuījìn" },
            { option: "C", answer: "stagnate", chinese_answer: "停滞", chinese_romanization: "tíngzhì" },
            { option: "D", answer: "regress", chinese_answer: "倒退", chinese_romanization: "dàotuì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'hurtle' metaphorically means to move rapidly or forcefully." +
            "<br><br>" +
            "(A) 'slow' means reduce one's speed or the speed of a vehicle or process." +
            "<br><br>" +
            "(C) 'stagnate' means cease developing; become inactive or dull." +
            "<br><br>" +
            "(D) 'regress' means return to a former or less developed state.",
        chinese_explanation: "(B) '飞速推进' 比喻迅速或有力地推进。" +
            "<br><br>" +
            "(A) '减速' 意味着减慢自己的速度或车辆或过程的速度。" +
            "<br><br>" +
            "(C) '停滞' 意味着停止发展；变得不活跃或沉闷。" +
            "<br><br>" +
            "(D) '倒退' 意味着回到以前的或不发达的状态。"
    },
    {
        id: 3,
        question: "They worked to __________ the outdated policies and introduce more effective ones.",
        chinese_question: "他们努力 __________ 过时的政策并引入更有效的政策。",
        answers: [
            { option: "A", answer: "dismantle", chinese_answer: "废除", chinese_romanization: "fèichú" },
            { option: "B", answer: "implement", chinese_answer: "实施", chinese_romanization: "shíshī" },
            { option: "C", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" },
            { option: "D", answer: "uphold", chinese_answer: "维护", chinese_romanization: "wéihù" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'dismantle' metaphorically means to take apart or put an end to." +
            "<br><br>" +
            "(B) 'implement' means put (a decision, plan, agreement, etc.) into effect." +
            "<br><br>" +
            "(C) 'support' means bear all or part of the weight of; hold up." +
            "<br><br>" +
            "(D) 'uphold' means confirm or support (something that has been questioned).",
        chinese_explanation: "(A) '废除' 比喻拆除或终止。" +
            "<br><br>" +
            "(B) '实施' 意味着将（决策、计划、协议等）付诸实施。" +
            "<br><br>" +
            "(C) '支持' 意味着承担全部或部分重量；支撑。" +
            "<br><br>" +
            "(D) '维护' 意味着确认或支持（已被质疑的东西）。"
    },
    {
        id: 4,
        question: "The harsh criticism did not __________ his creative spirit; he continued to paint with passion.",
        chinese_question: "严厉的批评并没有 __________ 他的创造精神；他继续充满激情地绘画。",
        answers: [
            { option: "A", answer: "dishearten", chinese_answer: "使气馁", chinese_romanization: "shǐ qìněi" },
            { option: "B", answer: "embolden", chinese_answer: "使胆壮", chinese_romanization: "shǐ dǎn zhuàng" },
            { option: "C", answer: "fortify", chinese_answer: "巩固", chinese_romanization: "gǒnggù" },
            { option: "D", answer: "strengthen", chinese_answer: "增强", chinese_romanization: "zēngqiáng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'dishearten' metaphorically means to discourage or cause someone to lose hope or confidence." +
            "<br><br>" +
            "(B) 'embolden' means give (someone) the courage or confidence to do something or to behave in a certain way." +
            "<br><br>" +
            "(C) 'fortify' means strengthen (a place) with defensive works so as to protect it against attack." +
            "<br><br>" +
            "(D) 'strengthen' means make or become stronger.",
        chinese_explanation: "(A) '使气馁' 比喻使人失去希望或信心。" +
            "<br><br>" +
            "(B) '使胆壮' 意味着给予（某人）勇气或信心去做某事或以某种方式表现。" +
            "<br><br>" +
            "(C) '巩固' 意味着用防御工事加强（某地），以保护它不受攻击。" +
            "<br><br>" +
            "(D) '增强' 意味着使或变得更强。"
    },
    {
        id: 5,
        question: "He tried to __________ himself from the situation to stay objective.",
        chinese_question: "他试图使自己 __________ 情况，以保持客观。",
        answers: [
            { option: "A", answer: "immerse", chinese_answer: "沉浸", chinese_romanization: "chénjìn" },
            { option: "B", answer: "detach", chinese_answer: "超然", chinese_romanization: "chāorán" },
            { option: "C", answer: "involve", chinese_answer: "参与", chinese_romanization: "cānyù" },
            { option: "D", answer: "engage", chinese_answer: "吸引", chinese_romanization: "xīyǐn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'detach' metaphorically means to disengage emotionally or mentally." + 
            "<br><br>" + 
            "(A) 'immerse' means involve oneself deeply in a particular activity or interest." + 
            "<br><br>" + 
            "(C) 'involve' means have or include (something) as a necessary or integral part or result." + 
            "<br><br>" + 
            "(D) 'engage' means occupy, attract, or involve (someone's interest or attention).",
        chinese_explanation: "(B) '超然' 比喻在情感或精神上脱离。" + 
            "<br><br>" + 
            "(A) '沉浸' 意味着深深参与某项活动或兴趣。" + 
            "<br><br>" + 
            "(C) '参与' 意味着将（某物）作为必要或不可或缺的一部分或结果包含在内。" + 
            "<br><br>" + 
            "(D) '吸引' 意味着占据、吸引或涉及（某人的兴趣或注意力）。"
    },
    {
        id: 6,
        question: "It took him a while to __________ the depth of her feelings for him.",
        chinese_question: "他花了一段时间才__________她对他的感情有多深。",
        answers: [
            { option: "A", answer: "misunderstand", chinese_answer: "误解", chinese_romanization: "wùjiě" },
            { option: "B", answer: "fathom", chinese_answer: "理解", chinese_romanization: "lǐjiě" },
            { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "D", answer: "conceal", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'fathom' means to understand (a difficult problem or an enigmatic person) after much thought. Figuratively, it can mean to comprehend or grasp the full meaning or nature of something." + 
            "<br><br>" + 
            "(A) 'misunderstand' means to fail to interpret or understand (something) correctly." + 
            "<br><br>" + 
            "(C) 'ignore' means refuse to take notice of or acknowledge." + 
            "<br><br>" + 
            "(D) 'conceal' means keep from sight; hide.",
        chinese_explanation: "(B) '理解'一词意味着经过深思熟虑后理解（一个困难的问题或一个神秘的人）。比喻地，它可以表示理解或掌握某事的全部意义或性质。" + 
            "<br><br>" + 
            "(A) '误解' 意味着未能正确解释或理解（某事）。" + 
            "<br><br>" + 
            "(C) '忽视' 意味着拒绝注意或承认。" + 
            "<br><br>" + 
            "(D) '隐藏' 意味着把某物从视线中隐藏起来。"
    },
    {
        id: 7,
        question: "The CEO had to __________ the company's financial problems head-on to find a solution.",
        chinese_question: "CEO不得不__________公司的财务问题，以找到解决方案。",
        answers: [
            { option: "A", answer: "confront", chinese_answer: "面对", chinese_romanization: "miànduì" },
            { option: "B", answer: "avoid", chinese_answer: "避免", chinese_romanization: "bìmiǎn" },
            { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "D", answer: "hide", chinese_answer: "躲藏", chinese_romanization: "duǒcáng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'confront' means to face up to and deal with (a problem or difficult situation). Figuratively, it can mean addressing an issue directly." + 
            "<br><br>" + 
            "(B) 'avoid' means keep away from or stop oneself from doing (something)." + 
            "<br><br>" + 
            "(C) 'ignore' means refuse to take notice of or acknowledge." + 
            "<br><br>" + 
            "(D) 'hide' means put or keep out of sight; conceal from the view or notice of others.",
        chinese_explanation: "(A) '面对'一词意味着面对和处理（问题或困难的情况）。比喻地，它可以表示直接解决问题。" + 
            "<br><br>" + 
            "(B) '避免' 意味着远离或阻止自己做某事。" + 
            "<br><br>" + 
            "(C) '忽视' 意味着拒绝注意或承认。" + 
            "<br><br>" + 
            "(D) '躲藏' 意味着把某物或某人隐藏起来，不被别人看见。"
    },
    {
        id: 8,
        question: "She tried to __________ her guilt by confessing to her mistakes and apologizing to those she hurt.",
        chinese_question: "她试图通过承认自己的错误并向那些她伤害过的人道歉来 __________ 她的内疚。",
        answers: [
            { option: "A", answer: "deny", chinese_answer: "否认", chinese_romanization: "fǒurèn" },
            { option: "B", answer: "forget", chinese_answer: "忘记", chinese_romanization: "wàngjì" },
            { option: "C", answer: "conceal", chinese_answer: "掩盖", chinese_romanization: "yǎngài" },
            { option: "D", answer: "expiate", chinese_answer: "赎罪", chinese_romanization: "shúzuì" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'expiate' means to make amends or reparation for guilt or wrongdoing." +
            "<br><br>" +
            "(A) 'deny' means to state that one refuses to admit the truth or existence of." +
            "<br><br>" +
            "(B) 'forget' means to fail to remember." +
            "<br><br>" +
            "(C) 'conceal' means to keep something secret or prevent it from being known.",
        chinese_explanation: "(D) '赎罪' 意思是为罪过或错误进行弥补或赔偿。" +
            "<br><br>" +
            "(A) '否认' 意思是表示拒绝承认事实或存在。" +
            "<br><br>" +
            "(B) '忘记' 意思是未能记住。" +
            "<br><br>" +
            "(C) '掩盖' 意思是保守秘密或防止被知道。"
    },
    {
        id: 9,
        question: "The new policy was designed to __________ to the needs of all employees.",
        chinese_question: "新政策旨在 __________ 所有员工的需求。",
        answers: [
            { option: "A", answer: "cater", chinese_answer: "满足", chinese_romanization: "mǎnzú" },
            { option: "B", answer: "disregard", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "C", answer: "undermine", chinese_answer: "破坏", chinese_romanization: "pòhuài" },
            { option: "D", answer: "bypass", chinese_answer: "绕过", chinese_romanization: "ràoguò" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'cater' metaphorically means to provide or supply what is needed or required." +
            "<br><br>" +
            "(B) 'disregard' means pay no attention to; ignore." +
            "<br><br>" +
            "(C) 'undermine' means erode the base or foundation of (a rock formation)." +
            "<br><br>" +
            "(D) 'bypass' means go past or around.",
        chinese_explanation: "(A) '满足' 比喻提供或供应所需或要求的东西。" +
            "<br><br>" +
            "(B) '忽视' 意味着不注意；忽略。" +
            "<br><br>" +
            "(C) '破坏' 意味着侵蚀（岩层）的基部或基础。" +
            "<br><br>" +
            "(D) '绕过' 意味着经过或绕过。"
    },
    {
        id: 10,
        question: "The unexpected news threatened to __________ their plans for the future.",
        chinese_question: "意外的消息威胁到 __________ 他们的未来计划。",
        answers: [
            { option: "A", answer: "capsize", chinese_answer: "颠覆", chinese_romanization: "diānfù" },
            { option: "B", answer: "confirm", chinese_answer: "确认", chinese_romanization: "quèrèn" },
            { option: "C", answer: "validate", chinese_answer: "验证", chinese_romanization: "yànzhèng" },
            { option: "D", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'capsize' metaphorically means to cause to overturn or collapse." +
            "<br><br>" +
            "(B) 'confirm' means establish the truth or correctness of (something previously believed, suspected, or feared to be the case)." +
            "<br><br>" +
            "(C) 'validate' means check or prove the validity or accuracy of." +
            "<br><br>" +
            "(D) 'support' means bear all or part of the weight of; hold up.",
        chinese_explanation: "(A) '颠覆' 比喻导致翻转或崩溃。" +
            "<br><br>" +
            "(B) '确认' 意味着确立（先前被认为、怀疑或担心的情况）的真实性或正确性。" +
            "<br><br>" +
            "(C) '验证' 意味着检查或证明的有效性或准确性。" +
            "<br><br>" +
            "(D) '支持' 意味着承担全部或部分重量；支撑。"
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
