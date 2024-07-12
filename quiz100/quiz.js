// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "She had to __________ through her busy schedule to find time for a short break.",
        chinese_question: "她不得不 __________ 穿过繁忙的日程安排，找时间小憩片刻。",
        answers: [
            { option: "A", answer: "clamber", chinese_answer: "艰难地穿过", chinese_romanization: "jiānnán de chuānguò" },
            { option: "B", answer: "breeze", chinese_answer: "轻松", chinese_romanization: "qīngsōng" },
            { option: "C", answer: "sail", chinese_answer: "航行", chinese_romanization: "hángxíng" },
            { option: "D", answer: "fly", chinese_answer: "飞", chinese_romanization: "fēi" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'clamber' metaphorically means to struggle to move through or manage something." +
            "<br><br>" +
            "(B) 'breeze' means a gentle wind." +
            "<br><br>" +
            "(C) 'sail' means travel in a boat with sails, especially as a sport or recreation." +
            "<br><br>" +
            "(D) 'fly' means move through the air using wings.",
        chinese_explanation: "(A) '艰难地穿过' 比喻努力穿过或管理某事。" +
            "<br><br>" +
            "(B) '轻松' 意味着轻柔的风。" +
            "<br><br>" +
            "(C) '航行' 意味着乘风航行，特别是作为运动或娱乐。" +
            "<br><br>" +
            "(D) '飞' 意味着使用翅膀在空中移动。"
    },
    {
        id: 2,
        question: "The mentor decided to __________ his wisdom and experience to the young apprentice.",
        chinese_question: "导师决定将他的智慧和经验__________给年轻的学徒。",
        answers: [
            { option: "A", answer: "withhold", chinese_answer: "扣留", chinese_romanization: "kòuliú" },
            { option: "B", answer: "bestow", chinese_answer: "授予", chinese_romanization: "shòuyǔ" },
            { option: "C", answer: "deny", chinese_answer: "否认", chinese_romanization: "fǒurèn" },
            { option: "D", answer: "retract", chinese_answer: "撤回", chinese_romanization: "chèhuí" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'bestow' means to confer or present (an honor, right, or gift). Figuratively, it can mean to give or impart something valuable or meaningful." + 
            "<br><br>" + 
            "(A) 'withhold' means to refuse to give (something that is due to or is desired by another)." + 
            "<br><br>" + 
            "(C) 'deny' means to state that one refuses to admit the truth or existence of." + 
            "<br><br>" + 
            "(D) 'retract' means to draw back or withdraw (a statement or accusation) as untrue or unjustified.",
        chinese_explanation: "(B) '授予'一词意味着授予或呈现（荣誉、权利或礼物）。比喻地，它可以表示给予或传授有价值或有意义的东西。" + 
            "<br><br>" + 
            "(A) '扣留' 意味着拒绝给予（应归属于或希望得到的东西）。" + 
            "<br><br>" + 
            "(C) '否认' 意味着声明拒绝承认真实性或存在性。" + 
            "<br><br>" + 
            "(D) '撤回' 意味着撤回或撤销（声明或指控）为不真实或不公正的。"
    },
    {
        id: 3,
        question: "In her letter, she __________ him to forgive her for the mistake she had made.",
        chinese_question: "在她的信中，她__________他原谅她犯的错误。",
        answers: [
            { option: "A", answer: "commanded", chinese_answer: "命令", chinese_romanization: "mìnglìng" },
            { option: "B", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "C", answer: "beseeched", chinese_answer: "恳求", chinese_romanization: "kěnqiú" },
            { option: "D", answer: "demanded", chinese_answer: "要求", chinese_romanization: "yāoqiú" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'beseeched' means to ask someone urgently and fervently to do something; implore; entreat. Figuratively, it can mean to earnestly ask or request something." + 
            "<br><br>" + 
            "(A) 'commanded' means to give an authoritative order." + 
            "<br><br>" + 
            "(B) 'ignored' means to refuse to take notice of or acknowledge." + 
            "<br><br>" + 
            "(D) 'demanded' means to ask for authoritatively or brusquely.",
        chinese_explanation: "(C) '恳求'一词意味着急切而热切地请求某人做某事；恳求；祈求。比喻地，它可以表示真诚地请求或请求某事。" + 
            "<br><br>" + 
            "(A) '命令' 意味着发布权威命令。" + 
            "<br><br>" + 
            "(B) '忽视' 意味着拒绝注意或承认。" + 
            "<br><br>" + 
            "(D) '要求' 意味着以权威或粗鲁的方式要求。"
    },
    {
        id: 4,
        question: "Many people believe that electric cars will eventually __________ gasoline cars as the main type of vehicle.",
        chinese_question: "许多人认为电动汽车最终会__________汽油汽车，成为主要的车辆类型。",
        answers: [
            { option: "A", answer: "build", chinese_answer: "建造", chinese_romanization: "jiànzào" },
            { option: "B", answer: "fix", chinese_answer: "修理", chinese_romanization: "xiūlǐ" },
            { option: "C", answer: "decorate", chinese_answer: "装饰", chinese_romanization: "zhuāngshì" },
            { option: "D", answer: "supplant", chinese_answer: "取代", chinese_romanization: "qǔdài" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'supplant' means to take the place of something or someone." +
            "<br><br>" +
            "(A) 'build' means to construct something by putting parts together." +
            "<br><br>" +
            "(B) 'fix' means to repair something that is broken or damaged." +
            "<br><br>" +
            "(C) 'decorate' means to make something look more attractive by adding things to it.",
        chinese_explanation: "(D) '取代' 意思是取代某物或某人的位置。" +
            "<br><br>" +
            "(A) '建造' 意思是通过组装部件来构建某物。" +
            "<br><br>" +
            "(B) '修理' 意思是修复损坏或损坏的东西。" +
            "<br><br>" +
            "(C) '装饰' 意思是通过添加东西使某物看起来更有吸引力。"
    },
    {
        id: 5,
        question: "She tried to __________ any further arguments by changing the subject.",
        chinese_question: "她试图通过改变话题来 __________ 进一步的争论。",
        answers: [
            { option: "A", answer: "avert", chinese_answer: "避免", chinese_romanization: "bìmiǎn" },
            { option: "B", answer: "incite", chinese_answer: "煽动", chinese_romanization: "shāndòng" },
            { option: "C", answer: "provoke", chinese_answer: "激起", chinese_romanization: "jīqǐ" },
            { option: "D", answer: "start", chinese_answer: "开始", chinese_romanization: "kāishǐ" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'avert' metaphorically means to prevent or ward off." + 
            "<br><br>" + 
            "(B) 'incite' means encourage or stir up (violent or unlawful behavior)." + 
            "<br><br>" + 
            "(C) 'provoke' means stimulate or give rise to (a reaction or emotion, typically a strong or unwelcome one) in someone." + 
            "<br><br>" + 
            "(D) 'start' means begin or set out on an activity or enterprise.",
        chinese_explanation: "(A) '避免' 比喻防止或避免。" + 
            "<br><br>" + 
            "(B) '煽动' 意味着鼓励或煽动（暴力或非法行为）。" + 
            "<br><br>" + 
            "(C) '激起' 意味着引起（反应或情感，通常是强烈的或不受欢迎的）在某人身上。" + 
            "<br><br>" + 
            "(D) '开始' 意味着开始或开展某项活动或事业。"
    },
    {
        id: 6,
        question: "The manager was often called upon to __________ conflicts between team members.",
        chinese_question: "经理经常被叫来 __________ 团队成员之间的冲突。",
        answers: [
            { option: "A", answer: "initiate", chinese_answer: "发起", chinese_romanization: "fāqǐ" },
            { option: "B", answer: "provoke", chinese_answer: "刺激", chinese_romanization: "cìjī" },
            { option: "C", answer: "complicate", chinese_answer: "复杂化", chinese_romanization: "fùzá huà" },
            { option: "D", answer: "arbitrate", chinese_answer: "调解", chinese_romanization: "tiáojiě" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'arbitrate' metaphorically means to act as a judge in a dispute." + 
            "<br><br>" + 
            "(A) 'initiate' means cause (a process or action) to begin." + 
            "<br><br>" + 
            "(B) 'provoke' means stimulate or give rise to (a reaction or emotion, typically a strong or unwelcome one) in someone." + 
            "<br><br>" + 
            "(C) 'complicate' means make (something) more difficult or confusing by causing it to be more complex.",
        chinese_explanation: "(D) '调解' 比喻在争端中充当法官。" + 
            "<br><br>" + 
            "(A) '发起' 意味着导致（过程或行动）开始。" + 
            "<br><br>" + 
            "(B) '刺激' 意味着引起（反应或情感，通常是强烈的或不受欢迎的）在某人身上。" + 
            "<br><br>" + 
            "(C) '复杂化' 意味着使（某事）变得更困难或更混乱，导致其更复杂。"
    },
    {
        id: 7,
        question: "She didn't want to __________ her neighbors by hosting loud parties.",
        chinese_question: "她不想通过举办喧闹的派对来 __________ 邻居。",
        answers: [
            { option: "A", answer: "antagonize", chinese_answer: "惹恼", chinese_romanization: "rěnǎo" },
            { option: "B", answer: "delight", chinese_answer: "高兴", chinese_romanization: "gāoxìng" },
            { option: "C", answer: "entertain", chinese_answer: "娱乐", chinese_romanization: "yúlè" },
            { option: "D", answer: "welcome", chinese_answer: "欢迎", chinese_romanization: "huānyíng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'antagonize' metaphorically means to incur the dislike of; provoke hostility." + 
            "<br><br>" + 
            "(B) 'delight' means please (someone) greatly." + 
            "<br><br>" + 
            "(C) 'entertain' means provide (someone) with amusement or enjoyment." + 
            "<br><br>" + 
            "(D) 'welcome' means greet (someone arriving) in a glad, polite, or friendly way.",
        chinese_explanation: "(A) '惹恼' 比喻招致不喜欢；引发敌意。" + 
            "<br><br>" + 
            "(B) '高兴' 意味着使（某人）非常高兴。" + 
            "<br><br>" + 
            "(C) '娱乐' 意味着提供（某人）娱乐或享受。" + 
            "<br><br>" + 
            "(D) '欢迎' 意味着高兴、礼貌或友好地迎接（某人到来）。"
    },
    {
        id: 8,
        question: "The company's latest product had the potential to __________ the competition.",
        chinese_question: "公司的最新产品有可能 __________ 竞争对手。",
        answers: [
            { option: "A", answer: "assist", chinese_answer: "帮助", chinese_romanization: "bāngzhù" },
            { option: "B", answer: "revive", chinese_answer: "恢复", chinese_romanization: "huīfù" },
            { option: "C", answer: "boost", chinese_answer: "促进", chinese_romanization: "cùjìn" },
            { option: "D", answer: "annihilate", chinese_answer: "击败", chinese_romanization: "jíbài" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'annihilate' metaphorically means to defeat completely." + 
            "<br><br>" + 
            "(A) 'assist' means help (someone), typically by doing a share of the work." + 
            "<br><br>" + 
            "(B) 'revive' means restore to life or consciousness." + 
            "<br><br>" + 
            "(C) 'boost' means help or encourage (something) to increase or improve.",
        chinese_explanation: "(D) '击败' 比喻彻底击败。" + 
            "<br><br>" + 
            "(A) '帮助' 意味着帮助（某人），通常通过分担工作。" + 
            "<br><br>" + 
            "(B) '恢复' 意味着恢复生命或意识。" + 
            "<br><br>" + 
            "(C) '促进' 意味着帮助或鼓励（某事）增加或改善。"
    },
    {
        id: 9,
        question: "The detective had to __________ the clues meticulously, examining each piece of evidence to find out who committed the crime.",
        chinese_question: "侦探必须仔细__________线索，检查每一件证据，以找出谁犯了罪。",
        answers: [
            { option: "A", answer: "hide", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" },
            { option: "B", answer: "destroy", chinese_answer: "销毁", chinese_romanization: "xiāohuǐ" },
            { option: "C", answer: "create", chinese_answer: "创造", chinese_romanization: "chuàngzào" },
            { option: "D", answer: "parse", chinese_answer: "解析", chinese_romanization: "jiěxī" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'parse' means to examine or analyze something carefully." +
            "<br><br>" +
            "(A) 'hide' means to put something where it cannot be seen." +
            "<br><br>" +
            "(B) 'destroy' means to damage something so badly that it cannot be used." +
            "<br><br>" +
            "(C) 'create' means to make something new.",
        chinese_explanation: "(D) '解析' 意思是仔细检查或分析某事。" +
            "<br><br>" +
            "(A) '隐藏' 意思是将某物放在看不见的地方。" +
            "<br><br>" +
            "(B) '销毁' 意思是严重损坏某物，使其无法使用。" +
            "<br><br>" +
            "(C) '创造' 意思是做一些新的事情。"
    },
    {
        id: 10,
        question: "His constant criticism served only to __________ his team members, decreasing their morale.",
        chinese_question: "他不断的批评只会 __________ 他的团队成员，降低他们的士气。",
        answers: [
            { option: "A", answer: "agitate", chinese_answer: "扰乱", chinese_romanization: "rǎoluàn" },
            { option: "B", answer: "encourage", chinese_answer: "鼓励", chinese_romanization: "gǔlì" },
            { option: "C", answer: "uplift", chinese_answer: "提升", chinese_romanization: "tíshēng" },
            { option: "D", answer: "motivate", chinese_answer: "激励", chinese_romanization: "jīlì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'agitate' metaphorically means to upset or disturb." +
            "<br><br>" +
            "(B) 'encourage' means give support, confidence, or hope to (someone)." +
            "<br><br>" +
            "(C) 'uplift' means raise the level of; improve." +
            "<br><br>" +
            "(D) 'motivate' means provide (someone) with a motive for doing something.",
        chinese_explanation: "(A) '扰乱' 比喻使人心烦意乱或不安。" +
            "<br><br>" +
            "(B) '鼓励' 意味着给（某人）支持、信心或希望。" +
            "<br><br>" +
            "(C) '提升' 意味着提高水平；改进。" +
            "<br><br>" +
            "(D) '激励' 意味着为（某人）提供做某事的动机。"
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
