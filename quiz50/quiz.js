// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The study focused on the __________ aspects of patient care, such as empathy and communication, rather than just the medical procedures.",
        chinese_question: "这项研究关注病人护理的 __________ 方面，如同情心和沟通，而不仅仅是医疗程序。",
        answers: [
            { option: "A", answer: "quantitative", chinese_answer: "定量的", chinese_romanization: "dìngliàng de" },
            { option: "B", answer: "qualitative", chinese_answer: "定性的", chinese_romanization: "dìngxìng de" },
            { option: "C", answer: "numerical", chinese_answer: "数字的", chinese_romanization: "shùzì de" },
            { option: "D", answer: "statistical", chinese_answer: "统计的", chinese_romanization: "tǒngjì de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'qualitative' means relating to, measuring, or measured by the quality of something rather than its quantity." +
            "<br><br>" +
            "(A) 'quantitative' means relating to, measuring, or measured by the quantity of something rather than its quality." +
            "<br><br>" +
            "(C) 'numerical' means relating to or expressed as a number or numbers." +
            "<br><br>" +
            "(D) 'statistical' means relating to the use of statistics.",
        chinese_explanation: "(B) '定性的' 一词意味着与某物的质量而不是数量相关的。" +
            "<br><br>" +
            "(A) '定量的' 意味着与某物的数量而不是质量相关的。" +
            "<br><br>" +
            "(C) '数字的' 意味着与数字相关的或用数字表示的。" +
            "<br><br>" +
            "(D) '统计的' 意味着与统计数据的使用相关的。"
    },
    {
        id: 2,
        question: "The __________ soldier fought for whoever paid the highest price, with no loyalty to any particular cause.",
        chinese_question: "__________ 士兵为出价最高的人而战，对任何特定事业都没有忠诚。",
        answers: [
            { option: "A", answer: "patriotic", chinese_answer: "爱国的", chinese_romanization: "àiguó de" },
            { option: "B", answer: "mercenary", chinese_answer: "雇佣兵", chinese_romanization: "gùyōngbīng" },
            { option: "C", answer: "selfless", chinese_answer: "无私的", chinese_romanization: "wúsī de" },
            { option: "D", answer: "devoted", chinese_answer: "忠诚的", chinese_romanization: "zhōngchéng de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'mercenary' means a professional soldier hired to serve in a foreign army." +
            "<br><br>" +
            "(A) 'patriotic' means having or expressing devotion to and vigorous support for one's country." +
            "<br><br>" +
            "(C) 'selfless' means concerned more with the needs and wishes of others than with one's own." +
            "<br><br>" +
            "(D) 'devoted' means very loving or loyal.",
        chinese_explanation: "(B) '雇佣兵' 一词意味着为外国军队服务的职业士兵。" +
            "<br><br>" +
            "(A) '爱国的' 意味着对国家有或表达忠诚和大力支持。" +
            "<br><br>" +
            "(C) '无私的' 意味着更多地关心他人的需要和愿望，而不是自己的。" +
            "<br><br>" +
            "(D) '忠诚的' 意味着非常爱或忠诚。"
    },
    {
        id: 3,
        question: "Living in a busy city, she had become __________ to the constant noise and hustle, finding it hard to sleep in silence.",
        chinese_question: "住在繁忙的城市里，她已经 __________ 了持续的噪音和喧闹，发现很难在安静中入睡。",
        answers: [
            { option: "A", answer: "annoyed", chinese_answer: "恼怒的", chinese_romanization: "nǎonù de" },
            { option: "B", answer: "accustomed", chinese_answer: "习惯的", chinese_romanization: "xíguàn de" },
            { option: "C", answer: "surprised", chinese_answer: "惊讶的", chinese_romanization: "jīngyà de" },
            { option: "D", answer: "disturbed", chinese_answer: "不安的", chinese_romanization: "bù'ān de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'accustomed' means being used to something." +
            "<br><br>" +
            "(A) 'annoyed' means slightly angry; irritated." +
            "<br><br>" +
            "(C) 'surprised' means feeling or showing surprise." +
            "<br><br>" +
            "(D) 'disturbed' means having had its normal pattern or function disrupted.",
        chinese_explanation: "(B) '习惯的' 一词意味着习惯于某事。" +
            "<br><br>" +
            "(A) '恼怒的' 意味着稍微生气；恼怒的。" +
            "<br><br>" +
            "(C) '惊讶的' 意味着感到或表现出惊讶。" +
            "<br><br>" +
            "(D) '不安的' 意味着正常模式或功能被打乱的。"
    },
    {
        id: 4,
        question: "She had __________ opportunities to showcase her talents, but she always hesitated.",
        chinese_question: "她有 __________ 的机会展示她的才能，但她总是犹豫不决。",
        answers: [
            { option: "A", answer: "few", chinese_answer: "很少的", chinese_romanization: "hěn shǎo de" },
            { option: "B", answer: "ample", chinese_answer: "充足的", chinese_romanization: "chōngzú de" },
            { option: "C", answer: "minimal", chinese_answer: "最小的", chinese_romanization: "zuìxiǎo de" },
            { option: "D", answer: "rare", chinese_answer: "稀少的", chinese_romanization: "xīshǎo de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'ample' figuratively means having more than enough opportunities or resources." +
            "<br><br>" +
            "(A) 'few' means a small number of." +
            "<br><br>" +
            "(C) 'minimal' means of a minimum amount, quantity, or degree; negligible." +
            "<br><br>" +
            "(D) 'rare' means not occurring very often.",
        chinese_explanation: "(B) '充足的' 在比喻意义上意味着有很多机会或资源。" +
            "<br><br>" +
            "(A) '很少的' 意味着数量很小的。" +
            "<br><br>" +
            "(C) '最小的' 意味着最小的数量、数量或程度；微不足道的。" +
            "<br><br>" +
            "(D) '稀少的' 意味着不常发生的。"
    },
    {
        id: 5,
        question: "The __________ waste was carefully stored in secure containers to prevent any environmental contamination.",
        chinese_question: "__________ 废物被小心地存放在安全容器中，以防止任何环境污染。",
        answers: [
            { option: "A", answer: "non-toxic", chinese_answer: "无毒的", chinese_romanization: "wúdú de" },
            { option: "B", answer: "inert", chinese_answer: "惰性的", chinese_romanization: "duòxìng de" },
            { option: "C", answer: "radioactive", chinese_answer: "放射性的", chinese_romanization: "fàngshè xìng de" },
            { option: "D", answer: "harmless", chinese_answer: "无害的", chinese_romanization: "wúhài de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'radioactive' means emitting or relating to the emission of ionizing radiation or particles." +
            "<br><br>" +
            "(A) 'non-toxic' means not harmful or fatal to living things." +
            "<br><br>" +
            "(B) 'inert' means lacking the ability or strength to move." +
            "<br><br>" +
            "(D) 'harmless' means not able or likely to cause harm.",
        chinese_explanation: "(C) '放射性的' 一词意味着发射或与发射电离辐射或粒子有关的。" +
            "<br><br>" +
            "(A) '无毒的' 意味着对生物无害或不致命的。" +
            "<br><br>" +
            "(B) '惰性的' 意味着缺乏运动能力或力量的。" +
            "<br><br>" +
            "(D) '无害的' 意味着不能或不可能造成伤害的。"
    },
    {
        id: 6,
        question: "The biopsy revealed a __________ tumor, which required immediate medical intervention.",
        chinese_question: "活检显示是 __________ 肿瘤，需要立即医疗干预。",
        answers: [
            { option: "A", answer: "benign", chinese_answer: "良性的", chinese_romanization: "liángxìng de" },
            { option: "B", answer: "harmless", chinese_answer: "无害的", chinese_romanization: "wúhài de" },
            { option: "C", answer: "malignant", chinese_answer: "恶性的", chinese_romanization: "èxìng de" },
            { option: "D", answer: "minor", chinese_answer: "次要的", chinese_romanization: "cìyào de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'malignant' means very virulent or infectious; (of a tumor) tending to invade normal tissue or to recur after removal; cancerous." +
            "<br><br>" +
            "(A) 'benign' means gentle and kindly; (of a disease) not harmful in effect." +
            "<br><br>" +
            "(B) 'harmless' means not able or likely to cause harm." +
            "<br><br>" +
            "(D) 'minor' means lesser in importance, seriousness, or significance.",
        chinese_explanation: "(C) '恶性的' 一词意味着非常毒性或传染性；（肿瘤）倾向于侵袭正常组织或切除后复发的；癌性的。" +
            "<br><br>" +
            "(A) '良性的' 意味着温和和善良；（疾病）效果不大的。" +
            "<br><br>" +
            "(B) '无害的' 意味着不能或不太可能造成伤害的。" +
            "<br><br>" +
            "(D) '次要的' 意味着重要性、严重性或意义较小的。"
    },
    {
        id: 7,
        question: "The new marketing strategy proved to be very __________, increasing sales by 30%.",
        chinese_question: "新的营销策略被证明非常__________，销售额增加了30%。",
        answers: [
            { option: "A", answer: "ineffective", chinese_answer: "无效的", chinese_romanization: "wúxiào de" },
            { option: "B", answer: "unnecessary", chinese_answer: "不必要的", chinese_romanization: "bù bìyào de" },
            { option: "C", answer: "effective", chinese_answer: "有效的", chinese_romanization: "yǒuxiào de" },
            { option: "D", answer: "redundant", chinese_answer: "多余的", chinese_romanization: "duōyú de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'effective' means successful in producing a desired or intended result." +
            "<br><br>" +
            "(A) 'ineffective' means not producing any significant or desired effect." +
            "<br><br>" +
            "(B) 'unnecessary' means not needed." +
            "<br><br>" +
            "(D) 'redundant' means no longer needed or useful.",
        chinese_explanation: "(C) '有效的'一词意味着成功地产生预期或预期的结果。" +
            "<br><br>" +
            "(A) '无效的' 意味着未能产生任何显著或预期效果。" +
            "<br><br>" +
            "(B) '不必要的' 意味着不需要的。" +
            "<br><br>" +
            "(D) '多余的' 意味着不再需要或有用的。"
    },
    {
        id: 8,
        question: "The university was known for its __________ arts program, encouraging a broad education in various fields.",
        chinese_question: "这所大学以其 __________ 艺术课程而闻名，鼓励在各个领域的广泛教育。",
        answers: [
            { option: "A", answer: "liberal", chinese_answer: "自由的", chinese_romanization: "zìyóu de" },
            { option: "B", answer: "strict", chinese_answer: "严格的", chinese_romanization: "yángé de" },
            { option: "C", answer: "conservative", chinese_answer: "保守的", chinese_romanization: "bǎoshǒu de" },
            { option: "D", answer: "narrow", chinese_answer: "狭隘的", chinese_romanization: "xiá'ài de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'liberal' means open to new behavior or opinions and willing to discard traditional values." + 
            "<br><br>" + 
            "(B) 'strict' means demanding that rules concerning behavior are obeyed and observed." + 
            "<br><br>" + 
            "(C) 'conservative' means holding to traditional attitudes and values and cautious about change or innovation." + 
            "<br><br>" + 
            "(D) 'narrow' means limited in extent, amount, or scope; restricted.",
        chinese_explanation: "(A) '自由的' 意味着对新的行为或意见持开放态度，并愿意抛弃传统价值观。" + 
            "<br><br>" + 
            "(B) '严格的' 意味着要求遵守和遵守行为规则。" + 
            "<br><br>" + 
            "(C) '保守的' 意味着持有传统态度和价值观，并对变革或创新持谨慎态度。" + 
            "<br><br>" + 
            "(D) '狭隘的' 意味着范围、数量或程度有限；受限制的。"
    },
    {
        id: 9,
        question: "It was __________ for him to take a walk after dinner every evening.",
        chinese_question: "每天晚上饭后散步对他来说是__________的。",
        answers: [
            { option: "A", answer: "unusual", chinese_answer: "不寻常的", chinese_romanization: "bù xúncháng de" },
            { option: "B", answer: "rare", chinese_answer: "罕见的", chinese_romanization: "hǎnjiàn de" },
            { option: "C", answer: "customary", chinese_answer: "习惯的", chinese_romanization: "xíguàn de" },
            { option: "D", answer: "abnormal", chinese_answer: "异常的", chinese_romanization: "yìcháng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'customary' means according to the customs or usual practices associated with a particular society, place, or set of circumstances. Figuratively, it can mean something that is a regular habit or routine." +
            "<br><br>" +
            "(A) 'unusual' means not habitually or commonly occurring or done." +
            "<br><br>" +
            "(B) 'rare' means not occurring very often." +
            "<br><br>" +
            "(D) 'abnormal' means deviating from what is normal or usual, typically in a way that is undesirable or worrying.",
        chinese_explanation: "(C) '习惯的' 意味着根据与特定社会、地方或环境相关的习俗或通常做法。比喻地，它可以表示某种常规习惯或例行公事。" +
            "<br><br>" +
            "(A) '不寻常的' 意味着不习惯性或常见地发生或做的。" +
            "<br><br>" +
            "(B) '罕见的' 意味着不经常发生。" +
            "<br><br>" +
            "(D) '异常的' 意味着偏离正常或通常情况的，通常是以一种不受欢迎或令人担忧的方式。"
    },
    {
        id: 10,
        question: "The social media influencer's __________ approach to promoting products, by honestly reviewing and using them, earned her a loyal following.",
        chinese_question: "这位社交媒体影响者 __________ 的产品推广方式，通过诚实地评论和使用产品，赢得了忠实的追随者。",
        answers: [
            { option: "A", answer: "deceptive", chinese_answer: "欺骗性的", chinese_romanization: "qīpiàn xìng de" },
            { option: "B", answer: "ineffective", chinese_answer: "无效的", chinese_romanization: "wúxiào de" },
            { option: "C", answer: "sporadic", chinese_answer: "零星的", chinese_romanization: "língxīng de" },
            { option: "D", answer: "paradigmatic", chinese_answer: "典范的", chinese_romanization: "diǎnfàn de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'paradigmatic' means serving as a model or example." +
            "<br><br>" +
            "(A) 'deceptive' means giving an appearance or impression different from the true one." +
            "<br><br>" +
            "(B) 'ineffective' means not producing the desired effect." +
            "<br><br>" +
            "(C) 'sporadic' means occurring at irregular intervals.",
        chinese_explanation: "(D) '典范的' 意思是作为模型或例子。" +
            "<br><br>" +
            "(A) '欺骗性的' 意思是给人一种与真实情况不同的外观或印象。" +
            "<br><br>" +
            "(B) '无效的' 意思是没有产生预期效果的。" +
            "<br><br>" +
            "(C) '零星的' 意思是不定期发生的。"
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
