// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The movie featured an __________ character who used a smartphone in a story set in the 1800s.",
        chinese_question: "这部电影中出现了一个 __________ 的角色，他在设定于19世纪的故事中使用智能手机。",
        answers: [
            { option: "A", answer: "anachronistic", chinese_answer: "时代错误的", chinese_romanization: "shídài cuòwù de" },
            { option: "B", answer: "modern", chinese_answer: "现代的", chinese_romanization: "xiàndài de" },
            { option: "C", answer: "futuristic", chinese_answer: "未来的", chinese_romanization: "wèilái de" },
            { option: "D", answer: "archaic", chinese_answer: "古老的", chinese_romanization: "gǔlǎo de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'anachronistic' means belonging to a period other than that being portrayed." +
            "<br><br>" +
            "(B) 'modern' means relating to the present or recent times." +
            "<br><br>" +
            "(C) 'futuristic' means having or involving very modern technology or design." +
            "<br><br>" +
            "(D) 'archaic' means very old or old-fashioned.",
        chinese_explanation: "(A) '时代错误的' 意味着属于所描绘时代以外的时期。" +
            "<br><br>" +
            "(B) '现代的' 意味着与现在或最近的时间有关。" +
            "<br><br>" +
            "(C) '未来的' 意味着具有或涉及非常现代的技术或设计。" +
            "<br><br>" +
            "(D) '古老的' 意味着非常老旧或过时的。"
    },
    {
        id: 2,
        question: "The farmer had a herd of __________ animals grazing in the field, providing milk and meat for the community.",
        chinese_question: "农夫在田里放牧了一群 __________ 动物，为社区提供牛奶和肉类。",
        answers: [
            { option: "A", answer: "feline", chinese_answer: "猫科", chinese_romanization: "māokē" },
            { option: "B", answer: "avian", chinese_answer: "鸟类", chinese_romanization: "niǎolèi" },
            { option: "C", answer: "bovine", chinese_answer: "牛类", chinese_romanization: "niú lèi" },
            { option: "D", answer: "canine", chinese_answer: "犬类", chinese_romanization: "quǎnlèi" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'bovine' means relating to or affecting cattle." +
            "<br><br>" +
            "(A) 'feline' means relating to or affecting cats." +
            "<br><br>" +
            "(B) 'avian' means relating to or affecting birds." +
            "<br><br>" +
            "(D) 'canine' means relating to or affecting dogs.",
        chinese_explanation: "(C) '牛类' 一词意味着与牛有关或影响牛。" +
            "<br><br>" +
            "(A) '猫科' 意味着与猫有关或影响猫。" +
            "<br><br>" +
            "(B) '鸟类' 意味着与鸟有关或影响鸟。" +
            "<br><br>" +
            "(D) '犬类' 意味着与狗有关或影响狗。"
    },
    {
        id: 3,
        question: "The negotiations were hindered by the __________ attitude of the representatives, who seemed more interested in arguing than reaching an agreement.",
        chinese_question: "谈判因代表们的 __________ 态度而受阻，他们似乎更感兴趣于争论而不是达成协议。",
        answers: [
            { option: "A", answer: "peaceful", chinese_answer: "和平的", chinese_romanization: "hépíng de" },
            { option: "B", answer: "belligerent", chinese_answer: "好战的", chinese_romanization: "hàozhàn de" },
            { option: "C", answer: "cooperative", chinese_answer: "合作的", chinese_romanization: "hézuò de" },
            { option: "D", answer: "friendly", chinese_answer: "友好的", chinese_romanization: "yǒuhǎo de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'belligerent' means hostile and aggressive." +
            "<br><br>" +
            "(A) 'peaceful' means free from disturbance; tranquil." +
            "<br><br>" +
            "(C) 'cooperative' means involving mutual assistance in working toward a common goal." +
            "<br><br>" +
            "(D) 'friendly' means kind and pleasant.",
        chinese_explanation: "(B) '好战的' 一词意味着敌对和好斗的。" +
            "<br><br>" +
            "(A) '和平的' 意味着没有干扰的；宁静的。" +
            "<br><br>" +
            "(C) '合作的' 意味着在共同目标的工作中涉及相互帮助的。" +
            "<br><br>" +
            "(D) '友好的' 意味着友善和愉快的。"
    },
    {
        id: 4,
        question: "The idea of animal testing was __________ to the activist, who had devoted her life to the humane treatment of all creatures.",
        chinese_question: "动物试验的想法对这位活动家来说是 __________，她毕生致力于所有生物的仁慈对待。",
        answers: [
            { option: "A", answer: "beloved", chinese_answer: "心爱的", chinese_romanization: "xīn'ài de" },
            { option: "B", answer: "anathema", chinese_answer: "令人厌恶的", chinese_romanization: "lìng rén yànwù de" },
            { option: "C", answer: "accepted", chinese_answer: "被接受的", chinese_romanization: "bèi jiēshòu de" },
            { option: "D", answer: "common", chinese_answer: "普遍的", chinese_romanization: "pǔbiàn de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'anathema' means something or someone that one vehemently dislikes." +
            "<br><br>" +
            "(A) 'beloved' means dearly loved." +
            "<br><br>" +
            "(C) 'accepted' means generally believed or recognized as valid or correct." +
            "<br><br>" +
            "(D) 'common' means occurring, found, or done often; prevalent.",
        chinese_explanation: "(B) '令人厌恶的' 一词意味着某物或某人是某人强烈不喜欢的。" +
            "<br><br>" +
            "(A) '心爱的' 意味着亲爱的。" +
            "<br><br>" +
            "(C) '被接受的' 意味着普遍被认为或认可为有效或正确的。" +
            "<br><br>" +
            "(D) '普遍的' 意味着经常发生、发现或完成的；流行的。"
    },
    {
        id: 5,
        question: "He found it hard to focus on his studies with so many __________ distractions around him, from noisy roommates to social media notifications.",
        chinese_question: "他发现很难集中注意力学习，因为周围有太多 __________ 的干扰，从吵闹的室友到社交媒体通知。",
        answers: [
            { option: "A", answer: "relevant", chinese_answer: "相关的", chinese_romanization: "xiāngguān de" },
            { option: "B", answer: "essential", chinese_answer: "必要的", chinese_romanization: "bìyào de" },
            { option: "C", answer: "integral", chinese_answer: "整体的", chinese_romanization: "zhěngtǐ de" },
            { option: "D", answer: "extraneous", chinese_answer: "无关的", chinese_romanization: "wúguān de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'extraneous' means irrelevant or unrelated to the subject being dealt with." +
            "<br><br>" +
            "(A) 'relevant' means closely connected or appropriate to what is being done or considered." +
            "<br><br>" +
            "(B) 'essential' means absolutely necessary; extremely important." +
            "<br><br>" +
            "(C) 'integral' means necessary to make a whole complete; essential or fundamental.",
        chinese_explanation: "(D) '无关的' 一词意味着与所处理的主题无关或不相关的。" +
            "<br><br>" +
            "(A) '相关的' 意味着与正在做或考虑的事情密切相关或适当的。" +
            "<br><br>" +
            "(B) '必要的' 意味着绝对必要的；极其重要的。" +
            "<br><br>" +
            "(C) '整体的' 意味着使整体完整所必需的；基本的或根本的。"
    },
    {
        id: 6,
        question: "His __________ apology was evident when he quickly repeated the same mistake, showing he wasn't truly sorry.",
        chinese_question: "他的 __________ 道歉显而易见，因为他很快又犯了同样的错误，表明他并不是真的感到抱歉。",
        answers: [
            { option: "A", answer: "sincere", chinese_answer: "真诚的", chinese_romanization: "zhēnchéng de" },
            { option: "B", answer: "disingenuous", chinese_answer: "不真诚的", chinese_romanization: "bù zhēnchéng de" },
            { option: "C", answer: "genuine", chinese_answer: "真实的", chinese_romanization: "zhēnshí de" },
            { option: "D", answer: "honest", chinese_answer: "诚实的", chinese_romanization: "chéngshí de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'disingenuous' means not candid or sincere, typically by pretending that one knows less about something than one really does." +
            "<br><br>" +
            "(A) 'sincere' means free from pretense or deceit; proceeding from genuine feelings." +
            "<br><br>" +
            "(C) 'genuine' means truly what something is said to be; authentic." +
            "<br><br>" +
            "(D) 'honest' means free of deceit and untruthfulness; sincere.",
        chinese_explanation: "(B) '不真诚的' 一词意味着不坦率或不真诚，通常是假装自己对某事了解不足。" +
            "<br><br>" +
            "(A) '真诚的' 意味着没有伪装或欺骗；出自真实感情的。" +
            "<br><br>" +
            "(C) '真实的' 意味着确实是某物所说的；真实的。" +
            "<br><br>" +
            "(D) '诚实的' 意味着没有欺骗和谎言；真诚的。"
    },
    {
        id: 7,
        question: "The __________ behavior of the invaders left the local population in fear for their lives and property.",
        chinese_question: "入侵者的 __________ 行为使当地居民对他们的生命和财产感到恐惧。",
        answers: [
            { option: "A", answer: "benevolent", chinese_answer: "仁慈的", chinese_romanization: "réncí de" },
            { option: "B", answer: "rapacious", chinese_answer: "贪婪的", chinese_romanization: "tānlán de" },
            { option: "C", answer: "charitable", chinese_answer: "慈善的", chinese_romanization: "císhàn de" },
            { option: "D", answer: "generous", chinese_answer: "慷慨的", chinese_romanization: "kāngkǎi de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'rapacious' means aggressively greedy or grasping." +
            "<br><br>" +
            "(A) 'benevolent' means well-meaning and kindly." +
            "<br><br>" +
            "(C) 'charitable' means relating to the assistance of those in need." +
            "<br><br>" +
            "(D) 'generous' means showing a readiness to give more of something, especially money, than is strictly necessary or expected.",
        chinese_explanation: "(B) '贪婪的' 一词意味着侵略性地贪婪或抓取的。" +
            "<br><br>" +
            "(A) '仁慈的' 意味着善意和友好的。" +
            "<br><br>" +
            "(C) '慈善的' 意味着与帮助那些需要帮助的人有关的。" +
            "<br><br>" +
            "(D) '慷慨的' 意味着表现出比严格必要或预期更多地给予某物，尤其是金钱的准备。"
    },
    {
        id: 8,
        question: "His __________ manner at the formal dinner made others feel uncomfortable and awkward.",
        chinese_question: "他在正式晚宴上的 __________ 举止让其他人感到不适和尴尬。",
        answers: [
            { option: "A", answer: "sophisticated", chinese_answer: "老练的", chinese_romanization: "lǎoliàn de" },
            { option: "B", answer: "polite", chinese_answer: "有礼貌的", chinese_romanization: "yǒu lǐmào de" },
            { option: "C", answer: "gauche", chinese_answer: "笨拙的", chinese_romanization: "bènzhuō de" },
            { option: "D", answer: "refined", chinese_answer: "精致的", chinese_romanization: "jīngzhì de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'gauche' means lacking ease or grace; unsophisticated and socially awkward." +
            "<br><br>" +
            "(A) 'sophisticated' means having, revealing, or involving a great deal of worldly experience and knowledge of fashion and culture." +
            "<br><br>" +
            "(B) 'polite' means having or showing behavior that is respectful and considerate of other people." +
            "<br><br>" +
            "(D) 'refined' means with impurities or unwanted elements having been removed by processing.",
        chinese_explanation: "(C) '笨拙的' 一词意味着缺乏优雅或优雅；不老练和社交尴尬的。" +
            "<br><br>" +
            "(A) '老练的' 意味着具有、透露或涉及丰富的世俗经验和时尚文化知识。" +
            "<br><br>" +
            "(B) '有礼貌的' 意味着有或表现出尊重和体贴他人的行为。" +
            "<br><br>" +
            "(D) '精致的' 意味着通过加工去除杂质或不需要的元素。"
    },
    {
        id: 9,
        question: "The tourist shops were filled with __________ souvenirs, full of bright colors and gaudy designs.",
        chinese_question: "旅游商店里充满了 __________ 的纪念品，充满了鲜艳的色彩和华丽的设计。",
        answers: [
            { option: "A", answer: "elegant", chinese_answer: "优雅", chinese_romanization: "yōuyǎ" },
            { option: "B", answer: "sophisticated", chinese_answer: "精致", chinese_romanization: "jīngzhì" },
            { option: "C", answer: "tasteful", chinese_answer: "有品味", chinese_romanization: "yǒu pǐnwèi" },
            { option: "D", answer: "kitschy", chinese_answer: "俗气", chinese_romanization: "súqì" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'kitschy' means considered to be in poor taste but appreciated in an ironic or knowing way." +
            "<br><br>" +
            "(A) 'elegant' means pleasingly graceful and stylish in appearance or manner." +
            "<br><br>" +
            "(B) 'sophisticated' means having, revealing, or proceeding from a great deal of worldly experience and knowledge of fashion and culture." +
            "<br><br>" +
            "(C) 'tasteful' means showing good aesthetic judgment or appropriate behavior.",
        chinese_explanation: "(D) '俗气' 一词意味着被认为品味差，但在讽刺或有意知道的方式中被欣赏。" +
            "<br><br>" +
            "(A) '优雅' 意味着外观或举止令人愉悦地优美和时尚。" +
            "<br><br>" +
            "(B) '精致' 意味着具有、透露或来自丰富的世俗经验和对时尚和文化的了解。" +
            "<br><br>" +
            "(C) '有品味' 意味着表现出良好的审美判断或适当的行为。"
    },
    {
        id: 10,
        question: "He dismissed the problem as __________, not realizing how serious it actually was.",
        chinese_question: "他把问题当作 __________，没有意识到它实际上有多严重。",
        answers: [
            { option: "A", answer: "significant", chinese_answer: "重要", chinese_romanization: "zhòngyào" },
            { option: "B", answer: "important", chinese_answer: "重要", chinese_romanization: "zhòngyào" },
            { option: "C", answer: "trifling", chinese_answer: "琐碎", chinese_romanization: "suǒsuì" },
            { option: "D", answer: "major", chinese_answer: "重大", chinese_romanization: "zhòngdà" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'trifling' means unimportant or trivial." +
            "<br><br>" +
            "(A) 'significant' means sufficiently great or important to be worthy of attention." +
            "<br><br>" +
            "(B) 'important' means of great significance or value." +
            "<br><br>" +
            "(D) 'major' means important, serious, or significant.",
        chinese_explanation: "(C) '琐碎' 一词意味着不重要或微不足道。" +
            "<br><br>" +
            "(A) '重要' 意味着足够重要或值得注意的。" +
            "<br><br>" +
            "(B) '重要' 意味着具有重大意义或价值。" +
            "<br><br>" +
            "(D) '重大' 意味着重要、严重或显著的。"
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
