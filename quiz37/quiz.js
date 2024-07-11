// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "Her __________ personality made her popular at social gatherings, as people were naturally drawn to her.",
        chinese_question: "她 __________ 的性格使她在社交聚会上很受欢迎，人们自然被她吸引。",
        answers: [
            { option: "A", answer: "congenial", chinese_answer: "友好的", chinese_romanization: "yǒuhǎo de" },
            { option: "B", answer: "abrasive", chinese_answer: "粗鲁的", chinese_romanization: "cūlǔ de" },
            { option: "C", answer: "aloof", chinese_answer: "冷淡的", chinese_romanization: "lěngdàn de" },
            { option: "D", answer: "stern", chinese_answer: "严厉的", chinese_romanization: "yánlì de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'congenial' means pleasant because of a personality, qualities, or interests that are similar to one's own." +
            "<br><br>" +
            "(B) 'abrasive' means showing little concern for the feelings of others; harsh." +
            "<br><br>" +
            "(C) 'aloof' means not friendly or forthcoming; cool and distant." +
            "<br><br>" +
            "(D) 'stern' means serious and unrelenting, especially in the assertion of authority and exercise of discipline.",
        chinese_explanation: "(A) '友好的' 意味着由于个性、品质或兴趣与自己相似而令人愉快的。" +
            "<br><br>" +
            "(B) '粗鲁的' 意味着对他人的感受关心很少的；严厉的。" +
            "<br><br>" +
            "(C) '冷淡的' 意味着不友好或不主动的；冷酷而疏远的。" +
            "<br><br>" +
            "(D) '严厉的' 意味着严肃而坚定的，尤其是在行使权威和纪律时。"
    },
    {
        id: 2,
        question: "His __________ efforts in volunteering made a significant impact on the community.",
        chinese_question: "他在志愿服务中的__________努力对社区产生了重大影响。",
        answers: [
            { option: "A", answer: "careless", chinese_answer: "粗心的", chinese_romanization: "cūxīn de" },
            { option: "B", answer: "negligent", chinese_answer: "疏忽的", chinese_romanization: "shūhū de" },
            { option: "C", answer: "conscientious", chinese_answer: "认真的", chinese_romanization: "rènzhēn de" },
            { option: "D", answer: "lazy", chinese_answer: "懒惰的", chinese_romanization: "lǎnduò de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'conscientious' means wishing to do one's work or duty well and thoroughly. Figuratively, it can mean being very diligent and careful in any endeavor." +
            "<br><br>" +
            "(A) 'careless' means not giving sufficient attention or thought to avoiding harm or errors." +
            "<br><br>" +
            "(B) 'negligent' means failing to take proper care in doing something." +
            "<br><br>" +
            "(D) 'lazy' means unwilling to work or use energy.",
        chinese_explanation: "(C) '认真的'一词意味着希望做好并彻底地完成自己的工作或职责。比喻地，它可以表示在任何努力中非常勤奋和细心。" +
            "<br><br>" +
            "(A) '粗心的' 意味着没有给予足够的注意或考虑以避免伤害或错误。" +
            "<br><br>" +
            "(B) '疏忽的' 意味着未能适当地照顾某事。" +
            "<br><br>" +
            "(D) '懒惰的' 意味着不愿意工作或使用精力。"
    },
    {
        id: 3,
        question: "The company reported growth in sales for five __________ quarters, boosting investor confidence.",
        chinese_question: "公司报告称，销售额在五个 __________ 季度中增长，增强了投资者的信心。",
        answers: [
            { option: "A", answer: "consecutive", chinese_answer: "连续的", chinese_romanization: "liánxù de" },
            { option: "B", answer: "erratic", chinese_answer: "不稳定的", chinese_romanization: "bù wěndìng de" },
            { option: "C", answer: "isolated", chinese_answer: "孤立的", chinese_romanization: "gūlì de" },
            { option: "D", answer: "intermittent", chinese_answer: "间歇的", chinese_romanization: "jiànxiē de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'consecutive' means following continuously; in unbroken or logical sequence." +
            "<br><br>" +
            "(B) 'erratic' means not even or regular in pattern or movement; unpredictable." +
            "<br><br>" +
            "(C) 'isolated' means far away from other places, buildings, or people; remote." +
            "<br><br>" +
            "(D) 'intermittent' means occurring at irregular intervals; not continuous or steady.",
        chinese_explanation: "(A) '连续的' 意味着连续地跟随；按照不间断或逻辑顺序。" +
            "<br><br>" +
            "(B) '不稳定的' 意味着在模式或运动中不均匀或规律；不可预测。" +
            "<br><br>" +
            "(C) '孤立的' 意味着远离其他地方、建筑物或人群；偏僻的。" +
            "<br><br>" +
            "(D) '间歇的' 意味着在不规则的间隔发生；不连续或稳定的。"
    },
    {
        id: 4,
        question: "The talk show host's __________ interviewing technique, which included thorough research and genuine interest in guests, became the industry standard.",
        chinese_question: "脱口秀主持人 __________ 的采访技巧，包括详尽的研究和对嘉宾的真正兴趣，成为了行业标准。",
        answers: [
            { option: "A", answer: "careless", chinese_answer: "粗心的", chinese_romanization: "cūxīn de" },
            { option: "B", answer: "dull", chinese_answer: "乏味的", chinese_romanization: "fáwèi de" },
            { option: "C", answer: "ineffective", chinese_answer: "无效的", chinese_romanization: "wúxiào de" },
            { option: "D", answer: "paradigmatic", chinese_answer: "典范的", chinese_romanization: "diǎnfàn de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'paradigmatic' means serving as a model or example." +
            "<br><br>" +
            "(A) 'careless' means not giving sufficient attention or thought." +
            "<br><br>" +
            "(B) 'dull' means lacking interest or excitement." +
            "<br><br>" +
            "(C) 'ineffective' means not producing the desired effect.",
        chinese_explanation: "(D) '典范的' 意思是作为模型或例子。" +
            "<br><br>" +
            "(A) '粗心的' 意思是没有给予足够的注意或考虑。" +
            "<br><br>" +
            "(B) '乏味的' 意思是缺乏兴趣或兴奋。" +
            "<br><br>" +
            "(C) '无效的' 意思是没有产生预期效果的。"
    },
    {
        id: 5,
        question: "The new policy was __________ towards innovation, encouraging creativity and fresh ideas.",
        chinese_question: "新政策对创新非常 __________，鼓励创造力和新想法。",
        answers: [
            { option: "A", answer: "hospitable", chinese_answer: "有利", chinese_romanization: "yǒulì" },
            { option: "B", answer: "hostile", chinese_answer: "敌对", chinese_romanization: "díduì" },
            { option: "C", answer: "resistant", chinese_answer: "抵抗", chinese_romanization: "dǐkàng" },
            { option: "D", answer: "indifferent", chinese_answer: "冷漠", chinese_romanization: "lěngmò" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'hospitable' metaphorically means conducive or favorable to something." +
            "<br><br>" +
            "(B) 'hostile' means unfriendly; antagonistic." +
            "<br><br>" +
            "(C) 'resistant' means offering resistance to something or someone." +
            "<br><br>" +
            "(D) 'indifferent' means having no particular interest or sympathy; unconcerned.",
        chinese_explanation: "(A) '有利' 比喻对某事物有利或有利。" +
            "<br><br>" +
            "(B) '敌对' 意味着不友好的；对抗的。" +
            "<br><br>" +
            "(C) '抵抗' 意味着对某事或某人提供抵抗。" +
            "<br><br>" +
            "(D) '冷漠' 意味着没有特别的兴趣或同情心；不关心的。"
    },
    {
        id: 6,
        question: "His __________ reaction to criticism often prevented him from receiving valuable feedback.",
        chinese_question: "他对批评的__________反应常常阻碍他获得宝贵的反馈。",
        answers: [
            { option: "A", answer: "calm", chinese_answer: "冷静", chinese_romanization: "lěngjìng" },
            { option: "B", answer: "cheerful", chinese_answer: "愉快", chinese_romanization: "yúkuài" },
            { option: "C", answer: "irascible", chinese_answer: "易怒", chinese_romanization: "yìnù" },
            { option: "D", answer: "patient", chinese_answer: "耐心", chinese_romanization: "nàixīn" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'irascible' means having or showing a tendency to be easily angered. Figuratively, it can mean being easily irritated or quick to take offense." +
            "<br><br>" +
            "(A) 'calm' means not showing or feeling nervousness, anger, or other strong emotions." +
            "<br><br>" +
            "(B) 'cheerful' means noticeably happy and optimistic." +
            "<br><br>" +
            "(D) 'patient' means able to accept or tolerate delays, problems, or suffering without becoming annoyed or anxious.",
        chinese_explanation: "(C) '易怒'一词意味着有或表现出容易生气的倾向。比喻地，它可以表示容易激怒或快速冒犯。" +
            "<br><br>" +
            "(A) '冷静' 意味着不表现出或感觉紧张、愤怒或其他强烈情绪。" +
            "<br><br>" +
            "(B) '愉快' 意味着明显地快乐和乐观。" +
            "<br><br>" +
            "(D) '耐心' 意味着能够接受或容忍延误、问题或痛苦而不变得恼火或焦虑。"
    },
    {
        id: 7,
        question: "His __________ behavior at the dinner party embarrassed his friends, who were unaccustomed to such rudeness.",
        chinese_question: "他在晚宴上的 __________ 行为让他的朋友们感到尴尬，因为他们不习惯这种粗鲁。",
        answers: [
            { option: "A", answer: "polite", chinese_answer: "有礼貌的", chinese_romanization: "yǒu lǐmào de" },
            { option: "B", answer: "churlish", chinese_answer: "粗鲁的", chinese_romanization: "cūlǔ de" },
            { option: "C", answer: "courteous", chinese_answer: "有礼貌的", chinese_romanization: "yǒu lǐmào de" },
            { option: "D", answer: "respectful", chinese_answer: "尊重的", chinese_romanization: "zūnzhòng de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'churlish' means rude in a mean-spirited and surly way." +
            "<br><br>" +
            "(A) 'polite' means having or showing behavior that is respectful and considerate of other people." +
            "<br><br>" +
            "(C) 'courteous' means polite, respectful, or considerate in manner." +
            "<br><br>" +
            "(D) 'respectful' means feeling or showing deference and respect.",
        chinese_explanation: "(B) '粗鲁的' 一词意味着以恶意和粗暴的方式无礼的。" +
            "<br><br>" +
            "(A) '有礼貌的' 意味着表现出尊重和体贴他人的行为。" +
            "<br><br>" +
            "(C) '有礼貌的' 意味着礼貌、尊重或体贴的。" +
            "<br><br>" +
            "(D) '尊重的' 意味着感到或表现出尊重和尊敬的。"
    },
    {
        id: 8,
        question: "The professor's lecture was so __________ that many students struggled to stay awake.",
        chinese_question: "教授的讲座如此 __________，以至于许多学生都难以保持清醒。",
        answers: [
            { option: "A", answer: "exciting", chinese_answer: "刺激的", chinese_romanization: "cìjī de" },
            { option: "B", answer: "vapid", chinese_answer: "无味的", chinese_romanization: "wúwèi de" },
            { option: "C", answer: "interesting", chinese_answer: "有趣的", chinese_romanization: "yǒuqù de" },
            { option: "D", answer: "stimulating", chinese_answer: "激励的", chinese_romanization: "jīlì de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'vapid' means offering nothing that is stimulating or challenging; bland." +
            "<br><br>" +
            "(A) 'exciting' means causing great enthusiasm and eagerness." +
            "<br><br>" +
            "(C) 'interesting' means arousing curiosity or interest; holding or catching the attention." +
            "<br><br>" +
            "(D) 'stimulating' means encouraging or arousing interest or enthusiasm.",
        chinese_explanation: "(B) '无味的' 一词意味着没有提供任何刺激或挑战的；平淡的。" +
            "<br><br>" +
            "(A) '刺激的' 意味着引起极大热情和热切的。" +
            "<br><br>" +
            "(C) '有趣的' 意味着引起好奇或兴趣的；吸引注意力的。" +
            "<br><br>" +
            "(D) '激励的' 意味着鼓励或引起兴趣或热情的。"
    },
    {
        id: 9,
        question: "The two events were __________, occurring at the same time but in different locations.",
        chinese_question: "这两件事是 __________ 的，同时发生在不同的地点。",
        answers: [
            { option: "A", answer: "separate", chinese_answer: "分开的", chinese_romanization: "fēnkāi de" },
            { option: "B", answer: "disjointed", chinese_answer: "不连贯的", chinese_romanization: "bù liánguàn de" },
            { option: "C", answer: "unrelated", chinese_answer: "无关的", chinese_romanization: "wúguān de" },
            { option: "D", answer: "concurrent", chinese_answer: "同时的", chinese_romanization: "tóngshí de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'concurrent' means existing, happening, or done at the same time." +
            "<br><br>" +
            "(A) 'separate' means forming or viewed as a unit apart or by itself." +
            "<br><br>" +
            "(B) 'disjointed' means lacking a coherent sequence or connection." +
            "<br><br>" +
            "(C) 'unrelated' means not related or linked.",
        chinese_explanation: "(D) '同时的' 一词意味着同时存在、发生或完成的。" +
            "<br><br>" +
            "(A) '分开的' 意味着作为一个单独的单元或自身被视为一个单位。" +
            "<br><br>" +
            "(B) '不连贯的' 意味着缺乏连贯的顺序或联系的。" +
            "<br><br>" +
            "(C) '无关的' 意味着没有关系或联系。"
    },
    {
        id: 10,
        question: "The lawyer dismissed the claims as __________, arguing that they had no real value or importance.",
        chinese_question: "律师将这些主张视为 __________，认为它们没有真正的价值或重要性。",
        answers: [
            { option: "A", answer: "nugatory", chinese_answer: "无价值的", chinese_romanization: "wú jiàzhí de" },
            { option: "B", answer: "significant", chinese_answer: "重要的", chinese_romanization: "zhòngyào de" },
            { option: "C", answer: "relevant", chinese_answer: "相关的", chinese_romanization: "xiāngguān de" },
            { option: "D", answer: "substantial", chinese_answer: "实质性的", chinese_romanization: "shízhì xìng de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'nugatory' means of no value or importance." +
            "<br><br>" +
            "(B) 'significant' means sufficiently great or important to be worthy of attention; noteworthy." +
            "<br><br>" +
            "(C) 'relevant' means closely connected or appropriate to what is being done or considered." +
            "<br><br>" +
            "(D) 'substantial' means of considerable importance, size, or worth.",
        chinese_explanation: "(A) '无价值的' 一词意味着没有价值或重要性。" +
            "<br><br>" +
            "(B) '重要的' 意味着足够伟大或重要，值得注意的。" +
            "<br><br>" +
            "(C) '相关的' 意味着与正在做或考虑的事情密切相关或适当的。" +
            "<br><br>" +
            "(D) '实质性的' 意味着相当重要、规模或价值的。"
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
