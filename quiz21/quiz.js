// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "Their plan to meet seemed __________, with no set time or place, leading to confusion.",
        chinese_question: "他们的见面计划显得 __________，没有确定的时间和地点，导致了混乱。",
        answers: [
            { option: "A", answer: "organized", chinese_answer: "有组织的", chinese_romanization: "yǒu zǔzhī de" },
            { option: "B", answer: "haphazard", chinese_answer: "随意的", chinese_romanization: "suíyì de" },
            { option: "C", answer: "methodical", chinese_answer: "有条理的", chinese_romanization: "yǒu tiáolǐ de" },
            { option: "D", answer: "systematic", chinese_answer: "系统的", chinese_romanization: "xìtǒng de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'haphazard' means lacking any obvious principle of organization." +
            "<br><br>" +
            "(A) 'organized' means arranged or structured in a systematic way." +
            "<br><br>" +
            "(C) 'methodical' means done according to a systematic or established form of procedure." +
            "<br><br>" +
            "(D) 'systematic' means done or acting according to a fixed plan or system; methodical.",
        chinese_explanation: "(B) '随意的' 一词意味着缺乏任何明显的组织原则。" +
            "<br><br>" +
            "(A) '有组织的' 意味着以系统的方式安排或结构的。" +
            "<br><br>" +
            "(C) '有条理的' 意味着按照系统的或既定的程序形式完成的。" +
            "<br><br>" +
            "(D) '系统的' 意味着按照固定计划或系统进行的；有条理的。"
    },
    {
        id: 2,
        question: "The __________ manager often forgot to approve important documents, causing delays in the project's timeline.",
        chinese_question: "这位 __________ 的经理经常忘记批准重要文件，导致项目进度延迟。",
        answers: [
            { option: "A", answer: "diligent", chinese_answer: "勤奋的", chinese_romanization: "qínfèn de" },
            { option: "B", answer: "negligent", chinese_answer: "疏忽的", chinese_romanization: "shūhū de" },
            { option: "C", answer: "meticulous", chinese_answer: "一丝不苟的", chinese_romanization: "yīsī bùgǒu de" },
            { option: "D", answer: "attentive", chinese_answer: "注意的", chinese_romanization: "zhùyì de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'negligent' means failing to take proper care in doing something." +
            "<br><br>" +
            "(A) 'diligent' means having or showing care and conscientiousness in one's work or duties." +
            "<br><br>" +
            "(C) 'meticulous' means showing great attention to detail; very careful and precise." +
            "<br><br>" +
            "(D) 'attentive' means paying close attention to something.",
        chinese_explanation: "(B) '疏忽的' 一词意味着在做某事时未能采取适当的照顾。" +
            "<br><br>" +
            "(A) '勤奋的' 意味着在工作或职责上表现出关心和尽责的。" +
            "<br><br>" +
            "(C) '一丝不苟的' 意味着对细节极为关注的；非常小心和精确的。" +
            "<br><br>" +
            "(D) '注意的' 意味着密切关注某事的。"
    },
    {
        id: 3,
        question: "Although the team's effort was __________, their dedication and hard work could still be felt.",
        chinese_question: "尽管团队的努力是 __________ 的，他们的奉献精神和辛勤工作仍然可以感受到。",
        answers: [
            { option: "A", answer: "tangible", chinese_answer: "有形的", chinese_romanization: "yǒuxíng de" },
            { option: "B", answer: "visible", chinese_answer: "可见的", chinese_romanization: "kějiàn de" },
            { option: "C", answer: "intangible", chinese_answer: "无形的", chinese_romanization: "wúxíng de" },
            { option: "D", answer: "evident", chinese_answer: "明显的", chinese_romanization: "míngxiǎn de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'intangible' means unable to be touched or grasped; not having a physical presence." +
            "<br><br>" +
            "(A) 'tangible' means perceptible by touch." +
            "<br><br>" +
            "(B) 'visible' means able to be seen." +
            "<br><br>" +
            "(D) 'evident' means clearly seen or understood; obvious.",
        chinese_explanation: "(C) '无形的' 一词意味着无法触摸或抓住的；没有物理存在的。" +
            "<br><br>" +
            "(A) '有形的' 意味着可以触摸到的。" +
            "<br><br>" +
            "(B) '可见的' 意味着可以看到的。" +
            "<br><br>" +
            "(D) '明显的' 意味着清楚看到或理解的；显然的。"
    },
    {
        id: 4,
        question: "His __________ smile revealed his lack of understanding and genuine interest in the conversation.",
        chinese_question: "他 __________ 的微笑透露出他对谈话缺乏理解和真正的兴趣。",
        answers: [
            { option: "A", answer: "intelligent", chinese_answer: "聪明的", chinese_romanization: "cōngmíng de" },
            { option: "B", answer: "engaging", chinese_answer: "迷人的", chinese_romanization: "mírén de" },
            { option: "C", answer: "meaningful", chinese_answer: "有意义的", chinese_romanization: "yǒu yìyì de" },
            { option: "D", answer: "vacuous", chinese_answer: "空洞的", chinese_romanization: "kōngdòng de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'vacuous' means having or showing a lack of thought or intelligence; mindless." +
            "<br><br>" +
            "(A) 'intelligent' means having or showing intelligence, especially of a high level." +
            "<br><br>" +
            "(B) 'engaging' means charming and attractive." +
            "<br><br>" +
            "(C) 'meaningful' means having meaning; full of meaning or significance.",
        chinese_explanation: "(D) '空洞的' 一词意味着缺乏思想或智力；无意识的。" +
            "<br><br>" +
            "(A) '聪明的' 意味着具有或表现出智力，尤其是高水平的智力。" +
            "<br><br>" +
            "(B) '迷人的' 意味着迷人和有吸引力的。" +
            "<br><br>" +
            "(C) '有意义的' 意味着有意义的；充满意义或意义的。"
    },
    {
        id: 5,
        question: "The __________ glow of the sunrise filled the sky with brilliant colors, signaling the start of a new day.",
        chinese_question: "日出的 __________ 光芒充满了天空，带来了绚丽的色彩，预示着新的一天的开始。",
        answers: [
            { option: "A", answer: "dull", chinese_answer: "暗淡的", chinese_romanization: "àndàn de" },
            { option: "B", answer: "dim", chinese_answer: "昏暗的", chinese_romanization: "hūn'àn de" },
            { option: "C", answer: "refulgent", chinese_answer: "光辉的", chinese_romanization: "guānghuī de" },
            { option: "D", answer: "obscure", chinese_answer: "模糊的", chinese_romanization: "móhú de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'refulgent' means shining brightly." +
            "<br><br>" +
            "(A) 'dull' means lacking brightness, vividness, or sheen." +
            "<br><br>" +
            "(B) 'dim' means (of a light, color, or illuminated object) not shining brightly or clearly." +
            "<br><br>" +
            "(D) 'obscure' means not discovered or known about; uncertain.",
        chinese_explanation: "(C) '光辉的' 一词意味着光辉灿烂的。" +
            "<br><br>" +
            "(A) '暗淡的' 意味着缺乏亮度、鲜艳或光泽的。" +
            "<br><br>" +
            "(B) '昏暗的' 意味着（灯光、颜色或照明物体）不明亮或清晰的。" +
            "<br><br>" +
            "(D) '模糊的' 意味着未被发现或了解的；不确定的。"
    },
    {
        id: 6,
        question: "The disease was so __________ that it spread rapidly through the population, causing widespread panic.",
        chinese_question: "这种疾病非常 __________，迅速在人群中传播，引起了广泛的恐慌。",
        answers: [
            { option: "A", answer: "virulent", chinese_answer: "致命的", chinese_romanization: "zhìmìng de" },
            { option: "B", answer: "mild", chinese_answer: "温和的", chinese_romanization: "wēnhé de" },
            { option: "C", answer: "benign", chinese_answer: "良性的", chinese_romanization: "liángxìng de" },
            { option: "D", answer: "harmless", chinese_answer: "无害的", chinese_romanization: "wúhài de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'virulent' means (of a disease or poison) extremely severe or harmful in its effects." +
            "<br><br>" +
            "(B) 'mild' means not severe or serious." +
            "<br><br>" +
            "(C) 'benign' means gentle and kindly." +
            "<br><br>" +
            "(D) 'harmless' means not able or likely to cause harm.",
        chinese_explanation: "(A) '致命的' 一词意味着（疾病或毒药）在其影响中极为严重或有害的。" +
            "<br><br>" +
            "(B) '温和的' 意味着不严重或不重要的。" +
            "<br><br>" +
            "(C) '良性的' 意味着温和和善良的。" +
            "<br><br>" +
            "(D) '无害的' 意味着不能或不可能造成伤害的。"
    },
    {
        id: 7,
        question: "The new law was the result of a __________ agreement between the three branches of government.",
        chinese_question: "新法律是政府三大分支之间 __________ 协议的结果。",
        answers: [
            { option: "A", answer: "unilateral", chinese_answer: "单方面的", chinese_romanization: "dānfāngmiàn de" },
            { option: "B", answer: "bipartite", chinese_answer: "双边的", chinese_romanization: "shuāngbiān de" },
            { option: "C", answer: "tripartite", chinese_answer: "三方的", chinese_romanization: "sānfāng de" },
            { option: "D", answer: "singular", chinese_answer: "单独的", chinese_romanization: "dāndú de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'tripartite' means shared by or involving three parties." +
            "<br><br>" +
            "(A) 'unilateral' means performed by or affecting only one person, group, or country involved in a particular situation, without the agreement of another or the others." +
            "<br><br>" +
            "(B) 'bipartite' means involving or made by two separate parties." +
            "<br><br>" +
            "(D) 'singular' means exceptionally good or great; remarkable.",
        chinese_explanation: "(C) '三方的' 一词意味着由三方共同分享或涉及三方。" +
            "<br><br>" +
            "(A) '单方面的' 意味着由涉及特定情况的一个人、团体或国家进行或影响的，而没有另一个或其他的同意。" +
            "<br><br>" +
            "(B) '双边的' 意味着由两个独立的政党参与或制定。" +
            "<br><br>" +
            "(D) '单独的' 意味着特别好的或伟大的；非凡的。"
    },
    {
        id: 8,
        question: "The boxer was considered a __________ opponent, known for his incredible strength and unbeatable record.",
        chinese_question: "这名拳击手被认为是一个 __________ 的对手，以其惊人的力量和无敌的战绩而闻名。",
        answers: [
            { option: "A", answer: "weak", chinese_answer: "弱小的", chinese_romanization: "ruòxiǎo de" },
            { option: "B", answer: "formidable", chinese_answer: "强大的", chinese_romanization: "qiángdà de" },
            { option: "C", answer: "insignificant", chinese_answer: "无关紧要的", chinese_romanization: "wúguān jìnyào de" },
            { option: "D", answer: "unthreatening", chinese_answer: "不具威胁的", chinese_romanization: "bù jù wēixié de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'formidable' means inspiring fear or respect through being impressively large, powerful, intense, or capable." +
            "<br><br>" +
            "(A) 'weak' means lacking the power to perform physically demanding tasks; lacking physical strength and energy." +
            "<br><br>" +
            "(C) 'insignificant' means too small or unimportant to be worth consideration." +
            "<br><br>" +
            "(D) 'unthreatening' means not likely to cause someone to be afraid or worried.",
        chinese_explanation: "(B) '强大的' 一词意味着通过令人印象深刻的大、强大、强烈或有能力而激起恐惧或尊敬的。" +
            "<br><br>" +
            "(A) '弱小的' 意味着缺乏进行体力要求高的任务的能力；缺乏体力和精力。" +
            "<br><br>" +
            "(C) '无关紧要的' 意味着太小或不重要而不值得考虑的。" +
            "<br><br>" +
            "(D) '不具威胁的' 意味着不太可能导致某人害怕或担心的。"
    },
    {
        id: 9,
        question: "The monkey used its __________ tail to grasp branches, demonstrating remarkable agility and coordination.",
        chinese_question: "猴子用其 __________ 的尾巴抓住树枝，展示了非凡的灵活性和协调性。",
        answers: [
            { option: "A", answer: "stiff", chinese_answer: "僵硬的", chinese_romanization: "jiāngyìng de" },
            { option: "B", answer: "prehensile", chinese_answer: "可抓的", chinese_romanization: "kě zhuā de" },
            { option: "C", answer: "rigid", chinese_answer: "刚硬的", chinese_romanization: "gāngyìng de" },
            { option: "D", answer: "inflexible", chinese_answer: "不灵活的", chinese_romanization: "bù línghuó de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'prehensile' means capable of grasping." +
            "<br><br>" +
            "(A) 'stiff' means not easily bent or changed in shape; rigid." +
            "<br><br>" +
            "(C) 'rigid' means unable to bend or be forced out of shape; not flexible." +
            "<br><br>" +
            "(D) 'inflexible' means unwilling to change or compromise.",
        chinese_explanation: "(B) '可抓的' 一词意味着能够抓住。" +
            "<br><br>" +
            "(A) '僵硬的' 意味着不易弯曲或改变形状；坚硬的。" +
            "<br><br>" +
            "(C) '刚硬的' 意味着不能弯曲或变形的；不灵活的。" +
            "<br><br>" +
            "(D) '不灵活的' 意味着不愿意改变或妥协的。"
    },
    {
        id: 10,
        question: "The conclusion reached in the report was based on __________ reasoning, leading to incorrect results.",
        chinese_question: "报告中得出的结论基于 __________ 推理，导致了错误的结果。",
        answers: [
            { option: "A", answer: "sound", chinese_answer: "正确的", chinese_romanization: "zhèngquè de" },
            { option: "B", answer: "logical", chinese_answer: "逻辑的", chinese_romanization: "luójí de" },
            { option: "C", answer: "fallacious", chinese_answer: "谬误的", chinese_romanization: "miùwù de" },
            { option: "D", answer: "valid", chinese_answer: "有效的", chinese_romanization: "yǒuxiào de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'fallacious' means based on a mistaken belief." +
            "<br><br>" +
            "(A) 'sound' means based on valid reasoning or good judgment." +
            "<br><br>" +
            "(B) 'logical' means of or according to the rules of logic or formal argument." +
            "<br><br>" +
            "(D) 'valid' means having a sound basis in logic or fact; reasonable or cogent.",
        chinese_explanation: "(C) '谬误的' 一词意味着基于错误的信念。" +
            "<br><br>" +
            "(A) '正确的' 意味着基于有效的推理或良好的判断。" +
            "<br><br>" +
            "(B) '逻辑的' 意味着根据逻辑或形式论证的规则。" +
            "<br><br>" +
            "(D) '有效的' 意味着在逻辑或事实上有坚实的基础；合理的或有说服力的。"
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
