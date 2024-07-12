// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "Her heart was filled with __________ at the news of her promotion.",
        chinese_question: "听到升职的消息，她心中充满了 __________。",
        answers: [
            { option: "A", answer: "jubilation", chinese_answer: "欢腾", chinese_romanization: "huānténg" },
            { option: "B", answer: "dread", chinese_answer: "恐惧", chinese_romanization: "kǒngjù" },
            { option: "C", answer: "indifference", chinese_answer: "冷漠", chinese_romanization: "lěngmò" },
            { option: "D", answer: "doubt", chinese_answer: "怀疑", chinese_romanization: "huáiyí" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'jubilation' metaphorically means a feeling of great joy or triumph." +
            "<br><br>" +
            "(B) 'dread' means anticipate with great apprehension or fear." +
            "<br><br>" +
            "(C) 'indifference' means lack of interest, concern, or sympathy." +
            "<br><br>" +
            "(D) 'doubt' means a feeling of uncertainty or lack of conviction.",
        chinese_explanation: "(A) '欢腾' 比喻极大的快乐或胜利感。" +
            "<br><br>" +
            "(B) '恐惧' 意味着非常担心或害怕。" +
            "<br><br>" +
            "(C) '冷漠' 意味着缺乏兴趣、关心或同情。" +
            "<br><br>" +
            "(D) '怀疑' 意味着不确定或缺乏信心的感觉。"
    },
    {
        id: 2,
        question: "Her knowledge on the subject was so vast, it seemed to span an entire __________.",
        chinese_question: "她对该主题的知识如此广泛，似乎覆盖了整个__________。",
        answers: [
            { option: "A", answer: "island", chinese_answer: "岛屿", chinese_romanization: "dǎoyǔ" },
            { option: "B", answer: "city", chinese_answer: "城市", chinese_romanization: "chéngshì" },
            { option: "C", answer: "continent", chinese_answer: "大陆", chinese_romanization: "dàlù" },
            { option: "D", answer: "country", chinese_answer: "国家", chinese_romanization: "guójiā" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'continent' means any of the world's main continuous expanses of land. Figuratively, it can mean a large and wide-ranging amount or scope." + 
            "<br><br>" + 
            "(A) 'island' means a piece of land surrounded by water." + 
            "<br><br>" + 
            "(B) 'city' means a large town." + 
            "<br><br>" + 
            "(D) 'country' means a nation with its own government, occupying a particular territory.",
        chinese_explanation: "(C) '大陆' 一词意味着世界上主要的连续土地。比喻地，它可以表示大量和广泛的数量或范围。" + 
            "<br><br>" + 
            "(A) '岛屿' 意味着被水包围的一块土地。" + 
            "<br><br>" + 
            "(B) '城市' 意味着一个大城镇。" + 
            "<br><br>" + 
            "(D) '国家' 意味着拥有自己政府的国家，占据特定领土。"
    },
    {
        id: 3,
        question: "The financial scandal was considered an __________ by the community, causing outrage and a loss of trust in the institutions involved.",
        chinese_question: "金融丑闻被社区认为是一个 __________，引起了愤怒，并导致对相关机构失去信任。",
        answers: [
            { option: "A", answer: "atrocity", chinese_answer: "暴行", chinese_romanization: "bàoxíng" },
            { option: "B", answer: "achievement", chinese_answer: "成就", chinese_romanization: "chéngjiù" },
            { option: "C", answer: "advantage", chinese_answer: "优势", chinese_romanization: "yōushì" },
            { option: "D", answer: "amusement", chinese_answer: "娱乐", chinese_romanization: "yúlè" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'atrocity' metaphorically means an extremely wicked or cruel act." +
            "<br><br>" +
            "(B) 'achievement' means a thing done successfully with effort, skill, or courage." +
            "<br><br>" +
            "(C) 'advantage' means a condition or circumstance that puts one in a favorable or superior position." +
            "<br><br>" +
            "(D) 'amusement' means the state or experience of finding something funny.",
        chinese_explanation: "(A) '暴行' 比喻极其邪恶或残忍的行为。" +
            "<br><br>" +
            "(B) '成就' 意味着通过努力、技巧或勇气成功完成的事情。" +
            "<br><br>" +
            "(C) '优势' 意味着使某人处于有利或优越地位的条件或情况。" +
            "<br><br>" +
            "(D) '娱乐' 意味着找到某事有趣的状态或经历。"
    },
    {
        id: 4,
        question: "His hard work and determination finally bore __________ when he received the promotion.",
        chinese_question: "他的努力和决心最终取得了__________，他得到了升职。",
        answers: [
            { option: "A", answer: "causes", chinese_answer: "原因", chinese_romanization: "yuányīn" },
            { option: "B", answer: "results", chinese_answer: "结果", chinese_romanization: "jiéguǒ" },
            { option: "C", answer: "reasons", chinese_answer: "理由", chinese_romanization: "lǐyóu" },
            { option: "D", answer: "problems", chinese_answer: "问题", chinese_romanization: "wèntí" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'results' means a consequence, effect, or outcome of something." +
            "<br><br>" +
            "(A) 'causes' means a person or thing that gives rise to an action, phenomenon, or condition." +
            "<br><br>" +
            "(C) 'reasons' means a cause, explanation, or justification for an action or event." +
            "<br><br>" +
            "(D) 'problems' means a matter or situation regarded as unwelcome or harmful and needing to be dealt with and overcome.",
        chinese_explanation: "(B) '结果'一词意味着某事的结果、效果或结局。" +
            "<br><br>" +
            "(A) '原因' 意味着导致某种行动、现象或状况的人或事物。" +
            "<br><br>" +
            "(C) '理由' 意味着行为或事件的原因、解释或理由。" +
            "<br><br>" +
            "(D) '问题' 意味着被视为不受欢迎或有害并需要处理和克服的事态或情况。"
    },
    {
        id: 5,
        question: "The stock market can be a __________ of economic health, reflecting the confidence of investors.",
        chinese_question: "股票市场可以作为经济健康的 __________，反映投资者的信心。",
        answers: [
            { option: "A", answer: "thermometer", chinese_answer: "温度计", chinese_romanization: "wēndùjì" },
            { option: "B", answer: "anemometer", chinese_answer: "风速计", chinese_romanization: "fēngsùjì" },
            { option: "C", answer: "hygrometer", chinese_answer: "湿度计", chinese_romanization: "shīdùjì" },
            { option: "D", answer: "barometer", chinese_answer: "晴雨表", chinese_romanization: "qíngyǔbiǎo" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'barometer' metaphorically means something that reflects changes or indicates trends." +
            "<br><br>" +
            "(A) 'thermometer' measures temperature." +
            "<br><br>" +
            "(B) 'anemometer' measures wind speed." +
            "<br><br>" +
            "(C) 'hygrometer' measures humidity.",
        chinese_explanation: "(D) '晴雨表' 比喻反映变化或指示趋势的事物。" +
            "<br><br>" +
            "(A) '温度计' 测量温度。" +
            "<br><br>" +
            "(B) '风速计' 测量风速。" +
            "<br><br>" +
            "(C) '湿度计' 测量湿度。"
    },
    {
        id: 6,
        question: "Her __________ was a barrier to making genuine friends, as she often judged people by their social status.",
        chinese_question: "她的 __________ 是交真朋友的障碍，因为她经常根据社会地位来评判别人。",
        answers: [
            { option: "A", answer: "modesty", chinese_answer: "谦虚", chinese_romanization: "qiānxū" },
            { option: "B", answer: "snobbery", chinese_answer: "势利", chinese_romanization: "shìlì" },
            { option: "C", answer: "humility", chinese_answer: "谦逊", chinese_romanization: "qiānxùn" },
            { option: "D", answer: "acceptance", chinese_answer: "接受", chinese_romanization: "jiēshòu" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'snobbery' means the behavior or attitude of people who think they are better than others." +
            "<br><br>" +
            "(A) 'modesty' means the quality or state of being unassuming or moderate in the estimation of one's abilities." +
            "<br><br>" +
            "(C) 'humility' means a modest or low view of one's own importance; humbleness." +
            "<br><br>" +
            "(D) 'acceptance' means the action of consenting to receive or undertake something offered.",
        chinese_explanation: "(B) '势利' 在比喻意义上意味着认为自己比别人好的人们的行为或态度。" +
            "<br><br>" +
            "(A) '谦虚' 意味着对自己能力的谦逊或适度的估计。" +
            "<br><br>" +
            "(C) '谦逊' 意味着对自己重要性的谦逊或低看；谦卑。" +
            "<br><br>" +
            "(D) '接受' 意味着同意接受或承担所提供的某事的行为。"
    },
    {
        id: 7,
        question: "Their brief meeting turned into a full __________, filled with lively discussions and networking.",
        chinese_question: "他们的简短会议变成了一场充满活泼讨论和社交的 __________。",
        answers: [
            { option: "A", answer: "break", chinese_answer: "休息", chinese_romanization: "xiūxí" },
            { option: "B", answer: "luncheon", chinese_answer: "午餐会", chinese_romanization: "wǔcān huì" },
            { option: "C", answer: "pause", chinese_answer: "暂停", chinese_romanization: "zàntíng" },
            { option: "D", answer: "rest", chinese_answer: "休整", chinese_romanization: "xiūzhěng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'luncheon' figuratively means a meeting or gathering, often involving food and conversation." +
            "<br><br>" +
            "(A) 'break' means a short period of rest or relief." +
            "<br><br>" +
            "(C) 'pause' means a temporary stop in action or speech." +
            "<br><br>" +
            "(D) 'rest' means cease work or movement in order to relax, refresh oneself, or recover strength.",
        chinese_explanation: "(B) '午餐会' 在比喻意义上意味着一个会议或聚会，通常涉及食物和对话。" +
            "<br><br>" +
            "(A) '休息' 意味着短时间的休息或放松。" +
            "<br><br>" +
            "(C) '暂停' 意味着行动或讲话中的暂时停止。" +
            "<br><br>" +
            "(D) '休整' 意味着停止工作或运动以放松、恢复精力或恢复体力。"
    },
    {
        id: 8,
        question: "Under the dictator's rule, the country was subjected to extreme __________, with citizens having no personal freedoms.",
        chinese_question: "在独裁者的统治下，国家遭受了极端的 __________，公民没有任何个人自由。",
        answers: [
            { option: "A", answer: "democracy", chinese_answer: "民主", chinese_romanization: "mínzhǔ" },
            { option: "B", answer: "despotism", chinese_answer: "专制", chinese_romanization: "zhuānzhì" },
            { option: "C", answer: "liberty", chinese_answer: "自由", chinese_romanization: "zìyóu" },
            { option: "D", answer: "freedom", chinese_answer: "自由", chinese_romanization: "zìyóu" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'despotism' means the exercise of absolute power, especially in a cruel and oppressive way." +
            "<br><br>" +
            "(A) 'democracy' means a system of government by the whole population or all the eligible members of a state, typically through elected representatives." +
            "<br><br>" +
            "(C) 'liberty' means the state of being free within society from oppressive restrictions imposed by authority on one's way of life, behavior, or political views." +
            "<br><br>" +
            "(D) 'freedom' means the power or right to act, speak, or think as one wants without hindrance or restraint.",
        chinese_explanation: "(B) '专制' 一词意味着行使绝对权力，特别是以残酷和压迫的方式。" +
            "<br><br>" +
            "(A) '民主' 意味着由全体人口或国家所有合格成员通过选举代表进行的政府制度。" +
            "<br><br>" +
            "(C) '自由' 意味着在社会中不受当局对生活方式、行为或政治观点的压迫性限制的状态。" +
            "<br><br>" +
            "(D) '自由' 意味着不受阻碍或限制地行动、说话或思考的权力或权利。"
    },
    {
        id: 9,
        question: "As a __________ in the world of gardening, he often sought advice from more experienced neighbors.",
        chinese_question: "作为园艺世界的 __________，他经常向更有经验的邻居寻求建议。",
        answers: [
            { option: "A", answer: "expert", chinese_answer: "专家", chinese_romanization: "zhuānjiā" },
            { option: "B", answer: "neophyte", chinese_answer: "新手", chinese_romanization: "xīnshǒu" },
            { option: "C", answer: "veteran", chinese_answer: "老手", chinese_romanization: "lǎoshǒu" },
            { option: "D", answer: "master", chinese_answer: "大师", chinese_romanization: "dàshī" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'neophyte' means a person who is new to a subject, skill, or belief." +
            "<br><br>" +
            "(A) 'expert' means a person who is very knowledgeable about or skillful in a particular area." +
            "<br><br>" +
            "(C) 'veteran' means a person who has had long experience in a particular field." +
            "<br><br>" +
            "(D) 'master' means a person who has control or authority over others.",
        chinese_explanation: "(B) '新手' 一词意味着一个对某个学科、技能或信仰不熟悉的人。" +
            "<br><br>" +
            "(A) '专家' 意味着对某一领域非常了解或熟练的人。" +
            "<br><br>" +
            "(C) '老手' 意味着在某一领域有长期经验的人。" +
            "<br><br>" +
            "(D) '大师' 意味着对他人有控制权或权威的人。"
    },
    {
        id: 10,
        question: "The __________ of the report made it difficult to understand the main points and conclusions.",
        chinese_question: "报告的 __________ 使得很难理解主要观点和结论。",
        answers: [
            { option: "A", answer: "clarity", chinese_answer: "清晰", chinese_romanization: "qīngxī" },
            { option: "B", answer: "transparency", chinese_answer: "透明", chinese_romanization: "tòumíng" },
            { option: "C", answer: "opaqueness", chinese_answer: "不透明", chinese_romanization: "bùtòumíng" },
            { option: "D", answer: "simplicity", chinese_answer: "简单", chinese_romanization: "jiǎndān" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'opaqueness' means the quality of not being able to be seen through; not transparent." +
            "<br><br>" +
            "(A) 'clarity' means the quality of being clear, in particular." +
            "<br><br>" +
            "(B) 'transparency' means the condition of being transparent." +
            "<br><br>" +
            "(D) 'simplicity' means the quality or condition of being easy to understand or do.",
        chinese_explanation: "(C) '不透明' 一词意味着不能被看透的质量；不透明。" +
            "<br><br>" +
            "(A) '清晰' 意味着清晰的质量，特别是。" +
            "<br><br>" +
            "(B) '透明' 意味着透明的状态。" +
            "<br><br>" +
            "(D) '简单' 意味着易于理解或做的质量或状态。"
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
