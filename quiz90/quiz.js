// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "Immigrants often work hard to __________ into their new culture while maintaining their own traditions.",
        chinese_question: "移民常常努力 __________ 到他们的新文化中，同时保持他们自己的传统。",
        answers: [
            { option: "A", answer: "resist", chinese_answer: "抵抗", chinese_romanization: "dǐkàng" },
            { option: "B", answer: "reject", chinese_answer: "拒绝", chinese_romanization: "jùjué" },
            { option: "C", answer: "assimilate", chinese_answer: "同化", chinese_romanization: "tónghuà" },
            { option: "D", answer: "isolate", chinese_answer: "隔离", chinese_romanization: "gélí" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'assimilate' means to take in and understand fully (information or ideas) or to become absorbed and integrated into a society or culture." +
            "<br><br>" +
            "(A) 'resist' means to withstand the action or effect of." +
            "<br><br>" +
            "(B) 'reject' means to dismiss as inadequate, unacceptable, or faulty." +
            "<br><br>" +
            "(D) 'isolate' means to cause (a person or place) to be or remain alone or apart from others.",
        chinese_explanation: "(C) '同化' 一词意味着充分吸收和理解（信息或思想）或融入并成为一个社会或文化的一部分。" +
            "<br><br>" +
            "(A) '抵抗' 意味着承受（某事物）的行动或影响。" +
            "<br><br>" +
            "(B) '拒绝' 意味着认为（某事物）不合格、不接受或有缺陷而予以驳回。" +
            "<br><br>" +
            "(D) '隔离' 意味着使（某人或某地）孤立或与他人分开。"
    },
    {
        id: 2,
        question: "If you fail to make your mortgage payments, the bank may __________ on your home.",
        chinese_question: "如果你未能按时支付抵押贷款，银行可能会 __________ 你的房子。",
        answers: [
            { option: "A", answer: "foreclose", chinese_answer: "止赎", chinese_romanization: "zhǐshú" },
            { option: "B", answer: "purchase", chinese_answer: "购买", chinese_romanization: "gòumǎi" },
            { option: "C", answer: "repair", chinese_answer: "修理", chinese_romanization: "xiūlǐ" },
            { option: "D", answer: "renovate", chinese_answer: "翻新", chinese_romanization: "fānxīn" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'foreclose' means take possession of a mortgaged property as a result of the mortgagor's failure to keep up their mortgage payments." +
            "<br><br>" +
            "(B) 'purchase' means acquire (something) by paying for it; buy." +
            "<br><br>" +
            "(C) 'repair' means restore (something damaged, faulty, or worn) to a good condition." +
            "<br><br>" +
            "(D) 'renovate' means restore (something old, especially a building) to a good state of repair.",
        chinese_explanation: "(A) '止赎' 一词意味着由于抵押人未能继续支付抵押贷款，银行收回抵押财产。" +
            "<br><br>" +
            "(B) '购买' 意味着通过付款获得（某物）；买。" +
            "<br><br>" +
            "(C) '修理' 意味着将（损坏、故障或磨损的东西）恢复到良好状态。" +
            "<br><br>" +
            "(D) '翻新' 意味着将（旧的，特别是建筑物）恢复到良好状态。"
    },
    {
        id: 3,
        question: "The heavy rainfall might __________ a landslide in the already unstable region.",
        chinese_question: "大雨可能会 __________ 已经不稳定地区的山体滑坡。",
        answers: [
            { option: "A", answer: "prevent", chinese_answer: "阻止", chinese_romanization: "zǔzhǐ" },
            { option: "B", answer: "halt", chinese_answer: "停止", chinese_romanization: "tíngzhǐ" },
            { option: "C", answer: "precipitate", chinese_answer: "促使", chinese_romanization: "cùshǐ" },
            { option: "D", answer: "delay", chinese_answer: "延迟", chinese_romanization: "yánchí" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'precipitate' means cause (an event or situation, typically one that is bad or undesirable) to happen suddenly, unexpectedly, or prematurely." +
            "<br><br>" +
            "(A) 'prevent' means keep (something) from happening or arising." +
            "<br><br>" +
            "(B) 'halt' means bring or come to an abrupt stop." +
            "<br><br>" +
            "(D) 'delay' means make (someone or something) late or slow.",
        chinese_explanation: "(C) '促使' 一词意味着导致（通常是不好的或不受欢迎的事件或情况）突然、意外或过早地发生。" +
            "<br><br>" +
            "(A) '阻止' 意味着防止（某事）发生或出现。" +
            "<br><br>" +
            "(B) '停止' 意味着突然停止或中断。" +
            "<br><br>" +
            "(D) '延迟' 意味着使（某人或某事）迟到或变慢。"
    },
    {
        id: 4,
        question: "She was able to __________ her reputation by volunteering at the community center after the scandal.",
        chinese_question: "在丑闻发生后，她通过在社区中心做志愿者 __________ 了她的名誉。",
        answers: [
            { option: "A", answer: "tarnish", chinese_answer: "玷污", chinese_romanization: "diànwū" },
            { option: "B", answer: "harm", chinese_answer: "伤害", chinese_romanization: "shānghài" },
            { option: "C", answer: "redeem", chinese_answer: "挽回", chinese_romanization: "wǎnhuí" },
            { option: "D", answer: "ruin", chinese_answer: "毁灭", chinese_romanization: "huǐmiè" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'redeem' means to compensate for the faults or bad aspects of (something)." +
            "<br><br>" +
            "(A) 'tarnish' means lose or cause to lose luster, especially as a result of exposure to air or moisture." +
            "<br><br>" +
            "(B) 'harm' means physically injure." +
            "<br><br>" +
            "(D) 'ruin' means reduce (a building or place) to a state of decay, collapse, or disintegration.",
        chinese_explanation: "(C) '挽回' 一词意味着弥补（某物）的缺点或不良方面。" +
            "<br><br>" +
            "(A) '玷污' 意味着失去或导致失去光泽，尤其是因暴露在空气或潮湿中。" +
            "<br><br>" +
            "(B) '伤害' 意味着身体上的伤害。" +
            "<br><br>" +
            "(D) '毁灭' 意味着将（建筑物或地方）减少到衰败、崩溃或分解的状态。"
    },
    {
        id: 5,
        question: "He struggled to __________ himself from the complicated situation at work.",
        chinese_question: "他努力 __________ 自己摆脱工作中的复杂局面。",
        answers: [
            { option: "A", answer: "entangle", chinese_answer: "纠缠", chinese_romanization: "jiūchán" },
            { option: "B", answer: "extricate", chinese_answer: "摆脱", chinese_romanization: "bǎituō" },
            { option: "C", answer: "involve", chinese_answer: "牵涉", chinese_romanization: "qiānshè" },
            { option: "D", answer: "engage", chinese_answer: "参与", chinese_romanization: "cānyù" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'extricate' figuratively means to free oneself from a difficult or complicated situation." +
            "<br><br>" +
            "(A) 'entangle' means cause to become twisted together with or caught in." +
            "<br><br>" +
            "(C) 'involve' means have or include (something) as a necessary or integral part or result." +
            "<br><br>" +
            "(D) 'engage' means occupy, attract, or involve (someone's interest or attention).",
        chinese_explanation: "(B) '摆脱' 在比喻意义上意味着使自己摆脱困难或复杂的局面。" +
            "<br><br>" +
            "(A) '纠缠' 意味着使变得纠结在一起或陷入其中。" +
            "<br><br>" +
            "(C) '牵涉' 意味着将（某事物）作为必要或不可分割的一部分或结果包含在内。" +
            "<br><br>" +
            "(D) '参与' 意味着占用、吸引或涉及（某人的兴趣或注意）。"
    },
    {
        id: 6,
        question: "Teachers work hard to __________ knowledge and inspire curiosity in their students.",
        chinese_question: "教师们努力 __________ 知识并激发学生的好奇心。",
        answers: [
            { option: "A", answer: "suppress", chinese_answer: "抑制", chinese_romanization: "yìzhì" },
            { option: "B", answer: "withhold", chinese_answer: "保留", chinese_romanization: "bǎoliú" },
            { option: "C", answer: "disseminate", chinese_answer: "传播", chinese_romanization: "chuánbō" },
            { option: "D", answer: "restrict", chinese_answer: "限制", chinese_romanization: "xiànzhì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'disseminate' figuratively means to spread or share information or ideas broadly." +
            "<br><br>" +
            "(A) 'suppress' means forcibly put an end to." +
            "<br><br>" +
            "(B) 'withhold' means refuse to give (something that is due to or is desired by another)." +
            "<br><br>" +
            "(D) 'restrict' means put a limit on; keep under control.",
        chinese_explanation: "(C) '传播' 在比喻意义上意味着广泛传播或分享信息或想法。" +
            "<br><br>" +
            "(A) '抑制' 意味着强行结束。" +
            "<br><br>" +
            "(B) '保留' 意味着拒绝给予（他人应得或希望得到的东西）。" +
            "<br><br>" +
            "(D) '限制' 意味着对某物设定限制；控制。"
    },
    {
        id: 7,
        question: "The editor had to __________ the article to fit it into the limited space available in the magazine.",
        chinese_question: "编辑不得不 __________ 文章以便将其放入杂志有限的空间中。",
        answers: [
            { option: "A", answer: "expand", chinese_answer: "扩展", chinese_romanization: "kuòzhǎn" },
            { option: "B", answer: "abbreviate", chinese_answer: "缩写", chinese_romanization: "suōxiě" },
            { option: "C", answer: "elaborate", chinese_answer: "详细阐述", chinese_romanization: "xiángxì chǎnshù" },
            { option: "D", answer: "extend", chinese_answer: "延长", chinese_romanization: "yáncháng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'abbreviate' means to shorten (a word, phrase, or text)." +
            "<br><br>" +
            "(A) 'expand' means to make larger or more extensive." +
            "<br><br>" +
            "(C) 'elaborate' means to develop or present (a theory, policy, or system) in detail." +
            "<br><br>" +
            "(D) 'extend' means to cause to cover a larger area; make longer or wider.",
        chinese_explanation: "(B) '缩写' 一词意味着缩短（一个词、短语或文本）。" +
            "<br><br>" +
            "(A) '扩展' 意味着使更大或更广泛。" +
            "<br><br>" +
            "(C) '详细阐述' 意味着详细地开发或呈现（一个理论、政策或系统）。" +
            "<br><br>" +
            "(D) '延长' 意味着使覆盖更大的面积；使更长或更宽。"
    },
    {
        id: 8,
        question: "The CEO's unethical practices were enough to __________ the entire business community.",
        chinese_question: "CEO的不道德行为足以 __________ 整个商业界。",
        answers: [
            { option: "A", answer: "scandalize", chinese_answer: "使震惊", chinese_romanization: "shǐ zhènjīng" },
            { option: "B", answer: "inspire", chinese_answer: "激励", chinese_romanization: "jīlì" },
            { option: "C", answer: "motivate", chinese_answer: "促使", chinese_romanization: "cùshǐ" },
            { option: "D", answer: "commend", chinese_answer: "称赞", chinese_romanization: "chēngzàn" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'scandalize' figuratively means to shock or outrage public opinion." +
            "<br><br>" +
            "(B) 'inspire' means fill (someone) with the urge or ability to do or feel something." +
            "<br><br>" +
            "(C) 'motivate' means provide (someone) with a motive for doing something." +
            "<br><br>" +
            "(D) 'commend' means praise formally or officially.",
        chinese_explanation: "(A) '使震惊' 在比喻意义上意味着震惊或激怒公众舆论。" +
            "<br><br>" +
            "(B) '激励' 意味着给（某人）做某事的动力或能力。" +
            "<br><br>" +
            "(C) '促使' 意味着提供（某人）做某事的动机。" +
            "<br><br>" +
            "(D) '称赞' 意味着正式或官方的赞美。"
    },
    {
        id: 9,
        question: "The book aims to __________ the importance of kindness in everyday life.",
        chinese_question: "这本书旨在 __________ 善良在日常生活中的重要性。",
        answers: [
            { option: "A", answer: "diminish", chinese_answer: "减少", chinese_romanization: "jiǎnshǎo" },
            { option: "B", answer: "exalt", chinese_answer: "强调", chinese_romanization: "qiángdiào" },
            { option: "C", answer: "overlook", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "D", answer: "underestimate", chinese_answer: "低估", chinese_romanization: "dīgū" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'exalt' figuratively means to praise or highlight the importance of something." +
            "<br><br>" +
            "(A) 'diminish' means make or become less." +
            "<br><br>" +
            "(C) 'overlook' means fail to notice." +
            "<br><br>" +
            "(D) 'underestimate' means estimate (something) to be smaller or less important than it actually is.",
        chinese_explanation: "(B) '强调' 在比喻意义上意味着赞扬或强调某事的重要性。" +
            "<br><br>" +
            "(A) '减少' 意味着使变少或变少。" +
            "<br><br>" +
            "(C) '忽视' 意味着未能注意到。" +
            "<br><br>" +
            "(D) '低估' 意味着估计（某物）比实际要小或不重要。"
    },
    {
        id: 10,
        question: "His dedication and hard work __________ the spirit of our team.",
        chinese_question: "他的奉献和努力 __________ 了我们团队的精神。",
        answers: [
            { option: "A", answer: "diminish", chinese_answer: "减少", chinese_romanization: "jiǎnshǎo" },
            { option: "B", answer: "exemplify", chinese_answer: "体现", chinese_romanization: "tǐxiàn" },
            { option: "C", answer: "obscure", chinese_answer: "掩盖", chinese_romanization: "yǎngài" },
            { option: "D", answer: "undermine", chinese_answer: "破坏", chinese_romanization: "pòhuài" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'exemplify' figuratively means to be a perfect example of a quality or type." +
            "<br><br>" +
            "(A) 'diminish' means make or become less." +
            "<br><br>" +
            "(C) 'obscure' means keep from being seen; conceal." +
            "<br><br>" +
            "(D) 'undermine' means erode the base or foundation of (a rock formation).",
        chinese_explanation: "(B) '体现' 在比喻意义上意味着成为某种品质或类型的完美例子。" +
            "<br><br>" +
            "(A) '减少' 意味着使变少或变少。" +
            "<br><br>" +
            "(C) '掩盖' 意味着不被看到；隐藏。" +
            "<br><br>" +
            "(D) '破坏' 意味着侵蚀（岩层）的基础或基础。"
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
