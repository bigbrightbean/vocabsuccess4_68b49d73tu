// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "She sought the __________ of her peers before making the final decision.",
        chinese_question: "在做最终决定之前，她寻求同事们的 __________。",
        answers: [
            { option: "A", answer: "approval", chinese_answer: "认可", chinese_romanization: "rènkě" },
            { option: "B", answer: "rejection", chinese_answer: "拒绝", chinese_romanization: "jùjué" },
            { option: "C", answer: "indifference", chinese_answer: "漠不关心", chinese_romanization: "mò bù guānxīn" },
            { option: "D", answer: "neglect", chinese_answer: "忽视", chinese_romanization: "hūshì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'approval' metaphorically means support or endorsement." +
            "<br><br>" +
            "(B) 'rejection' means the dismissing or refusing of a proposal, idea, etc." +
            "<br><br>" +
            "(C) 'indifference' means lack of interest, concern, or sympathy." +
            "<br><br>" +
            "(D) 'neglect' means fail to care for properly.",
        chinese_explanation: "(A) '认可' 比喻支持或认可。" +
            "<br><br>" +
            "(B) '拒绝' 意味着对提议、想法等的拒绝或否定。" +
            "<br><br>" +
            "(C) '漠不关心' 意味着缺乏兴趣、关心或同情心。" +
            "<br><br>" +
            "(D) '忽视' 意味着未能适当照顾。"
    },
    {
        id: 2,
        question: "The entrepreneur declared __________ after his business failed to recover from the financial crisis.",
        chinese_question: "在他的企业未能从金融危机中恢复后，这位企业家宣布 __________。",
        answers: [
            { option: "A", answer: "success", chinese_answer: "成功", chinese_romanization: "chénggōng" },
            { option: "B", answer: "triumph", chinese_answer: "胜利", chinese_romanization: "shènglì" },
            { option: "C", answer: "bankruptcy", chinese_answer: "破产", chinese_romanization: "pòchǎn" },
            { option: "D", answer: "achievement", chinese_answer: "成就", chinese_romanization: "chéngjiù" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'bankruptcy' means the legal status of a person or other entity that cannot repay debts to creditors." +
            "<br><br>" +
            "(A) 'success' means the accomplishment of an aim or purpose." +
            "<br><br>" +
            "(B) 'triumph' means a great victory or achievement." +
            "<br><br>" +
            "(D) 'achievement' means a thing done successfully, typically by effort, courage, or skill.",
        chinese_explanation: "(C) '破产' 意味着无法偿还债权人债务的个人或其他实体的法律状态。" +
            "<br><br>" +
            "(A) '成功' 意味着目标或目的的实现。" +
            "<br><br>" +
            "(B) '胜利' 意味着伟大的胜利或成就。" +
            "<br><br>" +
            "(D) '成就' 意味着通常通过努力、勇气或技巧成功完成的事情。"
    },
    {
        id: 3,
        question: "In the courtroom drama, she portrayed the __________, presenting her case with compelling evidence and emotion.",
        chinese_question: "在法庭戏剧中，她扮演了 __________，以令人信服的证据和情感陈述了她的案件。",
        answers: [
            { option: "A", answer: "observer", chinese_answer: "观察者", chinese_romanization: "guānchá zhě" },
            { option: "B", answer: "plaintiff", chinese_answer: "原告", chinese_romanization: "yuángào" },
            { option: "C", answer: "bystander", chinese_answer: "旁观者", chinese_romanization: "pángguān zhě" },
            { option: "D", answer: "mediator", chinese_answer: "调解员", chinese_romanization: "tiáojiě yuán" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'plaintiff' means a person who brings a case against another in a court of law." +
            "<br><br>" +
            "(A) 'observer' means a person who watches or notices something." +
            "<br><br>" +
            "(C) 'bystander' means a person who is present at an event or incident but does not take part." +
            "<br><br>" +
            "(D) 'mediator' means a person who attempts to make people involved in a conflict come to an agreement.",
        chinese_explanation: "(B) '原告' 是指在法庭上对他人提起诉讼的人。" +
            "<br><br>" +
            "(A) '观察者' 意味着观看或注意到某事的人。" +
            "<br><br>" +
            "(C) '旁观者' 意味着在事件或事故中在场但不参与的人。" +
            "<br><br>" +
            "(D) '调解员' 意味着试图让冲突中的人达成协议的人。"
    },
    {
        id: 4,
        question: "Her __________ to improve her skills paid off with a promotion at work.",
        chinese_question: "她 __________ 改进技能的努力得到了工作上的晋升回报。",
        answers: [
            { option: "A", answer: "endeavour", chinese_answer: "努力", chinese_romanization: "nǔlì" },
            { option: "B", answer: "failure", chinese_answer: "失败", chinese_romanization: "shībài" },
            { option: "C", answer: "hesitation", chinese_answer: "犹豫", chinese_romanization: "yóuyù" },
            { option: "D", answer: "neglect", chinese_answer: "忽视", chinese_romanization: "hūshì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'endeavour' metaphorically means a serious or determined effort." +
            "<br><br>" +
            "(B) 'failure' means lack of success." +
            "<br><br>" +
            "(C) 'hesitation' means the action of pausing or hesitating before saying or doing something." +
            "<br><br>" +
            "(D) 'neglect' means fail to care for properly.",
        chinese_explanation: "(A) '努力' 比喻认真的或坚定的努力。" +
            "<br><br>" +
            "(B) '失败' 意味着缺乏成功。" +
            "<br><br>" +
            "(C) '犹豫' 意味着在说或做某事之前暂停的动作。" +
            "<br><br>" +
            "(D) '忽视' 意味着未能妥善照料。"
    },
    {
        id: 5,
        question: "Her __________ as a philanthropist grew as she donated to various causes, earning widespread recognition and admiration from the public.",
        chinese_question: "随着她向各种事业捐款，她作为慈善家的 __________ 也在增长，赢得了公众广泛的认可和钦佩。",
        answers: [
            { option: "A", answer: "renown", chinese_answer: "声誉", chinese_romanization: "shēngyù" },
            { option: "B", answer: "secrecy", chinese_answer: "保密", chinese_romanization: "bǎomì" },
            { option: "C", answer: "humility", chinese_answer: "谦逊", chinese_romanization: "qiānxùn" },
            { option: "D", answer: "modesty", chinese_answer: "谦虚", chinese_romanization: "qiānxū" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'renown' metaphorically means widespread and high repute; fame." +
            "<br><br>" +
            "(B) 'secrecy' means the action of keeping something secret or the state of being kept secret." +
            "<br><br>" +
            "(C) 'humility' means a modest or low view of one's own importance; humbleness." +
            "<br><br>" +
            "(D) 'modesty' means the quality or state of being unassuming or moderate in the estimation of one's abilities.",
        chinese_explanation: "(A) '声誉' 比喻广泛和高度的声望；名声。" +
            "<br><br>" +
            "(B) '保密' 意味着保守秘密的行为或被保守秘密的状态。" +
            "<br><br>" +
            "(C) '谦逊' 意味着对自己重要性的谦虚或低调看法；谦逊。" +
            "<br><br>" +
            "(D) '谦虚' 意味着对自己能力的估计中不自大或适度的质量或状态。"
    },
    {
        id: 6,
        question: "The new policy created a __________ between management and employees, leading to unrest and dissatisfaction.",
        chinese_question: "新政策在管理层和员工之间造成了 __________，导致了动荡和不满。",
        answers: [
            { option: "A", answer: "unity", chinese_answer: "团结", chinese_romanization: "tuánjié" },
            { option: "B", answer: "schism", chinese_answer: "分裂", chinese_romanization: "fēnliè" },
            { option: "C", answer: "peace", chinese_answer: "和平", chinese_romanization: "hépíng" },
            { option: "D", answer: "collaboration", chinese_answer: "合作", chinese_romanization: "hézuò" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'schism' figuratively means a division or disunion, especially into mutually opposed parties." +
            "<br><br>" +
            "(A) 'unity' means the state of being united or joined as a whole." +
            "<br><br>" +
            "(C) 'peace' means freedom from disturbance; tranquility." +
            "<br><br>" +
            "(D) 'collaboration' means the action of working with someone to produce or create something.",
        chinese_explanation: "(B) '分裂' 在比喻意义上意味着分裂或不和，特别是成相互对立的党派。" +
            "<br><br>" +
            "(A) '团结' 意味着团结或联合的状态。" +
            "<br><br>" +
            "(C) '和平' 意味着没有干扰的自由；宁静。" +
            "<br><br>" +
            "(D) '合作' 意味着与某人一起工作以生产或创造某物的行动。"
    },
    {
        id: 7,
        question: "The country was in __________ after the sudden resignation of its leader.",
        chinese_question: "国家在领导人突然辞职后陷入 __________。",
        answers: [
            { option: "A", answer: "peace", chinese_answer: "和平", chinese_romanization: "hépíng" },
            { option: "B", answer: "stability", chinese_answer: "稳定", chinese_romanization: "wěndìng" },
            { option: "C", answer: "turmoil", chinese_answer: "动荡", chinese_romanization: "dòngdàng" },
            { option: "D", answer: "order", chinese_answer: "秩序", chinese_romanization: "zhìxù" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'turmoil' means a state of great disturbance, confusion, or uncertainty." +
            "<br><br>" +
            "(A) 'peace' means freedom from disturbance; tranquility." +
            "<br><br>" +
            "(B) 'stability' means the state of being stable." +
            "<br><br>" +
            "(D) 'order' means the arrangement or disposition of people or things in relation to each other according to a particular sequence, pattern, or method.",
        chinese_explanation: "(C) '动荡' 一词意味着处于极大的扰乱、混乱或不确定状态。" +
            "<br><br>" +
            "(A) '和平' 意味着没有干扰的自由；宁静。" +
            "<br><br>" +
            "(B) '稳定' 意味着稳定的状态。" +
            "<br><br>" +
            "(D) '秩序' 意味着根据特定的顺序、模式或方法安排或处置人或事物。"
    },
    {
        id: 8,
        question: "There is no __________ for all the world's problems, but education can help address many issues.",
        chinese_question: "世界上没有 __________ 能解决所有问题，但教育可以帮助解决许多问题。",
        answers: [
            { option: "A", answer: "problem", chinese_answer: "问题", chinese_romanization: "wèntí" },
            { option: "B", answer: "disease", chinese_answer: "疾病", chinese_romanization: "jíbìng" },
            { option: "C", answer: "panacea", chinese_answer: "万灵药", chinese_romanization: "wànlíngyào" },
            { option: "D", answer: "ailment", chinese_answer: "小病", chinese_romanization: "xiǎobìng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'panacea' means a solution or remedy for all difficulties or diseases." +
            "<br><br>" +
            "(A) 'problem' means a matter or situation regarded as unwelcome or harmful and needing to be dealt with and overcome." +
            "<br><br>" +
            "(B) 'disease' means a disorder of structure or function in a human, animal, or plant, especially one that produces specific symptoms or that affects a specific location." +
            "<br><br>" +
            "(D) 'ailment' means an illness, typically a minor one.",
        chinese_explanation: "(C) '万灵药' 一词意味着解决所有困难或疾病的解决方案或补救措施。" +
            "<br><br>" +
            "(A) '问题' 意味着被认为不受欢迎或有害并需要处理和克服的情况或情况。" +
            "<br><br>" +
            "(B) '疾病' 意味着人类、动物或植物的结构或功能的紊乱，尤其是产生特定症状或影响特定部位的紊乱。" +
            "<br><br>" +
            "(D) '小病' 意味着通常是轻微的疾病。"
    },
    {
        id: 9,
        question: "Completion of the introductory course is a __________ for enrolling in the advanced program.",
        chinese_question: "完成入门课程是注册高级课程的 __________。",
        answers: [
            { option: "A", answer: "option", chinese_answer: "选项", chinese_romanization: "xuǎnxiàng" },
            { option: "B", answer: "prerequisite", chinese_answer: "先决条件", chinese_romanization: "xiānjué tiáojiàn" },
            { option: "C", answer: "suggestion", chinese_answer: "建议", chinese_romanization: "jiànyì" },
            { option: "D", answer: "recommendation", chinese_answer: "推荐", chinese_romanization: "tuījiàn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'prerequisite' means a thing that is required as a prior condition for something else to happen or exist." +
            "<br><br>" +
            "(A) 'option' means a thing that is or may be chosen." +
            "<br><br>" +
            "(C) 'suggestion' means an idea or plan put forward for consideration." +
            "<br><br>" +
            "(D) 'recommendation' means a suggestion or proposal as to the best course of action, especially one put forward by an authoritative body.",
        chinese_explanation: "(B) '先决条件' 一词意味着作为其他事情发生或存在的先决条件的事物。" +
            "<br><br>" +
            "(A) '选项' 意味着可以选择的事物。" +
            "<br><br>" +
            "(C) '建议' 意味着提出供考虑的想法或计划。" +
            "<br><br>" +
            "(D) '推荐' 意味着作为最佳行动方案的建议或提议，尤其是由权威机构提出的。"
    },
    {
        id: 10,
        question: "The diplomatic __________ between the two countries left the ambassadors scrambling to smooth things over.",
        chinese_question: "两国之间的外交 __________ 使大使们忙于平息事态。",
        answers: [
            { option: "A", answer: "harmony", chinese_answer: "和谐", chinese_romanization: "héxié" },
            { option: "B", answer: "imbroglio", chinese_answer: "纠纷", chinese_romanization: "jiūfēn" },
            { option: "C", answer: "agreement", chinese_answer: "协议", chinese_romanization: "xiéyì" },
            { option: "D", answer: "accord", chinese_answer: "一致", chinese_romanization: "yīzhì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'imbroglio' means an extremely confused, complicated, or embarrassing situation." +
            "<br><br>" +
            "(A) 'harmony' means the combination of simultaneously sounded musical notes to produce a pleasing effect." +
            "<br><br>" +
            "(C) 'agreement' means harmony or accordance in opinion or feeling; a position or result of agreeing." +
            "<br><br>" +
            "(D) 'accord' means an official agreement or treaty.",
        chinese_explanation: "(B) '纠纷' 一词意味着极其混乱、复杂或尴尬的局面。" +
            "<br><br>" +
            "(A) '和谐' 意味着同时发出的音乐音符的结合，产生令人愉悦的效果。" +
            "<br><br>" +
            "(C) '协议' 意味着意见或感觉上的一致；同意的立场或结果。" +
            "<br><br>" +
            "(D) '一致' 意味着正式的协议或条约。"
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
