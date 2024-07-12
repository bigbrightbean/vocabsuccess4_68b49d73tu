// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "Her __________ disregard for the rules at work eventually led to her dismissal.",
        chinese_question: "她对工作规则的 __________ 无视最终导致了她的解雇。",
        answers: [
            { option: "A", answer: "brazen", chinese_answer: "厚颜无耻的", chinese_romanization: "hòuyánwúchǐ de" },
            { option: "B", answer: "compliant", chinese_answer: "顺从的", chinese_romanization: "shùncóng de" },
            { option: "C", answer: "respectful", chinese_answer: "尊重的", chinese_romanization: "zūnzhòng de" },
            { option: "D", answer: "hesitant", chinese_answer: "犹豫的", chinese_romanization: "yóuyù de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'brazen' means bold and without shame." +
            "<br><br>" +
            "(B) 'compliant' means inclined to agree with others or obey rules, especially to an excessive degree." +
            "<br><br>" +
            "(C) 'respectful' means feeling or showing deference and respect." +
            "<br><br>" +
            "(D) 'hesitant' means tentative, unsure, or slow in acting or speaking.",
        chinese_explanation: "(A) '厚颜无耻的' 意味着大胆而不知羞耻的." +
            "<br><br>" +
            "(B) '顺从的' 意味着倾向于同意他人或遵守规则的，尤其是过度地." +
            "<br><br>" +
            "(C) '尊重的' 意味着感到或表现出敬意的." +
            "<br><br>" +
            "(D) '犹豫的' 意味着犹豫不决的，不确定的，行动或说话缓慢的."
    },
    {
        id: 2,
        question: "The job offer was __________, with a high salary and excellent benefits that were hard to resist.",
        chinese_question: "这份工作机会 __________，高薪和优厚的福利让人难以拒绝。",
        answers: [
            { option: "A", answer: "boring", chinese_answer: "无聊的", chinese_romanization: "wúliáo de" },
            { option: "B", answer: "discouraging", chinese_answer: "令人沮丧的", chinese_romanization: "lìngrén jǔsàng de" },
            { option: "C", answer: "uninviting", chinese_answer: "不吸引人的", chinese_romanization: "bù xīyǐn rén de" },
            { option: "D", answer: "enticing", chinese_answer: "诱人的", chinese_romanization: "yòurén de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'enticing' means attractive or tempting; alluring." +
            "<br><br>" +
            "(A) 'boring' means not interesting; tedious." +
            "<br><br>" +
            "(B) 'discouraging' means causing someone to lose confidence or enthusiasm." +
            "<br><br>" +
            "(C) 'uninviting' means not attractive or pleasant.",
        chinese_explanation: "(D) '诱人的' 意味着有吸引力或诱惑力的。" +
            "<br><br>" +
            "(A) '无聊的' 意味着不有趣的；乏味的。" +
            "<br><br>" +
            "(B) '令人沮丧的' 意味着使某人失去信心或热情的。" +
            "<br><br>" +
            "(C) '不吸引人的' 意味着不吸引人或令人愉快的。"
    },
    {
        id: 3,
        question: "Her __________ personality made her the center of attention at every social gathering.",
        chinese_question: "她 __________ 的个性使她在每次社交聚会中成为关注的焦点。",
        answers: [
            { option: "A", answer: "charming", chinese_answer: "迷人的", chinese_romanization: "mírénde" },
            { option: "B", answer: "dull", chinese_answer: "无聊的", chinese_romanization: "wúliáo de" },
            { option: "C", answer: "boring", chinese_answer: "乏味的", chinese_romanization: "fáwèi de" },
            { option: "D", answer: "repulsive", chinese_answer: "令人厌恶的", chinese_romanization: "lìngrén yànwù de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'charming' means pleasant or attractive." +
            "<br><br>" +
            "(B) 'dull' means lacking interest or excitement." +
            "<br><br>" +
            "(C) 'boring' means not interesting; tedious." +
            "<br><br>" +
            "(D) 'repulsive' means arousing intense distaste or disgust.",
        chinese_explanation: "(A) '迷人的' 意味着令人愉快或有吸引力的。" +
            "<br><br>" +
            "(B) '无聊的' 意味着缺乏兴趣或兴奋的。" +
            "<br><br>" +
            "(C) '乏味的' 意味着不有趣的；乏味的。" +
            "<br><br>" +
            "(D) '令人厌恶的' 意味着引起强烈的厌恶或厌恶的。"
    },
    {
        id: 4,
        question: "Her __________ personality often led her to take charge in group projects, ensuring everything was done efficiently.",
        chinese_question: "她 __________ 的性格经常使她在小组项目中负责，确保一切都高效完成。",
        answers: [
            { option: "A", answer: "passive", chinese_answer: "被动的", chinese_romanization: "bèidòng de" },
            { option: "B", answer: "dominant", chinese_answer: "支配的", chinese_romanization: "zhīpèi de" },
            { option: "C", answer: "hesitant", chinese_answer: "犹豫的", chinese_romanization: "yóuyù de" },
            { option: "D", answer: "indifferent", chinese_answer: "冷漠的", chinese_romanization: "lěngmò de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'dominant' means having power and influence over others." +
            "<br><br>" +
            "(A) 'passive' means accepting or allowing what happens without active response or resistance." +
            "<br><br>" +
            "(C) 'hesitant' means tentative, unsure, or slow in acting or speaking." +
            "<br><br>" +
            "(D) 'indifferent' means having no particular interest or sympathy; unconcerned.",
        chinese_explanation: "(B) '支配的' 意味着拥有对他人的权力和影响力。" +
            "<br><br>" +
            "(A) '被动的' 意味着接受或允许发生的事情而不主动回应或抵抗的。" +
            "<br><br>" +
            "(C) '犹豫的' 意味着犹豫不决、不确定或行动或说话缓慢的。" +
            "<br><br>" +
            "(D) '冷漠的' 意味着没有特别的兴趣或同情；不关心的。"
    },
    {
        id: 5,
        question: "His __________ charm made people trust him easily, even though he had ulterior motives.",
        chinese_question: "他的 __________ 魅力让人们很容易信任他，尽管他别有用心。",
        answers: [
            { option: "A", answer: "deceptive", chinese_answer: "欺骗性的", chinese_romanization: "qīpiànxìng de" },
            { option: "B", answer: "genuine", chinese_answer: "真诚的", chinese_romanization: "zhēnchéng de" },
            { option: "C", answer: "honest", chinese_answer: "诚实的", chinese_romanization: "chéngshí de" },
            { option: "D", answer: "sincere", chinese_answer: "真挚的", chinese_romanization: "zhēnzhì de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'deceptive' means giving an appearance or impression different from the true one; misleading." +
            "<br><br>" +
            "(B) 'genuine' means truly what something is said to be; authentic." +
            "<br><br>" +
            "(C) 'honest' means free of deceit; truthful and sincere." +
            "<br><br>" +
            "(D) 'sincere' means free from pretense or deceit; proceeding from genuine feelings.",
        chinese_explanation: "(A) '欺骗性的' 意味着给人一种与真实情况不同的外观或印象；具有误导性的。" +
            "<br><br>" +
            "(B) '真诚的' 意味着真正的，真实的；真实的。" +
            "<br><br>" +
            "(C) '诚实的' 意味着没有欺骗的；真实和真诚的。" +
            "<br><br>" +
            "(D) '真挚的' 意味着没有伪装或欺骗的；源自真情实感的。"
    },
    {
        id: 6,
        question: "The __________ atmosphere at the party made it a memorable evening for everyone who attended.",
        chinese_question: "聚会的 __________ 氛围使每个参加的人都度过了一个难忘的夜晚。",
        answers: [
            { option: "A", answer: "dull", chinese_answer: "枯燥的", chinese_romanization: "kūzào de" },
            { option: "B", answer: "convivial", chinese_answer: "欢乐的", chinese_romanization: "huānlè de" },
            { option: "C", answer: "somber", chinese_answer: "忧郁的", chinese_romanization: "yōuyù de" },
            { option: "D", answer: "quiet", chinese_answer: "安静的", chinese_romanization: "ānjìng de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'convivial' means (of an atmosphere or event) friendly, lively, and enjoyable." +
            "<br><br>" +
            "(A) 'dull' means lacking interest or excitement." +
            "<br><br>" +
            "(C) 'somber' means dark or dull in color or tone; gloomy." +
            "<br><br>" +
            "(D) 'quiet' means making little or no noise.",
        chinese_explanation: "(B) '欢乐的' 一词意味着（气氛或事件）友好、热闹和愉快的。" +
            "<br><br>" +
            "(A) '枯燥的' 意味着缺乏兴趣或兴奋的。" +
            "<br><br>" +
            "(C) '忧郁的' 意味着颜色或色调暗淡或沉闷的；阴郁的。" +
            "<br><br>" +
            "(D) '安静的' 意味着几乎没有或没有噪音的。"
    },
    {
        id: 7,
        question: "His argument was __________, full of holes and easily refuted by the opposition.",
        chinese_question: "他的论点__________，漏洞百出，很容易被对方反驳。",
        answers: [
            { option: "A", answer: "solid", chinese_answer: "固体的", chinese_romanization: "gùtǐ de" },
            { option: "B", answer: "impermeable", chinese_answer: "不透水的", chinese_romanization: "bù tòushuǐ de" },
            { option: "C", answer: "porous", chinese_answer: "多孔的", chinese_romanization: "duōkǒng de" },
            { option: "D", answer: "dense", chinese_answer: "密集的", chinese_romanization: "mìjí de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'porous' means having minute spaces or holes through which liquid or air may pass. Figuratively, it can mean weak and full of flaws." +
            "<br><br>" +
            "(A) 'solid' means firm and stable in shape; not liquid or fluid." +
            "<br><br>" +
            "(B) 'impermeable' means not allowing fluid to pass through." +
            "<br><br>" +
            "(D) 'dense' means closely compacted in substance.",
        chinese_explanation: "(C) '多孔的'一词意味着有微小的空间或孔洞，液体或空气可以通过。比喻地，它可以表示薄弱且充满缺陷。" +
            "<br><br>" +
            "(A) '固体的' 意味着形状稳定且不液化或流体。" +
            "<br><br>" +
            "(B) '不透水的' 意味着不允许液体通过。" +
            "<br><br>" +
            "(D) '密集的' 意味着物质紧密地压缩在一起。"
    },
    {
        id: 8,
        question: "He was __________ to the fact that his actions were hurting those around him.",
        chinese_question: "他对自己的行为正在伤害周围的人这一事实__________。",
        answers: [
            { option: "A", answer: "aware", chinese_answer: "知道的", chinese_romanization: "zhīdào de" },
            { option: "B", answer: "oblivious", chinese_answer: "无视的", chinese_romanization: "wúshì de" },
            { option: "C", answer: "attentive", chinese_answer: "注意的", chinese_romanization: "zhùyì de" },
            { option: "D", answer: "conscious", chinese_answer: "有意识的", chinese_romanization: "yǒuyìshí de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'oblivious' means not aware of or not concerned about what is happening around one. Figuratively, it can mean being unaware of the effects of one's actions." +
            "<br><br>" +
            "(A) 'aware' means having knowledge or perception of a situation or fact." +
            "<br><br>" +
            "(C) 'attentive' means paying close attention to something." +
            "<br><br>" +
            "(D) 'conscious' means aware of and responding to one's surroundings.",
        chinese_explanation: "(B) '无视的'一词意味着对周围发生的事情没有意识或不关心。比喻地，它可以表示对自己行为的影响没有意识。" +
            "<br><br>" +
            "(A) '知道的' 意味着对某种情况或事实有知识或感知。" +
            "<br><br>" +
            "(C) '注意的' 意味着密切关注某事。" +
            "<br><br>" +
            "(D) '有意识的' 意味着对周围的环境有意识并做出反应。"
    },
    {
        id: 9,
        question: "The city faced __________ problems of traffic congestion and pollution, with no immediate solutions in sight.",
        chinese_question: "这座城市面临 __________ 的交通拥堵和污染问题，暂无立即解决方案。",
        answers: [
            { option: "A", answer: "chronic", chinese_answer: "慢性的", chinese_romanization: "mànxìng de" },
            { option: "B", answer: "minor", chinese_answer: "轻微的", chinese_romanization: "qīngwēi de" },
            { option: "C", answer: "occasional", chinese_answer: "偶尔的", chinese_romanization: "ǒu'ěr de" },
            { option: "D", answer: "transient", chinese_answer: "短暂的", chinese_romanization: "duǎnzàn de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'chronic' means persisting for a long time or constantly recurring." +
            "<br><br>" +
            "(B) 'minor' means lesser in importance, seriousness, or significance." +
            "<br><br>" +
            "(C) 'occasionally' means occurring at irregular intervals; infrequent." +
            "<br><br>" +
            "(D) 'transient' means lasting only for a short time; impermanent.",
        chinese_explanation: "(A) '慢性的' 意味着持续很长时间或不断重复发生的。" +
            "<br><br>" +
            "(B) '轻微的' 意味着重要性、严重性或意义较小的。" +
            "<br><br>" +
            "(C) '偶尔的' 意味着不定期发生的；不频繁的。" +
            "<br><br>" +
            "(D) '短暂的' 意味着仅持续短时间的；短暂的。"
    },
    {
        id: 10,
        question: "Her boss's __________ criticism left her feeling demoralized and unsure of her abilities.",
        chinese_question: "她老板的__________批评让她感到士气低落，不确定自己的能力。",
        answers: [
            { option: "A", answer: "supportive", chinese_answer: "支持的", chinese_romanization: "zhīchí de" },
            { option: "B", answer: "mild", chinese_answer: "温和的", chinese_romanization: "wēnhé de" },
            { option: "C", answer: "harsh", chinese_answer: "严厉的", chinese_romanization: "yánlì de" },
            { option: "D", answer: "kind", chinese_answer: "友善的", chinese_romanization: "yǒushàn de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'harsh' means unpleasantly rough or jarring to the senses. Figuratively, it can mean severe or cruel criticism." +
            "<br><br>" +
            "(A) 'supportive' means providing encouragement or emotional help." +
            "<br><br>" +
            "(B) 'mild' means gentle and not easily provoked." +
            "<br><br>" +
            "(D) 'kind' means having or showing a friendly, generous, and considerate nature.",
        chinese_explanation: "(C) '严厉的'一词意味着对感觉不愉快的粗糙或刺耳的。比喻地，它可以表示严厉或残酷的批评。" +
            "<br><br>" +
            "(A) '支持的' 意味着提供鼓励或情感帮助的。" +
            "<br><br>" +
            "(B) '温和的' 意味着温柔且不易被激怒。" +
            "<br><br>" +
            "(D) '友善的' 意味着有或显示友好、慷慨和体贴的性格。"
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
