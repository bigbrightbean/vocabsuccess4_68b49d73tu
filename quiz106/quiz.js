// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The new safety protocols were designed to __________ the risks associated with the machinery.",
        chinese_question: "新的安全协议旨在 __________ 与机械相关的风险。",
        answers: [
                { option: "A", answer: "increase", chinese_answer: "增加", chinese_romanization: "zēngjiā" },
                { option: "B", answer: "obviate", chinese_answer: "消除", chinese_romanization: "xiāochú" },
                { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "complicate", chinese_answer: "使复杂", chinese_romanization: "shǐ fùzá" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'obviate' means to remove (a need or difficulty); to avoid or prevent." +
            "<br><br>" +
            "(A) 'increase' means to become or make greater in size, amount, or degree." +
            "<br><br>" +
            "(C) 'ignore' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(D) 'complicate' means to make (something) more difficult or confusing by causing it to be more complex.",
        chinese_explanation: "(B) '消除' 意味着消除（需要或困难）；避免或预防。" +
            "<br><br>" +
            "(A) '增加' 意味着在大小、数量或程度上变得更大或使其变得更大。" +
            "<br><br>" +
            "(C) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(D) '使复杂' 意味着通过使其更加复杂来使（某事物）更加困难或令人困惑。"
    },
    {
        id: 2,
        question: "The government decided to __________ public spending in an effort to reduce the national deficit.",
        chinese_question: "政府决定 __________ 公共支出，以减少国家赤字。",
        answers: [
            { option: "A", answer: "curtail", chinese_answer: "削减", chinese_romanization: "xuējiǎn" },
            { option: "B", answer: "expand", chinese_answer: "扩大", chinese_romanization: "kuòdà" },
            { option: "C", answer: "prolong", chinese_answer: "延长", chinese_romanization: "yáncháng" },
            { option: "D", answer: "increase", chinese_answer: "增加", chinese_romanization: "zēngjiā" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'curtail' means to reduce in extent or quantity; to impose a restriction on." +
            "<br><br>" +
            "(B) 'expand' means to increase in size, number, or importance." +
            "<br><br>" +
            "(C) 'prolong' means to extend the duration of." +
            "<br><br>" +
            "(D) 'increase' means to become or make greater in size, amount, or degree.",
        chinese_explanation: "(A) '削减' 意味着减少范围或数量；施加限制。" +
            "<br><br>" +
            "(B) '扩大' 意味着增加大小、数量或重要性。" +
            "<br><br>" +
            "(C) '延长' 意味着延长持续时间。" +
            "<br><br>" +
            "(D) '增加' 意味着在大小、数量或程度上变大或变多。"
    },
    {
        id: 3,
        question: "In an effort to __________ the financial burden on families, the government introduced new tax relief measures.",
        chinese_question: "为了 __________ 家庭的财务负担，政府推出了新的税收减免措施。",
        answers: [
            { option: "A", answer: "mitigate", chinese_answer: "缓解", chinese_romanization: "huǎnjiě" },
            { option: "B", answer: "aggravate", chinese_answer: "加重", chinese_romanization: "jiāzhòng" },
            { option: "C", answer: "intensify", chinese_answer: "加剧", chinese_romanization: "jiājù" },
            { option: "D", answer: "exacerbate", chinese_answer: "恶化", chinese_romanization: "èhuà" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'mitigate' means to make less severe, serious, or painful." +
            "<br><br>" +
            "(B) 'aggravate' means to make a problem, injury, or offense worse or more serious." +
            "<br><br>" +
            "(C) 'intensify' means to increase in extent or strength." +
            "<br><br>" +
            "(D) 'exacerbate' means to make a problem, bad situation, or negative feeling worse.",
        chinese_explanation: "(A) '缓解' 意味着使不那么严重、严重或痛苦。" +
            "<br><br>" +
            "(B) '加重' 意味着使问题、伤害或罪行变得更糟或更严重。" +
            "<br><br>" +
            "(C) '加剧' 意味着在程度或强度上增加。" +
            "<br><br>" +
            "(D) '恶化' 意味着使问题、糟糕的情况或消极情绪变得更糟。"
    },
    {
        id: 4,
        question: "The disgruntled employee __________ his supervisor in front of the entire office, accusing him of unfair treatment.",
        chinese_question: "不满的员工在整个办公室面前 __________ 他的主管，指责他不公平的待遇。",
        answers: [
            { option: "A", answer: "praised", chinese_answer: "赞扬", chinese_romanization: "zànyáng" },
            { option: "B", answer: "apologized to", chinese_answer: "道歉", chinese_romanization: "dàoqiàn" },
            { option: "C", answer: "vituperated", chinese_answer: "谩骂", chinese_romanization: "mànmà" },
            { option: "D", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'vituperated' means to blame or insult someone in strong or violent language." +
            "<br><br>" +
            "(A) 'praised' means to express warm approval or admiration of." +
            "<br><br>" +
            "(B) 'apologized to' means to express regret for something that one has done wrong." +
            "<br><br>" +
            "(D) 'ignored' means to refuse to take notice of or acknowledge; disregard intentionally.",
        chinese_explanation: "(C) '谩骂' 意味着用强烈或暴力的语言责备或侮辱某人。" +
            "<br><br>" +
            "(A) '赞扬' 意味着表示热烈的认可或钦佩。" +
            "<br><br>" +
            "(B) '道歉' 意味着对自己做错的事表示遗憾。" +
            "<br><br>" +
            "(D) '忽视' 意味着拒绝注意或承认；故意忽视。"
    },
    {
        id: 5,
        question: "The fields of wheat __________ in the breeze, creating a mesmerizing wave-like motion.",
        chinese_question: "麦田在微风中 __________，形成了迷人的波浪状运动。",
        answers: [
            { option: "A", answer: "stood still", chinese_answer: "静止不动", chinese_romanization: "jìngzhǐ bù dòng" },
            { option: "B", answer: "wilted", chinese_answer: "枯萎", chinese_romanization: "kūwěi" },
            { option: "C", answer: "dried up", chinese_answer: "干涸", chinese_romanization: "gānhé" },
            { option: "D", answer: "undulated", chinese_answer: "起伏", chinese_romanization: "qǐfú" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'undulated' means moved with a smooth, wavelike motion." +
            "<br><br>" +
            "(A) 'stood still' means remained in a fixed or stable position without moving." +
            "<br><br>" +
            "(B) 'wilted' means became limp through heat, loss of water, or disease; drooped." +
            "<br><br>" +
            "(C) 'dried up' means lost all moisture and became dry.",
        chinese_explanation: "(D) '起伏' 意味着以平滑的波浪状运动移动。" +
            "<br><br>" +
            "(A) '静止不动' 意味着保持在固定或稳定位置不动。" +
            "<br><br>" +
            "(B) '枯萎' 意味着因高温、水分流失或疾病而变得无力；下垂。" +
            "<br><br>" +
            "(C) '干涸' 意味着失去所有水分并变干。"
    },
    {
        id: 6,
        question: "In the pharmaceutical company, the senior scientist did not hesitate to __________ the junior researchers for their repeated mistakes in the lab reports.",
        chinese_question: "在制药公司，高级科学家毫不犹豫地 __________ 初级研究人员在实验报告中反复出现的错误。",
        answers: [
            { option: "A", answer: "upbraid", chinese_answer: "责骂", chinese_romanization: "zémà" },
            { option: "B", answer: "praise", chinese_answer: "赞扬", chinese_romanization: "zànyáng" },
            { option: "C", answer: "console", chinese_answer: "安慰", chinese_romanization: "ānwèi" },
            { option: "D", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'upbraid' means to find fault with someone; scold." +
            "<br><br>" +
            "(B) 'praise' means to express warm approval or admiration of." +
            "<br><br>" +
            "(C) 'console' means to comfort someone at a time of grief or disappointment." +
            "<br><br>" +
            "(D) 'ignore' means to refuse to take notice of or acknowledge; disregard intentionally.",
        chinese_explanation: "(A) '责骂' 意味着挑剔某人的错误；责备。" +
            "<br><br>" +
            "(B) '赞扬' 意味着表示热烈的认可或钦佩。" +
            "<br><br>" +
            "(C) '安慰' 意味着在悲伤或失望时安慰某人。" +
            "<br><br>" +
            "(D) '忽视' 意味着拒绝注意或承认；故意忽视。"
    },
    {
        id: 7,
        question: "The editor decided to __________ the lengthy article to fit the word limit of the magazine.",
        chinese_question: "编辑决定 __________ 这篇冗长的文章，以符合杂志的字数限制。",
        answers: [
            { option: "A", answer: "expand", chinese_answer: "扩展", chinese_romanization: "kuòzhǎn" },
            { option: "B", answer: "truncate", chinese_answer: "截短", chinese_romanization: "jiéduǎn" },
            { option: "C", answer: "embellish", chinese_answer: "润色", chinese_romanization: "rùnsè" },
            { option: "D", answer: "translate", chinese_answer: "翻译", chinese_romanization: "fānyì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'truncate' means to shorten something by cutting off the top or the end." +
            "<br><br>" +
            "(A) 'expand' means to become or make larger or more extensive." +
            "<br><br>" +
            "(C) 'embellish' means to make something more attractive by the addition of decorative details or features." +
            "<br><br>" +
            "(D) 'translate' means to express the sense of words or text in another language.",
        chinese_explanation: "(B) '截短' 意味着通过切掉顶部或末端来缩短某物。" +
            "<br><br>" +
            "(A) '扩展' 意味着变大或扩大。" +
            "<br><br>" +
            "(C) '润色' 意味着通过添加装饰性细节或特征使某物更具吸引力。" +
            "<br><br>" +
            "(D) '翻译' 意味着用另一种语言表达词语或文本的意思。"
    },
    {
        id: 8,
        question: "The employee was warned not to __________ the company's strict confidentiality policies.",
        chinese_question: "员工被警告不要 __________ 公司的严格保密政策。",
        answers: [
            { option: "A", answer: "transgress", chinese_answer: "违反", chinese_romanization: "wéifǎn" },
            { option: "B", answer: "adhere to", chinese_answer: "遵守", chinese_romanization: "zūnshǒu" },
            { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "D", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'transgress' means to go beyond the bounds of a moral principle or other established standard of behavior." +
            "<br><br>" +
            "(B) 'adhere to' means to stick firmly to a rule, guideline, or belief." +
            "<br><br>" +
            "(C) 'ignore' means to refuse to take notice of or acknowledge; disregard intentionally." +
            "<br><br>" +
            "(D) 'support' means to bear all or part of the weight of; hold up.",
        chinese_explanation: "(A) '违反' 意味着超越道德原则或其他既定行为标准的界限。" +
            "<br><br>" +
            "(B) '遵守' 意味着坚定地坚持一条规则、指南或信仰。" +
            "<br><br>" +
            "(C) '忽视' 意味着拒绝注意或承认；故意忽视。" +
            "<br><br>" +
            "(D) '支持' 意味着承担全部或部分重量；支撑。"
    },
    {
        id: 9,
        question: "The new evidence was able to __________ the accused, proving that he was not at the scene of the crime.",
        chinese_question: "新证据能够 __________ 被告，证明他不在犯罪现场。",
        answers: [
            { option: "A", answer: "accuse", chinese_answer: "指控", chinese_romanization: "zhǐkòng" },
            { option: "B", answer: "condemn", chinese_answer: "谴责", chinese_romanization: "qiǎnzé" },
            { option: "C", answer: "implicate", chinese_answer: "牵连", chinese_romanization: "qiānlián" },
            { option: "D", answer: "vindicate", chinese_answer: "证明无辜", chinese_romanization: "zhèngmíng wúgū" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'vindicate' means to clear someone of blame or suspicion." +
            "<br><br>" +
            "(A) 'accuse' means to charge someone with an offense or crime." +
            "<br><br>" +
            "(B) 'condemn' means to express complete disapproval of, typically in public; censure." +
            "<br><br>" +
            "(C) 'implicate' means to show someone to be involved in a crime.",
        chinese_explanation: "(D) '证明无辜' 意味着清除某人的责备或怀疑。" +
            "<br><br>" +
            "(A) '指控' 意味着指控某人犯罪。" +
            "<br><br>" +
            "(B) '谴责' 意味着公开表示完全不赞成；责难。" +
            "<br><br>" +
            "(C) '牵连' 意味着显示某人参与犯罪。"
    },
    {
        id: 10,
        question: "The development of a vaccine has __________ the need for strict quarantine measures.",
        chinese_question: "疫苗的开发已经 __________ 了严格的隔离措施的需要。",
        answers: [
                { option: "A", answer: "created", chinese_answer: "创造", chinese_romanization: "chuàngzào" },
                { option: "B", answer: "complicated", chinese_answer: "使复杂", chinese_romanization: "shǐ fùzá" },
                { option: "C", answer: "obviated", chinese_answer: "消除", chinese_romanization: "xiāochú" },
                { option: "D", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'obviated' means to remove (a need or difficulty); to avoid or prevent." +
            "<br><br>" +
            "(A) 'created' means to bring (something) into existence." +
            "<br><br>" +
            "(B) 'complicated' means to make (something) more difficult or confusing by causing it to be more complex." +
            "<br><br>" +
            "(D) 'ignored' means to refuse to take notice of or acknowledge.",
        chinese_explanation: "(C) '消除' 意味着消除（需要或困难）；避免或预防。" +
            "<br><br>" +
            "(A) '创造' 意味着将（某物）带入存在。" +
            "<br><br>" +
            "(B) '使复杂' 意味着通过使其更加复杂来使（某事物）更加困难或令人困惑。" +
            "<br><br>" +
            "(D) '忽视' 意味着拒绝注意或承认。"
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
