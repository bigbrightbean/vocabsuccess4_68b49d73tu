// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The __________ student refused to follow the school rules, challenging the authority of the teachers.",
        chinese_question: "这位 __________ 的学生拒绝遵守校规，挑战老师的权威。",
        answers: [
            { option: "A", answer: "obedient", chinese_answer: "顺从", chinese_romanization: "shùncóng" },
            { option: "B", answer: "compliant", chinese_answer: "服从", chinese_romanization: "fúcóng" },
            { option: "C", answer: "contumacious", chinese_answer: "违抗", chinese_romanization: "wéikàng" },
            { option: "D", answer: "respectful", chinese_answer: "尊敬", chinese_romanization: "zūnjìng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'contumacious' means stubbornly or willfully disobedient to authority." +
            "<br><br>" +
            "(A) 'obedient' means complying or willing to comply with an order or request; submissive to another's authority." +
            "<br><br>" +
            "(B) 'compliant' means inclined to agree with others or obey rules, especially to an excessive degree; acquiescent." +
            "<br><br>" +
            "(D) 'respectful' means feeling or showing deference and respect.",
        chinese_explanation: "(C) '违抗' 一词意味着固执或故意不服从权威。" +
            "<br><br>" +
            "(A) '顺从' 意味着遵守或愿意遵守命令或请求；服从他人的权威。" +
            "<br><br>" +
            "(B) '服从' 意味着倾向于同意他人或遵守规则，尤其是过度的；默许。" +
            "<br><br>" +
            "(D) '尊敬' 意味着感到或表现出尊重和尊敬。"
    },
    {
        id: 2,
        question: "The politician's __________ speech was filled with grandiose and pompous language, designed to impress rather than inform.",
        chinese_question: "这位政客的 __________ 演讲充满了夸张和浮夸的语言，旨在给人留下深刻印象而不是提供信息。",
        answers: [
            { option: "A", answer: "simple", chinese_answer: "简单的", chinese_romanization: "jiǎndān de" },
            { option: "B", answer: "magniloquent", chinese_answer: "夸张的", chinese_romanization: "kuāzhāng de" },
            { option: "C", answer: "plain", chinese_answer: "朴素的", chinese_romanization: "pǔsù de" },
            { option: "D", answer: "unadorned", chinese_answer: "未加修饰的", chinese_romanization: "wèi jiā xiūshì de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'magniloquent' means using high-flown or bombastic language." +
            "<br><br>" +
            "(A) 'simple' means easily understood or done; presenting no difficulty." +
            "<br><br>" +
            "(C) 'plain' means not decorated or elaborate; simple or ordinary in character." +
            "<br><br>" +
            "(D) 'unadorned' means not adorned; plain.",
        chinese_explanation: "(B) '夸张的' 一词意味着使用高调或浮夸的语言。" +
            "<br><br>" +
            "(A) '简单的' 意味着容易理解或完成的；没有难度。" +
            "<br><br>" +
            "(C) '朴素的' 意味着没有装饰或精心设计的；简单或普通的性格。" +
            "<br><br>" +
            "(D) '未加修饰的' 意味着没有装饰的；朴素的。"
    },
    {
        id: 3,
        question: "The author's notes were __________, filling several notebooks with detailed observations and ideas.",
        chinese_question: "作者的笔记非常 __________，几本笔记本都写满了详细的观察和想法。",
        answers: [
            { option: "A", answer: "scant", chinese_answer: "稀少的", chinese_romanization: "xīshǎo de" },
            { option: "B", answer: "copious", chinese_answer: "丰富的", chinese_romanization: "fēngfù de" },
            { option: "C", answer: "sparse", chinese_answer: "稀疏的", chinese_romanization: "xīshū de" },
            { option: "D", answer: "limited", chinese_answer: "有限的", chinese_romanization: "yǒuxiàn de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'copious' means abundant in supply or quantity." +
            "<br><br>" +
            "(A) 'scant' means barely sufficient or adequate." +
            "<br><br>" +
            "(C) 'sparse' means thinly dispersed or scattered." +
            "<br><br>" +
            "(D) 'limited' means restricted in size, amount, or extent; few, small, or short.",
        chinese_explanation: "(B) '丰富的' 一词意味着供应或数量丰富的。" +
            "<br><br>" +
            "(A) '稀少的' 意味着几乎不足或足够的。" +
            "<br><br>" +
            "(C) '稀疏的' 意味着稀疏分布或分散的。" +
            "<br><br>" +
            "(D) '有限的' 意味着在大小、数量或范围上受到限制的；很少、小或短的。"
    },
    {
        id: 4,
        question: "Even in the face of danger, the soldier remained __________, calmly assessing the situation and planning the next move.",
        chinese_question: "即使在危险面前，这名士兵仍然 __________，冷静地评估情况并计划下一步行动。",
        answers: [
            { option: "A", answer: "agitated", chinese_answer: "激动的", chinese_romanization: "jīdòng de" },
            { option: "B", answer: "nervous", chinese_answer: "紧张的", chinese_romanization: "jǐnzhāng de" },
            { option: "C", answer: "anxious", chinese_answer: "焦虑的", chinese_romanization: "jiāolǜ de" },
            { option: "D", answer: "imperturbable", chinese_answer: "冷静的", chinese_romanization: "lěngjìng de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'imperturbable' means unable to be upset or excited; calm." +
            "<br><br>" +
            "(A) 'agitated' means feeling or appearing troubled or nervous." +
            "<br><br>" +
            "(B) 'nervous' means easily agitated or alarmed." +
            "<br><br>" +
            "(C) 'anxious' means experiencing worry, unease, or nervousness.",
        chinese_explanation: "(D) '冷静的' 一词意味着无法被打扰或兴奋；冷静的。" +
            "<br><br>" +
            "(A) '激动的' 意味着感到或显得不安或紧张。" +
            "<br><br>" +
            "(B) '紧张的' 意味着容易激动或惊慌的。" +
            "<br><br>" +
            "(C) '焦虑的' 意味着经历担忧、不安或紧张。"
    },
    {
        id: 5,
        question: "The __________ group of students was difficult to manage, constantly causing disruptions in the classroom.",
        chinese_question: "这群 __________ 的学生很难管理，不断在课堂上制造混乱。",
        answers: [
            { option: "A", answer: "obedient", chinese_answer: "顺从的", chinese_romanization: "shùncóng de" },
            { option: "B", answer: "fractious", chinese_answer: "暴躁的", chinese_romanization: "bàozào de" },
            { option: "C", answer: "well-behaved", chinese_answer: "举止良好的", chinese_romanization: "jǔzhǐ liánghǎo de" },
            { option: "D", answer: "disciplined", chinese_answer: "有纪律的", chinese_romanization: "yǒu jìlǜ de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'fractious' means irritable and quarrelsome." +
            "<br><br>" +
            "(A) 'obedient' means complying or willing to comply with orders or requests; submissive to another's will." +
            "<br><br>" +
            "(C) 'well-behaved' means conducting oneself in a way that is socially acceptable." +
            "<br><br>" +
            "(D) 'disciplined' means showing a controlled form of behavior or way of working.",
        chinese_explanation: "(B) '暴躁的' 一词意味着易怒和吵闹的。" +
            "<br><br>" +
            "(A) '顺从的' 意味着服从或愿意服从命令或要求的；服从他人意愿的。" +
            "<br><br>" +
            "(C) '举止良好的' 意味着行为举止在社会上可以接受的。" +
            "<br><br>" +
            "(D) '有纪律的' 意味着表现出一种受控制的行为或工作方式。"
    },
    {
        id: 6,
        question: "The criminal's __________ actions shocked the community, leading to widespread outrage and calls for justice.",
        chinese_question: "罪犯的 __________ 行为震惊了社区，引发了广泛的愤怒和对正义的呼吁。",
        answers: [
            { option: "A", answer: "petty", chinese_answer: "轻微的", chinese_romanization: "qīngwéi de" },
            { option: "B", answer: "heinous", chinese_answer: "恶毒的", chinese_romanization: "èdú de" },
            { option: "C", answer: "minor", chinese_answer: "次要的", chinese_romanization: "cìyào de" },
            { option: "D", answer: "trivial", chinese_answer: "琐碎的", chinese_romanization: "suǒsuì de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'heinous' means (of a person or wrongful act, especially a crime) utterly odious or wicked." +
            "<br><br>" +
            "(A) 'petty' means of little importance; trivial." +
            "<br><br>" +
            "(C) 'minor' means lesser in importance, seriousness, or significance." +
            "<br><br>" +
            "(D) 'trivial' means of little value or importance.",
        chinese_explanation: "(B) '恶毒的' 一词意味着（人或错误行为，尤其是犯罪）极其恶劣或邪恶的。" +
            "<br><br>" +
            "(A) '轻微的' 意味着不重要的；琐碎的。" +
            "<br><br>" +
            "(C) '次要的' 意味着在重要性、严重性或意义上较小的。" +
            "<br><br>" +
            "(D) '琐碎的' 意味着价值或重要性很小的。"
    },
    {
        id: 7,
        question: "The once __________ desert was transformed into a blooming oasis after years of dedicated irrigation efforts.",
        chinese_question: "曾经 __________ 的沙漠在多年努力灌溉后变成了一片繁茂的绿洲。",
        answers: [
            { option: "A", answer: "fertile", chinese_answer: "肥沃的", chinese_romanization: "féiwò de" },
            { option: "B", answer: "lush", chinese_answer: "茂盛的", chinese_romanization: "màoshèng de" },
            { option: "C", answer: "barren", chinese_answer: "贫瘠的", chinese_romanization: "pínjí de" },
            { option: "D", answer: "abundant", chinese_answer: "丰富的", chinese_romanization: "fēngfù de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'barren' means too poor to produce much or any vegetation." +
            "<br><br>" +
            "(A) 'fertile' means (of soil or land) producing or capable of producing abundant vegetation or crops." +
            "<br><br>" +
            "(B) 'lush' means (of vegetation) growing luxuriantly." +
            "<br><br>" +
            "(D) 'abundant' means existing or available in large quantities.",
        chinese_explanation: "(C) '贫瘠的' 一词意味着贫瘠到无法生产太多或任何植被。" +
            "<br><br>" +
            "(A) '肥沃的' 意味着（土壤或土地）能够生产大量植被或作物的。" +
            "<br><br>" +
            "(B) '茂盛的' 意味着（植被）茂密地生长。" +
            "<br><br>" +
            "(D) '丰富的' 意味着存在或可获得的大量。"
    },
    {
        id: 8,
        question: "The idea of cheating on the exam was __________ to him, as he valued honesty above all else.",
        chinese_question: "考试作弊的想法对他来说是 __________ 的，因为他重视诚信高于一切。",
        answers: [
            { option: "A", answer: "appealing", chinese_answer: "吸引人的", chinese_romanization: "xīyǐn rén de" },
            { option: "B", answer: "repugnant", chinese_answer: "令人厌恶的", chinese_romanization: "lìng rén yànwù de" },
            { option: "C", answer: "acceptable", chinese_answer: "可接受的", chinese_romanization: "kě jiēshòu de" },
            { option: "D", answer: "pleasant", chinese_answer: "愉快的", chinese_romanization: "yúkuài de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'repugnant' means extremely distasteful; unacceptable." +
            "<br><br>" +
            "(A) 'appealing' means attractive or interesting." +
            "<br><br>" +
            "(C) 'acceptable' means able to be agreed on; suitable." +
            "<br><br>" +
            "(D) 'pleasant' means giving a sense of happy satisfaction or enjoyment.",
        chinese_explanation: "(B) '令人厌恶的' 一词意味着极其令人反感的；不可接受的。" +
            "<br><br>" +
            "(A) '吸引人的' 意味着有吸引力或有趣的。" +
            "<br><br>" +
            "(C) '可接受的' 意味着能够同意的；合适的。" +
            "<br><br>" +
            "(D) '愉快的' 意味着给予愉快的满足或享受的感觉。"
    },
    {
        id: 9,
        question: "The negotiator found it challenging to persuade the __________ leader to compromise on any of the demands.",
        chinese_question: "谈判代表发现说服这位 __________ 的领导人在任何要求上妥协都很困难。",
        answers: [
            { option: "A", answer: "flexible", chinese_answer: "灵活的", chinese_romanization: "línghuó de" },
            { option: "B", answer: "lenient", chinese_answer: "宽容的", chinese_romanization: "kuānróng de" },
            { option: "C", answer: "obdurate", chinese_answer: "固执的", chinese_romanization: "gùzhí de" },
            { option: "D", answer: "compliant", chinese_answer: "顺从的", chinese_romanization: "shùncóng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'obdurate' means stubbornly refusing to change one's opinion or course of action." +
            "<br><br>" +
            "(A) 'flexible' means capable of bending easily without breaking." +
            "<br><br>" +
            "(B) 'lenient' means more merciful or tolerant than expected." +
            "<br><br>" +
            "(D) 'compliant' means inclined to agree with others or obey rules, especially to an excessive degree; acquiescent.",
        chinese_explanation: "(C) '固执的' 一词意味着顽固地拒绝改变自己的意见或行动路线。" +
            "<br><br>" +
            "(A) '灵活的' 意味着能够轻松弯曲而不断裂的。" +
            "<br><br>" +
            "(B) '宽容的' 意味着比预期的更仁慈或宽容的。" +
            "<br><br>" +
            "(D) '顺从的' 意味着倾向于同意他人或遵守规则，尤其是过度程度的；默许的。"
    },
    {
        id: 10,
        question: "The __________ politician argued for preserving traditional values and slowing the pace of social change.",
        chinese_question: "这位 __________ 政治家主张维护传统价值观并放缓社会变革的步伐。",
        answers: [
            { option: "A", answer: "liberal", chinese_answer: "自由的", chinese_romanization: "zìyóu de" },
            { option: "B", answer: "radical", chinese_answer: "激进的", chinese_romanization: "jījìn de" },
            { option: "C", answer: "conservative", chinese_answer: "保守的", chinese_romanization: "bǎoshǒu de" },
            { option: "D", answer: "progressive", chinese_answer: "进步的", chinese_romanization: "jìnbù de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'conservative' means holding to traditional attitudes and values and cautious about change or innovation, typically in relation to politics or religion." +
            "<br><br>" +
            "(A) 'liberal' means open to new behavior or opinions and willing to discard traditional values." +
            "<br><br>" +
            "(B) 'radical' means relating to or affecting the fundamental nature of something; far-reaching or thorough." +
            "<br><br>" +
            "(D) 'progressive' means happening or developing gradually or in stages; proceeding step by step.",
        chinese_explanation: "(C) '保守的' 一词意味着坚持传统态度和价值观，并对变革或创新持谨慎态度，通常与政治或宗教有关。" +
            "<br><br>" +
            "(A) '自由的' 意味着对新行为或意见开放，愿意抛弃传统价值观。" +
            "<br><br>" +
            "(B) '激进的' 意味着涉及或影响某事物的根本性质；深远或彻底。" +
            "<br><br>" +
            "(D) '进步的' 意味着逐渐或分阶段发生或发展的；逐步进行的。"
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
