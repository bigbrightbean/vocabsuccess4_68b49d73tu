// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The __________ of slavery was a significant milestone in the nation's history, marking the end of a dark era.",
        chinese_question: "奴隶制的 __________ 是国家历史上的一个重要里程碑，标志着黑暗时代的结束。",
        answers: [
            { option: "A", answer: "continuation", chinese_answer: "继续", chinese_romanization: "jìxù" },
            { option: "B", answer: "preservation", chinese_answer: "保存", chinese_romanization: "bǎocún" },
            { option: "C", answer: "abolition", chinese_answer: "废除", chinese_romanization: "fèichú" },
            { option: "D", answer: "maintenance", chinese_answer: "维护", chinese_romanization: "wéihù" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'abolition' means the action or an act of abolishing a system, practice, or institution." +
            "<br><br>" +
            "(A) 'continuation' means the action of carrying something on over a period of time or the process of being carried on." +
            "<br><br>" +
            "(B) 'preservation' means the action of preserving something." +
            "<br><br>" +
            "(D) 'maintenance' means the process of maintaining or preserving someone or something.",
        chinese_explanation: "(C) '废除' 一词意味着废除一个制度、实践或机构的行为或行动。" +
            "<br><br>" +
            "(A) '继续' 意味着在一段时间内继续进行某事的行为或继续进行的过程。" +
            "<br><br>" +
            "(B) '保存' 意味着保存某物的行为。" +
            "<br><br>" +
            "(D) '维护' 意味着维护或保存某人或某物的过程。"
    },
    {
        id: 2,
        question: "The __________ of the two companies created a larger, more competitive organization in the industry.",
        chinese_question: "两家公司的 __________ 创造了一个更大、更具竞争力的组织。",
        answers: [
            { option: "A", answer: "division", chinese_answer: "分裂", chinese_romanization: "fēnliè" },
            { option: "B", answer: "separation", chinese_answer: "分离", chinese_romanization: "fēnlí" },
            { option: "C", answer: "amalgamation", chinese_answer: "合并", chinese_romanization: "hébìng" },
            { option: "D", answer: "fragmentation", chinese_answer: "破碎", chinese_romanization: "pòsuì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'amalgamation' means the action, process, or result of combining or uniting." +
            "<br><br>" +
            "(A) 'division' means the action of separating something into parts, or the process of being separated." +
            "<br><br>" +
            "(B) 'separation' means the action or state of moving or being moved apart." +
            "<br><br>" +
            "(D) 'fragmentation' means the process or state of breaking or being broken into small or separate parts.",
        chinese_explanation: "(C) '合并' 一词意味着结合或联合的动作、过程或结果。" +
            "<br><br>" +
            "(A) '分裂' 意味着将某物分成几部分的行为，或被分开的过程。" +
            "<br><br>" +
            "(B) '分离' 意味着移动或被移动开的动作或状态。" +
            "<br><br>" +
            "(D) '破碎' 意味着分裂或被分裂成小部分或单独部分的过程或状态。"
    },
    {
        id: 3,
        question: "Her __________ of new skills through continuous learning made her an invaluable team member.",
        chinese_question: "通过不断学习，她 __________ 了新技能，使她成为团队中不可或缺的一员。",
        answers: [
            { option: "A", answer: "neglect", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "B", answer: "avoidance", chinese_answer: "回避", chinese_romanization: "huíbì" },
            { option: "C", answer: "acquisition", chinese_answer: "获得", chinese_romanization: "huòdé" },
            { option: "D", answer: "dismissal", chinese_answer: "解雇", chinese_romanization: "jiěgù" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'acquisition' figuratively means the act of gaining knowledge or skills." +
            "<br><br>" +
            "(A) 'neglect' means fail to care for properly." +
            "<br><br>" +
            "(B) 'avoidance' means the action of keeping away from or not doing something." +
            "<br><br>" +
            "(D) 'dismissal' means the act of ordering or allowing someone to leave.",
        chinese_explanation: "(C) '获得' 在比喻意义上意味着获得知识或技能的行为。" +
            "<br><br>" +
            "(A) '忽视' 意味着未能适当照顾。" +
            "<br><br>" +
            "(B) '回避' 意味着避免或不做某事的行为。" +
            "<br><br>" +
            "(D) '解雇' 意味着命令或允许某人离开的行为。"
    },
    {
        id: 4,
        question: "The last-minute __________ from the president halted the imminent execution, giving the convict a chance for a new trial.",
        chinese_question: "总统在最后一刻的 __________ 叫停了即将到来的处决，给了罪犯重新审判的机会。",
        answers: [
                { option: "A", answer: "reprieve", chinese_answer: "缓刑", chinese_romanization: "huǎnxíng" },
                { option: "B", answer: "judgment", chinese_answer: "判决", chinese_romanization: "pànjué" },
                { option: "C", answer: "appeal", chinese_answer: "上诉", chinese_romanization: "shàngsù" },
                { option: "D", answer: "conviction", chinese_answer: "定罪", chinese_romanization: "dìngzuì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'reprieve' means a temporary postponement of punishment." +
            "<br><br>" +
            "(B) 'judgment' is a decision made by a court regarding the rights and liabilities in a legal case." +
            "<br><br>" +
            "(C) 'appeal' refers to applying to a higher court for a reversal of the decision of a lower court." +
            "<br><br>" +
            "(D) 'conviction' is a formal declaration that someone is guilty of a criminal offense.",
        chinese_explanation: "(A) '缓刑' 意味着暂时推迟处罚。" +
            "<br><br>" +
            "(B) '判决' 是法院对法律案件中的权利和责任作出的决定。" +
            "<br><br>" +
            "(C) '上诉' 指的是向上级法院申请撤销下级法院的决定。" +
            "<br><br>" +
            "(D) '定罪' 是正式宣告某人犯有刑事罪行。"
    },
    {
        id: 5,
        question: "The famous author was known by his __________, 'The Master of Suspense,' due to his thrilling novels.",
        chinese_question: "这位著名作家因其惊悚小说而被称为 '悬疑大师' 的 __________。",
        answers: [
            { option: "A", answer: "real name", chinese_answer: "真实姓名", chinese_romanization: "zhēnshí xìngmíng" },
            { option: "B", answer: "pseudonym", chinese_answer: "笔名", chinese_romanization: "bǐmíng" },
            { option: "C", answer: "nickname", chinese_answer: "昵称", chinese_romanization: "nìchēng" },
            { option: "D", answer: "sobriquet", chinese_answer: "绰号", chinese_romanization: "chuòhào" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'sobriquet' means a person's nickname." +
            "<br><br>" +
            "(A) 'real name' means the name that is officially given to a person." +
            "<br><br>" +
            "(B) 'pseudonym' means a fictitious name, especially one used by an author." +
            "<br><br>" +
            "(C) 'nickname' means a familiar or humorous name given to a person or thing instead of or as well as the real name.",
        chinese_explanation: "(D) '绰号' 一词意味着一个人的昵称。" +
            "<br><br>" +
            "(A) '真实姓名' 意味着正式给一个人的名字。" +
            "<br><br>" +
            "(B) '笔名' 意味着虚构的名字，特别是作家使用的名字。" +
            "<br><br>" +
            "(C) '昵称' 意味着代替或同时作为真实名字给某人或某物的熟悉或幽默的名字。"
    },
    {
        id: 6,
        question: "The light-hearted __________ provided a delightful evening of music and humor for the audience.",
        chinese_question: "轻松愉快的 __________ 为观众提供了一个充满音乐和幽默的美好夜晚。",
        answers: [
            { option: "A", answer: "symphony", chinese_answer: "交响乐", chinese_romanization: "jiāoxiǎng yuè" },
            { option: "B", answer: "tragedy", chinese_answer: "悲剧", chinese_romanization: "bēijù" },
            { option: "C", answer: "operetta", chinese_answer: "轻歌剧", chinese_romanization: "qīng gē jù" },
            { option: "D", answer: "monologue", chinese_answer: "独白", chinese_romanization: "dúbái" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'operetta' means a short opera, usually on a light or humorous theme and typically having spoken dialogue." +
            "<br><br>" +
            "(A) 'symphony' means an elaborate musical composition for full orchestra, typically in four movements." +
            "<br><br>" +
            "(B) 'tragedy' means a play dealing with tragic events and having an unhappy ending, especially one concerning the downfall of the main character." +
            "<br><br>" +
            "(D) 'monologue' means a long speech by one actor in a play or movie, or as part of a theatrical or broadcast program.",
        chinese_explanation: "(C) '轻歌剧' 一词意味着一部短歌剧，通常以轻松或幽默的主题为主，通常有对话。" +
            "<br><br>" +
            "(A) '交响乐' 意味着为完整管弦乐队创作的精美音乐作品，通常分为四个乐章。" +
            "<br><br>" +
            "(B) '悲剧' 意味着处理悲惨事件并以不幸结局的戏剧，尤其是涉及主角垮台的戏剧。" +
            "<br><br>" +
            "(D) '独白' 意味着一名演员在戏剧或电影中的长篇演讲，或作为戏剧或广播节目的一部分。"
    },
    {
        id: 7,
        question: "Before entering the temple, the visitors performed a ritual __________ to cleanse themselves, symbolizing purification and readiness for worship.",
        chinese_question: "在进入寺庙之前，游客们进行了一个仪式性的 __________，象征着净化和为礼拜做准备。",
        answers: [
            { option: "A", answer: "celebration", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" },
            { option: "B", answer: "ablution", chinese_answer: "洗礼", chinese_romanization: "xǐlǐ" },
            { option: "C", answer: "meal", chinese_answer: "餐", chinese_romanization: "cān" },
            { option: "D", answer: "dance", chinese_answer: "舞蹈", chinese_romanization: "wǔdǎo" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'ablution' means the act of washing oneself, typically for religious purposes." +
            "<br><br>" +
            "(A) 'celebration' means the action of marking one's pleasure at an important event or occasion by engaging in enjoyable, typically social, activity." +
            "<br><br>" +
            "(C) 'meal' means any of the regular occasions in a day when a reasonably large amount of food is eaten." +
            "<br><br>" +
            "(D) 'dance' means move rhythmically to music, typically following a set sequence of steps.",
        chinese_explanation: "(B) '洗礼' 一词意味着洗净自己的行为，通常是宗教目的。" +
            "<br><br>" +
            "(A) '庆祝' 意味着通过参与愉快的，通常是社交的活动来标志着对重要事件或场合的愉悦。" +
            "<br><br>" +
            "(C) '餐' 意味着一天中定期食用大量食物的任何场合。" +
            "<br><br>" +
            "(D) '舞蹈' 意味着随着音乐有节奏地移动，通常遵循一套步骤顺序。"
    },
    {
        id: 8,
        question: "The unexpected announcement served as a __________ for change, prompting everyone to reevaluate their current strategies.",
        chinese_question: "意外的宣布成为变革的 __________，促使每个人重新评估当前的策略。",
        answers: [
            { option: "A", answer: "obstacle", chinese_answer: "障碍", chinese_romanization: "zhàng'ài" },
            { option: "B", answer: "catalyst", chinese_answer: "催化剂", chinese_romanization: "cuīhuà jì" },
            { option: "C", answer: "hindrance", chinese_answer: "阻碍", chinese_romanization: "zǔ'ài" },
            { option: "D", answer: "delay", chinese_answer: "延迟", chinese_romanization: "yánchí" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'catalyst' means something that causes activity between two or more persons or forces without itself being affected." +
            "<br><br>" +
            "(A) 'obstacle' means a thing that blocks one's way or prevents or hinders progress." +
            "<br><br>" +
            "(C) 'hindrance' means a thing that provides resistance, delay, or obstruction to something or someone." +
            "<br><br>" +
            "(D) 'delay' means make someone or something late or slow.",
        chinese_explanation: "(B) '催化剂' 一词意味着引起两人或多个人或力量之间活动的事物，而本身不受影响。" +
            "<br><br>" +
            "(A) '障碍' 意味着阻挡某人道路或阻止或妨碍进展的事物。" +
            "<br><br>" +
            "(C) '阻碍' 意味着对某事或某人提供阻力、延迟或障碍的事物。" +
            "<br><br>" +
            "(D) '延迟' 意味着使某人或某物迟到或缓慢。"
    },
    {
        id: 9,
        question: "Watching the emotional movie brought a sense of __________, allowing her to release her pent-up feelings.",
        chinese_question: "看这部情感电影带来了 __________ 的感觉，让她释放了积压的情感。",
        answers: [
            { option: "A", answer: "tension", chinese_answer: "紧张", chinese_romanization: "jǐnzhāng" },
            { option: "B", answer: "boredom", chinese_answer: "无聊", chinese_romanization: "wúliáo" },
            { option: "C", answer: "catharsis", chinese_answer: "情感宣泄", chinese_romanization: "qínggǎn xuānxiè" },
            { option: "D", answer: "confusion", chinese_answer: "困惑", chinese_romanization: "kùnhuò" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'catharsis' means the process of releasing, and thereby providing relief from, strong or repressed emotions." +
            "<br><br>" +
            "(A) 'tension' means the state of being stretched tight." +
            "<br><br>" +
            "(B) 'boredom' means the state of feeling bored." +
            "<br><br>" +
            "(D) 'confusion' means lack of understanding; uncertainty.",
        chinese_explanation: "(C) '情感宣泄' 一词意味着释放强烈或被压抑的情感的过程，从而提供解脱。" +
            "<br><br>" +
            "(A) '紧张' 意味着被拉紧的状态。" +
            "<br><br>" +
            "(B) '无聊' 意味着感到厌倦的状态。" +
            "<br><br>" +
            "(D) '困惑' 意味着缺乏理解；不确定。"
    },
    {
        id: 10,
        question: "The patient was diagnosed with __________, a condition that causes excessive anxiety and stress without any apparent physical cause.",
        chinese_question: "患者被诊断为 __________，这是一种没有明显身体原因的情况下导致过度焦虑和压力的疾病。",
        answers: [
            { option: "A", answer: "depression", chinese_answer: "抑郁症", chinese_romanization: "yìyù zhèng" },
            { option: "B", answer: "neurosis", chinese_answer: "神经症", chinese_romanization: "shénjīng zhèng" },
            { option: "C", answer: "schizophrenia", chinese_answer: "精神分裂症", chinese_romanization: "jīngshén fēnliè zhèng" },
            { option: "D", answer: "mania", chinese_answer: "躁狂症", chinese_romanization: "zàokuáng zhèng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'neurosis' means a relatively mild mental illness that is not caused by organic disease, involving symptoms of stress (depression, anxiety, obsessive behavior, hypochondria) but not a radical loss of touch with reality." +
            "<br><br>" +
            "(A) 'depression' means feelings of severe despondency and dejection." +
            "<br><br>" +
            "(C) 'schizophrenia' means a long-term mental disorder involving a breakdown in the relation between thought, emotion, and behavior, leading to faulty perception, inappropriate actions and feelings, withdrawal from reality and personal relationships into fantasy and delusion, and a sense of mental fragmentation." +
            "<br><br>" +
            "(D) 'mania' means mental illness marked by periods of great excitement, euphoria, delusions, and overactivity.",
        chinese_explanation: "(B) '神经症' 一词意味着一种相对轻度的精神疾病，不是由器质性疾病引起的，涉及压力（抑郁、焦虑、强迫行为、疑病）的症状，但不会导致与现实的根本性失联。" +
            "<br><br>" +
            "(A) '抑郁症' 意味着严重沮丧和沮丧的感觉。" +
            "<br><br>" +
            "(C) '精神分裂症' 意味着一种长期精神障碍，涉及思想、情感和行为之间关系的破裂，导致错误的感知、不适当的行为和情感，从现实和个人关系中退缩到幻想和妄想，并且精神碎片化的感觉。" +
            "<br><br>" +
            "(D) '躁狂症' 意味着以兴奋、欣快、妄想和过度活动为特征的精神疾病。"
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
