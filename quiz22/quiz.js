// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "His __________ remarks about the team's performance only served to demoralize the players further.",
        chinese_question: "他对团队表现的 __________ 评论只会进一步打击球员们的士气。",
        answers: [
            { option: "A", answer: "complimentary", chinese_answer: "赞美的", chinese_romanization: "zànměi de" },
            { option: "B", answer: "pejorative", chinese_answer: "贬损的", chinese_romanization: "biǎnsǔn de" },
            { option: "C", answer: "encouraging", chinese_answer: "鼓励的", chinese_romanization: "gǔlì de" },
            { option: "D", answer: "supportive", chinese_answer: "支持的", chinese_romanization: "zhīchí de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'pejorative' means expressing contempt or disapproval." +
            "<br><br>" +
            "(A) 'complimentary' means expressing a compliment; praising or approving." +
            "<br><br>" +
            "(C) 'encouraging' means giving someone support or confidence; supportive." +
            "<br><br>" +
            "(D) 'supportive' means providing encouragement or emotional help.",
        chinese_explanation: "(B) '贬损的' 一词意味着表达轻视或不赞成。" +
            "<br><br>" +
            "(A) '赞美的' 意味着表达赞美；赞扬或批准。" +
            "<br><br>" +
            "(C) '鼓励的' 意味着给予某人支持或信心；支持的。" +
            "<br><br>" +
            "(D) '支持的' 意味着提供鼓励或情感上的帮助。"
    },
    {
        id: 2,
        question: "Despite his grand promises, the new manager's initiatives proved to be __________ and did not improve the company's performance.",
        chinese_question: "尽管他做出了宏大的承诺，新经理的举措被证明是 __________ 的，并没有改善公司的表现。",
        answers: [
            { option: "A", answer: "effective", chinese_answer: "有效的", chinese_romanization: "yǒuxiào de" },
            { option: "B", answer: "beneficial", chinese_answer: "有益的", chinese_romanization: "yǒuyì de" },
            { option: "C", answer: "valuable", chinese_answer: "有价值的", chinese_romanization: "yǒu jiàzhí de" },
            { option: "D", answer: "nugatory", chinese_answer: "无关紧要的", chinese_romanization: "wúguān jǐnyào de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'nugatory' means of no value or importance." +
            "<br><br>" +
            "(A) 'effective' means successful in producing a desired or intended result." +
            "<br><br>" +
            "(B) 'beneficial' means resulting in good; favorable or advantageous." +
            "<br><br>" +
            "(C) 'valuable' means worth a great deal of money or highly regarded for its usefulness or importance.",
        chinese_explanation: "(D) '无关紧要的' 意味着没有价值或重要性。" +
            "<br><br>" +
            "(A) '有效的' 意味着成功地产生预期结果的。" +
            "<br><br>" +
            "(B) '有益的' 意味着带来好处的；有利的或有优势的。" +
            "<br><br>" +
            "(C) '有价值的' 意味着值很多钱的或因其有用性或重要性而被高度评价的。"
    },
    {
        id: 3,
        question: "Their finances were in a __________ state after the market crash, leaving them uncertain about their future.",
        chinese_question: "市场崩溃后，他们的财务状况 __________，对未来感到不确定。",
        answers: [
            { option: "A", answer: "secure", chinese_answer: "安全的", chinese_romanization: "ānquán de" },
            { option: "B", answer: "stable", chinese_answer: "稳定的", chinese_romanization: "wěndìng de" },
            { option: "C", answer: "precarious", chinese_answer: "危险的", chinese_romanization: "wēixiǎn de" },
            { option: "D", answer: "strong", chinese_answer: "强壮的", chinese_romanization: "qiángzhuàng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'precarious' means not securely held or in position; dangerously likely to fall or collapse." +
            "<br><br>" +
            "(A) 'secure' means fixed or fastened so as not to give way, become loose, or be lost." +
            "<br><br>" +
            "(B) 'stable' means not likely to change or fail; firmly established." +
            "<br><br>" +
            "(D) 'strong' means having the power to move heavy weights or perform other physically demanding tasks.",
        chinese_explanation: "(C) '危险的' 一词意味着没有牢固地固定或处于位置上；很可能倒塌或崩溃。" +
            "<br><br>" +
            "(A) '安全的' 意味着固定或紧固，以不致让位、松动或丢失。" +
            "<br><br>" +
            "(B) '稳定的' 意味着不太可能改变或失败；牢固地确立的。" +
            "<br><br>" +
            "(D) '强壮的' 意味着有能力移动重物或执行其他体力要求高的任务。"
    },
    {
        id: 4,
        question: "The __________ nature of his personality made it difficult for him to form genuine relationships, as he always put his own needs first.",
        chinese_question: "他 __________ 的个性使他难以建立真正的关系，因为他总是把自己的需求放在第一位。",
        answers: [
            { option: "A", answer: "humble", chinese_answer: "谦逊的", chinese_romanization: "qiānxùn de" },
            { option: "B", answer: "egotistical", chinese_answer: "自私的", chinese_romanization: "zìsī de" },
            { option: "C", answer: "modest", chinese_answer: "谦虚的", chinese_romanization: "qiānxū de" },
            { option: "D", answer: "selfless", chinese_answer: "无私的", chinese_romanization: "wúsī de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'egotistical' means excessively conceited or absorbed in oneself; self-centered." +
            "<br><br>" +
            "(A) 'humble' means having or showing a modest or low estimate of one's own importance." +
            "<br><br>" +
            "(C) 'modest' means unassuming or moderate in the estimation of one's abilities or achievements." +
            "<br><br>" +
            "(D) 'selfless' means concerned more with the needs and wishes of others than with one's own; unselfish.",
        chinese_explanation: "(B) '自私的' 一词意味着过分自负或自我吸收；以自我为中心的。" +
            "<br><br>" +
            "(A) '谦逊的' 意味着对自己重要性的估计谦虚或低。" +
            "<br><br>" +
            "(C) '谦虚的' 意味着对自己的能力或成就的估计不自负或适度的。" +
            "<br><br>" +
            "(D) '无私的' 意味着更多地关注他人的需求和愿望，而不是自己的；无私的。"
    },
    {
        id: 5,
        question: "His __________ remarks during the meeting showed a complete lack of empathy for his colleagues' concerns.",
        chinese_question: "他在会议上的 __________ 言论显示出对同事关切的完全无动于衷。",
        answers: [
            { option: "A", answer: "compassionate", chinese_answer: "富有同情心的", chinese_romanization: "fùyǒu tóngqíng xīn de" },
            { option: "B", answer: "callous", chinese_answer: "无情的", chinese_romanization: "wúqíng de" },
            { option: "C", answer: "sensitive", chinese_answer: "敏感的", chinese_romanization: "mǐngǎn de" },
            { option: "D", answer: "empathetic", chinese_answer: "富有同理心的", chinese_romanization: "fùyǒu tónglǐ xīn de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'callous' means showing or having an insensitive and cruel disregard for others." +
            "<br><br>" +
            "(A) 'compassionate' means feeling or showing sympathy and concern for others." +
            "<br><br>" +
            "(C) 'sensitive' means quick to detect or respond to slight changes, signals, or influences." +
            "<br><br>" +
            "(D) 'empathetic' means showing an ability to understand and share the feelings of another.",
        chinese_explanation: "(B) '无情的' 一词意味着表现出或具有对他人的冷酷无情的忽视。" +
            "<br><br>" +
            "(A) '富有同情心的' 意味着感到或表现出对他人的同情和关心。" +
            "<br><br>" +
            "(C) '敏感的' 意味着对微小的变化、信号或影响迅速作出反应。" +
            "<br><br>" +
            "(D) '富有同理心的' 意味着表现出理解和分享他人感受的能力。"
    },
    {
        id: 6,
        question: "He enjoyed the __________ position that allowed him to receive a high salary without much effort or responsibility.",
        chinese_question: "他喜欢那个 __________ 的职位，这使他可以在不费多大努力或责任的情况下获得高薪。",
        answers: [
            { option: "A", answer: "laborious", chinese_answer: "费力的", chinese_romanization: "fèilì de" },
            { option: "B", answer: "strenuous", chinese_answer: "艰苦的", chinese_romanization: "jiānkǔ de" },
            { option: "C", answer: "sinecure", chinese_answer: "闲职", chinese_romanization: "xiánzhí" },
            { option: "D", answer: "demanding", chinese_answer: "要求高的", chinese_romanization: "yāoqiú gāo de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'sinecure' means a position requiring little or no work but giving the holder status or financial benefit." +
            "<br><br>" +
            "(A) 'laborious' means requiring considerable time and effort." +
            "<br><br>" +
            "(B) 'strenuous' means requiring or using great exertion." +
            "<br><br>" +
            "(D) 'demanding' means requiring much skill or effort.",
        chinese_explanation: "(C) '闲职' 一词意味着需要很少或不需要工作的职位，但给予持有者地位或经济利益。" +
            "<br><br>" +
            "(A) '费力的' 意味着需要相当多的时间和努力。" +
            "<br><br>" +
            "(B) '艰苦的' 意味着需要或使用大量努力的。" +
            "<br><br>" +
            "(D) '要求高的' 意味着需要很多技能或努力的。"
    },
    {
        id: 7,
        question: "The honey was so __________ that it took a long time to pour from the jar.",
        chinese_question: "蜂蜜非常 __________，从罐子里倒出来需要很长时间。",
        answers: [
            { option: "A", answer: "thin", chinese_answer: "稀的", chinese_romanization: "xī de" },
            { option: "B", answer: "watery", chinese_answer: "水状的", chinese_romanization: "shuǐ zhuàng de" },
            { option: "C", answer: "viscous", chinese_answer: "粘稠的", chinese_romanization: "niánchóu de" },
            { option: "D", answer: "runny", chinese_answer: "流动的", chinese_romanization: "liúdòng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'viscous' means having a thick, sticky consistency between solid and liquid; having a high viscosity." +
            "<br><br>" +
            "(A) 'thin' means having little thickness or extent from one surface to its opposite." +
            "<br><br>" +
            "(B) 'watery' means consisting of, containing, or resembling water." +
            "<br><br>" +
            "(D) 'runny' means more liquid than is usual or expected.",
        chinese_explanation: "(C) '粘稠的' 一词意味着在固体和液体之间具有粘稠的稠度；具有高粘度。" +
            "<br><br>" +
            "(A) '稀的' 意味着从一个表面到其相对表面的厚度或范围很小的。" +
            "<br><br>" +
            "(B) '水状的' 意味着由水组成、包含或类似水的。" +
            "<br><br>" +
            "(D) '流动的' 意味着比通常或预期的更液体。"
    },
    {
        id: 8,
        question: "Her bright red dress was __________ at the formal black-tie event, making her stand out in the crowd.",
        chinese_question: "她的鲜红色连衣裙在正式的黑领带活动中显得 __________，让她在人群中脱颖而出。",
        answers: [
            { option: "A", answer: "appropriate", chinese_answer: "适当的", chinese_romanization: "shìdàng de" },
            { option: "B", answer: "incongruous", chinese_answer: "不协调的", chinese_romanization: "bù xiétiáo de" },
            { option: "C", answer: "fitting", chinese_answer: "合适的", chinese_romanization: "héshì de" },
            { option: "D", answer: "harmonious", chinese_answer: "和谐的", chinese_romanization: "héxié de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'incongruous' means not in harmony or keeping with the surroundings or other aspects of something." +
            "<br><br>" +
            "(A) 'appropriate' means suitable or proper in the circumstances." +
            "<br><br>" +
            "(C) 'fitting' means suitable or appropriate under the circumstances." +
            "<br><br>" +
            "(D) 'harmonious' means forming a pleasing or consistent whole.",
        chinese_explanation: "(B) '不协调的' 一词意味着与周围环境或其他方面不协调或不一致的。" +
            "<br><br>" +
            "(A) '适当的' 意味着在情况下合适或适当的。" +
            "<br><br>" +
            "(C) '合适的' 意味着在情况下合适或适当的。" +
            "<br><br>" +
            "(D) '和谐的' 意味着形成令人愉悦或一致的整体。"
    },
    {
        id: 9,
        question: "His __________ response left everyone confused, as he seemed to be intentionally avoiding a clear answer.",
        chinese_question: "他的 __________ 回应让大家感到困惑，因为他似乎故意避免给出明确答案。",
        answers: [
            { option: "A", answer: "clear", chinese_answer: "清晰的", chinese_romanization: "qīngxī de" },
            { option: "B", answer: "equivocal", chinese_answer: "模棱两可的", chinese_romanization: "móléng liǎng kě de" },
            { option: "C", answer: "direct", chinese_answer: "直接的", chinese_romanization: "zhíjiē de" },
            { option: "D", answer: "straightforward", chinese_answer: "简单明了的", chinese_romanization: "jiǎndān míngliǎo de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'equivocal' means open to more than one interpretation; ambiguous." +
            "<br><br>" +
            "(A) 'clear' means easy to perceive, understand, or interpret." +
            "<br><br>" +
            "(C) 'direct' means going straight to the point; straightforward." +
            "<br><br>" +
            "(D) 'straightforward' means uncomplicated and easy to do or understand.",
        chinese_explanation: "(B) '模棱两可的' 一词意味着可以有多种解释的；模糊的。" +
            "<br><br>" +
            "(A) '清晰的' 意味着容易感知、理解或解释的。" +
            "<br><br>" +
            "(C) '直接的' 意味着直截了当的；简单明了的。" +
            "<br><br>" +
            "(D) '简单明了的' 意味着简单易行的；容易理解的。"
    },
    {
        id: 10,
        question: "The new teacher started with __________ lessons, focusing on the basics of the alphabet and simple words.",
        chinese_question: "新老师从 __________ 课程开始，专注于字母和简单单词的基础知识。",
        answers: [
            { option: "A", answer: "advanced", chinese_answer: "高级的", chinese_romanization: "gāojí de" },
            { option: "B", answer: "abecedarian", chinese_answer: "基础的", chinese_romanization: "jīchǔ de" },
            { option: "C", answer: "complex", chinese_answer: "复杂的", chinese_romanization: "fùzá de" },
            { option: "D", answer: "intricate", chinese_answer: "精细的", chinese_romanization: "jīngxì de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'abecedarian' means relating to the alphabet; rudimentary." +
            "<br><br>" +
            "(A) 'advanced' means far on or ahead in development or progress." +
            "<br><br>" +
            "(C) 'complex' means consisting of many different and connected parts." +
            "<br><br>" +
            "(D) 'intricate' means very complicated or detailed.",
        chinese_explanation: "(B) '基础的' 一词意味着与字母表有关的；初级的。" +
            "<br><br>" +
            "(A) '高级的' 意味着在发展或进步方面走得很远的。" +
            "<br><br>" +
            "(C) '复杂的' 意味着由许多不同和连接的部分组成的。" +
            "<br><br>" +
            "(D) '精细的' 意味着非常复杂或详细的。"
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
