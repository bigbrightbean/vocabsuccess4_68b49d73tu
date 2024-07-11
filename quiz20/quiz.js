// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "She found the group of people at the new job to be very __________, making her feel welcomed and comfortable.",
        chinese_question: "她发现新工作的那群人非常 __________，让她感到受欢迎和舒适。",
        answers: [
            { option: "A", answer: "hostile", chinese_answer: "敌对的", chinese_romanization: "díduì de" },
            { option: "B", answer: "unfriendly", chinese_answer: "不友好的", chinese_romanization: "bù yǒuhǎo de" },
            { option: "C", answer: "congenial", chinese_answer: "友善的", chinese_romanization: "yǒushàn de" },
            { option: "D", answer: "aloof", chinese_answer: "冷漠的", chinese_romanization: "lěngmò de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'congenial' means (of a person) pleasant because of a personality, qualities, or interests that are similar to one's own." +
            "<br><br>" +
            "(A) 'hostile' means unfriendly; antagonistic." +
            "<br><br>" +
            "(B) 'unfriendly' means not friendly." +
            "<br><br>" +
            "(D) 'aloof' means not friendly or forthcoming; cool and distant.",
        chinese_explanation: "(C) '友善的' 一词意味着（人）因个性、品质或兴趣与自己相似而令人愉快的。" +
            "<br><br>" +
            "(A) '敌对的' 意味着不友好的；对抗的。" +
            "<br><br>" +
            "(B) '不友好的' 意味着不友好的。" +
            "<br><br>" +
            "(D) '冷漠的' 意味着不友好或不乐意的；冷淡的。"
    },
    {
        id: 2,
        question: "The connection between the two events was __________ at best, with no clear evidence to support a direct link.",
        chinese_question: "两件事之间的联系充其量是 __________ 的，没有明确的证据支持直接的联系。",
        answers: [
            { option: "A", answer: "tenuous", chinese_answer: "脆弱的", chinese_romanization: "cuìruò de" },
            { option: "B", answer: "clear", chinese_answer: "清楚的", chinese_romanization: "qīngchǔ de" },
            { option: "C", answer: "strong", chinese_answer: "强的", chinese_romanization: "qiáng de" },
            { option: "D", answer: "obvious", chinese_answer: "明显的", chinese_romanization: "míngxiǎn de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'tenuous' means very weak or slight." +
            "<br><br>" +
            "(B) 'clear' means easy to perceive, understand, or interpret." +
            "<br><br>" +
            "(C) 'strong' means having the power to move heavy weights or perform other physically demanding tasks." +
            "<br><br>" +
            "(D) 'obvious' means easily perceived or understood; clear, self-evident, or apparent.",
        chinese_explanation: "(A) '脆弱的' 一词意味着非常弱或轻微的。" +
            "<br><br>" +
            "(B) '清楚的' 意味着容易感知、理解或解释的。" +
            "<br><br>" +
            "(C) '强的' 意味着有能力移动重物或执行其他体力要求高的任务。" +
            "<br><br>" +
            "(D) '明显的' 意味着容易感知或理解的；清楚的，不言自明的，显而易见的。"
    },
    {
        id: 3,
        question: "The new policies were criticized for being too __________, giving the government excessive control over people's lives.",
        chinese_question: "新政策因过于 __________ 而受到批评，认为政府对人民生活的控制过多。",
        answers: [
            { option: "A", answer: "democratic", chinese_answer: "民主的", chinese_romanization: "mínzhǔ de" },
            { option: "B", answer: "libertarian", chinese_answer: "自由主义的", chinese_romanization: "zìyóu zhǔyì de" },
            { option: "C", answer: "authoritarian", chinese_answer: "专制的", chinese_romanization: "zhuānzhì de" },
            { option: "D", answer: "permissive", chinese_answer: "放任的", chinese_romanization: "fàngrèn de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'authoritarian' means favoring or enforcing strict obedience to authority, especially that of the government, at the expense of personal freedom." +
            "<br><br>" +
            "(A) 'democratic' means relating to or supporting democracy or its principles." +
            "<br><br>" +
            "(B) 'libertarian' means a person who advocates civil liberty." +
            "<br><br>" +
            "(D) 'permissive' means allowing or characterized by great or excessive freedom of behavior.",
        chinese_explanation: "(C) '专制的' 一词意味着赞成或强制严格服从权威，特别是政府的权威，牺牲个人自由。" +
            "<br><br>" +
            "(A) '民主的' 意味着与民主或其原则有关的。" +
            "<br><br>" +
            "(B) '自由主义的' 意味着主张公民自由的人。" +
            "<br><br>" +
            "(D) '放任的' 意味着允许或以很大或过度行为自由为特征的。"
    },
    {
        id: 4,
        question: "The extra costs were __________, but they added up over time, making the project more expensive than anticipated.",
        chinese_question: "额外的费用是 __________ 的，但随着时间的推移，它们累积起来，使项目比预期的更昂贵。",
        answers: [
            { option: "A", answer: "essential", chinese_answer: "必要的", chinese_romanization: "bìyào de" },
            { option: "B", answer: "incidental", chinese_answer: "附带的", chinese_romanization: "fùdài de" },
            { option: "C", answer: "central", chinese_answer: "中心的", chinese_romanization: "zhōngxīn de" },
            { option: "D", answer: "critical", chinese_answer: "关键的", chinese_romanization: "guānjiàn de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'incidental' means accompanying but not a major part of something." +
            "<br><br>" +
            "(A) 'essential' means absolutely necessary; extremely important." +
            "<br><br>" +
            "(C) 'central' means of, at, or forming the center." +
            "<br><br>" +
            "(D) 'critical' means of crucial importance in relation to the development or success of something.",
        chinese_explanation: "(B) '附带的' 一词意味着伴随但不是主要部分的。" +
            "<br><br>" +
            "(A) '必要的' 意味着绝对必要的；极其重要的。" +
            "<br><br>" +
            "(C) '中心的' 意味着在、或形成中心的。" +
            "<br><br>" +
            "(D) '关键的' 意味着在发展或成功中至关重要的。"
    },
    {
        id: 5,
        question: "The __________ organization provided free meals and clothing to the homeless every day.",
        chinese_question: "这家 __________ 组织每天为无家可归者提供免费餐食和衣物。",
        answers: [
            { option: "A", answer: "profitable", chinese_answer: "盈利的", chinese_romanization: "yínglì de" },
            { option: "B", answer: "commercial", chinese_answer: "商业的", chinese_romanization: "shāngyè de" },
            { option: "C", answer: "private", chinese_answer: "私人的", chinese_romanization: "sīrén de" },
            { option: "D", answer: "eleemosynary", chinese_answer: "慈善的", chinese_romanization: "císhàn de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'eleemosynary' means relating to or dependent on charity. It describes an organization or action that provides help to those in need, often through donations." +
            "<br><br>" +
            "(A) 'profitable' means yielding profit or financial gain." +
            "<br><br>" +
            "(B) 'commercial' means concerned with or engaged in commerce." +
            "<br><br>" +
            "(C) 'private' means belonging to or for the use of one particular person or group; not public.",
        chinese_explanation: "(D) '慈善的' 意味着与慈善有关或依赖慈善的。它描述了一个通过捐赠为需要帮助的人提供帮助的组织或行为。" +
            "<br><br>" +
            "(A) '盈利的' 意味着带来利润或财务收益的。" +
            "<br><br>" +
            "(B) '商业的' 意味着与商业有关或从事商业的。" +
            "<br><br>" +
            "(C) '私人的' 意味着属于或供一个特定的人或团体使用的；非公共的。"
    },
    {
        id: 6,
        question: "Her thoughts about the project were still __________, lacking clear direction or structure.",
        chinese_question: "她对项目的想法仍然很 __________，缺乏明确的方向或结构。",
        answers: [
            { option: "A", answer: "focused", chinese_answer: "集中的", chinese_romanization: "jízhōng de" },
            { option: "B", answer: "detailed", chinese_answer: "详细的", chinese_romanization: "xiángxì de" },
            { option: "C", answer: "amorphous", chinese_answer: "模糊的", chinese_romanization: "móhú de" },
            { option: "D", answer: "organized", chinese_answer: "有组织的", chinese_romanization: "yǒu zǔzhī de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'amorphous' figuratively means lacking a clear structure or focus." +
            "<br><br>" +
            "(A) 'focused' means directed at something specific." +
            "<br><br>" +
            "(B) 'detailed' means having many details or facts; showing attention to detail." +
            "<br><br>" +
            "(D) 'organized' means arranged in a systematic way.",
        chinese_explanation: "(C) '模糊的' 在比喻意义上意味着缺乏明确的结构或重点。" +
            "<br><br>" +
            "(A) '集中的' 意味着针对特定的事物。" +
            "<br><br>" +
            "(B) '详细的' 意味着有很多细节或事实；注重细节。" +
            "<br><br>" +
            "(D) '有组织的' 意味着以系统的方式安排。"
    },
    {
        id: 7,
        question: "Despite his efforts to avoid it, the __________ conclusion of the meeting was that the company had to downsize.",
        chinese_question: "尽管他努力避免，但会议的 __________ 结论是公司必须裁员。",
        answers: [
            { option: "A", answer: "avoidable", chinese_answer: "可避免的", chinese_romanization: "kě bìmiǎn de" },
            { option: "B", answer: "optional", chinese_answer: "可选择的", chinese_romanization: "kě xuǎnzé de" },
            { option: "C", answer: "uncertain", chinese_answer: "不确定的", chinese_romanization: "bù quèdìng de" },
            { option: "D", answer: "ineluctable", chinese_answer: "不可避免的", chinese_romanization: "bù kě bìmiǎn de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'ineluctable' means unable to be resisted or avoided; inescapable." +
            "<br><br>" +
            "(A) 'avoidable' means able to be avoided or prevented." +
            "<br><br>" +
            "(B) 'optional' means available to be chosen but not obligatory." +
            "<br><br>" +
            "(C) 'uncertain' means not able to be relied on; not known or definite.",
        chinese_explanation: "(D) '不可避免的' 意味着无法抵抗或避免的；不可逃避的。" +
            "<br><br>" +
            "(A) '可避免的' 意味着能够避免或防止的。" +
            "<br><br>" +
            "(B) '可选择的' 意味着可供选择但不是强制性的。" +
            "<br><br>" +
            "(C) '不确定的' 意味着无法依赖的；未知或不确定的。"
    },
    {
        id: 8,
        question: "The __________ interests of the scholar made him an expert in various fields, from astronomy to zoology.",
        chinese_question: "这位学者的 __________ 兴趣使他成为各个领域的专家，从天文学到动物学。",
        answers: [
            { option: "A", answer: "limited", chinese_answer: "有限的", chinese_romanization: "yǒuxiàn de" },
            { option: "B", answer: "multifarious", chinese_answer: "多方面的", chinese_romanization: "duō fāngmiàn de" },
            { option: "C", answer: "narrow", chinese_answer: "狭窄的", chinese_romanization: "xiázhǎi de" },
            { option: "D", answer: "specific", chinese_answer: "特定的", chinese_romanization: "tèdìng de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'multifarious' means many and of various types." +
            "<br><br>" +
            "(A) 'limited' means restricted in size, amount, or extent; few, small, or short." +
            "<br><br>" +
            "(C) 'narrow' means of small width in relation to length." +
            "<br><br>" +
            "(D) 'specific' means clearly defined or identified.",
        chinese_explanation: "(B) '多方面的' 一词意味着许多和各种类型的。" +
            "<br><br>" +
            "(A) '有限的' 意味着在规模、数量或范围上有限；少的、小的或短的。" +
            "<br><br>" +
            "(C) '狭窄的' 意味着与长度相比宽度小的。" +
            "<br><br>" +
            "(D) '特定的' 意味着明确定义或确定的。"
    },
    {
        id: 9,
        question: "The __________ artist struggled to buy new supplies, often relying on donations from friends.",
        chinese_question: "这位 __________ 的艺术家难以购买新的用品，常常依靠朋友的捐赠。",
        answers: [
            { option: "A", answer: "wealthy", chinese_answer: "富有的", chinese_romanization: "fùyǒu de" },
            { option: "B", answer: "affluent", chinese_answer: "富裕的", chinese_romanization: "fùyù de" },
            { option: "C", answer: "impecunious", chinese_answer: "贫困的", chinese_romanization: "pínkùn de" },
            { option: "D", answer: "prosperous", chinese_answer: "繁荣的", chinese_romanization: "fánróng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'impecunious' means having little or no money." +
            "<br><br>" +
            "(A) 'wealthy' means having a great deal of money, resources, or assets; rich." +
            "<br><br>" +
            "(B) 'affluent' means having a great deal of money; wealthy." +
            "<br><br>" +
            "(D) 'prosperous' means successful in material terms; flourishing financially.",
        chinese_explanation: "(C) '贫困的' 一词意味着几乎没有钱的。" +
            "<br><br>" +
            "(A) '富有的' 意味着拥有大量金钱、资源或资产；富裕的。" +
            "<br><br>" +
            "(B) '富裕的' 意味着拥有大量金钱；富裕的。" +
            "<br><br>" +
            "(D) '繁荣的' 意味着物质上成功的；经济上繁荣的。"
    },
    {
        id: 10,
        question: "She was __________ to new ideas and always willing to listen to different perspectives.",
        chinese_question: "她对新想法 __________，总是愿意倾听不同的观点。",
        answers: [
            { option: "A", answer: "stubborn", chinese_answer: "固执", chinese_romanization: "gùzhí" },
            { option: "B", answer: "amenable", chinese_answer: "顺从", chinese_romanization: "shùncóng" },
            { option: "C", answer: "resistant", chinese_answer: "抵抗", chinese_romanization: "dǐkàng" },
            { option: "D", answer: "unyielding", chinese_answer: "坚定", chinese_romanization: "jiāndìng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'amenable' means open and responsive to suggestion; easily persuaded or controlled." +
            "<br><br>" +
            "(A) 'stubborn' means having or showing dogged determination not to change one's attitude or position on something." +
            "<br><br>" +
            "(C) 'resistant' means offering resistance to something or someone." +
            "<br><br>" +
            "(D) 'unyielding' means not giving way to pressure; hard or solid.",
        chinese_explanation: "(B) '顺从' 一词意味着对建议开放和响应；容易被说服或控制。" +
            "<br><br>" +
            "(A) '固执' 意味着顽固地决心不改变对某事的态度或立场。" +
            "<br><br>" +
            "(C) '抵抗' 意味着对某事或某人提供抵抗。" +
            "<br><br>" +
            "(D) '坚定' 意味着不屈服于压力；坚硬或坚固。"
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
