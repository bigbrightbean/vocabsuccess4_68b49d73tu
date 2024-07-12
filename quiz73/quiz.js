// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "His quick thinking and decisive actions were the __________ that saved the project from failure.",
        chinese_question: "他的快速思维和果断行动是挽救项目失败的 __________。",
        answers: [
            { option: "A", answer: "hindrance", chinese_answer: "阻碍", chinese_romanization: "zǔ'ài" },
            { option: "B", answer: "burden", chinese_answer: "负担", chinese_romanization: "fùdān" },
            { option: "C", answer: "obstacle", chinese_answer: "障碍", chinese_romanization: "zhàng'ài" },
            { option: "D", answer: "catalyst", chinese_answer: "催化剂", chinese_romanization: "cuīhuàjì" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'catalyst' means something or someone that quickly causes change or action." +
            "<br><br>" +
            "(A) 'hindrance' means something that makes it difficult for something to happen or be done." +
            "<br><br>" +
            "(B) 'burden' means something heavy or difficult that you have to carry or deal with." +
            "<br><br>" +
            "(C) 'obstacle' means something that makes it difficult to move forward or make progress.",
        chinese_explanation: "(D) '催化剂' 意味着快速引起变化或行动的事物或人。" +
            "<br><br>" +
            "(A) '阻碍' 意味着使某事发生或完成变得困难的东西。" +
            "<br><br>" +
            "(B) '负担' 意味着你必须承受或处理的沉重或困难的东西。" +
            "<br><br>" +
            "(C) '障碍' 意味着使前进或取得进展变得困难的东西。"
    },
    {
        id: 2,
        question: "To fully understand her actions, you need to see them in the __________ of her upbringing.",
        chinese_question: "要完全理解她的行为，你需要在她成长的 __________ 中看待它们。",
        answers: [
            { option: "A", answer: "context", chinese_answer: "背景", chinese_romanization: "bèijǐng" },
            { option: "B", answer: "isolation", chinese_answer: "隔离", chinese_romanization: "gélí" },
            { option: "C", answer: "summary", chinese_answer: "摘要", chinese_romanization: "zhāiyào" },
            { option: "D", answer: "fragment", chinese_answer: "片段", chinese_romanization: "piànduàn" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'context' metaphorically means the circumstances or background that help explain a situation." +
            "<br><br>" +
            "(B) 'isolation' means the process or fact of isolating or being isolated." +
            "<br><br>" +
            "(C) 'summary' means a brief statement or account of the main points." +
            "<br><br>" +
            "(D) 'fragment' means a small part broken off or separated from something.",
        chinese_explanation: "(A) '背景' 比喻解释某情况的环境或背景。" +
            "<br><br>" +
            "(B) '隔离' 意味着隔离或被隔离的过程或事实。" +
            "<br><br>" +
            "(C) '摘要' 意味着主要观点的简要陈述或描述。" +
            "<br><br>" +
            "(D) '片段' 意味着某物分离出来的一小部分。"
    },
    {
        id: 3,
        question: "Her kindness was a __________ of hope for the struggling community.",
        chinese_question: "她的善良是为挣扎中的社区带来希望的 __________。",
        answers: [
            { option: "A", answer: "beacon", chinese_answer: "灯塔", chinese_romanization: "dēngtǎ" },
            { option: "B", answer: "burden", chinese_answer: "负担", chinese_romanization: "fùdān" },
            { option: "C", answer: "dilemma", chinese_answer: "困境", chinese_romanization: "kùnjìng" },
            { option: "D", answer: "distraction", chinese_answer: "干扰", chinese_romanization: "gānrǎo" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'beacon' metaphorically means a source of inspiration or guidance." +
            "<br><br>" +
            "(B) 'burden' means a load, typically a heavy one." +
            "<br><br>" +
            "(C) 'dilemma' means a situation in which a difficult choice has to be made between two or more alternatives, especially equally undesirable ones." +
            "<br><br>" +
            "(D) 'distraction' means a thing that prevents someone from giving full attention to something else.",
        chinese_explanation: "(A) '灯塔' 比喻灵感或指导的来源。" +
            "<br><br>" +
            "(B) '负担' 意味着负载，通常是沉重的负担。" +
            "<br><br>" +
            "(C) '困境' 意味着必须在两个或更多替代方案之间做出困难选择的情况，尤其是同样不理想的选择。" +
            "<br><br>" +
            "(D) '干扰' 意味着阻止某人全神贯注于其他事情的事物。"
    },
    {
        id: 4,
        question: "He was known as a __________, able to handle a wide range of tasks from administrative work to technical repairs.",
        chinese_question: "他被称为一个 __________，能够处理从行政工作到技术维修的各种任务。",
        answers: [
            { option: "A", answer: "specialist", chinese_answer: "专家", chinese_romanization: "zhuānjiā" },
            { option: "B", answer: "novice", chinese_answer: "新手", chinese_romanization: "xīnshǒu" },
            { option: "C", answer: "factotum", chinese_answer: "杂工", chinese_romanization: "zágōng" },
            { option: "D", answer: "amateur", chinese_answer: "业余爱好者", chinese_romanization: "yèyú àihào zhě" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'factotum' means an employee who does all kinds of work." +
            "<br><br>" +
            "(A) 'specialist' means a person who concentrates primarily on a particular subject or activity; a person highly skilled in a specific and restricted field." +
            "<br><br>" +
            "(B) 'novice' means a person new to or inexperienced in a field or situation." +
            "<br><br>" +
            "(D) 'amateur' means a person who engages in a pursuit, especially a sport, on an unpaid rather than a professional basis.",
        chinese_explanation: "(C) '杂工' 一词意味着做各种工作的雇员。" +
            "<br><br>" +
            "(A) '专家' 意味着主要专注于特定学科或活动的人；在特定和有限领域技能高超的人。" +
            "<br><br>" +
            "(B) '新手' 意味着在某一领域或情况中新来的或没有经验的人。" +
            "<br><br>" +
            "(D) '业余爱好者' 意味着从事某一追求，尤其是体育活动，而不是专业基础上的人。"
    },
    {
        id: 5,
        question: "The swamp was filled with a __________ of foul-smelling gases, making it difficult to breathe.",
        chinese_question: "沼泽中充满了难闻的 __________，使人难以呼吸。",
        answers: [
            { option: "A", answer: "fragrance", chinese_answer: "芳香", chinese_romanization: "fāngxiāng" },
            { option: "B", answer: "aroma", chinese_answer: "香味", chinese_romanization: "xiāngwèi" },
            { option: "C", answer: "freshness", chinese_answer: "新鲜", chinese_romanization: "xīnxiān" },
            { option: "D", answer: "miasma", chinese_answer: "瘴气", chinese_romanization: "zhàngqì" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'miasma' means a highly unpleasant or unhealthy smell or vapor." +
            "<br><br>" +
            "(A) 'fragrance' means a pleasant, sweet smell." +
            "<br><br>" +
            "(B) 'aroma' means a distinctive, typically pleasant smell." +
            "<br><br>" +
            "(C) 'freshness' means the quality of being fresh, new, or vigorous.",
        chinese_explanation: "(D) '瘴气' 一词意味着非常不愉快或不健康的气味或蒸汽。" +
            "<br><br>" +
            "(A) '芳香' 意味着一种愉快的甜味。" +
            "<br><br>" +
            "(B) '香味' 意味着一种独特的、通常是愉快的气味。" +
            "<br><br>" +
            "(C) '新鲜' 意味着新鲜、新颖或有活力的品质。"
    },
    {
        id: 6,
        question: "The new __________ to the law aimed to address the loopholes and ensure fair treatment for all citizens.",
        chinese_question: "新法律 __________ 旨在解决漏洞，确保所有公民得到公平对待。",
        answers: [
            { option: "A", answer: "repeal", chinese_answer: "废除", chinese_romanization: "fèichú" },
            { option: "B", answer: "amendment", chinese_answer: "修正", chinese_romanization: "xiūzhèng" },
            { option: "C", answer: "annulment", chinese_answer: "废止", chinese_romanization: "fèizhǐ" },
            { option: "D", answer: "enforcement", chinese_answer: "执行", chinese_romanization: "zhíxíng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'amendment' means a minor change or addition designed to improve a text, piece of legislation, etc." +
            "<br><br>" +
            "(A) 'repeal' means the action of revoking or annulling a law or congressional act." +
            "<br><br>" +
            "(C) 'annulment' means the act of declaring invalid (an official agreement, decision, or result)." +
            "<br><br>" +
            "(D) 'enforcement' means the act of compelling observance of or compliance with a law, rule, or obligation.",
        chinese_explanation: "(B) '修正' 一词意味着旨在改进文本、立法等的细微更改或添加。" +
            "<br><br>" +
            "(A) '废除' 意味着撤销或废止法律或国会法案的行为。" +
            "<br><br>" +
            "(C) '废止' 意味着宣布（官方协议、决定或结果）无效的行为。" +
            "<br><br>" +
            "(D) '执行' 意味着强制遵守或遵守法律、规则或义务的行为。"
    },
    {
        id: 7,
        question: "The judge called for an __________ of the court session until further notice due to unforeseen circumstances.",
        chinese_question: "由于不可预见的情况，法官宣布 __________ 法庭会议，直至另行通知。",
        answers: [
            { option: "A", answer: "commencement", chinese_answer: "开始", chinese_romanization: "kāishǐ" },
            { option: "B", answer: "adjournment", chinese_answer: "休会", chinese_romanization: "xiūhuì" },
            { option: "C", answer: "continuation", chinese_answer: "继续", chinese_romanization: "jìxù" },
            { option: "D", answer: "extension", chinese_answer: "延长", chinese_romanization: "yáncháng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'adjournment' means a suspension of proceedings to another time or place." +
            "<br><br>" +
            "(A) 'commencement' means a beginning or start." +
            "<br><br>" +
            "(C) 'continuation' means the action of carrying something on over a period of time or the process of being carried on." +
            "<br><br>" +
            "(D) 'extension' means a part that is added to something to enlarge or prolong it; a continuation.",
        chinese_explanation: "(B) '休会' 一词意味着将会议暂停到另一个时间或地点。" +
            "<br><br>" +
            "(A) '开始' 意味着开始或开始。" +
            "<br><br>" +
            "(C) '继续' 意味着在一段时间内继续进行某事的行为或继续进行的过程。" +
            "<br><br>" +
            "(D) '延长' 意味着添加到某物以扩大或延长它的部分；继续。"
    },
    {
        id: 8,
        question: "The city's noise pollution __________ was evident after the implementation of stricter regulations on vehicle horns and industrial noise.",
        chinese_question: "在对车辆喇叭和工业噪音实施更严格的规定后，城市的噪音污染 __________ 显而易见。",
        answers: [
            { option: "A", answer: "increase", chinese_answer: "增加", chinese_romanization: "zēngjiā" },
            { option: "B", answer: "abatement", chinese_answer: "减少", chinese_romanization: "jiǎnshǎo" },
            { option: "C", answer: "amplification", chinese_answer: "放大", chinese_romanization: "fàngdà" },
            { option: "D", answer: "escalation", chinese_answer: "升级", chinese_romanization: "shēngjí" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'abatement' means the reduction or removal of a nuisance." +
            "<br><br>" +
            "(A) 'increase' means an instance of growing or making greater." +
            "<br><br>" +
            "(C) 'amplification' means the action of amplifying something." +
            "<br><br>" +
            "(D) 'escalation' means a rapid increase; a rise.",
        chinese_explanation: "(B) '减少' 一词意味着减少或消除骚扰的行为。" +
            "<br><br>" +
            "(A) '增加' 意味着增长或增加的实例。" +
            "<br><br>" +
            "(C) '放大' 意味着放大某物的行为。" +
            "<br><br>" +
            "(D) '升级' 意味着快速增加；上升。"
    },
    {
        id: 9,
        question: "The city was a bustling __________ of different cultures, languages, and traditions.",
        chinese_question: "这个城市是一个不同文化、语言和传统的繁忙 __________。",
        answers: [
            { option: "A", answer: "isolation", chinese_answer: "隔离", chinese_romanization: "gélí" },
            { option: "B", answer: "uniformity", chinese_answer: "统一", chinese_romanization: "tǒngyī" },
            { option: "C", answer: "conglomeration", chinese_answer: "聚合", chinese_romanization: "jùhé" },
            { option: "D", answer: "separation", chinese_answer: "分离", chinese_romanization: "fēnlí" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'conglomeration' means a number of different things, parts or items that are grouped together; collection." +
            "<br><br>" +
            "(A) 'isolation' means the process or fact of isolating or being isolated." +
            "<br><br>" +
            "(B) 'uniformity' means the quality or state of being uniform." +
            "<br><br>" +
            "(D) 'separation' means the action or state of moving or being moved apart.",
        chinese_explanation: "(C) '聚合' 一词意味着不同事物、部分或项目的集合；集合。" +
            "<br><br>" +
            "(A) '隔离' 意味着隔离或被隔离的过程或事实。" +
            "<br><br>" +
            "(B) '统一' 意味着统一的质量或状态。" +
            "<br><br>" +
            "(D) '分离' 意味着移动或被移动的状态或行为。"
    },
    {
        id: 10,
        question: "Maintaining her __________, she refused to compromise her values for a quick profit.",
        chinese_question: "保持她的 __________，她拒绝为快速获利而妥协她的价值观。",
        answers: [
            { option: "A", answer: "greed", chinese_answer: "贪婪", chinese_romanization: "tānlán" },
            { option: "B", answer: "integrity", chinese_answer: "正直", chinese_romanization: "zhèngzhí" },
            { option: "C", answer: "wealth", chinese_answer: "财富", chinese_romanization: "cáifù" },
            { option: "D", answer: "ambition", chinese_answer: "雄心", chinese_romanization: "xióngxīn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'integrity' figuratively means steadfast adherence to a strict moral or ethical code." +
            "<br><br>" +
            "(A) 'greed' means intense and selfish desire for something, especially wealth, power, or food." +
            "<br><br>" +
            "(C) 'wealth' means an abundance of valuable possessions or money." +
            "<br><br>" +
            "(D) 'ambition' means a strong desire to do or to achieve something, typically requiring determination and hard work.",
        chinese_explanation: "(B) '正直' 在比喻意义上意味着坚定遵守严格的道德或伦理准则。" +
            "<br><br>" +
            "(A) '贪婪' 意味着对某物的强烈和自私的渴望，尤其是财富、权力或食物。" +
            "<br><br>" +
            "(C) '财富' 意味着丰富的有价值的财产或金钱。" +
            "<br><br>" +
            "(D) '雄心' 意味着对做某事或实现某事的强烈渴望，通常需要决心和努力。"
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
