// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The rules of the game were so __________ that none of the players were sure of how to proceed.",
        chinese_question: "游戏的规则如此 __________，以至于没有一个玩家知道该如何进行。",
        answers: [
            { option: "A", answer: "clear", chinese_answer: "清晰的", chinese_romanization: "qīngxī de" },
            { option: "B", answer: "definite", chinese_answer: "明确的", chinese_romanization: "míngquè de" },
            { option: "C", answer: "nebulous", chinese_answer: "模糊的", chinese_romanization: "móhú de" },
            { option: "D", answer: "precise", chinese_answer: "精确的", chinese_romanization: "jīngquè de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'nebulous' means in the form of a cloud or haze; hazy; (of a concept or idea) unclear, vague, or ill-defined." +
            "<br><br>" +
            "(A) 'clear' means easy to perceive, understand, or interpret." +
            "<br><br>" +
            "(B) 'definite' means clearly stated or decided; not vague or doubtful." +
            "<br><br>" +
            "(D) 'precise' means marked by exactness and accuracy of expression or detail.",
        chinese_explanation: "(C) '模糊的' 意味着以云或雾的形式存在；朦胧的；（概念或想法）不清楚、模糊或不明确的。" +
            "<br><br>" +
            "(A) '清晰的' 意味着容易理解、理解或解释的。" +
            "<br><br>" +
            "(B) '明确的' 意味着清楚地陈述或决定的；不模糊或怀疑的。" +
            "<br><br>" +
            "(D) '精确的' 意味着表达或细节的准确性和准确性。"
    },
    {
        id: 2,
        question: "The dancer’s __________ movements captivated the audience, showcasing her flexibility and grace.",
        chinese_question: "舞者的 __________ 动作吸引了观众，展示了她的柔韧性和优雅。",
        answers: [
            { option: "A", answer: "rigid", chinese_answer: "僵硬的", chinese_romanization: "jiāngyìng de" },
            { option: "B", answer: "clumsy", chinese_answer: "笨拙的", chinese_romanization: "bènzhuō de" },
            { option: "C", answer: "lithe", chinese_answer: "柔韧的", chinese_romanization: "róurèn de" },
            { option: "D", answer: "awkward", chinese_answer: "尴尬的", chinese_romanization: "gāngà de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'lithe' means (especially of a person's body) thin, supple, and graceful." +
            "<br><br>" +
            "(A) 'rigid' means unable to bend or be forced out of shape; not flexible." +
            "<br><br>" +
            "(B) 'clumsy' means awkward in movement or in handling things." +
            "<br><br>" +
            "(D) 'awkward' means causing difficulty; hard to do or deal with.",
        chinese_explanation: "(C) '柔韧的' 意味着（尤指人的身体）苗条、柔软和优雅的。" +
            "<br><br>" +
            "(A) '僵硬的' 意味着不能弯曲或变形；不灵活的。" +
            "<br><br>" +
            "(B) '笨拙的' 意味着在动作或处理事物方面笨拙的。" +
            "<br><br>" +
            "(D) '尴尬的' 意味着造成困难的；难以做或处理的。"
    },
    {
        id: 3,
        question: "Facing a tight budget, the project manager had to be __________ to find creative solutions to keep the project on track.",
        chinese_question: "面对紧张的预算，项目经理必须 __________，找到创造性的解决方案以保持项目的进展。",
        answers: [
            { option: "A", answer: "helpless", chinese_answer: "无助的", chinese_romanization: "wúzhù de" },
            { option: "B", answer: "resourceful", chinese_answer: "机智的", chinese_romanization: "jīzhì de" },
            { option: "C", answer: "wasteful", chinese_answer: "浪费的", chinese_romanization: "làngfèi de" },
            { option: "D", answer: "extravagant", chinese_answer: "奢侈的", chinese_romanization: "shēchǐ de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'resourceful' means having the ability to find quick and clever ways to overcome difficulties." +
            "<br><br>" +
            "(A) 'helpless' means unable to defend oneself or to act without help." +
            "<br><br>" +
            "(C) 'wasteful' means using or expending something of value carelessly, extravagantly, or to no purpose." +
            "<br><br>" +
            "(D) 'extravagant' means lacking restraint in spending money or using resources.",
        chinese_explanation: "(B) '机智的' 意味着能够找到快速而巧妙的方法来克服困难。" +
            "<br><br>" +
            "(A) '无助的' 意味着无法自卫或在没有帮助的情况下行动。" +
            "<br><br>" +
            "(C) '浪费的' 意味着随意、奢侈或无目的地使用或花费有价值的东西。" +
            "<br><br>" +
            "(D) '奢侈的' 意味着在花钱或使用资源方面缺乏节制。"
    },
    {
        id: 4,
        question: "His __________ attitude during the negotiation caused tensions to rise and made reaching an agreement difficult.",
        chinese_question: "在谈判期间，他的 __________ 态度导致紧张局势加剧，使达成协议变得困难。",
        answers: [
            { option: "A", answer: "peaceful", chinese_answer: "和平的", chinese_romanization: "hépíng de" },
            { option: "B", answer: "cooperative", chinese_answer: "合作的", chinese_romanization: "hézuò de" },
            { option: "C", answer: "belligerent", chinese_answer: "好战的", chinese_romanization: "hàozhàn de" },
            { option: "D", answer: "friendly", chinese_answer: "友好的", chinese_romanization: "yǒuhǎo de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'belligerent' means hostile and aggressive." +
            "<br><br>" +
            "(A) 'peaceful' means free from disturbance; tranquil." +
            "<br><br>" +
            "(B) 'cooperative' means involving mutual assistance in working toward a common goal." +
            "<br><br>" +
            "(D) 'friendly' means kind and pleasant.",
        chinese_explanation: "(C) '好战的' 一词意味着敌对和具有攻击性。" +
            "<br><br>" +
            "(A) '和平的' 意味着没有干扰的；宁静的。" +
            "<br><br>" +
            "(B) '合作的' 意味着在共同目标的努力中相互帮助的。" +
            "<br><br>" +
            "(D) '友好的' 意味着友好和愉快的。"
    },
    {
        id: 5,
        question: "Given the circumstances, the committee decided that the most __________ course of action would be to delay the project.",
        chinese_question: "鉴于情况，委员会决定最 __________ 的行动方案是推迟项目。",
        answers: [
            { option: "A", answer: "impractical", chinese_answer: "不切实际的", chinese_romanization: "bù qiè shíjì de" },
            { option: "B", answer: "expedient", chinese_answer: "方便的", chinese_romanization: "fāngbiàn de" },
            { option: "C", answer: "disadvantageous", chinese_answer: "不利的", chinese_romanization: "bùlì de" },
            { option: "D", answer: "unreasonable", chinese_answer: "不合理的", chinese_romanization: "bù hélǐ de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'expedient' means convenient and practical, although possibly improper or immoral." +
            "<br><br>" +
            "(A) 'impractical' means not adapted for use or action; not sensible or realistic." +
            "<br><br>" +
            "(C) 'disadvantageous' means involving or creating unfavorable circumstances that reduce the chances of success or effectiveness." +
            "<br><br>" +
            "(D) 'unreasonable' means not guided by or based on good sense.",
        chinese_explanation: "(B) '方便的' 一词意味着方便和实际的，尽管可能不适当或不道德。" +
            "<br><br>" +
            "(A) '不切实际的' 意味着不适合使用或行动；不明智或不现实的。" +
            "<br><br>" +
            "(C) '不利的' 意味着涉及或造成不利的情况，减少成功或有效的机会。" +
            "<br><br>" +
            "(D) '不合理的' 意味着不以或不基于良好判断的。"
    },
    {
        id: 6,
        question: "The company's financial outlook appeared __________, with no signs of improvement in the near future.",
        chinese_question: "公司的财务前景看起来 __________，近期没有改善的迹象。",
        answers: [
            { option: "A", answer: "bleak", chinese_answer: "暗淡的", chinese_romanization: "àndàn de" },
            { option: "B", answer: "promising", chinese_answer: "有前途的", chinese_romanization: "yǒu qiántú de" },
            { option: "C", answer: "optimistic", chinese_answer: "乐观的", chinese_romanization: "lèguān de" },
            { option: "D", answer: "favorable", chinese_answer: "有利的", chinese_romanization: "yǒulì de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'bleak' means lacking in warmth, life, or kindliness, often suggesting a sense of hopelessness." +
            "<br><br>" +
            "(B) 'promising' means showing signs of future success." +
            "<br><br>" +
            "(C) 'optimistic' means hopeful and confident about the future." +
            "<br><br>" +
            "(D) 'favorable' means expressing approval.",
        chinese_explanation: "(A) '暗淡的' 意味着缺乏温暖、活力或善意，常暗示一种无望的感觉。" +
            "<br><br>" +
            "(B) '有前途的' 意味着显示出未来成功的迹象。" +
            "<br><br>" +
            "(C) '乐观的' 意味着对未来充满希望和信心。" +
            "<br><br>" +
            "(D) '有利的' 意味着表示赞同的。"
    },
    {
        id: 7,
        question: "Her __________ handling of the negotiations led to a favorable outcome for both parties.",
        chinese_question: "她 __________ 地处理谈判，为双方带来了有利的结果。",
        answers: [
            { option: "A", answer: "inept", chinese_answer: "无能", chinese_romanization: "wúnéng" },
            { option: "B", answer: "clumsy", chinese_answer: "笨拙", chinese_romanization: "bènzhuō" },
            { option: "C", answer: "deft", chinese_answer: "灵巧", chinese_romanization: "língqiǎo" },
            { option: "D", answer: "careless", chinese_answer: "粗心", chinese_romanization: "cūxīn" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'deft' means demonstrating skill and cleverness." +
            "<br><br>" +
            "(A) 'inept' means having or showing no skill; clumsy." +
            "<br><br>" +
            "(B) 'clumsy' means awkward in movement or in handling things." +
            "<br><br>" +
            "(D) 'careless' means not giving sufficient attention or thought to avoiding harm or errors.",
        chinese_explanation: "(C) '灵巧' 意味着展示技能和聪明。" +
            "<br><br>" +
            "(A) '无能' 意味着没有或表现出没有技能；笨拙。" +
            "<br><br>" +
            "(B) '笨拙' 意味着动作或处理事物时笨拙。" +
            "<br><br>" +
            "(D) '粗心' 意味着没有给予足够的注意或思考以避免伤害或错误。"
    },
    {
        id: 8,
        question: "Her __________ leadership during the crisis helped save the company from bankruptcy.",
        chinese_question: "她在危机期间的 __________ 领导帮助公司避免破产。",
        answers: [
            { option: "A", answer: "weak", chinese_answer: "虚弱", chinese_romanization: "xūruò" },
            { option: "B", answer: "decisive", chinese_answer: "果断", chinese_romanization: "guǒduàn" },
            { option: "C", answer: "passive", chinese_answer: "被动", chinese_romanization: "bèidòng" },
            { option: "D", answer: "indifferent", chinese_answer: "漠不关心", chinese_romanization: "mòbù guānxīn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'decisive' means showing the ability to make decisions quickly and effectively." +
            "<br><br>" +
            "(A) 'weak' means lacking the power to perform physically demanding tasks; lacking physical strength and energy." +
            "<br><br>" +
            "(C) 'passive' means accepting or allowing what happens or what others do, without active response or resistance." +
            "<br><br>" +
            "(D) 'indifferent' means having no particular interest or sympathy; unconcerned.",
        chinese_explanation: "(B) '果断' 意味着表现出迅速有效地做出决策的能力。" +
            "<br><br>" +
            "(A) '虚弱' 意味着缺乏执行体力任务的能力；缺乏体力和能量。" +
            "<br><br>" +
            "(C) '被动' 意味着接受或允许发生的事情或他人所做的事情，没有积极回应或抵抗。" +
            "<br><br>" +
            "(D) '漠不关心' 意味着没有特别的兴趣或同情；不关心。"
    },
    {
        id: 9,
        question: "The board made a __________ decision to invest in new technology, aiming to improve future productivity.",
        chinese_question: "董事会做出了 __________ 的决定，投资于新技术，旨在提高未来的生产力。",
        answers: [
            { option: "A", answer: "rash", chinese_answer: "草率", chinese_romanization: "cǎoshuài" },
            { option: "B", answer: "spontaneous", chinese_answer: "自发", chinese_romanization: "zìfā" },
            { option: "C", answer: "deliberate", chinese_answer: "深思熟虑", chinese_romanization: "shēnsī shúlǜ" },
            { option: "D", answer: "unplanned", chinese_answer: "无计划", chinese_romanization: "wú jìhuà" }
        ],
        correctAnswer:"C",
        explanation: "(C) 'deliberate' means done consciously and intentionally." +
            "<br><br>" +
            "(A) 'rash' means displaying or proceeding from a lack of careful consideration of the possible consequences of an action." +
            "<br><br>" +
            "(B) 'spontaneous' means performed or occurring as a result of a sudden inner impulse or inclination and without premeditation or external stimulus." +
            "<br><br>" +
            "(D) 'unplanned' means not thought out or organized in advance.",
        chinese_explanation: "(C) '深思熟虑' 意味着有意识地和有意地完成的。" +
            "<br><br>" +
            "(A) '草率' 意味着缺乏对行动可能后果的仔细考虑。" +
            "<br><br>" +
            "(B) '自发' 意味着作为突然的内心冲动或倾向的结果而表现或发生，而没有预谋或外部刺激。" +
            "<br><br>" +
            "(D) '无计划' 意味着没有提前思考或组织的。"
    },
    {
        id: 10,
        question: "His __________ approach to negotiating the deal ensured that both parties were satisfied with the outcome.",
        chinese_question: "他 __________ 的谈判方法确保了双方对结果都感到满意。",
        answers: [
            { option: "A", answer: "diplomatic", chinese_answer: "圆滑的", chinese_romanization: "yuánhuá de" },
            { option: "B", answer: "clumsy", chinese_answer: "笨拙的", chinese_romanization: "bènzhuō de" },
            { option: "C", answer: "inconsiderate", chinese_answer: "不体贴的", chinese_romanization: "bù tǐtiē de" },
            { option: "D", answer: "harsh", chinese_answer: "严厉的", chinese_romanization: "yánlì de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'diplomatic' means having or showing an ability to deal with people in a sensitive and effective way." +
            "<br><br>" +
            "(B) 'clumsy' means awkward in movement or handling things." +
            "<br><br>" +
            "(C) 'inconsiderate' means thoughtlessly causing hurt or inconvenience to others." +
            "<br><br>" +
            "(D) 'harsh' means unpleasantly rough or jarring to the senses.",
        chinese_explanation: "(A) '圆滑的' 意味着有或表现出以敏感和有效的方式与人打交道的能力。" +
            "<br><br>" +
            "(B) '笨拙的' 意味着在运动或处理事物时笨拙的。" +
            "<br><br>" +
            "(C) '不体贴的' 意味着无意中造成他人伤害或不便的。" +
            "<br><br>" +
            "(D) '严厉的' 意味着对感官令人不快地粗糙或刺耳的。"
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
