// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "With her extensive experience and knowledge, she is __________ of handling any challenge that comes her way.",
        chinese_question: "凭借丰富的经验和知识，她 __________ 处理任何迎面而来的挑战。",
        answers: [
            { option: "A", answer: "capable", chinese_answer: "能干", chinese_romanization: "nénggàn" },
            { option: "B", answer: "unfit", chinese_answer: "不适合", chinese_romanization: "bù shìhé" },
            { option: "C", answer: "inadequate", chinese_answer: "不足", chinese_romanization: "bùzú" },
            { option: "D", answer: "incapable", chinese_answer: "无能", chinese_romanization: "wúnéng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'capable' means having the ability, fitness, or quality necessary to do or achieve a specified thing." +
            "<br><br>" +
            "(B) 'unfit' means not of the necessary quality or standard to meet a particular purpose." +
            "<br><br>" +
            "(C) 'inadequate' means lacking the quality or quantity required; insufficient for a purpose." +
            "<br><br>" +
            "(D) 'incapable' means unable to do or achieve (something).",
        chinese_explanation: "(A) '能干' 意味着具有必要的能力、适应性或质量来做或实现特定事情。" +
            "<br><br>" +
            "(B) '不适合' 意味着没有必要的质量或标准来满足特定目的的。" +
            "<br><br>" +
            "(C) '不足' 意味着缺乏所需的质量或数量；不足以达到某一目的的。" +
            "<br><br>" +
            "(D) '无能' 意味着不能做或实现（某事）。"
    },
    {
        id: 2,
        question: "After the company went bankrupt, he found himself __________ of hope and direction.",
        chinese_question: "公司破产后，他发现自己 __________，失去了希望和方向。",
        answers: [
            { option: "A", answer: "full", chinese_answer: "充满", chinese_romanization: "chōngmǎn" },
            { option: "B", answer: "confident", chinese_answer: "自信", chinese_romanization: "zìxìn" },
            { option: "C", answer: "secure", chinese_answer: "安全", chinese_romanization: "ānquán" },
            { option: "D", answer: "destitute", chinese_answer: "绝望", chinese_romanization: "juéwàng" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'destitute' means lacking something needed or desirable." +
            "<br><br>" +
            "(A) 'full' means containing or holding as much or as many as possible." +
            "<br><br>" +
            "(B) 'confident' means feeling or showing confidence in oneself; self-assured." +
            "<br><br>" +
            "(C) 'secure' means fixed or fastened so as not to give way, become loose, or be lost.",
        chinese_explanation: "(D) '绝望' 意味着缺乏所需或可取的东西。" +
            "<br><br>" +
            "(A) '充满' 意味着尽可能多地容纳或装载。" +
            "<br><br>" +
            "(B) '自信' 意味着对自己有信心；自信。" +
            "<br><br>" +
            "(C) '安全' 意味着固定或固定好，以免松动、丢失或丢失。"
    },
    {
        id: 3,
        question: "The hotel's lobby was decorated in a __________ style, with cheap materials made to look flashy and luxurious.",
        chinese_question: "酒店的大堂装饰得很 __________，用廉价的材料装饰得很华丽和豪华。",
        answers: [
            { option: "A", answer: "elegant", chinese_answer: "优雅的", chinese_romanization: "yōuyǎ de" },
            { option: "B", answer: "subtle", chinese_answer: "微妙的", chinese_romanization: "wēimiào de" },
            { option: "C", answer: "genuine", chinese_answer: "真诚的", chinese_romanization: "zhēnchéng de" },
            { option: "D", answer: "meretricious", chinese_answer: "华而不实的", chinese_romanization: "huá'érbùshí de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'meretricious' means apparently attractive but having no real value." +
            "<br><br>" +
            "(A) 'elegant' means graceful and stylish in appearance or manner." +
            "<br><br>" +
            "(B) 'subtle' means delicate or precise as to be difficult to analyze or describe." +
            "<br><br>" +
            "(C) 'genuine' means truly what something is said to be; authentic.",
        chinese_explanation: "(D) '华而不实的' 意味着表面上吸引人但没有实际价值的。" +
            "<br><br>" +
            "(A) '优雅的' 意味着外观或举止优美而时尚的。" +
            "<br><br>" +
            "(B) '微妙的' 意味着精致或精确以至于难以分析或描述的。" +
            "<br><br>" +
            "(C) '真诚的' 意味着真正的东西；真实的。"
    },
    {
        id: 4,
        question: "As an __________ reader, she would finish at least one book a week, regardless of her busy schedule.",
        chinese_question: "作为一个 __________ 的读者，她每周至少读完一本书，无论她的日程多么忙碌。",
        answers: [
            { option: "A", answer: "casual", chinese_answer: "随便的", chinese_romanization: "suíbiàn de" },
            { option: "B", answer: "indifferent", chinese_answer: "冷漠的", chinese_romanization: "lěngmò de" },
            { option: "C", answer: "occasional", chinese_answer: "偶尔的", chinese_romanization: "ǒu'ěr de" },
            { option: "D", answer: "inveterate", chinese_answer: "根深蒂固的", chinese_romanization: "gēnshēndìgù de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'inveterate' means having a particular habit, activity, or interest that is long-established and unlikely to change." +
            "<br><br>" +
            "(A) 'casual' means relaxed and unconcerned." +
            "<br><br>" +
            "(B) 'indifferent' means having no particular interest or sympathy; unconcerned." +
            "<br><br>" +
            "(C) 'occasional' means occurring or done infrequently and irregularly.",
        chinese_explanation: "(D) '根深蒂固的' 意味着有某种长期形成且不太可能改变的习惯、活动或兴趣。" +
            "<br><br>" +
            "(A) '随便的' 意味着放松和不关心的。" +
            "<br><br>" +
            "(B) '冷漠的' 意味着没有特别的兴趣或同情；不关心的。" +
            "<br><br>" +
            "(C) '偶尔的' 意味着不经常和不规律地发生或完成的。"
    },
    {
        id: 5,
        question: "She is very __________ in her community, organizing events and helping others.",
        chinese_question: "她在社区中非常 __________，组织活动并帮助他人。",
        answers: [
            { option: "A", answer: "active", chinese_answer: "积极的", chinese_romanization: "jījí de" },
            { option: "B", answer: "indifferent", chinese_answer: "冷漠的", chinese_romanization: "lěngmò de" },
            { option: "C", answer: "detached", chinese_answer: "分离的", chinese_romanization: "fēnlí de" },
            { option: "D", answer: "aloof", chinese_answer: "冷淡的", chinese_romanization: "lěngdàn de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'active' metaphorically means involved in or participating in activities." +
            "<br><br>" +
            "(B) 'indifferent' means having no particular interest or sympathy; unconcerned." +
            "<br><br>" +
            "(C) 'detached' means separate or disconnected." +
            "<br><br>" +
            "(D) 'aloof' means not friendly or forthcoming; cool and distant.",
        chinese_explanation: "(A) '积极的' 比喻参与或参与活动。" +
            "<br><br>" +
            "(B) '冷漠的' 意味着没有特别的兴趣或同情；不关心。" +
            "<br><br>" +
            "(C) '分离的' 意味着分离或断开的。" +
            "<br><br>" +
            "(D) '冷淡的' 意味着不友好或不乐意；冷漠的。"
    },
    {
        id: 6,
        question: "In her garden, she created a __________ version of a traditional Japanese landscape.",
        chinese_question: "在她的花园里，她创造了一个传统日本景观的 __________ 版本。",
        answers: [
            { option: "A", answer: "miniature", chinese_answer: "微型", chinese_romanization: "wēixíng" },
            { option: "B", answer: "colossal", chinese_answer: "巨大", chinese_romanization: "jùdà" },
            { option: "C", answer: "extensive", chinese_answer: "广泛", chinese_romanization: "guǎngfàn" },
            { option: "D", answer: "vast", chinese_answer: "广阔", chinese_romanization: "guǎngkuò" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'miniature' metaphorically means a very small or reduced version of something." +
            "<br><br>" +
            "(B) 'colossal' means extremely large or great." +
            "<br><br>" +
            "(C) 'extensive' means covering or affecting a large area." +
            "<br><br>" +
            "(D) 'vast' means of very great extent or quantity; immense.",
        chinese_explanation: "(A) '微型' 比喻某物的非常小或缩小的版本。" +
            "<br><br>" +
            "(B) '巨大' 意味着非常大的或伟大的。" +
            "<br><br>" +
            "(C) '广泛' 意味着覆盖或影响大面积。" +
            "<br><br>" +
            "(D) '广阔' 意味着非常大的范围或数量；广阔的。"
    },
    {
        id: 7,
        question: "The __________ reason for the trip was business, but they also planned to visit some tourist attractions.",
        chinese_question: "这次旅行的 __________ 原因是出差，但他们也计划参观一些旅游景点。",
        answers: [
            { option: "A", answer: "real", chinese_answer: "真实的", chinese_romanization: "zhēnshí de" },
            { option: "B", answer: "secret", chinese_answer: "秘密的", chinese_romanization: "mìmì de" },
            { option: "C", answer: "unplanned", chinese_answer: "未计划的", chinese_romanization: "wèi jìhuà de" },
            { option: "D", answer: "ostensible", chinese_answer: "表面的", chinese_romanization: "biǎomiàn de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'ostensible' means stated or appearing to be true, but not necessarily so." +
            "<br><br>" +
            "(A) 'real' means actually existing as a thing or occurring in fact; not imagined or supposed." +
            "<br><br>" +
            "(B) 'secret' means not known or seen or not meant to be known or seen by others." +
            "<br><br>" +
            "(C) 'unplanned' means not planned.",
        chinese_explanation: "(D) '表面的' 意味着陈述的或看起来是真的，但不一定如此。" +
            "<br><br>" +
            "(A) '真实的' 意味着实际存在的事物或事实发生的；不是想象或假设的。" +
            "<br><br>" +
            "(B) '秘密的' 意味着别人不知道或看不到或不打算让别人知道或看到的。" +
            "<br><br>" +
            "(C) '未计划的' 意味着没有计划的。"
    },
    {
        id: 8,
        question: "The situation turned out to be __________ when they realized the mix-up was due to a simple mistake.",
        chinese_question: "当他们意识到混乱是由于一个简单的错误时，情况变得非常 __________。",
        answers: [
            { option: "A", answer: "hilarious", chinese_answer: "有趣", chinese_romanization: "yǒuqù" },
            { option: "B", answer: "tragic", chinese_answer: "悲惨", chinese_romanization: "bēicǎn" },
            { option: "C", answer: "severe", chinese_answer: "严重", chinese_romanization: "yánzhòng" },
            { option: "D", answer: "critical", chinese_answer: "批评", chinese_romanization: "pīpíng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'hilarious' metaphorically means very funny or amusing." +
            "<br><br>" +
            "(B) 'tragic' means causing or characterized by extreme distress or sorrow." +
            "<br><br>" +
            "(C) 'severe' means (of something bad or undesirable) very great; intense." +
            "<br><br>" +
            "(D) 'critical' means expressing adverse or disapproving comments or judgments.",
        chinese_explanation: "(A) '有趣' 比喻非常有趣或好笑。" +
            "<br><br>" +
            "(B) '悲惨' 意味着造成或以极度痛苦或悲伤为特征。" +
            "<br><br>" +
            "(C) '严重' 意味着（坏的或不希望的事情）非常大的；强烈的。" +
            "<br><br>" +
            "(D) '批评' 意味着表示不赞成的评论或判断。"
}
    ,
    {
        id: 9,
        question: "Her __________ colleague constantly offered unsolicited advice on how she should do her job, which became quite irritating.",
        chinese_question: "她那个 __________ 的同事不断给她提供不请自来的工作建议，这让人很恼火。",
        answers: [
            { option: "A", answer: "cooperative", chinese_answer: "合作的", chinese_romanization: "hézuò de" },
            { option: "B", answer: "indifferent", chinese_answer: "冷漠的", chinese_romanization: "lěngmò de" },
            { option: "C", answer: "discreet", chinese_answer: "谨慎的", chinese_romanization: "jǐnshèn de" },
            { option: "D", answer: "officious", chinese_answer: "多管闲事的", chinese_romanization: "duōguǎnxiánshì de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'officious' means assertive of authority in an annoyingly domineering way, especially with regard to petty or trivial matters." +
            "<br><br>" +
            "(A) 'cooperative' means involving mutual assistance in working towards a common goal." +
            "<br><br>" +
            "(B) 'indifferent' means having no particular interest or sympathy; unconcerned." +
            "<br><br>" +
            "(C) 'discreet' means careful and circumspect in one's speech or actions.",
        chinese_explanation: "(D) '多管闲事的' 意味着以一种令人恼火的专横方式行使权威，尤其是在琐碎或微不足道的事情上。" +
            "<br><br>" +
            "(A) '合作的' 意味着在朝着共同目标努力时提供相互帮助的。" +
            "<br><br>" +
            "(B) '冷漠的' 意味着没有特别的兴趣或同情；不关心的。" +
            "<br><br>" +
            "(C) '谨慎的' 意味着在言语或行动上小心和谨慎的。"
    },
    {
        id: 10,
        question: "His __________ laugh could be heard across the room, filling it with warmth.",
        chinese_question: "他__________的笑声传遍了整个房间，充满了温暖。",
        answers: [
            { option: "A", answer: "light", chinese_answer: "轻的", chinese_romanization: "qīng de" },
            { option: "B", answer: "hearty", chinese_answer: "热情的", chinese_romanization: "rèqíng de" },
            { option: "C", answer: "minimal", chinese_answer: "极少的", chinese_romanization: "jíshǎo de" },
            { option: "D", answer: "small", chinese_answer: "小的", chinese_romanization: "xiǎo de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'hearty' means (of food) wholesome and substantial. Figuratively, it can mean warm, strong, and enthusiastic." +
            "<br><br>" +
            "(A) 'light' means not heavy or intense." +
            "<br><br>" +
            "(C) 'minimal' means of a minimum amount, quantity, or degree; negligible." +
            "<br><br>" +
            "(D) 'small' means of a size that is less than normal or usual.",
        chinese_explanation: "(B) '热情的'一词意味着（食物）有益健康且分量足的。比喻地，它可以表示温暖、强烈和热情。" +
            "<br><br>" +
            "(A) '轻的' 意味着不重或不强烈的。" +
            "<br><br>" +
            "(C) '极少的' 意味着最低限度的数量、量或程度；可以忽略不计的。" +
            "<br><br>" +
            "(D) '小的' 意味着比正常或通常的尺寸小。"
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
