// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The magician's __________ tricks kept the audience captivated throughout the entire performance.",
        chinese_question: "魔术师的 __________ 把戏让观众在整个表演过程中都被迷住了。",
        answers: [
            { option: "A", answer: "boring", chinese_answer: "无聊的", chinese_romanization: "wúliáo de" },
            { option: "B", answer: "straightforward", chinese_answer: "直截了当的", chinese_romanization: "zhíjiélé dāng de" },
            { option: "C", answer: "beguiling", chinese_answer: "迷人的", chinese_romanization: "mírén de" },
            { option: "D", answer: "honest", chinese_answer: "诚实的", chinese_romanization: "chéngshí de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'beguiling' means charming or enchanting, often in a deceptive way." +
            "<br><br>" +
            "(A) 'boring' means not interesting; tedious." +
            "<br><br>" +
            "(B) 'straightforward' means uncomplicated and easy to do or understand." +
            "<br><br>" +
            "(D) 'honest' means free of deceit and untruthfulness; sincere.",
        chinese_explanation: "(C) '迷人的' 一词意味着迷人的或吸引人的，通常是以一种欺骗的方式。" +
            "<br><br>" +
            "(A) '无聊的' 意味着没有趣的；单调乏味的。" +
            "<br><br>" +
            "(B) '直截了当的' 意味着不复杂的，易于做或理解的。" +
            "<br><br>" +
            "(D) '诚实的' 意味着没有欺骗和虚伪的；真诚的。"
    },
    {
        id: 2,
        question: "The plot of the novel was so __________ that it kept readers guessing until the very end.",
        chinese_question: "小说的情节如此__________，让读者猜到了最后。",
        answers: [
            { option: "A", answer: "simple", chinese_answer: "简单的", chinese_romanization: "jiǎndān de" },
            { option: "B", answer: "intricate", chinese_answer: "复杂的", chinese_romanization: "fùzá de" },
            { option: "C", answer: "plain", chinese_answer: "普通的", chinese_romanization: "pǔtōng de" },
            { option: "D", answer: "obvious", chinese_answer: "明显的", chinese_romanization: "míngxiǎn de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'intricate' means very complicated or detailed. Figuratively, it can mean complex and involving many different elements or parts." +
            "<br><br>" +
            "(A) 'simple' means easily understood or done; presenting no difficulty." +
            "<br><br>" +
            "(C) 'plain' means not decorated or elaborate; simple or ordinary in character." +
            "<br><br>" +
            "(D) 'obvious' means easily perceived or understood; clear, self-evident, or apparent.",
        chinese_explanation: "(B) '复杂的'一词意味着非常复杂或详细的。比喻地，它可以表示复杂的，涉及许多不同的元素或部分。" +
            "<br><br>" +
            "(A) '简单的' 意味着容易理解或完成；没有难度的。" +
            "<br><br>" +
            "(C) '普通的' 意味着不装饰或精致的；简单或普通的性格。" +
            "<br><br>" +
            "(D) '明显的' 意味着容易察觉或理解；清晰、自我显现或明显的。"
    },
    {
        id: 3,
        question: "The __________ old building was falling apart, with broken windows and a leaking roof.",
        chinese_question: "那座 __________ 的旧楼正在崩塌，窗户破了，屋顶也漏水。",
        answers: [
            { option: "A", answer: "new", chinese_answer: "新的", chinese_romanization: "xīn de" },
            { option: "B", answer: "modern", chinese_answer: "现代的", chinese_romanization: "xiàndài de" },
            { option: "C", answer: "renovated", chinese_answer: "翻新的", chinese_romanization: "fānxīn de" },
            { option: "D", answer: "decrepit", chinese_answer: "破旧的", chinese_romanization: "pòjiù de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'decrepit' means old and in poor condition." +
            "<br><br>" +
            "(A) 'new' means recently made or created." +
            "<br><br>" +
            "(B) 'modern' means relating to the present or recent times." +
            "<br><br>" +
            "(C) 'renovated' means restored to a good condition.",
        chinese_explanation: "(D) '破旧的' 意思是老的且状况不佳。" +
            "<br><br>" +
            "(A) '新的' 意思是最近制造或创造的。" +
            "<br><br>" +
            "(B) '现代的' 意思是与现在或最近时期相关的。" +
            "<br><br>" +
            "(C) '翻新的' 意思是恢复到良好的状态。"
    },
    {
        id: 4,
        question: "His facial features and expressions gave him a __________ appearance, often leading others to compare him to a monkey.",
        chinese_question: "他的面部特征和表情使他具有 __________ 的外貌，常常让别人把他比作猴子。",
        answers: [
            { option: "A", answer: "feline", chinese_answer: "猫科的", chinese_romanization: "māo kē de" },
            { option: "B", answer: "simian", chinese_answer: "猴子的", chinese_romanization: "hóuzi de" },
            { option: "C", answer: "avian", chinese_answer: "鸟类的", chinese_romanization: "niǎo lèi de" },
            { option: "D", answer: "canine", chinese_answer: "狗的", chinese_romanization: "gǒu de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'simian' means relating to, resembling, or affecting apes or monkeys." +
            "<br><br>" +
            "(A) 'feline' means relating to or affecting cats or other members of the cat family." +
            "<br><br>" +
            "(C) 'avian' means relating to birds." +
            "<br><br>" +
            "(D) 'canine' means relating to or resembling a dog or dogs.",
        chinese_explanation: "(B) '猴子的' 一词意味着与猿或猴子有关、类似或影响猿或猴子的。" +
            "<br><br>" +
            "(A) '猫科的' 意味着与猫或猫科动物有关的。" +
            "<br><br>" +
            "(C) '鸟类的' 意味着与鸟类有关的。" +
            "<br><br>" +
            "(D) '狗的' 意味着与狗或狗类似的。"
    },
    {
        id: 5,
        question: "The beauty of the sunset was __________, lasting only a few moments before the sky darkened.",
        chinese_question: "日落的美丽是 __________ 的，只持续了几分钟，天空就暗了下来。",
        answers: [
            { option: "A", answer: "eternal", chinese_answer: "永恒", chinese_romanization: "yǒnghéng" },
            { option: "B", answer: "permanent", chinese_answer: "永久", chinese_romanization: "yǒngjiǔ" },
            { option: "C", answer: "everlasting", chinese_answer: "永久", chinese_romanization: "yǒngjiǔ" },
            { option: "D", answer: "fleeting", chinese_answer: "短暂", chinese_romanization: "duǎnzàn" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'fleeting' means lasting for a very short time." +
            "<br><br>" +
            "(A) 'eternal' means lasting or existing forever; without end." +
            "<br><br>" +
            "(B) 'permanent' means lasting or intended to last or remain unchanged indefinitely." +
            "<br><br>" +
            "(C) 'everlasting' means lasting forever or for a very long time.",
        chinese_explanation: "(D) '短暂' 一词意味着持续时间非常短。" +
            "<br><br>" +
            "(A) '永恒' 意味着持续或永远存在；没有终结。" +
            "<br><br>" +
            "(B) '永久' 意味着持续或意图无限期地持续或保持不变。" +
            "<br><br>" +
            "(C) '永久' 意味着持续或意图无限期地持续或保持不变。"
    },
    {
        id: 6,
        question: "Despite his best efforts, the __________ juggler dropped the balls repeatedly during his performance.",
        chinese_question: "尽管尽了最大努力，这位 __________ 的杂技演员在表演时反复掉球。",
        answers: [
            { option: "A", answer: "skillful", chinese_answer: "技巧", chinese_romanization: "jìqiǎo" },
            { option: "B", answer: "maladroit", chinese_answer: "笨拙", chinese_romanization: "bènzhuō" },
            { option: "C", answer: "dexterous", chinese_answer: "灵巧", chinese_romanization: "língqiǎo" },
            { option: "D", answer: "adept", chinese_answer: "熟练", chinese_romanization: "shúliàn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'maladroit' means ineffective or bungling; clumsy." +
            "<br><br>" +
            "(A) 'skillful' means having or showing skill." +
            "<br><br>" +
            "(C) 'dexterous' means demonstrating neat skill, especially with the hands." +
            "<br><br>" +
            "(D) 'adept' means very skilled or proficient at something.",
        chinese_explanation: "(B) '笨拙' 一词意味着无效或笨拙；笨手笨脚。" +
            "<br><br>" +
            "(A) '技巧' 意味着有或表现出技巧。" +
            "<br><br>" +
            "(C) '灵巧' 意味着表现出整洁的技巧，特别是用手。" +
            "<br><br>" +
            "(D) '熟练' 意味着在某事上非常熟练或精通。"
    },
    {
        id: 7,
        question: "Her __________ was evident as she strolled through the park without a care in the world, completely at ease.",
        chinese_question: "她的 __________ 显而易见，因为她在公园里漫步，毫无忧虑，完全放松。",
        answers: [
            { option: "A", answer: "anxiety", chinese_answer: "焦虑", chinese_romanization: "jiāolǜ" },
            { option: "B", answer: "worry", chinese_answer: "担心", chinese_romanization: "dānxīn" },
            { option: "C", answer: "insouciance", chinese_answer: "无忧无虑", chinese_romanization: "wú yōu wú lǜ" },
            { option: "D", answer: "concern", chinese_answer: "关心", chinese_romanization: "guānxīn" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'insouciance' means casual lack of concern; indifference." +
            "<br><br>" +
            "(A) 'anxiety' means a feeling of worry, nervousness, or unease." +
            "<br><br>" +
            "(B) 'worry' means to give way to anxiety or unease." +
            "<br><br>" +
            "(D) 'concern' means a matter of interest or importance to someone.",
        chinese_explanation: "(C) '无忧无虑' 一词意味着随意地缺乏关心；漠不关心。" +
            "<br><br>" +
            "(A) '焦虑' 意味着担忧、紧张或不安的感觉。" +
            "<br><br>" +
            "(B) '担心' 意味着让位于焦虑或不安。" +
            "<br><br>" +
            "(D) '关心' 意味着对某事感兴趣或重要。"
    },
    {
        id: 8,
        question: "The history book presented events in __________ order, allowing readers to follow the timeline of significant occurrences easily.",
        chinese_question: "历史书以 __________ 顺序呈现事件，使读者能够轻松地跟随重要事件的时间线。",
        answers: [
            { option: "A", answer: "random", chinese_answer: "随意的", chinese_romanization: "suíyì de" },
            { option: "B", answer: "chronological", chinese_answer: "按时间顺序的", chinese_romanization: "àn shíjiān shùnxù de" },
            { option: "C", answer: "reversed", chinese_answer: "反转的", chinese_romanization: "fǎnzhuǎn de" },
            { option: "D", answer: "disorganized", chinese_answer: "杂乱的", chinese_romanization: "záluàn de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'chronological' means (of a record of events) starting with the earliest and following the order in which they occurred." +
            "<br><br>" +
            "(A) 'random' means made, done, happening, or chosen without method or conscious decision." +
            "<br><br>" +
            "(C) 'reversed' means turned the other way around or upside down." +
            "<br><br>" +
            "(D) 'disorganized' means not properly planned and controlled.",
        chinese_explanation: "(B) '按时间顺序的' 一词意味着（事件记录）从最早开始并按发生的顺序排列的。" +
            "<br><br>" +
            "(A) '随意的' 意味着没有方法或有意识决定地做、发生或选择的。" +
            "<br><br>" +
            "(C) '反转的' 意味着翻转或倒置的。" +
            "<br><br>" +
            "(D) '杂乱的' 意味着没有适当计划和控制的。"
    },
    {
        id: 9,
        question: "She was an __________ worker, always the first to arrive and the last to leave the office.",
        chinese_question: "她是个 __________ 的员工，总是第一个到办公室，最后一个离开。",
        answers: [
            { option: "A", answer: "lazy", chinese_answer: "懒惰", chinese_romanization: "lǎnduò" },
            { option: "B", answer: "indifferent", chinese_answer: "冷漠", chinese_romanization: "lěngmò" },
            { option: "C", answer: "industrious", chinese_answer: "勤奋", chinese_romanization: "qínfèn" },
            { option: "D", answer: "negligent", chinese_answer: "疏忽", chinese_romanization: "shūhū" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'industrious' means diligent and hard-working." +
            "<br><br>" +
            "(A) 'lazy' means unwilling to work or use energy." +
            "<br><br>" +
            "(B) 'indifferent' means having no particular interest or sympathy; unconcerned." +
            "<br><br>" +
            "(D) 'negligent' means failing to take proper care in doing something.",
        chinese_explanation: "(C) '勤奋' 一词意味着勤劳和努力工作。" +
            "<br><br>" +
            "(A) '懒惰' 意味着不愿工作或使用能量。" +
            "<br><br>" +
            "(B) '冷漠' 意味着没有特别的兴趣或同情；漠不关心。" +
            "<br><br>" +
            "(D) '疏忽' 意味着未能妥善照顾。"
    },
    {
        id: 10,
        question: "He felt a __________ thrill watching his friend skydive, as if he were experiencing the jump himself.",
        chinese_question: "他看着朋友跳伞时感到一种 __________ 的兴奋，好像自己在经历跳伞一样。",
        answers: [
            { option: "A", answer: "vicarious", chinese_answer: "间接的", chinese_romanization: "jiànjiē de" },
            { option: "B", answer: "primary", chinese_answer: "主要的", chinese_romanization: "zhǔyào de" },
            { option: "C", answer: "direct", chinese_answer: "直接的", chinese_romanization: "zhíjiē de" },
            { option: "D", answer: "personal", chinese_answer: "个人的", chinese_romanization: "gèrén de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'vicarious' means experienced in the imagination through the feelings or actions of another person." +
            "<br><br>" +
            "(B) 'primary' means of chief importance; principal." +
            "<br><br>" +
            "(C) 'direct' means without intervening factors or intermediaries." +
            "<br><br>" +
            "(D) 'personal' means belonging to or affecting a particular person rather than anyone else.",
        chinese_explanation: "(A) '间接的' 意味着通过他人的感受或行为在想象中体验的。" +
            "<br><br>" +
            "(B) '主要的' 意味着首要的；主要的。" +
            "<br><br>" +
            "(C) '直接的' 意味着没有中间因素或中介。" +
            "<br><br>" +
            "(D) '个人的' 意味着属于或影响特定个人而不是任何其他人。"
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
