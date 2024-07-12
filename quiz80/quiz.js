// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The dispute between the two companies was resolved through __________, with a neutral third party making the final decision.",
        chinese_question: "两家公司之间的争端通过 __________ 解决，由一个中立的第三方做出最终决定。",
        answers: [
            { option: "A", answer: "negotiation", chinese_answer: "谈判", chinese_romanization: "tánpàn" },
            { option: "B", answer: "mediation", chinese_answer: "调解", chinese_romanization: "tiáojiě" },
            { option: "C", answer: "arbitration", chinese_answer: "仲裁", chinese_romanization: "zhòngcái" },
            { option: "D", answer: "litigation", chinese_answer: "诉讼", chinese_romanization: "sùsòng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'arbitration' means the use of an arbitrator to settle a dispute." +
            "<br><br>" +
            "(A) 'negotiation' means discussion aimed at reaching an agreement." +
            "<br><br>" +
            "(B) 'mediation' means intervention in a dispute in order to resolve it." +
            "<br><br>" +
            "(D) 'litigation' means the process of taking legal action.",
        chinese_explanation: "(C) '仲裁' 一词意味着利用仲裁者来解决争端。" +
            "<br><br>" +
            "(A) '谈判' 意味着旨在达成协议的讨论。" +
            "<br><br>" +
            "(B) '调解' 意味着为了解决争端的干预。" +
            "<br><br>" +
            "(D) '诉讼' 意味着采取法律行动的过程。"
    },
    {
        id: 2,
        question: "She is a strong __________ of environmental protection and often participates in clean-up drives.",
        chinese_question: "她是环保的强烈 __________，经常参加清理活动。",
        answers: [
            { option: "A", answer: "opponent", chinese_answer: "反对者", chinese_romanization: "fǎnduì zhě" },
            { option: "B", answer: "proponent", chinese_answer: "支持者", chinese_romanization: "zhīchí zhě" },
            { option: "C", answer: "critic", chinese_answer: "批评者", chinese_romanization: "pīpíng zhě" },
            { option: "D", answer: "adversary", chinese_answer: "对手", chinese_romanization: "duìshǒu" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'proponent' means a person who advocates a theory, proposal, or course of action." +
            "<br><br>" +
            "(A) 'opponent' means someone who competes against or fights another in a contest, game, or argument." +
            "<br><br>" +
            "(C) 'critic' means a person who expresses an unfavorable opinion of something." +
            "<br><br>" +
            "(D) 'adversary' means one's opponent in a contest, conflict, or dispute.",
        chinese_explanation: "(B) '支持者' 一词意味着倡导某一理论、提议或行动方案的人。" +
            "<br><br>" +
            "(A) '反对者' 意味着在比赛、游戏或争论中与另一方竞争或战斗的人。" +
            "<br><br>" +
            "(C) '批评者' 意味着对某事表达不赞成意见的人。" +
            "<br><br>" +
            "(D) '对手' 意味着在比赛、冲突或争议中的对手。"
    },
    {
        id: 3,
        question: "The local __________, known for its intellectual gatherings, hosted a variety of educational lectures and cultural events for the community.",
        chinese_question: "当地的 __________，以其知识聚会而闻名，举办了各种社区教育讲座和文化活动。",
        answers: [
            { option: "A", answer: "restaurant", chinese_answer: "餐厅", chinese_romanization: "cāntīng" },
            { option: "B", answer: "theater", chinese_answer: "剧院", chinese_romanization: "jùyuàn" },
            { option: "C", answer: "lyceum", chinese_answer: "讲堂", chinese_romanization: "jiǎngtáng" },
            { option: "D", answer: "gymnasium", chinese_answer: "体育馆", chinese_romanization: "tǐyùguǎn" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'lyceum' means a hall for public lectures or discussions." +
            "<br><br>" +
            "(A) 'restaurant' means a place where people pay to sit and eat meals that are cooked and served on the premises." +
            "<br><br>" +
            "(B) 'theater' means a building or outdoor area in which plays and other dramatic performances are given." +
            "<br><br>" +
            "(D) 'gymnasium' means a room or building equipped for gymnastics, games, and other physical exercise.",
        chinese_explanation: "(C) '讲堂' 一词意味着用于公共讲座或讨论的大厅。" +
            "<br><br>" +
            "(A) '餐厅' 意味着一个人们付费坐着吃饭的地方，这些饭菜是在现场烹制和供应的。" +
            "<br><br>" +
            "(B) '剧院' 意味着一个进行戏剧和其他戏剧表演的建筑或户外区域。" +
            "<br><br>" +
            "(D) '体育馆' 意味着一个配备体操、游戏和其他体育锻炼设施的房间或建筑物。"
    },
    {
        id: 4,
        question: "Her innovative ideas made her stand out in stark contrast to her __________, who had been more traditional.",
        chinese_question: "她的创新想法使她与她的 __________ 形成鲜明对比，后者更传统。",
        answers: [
            { option: "A", answer: "successor", chinese_answer: "继任者", chinese_romanization: "jìrèn zhě" },
            { option: "B", answer: "predecessor", chinese_answer: "前任", chinese_romanization: "qiánrèn" },
            { option: "C", answer: "colleague", chinese_answer: "同事", chinese_romanization: "tóngshì" },
            { option: "D", answer: "partner", chinese_answer: "伙伴", chinese_romanization: "huǒbàn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'predecessor' means someone or something that came before and was succeeded by another." +
            "<br><br>" +
            "(A) 'successor' means a person or thing that succeeds another." +
            "<br><br>" +
            "(C) 'colleague' means a person with whom one works in a profession or business." +
            "<br><br>" +
            "(D) 'partner' means either of a pair of people engaged together in the same activity.",
        chinese_explanation: "(B) '前任' 意味着在某人或某事之前的东西或人，并被另一个取代。" +
            "<br><br>" +
            "(A) '继任者' 意味着接替另一人的人或物。" +
            "<br><br>" +
            "(C) '同事' 意味着在职业或商业中与某人共事的人。" +
            "<br><br>" +
            "(D) '伙伴' 意味着从事同一活动的两人之一。"
    },
    {
        id: 5,
        question: "The __________ of resilience runs throughout her life story, from overcoming childhood hardships to excelling in her career despite numerous obstacles.",
        chinese_question: "坚韧的 __________ 贯穿她的整个生活故事，从克服童年困难到在克服无数障碍的情况下在事业上取得优异成绩。",
        answers: [
            { option: "A", answer: "theme", chinese_answer: "主题", chinese_romanization: "zhǔtí" },
            { option: "B", answer: "incident", chinese_answer: "事件", chinese_romanization: "shìjiàn" },
            { option: "C", answer: "episode", chinese_answer: "插曲", chinese_romanization: "chāqǔ" },
            { option: "D", answer: "event", chinese_answer: "事件", chinese_romanization: "shìjiàn" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'theme' metaphorically means a unifying or dominant idea in a piece of work or in someone's life." +
            "<br><br>" +
            "(B) 'incident' means an event or occurrence." +
            "<br><br>" +
            "(C) 'episode' means an event or a group of events occurring as part of a larger sequence; an incident or period considered in isolation." +
            "<br><br>" +
            "(D) 'event' means a thing that happens, especially one of importance.",
        chinese_explanation: "(A) '主题' 比喻作品或某人生活中的统一或主导思想。" +
            "<br><br>" +
            "(B) '事件' 意味着一个事件或发生。" +
            "<br><br>" +
            "(C) '插曲' 意味着作为更大序列的一部分发生的事件或一组事件；孤立地考虑的事件或时期。" +
            "<br><br>" +
            "(D) '事件' 意味着发生的事情，尤其是重要的事情。"
    },
    {
        id: 6,
        question: "Her belief that she was being followed, despite the lack of any evidence, was merely a __________ of her paranoia.",
        chinese_question: "她相信自己被跟踪，尽管没有任何证据，只是她偏执狂的__________。",
        answers: [
            { option: "A", answer: "reality", chinese_answer: "现实", chinese_romanization: "xiànshí" },
            { option: "B", answer: "fact", chinese_answer: "事实", chinese_romanization: "shìshí" },
            { option: "C", answer: "figment", chinese_answer: "幻想", chinese_romanization: "huànxiǎng" },
            { option: "D", answer: "truth", chinese_answer: "真相", chinese_romanization: "zhēnxiàng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'figment' means a thing that someone believes to be real but that exists only in their imagination. Figuratively, it can mean a false belief or illusion." + 
            "<br><br>" + 
            "(A) 'reality' means the world or the state of things as they actually exist." + 
            "<br><br>" + 
            "(B) 'fact' means a thing that is known or proved to be true." + 
            "<br><br>" + 
            "(D) 'truth' means the quality or state of being true.",
        chinese_explanation: "(C) '幻想'一词意味着某人相信是真实的东西，但实际上只存在于他们的想象中。比喻地，它可以表示虚假的信念或错觉。" + 
            "<br><br>" + 
            "(A) '现实' 意味着世界或事物的实际存在状态。" + 
            "<br><br>" + 
            "(B) '事实' 意味着已知或证明为真的事情。" + 
            "<br><br>" + 
            "(D) '真相' 意味着真实的质量或状态。"
    },
    {
        id: 7,
        question: "The science fair included an __________ of the latest innovations in renewable energy technology, featuring interactive displays and detailed explanations.",
        chinese_question: "科学展览包括对最新可再生能源技术创新的 __________，展示了互动展示和详细解释。",
        answers: [
            { option: "A", answer: "deletion", chinese_answer: "删除", chinese_romanization: "shānchú" },
            { option: "B", answer: "exposition", chinese_answer: "展览", chinese_romanization: "zhǎnlǎn" },
            { option: "C", answer: "closure", chinese_answer: "关闭", chinese_romanization: "guānbì" },
            { option: "D", answer: "reduction", chinese_answer: "减少", chinese_romanization: "jiǎnshǎo" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'exposition' means a comprehensive description and explanation of an idea or theory." +
            "<br><br>" +
            "(A) 'deletion' means the action of deleting something." +
            "<br><br>" +
            "(C) 'closure' means the act or process of closing something." +
            "<br><br>" +
            "(D) 'reduction' means the action or fact of making something smaller or less in amount, degree, or size.",
        chinese_explanation: "(B) '展览' 一词意味着对某一想法或理论的全面描述和解释。" +
            "<br><br>" +
            "(A) '删除' 意味着删除某物的动作。" +
            "<br><br>" +
            "(C) '关闭' 意味着关闭某物的行为或过程。" +
            "<br><br>" +
            "(D) '减少' 意味着使某物的数量、程度或大小变小的行为或事实。"
    },
    {
        id: 8,
        question: "The controversial topic of __________, such as the legality and morality of terminating a pregnancy, often sparks heated debates about women's rights and medical ethics.",
        chinese_question: "__________ 这一有争议的话题，例如终止妊娠的合法性和道德性，经常引发关于女性权利和医学伦理的激烈辩论。",
        answers: [
            { option: "A", answer: "adoption", chinese_answer: "领养", chinese_romanization: "lǐngyǎng" },
            { option: "B", answer: "abortion", chinese_answer: "堕胎", chinese_romanization: "duòtāi" },
            { option: "C", answer: "childbirth", chinese_answer: "分娩", chinese_romanization: "fēnmiǎn" },
            { option: "D", answer: "pregnancy", chinese_answer: "怀孕", chinese_romanization: "huáiyùn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'abortion' means the deliberate termination of a human pregnancy." +
            "<br><br>" +
            "(A) 'adoption' means the action or fact of adopting or being adopted." +
            "<br><br>" +
            "(C) 'childbirth' means the process of giving birth to a baby." +
            "<br><br>" +
            "(D) 'pregnancy' means the condition or period of being pregnant.",
        chinese_explanation: "(B) '堕胎' 一词意味着故意终止人类怀孕。" +
            "<br><br>" +
            "(A) '领养' 意味着领养或被领养的行为或事实。" +
            "<br><br>" +
            "(C) '分娩' 意味着生下婴儿的过程。" +
            "<br><br>" +
            "(D) '怀孕' 意味着怀孕的状态或时期。"
    },
    {
        id: 9,
        question: "She felt a natural __________ for the quiet countryside, finding peace and contentment away from the bustling city.",
        chinese_question: "她对宁静的乡村有一种天然的 __________，在远离喧嚣的城市中找到了宁静和满足。",
        answers: [
            { option: "A", answer: "aversion", chinese_answer: "厌恶", chinese_romanization: "yànwù" },
            { option: "B", answer: "disinterest", chinese_answer: "无兴趣", chinese_romanization: "wú xìngqù" },
            { option: "C", answer: "affinity", chinese_answer: "亲和力", chinese_romanization: "qīnhélì" },
            { option: "D", answer: "detachment", chinese_answer: "超然", chinese_romanization: "chāorán" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'affinity' means a natural liking for and understanding of someone or something." +
            "<br><br>" +
            "(A) 'aversion' means a strong dislike or disinclination." +
            "<br><br>" +
            "(B) 'disinterest' means lack of interest in something." +
            "<br><br>" +
            "(D) 'detachment' means the state of being objective or aloof.",
        chinese_explanation: "(C) '亲和力' 一词意味着对某人或某事的自然喜好和理解。" +
            "<br><br>" +
            "(A) '厌恶' 意味着强烈的厌恶或不愿意。" +
            "<br><br>" +
            "(B) '无兴趣' 意味着对某事缺乏兴趣。" +
            "<br><br>" +
            "(D) '超然' 意味着客观或冷淡的状态。"
    },
    {
        id: 10,
        question: "The university received __________ from the national education board, confirming that it met all the required standards.",
        chinese_question: "这所大学获得了国家教育委员会的 __________，确认其符合所有要求的标准。",
        answers: [
            { option: "A", answer: "disapproval", chinese_answer: "不批准", chinese_romanization: "bù pīzhǔn" },
            { option: "B", answer: "rejection", chinese_answer: "拒绝", chinese_romanization: "jùjué" },
            { option: "C", answer: "accreditation", chinese_answer: "认证", chinese_romanization: "rènzhèng" },
            { option: "D", answer: "criticism", chinese_answer: "批评", chinese_romanization: "pīpíng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'accreditation' means the action or process of officially recognizing someone as having a particular status or being qualified to perform a particular activity." +
            "<br><br>" +
            "(A) 'disapproval' means possession or expression of an unfavorable opinion." +
            "<br><br>" +
            "(B) 'rejection' means the dismissing or refusing of a proposal, idea, etc." +
            "<br><br>" +
            "(D) 'criticism' means the expression of disapproval of someone or something based on perceived faults or mistakes.",
        chinese_explanation: "(C) '认证' 一词意味着正式承认某人具有某种特定身份或有资格从事某种特定活动的行为或过程。" +
            "<br><br>" +
            "(A) '不批准' 意味着持有或表达不赞成的意见。" +
            "<br><br>" +
            "(B) '拒绝' 意味着拒绝某项提议、想法等。" +
            "<br><br>" +
            "(D) '批评' 意味着基于感知的错误或错误对某人或某事表达不赞成。"
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
