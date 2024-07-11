// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "She had a __________ appetite for success, never satisfied with her achievements and always striving for more.",
        chinese_question: "她对成功有着 __________ 的渴望，从不满足于自己的成就，总是追求更多。",
        answers: [
            { option: "A", answer: "moderate", chinese_answer: "适度的", chinese_romanization: "shìdù de" },
            { option: "B", answer: "complacent", chinese_answer: "自满的", chinese_romanization: "zìmǎn de" },
            { option: "C", answer: "voracious", chinese_answer: "贪婪的", chinese_romanization: "tānlán de" },
            { option: "D", answer: "apathetic", chinese_answer: "冷漠的", chinese_romanization: "lěngmò de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'voracious' figuratively means having an insatiable appetite or desire for something." +
            "<br><br>" +
            "(A) 'moderate' means average in amount, intensity, quality, or degree." +
            "<br><br>" +
            "(B) 'complacent' means showing smug or uncritical satisfaction with oneself or one's achievements." +
            "<br><br>" +
            "(D) 'apathetic' means showing or feeling no interest, enthusiasm, or concern.",
        chinese_explanation: "(C) '贪婪的' 在比喻意义上意味着对某事有无法满足的渴望或欲望。" +
            "<br><br>" +
            "(A) '适度的' 意味着在数量、强度、质量或程度上适中的。" +
            "<br><br>" +
            "(B) '自满的' 意味着对自己或自己的成就表现出自满或不加批判的满足。" +
            "<br><br>" +
            "(D) '冷漠的' 意味着表现出或感到没有兴趣、热情或关心。"
    },
    {
        id: 2,
        question: "The chef's kitchen was a __________ scene of activity as everyone rushed to prepare for the dinner rush.",
        chinese_question: "厨师的厨房是一片 __________ 的活动景象，大家都在忙着为晚餐高峰期做准备。",
        answers: [
            { option: "A", answer: "calm", chinese_answer: "平静的", chinese_romanization: "píngjìng de" },
            { option: "B", answer: "organized", chinese_answer: "有条理的", chinese_romanization: "yǒu tiáolǐ de" },
            { option: "C", answer: "peaceful", chinese_answer: "和平的", chinese_romanization: "hépíng de" },
            { option: "D", answer: "frenetic", chinese_answer: "狂热的", chinese_romanization: "kuángrè de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'frenetic' means fast and energetic in a rather wild and uncontrolled way." +
            "<br><br>" +
            "(A) 'calm' means not showing or feeling nervousness, anger, or other strong emotions." +
            "<br><br>" +
            "(B) 'organized' means arranged in a systematic way, especially on a large scale." +
            "<br><br>" +
            "(C) 'peaceful' means free from disturbance; tranquil.",
        chinese_explanation: "(D) '狂热的' 一词意味着以一种相当疯狂和失控的方式快速和充满活力的。" +
            "<br><br>" +
            "(A) '平静的' 意味着不表现或感到紧张、愤怒或其他强烈情感。" +
            "<br><br>" +
            "(B) '有条理的' 意味着以系统的方式安排，特别是大规模的。" +
            "<br><br>" +
            "(C) '和平的' 意味着没有干扰的；宁静的。"
    },
    {
        id: 3,
        question: "The lawyer argued that the contract's terms were __________, placing an unfair burden on his client.",
        chinese_question: "律师辩称，合同条款是 __________ 的，对他的客户构成了不公平的负担。",
        answers: [
            { option: "A", answer: "fair", chinese_answer: "公平的", chinese_romanization: "gōngpíng de" },
            { option: "B", answer: "reasonable", chinese_answer: "合理的", chinese_romanization: "hélǐ de" },
            { option: "C", answer: "unconscionable", chinese_answer: "不合理的", chinese_romanization: "bùhélǐ de" },
            { option: "D", answer: "justifiable", chinese_answer: "有理由的", chinese_romanization: "yǒu lǐyóude" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'unconscionable' means not right or reasonable." +
            "<br><br>" +
            "(A) 'fair' means in accordance with the rules or standards; legitimate." +
            "<br><br>" +
            "(B) 'reasonable' means having sound judgment; fair and sensible." +
            "<br><br>" +
            "(D) 'justifiable' means able to be shown to be right or reasonable; defensible.",
        chinese_explanation: "(C) '不合理的' 一词意味着不正确或不合理的。" +
            "<br><br>" +
            "(A) '公平的' 意味着符合规则或标准；合法的。" +
            "<br><br>" +
            "(B) '合理的' 意味着有正确判断的；公平和明智的。" +
            "<br><br>" +
            "(D) '有理由的' 意味着能够证明是正确或合理的；可辩护的。"
    },
    {
        id: 4,
        question: "The dentist informed him that his __________ tooth needed to be extracted due to severe decay.",
        chinese_question: "牙医告诉他，由于严重的蛀牙，他的 __________ 牙需要拔除。",
        answers: [
            { option: "A", answer: "molar", chinese_answer: "磨牙", chinese_romanization: "móyá" },
            { option: "B", answer: "bicuspid", chinese_answer: "双尖牙", chinese_romanization: "shuāngjiānyá" },
            { option: "C", answer: "canine", chinese_answer: "犬齿", chinese_romanization: "quǎnchǐ" },
            { option: "D", answer: "incisor", chinese_answer: "门牙", chinese_romanization: "ményá" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'bicuspid' means a tooth with two cusps, especially a human premolar tooth." +
            "<br><br>" +
            "(A) 'molar' means a grinding tooth at the back of a mammal's mouth." +
            "<br><br>" +
            "(C) 'canine' means a pointed tooth between the incisors and premolars." +
            "<br><br>" +
            "(D) 'incisor' means a narrow-edged tooth at the front of the mouth, adapted for cutting.",
        chinese_explanation: "(B) '双尖牙' 一词意味着具有两个尖头的牙齿，尤其是人类的前磨牙。" +
            "<br><br>" +
            "(A) '磨牙' 意味着哺乳动物嘴后部的磨牙。" +
            "<br><br>" +
            "(C) '犬齿' 意味着位于门牙和前磨牙之间的尖牙。" +
            "<br><br>" +
            "(D) '门牙' 意味着嘴前部的窄边牙，适合切割。"
    },
    {
        id: 5,
        question: "The art collector was only interested in buying __________ pieces, insisting on certificates of authenticity.",
        chinese_question: "艺术品收藏家只对购买 __________ 的作品感兴趣，坚决要求提供真实性证书。",
        answers: [
            { option: "A", answer: "fake", chinese_answer: "假的", chinese_romanization: "jiǎ de" },
            { option: "B", answer: "damaged", chinese_answer: "损坏的", chinese_romanization: "sǔnhuài de" },
            { option: "C", answer: "authentic", chinese_answer: "真实的", chinese_romanization: "zhēnshí de" },
            { option: "D", answer: "imitation", chinese_answer: "仿制的", chinese_romanization: "fǎngzhì de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'authentic' means of undisputed origin and not a copy; genuine." +
            "<br><br>" +
            "(A) 'fake' means a thing that is not genuine; a forgery or sham." +
            "<br><br>" +
            "(B) 'damaged' means harmed or injured or spoiled." +
            "<br><br>" +
            "(D) 'imitation' means a thing intended to simulate or copy something else.",
        chinese_explanation: "(C) '真实的' 一词意味着无可争议的起源而不是复制品；真正的。" +
            "<br><br>" +
            "(A) '假的' 意味着不真实的东西；伪造或赝品。" +
            "<br><br>" +
            "(B) '损坏的' 意味着受伤或受损或变质的。" +
            "<br><br>" +
            "(D) '仿制的' 意味着意图模拟或复制其他东西的东西。"
    },
    {
        id: 6,
        question: "The building manager was fired for being __________ in his duties, which led to several safety violations.",
        chinese_question: "建筑经理因在职责上 __________ 而被解雇，这导致了几起安全违规行为。",
        answers: [
            { option: "A", answer: "diligent", chinese_answer: "勤奋的", chinese_romanization: "qínfèn de" },
            { option: "B", answer: "negligent", chinese_answer: "疏忽的", chinese_romanization: "shūhū de" },
            { option: "C", answer: "meticulous", chinese_answer: "一丝不苟的", chinese_romanization: "yīsī bù gǒu de" },
            { option: "D", answer: "attentive", chinese_answer: "细心的", chinese_romanization: "xìxīn de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'negligent' means failing to take proper care in doing something." +
            "<br><br>" +
            "(A) 'diligent' means having or showing care and conscientiousness in one's work or duties." +
            "<br><br>" +
            "(C) 'meticulous' means showing great attention to detail; very careful and precise." +
            "<br><br>" +
            "(D) 'attentive' means paying close attention to something.",
        chinese_explanation: "(B) '疏忽的' 一词意味着在做某事时没有采取适当的照顾。" +
            "<br><br>" +
            "(A) '勤奋的' 意味着在工作或职责上表现出关心和认真。" +
            "<br><br>" +
            "(C) '一丝不苟的' 意味着非常注意细节的；非常仔细和精确的。" +
            "<br><br>" +
            "(D) '细心的' 意味着密切注意某事。"
    },
    {
        id: 7,
        question: "The seemingly __________ solution to the problem was actually quite complex and required careful consideration.",
        chinese_question: "看似 __________ 的解决方案实际上非常复杂，需要仔细考虑。",
        answers: [
            { option: "A", answer: "complicated", chinese_answer: "复杂的", chinese_romanization: "fùzá de" },
            { option: "B", answer: "facile", chinese_answer: "容易的", chinese_romanization: "róngyì de" },
            { option: "C", answer: "difficult", chinese_answer: "困难的", chinese_romanization: "kùnnán de" },
            { option: "D", answer: "intricate", chinese_answer: "错综复杂的", chinese_romanization: "cuòzōng fùzá de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'facile' means appearing neat and comprehensive only by ignoring the true complexities of an issue; superficial." +
            "<br><br>" +
            "(A) 'complicated' means consisting of many interconnecting parts or elements; intricate." +
            "<br><br>" +
            "(C) 'difficult' means needing much effort or skill to accomplish, deal with, or understand." +
            "<br><br>" +
            "(D) 'intricate' means very complicated or detailed.",
        chinese_explanation: "(B) '容易的' 一词意味着仅通过忽略问题的真实复杂性而显得整洁和全面的；肤浅的。" +
            "<br><br>" +
            "(A) '复杂的' 意味着由许多互连的部分或元素组成；复杂的。" +
            "<br><br>" +
            "(C) '困难的' 意味着需要很大的努力或技能才能完成、处理或理解。" +
            "<br><br>" +
            "(D) '错综复杂的' 意味着非常复杂或详细的。"
    },
    {
        id: 8,
        question: "The sunset cast a __________ glow over the mountains, painting the sky with vibrant colors.",
        chinese_question: "夕阳在山脉上投射出 __________ 的光辉，给天空染上了鲜艳的色彩。",
        answers: [
            { option: "A", answer: "dull", chinese_answer: "暗淡的", chinese_romanization: "àndàn de" },
            { option: "B", answer: "obscure", chinese_answer: "模糊的", chinese_romanization: "móhú de" },
            { option: "C", answer: "dark", chinese_answer: "黑暗的", chinese_romanization: "hēi'àn de" },
            { option: "D", answer: "refulgent", chinese_answer: "灿烂的", chinese_romanization: "cànlàn de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'refulgent' means shining brightly." +
            "<br><br>" +
            "(A) 'dull' means lacking brightness, vividness, or sheen." +
            "<br><br>" +
            "(B) 'obscure' means not discovered or known about; uncertain." +
            "<br><br>" +
            "(C) 'dark' means with little or no light.",
        chinese_explanation: "(D) '灿烂的' 一词意味着光辉灿烂的。" +
            "<br><br>" +
            "(A) '暗淡的' 意味着缺乏亮度、鲜艳或光泽。" +
            "<br><br>" +
            "(B) '模糊的' 意味着未知的；不确定的。" +
            "<br><br>" +
            "(C) '黑暗的' 意味着光线很少或没有光线的。"
    },
    {
        id: 9,
        question: "His argument was __________ to the main issue, often veering off into unrelated topics.",
        chinese_question: "他的论点对主要问题来说是 __________ 的，经常偏离到不相关的话题。",
        answers: [
            { option: "A", answer: "central", chinese_answer: "中心的", chinese_romanization: "zhōngxīn de" },
            { option: "B", answer: "tangential", chinese_answer: "离题的", chinese_romanization: "lítí de" },
            { option: "C", answer: "relevant", chinese_answer: "相关的", chinese_romanization: "xiāngguān de" },
            { option: "D", answer: "focused", chinese_answer: "专注的", chinese_romanization: "zhuānzhù de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'tangential' means diverging from a previous course or line; hardly touching a matter; peripheral." +
            "<br><br>" +
            "(A) 'central' means of, at, or forming the center." +
            "<br><br>" +
            "(C) 'relevant' means closely connected or appropriate to what is being done or considered." +
            "<br><br>" +
            "(D) 'focused' means concentrated on a particular aim or activity.",
        chinese_explanation: "(B) '离题的' 一词意味着偏离先前的路线或线路；几乎不涉及问题的；外围的。" +
            "<br><br>" +
            "(A) '中心的' 意味着在、或形成中心的。" +
            "<br><br>" +
            "(C) '相关的' 意味着与正在做或考虑的事情密切相关或适当的。" +
            "<br><br>" +
            "(D) '专注的' 意味着集中在特定目标或活动上。"
    },
    {
        id: 10,
        question: "The ballroom was decorated in __________ style, with elaborate designs and ornate furniture that created a grand atmosphere.",
        chinese_question: "舞厅以 __________ 风格装饰，华丽的设计和装饰精美的家具营造出宏伟的氛围。",
        answers: [
            { option: "A", answer: "rococo", chinese_answer: "洛可可的", chinese_romanization: "luòkěkě de" },
            { option: "B", answer: "minimalist", chinese_answer: "极简主义的", chinese_romanization: "jíjiǎn zhǔyì de" },
            { option: "C", answer: "rustic", chinese_answer: "乡村的", chinese_romanization: "xiāngcūn de" },
            { option: "D", answer: "industrial", chinese_answer: "工业的", chinese_romanization: "gōngyè de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'rococo' means relating to an 18th-century artistic movement and style, which was ornate and used light colors, asymmetrical designs, and curves." +
            "<br><br>" +
            "(B) 'minimalist' means relating to a style or approach that uses the smallest range of materials and colors possible, and only very simple shapes or forms." +
            "<br><br>" +
            "(C) 'rustic' means relating to the countryside; rural." +
            "<br><br>" +
            "(D) 'industrial' means relating to or characterized by industry.",
        chinese_explanation: "(A) '洛可可的' 一词意味着与18世纪的艺术运动和风格有关，该风格华丽，使用浅色、不对称设计和曲线。" +
            "<br><br>" +
            "(B) '极简主义的' 意味着与使用尽可能少的材料和颜色，仅使用非常简单的形状或形式的风格或方法有关。" +
            "<br><br>" +
            "(C) '乡村的' 意味着与乡村有关的；农村的。" +
            "<br><br>" +
            "(D) '工业的' 意味着与工业有关的或以工业为特征的。"
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
