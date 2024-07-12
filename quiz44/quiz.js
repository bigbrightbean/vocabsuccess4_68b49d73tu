// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The author's __________ writing style, filled with elaborate descriptions and ornate language, captivated the readers.",
        chinese_question: "作者的 __________ 写作风格，充满了精心的描述和华丽的语言，吸引了读者。",
        answers: [
            { option: "A", answer: "plain", chinese_answer: "朴素的", chinese_romanization: "pǔsù de" },
            { option: "B", answer: "concise", chinese_answer: "简洁的", chinese_romanization: "jiǎnjié de" },
            { option: "C", answer: "florid", chinese_answer: "华丽的", chinese_romanization: "huálì de" },
            { option: "D", answer: "straightforward", chinese_answer: "直截了当的", chinese_romanization: "zhíjiéle dāng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'florid' means having a red or flushed complexion; elaborately or excessively intricate or complicated." +
            "<br><br>" +
            "(A) 'plain' means not decorated or elaborate; simple or basic in character." +
            "<br><br>" +
            "(B) 'concise' means giving a lot of information clearly and in a few words; brief but comprehensive." +
            "<br><br>" +
            "(D) 'straightforward' means uncomplicated and easy to do or understand.",
        chinese_explanation: "(C) '华丽的' 一词意味着面色红润的；过于复杂或详细的。" +
            "<br><br>" +
            "(A) '朴素的' 意味着没有装饰或华丽的；简单或基本的。" +
            "<br><br>" +
            "(B) '简洁的' 意味着用少量词语清楚地传达大量信息；简短但全面的。" +
            "<br><br>" +
            "(D) '直截了当的' 意味着不复杂且容易做或理解的。"
    },
    {
        id: 2,
        question: "The __________ employee stopped trying to improve his performance, satisfied with just meeting the minimum requirements.",
        chinese_question: "这位 __________ 的员工不再努力提高自己的表现，只满足于达到最低要求。",
        answers: [
            { option: "A", answer: "ambitious", chinese_answer: "有雄心", chinese_romanization: "yǒu xióngxīn" },
            { option: "B", answer: "complacent", chinese_answer: "自满", chinese_romanization: "zìmǎn" },
            { option: "C", answer: "driven", chinese_answer: "有动力", chinese_romanization: "yǒu dònglì" },
            { option: "D", answer: "diligent", chinese_answer: "勤奋", chinese_romanization: "qínfèn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'complacent' means showing smug or uncritical satisfaction with oneself or one's achievements." +
            "<br><br>" +
            "(A) 'ambitious' means having or showing a strong desire and determination to succeed." +
            "<br><br>" +
            "(C) 'driven' means being very motivated to achieve something." +
            "<br><br>" +
            "(D) 'diligent' means having or showing care and conscientiousness in one's work or duties.",
        chinese_explanation: "(B) '自满' 意味着对自己或自己的成就表现出自鸣得意或不加批判的满足。" +
            "<br><br>" +
            "(A) '有雄心' 意味着有或表现出强烈的愿望和决心成功。" +
            "<br><br>" +
            "(C) '有动力' 意味着非常有动力去实现某事。" +
            "<br><br>" +
            "(D) '勤奋' 意味着在工作或职责上表现出关心和认真。"
    },
    {
        id: 3,
        question: "The new manager proved to be highly __________, efficiently handling multiple projects and leading the team to success.",
        chinese_question: "新经理证明自己非常 __________，高效地处理多个项目并带领团队走向成功。",
        answers: [
            { option: "A", answer: "competent", chinese_answer: "能干的", chinese_romanization: "nénggàn de" },
            { option: "B", answer: "inept", chinese_answer: "无能的", chinese_romanization: "wúnéng de" },
            { option: "C", answer: "clueless", chinese_answer: "无知的", chinese_romanization: "wúzhī de" },
            { option: "D", answer: "incapable", chinese_answer: "无法胜任的", chinese_romanization: "wúfǎ shèngrèn de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'competent' means having the necessary ability, knowledge, or skill to do something successfully." +
            "<br><br>" +
            "(B) 'inept' means having or showing no skill; clumsy." +
            "<br><br>" +
            "(C) 'clueless' means having no knowledge, understanding, or ability." +
            "<br><br>" +
            "(D) 'incapable' means unable to do or achieve something.",
        chinese_explanation: "(A) '能干的' 意味着具备完成某事所需的能力、知识或技能。" +
            "<br><br>" +
            "(B) '无能的' 意味着没有技能的；笨拙的。" +
            "<br><br>" +
            "(C) '无知的' 意味着没有知识、理解或能力的。" +
            "<br><br>" +
            "(D) '无法胜任的' 意味着不能做或实现某事的。"
    },
    {
        id: 4,
        question: "She felt __________ in her new role, quickly adapting to the responsibilities and environment.",
        chinese_question: "她在新角色中感到__________，很快适应了职责和环境。",
        answers: [
            { option: "A", answer: "cold", chinese_answer: "寒冷的", chinese_romanization: "hánlěng de" },
            { option: "B", answer: "spacious", chinese_answer: "宽敞的", chinese_romanization: "kuānchǎng de" },
            { option: "C", answer: "cozy", chinese_answer: "舒适的", chinese_romanization: "shūshì de" },
            { option: "D", answer: "uncomfortable", chinese_answer: "不舒服的", chinese_romanization: "bù shūfú de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'cozy' means giving a feeling of comfort, warmth, and relaxation. Figuratively, it can mean feeling comfortable and well-suited to a situation." +
            "<br><br>" +
            "(A) 'cold' means of or at a low or relatively low temperature, especially when compared with the temperature of the human body." +
            "<br><br>" +
            "(B) 'spacious' means having ample space." +
            "<br><br>" +
            "(D) 'uncomfortable' means causing or feeling slight pain or physical discomfort.",
        chinese_explanation: "(C) '舒适的'一词意味着带来舒适、温暖和放松的感觉。比喻地，它可以表示在一种情境中感到舒适和适合。" +
            "<br><br>" +
            "(A) '寒冷的' 意味着低温或相对较低的温度，特别是与人体温度相比时。" +
            "<br><br>" +
            "(B) '宽敞的' 意味着有充足的空间。" +
            "<br><br>" +
            "(D) '不舒服的' 意味着引起或感觉到轻微疼痛或身体不适的。"
    },
    {
        id: 5,
        question: "Her __________ efforts to improve the community have made a significant impact over the years.",
        chinese_question: "她 __________ 改善社区的努力多年来产生了重大影响。",
        answers: [
            { option: "A", answer: "continuous", chinese_answer: "连续的", chinese_romanization: "liánxù de" },
            { option: "B", answer: "halfhearted", chinese_answer: "不热心的", chinese_romanization: "bù rèxīn de" },
            { option: "C", answer: "rare", chinese_answer: "稀有的", chinese_romanization: "xīyǒu de" },
            { option: "D", answer: "infrequent", chinese_answer: "罕见的", chinese_romanization: "hǎnjiàn de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'continuous' means forming an unbroken whole; without interruption." +
            "<br><br>" +
            "(B) 'halfhearted' means without enthusiasm or energy." +
            "<br><br>" +
            "(C) 'rare' means not occurring very often." +
            "<br><br>" +
            "(D) 'infrequent' means not occurring often; rare.",
        chinese_explanation: "(A) '连续的' 意味着形成一个不间断的整体；没有中断的。" +
            "<br><br>" +
            "(B) '不热心的' 意味着没有热情或精力的。" +
            "<br><br>" +
            "(C) '稀有的' 意味着不经常发生的。" +
            "<br><br>" +
            "(D) '罕见的' 意味着不经常发生的；稀有的。"
    },
    {
        id: 6,
        question: "The advisor's __________ praise made it clear that he was trying to curry favor with the new CEO.",
        chinese_question: "顾问的 __________ 赞美表明他在试图讨好新任CEO。",
        answers: [
            { option: "A", answer: "critical", chinese_answer: "批评的", chinese_romanization: "pīpíng de" },
            { option: "B", answer: "sycophantic", chinese_answer: "阿谀奉承的", chinese_romanization: "ēyú fèngchéng de" },
            { option: "C", answer: "honest", chinese_answer: "诚实的", chinese_romanization: "chéngshí de" },
            { option: "D", answer: "impartial", chinese_answer: "公正的", chinese_romanization: "gōngzhèng de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'sycophantic' means behaving or done in an obsequious way in order to gain advantage." +
            "<br><br>" +
            "(A) 'critical' means expressing adverse or disapproving comments or judgments." +
            "<br><br>" +
            "(C) 'honest' means free of deceit and untruthfulness; sincere." +
            "<br><br>" +
            "(D) 'impartial' means treating all rivals or disputants equally; fair and just.",
        chinese_explanation: "(B) '阿谀奉承的' 一词意味着以谄媚的方式行事或完成以获取优势。" +
            "<br><br>" +
            "(A) '批评的' 意味着表达反对或不赞成的评论或判断。" +
            "<br><br>" +
            "(C) '诚实的' 意味着没有欺骗和虚伪的；真诚的。" +
            "<br><br>" +
            "(D) '公正的' 意味着平等对待所有对手或争论者；公平公正的。"
    },
    {
        id: 7,
        question: "The rights of the citizens were deemed __________, ensuring that they could not be taken away or invalidated.",
        chinese_question: "公民的权利被视为 __________，确保这些权利不能被剥夺或作废。",
        answers: [
            { option: "A", answer: "revocable", chinese_answer: "可撤销的", chinese_romanization: "kě chèxiāo de" },
            { option: "B", answer: "defeasible", chinese_answer: "可废止的", chinese_romanization: "kě fèizhǐ de" },
            { option: "C", answer: "provisional", chinese_answer: "临时的", chinese_romanization: "línshí de" },
            { option: "D", answer: "indefeasible", chinese_answer: "不可废止的", chinese_romanization: "bù kě fèizhǐ de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'indefeasible' means not able to be lost, annulled, or overturned." +
            "<br><br>" +
            "(A) 'revocable' means able to be revoked or canceled." +
            "<br><br>" +
            "(B) 'defeasible' means open in principle to revision, valid objection, forfeiture, or annulment." +
            "<br><br>" +
            "(C) 'provisional' means arranged or existing for the present, possibly to be changed later.",
        chinese_explanation: "(D) '不可废止的' 一词意味着不能丢失、废止或推翻的。" +
            "<br><br>" +
            "(A) '可撤销的' 意味着能够被撤销或取消的。" +
            "<br><br>" +
            "(B) '可废止的' 意味着原则上可以修订、有效反对、没收或废止的。" +
            "<br><br>" +
            "(C) '临时的' 意味着目前安排或存在的，可能会在以后改变的。"
    },
    {
        id: 8,
        question: "The model wore a __________ dress that seemed to float around her, adding an ethereal quality to her appearance.",
        chinese_question: "模特穿着一件 __________ 的连衣裙，仿佛在她身边飘动，增添了一种飘渺的感觉。",
        answers: [
            { option: "A", answer: "heavy", chinese_answer: "厚重的", chinese_romanization: "hòuzhòng de" },
            { option: "B", answer: "diaphanous", chinese_answer: "透明的", chinese_romanization: "tòumíng de" },
            { option: "C", answer: "solid", chinese_answer: "固体的", chinese_romanization: "gùtǐ de" },
            { option: "D", answer: "opaque", chinese_answer: "不透明的", chinese_romanization: "bù tòumíng de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'diaphanous' means light, delicate, and translucent, especially of fabric." +
            "<br><br>" +
            "(A) 'heavy' means of great weight; difficult to lift or move." +
            "<br><br>" +
            "(C) 'solid' means firm and stable in shape; not liquid or fluid." +
            "<br><br>" +
            "(D) 'opaque' means not able to be seen through; not transparent.",
        chinese_explanation: "(B) '透明的' 一词意味着轻盈、精致和半透明的，尤其是指织物。" +
            "<br><br>" +
            "(A) '厚重的' 意味着重量大；难以举起或移动。" +
            "<br><br>" +
            "(C) '固体的' 意味着形状稳定的；不是液体或流体。" +
            "<br><br>" +
            "(D) '不透明的' 意味着不能透过看到的；不透明的。"
    },
    {
        id: 9,
        question: "They spent the night stargazing, marveling at the __________ bodies scattered across the night sky.",
        chinese_question: "他们度过了一个观星之夜，惊叹于散布在夜空中的 __________ 天体。",
        answers: [
            { option: "A", answer: "terrestrial", chinese_answer: "陆地", chinese_romanization: "lùdì" },
            { option: "B", answer: "earthly", chinese_answer: "地球", chinese_romanization: "dìqiú" },
            { option: "C", answer: "celestial", chinese_answer: "天空", chinese_romanization: "tiānkōng" },
            { option: "D", answer: "mundane", chinese_answer: "世俗", chinese_romanization: "shìsú" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'celestial' means positioned in or relating to the sky, or outer space as observed in astronomy." +
            "<br><br>" +
            "(A) 'terrestrial' means of, on, or relating to the earth." +
            "<br><br>" +
            "(B) 'earthly' means relating to or characteristic of the earth or human life on the earth." +
            "<br><br>" +
            "(D) 'mundane' means lacking interest or excitement; dull.",
        chinese_explanation: "(C) '天空' 一词意味着位于或与天空有关，或在天文学中观察到的外层空间。" +
            "<br><br>" +
            "(A) '陆地' 意味着与地球有关。" +
            "<br><br>" +
            "(B) '地球' 意味着与地球或地球上的人类生活有关。" +
            "<br><br>" +
            "(D) '世俗' 意味着缺乏兴趣或兴奋；无聊的。"
    },
    {
        id: 10,
        question: "Her __________ tendencies made it difficult for her to focus on anyone else’s needs or feelings.",
        chinese_question: "她的 __________ 倾向使她很难关注其他人的需求或感受。",
        answers: [
            { option: "A", answer: "empathetic", chinese_answer: "同理心", chinese_romanization: "tóng lǐ xīn" },
            { option: "B", answer: "selfless", chinese_answer: "无私", chinese_romanization: "wúsī" },
            { option: "C", answer: "narcissistic", chinese_answer: "自恋", chinese_romanization: "zìliàn" },
            { option: "D", answer: "modest", chinese_answer: "谦虚", chinese_romanization: "qiānxū" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'narcissistic' means having an excessive interest in or admiration of oneself and one's physical appearance." +
            "<br><br>" +
            "(A) 'empathetic' means showing an ability to understand and share the feelings of another." +
            "<br><br>" +
            "(B) 'selfless' means concerned more with the needs and wishes of others than with one's own." +
            "<br><br>" +
            "(D) 'modest' means unassuming or moderate in the estimation of one's abilities or achievements.",
        chinese_explanation: "(C) '自恋' 一词意味着对自己和自己的外表有过分的兴趣或钦佩。" +
            "<br><br>" +
            "(A) '同理心' 意味着表现出理解和分享他人感受的能力。" +
            "<br><br>" +
            "(B) '无私' 意味着更多地关心他人的需求和愿望，而不是自己的。" +
            "<br><br>" +
            "(D) '谦虚' 意味着对自己的能力或成就持谦虚或适度的态度。"
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
