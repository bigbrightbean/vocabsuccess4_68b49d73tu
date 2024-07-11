// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "Her __________ efforts in studying for the exam paid off when she received the highest grade in the class.",
        chinese_question: "她在备考中的 __________ 努力得到了回报，她获得了全班最高的成绩。",
        answers: [
            { option: "A", answer: "lazy", chinese_answer: "懒惰的", chinese_romanization: "lǎnduò de" },
            { option: "B", answer: "sporadic", chinese_answer: "零星的", chinese_romanization: "língxīng de" },
            { option: "C", answer: "assiduous", chinese_answer: "刻苦的", chinese_romanization: "kèkǔ de" },
            { option: "D", answer: "apathetic", chinese_answer: "冷漠的", chinese_romanization: "lěngmò de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'assiduous' means showing great care and perseverance." +
            "<br><br>" +
            "(A) 'lazy' means unwilling to work or use energy." +
            "<br><br>" +
            "(B) 'sporadic' means occurring at irregular intervals or only in a few places; scattered or isolated." +
            "<br><br>" +
            "(D) 'apathetic' means showing or feeling no interest, enthusiasm, or concern.",
        chinese_explanation: "(C) '刻苦的' 一词意味着表现出极大的关心和毅力。" +
            "<br><br>" +
            "(A) '懒惰的' 意味着不愿工作或使用精力的。" +
            "<br><br>" +
            "(B) '零星的' 意味着不定期发生或仅在少数地方发生的；散落的或孤立的。" +
            "<br><br>" +
            "(D) '冷漠的' 意味着表现出或感觉不到兴趣、热情或关注的。"
    },
    {
        id: 2,
        question: "Her writing style is __________, making complex topics understandable to a wide audience.",
        chinese_question: "她的写作风格 __________，使复杂的话题对广大读者来说易于理解。",
        answers: [
            { option: "A", answer: "obscure", chinese_answer: "晦涩", chinese_romanization: "huìsè" },
            { option: "B", answer: "convoluted", chinese_answer: "复杂", chinese_romanization: "fùzá" },
            { option: "C", answer: "accessible", chinese_answer: "容易理解", chinese_romanization: "róngyì lǐjiě" },
            { option: "D", answer: "confusing", chinese_answer: "困惑", chinese_romanization: "kùnhuò" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'accessible' means easily understood or appreciated." +
            "<br><br>" +
            "(A) 'obscure' means not discovered or known about; uncertain." +
            "<br><br>" +
            "(B) 'convoluted' means extremely complex and difficult to follow." +
            "<br><br>" +
            "(D) 'confusing' means bewildering or perplexing.",
        chinese_explanation: "(C) '容易理解' 意味着容易理解或欣赏。" +
            "<br><br>" +
            "(A) '晦涩' 意味着未被发现或未知的；不确定的。" +
            "<br><br>" +
            "(B) '复杂' 意味着极其复杂和难以理解。" +
            "<br><br>" +
            "(D) '困惑' 意味着令人困惑或困惑。"
    },
    {
        id: 3,
        question: "The meeting was quite __________, with no new ideas or exciting developments.",
        chinese_question: "会议相当 __________，没有新想法或令人兴奋的进展。",
        answers: [
            { option: "A", answer: "stimulating", chinese_answer: "刺激", chinese_romanization: "cìjī" },
            { option: "B", answer: "engaging", chinese_answer: "迷人", chinese_romanization: "mírén" },
            { option: "C", answer: "dynamic", chinese_answer: "动态", chinese_romanization: "dòngtài" },
            { option: "D", answer: "bland", chinese_answer: "平淡", chinese_romanization: "píngdàn" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'bland' means lacking strong features or characteristics and therefore uninteresting." +
            "<br><br>" +
            "(A) 'stimulating' means encouraging interest or activity." +
            "<br><br>" +
            "(B) 'engaging' means charming and attractive." +
            "<br><br>" +
            "(C) 'dynamic' means characterized by constant change, activity, or progress.",
        chinese_explanation: "(D) '平淡' 意味着缺乏强烈的特征或特点，因此无趣。" +
            "<br><br>" +
            "(A) '刺激' 意味着鼓励兴趣或活动。" +
            "<br><br>" +
            "(B) '迷人' 意味着迷人和吸引人。" +
            "<br><br>" +
            "(C) '动态' 意味着不断变化、活动或进步的特点。"
    },
    {
        id: 4,
        question: "The intern's __________ remarks, such as 'You're the best boss ever,' were aimed at getting a promotion.",
        chinese_question: "实习生的 __________ 言论，如“你是有史以来最好的老板”，目的是为了升职。",
        answers: [
            { option: "A", answer: "sincere", chinese_answer: "真诚的", chinese_romanization: "zhēnchéng de" },
            { option: "B", answer: "genuine", chinese_answer: "真挚的", chinese_romanization: "zhēnzhì de" },
            { option: "C", answer: "modest", chinese_answer: "谦虚的", chinese_romanization: "qiānxū de" },
            { option: "D", answer: "sycophantic", chinese_answer: "阿谀奉承的", chinese_romanization: "ēyú fèngchéng de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'sycophantic' means behaving in a flattering way to gain advantage." +
            "<br><br>" +
            "(A) 'sincere' means free from pretense or deceit." +
            "<br><br>" +
            "(B) 'genuine' means truly what something is said to be." +
            "<br><br>" +
            "(C) 'modest' means having a humble view of one's importance.",
        chinese_explanation: "(D) '阿谀奉承的' 意思是为了获得好处而奉承。" +
            "<br><br>" +
            "(A) '真诚的' 意思是没有虚伪或欺骗的。" +
            "<br><br>" +
            "(B) '真挚的' 意思是确实是某物所说的那样。" +
            "<br><br>" +
            "(C) '谦虚的' 意思是对自己的重要性有谦逊的看法。"
    },
    {
        id: 5,
        question: "His assumption about her intentions was __________, leading to unnecessary conflict.",
        chinese_question: "他对她意图的假设是 __________ 的，导致了不必要的冲突。",
        answers: [
            { option: "A", answer: "justified", chinese_answer: "有理的", chinese_romanization: "yǒulǐ de" },
            { option: "B", answer: "baseless", chinese_answer: "无根据的", chinese_romanization: "wú gēnjù de" },
            { option: "C", answer: "erroneous", chinese_answer: "错误的", chinese_romanization: "cuòwù de" },
            { option: "D", answer: "accurate", chinese_answer: "准确的", chinese_romanization: "zhǔnquè de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'erroneous' figuratively means based on incorrect assumptions or ideas." +
            "<br><br>" +
            "(A) 'justified' means having, done for, or marked by a good or legitimate reason." +
            "<br><br>" +
            "(B) 'baseless' means without foundation in fact." +
            "<br><br>" +
            "(D) 'accurate' means correct in all details; exact.",
        chinese_explanation: "(C) '错误的' 在比喻意义上意味着基于错误的假设或想法。" +
            "<br><br>" +
            "(A) '有理的' 意味着有、出于或以正当理由为标志的。" +
            "<br><br>" +
            "(B) '无根据的' 意味着没有事实依据的。" +
            "<br><br>" +
            "(D) '准确的' 意味着在所有细节上都是正确的；精确的。"
    },
    {
        id: 6,
        question: "His __________ nature made it difficult for him to understand others' perspectives, as he was always focused on himself.",
        chinese_question: "他 __________ 的性格使他难以理解他人的观点，因为他总是关注自己。",
        answers: [
            { option: "A", answer: "empathetic", chinese_answer: "移情的", chinese_romanization: "yíqíng de" },
            { option: "B", answer: "selfless", chinese_answer: "无私的", chinese_romanization: "wúsī de" },
            { option: "C", answer: "altruistic", chinese_answer: "利他的", chinese_romanization: "lìtā de" },
            { option: "D", answer: "egocentric", chinese_answer: "以自我为中心的", chinese_romanization: "yǐ zìwǒ wéi zhōngxīn de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'egocentric' means thinking only of oneself, without regard for the feelings or desires of others; self-centered." +
            "<br><br>" +
            "(A) 'empathetic' means showing an ability to understand and share the feelings of another." +
            "<br><br>" +
            "(B) 'selfless' means concerned more with the needs and wishes of others than with one's own; unselfish." +
            "<br><br>" +
            "(C) 'altruistic' means showing a disinterested and selfless concern for the well-being of others; unselfish.",
        chinese_explanation: "(D) '以自我为中心的' 一词意味着只考虑自己，而不顾他人的感受或愿望；自我中心的。" +
            "<br><br>" +
            "(A) '移情的' 意味着表现出理解和分享他人感受的能力。" +
            "<br><br>" +
            "(B) '无私的' 意味着更多地关心他人的需求和愿望，而不是自己的；无私的。" +
            "<br><br>" +
            "(C) '利他的' 意味着表现出对他人福祉的无私关注；无私的。"
    },
    {
        id: 7,
        question: "The discovery of the ancient artifact was __________, happening just as the archaeologists were about to give up their search.",
        chinese_question: "古代文物的发现是 __________ 的，正当考古学家准备放弃他们的搜索时发现了它。",
        answers: [
            { option: "A", answer: "planned", chinese_answer: "计划好的", chinese_romanization: "jìhuà hǎo de" },
            { option: "B", answer: "fortuitous", chinese_answer: "偶然的", chinese_romanization: "ǒurán de" },
            { option: "C", answer: "deliberate", chinese_answer: "有意的", chinese_romanization: "yǒuyì de" },
            { option: "D", answer: "intentional", chinese_answer: "故意的", chinese_romanization: "gùyì de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'fortuitous' means happening by a lucky chance; fortunate." +
            "<br><br>" +
            "(A) 'planned' means decided on and arranged in advance." +
            "<br><br>" +
            "(C) 'deliberate' means done consciously and intentionally." +
            "<br><br>" +
            "(D) 'intentional' means done on purpose; deliberate.",
        chinese_explanation: "(B) '偶然的' 一词意味着幸运的巧合；幸运的。" +
            "<br><br>" +
            "(A) '计划好的' 意味着提前决定和安排的。" +
            "<br><br>" +
            "(C) '有意的' 意味着有意识地和故意地做的。" +
            "<br><br>" +
            "(D) '故意的' 意味着故意做的；有意的。"
    },
    {
        id: 8,
        question: "The __________ weight of the ancient tome made it difficult to carry, requiring both hands to lift it.",
        chinese_question: "这本古书的 __________ 重量使其难以携带，需要用双手才能抬起来。",
        answers: [
            { option: "A", answer: "ponderous", chinese_answer: "笨重的", chinese_romanization: "bènzhòng de" },
            { option: "B", answer: "light", chinese_answer: "轻的", chinese_romanization: "qīng de" },
            { option: "C", answer: "flimsy", chinese_answer: "脆弱的", chinese_romanization: "cuìruò de" },
            { option: "D", answer: "weightless", chinese_answer: "无重量的", chinese_romanization: "wú zhòngliàng de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'ponderous' means slow and clumsy because of great weight." +
            "<br><br>" +
            "(B) 'light' means having little weight; easy to lift." +
            "<br><br>" +
            "(C) 'flimsy' means comparatively light and insubstantial; easily damaged." +
            "<br><br>" +
            "(D) 'weightless' means having little or no weight.",
        chinese_explanation: "(A) '笨重的' 一词意味着由于重量大而缓慢且笨拙。" +
            "<br><br>" +
            "(B) '轻的' 意味着重量小；容易举起。" +
            "<br><br>" +
            "(C) '脆弱的' 意味着相对轻且不牢固；易损坏。" +
            "<br><br>" +
            "(D) '无重量的' 意味着重量小或没有重量。"
    },
    {
        id: 9,
        question: "The town's __________ climate attracted many people seeking a healthier lifestyle.",
        chinese_question: "该镇的 __________ 气候吸引了许多寻求健康生活方式的人。",
        answers: [
            { option: "A", answer: "polluted", chinese_answer: "污染的", chinese_romanization: "wūrǎn de" },
            { option: "B", answer: "salubrious", chinese_answer: "有益健康的", chinese_romanization: "yǒuyì jiànkāng de" },
            { option: "C", answer: "harmful", chinese_answer: "有害的", chinese_romanization: "yǒuhài de" },
            { option: "D", answer: "detrimental", chinese_answer: "有损的", chinese_romanization: "yǒusǔn de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'salubrious' means health-giving; healthy." +
            "<br><br>" +
            "(A) 'polluted' means contaminated with harmful or poisonous substances." +
            "<br><br>" +
            "(C) 'harmful' means causing or likely to cause harm." +
            "<br><br>" +
            "(D) 'detrimental' means tending to cause harm.",
        chinese_explanation: "(B) '有益健康的' 一词意味着有益健康的；健康的。" +
            "<br><br>" +
            "(A) '污染的' 意味着被有害或有毒物质污染的。" +
            "<br><br>" +
            "(C) '有害的' 意味着导致或可能导致伤害的。" +
            "<br><br>" +
            "(D) '有损的' 意味着倾向于导致伤害的。"
    },
    {
        id: 10,
        question: "He gave her a __________ look, clearly showing his disdain for her actions.",
        chinese_question: "他给了她一个 __________ 的眼神，显然对她的行为感到蔑视。",
        answers: [
            { option: "A", answer: "respectful", chinese_answer: "尊敬的", chinese_romanization: "zūnjìng de" },
            { option: "B", answer: "admiring", chinese_answer: "欣赏的", chinese_romanization: "xīnshǎng de" },
            { option: "C", answer: "contemptuous", chinese_answer: "轻蔑的", chinese_romanization: "qīngmiè de" },
            { option: "D", answer: "friendly", chinese_answer: "友好的", chinese_romanization: "yǒuhǎo de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'contemptuous' means showing contempt; scornful." +
            "<br><br>" +
            "(A) 'respectful' means feeling or showing deference and respect." +
            "<br><br>" +
            "(B) 'admiring' means regarding with respect or warm approval." +
            "<br><br>" +
            "(D) 'friendly' means kind and pleasant.",
        chinese_explanation: "(C) '轻蔑的' 一词意味着表示蔑视；轻蔑的。" +
            "<br><br>" +
            "(A) '尊敬的' 意味着感到或表示尊重和敬意。" +
            "<br><br>" +
            "(B) '欣赏的' 意味着以尊重或热情的赞许看待。" +
            "<br><br>" +
            "(D) '友好的' 意味着善良和愉快的。"
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
