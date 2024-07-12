// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "He took creative __________ in his storytelling, making the tale more interesting.",
        chinese_question: "他在讲故事时采取了创造性的 __________，使故事更有趣。",
        answers: [
            { option: "A", answer: "license", chinese_answer: "自由", chinese_romanization: "zìyóu" },
            { option: "B", answer: "restraint", chinese_answer: "约束", chinese_romanization: "yuēshù" },
            { option: "C", answer: "conformity", chinese_answer: "遵守", chinese_romanization: "zūnshǒu" },
            { option: "D", answer: "obedience", chinese_answer: "服从", chinese_romanization: "fúcóng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'license' metaphorically means freedom to act as one wishes, especially in creative or artistic work." +
            "<br><br>" +
            "(B) 'restraint' means a measure or condition that keeps someone or something under control." +
            "<br><br>" +
            "(C) 'conformity' means compliance with standards, rules, or laws." +
            "<br><br>" +
            "(D) 'obedience' means compliance with an order, request, or law or submission to another's authority.",
        chinese_explanation: "(A) '自由' 比喻在创作或艺术工作中的自由行动。" +
            "<br><br>" +
            "(B) '约束' 意味着保持某人或某物受控制的措施或条件。" +
            "<br><br>" +
            "(C) '遵守' 意味着遵守标准、规则或法律。" +
            "<br><br>" +
            "(D) '服从' 意味着遵从命令、请求或法律或服从他人的权威。"
    },
    {
        id: 2,
        question: "She had a financial __________ in case her business venture failed, providing a safety net to fall back on.",
        chinese_question: "她有一个金融 __________ 以防她的商业冒险失败，提供一个可以依靠的安全网。",
        answers: [
            { option: "A", answer: "parachute", chinese_answer: "保障", chinese_romanization: "bǎozhàng" },
            { option: "B", answer: "glider", chinese_answer: "滑翔机", chinese_romanization: "huáxiángjī" },
            { option: "C", answer: "wingsuit", chinese_answer: "翼装", chinese_romanization: "yìzhuāng" },
            { option: "D", answer: "cushion", chinese_answer: "缓冲", chinese_romanization: "huǎnchōng" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'cushion' means a safety measure to absorb impact or provide support." +
            "<br><br>" +
            "(A) 'parachute' literally means a device used to slow the descent of someone or something falling through the air." +
            "<br><br>" +
            "(B) 'glider' means a smooth and effortless movement." +
            "<br><br>" +
            "(C) 'wingsuit' literally means a specialized jumpsuit with fabric wings between the arms and legs for gliding through the air.",
        chinese_explanation: "(D) '缓冲' 意味着吸收冲击或提供支持的安全措施。" +
            "<br><br>" +
            "(A) '保障' 字面意思是用来减缓某人或某物通过空气下降的装置。" +
            "<br><br>" +
            "(B) '滑翔机' 意味着顺畅和无努力的移动。" +
            "<br><br>" +
            "(C) '翼装' 字面意思是一种特殊的跳伞服，在手臂和腿之间有织物翅膀，用于在空中滑行。"
    },
    {
        id: 3,
        question: "The court was appalled by the defendant's acts of __________, which were considered among the worst crimes.",
        chinese_question: "法院对被告的 __________ 行为感到震惊，这些行为被认为是最严重的罪行之一。",
        answers: [
                { option: "A", answer: "turpitude", chinese_answer: "堕落", chinese_romanization: "duòluò" },
                { option: "B", answer: "valor", chinese_answer: "勇气", chinese_romanization: "yǒngqì" },
                { option: "C", answer: "integrity", chinese_answer: "正直", chinese_romanization: "zhèngzhí" },
                { option: "D", answer: "charity", chinese_answer: "慈善", chinese_romanization: "císhàn" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'turpitude' refers to vile, shameful, or base character." +
            "<br><br>" +
            "(B) 'valor' means great courage in the face of danger, especially in battle." +
            "<br><br>" +
            "(C) 'integrity' is the quality of being honest and having strong moral principles." +
            "<br><br>" +
            "(D) 'charity' refers to the voluntary giving of help, typically in the form of money, to those in need.",
        chinese_explanation: "(A) '堕落' 指的是卑鄙、可耻或低劣的品格。" +
            "<br><br>" +
            "(B) '勇气' 是指在面对危险时表现出的极大勇气，尤其是在战斗中。" +
            "<br><br>" +
            "(C) '正直' 是诚实并具有强烈道德原则的品质。" +
            "<br><br>" +
            "(D) '慈善' 是指自愿提供帮助，通常是以金钱的形式，给有需要的人。"
    },
    {
        id: 4,
        question: "The government implemented strict policies for __________ to prevent future crimes.",
        chinese_question: "政府实施了严格的政策以进行 __________，以防止未来的犯罪。",
        answers: [
            { option: "A", answer: "deterrence", chinese_answer: "威慑", chinese_romanization: "wēishè" },
            { option: "B", answer: "encouragement", chinese_answer: "鼓励", chinese_romanization: "gǔlì" },
            { option: "C", answer: "promotion", chinese_answer: "晋升", chinese_romanization: "jìnshēng" },
            { option: "D", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'deterrence' means the action of discouraging an action or event through instilling doubt or fear of the consequences." +
            "<br><br>" +
            "(B) 'encouragement' means the action of giving someone support, confidence, or hope." +
            "<br><br>" +
            "(C) 'promotion' means the action of raising someone to a higher position or rank or the fact of being so raised." +
            "<br><br>" +
            "(D) 'support' means bear all or part of the weight of; hold up.",
        chinese_explanation: "(A) '威慑' 意味着通过灌输对后果的怀疑或恐惧来阻止某个行为或事件的行为。" +
            "<br><br>" +
            "(B) '鼓励' 意味着给某人支持、信心或希望的行为。" +
            "<br><br>" +
            "(C) '晋升' 意味着将某人提升到更高职位或等级的行为或事实。" +
            "<br><br>" +
            "(D) '支持' 意味着承受全部或部分重量；支撑。"
    },
    {
        id: 5,
        question: "The company's __________ in the industry is attributed to its commitment to quality and innovation.",
        chinese_question: "公司的 __________ 归功于其对质量和创新的承诺。",
        answers: [
            { option: "A", answer: "decline", chinese_answer: "衰退", chinese_romanization: "shuāituì" },
            { option: "B", answer: "longevity", chinese_answer: "长久", chinese_romanization: "chángjiǔ" },
            { option: "C", answer: "instability", chinese_answer: "不稳定", chinese_romanization: "bù wěndìng" },
            { option: "D", answer: "short-lived", chinese_answer: "短暂", chinese_romanization: "duǎnzàn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'longevity' figuratively means long duration or lasting presence." +
            "<br><br>" +
            "(A) 'decline' means a gradual and continuous loss of strength, numbers, quality, or value." +
            "<br><br>" +
            "(C) 'instability' means lack of stability; the state of being unstable." +
            "<br><br>" +
            "(D) 'short-lived' means lasting only a short time.",
        chinese_explanation: "(B) '长久' 在比喻意义上意味着长时间持续或持久存在。" +
            "<br><br>" +
            "(A) '衰退' 意味着力量、数量、质量或价值的逐渐和持续损失。" +
            "<br><br>" +
            "(C) '不稳定' 意味着缺乏稳定；不稳定的状态。" +
            "<br><br>" +
            "(D) '短暂' 意味着只持续很短的时间。"
    },
    {
        id: 6,
        question: "There seems to be a __________ between her mood and the weather, as she feels happier on sunny days.",
        chinese_question: "她的心情和天气之间似乎有某种 __________，因为她在晴天感觉更快乐。",
        answers: [
            { option: "A", answer: "disconnection", chinese_answer: "断开", chinese_romanization: "duànkāi" },
            { option: "B", answer: "correlation", chinese_answer: "关联", chinese_romanization: "guānlián" },
            { option: "C", answer: "separation", chinese_answer: "分离", chinese_romanization: "fēnlí" },
            { option: "D", answer: "divergence", chinese_answer: "分歧", chinese_romanization: "fēnqí" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'correlation' figuratively means a connection or relationship between two things." +
            "<br><br>" +
            "(A) 'disconnection' means the state of being disconnected." +
            "<br><br>" +
            "(C) 'separation' means the action or state of moving or being moved apart." +
            "<br><br>" +
            "(D) 'divergence' means the process or state of diverging.",
        chinese_explanation: "(B) '关联' 在比喻意义上意味着两件事之间的联系或关系。" +
            "<br><br>" +
            "(A) '断开' 意味着断开的状态。" +
            "<br><br>" +
            "(C) '分离' 意味着移动或分开的行为或状态。" +
            "<br><br>" +
            "(D) '分歧' 意味着分开的过程或状态。"
    },
    {
        id: 7,
        question: "The grant provided __________, ensuring the research could continue without financial worries.",
        chinese_question: "这笔资助提供了 __________，确保研究可以在没有经济担忧的情况下继续进行。",
        answers: [
            { option: "A", answer: "hindrance", chinese_answer: "阻碍", chinese_romanization: "zǔ'ài" },
            { option: "B", answer: "collateral", chinese_answer: "保障", chinese_romanization: "bǎozhàng" },
            { option: "C", answer: "burden", chinese_answer: "负担", chinese_romanization: "fùdān" },
            { option: "D", answer: "liability", chinese_answer: "责任", chinese_romanization: "zérèn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'collateral' figuratively means something that provides additional support or security." +
            "<br><br>" +
            "(A) 'hindrance' means a thing that provides resistance, delay, or obstruction to something or someone." +
            "<br><br>" +
            "(C) 'burden' means a load, typically a heavy one." +
            "<br><br>" +
            "(D) 'liability' means the state of being responsible for something, especially by law.",
        chinese_explanation: "(B) '保障' 在比喻意义上意味着提供额外支持或安全的东西。" +
            "<br><br>" +
            "(A) '阻碍' 意味着提供对某事或某人的抵抗、延迟或障碍的事物。" +
            "<br><br>" +
            "(C) '负担' 意味着通常是沉重的负担。" +
            "<br><br>" +
            "(D) '责任' 意味着对某事负责的状态，尤其是法律上的。"
    },
    {
        id: 8,
        question: "Her mind was like a well-oiled __________, capable of processing information quickly and efficiently.",
        chinese_question: "她的头脑像一个运转良好的 __________，能够快速高效地处理信息。",
        answers: [
            { option: "A", answer: "puzzle", chinese_answer: "拼图", chinese_romanization: "pīntú" },
            { option: "B", answer: "mess", chinese_answer: "混乱", chinese_romanization: "hùnluàn" },
            { option: "C", answer: "instrument", chinese_answer: "工具", chinese_romanization: "gōngjù" },
            { option: "D", answer: "chaos", chinese_answer: "混沌", chinese_romanization: "hùndùn" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'instrument' means a tool or implement, especially one for delicate or scientific work." +
            "<br><br>" +
            "(A) 'puzzle' means a game, toy, or problem designed to test ingenuity or knowledge." +
            "<br><br>" +
            "(B) 'mess' means a state of disorder or confusion." +
            "<br><br>" +
            "(D) 'chaos' means complete disorder and confusion.",
        chinese_explanation: "(C) '工具' 意味着特别是用于精细或科学工作的工具或设备。" +
            "<br><br>" +
            "(A) '拼图' 意味着设计用于测试聪明才智或知识的游戏、玩具或问题。" +
            "<br><br>" +
            "(B) '混乱' 意味着一种无序或混乱的状态。" +
            "<br><br>" +
            "(D) '混沌' 意味着完全的混乱和混乱。"
    },
    {
        id: 9,
        question: "The __________ of misinformation on social media is causing widespread confusion and panic.",
        chinese_question: "社交媒体上错误信息的 __________ 正在引起广泛的混乱和恐慌。",
        answers: [
            { option: "A", answer: "eradication", chinese_answer: "根除", chinese_romanization: "gēnchú" },
            { option: "B", answer: "control", chinese_answer: "控制", chinese_romanization: "kòngzhì" },
            { option: "C", answer: "epidemic", chinese_answer: "流行", chinese_romanization: "liúxíng" },
            { option: "D", answer: "suppression", chinese_answer: "压制", chinese_romanization: "yāzhì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'epidemic' figuratively means a rapid spread or increase in the occurrence of something, especially something harmful." +
            "<br><br>" +
            "(A) 'eradication' means the complete destruction of something." +
            "<br><br>" +
            "(B) 'control' means the power to influence or direct people's behavior or the course of events." +
            "<br><br>" +
            "(D) 'suppression' means the action of suppressing something such as an activity or publication.",
        chinese_explanation: "(C) '流行' 在比喻意义上意味着某事（尤其是有害事物）迅速传播或增加。" +
            "<br><br>" +
            "(A) '根除' 意味着彻底销毁某物。" +
            "<br><br>" +
            "(B) '控制' 意味着影响或指导人们行为或事件进程的力量。" +
            "<br><br>" +
            "(D) '压制' 意味着压制某事（如活动或出版物）的行为。"
    },
    {
        id: 10,
        question: "Finding work-life __________ is essential for maintaining mental health and overall well-being.",
        chinese_question: "找到工作与生活的 __________ 对于维持心理健康和整体幸福至关重要。",
        answers: [
            { option: "A", answer: "chaos", chinese_answer: "混乱", chinese_romanization: "hùnluàn" },
            { option: "B", answer: "stress", chinese_answer: "压力", chinese_romanization: "yālì" },
            { option: "C", answer: "equilibrium", chinese_answer: "平衡", chinese_romanization: "pínghéng" },
            { option: "D", answer: "disorder", chinese_answer: "失序", chinese_romanization: "shī xù" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'equilibrium' figuratively means a calm state of mind or a situation in which opposing forces or influences are balanced." +
            "<br><br>" +
            "(A) 'chaos' means complete disorder and confusion." +
            "<br><br>" +
            "(B) 'stress' means a state of mental or emotional strain or tension resulting from adverse or demanding circumstances." +
            "<br><br>" +
            "(D) 'disorder' means a state of confusion.",
        chinese_explanation: "(C) '平衡' 在比喻意义上意味着一种心灵的平静状态或一种对立力量或影响平衡的情况。" +
            "<br><br>" +
            "(A) '混乱' 意味着完全的混乱和困惑。" +
            "<br><br>" +
            "(B) '压力' 意味着由不利或苛刻情况引起的精神或情感紧张状态。" +
            "<br><br>" +
            "(D) '失序' 意味着一种混乱状态。"
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
