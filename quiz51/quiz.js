// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "His commitment to __________ from alcohol was a significant factor in his improved health and overall well-being.",
        chinese_question: "他对 __________ 酒精的承诺是他健康和整体幸福改善的重要因素。",
        answers: [
            { option: "A", answer: "indulgence", chinese_answer: "放纵", chinese_romanization: "fàngzòng" },
            { option: "B", answer: "abstinence", chinese_answer: "禁欲", chinese_romanization: "jìnyù" },
            { option: "C", answer: "excess", chinese_answer: "过度", chinese_romanization: "guòdù" },
            { option: "D", answer: "consumption", chinese_answer: "消费", chinese_romanization: "xiāofèi" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'abstinence' means the practice of restraining oneself from indulging in something, typically alcohol." +
            "<br><br>" +
            "(A) 'indulgence' means the action or fact of indulging." +
            "<br><br>" +
            "(C) 'excess' means an amount of something that is more than necessary, permitted, or desirable." +
            "<br><br>" +
            "(D) 'consumption' means the using up of a resource.",
        chinese_explanation: "(B) '禁欲' 一词意味着约束自己不沉溺于某事的行为，通常指酒精。" +
            "<br><br>" +
            "(A) '放纵' 意味着放纵的行为或事实。" +
            "<br><br>" +
            "(C) '过度' 意味着超过必要、允许或理想的量。" +
            "<br><br>" +
            "(D) '消费' 意味着资源的使用。"
    },
    {
        id: 2,
        question: "The sudden storm was an __________ in the region's typically mild climate, causing widespread damage.",
        chinese_question: "突如其来的暴风雨是该地区通常温和气候中的一个 __________，造成了广泛的破坏。",
        answers: [
            { option: "A", answer: "norm", chinese_answer: "常态", chinese_romanization: "chángtài" },
            { option: "B", answer: "standard", chinese_answer: "标准", chinese_romanization: "biāozhǔn" },
            { option: "C", answer: "aberration", chinese_answer: "异常", chinese_romanization: "yìcháng" },
            { option: "D", answer: "regularity", chinese_answer: "规律", chinese_romanization: "guīlǜ" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'aberration' means a departure from what is normal, usual, or expected, typically an unwelcome one." +
            "<br><br>" +
            "(A) 'norm' means something that is usual, typical, or standard." +
            "<br><br>" +
            "(B) 'standard' means a level of quality or attainment." +
            "<br><br>" +
            "(D) 'regularity' means the state or quality of being regular.",
        chinese_explanation: "(C) '异常' 一词意味着偏离正常、通常或预期的事物，通常是不受欢迎的。" +
            "<br><br>" +
            "(A) '常态' 意味着通常、典型或标准的事物。" +
            "<br><br>" +
            "(B) '标准' 意味着质量或成就的水平。" +
            "<br><br>" +
            "(D) '规律' 意味着规律的状态或质量。"
    },
    {
        id: 3,
        question: "His natural __________ made him the life of the party, always making others laugh with his jokes and stories.",
        chinese_question: "他天生的 __________ 使他成为聚会的灵魂，总是用他的笑话和故事逗笑他人。",
        answers: [
            { option: "A", answer: "seriousness", chinese_answer: "严肃", chinese_romanization: "yánsù" },
            { option: "B", answer: "sadness", chinese_answer: "悲伤", chinese_romanization: "bēishāng" },
            { option: "C", answer: "risibility", chinese_answer: "笑点低", chinese_romanization: "xiàodiǎn dī" },
            { option: "D", answer: "solemnity", chinese_answer: "庄严", chinese_romanization: "zhuāngyán" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'risibility' means the tendency or disposition to laugh often and easily." +
            "<br><br>" +
            "(A) 'seriousness' means the state or quality of being serious." +
            "<br><br>" +
            "(B) 'sadness' means the condition or quality of being sad." +
            "<br><br>" +
            "(D) 'solemnity' means the state or quality of being serious and dignified.",
        chinese_explanation: "(C) '笑点低' 一词意味着经常和容易笑的倾向或性格。" +
            "<br><br>" +
            "(A) '严肃' 意味着严肃的状态或质量。" +
            "<br><br>" +
            "(B) '悲伤' 意味着悲伤的状况或质量。" +
            "<br><br>" +
            "(D) '庄严' 意味着严肃和庄重的状态或质量。"
    },
    {
        id: 4,
        question: "The __________ of his speech made it powerful and memorable, leaving a strong impression on the audience.",
        chinese_question: "他演讲的 __________ 使其有力且难忘，给听众留下了深刻的印象。",
        answers: [
            { option: "A", answer: "length", chinese_answer: "长度", chinese_romanization: "chángdù" },
            { option: "B", answer: "verbosity", chinese_answer: "冗长", chinese_romanization: "rǒngcháng" },
            { option: "C", answer: "brevity", chinese_answer: "简洁", chinese_romanization: "jiǎnjié" },
            { option: "D", answer: "redundancy", chinese_answer: "冗余", chinese_romanization: "rǒngyú" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'brevity' means concise and exact use of words in writing or speech." +
            "<br><br>" +
            "(A) 'length' means the measurement or extent of something from end to end." +
            "<br><br>" +
            "(B) 'verbosity' means the quality of using more words than needed; wordiness." +
            "<br><br>" +
            "(D) 'redundancy' means the state of being not or no longer needed or useful.",
        chinese_explanation: "(C) '简洁' 一词意味着在写作或讲话中使用简洁和准确的词语。" +
            "<br><br>" +
            "(A) '长度' 意味着从一端到另一端的某物的测量或范围。" +
            "<br><br>" +
            "(B) '冗长' 意味着使用比需要更多的词语的质量；多言。" +
            "<br><br>" +
            "(D) '冗余' 意味着不需要或不再需要或有用的状态。"
    },
    {
        id: 5,
        question: "The case was complicated by questions of __________, as it was unclear which court had the authority to try the defendant.",
        chinese_question: "案件因 __________ 问题变得复杂，因为不清楚哪个法院有权审判被告。",
        answers: [
            { option: "A", answer: "ethics", chinese_answer: "伦理", chinese_romanization: "lúnlǐ" },
            { option: "B", answer: "jurisdiction", chinese_answer: "管辖权", chinese_romanization: "guǎnxiá quán" },
            { option: "C", answer: "morality", chinese_answer: "道德", chinese_romanization: "dàodé" },
            { option: "D", answer: "legislation", chinese_answer: "立法", chinese_romanization: "lìfǎ" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'jurisdiction' means the official power to make legal decisions and judgments." +
            "<br><br>" +
            "(A) 'ethics' means moral principles that govern a person's behavior or the conducting of an activity." +
            "<br><br>" +
            "(C) 'morality' means principles concerning the distinction between right and wrong or good and bad behavior." +
            "<br><br>" +
            "(D) 'legislation' means laws, considered collectively.",
        chinese_explanation: "(B) '管辖权' 一词意味着做出法律决定和判断的官方权力。" +
            "<br><br>" +
            "(A) '伦理' 意味着支配一个人行为或进行某项活动的道德原则。" +
            "<br><br>" +
            "(C) '道德' 意味着关于区分正确和错误或善恶行为的原则。" +
            "<br><br>" +
            "(D) '立法' 意味着集体考虑的法律。"
    },
    {
        id: 6,
        question: "The __________ recommended a series of tests to ensure the health of the mother and baby during the pregnancy.",
        chinese_question: "__________ 建议进行一系列检查，以确保孕期母婴的健康。",
        answers: [
            { option: "A", answer: "cardiologist", chinese_answer: "心脏病专家", chinese_romanization: "xīnzàng bìng zhuānjiā" },
            { option: "B", answer: "obstetrician", chinese_answer: "妇产科医生", chinese_romanization: "fùchǎnkē yīshēng" },
            { option: "C", answer: "dermatologist", chinese_answer: "皮肤科医生", chinese_romanization: "pífū kē yīshēng" },
            { option: "D", answer: "neurologist", chinese_answer: "神经科医生", chinese_romanization: "shénjīng kē yīshēng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'obstetrician' means a doctor who specializes in pregnancy, childbirth, and a woman's reproductive system." +
            "<br><br>" +
            "(A) 'cardiologist' means a doctor who specializes in the study or treatment of heart diseases and heart abnormalities." +
            "<br><br>" +
            "(C) 'dermatologist' means a doctor who specializes in the treatment of skin disorders." +
            "<br><br>" +
            "(D) 'neurologist' means a doctor who specializes in treating diseases of the nervous system.",
        chinese_explanation: "(B) '妇产科医生' 一词意味着专门研究怀孕、分娩和女性生殖系统的医生。" +
            "<br><br>" +
            "(A) '心脏病专家' 意味着专门研究或治疗心脏病和心脏异常的医生。" +
            "<br><br>" +
            "(C) '皮肤科医生' 意味着专门治疗皮肤疾病的医生。" +
            "<br><br>" +
            "(D) '神经科医生' 意味着专门治疗神经系统疾病的医生。"
    },
    {
        id: 7,
        question: "Her careful __________ of the speech ensured that she delivered it flawlessly during the conference.",
        chinese_question: "她仔细的 __________ 确保她在会议上完美地演讲。",
        answers: [
            { option: "A", answer: "improvisation", chinese_answer: "即兴", chinese_romanization: "jíxìng" },
            { option: "B", answer: "rehearsal", chinese_answer: "排练", chinese_romanization: "páiliàn" },
            { option: "C", answer: "spontaneity", chinese_answer: "自发", chinese_romanization: "zìfā" },
            { option: "D", answer: "extemporization", chinese_answer: "即兴表演", chinese_romanization: "jíxìng biǎoyǎn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'rehearsal' figuratively means preparation and practice for an event." +
            "<br><br>" +
            "(A) 'improvisation' means the action of improvising." +
            "<br><br>" +
            "(C) 'spontaneity' means the condition of being spontaneous; spontaneous behavior or action." +
            "<br><br>" +
            "(D) 'extemporization' means the action of improvising, especially speaking or performing without preparation.",
        chinese_explanation: "(B) '排练' 在比喻意义上意味着为事件做准备和练习。" +
            "<br><br>" +
            "(A) '即兴' 意味着即兴创作的行为。" +
            "<br><br>" +
            "(C) '自发' 意味着自发的状态；自发行为或行动。" +
            "<br><br>" +
            "(D) '即兴表演' 意味着即兴创作的行动，尤其是没有准备的演讲或表演。"
    },
    {
        id: 8,
        question: "In his speech, the leader emphasized the importance of the __________ movement in advocating for the rights and welfare of the common people.",
        chinese_question: "在他的演讲中，这位领导人强调了 __________ 运动在倡导普通人权利和福利方面的重要性。",
        answers: [
                { option: "A", answer: "proletarian", chinese_answer: "无产者", chinese_romanization: "wúchǎnzhě" },
                { option: "B", answer: "oligarchic", chinese_answer: "寡头的", chinese_romanization: "guǎtóu de" },
                { option: "C", answer: "monarchist", chinese_answer: "君主主义者", chinese_romanization: "jūnzhǔ zhǔyìzhě" },
                { option: "D", answer: "plutocratic", chinese_answer: "财阀的", chinese_romanization: "cáifá de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'proletarian' pertains to the working-class people, especially in a socio-political context." +
            "<br><br>" +
            "(B) 'oligarchic' refers to a form of government in which power rests with a small number of people." +
            "<br><br>" +
            "(C) 'monarchist' denotes someone who supports a monarchy or a royal family." +
            "<br><br>" +
            "(D) 'plutocratic' describes a society or system ruled by the wealthy.",
        chinese_explanation: "(A) '无产者' 指的是工人阶级的人，尤其是在社会政治背景下。" +
            "<br><br>" +
            "(B) '寡头的' 指的是一种权力掌握在少数人手中的政府形式。" +
            "<br><br>" +
            "(C) '君主主义者' 指的是支持君主制或皇室的人。" +
            "<br><br>" +
            "(D) '财阀的' 描述的是由富人统治的社会或制度。"
    },
    {
        id: 9,
        question: "Her compassion led her to volunteer at shelters, where she provided meals and clothing to every __________ she encountered.",
        chinese_question: "她的同情心使她在收容所做志愿者，为她遇到的每一个 __________ 提供食物和衣物。",
        answers: [
                { option: "A", answer: "vagrant", chinese_answer: "流浪者", chinese_romanization: "liúlàngzhě" },
                { option: "B", answer: "merchant", chinese_answer: "商人", chinese_romanization: "shāngrén" },
                { option: "C", answer: "teacher", chinese_answer: "老师", chinese_romanization: "lǎoshī" },
                { option: "D", answer: "artist", chinese_answer: "艺术家", chinese_romanization: "yìshùjiā" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'vagrant' describes a person who has no fixed residence and wanders from place to place." +
            "<br><br>" +
            "(B) 'merchant' means a person or company involved in wholesale trade, especially one dealing with foreign countries or supplying merchandise to a particular trade." +
            "<br><br>" +
            "(C) 'teacher' refers to a person who teaches, especially in a school." +
            "<br><br>" +
            "(D) 'artist' means a person who creates art, especially as a profession.",
        chinese_explanation: "(A) '流浪者' 描述的是没有固定住所、四处流浪的人。" +
            "<br><br>" +
            "(B) '商人' 指的是从事批发贸易的人或公司，尤其是与外国做生意或向特定行业供应商品。" +
            "<br><br>" +
            "(C) '老师' 指的是教书的人，尤其是在学校教书的人。" +
            "<br><br>" +
            "(D) '艺术家' 指的是创作艺术的人，尤其是作为职业的人。"
    },
    {
        id: 10,
        question: "The rumors caused a __________ of panic among the residents, leading to rushed decisions.",
        chinese_question: "谣言引发了居民中的 __________，导致了仓促的决定。",
        answers: [
            { option: "A", answer: "tranquility", chinese_answer: "平静", chinese_romanization: "píngjìng" },
            { option: "B", answer: "rampage", chinese_answer: "恐慌", chinese_romanization: "kǒnghuāng" },
            { option: "C", answer: "serenity", chinese_answer: "宁静", chinese_romanization: "níngjìng" },
            { option: "D", answer: "peace", chinese_answer: "和平", chinese_romanization: "hépíng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'rampage' figuratively means a period of violent or uncontrollable behavior." +
            "<br><br>" +
            "(A) 'tranquility' means the quality or state of being tranquil; calm." +
           "<br><br>" +
            "(C) 'serenity' means the state of being calm, peaceful, and untroubled." +
            "<br><br>" +
            "(D) 'peace' means freedom from disturbance; tranquility.",
        chinese_explanation: "(B) '恐慌' 在比喻意义上意味着一段暴力或无法控制的行为。" +
            "<br><br>" +
            "(A) '平静' 意味着平静的质量或状态；平静。" +
            "<br><br>" +
            "(C) '宁静' 意味着平静、和平和不受干扰的状态。" +
            "<br><br>" +
            "(D) '和平' 意味着没有干扰；平静。"
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
