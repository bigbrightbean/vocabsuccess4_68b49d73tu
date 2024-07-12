// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The marketplace was filled with a __________ of sounds from vendors shouting, children playing, and music blaring.",
        chinese_question: "市场充满了各种声音的 __________，商贩的叫卖声、孩子们的玩耍声和喧闹的音乐声。",
        answers: [
                { option: "A", answer: "melody", chinese_answer: "旋律", chinese_romanization: "xuánlǜ" },
                { option: "B", answer: "silence", chinese_answer: "沉默", chinese_romanization: "chénmò" },
                { option: "C", answer: "cacophony", chinese_answer: "刺耳的声音", chinese_romanization: "cì'ěr de shēngyīn" },
                { option: "D", answer: "harmony", chinese_answer: "和谐", chinese_romanization: "héxié" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'cacophony' means a harsh, discordant mixture of sounds." +
            "<br><br>" +
            "(A) 'melody' means a sequence of single notes that is musically satisfying." +
            "<br><br>" +
            "(B) 'silence' means complete absence of sound." +
            "<br><br>" +
            "(D) 'harmony' means the combination of simultaneously sounded musical notes to produce a pleasing effect.",
        chinese_explanation: "(C) '刺耳的声音' 意味着刺耳、不和谐的混合声音。" +
            "<br><br>" +
            "(A) '旋律' 意味着一串单个音符，音乐上令人满意。" +
            "<br><br>" +
            "(B) '沉默' 意味着完全没有声音。" +
            "<br><br>" +
            "(D) '和谐' 意味着同时发出的音乐音符组合产生令人愉悦的效果。"
    },
    {
        id: 2,
        question: "Known for being a __________, he spent his life pursuing pleasure and avoiding pain.",
        chinese_question: "以 __________ 而闻名，他一生都在追求快乐和避免痛苦。",
        answers: [
            { option: "A", answer: "ascetic", chinese_answer: "苦行者", chinese_romanization: "kǔxíng zhě" },
            { option: "B", answer: "puritan", chinese_answer: "清教徒", chinese_romanization: "qīngjiàotú" },
            { option: "C", answer: "hedonist", chinese_answer: "享乐主义者", chinese_romanization: "xiǎnglè zhǔyì zhě" },
            { option: "D", answer: "philanthropist", chinese_answer: "慈善家", chinese_romanization: "císhàn jiā" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'hedonist' means a person who believes that the pursuit of pleasure is the most important thing in life; a pleasure-seeker." +
            "<br><br>" +
            "(A) 'ascetic' means characterized by severe self-discipline and abstention from all forms of indulgence, typically for religious reasons." +
            "<br><br>" +
            "(B) 'puritan' means a person with censorious moral beliefs, especially about self-indulgence and sex." +
            "<br><br>" +
            "(D) 'philanthropist' means a person who seeks to promote the welfare of others, especially by the generous donation of money to good causes.",
        chinese_explanation: "(C) '享乐主义者' 一词意味着一个相信追求快乐是生活中最重要的事情的人；寻欢作乐者。" +
            "<br><br>" +
            "(A) '苦行者' 意味着以严厉的自律和放弃所有形式的放纵为特征的人，通常出于宗教原因。" +
            "<br><br>" +
            "(B) '清教徒' 意味着有严格道德信仰的人，尤其是关于自我放纵和性的。" +
            "<br><br>" +
            "(D) '慈善家' 意味着寻求促进他人福利的人，尤其是通过慷慨捐赠钱财用于善行。"
    },
    {
        id: 3,
        question: "The piano served as an elegant __________ to the singer's powerful voice during the concert.",
        chinese_question: "在音乐会上，钢琴作为优雅的 __________，衬托出歌手强有力的嗓音。",
        answers: [
            { option: "A", answer: "solo", chinese_answer: "独奏", chinese_romanization: "dúzòu" },
            { option: "B", answer: "interruption", chinese_answer: "打断", chinese_romanization: "dǎduàn" },
            { option: "C", answer: "accompaniment", chinese_answer: "伴奏", chinese_romanization: "bànzòu" },
            { option: "D", answer: "distraction", chinese_answer: "干扰", chinese_romanization: "gānrǎo" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'accompaniment' means a musical part that supports or partners a solo instrument, voice, or group." +
            "<br><br>" +
            "(A) 'solo' means a thing done by one person unaccompanied, in particular." +
            "<br><br>" +
            "(B) 'interruption' means the action of interrupting or being interrupted." +
            "<br><br>" +
            "(D) 'distraction' means a thing that prevents someone from giving full attention to something else.",
        chinese_explanation: "(C) '伴奏' 一词意味着支持或伴奏独奏乐器、嗓音或乐队的音乐部分。" +
            "<br><br>" +
            "(A) '独奏' 意味着由一个人独立完成的事情，尤其是独奏。" +
            "<br><br>" +
            "(B) '打断' 意味着打断或被打断的动作。" +
            "<br><br>" +
            "(D) '干扰' 意味着阻止某人全神贯注于其他事情的事物。"
    },
    {
        id: 4,
        question: "The new technology rapidly became a __________ in the industry, overwhelming all competitors with its superior performance.",
        chinese_question: "新技术迅速成为行业中的 __________，以其优越的性能压倒所有竞争对手。",
        answers: [
            { option: "A", answer: "minor player", chinese_answer: "次要角色", chinese_romanization: "cì yào jiǎosè" },
            { option: "B", answer: "juggernaut", chinese_answer: "强大力量", chinese_romanization: "qiángdà lìliàng" },
            { option: "C", answer: "follower", chinese_answer: "追随者", chinese_romanization: "zhuīsuí zhě" },
            { option: "D", answer: "weakling", chinese_answer: "弱者", chinese_romanization: "ruò zhě" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'juggernaut' means a huge, powerful, and overwhelming force or institution." +
            "<br><br>" +
            "(A) 'minor player' means a person or entity of little importance in a particular field." +
            "<br><br>" +
            "(C) 'follower' means a person who supports and admires a particular person or set of ideas." +
            "<br><br>" +
            "(D) 'weakling' means a person or animal that is physically weak and frail.",
        chinese_explanation: "(B) '强大力量' 一词意味着一个巨大、强大和压倒一切的力量或机构。" +
            "<br><br>" +
            "(A) '次要角色' 意味着在特定领域中无足轻重的人或实体。" +
            "<br><br>" +
            "(C) '追随者' 意味着支持和钦佩某个人或一组思想的人。" +
            "<br><br>" +
            "(D) '弱者' 意味着身体虚弱和虚弱的人或动物。"
    },
    {
        id: 5,
        question: "His promotion gave him __________ to new responsibilities and opportunities within the company.",
        chinese_question: "他的晋升使他有__________承担公司内新职责和机会的机会。",
        answers: [
            { option: "A", answer: "access", chinese_answer: "机会", chinese_romanization: "jīhuì" },
            { option: "B", answer: "refusal", chinese_answer: "拒绝", chinese_romanization: "jùjué" },
            { option: "C", answer: "obstruction", chinese_answer: "阻碍", chinese_romanization: "zǔ'ài" },
            { option: "D", answer: "departure", chinese_answer: "离开", chinese_romanization: "líkāi" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'access' metaphorically means the opportunity or right to use something or benefit from it." + 
            "<br><br>" + 
            "(B) 'refusal' means the action of declining to accept or comply with something." + 
            "<br><br>" + 
            "(C) 'obstruction' means something that blocks or hinders progress." + 
            "<br><br>" + 
            "(D) 'departure' means the action of leaving, especially to start a journey.",
        chinese_explanation: "(A) '机会' 比喻有机会或权利使用某物或受益于某物。" + 
            "<br><br>" + 
            "(B) '拒绝' 意味着拒绝接受或遵守的行为。" + 
            "<br><br>" + 
            "(C) '阻碍' 意味着阻止或妨碍进展的事物。" + 
            "<br><br>" + 
            "(D) '离开' 意味着离开的行为，特别是开始一段旅程。"
    },
    {
        id: 6,
        question: "Her career is an __________ of what can be achieved with hard work and determination.",
        chinese_question: "她的职业生涯是努力工作和决心能够取得成就的 __________。",
        answers: [
            { option: "A", answer: "example", chinese_answer: "例子", chinese_romanization: "lìzi" },
            { option: "B", answer: "exception", chinese_answer: "例外", chinese_romanization: "lìwài" },
            { option: "C", answer: "deviation", chinese_answer: "偏差", chinese_romanization: "piānchā" },
            { option: "D", answer: "anomaly", chinese_answer: "异常", chinese_romanization: "yìcháng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'example' metaphorically means a model or pattern to be followed or imitated." +
            "<br><br>" +
            "(B) 'exception' means a person or thing that is excluded from a general statement or does not follow a rule." +
            "<br><br>" +
            "(C) 'deviation' means the action of departing from an established course or accepted standard." +
            "<br><br>" +
            "(D) 'anomaly' means something that deviates from what is standard, normal, or expected.",
        chinese_explanation: "(A) '例子' 比喻可以遵循或模仿的模型或模式。" +
            "<br><br>" +
            "(B) '例外' 意味着被排除在一般陈述之外或不遵循规则的人或事物。" +
            "<br><br>" +
            "(C) '偏差' 意味着偏离既定路线或接受标准的行为。" +
            "<br><br>" +
            "(D) '异常' 意味着偏离标准、正常或预期的事情。"
    },
    {
        id: 7,
        question: "The CEO emphasized the importance of __________, ensuring that every team member was responsible for their actions and decisions.",
        chinese_question: "首席执行官强调了 __________ 的重要性，确保每个团队成员都对自己的行为和决策负责。",
        answers: [
            { option: "A", answer: "irresponsibility", chinese_answer: "不负责任", chinese_romanization: "bù fù zérèn" },
            { option: "B", answer: "anonymity", chinese_answer: "匿名", chinese_romanization: "nìmíng" },
            { option: "C", answer: "accountability", chinese_answer: "责任", chinese_romanization: "zérèn" },
            { option: "D", answer: "evasion", chinese_answer: "逃避", chinese_romanization: "táobì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'accountability' means the fact or condition of being accountable; responsibility." +
            "<br><br>" +
            "(A) 'irresponsibility' means lack of a proper sense of responsibility." +
            "<br><br>" +
            "(B) 'anonymity' means the condition of being anonymous." +
            "<br><br>" +
            "(D) 'evasion' means the action of evading something.",
        chinese_explanation: "(C) '责任' 一词意味着负有责任的事实或条件。" +
            "<br><br>" +
            "(A) '不负责任' 意味着缺乏正确的责任感。" +
            "<br><br>" +
            "(B) '匿名' 意味着匿名的状态。" +
            "<br><br>" +
            "(D) '逃避' 意味着逃避某事的行为。"
    },
    {
        id: 8,
        question: "Despite his many talents, he had a serious __________ in his character, such as a lack of empathy, that affected his relationships.",
        chinese_question: "尽管他才华横溢，但他的性格中有一个严重的 __________，例如缺乏同情心，这影响了他的人际关系。",
        answers: [
            { option: "A", answer: "surplus", chinese_answer: "过剩", chinese_romanization: "guòshèng" },
            { option: "B", answer: "sufficiency", chinese_answer: "充足", chinese_romanization: "chōngzú" },
            { option: "C", answer: "excess", chinese_answer: "过量", chinese_romanization: "guòliàng" },
            { option: "D", answer: "deficiency", chinese_answer: "缺陷", chinese_romanization: "quēxiàn" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'deficiency' means a flaw or gap." +
            "<br><br>" +
            "(A) 'surplus' means an excess amount." +
            "<br><br>" +
            "(B) 'sufficiency' means an adequate amount." +
            "<br><br>" +
            "(C) 'excess' means more than necessary.",
        chinese_explanation: "(D) '缺陷' 意味着一个缺点或漏洞。" +
            "<br><br>" +
            "(A) '过剩' 意味着过多的量。" +
            "<br><br>" +
            "(B) '充足' 意味着足够的量。" +
            "<br><br>" +
            "(C) '过量' 意味着超过必要的量。"
    },
    {
        id: 9,
        question: "His __________ tactics in politics showed that he was willing to do whatever it took to maintain power.",
        chinese_question: "他在政治上使用 __________ 的手段，显示他愿意不择手段地保持权力。",
        answers: [
            { option: "A", answer: "straightforward", chinese_answer: "直截了当", chinese_romanization: "zhíjiéle dàng" },
            { option: "B", answer: "ethical", chinese_answer: "伦理", chinese_romanization: "lúnlǐ" },
            { option: "C", answer: "Machiavellian", chinese_answer: "阴险", chinese_romanization: "yīnxiǎn" },
            { option: "D", answer: "honest", chinese_answer: "诚实", chinese_romanization: "chéngshí" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'Machiavellian' means cunning, scheming, and unscrupulous, especially in politics." +
            "<br><br>" +
            "(A) 'straightforward' means uncomplicated and easy to do or understand." +
            "<br><br>" +
            "(B) 'ethical' means relating to moral principles or the branch of knowledge dealing with these." +
            "<br><br>" +
            "(D) 'honest' means free of deceit and untruthfulness; sincere.",
        chinese_explanation: "(C) '阴险' 一词意味着狡猾、阴谋和不择手段，尤其是在政治上。" +
            "<br><br>" +
            "(A) '直截了当' 意味着不复杂且易于做或理解。" +
            "<br><br>" +
            "(B) '伦理' 意味着与道德原则或处理这些原则的知识分支有关。" +
            "<br><br>" +
            "(D) '诚实' 意味着没有欺骗和不真实；真诚的。"
    },
    {
        id: 10,
        question: "The research team was hindered by a __________ of reliable data, making it difficult to draw conclusive results.",
        chinese_question: "研究团队因缺乏可靠数据而受阻，这使得得出结论变得困难。",
        answers: [
                { option: "A", answer: "abundance", chinese_answer: "充足", chinese_romanization: "chōngzú" },
                { option: "B", answer: "paucity", chinese_answer: "缺乏", chinese_romanization: "quēfá" },
                { option: "C", answer: "surplus", chinese_answer: "过剩", chinese_romanization: "guòshèng" },
                { option: "D", answer: "wealth", chinese_answer: "丰富", chinese_romanization: "fēngfù" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'paucity' means the presence of something in only small or insufficient quantities or amounts." +
            "<br><br>" +
            "(A) 'abundance' means a very large quantity of something." +
            "<br><br>" +
            "(C) 'surplus' means an amount of something left over when requirements have been met; an excess of production or supply." +
            "<br><br>" +
            "(D) 'wealth' means an abundance of valuable possessions or money.",
        chinese_explanation: "(B) '缺乏' 意味着某物的存在数量很少或不足。" +
            "<br><br>" +
            "(A) '充足' 意味着某物的数量非常大。" +
            "<br><br>" +
            "(C) '过剩' 意味着在需求得到满足后剩余的数量；生产或供应过剩。" +
            "<br><br>" +
            "(D) '丰富' 意味着大量有价值的财产或金钱。"
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
