// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "Her __________ remarks during the debate left a bitter impression on the audience.",
        chinese_question: "她在辩论中的__________言论给观众留下了苦涩的印象。",
        answers: [
            { option: "A", answer: "pleasant", chinese_answer: "愉快的", chinese_romanization: "yúkuài de" },
            { option: "B", answer: "acrid", chinese_answer: "尖刻的", chinese_romanization: "jiānkè de" },
            { option: "C", answer: "fragrant", chinese_answer: "芳香的", chinese_romanization: "fāngxiāng de" },
            { option: "D", answer: "soothing", chinese_answer: "舒缓的", chinese_romanization: "shūhuǎn de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'acrid' means having an irritatingly strong and unpleasant taste or smell. Figuratively, it can mean sharp and bitter in tone or expression." +
            "<br><br>" +
            "(A) 'pleasant' means giving a sense of happy satisfaction or enjoyment." +
            "<br><br>" +
            "(C) 'fragrant' means having a pleasant or sweet smell." +
            "<br><br>" +
            "(D) 'soothing' means having a gently calming effect.",
        chinese_explanation: "(B) '尖刻的'一词意味着有刺激性强且令人不快的味道或气味。比喻地，它可以表示尖锐和苦涩的语气或表达。" +
            "<br><br>" +
            "(A) '愉快的' 意味着给予愉快的满足感或享受。" +
            "<br><br>" +
            "(C) '芳香的' 意味着有愉快或甜美的气味。" +
            "<br><br>" +
            "(D) '舒缓的' 意味着有温和的镇静效果。"
    },
    {
        id: 2,
        question: "He remained __________ despite the overwhelming evidence presented to him.",
        chinese_question: "尽管有压倒性的证据，他仍然保持__________。",
        answers: [
            { option: "A", answer: "believing", chinese_answer: "相信的", chinese_romanization: "xiāngxìn de" },
            { option: "B", answer: "incredulous", chinese_answer: "不相信的", chinese_romanization: "bù xiāngxìn de" },
            { option: "C", answer: "trusting", chinese_answer: "信任的", chinese_romanization: "xìnrèn de" },
            { option: "D", answer: "confident", chinese_answer: "自信的", chinese_romanization: "zìxìn de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'incredulous' means unwilling or unable to believe something. Figuratively, it can mean skeptical or doubtful even in the face of strong evidence." +
            "<br><br>" +
            "(A) 'believing' means accepting (something) as true; feeling sure of the truth of." +
            "<br><br>" +
            "(C) 'trusting' means having or showing trust in someone or something." +
            "<br><br>" +
            "(D) 'confident' means feeling or showing confidence in oneself or one's abilities or qualities.",
        chinese_explanation: "(B) '不相信的'一词意味着不愿意或无法相信某事。比喻地，它可以表示即使面对强有力的证据仍然持怀疑态度或怀疑。" +
            "<br><br>" +
            "(A) '相信的' 意味着接受（某事）为真；确定某事的真实性。" +
            "<br><br>" +
            "(C) '信任的' 意味着对某人或某物有或表现出信任。" +
            "<br><br>" +
            "(D) '自信的' 意味着对自己或自己的能力或品质感到或表现出信心。"
    },
    {
        id: 3,
        question: "Her speech was rather __________, lacking the excitement needed to captivate the audience.",
        chinese_question: "她的演讲相当 __________，缺乏吸引观众所需的激动人心的元素。",
        answers: [
            { option: "A", answer: "pedestrian", chinese_answer: "平淡无奇的", chinese_romanization: "píngdàn wúqí de" },
            { option: "B", answer: "dynamic", chinese_answer: "动态的", chinese_romanization: "dòngtài de" },
            { option: "C", answer: "inspiring", chinese_answer: "激励的", chinese_romanization: "jīlì de" },
            { option: "D", answer: "electrifying", chinese_answer: "令人振奋的", chinese_romanization: "lìng rén zhènfèn de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'pedestrian' metaphorically means dull or lacking inspiration." +
            "<br><br>" +
            "(B) 'dynamic' means characterized by constant change, activity, or progress." +
            "<br><br>" +
            "(C) 'inspiring' means having the effect of inspiring someone." +
            "<br><br>" +
            "(D) 'electrifying' means causing a sudden sense of thrilling excitement.",
        chinese_explanation: "(A) '平淡无奇的' 比喻沉闷或缺乏灵感。" +
            "<br><br>" +
            "(B) '动态的' 意味着不断变化、活动或进步的特征。" +
            "<br><br>" +
            "(C) '激励的' 意味着产生激励效果的。" +
            "<br><br>" +
            "(D) '令人振奋的' 意味着引起突然兴奋感的。"
    },
    {
        id: 4,
        question: "Their conversation was __________ but meaningful, leaving a lasting impression.",
        chinese_question: "他们的谈话虽然 __________ 但意义深远，留下了持久的印象。",
        answers: [
            { option: "A", answer: "brief", chinese_answer: "简短的", chinese_romanization: "jiǎnduǎn de" },
            { option: "B", answer: "extended", chinese_answer: "延长的", chinese_romanization: "yáncháng de" },
            { option: "C", answer: "endless", chinese_answer: "无尽的", chinese_romanization: "wújìn de" },
            { option: "D", answer: "infinite", chinese_answer: "无限的", chinese_romanization: "wúxiàn de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'brief' metaphorically means concise and to the point." +
            "<br><br>" +
            "(B) 'extended' means made larger; enlarged." +
            "<br><br>" +
            "(C) 'endless' means having or seeming to have no end or limit." +
            "<br><br>" +
            "(D) 'infinite' means limitless or endless in space, extent, or size; impossible to measure or calculate.",
        chinese_explanation: "(A) '简短的' 比喻简洁而直截了当。" +
            "<br><br>" +
            "(B) '延长的' 意味着被放大；扩大的。" +
            "<br><br>" +
            "(C) '无尽的' 意味着没有或似乎没有终点或限制。" +
            "<br><br>" +
            "(D) '无限的' 意味着在空间、范围或大小上没有限制或无限的；无法测量或计算的。"
    },
    {
        id: 5,
        question: "The scandal left the politician __________, with all his secrets laid bare.",
        chinese_question: "丑闻让这位政治家 __________，他的所有秘密都被揭露了。",
        answers: [
            { option: "A", answer: "protected", chinese_answer: "保护", chinese_romanization: "bǎohù" },
            { option: "B", answer: "concealed", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" },
            { option: "C", answer: "exposed", chinese_answer: "暴露", chinese_romanization: "bàolù" },
            { option: "D", answer: "secure", chinese_answer: "安全", chinese_romanization: "ānquán" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'exposed' means made known; revealed." +
            "<br><br>" +
            "(A) 'protected' means kept safe from harm or injury." +
            "<br><br>" +
            "(B) 'concealed' means kept secret; hidden." +
            "<br><br>" +
            "(D) 'secure' means free from danger or threat.",
        chinese_explanation: "(C) '暴露' 意味着被知道；揭示。" +
            "<br><br>" +
            "(A) '保护' 意味着免受伤害或伤害。" +
            "<br><br>" +
            "(B) '隐藏' 意味着保密；隐藏。" +
            "<br><br>" +
            "(D) '安全' 意味着没有危险或威胁。"
    },
    {
        id: 6,
        question: "Their meeting in Paris was entirely __________, as neither of them had planned to be there at the same time.",
        chinese_question: "他们在巴黎的相遇完全是 __________ 的，因为他们都没有计划在同一时间在那里。",
        answers: [
            { option: "A", answer: "planned", chinese_answer: "计划好的", chinese_romanization: "jìhuà hǎo de" },
            { option: "B", answer: "intentional", chinese_answer: "故意的", chinese_romanization: "gùyì de" },
            { option: "C", answer: "fortuitous", chinese_answer: "偶然的", chinese_romanization: "ǒurán de" },
            { option: "D", answer: "deliberate", chinese_answer: "蓄意的", chinese_romanization: "xùyì de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'fortuitous' means happening by accident or chance rather than design." +
            "<br><br>" +
            "(A) 'planned' means decided on and arranged in advance." +
            "<br><br>" +
            "(B) 'intentional' means done on purpose; deliberate." +
            "<br><br>" +
            "(D) 'deliberate' means done consciously and intentionally.",
        chinese_explanation: "(C) '偶然的' 一词意味着偶然或意外发生的，而不是有意安排的。" +
            "<br><br>" +
            "(A) '计划好的' 意味着事先决定和安排好的。" +
            "<br><br>" +
            "(B) '故意的' 意味着故意做的；有意的。" +
            "<br><br>" +
            "(D) '蓄意的' 意味着有意识和有意地做的。"
    },
    {
        id: 7,
        question: "Their opinions on the matter were so __________ that they could not come to an agreement.",
        chinese_question: "他们在这个问题上的意见如此 __________，以至于无法达成一致。",
        answers: [
            { option: "A", answer: "similar", chinese_answer: "相似的", chinese_romanization: "xiāngsì de" },
            { option: "B", answer: "divergent", chinese_answer: "分歧的", chinese_romanization: "fēnqí de" },
            { option: "C", answer: "identical", chinese_answer: "相同的", chinese_romanization: "xiāngtóng de" },
            { option: "D", answer: "aligned", chinese_answer: "对齐的", chinese_romanization: "duì qí de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'divergent' means tending to be different or develop in different directions." +
            "<br><br>" +
            "(A) 'similar' means resembling without being identical." +
            "<br><br>" +
            "(C) 'identical' means similar in every detail; exactly alike." +
            "<br><br>" +
            "(D) 'aligned' means placed or arranged in a straight line or in correct relative positions.",
        chinese_explanation: "(B) '分歧的' 一词意味着趋向于不同或朝不同方向发展的。" +
            "<br><br>" +
            "(A) '相似的' 意味着相似而不相同。" +
            "<br><br>" +
            "(C) '相同的' 意味着在每个细节上相似；完全相同。" +
            "<br><br>" +
            "(D) '对齐的' 意味着排列在一条直线上或在正确的相对位置上。"
    },
    {
        id: 8,
        question: "He was __________ in his belief that justice would prevail, despite the numerous setbacks.",
        chinese_question: "尽管遭遇许多挫折，他依然 __________ 地相信正义会得到伸张。",
        answers: [
            { option: "A", answer: "wavering", chinese_answer: "动摇", chinese_romanization: "dòngyáo" },
            { option: "B", answer: "doubtful", chinese_answer: "怀疑", chinese_romanization: "huáiyí" },
            { option: "C", answer: "adamant", chinese_answer: "坚定", chinese_romanization: "jiāndìng" },
            { option: "D", answer: "uncertain", chinese_answer: "不确定", chinese_romanization: "bù quèdìng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'adamant' means refusing to be persuaded or to change one's mind." +
            "<br><br>" +
            "(A) 'wavering' means becoming weaker or less steady." +
            "<br><br>" +
            "(B) 'doubtful' means feeling uncertain about something." +
            "<br><br>" +
            "(D) 'uncertain' means not able to be relied on; not known or definite.",
        chinese_explanation: "(C) '坚定' 意味着拒绝被说服或改变主意。" +
            "<br><br>" +
            "(A) '动摇' 意味着变得虚弱或不稳定。" +
            "<br><br>" +
            "(B) '怀疑' 意味着对某事感到不确定。" +
            "<br><br>" +
            "(D) '不确定' 意味着不能依靠；不知或不确定的。"
    },
    {
        id: 9,
        question: "The advertisement's __________ exaggerations made it hard to trust the company's claims.",
        chinese_question: "广告中 __________ 的夸大其词使得难以信任该公司的主张。",
        answers: [
            { option: "A", answer: "modest", chinese_answer: "谦虚", chinese_romanization: "qiānxū" },
            { option: "B", answer: "subtle", chinese_answer: "微妙", chinese_romanization: "wēimiào" },
            { option: "C", answer: "blatant", chinese_answer: "明目张胆", chinese_romanization: "míngmùzhāngdǎn" },
            { option: "D", answer: "delicate", chinese_answer: "精细", chinese_romanization: "jīngxì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'blatant' means completely lacking in subtlety; very obvious." +
            "<br><br>" +
            "(A) 'modest' means unassuming or moderate in the estimation of one's abilities or achievements." +
            "<br><br>" +
            "(B) 'subtle' means so delicate or precise as to be difficult to analyze or describe." +
            "<br><br>" +
            "(D) 'delicate' means very fine in texture or structure; easily broken or damaged.",
        chinese_explanation: "(C) '明目张胆' 意味着完全缺乏微妙；非常明显。" +
            "<br><br>" +
            "(A) '谦虚' 意味着对自己的能力或成就不自夸或适度。" +
            "<br><br>" +
            "(B) '微妙' 意味着如此精细或精确以至于难以分析或描述。" +
            "<br><br>" +
            "(D) '精细' 意味着质地或结构非常细腻；容易破碎或损坏。"
    },
    {
        id: 10,
        question: "Her __________ attitude was evident in the way she volunteered her time and resources to numerous causes.",
        chinese_question: "她 __________ 的态度在她志愿提供时间和资源给众多事业的方式中显而易见。",
        answers: [
            { option: "A", answer: "charitable", chinese_answer: "慈善的", chinese_romanization: "císhàn de" },
            { option: "B", answer: "indifferent", chinese_answer: "冷漠的", chinese_romanization: "lěngmò de" },
            { option: "C", answer: "apathetic", chinese_answer: "无动于衷的", chinese_romanization: "wú dòng yú zhōng de" },
            { option: "D", answer: "hostile", chinese_answer: "敌对的", chinese_romanization: "díduì de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'charitable' means generous in giving to those in need." +
            "<br><br>" +
            "(B) 'indifferent' means having no particular interest or sympathy; unconcerned." +
            "<br><br>" +
            "(C) 'apathetic' means showing or feeling no interest, enthusiasm, or concern." +
            "<br><br>" +
            "(D) 'hostile' means unfriendly; antagonistic.",
        chinese_explanation: "(A) '慈善的' 意味着慷慨地给予需要帮助的人。" +
            "<br><br>" +
            "(B) '冷漠的' 意味着没有特别的兴趣或同情；不关心的。" +
            "<br><br>" +
            "(C) '无动于衷的' 意味着没有表现出兴趣、热情或关心的。" +
            "<br><br>" +
            "(D) '敌对的' 意味着不友好的；对抗的。"
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
