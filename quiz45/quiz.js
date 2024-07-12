// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The professor was well-known for his __________ career, having made significant contributions to the field of astrophysics.",
        chinese_question: "这位教授因其 __________ 的职业生涯而闻名，他在天体物理学领域做出了重大贡献。",
        answers: [
            { option: "A", answer: "unknown", chinese_answer: "不知名", chinese_romanization: "bù zhīmíng" },
            { option: "B", answer: "obscure", chinese_answer: "模糊", chinese_romanization: "móhú" },
            { option: "C", answer: "illustrious", chinese_answer: "杰出", chinese_romanization: "jiéchū" },
            { option: "D", answer: "mediocre", chinese_answer: "平庸", chinese_romanization: "píngyōng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'illustrious' means well-known, respected, and admired for past achievements." +
            "<br><br>" +
            "(A) 'unknown' means not known or familiar." +
            "<br><br>" +
            "(B) 'obscure' means not discovered or known about; uncertain." +
            "<br><br>" +
            "(D) 'mediocre' means of only average quality; not very good.",
        chinese_explanation: "(C) '杰出' 一词意味着因过去的成就而著名、受人尊敬和钦佩。" +
            "<br><br>" +
            "(A) '不知名' 意味着未知或不熟悉。" +
            "<br><br>" +
            "(B) '模糊' 意味着不为人知的；不确定的。" +
            "<br><br>" +
            "(D) '平庸' 意味着质量一般；不太好。"
    },
    {
        id: 2,
        question: "She was __________ about investing her money, researching thoroughly before making any decisions.",
        chinese_question: "她在投资自己的钱时非常__________，在做出任何决定之前都要彻底研究。",
        answers: [
            { option: "A", answer: "reckless", chinese_answer: "鲁莽的", chinese_romanization: "lǔmǎng de" },
            { option: "B", answer: "careless", chinese_answer: "粗心的", chinese_romanization: "cūxīn de" },
            { option: "C", answer: "hasty", chinese_answer: "仓促的", chinese_romanization: "cāngcù de" },
            { option: "D", answer: "cautious", chinese_answer: "谨慎的", chinese_romanization: "jǐnshèn de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'cautious' means careful to avoid potential problems or dangers. Figuratively, it can mean being very careful and deliberate in making decisions." +
            "<br><br>" +
            "(A) 'reckless' means without thinking or caring about the consequences of an action." +
            "<br><br>" +
            "(B) 'careless' means not giving sufficient attention or thought to avoiding harm or errors." +
            "<br><br>" +
            "(C) 'hasty' means done or acting with excessive speed or urgency; hurried.",
        chinese_explanation: "(D) '谨慎的'一词意味着小心避免潜在的问题或危险。比喻地，它可以表示在做决定时非常小心和深思熟虑。" +
            "<br><br>" +
            "(A) '鲁莽的' 意味着不考虑行为的后果。" +
            "<br><br>" +
            "(B) '粗心的' 意味着没有给予足够的注意或考虑以避免伤害或错误。" +
            "<br><br>" +
            "(C) '仓促的' 意味着以过快的速度或紧迫感完成或行动；匆忙的。"
    },
    {
        id: 3,
        question: "Despite the warnings, she remained __________, determined to follow her own path.",
        chinese_question: "尽管有警告，她仍然 __________，决心走自己的路。",
        answers: [
            { option: "A", answer: "submissive", chinese_answer: "顺从", chinese_romanization: "shùncóng" },
            { option: "B", answer: "passive", chinese_answer: "被动", chinese_romanization: "bèidòng" },
            { option: "C", answer: "defiant", chinese_answer: "反抗", chinese_romanization: "fǎnkàng" },
            { option: "D", answer: "obedient", chinese_answer: "服从", chinese_romanization: "fúcóng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'defiant' means showing defiance; boldly resistant or challenging." +
            "<br><br>" +
            "(A) 'submissive' means ready to conform to the authority or will of others; meekly obedient or passive." +
            "<br><br>" +
            "(B) 'passive' means accepting or allowing what happens or what others do, without active response or resistance." +
            "<br><br>" +
            "(D) 'obedient' means complying or willing to comply with orders or requests; submissive to another's authority.",
        chinese_explanation: "(C) '反抗' 意味着表现出反抗；大胆地抵抗或挑战。" +
            "<br><br>" +
            "(A) '顺从' 意味着准备遵从他人的权威或意愿；温顺地服从或被动。" +
            "<br><br>" +
            "(B) '被动' 意味着接受或允许发生的事情或他人所做的事情，没有积极回应或抵抗。" +
            "<br><br>" +
            "(D) '服从' 意味着遵守或愿意遵守命令或要求；服从他人的权威。"
    },
    {
        id: 4,
        question: "Their __________ relationship was evident in the way they always supported and encouraged each other.",
        chinese_question: "他们的 __________ 关系显而易见，总是互相支持和鼓励。",
        answers: [
            { option: "A", answer: "cordial", chinese_answer: "热情的", chinese_romanization: "rèqíng de" },
            { option: "B", answer: "strained", chinese_answer: "紧张的", chinese_romanization: "jǐnzhāng de" },
            { option: "C", answer: "distant", chinese_answer: "疏远的", chinese_romanization: "shūyuǎn de" },
            { option: "D", answer: "superficial", chinese_answer: "肤浅的", chinese_romanization: "fūqiǎn de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'cordial' means warm and friendly." +
            "<br><br>" +
            "(B) 'strained' means not relaxed or comfortable; tense or uneasy." +
            "<br><br>" +
            "(C) 'distant' means not intimate; cool or reserved." +
            "<br><br>" +
            "(D) 'superficial' means existing or occurring at or on the surface; lacking depth.",
        chinese_explanation: "(A) '热情的' 意味着温暖和友好的。" +
            "<br><br>" +
            "(B) '紧张的' 意味着不放松或不舒服的；紧张或不安的。" +
            "<br><br>" +
            "(C) '疏远的' 意味着不亲密的；冷淡的或保留的。" +
            "<br><br>" +
            "(D) '肤浅的' 意味着存在或发生在表面上的；缺乏深度的。"
    },
    {
        id: 5,
        question: "She wrote a __________ report on climate change, addressing its causes, effects, and potential solutions.",
        chinese_question: "她写了一份关于气候变化的 __________ 报告，阐述了其原因、影响和潜在的解决方案。",
        answers: [
            { option: "A", answer: "comprehensive", chinese_answer: "全面的", chinese_romanization: "quánmiàn de" },
            { option: "B", answer: "cursory", chinese_answer: "粗略的", chinese_romanization: "cūlüè de" },
            { option: "C", answer: "limited", chinese_answer: "有限的", chinese_romanization: "yǒuxiàn de" },
            { option: "D", answer: "narrow", chinese_answer: "狭窄的", chinese_romanization: "xiázhǎi de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'comprehensive' means complete and including everything that is necessary." +
            "<br><br>" +
            "(B) 'cursory' means hasty and therefore not thorough or detailed." +
            "<br><br>" +
            "(C) 'limited' means restricted in size, amount, or extent." +
            "<br><br>" +
            "(D) 'narrow' means limited in extent, amount, or scope.",
        chinese_explanation: "(A) '全面的' 意味着完整的，包括所有必要的内容。" +
            "<br><br>" +
            "(B) '粗略的' 意味着仓促的，因此不全面或不详细的。" +
            "<br><br>" +
            "(C) '有限的' 意味着在规模、数量或程度上受到限制的。" +
            "<br><br>" +
            "(D) '狭窄的' 意味着在范围、数量或范围上有限的。"
    },
    {
        id: 6,
        question: "Her talent lay __________ for years until she finally decided to pursue a career in music.",
        chinese_question: "她的才华__________了多年，直到她最终决定追求音乐事业。",
        answers: [
            { option: "A", answer: "active", chinese_answer: "活跃的", chinese_romanization: "huóyuè de" },
            { option: "B", answer: "volatile", chinese_answer: "易变的", chinese_romanization: "yìbiàn de" },
            { option: "C", answer: "dormant", chinese_answer: "休眠的", chinese_romanization: "xiūmián de" },
            { option: "D", answer: "explosive", chinese_answer: "爆炸性的", chinese_romanization: "bàozhàxìng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'dormant' means having normal physical functions suspended or slowed down for a period of time; in or as if in a deep sleep. Figuratively, it can mean being inactive or undeveloped." +
            "<br><br>" +
            "(A) 'active' means engaging or ready to engage in physically energetic pursuits." +
            "<br><br>" +
            "(B) 'volatile' means liable to change rapidly and unpredictably, especially for the worse." +
            "<br><br>" +
            "(D) 'explosive' means able or likely to shatter violently or burst apart.",
        chinese_explanation: "(C) '休眠的'一词意味着正常的身体功能暂停或减缓一段时间；在或好像在深度睡眠中。比喻地，它可以表示不活跃或未开发的。" +
            "<br><br>" +
            "(A) '活跃的' 意味着从事或准备从事体力充沛的活动。" +
            "<br><br>" +
            "(B) '易变的' 意味着迅速和不可预测地变化，尤其是变得更糟。" +
            "<br><br>" +
            "(D) '爆炸性的' 意味着能够或可能剧烈地破裂或爆炸。"
    },
    {
        id: 7,
        question: "Despite his initial worries, the tumor was found to be __________ and posed no threat to his health.",
        chinese_question: "尽管最初担心，但肿瘤被发现是 __________ 的，对他的健康没有威胁。",
        answers: [
            { option: "A", answer: "malignant", chinese_answer: "恶性的", chinese_romanization: "èxìng de" },
            { option: "B", answer: "benign", chinese_answer: "良性的", chinese_romanization: "liángxìng de" },
            { option: "C", answer: "harmful", chinese_answer: "有害的", chinese_romanization: "yǒuhài de" },
            { option: "D", answer: "dangerous", chinese_answer: "危险的", chinese_romanization: "wēixiǎn de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'benign' means gentle and kindly; (of a disease) not harmful in effect." +
            "<br><br>" +
            "(A) 'malignant' means very virulent or infectious." +
            "<br><br>" +
            "(C) 'harmful' means causing or likely to cause harm." +
            "<br><br>" +
            "(D) 'dangerous' means able or likely to cause harm or injury.",
        chinese_explanation: "(B) '良性的' 一词意味着温和和善良的；（疾病）没有有害的影响。" +
            "<br><br>" +
            "(A) '恶性的' 意味着非常致命或传染性的。" +
            "<br><br>" +
            "(C) '有害的' 意味着造成或可能造成伤害的。" +
            "<br><br>" +
            "(D) '危险的' 意味着能够或可能造成伤害或伤害的。"
    },
    {
        id: 8,
        question: "His __________ tone in the meeting helped to ease tensions and bring the conflicting parties closer to an agreement.",
        chinese_question: "他在会议上的 __________ 语气帮助缓解了紧张气氛，使冲突双方更接近达成协议。",
        answers: [
            { option: "A", answer: "confrontational", chinese_answer: "对抗的", chinese_romanization: "duìkàng de" },
            { option: "B", answer: "aggressive", chinese_answer: "进攻的", chinese_romanization: "jìngōng de" },
            { option: "C", answer: "hostile", chinese_answer: "敌对的", chinese_romanization: "díduì de" },
            { option: "D", answer: "conciliatory", chinese_answer: "安抚的", chinese_romanization: "ānfǔ de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'conciliatory' means intended or likely to placate or pacify." +
            "<br><br>" +
            "(A) 'confrontational' means tending to deal with situations in an aggressive way; hostile or argumentative." +
            "<br><br>" +
            "(B) 'aggressive' means ready or likely to attack or confront; characterized by or resulting from aggression." +
            "<br><br>" +
            "(C) 'hostile' means unfriendly; antagonistic.",
        chinese_explanation: "(D) '安抚的' 一词意味着旨在或可能安抚或平息的。" +
            "<br><br>" +
            "(A) '对抗的' 意味着倾向于以攻击方式处理情况；敌对或好辩的。" +
            "<br><br>" +
            "(B) '进攻的' 意味着准备或可能攻击或对抗的；以攻击为特征或结果的。" +
            "<br><br>" +
            "(C) '敌对的' 意味着不友好的；敌对的。"
    },
    {
        id: 9,
        question: "The __________ waters of the mountain lake allowed them to see the fish swimming below the surface.",
        chinese_question: "山中湖泊的 __________ 水域使他们能够看到水面下游动的鱼。",
        answers: [
            { option: "A", answer: "murky", chinese_answer: "昏暗的", chinese_romanization: "hūn'àn de" },
            { option: "B", answer: "pellucid", chinese_answer: "清澈的", chinese_romanization: "qīngchè de" },
            { option: "C", answer: "opaque", chinese_answer: "不透明的", chinese_romanization: "bù tòumíng de" },
            { option: "D", answer: "cloudy", chinese_answer: "浑浊的", chinese_romanization: "húnzhuó de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'pellucid' means translucently clear." +
            "<br><br>" +
            "(A) 'murky' means dark and gloomy, especially due to thick mist." +
            "<br><br>" +
            "(C) 'opaque' means not able to be seen through; not transparent." +
            "<br><br>" +
            "(D) 'cloudy' means full of or covered with clouds.",
        chinese_explanation: "(B) '清澈的' 一词意味着半透明地清晰。" +
            "<br><br>" +
            "(A) '昏暗的' 意味着黑暗和阴沉的，尤其是由于浓雾。" +
            "<br><br>" +
            "(C) '不透明的' 意味着无法透过看到的；不透明的。" +
            "<br><br>" +
            "(D) '浑浊的' 意味着充满或覆盖着云的。"
    },
    {
        id: 10,
        question: "The professor encouraged students to avoid __________ language in their formal essays, emphasizing the importance of academic tone.",
        chinese_question: "教授鼓励学生在正式论文中避免使用 __________ 语言，强调学术语调的重要性。",
        answers: [
            { option: "A", answer: "formal", chinese_answer: "正式的", chinese_romanization: "zhèngshì de" },
            { option: "B", answer: "colloquial", chinese_answer: "口语的", chinese_romanization: "kǒuyǔ de" },
            { option: "C", answer: "scholarly", chinese_answer: "学术的", chinese_romanization: "xuéshù de" },
            { option: "D", answer: "technical", chinese_answer: "技术的", chinese_romanization: "jìshù de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'colloquial' means (of language) used in ordinary or familiar conversation; not formal or literary." +
            "<br><br>" +
            "(A) 'formal' means done in accordance with rules of convention or etiquette; suitable for or constituting an official or important occasion." +
            "<br><br>" +
            "(C) 'scholarly' means involving or relating to serious academic study." +
            "<br><br>" +
            "(D) 'technical' means relating to a particular subject, art, or craft, or its techniques.",
        chinese_explanation: "(B) '口语的' 意味着在普通或熟悉的对话中使用的语言；不正式或文学的。" +
            "<br><br>" +
            "(A) '正式的' 意味着根据惯例或礼仪规则进行的；适合或构成正式或重要场合的。" +
            "<br><br>" +
            "(C) '学术的' 意味着涉及或与严肃的学术研究有关的。" +
            "<br><br>" +
            "(D) '技术的' 意味着与特定学科、艺术或工艺或其技术有关的。"
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
