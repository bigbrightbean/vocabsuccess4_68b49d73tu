// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "Her __________ decision to invest all her savings in a single stock led to significant financial loss.",
        chinese_question: "她 __________ 地决定将所有积蓄投资于单一股票，导致了重大的财务损失。",
        answers: [
            { option: "A", answer: "cautious", chinese_answer: "谨慎", chinese_romanization: "jǐnshèn" },
            { option: "B", answer: "impetuous", chinese_answer: "冲动", chinese_romanization: "chōngdòng" },
            { option: "C", answer: "prudent", chinese_answer: "明智", chinese_romanization: "míngzhì" },
            { option: "D", answer: "deliberate", chinese_answer: "故意", chinese_romanization: "gùyì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'impetuous' means acting or done quickly and without thought or care." +
            "<br><br>" +
            "(A) 'cautious' means careful to avoid potential problems or dangers." +
            "<br><br>" +
            "(C) 'prudent' means acting with or showing care and thought for the future." +
            "<br><br>" +
            "(D) 'deliberate' means done consciously and intentionally.",
        chinese_explanation: "(B) '冲动' 一词意味着快速且不经思考或关心地行动或完成。" +
            "<br><br>" +
            "(A) '谨慎' 意味着小心避免潜在的问题或危险。" +
            "<br><br>" +
            "(C) '明智' 意味着为未来采取或表现出关心和考虑。" +
            "<br><br>" +
            "(D) '故意' 意味着有意识地和故意地完成。"
    },
    {
        id: 2,
        question: "The company's __________ approach during the economic downturn helped them maintain financial stability.",
        chinese_question: "公司在经济衰退期间的 __________ 方法帮助他们维持了财务稳定。",
        answers: [
            { option: "A", answer: "extravagant", chinese_answer: "奢侈", chinese_romanization: "shēchǐ" },
            { option: "B", answer: "reckless", chinese_answer: "鲁莽", chinese_romanization: "lǔmǎng" },
            { option: "C", answer: "frugal", chinese_answer: "节俭", chinese_romanization: "jiéjiǎn" },
            { option: "D", answer: "wasteful", chinese_answer: "浪费", chinese_romanization: "làngfèi" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'frugal' means sparing or economical with regard to money or food." +
            "<br><br>" +
            "(A) 'extravagant' means lacking restraint in spending money or using resources." +
            "<br><br>" +
            "(B) 'reckless' means without thinking or caring about the consequences of an action." +
            "<br><br>" +
            "(D) 'wasteful' means using or expending something of value carelessly, extravagantly, or to no purpose.",
        chinese_explanation: "(C) '节俭' 一词意味着在金钱或食物方面节省或经济。" +
            "<br><br>" +
            "(A) '奢侈' 意味着在花钱或使用资源方面缺乏节制。" +
            "<br><br>" +
            "(B) '鲁莽' 意味着不考虑行动的后果。" +
            "<br><br>" +
            "(D) '浪费' 意味着不小心、奢侈或无目的地使用或花费有价值的东西。"
    },
    {
        id: 3,
        question: "The restaurant is highly __________, known for its excellent service and delicious food.",
        chinese_question: "这家餐厅享有很高的 __________，以其出色的服务和美味的食物而闻名。",
        answers: [
            { option: "A", answer: "disreputable", chinese_answer: "不光彩", chinese_romanization: "bù guāngcǎi" },
            { option: "B", answer: "notorious", chinese_answer: "臭名昭著", chinese_romanization: "chòumíng zhāozhù" },
            { option: "C", answer: "reputable", chinese_answer: "声誉良好", chinese_romanization: "shēngyù liánghǎo" },
            { option: "D", answer: "infamous", chinese_answer: "声名狼藉", chinese_romanization: "shēngmíng lángjí" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'reputable' means having a good reputation." +
            "<br><br>" +
            "(A) 'disreputable' means not considered to be respectable in character or appearance." +
            "<br><br>" +
            "(B) 'notorious' means famous or well known, typically for some bad quality or deed." +
            "<br><br>" +
            "(D) 'infamous' means well known for some bad quality or deed.",
        chinese_explanation: "(C) '声誉良好' 一词意味着有良好声誉。" +
            "<br><br>" +
            "(A) '不光彩' 意味着被认为在品格或外表上不受尊重。" +
            "<br><br>" +
            "(B) '臭名昭著' 意味着以某些不良品质或行为而闻名或众所周知。" +
            "<br><br>" +
            "(D) '声名狼藉' 意味着以某些不良品质或行为而闻名。"
    },
    {
        id: 4,
        question: "She remained __________ in her beliefs, never wavering despite the challenges she faced.",
        chinese_question: "她在信仰上保持 __________，尽管面临挑战，但从未动摇。",
        answers: [
            { option: "A", answer: "uncertain", chinese_answer: "不确定", chinese_romanization: "bù quèdìng" },
            { option: "B", answer: "indecisive", chinese_answer: "优柔寡断", chinese_romanization: "yōuróu guǎduàn" },
            { option: "C", answer: "flexible", chinese_answer: "灵活", chinese_romanization: "línghuó" },
            { option: "D", answer: "steadfast", chinese_answer: "坚定", chinese_romanization: "jiāndìng" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'steadfast' means resolutely or dutifully firm and unwavering." +
            "<br><br>" +
            "(A) 'uncertain' means not able to be relied on; not known or definite." +
            "<br><br>" +
            "(B) 'indecisive' means not settling an issue." +
            "<br><br>" +
            "(C) 'flexible' means capable of bending easily without breaking.",
        chinese_explanation: "(D) '坚定' 一词意味着坚定不移的或尽职尽责的。" +
            "<br><br>" +
            "(A) '不确定' 意味着不能依赖的；未知或不确定的。" +
            "<br><br>" +
            "(B) '优柔寡断' 意味着没有解决问题。" +
            "<br><br>" +
            "(C) '灵活' 意味着能够轻松弯曲而不破裂。"
    },
    {
        id: 5,
        question: "Her aim was __________, hitting the target every time without fail.",
        chinese_question: "她的目标 __________，每次都毫无偏差地命中目标。",
        answers: [
            { option: "A", answer: "flawed", chinese_answer: "有缺陷", chinese_romanization: "yǒu quēxiàn" },
            { option: "B", answer: "inconsistent", chinese_answer: "不一致", chinese_romanization: "bù yīzhì" },
            { option: "C", answer: "unerring", chinese_answer: "准确无误", chinese_romanization: "zhǔnquè wúwù" },
            { option: "D", answer: "erratic", chinese_answer: "不稳定", chinese_romanization: "bù wěndìng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'unerring' means always right or accurate." +
            "<br><br>" +
            "(A) 'flawed' means having imperfections." +
            "<br><br>" +
            "(B) 'inconsistent' means not staying the same throughout." +
            "<br><br>" +
            "(D) 'erratic' means not even or regular in pattern or movement; unpredictable.",
        chinese_explanation: "(C) '准确无误' 一词意味着总是正确或准确的。" +
            "<br><br>" +
            "(A) '有缺陷' 意味着有瑕疵。" +
            "<br><br>" +
            "(B) '不一致' 意味着始终如一。" +
            "<br><br>" +
            "(D) '不稳定' 意味着图案或运动不均匀或规则；不可预测。"
    },
    {
        id: 6,
        question: "His __________ manner towards his elderly neighbor included helping with groceries and checking in daily to see if she needed anything.",
        chinese_question: "他对年迈邻居的 __________ 态度包括帮忙买菜和每天查看她是否需要什么。",
        answers: [
            { option: "A", answer: "rude", chinese_answer: "粗鲁的", chinese_romanization: "cūlǔ de" },
            { option: "B", answer: "careless", chinese_answer: "粗心的", chinese_romanization: "cūxīn de" },
            { option: "C", answer: "disrespectful", chinese_answer: "无礼的", chinese_romanization: "wúlǐ de" },
            { option: "D", answer: "solicitous", chinese_answer: "关切的", chinese_romanization: "guānqiè de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'solicitous' means showing interest or concern." +
            "<br><br>" +
            "(A) 'rude' means offensively impolite or ill-mannered." +
            "<br><br>" +
            "(B) 'careless' means not giving sufficient attention or thought to avoiding harm or errors." +
            "<br><br>" +
            "(C) 'disrespectful' means showing a lack of respect or courtesy.",
        chinese_explanation: "(D) '关切的' 意味着表现出兴趣或关心。" +
            "<br><br>" +
            "(A) '粗鲁的' 意味着冒犯性的不礼貌或没有礼貌的。" +
            "<br><br>" +
            "(B) '粗心的' 意味着没有给予足够的注意或思考以避免伤害或错误。" +
            "<br><br>" +
            "(C) '无礼的' 意味着表现出缺乏尊重或礼貌的。"
    },
    {
        id: 7,
        question: "Through __________ effort and dedication, she completed the project ahead of schedule.",
        chinese_question: "通过 __________ 的努力和奉献，她提前完成了项目。",
        answers: [
            { option: "A", answer: "lazy", chinese_answer: "懒惰", chinese_romanization: "lǎnduò" },
            { option: "B", answer: "careless", chinese_answer: "粗心", chinese_romanization: "cūxīn" },
            { option: "C", answer: "assiduous", chinese_answer: "勤奋", chinese_romanization: "qínfèn" },
            { option: "D", answer: "neglectful", chinese_answer: "忽视", chinese_romanization: "hūshì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'assiduous' means showing great care and perseverance." +
            "<br><br>" +
            "(A) 'lazy' means unwilling to work or use energy." +
            "<br><br>" +
            "(B) 'careless' means not giving sufficient attention or thought to avoiding harm or errors." +
            "<br><br>" +
            "(D) 'neglectful' means failing to give proper care or attention.",
        chinese_explanation: "(C) '勤奋' 一词意味着表现出极大的关心和毅力。" +
            "<br><br>" +
            "(A) '懒惰' 意味着不愿工作或使用能量。" +
            "<br><br>" +
            "(B) '粗心' 意味着没有给予足够的注意或思考以避免伤害或错误。" +
            "<br><br>" +
            "(D) '忽视' 意味着未给予适当的关心或注意。"
    },
    {
        id: 8,
        question: "Despite the harsh conditions, the __________ plant managed to survive and thrive in the desert.",
        chinese_question: "尽管条件恶劣，这种 __________ 的植物仍设法在沙漠中生存和繁荣。",
        answers: [
            { option: "A", answer: "fragile", chinese_answer: "脆弱", chinese_romanization: "cuìruò" },
            { option: "B", answer: "resilient", chinese_answer: "有韧性", chinese_romanization: "yǒu rènxìng" },
            { option: "C", answer: "delicate", chinese_answer: "精致", chinese_romanization: "jīngzhì" },
            { option: "D", answer: "weak", chinese_answer: "虚弱", chinese_romanization: "xūruò" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'resilient' means able to withstand or recover quickly from difficult conditions." +
            "<br><br>" +
            "(A) 'fragile' means easily broken or damaged." +
            "<br><br>" +
            "(C) 'delicate' means very fine in texture or structure; of intricate workmanship or quality." +
            "<br><br>" +
            "(D) 'weak' means lacking the power to perform physically demanding tasks; lacking physical strength and energy.",
        chinese_explanation: "(B) '有韧性' 一词意味着能够经受或迅速从困难条件中恢复。" +
            "<br><br>" +
            "(A) '脆弱' 意味着容易破碎或损坏。" +
            "<br><br>" +
            "(C) '精致' 意味着质地或结构非常精细；工艺精湛或质量上乘。" +
            "<br><br>" +
            "(D) '虚弱' 意味着缺乏执行体力任务的力量；缺乏体力和能量。"
    },
    {
        id: 9,
        question: "The presence of a smartphone in the medieval film was clearly __________, as it didn't belong to that time period.",
        chinese_question: "中世纪电影中出现的智能手机显然是 __________ 的，因为它不属于那个时代。",
        answers: [
            { option: "A", answer: "modern", chinese_answer: "现代", chinese_romanization: "xiàndài" },
            { option: "B", answer: "appropriate", chinese_answer: "适当", chinese_romanization: "shìdàng" },
            { option: "C", answer: "anachronistic", chinese_answer: "时代错误", chinese_romanization: "shídài cuòwù" },
            { option: "D", answer: "relevant", chinese_answer: "相关", chinese_romanization: "xiāngguān" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'anachronistic' means belonging to a period other than that being portrayed." +
            "<br><br>" +
            "(A) 'modern' means relating to the present or recent times." +
            "<br><br>" +
            "(B) 'appropriate' means suitable or proper in the circumstances." +
            "<br><br>" +
            "(D) 'relevant' means closely connected or appropriate to what is being done or considered.",
        chinese_explanation: "(C) '时代错误' 一词意味着属于所描绘时期之外的时期。" +
            "<br><br>" +
            "(A) '现代' 意味着与现在或最近的时期有关。" +
            "<br><br>" +
            "(B) '适当' 意味着在情况中是合适或适当的。" +
            "<br><br>" +
            "(D) '相关' 意味着与正在做的事情或考虑的事情密切相关或适当的。"
    },
    {
        id: 10,
        question: "The report was criticized for being __________, showing a clear preference for one side of the argument.",
        chinese_question: "报告因 __________ 而受到批评，明显偏袒一方。",
        answers: [
            { option: "A", answer: "unbiased", chinese_answer: "公正的", chinese_romanization: "gōngzhèng de" },
            { option: "B", answer: "objective", chinese_answer: "客观的", chinese_romanization: "kèguān de" },
            { option: "C", answer: "biased", chinese_answer: "偏见的", chinese_romanization: "piānjiàn de" },
            { option: "D", answer: "neutral", chinese_answer: "中立的", chinese_romanization: "zhōnglì de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'biased' means unfairly prejudiced for or against someone or something." +
            "<br><br>" +
            "(A) 'unbiased' means showing no prejudice for or against something; impartial." +
            "<br><br>" +
            "(B) 'objective' means not influenced by personal feelings or opinions in considering and representing facts." +
            "<br><br>" +
            "(D) 'neutral' means not supporting or helping either side in a conflict, disagreement, etc.; impartial.",
        chinese_explanation: "(C) '偏见的' 一词意味着对某人或某事不公平地有偏见。" +
            "<br><br>" +
            "(A) '公正的' 意味着对某事物没有偏见；公正的。" +
            "<br><br>" +
            "(B) '客观的' 意味着在考虑和表述事实时不受个人感情或意见影响。" +
            "<br><br>" +
            "(D) '中立的' 意味着不支持或帮助冲突、分歧等的任何一方；公正的。"
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
