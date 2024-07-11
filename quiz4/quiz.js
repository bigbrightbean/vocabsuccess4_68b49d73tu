// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The politician's __________ response during the interview was refreshing, as he openly discussed both his achievements and his mistakes.",
        chinese_question: "这位政治家在采访中的 __________ 回应令人耳目一新，因为他坦率地讨论了自己的成就和错误。",
        answers: [
            { option: "A", answer: "candid", chinese_answer: "直率的", chinese_romanization: "zhíshuài de" },
            { option: "B", answer: "evasive", chinese_answer: "逃避的", chinese_romanization: "táobì de" },
            { option: "C", answer: "rehearsed", chinese_answer: "排练的", chinese_romanization: "páiliàn de" },
            { option: "D", answer: "insincere", chinese_answer: "不真诚的", chinese_romanization: "bù zhēnchéng de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'candid' means truthful and straightforward; frank." +
            "<br><br>" +
            "(B) 'evasive' means tending to avoid commitment or self-revelation, especially by responding only indirectly." +
            "<br><br>" +
            "(C) 'rehearsed' means practiced for presentation or performance." +
            "<br><br>" +
            "(D) 'insincere' means not expressing genuine feelings.",
        chinese_explanation: "(A) '直率的' 意味着真实而直率的；坦率的." +
            "<br><br>" +
            "(B) '逃避的' 意味着倾向于避免承诺或自我揭示的，尤其是通过只间接地回应." +
            "<br><br>" +
            "(C) '排练的' 意味着为演示或表演而进行的练习." +
            "<br><br>" +
            "(D) '不真诚的' 意味着不表达真挚感情的."
    },
    {
        id: 2,
        question: "Their relationship was __________, needing constant attention and care to maintain.",
        chinese_question: "他们的关系很__________，需要不断的关注和照顾才能维持。",
        answers: [
            { option: "A", answer: "sturdy", chinese_answer: "结实的", chinese_romanization: "jiēshi de" },
            { option: "B", answer: "delicate", chinese_answer: "精致的", chinese_romanization: "jīngzhì de" },
            { option: "C", answer: "rugged", chinese_answer: "粗糙的", chinese_romanization: "cūcāo de" },
            { option: "D", answer: "tough", chinese_answer: "坚韧的", chinese_romanization: "jiānrèn de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'delicate' means very fine in texture or structure; easily broken or damaged. Figuratively, it can mean requiring careful and sensitive handling." +
            "<br><br>" +
            "(A) 'sturdy' means strongly and solidly built." +
            "<br><br>" +
            "(C) 'rugged' means having a broken, rocky, and uneven surface." +
            "<br><br>" +
            "(D) 'tough' means strong enough to withstand adverse conditions or rough handling.",
        chinese_explanation: "(B) '精致的'一词意味着质地或结构非常精细的；容易破碎或损坏的。比喻地，它可以表示需要小心和敏感地处理。" +
            "<br><br>" +
            "(A) '结实的' 意味着坚固地建造的。" +
            "<br><br>" +
            "(C) '粗糙的' 意味着有破碎、岩石和不平的表面。" +
            "<br><br>" +
            "(D) '坚韧的' 意味着足够强大以承受恶劣条件或粗暴处理的。"
    },
    {
        id: 3,
        question: "Her __________ attempts to undermine her colleague's reputation eventually came to light.",
        chinese_question: "她 __________ 地企图破坏同事名誉的行为最终暴露了出来。",
        answers: [
            { option: "A", answer: "covert", chinese_answer: "秘密的", chinese_romanization: "mìmì de" },
            { option: "B", answer: "blatant", chinese_answer: "公然的", chinese_romanization: "gōngrán de" },
            { option: "C", answer: "transparent", chinese_answer: "透明的", chinese_romanization: "tòumíng de" },
            { option: "D", answer: "clear", chinese_answer: "清楚的", chinese_romanization: "qīngchǔ de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'covert' means not openly acknowledged or displayed." +
            "<br><br>" +
            "(B) 'blatant' means done openly and unashamedly." +
            "<br><br>" +
            "(C) 'transparent' means easy to perceive or detect." +
            "<br><br>" +
            "(D) 'clear' means easy to perceive, understand, or interpret.",
        chinese_explanation: "(A) '秘密的' 意味着不公开承认或展示的。" +
            "<br><br>" +
            "(B) '公然的' 意味着公开而毫不羞耻地进行的。" +
            "<br><br>" +
            "(C) '透明的' 意味着容易察觉或检测到的。" +
            "<br><br>" +
            "(D) '清楚的' 意味着容易察觉、理解或解释的。"
    },
    {
        id: 4,
        question: "His __________ vision for the company's future led to innovative changes that boosted profits.",
        chinese_question: "他对公司未来的 __________ 设想带来了创新的变革，提高了利润。",
        answers: [
            { option: "A", answer: "conservative", chinese_answer: "保守", chinese_romanization: "bǎoshǒu" },
            { option: "B", answer: "bold", chinese_answer: "大胆", chinese_romanization: "dàdǎn" },
            { option: "C", answer: "conventional", chinese_answer: "传统", chinese_romanization: "chuántǒng" },
            { option: "D", answer: "traditional", chinese_answer: "传统", chinese_romanization: "chuántǒng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'bold' means showing a willingness to take risks; confident and courageous." +
            "<br><br>" +
            "(A) 'conservative' means holding to traditional attitudes and values and cautious about change or innovation." +
            "<br><br>" +
            "(C) 'conventional' means based on or in accordance with what is generally done or believed." +
            "<br><br>" +
            "(D) 'traditional' means existing in or as part of a tradition; long-established.",
        chinese_explanation: "(B) '大胆' 意味着表现出愿意冒险；自信和勇敢。" +
            "<br><br>" +
            "(A) '保守' 意味着坚持传统态度和价值观，并对变革或创新持谨慎态度。" +
            "<br><br>" +
            "(C) '传统' 意味着根据或符合通常做或相信的。" +
            "<br><br>" +
            "(D) '传统' 意味着存在于或作为传统的一部分；长期建立的。"
    },
    {
        id: 5,
        question: "Despite the emotional nature of the meeting, she remained __________, carefully choosing her words and maintaining her composure.",
        chinese_question: "尽管会议情绪激动，她仍然保持 __________，谨慎选择用词并保持镇定。",
        answers: [
            { option: "A", answer: "spontaneous", chinese_answer: "自发", chinese_romanization: "zìfā" },
            { option: "B", answer: "restrained", chinese_answer: "克制", chinese_romanization: "kèzhì" },
            { option: "C", answer: "submissive", chinese_answer: "顺从", chinese_romanization: "shùncóng" },
            { option: "D", answer: "sagacious", chinese_answer: "睿智", chinese_romanization: "ruìzhì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'restrained' means characterized by reserve or moderation; unemotional or dispassionate." +
            "<br><br>" +
            "(A) 'spontaneous' means performed or occurring as a result of a sudden inner impulse or inclination and without premeditation." +
            "<br><br>" +
            "(C) 'submissive' means ready to conform to the authority or will of others." +
            "<br><br>" +
            "(D) 'sagacious' means having or showing keen mental discernment and good judgment; wise.",
        chinese_explanation: "(B) '克制' 意味着以保留或适度为特征；无动于衷或冷静。" +
            "<br><br>" +
            "(A) '自发' 意味着因内心冲动或倾向而突然进行或发生的。" +
            "<br><br>" +
            "(C) '顺从' 意味着准备服从他人的权威或意愿。" +
            "<br><br>" +
            "(D) '睿智' 意味着具有或表现出敏锐的判断力和良好的判断力；明智的。"
    },
    {
        id: 6,
        question: "The firefighters responded quickly to the __________ call, knowing lives were at stake.",
        chinese_question: "消防员迅速响应了 __________ 呼救，因为他们知道生命岌岌可危。",
        answers: [
            { option: "A", answer: "routine", chinese_answer: "常规的", chinese_romanization: "chángguī de" },
            { option: "B", answer: "unimportant", chinese_answer: "不重要的", chinese_romanization: "bù zhòngyào de" },
            { option: "C", answer: "casual", chinese_answer: "随便的", chinese_romanization: "suíbiàn de" },
            { option: "D", answer: "exigent", chinese_answer: "紧急的", chinese_romanization: "jǐnjí de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'exigent' means requiring immediate attention or action." +
            "<br><br>" +
            "(A) 'routine' means performed as part of a regular procedure rather than for a special reason." +
            "<br><br>" +
            "(B) 'unimportant' means lacking in significance or value." +
            "<br><br>" +
            "(C) 'casual' means relaxed and unconcerned.",
        chinese_explanation: "(D) '紧急的' 意味着需要立即关注或采取行动。" +
            "<br><br>" +
            "(A) '常规的' 意味着作为常规程序的一部分而不是出于特殊原因执行的。" +
            "<br><br>" +
            "(B) '不重要的' 意味着缺乏意义或价值的。" +
            "<br><br>" +
            "(C) '随便的' 意味着放松和不关心的。"
    },
    {
        id: 7,
        question: "The politician's __________ comments during the debate did little to convince the audience of his capabilities.",
        chinese_question: "政治家在辩论中的 __________ 评论几乎没有让观众信服他的能力。",
        answers: [
            { option: "A", answer: "thoughtful", chinese_answer: "深思熟虑的", chinese_romanization: "shēnsī shúlǜ de" },
            { option: "B", answer: "rational", chinese_answer: "理性的", chinese_romanization: "lǐxìng de" },
            { option: "C", answer: "insightful", chinese_answer: "有见地的", chinese_romanization: "yǒu jiàndì de" },
            { option: "D", answer: "fatuous", chinese_answer: "愚蠢的", chinese_romanization: "yúchǔn de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'fatuous' means silly and pointless." +
            "<br><br>" +
            "(A) 'thoughtful' means showing consideration for the needs of other people." +
            "<br><br>" +
            "(B) 'rational' means based on or in accordance with reason or logic." +
            "<br><br>" +
            "(C) 'insightful' means having or showing an accurate and deep understanding.",
        chinese_explanation: "(D) '愚蠢的' 意味着愚蠢和无意义的。" +
            "<br><br>" +
            "(A) '深思熟虑的' 意味着考虑到他人的需求。" +
            "<br><br>" +
            "(B) '理性的' 意味着基于或符合理由或逻辑的。" +
            "<br><br>" +
            "(C) '有见地的' 意味着具有或显示出准确和深刻的理解。"
    },
    {
        id: 8,
        question: "His __________ nature often got him into trouble because he never sugarcoated the truth.",
        chinese_question: "他的 __________ 性格经常让他陷入困境，因为他从不粉饰真相。",
        answers: [
            { option: "A", answer: "candid", chinese_answer: "直率的", chinese_romanization: "zhíshuài de" },
            { option: "B", answer: "secretive", chinese_answer: "秘密的", chinese_romanization: "mìmì de" },
            { option: "C", answer: "deceptive", chinese_answer: "欺骗的", chinese_romanization: "qīpiàn de" },
            { option: "D", answer: "ambiguous", chinese_answer: "模棱两可的", chinese_romanization: "móléng liǎng kě de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'candid' metaphorically means being honest and direct." +
            "<br><br>" +
            "(B) 'secretive' means inclined to conceal feelings and intentions or not to disclose information." +
            "<br><br>" +
            "(C) 'deceptive' means giving an appearance or impression different from the true one; misleading." +
            "<br><br>" +
            "(D) 'ambiguous' means open to more than one interpretation; having a double meaning.",
        chinese_explanation: "(A) '直率的' 比喻诚实和直接。" +
            "<br><br>" +
            "(B) '秘密的' 意味着倾向于隐藏感情和意图或不披露信息。" +
            "<br><br>" +
            "(C) '欺骗的' 意味着给人一种不同于真实情况的外观或印象；误导的。" +
            "<br><br>" +
            "(D) '模棱两可的' 意味着有多种解释的；具有双重含义的。"
    },
    {
        id: 9,
        question: "She was too __________ to recognize the hidden agenda in his words.",
        chinese_question: "她太 __________ 以至于没有看出他话中的隐含意图。",
        answers: [
            { option: "A", answer: "discerning", chinese_answer: "有眼力的", chinese_romanization: "yǒu yǎnlì de" },
            { option: "B", answer: "gullible", chinese_answer: "轻信的", chinese_romanization: "qīngxìn de" },
            { option: "C", answer: "astute", chinese_answer: "精明的", chinese_romanization: "jīngmíng de" },
            { option: "D", answer: "perceptive", chinese_answer: "敏锐的", chinese_romanization: "mǐnruì de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'gullible' metaphorically means easily deceived or tricked." +
            "<br><br>" +
            "(A) 'discerning' means having or showing good judgment." +
            "<br><br>" +
            "(C) 'astute' means having or showing an ability to accurately assess situations or people and turn this to one's advantage." +
            "<br><br>" +
            "(D) 'perceptive' means having or showing sensitive insight.",
        chinese_explanation: "(B) '轻信的' 比喻容易被欺骗或戏弄的。" +
            "<br><br>" +
            "(A) '有眼力的' 意味着具有或表现出良好的判断力的。" +
            "<br><br>" +
            "(C) '精明的' 意味着具有或表现出准确评估情况或人的能力，并将其转为自己的优势。" +
            "<br><br>" +
            "(D) '敏锐的' 意味着具有或表现出敏锐的洞察力。"
    },
    {
        id: 10,
        question: "His mind was __________ with new ideas after the inspiring lecture.",
        chinese_question: "在启发性的讲座后，他的脑海里充满了新的想法。",
        answers: [
            { option: "A", answer: "active", chinese_answer: "活跃的", chinese_romanization: "huóyuè de" },
            { option: "B", answer: "dormant", chinese_answer: "休眠的", chinese_romanization: "xiūmián de" },
            { option: "C", answer: "dull", chinese_answer: "无聊的", chinese_romanization: "wúliáo de" },
            { option: "D", answer: "blank", chinese_answer: "空白的", chinese_romanization: "kōngbái de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'active' metaphorically means full of activity or engaged in action." +
            "<br><br>" +
            "(B) 'dormant' means temporarily inactive or inoperative." +
            "<br><br>" +
            "(C) 'dull' means lacking interest or excitement." +
            "<br><br>" +
            "(D) 'blank' means showing no interest, emotion, or activity.",
        chinese_explanation: "(A) '活跃的' 比喻充满活动或参与行动。" +
            "<br><br>" +
            "(B) '休眠的' 意味着暂时不活动或不运作。" +
            "<br><br>" +
            "(C) '无聊的' 意味着缺乏兴趣或兴奋。" +
            "<br><br>" +
            "(D) '空白的' 意味着没有显示出兴趣、情感或活动。"
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
