// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "He spoke to his family in the local __________, a dialect unique to their region, preserving their cultural heritage.",
        chinese_question: "他用当地的 __________ 与家人交谈，这是他们地区独特的方言，保留了他们的文化遗产。",
        answers: [
            { option: "A", answer: "patois", chinese_answer: "方言", chinese_romanization: "fāngyán" },
            { option: "B", answer: "accent", chinese_answer: "口音", chinese_romanization: "kǒuyīn" },
            { option: "C", answer: "jargon", chinese_answer: "行话", chinese_romanization: "hánghuà" },
            { option: "D", answer: "standard", chinese_answer: "标准语言", chinese_romanization: "biāozhǔn yǔyán" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'patois' means the dialect of the common people of a region, differing in various respects from the standard language of the rest of the country." +
            "<br><br>" +
            "(B) 'accent' means a distinctive mode of pronunciation of a language, especially one associated with a particular nation, locality, or social class." +
            "<br><br>" +
            "(C) 'jargon' means special words or expressions that are used by a particular profession or group and are difficult for others to understand." +
            "<br><br>" +
            "(D) 'standard' means the standard language or form of a language, which is often used as the common or official language.",
        chinese_explanation: "(A) '方言' 一词意味着一个地区普通民众的方言，在各个方面与该国其余地区的标准语言不同。" +
            "<br><br>" +
            "(B) '口音' 意味着一种语言的独特发音方式，尤其是与特定国家、地方或社会阶层相关的发音方式。" +
            "<br><br>" +
            "(C) '行话' 意味着特定职业或群体使用的特殊词汇或表达方式，其他人难以理解。" +
            "<br><br>" +
            "(D) '标准语言' 意味着常用作通用或官方语言的标准语言或语言形式。"
    },
    {
        id: 2,
        question: "His __________ in always saying yes to friends' requests eventually wore him out.",
        chinese_question: "他总是答应朋友请求的 __________ 最终让他疲惫不堪。",
        answers: [
            { option: "A", answer: "refusal", chinese_answer: "拒绝", chinese_romanization: "jùjué" },
            { option: "B", answer: "denial", chinese_answer: "否认", chinese_romanization: "fǒurèn" },
            { option: "C", answer: "indulgence", chinese_answer: "纵容", chinese_romanization: "zòngróng" },
            { option: "D", answer: "discipline", chinese_answer: "纪律", chinese_romanization: "jìlǜ" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'indulgence' figuratively means allowing oneself to enjoy the pleasure of something, often excessively." +
            "<br><br>" +
            "(A) 'refusal' means an act of refusing to do something." +
            "<br><br>" +
            "(B) 'denial' means the action of declaring something to be untrue." +
            "<br><br>" +
            "(D) 'discipline' means the practice of training people to obey rules or a code of behavior.",
        chinese_explanation: "(C) '纵容' 在比喻意义上意味着让自己享受某种快乐，往往是过度的。" +
            "<br><br>" +
            "(A) '拒绝' 意味着拒绝做某事的行为。" +
            "<br><br>" +
            "(B) '否认' 意味着宣布某事不真实的行为。" +
            "<br><br>" +
            "(D) '纪律' 意味着训练人们遵守规则或行为准则的实践。"
    },
    {
        id: 3,
        question: "Her inner __________ made it difficult for her to make a decision.",
        chinese_question: "她内心的 __________ 使她难以做出决定。",
        answers: [
            { option: "A", answer: "conflict", chinese_answer: "冲突", chinese_romanization: "chōngtú" },
            { option: "B", answer: "peace", chinese_answer: "和平", chinese_romanization: "hépíng" },
            { option: "C", answer: "joy", chinese_answer: "喜悦", chinese_romanization: "xǐyuè" },
            { option: "D", answer: "satisfaction", chinese_answer: "满足", chinese_romanization: "mǎnzú" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'conflict' metaphorically means a state of opposition or incompatibility between two or more aspects of oneself." +
            "<br><br>" +
            "(B) 'peace' means freedom from disturbance; tranquility." +
            "<br><br>" +
            "(C) 'joy' means a feeling of great pleasure and happiness." +
            "<br><br>" +
            "(D) 'satisfaction' means fulfillment of one's wishes, expectations, or needs.",
        chinese_explanation: "(A) '冲突' 比喻一个人内心的两种或多种方面之间的对立或不相容状态。" +
            "<br><br>" +
            "(B) '和平' 意味着没有干扰；宁静。" +
            "<br><br>" +
            "(C) '喜悦' 意味着极大的快乐和幸福感。" +
            "<br><br>" +
            "(D) '满足' 意味着实现某人的愿望、期望或需求。"
    },
    {
        id: 4,
        question: "To avoid unwanted attention, he conducted all his business dealings under a __________.",
        chinese_question: "为了避免不必要的关注，他以__________进行所有商业交易。",
        answers: [
            { option: "A", answer: "real name", chinese_answer: "真名", chinese_romanization: "zhēnmíng" },
            { option: "B", answer: "alias", chinese_answer: "化名", chinese_romanization: "huàmíng" },
            { option: "C", answer: "nickname", chinese_answer: "昵称", chinese_romanization: "nìchēng" },
            { option: "D", answer: "pseudonym", chinese_answer: "笔名", chinese_romanization: "bǐmíng" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'pseudonym' means a fictitious name, especially one used by an author. Figuratively, it can mean using a false name to conceal one's identity." +
            "<br><br>" +
            "(A) 'real name' means the actual name of a person." +
            "<br><br>" +
            "(B) 'alias' means a false or assumed identity." +
            "<br><br>" +
            "(C) 'nickname' means a familiar or humorous name given to a person or thing instead of or as well as the real name.",
        chinese_explanation: "(D) '笔名' 一词意味着虚构的名字，特别是作者使用的。比喻地，它可以表示使用假名来隐藏身份。" +
            "<br><br>" +
            "(A) '真名' 意味着一个人的实际名字。" +
            "<br><br>" +
            "(B) '化名' 意味着虚假的或假定的身份。" +
            "<br><br>" +
            "(C) '昵称' 意味着代替或与真实姓名一起使用的熟悉或幽默的名字。"
    },
    {
        id: 5,
        question: "Her constant discriminatory remarks proved that she was a __________.",
        chinese_question: "她不断发表的歧视性言论证明她是一个__________。",
        answers: [
            { option: "A", answer: "bigot", chinese_answer: "偏执者", chinese_romanization: "piānzhí zhě" },
            { option: "B", answer: "open-minded", chinese_answer: "开明的", chinese_romanization: "kāimíng de" },
            { option: "C", answer: "liberal", chinese_answer: "自由主义者", chinese_romanization: "zìyóu zhǔyì zhě" },
            { option: "D", answer: "progressive", chinese_answer: "进步的", chinese_romanization: "jìnbù de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'bigot' means a person who is intolerant toward those holding different opinions. Figuratively, it can mean someone who is prejudiced and narrow-minded." +
            "<br><br>" +
            "(B) 'open-minded' means willing to consider new ideas; unprejudiced." +
            "<br><br>" +
            "(C) 'liberal' means open to new behavior or opinions and willing to discard traditional values." +
            "<br><br>" +
            "(D) 'progressive' means favoring or implementing social reform or new, liberal ideas.",
        chinese_explanation: "(A) '偏执者'一词意味着对持不同意见者不容忍的人。比喻地，它可以表示某人是有偏见和狭隘的。" +
            "<br><br>" +
            "(B) '开明的' 意味着愿意考虑新想法的；无偏见的。" +
            "<br><br>" +
            "(C) '自由主义者' 意味着对新行为或意见持开放态度，并愿意抛弃传统价值观的人。" +
            "<br><br>" +
            "(D) '进步的' 意味着支持或实施社会改革或新的、自由的观点。"
    },
    {
        id: 6,
        question: "She is a work __________, often staying late at the office to finish projects.",
        chinese_question: "她是个工作__________，经常在办公室加班完成项目。",
        answers: [
            { option: "A", answer: "enthusiast", chinese_answer: "爱好者", chinese_romanization: "àihào zhě" },
            { option: "B", answer: "critic", chinese_answer: "批评者", chinese_romanization: "pīpíng zhě" },
            { option: "C", answer: "addict", chinese_answer: "瘾君子", chinese_romanization: "yǐn jūn zǐ" },
            { option: "D", answer: "observer", chinese_answer: "观察者", chinese_romanization: "guānchá zhě" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'addict' means a person who is addicted to a particular substance, typically an illegal drug, or activity. Figuratively, it can mean someone who is excessively devoted to a particular activity." +
            "<br><br>" +
            "(A) 'enthusiast' means a person who is very interested in a particular activity or subject." +
            "<br><br>" +
            "(B) 'critic' means a person who expresses an unfavorable opinion of something." +
            "<br><br>" +
            "(D) 'observer' means a person who watches or notices something.",
        chinese_explanation: "(C) '瘾君子'一词意味着对某种物质，通常是非法药物或活动上瘾的人。比喻地，它可以表示对某种活动过分投入的人。" +
            "<br><br>" +
            "(A) '爱好者' 意味着对某种活动或学科非常感兴趣的人。" +
            "<br><br>" +
            "(B) '批评者' 意味着对某事物表达不赞成意见的人。" +
            "<br><br>" +
            "(D) '观察者' 意味着观察或注意到某事的人。"
    },
    {
        id: 7,
        question: "Though they were competitors in the market, their mutual respect made them act more like __________.",
        chinese_question: "虽然他们在市场上是竞争对手，但他们的相互尊重使他们更像 __________。",
        answers: [
            { option: "A", answer: "rivals", chinese_answer: "对手", chinese_romanization: "duìshǒu" },
            { option: "B", answer: "colleagues", chinese_answer: "同事", chinese_romanization: "tóngshì" },
            { option: "C", answer: "enemies", chinese_answer: "敌人", chinese_romanization: "dírén" },
            { option: "D", answer: "adversaries", chinese_answer: "对抗者", chinese_romanization: "duìkàng zhě" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'colleagues' means people who work in the same organization or profession. Here, it means that despite being competitors, they behaved respectfully as if they were coworkers." +
            "<br><br>" +
            "(A) 'rivals' means competitors striving for the same objective or superiority in the same field." +
            "<br><br>" +
            "(C) 'enemies' means people who are actively opposed or hostile to someone or something." +
            "<br><br>" +
            "(D) 'adversaries' means one's opponent in a contest, conflict, or dispute.",
        chinese_explanation: "(B) '同事' 意味着在同一组织或职业中工作的人。在这里，它意味着尽管他们是竞争对手，但他们表现得像同事一样互相尊重。" +
            "<br><br>" +
            "(A) '对手' 意味着为相同目标或在相同领域中的优越地位而奋斗的竞争者。" +
            "<br><br>" +
            "(C) '敌人' 意味着积极反对或敌视某人或某事的人。" +
            "<br><br>" +
            "(D) '对抗者' 意味着比赛、冲突或争议中的对手。"
    },
    {
        id: 8,
        question: "In the corporate hierarchy, a manager has authority over his __________ and can delegate tasks to them.",
        chinese_question: "在公司层级中，经理对他的 __________ 有权，可以将任务分配给他们。",
        answers: [
            { option: "A", answer: "supervisor", chinese_answer: "主管", chinese_romanization: "zhǔguǎn" },
            { option: "B", answer: "subordinate", chinese_answer: "下属", chinese_romanization: "xiàshǔ" },
            { option: "C", answer: "colleague", chinese_answer: "同事", chinese_romanization: "tóngshì" },
            { option: "D", answer: "partner", chinese_answer: "合作伙伴", chinese_romanization: "hézuò huǒbàn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'subordinate' means a person under the authority or control of another within an organization." +
            "<br><br>" +
            "(A) 'supervisor' means a person who supervises a person or an activity." +
            "<br><br>" +
            "(C) 'colleague' means a person with whom one works in a profession or business." +
            "<br><br>" +
            "(D) 'partner' means either of a pair of people engaged together in the same activity.",
        chinese_explanation: "(B) '下属' 一词意味着在组织中处于他人权威或控制之下的人。" +
            "<br><br>" +
            "(A) '主管' 意味着监督某人或某项活动的人。" +
            "<br><br>" +
            "(C) '同事' 意味着在专业或业务中与某人一起工作的人。" +
            "<br><br>" +
            "(D) '合作伙伴' 意味着从事同一活动的一对人中的任何一方。"
    },
    {
        id: 9,
                question: "The road reached a __________, forcing drivers to choose between two very different paths.",
        chinese_question: "道路到达了一个 __________ 点，迫使司机在两条截然不同的道路之间做出选择。",
        answers: [
            { option: "A", answer: "unification", chinese_answer: "统一", chinese_romanization: "tǒngyī" },
            { option: "B", answer: "bifurcation", chinese_answer: "分叉", chinese_romanization: "fēnchà" },
            { option: "C", answer: "convergence", chinese_answer: "汇合", chinese_romanization: "huìhé" },
            { option: "D", answer: "intersection", chinese_answer: "交叉点", chinese_romanization: "jiāochā diǎn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'bifurcation' means the division of something into two branches or parts." +
            "<br><br>" +
            "(A) 'unification' means the process of being united or made into a whole." +
            "<br><br>" +
            "(C) 'convergence' means the process or state of converging." +
            "<br><br>" +
            "(D) 'intersection' means a point or line common to lines or surfaces that intersect.",
        chinese_explanation: "(B) '分叉' 一词意味着将某物分成两个分支或部分。" +
            "<br><br>" +
            "(A) '统一' 意味着联合或整合的过程。" +
            "<br><br>" +
            "(C) '汇合' 意味着汇合的过程或状态。" +
            "<br><br>" +
            "(D) '交叉点' 意味着线或表面相交的公共点或线。"

    },
    {
        id: 10,
        question: "The teacher's explanation brought __________ to the difficult concept, making it easier for all the students to understand.",
        chinese_question: "老师的解释为这个困难的概念带来了 __________，使所有学生都更容易理解。",
        answers: [
            { option: "A", answer: "confusion", chinese_answer: "混乱", chinese_romanization: "hùnluàn" },
            { option: "B", answer: "clarity", chinese_answer: "清晰", chinese_romanization: "qīngxī" },
            { option: "C", answer: "obscurity", chinese_answer: "模糊", chinese_romanization: "móhú" },
            { option: "D", answer: "ambiguity", chinese_answer: "含糊", chinese_romanization: "hánhú" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'clarity' means the quality of being clear, in particular." +
            "<br><br>" +
            "(A) 'confusion' means lack of understanding; uncertainty." +
            "<br><br>" +
            "(C) 'obscurity' means the state of being unknown, inconspicuous, or unimportant." +
            "<br><br>" +
            "(D) 'ambiguity' means the quality of being open to more than one interpretation; inexactness.",
        chinese_explanation: "(B) '清晰' 一词意味着清晰的质量，特别是。" +
            "<br><br>" +
            "(A) '混乱' 意味着缺乏理解；不确定。" +
            "<br><br>" +
            "(C) '模糊' 意味着未知、不显眼或不重要的状态。" +
            "<br><br>" +
            "(D) '含糊' 意味着开放多个解释的质量；不精确。"
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
