// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The internet troll left __________ comments on the celebrity's social media posts, hoping to stir up controversy.",
        chinese_question: "网络喷子在名人的社交媒体帖子上留下了 __________ 评论，希望引起争议。",
        answers: [
            { option: "A", answer: "complimentary", chinese_answer: "赞美的", chinese_romanization: "zànměi de" },
            { option: "B", answer: "neutral", chinese_answer: "中立的", chinese_romanization: "zhōnglì de" },
            { option: "C", answer: "supportive", chinese_answer: "支持的", chinese_romanization: "zhīchí de" },
            { option: "D", answer: "scurrilous", chinese_answer: "恶意诽谤的", chinese_romanization: "è yì fěibàng de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'scurrilous' means making or spreading scandalous claims about someone with the intention of damaging their reputation." +
            "<br><br>" +
            "(A) 'complimentary' means expressing a compliment; praising or approving." +
            "<br><br>" +
            "(B) 'neutral' means not supporting or helping either side in a conflict or disagreement." +
            "<br><br>" +
            "(C) 'supportive' means providing encouragement or emotional help.",
        chinese_explanation: "(D) '恶意诽谤的' 意味着散布关于某人的丑闻性言论，意图破坏他们的名誉。" +
            "<br><br>" +
            "(A) '赞美的' 意味着表达赞美；赞扬或批准。" +
            "<br><br>" +
            "(B) '中立的' 意味着在冲突或分歧中不支持或帮助任何一方。" +
            "<br><br>" +
            "(C) '支持的' 意味着提供鼓励或情感帮助的。"
    },
    {
        id: 2,
        question: "Her __________ attention to detail ensured that every aspect of the event was perfect, from the decorations to the seating arrangements.",
        chinese_question: "她对细节的 __________ 注意确保了活动的每一个方面都很完美，从装饰到座位安排。",
        answers: [
            { option: "A", answer: "careless", chinese_answer: "粗心的", chinese_romanization: "cūxīn de" },
            { option: "B", answer: "negligent", chinese_answer: "疏忽的", chinese_romanization: "shūhū de" },
            { option: "C", answer: "indifferent", chinese_answer: "冷漠的", chinese_romanization: "lěngmò de" },
            { option: "D", answer: "punctilious", chinese_answer: "一丝不苟的", chinese_romanization: "yīsī bùgǒu de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'punctilious' means showing great attention to detail or correct behavior." +
            "<br><br>" +
            "(A) 'careless' means not giving sufficient attention or thought to avoiding harm or errors." +
            "<br><br>" +
            "(B) 'negligent' means failing to take proper care in doing something." +
            "<br><br>" +
            "(C) 'indifferent' means having no particular interest or sympathy; unconcerned.",
        chinese_explanation: "(D) '一丝不苟的' 意味着对细节或正确行为表现出极大的关注。" +
            "<br><br>" +
            "(A) '粗心的' 意味着没有给予足够的注意或思考以避免伤害或错误。" +
            "<br><br>" +
            "(B) '疏忽的' 意味着未能适当照顾某事。" +
            "<br><br>" +
            "(C) '冷漠的' 意味着没有特别的兴趣或同情；不关心的。"
    },
    {
        id: 3,
        question: "Her __________ handling of the crisis earned her praise from both colleagues and superiors.",
        chinese_question: "她__________地处理危机，赢得了同事和上司的赞赏。",
        answers: [
            { option: "A", answer: "unskilled", chinese_answer: "无技能的", chinese_romanization: "wú jìnéng de" },
            { option: "B", answer: "proficient", chinese_answer: "熟练的", chinese_romanization: "shúliàn de" },
            { option: "C", answer: "inept", chinese_answer: "笨拙的", chinese_romanization: "bènzhuō de" },
            { option: "D", answer: "clumsy", chinese_answer: "笨拙的", chinese_romanization: "bènzhuō de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'proficient' means competent or skilled in doing or using something. Figuratively, it can mean highly capable or adept in a particular situation." +
            "<br><br>" +
            "(A) 'unskilled' means not having or showing the skills necessary to do something well." +
            "<br><br>" +
            "(C) 'inept' means having or showing no skill; clumsy." +
            "<br><br>" +
            "(D) 'clumsy' means awkward in movement or in handling things.",
        chinese_explanation: "(B) '熟练的'一词意味着在做某事或使用某物方面有能力或熟练的。比喻地，它可以表示在特定情况下高度胜任或熟练。" +
            "<br><br>" +
            "(A) '无技能的' 意味着没有或未显示必要技能去做好某事。" +
            "<br><br>" +
            "(C) '笨拙的' 意味着没有技能；笨拙的。" +
            "<br><br>" +
            "(D) '笨拙的' 意味着在动作或处理事情时笨拙的。"
    },
    {
        id: 4,
        question: "His __________ decision to quit his job shocked everyone, as he had never mentioned any dissatisfaction.",
        chinese_question: "他 __________ 辞职的决定让每个人都感到震惊，因为他从未提到任何不满。",
        answers: [
            { option: "A", answer: "planned", chinese_answer: "计划", chinese_romanization: "jìhuà" },
            { option: "B", answer: "thought-out", chinese_answer: "深思熟虑", chinese_romanization: "shēnsī shúlǜ" },
            { option: "C", answer: "abrupt", chinese_answer: "突然", chinese_romanization: "tūrán" },
            { option: "D", answer: "anticipated", chinese_answer: "预期", chinese_romanization: "yùqī" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'abrupt' means sudden and unexpected." +
            "<br><br>" +
            "(A) 'planned' means decided on and arranged in advance." +
            "<br><br>" +
            "(B) 'thought-out' means carefully considered and planned." +
            "<br><br>" +
            "(D) 'anticipated' means expected or predicted.",
        chinese_explanation: "(C) '突然' 意味着突然和意外。" +
            "<br><br>" +
            "(A) '计划' 意味着事先决定和安排的。" +
            "<br><br>" +
            "(B) '深思熟虑' 意味着经过仔细考虑和计划的。" +
            "<br><br>" +
            "(D) '预期' 意味着预期或预测的。"
    },
    {
        id: 5,
        question: "Her __________ behavior made it difficult to predict her next move, keeping everyone on edge.",
        chinese_question: "她 __________ 的行为使得很难预测她的下一个动作，让每个人都感到紧张。",
        answers: [
            { option: "A", answer: "consistent", chinese_answer: "一致", chinese_romanization: "yīzhì" },
            { option: "B", answer: "reliable", chinese_answer: "可靠", chinese_romanization: "kěkào" },
            { option: "C", answer: "capricious", chinese_answer: "反复无常", chinese_romanization: "fǎnfù wúcháng" },
            { option: "D", answer: "steady", chinese_answer: "稳定", chinese_romanization: "wěndìng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'capricious' means given to sudden and unaccountable changes of mood or behavior." +
            "<br><br>" +
            "(A) 'consistent' means acting or done in the same way over time." +
            "<br><br>" +
            "(B) 'reliable' means consistently good in quality or performance; able to be trusted." +
            "<br><br>" +
            "(D) 'steady' means firmly fixed, supported, or balanced; not shaking or moving.",
        chinese_explanation: "(C) '反复无常' 一词意味着情绪或行为突然和无法解释的变化。" +
            "<br><br>" +
            "(A) '一致' 意味着随着时间的推移以相同的方式行事或完成。" +
            "<br><br>" +
            "(B) '可靠' 意味着质量或表现始终如一；能够被信任的。" +
            "<br><br>" +
            "(D) '稳定' 意味着牢固地固定、支撑或平衡；不摇晃或移动。"
    },
    {
        id: 6,
        question: "She dived __________ into the new project, eager to get started without planning.",
        chinese_question: "她 __________ 投入到新项目中，急于开始而没有计划。",
        answers: [
            { option: "A", answer: "headlong", chinese_answer: "贸然", chinese_romanization: "màorán" },
            { option: "B", answer: "carefully", chinese_answer: "小心", chinese_romanization: "xiǎoxīn" },
            { option: "C", answer: "thoughtfully", chinese_answer: "深思熟虑", chinese_romanization: "shēnsī shúlǜ" },
            { option: "D", answer: "slowly", chinese_answer: "慢慢地", chinese_romanization: "màn màn de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'headlong' metaphorically means in a rush; with reckless haste." +
            "<br><br>" +
            "(B) 'carefully' means in a way that deliberately avoids harm or errors." +
            "<br><br>" +
            "(C) 'thoughtfully' means with careful consideration or attention." +
            "<br><br>" +
            "(D) 'slowly' means at a slow speed; not quickly.",
        chinese_explanation: "(A) '贸然' 比喻急于行动；鲁莽地。" +
            "<br><br>" +
            "(B) '小心' 意味着以避免伤害或错误的方式。" +
            "<br><br>" +
            "(C) '深思熟虑' 意味着经过仔细考虑或注意。" +
            "<br><br>" +
            "(D) '慢慢地' 意味着以缓慢的速度；不快。"
    },
    {
        id: 7,
        question: "The economy has been __________, showing little growth in recent months.",
        chinese_question: "经济一直__________，最近几个月几乎没有增长。",
        answers: [
            { option: "A", answer: "energetic", chinese_answer: "精力充沛的", chinese_romanization: "jīnglì chōngpèi de" },
            { option: "B", answer: "lively", chinese_answer: "活泼的", chinese_romanization: "huópō de" },
            { option: "C", answer: "sluggish", chinese_answer: "迟缓的", chinese_romanization: "chíhuǎn de" },
            { option: "D", answer: "active", chinese_answer: "活跃的", chinese_romanization: "huóyuè de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'sluggish' means slow-moving or inactive. Figuratively, it can mean showing little activity or growth." +
            "<br><br>" +
            "(A) 'energetic' means showing or involving great activity or vitality." +
            "<br><br>" +
            "(B) 'lively' means full of life and energy; active and outgoing." +
            "<br><br>" +
            "(D) 'active' means engaging or ready to engage in physically energetic pursuits.",
        chinese_explanation: "(C) '迟缓的'一词意味着缓慢移动或不活跃。比喻地，它可以表示显示出很少活动或增长。" +
            "<br><br>" +
            "(A) '精力充沛的' 意味着表现出或涉及大量活动或活力的。" +
            "<br><br>" +
            "(B) '活泼的' 意味着充满活力和精力；积极和外向的。" +
            "<br><br>" +
            "(D) '活跃的' 意味着参与或准备参与体力充沛的活动。"
    },
    {
        id: 8,
        question: "Her success can be attributed to __________ factors, including hard work and perseverance.",
        chinese_question: "她的成功可以归因于 __________ 因素，包括努力工作和毅力。",
        answers: [
            { option: "A", answer: "numerous", chinese_answer: "许多的", chinese_romanization: "xǔduō de" },
            { option: "B", answer: "single", chinese_answer: "单一的", chinese_romanization: "dānyī de" },
            { option: "C", answer: "singular", chinese_answer: "非凡的", chinese_romanization: "fēifán de" },
            { option: "D", answer: "isolated", chinese_answer: "孤立的", chinese_romanization: "gūlì de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'numerous' metaphorically means many and varied." +
            "<br><br>" +
            "(B) 'single' means only one; not one of several." +
            "<br><br>" +
            "(C) 'singular' means exceptionally good or great; remarkable." +
            "<br><br>" +
            "(D) 'isolated' means far away from other places, buildings, or people; remote.",
        chinese_explanation: "(A) '许多的' 比喻多种多样的。" +
            "<br><br>" +
            "(B) '单一的' 意味着只有一个的；不是多个中的一个。" +
            "<br><br>" +
            "(C) '非凡的' 意味着异常好的或伟大的；显著的。" +
            "<br><br>" +
            "(D) '孤立的' 意味着远离其他地方、建筑物或人的；偏远的。"
    },
    {
        id: 9,
        question: "Her performance was __________, captivating the audience entirely.",
        chinese_question: "她的表演 __________，完全吸引了观众。",
        answers: [
            { option: "A", answer: "sublime", chinese_answer: "崇高的", chinese_romanization: "chónggāo de" },
            { option: "B", answer: "mediocre", chinese_answer: "平庸的", chinese_romanization: "píngyōng de" },
            { option: "C", answer: "subpar", chinese_answer: "不及格的", chinese_romanization: "bù jí gé de" },
            { option: "D", answer: "inferior", chinese_answer: "低劣的", chinese_romanization: "dīliè de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'sublime' means of such excellence as to inspire great admiration or awe." +
            "<br><br>" +
            "(B) 'mediocre' means of only average quality; not very good." +
            "<br><br>" +
            "(C) 'subpar' means below an average level." +
            "<br><br>" +
            "(D) 'inferior' means lower in rank, status, or quality.",
        chinese_explanation: "(A) '崇高的' 意味着如此卓越，以至于引发极大的钦佩或敬畏。" +
            "<br><br>" +
            "(B) '平庸的' 意味着质量平平；不太好的。" +
            "<br><br>" +
            "(C) '不及格的' 意味着低于平均水平的。" +
            "<br><br>" +
            "(D) '低劣的' 意味着等级、地位或质量较低的。"
    },
    {
        id: 10,
        question: "She felt __________ by the constant pressure to succeed.",
        chinese_question: "她感到 __________ 于不断的成功压力。",
        answers: [
            { option: "A", answer: "suffocated", chinese_answer: "窒息", chinese_romanization: "zhìxī" },
            { option: "B", answer: "motivated", chinese_answer: "激励", chinese_romanization: "jīlì" },
            { option: "C", answer: "inspired", chinese_answer: "启发", chinese_romanization: "qǐfā" },
            { option: "D", answer: "liberated", chinese_answer: "解放", chinese_romanization: "jiěfàng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'suffocated' metaphorically means to feel stifled or oppressed." + 
            "<br><br>" + 
            "(B) 'motivated' means provided with a reason to act in a certain way." + 
            "<br><br>" + 
            "(C) 'inspired' means filled with the urge or ability to do or feel something, especially to do something creative." + 
            "<br><br>" + 
            "(D) 'liberated' means freed from imprisonment, slavery, or enemy occupation.",
        chinese_explanation: "(A) '窒息' 比喻感到窒息或压迫。" + 
            "<br><br>" + 
            "(B) '激励' 意味着有理由以某种方式行事。" + 
            "<br><br>" + 
            "(C) '启发' 意味着充满了做某事的冲动或能力，特别是做一些创造性的事情。" + 
            "<br><br>" + 
            "(D) '解放' 意味着从监禁、奴役或敌占中解放。"
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
