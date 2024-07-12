// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "She had to __________ with her emotions after hearing the tragic news.",
        chinese_question: "听到悲惨的消息后，她必须与自己的情绪 __________。",
        answers: [
            { option: "A", answer: "grapple", chinese_answer: "斗争", chinese_romanization: "dòuzhēng" },
            { option: "B", answer: "celebrate", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" },
            { option: "C", answer: "relax", chinese_answer: "放松", chinese_romanization: "fàngsōng" },
            { option: "D", answer: "neglect", chinese_answer: "忽视", chinese_romanization: "hūshì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'grapple' metaphorically means to struggle or deal with something." +
            "<br><br>" +
            "(B) 'celebrate' means to acknowledge (a significant or happy day or event) with a social gathering or enjoyable activity." +
            "<br><br>" +
            "(C) 'relax' means to make or become less tense or anxious." +
            "<br><br>" +
            "(D) 'neglect' means fail to care for properly.",
        chinese_explanation: "(A) '斗争' 比喻努力应对某事。" +
            "<br><br>" +
            "(B) '庆祝' 意味着以社交聚会或愉快的活动来纪念（重要或快乐的日子或事件）。" +
            "<br><br>" +
            "(C) '放松' 意味着使或变得不那么紧张或焦虑。" +
            "<br><br>" +
            "(D) '忽视' 意味着未能妥善照料。"
    },
    {
        id: 2,
        question: "Sometimes it is necessary to __________ in a friend's life when they are making harmful decisions.",
        chinese_question: "有时当朋友做出有害决定时， __________是必要的。",
        answers: [
            { option: "A", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "B", answer: "intervene", chinese_answer: "干预", chinese_romanization: "gānyù" },
            { option: "C", answer: "observe", chinese_answer: "观察", chinese_romanization: "guānchá" },
            { option: "D", answer: "instigate", chinese_answer: "煽动", chinese_romanization: "shāndòng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'intervene' means to come between so as to prevent or alter a result or course of events. Figuratively, it can mean to get involved in someone's situation to help or prevent harm." +
            "<br><br>" +
            "(A) 'ignore' means to refuse to take notice of." +
            "<br><br>" +
            "(C) 'observe' means to notice or perceive something and register it as being significant." +
            "<br><br>" +
            "(D) 'instigate' means to bring about or initiate an action or event.",
        chinese_explanation: "(B) '干预'一词意味着介入以防止或改变结果或事件的过程。比喻地，它可以表示介入某人的情况以帮助或防止伤害。" +
            "<br><br>" +
            "(A) '忽视' 意味着拒绝注意。" +
            "<br><br>" +
            "(C) '观察' 意味着注意到或察觉到某事并将其登记为重要的。" +
            "<br><br>" +
            "(D) '煽动' 意味着引起或开始一项行动或事件。"
    },
    {
        id: 3,
        question: "They decided to __________ a series of measures to boost the company's productivity.",
        chinese_question: "他们决定__________一系列措施以提高公司的生产力。",
        answers: [
            { option: "A", answer: "abolish", chinese_answer: "废除", chinese_romanization: "fèichú" },
            { option: "B", answer: "neglect", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "C", answer: "institute", chinese_answer: "制定", chinese_romanization: "zhìdìng" },
            { option: "D", answer: "eliminate", chinese_answer: "消除", chinese_romanization: "xiāochú" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'institute' means to set in motion or establish something, especially a program, system, or inquiry. Figuratively, it can mean to introduce or implement measures or changes." +
            "<br><br>" +
            "(A) 'abolish' means to formally put an end to a system, practice, or institution." +
            "<br><br>" +
            "(B) 'neglect' means to fail to care for properly." +
            "<br><br>" +
            "(D) 'eliminate' means to completely remove or get rid of something.",
        chinese_explanation: "(C) '制定'一词意味着开始或建立某物，尤其是计划、系统或调查。比喻地，它可以表示引入或实施措施或变化。" +
            "<br><br>" +
            "(A) '废除' 意味着正式结束一个制度、做法或机构。" +
            "<br><br>" +
            "(B) '忽视' 意味着未能妥善照顾。" +
            "<br><br>" +
            "(D) '消除' 意味着完全移除或摆脱某物。"
    },
    {
        id: 4,
        question: "They decided to __________ the new community center with a series of cultural events.",
        chinese_question: "他们决定通过一系列文化活动__________新的社区中心。",
        answers: [
            { option: "A", answer: "dismiss", chinese_answer: "解雇", chinese_romanization: "jiěgù" },
            { option: "B", answer: "inaugurate", chinese_answer: "启用", chinese_romanization: "qǐyòng" },
            { option: "C", answer: "demote", chinese_answer: "降职", chinese_romanization: "jiàngzhí" },
            { option: "D", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'inaugurate' means to begin or introduce a system, policy, or period. Figuratively, it can mean to mark the beginning of an event or period with a ceremony." +
            "<br><br>" +
            "(A) 'dismiss' means ordered or allowed to leave." +
            "<br><br>" +
            "(C) 'demote' means given a lower rank or less senior position, usually as a punishment." +
            "<br><br>" +
            "(D) 'ignore' means refused to take notice of.",
        chinese_explanation: "(B) '启用'一词意味着开始或引入一个系统、政策或时期。比喻地，它可以表示以仪式标志事件或时期的开始。" +
            "<br><br>" +
            "(A) '解雇' 意味着被命令或允许离开。" +
            "<br><br>" +
            "(C) '降职' 意味着被授予较低的职位或较低的职务，通常作为一种惩罚。" +
            "<br><br>" +
            "(D) '忽视' 意味着拒绝注意。"
    },
    {
        id: 5,
        question: "To __________ the economic impact of the disaster, the government implemented temporary relief measures.",
        chinese_question: "为了 __________ 灾难的经济影响，政府实施了临时救济措施。",
        answers: [
            { option: "A", answer: "worsen", chinese_answer: "恶化", chinese_romanization: "èhuà" },
            { option: "B", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "C", answer: "intensify", chinese_answer: "加强", chinese_romanization: "jiāqiáng" },
            { option: "D", answer: "palliate", chinese_answer: "减轻", chinese_romanization: "jiǎnqīng" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'palliate' means to make a disease or its symptoms less severe without removing the cause." +
            "<br><br>" +
            "(A) 'worsen' means to make or become worse." +
            "<br><br>" +
            "(B) 'ignore' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(C) 'intensify' means to become or make more intense.",
        chinese_explanation: "(D) '减轻' 意思是使疾病或其症状减轻而不去除原因。" +
            "<br><br>" +
            "(A) '恶化' 意思是使或变得更糟。" +
            "<br><br>" +
            "(B) '忽视' 意思是拒绝注意或承认。" +
            "<br><br>" +
            "(C) '加强' 意思是变得或使更加激烈。"
    },
    {
        id: 6,
        question: "Her past failures did not __________ her from trying again; she was determined to succeed.",
        chinese_question: "过去的失败并没有__________她再次尝试；她决心成功。",
        answers: [
            { option: "A", answer: "encourage", chinese_answer: "鼓励", chinese_romanization: "gǔlì" },
            { option: "B", answer: "deter", chinese_answer: "阻止", chinese_romanization: "zǔzhǐ" },
            { option: "C", answer: "invite", chinese_answer: "邀请", chinese_romanization: "yāoqǐng" },
            { option: "D", answer: "assist", chinese_answer: "协助", chinese_romanization: "xiézhù" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'deter' means to discourage someone from doing something, typically by instilling doubt or fear of the consequences. Figuratively, it can mean to prevent or discourage by using obstacles or fear." +
            "<br><br>" +
            "(A) 'encourage' means to give support, confidence, or hope to someone." +
            "<br><br>" +
            "(C) 'invite' means to make a polite, formal, or friendly request to someone to go somewhere or to do something." +
            "<br><br>" +
            "(D) 'assist' means to help someone.",
        chinese_explanation: "(B) '阻止'一词意味着通过灌输怀疑或害怕后果来阻止某人做某事。比喻地，它可以表示通过使用障碍或恐惧来防止或阻止。" +
            "<br><br>" +
            "(A) '鼓励' 意味着给某人支持、信心或希望。" +
            "<br><br>" +
            "(C) '邀请' 意味着礼貌地、正式地或友好地请求某人去某地或做某事。" +
            "<br><br>" +
            "(D) '协助' 意味着帮助某人。"
    },
    {
        id: 7,
        question: "The company decided to __________ its marketing resources more effectively to reach a broader audience.",
        chinese_question: "公司决定更有效地__________其营销资源，以接触更广泛的受众。",
        answers: [
            { option: "A", answer: "withdraw", chinese_answer: "撤回", chinese_romanization: "chèhuí" },
            { option: "B", answer: "deploy", chinese_answer: "部署", chinese_romanization: "bùshǔ" },
            { option: "C", answer: "remove", chinese_answer: "移除", chinese_romanization: "yíchú" },
            { option: "D", answer: "conceal", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'deploy' means to move troops or equipment into position for military action. Figuratively, it can mean to strategically use resources or assets." +
            "<br><br>" +
            "(A) 'withdraw' means to remove or take away something from a particular place or position." +
            "<br><br>" +
            "(C) 'remove' means to take something away or off from the position occupied." +
            "<br><br>" +
            "(D) 'conceal' means to keep from sight; hide.",
        chinese_explanation: "(B) '部署'一词意味着将部队或装备移到军事行动的位置。比喻地，它可以表示战略性地使用资源或资产。" +
            "<br><br>" +
            "(A) '撤回' 意味着从特定位置移走或拿走某物。" +
            "<br><br>" +
            "(C) '移除' 意味着从占据的位置上拿走某物。" +
            "<br><br>" +
            "(D) '隐藏' 意味着不让看到；隐藏。"
    },
    {
        id: 8,
        question: "She __________ the rise of violence in the city and advocated for stricter gun control laws.",
        chinese_question: "她__________城市中暴力事件的增加，并提倡更严格的枪支管制法律。",
        answers: [
            { option: "A", answer: "celebrated", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" },
            { option: "B", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "C", answer: "deplored", chinese_answer: "谴责", chinese_romanization: "qiǎnzé" },
            { option: "D", answer: "appreciated", chinese_answer: "感激", chinese_romanization: "gǎnjī" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'deplored' means to feel or express strong disapproval of something. Figuratively, it can mean to be deeply regretful or saddened by a situation." +
            "<br><br>" +
            "(A) 'celebrated' means acknowledged a significant or happy day or event with a social gathering or enjoyable activity." +
            "<br><br>" +
            "(B) 'ignored' means refused to take notice of." +
            "<br><br>" +
            "(D) 'appreciated' means recognized the full worth of.",
        chinese_explanation: "(C) '谴责'一词意味着对某事强烈不赞成或表示不满。比喻地，它可以表示对某种情况深感遗憾或悲伤。" +
            "<br><br>" +
            "(A) '庆祝' 意味着通过社交聚会或愉快的活动来承认重要或快乐的一天或事件。" +
            "<br><br>" +
            "(B) '忽视' 意味着拒绝注意。" +
            "<br><br>" +
            "(D) '感激' 意味着认识到全部价值。"
    },
    {
        id: 9,
        question: "The scandal threatened to __________ his reputation, undoing years of hard work.",
        chinese_question: "这起丑闻威胁到__________他的声誉，毁掉多年的辛勤工作。",
        answers: [
            { option: "A", answer: "honor", chinese_answer: "尊敬", chinese_romanization: "zūnjìng" },
            { option: "B", answer: "deface", chinese_answer: "毁坏", chinese_romanization: "huǐhuài" },
            { option: "C", answer: "clean", chinese_answer: "清洁", chinese_romanization: "qīngjié" },
            { option: "D", answer: "protect", chinese_answer: "保护", chinese_romanization: "bǎohù" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'deface' means to spoil the surface or appearance of something. Figuratively, it can mean to damage or tarnish someone's reputation." +
            "<br><br>" +
            "(A) 'honor' means to regard with great respect." +
            "<br><br>" +
            "(C) 'clean' means to make something free from dirt, marks, or mess." +
            "<br><br>" +
            "(D) 'protect' means to keep safe from harm or injury.",
        chinese_explanation: "(B) '毁坏'一词意味着破坏某物的表面或外观。比喻地，它可以表示损害或玷污某人的声誉。" +
            "<br><br>" +
            "(A) '尊敬' 意味着表示极大的尊重。" +
            "<br><br>" +
            "(C) '清洁' 意味着使某物没有污垢、痕迹或杂乱。" +
            "<br><br>" +
            "(D) '保护' 意味着保持安全不受伤害或伤害。"
    },
    {
        id: 10,
        question: "She tried to __________ the meaning behind his cryptic message.",
        chinese_question: "她试图__________他那神秘信息背后的含义。",
        answers: [
            { option: "A", answer: "encode", chinese_answer: "编码", chinese_romanization: "biānmǎ" },
            { option: "B", answer: "erase", chinese_answer: "擦除", chinese_romanization: "cāchú" },
            { option: "C", answer: "decipher", chinese_answer: "破译", chinese_romanization: "pòyì" },
            { option: "D", answer: "blur", chinese_answer: "模糊", chinese_romanization: "móhú" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'decipher' means to convert a text written in code, or a coded signal, into normal language. Figuratively, it can mean to understand or interpret something that is unclear or difficult to comprehend." +
            "<br><br>" +
            "(A) 'encode' means to convert into a coded form." +
            "<br><br>" +
            "(B) 'erase' means to remove or obliterate something." +
            "<br><br>" +
            "(D) 'blur' means to make or become unclear or less distinct.",
        chinese_explanation: "(C) '破译'一词意味着将用代码编写的文本或编码信号转换为正常语言。比喻地，它可以表示理解或解释某个不清楚或难以理解的事物。" +
            "<br><br>" +
            "(A) '编码' 意味着转换成编码形式。" +
            "<br><br>" +
            "(B) '擦除' 意味着移除或抹去某物。" +
            "<br><br>" +
            "(D) '模糊' 意味着使变得不清晰或不太明显。"
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
