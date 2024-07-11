// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The investor waited for a __________ moment to buy stocks, hoping to maximize his profits.",
        chinese_question: "投资者等待一个 __________ 的时刻购买股票，希望最大化他的利润。",
        answers: [
            { option: "A", answer: "unfavorable", chinese_answer: "不利的", chinese_romanization: "bùlì de" },
            { option: "B", answer: "inauspicious", chinese_answer: "不吉利的", chinese_romanization: "bù jílì de" },
            { option: "C", answer: "unfortunate", chinese_answer: "不幸的", chinese_romanization: "bùxìng de" },
            { option: "D", answer: "propitious", chinese_answer: "吉利的", chinese_romanization: "jílì de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'propitious' means likely to bring good results or success." +
            "<br><br>" +
            "(A) 'unfavorable' means not good or positive." +
            "<br><br>" +
            "(B) 'inauspicious' means not suggesting that something good will happen." +
            "<br><br>" +
            "(C) 'unfortunate' means having or marked by bad fortune.",
        chinese_explanation: "(D) '吉利的' 意思是可能带来好结果或成功。" +
            "<br><br>" +
            "(A) '不利的' 意思是不好的或消极的。" +
            "<br><br>" +
            "(B) '不吉利的' 意思是暗示不会发生好事。" +
            "<br><br>" +
            "(C) '不幸的' 意思是有不好的运气或标志。"
    },
    {
        id: 2,
        question: "The early 20th-century theater scene was vibrant with __________ shows, featuring a variety of comedy, music, dance, and novelty acts.",
        chinese_question: "20世纪初的剧场景象充满了 __________ 表演，包含各种喜剧、音乐、舞蹈和新奇的表演。",
        answers: [
            { option: "A", answer: "drama", chinese_answer: "戏剧", chinese_romanization: "xìjù" },
            { option: "B", answer: "tragedy", chinese_answer: "悲剧", chinese_romanization: "bēijù" },
            { option: "C", answer: "vaudeville", chinese_answer: "杂耍", chinese_romanization: "záshuǎ" },
            { option: "D", answer: "opera", chinese_answer: "歌剧", chinese_romanization: "gējù" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'vaudeville' means a type of entertainment popular chiefly in the US in the early 20th century, featuring a mixture of specialty acts such as burlesque comedy, song, and dance." +
            "<br><br>" +
            "(A) 'drama' means a play for theater, radio, or television." +
            "<br><br>" +
            "(B) 'tragedy' means a play dealing with tragic events and having an unhappy ending." +
            "<br><br>" +
            "(D) 'opera' means a dramatic work in one or more acts, set to music for singers and instrumentalists.",
        chinese_explanation: "(C) '杂耍' 一词意味着一种主要在20世纪初美国流行的娱乐类型，混合了特技表演如滑稽喜剧、歌曲和舞蹈。" +
            "<br><br>" +
            "(A) '戏剧' 意味着一种剧场、广播或电视的戏剧作品。" +
            "<br><br>" +
            "(B) '悲剧' 意味着处理悲剧事件并有不幸结局的戏剧。" +
            "<br><br>" +
            "(D) '歌剧' 意味着为歌手和乐器演奏者谱写的多幕戏剧作品。"
    },
    {
        id: 3,
        question: "The __________ children ran around the playground, making it difficult for the teacher to maintain order.",
        chinese_question: "__________ 的孩子们在操场上跑来跑去，老师很难维持秩序。",
        answers: [
            { option: "A", answer: "obstreperous", chinese_answer: "吵闹的", chinese_romanization: "chǎonào de" },
            { option: "B", answer: "obedient", chinese_answer: "顺从的", chinese_romanization: "shùncóng de" },
            { option: "C", answer: "quiet", chinese_answer: "安静的", chinese_romanization: "ānjìng de" },
            { option: "D", answer: "compliant", chinese_answer: "服从的", chinese_romanization: "fúcóng de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'obstreperous' means noisy and difficult to control." +
            "<br><br>" +
            "(B) 'obedient' means complying or willing to comply with an order or request; submissive to another's authority." +
            "<br><br>" +
            "(C) 'quiet' means making little or no noise." +
            "<br><br>" +
            "(D) 'compliant' means inclined to agree with others or obey rules, especially to an excessive degree; acquiescent.",
        chinese_explanation: "(A) '吵闹的' 一词意味着嘈杂且难以控制的。" +
            "<br><br>" +
            "(B) '顺从的' 意味着遵守或愿意遵守命令或请求；服从他人的权威。" +
            "<br><br>" +
            "(C) '安静的' 意味着没有或几乎没有噪音。" +
            "<br><br>" +
            "(D) '服从的' 意味着倾向于同意他人或遵守规则，尤其是过度的；默许的。"
    },
    {
        id: 4,
        question: "The company became __________ after the scandal revealed its unethical practices.",
        chinese_question: "丑闻揭露了其不道德的行为后，该公司变得__________。",
        answers: [
            { option: "A", answer: "famous", chinese_answer: "著名的", chinese_romanization: "zhùmíng de" },
            { option: "B", answer: "renowned", chinese_answer: "闻名的", chinese_romanization: "wénmíng de" },
            { option: "C", answer: "infamous", chinese_answer: "臭名昭著的", chinese_romanization: "chòumíngzhāozhù de" },
            { option: "D", answer: "celebrated", chinese_answer: "受赞扬的", chinese_romanization: "shòu zànyáng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'infamous' means well known for some bad quality or deed. Figuratively, it can mean being notorious or having a bad reputation." +
            "<br><br>" +
            "(A) 'famous' means known about by many people." +
            "<br><br>" +
            "(B) 'renowned' means known or talked about by many people; famous." +
            "<br><br>" +
            "(D) 'celebrated' means greatly admired; renowned.",
        chinese_explanation: "(C) '臭名昭著的' 一词意味着以某些不好的品质或行为而闻名。比喻地，它可以表示臭名远扬或名声不好。" +
            "<br><br>" +
            "(A) '著名的' 意味着为许多人所知。" +
            "<br><br>" +
            "(B) '闻名的' 意味着为许多人所知或谈论的；著名的。" +
            "<br><br>" +
            "(D) '受赞扬的' 意味着非常受人钦佩；闻名的。"
    },
    {
        id: 5,
        question: "The old book was filled with __________ symbols and stories that fascinated scholars and mystics alike.",
        chinese_question: "这本旧书充满了 __________ 的符号和故事，吸引了学者和神秘主义者。",
        answers: [
            { option: "A", answer: "mundane", chinese_answer: "世俗", chinese_romanization: "shìsú" },
            { option: "B", answer: "mystical", chinese_answer: "神秘", chinese_romanization: "shénmì" },
            { option: "C", answer: "ordinary", chinese_answer: "普通", chinese_romanization: "pǔtōng" },
            { option: "D", answer: "common", chinese_answer: "常见", chinese_romanization: "chángjiàn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'mystical' means relating to mystics or religious mysticism." +
            "<br><br>" +
            "(A) 'mundane' means lacking interest or excitement; dull." +
            "<br><br>" +
            "(C) 'ordinary' means with no special or distinctive features; normal." +
            "<br><br>" +
            "(D) 'common' means occurring, found, or done often; prevalent.",
        chinese_explanation: "(B) '神秘' 一词意味着与神秘主义者或宗教神秘主义有关。" +
            "<br><br>" +
            "(A) '世俗' 意味着缺乏兴趣或兴奋；无聊。" +
            "<br><br>" +
            "(C) '普通' 意味着没有特殊或独特的特征；正常。" +
            "<br><br>" +
            "(D) '常见' 意味着经常发生、发现或完成的；普遍的。"
    },
    {
        id: 6,
        question: "The donor wished to remain __________, choosing not to reveal his identity to the recipients of his charity.",
        chinese_question: "捐赠者希望保持 __________，选择不向受益人透露身份。",
        answers: [
            { option: "A", answer: "famous", chinese_answer: "著名", chinese_romanization: "zhùmíng" },
            { option: "B", answer: "known", chinese_answer: "已知", chinese_romanization: "yǐzhī" },
            { option: "C", answer: "anonymous", chinese_answer: "匿名", chinese_romanization: "nìmíng" },
            { option: "D", answer: "identified", chinese_answer: "识别", chinese_romanization: "shíbié" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'anonymous' means not identified by name; of unknown name." +
            "<br><br>" +
            "(A) 'famous' means known about by many people." +
            "<br><br>" +
            "(B) 'known' means recognized, familiar, or within the scope of knowledge." +
            "<br><br>" +
            "(D) 'identified' means having had one's identity established.",
        chinese_explanation: "(C) '匿名' 一词意味着没有被名字识别；未知的名字。" +
            "<br><br>" +
            "(A) '著名' 意味着为许多人所知。" +
            "<br><br>" +
            "(B) '已知' 意味着被识别、熟悉或在知识范围内。" +
            "<br><br>" +
            "(D) '识别' 意味着已确定身份。"
    },
    {
        id: 7,
        question: "The politician's __________ promises during the campaign were quickly forgotten once he was elected.",
        chinese_question: "政客在竞选期间的 __________ 承诺在他当选后很快就被遗忘了。",
        answers: [
            { option: "A", answer: "genuine", chinese_answer: "真诚", chinese_romanization: "zhēnchéng" },
            { option: "B", answer: "authentic", chinese_answer: "真实", chinese_romanization: "zhēnshí" },
            { option: "C", answer: "spurious", chinese_answer: "虚假", chinese_romanization: "xūjiǎ" },
            { option: "D", answer: "real", chinese_answer: "真实", chinese_romanization: "zhēnshí" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'spurious' means not being what it purports to be; false or fake." +
            "<br><br>" +
            "(A) 'genuine' means truly what something is said to be; authentic." +
            "<br><br>" +
            "(B) 'authentic' means of undisputed origin and not a copy; genuine." +
            "<br><br>" +
            "(D) 'real' means actually existing as a thing or occurring in fact.",
        chinese_explanation: "(C) '虚假' 一词意味着不是真实的；假或伪造。" +
            "<br><br>" +
            "(A) '真诚' 意味着确实是所说的那样；真实的。" +
            "<br><br>" +
            "(B) '真实' 意味着来源无可争议且不是复制品；真正的。" +
            "<br><br>" +
            "(D) '真实' 意味着实际上存在的东西或事实上发生的东西。"
    },
    {
        id: 8,
        question: "The __________ guest at the dinner party dominated the conversation, rarely allowing others to speak.",
        chinese_question: "晚宴上的 __________ 客人主导了谈话，很少让别人说话。",
        answers: [
            { option: "A", answer: "silent", chinese_answer: "沉默", chinese_romanization: "chénmò" },
            { option: "B", answer: "loquacious", chinese_answer: "多话", chinese_romanization: "duōhuà" },
            { option: "C", answer: "reticent", chinese_answer: "沉默寡言", chinese_romanization: "chénmò guǎyán" },
            { option: "D", answer: "taciturn", chinese_answer: "沉默不语", chinese_romanization: "chénmò bù yǔ" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'loquacious' means tending to talk a great deal; talkative." +
            "<br><br>" +
            "(A) 'silent' means not making or accompanied by any sound." +
            "<br><br>" +
            "(C) 'reticent' means not revealing one's thoughts or feelings readily." +
            "<br><br>" +
            "(D) 'taciturn' means reserved or uncommunicative in speech; saying little.",
        chinese_explanation: "(B) '多话' 一词意味着倾向于谈论很多；健谈。" +
            "<br><br>" +
            "(A) '沉默' 意味着不发出任何声音。" +
            "<br><br>" +
            "(C) '沉默寡言' 意味着不轻易透露自己的想法或感受。" +
            "<br><br>" +
            "(D) '沉默不语' 意味着在讲话中拘谨或不善言辞；说得很少。"
    },
    {
        id: 9,
        question: "The evidence was __________, leaving no doubt about the defendant's guilt in the minds of the jurors.",
        chinese_question: "证据是 __________ 的，让陪审团对被告的罪行毫无疑问。",
        answers: [
            { option: "A", answer: "questionable", chinese_answer: "可疑的", chinese_romanization: "kěyí de" },
            { option: "B", answer: "debatable", chinese_answer: "有争议的", chinese_romanization: "yǒu zhēngyì de" },
            { option: "C", answer: "incontrovertible", chinese_answer: "不可辩驳的", chinese_romanization: "bùkě biànbó de" },
            { option: "D", answer: "refutable", chinese_answer: "可反驳的", chinese_romanization: "kě fǎnbó de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'incontrovertible' means not able to be denied or disputed." +
            "<br><br>" +
            "(A) 'questionable' means doubtful as regards truth or validity." +
            "<br><br>" +
            "(B) 'debatable' means open to discussion or argument." +
            "<br><br>" +
            "(D) 'refutable' means able to be proven wrong.",
        chinese_explanation: "(C) '不可辩驳的' 一词意味着不能被否认或争辩的。" +
            "<br><br>" +
            "(A) '可疑的' 意味着真相或有效性值得怀疑。" +
            "<br><br>" +
            "(B) '有争议的' 意味着可以讨论或争论的。" +
            "<br><br>" +
            "(D) '可反驳的' 意味着能够被证明是错误的。"
    },
    {
        id: 10,
        question: "The chemicals in the cleaning products were found to be __________ to the environment, causing harm to plants and animals.",
        chinese_question: "清洁产品中的化学物质被发现对环境有 __________ 影响，对植物和动物造成伤害。",
        answers: [
            { option: "A", answer: "beneficial", chinese_answer: "有益", chinese_romanization: "yǒuyì" },
            { option: "B", answer: "neutral", chinese_answer: "中性", chinese_romanization: "zhōngxìng" },
            { option: "C", answer: "harmless", chinese_answer: "无害", chinese_romanization: "wúhài" },
            { option: "D", answer: "deleterious", chinese_answer: "有害", chinese_romanization: "yǒuhài" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'deleterious' means causing harm or damage." +
            "<br><br>" +
            "(A) 'beneficial' means resulting in good; favorable or advantageous." +
            "<br><br>" +
            "(B) 'neutral' means not helping or supporting either side in a conflict or disagreement." +
            "<br><br>" +
            "(C) 'harmless' means not likely to cause harm.",
        chinese_explanation: "(D) '有害' 一词意味着造成伤害或损害。" +
            "<br><br>" +
            "(A) '有益' 意味着导致好的结果；有利或有优势的。" +
            "<br><br>" +
            "(B) '中性' 意味着不帮助或支持冲突或分歧中的任何一方。" +
            "<br><br>" +
            "(C) '无害' 意味着不太可能造成伤害。"
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
