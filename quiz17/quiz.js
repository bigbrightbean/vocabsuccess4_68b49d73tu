// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "She was __________ to the opportunities that came her way, seizing them with enthusiasm and determination.",
        chinese_question: "她对出现的机会保持 __________，热情和坚定地抓住它们。",
        answers: [
            { option: "A", answer: "alert", chinese_answer: "警惕的", chinese_romanization: "jǐngtì de" },
            { option: "B", answer: "oblivious", chinese_answer: "无视的", chinese_romanization: "wúshì de" },
            { option: "C", answer: "indifferent", chinese_answer: "冷漠的", chinese_romanization: "lěngmò de" },
            { option: "D", answer: "passive", chinese_answer: "被动的", chinese_romanization: "bèidòng de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'alert' means quick to notice any unusual and potentially advantageous circumstances; vigilant." +
            "<br><br>" +
            "(B) 'oblivious' means not aware of or not concerned about what is happening around one." +
            "<br><br>" +
            "(C) 'indifferent' means having no particular interest or sympathy; unconcerned." +
            "<br><br>" +
            "(D) 'passive' means accepting or allowing what happens or what others do, without active response or resistance.",
        chinese_explanation: "(A) '警惕的' 意味着迅速注意到任何异常和潜在有利的情况；警觉的。" +
            "<br><br>" +
            "(B) '无视的' 意味着没有意识到或不关心周围发生的事情。" +
            "<br><br>" +
            "(C) '冷漠的' 意味着没有特别的兴趣或同情；漠不关心的。" +
            "<br><br>" +
            "(D) '被动的' 意味着接受或允许发生的事情或别人做的事情，没有积极的回应或抵抗的。"
    },
    {
        id: 2,
        question: "Despite his talent, he remained __________ when praised by his peers, always deflecting the attention.",
        chinese_question: "尽管他很有才华，但当同龄人赞扬他时，他仍然 __________，总是转移注意力。",
        answers: [
            { option: "A", answer: "bashful", chinese_answer: "害羞的", chinese_romanization: "hàixiū de" },
            { option: "B", answer: "arrogant", chinese_answer: "傲慢的", chinese_romanization: "àomàn de" },
            { option: "C", answer: "boastful", chinese_answer: "自夸的", chinese_romanization: "zìkuā de" },
            { option: "D", answer: "bold", chinese_answer: "大胆的", chinese_romanization: "dàdǎn de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'bashful' means shy or easily embarrassed." +
            "<br><br>" +
            "(B) 'arrogant' means having an exaggerated sense of one's own importance." +
            "<br><br>" +
            "(C) 'boastful' means showing excessive pride and self-satisfaction." +
            "<br><br>" +
            "(D) 'bold' means showing a willingness to take risks; confident.",
        chinese_explanation: "(A) '害羞的' 意味着腼腆或容易害羞的。" +
            "<br><br>" +
            "(B) '傲慢的' 意味着自视过高的。" +
            "<br><br>" +
            "(C) '自夸的' 意味着表现出过度的自豪和自满的。" +
            "<br><br>" +
            "(D) '大胆的' 意味着愿意冒险的；自信的。"
    },
    {
        id: 3,
        question: "Her __________ skills in cooking made her the perfect contestant for the culinary competition, as she could easily adapt to any cuisine.",
        chinese_question: "她在烹饪方面的 __________ 技能使她成为烹饪比赛的完美参赛者，因为她可以轻松适应任何菜系。",
        answers: [
            { option: "A", answer: "rigid", chinese_answer: "僵硬的", chinese_romanization: "jiāngyìng de" },
            { option: "B", answer: "fixed", chinese_answer: "固定的", chinese_romanization: "gùdìng de" },
            { option: "C", answer: "inflexible", chinese_answer: "不灵活的", chinese_romanization: "bù línghuó de" },
            { option: "D", answer: "protean", chinese_answer: "多才多艺的", chinese_romanization: "duōcáiduōyì de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'protean' means able to change frequently or easily; versatile." +
            "<br><br>" +
            "(A) 'rigid' means unable to bend or be forced out of shape; not flexible." +
            "<br><br>" +
            "(B) 'fixed' means fastened securely in position." +
            "<br><br>" +
            "(C) 'inflexible' means unwilling to change or compromise.",
        chinese_explanation: "(D) '多才多艺的' 意味着能够频繁或轻松地变化；多才多艺的。" +
            "<br><br>" +
            "(A) '僵硬的' 意味着不能弯曲或被迫变形的；不灵活的。" +
            "<br><br>" +
            "(B) '固定的' 意味着牢固地固定在位置上。" +
            "<br><br>" +
            "(C) '不灵活的' 意味着不愿意改变或妥协的。"
    },
    {
        id: 4,
        question: "Her __________ lifestyle, filled with lavish parties and expensive vacations, eventually caught up with her finances.",
        chinese_question: "她 __________ 的生活方式，充满了奢华的聚会和昂贵的度假，最终让她的财务状况捉襟见肘。",
        answers: [
            { option: "A", answer: "modest", chinese_answer: "谦虚的", chinese_romanization: "qiānxū de" },
            { option: "B", answer: "economical", chinese_answer: "经济的", chinese_romanization: "jīngjì de" },
            { option: "C", answer: "restrained", chinese_answer: "克制的", chinese_romanization: "kèzhì de" },
            { option: "D", answer: "profligate", chinese_answer: "挥霍的", chinese_romanization: "huīhuò de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'profligate' means recklessly extravagant or wasteful in the use of resources." +
            "<br><br>" +
            "(A) 'modest' means unassuming in the estimation of one's abilities or achievements." +
            "<br><br>" +
            "(B) 'economical' means giving good value or service in relation to the amount of money, time, or effort spent." +
            "<br><br>" +
            "(C) 'restrained' means characterized by reserve or moderation; unemotional or dispassionate.",
        chinese_explanation: "(D) '挥霍的' 意味着在使用资源方面极其奢侈或浪费的。" +
            "<br><br>" +
            "(A) '谦虚的' 意味着对自己的能力或成就低调的。" +
            "<br><br>" +
            "(B) '经济的' 意味着在花费的金钱、时间或努力方面提供良好的价值或服务的。" +
            "<br><br>" +
            "(C) '克制的' 意味着以保留或适度为特征的；不带情感或冷静的。"
    },
    {
        id: 5,
        question: "She believed that the __________ truth would come out eventually, no matter how long it took.",
        chinese_question: "她相信，无论需要多长时间， __________ 真相最终会浮出水面。",
        answers: [
            { option: "A", answer: "ultimate", chinese_answer: "最终的", chinese_romanization: "zuìzhōng de" },
            { option: "B", answer: "partial", chinese_answer: "部分的", chinese_romanization: "bùfèn de" },
            { option: "C", answer: "misleading", chinese_answer: "误导的", chinese_romanization: "wùdǎo de" },
            { option: "D", answer: "deceptive", chinese_answer: "欺骗的", chinese_romanization: "qīpiàn de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'ultimate' metaphorically means the best achievable or imaginable of its kind." +
            "<br><br>" +
            "(B) 'partial' means existing only in part; incomplete." +
            "<br><br>" +
            "(C) 'misleading' means giving the wrong idea or impression." +
            "<br><br>" +
            "(D) 'deceptive' means giving an appearance or impression different from the true one; misleading.",
        chinese_explanation: "(A) '最终的' 比喻其种类中可以实现或想象的最佳。" +
            "<br><br>" +
            "(B) '部分的' 意味着仅部分存在的；不完整的。" +
            "<br><br>" +
            "(C) '误导的' 意味着给人错误的想法或印象。" +
            "<br><br>" +
            "(D) '欺骗的' 意味着与真实情况不同的外观或印象；误导的。"
    },
    {
        id: 6,
        question: "Using __________ terms to describe other cultures can perpetuate stereotypes and foster discrimination.",
        chinese_question: "使用 __________ 的术语来描述其他文化会延续刻板印象并助长歧视。",
        answers: [
            { option: "A", answer: "admiring", chinese_answer: "钦佩的", chinese_romanization: "qīnpèi de" },
            { option: "B", answer: "objective", chinese_answer: "客观的", chinese_romanization: "kèguān de" },
            { option: "C", answer: "supportive", chinese_answer: "支持的", chinese_romanization: "zhīchí de" },
            { option: "D", answer: "pejorative", chinese_answer: "贬义的", chinese_romanization: "biǎnyì de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'pejorative' means expressing contempt or disapproval." +
            "<br><br>" +
            "(A) 'admiring' means regarding with respect or warm approval." +
            "<br><br>" +
            "(B) 'objective' means (of a person or their judgment) not influenced by personal feelings or opinions in considering and representing facts." +
            "<br><br>" +
            "(C) 'supportive' means providing encouragement or emotional help.",
        chinese_explanation: "(D) '贬义的' 意味着表达蔑视或不赞成。" +
            "<br><br>" +
            "(A) '钦佩的' 意味着以尊重或温暖的赞许来看待。" +
            "<br><br>" +
            "(B) '客观的' 意味着（指一个人或他们的判断）在考虑和表示事实时不受个人感情或意见的影响。" +
            "<br><br>" +
            "(C) '支持的' 意味着提供鼓励或情感帮助。"
    },
    {
        id: 7,
        question: "His __________ response to criticism is to become defensive.",
        chinese_question: "他对批评的 __________ 反应是变得防御性。",
        answers: [
            { option: "A", answer: "typical", chinese_answer: "典型的", chinese_romanization: "diǎnxíng de" },
            { option: "B", answer: "surprising", chinese_answer: "惊讶的", chinese_romanization: "jīngyà de" },
            { option: "C", answer: "abnormal", chinese_answer: "异常的", chinese_romanization: "yìcháng de" },
            { option: "D", answer: "unique", chinese_answer: "独特的", chinese_romanization: "dútè de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'typical' metaphorically means characteristic or usual." +
            "<br><br>" +
            "(B) 'surprising' means causing surprise; unexpected." +
            "<br><br>" +
            "(C) 'abnormal' means deviating from what is normal or usual." +
            "<br><br>" +
            "(D) 'unique' means being the only one of its kind; unlike anything else.",
        chinese_explanation: "(A) '典型的' 比喻具有特征的或通常的。" +
            "<br><br>" +
            "(B) '惊讶的' 意味着引起惊讶的；意想不到的。" +
            "<br><br>" +
            "(C) '异常的' 意味着偏离正常或通常的。" +
            "<br><br>" +
            "(D) '独特的' 意味着独一无二的；与其他任何事物不同的。"
    },
    {
        id: 8,
        question: "Her __________ attitude during the interview made her stand out, as she confidently answered every question with a hint of playfulness.",
        chinese_question: "她在面试中的 __________ 态度让她脱颖而出，因为她自信地回答了每个问题，带有一丝俏皮。",
        answers: [
            { option: "A", answer: "timid", chinese_answer: "胆小的", chinese_romanization: "dǎnxiǎo de" },
            { option: "B", answer: "nervous", chinese_answer: "紧张的", chinese_romanization: "jǐnzhāng de" },
            { option: "C", answer: "serious", chinese_answer: "严肃的", chinese_romanization: "yánsù de" },
            { option: "D", answer: "pert", chinese_answer: "俏皮的", chinese_romanization: "qiàopí de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'pert' means attractively lively or cheeky." +
            "<br><br>" +
            "(A) 'timid' means showing a lack of courage or confidence; easily frightened." +
            "<br><br>" +
            "(B) 'nervous' means easily agitated or alarmed." +
            "<br><br>" +
            "(C) 'serious' means solemn or thoughtful in character or manner.",
        chinese_explanation: "(D) '俏皮的' 意味着有吸引力的活泼或俏皮的。" +
            "<br><br>" +
            "(A) '胆小的' 意味着表现出缺乏勇气或信心；容易受到惊吓的。" +
            "<br><br>" +
            "(B) '紧张的' 意味着容易激动或警觉的。" +
            "<br><br>" +
            "(C) '严肃的' 意味着性格或态度严肃或深思。"
    },
    {
        id: 9,
        question: "His __________ handling of the situation only made matters worse, leading to more confusion.",
        chinese_question: "他 __________ 处理局势只会使情况更糟，导致更多混乱。",
        answers: [
            { option: "A", answer: "skillful", chinese_answer: "熟练的", chinese_romanization: "shúliàn de" },
            { option: "B", answer: "adept", chinese_answer: "内行的", chinese_romanization: "nèiháng de" },
            { option: "C", answer: "inept", chinese_answer: "笨拙的", chinese_romanization: "bènzhuō de" },
            { option: "D", answer: "professional", chinese_answer: "专业的", chinese_romanization: "zhuānyè de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'inept' means having or showing no skill; clumsy." +
            "<br><br>" +
            "(A) 'skillful' means having or showing skill." +
            "<br><br>" +
            "(B) 'adept' means very skilled or proficient at something." +
            "<br><br>" +
            "(D) 'professional' means relating to or connected with a profession.",
        chinese_explanation: "(C) '笨拙的' 一词意味着没有或不表现出技能；笨拙的。" +
            "<br><br>" +
            "(A) '熟练的' 意味着具有或表现出技能的。" +
            "<br><br>" +
            "(B) '内行的' 意味着在某事上非常熟练或精通的。" +
            "<br><br>" +
            "(D) '专业的' 意味着与职业相关的或与职业有关的。"
    },
    {
        id: 10,
        question: "Living in a __________ condition, the family had to rely on donations to meet their basic needs.",
        chinese_question: "生活在 __________ 的条件下，这个家庭不得不依靠捐赠来满足基本需求。",
        answers: [
            { option: "A", answer: "luxurious", chinese_answer: "奢侈的", chinese_romanization: "shēchǐ de" },
            { option: "B", answer: "wealthy", chinese_answer: "富有的", chinese_romanization: "fùyǒu de" },
            { option: "C", answer: "abundant", chinese_answer: "丰富的", chinese_romanization: "fēngfù de" },
            { option: "D", answer: "penurious", chinese_answer: "贫困的", chinese_romanization: "pínkùn de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'penurious' means extremely poor; poverty-stricken." +
            "<br><br>" +
            "(A) 'luxurious' means extremely comfortable, elegant, or enjoyable, especially in a way that involves great expense." +
            "<br><br>" +
            "(B) 'wealthy' means having a great deal of money, resources, or assets; rich." +
            "<br><br>" +
            "(C) 'abundant' means existing or available in large quantities; plentiful.",
        chinese_explanation: "(D) '贫困的' 意味着非常贫穷；贫困潦倒。" +
            "<br><br>" +
            "(A) '奢侈的' 意味着极其舒适、优雅或愉快，尤其是以涉及巨大费用的方式。" +
            "<br><br>" +
            "(B) '富有的' 意味着有很多钱、资源或资产；富有。" +
            "<br><br>" +
            "(C) '丰富的' 意味着大量存在或可用的；丰富的。"
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
