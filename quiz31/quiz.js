// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The __________ odor from the garbage can made it impossible to stay in the kitchen for long.",
        chinese_question: "垃圾桶散发出的 __________ 气味使得在厨房里待很长时间是不可能的。",
        answers: [
            { option: "A", answer: "fragrant", chinese_answer: "芳香的", chinese_romanization: "fāngxiāng de" },
            { option: "B", answer: "fresh", chinese_answer: "新鲜的", chinese_romanization: "xīnxiān de" },
            { option: "C", answer: "fetid", chinese_answer: "恶臭的", chinese_romanization: "èchòu de" },
            { option: "D", answer: "clean", chinese_answer:"干净的", chinese_romanization: "gānjìng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'fetid' means smelling extremely unpleasant." +
            "<br><br>" +
            "(A) 'fragrant' means having a pleasant or sweet smell." +
            "<br><br>" +
            "(B) 'fresh' means recently made or obtained; not canned, frozen, or otherwise preserved." +
            "<br><br>" +
            "(D) 'clean' means free from dirt, marks, or stains.",
        chinese_explanation: "(C) '恶臭的' 一词意味着气味极其难闻的。" +
            "<br><br>" +
            "(A) '芳香的' 意味着有令人愉快或甜美的气味。" +
            "<br><br>" +
            "(B) '新鲜的' 意味着最近制作或获得的；未罐装、冷冻或以其他方式保存的。" +
            "<br><br>" +
            "(D) '干净的' 意味着没有污垢、痕迹或污渍的。"
    },
    {
        id: 2,
        question: "The weather forecast was __________, predicting heavy rain and strong winds for the entire weekend.",
        chinese_question: "天气预报 __________，预测整个周末会有大雨和强风。",
        answers: [
            { option: "A", answer: "bright", chinese_answer: "明亮的", chinese_romanization: "míngliàng de" },
            { option: "B", answer: "promising", chinese_answer: "有希望的", chinese_romanization: "yǒu xīwàng de" },
            { option: "C", answer: "dismal", chinese_answer: "阴沉的", chinese_romanization: "yīnchén de" },
            { option: "D", answer: "sunny", chinese_answer: "晴朗的", chinese_romanization: "qínglǎng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'dismal' means depressing; dreary." +
            "<br><br>" +
            "(A) 'bright' means giving out or reflecting a lot of light; shining." +
            "<br><br>" +
            "(B) 'promising' means showing signs of future success." +
            "<br><br>" +
            "(D) 'sunny' means bright with sunlight.",
        chinese_explanation: "(C) '阴沉的' 一词意味着令人沮丧的；阴郁的。" +
            "<br><br>" +
            "(A) '明亮的' 意味着发出或反射大量光线；闪耀的。" +
            "<br><br>" +
            "(B) '有希望的' 意味着显示出未来成功的迹象。" +
            "<br><br>" +
            "(D) '晴朗的' 意味着阳光明媚的。"
    },
    {
        id: 3,
        question: "In a barter system, some goods are considered __________ because they can be easily exchanged for other goods of similar value.",
        chinese_question: "在以物易物的系统中，有些商品被认为是 __________ 的，因为它们可以轻松地与其他价值相似的商品交换。",
        answers: [
            { option: "A", answer: "unique", chinese_answer: "独特的", chinese_romanization: "dútè de" },
            { option: "B", answer: "fungible", chinese_answer: "可替代的", chinese_romanization: "kě tìdài de" },
            { option: "C", answer: "rare", chinese_answer: "稀有的", chinese_romanization: "xīyǒu de" },
            { option: "D", answer: "irreplaceable", chinese_answer: "无法替代的", chinese_romanization: "wúfǎ tìdài de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'fungible' means (of goods contracted for without an individual specimen being specified) replaceable by another identical item; mutually interchangeable." +
            "<br><br>" +
            "(A) 'unique' means being the only one of its kind; unlike anything else." +
            "<br><br>" +
            "(C) 'rare' means not occurring very often." +
            "<br><br>" +
            "(D) 'irreplaceable' means impossible to replace if lost or damaged.",
        chinese_explanation: "(B) '可替代的' 一词意味着（货物没有指定个体样品的情况下）可以由另一个相同的项目替换；互换的。" +
            "<br><br>" +
            "(A) '独特的' 意味着唯一的；与任何其他不同的。" +
            "<br><br>" +
            "(C) '稀有的' 意味着不经常发生的。" +
            "<br><br>" +
            "(D) '无法替代的' 意味着如果丢失或损坏就无法替代的。"
    },
    {
        id: 4,
        question: "With the rising tensions between the two countries, conflict seemed __________.",
        chinese_question: "随着两国之间紧张局势的加剧，冲突似乎是 __________ 的。",
        answers: [
            { option: "A", answer: "improbable", chinese_answer: "不太可能的", chinese_romanization: "bù tài kěnéng de" },
            { option: "B", answer: "inevitable", chinese_answer: "不可避免的", chinese_romanization: "bù kě bìmiǎn de" },
            { option: "C", answer: "optional", chinese_answer: "可选择的", chinese_romanization: "kě xuǎnzé de" },
            { option: "D", answer: "avoidable", chinese_answer: "可避免的", chinese_romanization: "kě bìmiǎn de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'inevitable' means unavoidable or certain to happen." +
            "<br><br>" +
            "(A) 'improbable' means not likely to be true or to happen." +
            "<br><br>" +
            "(C) 'optional' means available to be chosen but not obligatory." +
            "<br><br>" +
            "(D) 'avoidable' means able to be avoided or prevented.",
        chinese_explanation: "(B) '不可避免的' 在比喻意义上意味着不可避免的或一定会发生的。" +
            "<br><br>" +
            "(A) '不太可能的' 意味着不太可能真实或发生的。" +
            "<br><br>" +
            "(C) '可选择的' 意味着可选择但非强制的。" +
            "<br><br>" +
            "(D) '可避免的' 意味着可以避免或预防的。"
    },
    {
        id: 5,
        question: "She paid __________ attention to every aspect of the project to ensure its success.",
        chinese_question: "她对项目的每个方面都给予__________的关注，以确保其成功。",
        answers: [
            { option: "A", answer: "vague", chinese_answer: "模糊的", chinese_romanization: "móhu de" },
            { option: "B", answer: "brief", chinese_answer: "简短的", chinese_romanization: "jiǎnduǎn de" },
            { option: "C", answer: "detailed", chinese_answer: "详细的", chinese_romanization: "xiángxì de" },
            { option: "D", answer: "simple", chinese_answer: "简单的", chinese_romanization: "jiǎndān de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'detailed' means having many details or facts; showing attention to detail. Figuratively, it can mean being meticulous and thorough." +
            "<br><br>" +
            "(A) 'vague' means of uncertain, indefinite, or unclear character or meaning." +
            "<br><br>" +
            "(B) 'brief' means lasting only a short time; concise." +
            "<br><br>" +
            "(D) 'simple' means easily understood or done; presenting no difficulty.",
        chinese_explanation: "(C) '详细的' 一词意味着有许多细节或事实；注重细节的。比喻地，它可以表示一丝不苟和彻底的。" +
            "<br><br>" +
            "(A) '模糊的' 意味着不确定、不明确或不清楚的性质或含义。" +
            "<br><br>" +
            "(B) '简短的' 意味着只持续短时间的；简洁的。" +
            "<br><br>" +
            "(D) '简单的' 意味着易于理解或完成；没有困难的。"
    },
    {
        id: 6,
        question: "His __________ motives in joining the charity were obvious when he asked for a high salary.",
        chinese_question: "他加入慈善机构的 __________ 动机在他要求高薪时变得显而易见。",
        answers: [
            { option: "A", answer: "mercenary", chinese_answer: "唯利是图的", chinese_romanization: "wéilìshìtú de" },
            { option: "B", answer: "altruistic", chinese_answer: "利他的", chinese_romanization: "lìtā de" },
            { option: "C", answer: "selfless", chinese_answer: "无私的", chinese_romanization: "wúsī de" },
            { option: "D", answer: "charitable", chinese_answer: "慈善的", chinese_romanization: "císhàn de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'mercenary' metaphorically means motivated solely by a desire for monetary or material gain." +
            "<br><br>" +
            "(B) 'altruistic' means showing a disinterested and selfless concern for the well-being of others; unselfish." +
            "<br><br>" +
            "(C) 'selfless' means concerned more with the needs and wishes of others than with one's own; unselfish." +
            "<br><br>" +
            "(D) 'charitable' means relating to the assistance of those in need.",
        chinese_explanation: "(A) '唯利是图的' 比喻仅仅为了金钱或物质利益而动机的。" +
            "<br><br>" +
            "(B) '利他的' 意味着表现出对他人福祉的无私关注；无私的。" +
            "<br><br>" +
            "(C) '无私的' 意味着更多地关注他人的需要和愿望，而不是自己的需要和愿望；无私的。" +
            "<br><br>" +
            "(D) '慈善的' 意味着与帮助那些需要帮助的人有关的。"
    },
    {
        id: 7,
        question: "Her __________ presentation skills made her a favorite at the company's annual meetings.",
        chinese_question: "她__________的演讲技巧使她成为公司年度会议上的宠儿。",
        answers: [
            { option: "A", answer: "awkward", chinese_answer: "笨拙的", chinese_romanization: "bènzhuō de" },
            { option: "B", answer: "sleek", chinese_answer: "流畅的", chinese_romanization: "liúchàng de" },
            { option: "C", answer: "clumsy", chinese_answer: "笨拙的", chinese_romanization: "bènzhuō de" },
            { option: "D", answer: "dull", chinese_answer: "无聊的", chinese_romanization: "wúliáo de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'sleek' means smooth and glossy. Figuratively, it can mean polished and sophisticated." +
            "<br><br>" +
            "(A) 'awkward' means causing difficulty; hard to do or deal with." +
            "<br><br>" +
            "(C) 'clumsy' means awkward in movement or in handling things." +
            "<br><br>" +
            "(D) 'dull' means lacking interest or excitement.",
        chinese_explanation: "(B) '流畅的'一词意味着光滑和有光泽的。比喻地，它可以表示精致和成熟。" +
            "<br><br>" +
            "(A) '笨拙的' 意味着引起困难；难以处理。" +
            "<br><br>" +
            "(C) '笨拙的' 意味着动作或处理事情时笨拙的。" +
            "<br><br>" +
            "(D) '无聊的' 意味着缺乏兴趣或兴奋。"
    },
    {
        id: 8,
        question: "Her __________ personality made her the life of every party.",
        chinese_question: "她 __________ 的个性使她成为每个聚会的灵魂人物。",
        answers: [
            { option: "A", answer: "exuberant", chinese_answer: "精力充沛的", chinese_romanization: "jīnglì chōngpèi de" },
            { option: "B", answer: "introverted", chinese_answer: "内向的", chinese_romanization: "nèixiàng de" },
            { option: "C", answer: "lethargic", chinese_answer: "昏昏欲睡的", chinese_romanization: "hūnhūn yù shuì de" },
            { option: "D", answer: "indifferent", chinese_answer: "无动于衷的", chinese_romanization: "wú dòng yú zhōng de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'exuberant' metaphorically means full of energy, excitement, and cheerfulness." +
            "<br><br>" +
            "(B) 'introverted' means shy, quiet, and typically interested in one's own thoughts and feelings rather than in spending time with other people." +
           "<br><br>" +
            "(C) 'lethargic' means affected by lethargy; sluggish and apathetic." +
            "<br><br>" +
            "(D) 'indifferent' means having no particular interest or sympathy; unconcerned.",
        chinese_explanation: "(A) '精力充沛的' 比喻充满能量、兴奋和愉快。" +
            "<br><br>" +
            "(B) '内向的' 意味着害羞、安静，通常对自己的想法和感受感兴趣，而不是与其他人共度时光。" +
            "<br><br>" +
            "(C) '昏昏欲睡的' 意味着受嗜睡影响的；迟钝和冷漠的。" +
            "<br><br>" +
            "(D) '无动于衷的' 意味着没有特别的兴趣或同情心；不关心的。"
    },
    {
        id: 9,
        question: "Her words were __________, leaving a lasting impact on everyone who heard them.",
        chinese_question: "她的话 __________，对每个听到的人留下了持久的影响。",
        answers: [
            { option: "A", answer: "resonant", chinese_answer: "有深远影响的", chinese_romanization: "yǒu shēnyuǎn yǐngxiǎng de" },
            { option: "B", answer: "trivial", chinese_answer: "微不足道的", chinese_romanization: "wēibùzúdào de" },
            { option: "C", answer: "meaningless", chinese_answer: "无意义的", chinese_romanization: "wú yìyì de" },
            { option: "D", answer: "insignificant", chinese_answer: "不重要的", chinese_romanization: "bù zhòngyào de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'resonant' metaphorically means having a powerful and lasting effect." +
            "<br><br>" +
            "(B) 'trivial' means of little value or importance." +
            "<br><br>" +
            "(C) 'meaningless' means having no meaning or significance." +
            "<br><br>" +
            "(D) 'insignificant' means too small or unimportant to be worth consideration.",
        chinese_explanation: "(A) '有深远影响的' 比喻具有强大和持久的影响。" +
            "<br><br>" +
            "(B) '微不足道的' 意味着价值或重要性很小。" +
            "<br><br>" +
            "(C) '无意义的' 意味着没有意义或重要性。" +
            "<br><br>" +
            "(D) '不重要的' 意味着太小或不重要而不值得考虑。"
    },
    {
        id: 10,
        question: "The belief that hard work leads to success is __________ in many cultures around the world.",
        chinese_question: "努力工作能带来成功的信念在世界许多文化中是 __________ 的。",
        answers: [
            { option: "A", answer: "rare", chinese_answer: "罕见", chinese_romanization: "hǎnjiàn" },
            { option: "B", answer: "prevalent", chinese_answer: "流行", chinese_romanization: "liúxíng" },
            { option: "C", answer: "isolated", chinese_answer: "孤立", chinese_romanization: "gūlì" },
            { option: "D", answer: "uncommon", chinese_answer: "不常见", chinese_romanization: "bù chángjiàn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'prevalent' means widespread or commonly accepted." +
            "<br><br>" +
            "(A) 'rare' means not occurring very often." +
            "<br><br>" +
            "(C) 'isolated' means far away from other places, buildings, or people." +
            "<br><br>" +
            "(D) 'uncommon' means out of the ordinary; rare.",
        chinese_explanation: "(B) '流行' 意味着广泛存在或普遍接受。" +
            "<br><br>" +
            "(A) '罕见' 意味着不经常发生。" +
            "<br><br>" +
            "(C) '孤立' 意味着远离其他地方、建筑或人。" +
            "<br><br>" +
            "(D) '不常见' 意味着不寻常；罕见。"
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
