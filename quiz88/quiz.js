// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "Rather than __________ his teammate’s efforts, he chose to encourage and support them in their pursuits.",
        chinese_question: "他没有 __________ 队友的努力，而是选择鼓励和支持他们的追求。",
        answers: [
            { option: "A", answer: "uplift", chinese_answer: "提升", chinese_romanization: "tíshēng" },
            { option: "B", answer: "disparage", chinese_answer: "贬低", chinese_romanization: "biǎndī" },
            { option: "C", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" },
            { option: "D", answer: "admire", chinese_answer: "欣赏", chinese_romanization: "xīnshǎng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'disparage' means regard or represent as being of little worth." +
            "<br><br>" +
            "(A) 'uplift' means lift to a higher position." +
            "<br><br>" +
            "(C) 'support' means bear all or part of the weight of; hold up." +
            "<br><br>" +
            "(D) 'admire' means regard with respect or warm approval.",
        chinese_explanation: "(B) '贬低' 一词意味着认为或表现为价值低。" +
            "<br><br>" +
            "(A) '提升' 意味着提到更高的位置。" +
            "<br><br>" +
            "(C) '支持' 意味着承担全部或部分重量；支撑。" +
            "<br><br>" +
            "(D) '欣赏' 意味着以尊重或热情的认可来看待。"
    },
    {
        id: 2,
        question: "The politician's speech was intended to __________ the crowd, urging them to take immediate action against the new policy.",
        chinese_question: "这位政客的演讲旨在 __________ 人群，敦促他们立即对新政策采取行动。",
        answers: [
            { option: "A", answer: "calm", chinese_answer: "平静", chinese_romanization: "píngjìng" },
            { option: "B", answer: "pacify", chinese_answer: "安抚", chinese_romanization: "ānfǔ" },
            { option: "C", answer: "soothe", chinese_answer: "抚慰", chinese_romanization: "fǔwèi" },
            { option: "D", answer: "incite", chinese_answer: "煽动", chinese_romanization: "shāndòng" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'incite' means to encourage or stir up (violent or unlawful behavior)." +
            "<br><br>" +
            "(A) 'calm' means make (someone) tranquil and quiet; soothe." +
            "<br><br>" +
            "(B) 'pacify' means quell the anger, agitation, or excitement of." +
            "<br><br>" +
            "(C) 'soothe' means gently calm (a person or their feelings).",
        chinese_explanation: "(D) '煽动' 一词意味着鼓励或煽动（暴力或非法行为）。" +
            "<br><br>" +
            "(A) '平静' 意味着使（某人）安静和镇定；安慰。" +
            "<br><br>" +
            "(B) '安抚' 意味着平息愤怒、激动或兴奋。" +
            "<br><br>" +
            "(C) '抚慰' 意味着轻轻地安抚（某人或其感情）。"
    },
    {
        id: 3,
        question: "The new security measures were designed to __________ unauthorized access to the building.",
        chinese_question: "新的安全措施旨在 __________ 未经授权进入大楼。",
        answers: [
            { option: "A", answer: "allow", chinese_answer: "允许", chinese_romanization: "yǔnxǔ" },
            { option: "B", answer: "preclude", chinese_answer: "阻止", chinese_romanization: "zǔzhǐ" },
            { option: "C", answer: "permit", chinese_answer: "许可", chinese_romanization: "xǔkě" },
            { option: "D", answer: "enable", chinese_answer: "使能", chinese_romanization: "shǐ néng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'preclude' means prevent from happening; make impossible." +
            "<br><br>" +
            "(A) 'allow' means give (someone) permission to do something." +
            "<br><br>" +
            "(C) 'permit' means give authorization or consent to (someone) to do something." +
            "<br><br>" +
            "(D) 'enable' means give (someone) the authority or means to do something.",
        chinese_explanation: "(B) '阻止' 一词意味着防止发生；使不可能。" +
            "<br><br>" +
            "(A) '允许' 意味着给予（某人）做某事的许可。" +
            "<br><br>" +
            "(C) '许可' 意味着授权或同意（某人）做某事。" +
            "<br><br>" +
            "(D) '使能' 意味着给予（某人）权力或手段做某事。"
    },
    {
        id: 4,
        question: "His rude comments only served to __________ the tension in the room, making everyone more uncomfortable.",
        chinese_question: "他粗鲁的评论只会 __________ 房间里的紧张气氛，让每个人都更不舒服。",
        answers: [
            { option: "A", answer: "alleviate", chinese_answer: "缓解", chinese_romanization: "huǎnjiě" },
            { option: "B", answer: "exacerbate", chinese_answer: "加剧", chinese_romanization: "jiājù" },
            { option: "C", answer: "ease", chinese_answer: "减轻", chinese_romanization: "jiǎnqīng" },
            { option: "D", answer: "reduce", chinese_answer: "减少", chinese_romanization: "jiǎnshǎo" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'exacerbate' means make (a problem, bad situation, or negative feeling) worse." +
            "<br><br>" +
            "(A) 'alleviate' means make (suffering, deficiency, or a problem) less severe." +
            "<br><br>" +
            "(C) 'ease' means make (something unpleasant, painful, or intense) less serious or severe." +
            "<br><br>" +
            "(D) 'reduce' means make smaller or less in amount, degree, or size.",
        chinese_explanation: "(B) '加剧' 一词意味着使（问题、糟糕的情况或负面情绪）变得更糟。" +
            "<br><br>" +
            "(A) '缓解' 意味着使（痛苦、缺陷或问题）减轻。" +
            "<br><br>" +
            "(C) '减轻' 意味着使（不愉快、痛苦或强烈的东西）变得不那么严重。" +
            "<br><br>" +
            "(D) '减少' 意味着使数量、程度或规模变小或减少。"
    },
    {
        id: 5,
        question: "To avoid directly answering the reporter's questions, the politician chose to __________, leaving everyone confused about his true stance.",
        chinese_question: "为了避免直接回答记者的问题，这位政客选择 __________，让每个人都对他的真实立场感到困惑。",
        answers: [
            { option: "A", answer: "equivocate", chinese_answer: "含糊其辞", chinese_romanization: "hánhú qí cí" },
            { option: "B", answer: "clarify", chinese_answer: "澄清", chinese_romanization: "chéngqīng" },
            { option: "C", answer: "confess", chinese_answer: "坦白", chinese_romanization: "tǎnbái" },
            { option: "D", answer: "declare", chinese_answer: "宣布", chinese_romanization: "xuānbù" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'equivocate' means use ambiguous language so as to conceal the truth or avoid committing oneself." +
            "<br><br>" +
            "(B) 'clarify' means make (a statement or situation) less confused and more comprehensible." +
            "<br><br>" +
            "(C) 'confess' means admit or state that one has committed a crime or is at fault in some way." +
            "<br><br>" +
            "(D) 'declare' means say something in a solemn and emphatic manner.",
        chinese_explanation: "(A) '含糊其辞' 一词意味着使用模棱两可的语言，以隐瞒真相或避免表态。" +
            "<br><br>" +
            "(B) '澄清' 意味着使（声明或情况）不再混乱且更易理解。" +
            "<br><br>" +
            "(C) '坦白' 意味着承认或声明某人犯了罪或以某种方式有过失。" +
            "<br><br>" +
            "(D) '宣布' 意味着以庄重和强调的方式说某事。"
    },
    {
        id: 6,
        question: "The new voting laws threaten to __________ certain groups, preventing them from exercising their right to vote.",
        chinese_question: "新的投票法威胁到 __________ 某些群体，阻止他们行使投票权。",
        answers: [
            { option: "A", answer: "empower", chinese_answer: "赋权", chinese_romanization: "fù quán" },
            { option: "B", answer: "disenfranchise", chinese_answer: "剥夺选举权", chinese_romanization: "bōduó xuǎnjǔ quán" },
            { option: "C", answer: "include", chinese_answer: "包含", chinese_romanization: "bāohán" },
            { option: "D", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'disenfranchise' means deprive someone of the right to vote." +
            "<br><br>" +
            "(A) 'empower' means give someone the authority or power to do something." +
            "<br><br>" +
            "(C) 'include' means comprise or contain as part of a whole." +
            "<br><br>" +
            "(D) 'support' means bear all or part of the weight of; hold up.",
        chinese_explanation: "(B) '剥夺选举权' 一词意味着剥夺某人投票权。" +
            "<br><br>" +
            "(A) '赋权' 意味着给予某人权力或权力做某事。" +
            "<br><br>" +
            "(C) '包含' 意味着作为整体的一部分或全部。" +
            "<br><br>" +
            "(D) '支持' 意味着承受全部或部分重量；支撑。"
    },
    {
        id: 7,
        question: "During the interview, the candidate seemed to __________, avoiding a direct answer to the tricky question about his past employment.",
        chinese_question: "在面试中，候选人似乎 __________，避免直接回答关于他过去工作的棘手问题。",
        answers: [
            { option: "A", answer: "clarify", chinese_answer: "澄清", chinese_romanization: "chéngqīng" },
            { option: "B", answer: "prevaricate", chinese_answer: "含糊其辞", chinese_romanization: "hánhú qí cí" },
            { option: "C", answer: "confess", chinese_answer: "坦白", chinese_romanization: "tǎnbái" },
            { option: "D", answer: "declare", chinese_answer: "宣布", chinese_romanization: "xuānbù" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'prevaricate' means speak or act in an evasive way." +
            "<br><br>" +
            "(A) 'clarify' means make (a statement or situation) less confused and more comprehensible." +
            "<br><br>" +
            "(C) 'confess' means admit or state that one has committed a crime or is at fault in some way." +
            "<br><br>" +
            "(D) 'declare' means say something in a solemn and emphatic manner.",
        chinese_explanation: "(B) '含糊其辞' 一词意味着以一种回避的方式说话或行动。" +
            "<br><br>" +
            "(A) '澄清' 意味着使（声明或情况）不再混乱且更易理解。" +
            "<br><br>" +
            "(C) '坦白' 意味着承认或声明某人犯了罪或以某种方式有过失。" +
            "<br><br>" +
            "(D) '宣布' 意味着以庄重和强调的方式说某事。"
    },
    {
        id: 8,
        question: "The manager's harsh criticism served only to __________ the employees, creating a hostile work environment.",
        chinese_question: "经理的严厉批评只会 __________ 员工，创造出一个敌对的工作环境。",
        answers: [
            { option: "A", answer: "appease", chinese_answer: "平息", chinese_romanization: "píngxī" },
            { option: "B", answer: "antagonize", chinese_answer: "激怒", chinese_romanization: "jīnù" },
            { option: "C", answer: "motivate", chinese_answer: "激励", chinese_romanization: "jīlì" },
            { option: "D", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'antagonize' means cause someone to become hostile." +
            "<br><br>" +
            "(A) 'appease' means pacify or placate someone by acceding to their demands." +
            "<br><br>" +
            "(C) 'motivate' means provide someone with a reason for doing something." +
            "<br><br>" +
            "(D) 'support' means give assistance to.",
        chinese_explanation: "(B) '激怒' 一词意味着使某人变得敌对。" +
            "<br><br>" +
            "(A) '平息' 意味着通过答应某人的要求来安抚或抚慰。" +
            "<br><br>" +
            "(C) '激励' 意味着为某人提供做某事的理由。" +
            "<br><br>" +
            "(D) '支持' 意味着给予帮助。"
    },
    {
        id: 9,
        question: "The old documents were __________ to the archives for safekeeping, ensuring they would be preserved for future reference.",
        chinese_question: "旧文件被委托到档案馆保存，确保它们将被保存以供将来参考。",
        answers: [
            { option: "A", answer: "displayed", chinese_answer: "展示", chinese_romanization: "zhǎnshì" },
            { option: "B", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "C", answer: "destroyed", chinese_answer: "销毁", chinese_romanization: "xiāohuǐ" },
            { option: "D", answer: "consigned", chinese_answer: "委托", chinese_romanization: "wěituō" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'consign' means to send or deliver something to a person or place for sale, storage, or disposal." +
            "<br><br>" +
            "(A) 'displayed' means to put something in a prominent place for it to be seen." +
            "<br><br>" +
            "(B) 'ignored' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(C) 'destroyed' means to put an end to the existence of something.",
        chinese_explanation: "(D) '委托' 意思是将某物送到某人或某地进行出售、存储或处理。" +
            "<br><br>" +
            "(A) '展示' 意思是将某物放在显眼的地方让人看见。" +
            "<br><br>" +
            "(B) '忽视' 意思是拒绝注意或承认。" +
            "<br><br>" +
            "(C) '销毁' 意思是结束某物的存在。"
    },
    {
        id: 10,
        question: "The company was forced to __________ its illegal practices after being caught by the authorities.",
        chinese_question: "公司在被当局抓住后被迫 __________ 其非法行为。",
        answers: [
            { option: "A", answer: "commence", chinese_answer: "开始", chinese_romanization: "kāishǐ" },
            { option: "B", answer: "desist", chinese_answer: "停止", chinese_romanization: "tíngzhǐ" },
            { option: "C", answer: "continue", chinese_answer: "继续", chinese_romanization: "jìxù" },
            { option: "D", answer: "expand", chinese_answer: "扩展", chinese_romanization: "kuòzhǎn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'desist' means cease; abstain." +
            "<br><br>" +
            "(A) 'commence' means begin; start." +
            "<br><br>" +
            "(C) 'continue' means persist in an activity or process." +
            "<br><br>" +
            "(D) 'expand' means become or make larger or more extensive.",
        chinese_explanation: "(B) '停止' 一词意味着停止；戒除。" +
            "<br><br>" +
            "(A) '开始' 意味着开始；启动。" +
            "<br><br>" +
            "(C) '继续' 意味着坚持某项活动或过程。" +
            "<br><br>" +
            "(D) '扩展' 意味着变大或更广泛。"
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
