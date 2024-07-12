// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The board members were __________ in their decision to approve the new project, with everyone in full agreement.",
        chinese_question: "董事会成员 __________ 地决定批准新项目，所有人都完全同意。",
        answers: [
            { option: "A", answer: "divided", chinese_answer: "分裂的", chinese_romanization: "fēnliè de" },
            { option: "B", answer: "unanimous", chinese_answer: "一致的", chinese_romanization: "yīzhì de" },
            { option: "C", answer: "conflicted", chinese_answer: "矛盾的", chinese_romanization: "máodùn de" },
            { option: "D", answer: "uncertain", chinese_answer: "不确定的", chinese_romanization: "bù quèdìng de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'unanimous' means (of two or more people) fully in agreement." +
            "<br><br>" +
            "(A) 'divided' means separated into parts or pieces." +
            "<br><br>" +
            "(C) 'conflicted' means having or showing confused and mutually inconsistent feelings." +
            "<br><br>" +
            "(D) 'uncertain' means not able to be relied on; not known or definite.",
        chinese_explanation: "(B) '一致的' 意味着（两人或多人）完全同意的。" +
            "<br><br>" +
            "(A) '分裂的' 意味着分成几部分的。" +
            "<br><br>" +
            "(C) '矛盾的' 意味着有或表现出混乱和相互矛盾的感觉。" +
            "<br><br>" +
            "(D) '不确定的' 意味着不能依赖的；未知或不确定的。"
    },
    {
        id: 2,
        question: "The idea that aliens built the pyramids is completely __________ and not supported by any evidence.",
        chinese_question: "外星人建造金字塔的想法完全是 __________ 的，没有任何证据支持。",
        answers: [
            { option: "A", answer: "reasonable", chinese_answer: "合理", chinese_romanization: "hélǐ" },
            { option: "B", answer: "credible", chinese_answer: "可信", chinese_romanization: "kěxìn" },
            { option: "C", answer: "logical", chinese_answer: "合逻辑", chinese_romanization: "hé luójí" },
            { option: "D", answer: "ludicrous", chinese_answer: "荒谬", chinese_romanization: "huāngmiù" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'ludicrous' means so foolish, unreasonable, or out of place as to be amusing." +
            "<br><br>" +
            "(A) 'reasonable' means having sound judgment; fair and sensible." +
            "<br><br>" +
            "(B) 'credible' means able to be believed; convincing." +
            "<br><br>" +
            "(C) 'logical' means of or according to the rules of logic or formal argument.",
        chinese_explanation: "(D) '荒谬' 一词意味着如此愚蠢、不合理或不合时宜，以至于令人发笑。" +
            "<br><br>" +
            "(A) '合理' 意味着有合理的判断；公平和明智的。" +
            "<br><br>" +
            "(B) '可信' 意味着可以相信的；有说服力的。" +
            "<br><br>" +
            "(C) '合逻辑' 意味着根据逻辑或正式论证的规则。"
    },
    {
        id: 3,
        question: "Known for his __________ advice, the elder was often sought after for his wisdom and understanding of difficult matters.",
        chinese_question: "这位长者因其 __________ 的建议而闻名，人们常常寻求他的智慧和对困难事务的理解。",
        answers: [
            { option: "A", answer: "foolish", chinese_answer: "愚蠢的", chinese_romanization: "yúchǔn de" },
            { option: "B", answer: "sagacious", chinese_answer: "睿智的", chinese_romanization: "ruìzhì de" },
            { option: "C", answer: "naive", chinese_answer: "天真的", chinese_romanization: "tiānzhēn de" },
            { option: "D", answer: "uninformed", chinese_answer: "无知的", chinese_romanization: "wúzhī de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'sagacious' means having or showing keen mental discernment and good judgment; shrewd." +
            "<br><br>" +
            "(A) 'foolish' means lacking good sense or judgment; unwise." +
            "<br><br>" +
            "(C) 'naive' means (of a person or action) showing a lack of experience, wisdom, or judgment." +
            "<br><br>" +
            "(D) 'uninformed' means not having or showing awareness or understanding of the facts.",
        chinese_explanation: "(B) '睿智的' 意味着具有或表现出敏锐的精神洞察力和良好的判断力；精明的。" +
            "<br><br>" +
            "(A) '愚蠢的' 意味着缺乏良好的感觉或判断力；不明智的。" +
            "<br><br>" +
            "(C) '天真的' 意味着（人或行为）表现出缺乏经验、智慧或判断力。" +
            "<br><br>" +
            "(D) '无知的' 意味着没有或没有表现出对事实的了解或理解。"
    },
    {
        id: 4,
        question: "His speech was so __________ that many in the audience lost interest before he reached his main point.",
        chinese_question: "他的演讲太 __________ 了，以至于在他到达主题之前，许多观众就失去了兴趣。",
        answers: [
            { option: "A", answer: "concise", chinese_answer: "简明的", chinese_romanization: "jiǎnmíng de" },
            { option: "B", answer: "succinct", chinese_answer: "简洁的", chinese_romanization: "jiǎnjié de" },
            { option: "C", answer: "verbose", chinese_answer: "冗长的", chinese_romanization: "rǒngcháng de" },
            { option: "D", answer: "brief", chinese_answer: "简短的", chinese_romanization: "jiǎnduǎn de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'verbose' means using or expressed in more words than are needed." +
            "<br><br>" +
            "(A) 'concise' means giving a lot of information clearly and in a few words; brief but comprehensive." +
            "<br><br>" +
            "(B) 'succinct' means briefly and clearly expressed." +
            "<br><br>" +
            "(D) 'brief' means of short duration.",
        chinese_explanation: "(C) '冗长的' 意味着使用或表达的词比需要的多。" +
            "<br><br>" +
            "(A) '简明的' 意味着清楚而简短地提供大量信息；简洁但全面的。" +
            "<br><br>" +
            "(B) '简洁的' 意味着简短而清晰地表达。" +
            "<br><br>" +
            "(D) '简短的' 意味着时间短的。"
    },
    {
        id: 5,
        question: "Her __________ personality made her the life of every party, always energetic and full of enthusiasm.",
        chinese_question: "她 __________ 的个性使她成为每个聚会的核心，总是充满活力和热情。",
        answers: [
            { option: "A", answer: "lethargic", chinese_answer: "昏昏欲睡", chinese_romanization: "hūnhūn yùshuì" },
            { option: "B", answer: "somber", chinese_answer: "阴沉", chinese_romanization: "yīnchén" },
            { option: "C", answer: "ebullient", chinese_answer: "热情洋溢", chinese_romanization: "rèqíng yángyì" },
            { option: "D", answer: "subdued", chinese_answer: "克制", chinese_romanization: "kèzhì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'ebullient' means cheerful and full of energy." +
            "<br><br>" +
            "(A) 'lethargic' means affected by lethargy; sluggish and apathetic." +
            "<br><br>" +
            "(B) 'somber' means dark or dull in color or tone; gloomy." +
            "<br><br>" +
            "(D) 'subdued' means quiet and rather reflective or depressed.",
        chinese_explanation: "(C) '热情洋溢' 一词意味着开朗且充满活力。" +
            "<br><br>" +
            "(A) '昏昏欲睡' 意味着受嗜睡影响；迟钝和冷漠。" +
            "<br><br>" +
            "(B) '阴沉' 意味着颜色或色调深暗；阴郁。" +
            "<br><br>" +
            "(D) '克制' 意味着安静且相当反思或沮丧。"
    },
    {
        id: 6,
        question: "An __________ distribution of resources can help bridge the gap between rich and poor communities.",
        chinese_question: "资源的 __________ 分配可以帮助缩小富裕社区和贫困社区之间的差距。",
        answers: [
            { option: "A", answer: "unbalanced", chinese_answer: "不平衡的", chinese_romanization: "bù pínghéng de" },
            { option: "B", answer: "equitable", chinese_answer: "公平的", chinese_romanization: "gōngpíng de" },
            { option: "C", answer: "excessive", chinese_answer: "过度的", chinese_romanization: "guòdù de" },
            { option: "D", answer: "minimal", chinese_answer: "最小的", chinese_romanization: "zuìxiǎo de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'equitable' figuratively means fair and impartial distribution." +
            "<br><br>" +
            "(A) 'unbalanced' means lacking steadiness and proportion; not in equilibrium." +
            "<br><br>" +
            "(C) 'excessive' means more than is necessary, normal, or desirable; immoderate." +
            "<br><br>" +
            "(D) 'minimal' means of a minimum amount, quantity, or degree; negligible.",
        chinese_explanation: "(B) '公平的' 在比喻意义上意味着公平和公正的分配。" +
            "<br><br>" +
            "(A) '不平衡的' 意味着缺乏稳定和比例；不平衡。" +
            "<br><br>" +
            "(C) '过度的' 意味着超出必要、正常或可取的；过分的。" +
            "<br><br>" +
            "(D) '最小的' 意味着最少的量、数量或程度；可以忽略不计的。"
    },
    {
        id: 7,
        question: "Her __________ approach to problem-solving focused on finding practical solutions that could be implemented immediately.",
        chinese_question: "她 __________ 的问题解决方法侧重于寻找可以立即实施的实际解决方案。",
        answers: [
            { option: "A", answer: "impractical", chinese_answer: "不切实际的", chinese_romanization: "bù qiè shíjì de" },
            { option: "B", answer: "idealistic", chinese_answer: "理想主义的", chinese_romanization: "lǐxiǎng zhǔyì de" },
            { option: "C", answer: "pragmatic", chinese_answer: "务实的", chinese_romanization: "wùshí de" },
            { option: "D", answer: "theoretical", chinese_answer: "理论的", chinese_romanization: "lǐlùn de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'pragmatic' means dealing with things sensibly and realistically in a way that is based on practical rather than theoretical considerations." +
            "<br><br>" +
            "(A) 'impractical' means not adapted for use or action; not sensible or realistic." +
            "<br><br>" +
            "(B) 'idealistic' means characterized by idealism; unrealistically aiming for perfection." +
            "<br><br>" +
            "(D) 'theoretical' means concerned with or involving the theory of a subject or area of study rather than its practical application.",
        chinese_explanation: "(C) '务实的' 意味着以实际而非理论的考虑为基础，理性地处理事物。" +
            "<br><br>" +
            "(A) '不切实际的' 意味着不适合使用或行动的；不明智或不现实的。" +
            "<br><br>" +
            "(B) '理想主义的' 意味着以理想主义为特征；不切实际地追求完美。" +
            "<br><br>" +
            "(D) '理论的' 意味着关注或涉及一个学科或研究领域的理论，而不是其实际应用。"
    },
    {
        id: 8,
        question: "The mediator was chosen for her ability to remain __________, ensuring a fair resolution for both parties involved in the dispute.",
        chinese_question: "调解员因其能够保持 __________ 而被选中，确保为纠纷中的双方提供公平的解决方案。",
        answers: [
            { option: "A", answer: "biased", chinese_answer: "偏见的", chinese_romanization: "piānjiàn de" },
            { option: "B", answer: "impartial", chinese_answer: "公正的", chinese_romanization: "gōngzhèng de" },
            { option: "C", answer: "prejudiced", chinese_answer: "有偏见的", chinese_romanization: "yǒu piānjiàn de" },
            { option: "D", answer: "partial", chinese_answer: "偏袒的", chinese_romanization: "piāntǎn de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'impartial' means treating all rivals or disputants equally; fair and just." +
            "<br><br>" +
            "(A) 'biased' means unfairly prejudiced for or against someone or something." +
            "<br><br>" +
            "(C) 'prejudiced' means having or showing a dislike or distrust that is derived from prejudice." +
            "<br><br>" +
            "(D) 'partial' means favoring one side in a dispute above the other; biased.",
        chinese_explanation: "(B) '公正的' 意味着平等对待所有对手或争论者；公平公正的。" +
            "<br><br>" +
            "(A) '偏见的' 意味着对某人或某事不公平地有偏见。" +
            "<br><br>" +
            "(C) '有偏见的' 意味着显示出或表现出源于偏见的厌恶或不信任。" +
            "<br><br>" +
            "(D) '偏袒的' 意味着在争议中偏袒一方；有偏见的。"
    },
    {
        id: 9,
        question: "After being passed over for a promotion, he felt increasingly __________ with his job.",
        chinese_question: "在被晋升忽视后，他对工作感到越来越__________。",
        answers: [
            { option: "A", answer: "disgruntled", chinese_answer: "不满", chinese_romanization: "bùmǎn" },
            { option: "B", answer: "satisfied", chinese_answer: "满意", chinese_romanization: "mǎnyì" },
            { option: "C", answer: "delighted", chinese_answer: "高兴", chinese_romanization: "gāoxìng" },
            { option: "D", answer: "content", chinese_answer: "满足", chinese_romanization: "mǎnzú" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'disgruntled' means angry or dissatisfied. Figuratively, it can mean feeling resentment or irritation about a situation." +
            "<br><br>" +
            "(B) 'satisfied' means contented; pleased." +
            "<br><br>" +
            "(C) 'delighted' means feeling or showing great pleasure." +
            "<br><br>" +
            "(D) 'content' means in a state of peaceful happiness.",
        chinese_explanation: "(A) '不满'一词意味着愤怒或不满意。比喻地，它可以表示对某种情况感到愤怒或不满。" +
            "<br><br>" +
            "(B) '满意' 意味着满足；高兴。" +
            "<br><br>" +
            "(C) '高兴' 意味着感到或表现出极大的快乐。" +
            "<br><br>" +
            "(D) '满足' 意味着处于和平幸福的状态。"
    },
    {
        id: 10,
        question: "The judge considered the __________ circumstances, such as the defendant's difficult childhood, before passing the sentence.",
        chinese_question: "法官在判刑前考虑了 __________ 的情况，如被告人艰难的童年。",
        answers: [
            { option: "A", answer: "aggravating", chinese_answer: "加重的", chinese_romanization: "jiāzhòng de" },
            { option: "B", answer: "extenuating", chinese_answer: "减轻的", chinese_romanization: "jiǎnqīng de" },
            { option: "C", answer: "exacerbating", chinese_answer: "恶化的", chinese_romanization: "èhuà de" },
            { option: "D", answer: "worsening", chinese_answer: "变坏的", chinese_romanization: "biànhuài de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'extenuating' means serving to lessen the seriousness of an offense." +
            "<br><br>" +
            "(A) 'aggravating' means making a problem or offense worse or more serious." +
            "<br><br>" +
            "(C) 'exacerbating' means making a problem, bad situation, or negative feeling worse." +
            "<br><br>" +
            "(D) 'worsening' means making or becoming worse.",
        chinese_explanation: "(B) '减轻的' 一词意味着减轻罪行严重性的。" +
            "<br><br>" +
            "(A) '加重的' 意味着使问题或罪行变得更糟或更严重的。" +
            "<br><br>" +
            "(C) '恶化的' 意味着使问题、糟糕的情况或负面情绪变得更糟的。" +
            "<br><br>" +
            "(D) '变坏的' 意味着使变得更糟或变得更糟。"
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
