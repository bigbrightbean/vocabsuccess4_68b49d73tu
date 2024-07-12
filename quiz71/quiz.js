// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "Her ability to speak multiple languages gives her an __________ in international business.",
        chinese_question: "她能说多种语言的能力使她在国际业务中具有 __________。",
        answers: [
            { option: "A", answer: "advantage", chinese_answer: "优势", chinese_romanization: "yōushì" },
            { option: "B", answer: "burden", chinese_answer: "负担", chinese_romanization: "fùdān" },
            { option: "C", answer: "liability", chinese_answer: "责任", chinese_romanization: "zérèn" },
            { option: "D", answer: "drawback", chinese_answer: "缺点", chinese_romanization: "quēdiǎn" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'advantage' metaphorically means a favorable or superior position in a situation." + 
            "<br><br>" + 
            "(B) 'burden' means a load, especially a heavy one." + 
            "<br><br>" + 
            "(C) 'liability' means the state of being responsible for something, especially by law." + 
            "<br><br>" + 
            "(D) 'drawback' means a feature that renders something less acceptable; a disadvantage or problem.",
        chinese_explanation: "(A) '优势' 比喻在某种情况下处于有利或优越位置。" + 
            "<br><br>" + 
            "(B) '负担' 意味着负荷，尤其是沉重的负荷。" + 
            "<br><br>" + 
            "(C) '责任' 意味着对某事负责任的状态，特别是法律上的。" + 
            "<br><br>" + 
            "(D) '缺点' 意味着使某物不太可接受的特征；不利条件或问题。"
    },
    {
        id: 2,
        question: "To succeed in this competitive industry, you need __________ to overcome challenges and setbacks.",
        chinese_question: "要在这个竞争激烈的行业中取得成功，你需要__________来克服挑战和挫折。",
        answers: [
            { option: "A", answer: "weakness", chinese_answer: "虚弱", chinese_romanization: "xūruò" },
            { option: "B", answer: "stamina", chinese_answer: "耐力", chinese_romanization: "nàilì" },
            { option: "C", answer: "impatience", chinese_answer: "不耐烦", chinese_romanization: "bùnàifán" },
            { option: "D", answer: "hesitation", chinese_answer: "犹豫", chinese_romanization: "yóuyù" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'stamina' means the ability to sustain prolonged physical or mental effort. Figuratively, it can mean endurance and resilience in facing challenges." +
            "<br><br>" +
            "(A) 'weakness' means the state or condition of lacking strength." +
            "<br><br>" +
            "(C) 'impatience' means having or showing a tendency to be quickly irritated or provoked." +
            "<br><br>" +
            "(D) 'hesitation' means the action of pausing or hesitating before saying or doing something.",
        chinese_explanation: "(B) '耐力'一词意味着能够持续长时间的身体或精神努力。比喻地，它可以表示面对挑战的耐力和韧性。" +
            "<br><br>" +
            "(A) '虚弱' 意味着缺乏力量的状态或条件。" +
            "<br><br>" +
            "(C) '不耐烦' 意味着有或表现出容易被激怒或激起的倾向。" +
            "<br><br>" +
            "(D) '犹豫' 意味着在说或做某事之前的暂停或犹豫的动作。"
    },
    {
        id: 3,
        question: "A __________ of voices expressed their opinions during the heated debate.",
        chinese_question: "在激烈的辩论中，许多声音 __________ 表达了他们的意见。",
        answers: [
            { option: "A", answer: "chorus", chinese_answer: "齐声", chinese_romanization: "qíshēng" },
            { option: "B", answer: "whisper", chinese_answer: "低语", chinese_romanization: "dīyǔ" },
            { option: "C", answer: "murmur", chinese_answer: "嘟囔", chinese_romanization: "dūnang" },
            { option: "D", answer: "silence", chinese_answer: "沉默", chinese_romanization: "chénmò" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'chorus' literally means a part of a song which is repeated after each verse. Metaphorically, it means a simultaneous utterance of something by many people." +
            "<br><br>" +
            "(B) 'whisper' means speak very softly using one's breath rather than one's throat, especially for the sake of secrecy." +
            "<br><br>" +
            "(C) 'murmur' means a low continuous background noise." +
            "<br><br>" +
            "(D) 'silence' means complete absence of sound.",
        chinese_explanation: "(A) '齐声' 字面意思是歌曲中每节之后重复的部分。比喻上，它意味着许多人同时发出的声音。" +
            "<br><br>" +
            "(B) '低语' 意味着用气而不是喉咙非常轻柔地说话，特别是为了保密。" +
            "<br><br>" +
            "(C) '嘟囔' 意味着低而连续的背景噪音。" +
            "<br><br>" +
            "(D) '沉默' 意味着完全没有声音。"
    },
    {
        id: 4,
        question: "The new policies aimed to bring greater __________ to the rapidly changing industry, ensuring consistent growth and reducing uncertainties for businesses.",
        chinese_question: "新政策旨在为快速变化的行业带来更大的 __________，确保企业的持续增长并减少不确定性。",
        answers: [
            { option: "A", answer: "chaos", chinese_answer: "混乱", chinese_romanization: "hùnluàn" },
            { option: "B", answer: "instability", chinese_answer: "不稳定", chinese_romanization: "bù wěndìng" },
            { option: "C", answer: "stability", chinese_answer: "稳定", chinese_romanization: "wěndìng" },
            { option: "D", answer: "volatility", chinese_answer: "波动性", chinese_romanization: "bōdòng xìng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'stability' literally means the state of being stable, firm, or steadfast. Metaphorically, it refers to consistency and reliability in a situation." +
            "<br><br>" +
            "(A) 'chaos' means complete disorder and confusion." +
            "<br><br>" +
            "(B) 'instability' means the state of being unstable; lack of stability." +
            "<br><br>" +
            "(D) 'volatility' means liability to change rapidly and unpredictably, especially for the worse.",
        chinese_explanation: "(C) '稳定' 字面意思是稳定、坚固或坚定的状态。比喻上，它指的是情况的一致性和可靠性。" +
            "<br><br>" +
            "(A) '混乱' 意味着完全的混乱和困惑。" +
            "<br><br>" +
            "(B) '不稳定' 意味着不稳定的状态；缺乏稳定。" +
            "<br><br>" +
            "(D) '波动性' 意味着迅速和不可预测的变化，尤其是朝着更坏的方向。"
    },
    {
        id: 5,
        question: "The leader’s __________ made negotiations difficult, as he often responded with aggression and hostility.",
        chinese_question: "领导者的 __________ 使谈判变得困难，因为他经常以攻击性和敌意回应。",
        answers: [
            { option: "A", answer: "tranquility", chinese_answer: "平静", chinese_romanization: "píngjìng" },
            { option: "B", answer: "truculence", chinese_answer: "好斗", chinese_romanization: "hàodòu" },
            { option: "C", answer: "compliance", chinese_answer: "顺从", chinese_romanization: "shùncóng" },
            { option: "D", answer: "cooperation", chinese_answer: "合作", chinese_romanization: "hézuò" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'truculence' means eager or quick to argue or fight; aggressively defiant." +
            "<br><br>" +
            "(A) 'tranquility' means the quality or state of being tranquil; calm." +
            "<br><br>" +
            "(C) 'compliance' means the action or fact of complying with a wish or command." +
            "<br><br>" +
            "(D) 'cooperation' means the process of working together to the same end.",
        chinese_explanation: "(B) '好斗' 一词意味着急于或迅速争论或打架；具有攻击性。" +
            "<br><br>" +
            "(A) '平静' 意味着平静的质量或状态；冷静。" +
            "<br><br>" +
            "(C) '顺从' 意味着遵守愿望或命令的行动或事实。" +
            "<br><br>" +
            "(D) '合作' 意味着共同努力以达到相同的目标。"
    },
    {
        id: 6,
        question: "The committee is considering several __________ to the current proposal to find the best solution.",
        chinese_question: "委员会正在考虑几种 __________ 以当前的提案，寻找最佳解决方案。",
        answers: [
            { option: "A", answer: "decisions", chinese_answer: "决定", chinese_romanization: "juédìng" },
            { option: "B", answer: "reasons", chinese_answer: "原因", chinese_romanization: "yuányīn" },
            { option: "C", answer: "alternatives", chinese_answer: "替代方案", chinese_romanization: "tìdài fāng'àn" },
            { option: "D", answer: "explanations", chinese_answer: "解释", chinese_romanization: "jiěshì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'alternatives' means one of two or more available possibilities." +
            "<br><br>" +
            "(A) 'decisions' means conclusions or resolutions reached after consideration." +
            "<br><br>" +
            "(B) 'reasons' means causes, explanations, or justifications for an action or event." +
            "<br><br>" +
            "(D) 'explanations' means statements or accounts that make something clear.",
        chinese_explanation: "(C) '替代方案' 一词意味着两种或多种可用可能性之一。" +
            "<br><br>" +
            "(A) '决定' 意味着经过考虑后得出的结论或决议。" +
            "<br><br>" +
            "(B) '原因' 意味着行动或事件的原因、解释或理由。" +
            "<br><br>" +
            "(D) '解释' 意味着使某事清楚的陈述或说明。"
    },
    {
        id: 7,
        question: "The crime was committed outside the police officer's __________, so the case was handed over to the state authorities.",
        chinese_question: "犯罪发生在警官的 __________ 之外，所以案件被移交给州当局处理。",
        answers: [
            { option: "A", answer: "authority", chinese_answer: "权力", chinese_romanization: "quánlì" },
            { option: "B", answer: "jurisdiction", chinese_answer: "管辖权", chinese_romanization: "guǎnxiá quán" },
            { option: "C", answer: "control", chinese_answer: "控制", chinese_romanization: "kòngzhì" },
            { option: "D", answer: "supervision", chinese_answer: "监督", chinese_romanization: "jiāndū" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'jurisdiction' means the official power to make legal decisions and judgments." +
            "<br><br>" +
            "(A) 'authority' means the power or right to give orders, make decisions, and enforce obedience." +
            "<br><br>" +
            "(C) 'control' means the power to influence or direct people's behavior or the course of events." +
            "<br><br>" +
            "(D) 'supervision' means the action of supervising someone or something.",
        chinese_explanation: "(B) '管辖权' 一词意味着做出法律决定和判决的官方权力。" +
            "<br><br>" +
            "(A) '权力' 意味着下达命令、做出决定和执行服从的权力或权利。" +
            "<br><br>" +
            "(C) '控制' 意味着影响或指导人们行为或事件进程的力量。" +
            "<br><br>" +
            "(D) '监督' 意味着监督某人或某事的行为。"
    },
    {
        id: 8,
        question: "The judge was known for his __________, making fair and insightful decisions in complex cases.",
        chinese_question: "这位法官以其 __________ 著称，在复杂案件中做出公正而有见地的决定。",
        answers: [
            { option: "A", answer: "sagacity", chinese_answer: "睿智", chinese_romanization: "ruìzhì" },
            { option: "B", answer: "spontaneity", chinese_answer: "自发", chinese_romanization: "zìfā" },
            { option: "C", answer: "reverence", chinese_answer: "敬畏", chinese_romanization: "jìngwèi" },
            { option: "D", answer: "submissiveness", chinese_answer: "顺从", chinese_romanization: "shùncóng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'sagacity' means having or showing keen mental discernment and good judgment; wise." +
            "<br><br>" +
            "(B) 'spontaneity' means the condition of being spontaneous; spontaneous behavior or action." +
            "<br><br>" +
            "(C) 'reverence' means deep respect for someone or something." +
            "<br><br>" +
            "(D) 'submissiveness' means the quality of being ready to conform to the authority or will of others.",
        chinese_explanation: "(A) '睿智' 意味着具有或表现出敏锐的判断力和良好的判断力；明智的。" +
            "<br><br>" +
            "(B) '自发' 意味着自发的状态；自发行为或行动。" +
            "<br><br>" +
            "(C) '敬畏' 意味着对某人或某事的深深尊敬。" +
            "<br><br>" +
            "(D) '顺从' 意味着准备服从他人的权威或意愿。"
    },
    {
        id: 9,
        question: "The company offered various __________ to encourage employees to meet their sales targets, including bonuses, extra vacation days, and public recognition.",
        chinese_question: "公司提供了各种 __________ 鼓励员工达到销售目标，包括奖金、额外的假期和公开表彰。",
        answers: [
            { option: "A", answer: "penalties", chinese_answer: "处罚", chinese_romanization: "chǔfá" },
            { option: "B", answer: "disincentives", chinese_answer: "抑制因素", chinese_romanization: "yìzhì yīnsù" },
            { option: "C", answer: "incentives", chinese_answer: "激励", chinese_romanization: "jīlì" },
            { option: "D", answer: "punishments", chinese_answer: "惩罚", chinese_romanization: "chéngfá" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'incentives' means things that motivate or encourage someone to do something." +
            "<br><br>" +
            "(A) 'penalties' means punishments imposed for breaking a law, rule, or contract." +
            "<br><br>" +
            "(B) 'disincentives' means things that discourage someone from doing something." +
            "<br><br>" +
            "(D) 'punishments' means the infliction or imposition of a penalty as retribution for an offense.",
        chinese_explanation: "(C) '激励' 一词意味着激励或鼓励某人做某事的东西。" +
            "<br><br>" +
            "(A) '处罚' 意味着因违反法律、规则或合同而实施的惩罚。" +
            "<br><br>" +
            "(B) '抑制因素' 意味着阻止某人做某事的东西。" +
            "<br><br>" +
            "(D) '惩罚' 意味着作为对犯罪行为的报复而施加的处罚。"
    },
    {
        id: 10,
        question: "The activists organized a __________ of the company's products to protest against their unfair labour practices and to demand better working conditions.",
        chinese_question: "活动家组织了一次 __________ 该公司产品的活动，以抗议其不公平的劳动做法并要求改善工作条件。",
        answers: [
            { option: "A", answer: "purchase", chinese_answer: "购买", chinese_romanization: "gòumǎi" },
            { option: "B", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" },
            { option: "C", answer: "boycott", chinese_answer: "抵制", chinese_romanization: "dǐzhì" },
            { option: "D", answer: "promotion", chinese_answer: "促销", chinese_romanization: "cùxiāo" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'boycott' means to refuse to buy or use goods or services from a company to show disapproval." +
            "<br><br>" +
            "(A) 'purchase' means to acquire (something) by paying for it; buy." +
            "<br><br>" +
            "(B) 'support' means to bear all or part of the weight of; hold up." +
            "<br><br>" +
            "(D) 'promotion' means the action of raising someone to a higher position or rank or the fact of being so raised.",
        chinese_explanation: "(C) '抵制' 意味着拒绝购买或使用某公司商品或服务以表示不满。" +
            "<br><br>" +
            "(A) '购买' 意味着通过支付获得（某物）；买。" +
            "<br><br>" +
            "(B) '支持' 意味着承受所有或部分重量；支撑。" +
            "<br><br>" +
            "(D) '促销' 意味着提升某人到更高职位或等级的行为或被提升的事实。"
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
