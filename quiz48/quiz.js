// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "Despite its historical setting, the film included an __________ scene where a character used a laptop, making it glaringly out of place.",
        chinese_question: "尽管是历史背景，这部电影包括一个 __________ 的场景，一个角色使用了笔记本电脑，显得特别不合时宜。",
        answers: [
            { option: "A", answer: "modern", chinese_answer: "现代", chinese_romanization: "xiàndài" },
            { option: "B", answer: "appropriate", chinese_answer: "适当", chinese_romanization: "shìdàng" },
            { option: "C", answer: "anachronistic", chinese_answer: "时代错误", chinese_romanization: "shídài cuòwù" },
            { option: "D", answer: "relevant", chinese_answer: "相关", chinese_romanization: "xiāngguān" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'anachronistic' means belonging to a period other than that being portrayed." +
            "<br><br>" +
            "(A) 'modern' means relating to the present or recent times." +
            "<br><br>" +
            "(B) 'appropriate' means suitable or proper in the circumstances." +
            "<br><br>" +
            "(D) 'relevant' means closely connected or appropriate to what is being done or considered.",
        chinese_explanation: "(C) '时代错误' 一词意味着属于所描绘时期之外的时期。" +
            "<br><br>" +
            "(A) '现代' 意味着与现在或最近的时期有关。" +
            "<br><br>" +
            "(B) '适当' 意味着在情况中是合适或适当的。" +
            "<br><br>" +
            "(D) '相关' 意味着与正在做的事情或考虑的事情密切相关或适当的。"
    },
    {
        id: 2,
        question: "Attending the safety training sessions is __________ for all employees to ensure a safe work environment.",
        chinese_question: "参加安全培训课程是所有员工的 __________ 要求，以确保安全的工作环境。",
        answers: [
            { option: "A", answer: "optional", chinese_answer: "可选", chinese_romanization: "kěxuǎn" },
            { option: "B", answer: "voluntary", chinese_answer: "自愿", chinese_romanization: "zìyuàn" },
            { option: "C", answer: "mandatory", chinese_answer: "强制性", chinese_romanization: "qiángzhì xìng" },
            { option: "D", answer: "discretionary", chinese_answer: "酌情", chinese_romanization: "zhuóqíng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'mandatory' means required by law or rules." +
            "<br><br>" +
            "(A) 'optional' means available to be chosen but not obligatory." +
            "<br><br>" +
            "(B) 'voluntary' means done, given, or acting of one's own free will." +
            "<br><br>" +
            "(D) 'discretionary' means available for use at the discretion of the user.",
        chinese_explanation: "(C) '强制性' 一词意味着法律或规则要求的。" +
            "<br><br>" +
            "(A) '可选' 意味着可以选择但不强制的。" +
            "<br><br>" +
            "(B) '自愿' 意味着出于自由意志的行为、给予或行动。" +
            "<br><br>" +
            "(D) '酌情' 意味着根据用户的判断可用。"
    },
    {
        id: 3,
        question: "The mysteries of the universe are __________, leaving scientists in awe as they continue to explore the vast cosmos.",
        chinese_question: "宇宙的奥秘是 __________ 的，使科学家们在继续探索广阔的宇宙时感到敬畏。",
        answers: [
            { option: "A", answer: "shallow", chinese_answer: "浅的", chinese_romanization: "qiǎn de" },
            { option: "B", answer: "unfathomable", chinese_answer: "深不可测的", chinese_romanization: "shēn bù kě cè de" },
            { option: "C", answer: "transparent", chinese_answer: "透明的", chinese_romanization: "tòumíng de" },
            { option: "D", answer: "comprehensible", chinese_answer: "可理解的", chinese_romanization: "kě lǐjiě de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'unfathomable' means incapable of being fully explored or understood." +
            "<br><br>" +
            "(A) 'shallow' means of little depth." +
            "<br><br>" +
            "(C) 'transparent' means allowing light to pass through so that objects behind can be distinctly seen." +
            "<br><br>" +
            "(D) 'comprehensible' means able to be understood; intelligible.",
        chinese_explanation: "(B) '深不可测的' 意味着无法被完全探索或理解的。" +
            "<br><br>" +
            "(A) '浅的' 意味着深度很小的。" +
            "<br><br>" +
            "(C) '透明的' 意味着允许光线通过，使后面的物体可以清楚地看到。" +
            "<br><br>" +
            "(D) '可理解的' 意味着能够被理解的；可理解的。"
    },
    {
        id: 4,
        question: "The writer was incredibly __________, producing several novels, short stories, and essays each year.",
        chinese_question: "这位作家非常 __________，每年都创作几部小说、短篇故事和散文。",
        answers: [
            { option: "A", answer: "unproductive", chinese_answer: "无生产力的", chinese_romanization: "wú shēngchǎnlì de" },
            { option: "B", answer: "prolific", chinese_answer: "多产的", chinese_romanization: "duōchǎn de" },
            { option: "C", answer: "dormant", chinese_answer: "休眠的", chinese_romanization: "xiūmián de" },
            { option: "D", answer: "stagnant", chinese_answer: "停滞的", chinese_romanization: "tíngzhì de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'prolific' means producing much fruit or foliage or many offspring; present in large numbers or quantities; plentiful." +
            "<br><br>" +
            "(A) 'unproductive' means not producing or able to produce large amounts of goods, crops, or other commodities." +
            "<br><br>" +
            "(C) 'dormant' means having normal physical functions suspended or slowed down for a period of time; in or as if in a deep sleep." +
            "<br><br>" +
            "(D) 'stagnant' means having no current or flow and often having an unpleasant smell as a consequence.",
        chinese_explanation: "(B) '多产的' 意味着产生大量的水果或叶子或许多后代；数量众多或大量存在的。" +
            "<br><br>" +
            "(A) '无生产力的' 意味着不生产或无法生产大量商品、作物或其他商品。" +
            "<br><br>" +
            "(C) '休眠的' 意味着正常的身体功能暂停或减慢一段时间；处于或仿佛处于深度睡眠中。" +
            "<br><br>" +
            "(D) '停滞的' 意味着没有流动或流动，并且通常因此而有不愉快的气味。"
    },
    {
        id: 5,
        question: "Her voice has a __________ tone that sets it apart from all the other singers in the choir.",
        chinese_question: "她的声音有一种 __________ 的音调，使它在合唱团的所有歌手中脱颖而出。",
        answers: [
            { option: "A", answer: "distinct", chinese_answer: "独特的", chinese_romanization: "dútè de" },
            { option: "B", answer: "monotonous", chinese_answer: "单调的", chinese_romanization: "dāndiào de" },
            { option: "C", answer: "vague", chinese_answer: "模糊的", chinese_romanization: "móhú de" },
            { option: "D", answer: "generic", chinese_answer: "普通的", chinese_romanization: "pǔtōng de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'distinct' means recognizably different in nature from something else of a similar type." +
            "<br><br>" +
            "(B) 'monotonous' means dull, tedious, and repetitious; lacking in variety and interest." +
            "<br><br>" +
            "(C) 'vague' means of uncertain, indefinite, or unclear character or meaning." +
            "<br><br>" +
            "(D) 'generic' means characteristic of or relating to a class or group of things; not specific.",
        chinese_explanation: "(A) '独特的' 意味着在性质上与类似事物有显著区别的。" +
            "<br><br>" +
            "(B) '单调的' 意味着枯燥、乏味和重复的；缺乏多样性和兴趣的。" +
            "<br><br>" +
            "(C) '模糊的' 意味着不确定的、无限的或不清楚的特征或意义的。" +
            "<br><br>" +
            "(D) '普通的' 意味着具有某一类或一组事物的特征；不具体的。"
    },
    {
        id: 6,
        question: "Despite his usually __________ nature, he took a firm stand on the issue, surprising everyone with his resolve.",
        chinese_question: "尽管他平时性格 __________，但他在这个问题上坚定立场，他的决心让所有人感到惊讶。",
        answers: [
            { option: "A", answer: "docile", chinese_answer: "温顺的", chinese_romanization: "wēnshùn de" },
            { option: "B", answer: "defiant", chinese_answer: "挑衅的", chinese_romanization: "tiǎoxìn de" },
            { option: "C", answer: "assertive", chinese_answer: "自信的", chinese_romanization: "zìxìn de" },
            { option: "D", answer: "unyielding", chinese_answer: "不屈的", chinese_romanization: "bù qū de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'docile' means ready to accept control or instruction; submissive." +
            "<br><br>" +
            "(B) 'defiant' means showing a disposition to challenge, resist, or fight." +
            "<br><br>" +
            "(C) 'assertive' means having or showing a confident and forceful personality." +
            "<br><br>" +
            "(D) 'unyielding' means not giving way to pressure; hard or solid.",
        chinese_explanation: "(A) '温顺的' 意味着准备接受控制或指示的；顺从的。" +
            "<br><br>" +
            "(B) '挑衅的' 意味着表现出挑战、抵抗或战斗的倾向。" +
            "<br><br>" +
            "(C) '自信的' 意味着表现出自信和果断的性格。" +
            "<br><br>" +
            "(D) '不屈的' 意味着不屈服于压力的；坚硬的或坚固的。"
    },
    {
        id: 7,
        question: "Her explanation was so __________ that even the skeptics were persuaded.",
        chinese_question: "她的解释非常__________，甚至连怀疑论者也被说服了。",
        answers: [
            { option: "A", answer: "dubious", chinese_answer: "可疑的", chinese_romanization: "kěyí de" },
            { option: "B", answer: "credible", chinese_answer: "可信的", chinese_romanization: "kěxìn de" },
            { option: "C", answer: "unreliable", chinese_answer: "不可靠的", chinese_romanization: "bù kěkào de" },
            { option: "D", answer: "implausible", chinese_answer: "不合理的", chinese_romanization: "bù hélǐ de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'credible' means able to be believed; convincing. Figuratively, it can mean being persuasive and trustworthy." +
            "<br><br>" +
            "(A) 'dubious' means hesitating or doubting." +
            "<br><br>" +
            "(C) 'unreliable' means not able to be relied upon." +
            "<br><br>" +
            "(D) 'implausible' means not seeming reasonable or probable; failing to convince.",
        chinese_explanation: "(B) '可信的'一词意味着能够被相信的；令人信服的。比喻地，它可以表示有说服力和值得信赖的。" +
            "<br><br>" +
            "(A) '可疑的' 意味着犹豫或怀疑的。" +
            "<br><br>" +
            "(C) '不可靠的' 意味着不能依靠的。" +
            "<br><br>" +
            "(D) '不合理的' 意味着看起来不合理或不可能的；没有说服力的。"
    },
    {
        id: 8,
        question: "The __________ nature of her explanation left no room for misunderstandings.",
        chinese_question: "她的解释 __________，没有留下任何误解的余地。",
        answers: [
            { option: "A", answer: "vague", chinese_answer: "模糊", chinese_romanization: "móhu" },
            { option: "B", answer: "unclear", chinese_answer: "不清楚", chinese_romanization: "bù qīngchǔ" },
            { option: "C", answer: "ambiguous", chinese_answer: "含糊", chinese_romanization: "hánhú" },
            { option: "D", answer: "concise", chinese_answer: "简洁", chinese_romanization: "jiǎnjié" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'concise' means giving a lot of information clearly and in a few words; brief but comprehensive." +
            "<br><br>" +
            "(A) 'vague' means of uncertain, indefinite, or unclear character or meaning." +
            "<br><br>" +
            "(B) 'unclear' means not easy to see, hear, or understand." +
            "<br><br>" +
            "(C) 'ambiguous' means open to more than one interpretation; not having one obvious meaning.",
        chinese_explanation: "(D) '简洁' 意味着以简明清晰的方式提供大量信息；简短但全面。" +
            "<br><br>" +
            "(A) '模糊' 意味着性质或意义不确定、不明确。" +
            "<br><br>" +
            "(B) '不清楚' 意味着不容易看到、听到或理解。" +
            "<br><br>" +
            "(C) '含糊' 意味着可以有不止一种解释；没有一个明显的意思。"
    },
    {
        id: 9,
        question: "The company is in __________ need of a financial boost to avoid bankruptcy.",
        chinese_question: "公司 __________ 需要财政支持以避免破产。",
        answers: [
            { option: "A", answer: "minimal", chinese_answer: "最小", chinese_romanization: "zuìxiǎo" },
            { option: "B", answer: "insignificant", chinese_answer: "无关紧要", chinese_romanization: "wúguān jǐnyào" },
            { option: "C", answer: "dire", chinese_answer: "紧急", chinese_romanization: "jǐnjí" },
            { option: "D", answer: "trivial", chinese_answer: "琐碎", chinese_romanization: "suǒsuì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'dire' means extremely serious or urgent." +
            "<br><br>" +
            "(A) 'minimal' means of a minimum amount, quantity, or degree; negligible." +
            "<br><br>" +
            "(B) 'insignificant' means too small or unimportant to be worth consideration." +
            "<br><br>" +
            "(D) 'trivial' means of little value or importance.",
        chinese_explanation: "(C) '紧急' 意味着极其严重或紧急。" +
            "<br><br>" +
            "(A) '最小' 意味着数量、数量或程度最小的；微不足道。" +
            "<br><br>" +
            "(B) '无关紧要' 意味着太小或不重要，不值得考虑。" +
            "<br><br>" +
            "(D) '琐碎' 意味着价值或重要性很小。"
    },
    {
        id: 10,
        question: "The palace was __________ in the morning light, its golden towers shimmering brightly.",
        chinese_question: "宫殿在晨光中显得 __________，金色的塔楼闪闪发光。",
        answers: [
            { option: "A", answer: "dull", chinese_answer: "暗淡", chinese_romanization: "àndàn" },
            { option: "B", answer: "resplendent", chinese_answer: "灿烂", chinese_romanization: "cànlàn" },
            { option: "C", answer: "shabby", chinese_answer: "破旧", chinese_romanization: "pòjiù" },
            { option: "D", answer: "ordinary", chinese_answer: "普通", chinese_romanization: "pǔtōng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'resplendent' means attractive and impressive through being richly colorful or sumptuous." +
            "<br><br>" +
            "(A) 'dull' means lacking interest or excitement." +
            "<br><br>" +
            "(C) 'shabby' means in poor condition through long or hard use or lack of care." +
            "<br><br>" +
            "(D) 'ordinary' means with no special or distinctive features; normal.",
        chinese_explanation: "(B) '灿烂' 一词意味着通过丰富多彩或华丽的色彩而具有吸引力和令人印象深刻。" +
            "<br><br>" +
            "(A) '暗淡' 意味着缺乏兴趣或兴奋。" +
            "<br><br>" +
            "(C) '破旧' 意味着由于长时间或用力使用或缺乏护理而状况不佳。" +
            "<br><br>" +
            "(D) '普通' 意味着没有特别或独特的特征；正常的。"
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
