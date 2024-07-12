// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The coach would __________ the players when they didn't give their best effort during practice.",
        chinese_question: "当球员在训练中没有尽全力时，教练会__________他们。",
        answers: [
            { option: "A", answer: "praise", chinese_answer: "赞扬", chinese_romanization: "zànyáng" },
            { option: "B", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "C", answer: "chastise", chinese_answer: "训斥", chinese_romanization: "xùnchì" },
            { option: "D", answer: "reward", chinese_answer: "奖励", chinese_romanization: "jiǎnglì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'chastise' means to rebuke or reprimand severely. Figuratively, it can mean to criticize or correct someone strongly." +
            "<br><br>" +
            "(A) 'praise' means to express warm approval or admiration." +
            "<br><br>" +
            "(B) 'ignore' means to refuse to take notice of." +
            "<br><br>" +
            "(D) 'reward' means to give something to someone in recognition of their services, efforts, or achievements.",
        chinese_explanation: "(C) '训斥'一词意味着严厉地责备或谴责。比喻地，它可以表示强烈地批评或纠正某人。" +
            "<br><br>" +
            "(A) '赞扬' 意味着表达热烈的赞同或钦佩。" +
            "<br><br>" +
            "(B) '忽视' 意味着拒绝注意。" +
            "<br><br>" +
            "(D) '奖励' 意味着为了表彰某人的服务、努力或成就而给予某物。"
    },
    {
        id: 2,
        question: "Her hard work and dedication __________ in a well-deserved promotion.",
        chinese_question: "她的辛勤工作和奉献精神 __________ 于一次应得的晋升。",
        answers: [
            { option: "A", answer: "culminated", chinese_answer: "达到顶点", chinese_romanization: "dádào dǐngdiǎn" },
            { option: "B", answer: "started", chinese_answer: "开始", chinese_romanization: "kāishǐ" },
            { option: "C", answer: "hesitated", chinese_answer: "犹豫", chinese_romanization: "yóuyù" },
            { option: "D", answer: "dwindled", chinese_answer: "减少", chinese_romanization: "jiǎnshǎo" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'culminated' metaphorically means to reach the highest point of development." +
            "<br><br>" +
            "(B) 'started' means to begin." +
            "<br><br>" +
            "(C) 'hesitated' means to pause before saying or doing something, especially through uncertainty." +
            "<br><br>" +
            "(D) 'dwindled' means to diminish gradually in size, amount, or strength.",
        chinese_explanation: "(A) '达到顶点' 比喻达到发展的最高点。" +
            "<br><br>" +
            "(B) '开始' 意味着开始。" +
            "<br><br>" +
            "(C) '犹豫' 意味着在说或做某事之前暂停，特别是由于不确定。" +
            "<br><br>" +
            "(D) '减少' 意味着在大小、数量或力量上逐渐减少。"
    },
    {
        id: 3,
        question: "After the sudden loss of her job, she was left to __________ for a new direction in life.",
        chinese_question: "在突然失业后，她不得不 __________ 寻找生活的新方向。",
        answers: [
            { option: "A", answer: "grope", chinese_answer: "摸索", chinese_romanization: "mōsuǒ" },
            { option: "B", answer: "soar", chinese_answer: "飞翔", chinese_romanization: "fēixiáng" },
            { option: "C", answer: "leap", chinese_answer: "跳跃", chinese_romanization: "tiàoyuè" },
            { option: "D", answer: "glide", chinese_answer: "滑行", chinese_romanization: "huáxíng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'grope' metaphorically means to search uncertainly or blindly." +
            "<br><br>" +
            "(B) 'soar' means fly or rise high in the air." +
            "<br><br>" +
            "(C) 'leap' means jump or spring a long way, to a great height, or with great force." +
            "<br><br>" +
            "(D) 'glide' means move with a smooth continuous motion, typically with little noise.",
        chinese_explanation: "(A) '摸索' 比喻不确定或盲目地寻找。" +
            "<br><br>" +
            "(B) '飞翔' 意味着在空中飞或升高。" +
            "<br><br>" +
            "(C) '跳跃' 意味着跳或弹跳很远、高或用很大力气。" +
            "<br><br>" +
            "(D) '滑行' 意味着以平滑连续的运动移动，通常带有很少的噪音。"
    },
    {
        id: 4,
        question: "The mere thought of facing her worst fear head-on was enough to __________ her, causing her heart to race with dread.",
        chinese_question: "直面她最大的恐惧令她__________惊恐不已，心脏不由得加速跳动。",
        answers: [
            { option: "A", answer: "petrify", chinese_answer: "惊恐不已", chinese_romanization: "jīngkǒng bùyǐ" },
            { option: "B", answer: "amuse", chinese_answer: "逗乐", chinese_romanization: "dòulè" },
            { option: "C", answer: "entertain", chinese_answer: "娱乐", chinese_romanization: "yúlè" },
            { option: "D", answer: "delight", chinese_answer: "高兴", chinese_romanization: "gāoxìng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'petrify' metaphorically means to make someone very frightened." +
            "<br><br>" +
            "(B) 'amuse' means cause (someone) to find something funny; entertain." +
            "<br><br>" +
            "(C) 'entertain' means provide (someone) with amusement or enjoyment." +
            "<br><br>" +
            "(D) 'delight' means please (someone) greatly.",
        chinese_explanation: "(A) '惊恐不已' 意味着使某人非常害怕。" +
            "<br><br>" +
            "(B) '逗乐' 意味着使（某人）觉得有趣；娱乐。" +
            "<br><br>" +
            "(C) '娱乐' 意味着提供（某人）娱乐或享受。" +
            "<br><br>" +
            "(D) '高兴' 意味着极大地取悦（某人）。"
    },
    {
        id: 5,
        question: "The teacher's encouragement __________ a sense of confidence in her students, inspiring them to excel.",
        chinese_question: "老师的鼓励 __________ 了学生们的自信，激励他们取得优异成绩。",
        answers: [
                { option: "A", answer: "resolved", chinese_answer: "解决", chinese_romanization: "jiějué" },
                { option: "B", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "C", answer: "eliminated", chinese_answer: "消除", chinese_romanization: "xiāochú" },
                { option: "D", answer: "engendered", chinese_answer: "引起", chinese_romanization: "yǐnqǐ" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'engendered' means to cause or give rise to (a feeling, situation, or condition)." +
            "<br><br>" +
            "(A) 'resolved' means to settle or find a solution to (a problem, dispute, or contentious matter)." +
            "<br><br>" +
            "(B) 'ignored' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(C) 'eliminated' means to completely remove or get rid of (something).",
        chinese_explanation: "(D) '引起' 意味着引起或导致（情感、情境或状况）。" +
            "<br><br>" +
            "(A) '解决' 意味着解决或找到（问题、争议或争议事项）的解决方案。" +
            "<br><br>" +
            "(B) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(C) '消除' 意味着完全去除或摆脱（某物）。"
    },
    {
        id: 6,
        question: "After the project was completed, the team held a meeting to __________ their performance and identify areas for improvement.",
        chinese_question: "项目完成后，团队召开会议__________他们的表现并找出需要改进的地方。",
        answers: [
            { option: "A", answer: "review", chinese_answer: "评论", chinese_romanization: "pínglùn" },
            { option: "B", answer: "complain", chinese_answer: "投诉", chinese_romanization: "tóusù" },
            { option: "C", answer: "schedule", chinese_answer: "日程表", chinese_romanization: "rìchéng biǎo" },
            { option: "D", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'review' means a critical assessment of something." +
            "<br><br>" +
            "(B) 'complain' means to express dissatisfaction." +
            "<br><br>" +
            "(C) 'schedule' means a plan for carrying out a process or procedure." +
            "<br><br>" +
            "(D) 'ignore' means to refuse to take notice of.",
        chinese_explanation: "(A) '评论'一词意味着对某事物的批评性评估。" +
            "<br><br>" +
            "(B) '投诉' 意味着表达不满。" +
            "<br><br>" +
            "(C) '日程表' 意味着进行某过程或程序的计划。" +
            "<br><br>" +
            "(D) '忽视' 意味着拒绝注意。"
    },
    {
        id: 7,
        question: "The effects of the virus were significantly __________ after the vaccine was administered.",
        chinese_question: "接种疫苗后，病毒的影响显著 __________。",
        answers: [
                { option: "A", answer: "worsened", chinese_answer: "恶化", chinese_romanization: "èhuà" },
                { option: "B", answer: "intensified", chinese_answer: "加剧", chinese_romanization: "jiājù" },
                { option: "C", answer: "attenuated", chinese_answer: "减轻", chinese_romanization: "jiǎnqīng" },
                { option: "D", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'attenuated' means to reduce the force, effect, or value of something." +
            "<br><br>" +
            "(A) 'worsened' means to make or become worse." +
            "<br><br>" +
            "(B) 'intensified' means to become or make more intense." +
            "<br><br>" +
            "(D) 'ignored' means to refuse to take notice of or acknowledge.",
        chinese_explanation: "(C) '减轻' 意味着减少某事物的力量、效果或价值。" +
            "<br><br>" +
            "(A) '恶化' 意味着使事情变得更糟。" +
            "<br><br>" +
            "(B) '加剧' 意味着变得更加激烈或使其变得更加激烈。" +
            "<br><br>" +
            "(D) '忽视' 意味着拒绝注意或承认。"
    },
    {
        id: 8,
        question: "Despite taking precautions, she __________ a rare disease during her travels.",
        chinese_question: "尽管采取了预防措施，她在旅行中还是 __________ 了一种罕见的疾病。",
        answers: [
                { option: "A", answer: "avoided", chinese_answer: "避免", chinese_romanization: "bìmiǎn" },
                { option: "B", answer: "cured", chinese_answer: "治愈", chinese_romanization: "zhìyù" },
                { option: "C", answer: "contracted", chinese_answer: "感染", chinese_romanization: "gǎnrǎn" },
                { option: "D", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'contracted' means to catch or develop (a disease or infectious agent)." +
            "<br><br>" +
            "(A) 'avoided' means to keep away from or stop oneself from doing (something)." +
            "<br><br>" +
            "(B) 'cured' means to relieve (a person or animal) of the symptoms of a disease or condition." +
            "<br><br>" +
            "(D) 'ignored' means to refuse to take notice of or acknowledge.",
        chinese_explanation: "(C) '感染' 意味着患上或发展（疾病或传染性病原体）。" +
            "<br><br>" +
            "(A) '避免' 意味着远离或阻止自己做（某事）。" +
            "<br><br>" +
            "(B) '治愈' 意味着缓解（人或动物）的疾病或病症的症状。" +
            "<br><br>" +
            "(D) '忽视' 意味着拒绝注意或承认。"
    },
    {
        id: 9,
        question: "Despite his sincere apology, she __________ his attempt at reconciliation and walked away.",
        chinese_question: "尽管他真诚道歉，她还是 __________ 了他的和解尝试，转身离去。",
        answers: [
                { option: "A", answer: "accepted", chinese_answer: "接受", chinese_romanization: "jiēshòu" },
                { option: "B", answer: "welcomed", chinese_answer: "欢迎", chinese_romanization: "huānyíng" },
                { option: "C", answer: "spurned", chinese_answer: "拒绝", chinese_romanization: "jùjué" },
                { option: "D", answer: "considered", chinese_answer: "考虑", chinese_romanization: "kǎolǜ" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'spurned' means to reject with disdain or contempt." +
            "<br><br>" +
            "(A) 'accepted' means to consent to receive or undertake (something offered)." +
            "<br><br>" +
            "(B) 'welcomed' means to greet (someone) in a glad, polite, or friendly way." +
            "<br><br>" +
            "(D) 'considered' means to think carefully about (something), typically before making a decision.",
        chinese_explanation: "(C) '拒绝' 意味着带着蔑视或鄙视的拒绝。" +
            "<br><br>" +
            "(A) '接受' 意味着同意接收或承担（提供的某物）。" +
            "<br><br>" +
            "(B) '欢迎' 意味着以高兴、礼貌或友好的方式迎接（某人）。" +
            "<br><br>" +
            "(D) '考虑' 意味着仔细思考（某事），通常在做决定之前。"
    },
    {
        id: 10,
        question: "When asked about the details of the incident, he __________, avoiding a direct answer.",
        chinese_question: "当被问及事件的细节时，他 __________，避开了直接回答。",
        answers: [
                { option: "A", answer: "admitted", chinese_answer: "承认", chinese_romanization: "chéngrèn" },
                { option: "B", answer: "prevaricated", chinese_answer: "支吾其词", chinese_romanization: "zhīwú qící" },
                { option: "C", answer: "confessed", chinese_answer: "忏悔", chinese_romanization: "chànhuǐ" },
                { option: "D", answer: "denied", chinese_answer: "否认", chinese_romanization: "fǒurèn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'prevaricated' means to speak or act in an evasive way." +
            "<br><br>" +
            "(A) 'admitted' means to confess to be true or to be the case." +
            "<br><br>" +
            "(C) 'confessed' means to admit or state that one has committed a crime or is at fault in some way." +
            "<br><br>" +
            "(D) 'denied' means to state that one refuses to admit the truth or existence of.",
        chinese_explanation: "(B) '支吾其词' 意味着以一种回避的方式说话或行动。" +
            "<br><br>" +
            "(A) '承认' 意味着承认是真实的或是事实的。" +
            "<br><br>" +
            "(C) '忏悔' 意味着承认或声明自己犯了罪或以某种方式有过错。" +
            "<br><br>" +
            "(D) '否认' 意味着声明拒绝承认真相或存在。"
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
