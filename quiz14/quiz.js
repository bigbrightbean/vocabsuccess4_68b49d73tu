// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The fishermen gathered their __________ gear before heading out to sea for the day's catch.",
        chinese_question: "渔民们在出海捕捞当天的渔获之前收集了他们的 __________ 装备。",
        answers: [
            { option: "A", answer: "agricultural", chinese_answer: "农业的", chinese_romanization: "nóngyè de" },
            { option: "B", answer: "piscatorial", chinese_answer: "渔业的", chinese_romanization: "yúyè de" },
            { option: "C", answer: "industrial", chinese_answer: "工业的", chinese_romanization: "gōngyè de" },
            { option: "D", answer: "culinary", chinese_answer: "烹饪的", chinese_romanization: "pēngrèn de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'piscatorial' means of or concerning fishermen or fishing." +
            "<br><br>" +
            "(A) 'agricultural' means relating to agriculture." +
            "<br><br>" +
            "(C) 'industrial' means relating to or characterized by industry." +
            "<br><br>" +
            "(D) 'culinary' means of or for cooking.",
        chinese_explanation: "(B) '渔业的' 一词意味着关于渔民或捕鱼的。" +
            "<br><br>" +
            "(A) '农业的' 意味着与农业有关的。" +
            "<br><br>" +
            "(C) '工业的' 意味着与工业有关或具有工业特征的。" +
            "<br><br>" +
            "(D) '烹饪的' 意味着关于烹饪的。"
    },
    {
        id: 2,
        question: "The bombing was an __________ attack that affected both military and civilian targets.",
        chinese_question: "轰炸是一次 __________ 的袭击，影响了军事和民用目标。",
        answers: [
            { option: "A", answer: "selective", chinese_answer: "有选择的", chinese_romanization: "yǒu xuǎnzé de" },
            { option: "B", answer: "indiscriminate", chinese_answer: "无差别的", chinese_romanization: "wú chābié de" },
            { option: "C", answer: "precise", chinese_answer: "精确的", chinese_romanization: "jīngquè de" },
            { option: "D", answer: "focused", chinese_answer: "集中的", chinese_romanization: "jízhōng de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'indiscriminate' means done at random or without careful judgment." +
            "<br><br>" +
            "(A) 'selective' means relating to or involving the selection of the most suitable or best qualified." +
            "<br><br>" +
            "(C) 'precise' means marked by exactness and accuracy of expression or detail." +
            "<br><br>" +
            "(D) 'focused' means directed at something specific.",
        chinese_explanation: "(B) '无差别的' 一词意味着随机进行的或没有仔细判断的。" +
            "<br><br>" +
            "(A) '有选择的' 意味着涉及选择最合适或最有资格的。" +
            "<br><br>" +
            "(C) '精确的' 意味着在表达或细节上准确无误的。" +
            "<br><br>" +
            "(D) '集中的' 意味着指向某个特定的东西。"
    },
    {
        id: 3,
        question: "The idea that the earth is flat is __________ and has been disproven by scientific evidence.",
        chinese_question: "地球是平的这种想法是 __________ 的，并已被科学证据驳斥。",
        answers: [
            { option: "A", answer: "reasonable", chinese_answer: "合理的", chinese_romanization: "hélǐ de" },
            { option: "B", answer: "plausible", chinese_answer: "似乎合理的", chinese_romanization: "sìhū hélǐ de" },
            { option: "C", answer: "preposterous", chinese_answer: "荒谬的", chinese_romanization: "huāngmiù de" },
            { option: "D", answer: "logical", chinese_answer: "合逻辑的", chinese_romanization: "hé luójí de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'preposterous' means contrary to reason or common sense; utterly absurd or ridiculous." +
            "<br><br>" +
            "(A) 'reasonable' means having sound judgment; fair and sensible." +
            "<br><br>" +
            "(B) 'plausible' means (of an argument or statement) seeming reasonable or probable." +
            "<br><br>" +
            "(D) 'logical' means of or according to the rules of logic or formal argument.",
        chinese_explanation: "(C) '荒谬的' 一词意味着违反理性或常识；完全荒谬或可笑的。" +
            "<br><br>" +
            "(A) '合理的' 意味着有正确判断的；公平和明智的。" +
            "<br><br>" +
            "(B) '似乎合理的' 意味着（论点或陈述）看起来合理或可能的。" +
            "<br><br>" +
            "(D) '合逻辑的' 意味着符合逻辑或正式论证的规则的。"
    },
    {
        id: 4,
        question: "Her __________ criticism of the company's policies was both insightful and brutally honest, prompting immediate changes.",
        chinese_question: "她对公司政策的 __________ 批评既有见地又直截了当，促使公司立即做出改变。",
        answers: [
            { option: "A", answer: "vague", chinese_answer: "模糊的", chinese_romanization: "móhú de" },
            { option: "B", answer: "mild", chinese_answer: "温和的", chinese_romanization: "wēnhé de" },
            { option: "C", answer: "confusing", chinese_answer: "令人困惑的", chinese_romanization: "lìngrén kùnhuò de" },
            { option: "D", answer: "trenchant", chinese_answer: "尖锐的", chinese_romanization: "jiānruì de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'trenchant' means vigorous or incisive in expression or style." +
            "<br><br>" +
            "(A) 'vague' means unclear in meaning." +
            "<br><br>" +
            "(B) 'mild' means gentle and not easily provoked." +
            "<br><br>" +
            "(C) 'confusing' means bewildering or perplexing.",
        chinese_explanation: "(D) '尖锐的' 意味着表达或风格上有力或犀利的。" +
            "<br><br>" +
            "(A) '模糊的' 意味着意思不清楚的。" +
            "<br><br>" +
            "(B) '温和的' 意味着温柔且不容易被激怒的。" +
            "<br><br>" +
            "(C) '令人困惑的' 意味着使人困惑或迷惑的。"
    },
    {
        id: 5,
        question: "Even though he loved wine, he was __________ at the party, drinking only a single glass.",
        chinese_question: "尽管他喜欢喝酒，但在聚会上他很 __________，只喝了一杯。",
        answers: [
            { option: "A", answer: "excessive", chinese_answer: "过度的", chinese_romanization: "guòdù de" },
            { option: "B", answer: "lavish", chinese_answer: "奢华的", chinese_romanization: "shēhuá de" },
            { option: "C", answer: "greedy", chinese_answer: "贪婪的", chinese_romanization: "tānlán de" },
            { option: "D", answer: "abstemious", chinese_answer: "节制的", chinese_romanization: "jiézhì de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'abstemious' means not self-indulgent, especially when eating and drinking." +
            "<br><br>" +
            "(A) 'excessive' means more than is necessary, normal, or desirable; immoderate." +
            "<br><br>" +
            "(B) 'lavish' means sumptuously rich, elaborate, or luxurious." +
            "<br><br>" +
            "(C) 'greedy' means having or showing an intense and selfish desire for something.",
        chinese_explanation: "(D) '节制的' 意味着不放纵，尤其是在饮食方面。" +
            "<br><br>" +
            "(A) '过度的' 意味着超过必要的、正常的或期望的；不节制的。" +
            "<br><br>" +
            "(B) '奢华的' 意味着豪华的、精美的或奢侈的。" +
            "<br><br>" +
            "(C) '贪婪的' 意味着有或表现出对某事物的强烈和自私的渴望。"
    },
    {
        id: 6,
        question: "The story about the haunted house is likely __________, as there is no evidence to support it.",
        chinese_question: "关于鬼屋的故事可能是 __________ 的，因为没有证据支持它。",
        answers: [
            { option: "A", answer: "genuine", chinese_answer: "真实的", chinese_romanization: "zhēnshí de" },
            { option: "B", answer: "apocryphal", chinese_answer: "伪造的", chinese_romanization: "wěizào de" },
            { option: "C", answer: "factual", chinese_answer: "事实的", chinese_romanization: "shìshí de" },
            { option: "D", answer: "authentic", chinese_answer: "正宗的", chinese_romanization: "zhèngzōng de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'apocryphal' means (of a story or statement) of doubtful authenticity, although widely circulated as being true." +
            "<br><br>" +
            "(A) 'genuine' means truly what something is said to be; authentic." +
            "<br><br>" +
            "(C) 'factual' means concerned with what is actually the case." +
            "<br><br>" +
            "(D) 'authentic' means of undisputed origin and not a copy; genuine.",
        chinese_explanation: "(B) '伪造的' 一词意味着（故事或陈述）真实性可疑，虽然被广泛传为真。" +
            "<br><br>" +
            "(A) '真实的' 意味着真正的东西；真实的。" +
            "<br><br>" +
            "(C) '事实的' 意味着与实际情况有关。" +
            "<br><br>" +
            "(D) '正宗的' 意味着无可争议的起源，而不是复制品；真正的。"
    },
    {
        id: 7,
        question: "Her voice was as __________ as a summer evening, soothing everyone who heard it.",
        chinese_question: "她的声音如夏夜般 __________，抚慰了每一个听到的人。",
        answers: [
            { option: "A", answer: "rough", chinese_answer: "粗糙的", chinese_romanization: "cūcāo de" },
            { option: "B", answer: "jarring", chinese_answer: "刺耳的", chinese_romanization: "cì'ěr de" },
            { option: "C", answer: "balmy", chinese_answer: "温柔的", chinese_romanization: "wēnróu de" },
            { option: "D", answer: "loud", chinese_answer: "响亮的", chinese_romanization: "xiǎngliàng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'balmy' figuratively means pleasantly mild and gentle." +
            "<br><br>" +
            "(A) 'rough' means having an uneven or irregular surface; not smooth or level." +
            "<br><br>" +
            "(B) 'jarring' means incongruous in a striking or shocking way; clashing." +
            "<br><br>" +
            "(D) 'loud' means producing or capable of producing much noise; easily audible.",
        chinese_explanation: "(C) '温柔的' 在比喻意义上意味着温和宜人的。" +
            "<br><br>" +
            "(A) '粗糙的' 意味着表面不平或不规则的；不光滑或不平的。" +
            "<br><br>" +
            "(B) '刺耳的' 意味着以引人注目或令人震惊的方式不协调的；冲突的。" +
            "<br><br>" +
            "(D) '响亮的' 意味着产生或能够产生很大噪音的；容易听到的。"
    },
    {
        id: 8,
        question: "After the stock market crash, investors went __________, selling off shares in a panic.",
        chinese_question: "股市崩盘后，投资者 __________，恐慌地抛售股票。",
        answers: [
            { option: "A", answer: "rational", chinese_answer: "理性的", chinese_romanization: "lǐxìng de" },
            { option: "B", answer: "berserk", chinese_answer: "疯狂的", chinese_romanization: "fēngkuáng de" },
            { option: "C", answer: "composed", chinese_answer: "镇定的", chinese_romanization: "zhèndìng de" },
            { option: "D", answer: "deliberate", chinese_answer: "故意的", chinese_romanization: "gùyì de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'berserk' figuratively means acting in a wild, uncontrolled manner due to panic or excitement." +
            "<br><br>" +
            "(A) 'rational' means based on or in accordance with reason or logic." +
            "<br><br>" +
            "(C) 'composed' means having one's feelings and expression under control; calm." +
            "<br><br>" +
            "(D) 'deliberate' means done consciously and intentionally.",
        chinese_explanation: "(B) '疯狂的' 在比喻意义上意味着由于恐慌或兴奋而以疯狂、失控的方式行事。" +
            "<br><br>" +
            "(A) '理性的' 意味着基于或符合理性或逻辑的。" +
            "<br><br>" +
            "(C) '镇定的' 意味着情绪和表情控制良好的；冷静的。" +
            "<br><br>" +
            "(D) '故意的' 意味着有意识和有意地完成的。"
    },
    {
        id: 9,
        question: "The promotion was a __________ milestone in his career, marking a major achievement.",
        chinese_question: "升职是他职业生涯中的一个__________里程碑，标志着一个重大成就。",
        answers: [
            { option: "A", answer: "insignificant", chinese_answer: "无关紧要的", chinese_romanization: "wúguān jǐn yào de" },
            { option: "B", answer: "irrelevant", chinese_answer: "无关的", chinese_romanization: "wúguān de" },
            { option: "C", answer: "significant", chinese_answer: "重要的", chinese_romanization: "zhòngyào de" },
            { option: "D", answer: "trivial", chinese_answer: "微不足道的", chinese_romanization: "wēibùzúdào de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'significant' means sufficiently great or important to be worthy of attention." +
            "<br><br>" +
            "(A) 'insignificant' means too small or unimportant to be worth consideration." +
            "<br><br>" +
            "(B) 'irrelevant' means not connected with something." +
            "<br><br>" +
            "(D) 'trivial' means of little value or importance.",
        chinese_explanation: "(C) '重要的'一词意味着足够大或重要，值得关注。" +
            "<br><br>" +
            "(A) '无关紧要的' 意味着太小或不重要，不值得考虑。" +
            "<br><br>" +
            "(B) '无关的' 意味着与某事无关。" +
            "<br><br>" +
            "(D) '微不足道的' 意味着价值或重要性很小。"
    },
    {
        id: 10,
        question: "The office environment was __________, with everyone working quietly and following strict routines.",
        chinese_question: "办公室环境 __________，每个人都安静地工作，遵循严格的例行程序。",
        answers: [
            { option: "A", answer: "chaotic", chinese_answer: "混乱的", chinese_romanization: "hùnluàn de" },
            { option: "B", answer: "lively", chinese_answer: "活泼的", chinese_romanization: "huópō de" },
            { option: "C", answer: "unruly", chinese_answer: "不守规矩的", chinese_romanization: "bù shǒu guīju de" },
            { option: "D", answer: "staid", chinese_answer: "古板的", chinese_romanization: "gǔbǎn de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'staid' means sedate, respectable, and unadventurous. It describes an environment or person that is serious, dignified, and not prone to excitement or change. A staid atmosphere is often calm and follows traditional practices." +
            "<br><br>" +
            "(A) 'chaotic' means in a state of complete confusion and disorder." +
            "<br><br>" +
            "(B) 'lively' means full of life and energy." +
            "<br><br>" +
            "(C) 'unruly' means disorderly and disruptive and not amenable to discipline or control.",
        chinese_explanation: "(D) '古板的' 意味着庄重、可敬且不冒险的。它描述了一个严肃、尊严且不容易兴奋或改变的环境或人。古板的氛围通常是平静的，并且遵循传统做法。" +
            "<br><br>" +
            "(A) '混乱的' 意味着处于完全混乱和无序的状态。" +
            "<br><br>" +
            "(B) '活泼的' 意味着充满生命和能量的。" +
            "<br><br>" +
            "(C) '不守规矩的' 意味着无纪律和破坏性的，不服从管教或控制。"
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
