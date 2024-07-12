// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The __________ between his words and actions made it difficult for people to trust him.",
        chinese_question: "他的话语和行为之间的 __________ 使人们很难信任他。",
        answers: [
            { option: "A", answer: "harmony", chinese_answer: "和谐", chinese_romanization: "héxié" },
            { option: "B", answer: "agreement", chinese_answer: "一致", chinese_romanization: "yīzhì" },
            { option: "C", answer: "dissonance", chinese_answer: "不和谐", chinese_romanization: "bù héxié" },
            { option: "D", answer: "concord", chinese_answer: "协调", chinese_romanization: "xiétiáo" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'dissonance' means a lack of harmony or agreement." +
            "<br><br>" +
            "(A) 'harmony' means the combination of simultaneously sounded musical notes to produce chords and chord progressions having a pleasing effect." +
            "<br><br>" +
            "(B) 'agreement' means harmony or accordance in opinion or feeling." +
            "<br><br>" +
            "(D) 'concord' means agreement or harmony between people or groups.",
        chinese_explanation: "(C) '不和谐' 一词意味着缺乏和谐或一致。" +
            "<br><br>" +
            "(A) '和谐' 意味着同时发出的音乐音符的组合，以产生和弦和和弦进行，具有令人愉悦的效果。" +
            "<br><br>" +
            "(B) '一致' 意味着在意见或感觉上的和谐或一致。" +
            "<br><br>" +
            "(D) '协调' 意味着人与人或群体之间的和谐或一致。"
    },
    {
        id: 2,
        question: "The teacher pointed out that the student's poor performance on the test was an __________, as she usually scored very high.",
        chinese_question: "老师指出，这名学生在考试中的糟糕表现是一个 __________，因为她通常成绩很高。",
        answers: [
            { option: "A", answer: "norm", chinese_answer: "常态", chinese_romanization: "chángtài" },
            { option: "B", answer: "routine", chinese_answer: "常规", chinese_romanization: "chángguī" },
            { option: "C", answer: "aberration", chinese_answer: "反常", chinese_romanization: "fǎncháng" },
            { option: "D", answer: "expectation", chinese_answer: "预期", chinese_romanization: "yùqī" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'aberration' means a departure from what is normal, usual, or expected, typically an unwelcome one." +
            "<br><br>" +
            "(A) 'norm' means something that is usual, typical, or standard." +
            "<br><br>" +
            "(B) 'routine' means a sequence of actions regularly followed; a fixed program." +
            "<br><br>" +
            "(D) 'expectation' means a strong belief that something will happen or be the case.",
        chinese_explanation: "(C) '反常' 一词意味着偏离正常、通常或预期的，通常是不受欢迎的。" +
            "<br><br>" +
            "(A) '常态' 意味着通常的、典型的或标准的东西。" +
            "<br><br>" +
            "(B) '常规' 意味着定期遵循的一系列行动；固定程序。" +
            "<br><br>" +
            "(D) '预期' 意味着对某事会发生或成为事实的强烈信念。"
    },
    {
        id: 3,
        question: "Believing that one can achieve success without hard work is a common __________ that many people fall into.",
        chinese_question: "认为可以不努力工作就能成功是一种常见的 __________，许多人都陷入其中。",
        answers: [
            { option: "A", answer: "truth", chinese_answer: "事实", chinese_romanization: "shìshí" },
            { option: "B", answer: "fact", chinese_answer: "真相", chinese_romanization: "zhēnxiàng" },
            { option: "C", answer: "fallacy", chinese_answer: "谬误", chinese_romanization: "miùwù" },
            { option: "D", answer: "certainty", chinese_answer: "确定性", chinese_romanization: "quèdìngxìng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'fallacy' means a mistaken belief, especially one based on unsound arguments." +
            "<br><br>" +
            "(A) 'truth' means the quality or state of being true." +
            "<br><br>" +
            "(B) 'fact' means a thing that is known or proved to be true." +
            "<br><br>" +
            "(D) 'certainty' means firm conviction that something is the case.",
        chinese_explanation: "(C) '谬误' 意味着一种错误的信念，尤其是基于不可靠的论据。" +
            "<br><br>" +
            "(A) '事实' 意味着已知或被证明为真的事物。" +
            "<br><br>" +
            "(B) '真相' 意味着真实的状态或性质。" +
            "<br><br>" +
            "(D) '确定性' 意味着坚定地相信某事是真实的。"
    },
    {
        id: 4,
        question: "The fortune teller claimed to read people's futures by examining their __________, focusing on facial features and expressions.",
        chinese_question: "算命先生声称通过研究人们的 __________ 来预测他们的未来，关注面部特征和表情。",
        answers: [
            { option: "A", answer: "gestures", chinese_answer: "手势", chinese_romanization: "shǒushì" },
            { option: "B", answer: "handwriting", chinese_answer: "字迹", chinese_romanization: "zìjì" },
            { option: "C", answer: "speech", chinese_answer: "语言", chinese_romanization: "yǔyán" },
            { option: "D", answer: "physiognomy", chinese_answer: "面相", chinese_romanization: "miànxiàng" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'physiognomy' means a person's facial features or expression, especially when regarded as indicative of character or ethnic origin." +
            "<br><br>" +
            "(A) 'gestures' means movements of part of the body, especially a hand or the head, to express an idea or meaning." +
            "<br><br>" +
            "(B) 'handwriting' means writing with a pen or pencil." +
            "<br><br>" +
            "(C) 'speech' means the expression of or the ability to express thoughts and feelings by articulate sounds.",
        chinese_explanation: "(D) '面相' 一词意味着一个人的面部特征或表情，尤其是被认为是性格或种族起源的指标时。" +
            "<br><br>" +
            "(A) '手势' 意味着身体部位的运动，特别是手或头，以表达一种想法或含义。" +
            "<br><br>" +
            "(B) '字迹' 意味着用钢笔或铅笔书写。" +
            "<br><br>" +
            "(C) '语言' 意味着通过清晰的声音表达或表达思想和感情的能力。"
    },
    {
        id: 5,
        question: "The accident was a result of the driver's __________, as he failed to stop at the red light.",
        chinese_question: "事故是由于司机的 __________ 造成的，因为他没有在红灯处停车。",
        answers: [
            { option: "A", answer: "care", chinese_answer: "关心", chinese_romanization: "guānxīn" },
            { option: "B", answer: "diligence", chinese_answer: "勤奋", chinese_romanization: "qínfèn" },
            { option: "C", answer: "negligence", chinese_answer: "疏忽", chinese_romanization: "shūhū" },
            { option: "D", answer: "attentiveness", chinese_answer: "注意", chinese_romanization: "zhùyì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'negligence' means failure to take proper care in doing something." +
            "<br><br>" +
            "(A) 'care' means the provision of what is necessary for the health, welfare, maintenance, and protection of someone or something." +
            "<br><br>" +
            "(B) 'diligence' means careful and persistent work or effort." +
            "<br><br>" +
            "(D) 'attentiveness' means the action of paying close attention to something.",
        chinese_explanation: "(C) '疏忽' 一词意味着未能适当照顾做某事。" +
            "<br><br>" +
            "(A) '关心' 意味着为某人或某物的健康、福利、维护和保护提供必要的东西。" +
            "<br><br>" +
            "(B) '勤奋' 意味着认真和持续的工作或努力。" +
            "<br><br>" +
            "(D) '注意' 意味着密切注意某事的行为。"
    },
    {
        id: 6,
        question: "He found it hard to endure the __________ of his monotonous office job.",
        chinese_question: "他发现很难忍受单调的办公室工作的 __________。",
        answers: [
                { option: "A", answer: "tedium", chinese_answer: "沉闷", chinese_romanization: "chénmèn" },
                { option: "B", answer: "joy", chinese_answer: "快乐", chinese_romanization: "kuàilè" },
                { option: "C", answer: "chaos", chinese_answer: "混乱", chinese_romanization: "hùnluàn" },
                { option: "D", answer: "challenge", chinese_answer: "挑战", chinese_romanization: "tiǎozhàn" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'tedium' refers to the dullness or monotony of something." +
            "<br><br>" +
            "(B) 'joy' means a feeling of great pleasure and happiness." +
            "<br><br>" +
            "(C) 'chaos' refers to complete disorder and confusion." +
            "<br><br>" +
            "(D) 'challenge' is a call to take part in a contest or competition.",
        chinese_explanation: "(A) '沉闷' 指的是某事物的单调或乏味。" +
            "<br><br>" +
            "(B) '快乐' 是指极大的愉悦和幸福感。" +
            "<br><br>" +
            "(C) '混乱' 指的是完全的混乱和困惑。" +
            "<br><br>" +
            "(D) '挑战' 是指参与竞赛或比赛的召唤。"
    },
    {
        id: 7,
        question: "The farmer's market was a __________ of fresh produce, offering a wide variety of fruits and vegetables in abundance.",
        chinese_question: "农贸市场是新鲜农产品的 __________，提供各种丰富的水果和蔬菜。",
        answers: [
            { option: "A", answer: "scarcity", chinese_answer: "稀缺", chinese_romanization: "xīquē" },
            { option: "B", answer: "cornucopia", chinese_answer: "丰盛", chinese_romanization: "fēngshèng" },
            { option: "C", answer: "shortage", chinese_answer: "短缺", chinese_romanization: "duǎnquē" },
            { option: "D", answer: "dearth", chinese_answer: "缺乏", chinese_romanization: "quēfá" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'cornucopia' means an abundant supply of good things of a specified kind." +
            "<br><br>" +
            "(A) 'scarcity' means the state of being scarce or in short supply." +
            "<br><br>" +
            "(C) 'shortage' means a state or situation in which something needed cannot be obtained in sufficient amounts." +
            "<br><br>" +
            "(D) 'dearth' means a scarcity or lack of something.",
        chinese_explanation: "(B) '丰盛' 一词意味着某种特定种类的物品的丰富供应。" +
            "<br><br>" +
            "(A) '稀缺' 意味着短缺或供应不足的状态。" +
            "<br><br>" +
            "(C) '短缺' 意味着需要的东西不能足量获得的状态或情况。" +
            "<br><br>" +
            "(D) '缺乏' 意味着某物的稀缺或不足。"
    },
    {
        id: 8,
        question: "As a __________ to his hard work, he was given a promotion and a raise.",
        chinese_question: "作为他努力工作的 __________，他得到了晋升和加薪。",
        answers: [
            { option: "A", answer: "cause", chinese_answer: "原因", chinese_romanization: "yuányīn" },
            { option: "B", answer: "corollary", chinese_answer: "推论", chinese_romanization: "tuīlùn" },
            { option: "C", answer: "setback", chinese_answer: "挫折", chinese_romanization: "cuòzhé" },
            { option: "D", answer: "consequence", chinese_answer: "结果", chinese_romanization: "jiéguǒ" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'corollary' means something that happens because of something else. For example, if you work hard, a reward is the corollary." +
            "<br><br>" +
            "(A) 'cause' means something that makes something else happen. For example, rain is the cause of wet ground." +
            "<br><br>" +
            "(C) 'setback' means a problem that makes it harder to do something. For example, a broken leg is a setback for a runner." +
            "<br><br>" +
            "(D) 'consequence' means the result of something. For example, studying hard has the consequence of good grades.",
        chinese_explanation: "(B) '推论' 意味着因为某事而发生的事情。例如，如果你努力工作，奖励就是推论。" +
            "<br><br>" +
            "(A) '原因' 意味着使其他事情发生的事情。例如，雨是地面湿的原因。" +
            "<br><br>" +
            "(C) '挫折' 意味着使做某事变得更难的问题。例如，断腿对跑步者来说是一个挫折。" +
            "<br><br>" +
            "(D) '结果' 意味着某事的结果。例如，努力学习的结果是好成绩。"
    },
    {
        id: 9,
        question: "The concert was interrupted by a sudden __________ in the crowd, causing chaos and confusion.",
        chinese_question: "音乐会被人群中的突然 __________ 打断，引起了混乱和困惑。",
        answers: [
            { option: "A", answer: "calm", chinese_answer: "平静", chinese_romanization: "píngjìng" },
            { option: "B", answer: "tumult", chinese_answer: "骚动", chinese_romanization: "sāodòng" },
            { option: "C", answer: "order", chinese_answer: "秩序", chinese_romanization: "zhìxù" },
            { option: "D", answer: "peace", chinese_answer: "和平", chinese_romanization: "hépíng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'tumult' means a loud, confused noise, especially one caused by a large mass of people." +
            "<br><br>" +
            "(A) 'calm' means the absence of violent or confrontational activity within a place or group." +
            "<br><br>" +
            "(C) 'order' means the arrangement or disposition of people or things in relation to each other according to a particular sequence, pattern, or method." +
            "<br><br>" +
            "(D) 'peace' means freedom from disturbance; tranquility.",
        chinese_explanation: "(B) '骚动' 一词意味着一种大声、混乱的声音，尤其是由一大群人引起的。" +
            "<br><br>" +
            "(A) '平静' 意味着某地或群体内没有暴力或对抗活动。" +
            "<br><br>" +
            "(C) '秩序' 意味着根据特定顺序、模式或方法安排或处理人或事物。" +
            "<br><br>" +
            "(D) '和平' 意味着没有干扰的自由；宁静。"
    },
    {
        id: 10,
        question: "The ship was caught in a __________ of whirling winds and powerful waves, making it difficult to navigate.",
        chinese_question: "这艘船被困在 __________ 的旋风和强大的波浪中，使得航行变得困难。",
        answers: [
            { option: "A", answer: "calm", chinese_answer: "平静", chinese_romanization: "píngjìng" },
            { option: "B", answer: "tranquility", chinese_answer: "宁静", chinese_romanization: "níngjìng" },
            { option: "C", answer: "maelstrom", chinese_answer: "漩涡", chinese_romanization: "xuánwō" },
            { option: "D", answer: "peace", chinese_answer: "和平", chinese_romanization: "hépíng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'maelstrom' means a powerful whirlpool in the sea or a river." +
            "<br><br>" +
            "(A) 'calm' means not showing or feeling nervousness, anger, or other strong emotions." +
            "<br><br>" +
            "(B) 'tranquility' means the quality or state of being tranquil; calm." +
            "<br><br>" +
            "(D) 'peace' means freedom from disturbance; tranquility.",
        chinese_explanation: "(C) '漩涡' 一词意味着海洋或河流中的强大漩涡。" +
            "<br><br>" +
            "(A) '平静' 意味着不表现或感觉紧张、愤怒或其他强烈情感。" +
            "<br><br>" +
            "(B) '宁静' 意味着宁静的品质或状态；平静。" +
            "<br><br>" +
            "(D) '和平' 意味着没有干扰；宁静。"
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
