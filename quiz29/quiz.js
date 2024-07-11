// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The new manager's __________ personality quickly won over the staff, making the workplace much more pleasant.",
        chinese_question: "新经理的 __________ 性格迅速赢得了员工的好感，使工作场所更加愉快。",
        answers: [
            { option: "A", answer: "rude", chinese_answer: "粗鲁的", chinese_romanization: "cūlǔ de" },
            { option: "B", answer: "affable", chinese_answer: "和蔼的", chinese_romanization: "hé'ǎi de" },
            { option: "C", answer: "stern", chinese_answer: "严厉的", chinese_romanization: "yánlì de" },
            { option: "D", answer: "aloof", chinese_answer: "冷漠的", chinese_romanization: "lěngmò de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'affable' means friendly, good-natured, or easy to talk to." +
            "<br><br>" +
            "(A) 'rude' means offensively impolite or ill-mannered." +
            "<br><br>" +
            "(C) 'stern' means serious and unrelenting, especially in the assertion of authority and exercise of discipline." +
            "<br><br>" +
            "(D) 'aloof' means not friendly or forthcoming; cool and distant.",
        chinese_explanation: "(B) '和蔼的' 一词意味着友好、性格好或容易交谈。" +
            "<br><br>" +
            "(A) '粗鲁的' 意味着冒犯性的不礼貌或行为粗暴。" +
            "<br><br>" +
            "(C) '严厉的' 意味着严肃且不宽容，特别是在主张权威和行使纪律方面。" +
            "<br><br>" +
            "(D) '冷漠的' 意味着不友好或不乐于交谈；冷淡的。"
    },
    {
        id: 2,
        question: "The rumors about his past were so __________ that few people believed them.",
        chinese_question: "关于他过去的谣言如此 __________，几乎没有人相信。",
        answers: [
            { option: "A", answer: "believable", chinese_answer: "可信的", chinese_romanization: "kěxìn de" },
            { option: "B", answer: "plausible", chinese_answer: "合理的", chinese_romanization: "hélǐ de" },
            { option: "C", answer: "grotesque", chinese_answer: "荒唐的", chinese_romanization: "huāngtáng de" },
            { option: "D", answer: "logical", chinese_answer: "合逻辑的", chinese_romanization: "hé luójí de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'grotesque' figuratively means absurd or distorted in a way that is shocking or offensive." +
            "<br><br>" +
            "(A) 'believable' means able to be believed; credible." +
            "<br><br>" +
            "(B) 'plausible' means seeming reasonable or probable." +
            "<br><br>" +
            "(D) 'logical' means of or according to the rules of logic or formal argument.",
        chinese_explanation: "(C) '荒唐的' 在比喻意义上意味着荒谬或扭曲的，以至于令人震惊或反感。" +
            "<br><br>" +
            "(A) '可信的' 意味着能够被相信的；可信的。" +
            "<br><br>" +
            "(B) '合理的' 意味着看似合理或可能的。" +
            "<br><br>" +
            "(D) '合逻辑的' 意味着按照逻辑或正式论证的规则。"
    },
    {
        id: 3,
        question: "Her description of the event was __________, capturing the general idea but missing some details.",
        chinese_question: "她对事件的描述是 __________ 的，捕捉到大概的意思，但遗漏了一些细节。",
        answers: [
            { option: "A", answer: "vague", chinese_answer: "含糊的", chinese_romanization: "hánhú de" },
            { option: "B", answer: "approximate", chinese_answer: "大概的", chinese_romanization: "dàgài de" },
            { option: "C", answer: "thorough", chinese_answer: "彻底的", chinese_romanization: "chèdǐ de" },
            { option: "D", answer: "detailed", chinese_answer: "详细的", chinese_romanization: "xiángxì de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'approximate' figuratively means close to the real thing but not completely accurate or exact." +
            "<br><br>" +
            "(A) 'vague' means of uncertain, indefinite, or unclear character or meaning." +
            "<br><br>" +
            "(C) 'thorough' means complete with regard to every detail." +
            "<br><br>" +
            "(D) 'detailed' means having many details or facts; showing attention to detail.",
        chinese_explanation: "(B) '大概的' 在比喻意义上意味着接近真实的东西，但不完全准确或精确。" +
            "<br><br>" +
            "(A) '含糊的' 意味着不确定、无限或不清楚的特性或意义。" +
            "<br><br>" +
            "(C) '彻底的' 意味着涉及到每个细节的完成。" +
            "<br><br>" +
            "(D) '详细的' 意味着有很多细节或事实；显示出对细节的关注。"
    },
    {
        id: 4,
        question: "The company's __________ issues with quality control are affecting its reputation and customer satisfaction.",
        chinese_question: "公司在质量控制方面的 __________ 问题影响了其声誉和客户满意度。",
        answers: [
            { option: "A", answer: "sporadic", chinese_answer: "零星的", chinese_romanization: "língxīng de" },
            { option: "B", answer: "one-time", chinese_answer: "一次性的", chinese_romanization: "yīcìxìng de" },
            { option: "C", answer: "recurrent", chinese_answer: "反复的", chinese_romanization: "fǎnfù de" },
            { option: "D", answer: "isolated", chinese_answer: "孤立的", chinese_romanization: "gūlì de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'recurrent' figuratively means happening repeatedly over time." +
            "<br><br>" +
            "(A) 'sporadic' means occurring at irregular intervals or only in a few places; scattered or isolated." +
            "<br><br>" +
            "(B) 'one-time' means occurring, done, or used only once." +
            "<br><br>" +
            "(D) 'isolated' means far away from other places, buildings, or people; remote.",
        chinese_explanation: "(C) '反复的' 在比喻意义上意味着重复发生的。" +
            "<br><br>" +
            "(A) '零星的' 意味着不规律地发生或只在少数地方发生的；分散或孤立的。" +
            "<br><br>" +
            "(B) '一次性的' 意味着只发生一次、完成一次或使用一次的。" +
            "<br><br>" +
            "(D) '孤立的' 意味着远离其他地方、建筑或人的；偏远的。"
    },
    {
        id: 5,
        question: "His __________ approach to problem-solving often led to innovative and well-thought-out solutions.",
        chinese_question: "他 __________ 的问题解决方法常常带来创新且深思熟虑的解决方案。",
        answers: [
            { option: "A", answer: "careless", chinese_answer: "粗心的", chinese_romanization: "cūxīn de" },
            { option: "B", answer: "impulsive", chinese_answer: "冲动的", chinese_romanization: "chōngdòng de" },
            { option: "C", answer: "studious", chinese_answer: "勤勉的", chinese_romanization: "qínmiǎn de" },
            { option: "D", answer: "superficial", chinese_answer: "表面的", chinese_romanization: "biǎomiàn de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'studious' figuratively means showing great care or attention in doing something." +
            "<br><br>" +
            "(A) 'careless' means not giving sufficient attention or thought to avoiding harm or errors." +
            "<br><br>" +
            "(B) 'impulsive' means acting or done without forethought." +
            "<br><br>" +
            "(D) 'superficial' means existing or occurring at or on the surface.",
        chinese_explanation: "(C) '勤勉的' 在比喻意义上意味着在做某事时表现出极大的关心或注意。" +
            "<br><br>" +
            "(A) '粗心的' 意味着没有给予足够的注意或考虑以避免伤害或错误。" +
            "<br><br>" +
            "(B) '冲动的' 意味着在没有事先考虑的情况下行动或完成的。" +
            "<br><br>" +
            "(D) '表面的' 意味着存在或发生在表面上。"
    },
    {
        id: 6,
        question: "Her uncle's __________ advice, like 'just be yourself' and 'follow your dreams,' didn't provide any real guidance.",
        chinese_question: "她叔叔的 __________ 建议，例如“做你自己”和“追随你的梦想”，没有提供任何真正的指导。",
        answers: [
            { option: "A", answer: "specific", chinese_answer: "具体的", chinese_romanization: "jùtǐ de" },
            { option: "B", answer: "practical", chinese_answer: "实用的", chinese_romanization: "shíyòng de" },
            { option: "C", answer: "detailed", chinese_answer: "详细的", chinese_romanization: "xiángxì de" },
            { option: "D", answer: "platitudinous", chinese_answer: "陈词滥调的", chinese_romanization: "chéncí làndiào de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'platitudinous' means dull and unoriginal, often overused." +
            "<br><br>" +
            "(A) 'specific' means clearly defined or identified." +
            "<br><br>" +
            "(B) 'practical' means useful and sensible." +
            "<br><br>" +
            "(C) 'detailed' means including a lot of information.",
        chinese_explanation: "(D) '陈词滥调的' 意思是乏味且没有新意，通常被过度使用。" +
            "<br><br>" +
            "(A) '具体的' 意思是清楚地定义或识别的。" +
            "<br><br>" +
            "(B) '实用的' 意思是有用且明智的。" +
            "<br><br>" +
            "(C) '详细的' 意思是包括很多信息。"
    },
    {
        id: 7,
        question: "Her __________ ambition drove her to achieve great success in her career.",
        chinese_question: "她的__________野心驱使她在事业上取得了巨大成功。",
        answers: [
            { option: "A", answer: "small", chinese_answer: "小的", chinese_romanization: "xiǎo de" },
            { option: "B", answer: "average", chinese_answer: "平均的", chinese_romanization: "píngjūn de" },
            { option: "C", answer: "gigantic", chinese_answer: "巨大的", chinese_romanization: "jùdà de" },
            { option: "D", answer: "modest", chinese_answer: "谦虚的", chinese_romanization: "qiānxū de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'gigantic' means extremely large." +
            "<br><br>" +
            "(A) 'small' means of a size that is less than normal or usual." +
            "<br><br>" +
            "(B) 'average' means typical or usual." +
            "<br><br>" +
            "(D) 'modest' means unassuming or moderate in the estimation of one's abilities.",
        chinese_explanation: "(C) '巨大的'一词意味着极大的。" +
            "<br><br>" +
            "(A) '小的' 意味着小于正常或通常大小的。" +
            "<br><br>" +
            "(B) '平均的' 意味着典型或通常的。" +
            "<br><br>" +
            "(D) '谦虚的' 意味着对自己能力的估计不高的。"
    },
    {
        id: 8,
        question: "Her ideas were __________, often following well-established patterns.",
        chinese_question: "她的想法是 __________ 的，经常遵循已确立的模式。",
        answers: [
            { option: "A", answer: "conventional", chinese_answer: "传统的", chinese_romanization: "chuántǒng de" },
            { option: "B", answer: "innovative", chinese_answer: "创新的", chinese_romanization: "chuàngxīn de" },
            { option: "C", answer: "radical", chinese_answer: "激进的", chinese_romanization: "jījìn de" },
            { option: "D", answer: "spontaneous", chinese_answer: "自发的", chinese_romanization: "zìfā de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'conventional' metaphorically means traditional and ordinary." +
            "<br><br>" +
            "(B) 'innovative' means featuring new methods; advanced and original." +
            "<br><br>" +
            "(C) 'radical' means relating to or affecting the fundamental nature of something; far-reaching or thorough." +
            "<br><br>" +
            "(D) 'spontaneous' means performed or occurring as a result of a sudden inner impulse or inclination and without premeditation or external stimulus.",
        chinese_explanation: "(A) '传统的' 比喻传统和普通的。" +
            "<br><br>" +
            "(B) '创新的' 意味着具有新方法的；先进和原创的。" +
            "<br><br>" +
            "(C) '激进的' 意味着涉及或影响某物的基本性质；深远或彻底的。" +
            "<br><br>" +
            "(D) '自发的' 意味着作为突然的内心冲动或倾向的结果而进行或发生的，而不是预谋或外部刺激的。"
    },
    {
        id: 9,
        question: "He presented __________ evidence in court, hoping to mislead the jury.",
        chinese_question: "他在法庭上提供了__________证据，希望误导陪审团。",
        answers: [
            { option: "A", answer: "genuine", chinese_answer: "真正的", chinese_romanization: "zhēnzhèng de" },
            { option: "B", answer: "counterfeit", chinese_answer: "伪造的", chinese_romanization: "wěizào de" },
            { option: "C", answer: "authentic", chinese_answer: "真实的", chinese_romanization: "zhēnshí de" },
            { option: "D", answer: "real", chinese_answer: "真的", chinese_romanization: "zhēn de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'counterfeit' means made in exact imitation of something valuable with the intention to deceive or defraud. Figuratively, it can mean fake or false information presented to deceive." +
            "<br><br>" +
            "(A) 'genuine' means truly what something is said to be; authentic." +
            "<br><br>" +
            "(C) 'authentic' means of undisputed origin and not a copy; genuine." +
            "<br><br>" +
            "(D) 'real' means actually existing as a thing or occurring in fact.",
        chinese_explanation: "(B) '伪造的'一词意味着完全模仿某种有价值的东西，意图欺骗或诈骗。比喻地，它可以表示假冒或虚假的信息，以欺骗。" +
            "<br><br>" +
            "(A) '真正的' 意味着确实是所说的那样；真实的。" +
            "<br><br>" +
            "(C) '真实的' 意味着无可争议的起源而不是复制品；真实的。" +
            "<br><br>" +
            "(D) '真的' 意味着实际上存在的东西或实际发生的事情。"
    },
    {
        id: 10,
        question: "The impact of her work was __________ in the community's improved well-being.",
        chinese_question: "她工作的影响在社区的改善福祉中是 __________ 的。",
        answers: [
            { option: "A", answer: "visible", chinese_answer: "可见的", chinese_romanization: "kějiàn de" },
            { option: "B", answer: "negligible", chinese_answer: "微不足道的", chinese_romanization: "wēibùzúdào de" },
            { option: "C", answer: "invisible", chinese_answer: "不可见的", chinese_romanization: "bù kějiàn de" },
            { option: "D", answer: "uncertain", chinese_answer: "不确定的", chinese_romanization: "bù quèdìng de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'visible' metaphorically means apparent or noticeable." +
            "<br><br>" +
            "(B) 'negligible' means so small or unimportant as to be not worth considering; insignificant." +
            "<br><br>" +
            "(C) 'invisible' means unable to be seen." +
            "<br><br>" +
            "(D) 'uncertain' means not able to be relied on; not known or definite.",
        chinese_explanation: "(A) '可见的' 比喻明显或可注意到的。" +
            "<br><br>" +
            "(B) '微不足道的' 意味着小到或不重要到不值得考虑的；微不足道的。" +
            "<br><br>" +
            "(C) '不可见的' 意味着无法看到的。" +
            "<br><br>" +
            "(D) '不确定的' 意味着不能依赖的；未知或不确定的。"
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
