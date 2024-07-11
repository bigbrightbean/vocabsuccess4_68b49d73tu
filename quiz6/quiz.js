// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The ceremony had a __________ atmosphere, filled with respect and reflection.",
        chinese_question: "仪式有一种__________的氛围，充满了尊重和反思。",
        answers: [
            { option: "A", answer: "cheerful", chinese_answer: "高兴的", chinese_romanization: "gāoxìng de" },
            { option: "B", answer: "casual", chinese_answer: "随意的", chinese_romanization: "suíyì de" },
            { option: "C", answer: "indifferent", chinese_answer: "漠不关心的", chinese_romanization: "mòbùguānxīn de" },
            { option: "D", answer: "solemn", chinese_answer: "严肃的", chinese_romanization: "yánsù de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'solemn' means formal and dignified; serious." +
            "<br><br>" +
            "(A) 'cheerful' means noticeably happy and optimistic." +
            "<br><br>" +
            "(B) 'casual' means relaxed and unconcerned." +
            "<br><br>" +
            "(C) 'indifferent' means having no particular interest or sympathy.",
        chinese_explanation: "(D) '严肃的'一词意味着正式和庄严的；严肃的。" +
            "<br><br>" +
            "(A) '高兴的' 意味着明显的快乐和乐观。" +
            "<br><br>" +
            "(B) '随意的' 意味着放松和不在意的。" +
            "<br><br>" +
            "(C) '漠不关心的' 意味着没有特别的兴趣或同情。"
    },
    {
        id: 2,
        question: "Her __________ hostility towards her rival was evident in every meeting.",
        chinese_question: "她对竞争对手的__________敌意在每次会议上都显而易见。",
        answers: [
            { option: "A", answer: "covert", chinese_answer: "隐蔽的", chinese_romanization: "yǐnbì de" },
            { option: "B", answer: "subtle", chinese_answer: "微妙的", chinese_romanization: "wēimiào de" },
            { option: "C", answer: "overt", chinese_answer: "公开的", chinese_romanization: "gōngkāi de" },
            { option: "D", answer: "hidden", chinese_answer: "隐藏的", chinese_romanization: "yǐncáng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'overt' means done or shown openly; plainly apparent. Figuratively, it can mean obvious and not hidden or secret." +
            "<br><br>" +
            "(A) 'covert' means not openly acknowledged or displayed." +
            "<br><br>" +
            "(B) 'subtle' means so delicate or precise as to be difficult to analyze or describe." +
            "<br><br>" +
            "(D) 'hidden' means kept out of sight; concealed.",
        chinese_explanation: "(C) '公开的'一词意味着公开进行或显示；显而易见的。比喻地，它可以表示明显的且不隐藏或秘密的。" +
            "<br><br>" +
            "(A) '隐蔽的' 意味着不公开承认或显示的。" +
            "<br><br>" +
            "(B) '微妙的' 意味着如此精致或准确，以至于难以分析或描述的。" +
            "<br><br>" +
            "(D) '隐藏的' 意味着不让看见的；隐藏的。"
    },
    {
        id: 3,
        question: "His __________ attitude towards work often resulted in missed deadlines.",
        chinese_question: "他对工作的 __________ 态度经常导致错过最后期限。",
        answers: [
            { option: "A", answer: "casual", chinese_answer: "随便的", chinese_romanization: "suíbiàn de" },
            { option: "B", answer: "dedicated", chinese_answer: "专注的", chinese_romanization: "zhuānzhù de" },
            { option: "C", answer: "meticulous", chinese_answer: "一丝不苟的", chinese_romanization: "yīsī bù gǒu de" },
            { option: "D", answer: "diligent", chinese_answer: "勤勉的", chinese_romanization: "qínmiǎn de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'casual' metaphorically means showing a lack of concern or seriousness." +
            "<br><br>" +
            "(B) 'dedicated' means devoted to a task or purpose." +
            "<br><br>" +
            "(C) 'meticulous' means showing great attention to detail; very careful and precise." +
            "<br><br>" +
            "(D) 'diligent' means having or showing care and conscientiousness in one's work or duties.",
        chinese_explanation: "(A) '随便的' 比喻表现出缺乏关心或严肃性。" +
            "<br><br>" +
            "(B) '专注的' 意味着致力于某项任务或目的。" +
            "<br><br>" +
            "(C) '一丝不苟的' 意味着非常注重细节；非常小心和精确。" +
            "<br><br>" +
            "(D) '勤勉的' 意味着在工作或职责上表现出关心和认真。"
    },
    {
        id: 4,
        question: "The company's practices were deemed __________, leading to a major scandal.",
        chinese_question: "该公司的做法被认为是__________的，导致了一场大丑闻。",
        answers: [
            { option: "A", answer: "honest", chinese_answer: "诚实的", chinese_romanization: "chéngshí de" },
            { option: "B", answer: "corrupt", chinese_answer: "腐败的", chinese_romanization: "fǔbài de" },
            { option: "C", answer: "trustworthy", chinese_answer: "可信的", chinese_romanization: "kěxìn de" },
            { option: "D", answer: "ethical", chinese_answer: "道德的", chinese_romanization: "dàodé de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'corrupt' means having or showing a willingness to act dishonestly in return for money or personal gain. Figuratively, it can mean morally depraved or unethical." +
           "<br><br>" +
            "(A) 'honest' means free of deceit; truthful and sincere." +
            "<br><br>" +
            "(C) 'trustworthy' means able to be relied on as honest or truthful." +
            "<br><br>" +
            "(D) 'ethical' means relating to moral principles or the branch of knowledge dealing with these.",
        chinese_explanation: "(B) '腐败的'一词意味着表现出愿意为金钱或个人利益而不诚实行事。比喻地，它可以表示道德堕落或不道德的。" +
            "<br><br>" +
            "(A) '诚实的' 意味着没有欺骗；诚实和真诚。" +
            "<br><br>" +
            "(C) '可信的' 意味着可以依赖为诚实或真实的。" +
            "<br><br>" +
            "(D) '道德的' 意味着与道德原则或处理这些原则的知识分支有关的。"
    },
    {
        id: 5,
        question: "The discussion was __________ and did not yield any new ideas.",
        chinese_question: "讨论 __________，没有产生任何新想法。",
        answers: [
            { option: "A", answer: "barren", chinese_answer: "贫瘠的", chinese_romanization: "pínjí de" },
            { option: "B", answer: "fruitful", chinese_answer: "富有成果的", chinese_romanization: "fùyǒu chéngguǒ de" },
            { option: "C", answer: "constructive", chinese_answer: "建设性的", chinese_romanization: "jiànshè xìng de" },
            { option: "D", answer: "insightful", chinese_answer: "有见地的", chinese_romanization: "yǒu jiàndì de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'barren' metaphorically means unproductive or unfruitful." +
            "<br><br>" +
            "(B) 'fruitful' means producing good or helpful results; productive." +
            "<br><br>" +
            "(C) 'constructive' means serving a useful purpose; tending to build up." +
            "<br><br>" +
            "(D) 'insightful' means having or showing an accurate and deep understanding; perceptive.",
        chinese_explanation: "(A) '贫瘠的' 比喻无生产力或无成果的。" +
            "<br><br>" +
            "(B) '富有成果的' 意味着产生良好或有用的结果的；多产的。" +
            "<br><br>" +
            "(C) '建设性的' 意味着起有用作用的；有助于建设的。" +
            "<br><br>" +
            "(D) '有见地的' 意味着具有或显示出准确和深入理解的；有洞察力的。"
    },
    {
        id: 6,
        question: "She had an __________ mind, able to think on her feet and come up with creative solutions quickly.",
        chinese_question: "她的头脑非常__________，能够快速思考并提出创造性的解决方案。",
        answers: [
            { option: "A", answer: "clumsy", chinese_answer: "笨拙的", chinese_romanization: "bènzhuō de" },
            { option: "B", answer: "slow", chinese_answer: "慢的", chinese_romanization: "màn de" },
            { option: "C", answer: "agile", chinese_answer: "敏捷的", chinese_romanization: "mǐnjié de" },
            { option: "D", answer: "stiff", chinese_answer: "僵硬的", chinese_romanization: "jiāngyìng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'agile' means able to move quickly and easily. Figuratively, it can mean being mentally quick and resourceful." +
            "<br><br>" +
            "(A) 'clumsy' means awkward in movement or in handling things." +
            "<br><br>" +
            "(B) 'slow' means moving or operating, or designed to do so, only at a low speed; not quick or fast." +
            "<br><br>" +
            "(D) 'stiff' means not easily bent or changed in shape; rigid.",
        chinese_explanation: "(C) '敏捷的'一词意味着能够快速轻松地移动。比喻地，它可以表示在精神上迅速和足智多谋。" +
            "<br><br>" +
            "(A) '笨拙的' 意味着在运动或处理事物时笨拙的。" +
            "<br><br>" +
            "(B) '慢的' 意味着移动或操作，或设计为这样做，只有低速；不快或不快。" +
            "<br><br>" +
            "(D) '僵硬的' 意味着不易弯曲或改变形状；刚性的。"
    },
    {
        id: 7,
        question: "The community was __________ over the proposed changes to their neighborhood, feeling unheard and disrespected.",
        chinese_question: "社区对拟议的邻里变化感到__________，觉得未被听取意见和不受尊重。",
        answers: [
            { option: "A", answer: "calm", chinese_answer: "平静的", chinese_romanization: "píngjìng de" },
            { option: "B", answer: "indifferent", chinese_answer: "漠不关心的", chinese_romanization: "mòbùguānxīn de" },
            { option: "C", answer: "furious", chinese_answer: "狂怒的", chinese_romanization: "kuángnù de" },
            { option: "D", answer: "amused", chinese_answer: "愉快的", chinese_romanization: "yúkuài de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'furious' means extremely angry." +
            "<br><br>" +
            "(A) 'calm' means not showing or feeling nervousness, anger, or other strong emotions." +
            "<br><br>" +
            "(B) 'indifferent' means having no particular interest or sympathy." +
            "<br><br>" +
            "(D) 'amused' means finding something funny or entertaining.",
        chinese_explanation: "(C) '狂怒的'一词意味着非常生气的。" +
            "<br><br>" +
            "(A) '平静的' 意味着不显示或感觉紧张、愤怒或其他强烈情感的。" +
            "<br><br>" +
            "(B) '漠不关心的' 意味着没有特别的兴趣或同情的。" +
            "<br><br>" +
            "(D) '愉快的' 意味着觉得有趣或有娱乐性的。"
    },
    {
        id: 8,
        question: "He was __________ of handling the pressure, always staying calm and composed in stressful situations.",
        chinese_question: "他能够 __________ 地处理压力，总是在压力大的情况下保持冷静和沉着。",
        answers: [
            { option: "A", answer: "incapable", chinese_answer: "无法", chinese_romanization: "wúfǎ" },
            { option: "B", answer: "overwhelmed", chinese_answer: "压垮", chinese_romanization: "yākuǎ" },
            { option: "C", answer: "frantic", chinese_answer: "疯狂", chinese_romanization: "fēngkuáng" },
            { option: "D", answer: "capable", chinese_answer: "胜任", chinese_romanization: "shèngrèn" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'capable' figuratively means having the ability to deal effectively with a situation." +
            "<br><br>" +
            "(A) 'incapable' means unable to do or achieve (something)." +
            "<br><br>" +
            "(B) 'overwhelmed' means buried or drowned beneath a huge mass of something, especially water." +
            "<br><br>" +
            "(C) 'frantic' means wild or distraught with fear, anxiety, or other emotion.",
        chinese_explanation: "(D) '胜任' 在比喻意义上意味着有能力有效地处理情况。" +
            "<br><br>" +
            "(A) '无法' 意味着无法做或实现（某事）。" +
            "<br><br>" +
            "(B) '压垮' 意味着被大量某物（特别是水）掩埋或淹没。" +
            "<br><br>" +
            "(C) '疯狂' 意味着因恐惧、焦虑或其他情绪而狂乱或心烦意乱。"
    },
    {
        id: 9,
        question: "Her explanation was __________ to clarify the confusion, leaving many questions unanswered.",
        chinese_question: "她的解释 __________，无法澄清困惑，留下了许多未解的问题。",
        answers: [
            { option: "A", answer: "clear", chinese_answer: "清晰的", chinese_romanization: "qīngxī de" },
            { option: "B", answer: "detailed", chinese_answer: "详细的", chinese_romanization: "xiángxì de" },
            { option: "C", answer: "insufficient", chinese_answer: "不足的", chinese_romanization: "bùzú de" },
            { option: "D", answer: "thorough", chinese_answer: "彻底的", chinese_romanization: "chèdǐ de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'insufficient' figuratively means not adequate for the purpose; lacking in substance or detail." +
            "<br><br>" +
            "(A) 'clear' means easy to perceive, understand, or interpret." +
            "<br><br>" +
            "(B) 'detailed' means having many details or facts; showing attention to detail." +
            "<br><br>" +
            "(D) 'thorough' means complete with regard to every detail; not superficial or partial.",
        chinese_explanation: "(C) '不足的' 在比喻意义上意味着不适当的；缺乏实质或细节的。" +
            "<br><br>" +
            "(A) '清晰的' 意味着容易感知、理解或解释的。" +
            "<br><br>" +
            "(B) '详细的' 意味着有很多细节或事实；显示出对细节的关注。" +
            "<br><br>" +
            "(D) '彻底的' 意味着每个细节都很完整；不是表面的或部分的。"
    },
    {
        id: 10,
        question: "Her promise to always be there for him felt __________, as life often led them in different directions.",
        chinese_question: "她永远在他身边的承诺感觉是 __________ 的，因为生活常常将他们引向不同的方向。",
        answers: [
            { option: "A", answer: "reliable", chinese_answer: "可靠的", chinese_romanization: "kěkào de" },
            { option: "B", answer: "unenforceable", chinese_answer: "无法保证的", chinese_romanization: "wúfǎ bǎozhèng de" },
            { option: "C", answer: "certain", chinese_answer: "确定的", chinese_romanization: "quèdìng de" },
            { option: "D", answer: "dependable", chinese_answer: "可信赖的", chinese_romanization: "kě xìn lài de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'unenforceable' figuratively means not able to be upheld or guaranteed due to circumstances." +
            "<br><br>" +
            "(A) 'reliable' means consistently good in quality or performance; able to be trusted." +
            "<br><br>" +
            "(C) 'certain' means known for sure; established beyond doubt." +
            "<br><br>" +
            "(D) 'dependable' means trustworthy and reliable.",
        chinese_explanation: "(B) '无法保证的' 在比喻意义上意味着由于情况不能被维持或保证的。" +
            "<br><br>" +
            "(A) '可靠的' 意味着在质量或性能上一贯良好的；值得信赖的。" +
            "<br><br>" +
            "(C) '确定的' 意味着确定无疑的；毫无疑问的。" +
            "<br><br>" +
            "(D) '可信赖的' 意味着值得信任和可靠的。"
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
