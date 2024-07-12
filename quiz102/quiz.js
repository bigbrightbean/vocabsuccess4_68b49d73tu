// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "Over time, the boy began to __________ his younger brother for getting more attention from their parents, feeling increasingly bitter and left out.",
        chinese_question: "随着时间的推移，这个男孩开始__________他的弟弟，因为弟弟得到了父母更多的关注，他感到越来越苦涩和被冷落。",
        answers: [
            { option: "A", answer: "admire", chinese_answer: "钦佩", chinese_romanization: "qīnpèi" },
            { option: "B", answer: "envy", chinese_answer: "羡慕", chinese_romanization: "xiànmù" },
            { option: "C", answer: "help", chinese_answer: "帮助", chinese_romanization: "bāngzhù" },
            { option: "D", answer: "resent", chinese_answer: "怨恨", chinese_romanization: "yuànhèn" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'resent' means to feel bitter or angry about something. " +
            "<br><br>" +
            "(A) 'admire' means to look up to someone with respect or approval." +
            "<br><br>" +
            "(B) 'envy' means to wish you had what someone else has." +
            "<br><br>" +
            "(C) 'help' means to give assistance or support to someone。",
        chinese_explanation: "(D) '怨恨' 意思是对某事感到苦涩或愤怒。" +
            "<br><br>" +
            "(A) '钦佩' 意思是尊敬或赞赏某人。" +
            "<br><br>" +
            "(B) '羡慕' 意思是希望拥有别人拥有的东西。" +
            "<br><br>" +
            "(C) '帮助' 意思是给予某人帮助或支持。"
    },
    {
        id: 2,
        question: "His harsh __________ of her ideas made her hesitant to speak up again.",
        chinese_question: "他对她想法的严厉 __________ 让她不敢再发言。",
        answers: [
            { option: "A", answer: "rebuke", chinese_answer: "责备", chinese_romanization: "zébèi" },
            { option: "B", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" },
            { option: "C", answer: "encouragement", chinese_answer: "鼓励", chinese_romanization: "gǔlì" },
            { option: "D", answer: "acceptance", chinese_answer: "接受", chinese_romanization: "jiēshòu" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'rebuke' metaphorically means strong criticism or disapproval." +
            "<br><br>" +
            "(B) 'support' means bear all or part of the weight of; hold up." +
            "<br><br>" +
            "(C) 'encouragement' means the action of giving someone support, confidence, or hope." +
            "<br><br>" +
            "(D) 'acceptance' means the action of consenting to receive or undertake something offered.",
        chinese_explanation: "(A) '责备' 比喻强烈的批评或不赞成。" +
            "<br><br>" +
            "(B) '支持' 意味着承担全部或部分重量；支撑。" +
            "<br><br>" +
            "(C) '鼓励' 意味着给予某人支持、信心或希望的行为。" +
            "<br><br>" +
            "(D) '接受' 意味着同意接受或承担所提供的东西的行为。"
    },
    {
        id: 3,
        question: "The unresolved argument continued to __________ between them, affecting their friendship.",
        chinese_question: "未解决的争论继续在他们之间 __________，影响了他们的友谊。",
        answers: [
            { option: "A", answer: "rankle", chinese_answer: "激起怨恨", chinese_romanization: "jīqǐ yuànhèn" },
            { option: "B", answer: "mend", chinese_answer: "修复", chinese_romanization: "xiūfù" },
            { option: "C", answer: "enhance", chinese_answer: "增强", chinese_romanization: "zēngqiáng" },
            { option: "D", answer: "resolve", chinese_answer: "解决", chinese_romanization: "jiějué" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'rankle' metaphorically means to cause persistent irritation or resentment." +
            "<br><br>" +
            "(B) 'mend' means to repair something that is broken or damaged." +
            "<br><br>" +
            "(C) 'enhance' means to intensify, increase, or further improve the quality, value, or extent of." +
            "<br><br>" +
            "(D) 'resolve' means to settle or find a solution to (a problem, dispute, or contentious matter).",
        chinese_explanation: "(A) '激起怨恨' 比喻引起持续的烦恼或怨恨。" +
            "<br><br>" +
            "(B) '修复' 意味着修理破损或损坏的东西。" +
            "<br><br>" +
            "(C) '增强' 意味着加强、增加或进一步改善质量、价值或范围。" +
            "<br><br>" +
            "(D) '解决' 意味着解决或找到（问题、争端或争议事项）的解决方案。"
    },
    {
        id: 4,
        question: "The company was accused of __________ the environment for its own gain.",
        chinese_question: "该公司被指控为了自己的利益而__________环境。",
        answers: [
            { option: "A", answer: "protecting", chinese_answer: "保护", chinese_romanization: "bǎohù" },
            { option: "B", answer: "aiding", chinese_answer: "援助", chinese_romanization: "yuánzhù" },
            { option: "C", answer: "plundering", chinese_answer: "掠夺", chinese_romanization: "lüèduó" },
            { option: "D", answer: "gifting", chinese_answer: "赠予", chinese_romanization: "zèngyǔ" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'plundering' means to steal goods from (a place or person), typically using force and in a time of war or civil disorder. Figuratively, it can mean exploiting or taking advantage of something in a greedy or unfair way." +
            "<br><br>" +
            "(A) 'protecting' means the action of protecting someone or something." +
            "<br><br>" +
            "(B) 'aiding' means helping, typically of a practical nature." +
            "<br><br>" +
            "(D) 'gifting' means giving a thing willingly to someone without payment.",
        chinese_explanation: "(C) '掠夺' 一词意味着用武力从（某地或某人）偷窃物品，通常在战争或内乱期间。比喻地，它可以表示以贪婪或不公平的方式利用或占便宜。" +
            "<br><br>" +
            "(A) '保护' 意味着保护某人或某物的行为。" +
            "<br><br>" +
            "(B) '援助' 意味着通常是实际性质的帮助。" +
            "<br><br>" +
            "(D) '赠予' 意味着无偿自愿给予某人的东西。"
    },
    {
        id: 5,
        question: "He needed to __________ enough support to push the new policy through.",
        chinese_question: "他需要 __________ 足够的支持来推动新政策的通过。",
        answers: [
            { option: "A", answer: "muster", chinese_answer: "召集", chinese_romanization: "zhāojí" },
            { option: "B", answer: "disperse", chinese_answer: "分散", chinese_romanization: "fēnsàn" },
            { option: "C", answer: "dissolve", chinese_answer: "解散", chinese_romanization: "jiěsàn" },
            { option: "D", answer: "diminish", chinese_answer: "减少", chinese_romanization: "jiǎnshǎo" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'muster' metaphorically means to gather or summon up (a feeling, attitude, or response)." +
            "<br><br>" +
            "(B) 'disperse' means distribute or spread over a wide area." +
            "<br><br>" +
            "(C) 'dissolve' means close down or dismiss (an assembly or official body)." +
            "<br><br>" +
            "(D) 'diminish' means make or become less.",
        chinese_explanation: "(A) '召集' 比喻集合或召唤（情感、态度或反应）。" +
            "<br><br>" +
            "(B) '分散' 意味着在广泛区域内分布或传播。" +
            "<br><br>" +
            "(C) '解散' 意味着关闭或解散（一个集会或官方机构）。" +
            "<br><br>" +
            "(D) '减少' 意味着使或变得更少。"
    },
    {
        id: 6,
        question: "She tried to __________ the importance of her role in the project to avoid attention.",
        chinese_question: "她试图 __________ 她在项目中的角色的重要性以避免引起注意。",
        answers: [
            { option: "A", answer: "exaggerate", chinese_answer: "夸大", chinese_romanization: "kuādà" },
            { option: "B", answer: "inflate", chinese_answer: "膨胀", chinese_romanization: "péngzhàng" },
            { option: "C", answer: "minimize", chinese_answer: "淡化", chinese_romanization: "dànhuà" },
            { option: "D", answer: "emphasize", chinese_answer: "强调", chinese_romanization: "qiángdiào" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'minimize' metaphorically means to make (something) seem less important or significant." +
            "<br><br>" +
            "(A) 'exaggerate' means represent (something) as being larger, better, or worse than it really is." +
            "<br><br>" +
            "(B) 'inflate' means increase (something) by a large or excessive amount." +
            "<br><br>" +
            "(D) 'emphasize' means give special importance or prominence to (something) in speaking or writing.",
        chinese_explanation: "(C) '淡化' 比喻使（某物）看起来不那么重要或显著。" +
            "<br><br>" +
            "(A) '夸大' 意味着将（某物）描述得比实际更大、更好或更差。" +
            "<br><br>" +
            "(B) '膨胀' 意味着大量或过度地增加（某物）。" +
            "<br><br>" +
            "(D) '强调' 意味着在讲话或写作中特别重要或突出的（某物）。"
    },
    {
        id: 7,
        question: "After losing his job, he felt like he would __________ in despair without a purpose.",
        chinese_question: "失业后，他觉得如果没有目标，他会在绝望中 __________。",
        answers: [
            { option: "A", answer: "languish", chinese_answer: "衰落", chinese_romanization: "shuāiluò" },
            { option: "B", answer: "excel", chinese_answer: "杰出", chinese_romanization: "jiéchū" },
            { option: "C", answer: "succeed", chinese_answer: "成功", chinese_romanization: "chénggōng" },
            { option: "D", answer: "achieve", chinese_answer: "实现", chinese_romanization: "shíxiàn" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'languish' metaphorically means to suffer from being forced to remain in an unpleasant place or situation." +
            "<br><br>" +
            "(B) 'excel' means to be exceptionally good at or proficient in an activity or subject." +
            "<br><br>" +
            "(C) 'succeed' means to achieve the desired aim or result." +
            "<br><br>" +
            "(D) 'achieve' means to successfully bring about or reach (a desired objective, level, or result) by effort, skill, or courage.",
        chinese_explanation: "(A) '衰落' 比喻因被迫处于不愉快的地方或情况而遭受痛苦。" +
            "<br><br>" +
            "(B) '杰出' 意味着在某项活动或学科上非常优秀或熟练。" +
            "<br><br>" +
            "(C) '成功' 意味着实现预期的目标或结果。" +
            "<br><br>" +
            "(D) '实现' 意味着通过努力、技能或勇气成功实现或达到（预期的目标、水平或结果）。"
    },
    {
        id: 8,
        question: "The decision to close the company __________ over the employees like a dark cloud.",
        chinese_question: "公司关闭的决定像乌云一样 __________ 在员工头上。",
        answers: [
            { option: "A", answer: "vanished", chinese_answer: "消失", chinese_romanization: "xiāoshī" },
            { option: "B", answer: "settled", chinese_answer: "解决", chinese_romanization: "jiějué" },
            { option: "C", answer: "hovered", chinese_answer: "盘旋", chinese_romanization: "pánxuán" },
            { option: "D", answer: "dispersed", chinese_answer: "分散", chinese_romanization: "fēnsàn" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'hovered' metaphorically means to remain in an uncertain state." +
            "<br><br>" +
            "(A) 'vanished' means disappear suddenly and completely." +
            "<br><br>" +
            "(B) 'settled' means resolve or reach an agreement about (an argument or problem)." +
            "<br><br>" +
            "(D) 'dispersed' means distribute or spread over a wide area.",
        chinese_explanation: "(C) '盘旋' 比喻处于不确定状态。" +
            "<br><br>" +
            "(A) '消失' 意味着突然完全消失。" +
            "<br><br>" +
            "(B) '解决' 意味着解决或就（争论或问题）达成协议。" +
            "<br><br>" +
            "(D) '分散' 意味着分布或分布在广泛的区域。"
    },
    {
        id: 9,
        question: "The new laws will __________ small businesses, making it hard for them to grow and succeed.",
        chinese_question: "新法律会__________小型企业，使它们难以成长和成功。",
        answers: [
            { option: "A", answer: "help", chinese_answer: "帮助", chinese_romanization: "bāngzhù" },
            { option: "B", answer: "encourage", chinese_answer: "鼓励", chinese_romanization: "gǔlì" },
            { option: "C", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" },
            { option: "D", answer: "fetter", chinese_answer: "束缚", chinese_romanization: "shùfù" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'fetter' means to restrict or hold back someone or something." +
            "<br><br>" +
            "(A) 'help' means to make it easier for someone to do something." +
            "<br><br>" +
            "(B) 'encourage' means to give support or hope to someone." +
            "<br><br>" +
            "(C) 'support' means to give assistance or help to someone or something.",
        chinese_explanation: "(D) '束缚' 意思是限制或阻碍某人或某事。" +
            "<br><br>" +
            "(A) '帮助' 意思是使某人做某事更容易。" +
            "<br><br>" +
            "(B) '鼓励' 意思是给予某人支持或希望。" +
            "<br><br>" +
            "(C) '支持' 意思是给予某人或某事帮助或支持。"
    },
    {
        id: 10,
        question: "In the dark, she had to __________ for the light switch.",
        chinese_question: "在黑暗中，她不得不 __________ 找到电灯开关。",
        answers: [
            { option: "A", answer: "grope", chinese_answer: "摸索", chinese_romanization: "mōsuǒ" },
            { option: "B", answer: "see", chinese_answer: "看见", chinese_romanization: "kànjiàn" },
            { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "D", answer: "avoid", chinese_answer: "避免", chinese_romanization: "bìmiǎn" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'grope' means to feel about or search blindly or uncertainly with the hands." +
            "<br><br>" +
            "(B) 'see' means to perceive with the eyes." +
            "<br><br>" +
            "(C) 'ignore' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(D) 'avoid' means to keep away from or stop oneself from doing (something).",
        chinese_explanation: "(A) '摸索' 意味着用手盲目或不确定地摸索或寻找。" +
            "<br><br>" +
            "(B) '看见' 意味着用眼睛感知。" +
            "<br><br>" +
            "(C) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(D) '避免' 意味着远离或阻止自己做（某事）。"
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
