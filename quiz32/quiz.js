// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "Despite the challenges, the team remained __________, maintaining a positive attitude and high spirits throughout the project.",
        chinese_question: "尽管面临挑战，团队仍然保持 __________，在整个项目期间保持积极的态度和高昂的士气。",
        answers: [
            { option: "A", answer: "lethargic", chinese_answer: "昏昏欲睡的", chinese_romanization: "hūnhūn yù shuì de" },
            { option: "B", answer: "pessimistic", chinese_answer: "悲观的", chinese_romanization: "bēiguān de" },
            { option: "C", answer: "depressed", chinese_answer: "沮丧的", chinese_romanization: "jǔsàng de" },
            { option: "D", answer: "buoyant", chinese_answer: "乐观的", chinese_romanization: "lèguān de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'buoyant' means cheerful and optimistic." +
            "<br><br>" +
            "(A) 'lethargic' means affected by lethargy; sluggish and apathetic." +
            "<br><br>" +
            "(B) 'pessimistic' means tending to see the worst aspect of things or believe that the worst will happen." +
            "<br><br>" +
            "(C) 'depressed' means in a state of general unhappiness or despondency.",
        chinese_explanation: "(D) '乐观的' 意味着充满欢愉和乐观的。" +
            "<br><br>" +
            "(A) '昏昏欲睡的' 意味着受困于困倦的；行动迟缓和无精打采的。" +
            "<br><br>" +
            "(B) '悲观的' 意味着倾向于看到事情的最坏方面或相信最坏的事情将会发生的。" +
            "<br><br>" +
            "(C) '沮丧的' 意味着处于普遍不幸福或沮丧状态的。"
    },
    {
        id: 2,
        question: "His absence from the meeting was __________, raising questions among the team about his commitment.",
        chinese_question: "他在会议上的缺席是 __________ 的，引起了团队对他承诺的质疑。",
        answers: [
            { option: "A", answer: "conspicuous", chinese_answer: "显眼的", chinese_romanization: "xiǎnyǎn de" },
            { option: "B", answer: "unnoticed", chinese_answer: "未被注意的", chinese_romanization: "wèi bèi zhùyì de" },
            { option: "C", answer: "irrelevant", chinese_answer: "无关的", chinese_romanization: "wúguān de" },
            { option: "D", answer: "insignificant", chinese_answer: "微不足道的", chinese_romanization: "wēibùzúdào de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'conspicuous' means standing out so as to be clearly visible." +
            "<br><br>" +
            "(B) 'unnoticed' means not noticed." +
            "<br><br>" +
            "(C) 'irrelevant' means not connected with or relevant to something." +
            "<br><br>" +
            "(D) 'insignificant' means too small or unimportant to be worth consideration.",
        chinese_explanation: "(A) '显眼的' 意味着突出的，以至于清晰可见的。" +
            "<br><br>" +
            "(B) '未被注意的' 意味着没有被注意到的。" +
            "<br><br>" +
            "(C) '无关的' 意味着与某事无关的。" +
            "<br><br>" +
            "(D) '微不足道的' 意味着小到或不重要到不值得考虑的。"
    },
    {
        id: 3,
        question: "The company's financial practices were __________, raising concerns among investors.",
        chinese_question: "公司的财务做法__________，引起了投资者的担忧。",
        answers: [
            { option: "A", answer: "clear", chinese_answer: "清楚的", chinese_romanization: "qīngchǔ de" },
            { option: "B", answer: "straightforward", chinese_answer: "简单的", chinese_romanization: "jiǎndān de" },
            { option: "C", answer: "dubious", chinese_answer: "可疑的", chinese_romanization: "kěyí de" },
            { option: "D", answer: "convincing", chinese_answer: "令人信服的", chinese_romanization: "lìng rén xìnfú de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'dubious' means hesitating or doubting. Figuratively, it can mean being questionable or suspicious." +
            "<br><br>" +
            "(A) 'clear' means easy to perceive, understand, or interpret." +
            "<br><br>" +
            "(B) 'straightforward' means uncomplicated and easy to do or understand." +
            "<br><br>" +
            "(D) 'convincing' means capable of causing someone to believe that something is true or real.",
        chinese_explanation: "(C) '可疑的'一词意味着犹豫或怀疑。比喻地，它可以表示有问题或可疑的。" +
            "<br><br>" +
            "(A) '清楚的' 意味着容易感知、理解或解释的。" +
            "<br><br>" +
            "(B) '简单的' 意味着不复杂且容易做或理解的。" +
            "<br><br>" +
            "(D) '令人信服的' 意味着能够让人相信某事是真的或真实的。"
    },
    {
        id: 4,
        question: "Despite not achieving his dream job, he remained __________ with his current position and life.",
        chinese_question: "尽管没有实现他的梦想工作，他仍然对自己目前的职位和生活感到 __________。",
        answers: [
            { option: "A", answer: "content", chinese_answer: "满足的", chinese_romanization: "mǎnzú de" },
            { option: "B", answer: "frustrated", chinese_answer: "沮丧的", chinese_romanization: "jǔsàng de" },
            { option: "C", answer: "envious", chinese_answer: "嫉妒的", chinese_romanization: "jídù de" },
            { option: "D", answer: "regretful", chinese_answer: "后悔的", chinese_romanization: "hòuhuǐ de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'content' means in a state of peaceful happiness." +
            "<br><br>" +
            "(B) 'frustrated' means feeling or expressing distress and annoyance." +
            "<br><br>" +
            "(C) 'envious' means feeling or showing envy." +
            "<br><br>" +
            "(D) 'regretful' means feeling or showing regret.",
        chinese_explanation: "(A) '满足的' 意味着处于平静幸福的状态。" +
            "<br><br>" +
            "(B) '沮丧的' 意味着感到或表达痛苦和恼怒的。" +
            "<br><br>" +
            "(C) '嫉妒的' 意味着感到或表现出嫉妒的。" +
            "<br><br>" +
            "(D) '后悔的' 意味着感到或表现出后悔的。"
    },
    {
        id: 5,
        question: "The debate was intense, but both parties remained __________, focusing on the issues rather than personal attacks.",
        chinese_question: "辩论很激烈，但双方仍然保持 __________，关注问题而不是人身攻击。",
        answers: [
            { option: "A", answer: "aggressive", chinese_answer: "侵略性", chinese_romanization: "qīnlüè xìng" },
            { option: "B", answer: "uncivil", chinese_answer: "无礼", chinese_romanization: "wúlǐ" },
            { option: "C", answer: "civil", chinese_answer: "礼貌", chinese_romanization: "lǐmào" },
            { option: "D", answer: "derogatory", chinese_answer: "贬低", chinese_romanization: "biǎndī" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'civil' means courteous and polite." +
            "<br><br>" +
            "(A) 'aggressive' means ready or likely to attack or confront." +
            "<br><br>" +
            "(B) 'uncivil' means discourteous; impolite." +
            "<br><br>" +
            "(D) 'derogatory' means showing a critical or disrespectful attitude.",
        chinese_explanation: "(C) '礼貌' 意味着有礼貌和礼貌的。" +
            "<br><br>" +
            "(A) '侵略性' 意味着准备或可能攻击或对抗。" +
            "<br><br>" +
            "(B) '无礼' 意味着不礼貌；不礼貌。" +
            "<br><br>" +
            "(D) '贬低' 意味着表现出批评或不尊重的态度。"
    },
    {
        id: 6,
        question: "His __________ apology did little to mend their strained relationship.",
        chinese_question: "他的 __________ 道歉对修复他们紧张的关系几乎没有帮助。",
        answers: [
            { option: "A", answer: "immediate", chinese_answer: "立即", chinese_romanization: "lìjí" },
            { option: "B", answer: "sincere", chinese_answer: "真诚", chinese_romanization: "zhēnchéng" },
            { option: "C", answer: "belated", chinese_answer: "迟到", chinese_romanization: "chídào" },
            { option: "D", answer: "heartfelt", chinese_answer: "衷心", chinese_romanization: "zhōngxīn" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'belated' means coming or happening later than should have been the case." +
            "<br><br>" +
            "(A) 'immediate' means occurring or done at once; instant." +
            "<br><br>" +
            "(B) 'sincere' means free from pretense or deceit; genuine." +
            "<br><br>" +
            "(D) 'heartfelt' means deeply and strongly felt.",
        chinese_explanation: "(C) '迟到' 意味着来得比预期的晚。" +
            "<br><br>" +
            "(A) '立即' 意味着立刻发生或完成的。" +
            "<br><br>" +
            "(B) '真诚' 意味着没有伪装或欺骗的；真正的。" +
            "<br><br>" +
            "(D) '衷心' 意味着深深和强烈地感受到的。"
    },
    {
        id: 7,
        question: "Her __________ lifestyle allowed her to save a significant amount of money each month, despite her modest salary.",
        chinese_question: "她的 __________ 生活方式使她每个月能省下大量的钱，尽管她的工资不高。",
        answers: [
            { option: "A", answer: "extravagant", chinese_answer: "奢侈的", chinese_romanization: "shēchǐ de" },
            { option: "B", answer: "frugal", chinese_answer: "节俭的", chinese_romanization: "jiéjiǎn de" },
            { option: "C", answer: "wasteful", chinese_answer: "浪费的", chinese_romanization: "làngfèi de" },
            { option: "D", answer: "lavish", chinese_answer: "奢华的", chinese_romanization: "shēhuá de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'frugal' means sparing or economical with regard to money or food." +
            "<br><br>" +
            "(A) 'extravagant' means lacking restraint in spending money or using resources." +
            "<br><br>" +
            "(C) 'wasteful' means using or expending something of value carelessly, extravagantly, or to no purpose." +
            "<br><br>" +
            "(D) 'lavish' means sumptuously rich, elaborate, or luxurious.",
        chinese_explanation: "(B) '节俭的' 一词意味着在金钱或食物方面节省或经济的。" +
            "<br><br>" +
            "(A) '奢侈的' 意味着在花钱或使用资源方面缺乏节制的。" +
            "<br><br>" +
            "(C) '浪费的' 意味着不小心、奢侈或无目的地使用或花费有价值的东西。" +
            "<br><br>" +
            "(D) '奢华的' 意味着豪华的，复杂的或奢侈的。"
    },
    {
        id: 8,
        question: "Despite the challenges, she remained __________, always looking for the positive side of things.",
        chinese_question: "尽管有挑战，她依然 __________，总是寻找事物积极的一面。",
        answers: [
            { option: "A", answer: "pessimistic", chinese_answer: "悲观", chinese_romanization: "bēiguān" },
            { option: "B", answer: "indifferent", chinese_answer: "冷漠", chinese_romanization: "lěngmò" },
            { option: "C", answer: "cheerful", chinese_answer: "开心", chinese_romanization: "kāixīn" },
            { option: "D", answer: "cynical", chinese_answer: "愤世嫉俗", chinese_romanization: "fènshì jísú" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'cheerful' means noticeably happy and optimistic." +
            "<br><br>" +
            "(A) 'pessimistic' means tending to see the worst aspect of things or believe that the worst will happen." +
            "<br><br>" +
            "(B) 'indifferent' means having no particular interest or sympathy; unconcerned." +
            "<br><br>" +
            "(D) 'cynical' means believing that people are motivated purely by self-interest; distrustful of human sincerity or integrity.",
        chinese_explanation: "(C) '开心' 意味着明显的快乐和乐观。" +
            "<br><br>" +
            "(A) '悲观' 意味着倾向于看到事物的最坏方面或相信最坏的情况将会发生。" +
            "<br><br>" +
            "(B) '冷漠' 意味着没有特别的兴趣或同情；不关心。" +
            "<br><br>" +
            "(D) '愤世嫉俗' 意味着相信人们纯粹出于自利而动机；不信任人类的真诚或正直。"
    },
    {
        id: 9,
        question: "The __________ reaction to the new policy led to its immediate withdrawal.",
        chinese_question: "对新政策的 __________ 反应导致其立即撤回。",
        answers: [
            { option: "A", answer: "positive", chinese_answer: "积极", chinese_romanization: "jījí" },
            { option: "B", answer: "enthusiastic", chinese_answer: "热情", chinese_romanization: "rèqíng" },
            { option: "C", answer: "adverse", chinese_answer: "不利", chinese_romanization: "bùlì" },
            { option: "D", answer: "favorable", chinese_answer: "有利", chinese_romanization: "yǒulì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'adverse' means preventing success or development; harmful." +
            "<br><br>" +
            "(A) 'positive' means consisting in or characterized by the presence rather than the absence of distinguishing features." +
            "<br><br>" +
            "(B) 'enthusiastic' means having or showing intense and eager enjoyment, interest, or approval." +
            "<br><br>" +
            "(D) 'favorable' means expressing approval.",
        chinese_explanation: "(C) '不利' 意味着阻碍成功或发展；有害的。" +
            "<br><br>" +
            "(A) '积极' 意味着表现出或特征是存在而不是缺乏区分特征。" +
            "<br><br>" +
            "(B) '热情' 意味着表现出强烈和急切的享受、兴趣或赞同。" +
            "<br><br>" +
            "(D) '有利' 意味着表达赞同。"
    },
    {
        id: 10,
        question: "The professor's __________ approach to teaching made his lectures hard to follow.",
        chinese_question: "教授 __________ 的教学方法使他的讲座难以跟上。",
        answers: [
            { option: "A", answer: "discursive", chinese_answer: "杂乱无章的", chinese_romanization: "záluàn wú zhāng de" },
            { option: "B", answer: "structured", chinese_answer: "有结构的", chinese_romanization: "yǒu jiégòu de" },
            { option: "C", answer: "linear", chinese_answer: "线性的", chinese_romanization: "xiànxìng de" },
            { option: "D", answer: "organized", chinese_answer: "有组织的", chinese_romanization: "yǒu zǔzhī de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'discursive' metaphorically means lacking order; rambling." +
            "<br><br>" +
            "(B) 'structured' means arranged in a definite pattern of organization." +
            "<br><br>" +
            "(C) 'linear' means arranged in or extending along a straight or nearly straight line." +
            "<br><br>" +
            "(D) 'organized' means arranged in a systematic way, especially on a large scale.",
        chinese_explanation: "(A) '杂乱无章的' 比喻缺乏顺序；散漫的。" +
            "<br><br>" +
            "(B) '有结构的' 意味着按一定模式安排的。" +
            "<br><br>" +
            "(C) '线性的' 意味着按直线或几乎直线排列或延伸。" +
            "<br><br>" +
            "(D) '有组织的' 意味着按系统方式安排的，特别是在大规模上。"
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
