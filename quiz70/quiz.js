// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "Her writing career generated significant __________, allowing her to pursue her passion full-time.",
        chinese_question: "她的写作事业产生了可观的 __________，使她能够全职追求她的激情。",
        answers: [
            { option: "A", answer: "revenue", chinese_answer: "收入", chinese_romanization: "shōurù" },
            { option: "B", answer: "hobbies", chinese_answer: "爱好", chinese_romanization: "àihào" },
            { option: "C", answer: "distractions", chinese_answer: "干扰", chinese_romanization: "gānrǎo" },
            { option: "D", answer: "interruptions", chinese_answer: "打断", chinese_romanization: "dǎduàn" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'revenue' means income or earnings from a particular activity." +
            "<br><br>" +
            "(B) 'hobbies' means an activity done regularly in one's leisure time for pleasure." +
            "<br><br>" +
            "(C) 'distractions' means a thing that prevents someone from giving full attention to something else." +
            "<br><br>" +
            "(D) 'interruptions' means the action of interrupting or being interrupted.",
        chinese_explanation: "(A) '收入' 意味着某一活动的收入或收益。" +
            "<br><br>" +
            "(B) '爱好' 意味着在闲暇时间定期做的活动以获取乐趣。" +
            "<br><br>" +
            "(C) '干扰' 意味着防止某人全神贯注于某事的事物。" +
            "<br><br>" +
            "(D) '打断' 意味着打断或被打断的行为。"
    },
    {
        id: 2,
        question: "The company faced an __________ of complaints after their new product failed to meet customer expectations.",
        chinese_question: "新产品未能满足客户期望，公司面临__________的投诉。",
        answers: [
            { option: "A", answer: "trickle", chinese_answer: "涓涓细流", chinese_romanization: "juānjuān xìliú" },
            { option: "B", answer: "onslaught", chinese_answer: "猛攻", chinese_romanization: "měnggōng" },
            { option: "C", answer: "drizzle", chinese_answer: "毛毛雨", chinese_romanization: "máomáoyǔ" },
            { option: "D", answer: "delay", chinese_answer: "延迟", chinese_romanization: "yánchí" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'onslaught' means a fierce or destructive attack. Figuratively, it can mean a large number of something unpleasant or difficult to deal with." +
            "<br><br>" +
            "(A) 'trickle' means a small flow of liquid." +
            "<br><br>" +
            "(C) 'drizzle' means light rain falling in very fine drops." +
            "<br><br>" +
            "(D) 'delay' means a period of time by which something is late or postponed.",
        chinese_explanation: "(B) '猛攻'一词意味着激烈或破坏性的攻击。比喻地，它可以表示大量的不愉快或难以处理的事物。" +
            "<br><br>" +
            "(A) '涓涓细流' 意味着少量液体的流动。" +
            "<br><br>" +
            "(C) '毛毛雨' 意味着非常细的小雨。" +
            "<br><br>" +
            "(D) '延迟' 意味着某物迟到或推迟的时间段。"
    },
    {
        id: 3,
        question: "The project turned into a __________ after a series of unexpected problems arose.",
        chinese_question: "在一系列意外问题出现后，项目变成了一场 __________。",
        answers: [
            { option: "A", answer: "catastrophe", chinese_answer: "灾难", chinese_romanization: "zāinàn" },
            { option: "B", answer: "triumph", chinese_answer: "胜利", chinese_romanization: "shènglì" },
            { option: "C", answer: "miracle", chinese_answer: "奇迹", chinese_romanization: "qíjī" },
            { option: "D", answer: "opportunity", chinese_answer: "机会", chinese_romanization: "jīhuì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'catastrophe' metaphorically means a complete failure." +
            "<br><br>" +
            "(B) 'triumph' means a great victory or achievement." +
            "<br><br>" +
            "(C) 'miracle' means a surprising and welcome event that is not explicable by natural or scientific laws and is therefore considered to be the work of a divine agency." +
            "<br><br>" +
            "(D) 'opportunity' means a set of circumstances that makes it possible to do something.",
        chinese_explanation: "(A) '灾难' 比喻完全的失败。" +
            "<br><br>" +
            "(B) '胜利' 意味着伟大的胜利或成就。" +
            "<br><br>" +
            "(C) '奇迹' 意味着一种惊喜和受欢迎的事件，不可用自然或科学规律解释，因此被认为是神灵的工作。" +
            "<br><br>" +
            "(D) '机会' 意味着一组使某事成为可能的环境。"
    },
    {
        id: 4,
        question: "The market was filled with vendors selling all kinds of __________, from fruits and vegetables to homemade pastries.",
        chinese_question: "市场上充满了卖各种 __________ 的小贩，从水果和蔬菜到自制的糕点。",
        answers: [
            { option: "A", answer: "wares", chinese_answer: "商品", chinese_romanization: "shāngpǐn" },
            { option: "B", answer: "comestibles", chinese_answer: "食品", chinese_romanization: "shípǐn" },
            { option: "C", answer: "trinkets", chinese_answer: "小饰品", chinese_romanization: "xiǎo shìpǐn" },
            { option: "D", answer: "gadgets", chinese_answer: "小工具", chinese_romanization: "xiǎo gōngjù" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'comestibles' means items of food." +
            "<br><br>" +
            "(A) 'wares' means articles offered for sale." +
            "<br><br>" +
            "(C) 'trinkets' means small ornaments or items of jewelry that are of little value." +
            "<br><br>" +
            "(D) 'gadgets' means small mechanical or electronic devices or tools.",
        chinese_explanation: "(B) '食品' 一词意味着食物项目。" +
            "<br><br>" +
            "(A) '商品' 意味着出售的物品。" +
            "<br><br>" +
            "(C) '小饰品' 意味着小饰品或价值不大的珠宝。" +
            "<br><br>" +
            "(D) '小工具' 意味着小型机械或电子设备或工具。"
    },
    {
        id: 5,
        question: "The misinformation about the product spread like an __________, causing panic among consumers.",
        chinese_question: "关于产品的错误信息像 __________ 一样传播，引起了消费者的恐慌。",
        answers: [
            { option: "A", answer: "epidemic", chinese_answer: "流行", chinese_romanization: "liúxíng" },
            { option: "B", answer: "cure", chinese_answer: "治愈", chinese_romanization: "zhìyù" },
            { option: "C", answer: "remedy", chinese_answer: "药物", chinese_romanization: "yàowù" },
            { option: "D", answer: "solution", chinese_answer: "解决方案", chinese_romanization: "jiějué fāng'àn" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'epidemic' literally means a widespread occurrence of an infectious disease in a community at a particular time. Metaphorically, it means a sudden, widespread occurrence of an undesirable phenomenon." +
            "<br><br>" +
            "(B) 'cure' means relieve (a person or animal) of the symptoms of a disease or condition." +
            "<br><br>" +
            "(C) 'remedy' means a medicine or treatment for a disease or injury." +
            "<br><br>" +
            "(D) 'solution' means a means of solving a problem or dealing with a difficult situation.",
        chinese_explanation: "(A) '流行' 字面意思是在特定时间在社区中广泛发生的传染病。比喻上，它意味着一种不受欢迎的现象的突然、广泛发生。" +
            "<br><br>" +
            "(B) '治愈' 意味着缓解（人或动物）的疾病或症状。" +
            "<br><br>" +
            "(C) '药物' 意味着一种治疗疾病或伤害的药物或治疗方法。" +
            "<br><br>" +
            "(D) '解决方案' 意味着解决问题或处理困难情况的方法。"
    },
    {
        id: 6,
        question: "In the office, he was known as the __________ of information, always up-to-date with the latest news.",
        chinese_question: "在办公室里，他被称为信息的 __________，总是掌握最新的消息。",
        answers: [
            { option: "A", answer: "bureau", chinese_answer: "局", chinese_romanization: "jú" },
            { option: "B", answer: "source", chinese_answer: "来源", chinese_romanization: "láiyuán" },
            { option: "C", answer: "center", chinese_answer: "中心", chinese_romanization: "zhōngxīn" },
            { option: "D", answer: "repository", chinese_answer: "仓库", chinese_romanization: "cāngkù" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'repository' literally means a place where things are stored for safekeeping. Metaphorically, it means a central location where things are stored or accumulated." +
            "<br><br>" +
            "(A) 'bureau' means an office or agency that provides a service or function." +
            "<br><br>" +
            "(B) 'source' means the origin or starting point of something." +
            "<br><br>" +
            "(C) 'center' means the middle point of something, but in this context, it can also refer to a central place or person.",
        chinese_explanation: "(D) '仓库' 字面意思是保存物品的地方。比喻意义上，它意味着事物被储存或积累的中心位置。" +
            "<br><br>" +
            "(A) '局' 意味着提供服务或功能的办公室或机构。" +
            "<br><br>" +
            "(B) '来源' 意味着某事的起点或起源。" +
            "<br><br>" +
            "(C) '中心' 意味着某物的中点，但在这种情况下，它也可以指一个中心地点或人物。"
    },
    {
        id: 7,
        question: "Her calm demeanour had a soothing __________ on everyone around her, helping to ease tensions and create a peaceful atmosphere.",
        chinese_question: "她的冷静举止对周围的人有一种安抚的 __________，有助于缓解紧张气氛，创造和平的氛围。",
        answers: [
            { option: "A", answer: "influence", chinese_answer: "影响", chinese_romanization: "yǐngxiǎng" },
            { option: "B", answer: "conflict", chinese_answer: "冲突", chinese_romanization: "chōngtú" },
            { option: "C", answer: "separation", chinese_answer: "分离", chinese_romanization: "fēnlí" },
            { option: "D", answer: "chaos", chinese_answer: "混乱", chinese_romanization: "hùnluàn" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'influence' metaphorically means a calming or positive effect." +
            "<br><br>" +
            "(B) 'conflict' means a serious disagreement or argument." +
            "<br><br>" +
            "(C) 'separation' means the action or state of moving or being moved apart." +
            "<br><br>" +
            "(D) 'chaos' means complete disorder and confusion.",
        chinese_explanation: "(A) '影响' 比喻一种平静或积极的效果。" +
            "<br><br>" +
            "(B) '冲突' 意味着严重的分歧或争论。" +
            "<br><br>" +
            "(C) '分离' 意味着移动或被移动的行为或状态。" +
            "<br><br>" +
            "(D) '混乱' 意味着完全的无序和混乱。"
    },
    {
        id: 8,
        question: "The discovery of the vaccine was seen as a breakthrough for the new __________, ushering in an era of unprecedented medical advancements and hope.",
        chinese_question: "疫苗的发现被视为新 __________ 的突破，开启了前所未有的医学进步和希望的时代。",
        answers: [
            { option: "A", answer: "millennium", chinese_answer: "千年", chinese_romanization: "qiānnián" },
            { option: "B", answer: "epoch", chinese_answer: "时代", chinese_romanization: "shídài" },
            { option: "C", answer: "phase", chinese_answer: "阶段", chinese_romanization: "jiēduàn" },
            { option: "D", answer: "chapter", chinese_answer: "篇章", chinese_romanization: "piānzhāng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'millennium' literally means a period of a thousand years. Metaphorically, it means a hoped-for period of joy, serenity, prosperity, and justice." +
            "<br><br>" +
            "(B) 'epoch' means a period of time in history or a person's life, typically one marked by notable events or particular characteristics." +
            "<br><br>" +
            "(C) 'phase' means a distinct period or stage in a series of events or a process of change or development." +
            "<br><br>" +
            "(D) 'chapter' means a period of time or an episode in a person's life, a nation's history, etc.",
        chinese_explanation: "(A) '千年' 字面意思是千年的时期。比喻上，它意味着一个期望中的快乐、平静、繁荣和正义的时期。" +
            "<br><br>" +
            "(B) '时代' 意味着历史上或某人生活中的一段时间，通常以显著事件或特定特征为标志。" +
            "<br><br>" +
            "(C) '阶段' 意味着一系列事件或变化发展过程中的一个独特时期或阶段。" +
            "<br><br>" +
            "(D) '篇章' 意味着一个人生活、一个国家历史等中的一段时间或一集。"
    },
    {
        id: 9,
        question: "Her singing voice was a __________ of pure, powerful sound that captivated everyone in the room.",
        chinese_question: "她的歌声像一个__________，纯净而有力的声音吸引了房间里的每个人。",
        answers: [
            { option: "A", answer: "whisper", chinese_answer: "耳语", chinese_romanization: "ěryǔ" },
            { option: "B", answer: "stream", chinese_answer: "溪流", chinese_romanization: "xīliú" },
            { option: "C", answer: "cylinder", chinese_answer: "圆柱", chinese_romanization: "yuánzhù" },
            { option: "D", answer: "torrent", chinese_answer: "洪流", chinese_romanization: "hóngliú" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'torrent' means a strong and fast-moving stream, often used to describe something powerful and overwhelming." +
            "<br><br>" +
            "(A) 'whisper' means speaking very softly using one's breath without one's vocal cords, especially for the sake of secrecy." +
            "<br><br>" +
            "(B) 'stream' means a small, narrow river." +
            "<br><br>" +
            "(C) 'cylinder' means a geometric shape with straight parallel sides and a circular or oval cross-section.",
        chinese_explanation: "(D) '洪流' 意味着强烈而快速的流动，通常用于描述强大而压倒性的事物。" +
            "<br><br>" +
            "(A) '耳语' 意味着使用呼吸而不使用声带非常轻声地说话，尤其是为了保密。" +
            "<br><br>" +
            "(B) '溪流' 意味着狭窄的小河。" +
            "<br><br>" +
            "(C) '圆柱' 是指具有直平行侧面和圆形或椭圆形截面的几何形状。"
    },
    {
        id: 10,
        question: "Her __________ of knowledge through continuous learning set her apart from her peers.",
        chinese_question: "通过持续学习，她的知识 __________ 使她脱颖而出。",
        answers: [
            { option: "A", answer: "expansion", chinese_answer: "扩展", chinese_romanization: "kuòzhǎn" },
            { option: "B", answer: "limitation", chinese_answer: "限制", chinese_romanization: "xiànzhì" },
            { option: "C", answer: "reduction", chinese_answer: "减少", chinese_romanization: "jiǎnshǎo" },
            { option: "D", answer: "stagnation", chinese_answer: "停滞", chinese_romanization: "tíngzhì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'expansion' literally means the action of becoming larger or more extensive. Metaphorically, it means the process of increasing in scope or size." +
            "<br><br>" +
            "(B) 'limitation' means a restriction." +
            "<br><br>" +
            "(C) 'reduction' means the action or fact of making something smaller or less in amount, degree, or size." +
            "<br><br>" +
            "(D) 'stagnation' means lack of activity, growth, or development.",
        chinese_explanation: "(A) '扩展' 字面意思是变得更大或更广泛的动作。比喻上，它意味着在范围或规模上的增加过程。" +
            "<br><br>" +
            "(B) '限制' 意味着一种限制。" +
            "<br><br>" +
            "(C) '减少' 意味着使某物变得更小或减少的动作或事实。" +
            "<br><br>" +
            "(D) '停滞' 意味着缺乏活动、增长或发展。"
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
