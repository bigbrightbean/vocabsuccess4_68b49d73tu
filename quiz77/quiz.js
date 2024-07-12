// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "As a little extra __________, the waiter brought them a small dessert on the house.",
        chinese_question: "作为一点额外的 __________，服务员免费给他们送来了一个小甜点。",
        answers: [
            { option: "A", answer: "punishment", chinese_answer: "惩罚", chinese_romanization: "chéngfá" },
            { option: "B", answer: "lagniappe", chinese_answer: "赠品", chinese_romanization: "zèngpǐn" },
            { option: "C", answer: "surcharge", chinese_answer: "附加费", chinese_romanization: "fùjiā fèi" },
            { option: "D", answer: "fee", chinese_answer: "费用", chinese_romanization: "fèiyòng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'lagniappe' means something given as a bonus or extra gift." +
            "<br><br>" +
            "(A) 'punishment' means the infliction or imposition of a penalty as retribution for an offense." +
            "<br><br>" +
            "(C) 'surcharge' means an additional charge or payment." +
            "<br><br>" +
            "(D) 'fee' means a payment made to a professional person or to a professional or public body in exchange for advice or services.",
        chinese_explanation: "(B) '赠品' 一词意味着作为奖励或额外礼物给予的东西。" +
            "<br><br>" +
            "(A) '惩罚' 意味着作为对罪行的报应施加或施加的惩罚。" +
            "<br><br>" +
            "(C) '附加费' 意味着额外的费用或付款。" +
            "<br><br>" +
            "(D) '费用' 意味着为获得建议或服务而支付给专业人员或专业或公共机构的款项。"
    },
    {
        id: 2,
        question: "Employees are expected to show __________ to their company by adhering to its policies and values, always supporting the company's goals.",
        chinese_question: "员工应表现出对公司的__________，遵守公司的政策和价值观，始终支持公司的目标。",
        answers: [
            { option: "A", answer: "disloyalty", chinese_answer: "不忠", chinese_romanization: "bùzhōng" },
            { option: "B", answer: "allegiance", chinese_answer: "忠诚", chinese_romanization: "zhōngchéng" },
            { option: "C", answer: "indifference", chinese_answer: "冷漠", chinese_romanization: "lěngmò" },
            { option: "D", answer: "betrayal", chinese_answer: "背叛", chinese_romanization: "bèipàn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'allegiance' means loyalty or commitment to a superior or to a group or cause. Figuratively, it can mean being dedicated and loyal to an organization or cause." +
            "<br><br>" +
            "(A) 'disloyalty' means the quality of being disloyal; lack of loyalty." +
            "<br><br>" +
            "(C) 'indifference' means lack of interest, concern, or sympathy." +
            "<br><br>" +
            "(D) 'betrayal' means the action of betraying one's country, a group, or a person; treachery.",
        chinese_explanation: "(B) '忠诚'一词意味着对上级或团体或事业的忠诚或承诺。比喻地，它可以表示对组织或事业的奉献和忠诚。" +
            "<br><br>" +
            "(A) '不忠' 意味着不忠的品质；缺乏忠诚。" +
            "<br><br>" +
            "(C) '冷漠' 意味着缺乏兴趣、关心或同情。" +
            "<br><br>" +
            "(D) '背叛' 意味着背叛国家、团体或个人的行为；背叛。"
    },
    {
        id: 3,
        question: "The legal document was filled with __________, making it difficult for the average person to understand.",
        chinese_question: "法律文件充满了 __________，使普通人难以理解。",
        answers: [
            { option: "A", answer: "simplicity", chinese_answer: "简单", chinese_romanization: "jiǎndān" },
            { option: "B", answer: "clarity", chinese_answer: "清晰", chinese_romanization: "qīngxī" },
            { option: "C", answer: "jargon", chinese_answer: "行话", chinese_romanization: "hánghuà" },
            { option: "D", answer: "plain language", chinese_answer: "简明语言", chinese_romanization: "jiǎnmíng yǔyán" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'jargon' means special words or expressions used by a profession or group that are difficult for others to understand." +
            "<br><br>" +
            "(A) 'simplicity' means the quality or condition of being easy to understand or do." +
            "<br><br>" +
            "(B) 'clarity' means the quality of being clear, in particular." +
            "<br><br>" +
            "(D) 'plain language' means communication your audience can understand the first time they read or hear it.",
        chinese_explanation: "(C) '行话' 一词意味着某个职业或群体使用的特别词汇或表达，其他人难以理解。" +
            "<br><br>" +
            "(A) '简单' 意味着易于理解或完成的质量或条件。" +
            "<br><br>" +
            "(B) '清晰' 意味着特别清晰的质量。" +
            "<br><br>" +
            "(D) '简明语言' 意味着您的受众第一次阅读或听到时就能理解的交流方式。"
    },
    {
        id: 4,
        question: "The new policy has several __________ that could affect the entire company, including changes to employee benefits and work hours.",
        chinese_question: "新政策有几项 __________ 可能会影响整个公司，包括员工福利和工作时间的变化。",
        answers: [
            { option: "A", answer: "certainties", chinese_answer: "确定性", chinese_romanization: "quèdìng xìng" },
            { option: "B", answer: "implications", chinese_answer: "含义", chinese_romanization: "hányì" },
            { option: "C", answer: "results", chinese_answer: "结果", chinese_romanization: "jiéguǒ" },
            { option: "D", answer: "explanations", chinese_answer: "解释", chinese_romanization: "jiěshì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'implications' means the conclusion that can be drawn from something, although it is not explicitly stated." +
            "<br><br>" +
            "(A) 'certainties' means things that are certain or inevitable." +
            "<br><br>" +
            "(C) 'results' means a consequence, effect, or outcome of something." +
            "<br><br>" +
            "(D) 'explanations' means statements or accounts that make something clear.",
        chinese_explanation: "(B) '含义' 一词意味着从某事中得出的结论，尽管没有明确说明。" +
            "<br><br>" +
            "(A) '确定性' 意味着确定或不可避免的事情。" +
            "<br><br>" +
            "(C) '结果' 意味着某事的结果、影响或后果。" +
            "<br><br>" +
            "(D) '解释' 意味着使某事清楚的陈述或说明。"
    },
    {
        id: 5,
        question: "The government declared martial law to combat the __________ forces attempting to overthrow the regime.",
        chinese_question: "政府宣布戒严以对抗试图推翻政权的 __________ 势力。",
        answers: [
            { option: "A", answer: "loyal", chinese_answer: "忠诚的", chinese_romanization: "zhōngchéng de" },
            { option: "B", answer: "insurgent", chinese_answer: "叛乱的", chinese_romanization: "pànluàn de" },
            { option: "C", answer: "submissive", chinese_answer: "顺从的", chinese_romanization: "shùncóng de" },
            { option: "D", answer: "compliant", chinese_answer: "服从的", chinese_romanization: "fúcóng de"}
        ],
        correctAnswer: "B",
        explanation: "(B) 'insurgent' means a rebel or revolutionary." +
            "<br><br>" +
            "(A) 'loyal' means giving or showing firm and constant support or allegiance to a person or institution." +
            "<br><br>" +
            "(C) 'submissive' means ready to conform to the authority or will of others; meekly obedient or passive." +
            "<br><br>" +
            "(D) 'compliant' means inclined to agree with others or obey rules, especially to an excessive degree; acquiescent.",
        chinese_explanation: "(B) '叛乱的' 一词意味着一个反叛者或革命者。" +
            "<br><br>" +
            "(A) '忠诚的' 意味着给予或显示对某人或机构坚定和持续的支持或忠诚。" +
            "<br><br>" +
            "(C) '顺从的' 意味着准备服从他人的权威或意志；温顺地服从或被动的。" +
            "<br><br>" +
            "(D) '服从的' 意味着倾向于与他人意见一致或遵守规则，尤其是过度地；顺从的。"
    },
    {
        id: 6,
        question: "The successful entrepreneur was proud to be an __________ of the prestigious business school, often attributing his achievements to the education he received there.",
        chinese_question: "这位成功的企业家为自己是这所著名商学院的 __________ 感到自豪，常常将自己的成就归功于在那里接受的教育。",
        answers: [
            { option: "A", answer: "freshman", chinese_answer: "新生", chinese_romanization: "xīnshēng" },
            { option: "B", answer: "alumnus", chinese_answer: "男校友", chinese_romanization: "nán xiàoyǒu" },
            { option: "C", answer: "teacher", chinese_answer: "老师", chinese_romanization: "lǎoshī" },
            { option: "D", answer: "applicant", chinese_answer: "申请人", chinese_romanization: "shēnqǐng rén" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'alumnus' means a male graduate or former student of a particular school, college, or university." +
            "<br><br>" +
            "(A) 'freshman' means a first-year student at a university, college, or high school." +
            "<br><br>" +
            "(C) 'teacher' means a person who teaches, especially in a school." +
            "<br><br>" +
            "(D) 'applicant' means a person who makes a formal application for something, typically a job.",
        chinese_explanation: "(B) '男校友' 一词意味着特定学校、学院或大学的男性毕业生或前学生。" +
            "<br><br>" +
            "(A) '新生' 意味着大学、学院或高中的一年级学生。" +
            "<br><br>" +
            "(C) '老师' 意味着在学校教书的人。" +
            "<br><br>" +
            "(D) '申请人' 意味着正式申请某事的人，通常是工作。"
    },
    {
        id: 7,
        question: "The two countries reached an __________ to reduce tariffs and promote free trade, benefiting both economies.",
        chinese_question: "两国达成了一项 __________，以减少关税并促进自由贸易，从而使两国经济受益。",
        answers: [
            { option: "A", answer: "discord", chinese_answer: "不和", chinese_romanization: "bùhé" },
            { option: "B", answer: "disagreement", chinese_answer: "分歧", chinese_romanization: "fēnqí" },
            { option: "C", answer: "accord", chinese_answer: "协议", chinese_romanization: "xiéyì" },
            { option: "D", answer: "conflict", chinese_answer: "冲突", chinese_romanization: "chōngtú" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'accord' means an official agreement or treaty." +
            "<br><br>" +
            "(A) 'discord' means disagreement between people." +
            "<br><br>" +
            "(B) 'disagreement' means lack of consensus or approval." +
            "<br><br>" +
            "(D) 'conflict' means a serious disagreement or argument, typically a protracted one.",
        chinese_explanation: "(C) '协议' 一词意味着正式协议或条约。" +
            "<br><br>" +
            "(A) '不和' 意味着人们之间的分歧。" +
            "<br><br>" +
            "(B) '分歧' 意味着缺乏共识或批准。" +
            "<br><br>" +
            "(D) '冲突' 意味着严重的分歧或争论，通常是长期的。"
    },
    {
        id: 8,
        question: "His belief in __________ was based on a lack of evidence for any deities and a reliance on scientific explanations.",
        chinese_question: "他对 __________ 的信仰是基于对任何神明缺乏证据和对科学解释的依赖。",
        answers: [
            { option: "A", answer: "theism", chinese_answer: "有神论", chinese_romanization: "yǒushénlùn" },
            { option: "B", answer: "atheism", chinese_answer: "无神论", chinese_romanization: "wúshénlùn" },
            { option: "C", answer: "polytheism", chinese_answer: "多神论", chinese_romanization: "duōshénlùn" },
            { option: "D", answer: "deism", chinese_answer: "自然神论", chinese_romanization: "zìrán shénlùn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'atheism' means disbelief or lack of belief in the existence of God or gods." +
            "<br><br>" +
            "(A) 'theism' means belief in the existence of a god or gods, specifically of a creator who intervenes in the universe." +
            "<br><br>" +
            "(C) 'polytheism' means the belief in or worship of more than one god." +
            "<br><br>" +
            "(D) 'deism' means belief in the existence of a supreme being, specifically of a creator who does not intervene in the universe.",
        chinese_explanation: "(B) '无神论' 一词意味着不信或不相信上帝或神的存在。" +
            "<br><br>" +
            "(A) '有神论' 意味着相信神或神的存在，特别是创造者在宇宙中干预的信仰。" +
            "<br><br>" +
            "(C) '多神论' 意味着相信或崇拜不止一个神。" +
            "<br><br>" +
            "(D) '自然神论' 意味着相信一个至高无上的存在，特别是一个不干预宇宙的创造者的信仰。"
    },
    {
        id: 9,
        question: "The sudden collapse of the government led to a state of __________, with no authority to maintain order.",
        chinese_question: "政府的突然倒台导致了 __________ 的状态，没有权威来维持秩序。",
        answers: [
            { option: "A", answer: "order", chinese_answer: "秩序", chinese_romanization: "zhìxù" },
            { option: "B", answer: "stability", chinese_answer: "稳定", chinese_romanization: "wěndìng" },
            { option: "C", answer: "anarchy", chinese_answer: "无政府状态", chinese_romanization: "wú zhèngfǔ zhuàngtài" },
            { option: "D", answer: "control", chinese_answer: "控制", chinese_romanization: "kòngzhì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'anarchy' means a state of disorder due to absence or nonrecognition of authority." +
            "<br><br>" +
            "(A) 'order' means the arrangement or disposition of people or things in relation to each other according to a particular sequence, pattern, or method." +
            "<br><br>" +
            "(B) 'stability' means the state of being stable." +
            "<br><br>" +
            "(D) 'control' means the power to influence or direct people's behavior or the course of events.",
        chinese_explanation: "(C) '无政府状态' 一词意味着由于缺乏或不承认权威而导致的混乱状态。" +
            "<br><br>" +
            "(A) '秩序' 意味着按照特定顺序、模式或方法安排或排列人员或事物的状态。" +
            "<br><br>" +
            "(B) '稳定' 意味着稳定的状态。" +
            "<br><br>" +
            "(D) '控制' 意味着影响或指导人们行为或事件进程的力量。"
    },
    {
        id: 10,
        question: "The company found a __________ in the market for eco-friendly products and decided to focus on that area.",
        chinese_question: "公司在市场上发现了一个环保产品的 __________，决定专注于该领域。",
        answers: [
            { option: "A", answer: "trend", chinese_answer: "趋势", chinese_romanization: "qūshì" },
            { option: "B", answer: "niche", chinese_answer: "小众市场", chinese_romanization: "xiǎozhòng shìchǎng" },
            { option: "C", answer: "generalization", chinese_answer: "泛化", chinese_romanization: "fànhuà" },
            { option: "D", answer: "movement", chinese_answer: "运动", chinese_romanization: "yùndòng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'niche' means a comfortable or suitable position in life or employment." +
            "<br><br>" +
            "(A) 'trend' means a general direction in which something is developing or changing." +
            "<br><br>" +
            "(C) 'generalization' means a general statement or concept obtained by inference from specific cases." +
            "<br><br>" +
            "(D) 'movement' means a group of people working together to advance their shared political, social, or artistic ideas.",
        chinese_explanation: "(B) '小众市场' 一词意味着生活或就业中的一个舒适或合适的位置。" +
            "<br><br>" +
            "(A) '趋势' 意味着某事物发展或变化的一般方向。" +
            "<br><br>" +
            "(C) '泛化' 意味着从具体案例中推断出的普遍性陈述或概念。" +
            "<br><br>" +
            "(D) '运动' 意味着一群人共同努力推进他们的政治、社会或艺术理念。"
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
