// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The __________ challenged traditional beliefs, advocating for new ways of thinking and acting.",
        chinese_question: "这位 __________ 挑战传统信仰，提倡新的思维和行动方式。",
        answers: [
            { option: "A", answer: "conformist", chinese_answer: "墨守成规者", chinese_romanization: "mòshǒu chéngguī zhě" },
            { option: "B", answer: "iconoclast", chinese_answer: "反传统者", chinese_romanization: "fǎn chuántǒng zhě" },
            { option: "C", answer: "traditionalist", chinese_answer: "传统主义者", chinese_romanization: "chuántǒng zhǔyì zhě" },
            { option: "D", answer: "conservative", chinese_answer: "保守者", chinese_romanization: "bǎoshǒu zhě" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'iconoclast' means a person who attacks or criticizes cherished beliefs or institutions." +
            "<br><br>" +
            "(A) 'conformist' means a person who conforms to accepted behavior or established practices." +
            "<br><br>" +
            "(C) 'traditionalist' means a person who has deep respect for long-held cultural and religious values." +
            "<br><br>" +
            "(D) 'conservative' means holding to traditional attitudes and values and cautious about change or innovation.",
        chinese_explanation: "(B) '反传统者' 一词意味着攻击或批评受珍视的信仰或机构的人。" +
            "<br><br>" +
            "(A) '墨守成规者' 意味着遵从接受的行为或既定实践的人。" +
            "<br><br>" +
            "(C) '传统主义者' 意味着对长期持有的文化和宗教价值观有深厚尊重的人。" +
            "<br><br>" +
            "(D) '保守者' 意味着坚持传统态度和价值观，对变革或创新持谨慎态度的人。"
    },
    {
        id: 2,
        question: "The coach's __________ left the players feeling demoralized, as he harshly criticized their performance for nearly an hour.",
        chinese_question: "教练的 __________ 让球员们感到士气低落，他严厉批评了他们的表现将近一个小时。",
        answers: [
            { option: "A", answer: "compliment", chinese_answer: "赞美", chinese_romanization: "zànměi" },
            { option: "B", answer: "praise", chinese_answer: "表扬", chinese_romanization: "biǎoyáng" },
            { option: "C", answer: "tirade", chinese_answer: "长篇大论", chinese_romanization: "chángpiān dàlùn" },
            { option: "D", answer: "encouragement", chinese_answer: "鼓励", chinese_romanization: "gǔlì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'tirade' means a long, angry speech of criticism or accusation." +
            "<br><br>" +
            "(A) 'compliment' means a polite expression of praise or admiration." +
            "<br><br>" +
            "(B) 'praise' means express warm approval or admiration of." +
            "<br><br>" +
            "(D) 'encouragement' means the action of giving someone support, confidence, or hope.",
        chinese_explanation: "(C) '长篇大论' 一词意味着长时间的愤怒的批评或指责演讲。" +
            "<br><br>" +
            "(A) '赞美' 意味着礼貌的赞美或钦佩。" +
            "<br><br>" +
            "(B) '表扬' 意味着表达热情的赞同或钦佩。" +
            "<br><br>" +
            "(D) '鼓励' 意味着给予某人支持、信心或希望的行为。"
    },
    {
        id: 3,
        question: "Her __________ to the new company policies was surprising, given her previous strong objections.",
        chinese_question: "鉴于她之前强烈反对，新公司政策的 __________ 让人感到惊讶。",
        answers: [
            { option: "A", answer: "resistance", chinese_answer: "抵抗", chinese_romanization: "dǐkàng" },
            { option: "B", answer: "acquiescence", chinese_answer: "默许", chinese_romanization: "mòxǔ" },
            { option: "C", answer: "defiance", chinese_answer: "反抗", chinese_romanization: "fǎnkàng" },
            { option: "D", answer: "rebellion", chinese_answer: "叛乱", chinese_romanization: "pànluàn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'acquiescence' means the reluctant acceptance of something without protest." +
            "<br><br>" +
            "(A) 'resistance' means the refusal to accept or comply with something." +
            "<br><br>" +
            "(C) 'defiance' means open resistance; bold disobedience." +
            "<br><br>" +
            "(D) 'rebellion' means an act of violent or open resistance to an established government or ruler.",
        chinese_explanation: "(B) '默许' 一词意味着勉强接受而不抗议。" +
            "<br><br>" +
            "(A) '抵抗' 意味着拒绝接受或遵守某事。" +
            "<br><br>" +
            "(C) '反抗' 意味着公开的抵抗；大胆的违抗。" +
            "<br><br>" +
            "(D) '叛乱' 意味着对既定政府或统治者的暴力或公开抵抗行为。"
    },
    {
        id: 4,
        question: "In __________, she realized that taking the job offer was the best decision she could have made, despite the initial doubts.",
        chinese_question: "在 __________ 中，她意识到接受这份工作是她做出的最佳决定，尽管最初有些怀疑。",
        answers: [
            { option: "A", answer: "foresight", chinese_answer: "预见", chinese_romanization: "yùjiàn" },
            { option: "B", answer: "anticipation", chinese_answer: "预期", chinese_romanization: "yùqī" },
            { option: "C", answer: "retrospect", chinese_answer: "回顾", chinese_romanization: "huígù" },
            { option: "D", answer: "prediction", chinese_answer: "预测", chinese_romanization: "yùcè" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'retrospect' means a survey or review of a past course of events or period of time." +
            "<br><br>" +
            "(A) 'foresight' means the ability to predict or the action of predicting what will happen or be needed in the future." +
            "<br><br>" +
            "(B) 'anticipation' means the action of anticipating something; expectation or prediction." +
            "<br><br>" +
            "(D) 'prediction' means a thing predicted; a forecast.",
        chinese_explanation: "(C) '回顾' 意味着对过去事件或时期的调查或回顾。" +
            "<br><br>" +
            "(A) '预见' 意味着预测或预测未来将会发生或需要的能力。" +
            "<br><br>" +
            "(B) '预期' 意味着预期某事的行为；期望或预测。" +
            "<br><br>" +
            "(D) '预测' 意味着预测的事物；预测。"
    },
    {
        id: 5,
        question: "She has a __________ for talking too much when she's nervous, often overwhelming her listeners.",
        chinese_question: "她在紧张时有 __________ 多话的倾向，常常让听众感到不堪重负。",
        answers: [
            { option: "A", answer: "reluctance", chinese_answer: "不情愿", chinese_romanization: "bù qíngyuàn" },
            { option: "B", answer: "aversion", chinese_answer: "厌恶", chinese_romanization: "yànwù" },
            { option: "C", answer: "propensity", chinese_answer: "倾向", chinese_romanization: "qīngxiàng" },
            { option: "D", answer: "disdain", chinese_answer: "轻蔑", chinese_romanization: "qīngmiè" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'propensity' means an inclination or natural tendency to behave in a particular way." +
            "<br><br>" +
            "(A) 'reluctance' means unwillingness or disinclination to do something." +
            "<br><br>" +
            "(B) 'aversion' means a strong dislike or disinclination." +
            "<br><br>" +
            "(D) 'disdain' means the feeling that someone or something is unworthy of one's consideration or respect; contempt.",
        chinese_explanation: "(C) '倾向' 一词意味着倾向于以特定方式行为的倾向或自然倾向。" +
            "<br><br>" +
            "(A) '不情愿' 意味着不愿意或不情愿做某事。" +
            "<br><br>" +
            "(B) '厌恶' 意味着强烈的厌恶或不愿意。" +
            "<br><br>" +
            "(D) '轻蔑' 意味着认为某人或某物不值得考虑或尊重的感觉；蔑视。"
    },
    {
        id: 6,
        question: "The team's victory was met with __________, as fans poured into the streets to celebrate their long-awaited championship.",
        chinese_question: "球队的胜利引起了 __________，粉丝们涌上街头庆祝他们期待已久的冠军。",
        answers: [
            { option: "A", answer: "sorrow", chinese_answer: "悲伤", chinese_romanization: "bēishāng" },
            { option: "B", answer: "indifference", chinese_answer: "冷漠", chinese_romanization: "lěngmò" },
            { option: "C", answer: "jubilation", chinese_answer: "欢腾", chinese_romanization: "huānténg" },
            { option: "D", answer: "resignation", chinese_answer: "顺从", chinese_romanization: "shùncóng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'jubilation' means a feeling of great happiness and triumph." +
            "<br><br>" +
            "(A) 'sorrow' means a feeling of deep distress caused by loss, disappointment, or other misfortune suffered by oneself or others." +
            "<br><br>" +
            "(B) 'indifference' means lack of interest, concern, or sympathy." +
            "<br><br>" +
            "(D) 'resignation' means the acceptance of something undesirable but inevitable.",
        chinese_explanation: "(C) '欢腾' 一词意味着极大的快乐和胜利感。" +
            "<br><br>" +
            "(A) '悲伤' 意味着由于失落、失望或其他不幸引起的深深的痛苦。" +
            "<br><br>" +
            "(B) '冷漠' 意味着缺乏兴趣、关心或同情。" +
            "<br><br>" +
            "(D) '顺从' 意味着接受不可避免的令人不快的事物。"
    },
    {
        id: 7,
        question: "The __________ of different scientific disciplines, each contributing their unique expertise and perspectives, led to a groundbreaking discovery that could change the future of medicine.",
        chinese_question: "不同科学学科的 __________，每个学科都贡献了其独特的专业知识和观点，导致了一项突破性的发现，可能会改变医学的未来。",
        answers: [
            { option: "A", answer: "digression", chinese_answer: "偏离", chinese_romanization: "piānlí" },
            { option: "B", answer: "congregation", chinese_answer: "集会", chinese_romanization: "jíhuì" },
            { option: "C", answer: "convergence", chinese_answer: "汇聚", chinese_romanization: "huìjù" },
            { option: "D", answer: "divergence", chinese_answer: "分歧", chinese_romanization: "fēnqí" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'convergence' means the process or state of converging." +
            "<br><br>" +
            "(A) 'digression' means a temporary departure from the main subject in speech or writing." +
            "<br><br>" +
            "(B) 'congregation' means a group of people assembled for religious worship or another common purpose." +
            "<br><br>" +
            "(D) 'divergence' means the process or state of diverging.",
        chinese_explanation: "(C) '汇聚' 意味着汇聚的过程或状态。" +
            "<br><br>" +
            "(A) '偏离' 意味着在演讲或写作中暂时偏离主题。" +
            "<br><br>" +
            "(B) '集会' 意味着为宗教崇拜或其他共同目的而集会的一群人。" +
            "<br><br>" +
            "(D) '分歧' 意味着分歧的过程或状态。"
    },
    {
        id: 8,
        question: "The politician faced serious __________ of corruption, which damaged his reputation and led to an investigation.",
        chinese_question: "这位政治家面临严重的腐败 __________，这损害了他的声誉并导致了调查。",
        answers: [
            { option: "A", answer: "commendation", chinese_answer: "表扬", chinese_romanization: "biǎoyáng" },
            { option: "B", answer: "award", chinese_answer: "奖项", chinese_romanization: "jiǎngxiàng" },
            { option: "C", answer: "allegations", chinese_answer: "指控", chinese_romanization: "zhǐkòng" },
            { option: "D", answer: "praise", chinese_answer: "赞美", chinese_romanization: "zànměi" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'allegations' means a claim or assertion that someone has done something illegal or wrong, typically one made without proof." +
            "<br><br>" +
            "(A) 'commendation' means praise formally or officially." +
            "<br><br>" +
            "(B) 'award' means a prize or other mark of recognition given in honor of an achievement." +
            "<br><br>" +
            "(D) 'praise' means the expression of approval or admiration for someone or something.",
        chinese_explanation: "(C) '指控' 一词意味着声称或断言某人做了违法或错误的事情，通常是没有证据的。" +
            "<br><br>" +
            "(A) '表扬' 意味着正式或正式的赞扬。" +
            "<br><br>" +
            "(B) '奖项' 意味着为表彰成就而颁发的奖品或其他标志。" +
            "<br><br>" +
            "(D) '赞美' 意味着对某人或某事的认可或钦佩的表达。"
    },
    {
        id: 9,
        question: "Her __________ with the prestigious university gave her access to many valuable research resources and connections.",
        chinese_question: "她与这所著名大学的 __________ 使她能够获得许多宝贵的研究资源和人脉。",
        answers: [
            { option: "A", answer: "separation", chinese_answer: "分离", chinese_romanization: "fēnlí" },
            { option: "B", answer: "isolation", chinese_answer: "隔离", chinese_romanization: "gélí" },
            { option: "C", answer: "affiliation", chinese_answer: "隶属", chinese_romanization: "lìshǔ" },
            { option: "D", answer: "detachment", chinese_answer: "超脱", chinese_romanization: "chāotuō" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'affiliation' means the state or process of affiliating or being affiliated." +
            "<br><br>" +
            "(A) 'separation' means the action or state of moving or being moved apart." +
            "<br><br>" +
            "(B) 'isolation' means the process or fact of isolating or being isolated." +
            "<br><br>" +
            "(D) 'detachment' means the state of being objective or aloof.",
        chinese_explanation: "(C) '隶属' 一词意味着隶属或隶属的状态或过程。" +
            "<br><br>" +
            "(A) '分离' 意味着分离或被分离的动作或状态。" +
            "<br><br>" +
            "(B) '隔离' 意味着隔离或被隔离的过程或事实。" +
            "<br><br>" +
            "(D) '超脱' 意味着客观或超然的状态。"
    },
    {
        id: 10,
        question: "She delivered the speech with such __________, her voice trembling with emotion, that everyone in the audience was moved.",
        chinese_question: "她带着如此 __________，声音颤抖着发表了演讲，听众中的每个人都被感动了。",
        answers: [
            { option: "A", answer: "indifference", chinese_answer: "漠不关心", chinese_romanization: "mò bù guānxīn" },
            { option: "B", answer: "monotony", chinese_answer: "单调", chinese_romanization: "dāndiào" },
            { option: "C", answer: "exasperation", chinese_answer: "恼怒", chinese_romanization: "nǎonù" },
            { option: "D", answer: "poignancy", chinese_answer: "悲痛", chinese_romanization: "bēitòng" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'poignancy' means the quality of evoking a keen sense of sadness or regret." +
            "<br><br>" +
            "(A) 'indifference' means lack of interest, concern, or sympathy." +
            "<br><br>" +
            "(B) 'monotony' means lack of variety and interest; tedious repetition and routine." +
            "<br><br>" +
            "(C) 'exasperation' means a feeling of intense irritation or annoyance.",
        chinese_explanation: "(D) '悲痛' 一词意味着唤起强烈的悲伤或遗憾的品质。" +
            "<br><br>" +
            "(A) '漠不关心' 意味着缺乏兴趣、关心或同情。" +
            "<br><br>" +
            "(B) '单调' 意味着缺乏多样性和兴趣；乏味的重复和例行公事。" +
            "<br><br>" +
            "(C) '恼怒' 意味着强烈的烦恼或恼怒感。"
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
