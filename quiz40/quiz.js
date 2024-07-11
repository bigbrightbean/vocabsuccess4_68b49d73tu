// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The __________ taste of the lemon made her pucker her lips and reach for a glass of water.",
        chinese_question: "柠檬的 __________ 味道使她噘起了嘴，伸手去拿一杯水。",
        answers: [
            { option: "A", answer: "sweet", chinese_answer: "甜", chinese_romanization: "tián" },
            { option: "B", answer: "astringent", chinese_answer: "苦涩", chinese_romanization: "kǔsè" },
            { option: "C", answer: "bland", chinese_answer: "平淡", chinese_romanization: "píngdàn" },
            { option: "D", answer: "mild", chinese_answer: "温和", chinese_romanization: "wēnhé" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'astringent' means causing the contraction of body tissues, typically used to describe a sharp or bitter taste." +
            "<br><br>" +
            "(A) 'sweet' means having the pleasant taste characteristic of sugar." +
            "<br><br>" +
            "(C) 'bland' means lacking strong features or characteristics and therefore uninteresting." +
            "<br><br>" +
            "(D) 'mild' means not severe, serious, or harsh.",
        chinese_explanation: "(B) '苦涩' 一词意味着引起体组织收缩，通常用来描述一种尖锐或苦涩的味道。" +
            "<br><br>" +
            "(A) '甜' 意味着具有糖的特有愉快味道。" +
            "<br><br>" +
            "(C) '平淡' 意味着缺乏强烈的特征或特点，因此无趣。" +
            "<br><br>" +
            "(D) '温和' 意味着不严厉、严重或苛刻。"
    },
    {
        id: 2,
        question: "The company faced __________ measures from the government for violating environmental regulations.",
        chinese_question: "公司因违反环境法规而面临政府的 __________ 措施。",
        answers: [
            { option: "A", answer: "rewarding", chinese_answer: "奖励", chinese_romanization: "jiǎnglì" },
            { option: "B", answer: "punitive", chinese_answer: "惩罚", chinese_romanization: "chéngfá" },
            { option: "C", answer: "lenient", chinese_answer: "宽大", chinese_romanization: "kuāndà" },
            { option: "D", answer: "forgiving", chinese_answer: "原谅", chinese_romanization: "yuánliàng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'punitive' means inflicting or intended as punishment." +
            "<br><br>" +
            "(A) 'rewarding' means providing satisfaction; gratifying." +
            "<br><br>" +
            "(C) 'lenient' means more merciful or tolerant than expected." +
            "<br><br>" +
            "(D) 'forgiving' means ready and willing to forgive.",
        chinese_explanation: "(B) '惩罚' 一词意味着施加或打算作为惩罚。" +
            "<br><br>" +
            "(A) '奖励' 意味着提供满足；令人满意的。" +
            "<br><br>" +
            "(C) '宽大' 意味着比预期的更宽容或宽容。" +
            "<br><br>" +
            "(D) '原谅' 意味着准备和愿意原谅。"
    },
    {
        id: 3,
        question: "The __________ sounds of the city traffic made it hard for her to concentrate on her studies.",
        chinese_question: "城市交通的 __________ 声音使她难以集中注意力学习。",
        answers: [
            { option: "A", answer: "harmonious", chinese_answer: "和谐", chinese_romanization: "héxié" },
            { option: "B", answer: "melodious", chinese_answer: "悦耳", chinese_romanization: "yuè'ěr" },
            { option: "C", answer: "cacophonous", chinese_answer: "刺耳", chinese_romanization: "cì'ěr" },
            { option: "D", answer: "quiet", chinese_answer: "安静", chinese_romanization: "ānjìng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'cacophonous' means involving or producing a harsh, discordant mixture of sounds." +
            "<br><br>" +
            "(A) 'harmonious' means forming a pleasing or consistent whole." +
            "<br><br>" +
            "(B) 'melodious' means of, producing, or having a pleasant tune; tuneful." +
            "<br><br>" +
            "(D) 'quiet' means making little or no noise.",
        chinese_explanation: "(C) '刺耳' 一词意味着涉及或产生刺耳、不和谐的声音混合。" +
            "<br><br>" +
            "(A) '和谐' 意味着形成令人愉快或一致的整体。" +
            "<br><br>" +
            "(B) '悦耳' 意味着有、产生或有悦耳的曲调；和谐的。" +
            "<br><br>" +
            "(D) '安静' 意味着发出很少或没有声音。"
    },
    {
        id: 4,
        question: "The butterfly's wings were __________, shimmering with a rainbow of colors as it fluttered in the sunlight.",
        chinese_question: "蝴蝶的翅膀是 __________ 的，在阳光下振翅时闪烁着彩虹般的色彩。",
        answers: [
            { option: "A", answer: "dull", chinese_answer: "暗淡", chinese_romanization: "àndàn" },
            { option: "B", answer: "iridescent", chinese_answer: "彩虹色", chinese_romanization: "cǎihóng sè" },
            { option: "C", answer: "monochrome", chinese_answer: "单色", chinese_romanization: "dānsè" },
            { option: "D", answer: "faded", chinese_answer: "褪色", chinese_romanization: "tuìsè" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'iridescent' means showing luminous colors that seem to change when seen from different angles." +
            "<br><br>" +
            "(A) 'dull' means lacking interest or excitement." +
            "<br><br>" +
            "(C) 'monochrome' means consisting of one color or shades of one color." +
            "<br><br>" +
            "(D) 'faded' means having lost brightness or vividness of color.",
        chinese_explanation: "(B) '彩虹色' 一词意味着显示出看起来会随着不同角度变化的光亮色彩。" +
            "<br><br>" +
            "(A) '暗淡' 意味着缺乏兴趣或兴奋。" +
            "<br><br>" +
            "(C) '单色' 意味着由一种颜色或一种颜色的阴影组成。" +
            "<br><br>" +
            "(D) '褪色' 意味着失去明亮或鲜艳的颜色。"
    },
    {
        id: 5,
        question: "They conducted a __________ investigation to avoid alerting the suspects to their presence.",
        chinese_question: "他们进行了 __________ 的调查，以免引起嫌疑人的注意。",
        answers: [
            { option: "A", answer: "open", chinese_answer: "公开", chinese_romanization: "gōngkāi" },
            { option: "B", answer: "transparent", chinese_answer: "透明", chinese_romanization: "tòumíng" },
            { option: "C", answer: "surreptitious", chinese_answer: "秘密", chinese_romanization: "mìmì" },
            { option: "D", answer: "public", chinese_answer: "公众", chinese_romanization: "gōngzhòng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'surreptitious' means kept secret, especially because it would not be approved of." +
            "<br><br>" +
            "(A) 'open' means allowing access, passage, or a view through an empty space; not closed or blocked up." +
            "<br><br>" +
            "(B) 'transparent' means allowing light to pass through so that objects behind can be distinctly seen." +
            "<br><br>" +
            "(D) 'public' means open to or shared by all the people of an area or country.",
        chinese_explanation: "(C) '秘密' 一词意味着保密的，尤其是因为它不会被批准。" +
            "<br><br>" +
            "(A) '公开' 意味着允许通过空空间访问、通过或视图；未关闭或未堵塞。" +
            "<br><br>" +
            "(B) '透明' 意味着允许光线通过，以便可以清晰地看到后面的物体。" +
            "<br><br>" +
            "(D) '公众' 意味着对某个地区或国家的所有人开放或共享。"
    },
    {
        id: 6,
        question: "His __________ remarks during the meeting impressed everyone, as he spoke fluently and confidently without any notes.",
        chinese_question: "他在会议上的 __________ 言论给大家留下了深刻的印象，因为他在没有任何笔记的情况下流利而自信地发言。",
        answers: [
            { option: "A", answer: "extemporaneous", chinese_answer: "即兴", chinese_romanization: "jíxìng" },
            { option: "B", answer: "scripted", chinese_answer: "脚本", chinese_romanization: "jiǎoběn" },
            { option: "C", answer: "rehearsed", chinese_answer: "排练", chinese_romanization: "páiliàn" },
            { option: "D", answer: "planned", chinese_answer: "计划", chinese_romanization: "jìhuà" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'extemporaneous' means spoken or done without preparation." +
            "<br><br>" +
            "(B) 'scripted' means written as a script." +
            "<br><br>" +
            "(C) 'rehearsed' means practiced in advance." +
            "<br><br>" +
            "(D) 'planned' means decided on and arranged in advance.",
        chinese_explanation: "(A) '即兴' 一词意味着在没有准备的情况下说或做。" +
            "<br><br>" +
            "(B) '脚本' 意味着作为剧本写成的。" +
            "<br><br>" +
            "(C) '排练' 意味着提前练习。" +
            "<br><br>" +
            "(D) '计划' 意味着提前决定和安排。"
    },
    {
        id: 7,
        question: "To avoid traffic, they took a __________ route through the countryside, adding an extra hour to their journey.",
        chinese_question: "为了避开交通，他们走了一条 __________ 的乡村路线，多花了一个小时。",
        answers: [
            { option: "A", answer: "direct", chinese_answer: "直接", chinese_romanization: "zhíjiē" },
            { option: "B", answer: "straight", chinese_answer: "笔直", chinese_romanization: "bǐzhí" },
            { option: "C", answer: "circuitous", chinese_answer: "迂回", chinese_romanization: "yūhuí" },
            { option: "D", answer: "simple", chinese_answer: "简单", chinese_romanization: "jiǎndān" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'circuitous' means longer than the most direct way." +
            "<br><br>" +
            "(A) 'direct' means extending or moving from one place to another by the shortest way without changing direction or stopping." +
            "<br><br>" +
            "(B) 'straight' means extending or moving uniformly in one direction only; without a curve or bend." +
            "<br><br>" +
            "(D) 'simple' means easily understood or done; presenting no difficulty.",
        chinese_explanation: "(C) '迂回' 一词意味着比最直接的方式更长。" +
            "<br><br>" +
            "(A) '直接' 意味着以最短的方式从一个地方延伸或移动到另一个地方，没有改变方向或停下来。" +
            "<br><br>" +
            "(B) '笔直' 意味着仅在一个方向上均匀延伸或移动；没有弯曲或弯曲。" +
            "<br><br>" +
            "(D) '简单' 意味着容易理解或完成；没有困难。"
    },
    {
        id: 8,
        question: "The new software proved to be highly __________, reducing the time required to complete tasks by half.",
        chinese_question: "新软件被证明是高度 __________ 的，将完成任务所需的时间减半。",
        answers: [
            { option: "A", answer: "inefficient", chinese_answer: "无效的", chinese_romanization: "wúxiào de" },
            { option: "B", answer: "slow", chinese_answer: "缓慢的", chinese_romanization: "huǎnmàn de" },
            { option: "C", answer: "efficient", chinese_answer: "高效的", chinese_romanization: "gāoxiào de" },
            { option: "D", answer: "wasteful", chinese_answer: "浪费的", chinese_romanization: "làngfèi de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'efficient' means achieving maximum productivity with minimum wasted effort or expense." +
            "<br><br>" +
            "(A) 'inefficient' means not achieving maximum productivity; wasting or failing to make the best use of time or resources." +
            "<br><br>" +
            "(B) 'slow' means moving or operating, or designed to do so, only at a low speed; not quick or fast." +
            "<br><br>" +
            "(D) 'wasteful' means using or expending something of value carelessly, extravagantly, or to no purpose.",
        chinese_explanation: "(C) '高效的' 意味着以最少的浪费努力或费用达到最大生产力。" +
            "<br><br>" +
            "(A) '无效的' 意味着未能达到最大生产力；浪费或未能充分利用时间或资源。" +
            "<br><br>" +
            "(B) '缓慢的' 意味着移动或操作或设计为仅以低速运行的；不快的。" +
            "<br><br>" +
            "(D) '浪费的' 意味着轻率、奢侈或无目的地使用或花费有价值的东西。"
    },
    {
        id: 9,
        question: "His understanding of the subject was only __________, lacking the depth needed for the advanced course.",
        chinese_question: "他对这个主题的理解只是 __________，缺乏高级课程所需的深度。",
        answers: [
            { option: "A", answer: "comprehensive", chinese_answer: "全面", chinese_romanization: "quánmiàn" },
            { option: "B", answer: "rudimentary", chinese_answer: "初步", chinese_romanization: "chūbù" },
            { option: "C", answer: "advanced", chinese_answer: "高级", chinese_romanization: "gāojí" },
            { option: "D", answer: "sophisticated", chinese_answer: "复杂", chinese_romanization: "fùzá" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'rudimentary' means involving or limited to basic principles." +
            "<br><br>" +
            "(A) 'comprehensive' means complete and including all or nearly all elements or aspects." +
            "<br><br>" +
            "(C) 'advanced' means far on or ahead in development or progress." +
            "<br><br>" +
            "(D) 'sophisticated' means having, revealing, or proceeding from a great deal of worldly experience and knowledge.",
        chinese_explanation: "(B) '初步' 一词意味着涉及或限于基本原则。" +
            "<br><br>" +
            "(A) '全面' 意味着完整的，包括所有或几乎所有的元素或方面。" +
            "<br><br>" +
            "(C) '高级' 意味着在发展或进步中很远或领先。" +
            "<br><br>" +
            "(D) '复杂' 意味着拥有、揭示或来自大量的世俗经验和知识。"
    },
    {
        id: 10,
        question: "His __________ manner of speaking often came across as rude, even though he didn't mean to offend anyone.",
        chinese_question: "他说话的 __________ 方式常常显得很粗鲁，尽管他并不想冒犯任何人。",
        answers: [
            { option: "A", answer: "polite", chinese_answer: "有礼貌的", chinese_romanization: "yǒu lǐmào de" },
            { option: "B", answer: "courteous", chinese_answer: "谦恭的", chinese_romanization: "qiāngōng de" },
            { option: "C", answer: "brusque", chinese_answer: "粗暴的", chinese_romanization: "cūbào de" },
            { option: "D", answer: "gentle", chinese_answer: "温和的", chinese_romanization: "wēnhé de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'brusque' means abrupt or offhand in speech or manner." +
            "<br><br>" +
            "(A) 'polite' means having or showing behavior that is respectful and considerate of other people." +
            "<br><br>" +
            "(B) 'courteous' means polite, respectful, or considerate in manner." +
            "<br><br>" +
            "(D) 'gentle' means having or showing a mild, kind, or tender temperament or character.",
        chinese_explanation: "(C) '粗暴的' 意味着言语或态度上突然或随意的。" +
            "<br><br>" +
            "(A) '有礼貌的' 意味着表现出尊重和体贴他人的行为。" +
            "<br><br>" +
            "(B) '谦恭的' 意味着礼貌、尊重或体贴的行为。" +
            "<br><br>" +
            "(D) '温和的' 意味着具有或表现出温和、善良或温柔的性格。"
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
