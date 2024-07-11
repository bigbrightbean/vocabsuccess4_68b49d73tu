// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The __________ force of the spinning ride kept the children pressed against the walls.",
        chinese_question: "旋转游乐设施的 __________ 力让孩子们紧贴着墙壁。",
        answers: [
            { option: "A", answer: "centrifugal", chinese_answer: "离心的", chinese_romanization: "líxīn de" },
            { option: "B", answer: "centripetal", chinese_answer: "向心的", chinese_romanization: "xiàngxīn de" },
            { option: "C", answer: "gravitational", chinese_answer: "引力的", chinese_romanization: "yǐnlì de" },
            { option: "D", answer: "inertial", chinese_answer: "惯性的", chinese_romanization: "guànxìng de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'centripetal' means moving or tending to move toward a center." +
            "<br><br>" +
            "(A) 'centrifugal' means moving or tending to move away from a center." +
            "<br><br>" +
            "(C) 'gravitational' means relating to movement toward a center of gravity." +
            "<br><br>" +
            "(D) 'inertial' means relating to inertia, the tendency of a body to resist acceleration.",
        chinese_explanation: "(B) '向心的' 一词意味着移动或倾向于移动到中心。" +
            "<br><br>" +
            "(A) '离心的' 意味着移动或倾向于远离中心。" +
            "<br><br>" +
            "(C) '引力的' 意味着与向引力中心移动有关的。" +
            "<br><br>" +
            "(D) '惯性的' 意味着与惯性有关的，即物体抵抗加速度的倾向。"
    },
    {
        id: 2,
        question: "The __________ official was caught taking bribes to overlook illegal activities.",
        chinese_question: "这位 __________ 的官员被抓到接受贿赂以忽视非法活动。",
        answers: [
            { option: "A", answer: "honest", chinese_answer: "诚实的", chinese_romanization: "chéngshí de" },
            { option: "B", answer: "trustworthy", chinese_answer: "值得信赖的", chinese_romanization: "zhídé xìnlài de" },
            { option: "C", answer: "incorruptible", chinese_answer: "廉洁的", chinese_romanization: "liánjié de" },
            { option: "D", answer: "venal", chinese_answer: "贪污的", chinese_romanization: "tānwū de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'venal' means willing to do dishonest things for money." +
            "<br><br>" +
            "(A) 'honest' means always telling the truth and not cheating." +
            "<br><br>" +
            "(B) 'trustworthy' means able to be trusted as honest." +
            "<br><br>" +
            "(C) 'incorruptible' means not able to be corrupted or bribed.",
        chinese_explanation: "(D) '贪污的' 意思是愿意为了钱做不诚实的事情。" +
            "<br><br>" +
            "(A) '诚实的' 意思是总是说实话，不欺骗。" +
            "<br><br>" +
            "(B) '值得信赖的' 意思是可以被信任为诚实的。" +
            "<br><br>" +
            "(C) '廉洁的' 意思是不能被腐败或贿赂。"
    },
    {
        id: 3,
        question: "The detective faced an __________ foe, one who would not stop until he achieved his goal, no matter the cost.",
        chinese_question: "侦探面对一个 __________ 的敌人，一个不惜一切代价实现目标的人。",
        answers: [
            { option: "A", answer: "forgiving", chinese_answer: "宽容的", chinese_romanization: "kuānróng de" },
            { option: "B", answer: "implacable", chinese_answer: "无法安抚的", chinese_romanization: "wúfǎ ānfǔ de" },
            { option: "C", answer: "flexible", chinese_answer: "灵活的", chinese_romanization: "línghuó de" },
            { option: "D", answer: "lenient", chinese_answer: "仁慈的", chinese_romanization: "réncí de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'implacable' means unable to be placated; relentless; unstoppable." +
            "<br><br>" +
            "(A) 'forgiving' means ready and willing to forgive." +
            "<br><br>" +
            "(C) 'flexible' means capable of bending easily without breaking." +
            "<br><br>" +
            "(D) 'lenient' means permissive, merciful, or tolerant.",
        chinese_explanation: "(B) '无法安抚的' 一词意味着无法安抚的；无情的；不可阻挡的。" +
            "<br><br>" +
            "(A) '宽容的' 意味着准备和愿意原谅的。" +
            "<br><br>" +
            "(C) '灵活的' 意味着能轻易弯曲而不折断的。" +
            "<br><br>" +
            "(D) '仁慈的' 意味着宽容的、慈悲的或容忍的。"
    },
    {
        id: 4,
        question: "The __________ stench of the garbage filled the alley, making it almost unbearable to walk through.",
        chinese_question: "垃圾的 __________ 恶臭充满了巷子，使得几乎无法走过去。",
        answers: [
            { option: "A", answer: "fragrant", chinese_answer: "芳香的", chinese_romanization: "fāngxiāng de" },
            { option: "B", answer: "noisome", chinese_answer: "恶臭的", chinese_romanization: "èchòu de" },
            { option: "C", answer: "aromatic", chinese_answer: "芬芳的", chinese_romanization: "fēnfāng de" },
            { option: "D", answer: "pleasant", chinese_answer: "愉快的", chinese_romanization: "yúkuài de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'noisome' means having an extremely offensive smell." +
            "<br><br>" +
            "(A) 'fragrant' means having a pleasant or sweet smell." +
            "<br><br>" +
            "(C) 'aromatic' means having a pleasant and distinctive smell." +
            "<br><br>" +
            "(D) 'pleasant' means giving a sense of happy satisfaction or enjoyment.",
        chinese_explanation: "(B) '恶臭的' 一词意味着有极其令人反感的气味。" +
            "<br><br>" +
            "(A) '芳香的' 意味着有愉快或甜美的气味。" +
            "<br><br>" +
            "(C) '芬芳的' 意味着有愉快和独特的气味。" +
            "<br><br>" +
            "(D) '愉快的' 意味着给人一种快乐满意或享受的感觉。"
    },
    {
        id: 5,
        question: "Her __________ determination to succeed in her career impressed her colleagues and superiors alike.",
        chinese_question: "她 __________ 的职业成功决心给同事和上司留下了深刻印象。",
        answers: [
            { option: "A", answer: "flexible", chinese_answer: "灵活的", chinese_romanization: "línghuó de" },
            { option: "B", answer: "weak", chinese_answer: "虚弱的", chinese_romanization: "xūruò de" },
            { option: "C", answer: "pertinacious", chinese_answer: "顽强的", chinese_romanization: "wánqiáng de" },
            { option: "D", answer: "indifferent", chinese_answer: "漠不关心的", chinese_romanization: "mòbù guānxīn de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'pertinacious' means holding firmly to an opinion or a course of action." +
            "<br><br>" +
            "(A) 'flexible' means capable of bending easily without breaking." +
            "<br><br>" +
            "(B) 'weak' means lacking the power to perform physically demanding tasks; lacking physical strength and energy." +
            "<br><br>" +
            "(D) 'indifferent' means having no particular interest or sympathy; unconcerned.",
        chinese_explanation: "(C) '顽强的' 一词意味着坚定地坚持某种观点或行动方向。" +
            "<br><br>" +
            "(A) '灵活的' 意味着能够轻松弯曲而不折断的。" +
            "<br><br>" +
            "(B) '虚弱的' 意味着缺乏执行体力要求任务的力量；缺乏体力和精力。" +
            "<br><br>" +
            "(D) '漠不关心的' 意味着没有特别的兴趣或同情；不关心。"
    },
    {
        id: 6,
        question: "His __________ tendencies made it difficult for him to form close friendships, as he often viewed others with distrust.",
        chinese_question: "他的 __________ 倾向使他难以形成亲密的友谊，因为他常常以不信任的眼光看待他人。",
        answers: [
            { option: "A", answer: "sociable", chinese_answer: "好交际的", chinese_romanization: "hǎo jiāojì de" },
            { option: "B", answer: "charitable", chinese_answer: "慈善的", chinese_romanization: "císhàn de" },
            { option: "C", answer: "misanthropic", chinese_answer: "厌世的", chinese_romanization: "yànshì de" },
            { option: "D", answer: "empathetic", chinese_answer: "富有同情心的", chinese_romanization: "fùyǒu tóngqíng xīn de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'misanthropic' means disliking humankind and avoiding human society." +
            "<br><br>" +
            "(A) 'sociable' means willing to talk and engage in activities with other people; friendly." +
            "<br><br>" +
            "(B) 'charitable' means relating to the assistance of those in need." +
            "<br><br>" +
            "(D) 'empathetic' means showing an ability to understand and share the feelings of another.",
        chinese_explanation: "(C) '厌世的' 一词意味着不喜欢人类并避免人类社会。" +
            "<br><br>" +
            "(A) '好交际的' 意味着愿意与他人交谈和参与活动；友好的。" +
            "<br><br>" +
            "(B) '慈善的' 意味着与帮助那些需要帮助的人有关的。" +
            "<br><br>" +
            "(D) '富有同情心的' 意味着表现出理解和分享他人感受的能力。"
    },
    {
        id: 7,
        question: "The theory was dismissed because it was based on __________ assumptions that were not supported by evidence.",
        chinese_question: "该理论被驳回，因为它基于没有证据支持的 __________ 假设。",
        answers: [
            { option: "A", answer: "accurate", chinese_answer: "准确的", chinese_romanization: "zhǔnquè de" },
            { option: "B", answer: "erroneous", chinese_answer: "错误的", chinese_romanization: "cuòwù de" },
            { option: "C", answer: "correct", chinese_answer: "正确的", chinese_romanization: "zhèngquè de" },
            { option: "D", answer: "valid", chinese_answer: "有效的", chinese_romanization: "yǒuxiào de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'erroneous' means wrong; incorrect." +
            "<br><br>" +
            "(A) 'accurate' means correct in all details; exact." +
            "<br><br>" +
            "(C) 'correct' means free from error; in accordance with fact or truth." +
            "<br><br>" +
            "(D) 'valid' means having a sound basis in logic or fact; reasonable or cogent.",
        chinese_explanation: "(B) '错误的' 一词意味着错误的；不正确的。" +
            "<br><br>" +
            "(A) '准确的' 意味着在所有细节上都正确的；精确的。" +
            "<br><br>" +
            "(C) '正确的' 意味着没有错误的；符合事实或真理的。" +
            "<br><br>" +
            "(D) '有效的' 意味着在逻辑或事实中有合理基础的；合理的或令人信服的。"
    },
    {
        id: 8,
        question: "Climbing the steep mountain was an __________ task that required great endurance and strength.",
        chinese_question: "攀登陡峭的山峰是一个 __________ 的任务，需要极大的耐力和力量。",
        answers: [
            { option: "A", answer: "easy", chinese_answer: "容易的", chinese_romanization: "róngyì de" },
            { option: "B", answer: "simple", chinese_answer: "简单的", chinese_romanization: "jiǎndān de" },
            { option: "C", answer: "arduous", chinese_answer: "艰巨的", chinese_romanization: "jiānjù de" },
            { option: "D", answer: "effortless", chinese_answer: "轻松的", chinese_romanization: "qīngsōng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'arduous' means involving or requiring strenuous effort; difficult and tiring." +
            "<br><br>" +
            "(A) 'easy' means achieved without great effort; presenting few difficulties." +
            "<br><br>" +
            "(B) 'simple' means easily understood or done; presenting no difficulty." +
            "<br><br>" +
            "(D) 'effortless' means requiring no physical or mental exertion.",
        chinese_explanation: "(C) '艰巨的' 一词意味着需要或要求艰苦努力的；困难和累人的。" +
            "<br><br>" +
            "(A) '容易的' 意味着不需要很大努力就能实现的；呈现出少数困难的。" +
            "<br><br>" +
            "(B) '简单的' 意味着容易理解或完成的；没有难度的。" +
            "<br><br>" +
            "(D) '轻松的' 意味着不需要体力或脑力劳动的。"
    },
    {
        id: 9,
        question: "He seemed __________ during the meeting, his mind clearly wandering to other thoughts instead of focusing on the discussion.",
        chinese_question: "他在会议上显得 __________，显然他的思绪游离在其他事情上，而不是专注于讨论。",
        answers: [
            { option: "A", answer: "attentive", chinese_answer: "专心的", chinese_romanization: "zhuānxīn de" },
            { option: "B", answer: "engaged", chinese_answer: "参与的", chinese_romanization: "cānyù de" },
            { option: "C", answer: "focused", chinese_answer: "集中的", chinese_romanization: "jízhōng de" },
            { option: "D", answer: "distrait", chinese_answer: "心不在焉的", chinese_romanization: "xīn bù zài yān de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'distrait' means distracted or absent-minded." +
            "<br><br>" +
            "(A) 'attentive' means paying close attention to something." +
            "<br><br>" +
            "(B) 'engaged' means busy; occupied." +
            "<br><br>" +
            "(C) 'focused' means directing a great deal of attention, interest, or activity toward a particular aim.",
        chinese_explanation: "(D) '心不在焉的' 一词意味着分心或心不在焉。" +
            "<br><br>" +
            "(A) '专心的' 意味着密切关注某事。" +
            "<br><br>" +
            "(B) '参与的' 意味着忙碌的；占用的。" +
            "<br><br>" +
            "(C) '集中的' 意味着将大量注意力、兴趣或活动集中在一个特定目标上。"
    },
    {
        id: 10,
        question: "The clear skies and calm winds were __________ for the launch of the new spacecraft.",
        chinese_question: "晴朗的天空和平静的风对新航天器的发射来说是 __________ 的。",
        answers: [
            { option: "A", answer: "unfavorable", chinese_answer: "不利的", chinese_romanization: "bùlì de" },
            { option: "B", answer: "discouraging", chinese_answer: "令人沮丧的", chinese_romanization: "lìng rén jǔsàng de" },
            { option: "C", answer: "inauspicious", chinese_answer: "不吉利的", chinese_romanization: "bù jílì de" },
            { option: "D", answer: "propitious", chinese_answer: "吉利的", chinese_romanization: "jílì de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'propitious' means likely to bring good results or success." +
            "<br><br>" +
            "(A) 'unfavorable' means not good or positive." +
            "<br><br>" +
            "(B) 'discouraging' means making you feel less confident or enthusiastic." +
            "<br><br>" +
            "(C) 'inauspicious' means not suggesting that something good will happen.",
        chinese_explanation: "(D) '吉利的' 意思是可能带来好结果或成功。" +
            "<br><br>" +
            "(A) '不利的' 意思是不好的或消极的。" +
            "<br><br>" +
            "(B) '令人沮丧的' 意思是让你感觉不那么自信或热情。" +
            "<br><br>" +
            "(C) '不吉利的' 意思是暗示不会发生好事。"
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
