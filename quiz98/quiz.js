// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The new policy __________ a lot of controversy among the citizens, leading to heated debates.",
        chinese_question: "新政策 __________ 了市民之间的许多争议，导致了激烈的辩论。",
        answers: [
                { option: "A", answer: "resolved", chinese_answer: "解决", chinese_romanization: "jiějué" },
                { option: "B", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "C", answer: "eliminated", chinese_answer: "消除", chinese_romanization: "xiāochú" },
                { option: "D", answer: "engendered", chinese_answer: "引起", chinese_romanization: "yǐnqǐ" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'engendered' means to cause or give rise to (a feeling, situation, or condition)." +
            "<br><br>" +
            "(A) 'resolved' means to settle or find a solution to (a problem, dispute, or contentious matter)." +
            "<br><br>" +
            "(B) 'ignored' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(C) 'eliminated' means to completely remove or get rid of (something).",
        chinese_explanation: "(D) '引起' 意味着引起或导致（情感、情境或状况）。" +
            "<br><br>" +
            "(A) '解决' 意味着解决或找到（问题、争议或争议事项）的解决方案。" +
            "<br><br>" +
            "(B) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(C) '消除' 意味着完全去除或摆脱（某物）。"
    },
    {
        id: 2,
        question: "The new schedule was adjusted to __________ the needs of all employees.",
        chinese_question: "新时间表已调整，以__________所有员工的需求。",
        answers: [
            { option: "A", answer: "reject", chinese_answer: "拒绝", chinese_romanization: "jùjué" },
            { option: "B", answer: "accommodate", chinese_answer: "适应", chinese_romanization: "shìyìng" },
            { option: "C", answer: "refuse", chinese_answer: "拒绝", chinese_romanization: "jùjué" },
            { option: "D", answer: "limit", chinese_answer: "限制", chinese_romanization: "xiànzhì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'accommodate' means provide lodging or sufficient space for. Figuratively, it can mean adjusting or adapting to meet someone's needs." + 
            "<br><br>" + 
            "(A) 'reject' means dismiss as inadequate, unacceptable, or faulty." + 
            "<br><br>" + 
            "(C) 'refuse' means indicate or show that one is not willing to do something." + 
            "<br><br>" + 
            "(D) 'limit' means set or serve as a limit to.",
        chinese_explanation: "(B) '适应'一词意味着提供住宿或足够的空间。比喻地，它可以表示调整或适应以满足某人的需求。" + 
            "<br><br>" + 
            "(A) '拒绝' 意味着视为不合格、不接受或有缺陷的。" + 
            "<br><br>" + 
            "(C) '拒绝' 意味着表明或显示不愿意做某事。" + 
            "<br><br>" + 
            "(D) '限制' 意味着设定或作为限制。"
    },
    {
        id: 3,
        question: "After the argument, she decided to __________ from the group for a while to cool down.",
        chinese_question: "争论过后，她决定从小组 __________ 一段时间以冷静下来。",
        answers: [
            { option: "A", answer: "withdraw", chinese_answer: "撤退", chinese_romanization: "chètuì" },
            { option: "B", answer: "join", chinese_answer: "加入", chinese_romanization: "jiārù" },
            { option: "C", answer: "engage", chinese_answer: "参与", chinese_romanization: "cānyù" },
            { option: "D", answer: "participate", chinese_answer: "参加", chinese_romanization: "cānjiā" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'withdraw' metaphorically means to remove oneself from a situation or activity." + 
            "<br><br>" + 
            "(B) 'join' means link or connect." + 
            "<br><br>" + 
            "(C) 'engage' means participate or become involved in." + 
            "<br><br>" + 
            "(D) 'participate' means take part in an activity or event.",
        chinese_explanation: "(A) '撤退' 比喻从某种情况或活动中移除自己。" + 
            "<br><br>" + 
            "(B) '加入' 意味着链接或连接。" + 
            "<br><br>" + 
            "(C) '参与' 意味着参与或加入。" + 
            "<br><br>" + 
            "(D) '参加' 意味着参加某项活动或事件。"
    },
    {
        id: 4,
        question: "He tried to __________ his emotions into words but struggled to express himself.",
        chinese_question: "他试图将他的情感 __________ 成语言，但很难表达自己。",
        answers: [
            { option: "A", answer: "suppress", chinese_answer: "压抑", chinese_romanization: "yāyì" },
            { option: "B", answer: "magnify", chinese_answer: "放大", chinese_romanization: "fàngdà" },
            { option: "C", answer: "simplify", chinese_answer: "简化", chinese_romanization: "jiǎnhuà" },
            { option: "D", answer: "translate", chinese_answer: "翻译", chinese_romanization: "fānyì" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'translate' metaphorically means to express or render into another form or medium." + 
            "<br><br>" + 
            "(A) 'suppress' means forcibly put an end to." + 
            "<br><br>" + 
            "(B) 'magnify' means make (something) appear larger than it is, especially with a lens or microscope." + 
            "<br><br>" + 
            "(C) 'simplify' means make (something) simpler or easier to do or understand.",
        chinese_explanation: "(D) '翻译' 比喻表达或转换成另一种形式或媒介。" + 
            "<br><br>" + 
            "(A) '压抑' 意味着强制结束。" + 
            "<br><br>" + 
            "(B) '放大' 意味着使（某物）看起来比实际更大，特别是使用透镜或显微镜。" + 
            "<br><br>" + 
            "(C) '简化' 意味着使（某物）更简单或更容易做或理解。"
    },
    {
        id: 5,
        question: "Before traveling to Africa, you should __________ yourself against diseases like yellow fever.",
        chinese_question: "在去非洲旅行之前，你应该__________自己以预防像黄热病这样的疾病。",
        answers: [
            { option: "A", answer: "wash", chinese_answer: "洗", chinese_romanization: "xǐ" },
            { option: "B", answer: "inoculate", chinese_answer: "接种", chinese_romanization: "jiēzhǒng" },
            { option: "C", answer: "medicate", chinese_answer: "用药", chinese_romanization: "yòng yào" },
            { option: "D", answer: "exercise", chinese_answer: "锻炼", chinese_romanization: "duànliàn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'inoculate' means to give someone a vaccine to protect them from a disease." +
            "<br><br>" +
            "(A) 'wash' means to clean with water and soap." +
            "<br><br>" +
            "(C) 'medicate' means to give medicine to someone." +
            "<br><br>" +
            "(D) 'exercise' means to do physical activities to stay healthy.",
        chinese_explanation: "(B) '接种' 意思是给某人注射疫苗以保护他们免受疾病。" +
            "<br><br>" +
            "(A) '洗' 意思是用水和肥皂清洗。" +
            "<br><br>" +
            "(C) '用药' 意思是给某人服药。" +
            "<br><br>" +
            "(D) '锻炼' 意思是进行体育活动以保持健康。"
    },
    {
        id: 6,
        question: "The fear of failure can __________ a person's progress, preventing them from trying new things.",
        chinese_question: "对失败的恐惧会__________一个人的进步，阻止他们尝试新事物。",
        answers: [
            { option: "A", answer: "boost", chinese_answer: "促进", chinese_romanization: "cùjìn" },
            { option: "B", answer: "motivate", chinese_answer: "激励", chinese_romanization: "jīlì" },
            { option: "C", answer: "encourage", chinese_answer: "鼓励", chinese_romanization: "gǔlì" },
            { option: "D", answer: "fetter", chinese_answer: "束缚", chinese_romanization: "shùfù" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'fetter' means to restrict or hold back someone or something." +
            "<br><br>" +
            "(A) 'boost' means to increase or improve something." +
            "<br><br>" +
            "(B) 'motivate' means to give someone a reason to do something." +
            "<br><br>" +
            "(C) 'encourage' means to give support or hope to someone.",
        chinese_explanation: "(D) '束缚' 意思是限制或阻碍某人或某事。" +
            "<br><br>" +
            "(A) '促进' 意思是增加或改善某事。" +
            "<br><br>" +
            "(B) '激励' 意思是给某人一个做某事的理由。" +
            "<br><br>" +
            "(C) '鼓励' 意思是给予某人支持或希望。"
    },
    {
        id: 7,
        question: "After the news broke, the office was __________ with phone calls from concerned citizens.",
        chinese_question: "消息传出后，办公室被关心的市民的电话 __________。",
        answers: [
            { option: "A", answer: "inundated", chinese_answer: "淹没", chinese_romanization: "yānmò" },
            { option: "B", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "C", answer: "deserted", chinese_answer: "荒废", chinese_romanization: "huāngfèi" },
            { option: "D", answer: "neglected", chinese_answer: "忽略", chinese_romanization: "hūlüè" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'inundated' metaphorically means overwhelmed with a large amount or number of something." +
            "<br><br>" +
            "(B) 'ignored' means refused to take notice of or acknowledge; disregarded intentionally." +
            "<br><br>" +
            "(C) 'deserted' means abandoned; left empty." +
            "<br><br>" +
            "(D) 'neglected' means failed to care for properly.",
        chinese_explanation: "(A) '淹没' 比喻被大量或许多某物所淹没。" +
            "<br><br>" +
            "(B) '忽视' 意味着拒绝注意或承认；故意忽视。" +
            "<br><br>" +
            "(C) '荒废' 意味着被遗弃；空置。" +
            "<br><br>" +
            "(D) '忽略' 意味着未能妥善照顾。"
    },
    {
        id: 8,
        question: "Her anxiety __________ as the deadline approached.",
        chinese_question: "随着截止日期的临近，她的焦虑__________。",
        answers: [
            { option: "A", answer: "weakened", chinese_answer: "减弱", chinese_romanization: "jiǎnruò" },
            { option: "B", answer: "diminished", chinese_answer: "减少", chinese_romanization: "jiǎnshǎo" },
            { option: "C", answer: "intensified", chinese_answer: "加剧", chinese_romanization: "jiājù" },
            { option: "D", answer: "subsided", chinese_answer: "减退", chinese_romanization: "jiǎntuì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'intensified' means to become or make more intense. Figuratively, it can mean to increase in degree or strength." +
            "<br><br>" +
            "(A) 'weakened' means make or become weaker in power, resolve, or physical strength." +
            "<br><br>" +
            "(B) 'diminished' means make or become less." +
            "<br><br>" +
            "(D) 'subsided' means become less intense, violent, or severe.",
        chinese_explanation: "(C) '加剧'一词意味着变得或使变得更加激烈。比喻地，它可以表示程度或强度增加。" +
            "<br><br>" +
            "(A) '减弱' 意味着使或变得在力量、决心或体力上减弱。" +
            "<br><br>" +
            "(B) '减少' 意味着使或变得较少。" +
            "<br><br>" +
            "(D) '减退' 意味着变得不那么激烈、暴力或严重。"
    },
    {
        id: 9,
        question: "She didn't openly accuse him, but she did __________ that he had been dishonest.",
        chinese_question: "她没有公开指责他，但她确实__________他不诚实。",
        answers: [
            { option: "A", answer: "declare", chinese_answer: "宣布", chinese_romanization: "xuānbù" },
            { option: "B", answer: "announce", chinese_answer: "发表", chinese_romanization: "fābiǎo" },
            { option: "C", answer: "insinuate", chinese_answer: "暗示", chinese_romanization: "ànshì" },
            { option: "D", answer: "confess", chinese_answer: "承认", chinese_romanization: "chéngrèn" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'insinuate' means to suggest or hint (something bad or reprehensible) in an indirect and unpleasant way. Figuratively, it can mean to imply or suggest something subtly." +
            "<br><br>" +
            "(A) 'declare' means say something in a solemn and emphatic manner." +
            "<br><br>" +
            "(B) 'announce' means make a formal public statement about a fact, occurrence, or intention." +
            "<br><br>" +
            "(D) 'confess' means admit or state that one has committed a crime or is at fault in some way.",
        chinese_explanation: "(C) '暗示'一词意味着以间接和不愉快的方式暗示（某些坏的或不应受谴责的事情）。比喻地，它可以表示含蓄地或巧妙地暗示某事。" +
            "<br><br>" +
            "(A) '宣布' 意味着以庄重和强调的方式说某事。" +
            "<br><br>" +
            "(B) '发表' 意味着就事实、事件或意图作正式公开声明。" +
            "<br><br>" +
            "(D) '承认' 意味着承认或声明自己犯了罪或某种方式有过错。"
    },
    {
        id: 10,
        question: "A lack of proper funding will __________ the progress of the new project.",
        chinese_question: "缺乏适当的资金将__________新项目的进展。",
        answers: [
            { option: "A", answer: "facilitate", chinese_answer: "促进", chinese_romanization: "cùjìn" },
            { option: "B", answer: "help", chinese_answer: "帮助", chinese_romanization: "bāngzhù" },
            { option: "C", answer: "impede", chinese_answer: "阻碍", chinese_romanization: "zǔ'ài" },
            { option: "D", answer: "expedite", chinese_answer: "加速", chinese_romanization: "jiāsù" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'impede' means to delay or prevent (someone or something) by obstructing them; hinder. Figuratively, it can mean to slow down or obstruct progress." +
            "<br><br>" +
            "(A) 'facilitate' means to make (an action or process) easy or easier." +
            "<br><br>" +
            "(B) 'help' means to make it easier for (someone) to do something by offering one's services or resources." +
            "<br><br>" +
            "(D) 'expedite' means to make (an action or process) happen sooner or be accomplished more quickly.",
        chinese_explanation: "(C) '阻碍'一词意味着通过阻挡延迟或阻止（某人或某事）；妨碍。比喻地，它可以表示减缓或阻碍进展。" +
            "<br><br>" +
            "(A) '促进' 意味着使（一个行动或过程）变得容易或更容易。" +
            "<br><br>" +
            "(B) '帮助' 意味着通过提供服务或资源使（某人）更容易做某事。" +
            "<br><br>" +
            "(D) '加速' 意味着使（一个行动或过程）更快发生或更快完成。"
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
