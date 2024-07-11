// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The speech was filled with __________ expressions, making it dull and uninspiring.",
        chinese_question: "演讲充满了 __________ 的表达，使其乏味且毫无灵感。",
        answers: [
            { option: "A", answer: "original", chinese_answer: "原创", chinese_romanization: "yuánchuàng" },
            { option: "B", answer: "unique", chinese_answer: "独特", chinese_romanization: "dútè" },
            { option: "C", answer: "trite", chinese_answer: "陈腐", chinese_romanization: "chénfǔ" },
            { option: "D", answer: "fresh", chinese_answer: "新鲜", chinese_romanization: "xīnxiān" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'trite' means overused and consequently of little import; lacking originality or freshness." +
            "<br><br>" +
            "(A) 'original' means present or existing from the beginning." +
            "<br><br>" +
            "(B) 'unique' means being the only one of its kind; unlike anything else." +
            "<br><br>" +
            "(D) 'fresh' means not previously known or used; new or different.",
        chinese_explanation: "(C) '陈腐' 一词意味着过度使用，因此没有重要性；缺乏原创性或新鲜感。" +
            "<br><br>" +
            "(A) '原创' 意味着从一开始就存在或存在的。" +
            "<br><br>" +
            "(B) '独特' 意味着独一无二的；与其他任何东西都不同的。" +
            "<br><br>" +
            "(D) '新鲜' 意味着以前未知或未使用的；新的或不同的。"
    },
    {
        id: 2,
        question: "Despite the lavish banquet, he remained __________, choosing only a small portion of vegetables and water.",
        chinese_question: "尽管宴会豪华，他仍然保持 __________，只选择了一小部分蔬菜和水。",
        answers: [
            { option: "A", answer: "gluttonous", chinese_answer: "贪吃", chinese_romanization: "tānchī" },
            { option: "B", answer: "abstemious", chinese_answer: "节制", chinese_romanization: "jiézhì" },
            { option: "C", answer: "indulgent", chinese_answer: "放纵", chinese_romanization: "fàngzòng" },
            { option: "D", answer: "excessive", chinese_answer: "过度", chinese_romanization: "guòdù" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'abstemious' means not self-indulgent, especially when eating and drinking." +
            "<br><br>" +
            "(A) 'gluttonous' means excessively greedy." +
            "<br><br>" +
            "(C) 'indulgent' means having or indicating a tendency to be overly generous to or lenient with someone." +
            "<br><br>" +
            "(D) 'excessive' means more than is necessary, normal, or desirable; immoderate.",
        chinese_explanation: "(B) '节制' 一词意味着不自我放纵，特别是在饮食和饮酒方面。" +
            "<br><br>" +
            "(A) '贪吃' 意味着过分贪婪。" +
            "<br><br>" +
            "(C) '放纵' 意味着有或表明对某人过于宽容的倾向。" +
            "<br><br>" +
            "(D) '过度' 意味着超过必要、正常或可取的；过分的。"
    },
    {
        id: 3,
        question: "Climbing the steep mountain seemed like an __________ challenge, but they were determined to reach the summit.",
        chinese_question: "攀登陡峭的山峰似乎是一个 __________ 的挑战，但他们决心到达顶峰。",
        answers: [
            { option: "A", answer: "easy", chinese_answer: "容易", chinese_romanization: "róngyì" },
            { option: "B", answer: "achievable", chinese_answer: "可实现", chinese_romanization: "kě shíxiàn" },
            { option: "C", answer: "insurmountable", chinese_answer: "不可逾越", chinese_romanization: "bù kě yúyuè" },
            { option: "D", answer: "trivial", chinese_answer: "微不足道", chinese_romanization: "wēibùzúdào" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'insurmountable' means too great to be overcome." +
            "<br><br>" +
            "(A) 'easy' means achieved without great effort; presenting few difficulties." +
            "<br><br>" +
            "(B) 'achievable' means able to be brought about or reached successfully." +
            "<br><br>" +
            "(D) 'trivial' means of little value or importance.",
        chinese_explanation: "(C) '不可逾越' 一词意味着过于伟大而无法克服。" +
            "<br><br>" +
            "(A) '容易' 意味着不费力地完成；呈现出很少的困难。" +
            "<br><br>" +
            "(B) '可实现' 意味着能够成功实现或达到。" +
            "<br><br>" +
            "(D) '微不足道' 意味着价值或重要性很小。"
    },
    {
        id: 4,
        question: "The new raincoat was made of an __________ material, ensuring no water could seep through.",
        chinese_question: "这件新雨衣是用 __________ 材料制成的，确保没有水能渗透。",
        answers: [
            { option: "A", answer: "absorbent", chinese_answer: "吸收", chinese_romanization: "xīshōu" },
            { option: "B", answer: "impermeable", chinese_answer: "不透水", chinese_romanization: "bù tòushuǐ" },
            { option: "C", answer: "porous", chinese_answer: "多孔", chinese_romanization: "duō kǒng" },
            { option: "D", answer: "fragile", chinese_answer: "易碎", chinese_romanization: "yìsuì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'impermeable' means not allowing fluid to pass through." +
            "<br><br>" +
            "(A) 'absorbent' means able to soak up liquid easily." +
            "<br><br>" +
            "(C) 'porous' means having minute spaces or holes through which liquid or air may pass." +
            "<br><br>" +
            "(D) 'fragile' means easily broken or damaged.",
        chinese_explanation: "(B) '不透水' 一词意味着不允许液体通过。" +
            "<br><br>" +
            "(A) '吸收' 意味着能够容易地吸收液体。" +
            "<br><br>" +
            "(C) '多孔' 意味着有微小的空隙或孔洞，使液体或空气能够通过。" +
            "<br><br>" +
            "(D) '易碎' 意味着容易破裂或损坏。"
    },
    {
        id: 5,
        question: "Smoking has been proven to have __________ effects on health, contributing to numerous diseases.",
        chinese_question: "吸烟已被证明对健康有 __________ 的影响，导致多种疾病。",
        answers: [
            { option: "A", answer: "beneficial", chinese_answer: "有益", chinese_romanization: "yǒuyì" },
            { option: "B", answer: "neutral", chinese_answer: "中性", chinese_romanization: "zhōngxìng" },
            { option: "C", answer: "deleterious", chinese_answer: "有害", chinese_romanization: "yǒuhài" },
            { option: "D", answer: "harmless", chinese_answer: "无害", chinese_romanization: "wúhài" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'deleterious' means causing harm or damage." +
            "<br><br>" +
            "(A) 'beneficial' means resulting in good; favorable or advantageous." +
            "<br><br>" +
            "(B) 'neutral' means not helping or supporting either side in a conflict or disagreement." +
            "<br><br>" +
            "(D) 'harmless' means not likely to cause harm.",
        chinese_explanation: "(C) '有害' 一词意味着造成伤害或损害。" +
            "<br><br>" +
            "(A) '有益' 意味着导致好的结果；有利或有优势的。" +
            "<br><br>" +
            "(B) '中性' 意味着不帮助或支持冲突或分歧中的任何一方。" +
            "<br><br>" +
            "(D) '无害' 意味着不太可能造成伤害。"
    },
    {
        id: 6,
        question: "The sky was filled with __________ stars, creating a breathtaking view that seemed endless.",
        chinese_question: "天空中布满了 __________ 的星星，形成了一个似乎无尽的美景。",
        answers: [
            { option: "A", answer: "innumerable", chinese_answer: "无数", chinese_romanization: "wúshù" },
            { option: "B", answer: "numbered", chinese_answer: "有数", chinese_romanization: "yǒu shù" },
            { option: "C", answer: "few", chinese_answer: "少数", chinese_romanization: "shǎoshù" },
            { option: "D", answer: "scarce", chinese_answer: "稀少", chinese_romanization: "xīshǎo" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'innumerable' means too many to be counted." +
            "<br><br>" +
            "(B) 'numbered' means included in a list or in a specific sequence." +
            "<br><br>" +
            "(C) 'few' means a small number of." +
            "<br><br>" +
            "(D) 'scarce' means insufficient for the demand.",
        chinese_explanation: "(A) '无数' 一词意味着太多而无法计算。" +
            "<br><br>" +
            "(B) '有数' 意味着包括在清单或特定顺序中。" +
            "<br><br>" +
            "(C) '少数' 意味着少量的。" +
            "<br><br>" +
            "(D) '稀少' 意味着不足以满足需求。"
    },
    {
        id: 7,
        question: "The scientist was fascinated by the __________ particles, which were so small they could only be observed with a powerful microscope.",
        chinese_question: "科学家对那些 __________ 的粒子着迷，这些粒子非常小，只能用强力显微镜观察。",
        answers: [
            { option: "A", answer: "large", chinese_answer: "大", chinese_romanization: "dà" },
            { option: "B", answer: "visible", chinese_answer: "可见", chinese_romanization: "kějiàn" },
            { option: "C", answer: "infinitesimal", chinese_answer: "微小", chinese_romanization: "wéixiǎo" },
            { option: "D", answer: "immense", chinese_answer: "巨大", chinese_romanization: "jùdà" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'infinitesimal' means extremely small." +
            "<br><br>" +
            "(A) 'large' means of considerable or relatively great size, extent, or capacity." +
            "<br><br>" +
            "(B) 'visible' means able to be seen." +
            "<br><br>" +
            "(D) 'immense' means extremely large or great, especially in scale or degree.",
        chinese_explanation: "(C) '微小' 一词意味着极其微小。" +
            "<br><br>" +
            "(A) '大' 意味着相当大或相对较大、广泛或容量大。" +
            "<br><br>" +
            "(B) '可见' 意味着可以被看到。" +
            "<br><br>" +
            "(D) '巨大' 意味着极其大或伟大，特别是在规模或程度上。"
    },
    {
        id: 8,
        question: "The speaker delivered an __________ speech, impressing the audience with his ability to speak fluently without preparation.",
        chinese_question: "演讲者发表了一篇 __________ 的演讲，他能在没有准备的情况下流利地演讲给观众留下了深刻的印象。",
        answers: [
            { option: "A", answer: "rehearsed", chinese_answer: "排练", chinese_romanization: "páiliàn" },
            { option: "B", answer: "scripted", chinese_answer: "脚本", chinese_romanization: "jiǎoběn" },
            { option: "C", answer: "planned", chinese_answer: "计划", chinese_romanization: "jìhuà" },
            { option: "D", answer: "extemporaneous", chinese_answer: "即兴", chinese_romanization: "jíxìng" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'extemporaneous' means spoken or done without preparation." +
            "<br><br>" +
            "(A) 'rehearsed' means practiced in advance." +
            "<br><br>" +
            "(B) 'scripted' means written as a script." +
            "<br><br>" +
            "(C) 'planned' means decided on and arranged in advance.",
        chinese_explanation: "(D) '即兴' 一词意味着在没有准备的情况下说或做。" +
            "<br><br>" +
            "(A) '排练' 意味着提前练习。" +
            "<br><br>" +
            "(B) '脚本' 意味着作为剧本写成的。" +
            "<br><br>" +
            "(C) '计划' 意味着提前决定和安排。"
    },
    {
        id: 9,
        question: "The __________ child astonished her teachers by solving complex math problems at an early age.",
        chinese_question: "这个 __________ 的孩子在很小的年纪就解决了复杂的数学问题，令老师们惊讶。",
        answers: [
            { option: "A", answer: "slow", chinese_answer: "迟缓", chinese_romanization: "chíhuǎn" },
            { option: "B", answer: "average", chinese_answer: "普通", chinese_romanization: "pǔtōng" },
            { option: "C", answer: "precocious", chinese_answer: "早熟", chinese_romanization: "zǎoshú" },
            { option: "D", answer: "delayed", chinese_answer: "延迟", chinese_romanization: "yánchí" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'precocious' means having developed certain abilities or proclivities at an earlier age than usual." +
            "<br><br>" +
            "(A) 'slow' means not quick or fast." +
            "<br><br>" +
            "(B) 'average' means having qualities that are seen as typical of a particular person, group, or thing." +
            "<br><br>" +
            "(D) 'delayed' means occurring or done after the expected or proper time.",
        chinese_explanation: "(C) '早熟' 一词意味着在比通常年龄更早的年龄发展出某些能力或倾向。" +
            "<br><br>" +
            "(A) '迟缓' 意味着不快或慢。" +
            "<br><br>" +
            "(B) '普通' 意味着具有特定人、群体或事物的典型品质。" +
            "<br><br>" +
            "(D) '延迟' 意味着在预期或适当时间之后发生或完成。"
    },
    {
        id: 10,
        question: "His __________ behavior, always flattering and oily, made everyone question his sincerity.",
        chinese_question: "他的 __________ 行为，总是奉承和油滑，让每个人都质疑他的真诚。",
        answers: [
            { option: "A", answer: "unctuous", chinese_answer: "油腻", chinese_romanization: "yóunì" },
            { option: "B", answer: "genuine", chinese_answer: "真实", chinese_romanization: "zhēnshí" },
            { option: "C", answer: "sincere", chinese_answer: "真诚", chinese_romanization: "zhēnchéng" },
            { option: "D", answer: "blunt", chinese_answer: "直率", chinese_romanization: "zhíshuài" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'unctuous' means excessively or ingratiatingly flattering; oily." +
            "<br><br>" +
            "(B) 'genuine' means truly what something is said to be; authentic." +
            "<br><br>" +
            "(C) 'sincere' means free from pretense or deceit; proceeding from genuine feelings." +
            "<br><br>" +
            "(D) 'blunt' means straightforward and brief, often rudely so.",
        chinese_explanation: "(A) '油腻' 一词意味着过分或奉承地恭维；油滑。" +
            "<br><br>" +
            "(B) '真实' 意味着确实是某事物所说的那样；真实。" +
            "<br><br>" +
            "(C) '真诚' 意味着没有虚伪或欺骗；出自真实感情。" +
            "<br><br>" +
            "(D) '直率' 意味着直截了当和简短，往往是粗鲁的。"
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
