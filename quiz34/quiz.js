// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The ancient artifact was so old that it seemed almost __________, belonging to a time long before the recorded history.",
        chinese_question: "这件古代文物如此古老，几乎显得 __________，属于远古时期。",
        answers: [
            { option: "A", answer: "modern", chinese_answer: "现代", chinese_romanization: "xiàndài" },
            { option: "B", answer: "futuristic", chinese_answer: "未来", chinese_romanization: "wèilái" },
            { option: "C", answer: "antediluvian", chinese_answer: "远古", chinese_romanization: "yuǎngǔ" },
            { option: "D", answer: "contemporary", chinese_answer: "当代", chinese_romanization: "dāngdài" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'antediluvian' means of or belonging to the time before the biblical Flood; ridiculously old-fashioned." +
            "<br><br>" +
            "(A) 'modern' means relating to the present or recent times." +
            "<br><br>" +
            "(B) 'futuristic' means having or involving very modern technology or design." +
            "<br><br>" +
            "(D) 'contemporary' means living or occurring at the same time.",
        chinese_explanation: "(C) '远古' 一词意味着属于《圣经》洪水之前的时期；荒谬地过时。" +
            "<br><br>" +
            "(A) '现代' 意味着与现在或最近的时期有关。" +
            "<br><br>" +
            "(B) '未来' 意味着拥有或涉及非常现代的技术或设计。" +
            "<br><br>" +
            "(D) '当代' 意味着同时发生或存在的。"
    },
    {
        id: 2,
        question: "The bus driver's __________ remarks, including insulting passengers and using offensive language, were reported to the company.",
        chinese_question: "公交车司机的 __________ 言论，包括侮辱乘客和使用冒犯性语言，被报告给公司。",
        answers: [
            { option: "A", answer: "respectful", chinese_answer: "尊重的", chinese_romanization: "zūnzhòng de" },
            { option: "B", answer: "polite", chinese_answer: "有礼貌的", chinese_romanization: "yǒu lǐmào de" },
            { option: "C", answer: "kind", chinese_answer: "善良的", chinese_romanization: "shànliáng de" },
            { option: "D", answer: "contemptible", chinese_answer: "可鄙的", chinese_romanization: "kěbǐ de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'contemptible' means deserving of scorn or disrespect." +
            "<br><br>" +
            "(A) 'respectful' means showing deference and respect." +
            "<br><br>" +
            "(B) 'polite' means showing good manners." +
            "<br><br>" +
            "(C) 'kind' means having a friendly, generous, and considerate nature.",
        chinese_explanation: "(D) '可鄙的' 意思是值得蔑视或不尊重。" +
            "<br><br>" +
            "(A) '尊重的' 意思是表现出敬意和尊重。" +
            "<br><br>" +
            "(B) '有礼貌的' 意思是表现出良好礼貌。" +
            "<br><br>" +
            "(C) '善良的' 意思是有友好、慷慨和体贴的性格。"
    },
    {
        id: 3,
        question: "Given the current evidence, it seems __________ that the company will face significant legal challenges in the near future.",
        chinese_question: "鉴于当前的证据，公司在不久的将来面临重大法律挑战似乎是 __________ 的。",
        answers: [
            { option: "A", answer: "avoidable", chinese_answer: "可避免的", chinese_romanization: "kě bìmiǎn de" },
            { option: "B", answer: "unlikely", chinese_answer: "不太可能", chinese_romanization: "bù tài kěnéng" },
            { option: "C", answer: "ineluctable", chinese_answer: "不可避免的", chinese_romanization: "bùkě bìmiǎn de" },
            { option: "D", answer: "uncertain", chinese_answer: "不确定的", chinese_romanization: "bù quèdìng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'ineluctable' means unable to be resisted or avoided; inescapable." +
            "<br><br>" +
            "(A) 'avoidable' means able to be avoided or prevented." +
            "<br><br>" +
            "(B) 'unlikely' means not likely to happen, be done, or be true." +
            "<br><br>" +
            "(D) 'uncertain' means not able to be relied on; not known or definite.",
        chinese_explanation: "(C) '不可避免的' 一词意味着无法抗拒或避免的；不可逃避的。" +
            "<br><br>" +
            "(A) '可避免的' 意味着能够避免或防止的。" +
            "<br><br>" +
            "(B) '不太可能' 意味着不太可能发生、完成或真实。" +
            "<br><br>" +
            "(D) '不确定的' 意味着不能依赖的；未知或不确定的。"
    },
    {
        id: 4,
        question: "The chef's recipe book is filled with __________ Italian dishes that have been passed down through generations.",
        chinese_question: "这位厨师的食谱中充满了世代相传的 __________ 意大利菜肴。",
        answers: [
            { option: "A", answer: "fake", chinese_answer: "假", chinese_romanization: "jiǎ" },
            { option: "B", answer: "authentic", chinese_answer: "正宗", chinese_romanization: "zhèngzōng" },
            { option: "C", answer: "artificial", chinese_answer: "人工", chinese_romanization: "réngōng" },
            { option: "D", answer: "imitated", chinese_answer: "模仿", chinese_romanization: "mófǎng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'authentic' means of undisputed origin and not a copy; genuine." +
            "<br><br>" +
            "(A) 'fake' means not genuine; counterfeit." +
            "<br><br>" +
            "(C) 'artificial' means made or produced by human beings rather than occurring naturally." +
            "<br><br>" +
            "(D) 'imitated' means copied or simulated.",
        chinese_explanation: "(B) '正宗' 一词意味着来源无可争议，不是复制品；真实的。" +
            "<br><br>" +
            "(A) '假' 意味着不真实的；伪造的。" +
            "<br><br>" +
            "(C) '人工' 意味着由人类制造或生产，而不是自然发生的。" +
            "<br><br>" +
            "(D) '模仿' 意味着复制或模拟。"
    },
    {
        id: 5,
        question: "His __________ demeanor made him the perfect mentor for the young interns, always offering guidance and support.",
        chinese_question: "他 __________ 的举止使他成为年轻实习生的完美导师，总是提供指导和支持。",
        answers: [
            { option: "A", answer: "distant", chinese_answer: "遥远的", chinese_romanization: "yáoyuǎn de" },
            { option: "B", answer: "avuncular", chinese_answer: "叔伯般的", chinese_romanization: "shū bó bān de" },
            { option: "C", answer: "stern", chinese_answer: "严厉的", chinese_romanization: "yánlì de" },
            { option: "D", answer: "indifferent", chinese_answer: "漠不关心的", chinese_romanization: "mò bù guānxīn de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'avuncular' means kind and friendly towards a younger or less experienced person." +
            "<br><br>" +
            "(A) 'distant' means far away in space or time." +
            "<br><br>" +
            "(C) 'stern' means serious and unrelenting, especially in the assertion of authority and exercise of discipline." +
            "<br><br>" +
            "(D) 'indifferent' means having no particular interest or sympathy; unconcerned.",
        chinese_explanation: "(B) '叔伯般的' 一词意味着对年轻人或经验不足的人友好和友善的。" +
            "<br><br>" +
            "(A) '遥远的' 意味着在空间或时间上距离很远。" +
            "<br><br>" +
            "(C) '严厉的' 意味着严肃和不屈不挠的，尤其是在行使权威和纪律时。" +
            "<br><br>" +
            "(D) '漠不关心的' 意味着没有特别的兴趣或同情心；漠不关心。"
    },
    {
        id: 6,
        question: "His __________ behavior at the party was so out of character that his friends were genuinely concerned.",
        chinese_question: "他在聚会上的 __________ 行为如此反常，以至于他的朋友们真的很担心。",
        answers: [
            { option: "A", answer: "normal", chinese_answer: "正常的", chinese_romanization: "zhèngcháng de" },
            { option: "B", answer: "usual", chinese_answer: "通常的", chinese_romanization: "tōngcháng de" },
            { option: "C", answer: "aberrant", chinese_answer: "反常的", chinese_romanization: "fǎncháng de" },
            { option: "D", answer: "typical", chinese_answer: "典型的", chinese_romanization: "diǎnxíng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'aberrant' means departing from an accepted standard." +
            "<br><br>" +
            "(A) 'normal' means conforming to a standard; usual, typical, or expected." +
            "<br><br>" +
            "(B) 'usual' means habitually or typically occurring or done; customary." +
            "<br><br>" +
            "(D) 'typical' means having the distinctive qualities of a particular type of person or thing.",
        chinese_explanation: "(C) '反常的' 一词意味着偏离公认标准的。" +
            "<br><br>" +
            "(A) '正常的' 意味着符合标准的；通常的，典型的或预期的。" +
            "<br><br>" +
            "(B) '通常的' 意味着习惯性或典型发生或完成的；惯常的。" +
            "<br><br>" +
            "(D) '典型的' 意味着具有某种类型的人或事物的典型特征。"
    },
    {
        id: 7,
        question: "The team's ideas were __________, lacking the necessary support and resources to develop fully.",
        chinese_question: "团队的想法 __________，缺乏必要的支持和资源来充分发展。",
        answers: [
            { option: "A", answer: "thriving", chinese_answer: "繁荣的", chinese_romanization: "fánróng de" },
            { option: "B", answer: "flourishing", chinese_answer: "兴盛的", chinese_romanization: "xīngshèng de" },
            { option: "C", answer: "undernourished", chinese_answer: "营养不良的", chinese_romanization: "yíngyǎng bùliáng de" },
            { option: "D", answer: "supported", chinese_answer: "受支持的", chinese_romanization: "shòu zhīchí de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'undernourished' figuratively means lacking sufficient support or resources." +
            "<br><br>" +
            "(A) 'thriving' means prosperous and growing." +
            "<br><br>" +
            "(B) 'flourishing' means developing rapidly and successfully; thriving." +
            "<br><br>" +
            "(D) 'supported' means bearing all or part of the weight of; holding up.",
        chinese_explanation: "(C) '营养不良的' 在比喻意义上意味着缺乏足够的支持或资源。" +
            "<br><br>" +
            "(A) '繁荣的' 意味着繁荣和增长。" +
            "<br><br>" +
            "(B) '兴盛的' 意味着迅速和成功地发展；兴盛的。" +
            "<br><br>" +
            "(D) '受支持的' 意味着承受全部或部分重量；支撑。"
    },
    {
        id: 8,
        question: "The credibility of the influencer was __________ when it was discovered that she was paid to write positive reviews.",
        chinese_question: "当发现这位影响者被支付费用写正面评价时，她的信誉被 __________。",
        answers: [
            { option: "A", answer: "bolstered", chinese_answer: "支持的", chinese_romanization: "zhīchí de" },
            { option: "B", answer: "endorsed", chinese_answer: "认可的", chinese_romanization: "rènkě de" },
            { option: "C", answer: "elevated", chinese_answer: "提升的", chinese_romanization: "tíshēng de" },
            { option: "D", answer: "vitiated", chinese_answer: "损害的", chinese_romanization: "sǔnhài de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'vitiated' means spoiled or impaired in quality or efficiency." +
            "<br><br>" +
            "(A) 'bolstered' means supported or strengthened." +
            "<br><br>" +
            "(B) 'endorsed' means given approval or support." +
            "<br><br>" +
            "(C) 'elevated' means raised to a higher level or position.",
        chinese_explanation: "(D) '损害的' 意思是质量或效率被破坏。" +
            "<br><br>" +
            "(A) '支持的' 意思是被支持或加强的。" +
            "<br><br>" +
            "(B) '认可的' 意思是被认可或支持的。" +
            "<br><br>" +
            "(C) '提升的' 意思是被提升到更高的水平或位置。"
    },
    {
        id: 9,
        question: "The store owner's __________ response to customer complaints, such as 'If you don't like it, leave,' drove many shoppers away.",
        chinese_question: "店主对顾客投诉的 __________ 回应，如“如果你不喜欢，就离开”，赶走了许多顾客。",
        answers: [
            { option: "A", answer: "polite", chinese_answer: "礼貌的", chinese_romanization: "lǐmào de" },
            { option: "B", answer: "respectful", chinese_answer: "尊重的", chinese_romanization: "zūnzhòng de" },
            { option: "C", answer: "courteous", chinese_answer: "有礼貌的", chinese_romanization: "yǒu lǐmào de" },
            { option: "D", answer: "acerbic", chinese_answer: "尖刻的", chinese_romanization: "jiānkè de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'acerbic' means sharp and forthright, often in a way that is harsh or hurtful." +
            "<br><br>" +
            "(A) 'polite' means showing good manners." +
            "<br><br>" +
            "(B) 'respectful' means showing deference and respect." +
            "<br><br>" +
            "(C) 'courteous' means polite, respectful, or considerate in manner.",
        chinese_explanation: "(D) '尖刻的' 意思是尖锐和直率，通常是以一种严厉或伤人的方式。" +
            "<br><br>" +
            "(A) '礼貌的' 意思是表现出良好礼貌。" +
            "<br><br>" +
            "(B) '尊重的' 意思是表现出敬意和尊重。" +
            "<br><br>" +
            "(C) '有礼貌的' 意思是礼貌、尊重或体贴的行为。"
    },
    {
        id: 10,
        question: "Her __________ attempt to lie to her parents about her whereabouts was quickly discovered.",
        chinese_question: "她__________试图对父母撒谎，谎称自己的行踪很快被发现。",
        answers: [
            { option: "A", answer: "subtle", chinese_answer: "微妙的", chinese_romanization: "wēimiào de" },
            { option: "B", answer: "hidden", chinese_answer: "隐藏的", chinese_romanization: "yǐncáng de" },
            { option: "C", answer: "blatant", chinese_answer: "明目张胆的", chinese_romanization: "míngmùzhāngdǎn de" },
            { option: "D", answer: "discreet", chinese_answer: "谨慎的", chinese_romanization: "jǐnshèn de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'blatant' means (of bad behavior) done openly and unashamedly. Figuratively, it can mean something that is very obvious and lacks any attempt to conceal." +
            "<br><br>" +
            "(A) 'subtle' means (especially of a change or distinction) so delicate or precise as to be difficult to analyze or describe." +
            "<br><br>" +
            "(B) 'hidden' means kept out of sight; concealed." +
            "<br><br>" +
            "(D) 'discreet' means careful and circumspect in one's speech or actions, especially in order to avoid causing offense or to gain an advantage.",
        chinese_explanation: "(C) '明目张胆的'一词意味着（不良行为）公开且无羞耻地进行。比喻地，它可以表示非常明显且没有任何掩饰的尝试。" +
            "<br><br>" +
            "(A) '微妙的' 意味着（尤其是变化或区别）如此精致或准确，以至于难以分析或描述。" +
            "<br><br>" +
            "(B) '隐藏的' 意味着隐藏起来的；隐藏的。" +
            "<br><br>" +
            "(D) '谨慎的' 意味着在言语或行动中小心谨慎，尤其是为了避免冒犯或获取优势。"
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
