// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "Her inspiring speech at the graduation ceremony was met with a thunderous __________ from the crowd.",
        chinese_question: "她在毕业典礼上的鼓舞人心的演讲赢得了观众的热烈 __________。",
        answers: [
            { option: "A", answer: "silence", chinese_answer: "沉默", chinese_romanization: "chénmò" },
            { option: "B", answer: "ovation", chinese_answer: "欢呼", chinese_romanization: "huānhū" },
            { option: "C", answer: "whisper", chinese_answer: "低语", chinese_romanization: "dī yǔ" },
            { option: "D", answer: "murmur", chinese_answer: "低语", chinese_romanization: "dī yǔ" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'ovation' means a sustained and enthusiastic show of appreciation from an audience, especially by means of applause. Figuratively, it can mean receiving widespread praise or recognition." +
            "<br><br>" +
            "(A) 'silence' means complete absence of sound." +
            "<br><br>" +
            "(C) 'whisper' means speaking very softly using one's breath without one's vocal cords, especially for the sake of secrecy." +
            "<br><br>" +
            "(D) 'murmur' means a soft, indistinct sound made by a person or group of people speaking quietly or at a distance.",
        chinese_explanation: "(B) '欢呼'一词意味着观众通过鼓掌表现出的持续而热情的赞赏。比喻地，它可以表示获得广泛的赞扬或认可。" +
            "<br><br>" +
            "(A) '沉默' 意味着完全没有声音。" +
            "<br><br>" +
            "(C) '低语' 意味着用气息而不用声带轻声说话，尤其是为了保密。" +
            "<br><br>" +
            "(D) '低语' 意味着一群人或多人安静地或在远处发出的柔和的、不清晰的声音。"
    },
    {
        id: 2,
        question: "The tech __________ invested heavily in startups, hoping to find the next big innovation.",
        chinese_question: "这位科技 __________ 在初创公司进行了大量投资，希望能找到下一个重大创新。",
        answers: [
            { option: "A", answer: "tycoon", chinese_answer: "大亨", chinese_romanization: "dàhēng" },
            { option: "B", answer: "novice", chinese_answer: "新手", chinese_romanization: "xīnshǒu" },
            { option: "C", answer: "amateur", chinese_answer: "业余爱好者", chinese_romanization: "yèyú àihào zhě" },
            { option: "D", answer: "beginner", chinese_answer: "初学者", chinese_romanization: "chūxué zhě" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'tycoon' means a wealthy, powerful person in business or industry." +
            "<br><br>" +
            "(B) 'novice' means a person new to or inexperienced in a field or situation." +
            "<br><br>" +
            "(C) 'amateur' means a person who engages in a pursuit, especially a sport, on an unpaid basis." +
            "<br><br>" +
            "(D) 'beginner' means a person just starting to learn a skill or take part in an activity.",
        chinese_explanation: "(A) '大亨' 意思是商业或工业中有钱、有权的人。" +
            "<br><br>" +
            "(B) '新手' 意味着在某个领域或情况下新来或没有经验的人。" +
            "<br><br>" +
            "(C) '业余爱好者' 意味着以未支付报酬的方式从事追求的人，特别是体育运动。" +
            "<br><br>" +
            "(D) '初学者' 意味着刚开始学习一项技能或参与某项活动的人。"
    },
    {
        id: 3,
        question: "In the fierce competition for market share, small businesses often become __________.",
        chinese_question: "在激烈的市场份额竞争中，小企业往往成为 __________。",
        answers: [
            { option: "A", answer: "casualties", chinese_answer: "受害者", chinese_romanization: "shòuhài zhě" },
            { option: "B", answer: "victors", chinese_answer: "胜利者", chinese_romanization: "shènglì zhě" },
            { option: "C", answer: "beneficiaries", chinese_answer: "受益者", chinese_romanization: "shòuyì zhě" },
            { option: "D", answer: "allies", chinese_answer: "盟友", chinese_romanization: "méngyǒu" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'casualties' metaphorically means those who suffer as a result of a situation or event." +
            "<br><br>" +
            "(B) 'victors' means people who defeat an enemy or opponent in a battle, game, or other competition." +
            "<br><br>" +
            "(C) 'beneficiaries' means people who derive advantage from something, especially a trust, will, or life insurance policy." +
            "<br><br>" +
            "(D) 'allies' means people, groups, or nations that have joined in an association for mutual benefit or to achieve a common purpose.",
        chinese_explanation: "(A) '受害者' 比喻因情况或事件而遭受痛苦的人。" +
            "<br><br>" +
            "(B) '胜利者' 意味着在战斗、比赛或其他竞争中击败敌人或对手的人。" +
            "<br><br>" +
            "(C) '受益者' 意味着从某事中获得好处的人，特别是信托、遗嘱或人寿保险单。" +
            "<br><br>" +
            "(D) '盟友' 意味着为共同利益或实现共同目标而联合的人、团体或国家。"
    },
    {
        id: 4,
        question: "Her __________ that they would win the game gave the team confidence.",
        chinese_question: "她对他们会赢得比赛的 __________ 给了球队信心。",
        answers: [
            { option: "A", answer: "prediction", chinese_answer: "预测", chinese_romanization: "yùcè" },
            { option: "B", answer: "hesitation", chinese_answer: "犹豫", chinese_romanization: "yóuyù" },
            { option: "C", answer: "denial", chinese_answer: "否认", chinese_romanization: "fǒurèn" },
            { option: "D", answer: "confusion", chinese_answer: "混乱", chinese_romanization: "hùnluàn" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'prediction' metaphorically means a confident forecast or expectation." +
            "<br><br>" +
            "(B) 'hesitation' means the action of pausing before saying or doing something." +
            "<br><br>" +
            "(C) 'denial' means the action of declaring something to be untrue." +
            "<br><br>" +
            "(D) 'confusion' means lack of understanding; uncertainty.",
        chinese_explanation: "(A) '预测' 比喻自信的预报或期望。" +
            "<br><br>" +
            "(B) '犹豫' 意味着在说或做某事之前的停顿。" +
            "<br><br>" +
            "(C) '否认' 意味着宣布某事不真实的行为。" +
            "<br><br>" +
            "(D) '混乱' 意味着缺乏理解；不确定性。"
    },
    {
        id: 5,
        question: "Their playful __________ kept the mood light during the long meeting, helping everyone stay engaged.",
        chinese_question: "他们的 __________ 保持了长时间会议的轻松气氛，帮助大家保持参与。",
        answers: [
            { option: "A", answer: "argument", chinese_answer: "争论", chinese_romanization: "zhēnglùn" },
            { option: "B", answer: "silence", chinese_answer: "沉默", chinese_romanization: "chénmò" },
            { option: "C", answer: "raillery", chinese_answer: "玩笑", chinese_romanization: "wánxiào" },
            { option: "D", answer: "conflict", chinese_answer: "冲突", chinese_romanization: "chōngtú" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'raillery' means good-humored teasing." +
            "<br><br>" +
            "(A) 'argument' means an exchange of diverging or opposite views, typically a heated or angry one." +
            "<br><br>" +
            "(B) 'silence' means complete absence of sound." +
            "<br><br>" +
            "(D) 'conflict' means a serious disagreement or argument.",
        chinese_explanation: "(C) '玩笑' 一词意味着幽默的戏弄。" +
            "<br><br>" +
            "(A) '争论' 意味着交换不同或相反的观点，通常是激烈或愤怒的。" +
            "<br><br>" +
            "(B) '沉默' 意味着完全没有声音。" +
            "<br><br>" +
            "(D) '冲突' 意味着严重的分歧或争论。"
    },
    {
        id: 6,
        question: "She expressed her __________ for the proposal, believing it was impractical and poorly thought out.",
        chinese_question: "她对这个提议表达了__________，认为这是不切实际且考虑不周的。",
        answers: [
            { option: "A", answer: "admiration", chinese_answer: "钦佩", chinese_romanization: "qīnpèi" },
            { option: "B", answer: "disdain", chinese_answer: "轻视", chinese_romanization: "qīngshì" },
            { option: "C", answer: "joy", chinese_answer: "喜悦", chinese_romanization: "xǐyuè" },
            { option: "D", answer: "interest", chinese_answer: "兴趣", chinese_romanization: "xìngqù" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'disdain' means the feeling that someone or something is unworthy of one's consideration or respect. Figuratively, it can mean showing a strong disapproval or lack of respect for something." +
            "<br><br>" +
            "(A) 'admiration' means respect and warm approval." +
            "<br><br>" +
            "(C) 'joy' means a feeling of great pleasure and happiness." +
            "<br><br>" +
            "(D) 'interest' means the feeling of wanting to know or learn about something or someone.",
        chinese_explanation: "(B) '轻视'一词意味着认为某人或某事不值得考虑或尊重的感觉。比喻地，它可以表示对某事物表现出强烈的反对或缺乏尊重。" +
            "<br><br>" +
            "(A) '钦佩' 意味着尊重和热烈的赞同。" +
            "<br><br>" +
            "(C) '喜悦' 意味着极大的快乐和幸福。" +
            "<br><br>" +
            "(D) '兴趣' 意味着想知道或了解某事或某人的感觉。"
    },
    {
        id: 7,
        question: "The outdated regulations acted as a __________ on innovation, preventing new ideas from being implemented.",
        chinese_question: "过时的规定像__________一样束缚着创新，阻碍了新想法的实施。",
        answers: [
            { option: "A", answer: "stimulant", chinese_answer: "兴奋剂", chinese_romanization: "xīngfèn jì" },
            { option: "B", answer: "shackle", chinese_answer: "镣铐", chinese_romanization: "liàokǎo" },
            { option: "C", answer: "pillow", chinese_answer: "枕头", chinese_romanization: "zhěntou" },
            { option: "D", answer: "book", chinese_answer: "书", chinese_romanization: "shū" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'shackle' means a pair of fetters connected together by a chain, used to fasten a prisoner’s wrists or ankles together. Figuratively, it can mean something that restricts or impedes progress." +
            "<br><br>" +
            "(A) 'stimulant' means a substance that raises levels of physiological or nervous activity in the body." +
            "<br><br>" +
            "(C) 'pillow' means a rectangular cloth bag stuffed with feathers, foam rubber, or other soft materials, used to support the head when lying down." +
            "<br><br>" +
            "(D) 'book' means a set of written, printed, or blank pages fastened together along one side and encased between protective covers.",
        chinese_explanation: "(B) '镣铐'一词意味着一对由链子连接在一起的脚镣，用于将囚犯的手腕或脚踝固定在一起。比喻地，它可以表示限制或阻碍进展的东西。" +
            "<br><br>" +
            "(A) '兴奋剂' 意味着一种提高体内生理或神经活动水平的物质。" +
            "<br><br>" +
            "(C) '枕头' 意味着一个长方形的布袋，里面装满羽毛、泡沫橡胶或其他软材料，用于躺下时支撑头部。" +
            "<br><br>" +
            "(D) '书' 意味着一组写有文字、印刷或空白的页，沿一侧固定在一起，并装在保护封面之间。"
    },
    {
        id: 8,
        question: "The politician's __________ on healthcare reform was well-known and often debated, as he consistently advocated for universal coverage and lower costs.",
        chinese_question: "这位政治家对医疗改革的__________广为人知，并经常受到讨论，因为他一直主张全民覆盖和降低成本。",
        answers: [
            { option: "A", answer: "indifference", chinese_answer: "冷漠", chinese_romanization: "lěngmò" },
            { option: "B", answer: "hesitation", chinese_answer: "犹豫", chinese_romanization: "yóuyù" },
            { option: "C", answer: "avoidance", chinese_answer: "回避", chinese_romanization: "huíbì" },
            { option: "D", answer: "stance", chinese_answer: "立场", chinese_romanization: "lìchǎng" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'stance' means the attitude of a person or organization toward something; a standpoint. Figuratively, it can mean a firm position or viewpoint on an issue." +
            "<br><br>" +
            "(A) 'indifference' means lack of interest, concern, or sympathy." +
            "<br><br>" +
            "(B) 'hesitation' means the action of pausing or hesitating before saying or doing something." +
            "<br><br>" +
            "(C) 'avoidance' means the action of keeping away from or not doing something.",
        chinese_explanation: "(D) '立场'一词意味着某人或组织对某事的态度；立场。比喻地，它可以表示在某个问题上的坚定立场或观点。" +
            "<br><br>" +
            "(A) '冷漠' 意味着缺乏兴趣、关心或同情。" +
            "<br><br>" +
            "(B) '犹豫' 意味着在说或做某事之前的暂停或犹豫的动作。" +
            "<br><br>" +
            "(C) '回避' 意味着远离或不做某事的行为。"
    },
    {
        id: 9,
        question: "The idea of failure was like a __________ that haunted him, preventing him from taking risks.",
        chinese_question: "失败的念头像一个 __________ 一样困扰着他，阻止他冒险。",
        answers: [
            { option: "A", answer: "opportunity", chinese_answer: "机会", chinese_romanization: "jīhuì" },
            { option: "B", answer: "blessing", chinese_answer: "祝福", chinese_romanization: "zhùfú" },
            { option: "C", answer: "phantom", chinese_answer: "幻影", chinese_romanization: "huànyǐng" },
            { option: "D", answer: "certainty", chinese_answer: "确定性", chinese_romanization: "quèdìngxìng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'phantom' literally means a ghost or an apparition. Figuratively, it refers to a fear or concern that is not based on reality, but which still exerts a powerful influence." +
            "<br><br>" +
            "(A) 'opportunity' means a set of circumstances that makes it possible to do something." +
            "<br><br>" +
            "(B) 'blessing' means a beneficial thing for which one is grateful." +
            "<br><br>" +
            "(D) 'certainty' means firm conviction that something is the case.",
        chinese_explanation: "(C) '幻影' 字面意思是鬼魂或幽灵。比喻意义上它指的是一种不基于现实的恐惧或担忧，但仍然具有强大的影响力。" +
            "<br><br>" +
            "(A) '机会' 意味着一组使某事成为可能的情况。" +
            "<br><br>" +
            "(B) '祝福' 意味着一个令人感激的有益之事。" +
            "<br><br>" +
            "(D) '确定性' 意味着对某事的坚定信念。"
    },
    {
        id: 10,
        question: "The holiday season brought a sales __________ for the store, with record-breaking profits and a surge in customer purchases.",
        chinese_question: "假日季节为商店带来了销售 __________，创纪录的利润和客户购买的激增。",
        answers: [
            { option: "A", answer: "bonanza", chinese_answer: "繁荣", chinese_romanization: "fánróng" },
            { option: "B", answer: "decline", chinese_answer: "下降", chinese_romanization: "xiàjiàng" },
            { option: "C", answer: "misfortune", chinese_answer: "不幸", chinese_romanization: "bùxìng" },
            { option: "D", answer: "hardship", chinese_answer: "困难", chinese_romanization: "kùnnán" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'bonanza' metaphorically means a large amount of something desirable." +
            "<br><br>" +
            "(B) 'decline' means a gradual and continuous loss of strength, numbers, quality, or value." +
            "<br><br>" +
            "(C) 'misfortune' means bad luck." +
            "<br><br>" +
            "(D) 'hardship' means severe suffering or privation.",
        chinese_explanation: "(A) '繁荣' 比喻大量的可取之物。" +
            "<br><br>" +
            "(B) '下降' 意味着数量、质量或价值的逐渐和持续损失。" +
            "<br><br>" +
            "(C) '不幸' 意味着坏运气。" +
            "<br><br>" +
            "(D) '困难' 意味着严重的痛苦或贫困。"
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
