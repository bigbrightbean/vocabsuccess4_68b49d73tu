// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "At the lavish feast, they experienced a __________ of rich foods, feeling overly full and unable to eat another bite.",
        chinese_question: "在奢华的宴会上，他们感到丰富食物的 __________，感到非常饱，无法再吃一口。",
        answers: [
            { option: "A", answer: "scarcity", chinese_answer: "稀缺", chinese_romanization: "xīquē" },
            { option: "B", answer: "famine", chinese_answer: "饥荒", chinese_romanization: "jīhuāng" },
            { option: "C", answer: "surfeit", chinese_answer: "过量", chinese_romanization: "guòliàng" },
            { option: "D", answer: "shortage", chinese_answer: "短缺", chinese_romanization: "duǎnquē" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'surfeit' means an excessive amount of something." +
            "<br><br>" +
            "(A) 'scarcity' means the state of being scarce or in short supply; shortage." +
            "<br><br>" +
            "(B) 'famine' means extreme scarcity of food." +
            "<br><br>" +
            "(D) 'shortage' means a state or situation in which something needed cannot be obtained in sufficient amounts.",
        chinese_explanation: "(C) '过量' 一词意味着某物的过多量。" +
            "<br><br>" +
            "(A) '稀缺' 意味着稀缺或短缺的状态；短缺。" +
            "<br><br>" +
            "(B) '饥荒' 意味着食物的极度稀缺。" +
            "<br><br>" +
            "(D) '短缺' 意味着需要的某物无法获得足够数量的状态或情况。"
    },
    {
        id: 2,
        question: "She was a social __________, effortlessly adapting to different groups and situations with remarkable ease.",
        chinese_question: "她是个社交 __________，轻松地适应不同的群体和情况。",
        answers: [
            { option: "A", answer: "butterfly", chinese_answer: "蝴蝶", chinese_romanization: "húdié" },
            { option: "B", answer: "chameleon", chinese_answer: "变色龙", chinese_romanization: "biànsèlóng" },
            { option: "C", answer: "loner", chinese_answer: "独行者", chinese_romanization: "dúxíng zhě" },
            { option: "D", answer: "leader", chinese_answer: "领袖", chinese_romanization: "lǐngxiù" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'chameleon' figuratively means a person who often changes their beliefs or behavior in order to please others or to succeed." +
            "<br><br>" +
            "(A) 'butterfly' means a nectar-feeding insect with two pairs of large, typically brightly colored wings that are covered with microscopic scales." +
            "<br><br>" +
            "(C) 'loner' means a person who prefers not to associate with others." +
            "<br><br>" +
            "(D) 'leader' means the person who leads or commands a group, organization, or country.",
        chinese_explanation: "(B) '变色龙' 在比喻意义上意味着一个经常改变信仰或行为以取悦他人或取得成功的人。" +
            "<br><br>" +
            "(A) '蝴蝶' 意味着一种以花蜜为食的昆虫，具有两对大而通常颜色鲜艳的翅膀，这些翅膀上覆盖着显微鳞片。" +
            "<br><br>" +
            "(C) '独行者' 意味着一个更喜欢不与他人交往的人。" +
            "<br><br>" +
            "(D) '领袖' 意味着领导或指挥一个团体、组织或国家的人。"
    },
    {
        id: 3,
        question: "The library's rare book collection boasts a valuable __________ dating back to the 16th century.",
        chinese_question: "图书馆的珍藏书籍包括一本可追溯到16世纪的宝贵__________。",
        answers: [
            { option: "A", answer: "flyer", chinese_answer: "传单", chinese_romanization: "chuándān" },
            { option: "B", answer: "booklet", chinese_answer: "小册子", chinese_romanization: "xiǎocèzi" },
            { option: "C", answer: "handout", chinese_answer: "讲义", chinese_romanization: "jiǎngyì" },
            { option: "D", answer: "tome", chinese_answer: "巨著", chinese_romanization: "jùzhù" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'tome' refers to a large, heavy book, especially one containing academic, scholarly, or authoritative content." +
            "<br><br>" +
            "(A) 'flyer' is a small handbill advertising an event or product." +
            "<br><br>" +
            "(B) 'booklet' is a small book consisting of a few sheets, typically with paper covers." +
            "<br><br>" +
            "(C) 'handout' is a piece of printed information provided free of charge, especially to accompany a lecture or advertisement.",
        chinese_explanation: "(D) '巨著' 指的是一本大部头的书籍，尤其是包含学术、学术或权威内容的书籍。" +
            "<br><br>" +
            "(A) '传单' 是一个小的宣传单，广告活动或产品。" +
            "<br><br>" +
            "(B) '小册子' 是一本由几页组成的小书，通常有纸质封面。" +
            "<br><br>" +
            "(C) '讲义' 是免费提供的印刷信息，特别是用于配合讲座或广告。"
    },
    {
        id: 4,
        question: "He helps her with her studies, and __________, she assists him with his projects.",
        chinese_question: "他帮助她学习， __________，她帮助他做项目。",
        answers: [
            { option: "A", answer: "vice versa", chinese_answer: "反之亦然", chinese_romanization: "fǎnzhī yìrán" },
            { option: "B", answer: "similarly", chinese_answer: "同样地", chinese_romanization: "tóngyàng de" },
            { option: "C", answer: "likewise", chinese_answer: "同样", chinese_romanization: "tóngyàng" },
            { option: "D", answer: "instead", chinese_answer: "反而", chinese_romanization: "fǎn'ér" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'vice versa' metaphorically means the other way around." +
            "<br><br>" +
            "(B) 'similarly' means in a similar way." +
            "<br><br>" +
            "(C) 'likewise' means in the same way; also." +
            "<br><br>" +
            "(D) 'instead' means as an alternative or substitute.",
        chinese_explanation: "(A) '反之亦然' 比喻反过来。" +
            "<br><br>" +
            "(B) '同样地' 意味着以类似的方式。" +
            "<br><br>" +
            "(C) '同样' 意味着以同样的方式；也。" +
            "<br><br>" +
            "(D) '反而' 意味着作为替代或替代。"
    },
    {
        id: 5,
        question: "The political debate quickly turned into a verbal __________, with both sides shouting over each other.",
        chinese_question: "政治辩论很快变成了言语上的__________，双方都在互相大声争吵。",
        answers: [
            { option: "A", answer: "discussion", chinese_answer: "讨论", chinese_romanization: "tǎolùn" },
            { option: "B", answer: "brawl", chinese_answer: "打斗", chinese_romanization: "dǎdòu" },
            { option: "C", answer: "handshake", chinese_answer: "握手", chinese_romanization: "wòshǒu" },
            { option: "D", answer: "altercation", chinese_answer: "争吵", chinese_romanization: "zhēngchǎo" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'altercation' means a noisy argument or disagreement, especially in public." +
            "<br><br>" +
            "(A) 'discussion' means the action or process of talking about something to reach a decision or to exchange ideas." +
            "<br><br>" +
            "(B) 'brawl' means a rough or noisy fight or quarrel. Figuratively, it can mean a heated or intense argument." +
            "<br><br>" +
            "(C) 'handshake' means an act of shaking hands with a person." +
            "<br><br>" +
            "(D) 'truce' means an agreement between enemies or opponents to stop fighting or arguing for a certain time.",
        chinese_explanation: "(D) '争吵' 意味着一种嘈杂的争论或争吵，尤其是在公共场合。" +
            "<br><br>" +
            "(A) '讨论' 意味着为了达成决定或交流想法而谈论某事的行为或过程。" +
            "<br><br>" +
            "(B) '打斗'一词意味着一场激烈或喧闹的打架或争吵。比喻地，它可以表示激烈或紧张的争论。" +
            "<br><br>" +
            "(C) '握手' 意味着与某人握手的行为。" +
            "<br><br>" +
            "(D) '停战' 意味着敌人或对手之间在一定时间内停止战斗或争吵的协议。"
    },
    {
        id: 6,
        question: "They organized a __________ of the store to protest against unfair labour practices, urging people not to shop there.",
        chinese_question: "他们组织了一次对商店的抵制，以抗议不公平的劳动做法，呼吁人们不要在那里购物__________。",
        answers: [
            { option: "A", answer: "boycott", chinese_answer: "抵制", chinese_romanization: "dǐzhì" },
            { option: "B", answer: "celebration", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" },
            { option: "C", answer: "campaign", chinese_answer: "活动", chinese_romanization: "huódòng" },
            { option: "D", answer: "demonstration", chinese_answer: "示威", chinese_romanization: "shìwēi" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'boycott' metaphorically means to refuse to participate in something as a way of protesting." + 
            "<br><br>" + 
            "(B) 'celebration' means the action of marking one's pleasure at an important event or occasion by engaging in enjoyable, typically social, activity." + 
            "<br><br>" + 
            "(C) 'campaign' means an organized course of action to achieve a goal." + 
            "<br><br>" + 
            "(D) 'demonstration' means the action or process of showing the existence or truth of something by giving proof or evidence.",
        chinese_explanation: "(A) '抵制' 比喻拒绝参与某事作为抗议的方式。" + 
            "<br><br>" + 
            "(B) '庆祝' 意味着通过从事愉快的、通常是社交活动来标志一个重要事件或场合的快乐行为。" + 
            "<br><br>" + 
            "(C) '活动' 意味着为实现目标而采取的有组织的行动过程。" + 
            "<br><br>" + 
            "(D) '示威' 意味着通过提供证据或证据来显示某物存在或真实性的行为或过程。"
    },
    {
        id: 7,
        question: "As a __________ in the art of cooking, he often followed recipes to the letter, never deviating from the instructions even once.",
        chinese_question: "作为烹饪艺术的__________，他经常严格按照食谱操作，从不偏离指示。",
        answers: [
            { option: "A", answer: "expert", chinese_answer: "专家", chinese_romanization: "zhuānjiā" },
            { option: "B", answer: "master", chinese_answer: "大师", chinese_romanization: "dàshī" },
            { option: "C", answer: "veteran", chinese_answer: "老手", chinese_romanization: "lǎoshǒu" },
            { option: "D", answer: "tyro", chinese_answer: "新手", chinese_romanization: "xīnshǒu" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'tyro' refers to a beginner or novice, especially in learning or mastering a new skill." +
            "<br><br>" +
            "(A) 'expert' refers to a person with a high level of knowledge or skill in a particular area." +
            "<br><br>" +
            "(B) 'master' refers to a person with outstanding skill or knowledge in a particular area." +
            "<br><br>" +
            "(C) 'veteran' refers to a person with long experience in a particular field.",
        chinese_explanation: "(D) '新手' 指的是一位初学者或新手，尤其是在学习或掌握新技能方面。" +
            "<br><br>" +
            "(A) '专家' 指的是在某一领域拥有高水平知识或技能的人。" +
            "<br><br>" +
            "(B) '大师' 指的是在某一领域拥有杰出技能或知识的人。" +
            "<br><br>" +
            "(C) '老手' 指的是在某一领域有长期经验的人。"
    },
    {
        id: 8,
        question: "The doctor prescribed an __________ to help reduce the child's fever quickly.",
        chinese_question: "医生开了一个 __________ 帮助迅速降低孩子的发烧。",
        answers: [
            { option: "A", answer: "antibiotic", chinese_answer: "抗生素", chinese_romanization: "kàngshēngsù" },
            { option: "B", answer: "antipyretic", chinese_answer: "退烧药", chinese_romanization: "tuìshāo yào" },
            { option: "C", answer: "analgesic", chinese_answer: "镇痛药", chinese_romanization: "zhèntòng yào" },
            { option: "D", answer: "antiseptic", chinese_answer: "消毒剂", chinese_romanization: "xiāodú jì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'antipyretic' means a substance that reduces fever." +
            "<br><br>" +
            "(A) 'antibiotic' means a medicine that inhibits the growth of or destroys microorganisms." +
            "<br><br>" +
            "(C) 'analgesic' means a drug that relieves pain." +
            "<br><br>" +
            "(D) 'antiseptic' means a substance that prevents the growth of disease-causing microorganisms.",
        chinese_explanation: "(B) '退烧药' 一词意味着一种降低发烧的物质。" +
            "<br><br>" +
            "(A) '抗生素' 意味着一种抑制或杀死微生物的药物。" +
            "<br><br>" +
            "(C) '镇痛药' 意味着一种缓解疼痛的药物。" +
            "<br><br>" +
            "(D) '消毒剂' 意味着一种防止致病微生物生长的物质。"
    },
    {
        id: 9,
        question: "The city council passed a new __________ to regulate parking in residential areas.",
        chinese_question: "市议会通过了一项新的 __________ 来规范住宅区的停车。",
        answers: [
            { option: "A", answer: "suggestion", chinese_answer: "建议", chinese_romanization: "jiànyì" },
            { option: "B", answer: "ordinance", chinese_answer: "条例", chinese_romanization: "tiáolì" },
            { option: "C", answer: "proposal", chinese_answer: "提案", chinese_romanization: "tí'àn" },
            { option: "D", answer: "recommendation", chinese_answer: "建议", chinese_romanization: "jiànyì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'ordinance' means a piece of legislation enacted by a municipal authority." +
            "<br><br>" +
            "(A) 'suggestion' means an idea or plan put forward for consideration." +
            "<br><br>" +
            "(C) 'proposal' means a plan or suggestion, especially a formal or written one, put forward for consideration or discussion by others." +
            "<br><br>" +
            "(D) 'recommendation' means a suggestion or proposal as to the best course of action, especially one put forward by an authoritative body.",
        chinese_explanation: "(B) '条例' 一词意味着由市政当局颁布的立法。" +
            "<br><br>" +
            "(A) '建议' 意味着提出供考虑的想法或计划。" +
            "<br><br>" +
            "(C) '提案' 意味着提出供其他人考虑或讨论的计划或建议，尤其是正式或书面的。" +
            "<br><br>" +
            "(D) '建议' 意味着建议或提议最佳行动方案，尤其是由权威机构提出的。"
    },
    {
        id: 10,
        question: "She decided to study __________ because she was fascinated by how the body moves and functions.",
        chinese_question: "她决定学习 __________ 因为她对身体如何运动和功能着迷。",
        answers: [
            { option: "A", answer: "chemistry", chinese_answer: "化学", chinese_romanization: "huàxué" },
            { option: "B", answer: "physics", chinese_answer: "物理", chinese_romanization: "wùlǐ" },
            { option: "C", answer: "kinesiology", chinese_answer: "运动学", chinese_romanization: "yùndòng xué" },
            { option: "D", answer: "astronomy", chinese_answer: "天文学", chinese_romanization: "tiānwén xué" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'kinesiology' means the study of the mechanics of body movements." +
            "<br><br>" +
            "(A) 'chemistry' means the branch of science that deals with the identification of the substances of which matter is composed." +
            "<br><br>" +
            "(B) 'physics' means the branch of science concerned with the nature and properties of matter and energy." +
            "<br><br>" +
            "(D) 'astronomy' means the branch of science that deals with celestial objects, space, and the physical universe as a whole.",
        chinese_explanation: "(C) '运动学' 一词意味着研究身体运动机制的学科。" +
            "<br><br>" +
            "(A) '化学' 意味着识别物质组成的科学分支。" +
            "<br><br>" +
            "(B) '物理' 意味着研究物质和能量性质的科学分支。" +
            "<br><br>" +
            "(D) '天文学' 意味着研究天体、空间和整个物理宇宙的科学分支。"
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
