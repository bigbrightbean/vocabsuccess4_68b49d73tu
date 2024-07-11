// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The __________ regulations made it difficult for small businesses to thrive.",
        chinese_question: " __________ 的法规使小企业难以繁荣发展。",
        answers: [
            { option: "A", answer: "burdensome", chinese_answer: "繁重", chinese_romanization: "fánzhòng" },
            { option: "B", answer: "lenient", chinese_answer: "宽松", chinese_romanization: "kuānsōng" },
            { option: "C", answer: "supportive", chinese_answer: "支持", chinese_romanization: "zhīchí" },
            { option: "D", answer: "beneficial", chinese_answer: "有益", chinese_romanization: "yǒuyì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'burdensome' means causing difficulty or worry." +
            "<br><br>" +
            "(B) 'lenient' means permissive, merciful, or tolerant." +
            "<br><br>" +
            "(C) 'supportive' means providing encouragement or emotional help." +
            "<br><br>" +
            "(D) 'beneficial' means favorable or advantageous; resulting in good.",
        chinese_explanation: "(A) '繁重' 意味着造成困难或担忧的。" +
            "<br><br>" +
            "(B) '宽松' 意味着宽容、仁慈或宽恕。" +
            "<br><br>" +
            "(C) '支持' 意味着提供鼓励或情感帮助。" +
            "<br><br>" +
            "(D) '有益' 意味着有利的或有优势的；导致好的结果的。"
    },
    {
        id: 2,
        question: "Her views on technology were surprisingly __________ for someone of her generation, embracing the latest advancements with enthusiasm.",
        chinese_question: "对于她那一代人来说，她对技术的看法出奇地 __________，热情地接受了最新的进步。",
        answers: [
            { option: "A", answer: "contemporary", chinese_answer: "当代的", chinese_romanization: "dāngdài de" },
            { option: "B", answer: "traditional", chinese_answer: "传统的", chinese_romanization: "chuántǒng de" },
            { option: "C", answer: "antiquated", chinese_answer: "过时的", chinese_romanization: "guòshí de" },
            { option: "D", answer: "old-fashioned", chinese_answer: "老式的", chinese_romanization: "lǎoshì de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'contemporary' means belonging to or occurring in the present." +
            "<br><br>" +
            "(B) 'traditional' means existing in or as part of a tradition; long-established." +
            "<br><br>" +
            "(C) 'antiquated' means old-fashioned or outdated." +
            "<br><br>" +
            "(D) 'old-fashioned' means in or according to styles or types no longer current or common; not modern.",
        chinese_explanation: "(A) '当代的' 意味着属于或发生在当下的。" +
            "<br><br>" +
            "(B) '传统的' 意味着存在于或作为传统的一部分的；长期存在的。" +
            "<br><br>" +
            "(C) '过时的' 意味着老式的或过时的。" +
            "<br><br>" +
            "(D) '老式的' 意味着根据不再流行或常见的风格或类型的；不现代的。"
    },
    {
        id: 3,
        question: "Her input was __________ to the success of the project, providing insights that no one else could.",
        chinese_question: "她的意见对项目的成功 __________，提供了别人无法提供的见解。",
        answers: [
            { option: "A", answer: "crucial", chinese_answer: "关键的", chinese_romanization: "guānjiàn de" },
            { option: "B", answer: "negligible", chinese_answer: "微不足道的", chinese_romanization: "wēibùzúdào de" },
            { option: "C", answer: "inconsequential", chinese_answer: "不重要的", chinese_romanization: "bù zhòngyào de" },
            { option: "D", answer: "minor", chinese_answer: "次要的", chinese_romanization: "cìyào de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'crucial' means of great importance." +
            "<br><br>" +
            "(B) 'negligible' means so small or unimportant as to be not worth considering." +
            "<br><br>" +
            "(C) 'inconsequential' means not important or significant." +
            "<br><br>" +
            "(D) 'minor' means lesser in importance, seriousness, or significance.",
        chinese_explanation: "(A) '关键的' 意味着非常重要的。" +
            "<br><br>" +
            "(B) '微不足道的' 意味着如此小或不重要，以至于不值得考虑的。" +
            "<br><br>" +
            "(C) '不重要的' 意味着不重要或不显著的。" +
            "<br><br>" +
            "(D) '次要的' 意味着在重要性、严重性或意义上较小的。"
    },
    {
        id: 4,
        question: "The hikers took a __________ route up the mountain, which was longer but offered more scenic views.",
        chinese_question: "徒步旅行者选择了一条 __________ 的上山路线，虽然更长但提供了更多的景色。",
        answers: [
            { option: "A", answer: "direct", chinese_answer: "直接的", chinese_romanization: "zhíjiē de" },
            { option: "B", answer: "circuitous", chinese_answer: "迂回的", chinese_romanization: "yūhuí de" },
            { option: "C", answer: "straight", chinese_answer: "笔直的", chinese_romanization: "bǐzhí de" },
            { option: "D", answer: "immediate", chinese_answer: "立即的", chinese_romanization: "lìjí de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'circuitous' means (of a route or journey) longer than the most direct way." +
            "<br><br>" +
            "(A) 'direct' means extending or moving from one place to another by the shortest way without changing direction or stopping." +
            "<br><br>" +
            "(C) 'straight' means extending or moving uniformly in one direction only; without a curve or bend." +
            "<br><br>" +
            "(D) 'immediate' means occurring or done at once; instant.",
        chinese_explanation: "(B) '迂回的' 一词意味着（路线或旅程）比最直接的方式更长。" +
            "<br><br>" +
            "(A) '直接的' 意味着通过最短的方式从一个地方到另一个地方，没有改变方向或停止。" +
            "<br><br>" +
            "(C) '笔直的' 意味着只向一个方向延伸或移动；没有弯曲或弯曲。" +
            "<br><br>" +
            "(D) '立即的' 意味着立即发生或完成的。"
    },
    {
        id: 5,
        question: "Her confidence was __________ after receiving constant criticism.",
        chinese_question: "在不断受到批评后，她的自信变得很 __________。",
        answers: [
            { option: "A", answer: "frail", chinese_answer: "脆弱的", chinese_romanization: "cuìruò de" },
            { option: "B", answer: "resilient", chinese_answer: "有弹性的", chinese_romanization: "yǒu tánxìng de" },
            { option: "C", answer: "unwavering", chinese_answer: "毫不动摇的", chinese_romanization: "háo bù dòngyáo de" },
            { option: "D", answer: "steadfast", chinese_answer: "坚定的", chinese_romanization: "jiāndìng de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'frail' metaphorically means weak and easily damaged." +
            "<br><br>" +
            "(B) 'resilient' means able to withstand or recover quickly from difficult conditions." +
            "<br><br>" +
            "(C) 'unwavering' means steady or resolute; not wavering." +
            "<br><br>" +
            "(D) 'steadfast' means resolutely or dutifully firm and unwavering.",
        chinese_explanation: "(A) '脆弱的' 比喻虚弱和容易受损的。" +
            "<br><br>" +
            "(B) '有弹性的' 意味着能够从困难条件中快速承受或恢复。" +
            "<br><br>" +
            "(C) '毫不动摇的' 意味着坚定或坚决；不动摇的。" +
            "<br><br>" +
            "(D) '坚定的' 意味着坚决或尽职地坚定和不动摇的。"
    },
    {
        id: 6,
        question: "After losing his job, his outlook on the future was quite __________.",
        chinese_question: "失业后，他对未来的看法相当__________。",
        answers: [
            { option: "A", answer: "hopeful", chinese_answer: "充满希望的", chinese_romanization: "chōngmǎn xīwàng de" },
            { option: "B", answer: "optimistic", chinese_answer: "乐观的", chinese_romanization: "lèguān de" },
            { option: "C", answer: "bleak", chinese_answer: "荒凉的", chinese_romanization: "huāngliáng de" },
            { option: "D", answer: "promising", chinese_answer: "有前途的", chinese_romanization: "yǒu qiántú de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'bleak' means lacking vegetation and exposed to the elements. Figuratively, it can mean lacking hope or encouragement; depressing." +
            "<br><br>" +
            "(A) 'hopeful' means feeling or inspiring optimism about a future event." +
            "<br><br>" +
            "(B) 'optimistic' means hopeful and confident about the future." +
            "<br><br>" +
            "(D) 'promising' means showing signs of future success.",
        chinese_explanation: "(C) '荒凉的'一词意味着缺乏植被，暴露在自然环境中。比喻地，它可以表示缺乏希望或鼓励；令人沮丧的。" +
            "<br><br>" +
            "(A) '充满希望的' 意味着对未来事件感到乐观。" +
            "<br><br>" +
            "(B) '乐观的' 意味着对未来充满希望和信心。" +
            "<br><br>" +
            "(D) '有前途的' 意味着显示未来成功的迹象。"
    },
    {
        id: 7,
        question: "Her career seemed __________, with no signs of advancement or growth.",
        chinese_question: "她的职业生涯似乎 __________，没有进步或发展的迹象。",
        answers: [
            { option: "A", answer: "dynamic", chinese_answer: "动态的", chinese_romanization: "dòngtài de" },
            { option: "B", answer: "stationary", chinese_answer: "停滞的", chinese_romanization: "tíngzhì de" },
            { option: "C", answer: "flourishing", chinese_answer: "繁荣的", chinese_romanization: "fánróng de" },
            { option: "D", answer: "progressing", chinese_answer: "进步的", chinese_romanization: "jìnbù de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'stationary' figuratively means not changing or progressing; at a standstill." +
            "<br><br>" +
            "(A) 'dynamic' means characterized by constant change, activity, or progress." +
            "<br><br>" +
            "(C) 'flourishing' means developing rapidly and successfully; thriving." +
            "<br><br>" +
            "(D) 'progressing' means moving forward or onward in space or time.",
        chinese_explanation: "(B) '停滞的' 在比喻意义上意味着没有变化或进展；停滞不前。" +
            "<br><br>" +
            "(A) '动态的' 意味着以不断变化、活动或进步为特征的。" +
            "<br><br>" +
            "(C) '繁荣的' 意味着快速发展和成功；兴旺的。" +
            "<br><br>" +
            "(D) '进步的' 意味着在空间或时间上向前移动。"
    },
    {
        id: 8,
        question: "Her __________ taste in home decor made her apartment the envy of all her friends.",
        chinese_question: "她 __________ 的家居装饰品味让她的公寓成为所有朋友羡慕的对象。",
        answers: [
            { option: "A", answer: "chic", chinese_answer: "时髦的", chinese_romanization: "shímáo de" },
            { option: "B", answer: "cluttered", chinese_answer: "杂乱的", chinese_romanization: "záluàn de" },
            { option: "C", answer: "dull", chinese_answer: "枯燥的", chinese_romanization: "kūzào de" },
            { option: "D", answer: "messy", chinese_answer: "乱糟糟的", chinese_romanization: "luànzāozāo de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'chic' means elegantly and stylishly fashionable." +
            "<br><br>" +
            "(B) 'cluttered' means crowded with too many things." +
            "<br><br>" +
            "(C) 'dull' means lacking interest or excitement." +
            "<br><br>" +
            "(D) 'messy' means untidy or disorganized.",
        chinese_explanation: "(A) '时髦的' 意味着优雅和时尚。" +
            "<br><br>" +
            "(B) '杂乱的' 意味着堆满了太多东西的。" +
            "<br><br>" +
            "(C) '枯燥的' 意味着缺乏兴趣或兴奋的。" +
            "<br><br>" +
            "(D) '乱糟糟的' 意味着不整洁或无组织的。"
    },
    {
        id: 9,
        question: "His speech was __________ and to the point, delivering the message effectively without unnecessary details.",
        chinese_question: "他的演讲 __________ 且直截了当，有效地传达了信息，没有不必要的细节。",
        answers: [
            { option: "A", answer: "compact", chinese_answer: "简洁的", chinese_romanization: "jiǎnjié de" },
            { option: "B", answer: "rambling", chinese_answer: "冗长的", chinese_romanization: "rǒngcháng de" },
            { option: "C", answer: "verbose", chinese_answer: "啰嗦的", chinese_romanization: "luōsuō de" },
            { option: "D", answer: "scattered", chinese_answer: "分散的", chinese_romanization: "fēnsàn de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'compact' means concise and clear." +
            "<br><br>" +
            "(B) 'rambling' means lengthy and confused or inconsequential." +
            "<br><br>" +
            "(C) 'verbose' means using more words than are needed." +
            "<br><br>" +
            "(D) 'scattered' means disorganized or spread out.",
        chinese_explanation: "(A) '简洁的' 意味着简明扼要。" +
            "<br><br>" +
            "(B) '冗长的' 意味着冗长且混乱或不相关的。" +
            "<br><br>" +
            "(C) '啰嗦的' 意味着使用了比需要更多的词。" +
            "<br><br>" +
            "(D) '分散的' 意味着杂乱无章或分散的。"
    },
    {
        id: 10,
        question: "The company faced __________ issues with its supply chain, affecting its ability to meet customer demands.",
        chinese_question: "公司在供应链方面面临 __________ 问题，影响了满足客户需求的能力。",
        answers: [
            { option: "A", answer: "minor", chinese_answer: "次要", chinese_romanization: "cìyào" },
            { option: "B", answer: "temporary", chinese_answer: "暂时", chinese_romanization: "zànshí" },
            { option: "C", answer: "chronic", chinese_answer: "长期", chinese_romanization: "chángqī" },
            { option: "D", answer: "infrequent", chinese_answer: "罕见", chinese_romanization: "hǎnjiàn" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'chronic' means persisting for a long time or constantly recurring." +
            "<br><br>" +
            "(A) 'minor' means lesser in importance, seriousness, or significance." +
            "<br><br>" +
            "(B) 'temporary' means lasting for only a limited period of time; not permanent." +
            "<br><br>" +
            "(D) 'infrequent' means not occurring often.",
        chinese_explanation: "(C) '长期' 意味着持续很长时间或不断复发。" +
            "<br><br>" +
            "(A) '次要' 意味着重要性、严重性或意义较小的。" +
            "<br><br>" +
            "(B) '暂时' 意味着仅持续有限时间的；不是永久的。" +
            "<br><br>" +
            "(D) '罕见' 意味着不经常发生。"
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
