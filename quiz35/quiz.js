// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The team's performance was __________, with no signs of improvement in sight.",
        chinese_question: "球队的表现 __________，没有任何改善的迹象。",
        answers: [
            { option: "A", answer: "dismal", chinese_answer: "糟糕", chinese_romanization: "zāogāo" },
            { option: "B", answer: "promising", chinese_answer: "有前途", chinese_romanization: "yǒu qiántú" },
            { option: "C", answer: "impressive", chinese_answer: "令人印象深刻", chinese_romanization: "lìng rén yìnxiàng shēnkè" },
            { option: "D", answer: "remarkable", chinese_answer: "引人注目", chinese_romanization: "yǐnrén zhùmù" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'dismal' metaphorically means pitifully or disgracefully bad." +
            "<br><br>" +
            "(B) 'promising' means showing signs of future success." +
            "<br><br>" +
            "(C) 'impressive' means evoking admiration through size, quality, or skill; grand, imposing, or awesome." +
            "<br><br>" +
            "(D) 'remarkable' means worthy of attention; striking.",
        chinese_explanation: "(A) '糟糕' 比喻可悲或可耻的糟糕。" +
            "<br><br>" +
            "(B) '有前途' 意味着显示未来成功的迹象。" +
            "<br><br>" +
            "(C) '令人印象深刻' 意味着通过尺寸、质量或技能唤起钦佩的；宏伟的、令人印象深刻的或极好的。" +
            "<br><br>" +
            "(D) '引人注目' 意味着值得关注的；引人注目的。"
    },
    {
        id: 2,
        question: "In a __________ move, he put forward a daring new strategy during the meeting.",
        chinese_question: "在一个 __________ 举动中，他在会议上提出了一个大胆的新策略。",
        answers: [
            { option: "A", answer: "bold", chinese_answer: "大胆的", chinese_romanization: "dàdǎn de" },
            { option: "B", answer: "innovative", chinese_answer: "创新的", chinese_romanization: "chuàngxīn de" },
            { option: "C", answer: "risky", chinese_answer: "冒险的", chinese_romanization: "màoxiǎn de" },
            { option: "D", answer: "cautious", chinese_answer: "谨慎的", chinese_romanization: "jǐnshèn de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'bold' means showing a willingness to take risks; confident and courageous. It suggests a daring and confident action, often in the face of uncertainty." +
            "<br><br>" +
            "(B) 'innovative' means introducing or using new ideas or methods; original and creative." +
            "<br><br>" +
            "(C) 'risky' means involving the possibility of danger, failure, or loss; hazardous or dangerous." +
            "<br><br>" +
            "(D) 'cautious' means careful to avoid potential problems or dangers, often implying a measured approach or careful consideration before acting.",
        chinese_explanation: "(A) '大胆的' 意味着愿意冒险的；自信和勇敢的。它暗示了一种在面对不确定性时的大胆和自信。" +
            "<br><br>" +
            "(B) '创新的' 意味着引入或使用新的想法或方法；原创和有创造性。" +
            "<br><br>" +
            "(C) '冒险的' 意味着涉及到可能的危险、失败或损失的可能性；危险的或危险的。" +
            "<br><br>" +
            "(D) '谨慎的' 意味着小心避免潜在的问题或危险，通常暗示在行动之前经过深思熟虑或谨慎。"
    },
    {
        id: 3,
        question: "The opportunity to travel abroad was left __________, and she decided to seize it before it closed.",
        chinese_question: "出国旅行的机会还 __________ 着，她决定在机会关闭之前抓住它。",
        answers: [
            { option: "A", answer: "closed", chinese_answer: "关闭", chinese_romanization: "guānbì" },
            { option: "B", answer: "sealed", chinese_answer: "密封", chinese_romanization: "mìfēng" },
            { option: "C", answer: "ajar", chinese_answer: "半开", chinese_romanization: "bànkāi" },
            { option: "D", answer: "shut", chinese_answer: "关上", chinese_romanization: "guānshàng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'ajar' means slightly open, suggesting an opportunity that is still available." +
            "<br><br>" +
            "(A) 'closed' means not open." +
            "<br><br>" +
            "(B) 'sealed' means tightly closed or secured." +
            "<br><br>" +
            "(D) 'shut' means closed.",
        chinese_explanation: "(C) '半开' 意味着稍微打开的，暗示一个仍然可用的机会。" +
            "<br><br>" +
            "(A) '关闭' 意味着不打开。" +
            "<br><br>" +
            "(B) '密封' 意味着紧密关闭或固定。" +
            "<br><br>" +
            "(D) '关上' 意味着关闭。"
    },
    {
        id: 4,
        question: "Her __________ attitude towards life allowed her to enjoy even the smallest moments without stress.",
        chinese_question: "她对生活的 __________ 态度使她能够在没有压力的情况下享受每一个小小的时刻。",
        answers: [
            { option: "A", answer: "carefree", chinese_answer: "无忧无虑的", chinese_romanization: "wúyōuwúlǜ de" },
            { option: "B", answer: "worried", chinese_answer: "担心的", chinese_romanization: "dānxīn de" },
            { option: "C", answer: "tense", chinese_answer: "紧张的", chinese_romanization: "jǐnzhāng de" },
            { option: "D", answer: "burdened", chinese_answer: "负担重的", chinese_romanization: "fùdān zhòng de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'carefree' means free from worries or responsibilities." +
            "<br><br>" +
            "(B) 'worried' means anxious or troubled about actual or potential problems." +
            "<br><br>" +
            "(C) 'tense' means unable to relax because of nervousness, anxiety, or stimulation." +
            "<br><br>" +
            "(D) 'burdened' means carrying a heavy load or responsibility.",
        chinese_explanation: "(A) '无忧无虑的' 意味着没有担忧或责任的。" +
            "<br><br>" +
            "(B) '担心的' 意味着对实际或潜在的问题感到焦虑或困扰的。" +
            "<br><br>" +
            "(C) '紧张的' 意味着因紧张、焦虑或刺激而无法放松的。" +
            "<br><br>" +
            "(D) '负担重的' 意味着承担沉重负担或责任的。"
    },
    {
        id: 5,
        question: "Her __________ plan to win the election involved manipulating public opinion through subtle lies and clever marketing.",
        chinese_question: "她 __________ 的选举计划包括通过巧妙的谎言和聪明的营销来操纵公众舆论。",
        answers: [
            { option: "A", answer: "naive", chinese_answer: "天真的", chinese_romanization: "tiānzhēn de" },
            { option: "B", answer: "straightforward", chinese_answer: "直截了当的", chinese_romanization: "zhíjié liǎodāng de" },
            { option: "C", answer: "honest", chinese_answer: "诚实的", chinese_romanization: "chéngshí de" },
            { option: "D", answer: "cunning", chinese_answer: "狡猾的", chinese_romanization: "jiǎohuá de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'cunning' means having or showing skill in achieving one's ends by deceit or evasion." +
            "<br><br>" +
            "(A) 'naive' means showing a lack of experience, wisdom, or judgment." +
            "<br><br>" +
            "(B) 'straightforward' means uncomplicated and easy to do or understand." +
            "<br><br>" +
            "(C) 'honest' means free of deceit; truthful and sincere.",
        chinese_explanation: "(D) '狡猾的' 意味着在欺骗或规避中表现出技巧或能力。" +
            "<br><br>" +
            "(A) '天真的' 意味着缺乏经验、智慧或判断力的。" +
            "<br><br>" +
            "(B) '直截了当的' 意味着简单且容易做或理解的。" +
            "<br><br>" +
            "(C) '诚实的' 意味着没有欺骗的；真实和真诚的。"
    },
    {
        id: 6,
        question: "The __________ task of data entry made her lose interest quickly.",
        chinese_question: "数据录入的 __________ 任务使她很快失去了兴趣。",
        answers: [
            { option: "A", answer: "tedious", chinese_answer: "乏味的", chinese_romanization: "fáwèi de" },
            { option: "B", answer: "fascinating", chinese_answer: "引人入胜的", chinese_romanization: "yǐnrén rùshèng de" },
            { option: "C", answer: "invigorating", chinese_answer: "振奋人心的", chinese_romanization: "zhènfèn rénxīn de" },
            { option: "D", answer: "entertaining", chinese_answer: "娱乐的", chinese_romanization: "yúlè de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'tedious' metaphorically means boring and monotonous." +
            "<br><br>" +
            "(B) 'fascinating' means extremely interesting." +
            "<br><br>" +
            "(C) 'invigorating' means making one feel strong, healthy, and full of energy." +
            "<br><br>" +
            "(D) 'entertaining' means providing amusement or enjoyment.",
        chinese_explanation: "(A) '乏味的' 比喻无聊和单调的。" +
            "<br><br>" +
            "(B) '引人入胜的' 意味着极其有趣的。" +
            "<br><br>" +
            "(C) '振奋人心的' 意味着使人感到强壮、健康和充满活力的。" +
            "<br><br>" +
            "(D) '娱乐的' 意味着提供娱乐或享受的。"
    },
    {
        id: 7,
        question: "The vet's __________ behaviour, such as mistreating animals and ignoring their pain, shocked the community.",
        chinese_question: "兽医的 __________ 行为，如虐待动物和忽视它们的疼痛，震惊了社区。",
        answers: [
            { option: "A", answer: "compassionate", chinese_answer: "有同情心的", chinese_romanization: "yǒu tóngqíng xīn de" },
            { option: "B", answer: "caring", chinese_answer: "关心的", chinese_romanization: "guānxīn de" },
            { option: "C", answer: "respectable", chinese_answer: "值得尊敬的", chinese_romanization: "zhídé zūnjìng de" },
            { option: "D", answer: "contemptible", chinese_answer: "可鄙的", chinese_romanization: "kěbǐ de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'contemptible' means deserving of scorn or disrespect." +
            "<br><br>" +
            "(A) 'compassionate' means feeling or showing sympathy and concern for others." +
            "<br><br>" +
            "(B) 'caring' means displaying kindness and concern for others." +
            "<br><br>" +
            "(C) 'respectable' means worthy of respect or esteem.",
        chinese_explanation: "(D) '可鄙的' 意思是值得蔑视或不尊重。" +
            "<br><br>" +
            "(A) '有同情心的' 意思是感到或表现出同情和关心他人。" +
            "<br><br>" +
            "(B) '关心的' 意思是表现出对他人的关心和关怀。" +
            "<br><br>" +
            "(C) '值得尊敬的' 意思是值得尊重或敬佩。"
    },
    {
        id: 8,
        question: "The neighbor's __________ greeting, delivered with a frown and without any pleasantries, made the visitor feel unwelcome and uncomfortable.",
        chinese_question: "邻居 __________ 的问候，皱着眉头，没有任何客套，让来访者感到不受欢迎和不舒服。",
        answers: [
            { option: "A", answer: "warm", chinese_answer: "热情的", chinese_romanization: "rèqíng de" },
            { option: "B", answer: "courteous", chinese_answer: "礼貌的", chinese_romanization: "lǐmào de" },
            { option: "C", answer: "inviting", chinese_answer: "热情的", chinese_romanization: "rèqíng de" },
            { option: "D", answer: "brusque", chinese_answer: "粗鲁的", chinese_romanization: "cūlǔ de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'brusque' means abrupt or offhand in speech or manner." +
            "<br><br>" +
            "(A) 'warm' means showing enthusiasm, affection, or kindness." +
            "<br><br>" +
            "(B) 'courteous' means polite, respectful, or considerate in manner." +
            "<br><br>" +
            "(C) 'inviting' means attractive and tempting.",
        chinese_explanation: "(D) '粗鲁的' 意思是在讲话或行为上突然或随便。" +
            "<br><br>" +
            "(A) '热情的' 意思是表现出热情、爱或善良。" +
            "<br><br>" +
            "(B) '礼貌的' 意思是礼貌、尊重或体贴的行为。" +
            "<br><br>" +
            "(C) '热情的' 意思是有吸引力和诱人的。"
    },
    {
        id: 9,
        question: "The __________ habitat of the monkeys provided them with plenty of trees to swing from and forage for food.",
        chinese_question: "猴子的 __________ 栖息地为它们提供了许多可以荡来荡去的树木和觅食的地方。",
        answers: [
            { option: "A", answer: "aquatic", chinese_answer: "水生的", chinese_romanization: "shuǐshēng de" },
            { option: "B", answer: "desert", chinese_answer: "沙漠的", chinese_romanization: "shāmò de" },
            { option: "C", answer: "arboreal", chinese_answer: "树栖的", chinese_romanization: "shùqī de" },
            { option: "D", answer: "tundra", chinese_answer: "苔原的", chinese_romanization: "táiyuán de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'arboreal' means relating to or resembling trees; living in trees." +
            "<br><br>" +
            "(A) 'aquatic' means relating to water." +
            "<br><br>" +
            "(B) 'desert' means a barren area of landscape where little precipitation occurs." +
            "<br><br>" +
            "(D) 'tundra' means a vast, flat, treeless Arctic region.",
        chinese_explanation: "(C) '树栖的' 一词意味着与树木有关或类似树木的；生活在树上的。" +
            "<br><br>" +
            "(A) '水生的' 意味着与水有关的。" +
            "<br><br>" +
            "(B) '沙漠的' 意味着降水很少的荒凉地区。" +
            "<br><br>" +
            "(D) '苔原的' 意味着广阔的、平坦的、无树的北极地区。"
    },
    {
        id: 10,
        question: "The project's success was hindered by his __________ refusal to consider alternative solutions.",
        chinese_question: "项目的成功因他 __________ 地拒绝考虑其他解决方案而受阻。",
        answers: [
            { option: "A", answer: "open-minded", chinese_answer: "思想开放的", chinese_romanization: "sīxiǎng kāifàng de" },
            { option: "B", answer: "cooperative", chinese_answer: "合作的", chinese_romanization: "hézuò de" },
            { option: "C", answer: "obstinate", chinese_answer: "顽固的", chinese_romanization: "wángù de" },
            { option: "D", answer: "flexible", chinese_answer: "灵活的", chinese_romanization: "línghuó de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'obstinate' figuratively means showing an unwillingness to change or adapt, often impeding progress." +
            "<br><br>" +
            "(A) 'open-minded' means willing to consider new ideas; unprejudiced." +
            "<br><br>" +
            "(B) 'cooperative' means involving mutual assistance in working toward a common goal." +
            "<br><br>" +
            "(D) 'flexible' means capable of bending easily without breaking.",
        chinese_explanation: "(C) '顽固的' 在比喻意义上意味着显示出不愿改变或适应，常常阻碍进展。" +
            "<br><br>" +
            "(A) '思想开放的' 意味着愿意考虑新想法；没有偏见的。" +
            "<br><br>" +
            "(B) '合作的' 意味着在朝着共同目标努力时相互帮助的。" +
            "<br><br>" +
            "(D) '灵活的' 意味着能够轻松弯曲而不断裂。"
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
