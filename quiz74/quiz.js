// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The senator faced __________ from both his colleagues and the public for his controversial statements, with many calling for his resignation and others openly criticizing his views.",
        chinese_question: "这位参议员因其有争议的言论而受到同事和公众的 __________，许多人要求他辞职，其他人公开批评他的观点。",
        answers: [
            { option: "A", answer: "praise", chinese_answer: "赞扬", chinese_romanization: "zànyáng" },
            { option: "B", answer: "censure", chinese_answer: "谴责", chinese_romanization: "qiǎnzé" },
            { option: "C", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" },
            { option: "D", answer: "approval", chinese_answer: "批准", chinese_romanization: "pīzhǔn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'censure' means express severe disapproval of (someone or something), especially in a formal statement." +
            "<br><br>" +
            "(A) 'praise' means express warm approval or admiration of." +
            "<br><br>" +
            "(C) 'support' means bear all or part of the weight of; hold up." +
            "<br><br>" +
            "(D) 'approval' means the action of officially agreeing to something or accepting something as satisfactory.",
        chinese_explanation: "(B) '谴责' 一词意味着特别是在正式声明中表示强烈反对（某人或某事）。" +
            "<br><br>" +
            "(A) '赞扬' 意味着表达热情的认可或钦佩。" +
            "<br><br>" +
            "(C) '支持' 意味着承受全部或部分重量；支撑。" +
            "<br><br>" +
            "(D) '批准' 意味着正式同意某事或接受某事为令人满意的行为。"
    },
    {
        id: 2,
        question: "The novel was written in the __________ of the region, making it accessible and relatable to local readers.",
        chinese_question: "这部小说用该地区的 __________ 写成，使当地读者容易理解和产生共鸣。",
        answers: [
            { option: "A", answer: "formal language", chinese_answer: "正式语言", chinese_romanization: "zhèngshì yǔyán" },
            { option: "B", answer: "vernacular", chinese_answer: "方言", chinese_romanization: "fāngyán" },
            { option: "C", answer: "jargon", chinese_answer: "行话", chinese_romanization: "hánghuà" },
            { option: "D", answer: "dialect", chinese_answer: "土话", chinese_romanization: "tǔhuà" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'vernacular' means the language or dialect spoken by the ordinary people in a particular country or region." +
            "<br><br>" +
            "(A) 'formal language' means language that is characterized by more elaborate grammatical structures and a more conservative lexicon." +
            "<br><br>" +
            "(C) 'jargon' means special words or expressions used by a profession or group that are difficult for others to understand." +
            "<br><br>" +
            "(D) 'dialect' means a particular form of a language which is peculiar to a specific region or social group.",
        chinese_explanation: "(B) '方言' 一词意味着特定国家或地区的普通人所说的语言或方言。" +
            "<br><br>" +
            "(A) '正式语言' 意味着以更复杂的语法结构和更保守的词汇为特征的语言。" +
            "<br><br>" +
            "(C) '行话' 意味着某个职业或群体使用的特别词汇或表达，其他人难以理解。" +
            "<br><br>" +
            "(D) '土话' 意味着某种语言的特定形式，特定于某个地区或社会群体。"
    },
    {
        id: 3,
        question: "The board of directors served as the company's __________, guiding its strategic decisions and policies.",
        chinese_question: "董事会担任公司的 __________，指导其战略决策和政策。",
        answers: [
            { option: "A", answer: "critic", chinese_answer: "批评者", chinese_romanization: "pīpíng zhě" },
            { option: "B", answer: "obstacle", chinese_answer: "障碍", chinese_romanization: "zhàng'ài" },
            { option: "C", answer: "council", chinese_answer: "顾问团", chinese_romanization: "gùwèn tuán" },
            { option: "D", answer: "hindrance", chinese_answer: "阻碍", chinese_romanization: "zǔ'ài" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'council' figuratively means a group of people who provide advice or make decisions." +
            "<br><br>" +
            "(A) 'critic' means a person who expresses an unfavorable opinion of something." +
            "<br><br>" +
            "(B) 'obstacle' means a thing that blocks one's way or prevents or hinders progress." +
            "<br><br>" +
            "(D) 'hindrance' means a thing that provides resistance, delay, or obstruction to something or someone.",
        chinese_explanation: "(C) '顾问团' 在比喻意义上意味着提供建议或做出决定的一群人。" +
            "<br><br>" +
            "(A) '批评者' 意味着对某事表达不利意见的人。" +
            "<br><br>" +
            "(B) '障碍' 意味着挡住道路或防止或阻碍进展的事物。" +
            "<br><br>" +
            "(D) '阻碍' 意味着对某事或某人提供阻力、延迟或障碍的事物。"
    },
    {
        id: 4,
        question: "The company was on the __________ of bankruptcy, needing immediate intervention to survive.",
        chinese_question: "公司处于破产的 __________，需要立即干预才能生存。",
        answers: [
            { option: "A", answer: "brink", chinese_answer: "边缘", chinese_romanization: "biānyuán" },
            { option: "B", answer: "top", chinese_answer: "顶部", chinese_romanization: "dǐngbù" },
            { option: "C", answer: "precipice", chinese_answer: "悬崖", chinese_romanization: "xuányá" },
            { option: "D", answer: "pinnacle", chinese_answer: "顶峰", chinese_romanization: "dǐngfēng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'precipice' figuratively means a very dangerous situation that could lead to disaster." +
            "<br><br>" +
            "(A) 'brink' means an extreme edge of land before a steep or vertical slope." +
            "<br><br>" +
            "(B) 'top' means the highest or uppermost point, part, or surface of something." +
            "<br><br>" +
            "(D) 'pinnacle' means the most successful point; the culmination.",
        chinese_explanation: "(C) '悬崖' 在比喻意义上意味着一种非常危险的情况，可能导致灾难。" +
            "<br><br>" +
            "(A) '边缘' 意味着陡坡前的极端边缘。" +
            "<br><br>" +
            "(B) '顶部' 意味着某物的最高或最上面部分。" +
            "<br><br>" +
            "(D) '顶峰' 意味着最成功的点；高潮。"
    },
    {
        id: 5,
        question: "Breaking with __________, she decided to travel alone for the holidays, instead of spending them with her family as she had always done before.",
        chinese_question: "打破 __________，她决定在假期独自旅行，而不是像以前那样与家人一起度过。",
        answers: [
            { option: "A", answer: "tradition", chinese_answer: "传统", chinese_romanization: "chuántǒng" },
            { option: "B", answer: "spontaneity", chinese_answer: "自发性", chinese_romanization: "zìfāxìng" },
            { option: "C", answer: "novelty", chinese_answer: "新奇", chinese_romanization: "xīnqí" },
            { option: "D", answer: "innovation", chinese_answer: "创新", chinese_romanization: "chuàngxīn" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'tradition' metaphorically means long-established customs or beliefs passed from generation to generation." +
            "<br><br>" +
            "(B) 'spontaneity' means the quality of being spontaneous and acting on impulse." +
            "<br><br>" +
            "(C) 'novelty' means the quality of being new, original, or unusual." +
            "<br><br>" +
            "(D) 'innovation' means the action or process of innovating; introducing new ideas or methods.",
        chinese_explanation: "(A) '传统' 比喻代代相传的长期确立的习俗或信仰。" +
            "<br><br>" +
            "(B) '自发性' 意味着自发和冲动行事的特质。" +
            "<br><br>" +
            "(C) '新奇' 意味着新的、原创的或不寻常的性质。" +
            "<br><br>" +
            "(D) '创新' 意味着创新的行动或过程；引入新的想法或方法。"
    },
    {
        id: 6,
        question: "She felt her life had reached its __________ when she achieved her lifelong dream of climbing Mount Everest.",
        chinese_question: "当她实现了攀登珠穆朗玛峰的终生梦想时，她觉得自己的人生达到了 __________。",
        answers: [
            { option: "A", answer: "beginning", chinese_answer: "开始", chinese_romanization: "kāishǐ" },
            { option: "B", answer: "climax", chinese_answer: "高潮", chinese_romanization: "gāocháo" },
            { option: "C", answer: "prologue", chinese_answer: "序言", chinese_romanization: "xùyán" },
            { option: "D", answer: "epilogue", chinese_answer: "尾声", chinese_romanization: "wěishēng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'climax' means the most intense, exciting, or important point of something. Figuratively, it can mean the peak or turning point in a situation." +
            "<br><br>" +
            "(A) 'beginning' means the point in time or space at which something starts." +
            "<br><br>" +
            "(C) 'prologue' means a separate introductory section of a literary or musical work." +
            "<br><br>" +
            "(D) 'epilogue' means a section or speech at the end of a book or play that serves as a comment on or a conclusion to what has happened.",
        chinese_explanation: "(B) '高潮'一词意味着某事最激烈、最激动或最重要的时刻。比喻地，它可以表示情境中的顶点或转折点。" +
            "<br><br>" +
            "(A) '开始' 意味着某事在时间或空间上的起点。" +
            "<br><br>" +
            "(C) '序言' 意味着文学或音乐作品的独立引言部分。" +
            "<br><br>" +
            "(D) '尾声' 意味着书籍或戏剧结尾的一部分或讲话，作为对已发生事情的评论或结论。"
    },
    {
        id: 7,
        question: "His job had become a mindless __________, with every day blending into the next.",
        chinese_question: "他的工作变成了一种无意识的 __________，每天都在重复。",
        answers: [
            { option: "A", answer: "drone", chinese_answer: "单调的例行公事", chinese_romanization: "dāndiào de lìxíng gōngshì" },
            { option: "B", answer: "challenge", chinese_answer: "挑战", chinese_romanization: "tiǎozhàn" },
            { option: "C", answer: "adventure", chinese_answer: "冒险", chinese_romanization: "màoxiǎn" },
            { option: "D", answer: "excitement", chinese_answer: "兴奋", chinese_romanization: "xīngfèn" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'drone' metaphorically means a dull, monotonous routine." + 
            "<br><br>" + 
            "(B) 'challenge' means a task or situation that tests someone's abilities." + 
            "<br><br>" + 
            "(C) 'adventure' means an unusual and exciting, typically hazardous, experience or activity." + 
            "<br><br>" + 
            "(D) 'excitement' means a feeling of great enthusiasm and eagerness.",
        chinese_explanation: "(A) '单调的例行公事' 比喻枯燥、单调的例行公事。" + 
            "<br><br>" + 
            "(B) '挑战' 意味着测试某人能力的任务或情况。" + 
            "<br><br>" + 
            "(C) '冒险' 意味着一种不寻常和令人兴奋的，通常是危险的经历或活动。" + 
            "<br><br>" + 
            "(D) '兴奋' 意味着极大的热情和渴望的感觉。"
    },
    {
        id: 8,
        question: "During the heated debate, the moderator had to intervene to stop the flow of __________ between the two candidates.",
        chinese_question: "在激烈的辩论中，主持人不得不干预以阻止两位候选人之间的__________。",
        answers: [
            { option: "A", answer: "kindness", chinese_answer: "善意", chinese_romanization: "shànyì" },
            { option: "B", answer: "courtesy", chinese_answer: "礼貌", chinese_romanization: "lǐmào" },
            { option: "C", answer: "praise", chinese_answer: "赞美", chinese_romanization: "zànměi" },
            { option: "D", answer: "invective", chinese_answer: "谩骂", chinese_romanization: "mà" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'invective' refers to insulting, abusive, or highly critical language." +
            "<br><br>" +
            "(A) 'kindness' refers to the quality of being friendly, generous, and considerate." +
            "<br><br>" +
            "(B) 'courtesy' refers to the showing of politeness in one's attitude and behavior toward others." +
            "<br><br>" +
            "(C) 'praise' refers to the expression of approval or admiration for someone or something.",
        chinese_explanation: "(D) '谩骂' 指的是侮辱性、辱骂性或高度批评性的语言。" +
            "<br><br>" +
            "(A) '善意' 指的是友好、慷慨和体贴的品质。" +
            "<br><br>" +
            "(B) '礼貌' 指的是在态度和行为上对他人表示礼貌。" +
            "<br><br>" +
            "(C) '赞美' 指的是对某人或某事物表示认可或钦佩。"
    },
    {
        id: 9,
        question: "The author's __________ was evident in his use of long, complicated words that added little to the clarity of his writing.",
        chinese_question: "作者的 __________ 在他使用冗长复杂的词汇中显而易见，这些词汇对文章的清晰度没有什么帮助。",
        answers: [
            { option: "A", answer: "simplicity", chinese_answer: "简单", chinese_romanization: "jiǎndān" },
            { option: "B", answer: "grandiloquence", chinese_answer: "夸张", chinese_romanization: "kuāzhāng" },
            { option: "C", answer: "modesty", chinese_answer: "谦逊", chinese_romanization: "qiānxùn" },
            { option: "D", answer: "plainness", chinese_answer: "朴素", chinese_romanization: "pǔsù" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'grandiloquence' means pompous or extravagant in language, style, or manner, especially in a way that is intended to impress." +
            "<br><br>" +
            "(A) 'simplicity' means the quality or condition of being easy to understand or do." +
            "<br><br>" +
            "(C) 'modesty' means the quality or state of being unassuming in the estimation of one's abilities." +
            "<br><br>" +
            "(D) 'plainness' means the quality of being clear and straightforward.",
        chinese_explanation: "(B) '夸张' 一词意味着语言、风格或方式上的浮夸或奢华，尤其是为了给人留下深刻印象。" +
            "<br><br>" +
            "(A) '简单' 意味着容易理解或做的质量或状态。" +
            "<br><br>" +
            "(C) '谦逊' 意味着对自己能力的评价不做假设的品质或状态。" +
            "<br><br>" +
            "(D) '朴素' 意味着清晰和直截了当的质量。"
    },
    {
        id: 10,
        question: "The doctor's expertise in __________ made him the best choice for treating elderly patients with complex health issues.",
        chinese_question: "这位医生在 __________ 方面的专业知识使他成为治疗老年复杂健康问题的最佳选择。",
        answers: [
            { option: "A", answer: "pediatrics", chinese_answer: "儿科", chinese_romanization: "érkē" },
            { option: "B", answer: "geriatrics", chinese_answer: "老年医学", chinese_romanization: "lǎonián yīxué" },
            { option: "C", answer: "cardiology", chinese_answer: "心脏病学", chinese_romanization: "xīnzàng bìng xué" },
            { option: "D", answer: "dermatology", chinese_answer: "皮肤病学", chinese_romanization: "pífū bìng xué" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'geriatrics' means the branch of medicine or social science dealing with the health and care of old people." +
            "<br><br>" +
            "(A) 'pediatrics' means the branch of medicine dealing with children and their diseases." +
            "<br><br>" +
            "(C) 'cardiology' means the branch of medicine that deals with diseases and abnormalities of the heart." +
            "<br><br>" +
            "(D) 'dermatology' means the branch of medicine concerned with the diagnosis and treatment of skin disorders.",
        chinese_explanation: "(B) '老年医学' 一词意味着处理老年人健康和护理的医学或社会科学分支。" +
            "<br><br>" +
            "(A) '儿科' 意味着处理儿童及其疾病的医学分支。" +
            "<br><br>" +
            "(C) '心脏病学' 意味着处理心脏疾病和异常的医学分支。" +
            "<br><br>" +
            "(D) '皮肤病学' 意味着诊断和治疗皮肤疾病的医学分支。"
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
