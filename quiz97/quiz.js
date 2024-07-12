// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The complex instructions served only to __________ him further.",
        chinese_question: "复杂的说明只会进一步__________他。",
        answers: [
            { option: "A", answer: "clarify", chinese_answer: "澄清", chinese_romanization: "chéngqīng" },
            { option: "B", answer: "bore", chinese_answer: "使厌烦", chinese_romanization: "shǐ yànfán" },
            { option: "C", answer: "mystify", chinese_answer: "迷惑", chinese_romanization: "míhuò" },
            { option: "D", answer: "explain", chinese_answer: "解释", chinese_romanization: "jiěshì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'mystify' means utterly bewilder or perplex (someone). Figuratively, it can mean to make someone feel confused or puzzled." + 
            "<br><br>" + 
            "(A) 'clarify' means make (a statement or situation) less confused and more comprehensible." + 
            "<br><br>" + 
            "(B) 'bore' means make (someone) feel weary and uninterested by tedious talk or dullness." + 
            "<br><br>" + 
            "(D) 'explain' means make (an idea, situation, or problem) clear to someone by describing it in more detail or revealing relevant facts or ideas.",
        chinese_explanation: "(C) '迷惑' 一词意味着完全使（某人）困惑或迷惑。比喻地，它可以表示使某人感到困惑或迷惑。" + 
            "<br><br>" + 
            "(A) '澄清' 意味着使（陈述或情况）不那么混乱，更易理解。" + 
            "<br><br>" + 
            "(B) '使厌烦' 意味着通过乏味的谈话或无聊使（某人）感到疲倦和无兴趣。" + 
            "<br><br>" + 
            "(D) '解释' 意味着通过更详细地描述或揭示相关事实或想法来使（想法、情况或问题）对某人清楚。"
    },
    {
        id: 2,
        question: "She managed to __________ the blame by pointing fingers at her colleagues.",
        chinese_question: "她通过指责同事来__________责任。",
        answers: [
            { option: "A", answer: "confront", chinese_answer: "面对", chinese_romanization: "miànduì" },
            { option: "B", answer: "evade", chinese_answer: "回避", chinese_romanization: "huíbì" },
            { option: "C", answer: "answer", chinese_answer: "回答", chinese_romanization: "huídá" },
            { option: "D", answer: "face", chinese_answer: "面对", chinese_romanization: "miànduì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'evade' means escape or avoid, especially by cleverness or trickery. Figuratively, it can mean avoiding responsibility or blame." + 
            "<br><br>" + 
            "(A) 'confront' means face up to and deal with (a problem or difficult situation)." + 
            "<br><br>" + 
            "(C) 'answer' means say or write something to deal with or as a reaction to someone or something." + 
            "<br><br>" + 
            "(D) 'face' means confront and deal with or accept a difficult or unpleasant task, fact, or situation.",
        chinese_explanation: "(B) '回避' 一词意味着逃避或避免，尤其是通过聪明或诡计。比喻地，它可以表示避免责任或责备。" + 
            "<br><br>" + 
            "(A) '面对' 意味着面对并处理（问题或困难情况）。" + 
            "<br><br>" + 
            "(C) '回答' 意味着说或写某事以应对或作为对某人或某事的反应。" + 
            "<br><br>" + 
            "(D) '面对' 意味着面对并处理或接受困难或不愉快的任务、事实或情况。"
    },
    {
        id: 3,
        question: "Spreading false information can __________ public trust in the media.",
        chinese_question: "传播虚假信息会__________公众对媒体的信任。",
        answers: [
            { option: "A", answer: "protect", chinese_answer: "保护", chinese_romanization: "bǎohù" },
            { option: "B", answer: "save", chinese_answer: "拯救", chinese_romanization: "zhěngjiù" },
            { option: "C", answer: "endanger", chinese_answer: "危及", chinese_romanization: "wēijí" },
            { option: "D", answer: "conserve", chinese_answer: "保存", chinese_romanization: "bǎocún" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'endanger' means put (someone or something) at risk or in danger. Figuratively, it can mean harming or compromising something intangible like trust." +
            "<br><br>" +
            "(A) 'protect' means keep safe from harm or injury." +
            "<br><br>" +
            "(B) 'save' means keep safe or rescue (someone or something) from harm or danger." +
            "<br><br>" +
            "(D) 'conserve' means protect (something, especially an environmentally or culturally important place or thing) from harm or destruction.",
        chinese_explanation: "(C) '危及'一词意味着将（某人或某物）置于风险或危险之中。比喻地，它可以表示伤害或妥协无形的东西，如信任。" +
            "<br><br>" +
            "(A) '保护' 意味着使免受伤害或损害。" +
            "<br><br>" +
            "(B) '拯救' 意味着使安全或拯救（某人或某物）免受伤害或危险。" +
            "<br><br>" +
            "(D) '保存' 意味着保护（某物，尤其是环境或文化重要的地方或事物）免受伤害或破坏。"
    },
    {
        id: 4,
        question: "He tried to __________ the success of his first novel with his second book.",
        chinese_question: "他试图通过第二本书 __________ 他第一本小说的成功。",
        answers: [
            { option: "A", answer: "duplicate", chinese_answer: "重复", chinese_romanization: "chóngfù" },
            { option: "B", answer: "undermine", chinese_answer: "削弱", chinese_romanization: "xuēruò" },
            { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "D", answer: "negate", chinese_answer: "否定", chinese_romanization: "fǒudìng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'duplicate' metaphorically means to repeat or reproduce." +
            "<br><br>" +
            "(B) 'undermine' means damage or weaken (someone or something), especially gradually or insidiously." +
            "<br><br>" +
            "(C) 'ignore' means refuse to take notice of or acknowledge; disregard intentionally." +
            "<br><br>" +
            "(D) 'negate' means nullify; make ineffective.",
        chinese_explanation: "(A) '重复' 比喻重复或再现。" +
            "<br><br>" +
            "(B) '削弱' 意味着逐渐或暗中损害或削弱（某人或某事）。" +
            "<br><br>" +
            "(C) '忽视' 意味着拒绝注意或承认；故意忽视。" +
            "<br><br>" +
            "(D) '否定' 意味着使无效；使无效。"
    },
    {
        id: 5,
        question: "The professor's lecture helped to __________ the complex topic, making it easier to understand.",
        chinese_question: "教授的讲座帮助__________了这个复杂的话题，使其更易理解。",
        answers: [
            { option: "A", answer: "darken", chinese_answer: "使变暗", chinese_romanization: "shǐ biàn àn" },
            { option: "B", answer: "illuminate", chinese_answer: "照亮", chinese_romanization: "zhàoliàng" },
            { option: "C", answer: "obscure", chinese_answer: "掩盖", chinese_romanization: "yǎngài" },
            { option: "D", answer: "conceal", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'illuminate' means light up. Figuratively, it can mean making something clear or easier to understand." +
            "<br><br>" +
            "(A) 'darken' means make or become dark or darker." +
            "<br><br>" +
            "(C) 'obscure' means keep from being seen; conceal." +
            "<br><br>" +
            "(D) 'conceal' means keep from sight; hide.",
        chinese_explanation: "(B) '照亮'一词意味着点亮。比喻地，它可以表示使某事物清晰或更易理解。" +
            "<br><br>" +
            "(A) '使变暗' 意味着使或变暗。" +
            "<br><br>" +
            "(C) '掩盖' 意味着不让被看到；隐藏。" +
            "<br><br>" +
            "(D) '隐藏' 意味着不让看到；隐藏。"
    },
    {
        id: 6,
        question: "Under stress, he tends to __________ to his old habits.",
        chinese_question: "在压力下，他往往会__________到旧习惯。",
        answers: [
            { option: "A", answer: "maintain", chinese_answer: "保持", chinese_romanization: "bǎochí" },
            { option: "B", answer: "revert", chinese_answer: "恢复", chinese_romanization: "huīfù" },
            { option: "C", answer: "alter", chinese_answer: "改变", chinese_romanization: "gǎibiàn" },
            { option: "D", answer: "continue", chinese_answer: "继续", chinese_romanization: "jìxù" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'revert' means return to (a previous state, practice, topic, etc.). Figuratively, it can mean going back to old behaviors or patterns." +
            "<br><br>" +
            "(A) 'maintain' means keep (something) at the same level or rate." +
            "<br><br>" +
            "(C) 'alter' means change or cause to change in character or composition." +
            "<br><br>" +
            "(D) 'continue' means persist in an activity or process.",
        chinese_explanation: "(B) '恢复'一词意味着返回到（以前的状态、做法、主题等）。比喻地，它可以表示回到旧的行为或模式。" +
            "<br><br>" +
            "(A) '保持' 意味着保持（某物）在同一水平或速度。" +
            "<br><br>" +
            "(C) '改变' 意味着改变或导致在特征或组成上的变化。" +
            "<br><br>" +
            "(D) '继续' 意味着在一项活动或过程中坚持。"
    },
    {
        id: 7,
        question: "To change the outcome, you must __________ your influence wisely.",
        chinese_question: "要改变结果，你必须明智地__________你的影响力。",
        answers: [
            { option: "A", answer: "rest", chinese_answer: "休息", chinese_romanization: "xiūxí" },
            { option: "B", answer: "avoid", chinese_answer: "避免", chinese_romanization: "bìmiǎn" },
            { option: "C", answer: "exert", chinese_answer: "施加", chinese_romanization: "shījiā" },
            { option: "D", answer: "withdraw", chinese_answer: "撤回", chinese_romanization: "chèhuí" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'exert' means apply or bring to bear (a force, influence, or quality). Figuratively, it can mean using one's power or influence effectively." + 
            "<br><br>" + 
            "(A) 'rest' means cease work or movement in order to relax, refresh oneself, or recover strength." + 
            "<br><br>" + 
            "(B) 'avoid' means keep away from or stop oneself from doing (something)." + 
            "<br><br>" + 
            "(D) 'withdraw' means remove or take away (something) from a particular place or position.",
        chinese_explanation: "(C) '施加' 一词意味着应用或施加（力量、影响或品质）。比喻地，它可以表示有效地使用自己的力量或影响。" + 
            "<br><br>" + 
            "(A) '休息' 意味着停止工作或运动以放松、恢复精神或恢复力量。" + 
            "<br><br>" + 
            "(B) '避免' 意味着避开或阻止自己做（某事）。" + 
            "<br><br>" + 
            "(D) '撤回' 意味着从特定地点或位置移除或取走（某物）。"
    },
    {
        id: 8,
        question: "In the world of fashion, trends often __________ for only a short period before changing.",
        chinese_question: "在时尚界，潮流通常只__________一段短暂的时间，然后就会改变。",
        answers: [
            { option: "A", answer: "reign", chinese_answer: "统治", chinese_romanization: "tǒngzhì" },
            { option: "B", answer: "break", chinese_answer: "休息", chinese_romanization: "xiūxi" },
            { option: "C", answer: "fall", chinese_answer: "下降", chinese_romanization: "xiàjiàng" },
            { option: "D", answer: "demise", chinese_answer: "死亡", chinese_romanization: "sǐwáng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'reign' means the period during which a sovereign rules. Figuratively, it can mean something being dominant or prevalent." +
            "<br><br>" +
            "(B) 'break' means a pause in work or during an activity or event." +
            "<br><br>" +
            "(C) 'fall' means move downward, typically rapidly and freely without control." +
            "<br><br>" +
            "(D) 'demise' means a person's death.",
        chinese_explanation: "(A) '统治'一词意味着君主统治的时期。比喻地，它可以表示某事物占主导地位或流行。" +
            "<br><br>" +
            "(B) '休息' 意味着在工作或活动期间的暂停。" +
            "<br><br>" +
            "(C) '下降' 意味着向下移动，通常是快速和自由地失去控制。" +
            "<br><br>" +
            "(D) '死亡' 意味着一个人的死亡。"
    },
    {
        id: 9,
        question: "The complicated instructions began to __________ the students trying to assemble the model.",
        chinese_question: "复杂的说明书开始__________试图组装模型的学生。",
        answers: [
            { option: "A", answer: "please", chinese_answer: "取悦", chinese_romanization: "qǔyuè" },
            { option: "B", answer: "exasperate", chinese_answer: "激怒", chinese_romanization: "jīnù" },
            { option: "C", answer: "delight", chinese_answer: "高兴", chinese_romanization: "gāoxìng" },
            { option: "D", answer: "calm", chinese_answer: "平静", chinese_romanization: "píngjìng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'exasperate' means irritate intensely; infuriate. Figuratively, it can mean causing frustration or annoyance due to complexity or difficulty." + 
            "<br><br>" + 
            "(A) 'please' means cause to feel happy and satisfied." + 
            "<br><br>" + 
            "(C) 'delight' means please (someone) greatly." + 
            "<br><br>" + 
            "(D) 'calm' means make (someone) tranquil and quiet; soothe.",
        chinese_explanation: "(B) '激怒' 一词意味着强烈地激怒；使恼怒。比喻地，它可以表示因复杂性或困难而导致的沮丧或烦恼。" + 
            "<br><br>" + 
            "(A) '取悦' 意味着使人感到高兴和满意。" + 
            "<br><br>" + 
            "(C) '高兴' 意味着使（某人）非常高兴。" + 
            "<br><br>" + 
            "(D) '平静' 意味着使（某人）安静和平静；安慰。"
    },
    {
        id: 10,
        question: "He tried to __________ his dignity despite the embarrassing situation.",
        chinese_question: "尽管处境尴尬，他还是试图 __________ 自己的尊严。",
        answers: [
            { option: "A", answer: "preserve", chinese_answer: "保持", chinese_romanization: "bǎochí" },
            { option: "B", answer: "lose", chinese_answer: "失去", chinese_romanization: "shīqù" },
            { option: "C", answer: "abandon", chinese_answer: "放弃", chinese_romanization: "fàngqì" },
            { option: "D", answer: "forget", chinese_answer: "忘记", chinese_romanization: "wàngjì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'preserve' metaphorically means to maintain something in its original or existing state." +
            "<br><br>" +
            "(B) 'lose' means be deprived of or cease to have or retain (something)." +
            "<br><br>" +
            "(C) 'abandon' means give up completely (a course of action, a practice, or a way of thinking)." +
            "<br><br>" +
            "(D) 'forget' means fail to remember.",
        chinese_explanation: "(A) '保持' 比喻保持某物在其原始或现有状态。" +
            "<br><br>" +
            "(B) '失去' 意味着被剥夺或不再拥有或保留（某物）。" +
            "<br><br>" +
            "(C) '放弃' 意味着完全放弃（某个行动、做法或思维方式）。" +
            "<br><br>" +
            "(D) '忘记' 意味着未能记住。"
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
