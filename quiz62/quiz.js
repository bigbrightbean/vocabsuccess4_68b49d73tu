// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The monk's __________ of worldly pleasures demonstrated his commitment to a life of spiritual discipline.",
        chinese_question: "僧侣对世俗享乐的 __________ 展示了他对精神纪律生活的承诺。",
        answers: [
            { option: "A", answer: "indulgence", chinese_answer: "放纵", chinese_romanization: "fàngzòng" },
            { option: "B", answer: "abnegation", chinese_answer: "放弃", chinese_romanization: "fàngqì" },
            { option: "C", answer: "acceptance", chinese_answer: "接受", chinese_romanization: "jiēshòu" },
            { option: "D", answer: "enjoyment", chinese_answer: "享受", chinese_romanization: "xiǎngshòu" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'abnegation' means the act of renouncing or rejecting something." +
            "<br><br>" +
            "(A) 'indulgence' means the action or fact of indulging." +
            "<br><br>" +
            "(C) 'acceptance' means the action of consenting to receive or undertake something offered." +
            "<br><br>" +
            "(D) 'enjoyment' means the state or process of taking pleasure in something.",
        chinese_explanation: "(B) '放弃' 一词意味着放弃或拒绝某事的行为。" +
            "<br><br>" +
            "(A) '放纵' 意味着放纵的行为或事实。" +
            "<br><br>" +
            "(C) '接受' 意味着同意接受或承担所提供的某物的行为。" +
            "<br><br>" +
            "(D) '享受' 意味着从某事中获得快乐的状态或过程。"
    },
    {
        id: 2,
        question: "The charity's __________ allowed the community center to expand its services and reach more people in need.",
        chinese_question: "慈善机构的 __________ 使社区中心能够扩大其服务，并帮助更多有需要的人。",
        answers: [
            { option: "A", answer: "stinginess", chinese_answer: "吝啬", chinese_romanization: "lìnsè" },
            { option: "B", answer: "largesse", chinese_answer: "慷慨", chinese_romanization: "kāngkǎi" },
            { option: "C", answer: "thriftiness", chinese_answer: "节俭", chinese_romanization: "jiéjiǎn" },
            { option: "D", answer: "parsimony", chinese_answer: "吝啬", chinese_romanization: "lìnsè" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'largesse' means generosity in bestowing money or gifts upon others." +
            "<br><br>" +
            "(A) 'stinginess' means unwillingness to spend money; meanness." +
            "<br><br>" +
            "(C) 'thriftiness' means the quality of using money and other resources carefully and not wastefully." +
            "<br><br>" +
            "(D) 'parsimony' means extreme unwillingness to spend money or use resources.",
        chinese_explanation: "(B) '慷慨' 一词意味着在赠送金钱或礼物时的慷慨大方。" +
            "<br><br>" +
            "(A) '吝啬' 意味着不愿花钱；小气。" +
            "<br><br>" +
            "(C) '节俭' 意味着谨慎使用金钱和其他资源，不浪费。" +
            "<br><br>" +
            "(D) '吝啬' 意味着极不愿意花钱或使用资源。"
    },
    {
        id: 3,
        question: "The treasurer's careful __________ of funds ensured the project stayed within budget.",
        chinese_question: "财务主管对资金的仔细 __________ 确保了项目在预算范围内。",
        answers: [
            { option: "A", answer: "neglect", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "B", answer: "hoarding", chinese_answer: "囤积", chinese_romanization: "túnjī" },
            { option: "C", answer: "disbursement", chinese_answer: "分配", chinese_romanization: "fēnpèi" },
            { option: "D", answer: "reservation", chinese_answer: "保留", chinese_romanization: "bǎoliú" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'disbursement' figuratively means the giving out or distribution of something, such as time or effort." +
            "<br><br>" +
            "(A) 'neglect' means fail to care for properly." +
            "<br><br>" +
            "(B) 'hoarding' means accumulate (money or valued objects) and hide or store away." +
            "<br><br>" +
            "(D) 'reservation' means an arrangement whereby something, especially a seat or room, is booked or reserved for a particular person.",
        chinese_explanation: "(C) '分配' 在比喻意义上意味着分配或分发某物，如时间或努力。" +
            "<br><br>" +
            "(A) '忽视' 意味着未能适当照顾。" +
            "<br><br>" +
            "(B) '囤积' 意味着积累（金钱或有价值的物品）并隐藏或储藏起来。" +
            "<br><br>" +
            "(D) '保留' 意味着安排某物，特别是座位或房间，为特定的人预订或保留。"
    },
    {
        id: 4,
        question: "His __________ in the business world was marked by his ability to make influential decisions and lead effectively.",
        chinese_question: "他在商业世界的 __________ 以他做出有影响力的决定和有效领导的能力为标志。",
        answers: [
            { option: "A", answer: "insignificance", chinese_answer: "无关紧要", chinese_romanization: "wúguān jǐnyào" },
            { option: "B", answer: "dominance", chinese_answer: "统治地位", chinese_romanization: "tǒngzhì dìwèi" },
            { option: "C", answer: "passivity", chinese_answer: "被动", chinese_romanization: "bèidòng" },
            { option: "D", answer: "subordination", chinese_answer: "从属", chinese_romanization: "cóngshǔ" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'dominance' figuratively means a position of power and influence." +
            "<br><br>" +
            "(A) 'insignificance' means the quality of being too small or unimportant to be worth consideration." +
            "<br><br>" +
            "(C) 'passivity' means acceptance of what happens, without active response or resistance." +
            "<br><br>" +
            "(D) 'subordination' means the act of placing in a lower rank or position.",
        chinese_explanation: "(B) '统治地位' 在比喻意义上意味着权力和影响力的地位。" +
            "<br><br>" +
            "(A) '无关紧要' 意味着太小或不重要而不值得考虑的品质。" +
            "<br><br>" +
            "(C) '被动' 意味着接受发生的事情，不主动回应或抵抗。" +
            "<br><br>" +
            "(D) '从属' 意味着放在较低等级或位置的行为。"
    },
    {
        id: 5,
        question: "He was a master __________ in the office, navigating the complex dynamics of workplace politics with ease.",
        chinese_question: "他是办公室的 __________，轻松驾驭复杂的职场政治动态。",
        answers: [
            { option: "A", answer: "amateur", chinese_answer: "业余者", chinese_romanization: "yèyú zhě" },
            { option: "B", answer: "politician", chinese_answer: "政客", chinese_romanization: "zhèngkè" },
            { option: "C", answer: "novice", chinese_answer: "新手", chinese_romanization: "xīnshǒu" },
            { option: "D", answer: "outsider", chinese_answer: "外人", chinese_romanization: "wàirén" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'politician' figuratively means a person who is skilled in dealing with complex or sensitive situations." +
            "<br><br>" +
            "(A) 'amateur' means a person who engages in a pursuit, especially a sport, on an unpaid basis." +
            "<br><br>" +
            "(C) 'novice' means a person new to and inexperienced in a job or situation." +
            "<br><br>" +
            "(D) 'outsider' means a person who does not belong to a particular group.",
        chinese_explanation: "(B) '政客' 在比喻意义上意味着擅长处理复杂或敏感情况的人。" +
            "<br><br>" +
            "(A) '业余者' 意味着以无偿方式从事某项追求，尤其是体育活动的人。" +
            "<br><br>" +
            "(C) '新手' 意味着对工作或情况不熟悉且缺乏经验的人。" +
            "<br><br>" +
            "(D) '外人' 意味着不属于某一特定群体的人。"
    },
    {
        id: 6,
        question: "Despite his success, he still feels like an __________ in the world of business.",
        chinese_question: "尽管他很成功，但在商业世界里，他仍觉得自己像个 __________。",
        answers: [
            { option: "A", answer: "amateur", chinese_answer: "新手", chinese_romanization: "xīnshǒu" },
            { option: "B", answer: "professional", chinese_answer: "专业", chinese_romanization: "zhuānyè" },
            { option: "C", answer: "veteran", chinese_answer: "老手", chinese_romanization: "lǎoshǒu" },
            { option: "D", answer: "expert", chinese_answer: "专家", chinese_romanization: "zhuānjiā" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'amateur' metaphorically means someone who feels inexperienced or not fully competent." +
            "<br><br>" +
            "(B) 'professional' means someone skilled and paid for their work." +
            "<br><br>" +
            "(C) 'veteran' means someone with a lot of experience." +
            "<br><br>" +
            "(D) 'expert' means someone with a high level of knowledge or skill.",
        chinese_explanation: "(A) '新手' 比喻感觉没有经验或不完全胜任的人。" +
            "<br><br>" +
            "(B) '专业' 意味着有技能并为工作获得报酬的人。" +
            "<br><br>" +
            "(C) '老手' 意味着有丰富经验的人。" +
            "<br><br>" +
            "(D) '专家' 意味着具有高水平知识或技能的人。"
    },
    {
        id: 7,
        question: "After a long, stressful day, her home became a __________ where she could relax and recharge.",
        chinese_question: "在漫长而紧张的一天之后，她的家成了一个 __________，她可以放松和恢复精力。",
        answers: [
            { option: "A", answer: "battlefield", chinese_answer: "战场", chinese_romanization: "zhànchǎng" },
            { option: "B", answer: "sanctuary", chinese_answer: "避难所", chinese_romanization: "bìnán suǒ" },
            { option: "C", answer: "obstacle", chinese_answer: "障碍", chinese_romanization: "zhàng'ài" },
            { option: "D", answer: "nuisance", chinese_answer: "麻烦", chinese_romanization: "máfan" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'sanctuary' figuratively means a place of peace and safety." +
            "<br><br>" +
            "(A) 'battlefield' means the piece of ground on which a battle is or was fought." +
            "<br><br>" +
            "(C) 'obstacle' means a thing that blocks one's way or prevents or hinders progress." +
            "<br><br>" +
            "(D) 'nuisance' means a person, thing, or circumstance causing inconvenience or annoyance.",
        chinese_explanation: "(B) '避难所' 在比喻意义上意味着和平和安全的地方。" +
            "<br><br>" +
            "(A) '战场' 意味着战斗正在或曾经进行的那片土地。" +
            "<br><br>" +
            "(C) '障碍' 意味着阻挡道路或阻碍进步的东西。" +
            "<br><br>" +
            "(D) '麻烦' 意味着引起不便或烦恼的人、事或情况。"
    },
    {
        id: 8,
        question: "His personal __________ against injustice inspired many to join his cause.",
        chinese_question: "他个人对抗不公正的 __________ 激励了许多人加入他的事业。",
        answers: [
            { option: "A", answer: "crusade", chinese_answer: "运动", chinese_romanization: "yùndòng" },
            { option: "B", answer: "hobby", chinese_answer: "爱好", chinese_romanization: "àihào" },
            { option: "C", answer: "pastime", chinese_answer: "消遣", chinese_romanization: "xiāoqiǎn" },
            { option: "D", answer: "indifference", chinese_answer: "冷漠", chinese_romanization: "lěngmò" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'crusade' metaphorically means a dedicated and passionate campaign." +
            "<br><br>" +
            "(B) 'hobby' means an activity done regularly in one's leisure time for pleasure." +
            "<br><br>" +
            "(C) 'pastime' means an activity that someone does regularly for enjoyment rather than work; a hobby." +
            "<br><br>" +
            "(D) 'indifference' means lack of interest, concern, or sympathy.",
        chinese_explanation: "(A) '运动' 比喻一种专注且充满热情的运动。" +
            "<br><br>" +
            "(B) '爱好' 意味着在闲暇时间定期进行的活动，以获得乐趣。" +
            "<br><br>" +
            "(C) '消遣' 意味着某人为了享受而定期做的活动，而不是工作；一种爱好。" +
            "<br><br>" +
            "(D) '冷漠' 意味着缺乏兴趣、关注或同情心。"
    },
    {
        id: 9,
        question: "There was a sense of __________ as the team prepared for the final match, knowing it would be a tough game.",
        chinese_question: "在为最后一场比赛做准备时，团队感到了一种 __________，知道这将是一场艰难的比赛。",
        answers: [
            { option: "A", answer: "foreboding", chinese_answer: "不祥的预感", chinese_romanization: "bùxiáng de yùgǎn" },
            { option: "B", answer: "confidence", chinese_answer: "自信", chinese_romanization: "zìxìn" },
            { option: "C", answer: "anticipation", chinese_answer: "期待", chinese_romanization: "qídài" },
            { option: "D", answer: "indifference", chinese_answer: "冷漠", chinese_romanization: "lěngmò" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'foreboding' metaphorically means a feeling that something bad will happen." +
            "<br><br>" +
            "(B) 'confidence' means the feeling or belief that one can rely on someone or something; firm trust." +
            "<br><br>" +
            "(C) 'anticipation' means the action of anticipating something; expectation or prediction." +
            "<br><br>" +
            "(D) 'indifference' means lack of interest, concern, or sympathy.",
        chinese_explanation: "(A) '不祥的预感' 比喻一种觉得会发生不好的事情的感觉。" +
            "<br><br>" +
            "(B) '自信' 意味着对某人或某事的信任或信赖的感觉或信念；坚定的信任。" +
            "<br><br>" +
            "(C) '期待' 意味着预期某事的行为；期待或预测。" +
            "<br><br>" +
            "(D) '冷漠' 意味着缺乏兴趣、关心或同情心。"
    },
    {
        id: 10,
        question: "There is a __________ of information available online, making it hard to discern what is true.",
        chinese_question: "网上有大量的信息，难以辨别哪些是真实的。",
        answers: [
            { option: "A", answer: "glut", chinese_answer: "过剩", chinese_romanization: "guòshèng" },
            { option: "B", answer: "dearth", chinese_answer: "缺乏", chinese_romanization: "quēfá" },
            { option: "C", answer: "insufficiency", chinese_answer: "不足", chinese_romanization: "bùzú" },
            { option: "D", answer: "absence", chinese_answer: "缺席", chinese_romanization: "quēxí" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'glut' metaphorically means an overwhelming abundance." +
            "<br><br>" +
            "(B) 'dearth' means a scarcity or lack of something." +
            "<br><br>" +
            "(C) 'insufficiency' means the condition of being insufficient." +
            "<br><br>" +
            "(D) 'absence' means the state of being away from a place or person.",
        chinese_explanation: "(A) '过剩' 比喻令人不知所措的大量。" +
            "<br><br>" +
            "(B) '缺乏' 意味着某物的稀缺或缺乏。" +
            "<br><br>" +
            "(C) '不足' 意味着不充足的状态。" +
            "<br><br>" +
            "(D) '缺席' 意味着离开某个地方或某人的状态。"
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
