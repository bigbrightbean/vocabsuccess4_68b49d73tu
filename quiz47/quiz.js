// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "After the scandal, the once bustling office became __________, with employees leaving in droves.",
        chinese_question: "丑闻之后，曾经繁忙的办公室变得 __________，员工们成群结队地离开。",
        answers: [
            { option: "A", answer: "thriving", chinese_answer: "繁荣", chinese_romanization: "fánróng" },
            { option: "B", answer: "desolate", chinese_answer: "荒凉", chinese_romanization: "huāngliáng" },
            { option: "C", answer: "vibrant", chinese_answer: "活跃", chinese_romanization: "huóyuè" },
            { option: "D", answer: "lively", chinese_answer: "热闹", chinese_romanization: "rènào" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'desolate' means feeling or showing misery, unhappiness, or loneliness." +
            "<br><br>" +
            "(A) 'thriving' means prosperous and growing." +
            "<br><br>" +
            "(C) 'vibrant' means full of energy and life." +
            "<br><br>" +
            "(D) 'lively' means full of life and energy; active and outgoing.",
        chinese_explanation: "(B) '荒凉' 意味着感到或表现出痛苦、不幸福或孤独。" +
            "<br><br>" +
            "(A) '繁荣' 意味着繁荣和增长。" +
            "<br><br>" +
            "(C) '活跃' 意味着充满能量和生命。" +
            "<br><br>" +
            "(D) '热闹' 意味着充满生命和能量；活跃和外向。"
    },
    {
        id: 2,
        question: "His __________ attitude extended beyond just giving money; he also volunteered his time.",
        chinese_question: "他的__________态度不仅仅表现在捐钱上；他还志愿贡献自己的时间。",
        answers: [
            { option: "A", answer: "selfish", chinese_answer: "自私的", chinese_romanization: "zìsī de" },
            { option: "B", answer: "stingy", chinese_answer: "吝啬的", chinese_romanization: "lìnsè de" },
            { option: "C", answer: "charitable", chinese_answer: "慈善的", chinese_romanization: "císhàn de" },
            { option: "D", answer: "greedy", chinese_answer: "贪婪的", chinese_romanization: "tānlán de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'charitable' means relating to the assistance of those in need. Figuratively, it can mean being generous and helpful in various ways." +
            "<br><br>" +
            "(A) 'selfish' means lacking consideration for others; concerned chiefly with one's own personal profit or pleasure." +
            "<br><br>" +
            "(B) 'stingy' means unwilling to give or spend; ungenerous." +
            "<br><br>" +
            "(D) 'greedy' means having or showing an intense and selfish desire for something, especially wealth or power.",
        chinese_explanation: "(C) '慈善的'一词意味着与帮助有需要的人有关。比喻地，它可以表示在各种方式上慷慨和乐于助人。" +
            "<br><br>" +
            "(A) '自私的' 意味着缺乏对他人的考虑；主要关心自己的个人利益或快乐。" +
            "<br><br>" +
            "(B) '吝啬的' 意味着不愿意给予或花费；不慷慨的。" +
            "<br><br>" +
            "(D) '贪婪的' 意味着对某物，尤其是财富或权力，表现出强烈和自私的欲望。"
    },
    {
        id: 3,
        question: "Their __________ approach to the tradition made the ceremony feel more special and significant.",
        chinese_question: "他们对传统的__________态度使仪式感觉更加特别和重要。",
        answers: [
            { option: "A", answer: "ceremonious", chinese_answer: "庄重的", chinese_romanization: "zhuāngzhòng de" },
            { option: "B", answer: "informal", chinese_answer: "非正式的", chinese_romanization: "fēi zhèngshì de" },
            { option: "C", answer: "casual", chinese_answer: "随意的", chinese_romanization: "suíyì de" },
            { option: "D", answer: "relaxed", chinese_answer: "放松的", chinese_romanization: "fàngsōng de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'ceremonious' means relating or appropriate to grand and formal occasions. Figuratively, it can mean treating something with great respect and importance." +
            "<br><br>" +
            "(B) 'informal' means having a relaxed, friendly, or unofficial style, manner, or nature." +
            "<br><br>" +
            "(C) 'casual' means relaxed and unconcerned." +
            "<br><br>" +
            "(D) 'relaxed' means free from tension and anxiety.",
        chinese_explanation: "(A) '庄重的' 意味着与盛大和正式的场合有关或适合的。比喻地，它可以表示对某事物表现出极大的尊重和重要性。" +
            "<br><br>" +
            "(B) '非正式的' 意味着具有放松、友好或非官方的风格、方式或性质。" +
            "<br><br>" +
            "(C) '随意的' 意味着放松和不关心的。" +
            "<br><br>" +
            "(D) '放松的' 意味着没有紧张和焦虑。"
    },
    {
        id: 4,
        question: "His thoughts were __________ as he tried to make sense of the complicated situation.",
        chinese_question: "他试图理解复杂的情况时，思绪一片__________。",
        answers: [
            { option: "A", answer: "orderly", chinese_answer: "有序的", chinese_romanization: "yǒuxù de" },
            { option: "B", answer: "organized", chinese_answer: "井然有序的", chinese_romanization: "jǐngrán yǒuxù de" },
            { option: "C", answer: "chaotic", chinese_answer: "混乱的", chinese_romanization: "hùnluàn de" },
            { option: "D", answer: "tidy", chinese_answer: "整洁的", chinese_romanization: "zhěngjié de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'chaotic' means in a state of complete confusion and disorder. Figuratively, it can mean feeling mentally disorganized or overwhelmed." +
            "<br><br>" +
            "(A) 'orderly' means neatly and methodically arranged." +
            "<br><br>" +
            "(B) 'organized' means arranged in a systematic way, especially on a large scale." +
            "<br><br>" +
            "(D) 'tidy' means arranged neatly and in order.",
        chinese_explanation: "(C) '混乱的' 意味着完全混乱和无序的状态。比喻地，它可以表示感到精神上无序或不知所措。" +
            "<br><br>" +
            "(A) '有序的' 意味着整齐和有条理地排列。" +
            "<br><br>" +
            "(B) '井然有序的' 意味着以系统的方式安排，尤其是在大规模上。" +
            "<br><br>" +
            "(D) '整洁的' 意味着整齐和有秩序地排列。"
    },
    {
        id: 5,
        question: "The __________ politician quickly alienated his colleagues with his harsh and unyielding demeanor.",
        chinese_question: "这位 __________ 的政客以他严厉和不屈的态度迅速疏远了他的同事。",
        answers: [
            { option: "A", answer: "agreeable", chinese_answer: "愉快", chinese_romanization: "yúkuài" },
            { option: "B", answer: "amiable", chinese_answer: "友好", chinese_romanization: "yǒuhǎo" },
            { option: "C", answer: "contumacious", chinese_answer: "顽固", chinese_romanization: "wángù" },
            { option: "D", answer: "cooperative", chinese_answer: "合作", chinese_romanization: "hézuò" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'contumacious' means stubbornly or willfully disobedient to authority." +
            "<br><br>" +
            "(A) 'agreeable' means enjoyable and pleasurable; pleasant." +
            "<br><br>" +
            "(B) 'amiable' means having or displaying a friendly and pleasant manner." +
            "<br><br>" +
            "(D) 'cooperative' means involving mutual assistance in working toward a common goal.",
        chinese_explanation: "(C) '顽固' 一词意味着固执或故意不服从权威。" +
            "<br><br>" +
            "(A) '愉快' 意味着令人愉快和愉快的；愉快的。" +
            "<br><br>" +
            "(B) '友好' 意味着具有或表现出友好和愉快的态度。" +
            "<br><br>" +
            "(D) '合作' 意味着在实现共同目标的过程中相互协助。"
    },
    {
        id: 6,
        question: "The movie included a lot of __________ violence that added nothing to the plot.",
        chinese_question: "这部电影包含了许多 __________ 的暴力，对情节没有任何帮助。",
        answers: [
            { option: "A", answer: "necessary", chinese_answer: "必要", chinese_romanization: "bìyào" },
            { option: "B", answer: "essential", chinese_answer: "重要", chinese_romanization: "zhòngyào" },
            { option: "C", answer: "integral", chinese_answer: "不可或缺的", chinese_romanization: "bùkě huòquē de" },
            { option: "D", answer: "gratuitous", chinese_answer: "无根据的", chinese_romanization: "wú gēnjù de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'gratuitous' means uncalled for; lacking good reason; unwarranted." +
            "<br><br>" +
            "(A) 'necessary' means required to be done, achieved, or present; needed." +
            "<br><br>" +
            "(B) 'essential' means absolutely necessary; extremely important." +
            "<br><br>" +
            "(C) 'integral' means necessary to make a whole complete; essential or fundamental.",
        chinese_explanation: "(D) '无根据的' 一词意味着无缘无故的；缺乏正当理由的；不合理的。" +
            "<br><br>" +
            "(A) '必要' 意味着需要完成、实现或存在的；需要的。" +
            "<br><br>" +
            "(B) '重要' 意味着绝对必要的；极其重要的。" +
            "<br><br>" +
            "(C) '不可或缺的' 意味着完成整体所必需的；基本的或根本的。"
    },
    {
        id: 7,
        question: "His credentials were __________, proving that he was truly qualified for the position.",
        chinese_question: "他的证书是 __________ 的，证明他确实有资格胜任这个职位。",
        answers: [
            { option: "A", answer: "fake", chinese_answer: "假的", chinese_romanization: "jiǎ de" },
            { option: "B", answer: "invalid", chinese_answer: "无效的", chinese_romanization: "wúxiào de" },
            { option: "C", answer: "bona fide", chinese_answer: "真实的", chinese_romanization: "zhēnshí de" },
            { option: "D", answer: "questionable", chinese_answer: "可疑的", chinese_romanization: "kěyí de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'bona fide' means genuine; real." +
            "<br><br>" +
            "(A) 'fake' means not genuine; counterfeit." +
            "<br><br>" +
            "(B) 'invalid' means not legally or officially acceptable." +
            "<br><br>" +
            "(D) 'questionable' means doubtful as regards truth or quality.",
        chinese_explanation: "(C) '真实的' 一词意味着真实的；真实的。" +
            "<br><br>" +
            "(A) '假的' 意味着不真实的；伪造的。" +
            "<br><br>" +
            "(B) '无效的' 意味着在法律上或官方上不可接受的。" +
            "<br><br>" +
            "(D) '可疑的' 意味着在真实性或质量方面值得怀疑的。"
    },
    {
        id: 8,
        question: "The movie was filled with __________ clichés, making it predictable and unoriginal.",
        chinese_question: "这部电影充满了 __________ 的陈词滥调，使其变得可预测且无新意。",
        answers: [
            { option: "A", answer: "fresh", chinese_answer: "新鲜", chinese_romanization: "xīnxiān" },
            { option: "B", answer: "hackneyed", chinese_answer: "陈腐", chinese_romanization: "chénfǔ" },
            { option: "C", answer: "unique", chinese_answer: "独特", chinese_romanization: "dútè" },
            { option: "D", answer: "innovative", chinese_answer: "创新", chinese_romanization: "chuàngxīn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'hackneyed' means lacking significance through having been overused; unoriginal and trite." +
            "<br><br>" +
            "(A) 'fresh' means not previously known or used; new or different." +
            "<br><br>" +
            "(C) 'unique' means being the only one of its kind; unlike anything else." +
            "<br><br>" +
            "(D) 'innovative' means featuring new methods; advanced and original.",
        chinese_explanation: "(B) '陈腐' 一词意味着由于被过度使用而缺乏意义；非原创和陈词滥调。" +
            "<br><br>" +
            "(A) '新鲜' 意味着以前未知或未使用；新的或不同的。" +
            "<br><br>" +
            "(C) '独特' 意味着独一无二的；与任何其他事物不同的。" +
            "<br><br>" +
            "(D) '创新' 意味着采用新方法的；先进和原创的。"
    },
    {
        id: 9,
        question: "The box contained a __________ collection of items, ranging from old photographs to random trinkets.",
        chinese_question: "盒子里装有 __________ 的物品，从旧照片到各种小饰品。",
        answers: [
            { option: "A", answer: "miscellaneous", chinese_answer: "杂项", chinese_romanization: "záxiàng" },
            { option: "B", answer: "identical", chinese_answer: "相同", chinese_romanization: "xiāngtóng" },
            { option: "C", answer: "uniform", chinese_answer: "一致", chinese_romanization: "yīzhì" },
            { option: "D", answer: "consistent", chinese_answer: "一贯", chinese_romanization: "yīguàn" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'miscellaneous' means consisting of various types or from different sources." +
            "<br><br>" +
            "(B) 'identical' means similar in every detail; exactly alike." +
            "<br><br>" +
            "(C) 'uniform' means not changing in form or character; remaining the same in all cases and at all times." +
            "<br><br>" +
            "(D) 'consistent' means acting or done in the same way over time.",
        chinese_explanation: "(A) '杂项' 一词意味着由各种类型或来自不同来源组成。" +
            "<br><br>" +
            "(B) '相同' 意味着在每个细节上相似；完全一样。" +
            "<br><br>" +
            "(C) '一致' 意味着在形式或特征上没有变化；在所有情况下和所有时间保持不变。" +
            "<br><br>" +
            "(D) '一贯' 意味着以同样的方式做事或完成。"
    },
    {
        id: 10,
        question: "The __________ organization provided scholarships to underprivileged students, ensuring they had access to quality education.",
        chinese_question: "这家 __________ 组织为贫困学生提供奖学金，确保他们能获得优质教育。",
        answers: [
            { option: "A", answer: "commercial", chinese_answer: "商业", chinese_romanization: "shāngyè" },
            { option: "B", answer: "profit-making", chinese_answer: "盈利", chinese_romanization: "yínglì" },
            { option: "C", answer: "eleemosynary", chinese_answer: "慈善", chinese_romanization: "císhàn" },
            { option: "D", answer: "business-oriented", chinese_answer: "商业导向", chinese_romanization: "shāngyè dǎoxiàng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'eleemosynary' means relating to or dependent on charity; charitable." +
            "<br><br>" +
            "(A) 'commercial' means concerned with or engaged in commerce." +
            "<br><br>" +
            "(B) 'profit-making' means producing a financial gain." +
            "<br><br>" +
            "(D) 'business-oriented' means focused on business or commerce.",
        chinese_explanation: "(C) '慈善' 一词意味着与慈善有关或依赖于慈善的；慈善的。" +
            "<br><br>" +
            "(A) '商业' 意味着与商业有关或从事商业活动。" +
            "<br><br>" +
            "(B) '盈利' 意味着产生经济收益。" +
            "<br><br>" +
            "(D) '商业导向' 意味着专注于商业或贸易。"
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
