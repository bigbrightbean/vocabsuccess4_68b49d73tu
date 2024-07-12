// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The review board's decision felt like an __________, clearing her of any wrongdoing in the project.",
        chinese_question: "审查委员会的决定感觉像是一次 __________，清除了她在项目中的任何不当行为。",
        answers: [
            { option: "A", answer: "accusation", chinese_answer: "指控", chinese_romanization: "zhǐkòng" },
            { option: "B", answer: "acquittal", chinese_answer: "无罪释放", chinese_romanization: "wúzuì shìfàng" },
            { option: "C", answer: "criticism", chinese_answer: "批评", chinese_romanization: "pīpíng" },
            { option: "D", answer: "blame", chinese_answer: "责备", chinese_romanization: "zébèi" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'acquittal' figuratively means a formal release from a charge of wrongdoing." +
            "<br><br>" +
            "(A) 'accusation' means a charge or claim that someone has done something illegal or wrong." +
            "<br><br>" +
            "(C) 'criticism' means the expression of disapproval of someone or something based on perceived faults or mistakes." +
            "<br><br>" +
            "(D) 'blame' means assign responsibility for a fault or wrong.",
        chinese_explanation: "(B) '无罪释放' 在比喻意义上意味着从指控不当行为中正式解除。" +
            "<br><br>" +
            "(A) '指控' 意味着指控某人做了非法或错误的事情。" +
            "<br><br>" +
            "(C) '批评' 意味着根据被感知到的缺点或错误表达不赞成。" +
            "<br><br>" +
            "(D) '责备' 意味着将错误或过失的责任归咎于。"
    },
    {
        id: 2,
        question: "The prospect of the new project filled him with __________, unsure of the challenges ahead.",
        chinese_question: "新项目的前景让他充满 __________，不确定前方的挑战。",
        answers: [
            { option: "A", answer: "trepidation", chinese_answer: "恐惧", chinese_romanization: "kǒngjù" },
            { option: "B", answer: "eagerness", chinese_answer: "渴望", chinese_romanization: "kěwàng" },
            { option: "C", answer: "assurance", chinese_answer: "保证", chinese_romanization: "bǎozhèng" },
            { option: "D", answer: "certainty", chinese_answer: "确定性", chinese_romanization: "quèdìng xìng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'trepidation' metaphorically means a feeling of fear or anxiety about something that may happen." +
            "<br><br>" +
            "(B) 'eagerness' means keen or enthusiastic interest." +
            "<br><br>" +
            "(C) 'assurance' means a positive declaration intended to give confidence; a promise." +
            "<br><br>" +
            "(D) 'certainty' means the quality of being reliably true.",
        chinese_explanation: "(A) '恐惧' 比喻对可能发生的事情的恐惧或焦虑的感觉。" +
            "<br><br>" +
            "(B) '渴望' 意味着强烈的兴趣或热情。" +
            "<br><br>" +
            "(C) '保证' 意味着旨在给予信心的积极声明；承诺。" +
            "<br><br>" +
            "(D) '确定性' 意味着可靠地真实的质量。"
    },
    {
        id: 3,
        question: "The politician's opponents spread __________ about him to damage his reputation before the election.",
        chinese_question: "政客的对手散布关于他的 __________，在选举前损害他的名誉。",
        answers: [
            { option: "A", answer: "praises", chinese_answer: "赞美", chinese_romanization: "zànyáng" },
            { option: "B", answer: "aspersions", chinese_answer: "诽谤", chinese_romanization: "fěibàng" },
            { option: "C", answer: "compliments", chinese_answer: "恭维", chinese_romanization: "gōngwéi" },
            { option: "D", answer: "accolades", chinese_answer: "荣誉", chinese_romanization: "róngyù" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'aspersions' means an attack on the reputation or integrity of someone or something." +
            "<br><br>" +
            "(A) 'praises' means the expression of approval or admiration for someone or something." +
            "<br><br>" +
            "(C) 'compliments' means a polite expression of praise or admiration." +
            "<br><br>" +
            "(D) 'accolades' means an award or privilege granted as a special honor or as an acknowledgment of merit.",
        chinese_explanation: "(B) '诽谤' 一词意味着对某人或某事声誉或正直的攻击。" +
            "<br><br>" +
            "(A) '赞美' 意味着对某人或某事的认可或钦佩的表达。" +
            "<br><br>" +
            "(C) '恭维' 意味着一种礼貌的赞美或钦佩的表达。" +
            "<br><br>" +
            "(D) '荣誉' 意味着作为特别荣誉或功绩的承认而授予的奖项或特权。"
    },
    {
        id: 4,
        question: "Her motives were an __________, making it hard to understand her actions.",
        chinese_question: "她的动机是一个 __________，让人难以理解她的行为。",
        answers: [
            { option: "A", answer: "enigma", chinese_answer: "谜", chinese_romanization: "mí" },
            { option: "B", answer: "clarity", chinese_answer: "清晰", chinese_romanization: "qīngxī" },
            { option: "C", answer: "certainty", chinese_answer: "确定", chinese_romanization: "quèdìng" },
            { option: "D", answer: "openness", chinese_answer: "开放", chinese_romanization: "kāifàng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'enigma' metaphorically means something that is mysterious or difficult to understand." +
            "<br><br>" +
            "(B) 'clarity' means the quality of being coherent and intelligible." +
            "<br><br>" +
            "(C) 'certainty' means firm conviction that something is the case." +
            "<br><br>" +
            "(D) 'openness' means lack of restriction; accessibility.",
        chinese_explanation: "(A) '谜' 比喻神秘或难以理解的东西。" +
            "<br><br>" +
            "(B) '清晰' 意味着连贯和可理解的质量。" +
            "<br><br>" +
            "(C) '确定' 意味着对某事有坚定的信念。" +
            "<br><br>" +
            "(D) '开放' 意味着没有限制；可访问性。"
    },
    {
        id: 5,
        question: "She put all her heart into the __________ of becoming a published author.",
        chinese_question: "她全心投入成为出版作家的 __________ 中。",
        answers: [
            { option: "A", answer: "abandonment", chinese_answer: "放弃", chinese_romanization: "fàngqì" },
            { option: "B", answer: "avoidance", chinese_answer: "回避", chinese_romanization: "huíbì" },
            { option: "C", answer: "endeavour", chinese_answer: "努力", chinese_romanization: "nǔlì" },
            { option: "D", answer: "rejection", chinese_answer: "拒绝", chinese_romanization: "jùjué" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'endeavour' figuratively means a serious attempt or effort." +
            "<br><br>" +
            "(A) 'abandonment' means the action or fact of abandoning or being abandoned." +
            "<br><br>" +
            "(B) 'avoidance' means the action of keeping away from or not doing something." +
            "<br><br>" +
            "(D) 'rejection' means the dismissing or refusing of a proposal, idea, etc.",
        chinese_explanation: "(C) '努力' 在比喻意义上意味着认真尝试或努力。" +
            "<br><br>" +
            "(A) '放弃' 意味着放弃或被放弃的行为或事实。" +
            "<br><br>" +
            "(B) '回避' 意味着避免或不做某事的行为。" +
            "<br><br>" +
            "(D) '拒绝' 意味着拒绝或拒绝提议、想法等。"
    },
    {
        id: 6,
        question: "The composer wrote a beautiful __________, praising the heroism and sacrifice of the soldiers.",
        chinese_question: "作曲家写了一首美丽的 __________，赞美士兵们的英勇和牺牲。",
        answers: [
            { option: "A", answer: "critique", chinese_answer: "批评", chinese_romanization: "pīpíng" },
            { option: "B", answer: "lament", chinese_answer: "哀歌", chinese_romanization: "āigē" },
            { option: "C", answer: "paean", chinese_answer: "颂歌", chinese_romanization: "sònggē" },
            { option: "D", answer: "satire", chinese_answer: "讽刺", chinese_romanization: "fěngcì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'paean' means a song of praise or triumph." +
            "<br><br>" +
            "(A) 'critique' means a detailed analysis and assessment of something, especially a literary, philosophical, or political theory." +
            "<br><br>" +
            "(B) 'lament' means a passionate expression of grief or sorrow." +
            "<br><br>" +
            "(D) 'satire' means the use of humor, irony, or exaggeration to criticize people's stupidity or vices.",
        chinese_explanation: "(C) '颂歌' 一词意味着赞美或胜利的歌。" +
            "<br><br>" +
            "(A) '批评' 意味着对某事的详细分析和评估，特别是文学、哲学或政治理论。" +
            "<br><br>" +
            "(B) '哀歌' 意味着激情的悲伤或悲痛的表达。" +
            "<br><br>" +
            "(D) '讽刺' 意味着用幽默、讽刺或夸张来批评人们的愚蠢或恶习。"
    },
    {
        id: 7,
        question: "The jury returned a unanimous __________, finding the defendant guilty of all charges.",
        chinese_question: "陪审团一致做出了 __________，认定被告所有罪名成立。",
        answers: [
                { option: "A", answer: "appeal", chinese_answer: "上诉", chinese_romanization: "shàngsù" },
                { option: "B", answer: "verdict", chinese_answer: "裁决", chinese_romanization: "cáijué" },
                { option: "C", answer: "alibi", chinese_answer: "不在场证明", chinese_romanization: "bùzàichǎng zhèngmíng" },
                { option: "D", answer: "hearing", chinese_answer: "听证会", chinese_romanization: "tīngzhènghuì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'verdict' means a decision on a disputed issue in a civil or criminal case or an inquest." +
            "<br><br>" +
            "(A) 'appeal' means apply to a higher court for a reversal of the decision of a lower court." +
            "<br><br>" +
            "(C) 'alibi' means a claim or piece of evidence that one was elsewhere when an act, typically a criminal one, is alleged to have taken place." +
            "<br><br>" +
            "(D) 'hearing' means an official meeting that is held to collect the facts about an event or problem.",
        chinese_explanation: "(B) '裁决' 意味着在民事或刑事案件或调查中的争议问题上的决定。" +
            "<br><br>" +
            "(A) '上诉' 意味着向上级法院申请撤销下级法院的决定。" +
            "<br><br>" +
            "(C) '不在场证明' 意味着在通常是犯罪行为被指控发生时，一个人在其他地方的证据。" +
            "<br><br>" +
            "(D) '听证会' 意味着为了收集关于一个事件或问题的事实而举行的正式会议。"
    },
    {
        id: 8,
        question: "Her success was clear __________ of her hard work and determination.",
        chinese_question: "她的成功是她努力工作和决心的明确 __________。",
        answers: [
            { option: "A", answer: "evidence", chinese_answer: "证据", chinese_romanization: "zhèngjù" },
            { option: "B", answer: "suggestion", chinese_answer: "建议", chinese_romanization: "jiànyì" },
            { option: "C", answer: "imitation", chinese_answer: "模仿", chinese_romanization: "mófǎng" },
            { option: "D", answer: "avoidance", chinese_answer: "回避", chinese_romanization: "huíbì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'evidence' metaphorically means something that demonstrates or proves a fact or truth." +
            "<br><br>" +
            "(B) 'suggestion' means an idea or plan put forward for consideration." +
            "<br><br>" +
            "(C) 'imitation' means the action of using someone or something as a model." +
            "<br><br>" +
            "(D) 'avoidance' means the action of keeping away from or not doing something.",
        chinese_explanation: "(A) '证据' 比喻展示或证明事实或真理的事物。" +
            "<br><br>" +
            "(B) '建议' 意味着提出供考虑的想法或计划。" +
            "<br><br>" +
            "(C) '模仿' 意味着以某人或某物为模型的行为。" +
            "<br><br>" +
            "(D) '回避' 意味着避免或不做某事的行为。"
    },
    {
        id: 9,
        question: "The secretive __________ was held to discuss the confidential matters concerning the future of the organization.",
        chinese_question: "秘密的 __________ 会议是为了讨论有关组织未来的机密事项。",
        answers: [
            { option: "A", answer: "festival", chinese_answer: "节日", chinese_romanization: "jiérì" },
            { option: "B", answer: "conclave", chinese_answer: "秘密会议", chinese_romanization: "mìmì huìyì" },
            { option: "C", answer: "fair", chinese_answer: "集市", chinese_romanization: "jíshì" },
            { option: "D", answer: "parade", chinese_answer: "游行", chinese_romanization: "yóuxíng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'conclave' means a private meeting or secret assembly." +
            "<br><br>" +
            "(A) 'festival' means a day or period of celebration, typically for religious reasons." +
            "<br><br>" +
            "(C) 'fair' means a gathering of stalls and amusements for public entertainment." +
            "<br><br>" +
            "(D) 'parade' means a public procession, especially one celebrating a special day or event.",
        chinese_explanation: "(B) '秘密会议' 一词意味着一次私人的或秘密的集会。" +
            "<br><br>" +
            "(A) '节日' 意味着通常出于宗教原因的庆祝日或庆祝期。" +
            "<br><br>" +
            "(C) '集市' 意味着为公众娱乐而设的摊位和娱乐活动的聚会。" +
            "<br><br>" +
            "(D) '游行' 意味着庆祝特别日子或事件的公众游行。"
    },
    {
        id: 10,
        question: "The company placed an __________ on sharing sensitive information with competitors.",
        chinese_question: "公司对与竞争对手共享敏感信息实施了 __________。",
        answers: [
            { option: "A", answer: "embargo", chinese_answer: "禁止", chinese_romanization: "jìnzhǐ" },
            { option: "B", answer: "permission", chinese_answer: "许可", chinese_romanization: "xǔkě" },
            { option: "C", answer: "encouragement", chinese_answer: "鼓励", chinese_romanization: "gǔlì" },
            { option: "D", answer: "suggestion", chinese_answer: "建议", chinese_romanization: "jiànyì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'embargo' literally means an official ban on trade or other commercial activity with a particular country. Metaphorically, it means a restriction or ban." +
            "<br><br>" +
            "(B) 'permission' means the action of officially allowing someone to do a particular thing." +
            "<br><br>" +
            "(C) 'encouragement' means the action of giving someone support, confidence, or hope." +
            "<br><br>" +
            "(D) 'suggestion' means an idea or plan put forward for consideration.",
        chinese_explanation: "(A) '禁止' 字面意思是对与特定国家的贸易或其他商业活动的正式禁令。比喻上，它意味着一种限制或禁止。" +
            "<br><br>" +
            "(B) '许可' 意味着正式允许某人做某事的行为。" +
            "<br><br>" +
            "(C) '鼓励' 意味着给予某人支持、信心或希望的行为。" +
            "<br><br>" +
            "(D) '建议' 意味着提出考虑的想法或计划。"
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
