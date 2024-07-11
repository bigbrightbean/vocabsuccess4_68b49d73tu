// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "His __________ comments about her work were not only unfair but also hurtful, undermining her confidence.",
        chinese_question: "他对她工作的 __________ 评论不仅不公平，而且伤人，削弱了她的信心。",
        answers: [
            { option: "A", answer: "complimentary", chinese_answer: "称赞", chinese_romanization: "chēngzàn" },
            { option: "B", answer: "derogatory", chinese_answer: "贬低", chinese_romanization: "biǎndī" },
            { option: "C", answer: "neutral", chinese_answer: "中立", chinese_romanization: "zhōnglì" },
            { option: "D", answer: "approving", chinese_answer: "赞成", chinese_romanization: "zànchéng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'derogatory' means showing a critical or disrespectful attitude." +
            "<br><br>" +
            "(A) 'complimentary' means expressing a compliment; praising or approving." +
            "<br><br>" +
            "(C) 'neutral' means not supporting or helping either side in a conflict." +
            "<br><br>" +
            "(D) 'approving' means showing or feeling approval of someone or something.",
        chinese_explanation: "(B) '贬低' 一词意味着表现出批评或不尊重的态度。" +
            "<br><br>" +
            "(A) '称赞' 意味着表达赞美；赞扬或赞成。" +
            "<br><br>" +
            "(C) '中立' 意味着不支持或帮助冲突中的任何一方。" +
            "<br><br>" +
            "(D) '赞成' 意味着表现出或感到赞同某人或某事。"
    },
    {
        id: 2,
        question: "The normally peaceful dog became __________ when a stranger approached the house, barking loudly and baring its teeth.",
        chinese_question: "通常温和的狗在陌生人接近房子时变得 __________，大声吠叫并露出牙齿。",
        answers: [
            { option: "A", answer: "friendly", chinese_answer: "友好", chinese_romanization: "yǒuhǎo" },
            { option: "B", answer: "calm", chinese_answer: "冷静", chinese_romanization: "lěngjìng" },
            { option: "C", answer: "belligerent", chinese_answer: "好斗", chinese_romanization: "hàodòu" },
            { option: "D", answer: "timid", chinese_answer: "胆小", chinese_romanization: "dǎnxiǎo" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'belligerent' means hostile and aggressive." +
            "<br><br>" +
            "(A) 'friendly' means kind and pleasant." +
            "<br><br>" +
            "(B) 'calm' means not showing or feeling nervousness, anger, or other strong emotions." +
            "<br><br>" +
            "(D) 'timid' means showing a lack of courage or confidence; easily frightened.",
        chinese_explanation: "(C) '好斗' 一词意味着敌对和具有攻击性。" +
            "<br><br>" +
            "(A) '友好' 意味着善良和愉快。" +
            "<br><br>" +
            "(B) '冷静' 意味着不表现或感到紧张、愤怒或其他强烈情绪。" +
            "<br><br>" +
            "(D) '胆小' 意味着表现出缺乏勇气或信心；容易受惊。"
    },
    {
        id: 3,
        question: "The band played a __________ mix of sounds, making it difficult for the audience to enjoy the performance.",
        chinese_question: "乐队演奏了一种 __________ 的混合声音，让观众很难享受表演。",
        answers: [
            { option: "A", answer: "cacophonous", chinese_answer: "刺耳", chinese_romanization: "cì'ěr" },
            { option: "B", answer: "melodious", chinese_answer: "悦耳", chinese_romanization: "yuè'ěr" },
            { option: "C", answer: "harmonious", chinese_answer: "和谐", chinese_romanization: "héxié" },
            { option: "D", answer: "quiet", chinese_answer: "安静", chinese_romanization: "ānjìng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'cacophonous' means involving or producing a harsh, discordant mixture of sounds." +
            "<br><br>" +
            "(B) 'melodious' means of, producing, or having a pleasant tune; tuneful." +
            "<br><br>" +
            "(C) 'harmonious' means forming a pleasing or consistent whole." +
            "<br><br>" +
            "(D) 'quiet' means making little or no noise.",
        chinese_explanation: "(A) '刺耳' 一词意味着涉及或产生刺耳、不和谐的声音混合。" +
            "<br><br>" +
            "(B) '悦耳' 意味着有、产生或有悦耳的曲调；和谐的。" +
            "<br><br>" +
            "(C) '和谐' 意味着形成令人愉快或一致的整体。" +
            "<br><br>" +
            "(D) '安静' 意味着发出很少或没有声音。"
    },
    {
        id: 4,
        question: "The training program was __________, demanding both physical endurance and mental toughness from the participants.",
        chinese_question: "这个训练项目非常 __________，要求参与者具备身体耐力和心理坚韧性。",
        answers: [
            { option: "A", answer: "easy", chinese_answer: "简单的", chinese_romanization: "jiǎndān de" },
            { option: "B", answer: "relaxed", chinese_answer: "放松的", chinese_romanization: "fàngsōng de" },
            { option: "C", answer: "rigorous", chinese_answer: "严格的", chinese_romanization: "yángé de" },
            { option: "D", answer: "lenient", chinese_answer: "宽松的", chinese_romanization: "kuānsōng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'rigorous' means extremely thorough, exhaustive, or accurate." +
            "<br><br>" +
            "(A) 'easy' means achieved without great effort; presenting few difficulties." +
            "<br><br>" +
            "(B) 'relaxed' means free from tension and anxiety; at ease." +
            "<br><br>" +
            "(D) 'lenient' means (of punishment or a person in authority) more merciful or tolerant than expected.",
        chinese_explanation: "(C) '严格的' 意味着非常彻底、详尽或准确的。" +
            "<br><br>" +
            "(A) '简单的' 意味着无需很大努力即可实现的；呈现很少困难的。" +
            "<br><br>" +
            "(B) '放松的' 意味着没有紧张和焦虑的；轻松的。" +
            "<br><br>" +
            "(D) '宽松的' 意味着（处罚或有权威的人）比预期更仁慈或宽容的。"
    },
    {
        id: 5,
        question: "The mountain trail became __________ after the storm, with slippery rocks and hidden dangers at every turn.",
        chinese_question: "暴风雨过后，山路变得 __________，每一个转弯处都有滑溜的岩石和隐藏的危险。",
        answers: [
            { option: "A", answer: "safe", chinese_answer: "安全的", chinese_romanization: "ānquán de" },
            { option: "B", answer: "secure", chinese_answer: "稳固的", chinese_romanization: "wěngù de" },
            { option: "C", answer: "treacherous", chinese_answer: "危险的", chinese_romanization: "wēixiǎn de" },
            { option: "D", answer: "reliable", chinese_answer: "可靠的", chinese_romanization: "kěkào de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'treacherous' means hazardous because of presenting hidden or unpredictable dangers." +
            "<br><br>" +
            "(A) 'safe' means protected from or not exposed to danger or risk; not likely to be harmed or lost." +
            "<br><br>" +
            "(B) 'secure' means fixed or fastened so as not to give way, become loose, or be lost." +
            "<br><br>" +
            "(D) 'reliable' means consistently good in quality or performance; able to be trusted.",
        chinese_explanation: "(C) '危险的' 意味着因为存在隐藏或不可预测的危险而危险的。" +
            "<br><br>" +
            "(A) '安全的' 意味着受到保护或未暴露于危险或风险；不太可能受到伤害或丢失。" +
            "<br><br>" +
            "(B) '稳固的' 意味着固定或固定好，以免给人留下印象、变松或丢失。" +
            "<br><br>" +
            "(D) '可靠的' 意味着在质量或性能上始终如一地良好；值得信赖的。"
    },
    {
        id: 6,
        question: "When asked about his involvement in the project, he appeared __________ and unsure of how to respond.",
        chinese_question: "当被问及他在项目中的参与情况时，他显得 __________，不知道该如何回答。",
        answers: [
            { option: "A", answer: "confident", chinese_answer: "自信的", chinese_romanization: "zìxìn de" },
            { option: "B", answer: "nonplussed", chinese_answer: "困惑的", chinese_romanization: "kùnhuò de" },
            { option: "C", answer: "certain", chinese_answer: "确定的", chinese_romanization: "quèdìng de" },
            { option: "D", answer: "composed", chinese_answer: "镇静的", chinese_romanization: "zhènjìng de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'nonplussed' means surprised and confused so much that they are unsure how to react." +
            "<br><br>" +
            "(A) 'confident' means feeling or showing confidence in oneself; self-assured." +
            "<br><br>" +
            "(C) 'certain' means able to be firmly relied on to happen or be the case." +
            "<br><br>" +
            "(D) 'composed' means having one's feelings and expression under control; calm.",
        chinese_explanation: "(B) '困惑的' 一词意味着惊讶和困惑，以至于不确定如何反应。" +
            "<br><br>" +
            "(A) '自信的' 意味着对自己有信心的；自信的。" +
            "<br><br>" +
            "(C) '确定的' 意味着能够被坚定地依赖发生或是这种情况的。" +
            "<br><br>" +
            "(D) '镇静的' 意味着控制自己的情绪和表情；冷静的。"
    },
    {
        id: 7,
        question: "The company was __________, barely able to keep up with its expenses and on the brink of bankruptcy.",
        chinese_question: "公司处于 __________ 状态，几乎无法跟上开支，濒临破产。",
        answers: [
            { option: "A", answer: "thriving", chinese_answer: "繁荣", chinese_romanization: "fánróng" },
            { option: "B", answer: "flourishing", chinese_answer: "兴旺", chinese_romanization: "xīngwàng" },
            { option: "C", answer: "moribund", chinese_answer: "垂死", chinese_romanization: "chuísǐ" },
            { option: "D", answer: "prosperous", chinese_answer: "富裕", chinese_romanization: "fùyù" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'moribund' means at the point of death or in terminal decline; lacking vitality or vigor." +
            "<br><br>" +
            "(A) 'thriving' means prosperous and growing; flourishing." +
            "<br><br>" +
            "(B) 'flourishing' means developing rapidly and successfully; thriving." +
            "<br><br>" +
            "(D) 'prosperous' means successful in material terms; flourishing financially.",
        chinese_explanation: "(C) '垂死' 一词意味着处于死亡边缘或处于终端衰退状态；缺乏活力或活力。" +
            "<br><br>" +
            "(A) '繁荣' 意味着繁荣和成长；兴旺。" +
            "<br><br>" +
            "(B) '兴旺' 意味着迅速和成功地发展；繁荣。" +
            "<br><br>" +
            "(D) '富裕' 意味着物质上成功的；经济上繁荣的。"
    },
    {
        id: 8,
        question: "The billionaire's __________ lifestyle was evident in his mansion, filled with gold-plated furniture and expensive artworks.",
        chinese_question: "这位亿万富翁的 __________ 生活方式在他的豪宅中显而易见，那里满是镀金家具和昂贵的艺术品。",
        answers: [
            { option: "A", answer: "frugal", chinese_answer: "节俭的", chinese_romanization: "jiéjiǎn de" },
            { option: "B", answer: "modest", chinese_answer: "谦虚的", chinese_romanization: "qiānxū de" },
            { option: "C", answer: "lavish", chinese_answer: "奢华的", chinese_romanization: "shēhuá de" },
            { option: "D", answer: "simple", chinese_answer: "简单的", chinese_romanization: "jiǎndān de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'lavish' means sumptuously rich, elaborate, or luxurious." +
            "<br><br>" +
            "(A) 'frugal' means sparing or economical with regard to money or food." +
            "<br><br>" +
            "(B) 'modest' means unassuming or moderate in the estimation of one's abilities or achievements." +
            "<br><br>" +
            "(D) 'simple' means easily understood or done; presenting no difficulty.",
        chinese_explanation: "(C) '奢华的' 一词意味着奢侈的、精心制作的或豪华的。" +
            "<br><br>" +
            "(A) '节俭的' 意味着在金钱或食物方面节俭或经济的。" +
            "<br><br>" +
            "(B) '谦虚的' 意味着在评价自己的能力或成就时不自负或适度的。" +
            "<br><br>" +
            "(D) '简单的' 意味着容易理解或完成的；没有困难的。"
    },
    {
        id: 9,
        question: "The spy's __________ movements made it nearly impossible for the agents to capture him, as he always managed to slip away.",
        chinese_question: "间谍的 __________ 动作让特工们几乎不可能抓住他，因为他总是设法逃脱。",
        answers: [
            { option: "A", answer: "predictable", chinese_answer: "可预测的", chinese_romanization: "kě yùcè de" },
            { option: "B", answer: "elusive", chinese_answer: "难捉摸的", chinese_romanization: "nán zhuōmō de" },
            { option: "C", answer: "obvious", chinese_answer: "明显的", chinese_romanization: "míngxiǎn de" },
            { option: "D", answer: "evident", chinese_answer: "明显的", chinese_romanization: "míngxiǎn de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'elusive' means difficult to find, catch, or achieve." +
            "<br><br>" +
            "(A) 'predictable' means able to be predicted." +
            "<br><br>" +
            "(C) 'obvious' means easily perceived or understood; clear, self-evident, or apparent." +
            "<br><br>" +
            "(D) 'evident' means clearly seen or understood; obvious.",
        chinese_explanation: "(B) '难捉摸的' 一词意味着难以找到、抓住或实现的。" +
            "<br><br>" +
            "(A) '可预测的' 意味着可以预测的。" +
            "<br><br>" +
            "(C) '明显的' 意味着容易感知或理解的；清楚的，不言自明的，显而易见的。" +
            "<br><br>" +
            "(D) '明显的' 意味着清楚地看到或理解的；明显的。"
    },
    {
        id: 10,
        question: "The police uncovered an __________ operation involving illegal drugs and counterfeit money.",
        chinese_question: "警方破获了一起涉及非法毒品和假币的 __________ 活动。",
        answers: [
            { option: "A", answer: "legal", chinese_answer: "合法的", chinese_romanization: "héfǎ de" },
            { option: "B", answer: "official", chinese_answer: "官方的", chinese_romanization: "guānfāng de" },
            { option: "C", answer: "illicit", chinese_answer: "非法的", chinese_romanization: "fēifǎ de" },
            { option: "D", answer: "lawful", chinese_answer: "合法的", chinese_romanization: "héfǎ de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'illicit' means forbidden by law, rules, or custom." +
            "<br><br>" +
            "(A) 'legal' means relating to the law." +
            "<br><br>" +
            "(B) 'official' means relating to an authority or public body and its duties, actions, and responsibilities." +
            "<br><br>" +
            "(D) 'lawful' means conforming to, permitted by, or recognized by law or rules.",
        chinese_explanation: "(C) '非法的' 一词意味着被法律、规则或习俗禁止的。" +
            "<br><br>" +
            "(A) '合法的' 意味着与法律有关的。" +
            "<br><br>" +
            "(B) '官方的' 意味着与权威或公共机构及其职责、行动和责任有关的。" +
            "<br><br>" +
            "(D) '合法的' 意味着符合、被法律或规则允许或承认的。"
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
