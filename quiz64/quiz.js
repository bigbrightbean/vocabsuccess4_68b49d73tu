// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The senator's __________ during the debate effectively stalled the passing of the controversial bill, buying more time for discussion.",
        chinese_question: "参议员在辩论中的 __________ 有效地阻止了争议法案的通过，为讨论争取了更多时间。",
        answers: [
            { option: "A", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" },
            { option: "B", answer: "filibuster", chinese_answer: "阻挠", chinese_romanization: "zǔnáo" },
            { option: "C", answer: "cooperation", chinese_answer: "合作", chinese_romanization: "hézuò" },
            { option: "D", answer: "approval", chinese_answer: "批准", chinese_romanization: "pīzhǔn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'filibuster' means an action such as a prolonged speech that obstructs progress in a legislative assembly while not technically contravening the required procedures." +
            "<br><br>" +
            "(A) 'support' means bear all or part of the weight of; hold up." +
            "<br><br>" +
            "(C) 'cooperation' means the process of working together to the same end." +
            "<br><br>" +
            "(D) 'approval' means the action of officially agreeing to something or accepting something as satisfactory.",
        chinese_explanation: "(B) '阻挠' 一词意味着一种行动，如长时间的演讲，阻碍立法会议的进展，同时在技术上不违反规定的程序。" +
            "<br><br>" +
            "(A) '支持' 意味着承受全部或部分重量；支撑。" +
            "<br><br>" +
            "(C) '合作' 意味着为了同一个目标而共同努力的过程。" +
            "<br><br>" +
            "(D) '批准' 意味着正式同意某事或接受某事为令人满意的行为。"
    },
    {
        id: 2,
        question: "The __________ of time had healed her emotional wounds.",
        chinese_question: "时间的 __________ 治愈了她的情感创伤。",
        answers: [
            { option: "A", answer: "passage", chinese_answer: "流逝", chinese_romanization: "liúshì" },
            { option: "B", answer: "stagnation", chinese_answer: "停滞", chinese_romanization: "tíngzhì" },
            { option: "C", answer: "end", chinese_answer: "结束", chinese_romanization: "jiéshù" },
            { option: "D", answer: "beginning", chinese_answer: "开始", chinese_romanization: "kāishǐ" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'passage' metaphorically means the process or progress of time." +
            "<br><br>" +
            "(B) 'stagnation' means the state of not flowing or moving." +
            "<br><br>" +
            "(C) 'end' means the final part of something." +
            "<br><br>" +
            "(D) 'beginning' means the point in time or space at which something starts.",
        chinese_explanation: "(A) '流逝' 比喻时间的过程或进展。" +
            "<br><br>" +
            "(B) '停滞' 意味着不流动或不移动的状态。" +
            "<br><br>" +
            "(C) '结束' 意味着某事的最后部分。" +
            "<br><br>" +
            "(D) '开始' 意味着某事在时间或空间上的起点。"
    },
    {
        id: 3,
        question: "To understand the problem fully, you must consider it in its __________, not just isolated incidents.",
        chinese_question: "要完全理解这个问题，你必须考虑它的__________，而不仅仅是孤立的事件。",
        answers: [
            { option: "A", answer: "part", chinese_answer: "部分", chinese_romanization: "bùfen" },
            { option: "B", answer: "section", chinese_answer: "部门", chinese_romanization: "bùmén" },
            { option: "C", answer: "entirety", chinese_answer: "全部", chinese_romanization: "quánbù" },
            { option: "D", answer: "portion", chinese_answer: "份", chinese_romanization: "fèn" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'entirety' means the whole of something." +
            "<br><br>" +
            "(A) 'part' means a piece or segment of something." +
            "<br><br>" +
            "(B) 'section' means a distinct part or subdivision of something." +
            "<br><br>" +
            "(D) 'portion' means a part of a whole.",
        chinese_explanation: "(C) '全部'一词意味着某物的整体。" +
            "<br><br>" +
            "(A) '部分' 意味着某物的一部分或片段。" +
            "<br><br>" +
            "(B) '部门' 意味着某物的一个不同部分或分区。" +
            "<br><br>" +
            "(D) '份' 意味着一个整体的一部分。"
    },
    {
        id: 4,
        question: "The soothing music acted as a __________, calming everyone's nerves before the big presentation.",
        chinese_question: "舒缓的音乐像__________一样，在大演讲前平静了每个人的神经。",
        answers: [
            { option: "A", answer: "stimulant", chinese_answer: "兴奋剂", chinese_romanization: "xīngfèn jì" },
            { option: "B", answer: "sedative", chinese_answer: "镇静剂", chinese_romanization: "zhènjìng jì" },
            { option: "C", answer: "tonic", chinese_answer: "补药", chinese_romanization: "bǔyào" },
            { option: "D", answer: "vitamin", chinese_answer: "维生素", chinese_romanization: "wéishēngsù" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'sedative' means a substance that induces sedation by reducing irritability or excitement. Figuratively, it can mean something that has a calming effect." +
            "<br><br>" +
            "(A) 'stimulant' means a substance that raises levels of physiological or nervous activity in the body." +
            "<br><br>" +
            "(C) 'tonic' means a medicinal substance taken to give a feeling of vigor or well-being." +
            "<br><br>" +
            "(D) 'vitamin' means any of a group of organic compounds that are essential for normal growth and nutrition.",
        chinese_explanation: "(B) '镇静剂'一词意味着通过减少刺激或兴奋来诱导镇静的物质。比喻地，它可以表示具有镇静效果的东西。" +
            "<br><br>" +
            "(A) '兴奋剂' 意味着一种提高体内生理或神经活动水平的物质。" +
            "<br><br>" +
            "(C) '补药' 意味着一种用于增加活力或健康感觉的药物。" +
            "<br><br>" +
            "(D) '维生素' 意味着一组对正常生长和营养必不可少的有机化合物。"
    },
    {
        id: 5,
        question: "A __________ of regret hit her as she watched the opportunities slip away.",
        chinese_question: "看着机会溜走，她感到一阵__________的后悔。",
        answers: [
            { option: "A", answer: "joy", chinese_answer: "喜悦", chinese_romanization: "xǐyuè" },
            { option: "B", answer: "excitement", chinese_answer: "兴奋", chinese_romanization: "xīngfèn" },
            { option: "C", answer: "pang", chinese_answer: "剧痛", chinese_romanization: "jùtòng" },
            { option: "D", answer: "thrill", chinese_answer: "激动", chinese_romanization: "jīdòng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'pang' means a sudden sharp pain or painful emotion. Figuratively, it can mean a sudden feeling of distress or regret." +
            "<br><br>" +
            "(A) 'joy' means a feeling of great pleasure and happiness." +
            "<br><br>" +
            "(B) 'excitement' means a feeling of great enthusiasm and eagerness." +
            "<br><br>" +
            "(D) 'thrill' means a sudden feeling of excitement and pleasure.",
        chinese_explanation: "(C) '剧痛'一词意味着突然的剧烈疼痛或痛苦的情感。比喻地，它可以表示突然的痛苦或后悔。" +
            "<br><br>" +
            "(A) '喜悦' 意味着极大的快乐和幸福。" +
            "<br><br>" +
            "(B) '兴奋' 意味着极大的热情和渴望。" +
            "<br><br>" +
            "(D) '激动' 意味着突然的兴奋和愉悦。"
    },
    {
        id: 6,
        question: "His career underwent a significant __________ as he moved from engineering to management.",
        chinese_question: "他的职业生涯经历了重大 __________，从工程转向管理。",
        answers: [
            { option: "A", answer: "transition", chinese_answer: "转变", chinese_romanization: "zhuǎnbiàn" },
            { option: "B", answer: "decline", chinese_answer: "衰退", chinese_romanization: "shuāituì" },
            { option: "C", answer: "stagnation", chinese_answer: "停滞", chinese_romanization: "tíngzhì" },
            { option: "D", answer: "recession", chinese_answer: "经济衰退", chinese_romanization: "jīngjì shuāituì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'transition' metaphorically means a change or shift from one state, subject, or place to another." +
            "<br><br>" +
            "(B) 'decline' means a gradual and continuous loss of strength, numbers, quality, or value." +
            "<br><br>" +
            "(C) 'stagnation' means the state of not flowing or moving." +
            "<br><br>" +
            "(D) 'recession' means a period of temporary economic decline during which trade and industrial activity are reduced.",
        chinese_explanation: "(A) '转变' 比喻从一种状态、主题或地方转变为另一种状态、主题或地方。" +
            "<br><br>" +
            "(B) '衰退' 意味着力量、数量、质量或价值的逐渐和持续下降。" +
            "<br><br>" +
            "(C) '停滞' 意味着不流动或不移动的状态。" +
            "<br><br>" +
            "(D) '经济衰退' 意味着贸易和工业活动减少的临时经济衰退期。"
    },
    {
        id: 7,
        question: "Her __________ in forensic science made her an invaluable asset to the criminal investigation team.",
        chinese_question: "她在法医学方面的 __________ 使她成为刑事调查队中不可或缺的资产。",
        answers: [
            { option: "A", answer: "incompetence", chinese_answer: "无能", chinese_romanization: "wúnéng" },
            { option: "B", answer: "indifference", chinese_answer: "冷漠", chinese_romanization: "lěngmò" },
            { option: "C", answer: "expertise", chinese_answer: "专长", chinese_romanization: "zhuāncháng" },
            { option: "D", answer: "ignorance", chinese_answer: "无知", chinese_romanization: "wúzhī" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'expertise' means expert skill or knowledge in a particular field." +
            "<br><br>" +
            "(A) 'incompetence' means inability to do something successfully; ineptitude." +
            "<br><br>" +
            "(B) 'indifference' means lack of interest, concern, or sympathy." +
            "<br><br>" +
            "(D) 'ignorance' means lack of knowledge or information.",
        chinese_explanation: "(C) '专长' 一词意味着在特定领域的专家技能或知识。" +
            "<br><br>" +
            "(A) '无能' 意味着不能成功地做某事；无能。" +
            "<br><br>" +
            "(B) '冷漠' 意味着缺乏兴趣、关心或同情。" +
            "<br><br>" +
            "(D) '无知' 意味着缺乏知识或信息。"
    },
    {
        id: 8,
        question: "The team's __________ in the face of adversity led them to an unexpected victory.",
        chinese_question: "团队在逆境中表现出的 __________ 带来了意想不到的胜利。",
        answers: [
            { option: "A", answer: "resignation", chinese_answer: "顺从", chinese_romanization: "shùncóng" },
            { option: "B", answer: "apathy", chinese_answer: "漠不关心", chinese_romanization: "mòbù guānxīn" },
            { option: "C", answer: "surrender", chinese_answer: "投降", chinese_romanization: "tóuxiáng" },
            { option: "D", answer: "perseverance", chinese_answer: "坚持不懈", chinese_romanization: "jiānchí bù xiè" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'perseverance' figuratively means steady persistence in a course of action, especially in spite of difficulties." +
            "<br><br>" +
            "(A) 'resignation' means the acceptance of something undesirable but inevitable." +
            "<br><br>" +
            "(B) 'apathy' means lack of interest, enthusiasm, or concern." +
            "<br><br>" +
            "(C) 'surrender' means cease resistance to an enemy or opponent and submit to their authority.",
        chinese_explanation: "(D) '坚持不懈' 在比喻意义上意味着在行动过程中坚定不移，尤其是在困难面前。" +
            "<br><br>" +
            "(A) '顺从' 意味着接受不理想但不可避免的事情。" +
            "<br><br>" +
            "(B) '漠不关心' 意味着缺乏兴趣、热情或关心。" +
            "<br><br>" +
            "(C) '投降' 意味着停止抵抗敌人或对手并服从他们的权威。"
    },
    {
        id: 9,
        question: "Education is like a __________ for the mind, essential for intellectual growth and development.",
        chinese_question: "教育就像心灵的 __________，对智力成长和发展至关重要。",
        answers: [
            { option: "A", answer: "poison", chinese_answer: "毒药", chinese_romanization: "dúyào" },
            { option: "B", answer: "distraction", chinese_answer: "分心", chinese_romanization: "fēn xīn" },
            { option: "C", answer: "vitamin", chinese_answer: "维生素", chinese_romanization: "wéishēngsù" },
            { option: "D", answer: "hindrance", chinese_answer: "阻碍", chinese_romanization: "zǔ'ài" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'vitamin' means an essential nutrient that the body needs to function properly. Here, it figuratively means something that is essential for growth and well-being." +
            "<br><br>" +
            "(A) 'poison' means a substance that is capable of causing the illness or death of a living organism when introduced or absorbed." +
            "<br><br>" +
            "(B) 'distraction' means a thing that prevents someone from giving full attention to something else." +
            "<br><br>" +
            "(D) 'hindrance' means a thing that provides resistance, delay, or obstruction to something or someone.",
        chinese_explanation: "(C) '维生素' 意味着身体正常运作所需的基本营养素。在这里，它在比喻意义上意味着对成长和福祉至关重要的东西。" +
            "<br><br>" +
            "(A) '毒药' 意味着引起疾病或死亡的物质。" +
            "<br><br>" +
            "(B) '分心' 意味着阻止某人全神贯注于其他事情的事物。" +
            "<br><br>" +
            "(D) '阻碍' 意味着对某事或某人提供阻力、延迟或障碍的事物。"
    },
    {
        id: 10,
        question: "He greeted his neighbor with the polite familiarity of a long-time __________, rather than the warmth of a close friend.",
        chinese_question: "他以长期 __________ 的礼貌熟悉感向邻居打招呼，而不是亲密朋友的热情。",
        answers: [
            { option: "A", answer: "rivalry", chinese_answer: "竞争", chinese_romanization: "jìngzhēng" },
            { option: "B", answer: "acquaintance", chinese_answer: "熟人关系", chinese_romanization: "shúrén guānxì" },
            { option: "C", answer: "antagonism", chinese_answer: "对立", chinese_romanization: "duìlì" },
            { option: "D", answer: "alliance", chinese_answer: "联盟", chinese_romanization: "liánméng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'acquaintance' figuratively means a relationship that is more formal and less personal." +
            "<br><br>" +
            "(A) 'rivalry' means competition for the same objective or for superiority in the same field." +
            "<br><br>" +
            "(C) 'antagonism' means active hostility or opposition." +
            "<br><br>" +
            "(D) 'alliance' means a union or association formed for mutual benefit, especially between countries or organizations.",
        chinese_explanation: "(B) '熟人关系' 在比喻意义上意味着更正式且不太个人化的关系。" +
            "<br><br>" +
            "(A) '竞争' 意味着为同一目标或在同一领域争优。" +
            "<br><br>" +
            "(C) '对立' 意味着积极的敌对或反对。" +
            "<br><br>" +
            "(D) '联盟' 意味着为共同利益而形成的联合或协会，特别是国家或组织之间的。"
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
