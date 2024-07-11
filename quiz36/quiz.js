// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "His comments were __________ and only served to complicate the discussion further.",
        chinese_question: "他的评论是 __________ 的，只会进一步使讨论复杂化。",
        answers: [
            { option: "A", answer: "relevant", chinese_answer: "相关的", chinese_romanization: "xiāngguān de" },
            { option: "B", answer: "insightful", chinese_answer: "有见地的", chinese_romanization: "yǒu jiàndì de" },
            { option: "C", answer: "unnecessary", chinese_answer: "不必要的", chinese_romanization: "bù bìyào de" },
            { option: "D", answer: "crucial", chinese_answer: "关键的", chinese_romanization: "guānjiàn de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'unnecessary' figuratively means not serving a useful purpose." +
            "<br><br>" +
            "(A) 'relevant' means closely connected or appropriate to what is being done or considered." +
            "<br><br>" +
            "(B) 'insightful' means having or showing an accurate and deep understanding; perceptive." +
            "<br><br>" +
            "(D) 'crucial' means decisive or critical, especially in the success or failure of something.",
        chinese_explanation: "(C) '不必要的' 在比喻意义上意味着没有起到有用的作用。" +
            "<br><br>" +
            "(A) '相关的' 意味着与正在进行或考虑的事情密切相关或适当的。" +
            "<br><br>" +
            "(B) '有见地的' 意味着具有或表现出准确和深入理解的；有洞察力的。" +
            "<br><br>" +
            "(D) '关键的' 意味着决定性的或关键的，尤其是在某件事的成功或失败方面。"
    },
    {
        id: 2,
        question: "The artist's unique style is __________ to her work, making it easily recognizable.",
        chinese_question: "艺术家的独特风格是她作品中 __________ 的，使其易于识别。",
        answers: [
            { option: "A", answer: "foreign", chinese_answer: "外来的", chinese_romanization: "wàilái de" },
            { option: "B", answer: "inherent", chinese_answer: "固有的", chinese_romanization: "gùyǒu de" },
            { option: "C", answer: "external", chinese_answer: "外部的", chinese_romanization: "wàibù de" },
            { option: "D", answer: "irrelevant", chinese_answer: "无关的", chinese_romanization: "wúguān de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'inherent' figuratively means being an inseparable part of something." +
            "<br><br>" +
            "(A) 'foreign' means strange and unfamiliar." +
            "<br><br>" +
            "(C) 'external' means belonging to or forming the outer surface or structure of something." +
            "<br><br>" +
            "(D) 'irrelevant' means not connected with or relevant to something.",
        chinese_explanation: "(B) '固有的' 在比喻意义上意味着作为某物不可分割的一部分。" +
            "<br><br>" +
            "(A) '外来的' 意味着陌生和不熟悉的。" +
            "<br><br>" +
            "(C) '外部的' 意味着属于或形成某物的外表面或结构的。" +
            "<br><br>" +
            "(D) '无关的' 意味着与某事无关的。"
    },
    {
        id: 3,
        question: "He was __________ in his work, ensuring that every detail was perfect.",
        chinese_question: "他对工作非常 __________，确保每一个细节都完美无缺。",
        answers: [
            { option: "A", answer: "fastidious", chinese_answer: "挑剔的", chinese_romanization: "tiāotì de" },
            { option: "B", answer: "sloppy", chinese_answer: "马虎的", chinese_romanization: "mǎhǔ de" },
            { option: "C", answer: "hasty", chinese_answer: "匆忙的", chinese_romanization: "cōngmáng de" },
            { option: "D", answer: "neglectful", chinese_answer: "忽视的", chinese_romanization: "hūshì de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'fastidious' metaphorically means very concerned about matters of cleanliness or detail." +
            "<br><br>" +
            "(B) 'sloppy' means careless and unsystematic; excessively casual." +
            "<br><br>" +
            "(C) 'hasty' means done with excessive speed or urgency; hurried." +
            "<br><br>" +
            "(D) 'neglectful' means failing to take proper care in doing something.",
        chinese_explanation: "(A) '挑剔的' 比喻对清洁或细节非常关注。" +
            "<br><br>" +
            "(B) '马虎的' 意味着粗心和无系统的；过分随意的。" +
            "<br><br>" +
            "(C) '匆忙的' 意味着过快或紧急地完成的；急促的。" +
            "<br><br>" +
            "(D) '忽视的' 意味着未能妥善照料。"
    },
    {
        id: 4,
        question: "The movie's plot was so __________ that the audience could predict every twist and turn.",
        chinese_question: "这部电影的情节如此 __________，观众可以预测每一个转折。",
        answers: [
            { option: "A", answer: "original", chinese_answer: "原创的", chinese_romanization: "yuánchuàng de" },
            { option: "B", answer: "fresh", chinese_answer: "新鲜的", chinese_romanization: "xīnxiān de" },
            { option: "C", answer: "hackneyed", chinese_answer: "陈腐的", chinese_romanization: "chénfǔ de" },
            { option: "D", answer: "unique", chinese_answer: "独特的", chinese_romanization: "dútè de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'hackneyed' means lacking significance through having been overused; unoriginal and trite." +
            "<br><br>" +
            "(A) 'original' means present or existing from the beginning; first or earliest." +
            "<br><br>" +
            "(B) 'fresh' means not previously known or used; new or different." +
            "<br><br>" +
            "(D) 'unique' means being the only one of its kind; unlike anything else.",
        chinese_explanation: "(C) '陈腐的' 一词意味着由于被过度使用而缺乏意义；非原创和陈词滥调的。" +
            "<br><br>" +
            "(A) '原创的' 意味着从一开始就存在的；第一个或最早的。" +
            "<br><br>" +
            "(B) '新鲜的' 意味着以前未知或未使用的；新的或不同的。" +
            "<br><br>" +
            "(D) '独特的' 意味着独一无二的；不像其他任何东西的。"
    },
    {
        id: 5,
        question: "She felt __________ ignorance about the troubles in the world, focusing only on her own happiness.",
        chinese_question: "她对世界上的麻烦感到 __________ 无知，只关注自己的幸福。",
        answers: [
            { option: "A", answer: "aware", chinese_answer: "了解", chinese_romanization: "liǎojiě" },
            { option: "B", answer: "informed", chinese_answer: "知情", chinese_romanization: "zhīqíng" },
            { option: "C", answer: "concerned", chinese_answer: "担心", chinese_romanization: "dānxīn" },
            { option: "D", answer: "blissful", chinese_answer: "幸福", chinese_romanization: "xìngfú" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'blissful' means providing perfect happiness or great joy." +
            "<br><br>" +
            "(A) 'aware' means having knowledge or perception of a situation or fact." +
            "<br><br>" +
            "(B) 'informed' means having or showing knowledge of a particular subject or situation." +
            "<br><br>" +
            "(C) 'concerned' means worried, troubled, or anxious.",
        chinese_explanation: "(D) '幸福' 意味着提供完美的幸福或极大的喜悦。" +
            "<br><br>" +
            "(A) '了解' 意味着对某种情况或事实有知识或感知。" +
            "<br><br>" +
            "(B) '知情' 意味着对特定主题或情况有知识或表现出知识。" +
            "<br><br>" +
            "(C) '担心' 意味着担心、困扰或焦虑。"
    },
    {
        id: 6,
        question: "Honesty is __________ to building strong relationships.",
        chinese_question: "诚实对于建立牢固的关系是__________的。",
        answers: [
            { option: "A", answer: "peripheral", chinese_answer: "周边的", chinese_romanization: "zhōubiān de" },
            { option: "B", answer: "central", chinese_answer: "中心的", chinese_romanization: "zhōngxīn de" },
            { option: "C", answer: "distant", chinese_answer: "遥远的", chinese_romanization: "yáoyuǎn de" },
            { option: "D", answer: "remote", chinese_answer: "偏远的", chinese_romanization: "piānyuǎn de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'central' means of, at, or forming the center. Figuratively, it can mean essential or of primary importance." +
            "<br><br>" +
            "(A) 'peripheral' means relating to or situated on the edge or periphery of something." +
            "<br><br>" +
            "(C) 'distant' means far away in space or time." +
            "<br><br>" +
            "(D) 'remote' means situated far from the main centers of population; distant.",
        chinese_explanation: "(B) '中心的'一词意味着在中心的或形成中心的。比喻地，它可以表示至关重要的或首要的。" +
            "<br><br>" +
            "(A) '周边的' 意味着与某物的边缘或边界有关的。" +
            "<br><br>" +
            "(C) '遥远的' 意味着在空间或时间上很远的。" +
            "<br><br>" +
            "(D) '偏远的' 意味着远离人口主要中心的；遥远的。"
    },
    {
        id: 7,
        question: "Her __________ decision to start her own company, despite the risks involved, inspired many others to pursue their dreams.",
        chinese_question: "她 __________ 地决定创办自己的公司，尽管其中存在风险，但激励了许多其他人追求自己的梦想。",
        answers: [
            { option: "A", answer: "daring", chinese_answer: "大胆的", chinese_romanization: "dàdǎn de" },
            { option: "B", answer: "hesitant", chinese_answer: "犹豫的", chinese_romanization: "yóuyù de" },
            { option: "C", answer: "reserved", chinese_answer: "矜持的", chinese_romanization: "jīnchí de" },
            { option: "D", answer: "indifferent", chinese_answer: "冷漠的", chinese_romanization:"lěngmò de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'daring' means adventurous or audaciously bold." +
            "<br><br>" +
            "(B) 'hesitant' means tentative, unsure, or slow in acting or speaking." +
            "<br><br>" +
            "(C) 'reserved' means slow to reveal emotion or opinions." +
            "<br><br>" +
            "(D) 'indifferent' means having no particular interest or sympathy; unconcerned.",
        chinese_explanation: "(A) '大胆的' 意味着富有冒险精神或大胆无畏的。" +
            "<br><br>" +
            "(B) '犹豫的' 意味着犹豫不决、不确定或行动或说话缓慢的。" +
            "<br><br>" +
            "(C) '矜持的' 意味着慢于表达情感或意见的。" +
            "<br><br>" +
            "(D) '冷漠的' 意味着没有特别的兴趣或同情；不关心的。"
    },
    {
        id: 8,
    question: "He was __________ in handling the sensitive information, ensuring it stayed confidential.",
        chinese_question: "他在处理敏感信息时非常__________，确保其保密。",
        answers: [
            { option: "A", answer: "obvious", chinese_answer: "明显的", chinese_romanization: "míngxiǎn de" },
            { option: "B", answer: "indiscreet", chinese_answer: "轻率的", chinese_romanization: "qīngshuài de" },
            { option: "C", answer: "discreet", chinese_answer: "谨慎的", chinese_romanization: "jǐnshèn de" },
            { option: "D", answer: "reckless", chinese_answer: "鲁莽的", chinese_romanization: "lǔmǎng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'discreet' means careful and circumspect in one's speech or actions, especially to avoid causing offense or to gain an advantage. Figuratively, it can mean being very cautious and prudent." +
            "<br><br>" +
            "(A) 'obvious' means easily perceived or understood; clear, self-evident, or apparent." +
            "<br><br>" +
            "(B) 'indiscreet' means having, showing, or proceeding from too great a readiness to reveal things that should remain secret or private." +
            "<br><br>" +
            "(D) 'reckless' means without thinking or caring about the consequences of an action.",
        chinese_explanation: "(C) '谨慎的'一词意味着在言语或行动上小心翼翼，尤其是为了避免冒犯或获取优势。比喻地，它可以表示非常谨慎和审慎的。" +
            "<br><br>" +
            "(A) '明显的' 意味着容易被感知或理解的；清晰的，自明的或显而易见的。" +
            "<br><br>" +
            "(B) '轻率的' 意味着表现出或过于准备揭示应保持秘密或私人的事情。" +
            "<br><br>" +
            "(D) '鲁莽的' 意味着不考虑行为的后果。"
    },
    {
        id: 9,
        question: "She remained __________ to her responsibilities, even during difficult times.",
        chinese_question: "即使在困难时期，她仍然对自己的职责保持__________。",
        answers: [
            { option: "A", answer: "neglectful", chinese_answer: "忽视的", chinese_romanization: "hūshì de" },
            { option: "B", answer: "lazy", chinese_answer: "懒惰的", chinese_romanization: "lǎnduò de" },
            { option: "C", answer: "dutiful", chinese_answer: "尽职的", chinese_romanization: "jìnzhí de" },
            { option: "D", answer: "careless", chinese_answer: "粗心的", chinese_romanization: "cūxīn de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'dutiful' means conscientiously or obediently fulfilling one's duty. Figuratively, it can mean being committed and responsible." +
            "<br><br>" +
            "(A) 'neglectful' means not giving proper care or attention to someone or something." +
            "<br><br>" +
            "(B) 'lazy' means unwilling to work or use energy." +
            "<br><br>" +
            "(D) 'careless' means not giving sufficient attention or thought to avoiding harm or errors.",
        chinese_explanation: "(C) '尽职的'一词意味着认真或顺从地履行职责。比喻地，它可以表示投入和负责的。" +
            "<br><br>" +
            "(A) '忽视的' 意味着没有给予某人或某事适当的关心或注意。" +
            "<br><br>" +
            "(B) '懒惰的' 意味着不愿意工作或使用精力。" +
            "<br><br>" +
            "(D) '粗心的' 意味着没有给予足够的注意或考虑以避免伤害或错误。"
    },
    {
        id: 10,
        question: "Her __________ tone during the presentation alienated her colleagues.",
        chinese_question: "她在演讲中的 __________ 语气疏远了她的同事。",
        answers: [
            { option: "A", answer: "encouraging", chinese_answer: "鼓励", chinese_romanization: "gǔlì" },
            { option: "B", answer: "condescending", chinese_answer: "高傲", chinese_romanization: "gāo'ào" },
            { option: "C", answer: "friendly", chinese_answer: "友好", chinese_romanization: "yǒuhǎo" },
            { option: "D", answer: "approachable", chinese_answer: "平易近人", chinese_romanization: "píngyì jìnrén" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'condescending' means having or showing a feeling of patronizing superiority." +
            "<br><br>" +
            "(A) 'encouraging' means giving someone support or confidence; supportive." +
            "<br><br>" +
            "(C) 'friendly' means kind and pleasant." +
            "<br><br>" +
            "(D) 'approachable' means friendly and easy to talk to.",
        chinese_explanation: "(B) '高傲' 意味着有或表现出一种居高临下的优越感。" +
            "<br><br>" +
            "(A) '鼓励' 意味着给某人支持或信心；支持。" +
            "<br><br>" +
            "(C) '友好' 意味着友善和愉快。" +
            "<br><br>" +
            "(D) '平易近人' 意味着友好且容易交谈。"
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
