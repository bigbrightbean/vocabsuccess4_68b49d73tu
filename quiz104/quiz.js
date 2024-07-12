// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "Their organization works to __________ creativity and innovation in young people.",
        chinese_question: "他们的组织致力于 __________ 年轻人的创造力和创新精神。",
        answers: [
            { option: "A", answer: "foster", chinese_answer: "培养", chinese_romanization: "péiyǎng" },
            { option: "B", answer: "suppress", chinese_answer: "压制", chinese_romanization: "yāzhì" },
            { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "D", answer: "stifle", chinese_answer: "扼杀", chinese_romanization: "èshā" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'foster' metaphorically means to promote the growth or development of." +
            "<br><br>" +
            "(B) 'suppress' means forcibly put an end to." +
            "<br><br>" +
            "(C) 'ignore' means refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(D) 'stifle' means to make (someone) unable to breathe properly; suffocate.",
        chinese_explanation: "(A) '培养' 比喻促进成长或发展。" +
            "<br><br>" +
            "(B) '压制' 意味着强行结束。" +
            "<br><br>" +
            "(C) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(D) '扼杀' 意味着使（某人）无法正常呼吸；窒息。"
    },
    {
        id: 2,
        question: "Her experiences abroad helped to __________ her understanding of different cultures.",
        chinese_question: "她在国外的经历帮助 __________ 了她对不同文化的理解。",
        answers: [
            { option: "A", answer: "dilute", chinese_answer: "稀释", chinese_romanization: "xīshì" },
            { option: "B", answer: "diminish", chinese_answer: "减少", chinese_romanization: "jiǎnshǎo" },
            { option: "C", answer: "fortify", chinese_answer: "增强", chinese_romanization: "zēngqiáng" },
            { option: "D", answer: "hinder", chinese_answer: "阻碍", chinese_romanization: "zǔ'ài" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'fortify' metaphorically means to strengthen or support." +
            "<br><br>" +
            "(A) 'dilute' means make (a liquid) thinner or weaker by adding water or another solvent to it." +
            "<br><br>" +
            "(B) 'diminish' means make or become less." +
            "<br><br>" +
            "(D) 'hinder' means create difficulties for (someone or something), resulting in delay or obstruction.",
        chinese_explanation: "(C) '增强' 比喻加强或支持。" +
            "<br><br>" +
            "(A) '稀释' 意味着通过添加水或另一种溶剂使（液体）变薄或变弱。" +
            "<br><br>" +
            "(B) '减少' 意味着使或变得更少。" +
            "<br><br>" +
            "(D) '阻碍' 意味着为（某人或某事）制造困难，导致延误或阻塞。"
    },
    {
        id: 3,
        question: "The heavy snow and ice will __________ traffic, making it difficult for cars to move quickly.",
        chinese_question: "大雪和冰雪会__________交通，使汽车难以快速行驶。",
        answers: [
            { option: "A", answer: "clear", chinese_answer: "清除", chinese_romanization: "qīngchú" },
            { option: "B", answer: "improve", chinese_answer: "改善", chinese_romanization: "gǎishàn" },
            { option: "C", answer: "aid", chinese_answer: "帮助", chinese_romanization: "bāngzhù" },
            { option: "D", answer: "fetter", chinese_answer: "束缚", chinese_romanization: "shùfù" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'fetter' means to restrict or hold back someone or something." +
            "<br><br>" +
            "(A) 'clear' means to remove something. It is not the same as holding back or restricting." +
            "<br><br>" +
            "(B) 'improve' means to make something better. It is not the same as holding back or restricting." +
            "<br><br>" +
            "(C) 'aid' means to help or support someone or something. It is not the same as holding back or restricting.",
        chinese_explanation: "(D) '束缚' 意思是限制或阻碍某人或某事。" +
            "<br><br>" +
            "(A) '清除' 意思是移除某物。这不同于阻碍或限制。" +
            "<br><br>" +
            "(B) '改善' 意思是使某事变得更好。这不同于阻碍或限制。" +
            "<br><br>" +
            "(C) '帮助' 意思是帮助或支持某人或某事。这不同于阻碍或限制。"
    },
    {
        id: 4,
        question: "The journalist was able to __________ out the corruption within the company.",
        chinese_question: "记者能够 __________ 出公司内部的腐败行为。",
        answers: [
            { option: "A", answer: "ferret", chinese_answer: "揭露", chinese_romanization: "jiēlù" },
            { option: "B", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" },
            { option: "C", answer: "dismiss", chinese_answer: "摒弃", chinese_romanization: "bìngqì" },
            { option: "D", answer: "conceal", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'ferret' metaphorically means to uncover or discover information." +
            "<br><br>" +
            "(B) 'support' means to bear all or part of the weight of; hold up." +
            "<br><br>" +
            "(C) 'dismiss' means to treat as unworthy of serious consideration." +
            "<br><br>" +
            "(D) 'conceal' means to keep from sight; hide.",
        chinese_explanation: "(A) '揭露' 比喻揭露或发现信息。" +
            "<br><br>" +
            "(B) '支持' 意味着承担全部或部分重量；支撑。" +
            "<br><br>" +
            "(C) '摒弃' 意味着视为不值得认真考虑。" +
            "<br><br>" +
            "(D) '隐藏' 意味着使看不见；隐藏。"
    },
    {
        id: 5,
        question: "Good communication can __________ teamwork and collaboration.",
        chinese_question: "良好的沟通可以 __________ 团队合作和协作。",
        answers: [
            { option: "A", answer: "disrupt", chinese_answer: "打断", chinese_romanization: "dǎduàn" },
            { option: "B", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "C", answer: "dismiss", chinese_answer: "摒弃", chinese_romanization: "bìngqì" },
            { option: "D", answer: "facilitate", chinese_answer: "促进", chinese_romanization: "cùjìn" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'facilitate' metaphorically means to promote or help in the progress of." +
            "<br><br>" +
            "(A) 'disrupt' means to interrupt (an event, activity, or process) by causing a disturbance or problem." +
            "<br><br>" +
            "(B) 'ignore' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(C) 'dismiss' means to treat as unworthy of serious consideration.",
        chinese_explanation: "(D) '促进' 比喻促进或帮助进展。" +
            "<br><br>" +
            "(A) '打断' 意味着通过制造干扰或问题来中断（事件、活动或过程）。" +
            "<br><br>" +
            "(B) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(C) '摒弃' 意味着视为不值得认真考虑。"
    },
    {
        id: 6,
        question: "His actions __________ the values he preached to others.",
        chinese_question: "他的行为 __________ 了他对他人宣扬的价值观。",
        answers: [
            { option: "A", answer: "exemplified", chinese_answer: "例证", chinese_romanization: "lìzhèng" },
            { option: "B", answer: "opposed", chinese_answer: "反对", chinese_romanization: "fǎnduì" },
            { option: "C", answer: "contradicted", chinese_answer: "矛盾", chinese_romanization: "máodùn" },
            { option: "D", answer: "confused", chinese_answer: "困惑", chinese_romanization: "kùnhuò" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'exemplified' metaphorically means to demonstrate or illustrate by example." +
            "<br><br>" +
            "(B) 'opposed' means to disapprove of and attempt to prevent, especially by argument." +
            "<br><br>" +
            "(C) 'contradicted' means deny the truth of (a statement) by asserting the opposite." +
            "<br><br>" +
            "(D) 'confused' means unable to think clearly; bewildered.",
        chinese_explanation: "(A) '例证' 比喻通过例子展示或说明。" +
            "<br><br>" +
            "(B) '反对' 意味着反对并试图阻止，特别是通过争论。" +
            "<br><br>" +
            "(C) '矛盾' 意味着通过断言相反来否认（声明）的真实性。" +
            "<br><br>" +
            "(D) '困惑' 意味着无法清晰思考；困惑的。"
    },
    {
        id: 7,
        question: "The internet has __________ traditional newspapers as the primary source of news for many people.",
        chinese_question: "互联网已经__________传统报纸，成为许多人获取新闻的主要来源。",
        answers: [
            { option: "A", answer: "destroyed", chinese_answer: "摧毁", chinese_romanization: "cuīhuǐ" },
            { option: "B", answer: "printed", chinese_answer: "打印", chinese_romanization: "dǎyìn" },
            { option: "C", answer: "published", chinese_answer: "出版", chinese_romanization: "chūbǎn" },
            { option: "D", answer: "supplanted", chinese_answer: "取代", chinese_romanization: "qǔdài" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'supplanted' means to take the place of something or someone." +
            "<br><br>" +
            "(A) 'destroyed' means to damage something so badly that it no longer exists or cannot be used." +
            "<br><br>" +
            "(B) 'printed' means to produce text or images on paper using a machine." +
            "<br><br>" +
            "(C) 'published' means to prepare and issue a book, journal, or other material for public sale.",
        chinese_explanation: "(D) '取代' 意思是取代某物或某人的位置。" +
            "<br><br>" +
            "(A) '摧毁' 意思是严重损坏某物，使其不再存在或不能使用。" +
            "<br><br>" +
            "(B) '打印' 意思是使用机器在纸上制作文本或图像。" +
            "<br><br>" +
            "(C) '出版' 意思是准备和发行书籍、期刊或其他材料供公开销售。"
    },
    {
        id: 8,
        question: "She decided to __________ on a new career path after years in the same job.",
        chinese_question: "在同一工作多年后，她决定 __________ 新的职业道路。",
        answers: [
            { option: "A", answer: "embark", chinese_answer: "开始", chinese_romanization: "kāishǐ" },
            { option: "B", answer: "quit", chinese_answer: "辞职", chinese_romanization: "cízhí" },
            { option: "C", answer: "hesitate", chinese_answer: "犹豫", chinese_romanization: "yóuyù" },
            { option: "D", answer: "pause", chinese_answer: "暂停", chinese_romanization: "zàntíng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'embark' metaphorically means to start something new or important." +
            "<br><br>" +
            "(B) 'quit' means to leave (a place), usually permanently." +
            "<br><br>" +
            "(C) 'hesitate' means to pause before saying or doing something, especially through uncertainty." +
            "<br><br>" +
            "(D) 'pause' means to stop temporarily.",
        chinese_explanation: "(A) '开始' 比喻开始某个新的或重要的事情。" +
            "<br><br>" +
            "(B) '辞职' 意味着离开（一个地方），通常是永久性的。" +
            "<br><br>" +
            "(C) '犹豫' 意味着在说或做某事之前暂停，特别是由于不确定。" +
            "<br><br>" +
            "(D) '暂停' 意味着暂时停止。"
    },
    {
        id: 9,
        question: "He needed to __________ his thoughts before making the important decision.",
        chinese_question: "在做出重要决定之前，他需要__________自己的想法。",
        answers: [
            { option: "A", answer: "confuse", chinese_answer: "使困惑", chinese_romanization: "shǐ kùnhuò" },
            { option: "B", answer: "clarify", chinese_answer: "澄清", chinese_romanization: "chéngqīng" },
            { option: "C", answer: "complicate", chinese_answer: "复杂化", chinese_romanization: "fùzá huà" },
            { option: "D", answer: "obscure", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'clarify' means to make a statement or situation less confused and more comprehensible. Figuratively, it can mean organizing one's thoughts or understanding before taking action." +
            "<br><br>" +
            "(A) 'confuse' means to make someone unable to think clearly." +
            "<br><br>" +
            "(C) 'complicate' means to make something more difficult or confusing." +
            "<br><br>" +
            "(D) 'obscure' means to keep from being seen; conceal.",
        chinese_explanation: "(B) '澄清'一词意味着使陈述或情况不再混乱，更易理解。比喻地，它可以表示在采取行动之前组织自己的想法或理解。" +
            "<br><br>" +
            "(A) '使困惑' 意味着使某人无法清晰思考。" +
            "<br><br>" +
            "(C) '复杂化' 意味着使某事变得更难或更混乱。" +
            "<br><br>" +
            "(D) '隐藏' 意味着不让被看到；隐蔽。"
    },
    {
        id: 10,
        question: "He often likes to __________ famous philosophers during discussions to make his points more convincing.",
        chinese_question: "在讨论中，他经常喜欢__________著名的哲学家，以使自己的观点更有说服力。",
        answers: [
            { option: "A", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "B", answer: "deny", chinese_answer: "否认", chinese_romanization: "fǒurèn" },
            { option: "C", answer: "cite", chinese_answer: "引用", chinese_romanization: "yǐnyòng" },
            { option: "D", answer: "refute", chinese_answer: "反驳", chinese_romanization: "fǎnbó" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'cite' means to quote as evidence for or justification of an argument or statement. Figuratively, it can mean to refer to authoritative sources to strengthen one's argument." +
            "<br><br>" +
            "(A) 'ignore' means to refuse to take notice of." +
            "<br><br>" +
            "(B) 'deny' means to state that one refuses to admit the truth or existence of." +
            "<br><br>" +
            "(D) 'refute' means to prove a statement or theory to be wrong or false.",
        chinese_explanation: "(C) '引用'一词意味着作为论据或声明的证据或理由引用。比喻地，它可以表示引用权威来源来加强自己的论点。" +
            "<br><br>" +
            "(A) '忽视' 意味着拒绝注意。" +
            "<br><br>" +
            "(B) '否认' 意味着声明拒绝承认真相或存在。" +
            "<br><br>" +
            "(D) '反驳' 意味着证明一个声明或理论是错误的或虚假的。"
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
