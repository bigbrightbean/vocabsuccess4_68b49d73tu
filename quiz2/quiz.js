// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The __________ task of cleaning up after the festival took the volunteers several days to complete.",
        chinese_question: "节日后清理的 __________ 任务花了志愿者几天时间才完成。",
        answers: [
            { option: "A", answer: "easy", chinese_answer: "容易的", chinese_romanization: "róngyì de" },
            { option: "B", answer: "simple", chinese_answer: "简单的", chinese_romanization: "jiǎndān de" },
            { option: "C", answer: "pleasant", chinese_answer: "令人愉快的", chinese_romanization: "lìngrén yúkuài de" },
            { option: "D", answer: "onerous", chinese_answer: "繁重的", chinese_romanization: "fánzhòng de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'onerous' means involving a great deal of effort, trouble, or difficulty." +
            "<br><br>" +
            "(A) 'easy' means achieved without great effort; presenting few difficulties." +
            "<br><br>" +
            "(B) 'simple' means easily understood or done; presenting no difficulty." +
            "<br><br>" +
            "(C) 'pleasant' means giving a sense of happy satisfaction or enjoyment.",
        chinese_explanation: "(D) '繁重的' 意味着涉及大量的努力、麻烦或困难。" +
            "<br><br>" +
            "(A) '容易的' 意味着不费力气；没有太大困难。" +
            "<br><br>" +
            "(B) '简单的' 意味着容易理解或完成；没有困难。" +
            "<br><br>" +
            "(C) '令人愉快的' 意味着带来快乐的满足感或享受。"
    },
    {
        id: 2,
        question: "Her schedule was so __________ with meetings and appointments that she barely had time to eat.",
        chinese_question: "她的日程安排__________，会议和约会多到几乎没有时间吃饭。",
        answers: [
            { option: "A", answer: "clear", chinese_answer: "清晰的", chinese_romanization: "qīngxī de" },
            { option: "B", answer: "congested", chinese_answer: "拥堵的", chinese_romanization: "yōngdǔ de" },
            { option: "C", answer: "empty", chinese_answer: "空的", chinese_romanization: "kōng de" },
            { option: "D", answer: "vacant", chinese_answer: "空闲的", chinese_romanization: "kōngxián de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'congested' means so crowded with traffic or people as to hinder freedom of movement. Figuratively, it can mean being extremely busy or overcrowded." +
            "<br><br>" +
            "(A) 'clear' means free of obstruction." +
            "<br><br>" +
            "(C) 'empty' means containing nothing; not filled or occupied." +
            "<br><br>" +
            "(D) 'vacant' means having no fixtures, furniture, or inhabitants; empty.",
        chinese_explanation: "(B) '拥堵的'一词意味着被交通或人群严重拥挤，以致妨碍自由移动。比喻地，它可以表示非常忙碌或过于拥挤。" +
            "<br><br>" +
            "(A) '清晰的' 意味着没有障碍。" +
            "<br><br>" +
            "(C) '空的' 意味着不包含任何东西；未填充或占据。" +
            "<br><br>" +
            "(D) '空闲的' 意味着没有装置、家具或居民的；空的。"
    },
    {
        id: 3,
        question: "He felt __________ when it came to understanding complex legal documents.",
        chinese_question: "在理解复杂的法律文件时，他感到自己是__________。",
        answers: [
            { option: "A", answer: "educated", chinese_answer: "受教育的", chinese_romanization: "shòu jiàoyù de" },
            { option: "B", answer: "knowledgeable", chinese_answer: "有知识的", chinese_romanization: "yǒu zhīshì de" },
            { option: "C", answer: "illiterate", chinese_answer: "文盲的", chinese_romanization: "wénmáng de" },
            { option: "D", answer: "literate", chinese_answer: "有读写能力的", chinese_romanization: "yǒu dúxiě nénglì de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'illiterate' means unable to read or write. Figuratively, it can mean lacking knowledge in a particular subject." +
            "<br><br>" +
            "(A) 'educated' means having received education, especially to a high level." +
            "<br><br>" +
            "(B) 'knowledgeable' means intelligent and well informed." +
            "<br><br>" +
            "(D) 'literate' means able to read and write.",
        chinese_explanation: "(C) '文盲的'一词意味着不能阅读或写作。比喻地，它可以表示在特定学科上缺乏知识。" +
            "<br><br>" +
            "(A) '受教育的' 意味着接受过教育的，尤其是达到较高水平的。" +
            "<br><br>" +
            "(B) '有知识的' 意味着聪明且知识渊博的。" +
            "<br><br>" +
            "(D) '有读写能力的' 意味着能够阅读和写作。"
    },
    {
        id: 4,
        question: "His __________ instincts kicked in when he found himself in a dangerous situation.",
        chinese_question: "当他发现自己处于危险境地时，他的 __________ 本能开始起作用。",
        answers: [
            { option: "A", answer: "primeval", chinese_answer: "原始的", chinese_romanization: "yuánshǐ de" },
            { option: "B", answer: "refined", chinese_answer: "精炼的", chinese_romanization: "jīngliàn de" },
            { option: "C", answer: "civilized", chinese_answer: "文明的", chinese_romanization: "wénmíng de" },
            { option: "D", answer: "polished", chinese_answer: "完美的", chinese_romanization: "wánměi de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'primeval' metaphorically means relating to an instinctual or ancient part of human nature." +
            "<br><br>" +
            "(B) 'refined' means with impurities or unwanted elements having been removed by processing." +
            "<br><br>" +
            "(C) 'civilized' means at an advanced stage of social and cultural development." +
            "<br><br>" +
            "(D) 'polished' means accomplished and skillful.",
        chinese_explanation: "(A) '原始的' 比喻与人类天性中的本能或古老部分有关。" +
            "<br><br>" +
            "(B) '精炼的' 意味着通过加工去除杂质或不需要的元素。" +
            "<br><br>" +
            "(C) '文明的' 意味着在社会和文化发展上处于先进阶段的。" +
            "<br><br>" +
            "(D) '完美的' 意味着完成的和有技能的。"
    },
    {
        id: 5,
        question: "Engaging in __________ arguments only wastes time and energy.",
        chinese_question: "参与__________的争论只会浪费时间和精力。",
        answers: [
            { option: "A", answer: "meaningful", chinese_answer: "有意义的", chinese_romanization: "yǒu yìyì de" },
            { option: "B", answer: "purposeful", chinese_answer: "有目的的", chinese_romanization: "yǒu mùdì de" },
            { option: "C", answer: "senseless", chinese_answer: "无意义的", chinese_romanization: "wú yìyì de" },
            { option: "D", answer: "significant", chinese_answer: "显著的", chinese_romanization: "xiǎnzhù de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'senseless' means without discernible meaning or purpose. Figuratively, it can mean actions that lack reason or justification." +
            "<br><br>" +
            "(A) 'meaningful' means having meaning; full of significance, purpose, or value." +
            "<br><br>" +
            "(B) 'purposeful' means having or showing determination or resolve." +
            "<br><br>" +
            "(D) 'significant' means sufficiently great or important to be worthy of attention; noteworthy.",
        chinese_explanation: "(C) '无意义的'一词意味着没有明显的意义或目的。比喻地，它可以表示缺乏理由或正当性的行为。" +
            "<br><br>" +
            "(A) '有意义的' 意味着有意义的；充满意义、目的或价值的。" +
            "<br><br>" +
            "(B) '有目的的' 意味着有或表现出决心或决意的。" +
            "<br><br>" +
            "(D) '显著的' 意味着足够大或重要到值得注意的；值得注意的。"
    },
    {
        id: 6,
        question: "His constant __________ comments drained the team's morale.",
        chinese_question: "他不断的 __________ 评论削弱了团队的士气。",
        answers: [
            { option: "A", answer: "negative", chinese_answer: "消极的", chinese_romanization: "xiāojí de" },
            { option: "B", answer: "positive", chinese_answer: "积极的", chinese_romanization: "jījí de" },
            { option: "C", answer: "uplifting", chinese_answer: "振奋的", chinese_romanization: "zhènfèn de" },
            { option: "D", answer: "encouraging", chinese_answer: "鼓励的", chinese_romanization: "gǔlì de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'negative' metaphorically means harmful or unconstructive." +
            "<br><br>" +
            "(B) 'positive' means beneficial or constructive." +
            "<br><br>" +
            "(C) 'uplifting' means morally or spiritually elevating; inspiring happiness or hope." +
            "<br><br>" +
            "(D) 'encouraging' means giving someone support or confidence; supportive.",
        chinese_explanation: "(A) '消极的' 比喻有害的或无建设性的。" +
            "<br><br>" +
            "(B) '积极的' 意味着有益的或有建设性的。" +
            "<br><br>" +
            "(C) '振奋的' 意味着道德上或精神上提升；激发幸福或希望的。" +
            "<br><br>" +
            "(D) '鼓励的' 意味着给某人支持或信心的；支持的。"
    },
    {
        id: 7,
        question: "Their relationship was in a __________ state and required careful attention.",
        chinese_question: "他们的关系处于 __________ 状态，需要小心关注。",
        answers: [
            { option: "A", answer: "delicate", chinese_answer: "微妙的", chinese_romanization: "wēimiào de" },
            { option: "B", answer: "stable", chinese_answer: "稳定的", chinese_romanization: "wěndìng de" },
            { option: "C", answer: "solid", chinese_answer: "坚固的", chinese_romanization: "jiāngù de" },
            { option: "D", answer: "resilient", chinese_answer: "有弹性的", chinese_romanization: "yǒu tánxìng de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'delicate' metaphorically means easily disrupted or requiring careful handling." +
            "<br><br>" +
            "(B) 'stable' means not likely to change or fail; firmly established." +
            "<br><br>" +
            "(C) 'solid' means firm and stable in shape; not liquid or fluid." +
            "<br><br>" +
            "(D) 'resilient' means able to withstand or recover quickly from difficult conditions.",
        chinese_explanation: "(A) '微妙的' 比喻容易受到干扰或需要小心处理。" +
            "<br><br>" +
            "(B) '稳定的' 意味着不太可能改变或失败；稳固建立的。" +
            "<br><br>" +
            "(C) '坚固的' 意味着形状坚固稳定；不是液体或流体的。" +
            "<br><br>" +
            "(D) '有弹性的' 意味着能够从困难条件中快速承受或恢复。"
    },
    {
        id: 8,
        question: "The corrupt politician's __________ actions led to widespread public outrage.",
        chinese_question: "腐败政客的 __________ 行为引发了广泛的公众愤怒。",
        answers: [
            { option: "A", answer: "honorable", chinese_answer: "荣誉", chinese_romanization: "róngyù" },
            { option: "B", answer: "virtuous", chinese_answer: "有德", chinese_romanization: "yǒu dé" },
            { option: "C", answer: "noble", chinese_answer: "高尚", chinese_romanization: "gāoshàng" },
            { option: "D", answer: "depraved", chinese_answer: "堕落", chinese_romanization: "duòluò" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'depraved' means morally corrupt or wicked." +
            "<br><br>" +
            "(A) 'honorable' means bringing or worthy of honor." +
            "<br><br>" +
            "(B) 'virtuous' means having or showing high moral standards." +
            "<br><br>" +
            "(C) 'noble' means having or showing fine personal qualities or high moral principles.",
        chinese_explanation: "(D) '堕落' 意味着道德腐败或邪恶的。" +
            "<br><br>" +
            "(A) '荣誉' 意味着带来或值得尊敬。" +
            "<br><br>" +
            "(B) '有德' 意味着具有或显示出高尚的道德标准。" +
            "<br><br>" +
            "(C) '高尚' 意味着具有或表现出良好个人品质或高尚道德原则。"
    },
    {
        id: 9,
        question: "The __________ lifestyle he led was evident from his worn-out clothes and his habit of skipping meals to save money.",
        chinese_question: "他 __________ 的生活方式从他破旧的衣服和为省钱而不吃饭的习惯中显而易见。",
        answers: [
            { option: "A", answer: "lavish", chinese_answer: "奢华的", chinese_romanization: "shēhuá de" },
            { option: "B", answer: "generous", chinese_answer: "慷慨的", chinese_romanization: "kāngkǎi de" },
            { option: "C", answer: "comfortable", chinese_answer: "舒适的", chinese_romanization: "shūshì de" },
            { option: "D", answer: "penurious", chinese_answer: "贫困的", chinese_romanization: "pínkùn de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'penurious' means extremely poor; poverty-stricken." +
            "<br><br>" +
            "(A) 'lavish' means sumptuously rich, elaborate, or luxurious." +
            "<br><br>" +
            "(B) 'generous' means showing a readiness to give more of something than is strictly necessary or expected." +
            "<br><br>" +
            "(C) 'comfortable' means providing physical ease and relaxation.",
        chinese_explanation: "(D) '贫困的' 意味着非常贫穷；贫困潦倒。" +
            "<br><br>" +
            "(A) '奢华的' 意味着富丽堂皇的、豪华的或奢侈的。" +
            "<br><br>" +
            "(B) '慷慨的' 意味着准备给予比严格必要或预期更多的东西。" +
            "<br><br>" +
            "(C) '舒适的' 意味着提供身体舒适和放松的。"
    },
    {
        id: 10,
        question: "His behavior at the party was __________, embarrassing everyone who knew him.",
        chinese_question: "他在聚会上的行为 __________，让认识他的人都感到尴尬。",
        answers: [
            { option: "A", answer: "commendable", chinese_answer: "值得赞扬", chinese_romanization: "zhíde zànyáng" },
            { option: "B", answer: "respectful", chinese_answer: "尊重", chinese_romanization: "zūnzhòng" },
            { option: "C", answer: "awful", chinese_answer: "糟糕", chinese_romanization: "zāogāo" },
            { option: "D", answer: "admirable", chinese_answer: "令人钦佩", chinese_romanization: "lìng rén qīnpèi" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'awful' means very bad or unpleasant." +
            "<br><br>" +
            "(A) 'commendable' means deserving praise." +
            "<br><br>" +
            "(B) 'respectful' means feeling or showing deference and respect." +
            "<br><br>" +
            "(D) 'admirable' means arousing or deserving respect and approval.",
        chinese_explanation: "(C) '糟糕' 意味着非常糟糕或不愉快的。" +
            "<br><br>" +
            "(A) '值得赞扬' 意味着值得称赞。" +
            "<br><br>" +
            "(B) '尊重' 意味着感到或表示敬意和尊重。" +
            "<br><br>" +
            "(D) '令人钦佩' 意味着引起或值得尊重和认可。"
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
