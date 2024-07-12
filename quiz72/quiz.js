// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "Her __________ against the new policy highlighted her frustration, as she passionately criticized its flaws in a lengthy and emotional speech.",
        chinese_question: "她对新政策的 __________ 突显了她的挫败感，因为她在长篇而情绪激动的讲话中热情地批评了其缺陷。",
        answers: [
            { option: "A", answer: "tirade", chinese_answer: "长篇大论的批评", chinese_romanization: "chángpiān dàlùn de pīpíng" },
            { option: "B", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" },
            { option: "C", answer: "apathy", chinese_answer: "冷漠", chinese_romanization: "lěngmò" },
            { option: "D", answer: "indifference", chinese_answer: "漠不关心", chinese_romanization: "mòbùguānxīn" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'tirade' means a long, angry speech of criticism or accusation. Metaphorically, it means a prolonged outburst of bitter, outspoken denunciation." +
            "<br><br>" +
            "(B) 'support' means bear all or part of the weight of; hold up." +
            "<br><br>" +
            "(C) 'apathy' means lack of interest, enthusiasm, or concern." +
            "<br><br>" +
            "(D) 'indifference' means lack of interest, concern, or sympathy.",
        chinese_explanation: "(A) '长篇大论的批评' 意思是长时间的愤怒批评或指责的讲话。比喻上，它意味着长时间的苦涩、直言不讳的谴责。" +
            "<br><br>" +
            "(B) '支持' 意味着承担全部或部分重量；支撑。" +
            "<br><br>" +
            "(C) '冷漠' 意味着缺乏兴趣、热情或关心。" +
            "<br><br>" +
            "(D) '漠不关心' 意味着缺乏兴趣、关心或同情。"
    },
    {
        id: 2,
        question: "The country suffered under the rule of a __________ who had no regard for justice or human rights.",
        chinese_question: "这个国家在一位 __________ 的统治下受苦，他对正义和人权毫不关心。",
        answers: [
            { option: "A", answer: "democrat", chinese_answer: "民主人士", chinese_romanization: "mínzhǔ rénshì" },
            { option: "B", answer: "philanthropist", chinese_answer: "慈善家", chinese_romanization: "císhàn jiā" },
            { option: "C", answer: "despot", chinese_answer: "暴君", chinese_romanization: "bàojūn" },
            { option: "D", answer: "benefactor", chinese_answer: "施主", chinese_romanization: "shīzhǔ" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'despot' means a ruler or other person who holds absolute power, typically one who exercises it in a cruel or oppressive way." +
            "<br><br>" +
            "(A) 'democrat' means an advocate or supporter of democracy." +
            "<br><br>" +
            "(B) 'philanthropist' means a person who seeks to promote the welfare of others, especially by the generous donation of money to good causes." +
            "<br><br>" +
            "(D) 'benefactor' means a person who gives money or other help to a person or cause.",
        chinese_explanation: "(C) '暴君' 一词意味着拥有绝对权力的统治者或其他人，通常是以残酷或压迫的方式行使权力的人。" +
            "<br><br>" +
            "(A) '民主人士' 意味着民主的倡导者或支持者。" +
            "<br><br>" +
            "(B) '慈善家' 意味着寻求促进他人福利的人，尤其是通过慷慨捐款来支持善举的人。" +
            "<br><br>" +
            "(D) '施主' 意味着给予金钱或其他帮助的人或事业的人。"
    },
    {
        id: 3,
        question: "The journalist was criticized for showing __________ in her articles, favoring one political party over the other.",
        chinese_question: "这位记者因在文章中表现出 __________ 而受到批评，偏袒一个政党。",
        answers: [
            { option: "A", answer: "neutrality", chinese_answer: "中立", chinese_romanization: "zhōnglì" },
            { option: "B", answer: "fairness", chinese_answer: "公平", chinese_romanization: "gōngpíng" },
            { option: "C", answer: "bias", chinese_answer: "偏见", chinese_romanization: "piānjiàn" },
            { option: "D", answer: "objectivity", chinese_answer: "客观", chinese_romanization: "kèguān" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'bias' means prejudice in favor of or against one thing, person, or group compared with another." +
            "<br><br>" +
            "(A) 'neutrality' means the state of not supporting or helping either side in a conflict." +
            "<br><br>" +
            "(B) 'fairness' means impartial and just treatment or behavior without favoritism or discrimination." +
            "<br><br>" +
            "(D) 'objectivity' means the quality of being objective.",
        chinese_explanation: "(C) '偏见' 一词意味着相对于另一事物、个人或群体的偏爱或偏见。" +
            "<br><br>" +
            "(A) '中立' 意味着不支持或帮助冲突中的任何一方的状态。" +
            "<br><br>" +
            "(B) '公平' 意味着不偏不倚和公正的待遇或行为，没有偏袒或歧视。" +
            "<br><br>" +
            "(D) '客观' 意味着客观的品质。"
    },
    {
        id: 4,
        question: "His speech was filled with wise __________, short and pithy statements that conveyed deep truths.",
        chinese_question: "他的演讲充满了睿智的 __________，简洁而精辟的语句传达了深刻的真理。",
        answers: [
            { option: "A", answer: "questions", chinese_answer: "问题", chinese_romanization: "wèntí" },
            { option: "B", answer: "stories", chinese_answer: "故事", chinese_romanization: "gùshì" },
            { option: "C", answer: "apothegms", chinese_answer: "格言", chinese_romanization: "géyán" },
            { option: "D", answer: "anecdotes", chinese_answer: "轶事", chinese_romanization: "yìshì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'apothegm' means a concise, pithy, and instructive saying or maxim." +
            "<br><br>" +
            "(A) 'questions' means sentences worded or expressed so as to elicit information." +
            "<br><br>" +
            "(B) 'stories' means accounts of imaginary or real people and events." +
            "<br><br>" +
            "(D) 'anecdotes' means short amusing or interesting stories about real incidents or people.",
        chinese_explanation: "(C) '格言' 一词意味着简洁、精辟和教义的格言或格言。" +
            "<br><br>" +
            "(A) '问题' 意味着措辞或表达以获取信息的句子。" +
            "<br><br>" +
            "(B) '故事' 意味着关于虚构或真实人物和事件的叙述。" +
            "<br><br>" +
            "(D) '轶事' 意味着关于真实事件或人物的短小有趣的故事。"
    },
    {
        id: 5,
        question: "Her lack of confidence was a __________ to her career advancement, often causing her to miss opportunities for promotions and new projects.",
        chinese_question: "她缺乏自信是她职业发展的 __________，经常导致她错过晋升和新项目的机会。",
        answers: [
            { option: "A", answer: "hindrance", chinese_answer: "障碍", chinese_romanization: "zhàng'ài" },
            { option: "B", answer: "motivation", chinese_answer: "动力", chinese_romanization: "dònglì" },
            { option: "C", answer: "catalyst", chinese_answer: "催化剂", chinese_romanization: "cuīhuà jì" },
            { option: "D", answer: "encouragement", chinese_answer: "鼓励", chinese_romanization: "gǔlì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'hindrance' means an obstacle or barrier." +
            "<br><br>" +
            "(B) 'motivation' means the reason or reasons one has for acting or behaving in a particular way." +
            "<br><br>" +
            "(C) 'catalyst' means a substance that increases the rate of a chemical reaction without itself undergoing any permanent chemical change." +
            "<br><br>" +
            "(D) 'encouragement' means the action of giving someone support, confidence, or hope.",
        chinese_explanation: "(A) '障碍' 意味着障碍或阻碍。" +
            "<br><br>" +
            "(B) '动力' 意味着一个人以特定方式行动或行为的原因。" +
            "<br><br>" +
            "(C) '催化剂' 意味着一种物质，它增加了化学反应的速度，而自身不发生任何永久的化学变化。" +
            "<br><br>" +
            "(D) '鼓励' 意味着给予某人支持、信心或希望的行为。"
    },
    {
        id: 6,
        question: "Their ongoing __________ at work made collaboration on projects almost impossible.",
        chinese_question: "他们在工作中的持续__________使得项目合作几乎不可能。",
        answers: [
            { option: "A", answer: "friendship", chinese_answer: "友谊", chinese_romanization: "yǒuyì" },
            { option: "B", answer: "alliance", chinese_answer: "联盟", chinese_romanization: "liánméng" },
            { option: "C", answer: "feud", chinese_answer: "争斗", chinese_romanization: "zhēngdòu" },
            { option: "D", answer: "truce", chinese_answer: "停战", chinese_romanization: "tíngzhàn" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'feud' means a prolonged and bitter quarrel or dispute. Figuratively, it can mean a persistent conflict or rivalry." + 
            "<br><br>" + 
            "(A) 'friendship' means a state of mutual trust and support between allied nations." + 
            "<br><br>" + 
            "(B) 'alliance' means a union or association formed for mutual benefit, especially between countries or organizations." + 
            "<br><br>" + 
            "(D) 'truce' means an agreement between enemies or opponents to stop fighting or arguing for a certain time.",
        chinese_explanation: "(C) '争斗'一词意味着长期和激烈的争吵或争执。比喻地，它可以表示持续的冲突或竞争。" + 
            "<br><br>" + 
            "(A) '友谊' 意味着盟国之间的相互信任和支持的状态。" + 
            "<br><br>" + 
            "(B) '联盟' 意味着为共同利益而形成的联合或协会，特别是在国家或组织之间。" + 
            "<br><br>" + 
            "(D) '停战' 意味着敌人或对手之间在一定时间内停止战斗或争吵的协议。"
    },
    {
        id: 7,
        question: "One of her __________ was always carrying a small notebook to jot down her thoughts, no matter where she went.",
        chinese_question: "她的一个 __________ 是无论走到哪里，总是带着一个小笔记本来记录她的想法。",
        answers: [
            { option: "A", answer: "commonality", chinese_answer: "共性", chinese_romanization: "gòngxìng" },
            { option: "B", answer: "idiosyncrasies", chinese_answer: "特质", chinese_romanization: "tèzhì" },
            { option: "C", answer: "disregard", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "D", answer: "conformity", chinese_answer: "一致", chinese_romanization: "yīzhì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'idiosyncrasy' means a mode of behavior or way of thought peculiar to an individual." +
            "<br><br>" +
            "(A) 'commonality' means the state of sharing features or attributes." +
            "<br><br>" +
            "(C) 'disregard' means lack of consideration or respect." +
            "<br><br>" +
            "(D) 'conformity' means compliance with standards, rules, or laws.",
        chinese_explanation: "(B) '特质' 意味着个人特有的行为模式或思维方式。" +
            "<br><br>" +
            "(A) '共性' 意味着分享特征或属性的状态。" +
            "<br><br>" +
            "(C) '忽视' 意味着缺乏考虑或尊重。" +
            "<br><br>" +
            "(D) '一致' 意味着遵守标准、规则或法律。"
    },
    {
        id: 8,
        question: "The region is suffering from a __________ of clean drinking water, affecting the health of its residents.",
        chinese_question: "该地区缺乏清洁饮用水，影响了居民的健康。",
        answers: [
            { option: "A", answer: "surplus", chinese_answer: "过剩", chinese_romanization: "guòshèng" },
            { option: "B", answer: "abundance", chinese_answer: "丰富", chinese_romanization: "fēngfù" },
            { option: "C", answer: "dearth", chinese_answer: "缺乏", chinese_romanization: "quēfá" },
            { option: "D", answer: "plenty", chinese_answer: "充足", chinese_romanization: "chōngzú" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'dearth' means a scarcity or lack of something." +
            "<br><br>" +
            "(A) 'surplus' means an amount of something left over when requirements have been met; an excess of production or supply over demand." +
            "<br><br>" +
            "(B) 'abundance' means a very large quantity of something." +
            "<br><br>" +
            "(D) 'plenty' means a large or sufficient amount or quantity; more than enough.",
        chinese_explanation: "(C) '缺乏' 一词意味着某物的稀缺或缺乏。" +
            "<br><br>" +
            "(A) '过剩' 意味着在需求得到满足后剩余的数量；生产或供应超过需求的过剩。" +
            "<br><br>" +
            "(B) '丰富' 意味着某物的大量数量。" +
            "<br><br>" +
            "(D) '充足' 意味着大量或足够的数量；超过足够的。"
    },
    {
        id: 9,
        question: "The __________ devoted all his time and energy to advocating for animal rights, often participating in protests and campaigns.",
        chinese_question: "这个 __________ 把所有的时间和精力都投入到动物权利的倡导中，经常参加抗议和活动。",
        answers: [
            { option: "A", answer: "skeptic", chinese_answer: "怀疑论者", chinese_romanization: "huáiyí lùnzhě" },
            { option: "B", answer: "moderate", chinese_answer: "温和派", chinese_romanization: "wēnhé pài" },
            { option: "C", answer: "zealot", chinese_answer: "狂热者", chinese_romanization: "kuángrè zhě" },
            { option: "D", answer: "indifferent", chinese_answer: "冷漠的", chinese_romanization: "lěngmò de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'zealot' means a person who is fanatical and uncompromising in pursuit of their religious, political, or other ideals." +
            "<br><br>" +
            "(A) 'skeptic' means a person inclined to question or doubt accepted opinions." +
            "<br><br>" +
            "(B) 'moderate' means average in amount, intensity, quality, or degree." +
            "<br><br>" +
            "(D) 'indifferent' means having no particular interest or sympathy; unconcerned.",
        chinese_explanation: "(C) '狂热者' 一词意味着在追求其宗教、政治或其他理想方面狂热和不妥协的人。" +
            "<br><br>" +
            "(A) '怀疑论者' 意味着倾向于质疑或怀疑公认观点的人。" +
            "<br><br>" +
            "(B) '温和派' 意味着在数量、强度、质量或程度上平均的。" +
            "<br><br>" +
            "(D) '冷漠的' 意味着没有特别的兴趣或同情；不关心的。"
    },
    {
        id: 10,
        question: "The manager offered an __________ to employees who admitted their mistakes, encouraging honesty and transparency in the workplace.",
        chinese_question: "经理对承认错误的员工提供 __________，鼓励工作场所的诚实和透明。",
        answers: [
            { option: "A", answer: "reprimand", chinese_answer: "训斥", chinese_romanization: "xùnchì" },
            { option: "B", answer: "reward", chinese_answer: "奖励", chinese_romanization: "jiǎnglì" },
            { option: "C", answer: "amnesty", chinese_answer: "大赦", chinese_romanization: "dàshè" },
            { option: "D", answer: "penalty", chinese_answer: "惩罚", chinese_romanization: "chéngfá" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'amnesty' literally means an official pardon for people who have been convicted of political offenses. Metaphorically, it means a period during which people are forgiven for past offenses or mistakes." +
            "<br><br>" +
            "(A) 'reprimand' means a formal expression of disapproval." +
            "<br><br>" +
            "(B) 'reward' means something given in recognition of service, effort, or achievement." +
            "<br><br>" +
            "(D) 'penalty' means a punishment imposed for breaking a law, rule, or contract.",
        chinese_explanation: "(C) '大赦' 字面意思是对被判犯有政治罪行的人的正式赦免。比喻上，它意味着一个原谅过去错误或过失的时期。" +
            "<br><br>" +
            "(A) '训斥' 意味着正式的批评。" +
            "<br><br>" +
            "(B) '奖励' 意味着对服务、努力或成就的认可。" +
            "<br><br>" +
            "(D) '惩罚' 意味着因违反法律、规则或合同而施加的惩罚。"
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
