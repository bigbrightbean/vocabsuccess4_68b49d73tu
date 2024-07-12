// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The __________ always found excuses to avoid any form of hard work or exertion.",
        chinese_question: "这个__________总是找借口避免任何形式的辛苦工作或努力。",
        answers: [
            { option: "A", answer: "go-getter", chinese_answer: "积极进取的人", chinese_romanization: "jījí jìnqǔ de rén" },
            { option: "B", answer: "striver", chinese_answer: "奋斗者", chinese_romanization: "fèndòu zhě" },
            { option: "C", answer: "hustler", chinese_answer: "忙碌的人", chinese_romanization: "mánglù de rén" },
            { option: "D", answer: "sluggard", chinese_answer: "懒鬼", chinese_romanization: "lǎnguǐ" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'sluggard' refers to a habitually lazy or idle person, especially one who is slow in movement or action." +
            "<br><br>" +
            "(A) 'go-getter' refers to someone who is very energetic, determined to be successful, and able to deal with new or difficult situations easily." +
            "<br><br>" +
            "(B) 'striver' refers to someone who works very hard to achieve something." +
            "<br><br>" +
            "(C) 'hustler' refers to someone who is very determined and hardworking.",
        chinese_explanation: "(D) '懒鬼' 指的是习惯性懒惰或闲散的人，尤其是在行动或行为上缓慢的人。" +
            "<br><br>" +
            "(A) '积极进取的人' 指的是非常精力充沛、决心成功并且能够轻松应对新情况或困难情况的人。" +
            "<br><br>" +
            "(B) '奋斗者' 指的是非常努力工作以实现某事的人。" +
            "<br><br>" +
            "(C) '忙碌的人' 指的是非常坚决和勤奋的人。"
    },
    {
        id: 2,
        question: "The scientist discovered an __________ in the data that suggested an error in the experiment.",
        chinese_question: "科学家在数据中发现了一个 __________，这表明实验中存在错误。",
        answers: [
            { option: "A", answer: "norm", chinese_answer: "常规", chinese_romanization: "chángguī" },
            { option: "B", answer: "regularity", chinese_answer: "规律", chinese_romanization: "guīlǜ" },
            { option: "C", answer: "anomaly", chinese_answer: "异常", chinese_romanization: "yìcháng" },
            { option: "D", answer: "consistency", chinese_answer: "一致性", chinese_romanization: "yīzhì xìng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'anomaly' means something that deviates from what is standard, normal, or expected." +
            "<br><br>" +
            "(A) 'norm' means something that is usual, typical, or standard." +
            "<br><br>" +
            "(B) 'regularity' means the state or quality of being regular." +
            "<br><br>" +
            "(D) 'consistency' means conformity in the application of something, typically that which is necessary for the sake of logic, accuracy, or fairness.",
        chinese_explanation: "(C) '异常' 一词意味着偏离标准、正常或预期的事物。" +
            "<br><br>" +
            "(A) '常规' 意味着通常、典型或标准的事物。" +
            "<br><br>" +
            "(B) '规律' 意味着规律的状态或质量。" +
            "<br><br>" +
            "(D) '一致性' 意味着在应用某物时的一致性，通常是为了逻辑、准确性或公平起见。"
    },
    {
        id: 3,
        question: "The city is a vast __________ of different neighborhoods, each with its own unique character and charm.",
        chinese_question: "这座城市是不同社区的巨大 __________，每个社区都有自己独特的特点和魅力。",
        answers: [
            { option: "A", answer: "division", chinese_answer: "分割", chinese_romanization: "fēngē" },
            { option: "B", answer: "agglomeration", chinese_answer: "聚集", chinese_romanization: "jùjí" },
            { option: "C", answer: "separation", chinese_answer: "分离", chinese_romanization: "fēnlí" },
            { option: "D", answer: "isolation", chinese_answer: "隔离", chinese_romanization: "gélí" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'agglomeration' means a mass or collection of things; an assemblage." +
            "<br><br>" +
            "(A) 'division' means the action of separating something into parts or the process of being separated." +
            "<br><br>" +
            "(C) 'separation' means the action or state of moving or being moved apart." +
            "<br><br>" +
            "(D) 'isolation' means the process or fact of isolating or being isolated.",
        chinese_explanation: "(B) '聚集' 一词意味着一群或一堆事物的集合；汇集。" +
            "<br><br>" +
            "(A) '分割' 意味着将某物分成部分的行为或过程。" +
            "<br><br>" +
            "(C) '分离' 意味着移动或被移动的行为或状态。" +
            "<br><br>" +
            "(D) '隔离' 意味着隔离或被隔离的过程或事实。"
    },
    {
        id: 4,
        question: "The senator proposed an __________ to the bill to address the concerns raised by the environmental group.",
        chinese_question: "参议员提议对该法案进行 __________ 以解决环保组织提出的担忧。",
        answers: [
            { option: "A", answer: "repeal", chinese_answer: "废除", chinese_romanization: "fèichú" },
            { option: "B", answer: "amendment", chinese_answer: "修正案", chinese_romanization: "xiūzhèng àn" },
            { option: "C", answer: "endorsement", chinese_answer: "赞同", chinese_romanization: "zàntóng" },
            { option: "D", answer: "veto", chinese_answer: "否决", chinese_romanization: "fǒujué" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'amendment' means a minor change or addition designed to improve a text, piece of legislation, etc." +
            "<br><br>" +
            "(A) 'repeal' means to revoke or annul a law or congressional act." +
            "<br><br>" +
            "(C) 'endorsement' means the action of giving one's public approval or support to someone or something." +
            "<br><br>" +
            "(D) 'veto' means a constitutional right to reject a decision or proposal made by a law-making body.",
        chinese_explanation: "(B) '修正案' 一词意味着旨在改善文本、立法等的微小变更或补充。" +
            "<br><br>" +
            "(A) '废除' 意味着撤销或废除法律或国会法案。" +
            "<br><br>" +
            "(C) '赞同' 意味着公开表示赞同或支持某人或某事的行为。" +
            "<br><br>" +
            "(D) '否决' 意味着拒绝由立法机构作出的决定或提议的宪法权利。"
    },
    {
        id: 5,
        question: "The political parties formed a __________ to pass the new law, combining their resources and influence.",
        chinese_question: "政党组成了一个 __________ 来通过新法律，结合他们的资源和影响力。",
        answers: [
            { option: "A", answer: "rivalry", chinese_answer: "竞争", chinese_romanization: "jìngzhēng" },
            { option: "B", answer: "coalition", chinese_answer: "联盟", chinese_romanization: "liánméng" },
            { option: "C", answer: "conflict", chinese_answer: "冲突", chinese_romanization: "chōngtú" },
            { option: "D", answer: "division", chinese_answer: "分裂", chinese_romanization: "fēnliè" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'coalition' means an alliance for combined action, especially a temporary alliance of political parties forming a government or of states." +
            "<br><br>" +
            "(A) 'rivalry' means competition for the same objective or for superiority in the same field." +
            "<br><br>" +
            "(C) 'conflict' means a serious disagreement or argument, typically a protracted one." +
            "<br><br>" +
            "(D) 'division' means the action of separating something into parts or the process of being separated.",
        chinese_explanation: "(B) '联盟' 一词意味着为了联合行动的联盟，特别是形成政府的政党的临时联盟或国家的联盟。" +
            "<br><br>" +
            "(A) '竞争' 意味着为相同的目标或在同一领域争取优势的竞争。" +
            "<br><br>" +
            "(C) '冲突' 意味着严重的分歧或争论，通常是长期的。" +
            "<br><br>" +
            "(D) '分裂' 意味着将某物分成部分的动作或被分开的过程。"
    },
    {
        id: 6,
        question: "The meeting's __________ included discussing the budget, planning upcoming events, and addressing any concerns from the team.",
        chinese_question: "会议的 __________ 包括讨论预算、规划即将举行的活动以及解决团队的任何问题。",
        answers: [
            { option: "A", answer: "minutes", chinese_answer: "记录", chinese_romanization: "jìlù" },
            { option: "B", answer: "schedule", chinese_answer: "日程", chinese_romanization: "rìchéng" },
            { option: "C", answer: "agenda", chinese_answer: "议程", chinese_romanization: "yìchéng" },
            { option: "D", answer: "summary", chinese_answer: "摘要", chinese_romanization: "zhāiyào" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'agenda' means a list of items to be discussed at a formal meeting." +
            "<br><br>" +
            "(A) 'minutes' means a written record of the proceedings of a meeting." +
            "<br><br>" +
            "(B) 'schedule' means a plan for carrying out a process or procedure, giving lists of intended events and times." +
            "<br><br>" +
            "(D) 'summary' means a brief statement or account of the main points of something.",
        chinese_explanation: "(C) '议程' 一词意味着正式会议上讨论的项目清单。" +
            "<br><br>" +
            "(A) '记录' 意味着会议进程的书面记录。" +
            "<br><br>" +
            "(B) '日程' 意味着执行过程或程序的计划，列出预定事件和时间。" +
            "<br><br>" +
            "(D) '摘要' 意味着对主要点的简要说明或说明。"
    },
    {
        id: 7,
        question: "His controversial articles and provocative comments made him a __________ in the journalism community.",
        chinese_question: "他的争议性文章和挑衅性评论使他成为新闻界的__________。",
        answers: [
            { option: "A", answer: "peacemaker", chinese_answer: "和平使者", chinese_romanization: "hépíng shǐzhě" },
            { option: "B", answer: "follower", chinese_answer: "追随者", chinese_romanization: "zhuīsuí zhě" },
            { option: "C", answer: "firebrand", chinese_answer: "煽动者", chinese_romanization: "shāndòng zhě" },
            { option: "D", answer: "diplomat", chinese_answer: "外交官", chinese_romanization: "wàijiāo guān" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'firebrand' means a person who is passionate about a particular cause, typically inciting change and taking radical action. Figuratively, it can mean someone who is known for stirring up trouble or controversy." + 
            "<br><br>" + 
            "(A) 'peacemaker' means a person who brings about peace, especially by reconciling adversaries." + 
            "<br><br>" + 
            "(B) 'follower' means a person who supports and admires a particular person or set of ideas." + 
            "<br><br>" + 
            "(D) 'diplomat' means an official representing a country abroad.",
        chinese_explanation: "(C) '煽动者'一词意味着一个热衷于某个特定事业的人，通常鼓动变革并采取激进行动。比喻地，它可以表示以制造麻烦或争议而闻名的人。" + 
            "<br><br>" + 
            "(A) '和平使者' 意味着促成和平的人，尤其是通过调解对手。" + 
            "<br><br>" + 
            "(B) '追随者' 意味着支持和钦佩特定人物或一套思想的人。" + 
            "<br><br>" + 
            "(D) '外交官' 意味着在国外代表国家的官员。"
    },
    {
        id: 8,
        question: "The new word 'brunch' is a __________ of 'breakfast' and 'lunch.'",
        chinese_question: "新词 'brunch' 是 'breakfast' 和 'lunch' 的 __________。",
        answers: [
            { option: "A", answer: "sentence", chinese_answer: "句子", chinese_romanization: "jùzi" },
            { option: "B", answer: "portmanteau", chinese_answer: "混成词", chinese_romanization: "hùnchéng cí" },
            { option: "C", answer: "acronym", chinese_answer: "首字母缩略词", chinese_romanization: "shǒuzìmǔ suōlüè cí" },
            { option: "D", answer: "phrase", chinese_answer: "短语", chinese_romanization: "duǎnyǔ" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'portmanteau' means a word blending the sounds and combining the meanings of two others, for example, motel (from motor and hotel) or brunch (from breakfast and lunch)." +
            "<br><br>" +
            "(A) 'sentence' means a set of words that is complete in itself, typically containing a subject and predicate, conveying a statement, question, exclamation, or command, and consisting of a main clause and sometimes one or more subordinate clauses." +
            "<br><br>" +
            "(C) 'acronym' means an abbreviation formed from the initial letters of other words and pronounced as a word." +
            "<br><br>" +
            "(D) 'phrase' means a small group of words standing together as a conceptual unit, typically forming a component of a clause.",
        chinese_explanation: "(B) '混成词' 一词意味着将两个其他词的声音和含义结合起来的词，例如motel（由motor和hotel组成）或brunch（由breakfast和lunch组成）。" +
            "<br><br>" +
            "(A) '句子' 意味着本身完整的一组词，通常包含主语和谓语，传达陈述、问题、感叹或命令，并由主句和有时一个或多个从句组成。" +
            "<br><br>" +
            "(C) '首字母缩略词' 意味着由其他词的首字母组成并作为一个词发音的缩写词。" +
            "<br><br>" +
            "(D) '短语' 意味着一小组词语作为概念单位站在一起，通常形成一个从句的组成部分。"
    },
    {
        id: 9,
        question: "Her rapid __________ within the company was a result of her hard work, dedication, and innovative ideas.",
        chinese_question: "她在公司中的快速 __________ 是她辛勤工作、奉献和创新想法的结果。",
        answers: [
            { option: "A", answer: "regression", chinese_answer: "退步", chinese_romanization: "tuìbù" },
            { option: "B", answer: "stalling", chinese_answer: "停滞", chinese_romanization: "tíngzhì" },
            { option: "C", answer: "advancement", chinese_answer: "晋升", chinese_romanization: "jìnshēng" },
            { option: "D", answer: "demotion", chinese_answer: "降级", chinese_romanization: "jiàngjí" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'advancement' means the process of promoting a cause or plan." + 
            "<br><br>" + 
            "(A) 'regression' means a return to a former or less developed state." + 
            "<br><br>" + 
            "(B) 'stalling' means delaying or blocking something from happening." + 
            "<br><br>" + 
            "(D) 'demotion' means reduction in rank or status.",
        chinese_explanation: "(C) '晋升' 一词意味着促进某事业或计划的过程。" + 
            "<br><br>" + 
            "(A) '退步' 意味着回到以前或较不发达的状态。" + 
            "<br><br>" + 
            "(B) '停滞' 意味着延迟或阻止某事发生。" + 
            "<br><br>" + 
            "(D) '降级' 意味着等级或地位的降低。"
    },
    {
        id: 10,
        question: "Her memories were like a __________, hidden deep within her mind and rarely visited, shrouded in darkness and mystery.",
        chinese_question: "她的记忆就像一个 __________，深藏在她的心灵深处，很少被访问，笼罩在黑暗和神秘之中。",
        answers: [
            { option: "A", answer: "vault", chinese_answer: "保险库", chinese_romanization: "bǎoxiǎnkù" },
            { option: "B", answer: "crypt", chinese_answer: "地下室", chinese_romanization: "dìxiàshì" },
            { option: "C", answer: "fortress", chinese_answer: "要塞", chinese_romanization: "yàosài" },
            { option: "D", answer: "garden", chinese_answer: "花园", chinese_romanization: "huāyuán" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'crypt' figuratively means a hidden or concealed space." +
            "<br><br>" +
            "(A) 'vault' means a secure room where valuables are stored." +
            "<br><br>" +
            "(C) 'fortress' means a military stronghold, especially a strongly fortified town fit for a large garrison." +
            "<br><br>" +
            "(D) 'garden' means a piece of ground adjoining a house, used for growing flowers, fruit, or vegetables.",
        chinese_explanation: "(B) '地下室' 在比喻意义上意味着隐藏或隐藏的空间。" +
            "<br><br>" +
            "(A) '保险库' 意味着存放贵重物品的安全房间。" +
            "<br><br>" +
            "(C) '要塞' 意味着军事堡垒，特别是适合大规模驻军的坚固防御的城镇。" +
            "<br><br>" +
            "(D) '花园' 意味着房屋旁的一块地，用来种植花卉、水果或蔬菜。"
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
