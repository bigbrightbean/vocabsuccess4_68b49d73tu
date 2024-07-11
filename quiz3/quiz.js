// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "He felt __________ shame after being publicly humiliated by his peers, unable to look anyone in the eye and wanting to disappear.",
        chinese_question: "在被同龄人公开羞辱后，他感到极度的羞耻，不敢直视任何人的眼睛，只想消失。",
        answers: [
            { option: "A", answer: "temporary", chinese_answer: "暂时的", chinese_romanization: "zànshí de" },
            { option: "B", answer: "manageable", chinese_answer: "可控的", chinese_romanization: "kě kòng de" },
            { option: "C", answer: "mild", chinese_answer: "轻微的", chinese_romanization: "qīngwēi de" },
            { option: "D", answer: "abject", chinese答案: "极度的", chinese拼音: "jídù de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'abject' means extremely bad, unpleasant, and degrading." +
            "<br><br>" +
            "(A) 'temporary' means lasting for only a limited period of time; not permanent." +
            "<br><br>" +
            "(B) 'manageable' means able to be managed, controlled, or accomplished without great difficulty." +
            "<br><br>" +
            "(C) 'mild' means not severe or strong.",
        chinese_explanation: "(D) '极度的' 意味着极其糟糕、不愉快和卑微的。" +
            "<br><br>" +
            "(A) '暂时的' 意味着只持续有限的时间；不是永久的。" +
            "<br><br>" +
            "(B) '可控的' 意味着能够被管理、控制或在没有很大困难的情况下完成的。" +
            "<br><br>" +
            "(C) '轻微的' 意味着不严重或不强烈的。"
    },
    {
        id: 2,
        question: "The computer program contained __________ commands that only experienced developers could use effectively.",
        chinese_question: "计算机程序包含 __________ 的命令，只有有经验的开发人员才能有效使用。",
        answers: [
            { option: "A", answer: "basic", chinese_answer: "基本的", chinese_romanization: "jīběn de" },
            { option: "B", answer: "straightforward", chinese_answer: "直截了当的", chinese_romanization: "zhíjiéliaodàng de" },
            { option: "C", answer: "simple", chinese_answer: "简单的", chinese_romanization: "jiǎndān de" },
            { option: "D", answer: "arcane", chinese_answer: "神秘的", chinese_romanization: "shénmì de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'arcane' means understood by few; mysterious or secret." +
            "<br><br>" +
            "(A) 'basic' means forming an essential foundation or starting point; fundamental." +
            "<br><br>" +
            "(B) 'straightforward' means uncomplicated and easy to do or understand." +
            "<br><br>" +
            "(C) 'simple' means easily understood or done; presenting no difficulty.",
        chinese_explanation: "(D) '神秘的' 意味着只有少数人能理解的；神秘的或秘密的。" +
            "<br><br>" +
            "(A) '基本的' 意味着形成基本的基础或起点的；根本的。" +
            "<br><br>" +
            "(B) '直截了当的' 意味着简单易行的。" +
            "<br><br>" +
            "(C) '简单的' 意味着容易理解或完成的；没有难度的。"
    },
    {
        id: 3,
        question: "His __________ handling of the situation made it worse instead of better.",
        chinese_question: "他对情况的 __________ 处理使情况变得更糟，而不是更好。",
        answers: [
            { option: "A", answer: "ungainly", chinese_answer: "笨拙的", chinese_romanization: "bènzhuō de" },
            { option: "B", answer: "skillful", chinese_answer: "熟练的", chinese_romanization: "shúliàn de" },
            { option: "C", answer: "adept", chinese_answer: "精通的", chinese_romanization: "jīngtōng de" },
            { option: "D", answer: "proficient", chinese_answer: "熟练的", chinese_romanization: "shúliàn de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'ungainly' metaphorically means lacking smoothness or dexterity." +
            "<br><br>" +
            "(B) 'skillful' means having or showing skill." +
            "<br><br>" +
            "(C) 'adept' means very skilled or proficient at something." +
            "<br><br>" +
            "(D) 'proficient' means competent or skilled in doing or using something.",
        chinese_explanation: "(A) '笨拙的' 比喻缺乏顺畅或灵巧。" +
            "<br><br>" +
            "(B) '熟练的' 意味着具有或表现出技能的。" +
            "<br><br>" +
            "(C) '精通的' 意味着在某事上非常熟练或精通。" +
            "<br><br>" +
            "(D) '熟练的' 意味着在做或使用某事方面具有能力或熟练。"
    },
    {
        id: 4,
        question: "The experience had a __________ impact on her, changing her perspective on life entirely.",
        chinese_question: "这次经历对她产生了__________的影响，完全改变了她对生活的看法。",
        answers: [
            { option: "A", answer: "shallow", chinese_answer: "浅的", chinese_romanization: "qiǎn de" },
            { option: "B", answer: "trivial", chinese_answer: "琐碎的", chinese_romanization: "suǒsuì de" },
            { option: "C", answer: "profound", chinese_answer: "深刻的", chinese_romanization: "shēnkè de" },
            { option: "D", answer: "superficial", chinese_answer: "表面的", chinese_romanization: "biǎomiàn de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'profound' means very great or intense; having or showing great knowledge or insight. Figuratively, it can mean deeply affecting or meaningful." +
            "<br><br>" +
            "(A) 'shallow' means of little depth." +
            "<br><br>" +
            "(B) 'trivial' means of little value or importance." +
            "<br><br>" +
            "(D) 'superficial' means existing or occurring at or on the surface.",
        chinese_explanation: "(C) '深刻的'一词意味着非常伟大或强烈的；具有或展示伟大的知识或见解的。比喻地，它可以表示深刻影响或有意义的。" +
            "<br><br>" +
            "(A) '浅的' 意味着深度很小的。" +
            "<br><br>" +
            "(B) '琐碎的' 意味着没有价值或重要性的。" +
            "<br><br>" +
            "(D) '表面的' 意味着存在或发生在表面上。"
    },
    {
        id: 5,
        question: "The quality of the customer service was __________, with long wait times and unhelpful staff.",
        chinese_question: "客户服务质量 __________，等待时间长，工作人员不帮忙。",
        answers: [
            { option: "A", answer: "commendable", chinese_answer: "值得赞扬的", chinese_romanization: "zhídé zānyáng de" },
            { option: "B", answer: "satisfactory", chinese_answer: "令人满意的", chinese_romanization: "lìng rén mǎnyì de" },
            { option: "C", answer: "average", chinese_answer: "一般的", chinese_romanization: "yībān de" },
            { option: "D", answer: "abysmal", chinese_answer: "糟糕的", chinese_romanization: "zāogāo de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'abysmal' means extremely bad or appalling." +
            "<br><br>" +
            "(A) 'commendable' means deserving praise." +
            "<br><br>" +
            "(B) 'satisfactory' means fulfilling expectations or needs; acceptable, though not outstanding or perfect." +
            "<br><br>" +
            "(C) 'average' means of the usual or ordinary standard.",
        chinese_explanation: "(D) '糟糕的' 意味着极其糟糕或令人震惊的。" +
            "<br><br>" +
            "(A) '值得赞扬的' 意味着值得赞扬的。" +
            "<br><br>" +
            "(B) '令人满意的' 意味着满足期望或需求的；可以接受的，尽管不是出色或完美的。" +
            "<br><br>" +
            "(C) '一般的' 意味着通常或普通的标准。"
    },
    {
        id: 6,
        question: "He was __________ about the award ceremony, having won several times before.",
        chinese_question: "他对颁奖典礼表现得 __________，因为他以前已经多次获奖。",
        answers: [
            { option: "A", answer: "nervous", chinese_answer: "紧张的", chinese_romanization: "jǐnzhāng de" },
            { option: "B", answer: "blasé", chinese_answer: "漠不关心的", chinese_romanization: "mò bù guānxīn de" },
            { option: "C", answer: "thrilled", chinese_answer: "激动的", chinese_romanization: "jīdòng de" },
            { option: "D", answer: "eager", chinese_answer: "渴望的", chinese_romanization: "kěwàng de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'blasé' metaphorically means unimpressed due to over-familiarity." +
            "<br><br>" +
            "(A) 'nervous' means easily agitated or alarmed; tending to be anxious." +
            "<br><br>" +
            "(C) 'thrilled' means having a sudden feeling of excitement and pleasure." +
            "<br><br>" +
            "(D) 'eager' means wanting to do or have something very much.",
        chinese_explanation: "(B) '漠不关心的' 比喻由于过度熟悉而不感兴趣。" +
            "<br><br>" +
            "(A) '紧张的' 意味着容易激动或惊慌的；倾向于焦虑的。" +
            "<br><br>" +
            "(C) '激动的' 意味着有突然的兴奋和愉悦的感觉。" +
            "<br><br>" +
            "(D) '渴望的' 意味着非常想要做或拥有某物的。"
    },
    {
        id: 7,
        question: "He remained __________ in his beliefs, even when challenged.",
        chinese_question: "即使在受到挑战时，他的信念仍然 __________。",
        answers: [
            { option: "A", answer: "consistent", chinese_answer: "坚定的", chinese_romanization: "jiāndìng de" },
            { option: "B", answer: "wavering", chinese_answer: "动摇的", chinese_romanization: "dòngyáo de" },
            { option: "C", answer: "uncertain", chinese_answer: "不确定的", chinese_romanization: "bù quèdìng de" },
            { option: "D", answer: "hesitant", chinese_answer: "犹豫的", chinese_romanization: "yóuyù de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'consistent' metaphorically means steady and unchanging in principles or opinions." +
            "<br><br>" +
            "(B) 'wavering' means to be undecided between two opinions or courses of action." +
            "<br><br>" +
            "(C) 'uncertain' means not able to be relied on; not known or definite." +
            "<br><br>" +
            "(D) 'hesitant' means tentative, unsure, or slow in acting or speaking.",
        chinese_explanation: "(A) '坚定的' 比喻在原则或意见上稳定和不变。" +
            "<br><br>" +
            "(B) '动摇的' 意味着在两个意见或行动方案之间犹豫不决。" +
            "<br><br>" +
            "(C) '不确定的' 意味着不能依靠的；未知或不确定的。" +
            "<br><br>" +
            "(D) '犹豫的' 意味着在行动或说话时犹豫不决、不确定或缓慢。"
    },
    {
        id: 8,
        question: "His sudden arrival was __________, disrupting the carefully planned meeting.",
        chinese_question: "他突然到来 __________，打乱了精心策划的会议。",
        answers: [
            { option: "A", answer: "timely", chinese_answer: "及时", chinese_romanization: "jíshí" },
            { option: "B", answer: "welcome", chinese_answer: "受欢迎的", chinese_romanization: "shòu huānyíng de" },
            { option: "C", answer: "inconvenient", chinese_answer: "不便", chinese_romanization: "bù biàn" },
            { option: "D", answer: "expected", chinese_answer: "预期", chinese_romanization: "yùqī" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'inconvenient' figuratively means occurring at an awkward or unsuitable time." +
            "<br><br>" +
            "(A) 'timely' means done or occurring at a favorable or useful time." +
            "<br><br>" +
            "(B) 'welcome' means gladly received." +
            "<br><br>" +
            "(D) 'expected' means regarded as likely to happen.",
        chinese_explanation: "(C) '不便' 在比喻意义上意味着在尴尬或不合适的时间发生。" +
            "<br><br>" +
            "(A) '及时' 意味着在有利或有用的时间完成或发生的。" +
            "<br><br>" +
            "(B) '受欢迎的' 意味着被高兴地接受的。" +
            "<br><br>" +
            "(D) '预期' 意味着被认为可能发生的。"
    },
    {
        id: 9,
        question: "To maintain a sterile environment in the operating room, all equipment is thoroughly cleaned with an __________ solution.",
        chinese_question: "为了保持手术室的无菌环境，所有设备都用 __________ 溶液彻底清洁。",
        answers: [
            { option: "A", answer: "corrosive", chinese_answer: "腐蚀性的", chinese_romanization: "fǔshí xìng de" },
            { option: "B", answer: "toxic", chinese_answer: "有毒的", chinese_romanization: "yǒudú de" },
            { option: "C", answer: "harmful", chinese_answer: "有害的", chinese_romanization: "yǒuhài de" },
            { option: "D", answer: "antiseptic", chinese_answer: "抗菌的", chinese_romanization: "kàngjūn de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'antiseptic' means preventing the growth of disease-causing microorganisms." +
            "<br><br>" +
            "(A) 'corrosive' means tending to cause corrosion." +
            "<br><br>" +
            "(B) 'toxic' means poisonous." +
            "<br><br>" +
            "(C) 'harmful' means causing or likely to cause harm.",
        chinese_explanation: "(D) '抗菌的' 意味着防止致病微生物的生长。" +
            "<br><br>" +
            "(A) '腐蚀性的' 意味着容易引起腐蚀的。" +
            "<br><br>" +
            "(B) '有毒的' 意味着有毒的。" +
            "<br><br>" +
            "(C) '有害的' 意味着造成或可能造成伤害的。"
    },
    {
        id: 10,
        question: "The holiday party was a __________ event, with everyone enjoying good food, lively music, and great company.",
        chinese_question: "节日晚会是一个 __________ 的活动，每个人都享受美食、欢快的音乐和美好的陪伴。",
        answers: [
            { option: "A", answer: "dull", chinese_answer: "乏味的", chinese_romanization: "fáwèi de" },
            { option: "B", answer: "somber", chinese_answer: "阴沉的", chinese_romanization: "yīnchén de" },
            { option: "C", answer: "tedious", chinese_answer: "冗长的", chinese_romanization: "rǒngcháng de" },
            { option: "D", answer: "convivial", chinese_answer: "欢快的", chinese_romanization: "huānkuài de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'convivial' means friendly, lively, and enjoyable." +
            "<br><br>" +
            "(A) 'dull' means lacking interest or excitement." +
            "<br><br>" +
            "(B) 'somber' means dark or dull in color or tone; gloomy." +
            "<br><br>" +
            "(C) 'tedious' means too long, slow, or dull; tiresome or monotonous.",
        chinese_explanation: "(D) '欢快的' 意味着友好、热闹和愉快的。" +
            "<br><br>" +
            "(A) '乏味的' 意味着缺乏兴趣或兴奋。" +
            "<br><br>" +
            "(B) '阴沉的' 意味着颜色或音调暗淡或阴暗的；忧郁的。" +
            "<br><br>" +
            "(C) '冗长的' 意味着过长、缓慢或单调的；乏味的或单调的。"
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
