// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "Her perspective on the issue was __________, offering fresh insights that no one else had considered.",
        chinese_question: "她对问题的看法是 __________ 的，提供了其他人未曾考虑到的新见解。",
        answers: [
            { option: "A", answer: "conventional", chinese_answer: "传统的", chinese_romanization: "chuántǒng de" },
            { option: "B", answer: "unique", chinese_answer: "独特的", chinese_romanization: "dútè de" },
            { option: "C", answer: "predictable", chinese_answer: "可预测的", chinese_romanization: "kě yùcè de" },
            { option: "D", answer: "standard", chinese_answer: "标准的", chinese_romanization: "biāozhǔn de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'unique' figuratively means being particularly remarkable or unusual." +
            "<br><br>" +
            "(A) 'conventional' means based on or in accordance with what is generally done or believed." +
            "<br><br>" +
            "(C) 'predictable' means able to be predicted." +
            "<br><br>" +
            "(D) 'standard' means used or accepted as normal or average.",
        chinese_explanation: "(B) '独特的' 在比喻意义上意味着特别显著或不寻常的。" +
            "<br><br>" +
            "(A) '传统的' 意味着基于或符合通常所做或所信的。" +
            "<br><br>" +
            "(C) '可预测的' 意味着能够预测的。" +
            "<br><br>" +
            "(D) '标准的' 意味着用作或接受为正常或平均的。"
    },
    {
        id: 2,
        question: "The hacker launched a __________ attack on the company's database, causing significant damage.",
        chinese_question: "黑客对公司的数据库发动了 __________ 攻击，造成了重大损失。",
        answers: [
            { option: "A", answer: "helpful", chinese_answer: "有帮助的", chinese_romanization: "yǒu bāngzhù de" },
            { option: "B", answer: "harmless", chinese_answer: "无害的", chinese_romanization: "wúhài de" },
            { option: "C", answer: "malicious", chinese_answer: "恶意的", chinese_romanization: "èyì de" },
            { option: "D", answer: "random", chinese_answer: "随机的", chinese_romanization: "suíjī de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'malicious' means characterized by malice; intending or intended to do harm." +
            "<br><br>" +
            "(A) 'helpful' means giving or ready to give help." +
            "<br><br>" +
            "(B) 'harmless' means not able or likely to cause harm." +
            "<br><br>" +
            "(D) 'random' means made, done, happening, or chosen without method or conscious decision.",
        chinese_explanation: "(C) '恶意的' 一词意味着以恶意为特征；意图或旨在造成伤害。" +
            "<br><br>" +
            "(A) '有帮助的' 意味着给予或准备给予帮助的。" +
            "<br><br>" +
            "(B) '无害的' 意味着不能或不太可能造成伤害的。" +
            "<br><br>" +
            "(D) '随机的' 意味着在没有方法或有意识决定的情况下做出、发生或选择的。"
    },
    {
        id: 3,
        question: "During the meeting, he went off on a __________ topic that had little to do with the main agenda.",
        chinese_question: "在会议期间，他谈到了一个与主要议程关系不大的 __________ 话题。",
        answers: [
            { option: "A", answer: "relevant", chinese_answer: "相关的", chinese_romanization: "xiāngguān de" },
            { option: "B", answer: "pertinent", chinese_answer: "切题的", chinese_romanization: "qiètí de" },
            { option: "C", answer: "central", chinese_answer: "核心的", chinese_romanization: "héxīn de" },
            { option: "D", answer: "tangential", chinese_answer: "离题的", chinese_romanization: "lítí de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'tangential' means only slightly or indirectly related to something." +
            "<br><br>" +
            "(A) 'relevant' means closely connected or appropriate to what is being done or considered." +
            "<br><br>" +
            "(B) 'pertinent' means relevant or applicable to a particular matter." +
            "<br><br>" +
            "(C) 'central' means of the greatest importance; principal or essential.",
        chinese_explanation: "(D) '离题的' 意味着仅与某事略有或间接关系的。" +
            "<br><br>" +
            "(A) '相关的' 意味着与正在做或考虑的事情密切相关或适当的。" +
            "<br><br>" +
            "(B) '切题的' 意味着与某个特定事项相关或适用的。" +
            "<br><br>" +
            "(C) '核心的' 意味着最重要的；主要的或必要的。"
    },
    {
        id: 4,
        question: "The negotiations were difficult due to the __________ attitude of the other party.",
        chinese_question: "由于对方的__________态度，谈判很艰难。",
        answers: [
            { option: "A", answer: "friendly", chinese_answer: "友好的", chinese_romanization: "yǒuhǎo de" },
            { option: "B", answer: "calm", chinese_answer: "平静的", chinese_romanization: "píngjìng de" },
            { option: "C", answer: "indifferent", chinese_answer: "冷漠的", chinese_romanization: "lěngmò de" },
            { option: "D", answer: "hostile", chinese_answer: "敌对的", chinese_romanization: "díduì de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'hostile' means unfriendly; antagonistic." +
            "<br><br>" +
            "(A) 'friendly' means kind and pleasant." +
            "<br><br>" +
            "(B) 'calm' means not showing or feeling nervousness, anger, or other strong emotions." +
            "<br><br>" +
            "(C) 'indifferent' means having no particular interest or sympathy.",
        chinese_explanation: "(D) '敌对的'一词意味着不友好的；对抗的。" +
            "<br><br>" +
            "(A) '友好的' 意味着友善和愉快的。" +
            "<br><br>" +
            "(B) '平静的' 意味着不显示或感觉紧张、愤怒或其他强烈情感。" +
            "<br><br>" +
            "(C) '冷漠的' 意味着没有特别的兴趣或同情。"
    },
    {
        id: 5,
        question: "After the large meal, everyone felt __________ and had little energy to do anything but relax.",
        chinese_question: "在一顿大餐之后，每个人都感到 __________，几乎没有精力做其他事情，只想放松。",
        answers: [
            { option: "A", answer: "energetic", chinese_answer: "精力充沛的", chinese_romanization: "jīnglì chōngpèi de" },
            { option: "B", answer: "lively", chinese_answer: "活泼的", chinese_romanization: "huópō de" },
            { option: "C", answer: "active", chinese_answer: "活跃的", chinese_romanization: "huóyuè de" },
            { option: "D", answer: "torpid", chinese_answer: "懒散的", chinese_romanization: "lǎnsǎn de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'torpid' means mentally or physically inactive; lethargic." +
            "<br><br>" +
            "(A) 'energetic' means showing or involving great activity or vitality." +
            "<br><br>" +
            "(B) 'lively' means full of life and energy." +
            "<br><br>" +
            "(C) 'active' means engaging or ready to engage in physically energetic pursuits.",
        chinese_explanation: "(D) '懒散的' 意味着精神上或身体上不活跃的；昏昏欲睡的。" +
            "<br><br>" +
            "(A) '精力充沛的' 意味着表现出或涉及大量活动或活力的。" +
            "<br><br>" +
            "(B) '活泼的' 意味着充满活力和能量的。" +
            "<br><br>" +
            "(C) '活跃的' 意味着参与或准备参与体力活动的。"
    },
    {
        id: 6,
        question: "In the face of panic, she managed to stay __________ and think clearly.",
        chinese_question: "在恐慌面前，她设法保持 __________ 和清晰思考。",
        answers: [
            { option: "A", answer: "rational", chinese_answer: "理智的", chinese_romanization: "lǐzhì de" },
            { option: "B", answer: "frantic", chinese_answer: "疯狂的", chinese_romanization: "fēngkuáng de" },
            { option: "C", answer: "confused", chinese_answer: "困惑的", chinese_romanization: "kùnhuò de" },
            { option: "D", answer: "irrational", chinese_answer: "不理智的", chinese_romanization: "bù lǐzhì de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'rational' metaphorically means able to think clearly and sensibly." +
            "<br><br>" +
            "(B) 'frantic' means wild or distraught with fear, anxiety, or other emotion." +
            "<br><br>" +
            "(C) 'confused' means unable to think clearly; bewildered." +
            "<br><br>" +
            "(D) 'irrational' means not logical or reasonable.",
        chinese_explanation: "(A) '理智的' 比喻能够清晰和理性地思考。" +
            "<br><br>" +
            "(B) '疯狂的' 意味着因恐惧、焦虑或其他情绪而狂乱或困惑。" +
            "<br><br>" +
            "(C) '困惑的' 意味着无法清晰思考；困惑的。" +
            "<br><br>" +
            "(D) '不理智的' 意味着不合逻辑或不合理的。"
    },
    {
        id: 7,
        question: "Her __________ dedication to her studies earned her top honors in the graduating class.",
        chinese_question: "她对学习的 __________ 奉献使她在毕业班中获得了最高荣誉。",
        answers: [
            { option: "A", answer: "continuous", chinese_answer: "持续", chinese_romanization: "chíxù" },
            { option: "B", answer: "sporadic", chinese_answer: "零星", chinese_romanization: "língxīng" },
            { option: "C", answer: "intermittent", chinese_answer: "间歇", chinese_romanization: "jiànxiē" },
            { option: "D", answer: "occasional", chinese_answer: "偶尔", chinese_romanization: "ǒu'ěr" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'continuous' metaphorically means persistent and unbroken." +
            "<br><br>" +
            "(B) 'sporadic' means irregular." +
            "<br><br>" +
            "(C) 'intermittent' means occurring at intervals." +
            "<br><br>" +
            "(D) 'occasional' means happening from time to time.",
        chinese_explanation: "(A) '持续' 比喻坚持和不断。" +
            "<br><br>" +
            "(B) '零星' 意味着不规则。" +
            "<br><br>" +
            "(C) '间歇' 意味着间隔发生。" +
            "<br><br>" +
            "(D) '偶尔' 意味着时不时发生。"
    },
    {
        id: 8,
        question: "Their ideas were __________, so closely linked that you couldn't tell where one ended and the other began.",
        chinese_question: "他们的想法是__________的，紧密相连，以至于你无法分辨一个结束另一个开始的地方。",
        answers: [
            { option: "A", answer: "distant", chinese_answer: "遥远的", chinese_romanization: "yáoyuǎn de" },
            { option: "B", answer: "inseparable", chinese_answer: "分不开的", chinese_romanization: "fēnbùkāi de" },
            { option: "C", answer: "indifferent", chinese_answer: "冷漠的", chinese_romanization: "lěngmò de" },
            { option: "D", answer: "detached", chinese_answer: "分离的", chinese_romanization: "fēnlí de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'inseparable' means unable to be separated or treated separately. Figuratively, it can mean very closely linked or connected." +
            "<br><br>" +
            "(A) 'distant' means far away in space or time." +
            "<br><br>" +
            "(C) 'indifferent' means having no particular interest or sympathy." +
            "<br><br>" +
            "(D) 'detached' means disengaged or removed.",
        chinese_explanation: "(B) '分不开的'一词意味着无法分离或单独对待。比喻地，它可以表示非常紧密联系或连接。" +
            "<br><br>" +
            "(A) '遥远的' 意味着在空间或时间上遥远的。" +
            "<br><br>" +
            "(C) '冷漠的' 意味着没有特别的兴趣或同情。" +
            "<br><br>" +
            "(D) '分离的' 意味着脱离或移开。"
    },
    {
        id: 9,
        question: "She made a __________ impact on the community through her volunteer work and dedication.",
        chinese_question: "她通过志愿工作和奉献对社区产生了 __________ 的影响。",
        answers: [
            { option: "A", answer: "slight", chinese_answer: "轻微的", chinese_romanization: "qīngwēi de" },
            { option: "B", answer: "insignificant", chinese_answer: "不重要的", chinese_romanization: "bù zhòngyào de" },
            { option: "C", answer: "considerable", chinese_answer: "显著的", chinese_romanization: "xiǎnzhù de" },
            { option: "D", answer: "minimal", chinese_answer: "最小的", chinese_romanization: "zuìxiǎo de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'considerable' figuratively means significant or noteworthy." +
            "<br><br>" +
            "(A) 'slight' means small in degree; inconsiderable." +
            "<br><br>" +
            "(B) 'insignificant' means too small or unimportant to be worth consideration." +
            "<br><br>" +
            "(D) 'minimal' means of a minimum amount, quantity, or degree; negligible.",
        chinese_explanation: "(C) '显著的' 在比喻意义上意味着重要的或值得注意的。" +
            "<br><br>" +
            "(A) '轻微的' 意味着程度小的；微不足道的。" +
            "<br><br>" +
            "(B) '不重要的' 意味着太小或不重要而不值得考虑的。" +
            "<br><br>" +
            "(D) '最小的' 意味着最小的数量、数量或程度；微不足道的。"
    },
    {
        id: 10,
        question: "The financial report painted a __________ picture of the company's future, causing concern among investors.",
        chinese_question: "财务报告描绘了公司未来的 __________ 图景，引起了投资者的担忧。",
        answers: [
            { option: "A", answer: "promising", chinese_answer: "有前途的", chinese_romanization: "yǒu qiántú de" },
            { option: "B", answer: "optimistic", chinese_answer: "乐观的", chinese_romanization: "lèguān de" },
            { option: "C", answer: "ghastly", chinese_answer: "可怕的", chinese_romanization: "kěpà de" },
            { option: "D", answer: "hopeful", chinese_answer: "充满希望的", chinese_romanization: "chōngmǎn xīwàng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'ghastly' figuratively means extremely bad or unpleasant." +
            "<br><br>" +
            "(A) 'promising' means showing signs of future success." +
            "<br><br>" +
            "(B) 'optimistic' means hopeful and confident about the future." +
            "<br><br>" +
            "(D) 'hopeful' means feeling or inspiring optimism about a future event.",
        chinese_explanation: "(C) '可怕的' 在比喻意义上意味着极坏或不愉快的。" +
            "<br><br>" +
            "(A) '有前途的' 意味着显示出未来成功的迹象。" +
            "<br><br>" +
            "(B) '乐观的' 意味着对未来充满希望和信心的。" +
            "<br><br>" +
            "(D) '充满希望的' 意味着对未来事件感到乐观或激发乐观的。"
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
