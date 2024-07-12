// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The celebrity was __________ by fans and paparazzi as soon as she stepped out of the car.",
        chinese_question: "这位名人一出车就被粉丝和狗仔队 __________。",
        answers: [
            { option: "A", answer: "avoided", chinese_answer: "避免", chinese_romanization: "bìmiǎn" },
            { option: "B", answer: "deserted", chinese_answer: "遗弃", chinese_romanization: "yíqì" },
            { option: "C", answer: "besieged", chinese_answer: "包围", chinese_romanization: "bāowéi" },
            { option: "D", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'besieged' figuratively means overwhelmed by a large number of requests or attacks." +
            "<br><br>" +
            "(A) 'avoided' means kept away from or stopped oneself from doing (something)." +
            "<br><br>" +
            "(B) 'deserted' means abandoned or left alone." +
            "<br><br>" +
            "(D) 'ignored' means refused to take notice of or acknowledge; disregarded intentionally.",
        chinese_explanation: "(C) '包围' 在比喻意义上意味着被大量请求或攻击淹没。" +
            "<br><br>" +
            "(A) '避免' 意味着远离或阻止自己做某事。" +
            "<br><br>" +
            "(B) '遗弃' 意味着被遗弃或独自留下。" +
            "<br><br>" +
            "(D) '忽视' 意味着拒绝注意或承认；故意忽视。"
    },
    {
        id: 2,
        question: "In times of crisis, families often __________ together, supporting each other through difficult times.",
        chinese_question: "在危机时刻，家庭往往 __________ 在一起，相互支持度过难关。",
        answers: [
            { option: "A", answer: "disperse", chinese_answer: "分散", chinese_romanization: "fēnsàn" },
            { option: "B", answer: "cleave", chinese_answer: "团结", chinese_romanization: "tuánjié" },
            { option: "C", answer: "separate", chinese_answer: "分开", chinese_romanization: "fēnkāi" },
            { option: "D", answer: "distance", chinese_answer: "疏远", chinese_romanization: "shūyuǎn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'cleave' figuratively means to stick fast to or adhere strongly to." +
            "<br><br>" +
            "(A) 'disperse' means distribute or spread over a wide area." +
            "<br><br>" +
            "(C) 'separate' means cause to move or be apart." +
            "<br><br>" +
            "(D) 'distance' means make (someone or something) far off or remote in position or nature.",
        chinese_explanation: "(B) '团结' 在比喻意义上意味着紧密团结或强烈坚持。" +
            "<br><br>" +
            "(A) '分散' 意味着分布或传播到广泛的区域。" +
            "<br><br>" +
            "(C) '分开' 意味着使移动或分开。" +
            "<br><br>" +
            "(D) '疏远' 意味着使（某人或某物）在位置或性质上变得遥远或遥远。"
    },
    {
        id: 3,
        question: "She found it difficult to __________ her schedule to fit in all her new responsibilities.",
        chinese_question: "她发现很难 __________ 她的日程以适应所有新职责。",
        answers: [
            { option: "A", answer: "simplify", chinese_answer: "简化", chinese_romanization: "jiǎnhuà" },
            { option: "B", answer: "accommodate", chinese_answer: "调整", chinese_romanization: "tiáozhěng" },
            { option: "C", answer: "eliminate", chinese_answer: "消除", chinese_romanization: "xiāochú" },
            { option: "D", answer: "disrupt", chinese_answer: "扰乱", chinese_romanization: "rǎoluàn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'accommodate' figuratively means to adjust or adapt to fit." +
            "<br><br>" +
            "(A) 'simplify' means make (something) simpler or easier to do or understand." +
            "<br><br>" +
            "(C) 'eliminate' means completely remove or get rid of (something)." +
            "<br><br>" +
            "(D) 'disrupt' means interrupt (an event, activity, or process) by causing a disturbance or problem.",
        chinese_explanation: "(B) '调整' 在比喻意义上意味着调整或适应以适应。" +
            "<br><br>" +
            "(A) '简化' 意味着使（某事）更简单或更容易做或理解。" +
            "<br><br>" +
            "(C) '消除' 意味着完全移除或摆脱（某物）。" +
            "<br><br>" +
            "(D) '扰乱' 意味着通过引起干扰或问题来中断（事件、活动或过程）。"
    },
    {
        id: 4,
        question: "She often had to __________ herself to stay focused and not get distracted by minor issues.",
        chinese_question: "她经常不得不 __________ 自己保持专注，不被琐事分心。",
        answers: [
            { option: "A", answer: "indulge", chinese_answer: "纵容", chinese_romanization: "zòngróng" },
            { option: "B", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "C", answer: "admonish", chinese_answer: "警告", chinese_romanization: "jǐnggào" },
            { option: "D", answer: "enjoy", chinese_answer: "享受", chinese_romanization: "xiǎngshòu" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'admonish' figuratively means to remind or urge oneself firmly." +
            "<br><br>" +
            "(A) 'indulge' means allow oneself to enjoy the pleasure of." +
            "<br><br>" +
            "(B) 'ignore' means refuse to take notice of or acknowledge; disregard intentionally." +
            "<br><br>" +
            "(D) 'enjoy' means take delight or pleasure in.",
        chinese_explanation: "(C) '警告' 在比喻意义上意味着坚定地提醒或敦促自己。" +
            "<br><br>" +
            "(A) '纵容' 意味着让自己享受某种快乐。" +
            "<br><br>" +
            "(B) '忽视' 意味着拒绝注意或承认；故意忽略。" +
            "<br><br>" +
            "(D) '享受' 意味着从中获得快乐或享受。"
    },
    {
        id: 5,
        question: "To tackle the complex issue, different departments had to __________, sharing resources and knowledge.",
        chinese_question: "为了解决复杂问题，不同部门必须 __________，共享资源和知识。",
        answers: [
            { option: "A", answer: "isolate", chinese_answer: "隔离", chinese_romanization: "gélí" },
            { option: "B", answer: "collaborate", chinese_answer: "合作", chinese_romanization: "hézuò" },
            { option: "C", answer: "hinder", chinese_answer: "阻碍", chinese_romanization: "zǔ'ài" },
            { option: "D", answer: "oppose", chinese_answer: "反对", chinese_romanization: "fǎnduì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'collaborate' figuratively means to work together towards a common goal or purpose." +
            "<br><br>" +
            "(A) 'isolate' means cause (a person or place) to be or remain alone or apart from others." +
            "<br><br>" +
            "(C) 'hinder' means create difficulties for (someone or something), resulting in delay or obstruction." +
            "<br><br>" +
            "(D) 'oppose' means disapprove of and attempt to prevent, especially by argument.",
        chinese_explanation: "(B) '合作' 在比喻意义上意味着共同努力实现共同目标或目的。" +
            "<br><br>" +
            "(A) '隔离' 意味着使（一个人或地方）独处或与他人分开。" +
            "<br><br>" +
            "(C) '阻碍' 意味着为（某人或某物）制造困难，导致延迟或阻碍。" +
            "<br><br>" +
            "(D) '反对' 意味着不赞成并试图阻止，特别是通过争论。"
    },
    {
        id: 6,
        question: "She tried to __________ the criticism by pointing out her team's accomplishments.",
        chinese_question: "她试图通过指出她团队的成就来 __________ 批评。",
        answers: [
            { option: "A", answer: "accept", chinese_answer: "接受", chinese_romanization: "jiēshòu" },
            { option: "B", answer: "embrace", chinese_answer: "拥抱", chinese_romanization: "yǒngbào" },
            { option: "C", answer: "deflect", chinese_answer: "转移", chinese_romanization: "zhuǎnyí" },
            { option: "D", answer: "welcome", chinese_answer: "欢迎", chinese_romanization: "huānyíng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'deflect' figuratively means to turn aside or distract attention from." +
            "<br><br>" +
            "(A) 'accept' means consent to receive or undertake (something offered)." +
            "<br><br>" +
            "(B) 'embrace' means hold (someone) closely in one's arms, especially as a sign of affection." +
            "<br><br>" +
            "(D) 'welcome' means greet (someone arriving) in a glad, polite, or friendly way.",
        chinese_explanation: "(C) '转移' 在比喻意义上意味着转移或分散注意力。" +
            "<br><br>" +
            "(A) '接受' 意味着同意接受或承担（提供的东西）。" +
            "<br><br>" +
            "(B) '拥抱' 意味着将（某人）紧紧抱在怀里，特别是作为表示爱意的标志。" +
            "<br><br>" +
            "(D) '欢迎' 意味着以愉快、礼貌或友好的方式迎接（到达的人）。"
    },
    {
        id: 7,
        question: "The marketing team worked hard to __________ customers that their product was the best choice on the market.",
        chinese_question: "营销团队努力 __________ 顾客，他们的产品是市场上最好的选择。",
        answers: [
            { option: "A", answer: "dissuade", chinese_answer: "劝阻", chinese_romanization: "quànzǔ" },
            { option: "B", answer: "persuade", chinese_answer: "说服", chinese_romanization: "shuōfú" },
            { option: "C", answer: "confuse", chinese_answer: "使困惑", chinese_romanization: "shǐ kùnhuò" },
            { option: "D", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'persuade' means to convince someone to believe or do something." +
            "<br><br>" +
            "(A) 'dissuade' means to persuade (someone) not to take a particular course of action." +
            "<br><br>" +
            "(C) 'confuse' means to cause (someone) to become bewildered or perplexed." +
            "<br><br>" +
            "(D) 'ignore' means to refuse to take notice of or acknowledge; disregard intentionally.",
        chinese_explanation: "(B) '说服' 在比喻意义上意味着使某人相信或做某事。" +
            "<br><br>" +
            "(A) '劝阻' 意味着劝（某人）不要采取特定行动。" +
            "<br><br>" +
            "(C) '使困惑' 意味着使（某人）变得困惑或迷惑。" +
            "<br><br>" +
            "(D) '忽视' 意味着拒绝注意或承认；故意忽略。"
    },
    {
        id: 8,
        question: "She felt the need to __________ her thoughts and opinions during the meeting, even if they were controversial.",
        chinese_question: "她觉得有必要在会议上 __________ 自己的想法和意见，即使它们是有争议的。",
        answers: [
            { option: "A", answer: "suppress", chinese_answer: "压制", chinese_romanization: "yāzhì" },
            { option: "B", answer: "vocalize", chinese_answer: "表达", chinese_romanization: "biǎodá" },
            { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "D", answer: "forget", chinese_answer: "忘记", chinese_romanization: "wàngjì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'vocalize' figuratively means to express thoughts or feelings in words." +
            "<br><br>" +
            "(A) 'suppress' means to forcibly put an end to." +
            "<br><br>" +
            "(C) 'ignore' means to refuse to take notice of or acknowledge; disregard intentionally." +
            "<br><br>" +
            "(D) 'forget' means to fail to remember.",
        chinese_explanation: "(B) '表达' 在比喻意义上意味着用语言表达想法或感受。" +
            "<br><br>" +
            "(A) '压制' 意味着强行结束。" +
            "<br><br>" +
            "(C) '忽视' 意味着拒绝注意或承认；故意忽略。" +
            "<br><br>" +
            "(D) '忘记' 意味着未能记住。"
    },
    {
        id: 9,
        question: "They sought to __________ the barriers between different departments to foster better collaboration.",
        chinese_question: "他们试图 __________ 各部门之间的障碍，以促进更好的合作。",
        answers: [
            { option: "A", answer: "erect", chinese_answer: "设立", chinese_romanization: "shèlì" },
            { option: "B", answer: "maintain", chinese_answer: "维持", chinese_romanization: "wéichí" },
            { option: "C", answer: "abolish", chinese_answer: "消除", chinese_romanization: "xiāochú" },
            { option: "D", answer: "strengthen", chinese_answer: "加强", chinese_romanization: "jiāqiáng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'abolish' figuratively means to eliminate or get rid of." +
            "<br><br>" +
            "(A) 'erect' means to construct or establish." +
            "<br><br>" +
            "(B) 'maintain' means to keep in an existing state." +
            "<br><br>" +
            "(D) 'strengthen' means to make or become stronger.",
        chinese_explanation: "(C) '消除' 在比喻意义上意味着消除或去除。" +
            "<br><br>" +
            "(A) '设立' 意味着建造或建立。" +
            "<br><br>" +
            "(B) '维持' 意味着保持现有状态。" +
            "<br><br>" +
            "(D) '加强' 意味着使或变得更强。"
    },
    {
        id: 10,
        question: "No matter how convincing the argument, he wouldn't __________ on his decision to stay.",
        chinese_question: "无论论据多么有说服力，他都不会 __________ 他留下的决定。",
        answers: [
            { option: "A", answer: "concede", chinese_answer: "让步", chinese_romanization: "ràngbù" },
            { option: "B", answer: "budge", chinese_answer: "动摇", chinese_romanization: "dòngyáo" },
            { option: "C", answer: "waver", chinese_answer: "改变", chinese_romanization: "gǎibiàn" },
            { option: "D", answer: "agree", chinese_answer: "同意", chinese_romanization: "tóngyì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'budge' figuratively means to change one's opinion or position." +
            "<br><br>" +
            "(A) 'concede' means to admit that something is true or valid after first denying or resisting it." +
            "<br><br>" +
            "(C) 'waver' means to be undecided between two opinions or courses of action." +
            "<br><br>" +
            "(D) 'agree' means to have the same opinion about something; concur.",
        chinese_explanation: "(B) '动摇' 在比喻意义上意味着改变自己的意见或立场。" +
            "<br><br>" +
            "(A) '让步' 意味着在最初否认或抵抗后承认某事属实或有效。" +
            "<br><br>" +
            "(C) '改变' 意味着在两种意见或行动方案之间犹豫不决。" +
            "<br><br>" +
            "(D) '同意' 意味着对某事持相同意见；一致。"
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
