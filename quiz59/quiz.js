// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The vintage décor of the café evoked a sense of __________ among its patrons, reminding them of a bygone era.",
        chinese_question: "咖啡馆的复古装饰唤起了顾客的 __________ 感，提醒他们过去的时代。",
        answers: [
            { option: "A", answer: "modernity", chinese_answer: "现代性", chinese_romanization: "xiàndài xìng" },
            { option: "B", answer: "progress", chinese_answer: "进步", chinese_romanization: "jìnbù" },
            { option: "C", answer: "innovation", chinese_answer: "创新", chinese_romanization: "chuàngxīn" },
            { option: "D", answer: "nostalgia", chinese_answer: "怀旧", chinese_romanization: "huáijiù" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'nostalgia' figuratively means a yearning for the happiness felt in a former place, time, or situation." +
            "<br><br>" +
            "(A) 'modernity' means the quality or condition of being modern." +
            "<br><br>" +
            "(B) 'progress' means forward or onward movement toward a destination." +
            "<br><br>" +
            "(C) 'innovation' means the action or process of innovating.",
        chinese_explanation: "(D) '怀旧' 在比喻意义上意味着对曾经的地方、时间或情况的幸福感的渴望。" +
            "<br><br>" +
            "(A) '现代性' 意味着现代的质量或状态。" +
            "<br><br>" +
            "(B) '进步' 意味着朝目的地前进或向前推进。" +
            "<br><br>" +
            "(C) '创新' 意味着创新的行为或过程。"
    },
    {
        id: 2,
        question: "Their business __________ allowed them to work seamlessly together and achieve mutual success.",
        chinese_question: "他们的商业 __________ 使他们能够无缝合作并取得共同成功。",
        answers: [
            { option: "A", answer: "conflict", chinese_answer: "冲突", chinese_romanization: "chōngtū" },
            { option: "B", answer: "arrangement", chinese_answer: "安排", chinese_romanization: "ānpái" },
            { option: "C", answer: "rivalry", chinese_answer: "竞争", chinese_romanization: "jìngzhēng" },
            { option: "D", answer: "separation", chinese_answer: "分离", chinese_romanization: "fēnlí" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'arrangement' figuratively means an agreement or plan between parties." +
            "<br><br>" +
            "(A) 'conflict' means a serious disagreement or argument." +
            "<br><br>" +
            "(C) 'rivalry' means competition for the same objective or for superiority in the same field." +
            "<br><br>" +
            "(D) 'separation' means the action or state of moving or being moved apart.",
        chinese_explanation: "(B) '安排' 在比喻意义上意味着各方之间的协议或计划。" +
            "<br><br>" +
            "(A) '冲突' 意味着严重的分歧或争论。" +
            "<br><br>" +
            "(C) '竞争' 意味着为相同目标或在相同领域中的优越地位而奋斗的竞争。" +
            "<br><br>" +
            "(D) '分离' 意味着移动或被移动的动作或状态。"
    },
    {
        id: 3,
        question: "He remained a __________ well into his forties, enjoying the freedom and independence of single life.",
        chinese_question: "他一直单身到四十多岁，享受单身生活的自由和独立。",
        answers: [
            { option: "A", answer: "husband", chinese_answer: "丈夫", chinese_romanization: "zhàngfū" },
            { option: "B", answer: "father", chinese_answer: "父亲", chinese_romanization: "fùqīn" },
            { option: "C", answer: "bachelor", chinese_answer: "单身汉", chinese_romanization: "dānshēnhàn" },
            { option: "D", answer: "spouse", chinese_answer: "配偶", chinese_romanization: "pèi'ǒu" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'bachelor' figuratively means an unmarried man." +
            "<br><br>" +
            "(A) 'husband' means a married man considered in relation to his spouse." +
            "<br><br>" +
            "(B) 'father' means a man in relation to his child or children." +
            "<br><br>" +
            "(D) 'spouse' means a husband or wife, considered in relation to their partner.",
        chinese_explanation: "(C) '单身汉' 在比喻意义上意味着未婚男子。" +
            "<br><br>" +
            "(A) '丈夫' 意味着与配偶相关的已婚男子。" +
            "<br><br>" +
            "(B) '父亲' 意味着与他的孩子相关的男人。" +
            "<br><br>" +
            "(D) '配偶' 意味着丈夫或妻子，与其伴侣相关。"
    },
    {
        id: 4,
        question: "Her extensive knowledge of the market was a valuable __________ to the company.",
        chinese_question: "她对市场的广泛了解是公司的一项宝贵 __________。",
        answers: [
            { option: "A", answer: "liability", chinese_answer: "负债", chinese_romanization: "fùzhài" },
            { option: "B", answer: "asset", chinese_answer: "资产", chinese_romanization: "zīchǎn" },
            { option: "C", answer: "burden", chinese_answer: "负担", chinese_romanization: "fùdān" },
            { option: "D", answer: "debt", chinese_answer: "债务", chinese_romanization: "zhàiwù" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'asset' means a useful or valuable thing, person, or quality." +
            "<br><br>" +
            "(A) 'liability' means the state of being responsible for something, especially by law." +
            "<br><br>" +
            "(C) 'burden' means a load, typically a heavy one." +
            "<br><br>" +
            "(D) 'debt' means something, typically money, that is owed or due.",
        chinese_explanation: "(B) '资产' 一词意味着有用或有价值的事物、人员或品质。" +
            "<br><br>" +
            "(A) '负债' 意味着对某事负有责任的状态，尤其是法律责任。" +
            "<br><br>" +
            "(C) '负担' 意味着负担，通常是沉重的负担。" +
            "<br><br>" +
            "(D) '债务' 意味着欠或应付的东西，通常是金钱。"
    },
    {
        id: 5,
        question: "The new evidence provided complete __________ for the wrongly accused man, proving his innocence.",
        chinese_question: "新证据为被错控的男子提供了完全的 __________，证明了他的清白。",
        answers: [
            { option: "A", answer: "condemnation", chinese_answer: "谴责", chinese_romanization: "qiǎnzé" },
            { option: "B", answer: "accusation", chinese_answer: "指控", chinese_romanization: "zhǐkòng" },
            { option: "C", answer: "vindication", chinese_answer: "辩护", chinese_romanization: "biànhù" },
            { option: "D", answer: "criticism", chinese_answer: "批评", chinese_romanization: "pīpíng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'vindication' means the action of clearing someone of blame or suspicion." +
            "<br><br>" +
            "(A) 'condemnation' means the expression of very strong disapproval; censure." +
            "<br><br>" +
            "(B) 'accusation' means a charge or claim that someone has done something illegal or wrong." +
            "<br><br>" +
            "(D) 'criticism' means the expression of disapproval of someone or something based on perceived faults or mistakes.",
        chinese_explanation: "(C) '辩护' 一词意味着清除某人责任或怀疑的行为。" +
            "<br><br>" +
            "(A) '谴责' 意味着非常强烈的不赞成表达；责难。" +
            "<br><br>" +
            "(B) '指控' 意味着指控或声称某人做了非法或错误的事情。" +
            "<br><br>" +
            "(D) '批评' 意味着根据感知的错误或错误表达不赞成。"
    },
    {
        id: 6,
        question: "The Pope issued an __________ urging all Catholics to engage in acts of charity and kindness.",
        chinese_question: "教皇发布了一封 __________，敦促所有天主教徒从事慈善和善行。",
        answers: [
            { option: "A", answer: "novel", chinese_answer: "小说", chinese_romanization: "xiǎoshuō" },
            { option: "B", answer: "edict", chinese_answer: "法令", chinese_romanization: "fǎlìng" },
            { option: "C", answer: "encyclical", chinese_answer: "通谕", chinese_romanization: "tōngyù" },
            { option: "D", answer: "ordinance", chinese_answer: "条例", chinese_romanization: "tiáolì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'encyclical' means a papal letter sent to all bishops of the Roman Catholic Church." +
            "<br><br>" +
            "(A) 'novel' means a fictitious prose narrative of book length, typically representing character and action with some degree of realism." +
            "<br><br>" +
            "(B) 'edict' means an official order or proclamation issued by a person in authority." +
            "<br><br>" +
            "(D) 'ordinance' means a piece of legislation enacted by a municipal authority.",
        chinese_explanation: "(C) '通谕' 一词意味着教皇发送给所有罗马天主教会主教的信。" +
            "<br><br>" +
            "(A) '小说' 意味着一种书籍长度的虚构散文叙事，通常以某种程度的现实主义来描绘人物和行动。" +
            "<br><br>" +
            "(B) '法令' 意味着由权威人士发布的正式命令或公告。" +
            "<br><br>" +
            "(D) '条例' 意味着由市政当局颁布的立法。"
    },
    {
        id: 7,
        question: "The main __________ for the scholarship is academic excellence and a strong commitment to community service.",
        chinese_question: "奖学金的主要 __________ 是学术卓越和对社区服务的强烈承诺。",
        answers: [
            { option: "A", answer: "criterion", chinese_answer: "标准", chinese_romanization: "biāozhǔn" },
            { option: "B", answer: "benefit", chinese_answer: "好处", chinese_romanization: "hǎochù" },
            { option: "C", answer: "reward", chinese_answer: "奖励", chinese_romanization: "jiǎnglì" },
            { option: "D", answer: "reason", chinese_answer: "原因", chinese_romanization: "yuányīn" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'criterion' means a principle or standard by which something may be judged or decided." +
            "<br><br>" +
            "(B) 'benefit' means an advantage or profit gained from something." +
            "<br><br>" +
            "(C) 'reward' means a thing given in recognition of service, effort, or achievement." +
            "<br><br>" +
            "(D) 'reason' means a cause, explanation, or justification for an action or event.",
        chinese_explanation: "(A) '标准' 一词意味着判断或决定某事的原则或标准。" +
            "<br><br>" +
            "(B) '好处' 意味着从某事中获得的优势或利益。" +
            "<br><br>" +
            "(C) '奖励' 意味着因服务、努力或成就而给予的东西。" +
            "<br><br>" +
            "(D) '原因' 意味着行动或事件的原因、解释或理由。"
    },
    {
        id: 8,
        question: "The artist's work has inspired a new __________ of painters who seek to emulate his style.",
        chinese_question: "这位艺术家的作品激励了一代新的画家，他们试图模仿他的风格。",
        answers: [
            { option: "A", answer: "rejection", chinese_answer: "拒绝", chinese_romanization: "jùjué" },
            { option: "B", answer: "decline", chinese_answer: "衰退", chinese_romanization: "shuāituì" },
            { option: "C", answer: "generation", chinese_answer: "一代", chinese_romanization: "yīdài" },
            { option: "D", answer: "trend", chinese_answer: "趋势", chinese_romanization: "qūshì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'generation' figuratively means a group of individuals, most of whom are the same approximate age, having similar ideas, problems, attitudes, etc." +
            "<br><br>" +
            "(A) 'rejection' means the dismissing or refusing of a proposal, idea, etc." +
            "<br><br>" +
            "(B) 'decline' means a gradual and continuous loss of strength, numbers, quality, or value." +
            "<br><br>" +
            "(D) 'trend' means a general direction in which something is developing or changing.",
        chinese_explanation: "(C) '一代' 在比喻意义上意味着大多数年龄相近、具有相似想法、问题、态度等的个体群体。" +
            "<br><br>" +
            "(A) '拒绝' 意味着对提议、想法等的驳回或拒绝。" +
            "<br><br>" +
            "(B) '衰退' 意味着力量、数量、质量或价值的逐渐和持续的损失。" +
            "<br><br>" +
            "(D) '趋势' 意味着某事物发展的总方向。"
    },
    {
        id: 9,
        question: "His descent into criminal __________ left him estranged from his family and friends.",
        chinese_question: "他堕入犯罪 __________ 使他与家人和朋友疏远。",
        answers: [
                { option: "A", answer: "turpitude", chinese_answer: "堕落", chinese_romanization: "duòluò" },
                { option: "B", answer: "nobility", chinese_answer: "高贵", chinese_romanization: "gāoguì" },
                { option: "C", answer: "piety", chinese_answer: "虔诚", chinese_romanization: "qiánchéng" },
                { option: "D", answer: "decency", chinese_answer: "得体", chinese_romanization: "détǐ" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'turpitude' means moral corruption or wickedness." +
            "<br><br>" +
            "(B) 'nobility' refers to the quality of being noble in character." +
            "<br><br>" +
            "(C) 'piety' means the quality of being religious or reverent." +
            "<br><br>" +
            "(D) 'decency' refers to behavior that conforms to accepted standards of morality or respectability.",
        chinese_explanation: "(A) '堕落' 指的是道德败坏或邪恶。" +
            "<br><br>" +
            "(B) '高贵' 指的是在品格上高贵的品质。" +
            "<br><br>" +
            "(C) '虔诚' 指的是宗教或敬仰的品质。" +
            "<br><br>" +
            "(D) '得体' 指的是符合道德或体面标准的行为。"
    },
    {
        id: 10,
        question: "Her __________ extended beyond her home, as she always made everyone around her feel welcome and valued.",
        chinese_question: "她的 __________ 超越了她的家，因为她总是让周围的人感到受欢迎和被重视。",
        answers: [
            { option: "A", answer: "selfishness", chinese_answer: "自私", chinese_romanization: "zìsī" },
            { option: "B", answer: "indifference", chinese_answer: "冷漠", chinese_romanization: "lěngmò" },
            { option: "C", answer: "coldness", chinese_answer: "冷淡", chinese_romanization: "lěngdàn" },
            { option: "D", answer: "hospitality", chinese_answer: "热情", chinese_romanization: "rèqíng" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'hospitality' figuratively means a welcoming and friendly attitude or behavior." +
            "<br><br>" +
            "(A) 'selfishness' means the quality or condition of being selfish." +
            "<br><br>" +
            "(B) 'indifference' means lack of interest, concern, or sympathy." +
            "<br><br>" +
            "(C) 'coldness' means the quality or state of being cold in manner.",
        chinese_explanation: "(D) '热情' 在比喻意义上意味着一种欢迎和友好的态度或行为。" +
            "<br><br>" +
            "(A) '自私' 意味着自私的质量或状态。" +
            "<br><br>" +
            "(B) '冷漠' 意味着缺乏兴趣、关心或同情。" +
            "<br><br>" +
            "(C) '冷淡' 意味着冷淡的质量或状态。"
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
