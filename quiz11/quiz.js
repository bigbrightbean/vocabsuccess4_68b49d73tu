// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "Despite his numerous efforts, his attempts to find inspiration for his novel remained __________, leaving him frustrated and demotivated.",
        chinese_question: "尽管他付出了很多努力，但他寻找小说灵感的尝试依然 __________，让他感到沮丧和失去动力。",
        answers: [
            { option: "A", answer: "fruitful", chinese_answer: "富有成果的", chinese_romanization: "fùyǒu chéngguǒ de" },
            { option: "B", answer: "barren", chinese_answer: "贫瘠的", chinese_romanization: "pínjí de" },
            { option: "C", answer: "promising", chinese_answer: "有前途的", chinese_romanization: "yǒu qiántú de" },
            { option: "D", answer: "fertile", chinese_answer: "肥沃的", chinese_romanization: "féiwò de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'barren' in a figurative sense means unproductive or lacking results." +
            "<br><br>" +
            "(A) 'fruitful' means producing good or helpful results; productive." +
            "<br><br>" +
            "(C) 'promising' means showing signs of future success." +
            "<br><br>" +
            "(D) 'fertile' means capable of producing abundant vegetation or crops.",
        chinese_explanation: "(B) '贫瘠的' 一词在比喻意义上意味着无成果或缺乏结果。" +
            "<br><br>" +
            "(A) '富有成果的' 意味着产生良好或有用的结果；有成效的。" +
            "<br><br>" +
            "(C) '有前途的' 意味着显示出未来成功的迹象。" +
            "<br><br>" +
            "(D) '肥沃的' 意味着能够生产大量植物或农作物的。"
    },
    {
        id: 2,
        question: "The two artists were __________, creating their masterpieces during the same historical period.",
        chinese_question: "这两位艺术家是 __________ 的，在同一历史时期创作他们的杰作。",
        answers: [
            { option: "A", answer: "anachronistic", chinese_answer: "时代错误的", chinese_romanization: "shídài cuòwù de" },
            { option: "B", answer: "prehistoric", chinese_answer: "史前的", chinese_romanization: "shǐqián de" },
            { option: "C", answer: "futuristic", chinese_answer: "未来的", chinese_romanization: "wèilái de" },
            { option: "D", answer: "contemporaneous", chinese_answer: "同时代的", chinese_romanization: "tóng shídài de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'contemporaneous' means existing or occurring in the same period of time." +
            "<br><br>" +
            "(A) 'anachronistic' means belonging to a period other than that being portrayed." +
            "<br><br>" +
            "(B) 'prehistoric' means relating to or denoting the period before written records." +
            "<br><br>" +
            "(C) 'futuristic' means having or involving very modern technology or design.",
        chinese_explanation: "(D) '同时代的' 一词意味着在同一时期存在或发生。" +
            "<br><br>" +
            "(A) '时代错误的' 意味着属于被描绘的时期之外的。" +
            "<br><br>" +
            "(B) '史前的' 意味着与文字记录之前的时期有关或表示该时期的。" +
            "<br><br>" +
            "(C) '未来的' 意味着具有或涉及非常现代的技术或设计。"
    },
    {
        id: 3,
        question: "The old tree had __________ branches that twisted and turned in all directions.",
        chinese_question: "那棵老树有 __________ 的树枝，向各个方向扭曲和转动。",
        answers: [
            { option: "A", answer: "straight", chinese_answer: "笔直的", chinese_romanization: "bǐzhí de" },
            { option: "B", answer: "gnarled", chinese_answer: "扭曲的", chinese_romanization: "niǔqū de" },
            { option: "C", answer: "smooth", chinese_answer: "光滑的", chinese_romanization: "guānghuá de" },
            { option: "D", answer: "flexible", chinese_answer: "灵活的", chinese_romanization: "línghuó de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'gnarled' means knobbly, rough, and twisted, especially with age." +
            "<br><br>" +
            "(A) 'straight' means extending or moving uniformly in one direction only; without a curve or bend." +
            "<br><br>" +
            "(C) 'smooth' means having an even and regular surface or consistency; free from perceptible projections, lumps, or indentations." +
            "<br><br>" +
            "(D) 'flexible' means capable of bending easily without breaking.",
        chinese_explanation: "(B) '扭曲的' 一词意味着结节的、粗糙的和扭曲的，尤其是随着年龄增长。" +
            "<br><br>" +
            "(A) '笔直的' 意味着仅向一个方向均匀延伸或移动；没有曲线或弯曲。" +
            "<br><br>" +
            "(C) '光滑的' 意味着表面或一致性平滑和规则的；没有明显的凸起、肿块或凹痕。" +
            "<br><br>" +
            "(D) '灵活的' 意味着能够轻松弯曲而不折断的。"
    },
    {
        id: 4,
        question: "The scientist used a __________ pattern to describe the complex network of nerves in the human body.",
        chinese_question: "科学家用 __________ 模式来描述人体内复杂的神经网络。",
        answers: [
            { option: "A", answer: "linear", chinese_answer: "线性的", chinese_romanization: "xiànxìng de" },
            { option: "B", answer: "circular", chinese_answer: "圆形的", chinese_romanization: "yuánxíng de" },
            { option: "C", answer: "reticular", chinese_answer: "网状的", chinese_romanization: "wǎngzhuàng de" },
            { option: "D", answer: "random", chinese_answer: "随机的", chinese_romanization: "suíjī de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'reticular' means relating to or resembling a net or network, especially with regard to the network of cells and fibers in biological tissue." +
            "<br><br>" +
            "(A) 'linear' means arranged in or extending along a straight or nearly straight line." +
            "<br><br>" +
            "(B) 'circular' means having the form of a circle." +
            "<br><br>" +
            "(D) 'random' means made, done, happening, or chosen without method or conscious decision.",
        chinese_explanation: "(C) '网状的' 一词意味着与网或网络有关或类似，特别是与生物组织中的细胞和纤维网络有关。" +
            "<br><br>" +
            "(A) '线性的' 意味着排列在或沿着直线或几乎直线延伸的。" +
            "<br><br>" +
            "(B) '圆形的' 意味着具有圆形的形式。" +
            "<br><br>" +
            "(D) '随机的' 意味着没有方法或有意识决定地进行、发生或选择的。"
    },
    {
        id: 5,
        question: "Looking down from the top of the skyscraper gave him a sense of __________, making him feel dizzy and disoriented.",
        chinese_question: "从摩天大楼顶端往下看让他感到 __________，让他觉得头晕目眩和迷失方向。",
        answers: [
            { option: "A", answer: "balance", chinese_answer: "平衡", chinese_romanization: "pínghéng" },
            { option: "B", answer: "vertigo", chinese_answer: "眩晕", chinese_romanization: "xuànyūn" },
            { option: "C", answer: "stability", chinese_answer: "稳定", chinese_romanization: "wěndìng" },
            { option: "D", answer: "clarity", chinese_answer: "清晰", chinese_romanization: "qīngxī" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'vertigo' means a sensation of whirling and loss of balance, associated particularly with looking down from a great height." +
            "<br><br>" +
            "(A) 'balance' means an even distribution of weight enabling someone or something to remain upright and steady." +
            "<br><br>" +
            "(C) 'stability' means the state of being stable." +
            "<br><br>" +
            "(D) 'clarity' means the quality of being clear, in particular.",
        chinese_explanation: "(B) '眩晕' 一词意味着一种旋转和失去平衡的感觉，特别是与从高处往下看有关。" +
            "<br><br>" +
            "(A) '平衡' 意味着重量均匀分布，使某人或某物保持直立和稳定。" +
            "<br><br>" +
            "(C) '稳定' 意味着稳定的状态。" +
            "<br><br>" +
            "(D) '清晰' 意味着清晰的质量，特别是。"
    },
    {
        id: 6,
        question: "The scientist stored the sensitive chemicals in __________ containers to ensure no air could enter and cause a reaction.",
        chinese_question: "科学家将敏感化学品储存在 __________ 容器中，以确保没有空气进入并引起反应。",
        answers: [
            { option: "A", answer: "hermetic", chinese_answer: "密封的", chinese_romanization: "mìfēng de" },
            { option: "B", answer: "open", chinese_answer: "开放的", chinese_romanization: "kāifàng de" },
            { option: "C", answer: "porous", chinese_answer: "多孔的", chinese_romanization: "duō kǒng de" },
            { option: "D", answer: "damaged", chinese_answer: "受损的", chinese_romanization: "shòusǔn de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'hermetic' means (of a seal or closure) complete and airtight." +
            "<br><br>" +
            "(B) 'open' means allowing access, passage, or a view through an empty space; not closed or blocked up." +
            "<br><br>" +
            "(C) 'porous' means having minute spaces or holes through which liquid or air may pass." +
            "<br><br>" +
            "(D) 'damaged' means harmed or impaired in some way.",
        chinese_explanation: "(A) '密封的' 一词意味着（密封或关闭）完全密闭的。" +
            "<br><br>" +
            "(B) '开放的' 意味着允许通过空旷空间的通道或视野的；未关闭或未封堵的。" +
            "<br><br>" +
            "(C) '多孔的' 意味着具有液体或空气可以通过的微小空间或孔洞的。" +
            "<br><br>" +
            "(D) '受损的' 意味着在某种程度上受到损害或损伤的。"
    },
    {
        id: 7,
        question: "His __________ plan to get promoted involved sabotaging his colleague's work, which ultimately backfired.",
        chinese_question: "他为了升职而 __________ 的计划涉及破坏同事的工作，最终却事与愿违。",
        answers: [
            { option: "A", answer: "straightforward", chinese_answer: "直截了当的", chinese_romanization: "zhíjié liǎodāng de" },
            { option: "B", answer: "devious", chinese_answer: "狡诈的", chinese_romanization: "jiǎozhà de" },
            { option: "C", answer: "honest", chinese_answer: "诚实的", chinese_romanization: "chéngshí de" },
            { option: "D", answer: "direct", chinese_answer: "直接的", chinese_romanization: "zhíjiē de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'devious' means showing a skillful use of underhanded tactics to achieve goals." +
            "<br><br>" +
            "(A) 'straightforward' means uncomplicated and easy to do or understand." +
            "<br><br>" +
            "(C) 'honest' means free of deceit and untruthfulness; sincere." +
            "<br><br>" +
            "(D) 'direct' means extending or moving from one place to another by the shortest way without changing direction or stopping.",
        chinese_explanation: "(B) '狡诈的' 一词意味着巧妙地使用不正当手段来实现目标。" +
            "<br><br>" +
            "(A) '直截了当的' 意味着简单明了，容易做或理解。" +
            "<br><br>" +
            "(C) '诚实的' 意味着没有欺骗和虚伪的；真诚的。" +
            "<br><br>" +
            "(D) '直接的' 意味着从一个地方到另一个地方不变方向或不停地延伸或移动。"
    },
    {
        id: 8,
        question: "The judge made an __________ decision, ensuring that both parties were treated fairly.",
        chinese_question: "法官做出了一个 __________ 的决定，确保双方都得到了公平对待。",
        answers: [
            { option: "A", answer: "biased", chinese_answer: "偏袒的", chinese_romanization: "piāntǎn de" },
            { option: "B", answer: "unjust", chinese_answer: "不公正的", chinese_romanization: "bù gōngzhèng de" },
            { option: "C", answer: "equitable", chinese_answer: "公正的", chinese_romanization: "gōngzhèng de" },
            { option: "D", answer: "unfair", chinese_answer: "不公平的", chinese_romanization: "bù gōngpíng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'equitable' means fair and impartial." +
            "<br><br>" +
            "(A) 'biased' means unfairly prejudiced for or against someone or something." +
            "<br><br>" +
            "(B) 'unjust' means not based on or behaving according to what is morally right and fair." +
            "<br><br>" +
            "(D) 'unfair' means not based on or behaving according to the principles of equality and justice.",
        chinese_explanation: "(C) '公正的' 一词意味着公平和公正。" +
            "<br><br>" +
            "(A) '偏袒的' 意味着对某人或某事不公平地有偏见。" +
            "<br><br>" +
            "(B) '不公正的' 意味着不根据或不按道德正确和公平的行为。" +
            "<br><br>" +
            "(D) '不公平的' 意味着不根据或不按平等和正义的原则行事。"
    },
    {
        id: 9,
        question: "Her voice was __________ in its reassurance, calming everyone who listened.",
        chinese_question: "她的声音在安慰中 __________，平静了每一个听众。",
        answers: [
            { option: "A", answer: "abrasive", chinese_answer: "粗糙的", chinese_romanization: "cūcāo de" },
            { option: "B", answer: "jarring", chinese_answer: "刺耳的", chinese_romanization: "cì'ěr de" },
            { option: "C", answer: "melodious", chinese_answer: "悦耳的", chinese_romanization: "yuè'ěr de" },
            { option: "D", answer: "grating", chinese_answer: "刺激的", chinese_romanization: "cìjī de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'melodious' figuratively means pleasant to listen to." +
            "<br><br>" +
            "(A) 'abrasive' means (of a substance or material) capable of polishing or cleaning a hard surface by rubbing or grinding." +
            "<br><br>" +
            "(B) 'jarring' means incongruous in a striking or shocking way; clashing." +
            "<br><br>" +
            "(D) 'grating' means sounding harsh and unpleasant.",
        chinese_explanation: "(C) '悦耳的' 在比喻意义上意味着听起来令人愉快的。" +
            "<br><br>" +
            "(A) '粗糙的' 意味着（指物质或材料）通过摩擦或研磨能抛光或清洁硬表面。" +
            "<br><br>" +
            "(B) '刺耳的' 意味着以引人注目或令人震惊的方式不协调的；冲突的。" +
            "<br><br>" +
            "(D) '刺激的' 意味着声音刺耳和令人不快的。"
    },
    {
        id: 10,
        question: "Living a __________ lifestyle often leads to greater financial burdens.",
        chinese_question: "过上 __________ 的生活方式往往会带来更大的经济负担。",
        answers: [
            { option: "A", answer: "frugal", chinese_answer: "节俭的", chinese_romanization: "jiéjiǎn de" },
            { option: "B", answer: "luxurious", chinese_answer: "奢华的", chinese_romanization: "shēhuá de" },
            { option: "C", answer: "thrifty", chinese_answer: "节省的", chinese_romanization: "jiéshěng de" },
            { option: "D", answer: "economical", chinese_answer: "经济的", chinese_romanization: "jīngjì de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'luxurious' figuratively means marked by opulence and rich surroundings." +
            "<br><br>" +
            "(A) 'frugal' means sparing or economical with regard to money or food." +
            "<br><br>" +
            "(C) 'thrifty' means using money and other resources carefully and not wastefully." +
            "<br><br>" +
            "(D) 'economical' means giving good value or service in relation to the amount of money, time, or effort spent.",
        chinese_explanation: "(B) '奢华的' 在比喻意义上意味着以富裕和豪华的环境为标志的。" +
            "<br><br>" +
            "(A) '节俭的' 意味着对金钱或食物的使用节约或经济的。" +
            "<br><br>" +
            "(C) '节省的' 意味着仔细和不浪费地使用金钱和其他资源的。" +
            "<br><br>" +
            "(D) '经济的' 意味着在花费的钱、时间或努力方面提供良好价值或服务的。"
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
