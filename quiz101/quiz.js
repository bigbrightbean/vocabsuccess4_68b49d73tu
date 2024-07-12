// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "Through hard work and determination, he was able to __________ a reputation for reliability.",
        chinese_question: "通过努力工作和决心，他__________了可靠的声誉。",
        answers: [
            { option: "A", answer: "lose", chinese_answer: "失去", chinese_romanization: "shīqù" },
            { option: "B", answer: "acquire", chinese_answer: "获得", chinese_romanization: "huòdé" },
            { option: "C", answer: "discard", chinese_answer: "丢弃", chinese_romanization: "diūqì" },
            { option: "D", answer: "abandon", chinese_answer: "放弃", chinese_romanization: "fàngqì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'acquire' means to buy or obtain (an asset or object) for oneself. Figuratively, it can mean to gain or develop a particular skill, quality, or reputation." +
            "<br><br>" +
            "(A) 'lose' means be deprived of or cease to have or retain (something)." +
            "<br><br>" +
            "(C) 'discard' means get rid of (someone or something) as no longer useful or desirable." +
            "<br><br>" +
            "(D) 'abandon' means cease to support or look after (someone); desert.",
        chinese_explanation: "(B) '获得'一词意味着为自己购买或获得（资产或物品）。比喻地，它可以表示获得或培养某种技能、品质或声誉。" +
            "<br><br>" +
            "(A) '失去' 意味着被剥夺或停止拥有或保留（某物）。" +
            "<br><br>" +
            "(C) '丢弃' 意味着摆脱（某人或某物），因为不再有用或不想要。" +
            "<br><br>" +
            "(D) '放弃' 意味着停止支持或照顾（某人）；抛弃。"
    },
    {
        id: 2,
        question: "Her fear of public speaking did not __________ until she had given several successful presentations.",
        chinese_question: "直到她成功进行了几次演讲后，她对公众演讲的恐惧才开始__________。",
        answers: [
            { option: "A", answer: "intensify", chinese_answer: "加剧", chinese_romanization: "jiājù" },
            { option: "B", answer: "abate", chinese_answer: "减弱", chinese_romanization: "jiǎnruò" },
            { option: "C", answer: "increase", chinese_answer: "增加", chinese_romanization: "zēngjiā" },
            { option: "D", answer: "escalate", chinese_answer: "升级", chinese_romanization: "shēngjí" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'abate' means to become less intense or widespread. Figuratively, it can mean to diminish or reduce." +
            "<br><br>" +
            "(A) 'intensify' means to become or make more intense." +
            "<br><br>" +
            "(C) 'increase' means to become or make greater in size, amount, intensity, or degree." +
            "<br><br>" +
            "(D) 'escalate' means to increase rapidly.",
        chinese_explanation: "(B) '减弱'一词意味着变得不那么强烈或广泛。比喻地，它可以表示减少或减弱。" +
            "<br><br>" +
            "(A) '加剧' 意味着变得或使更强烈。" +
            "<br><br>" +
            "(C) '增加' 意味着变得或使在大小、数量、强度或程度上更大。" +
            "<br><br>" +
            "(D) '升级' 意味着迅速增加。"
    },
    {
        id: 3,
        question: "He was the only one to __________ when the company suggested extending work hours, voicing his concerns about work-life balance.",
        chinese_question: "当公司建议延长工作时间时，他是唯一一个 __________ 的人，表达了他对工作与生活平衡的担忧。",
        answers: [
            { option: "A", answer: "agree", chinese_answer: "同意", chinese_romanization: "tóngyì" },
            { option: "B", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" },
            { option: "C", answer: "endorse", chinese_answer: "赞同", chinese_romanization: "zàntóng" },
            { option: "D", answer: "demur", chinese_answer: "反对", chinese_romanization: "fǎnduì" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'demur' means to raise doubts or objections or show reluctance." +
            "<br><br>" +
            "(A) 'agree' means to have the same opinion about something." +
            "<br><br>" +
            "(B) 'support' means to give assistance to." +
            "<br><br>" +
            "(C) 'endorse' means to declare one's public approval or support of.",
        chinese_explanation: "(D) '反对' 意思是提出疑虑或异议或表示不情愿。" +
            "<br><br>" +
            "(A) '同意' 意思是对某事有相同的看法。" +
            "<br><br>" +
            "(B) '支持' 意思是给予帮助。" +
            "<br><br>" +
            "(C) '赞同' 意思是公开表示赞同或支持。"
    },
    {
        id: 4,
        question: "The activists decided to __________ a campaign against climate change.",
        chinese_question: "活动家们决定 __________ 反对气候变化的运动。",
        answers: [
            { option: "A", answer: "end", chinese_answer: "结束", chinese_romanization: "jiéshù" },
            { option: "B", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "C", answer: "cancel", chinese_answer: "取消", chinese_romanization: "qǔxiāo" },
            { option: "D", answer: "wage", chinese_answer: "发动", chinese_romanization: "fādòng" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'wage' metaphorically means to carry on (a war or campaign)." +
            "<br><br>" +
            "(A) 'end' means to bring to an end." +
            "<br><br>" +
            "(B) 'ignore' means refuse to take notice of or acknowledge; disregard intentionally." +
            "<br><br>" +
            "(C) 'cancel' means decide or announce that (a planned event) will not take place.",
        chinese_explanation: "(D) '发动' 比喻进行（战争或运动）。" +
            "<br><br>" +
            "(A) '结束' 意味着结束。" +
            "<br><br>" +
            "(B) '忽视' 意味着拒绝注意或承认；故意忽视。" +
            "<br><br>" +
            "(C) '取消' 意味着决定或宣布（计划中的活动）将不进行。"
    },
    {
        id: 5,
        question: "She felt the need to __________ her coworker to make herself look better.",
        chinese_question: "她觉得有必要 __________ 她的同事以使自己看起来更好。",
        answers: [
            { option: "A", answer: "vilify", chinese_answer: "诋毁", chinese_romanization: "dǐhuǐ" },
            { option: "B", answer: "commend", chinese_answer: "表扬", chinese_romanization: "biǎoyáng" },
            { option: "C", answer: "appreciate", chinese_answer: "欣赏", chinese_romanization: "xīnshǎng" },
            { option: "D", answer: "admire", chinese_answer: "钦佩", chinese_romanization: "qīnpèi" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'vilify' metaphorically means to defame or speak ill of." +
            "<br><br>" +
            "(B) 'commend' means praise formally or officially." +
            "<br><br>" +
            "(C) 'appreciate' means recognize the full worth of." +
            "<br><br>" +
            "(D) 'admire' means regard (an object, quality, or person) with respect or warm approval.",
        chinese_explanation: "(A) '诋毁' 比喻诽谤或说坏话。" +
            "<br><br>" +
            "(B) '表扬' 意味着正式或官方地赞扬。" +
            "<br><br>" +
            "(C) '欣赏' 意味着认识到全部的价值。" +
            "<br><br>" +
            "(D) '钦佩' 意味着尊重或热情地赞同（物体、品质或人）。"
    },
    {
        id: 6,
        question: "She would always __________ the missed opportunities of her youth.",
        chinese_question: "她会永远 __________ 她年轻时错失的机会。",
        answers: [
            { option: "A", answer: "embrace", chinese_answer: "拥抱", chinese_romanization: "yǒngbào" },
            { option: "B", answer: "overlook", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "C", answer: "welcome", chinese_answer: "欢迎", chinese_romanization: "huānyíng" },
            { option: "D", answer: "rue", chinese_answer: "后悔", chinese_romanization: "hòuhuǐ" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'rue' metaphorically means to regret deeply." +
            "<br><br>" +
            "(A) 'embrace' means to hold (someone) closely in one's arms, especially as a sign of affection." +
            "<br><br>" +
            "(B) 'overlook' means to fail to notice (something)." +
            "<br><br>" +
            "(C) 'welcome' means to greet (someone arriving) in a glad, polite, or friendly way.",
        chinese_explanation: "(D) '后悔' 比喻深深地后悔。" +
            "<br><br>" +
            "(A) '拥抱' 意味着紧紧抱住（某人），特别是作为表示亲情的标志。" +
            "<br><br>" +
            "(B) '忽视' 意味着未能注意到（某事）。" +
            "<br><br>" +
            "(C) '欢迎' 意味着高兴、礼貌或友好地迎接（某人到来）。"
    },
    {
        id: 7,
        question: "The city streets __________ with excitement during the festival.",
        chinese_question: "节日期间，城市街道 __________ 着兴奋。",
        answers: [
            { option: "A", answer: "teemed", chinese_answer: "充满", chinese_romanization: "chōngmǎn" },
            { option: "B", answer: "slept", chinese_answer: "睡着", chinese_romanization: "shuìzháo" },
            { option: "C", answer: "calmed", chinese_answer: "平静", chinese_romanization: "píngjìng" },
            { option: "D", answer: "quieted", chinese_answer: "安静", chinese_romanization: "ānjìng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'teemed' metaphorically means to be filled with or swarming with something." +
            "<br><br>" +
            "(B) 'slept' means to be in a state of rest." +
            "<br><br>" +
            "(C) 'calmed' means to make (someone) tranquil and quiet; soothe." +
            "<br><br>" +
            "(D) 'quieted' means to make or become silent or calm.",
        chinese_explanation: "(A) '充满' 比喻充满或挤满某物。" +
            "<br><br>" +
            "(B) '睡着' 意味着处于休息状态。" +
            "<br><br>" +
            "(C) '平静' 意味着使（某人）安静和镇定；安慰。" +
            "<br><br>" +
            "(D) '安静' 意味着使或变得安静或平静。"
    },
    {
        id: 8,
        question: "The company will __________ its new policy on remote work to all employees next week, making sure it is communicated through emails and official memos.",
        chinese_question: "公司将在下周通过电子邮件和官方备忘录向所有员工颁布新的远程工作政策。",
        answers: [
            { option: "A", answer: "hide", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" },
            { option: "B", answer: "postpone", chinese_answer: "推迟", chinese_romanization: "tuīchí" },
            { option: "C", answer: "withdraw", chinese_answer: "撤回", chinese_romanization: "chèhuí" },
            { option: "D", answer: "promulgate", chinese_answer: "颁布", chinese_romanization: "bānbù" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'promulgate' means to promote or make widely known an idea or cause, or to put a law into effect by official proclamation." +
            "<br><br>" +
            "(A) 'hide' means to put or keep out of sight." +
            "<br><br>" +
            "(B) 'postpone' means to make something happen at a later time than originally planned or expected." +
            "<br><br>" +
            "(C) 'withdraw' means to remove or take away something.",
        chinese_explanation: "(D) '颁布' 意思是推广或广泛传播一个想法或事业，或通过官方公告将法律生效。" +
            "<br><br>" +
            "(A) '隐藏' 意思是放置或保持在视线之外。" +
            "<br><br>" +
            "(B) '推迟' 意思是使某事发生在比原计划或预期更晚的时间。" +
            "<br><br>" +
            "(C) '撤回' 意思是移除或拿走某物。"
    },
    {
        id: 9,
        question: "Her kindness and generosity __________ that of anyone else I know.",
        chinese_question: "她的善良和慷慨 __________ 了我认识的任何人。",
        answers: [
            { option: "A", answer: "match", chinese_answer: "匹配", chinese_romanization: "pǐpèi" },
            { option: "B", answer: "follow", chinese_answer: "跟随", chinese_romanization: "gēnsuí" },
            { option: "C", answer: "surpass", chinese_answer: "超越", chinese_romanization: "chāoyuè" },
            { option: "D", answer: "resemble", chinese_answer: "类似", chinese_romanization: "lèisì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'surpass' metaphorically means to go beyond in excellence or achievement." +
            "<br><br>" +
            "(A) 'match' means to be equal to (something) in quality or strength." +
            "<br><br>" +
            "(B) 'follow' means to come after in time or order." +
            "<br><br>" +
            "(D) 'resemble' means to have qualities or features, especially those of appearance, in common with (someone or something); look or seem like.",
        chinese_explanation: "(C) '超越' 比喻在卓越或成就方面超越。" +
            "<br><br>" +
            "(A) '匹配' 意味着在质量或力量上等同于（某物）。" +
            "<br><br>" +
            "(B) '跟随' 意味着按时间或顺序排在后面。" +
            "<br><br>" +
            "(D) '类似' 意味着具有与（某人或某物）共同的品质或特征，尤其是外观上的；看起来或看起来像。"
    },
    {
        id: 10,
        question: "She decided to __________ her old habits and start anew.",
        chinese_question: "她决定 __________ 她的旧习惯，重新开始。",
        answers: [
            { option: "A", answer: "renounce", chinese_answer: "放弃", chinese_romanization: "fàngqì" },
            { option: "B", answer: "retain", chinese_answer: "保留", chinese_romanization: "bǎoliú" },
            { option: "C", answer: "adopt", chinese_answer: "采用", chinese_romanization: "cǎiyòng" },
            { option: "D", answer: "continue", chinese_answer: "继续", chinese_romanization: "jìxù" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'renounce' metaphorically means to give up or reject something." +
            "<br><br>" +
            "(B) 'retain' means to continue to have (something); keep possession of." +
            "<br><br>" +
            "(C) 'adopt' means to take up or start to use or follow (an idea, method, or course of action)." +
            "<br><br>" +
            "(D) 'continue' means to persist in an activity or process.",
        chinese_explanation: "(A) '放弃' 比喻放弃或拒绝某物。" +
            "<br><br>" +
            "(B) '保留' 意味着继续拥有（某物）；保有。" +
            "<br><br>" +
            "(C) '采用' 意味着采取或开始使用或遵循（一个想法、方法或行动路线）。" +
            "<br><br>" +
            "(D) '继续' 意味着继续进行某项活动或过程。"
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
