// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "His belief in __________ led him to question the existence of a higher power, as he felt there was no definitive evidence to support it.",
        chinese_question: "他对 __________ 的信仰使他质疑更高力量的存在，因为他认为没有明确的证据支持这一点。",
        answers: [
            { option: "A", answer: "atheism", chinese_answer: "无神论", chinese_romanization: "wúshén lùn" },
            { option: "B", answer: "theism", chinese_answer: "有神论", chinese_romanization: "yǒu shén lùn" },
            { option: "C", answer: "agnosticism", chinese_answer: "不可知论", chinese_romanization: "bùkě zhī lùn" },
            { option: "D", answer: "spirituality", chinese_answer: "灵性", chinese_romanization: "língxìng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'agnosticism' means the belief that nothing is known or can be known of the existence or nature of God or of anything beyond material phenomena." +
            "<br><br>" +
            "(A) 'atheism' means disbelief or lack of belief in the existence of God or gods." +
            "<br><br>" +
            "(B) 'theism' means belief in the existence of a god or gods, specifically of a creator who intervenes in the universe." +
            "<br><br>" +
            "(D) 'spirituality' means the quality of being concerned with the human spirit or soul as opposed to material or physical things.",
        chinese_explanation: "(C) '不可知论' 一词意味着认为没有任何已知或可以知道上帝存在或性质或超越物质现象的任何事物。" +
            "<br><br>" +
            "(A) '无神论' 意味着对神或神的存在的怀疑或缺乏信仰。" +
            "<br><br>" +
            "(B) '有神论' 意味着相信神或神的存在，特别是一个在宇宙中介入的创造者。" +
            "<br><br>" +
            "(D) '灵性' 意味着关心人类精神或灵魂的质量，而不是物质或物理事物。"
    },
    {
        id: 2,
        question: "Her words were like __________ to his ears, soothing and sweet, providing a sense of comfort and peace.",
        chinese_question: "她的话语就像__________一样，温柔甜美地抚慰他的耳朵，带来安慰和宁静。",
        answers: [
            { option: "A", answer: "pollen", chinese_answer: "花粉", chinese_romanization: "huāfěn" },
            { option: "B", answer: "nectar", chinese_answer: "花蜜", chinese_romanization: "huāmì" },
            { option: "C", answer: "leaves", chinese_answer: "叶子", chinese_romanization: "yèzi" },
            { option: "D", answer: "roots", chinese_answer: "根", chinese_romanization: "gēn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'nectar' means a sugary fluid secreted by plants, especially within flowers to encourage pollination by insects and other animals, collected by bees to make into honey. Figuratively, it can mean something exceptionally pleasing to taste or hear." + 
            "<br><br>" + 
            "(A) 'pollen' means a fine powdery substance, typically yellow, consisting of microscopic grains discharged from the male part of a flower or from a male cone." + 
            "<br><br>" + 
            "(C) 'leaves' means the flat, thin, green parts of a plant that grow on its branches and stem." + 
            "<br><br>" + 
            "(D) 'roots' means the parts of a plant that attach it to the ground or to a support, typically underground, conveying water and nourishment to the rest of the plant via numerous branches and fibers.",
        chinese_explanation: "(B) '花蜜' 一词意味着植物分泌的一种含糖液体，特别是在花内，用于吸引昆虫和其他动物进行授粉，蜜蜂收集后酿成蜂蜜。比喻地，它可以表示非常令人愉快的味道或声音。" + 
            "<br><br>" + 
            "(A) '花粉' 意味着一种细粉状物质，通常为黄色，由花的雄性部分或雄性球果释放的微小颗粒组成。" + 
            "<br><br>" + 
            "(C) '叶子' 意味着植物生长在其枝干上的扁平、薄而绿色的部分。" + 
            "<br><br>" + 
            "(D) '根' 意味着植物的部分，它将植物固定在地面或支撑物上，通常在地下，通过众多的分枝和纤维向植物的其他部分输送水分和营养。"
    },
    {
        id: 3,
        question: "The __________ used fear and manipulation to gain support from the people, promising solutions he could never deliver.",
        chinese_question: "这位 __________ 利用恐惧和操纵来赢得人民的支持，承诺他永远无法兑现的解决方案。",
        answers: [
            { option: "A", answer: "philanthropist", chinese_answer: "慈善家", chinese_romanization: "císhàn jiā" },
            { option: "B", answer: "demagogue", chinese_answer: "煽动者", chinese_romanization: "shāndòng zhě" },
            { option: "C", answer: "diplomat", chinese_answer: "外交官", chinese_romanization: "wàijiāo guān" },
            { option: "D", answer: "scholar", chinese_answer: "学者", chinese_romanization: "xuézhě" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'demagogue' means a political leader who seeks support by appealing to the desires and prejudices of ordinary people rather than by using rational argument." +
            "<br><br>" +
            "(A) 'philanthropist' means a person who seeks to promote the welfare of others, especially by the generous donation of money to good causes." +
            "<br><br>" +
            "(C) 'diplomat' means an official representing a country abroad." +
            "<br><br>" +
            "(D) 'scholar' means a specialist in a particular branch of study, especially the humanities; a distinguished academic.",
        chinese_explanation: "(B) '煽动者' 一词意味着通过迎合普通人的愿望和偏见而不是使用理性论据来寻求支持的政治领袖。" +
            "<br><br>" +
            "(A) '慈善家' 意味着一个寻求促进他人福利的人，特别是通过慷慨捐赠钱财给好的事业。" +
            "<br><br>" +
            "(C) '外交官' 意味着代表国家在国外的官员。" +
            "<br><br>" +
            "(D) '学者' 意味着在特定研究领域（特别是人文学科）有专长的人；杰出的学术人员。"
    },
    {
        id: 4,
        question: "The drought was a severe __________ for the farmers, leading to crop failures and financial losses.",
        chinese_question: "干旱对农民来说是一个严重的 __________，导致作物歉收和经济损失。",
        answers: [
            { option: "A", answer: "blessing", chinese_answer: "祝福", chinese_romanization: "zhùfú" },
            { option: "B", answer: "benefit", chinese_answer: "利益", chinese_romanization: "lìyì" },
            { option: "C", answer: "affliction", chinese_answer: "苦难", chinese_romanization: "kǔnàn" },
            { option: "D", answer: "advantage", chinese_answer: "优势", chinese_romanization: "yōushì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'affliction' means something that causes pain or suffering." +
            "<br><br>" +
            "(A) 'blessing' means a beneficial thing for which one is grateful; something that brings well-being." +
            "<br><br>" +
            "(B) 'benefit' means an advantage or profit gained from something." +
            "<br><br>" +
            "(D) 'advantage' means a condition or circumstance that puts one in a favorable or superior position.",
        chinese_explanation: "(C) '苦难' 一词意味着造成痛苦或痛苦的事物。" +
            "<br><br>" +
            "(A) '祝福' 意味着让人感激的有益事物；带来福祉的事物。" +
            "<br><br>" +
            "(B) '利益' 意味着从某事中获得的优势或利润。" +
            "<br><br>" +
            "(D) '优势' 意味着使某人处于有利或优越位置的条件或环境。"
    },
    {
        id: 5,
        question: "The small __________ on the insect's body served as an extra limb, helping it to balance while walking.",
        chinese_question: "昆虫身体上的小 __________ 作为额外的肢体，帮助它在行走时保持平衡。",
        answers: [
            { option: "A", answer: "core", chinese_answer: "核心", chinese_romanization: "héxīn" },
            { option: "B", answer: "appendage", chinese_answer: "附属物", chinese_romanization: "fùshǔ wù" },
            { option: "C", answer: "essence", chinese_answer: "本质", chinese_romanization: "běnzhí" },
            { option: "D", answer: "nucleus", chinese_answer: "核", chinese_romanization: "hé" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'appendage' means a thing that is added or attached to something larger or more important." +
            "<br><br>" +
            "(A) 'core' means the central or most important part of something." +
            "<br><br>" +
            "(C) 'essence' means the intrinsic nature or indispensable quality of something that determines its character." +
            "<br><br>" +
            "(D) 'nucleus' means the central and most important part of an object, movement, or group, forming the basis for its activity and growth.",
        chinese_explanation: "(B) '附属物' 一词意味着附加或附属到某个更大或更重要的事物的东西。" +
            "<br><br>" +
            "(A) '核心' 意味着某事物的中心或最重要的部分。" +
            "<br><br>" +
            "(C) '本质' 意味着决定某物特性的内在本性或不可或缺的质量。" +
            "<br><br>" +
            "(D) '核' 意味着物体、运动或群体的中心和最重要的部分，构成其活动和成长的基础。"
    },
    {
        id: 6,
        question: "The __________ between the two players on the field escalated quickly, resulting in both being ejected from the game.",
        chinese_question: "场上两名球员的 __________ 迅速升级，导致两人都被逐出比赛。",
        answers: [
            { option: "A", answer: "agreement", chinese_answer: "协议", chinese_romanization: "xiéyì" },
            { option: "B", answer: "discussion", chinese_answer: "讨论", chinese_romanization: "tǎolùn" },
            { option: "C", answer: "altercation", chinese_answer: "争吵", chinese_romanization: "zhēngchǎo" },
            { option: "D", answer: "collaboration", chinese_answer: "合作", chinese_romanization: "hézuò" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'altercation' means a noisy argument or disagreement, especially in public." +
            "<br><br>" +
            "(A) 'agreement' means harmony or accordance in opinion or feeling." +
            "<br><br>" +
            "(B) 'discussion' means the action or process of talking about something in order to reach a decision or to exchange ideas." +
            "<br><br>" +
            "(D) 'collaboration' means the action of working with someone to produce or create something.",
        chinese_explanation: "(C) '争吵' 一词意味着吵闹的争论或争执，尤其是在公共场合。" +
            "<br><br>" +
            "(A) '协议' 意味着在意见或感情上的和谐或一致。" +
            "<br><br>" +
            "(B) '讨论' 意味着为了达成决议或交换意见而谈论某事的行为或过程。" +
            "<br><br>" +
            "(D) '合作' 意味着与某人合作以生产或创造某物的行为。"
    },
    {
        id: 7,
        question: "The new movie has a broad __________, attracting audiences of all ages.",
        chinese_question: "这部新电影具有广泛的__________，吸引了各个年龄段的观众。",
        answers: [
            { option: "A", answer: "refusal", chinese_answer: "拒绝", chinese_romanization: "jùjué" },
            { option: "B", answer: "appeal", chinese_answer: "吸引力", chinese_romanization: "xīyǐnlì" },
            { option: "C", answer: "command", chinese_answer: "命令", chinese_romanization: "mìnglìng" },
            { option: "D", answer: "denial", chinese_answer: "否认", chinese_romanization: "fǒurèn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'appeal' means a serious or urgent request, typically one made to the public. Figuratively, it can mean being attractive or interesting to a wide audience." +
            "<br><br>" +
            "(A) 'refusal' means an act of refusing to do something." +
            "<br><br>" +
            "(C) 'command' means an authoritative order." +
            "<br><br>" +
            "(D) 'denial' means the action of declaring something to be untrue.",
        chinese_explanation: "(B) '吸引力'一词意味着一个严肃或紧急的请求，通常是向公众发出的。比喻地，它可以表示对广泛观众有吸引力或有趣的。" +
            "<br><br>" +
            "(A) '拒绝' 意味着拒绝做某事的行为。" +
            "<br><br>" +
            "(C) '命令' 意味着权威的命令。" +
            "<br><br>" +
            "(D) '否认' 意味着宣称某事不真实的行为。"
    },
    {
        id: 8,
        question: "The humorous __________, where the speaker said 'you have hissed all my mystery lectures' instead of 'you have missed all my history lectures,' caused much laughter.",
        chinese_question: "幽默的 __________，讲者说“你错过了我所有的神秘讲座”而不是“你错过了我所有的历史讲座”，引起了大家的笑声。",
        answers: [
            { option: "A", answer: "metaphor", chinese_answer: "隐喻", chinese_romanization: "yǐnyù" },
            { option: "B", answer: "pun", chinese_answer: "双关语", chinese_romanization: "shuāngguān yǔ" },
            { option: "C", answer: "spoonerism", chinese_answer: "文字错误", chinese_romanization: "wénzì cuòwù" },
            { option: "D", answer: "hyperbole", chinese_answer: "夸张", chinese_romanization: "kuāzhāng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'spoonerism' means a verbal error in which a speaker accidentally transposes the initial sounds or letters of two or more words." +
            "<br><br>" +
            "(A) 'metaphor' means a figure of speech in which a word or phrase is applied to an object or action to which it is not literally applicable." +
            "<br><br>" +
            "(B) 'pun' means a joke exploiting the different possible meanings of a word or the fact that there are words which sound alike but have different meanings." +
            "<br><br>" +
            "(D) 'hyperbole' means exaggerated statements or claims not meant to be taken literally.",
        chinese_explanation: "(C) '文字错误' 一词意味着讲者不小心调换了两个或多个单词的首音或字母的口误。" +
            "<br><br>" +
            "(A) '隐喻' 意味着将一个词或短语应用于一个对象或动作，而不是字面上适用的修辞手法。" +
            "<br><br>" +
            "(B) '双关语' 意味着利用单词的不同可能含义或听起来相似但意义不同的单词的笑话。" +
            "<br><br>" +
            "(D) '夸张' 意味着不应被字面接受的夸大陈述或主张。"
    },
    {
        id: 9,
        question: "The process of __________, like learning the language and customs of the new country, helped immigrants adapt to their new culture while preserving their own traditions.",
        chinese_question: "__________ 的过程，包括学习新国家的语言和习俗，帮助移民适应新文化，同时保留自己的传统。",
        answers: [
            { option: "A", answer: "segregation", chinese_answer: "隔离", chinese_romanization: "gélí" },
            { option: "B", answer: "isolation", chinese_answer: "孤立", chinese_romanization: "gūlì" },
            { option: "C", answer: "assimilation", chinese_answer: "同化", chinese_romanization: "tónghuà" },
            { option: "D", answer: "exclusion", chinese_answer: "排斥", chinese_romanization: "páichì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'assimilation' means the process of taking in and fully understanding information or ideas." +
            "<br><br>" +
            "(A) 'segregation' means the action or state of setting someone or something apart from others." +
            "<br><br>" +
            "(B) 'isolation' means the process or fact of isolating or being isolated." +
            "<br><br>" +
            "(D) 'exclusion' means the process or state of excluding or being excluded.",
        chinese_explanation: "(C) '同化' 一词意味着完全理解和接受信息或想法的过程。" +
            "<br><br>" +
            "(A) '隔离' 意味着将某人或某物与其他人分开的行为或状态。" +
            "<br><br>" +
            "(B) '孤立' 意味着孤立或被孤立的过程或事实。" +
            "<br><br>" +
            "(D) '排斥' 意味着排除或被排除的过程或状态。"
    },
    {
        id: 10,
        question: "The writer coined a __________, such as 'frindle', that quickly became popular and was added to the dictionary.",
        chinese_question: "这位作家创造了一个像'frindle'一样很快变得流行并被收录进词典的 __________。",
        answers: [
            { option: "A", answer: "cliché", chinese_answer: "陈词滥调", chinese_romanization: "chéncí làndiào" },
            { option: "B", answer: "proverb", chinese_answer: "谚语", chinese_romanization: "yànyǔ" },
            { option: "C", answer: "neologism", chinese_answer: "新词", chinese_romanization: "xīncí" },
            { option: "D", answer: "adage", chinese_answer: "格言", chinese_romanization: "géyán" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'neologism' means a newly coined word or expression." +
            "<br><br>" +
            "(A) 'cliché' means a phrase or opinion that is overused and betrays a lack of original thought." +
            "<br><br>" +
            "(B) 'proverb' means a short, well-known pithy saying, stating a general truth or piece of advice." +
            "<br><br>" +
            "(D) 'adage' means a proverb or short statement expressing a general truth.",
        chinese_explanation: "(C) '新词' 一词意味着一个新创造的词语或表达。" +
            "<br><br>" +
            "(A) '陈词滥调' 意味着过度使用的短语或观点，缺乏原创思想。" +
            "<br><br>" +
            "(B) '谚语' 意味着简短、著名的精辟语句，陈述一般真理或建议。" +
            "<br><br>" +
            "(D) '格言' 意味着表达一般真理的谚语或简短陈述。"
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
