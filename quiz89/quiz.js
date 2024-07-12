// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The artist's new work completely __________ her previous paintings, garnering much more attention and praise.",
        chinese_question: "这位艺术家的新作品完全 __________ 了她以前的画作，获得了更多的关注和赞誉。",
        answers: [
            { option: "A", answer: "revealed", chinese_answer: "揭示", chinese_romanization: "jiēshì" },
            { option: "B", answer: "overshadowed", chinese_answer: "使黯然失色", chinese_romanization: "shǐ ànrán shīsè" },
            { option: "C", answer: "displayed", chinese_answer: "展示", chinese_romanization: "zhǎnshì" },
            { option: "D", answer: "eclipsed", chinese_answer: "掩盖", chinese_romanization: "yǎngài" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'eclipsed' means to surpass or outshine someone or something." +
            "<br><br>" +
            "(A) 'revealed' means to make (previously unknown or secret information) known to others." +
            "<br><br>" +
            "(B) 'overshadowed' means to appear much more prominent or important than something else." +
            "<br><br>" +
            "(C) 'displayed' means to show or exhibit.",
        chinese_explanation: "(D) '掩盖' 一词意味着超越或胜过某人或某物。" +
            "<br><br>" +
            "(A) '揭示' 意味着将（以前未知或秘密的信息）透露给他人。" +
            "<br><br>" +
            "(B) '使黯然失色' 意味着看起来比其他东西更突出或更重要。" +
            "<br><br>" +
            "(C) '展示' 意味着展示或展出。"
    },
    {
        id: 2,
        question: "She hoped to __________ the necessary skills for her new job through rigorous training.",
        chinese_question: "她希望通过严格的培训来 __________ 新工作所需的技能。",
        answers: [
            { option: "A", answer: "lose", chinese_answer: "失去", chinese_romanization: "shīqù" },
            { option: "B", answer: "acquire", chinese_answer: "获得", chinese_romanization: "huòdé" },
            { option: "C", answer: "abandon", chinese_answer: "放弃", chinese_romanization: "fàngqì" },
            { option: "D", answer: "overlook", chinese_answer: "忽视", chinese_romanization: "hūshì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'acquire' means buy or obtain (an asset or object) for oneself." +
            "<br><br>" +
            "(A) 'lose' means be deprived of or cease to have or retain (something)." +
            "<br><br>" +
            "(C) 'abandon' means give up completely (a course of action, a practice, or a way of thinking)." +
            "<br><br>" +
            "(D) 'overlook' means fail to notice (something).",
        chinese_explanation: "(B) '获得' 一词意味着为自己购买或获得（资产或物品）。" +
            "<br><br>" +
            "(A) '失去' 意味着被剥夺或停止拥有或保留（某物）。" +
            "<br><br>" +
            "(C) '放弃' 意味着完全放弃（行动、做法或思维方式）。" +
            "<br><br>" +
            "(D) '忽视' 意味着未能注意到（某事）。"
    },
    {
        id: 3,
        question: "To __________ a major crisis, the company implemented a new safety protocol immediately.",
        chinese_question: "为了 __________ 一场重大危机，公司立即实施了一项新的安全协议。",
        answers: [
            { option: "A", answer: "invite", chinese_answer: "邀请", chinese_romanization: "yāoqǐng" },
            { option: "B", answer: "ensure", chinese_answer: "确保", chinese_romanization: "quèbǎo" },
            { option: "C", answer: "avert", chinese_answer: "避免", chinese_romanization: "bìmiǎn" },
            { option: "D", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'avert' means turn away (one's eyes or thoughts) or prevent or ward off (an undesirable occurrence)." +
            "<br><br>" +
            "(A) 'invite' means make a polite, formal, or friendly request to (someone) to go somewhere or to do something." +
            "<br><br>" +
            "(B) 'ensure' means make certain that (something) shall occur or be the case." +
            "<br><br>" +
            "(D) 'ignore' means refuse to take notice of or acknowledge; disregard intentionally.",
        chinese_explanation: "(C) '避免' 一词意味着转移（视线或思维）或防止或阻止（不良事件的发生）。" +
            "<br><br>" +
            "(A) '邀请' 意味着礼貌、正式或友好地请求（某人）去某个地方或做某事。" +
            "<br><br>" +
            "(B) '确保' 意味着确保（某事）发生或成为事实。" +
            "<br><br>" +
            "(D) '忽视' 意味着拒绝注意或承认；故意无视。"
    },
    {
        id: 4,
        question: "The urgent need for assistance __________ him to act quickly and decisively.",
        chinese_question: "急需援助 __________ 他迅速而果断地采取行动。",
        answers: [
            { option: "A", answer: "delayed", chinese_answer: "延迟", chinese_romanization: "yánchí" },
            { option: "B", answer: "hindered", chinese_answer: "阻碍", chinese_romanization: "zǔ'ài" },
            { option: "C", answer: "impelled", chinese_answer: "推动", chinese_romanization: "tuīdòng" },
            { option: "D", answer: "prevented", chinese_answer: "阻止", chinese_romanization: "zǔzhǐ" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'impelled' means drive, force, or urge (someone) to do something." +
            "<br><br>" +
            "(A) 'delayed' means make (someone or something) late or slow." +
            "<br><br>" +
            "(B) 'hindered' means create difficulties for (someone or something), resulting in delay or obstruction." +
            "<br><br>" +
            "(D) 'prevented' means keep (something) from happening or arising.",
        chinese_explanation: "(C) '推动' 一词意味着驱使、强迫或敦促（某人）做某事。" +
            "<br><br>" +
            "(A) '延迟' 意味着使（某人或某事）迟到或变慢。" +
            "<br><br>" +
            "(B) '阻碍' 意味着给（某人或某事）制造困难，导致延误或障碍。" +
            "<br><br>" +
            "(D) '阻止' 意味着防止（某事）发生或出现。"
    },
    {
        id: 5,
        question: "He decided to __________ from voting in the election because he didn't support any of the candidates.",
        chinese_question: "他决定在选举中 __________ 投票，因为他不支持任何候选人。",
        answers: [
            { option: "A", answer: "indulge", chinese_answer: "放纵", chinese_romanization: "fàngzòng" },
            { option: "B", answer: "abstain", chinese_answer: "弃权", chinese_romanization: "qìquán" },
            { option: "C", answer: "partake", chinese_answer: "参与", chinese_romanization: "cānyù" },
            { option: "D", answer: "participate", chinese_answer: "参加", chinese_romanization: "cānjiā" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'abstain' means restrain oneself from doing or enjoying something." +
            "<br><br>" +
            "(A) 'indulge' means allow oneself to enjoy the pleasure of." +
            "<br><br>" +
            "(C) 'partake' means join in (an activity)." +
            "<br><br>" +
            "(D) 'participate' means take part.",
        chinese_explanation: "(B) '弃权' 一词意味着抑制自己不做或不享受某事。" +
            "<br><br>" +
            "(A) '放纵' 意味着允许自己享受乐趣。" +
            "<br><br>" +
            "(C) '参与' 意味着加入（某活动）。" +
            "<br><br>" +
            "(D) '参加' 意味着参与。"
    },
    {
        id: 6,
        question: "The invasive species must be __________ completely to protect the native ecosystem.",
        chinese_question: "必须彻底 __________ 入侵物种，以保护本地生态系统。",
        answers: [
            { option: "A", answer: "introduced", chinese_answer: "引入", chinese_romanization: "yǐnrù" },
            { option: "B", answer: "nurtured", chinese_answer: "培育", chinese_romanization: "péiyù" },
            { option: "C", answer: "extirpated", chinese_answer: "根除", chinese_romanization: "gēnchú" },
            { option: "D", answer: "preserved", chinese_answer: "保护", chinese_romanization: "bǎohù" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'extirpated' means root out and destroy completely." +
            "<br><br>" +
            "(A) 'introduced' means bring (something, especially a product, measure, or concept) into use or operation for the first time." +
            "<br><br>" +
            "(B) 'nurtured' means care for and encourage the growth or development of." +
            "<br><br>" +
            "(D) 'preserved' means maintain (something) in its original or existing state.",
        chinese_explanation: "(C) '根除' 一词意味着彻底根除和销毁。" +
            "<br><br>" +
            "(A) '引入' 意味着首次使用或操作（某物，特别是产品、措施或概念）。" +
            "<br><br>" +
            "(B) '培育' 意味着照顾和鼓励增长或发展。" +
            "<br><br>" +
            "(D) '保护' 意味着保持（某物）的原始或现有状态。"
    },
    {
        id: 7,
        question: "His actions clearly __________ the rules set by the organization, leading to his suspension.",
        chinese_question: "他的行为明显 __________ 了组织制定的规则，导致他被停职。",
        answers: [
            { option: "A", answer: "comply with", chinese_answer: "遵守", chinese_romanization: "zūnshǒu" },
            { option: "B", answer: "contravene", chinese_answer: "违反", chinese_romanization: "wéifǎn" },
            { option: "C", answer: "adhere to", chinese_answer: "坚持", chinese_romanization: "jiānchí" },
            { option: "D", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'contravene' means violate the prohibition or order of (a law, treaty, or code of conduct)." +
            "<br><br>" +
            "(A) 'comply with' means act in accordance with a wish or command." +
            "<br><br>" +
            "(C) 'adhere to' means stick fast to (a surface or substance)." +
            "<br><br>" +
            "(D) 'support' means bear all or part of the weight of; hold up.",
        chinese_explanation: "(B) '违反' 一词意味着违反（法律、条约或行为准则）的禁止或命令。" +
            "<br><br>" +
            "(A) '遵守' 意味着按照愿望或命令行事。" +
            "<br><br>" +
            "(C) '坚持' 意味着紧贴（表面或物质）。" +
            "<br><br>" +
            "(D) '支持' 意味着承受全部或部分重量；支撑。"
    },
    {
        id: 8,
        question: "The new health regulations __________ smoking in all public areas to promote a healthier environment.",
        chinese_question: "新的健康法规 __________ 在所有公共场所吸烟，以促进更健康的环境。",
        answers: [
            { option: "A", answer: "allow", chinese_answer: "允许", chinese_romanization: "yǔnxǔ" },
            { option: "B", answer: "encourage", chinese_answer: "鼓励", chinese_romanization: "gǔlì" },
            { option: "C", answer: "permit", chinese_answer: "许可", chinese_romanization: "xǔkě" },
            { option: "D", answer: "proscribe", chinese_answer: "禁止", chinese_romanization: "jìnzhǐ" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'proscribe' means to forbid, especially by law." +
            "<br><br>" +
            "(A) 'allow' means to give permission for something to happen." +
            "<br><br>" +
            "(B) 'encourage' means to give support, confidence, or hope to someone." +
            "<br><br>" +
            "(C) 'permit' means to authorize or enable something.",
        chinese_explanation: "(D) '禁止' 意思是特别是通过法律来禁止。" +
            "<br><br>" +
            "(A) '允许' 意思是给予许可使某事发生。" +
            "<br><br>" +
            "(B) '鼓励' 意思是给予支持、信心或希望。" +
            "<br><br>" +
            "(C) '许可' 意思是授权或使某事发生。"
    },
    {
        id: 9,
        question: "To __________ the delivery of the package, she paid an extra fee for expedited shipping.",
        chinese_question: "为了 __________ 包裹的交付，她额外支付了加急运费。",
        answers: [
            { option: "A", answer: "delay", chinese_answer: "延迟", chinese_romanization: "yánchí" },
            { option: "B", answer: "slow", chinese_answer: "放慢", chinese_romanization: "fàngmàn" },
            { option: "C", answer: "expedite", chinese_answer: "加速", chinese_romanization: "jiāsù" },
            { option: "D", answer: "hinder", chinese_answer: "阻碍", chinese_romanization: "zǔ'ài" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'expedite' means make (an action or process) happen sooner or be accomplished more quickly." +
            "<br><br>" +
            "(A) 'delay' means make (someone or something) late or slow." +
            "<br><br>" +
            "(B) 'slow' means reduce one's speed or the speed of something." +
            "<br><br>" +
            "(D) 'hinder' means create difficulties for (someone or something), resulting in delay or obstruction.",
        chinese_explanation: "(C) '加速' 一词意味着使（某个行动或过程）更快发生或完成。" +
            "<br><br>" +
            "(A) '延迟' 意味着使（某人或某事）迟到或变慢。" +
            "<br><br>" +
            "(B) '放慢' 意味着减少某人或某物的速度。" +
            "<br><br>" +
            "(D) '阻碍' 意味着为（某人或某事）制造困难，导致延迟或阻碍。"
    },
    {
        id: 10,
        question: "The lawyer decided to __________ for her client's release, arguing that the evidence was insufficient.",
        chinese_question: "律师决定 __________ 她的客户释放，认为证据不足。",
        answers: [
            { option: "A", answer: "oppose", chinese_answer: "反对", chinese_romanization: "fǎnduì" },
            { option: "B", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "C", answer: "advocate", chinese_answer: "提倡", chinese_romanization: "tíchàng" },
            { option: "D", answer: "dismiss", chinese_answer: "驳回", chinese_romanization: "bóhuí" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'advocate' means publicly recommend or support." +
            "<br><br>" +
            "(A) 'oppose' means disapprove of and attempt to prevent, especially by argument." +
            "<br><br>" +
            "(B) 'ignore' means refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(D) 'dismiss' means order or allow to leave; send away.",
        chinese_explanation: "(C) '提倡' 一词意味着公开推荐或支持。" +
            "<br><br>" +
            "(A) '反对' 意味着不赞成并试图通过争论阻止。" +
            "<br><br>" +
            "(B) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(D) '驳回' 意味着命令或允许离开；送走。"
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
