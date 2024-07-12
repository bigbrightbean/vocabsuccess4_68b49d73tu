// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The sunny weather was __________ for their outdoor wedding, creating the perfect atmosphere for their special day.",
        chinese_question: "晴朗的天气对他们的户外婚礼来说是 __________，为他们的特殊日子创造了完美的氛围。",
        answers: [
            { option: "A", answer: "unfavorable", chinese_answer: "不利的", chinese_romanization: "bùlì de" },
            { option: "B", answer: "ominous", chinese_answer: "不祥的", chinese_romanization: "bùxiáng de" },
            { option: "C", answer: "adverse", chinese_answer: "不利的", chinese_romanization: "bùlì de" },
            { option: "D", answer: "propitious", chinese_answer: "吉利的", chinese_romanization: "jílì de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'propitious' means likely to bring good results or success." +
            "<br><br>" +
            "(A) 'unfavorable' means not good or positive." +
            "<br><br>" +
            "(B) 'ominous' means suggesting that something bad is going to happen." +
            "<br><br>" +
            "(C) 'adverse' means preventing success or development.",
        chinese_explanation: "(D) '吉利的' 意思是可能带来好结果或成功。" +
            "<br><br>" +
            "(A) '不利的' 意思是不好的或消极的。" +
            "<br><br>" +
            "(B) '不祥的' 意思是暗示可能会发生不好的事情。" +
            "<br><br>" +
            "(C) '不利的' 意思是阻碍成功或发展。"
    },
    {
        id: 2,
        question: "Her style was the __________ example of elegance, always perfectly composed and tastefully accessorized.",
        chinese_question: "她的风格是 __________ 优雅的典范，总是完美地组成和品味高雅地配饰。",
        answers: [
            { option: "A", answer: "unusual", chinese_answer: "不寻常的", chinese_romanization: "bù xúncháng de" },
            { option: "B", answer: "commonplace", chinese_answer: "普通的", chinese_romanization: "pǔtōng de" },
            { option: "C", answer: "quintessential", chinese_answer: "典型的", chinese_romanization: "diǎnxíng de" },
            { option: "D", answer: "flawed", chinese_answer: "有缺陷的", chinese_romanization: "yǒu quēxiàn de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'quintessential' means representing the most perfect or typical example of a quality or class." +
            "<br><br>" +
            "(A) 'unusual' means not habitually or commonly occurring or done." +
            "<br><br>" +
            "(B) 'commonplace' means not unusual; ordinary." +
            "<br><br>" +
            "(D) 'flawed' means blemished, damaged, or imperfect in some way.",
        chinese_explanation: "(C) '典型的' 意味着代表一种质量或类别最完美或典型的例子。" +
            "<br><br>" +
            "(A) '不寻常的' 意味着不习惯性或常见的发生或做的。" +
            "<br><br>" +
            "(B) '普通的' 意味着不寻常的；普通的。" +
            "<br><br>" +
            "(D) '有缺陷的' 意味着在某些方面有瑕疵、损坏或不完美的。"
    },
    {
        id: 3,
        question: "Despite their heated argument, she was __________ enough to forgive him and move forward without holding a grudge.",
        chinese_question: "尽管他们激烈争论，她还是 __________ 地原谅了他，没有怀恨在心。",
        answers: [
            { option: "A", answer: "petty", chinese_answer: "琐碎的", chinese_romanization: "suǒsuì de" },
            { option: "B", answer: "vindictive", chinese_answer: "报复的", chinese_romanization: "bàofù de" },
            { option: "C", answer: "magnanimous", chinese_answer: "宽宏大量的", chinese_romanization: "kuānhóng dàliàng de" },
            { option: "D", answer: "spiteful", chinese_answer: "恶意的", chinese_romanization: "èyì de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'magnanimous' means very generous or forgiving, especially toward a rival or someone less powerful than oneself." +
            "<br><br>" +
            "(A) 'petty' means of little importance; trivial." +
            "<br><br>" +
            "(B) 'vindictive' means having or showing a strong or unreasoning desire for revenge." +
            "<br><br>" +
            "(D) 'spiteful' means showing or caused by malice.",
        chinese_explanation: "(C) '宽宏大量的' 意味着非常慷慨或宽容，尤其是对竞争对手或权力较小的人。" +
            "<br><br>" +
            "(A) '琐碎的' 意味着不重要的；微不足道的。" +
            "<br><br>" +
            "(B) '报复的' 意味着有或表现出强烈或不合理的报复欲望。" +
            "<br><br>" +
            "(D) '恶意的' 意味着表现出或由恶意引起的。"
    },
    {
        id: 4,
        question: "His __________ email indicated he was not interested in further discussion on the matter.",
        chinese_question: "他 __________ 的电子邮件表明他对进一步讨论此事不感兴趣。",
        answers: [
            { option: "A", answer: "lengthy", chinese_answer: "冗长", chinese_romanization: "rǒngcháng" },
            { option: "B", answer: "engaging", chinese_answer: "迷人", chinese_romanization: "mírén" },
            { option: "C", answer: "elaborate", chinese_answer: "详尽", chinese_romanization: "xiángjìn" },
            { option: "D", answer: "curt", chinese_answer: "简短", chinese_romanization: "jiǎnduǎn" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'curt' means rudely brief." +
            "<br><br>" +
            "(A) 'lengthy' means (especially in reference to time) of considerable or unusual length, especially so as to be tedious." +
            "<br><br>" +
            "(B) 'engaging' means charming and attractive." +
            "<br><br>" +
            "(C) 'elaborate' means involving many carefully arranged parts or details; detailed and complicated in design and planning.",
        chinese_explanation: "(D) '简短' 意味着简短而粗鲁。" +
            "<br><br>" +
            "(A) '冗长' 意味着（尤其是指时间）相当长或异常长，尤其是使人厌烦。" +
            "<br><br>" +
            "(B) '迷人' 意味着迷人和吸引人。" +
            "<br><br>" +
            "(C) '详尽' 意味着涉及许多精心安排的部分或细节；在设计和计划上详细和复杂的。"
    },
    {
        id: 5,
        question: "He gave an __________ account of the events, making sure everyone understood what happened.",
        chinese_question: "他对事件进行了 __________ 的描述，确保每个人都理解了发生的事情。",
        answers: [
            { option: "A", answer: "confusing", chinese_answer: "令人困惑的", chinese_romanization: "lìng rén kùnhuò de" },
            { option: "B", answer: "explicit", chinese_answer: "明确的", chinese_romanization: "míngquè de" },
            { option: "C", answer: "vague", chinese_answer: "模糊的", chinese_romanization: "móhu de" },
            { option: "D", answer: "misleading", chinese_answer: "误导的", chinese_romanization: "wùdǎo de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'explicit' means stated clearly and in detail, leaving no room for confusion or doubt." +
            "<br><br>" +
            "(A) 'confusing' means bewildering or perplexing." +
            "<br><br>" +
            "(C) 'vague' means of uncertain, indefinite, or unclear character or meaning." +
            "<br><br>" +
            "(D) 'misleading' means giving the wrong idea or impression.",
        chinese_explanation: "(B) '明确的' 意味着清楚地详细说明，没有留下困惑或怀疑的余地。" +
            "<br><br>" +
            "(A) '令人困惑的' 意味着令人困惑或迷惑。" +
            "<br><br>" +
            "(C) '模糊的' 意味着性质或意义不确定、不明确。" +
            "<br><br>" +
            "(D) '误导的' 意味着给人错误的想法或印象。"
    },
    {
        id: 6,
        question: "Her __________ leadership qualities made her the ideal candidate for the position.",
        chinese_question: "她 __________ 的领导才能使她成为这个职位的理想候选人。",
        answers: [
            { option: "A", answer: "ordinary", chinese_answer: "普通的", chinese_romanization: "pǔtōng de" },
            { option: "B", answer: "standard", chinese_answer: "标准的", chinese_romanization: "biāozhǔn de" },
            { option: "C", answer: "typical", chinese_answer: "典型的", chinese_romanization: "diǎnxíng de" },
            { option: "D", answer: "exceptional", chinese_answer: "杰出的", chinese_romanization: "jiéchū de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'exceptional' means unusually good; outstanding." +
            "<br><br>" +
            "(A) 'ordinary' means with no special or distinctive features; normal." +
            "<br><br>" +
            "(B) 'standard' means used or accepted as normal or average." +
            "<br><br>" +
            "(C) 'typical' means having the distinctive qualities of a particular type of person or thing.",
        chinese_explanation: "(D) '杰出的' 意味着异常好；优秀。" +
            "<br><br>" +
            "(A) '普通的' 意味着没有特别或独特的特征；正常的。" +
            "<br><br>" +
            "(B) '标准的' 意味着被用作或接受为正常或平均。" +
            "<br><br>" +
            "(C) '典型的' 意味着具有特定类型的人或事物的独特品质。"
    },
    {
        id: 7,
        question: "Her __________ taste in fashion set her apart from her peers.",
        chinese_question: "她在时尚方面的 __________ 品味使她与同龄人区别开来。",
        answers: [
            { option: "A", answer: "vulgar", chinese_answer: "庸俗", chinese_romanization: "yōngsú" },
            { option: "B", answer: "mediocre", chinese_answer: "平庸", chinese_romanization: "píngyōng" },
            { option: "C", answer: "sophisticated", chinese_answer: "复杂", chinese_romanization: "fùzá" },
            { option: "D", answer: "plain", chinese_answer: "朴素", chinese_romanization: "pǔsù" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'sophisticated' means having, revealing, or involving a great deal of worldly experience and knowledge of fashion and culture." +
            "<br><br>" +
            "(A) 'vulgar' means lacking sophistication or good taste; unrefined." +
            "<br><br>" +
            "(B) 'mediocre' means of only moderate quality; not very good." +
            "<br><br>" +
            "(D) 'plain' means not decorated or elaborate; simple or ordinary.",
        chinese_explanation: "(C) '复杂' 意味着具有、显露或涉及大量的世俗经验和对时尚和文化的知识。" +
            "<br><br>" +
            "(A) '庸俗' 意味着缺乏复杂性或好品味；粗糙的。" +
            "<br><br>" +
            "(B) '平庸' 意味着质量一般的；不是很好的。" +
            "<br><br>" +
            "(D) '朴素' 意味着没有装饰或精致的；简单的或普通的。"
    },
    {
        id: 8,
        question: "Her __________ attempt to take credit for the team's work was met with widespread disapproval.",
        chinese_question: "她 __________ 地试图将团队的工作归功于自己，遭到了广泛的反对。",
        answers: [
            { option: "A", answer: "brazen", chinese_answer: "厚颜无耻的", chinese_romanization: "hòuyán wúchǐ de" },
            { option: "B", answer: "modest", chinese_answer: "谦虚的", chinese_romanization: "qiānxū de" },
            { option: "C", answer: "humble", chinese_answer: "谦逊的", chinese_romanization: "qiānxùn de" },
            { option: "D", answer: "shy", chinese_answer: "害羞的", chinese_romanization: "hàixiū de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'brazen' means bold and without shame." +
            "<br><br>" +
            "(B) 'modest' means unassuming or moderate in the estimation of one's abilities or achievements." +
            "<br><br>" +
            "(C) 'humble' means having or showing a modest or low estimate of one's importance." +
            "<br><br>" +
            "(D) 'shy' means being reserved or having or showing nervousness or timidity in the company of other people.",
        chinese_explanation: "(A) '厚颜无耻的' 意味着大胆且无羞耻的." +
            "<br><br>" +
            "(B) '谦虚的' 意味着对自己的能力或成就不夸大的或适度的." +
            "<br><br>" +
            "(C) '谦逊的' 意味着对自己的重要性有或表现出谦虚或低估的态度." +
            "<br><br>" +
            "(D) '害羞的' 意味着在与他人相处时表现出保留或紧张的."
    },
    {
        id: 9,
        question: "She has a __________ understanding of many different cultures, having traveled extensively.",
        chinese_question: "她对许多不同文化有 __________ 的了解，因为她旅行广泛。",
        answers: [
            { option: "A", answer: "limited", chinese_answer: "有限", chinese_romanization: "yǒuxiàn" },
            { option: "B", answer: "narrow", chinese_answer: "狭窄", chinese_romanization: "xiázhǎi" },
            { option: "C", answer: "broad", chinese_answer: "广泛", chinese_romanization: "guǎngfàn" },
            { option: "D", answer: "restricted", chinese_answer: "受限", chinese_romanization: "shòuxiàn" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'broad' means having a wide range or extent." +
            "<br><br>" +
            "(A) 'limited' means restricted in size, amount, or extent." +
            "<br><br>" +
            "(B) 'narrow' means of small width." +
            "<br><br>" +
            "(D) 'restricted' means limited in extent, number, scope, or action.",
        chinese_explanation: "(C) '广泛' 意味着范围广或广泛的。" +
            "<br><br>" +
            "(A) '有限' 意味着在大小、数量或范围上有限的。" +
            "<br><br>" +
            "(B) '狭窄' 意味着宽度小的。" +
            "<br><br>" +
            "(D) '受限' 意味着在范围、数量、范围或行动上受到限制。"
    },
    {
        id: 10,
        question: "The sales team had a __________ start to the quarter, meeting all their targets within the first month.",
        chinese_question: "销售团队在这个季度有一个 __________ 的开始，在第一个月内就达到了所有目标。",
        answers: [
            { option: "A", answer: "brisk", chinese_answer: "轻快的", chinese_romanization: "qīngkuài de" },
            { option: "B", answer: "slow", chinese_answer: "缓慢的", chinese_romanization: "huǎnmàn de" },
            { option: "C", answer: "mediocre", chinese_answer: "中等的", chinese_romanization: "zhōngděng de" },
            { option: "D", answer: "lackluster", chinese_answer: "平淡的", chinese_romanization: "píngdàn de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'brisk' means active, fast, and energetic." +
            "<br><br>" +
            "(B) 'slow' means moving or operating at a slow speed." +
            "<br><br>" +
            "(C) 'mediocre' means of only moderate quality; not very good." +
            "<br><br>" +
            "(D) 'lackluster' means lacking in vitality, force, or conviction; uninspired or uninspiring.",
        chinese_explanation: "(A) '轻快的' 意味着活跃、快速和充满活力的." +
            "<br><br>" +
            "(B) '缓慢的' 意味着移动或操作速度缓慢的." +
            "<br><br>" +
            "(C) '中等的' 意味着质量一般的；不是很好的." +
            "<br><br>" +
            "(D) '平淡的' 意味着缺乏活力、力量或信念的；没有灵感或没有激励性的."
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
