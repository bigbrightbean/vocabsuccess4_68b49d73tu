// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The editor compiled an __________ of the best short stories from various contemporary authors.",
        chinese_question: "编辑编了一本包含各当代作家最佳短篇小说的 __________。",
        answers: [
            { option: "A", answer: "novel", chinese_answer: "小说", chinese_romanization: "xiǎoshuō" },
            { option: "B", answer: "anthology", chinese_answer: "选集", chinese_romanization: "xuǎnjí" },
            { option: "C", answer: "article", chinese_answer: "文章", chinese_romanization: "wénzhāng" },
            { option: "D", answer: "biography", chinese_answer: "传记", chinese_romanization: "zhuànjì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'anthology' means a published collection of poems or other pieces of writing." +
            "<br><br>" +
            "(A) 'novel' means a fictitious prose narrative of book length, typically representing character and action with some degree of realism." +
            "<br><br>" +
            "(C) 'article' means a piece of writing included with others in a newspaper, magazine, or other publication." +
            "<br><br>" +
            "(D) 'biography' means an account of someone's life written by someone else.",
        chinese_explanation: "(B) '选集' 一词意味着已出版的诗歌或其他写作作品的合集。" +
            "<br><br>" +
            "(A) '小说' 意味着一种书长度的虚构散文叙事，通常以某种程度的现实主义代表人物和行动。" +
            "<br><br>" +
            "(C) '文章' 意味着与其他人一起包括在报纸、杂志或其他出版物中的写作。" +
            "<br><br>" +
            "(D) '传记' 意味着由他人撰写的某人生活的描述。"
    },
    {
        id: 2,
        question: "Her explanation of the process was a __________ of complex ideas into a simple, understandable format.",
        chinese_question: "她对过程的解释是将复杂的想法 __________ 成简单易懂的格式。",
        answers: [
            { option: "A", answer: "evaporation", chinese_answer: "蒸发", chinese_romanization: "zhēngfā" },
            { option: "B", answer: "condensation", chinese_answer: "凝结", chinese_romanization: "níngjié" },
            { option: "C", answer: "expansion", chinese_answer: "扩展", chinese_romanization: "kuòzhǎn" },
            { option: "D", answer: "confusion", chinese_answer: "混乱", chinese_romanization: "hǔnluàn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'condensation' figuratively means the process of making something denser or more concise." +
            "<br><br>" +
            "(A) 'evaporation' means the process of turning from liquid into vapor." +
            "<br><br>" +
            "(C) 'expansion' means the action of becoming larger or more extensive." +
            "<br><br>" +
            "(D) 'confusion' means lack of understanding; uncertainty.",
        chinese_explanation: "(B) '凝结' 在比喻意义上意味着使某物更密集或更简明的过程。" +
            "<br><br>" +
            "(A) '蒸发' 意味着从液体变为蒸气的过程。" +
            "<br><br>" +
            "(C) '扩展' 意味着变大或更广泛的动作。" +
            "<br><br>" +
            "(D) '混乱' 意味着缺乏理解；不确定性。"
    },
    {
        id: 3,
        question: "There was a __________ of qualified candidates for the position, forcing the company to extend its search.",
        chinese_question: "由于合格候选人的 __________，公司不得不延长招聘时间。",
        answers: [
            { option: "A", answer: "abundance", chinese_answer: "充足", chinese_romanization: "chōngzú" },
            { option: "B", answer: "dearth", chinese_answer: "缺乏", chinese_romanization: "quēfá" },
            { option: "C", answer: "surplus", chinese_answer: "过剩", chinese_romanization: "guòshèng" },
            { option: "D", answer: "plenitude", chinese_answer: "丰富", chinese_romanization: "fēngfù" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'dearth' means a scarcity or lack of something." +
            "<br><br>" +
            "(A) 'abundance' means a very large quantity of something." +
            "<br><br>" +
            "(C) 'surplus' means an amount of something left over when requirements have been met; an excess of production or supply." +
            "<br><br>" +
            "(D) 'plenitude' means an abundance.",
        chinese_explanation: "(B) '缺乏' 一词意味着某物的稀缺或不足。" +
            "<br><br>" +
            "(A) '充足' 意味着大量的某物。" +
            "<br><br>" +
            "(C) '过剩' 意味着在满足需求后剩余的数量；生产或供应过剩。" +
            "<br><br>" +
            "(D) '丰富' 意味着丰富。"
    },
    {
        id: 4,
        question: "The actor publicly revealed his battle with __________, a condition that leads to hair loss, hoping to raise awareness about the condition.",
        chinese_question: "这位演员公开透露他与 __________ 的斗争，这是一种导致脱发的疾病，希望提高对这种情况的认识。",
        answers: [
            { option: "A", answer: "alopecia", chinese_answer: "脱发", chinese_romanization: "tuōfā" },
            { option: "B", answer: "arthritis", chinese_answer: "关节炎", chinese_romanization: "guānjié yán" },
            { option: "C", answer: "asthma", chinese_answer: "哮喘", chinese_romanization: "xiàochuǎn" },
            { option: "D", answer: "anemia", chinese_answer: "贫血", chinese_romanization: "pínxiě" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'alopecia' means the partial or complete absence of hair from areas of the body where it normally grows; baldness." +
            "<br><br>" +
            "(B) 'arthritis' means painful inflammation and stiffness of the joints." +
            "<br><br>" +
            "(C) 'asthma' means a respiratory condition marked by spasms in the bronchi of the lungs, causing difficulty in breathing." +
            "<br><br>" +
            "(D) 'anemia' means a condition marked by a deficiency of red blood cells or of hemoglobin in the blood.",
        chinese_explanation: "(A) '脱发' 一词意味着身体上正常生长毛发的区域部分或完全缺失；秃头。" +
            "<br><br>" +
            "(B) '关节炎' 意味着关节的疼痛性炎症和僵硬。" +
            "<br><br>" +
            "(C) '哮喘' 意味着肺支气管痉挛引起的呼吸困难的呼吸状况。" +
            "<br><br>" +
            "(D) '贫血' 意味着血液中红细胞或血红蛋白的缺乏。"
    },
    {
        id: 5,
        question: "The trial was a complete __________, lacking any semblance of fairness or justice.",
        chinese_question: "这场审判完全是个 __________，完全没有公平或正义的样子。",
        answers: [
            { option: "A", answer: "success", chinese_answer: "成功", chinese_romanization: "chénggōng" },
            { option: "B", answer: "triumph", chinese_answer: "胜利", chinese_romanization: "shènglì" },
            { option: "C", answer: "travesty", chinese_answer: "歪曲", chinese_romanization: "wāiqū" },
            { option: "D", answer: "victory", chinese_answer: "胜利", chinese_romanization: "shènglì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'travesty' means a false, absurd, or distorted representation of something." +
            "<br><br>" +
            "(A) 'success' means the accomplishment of an aim or purpose." +
            "<br><br>" +
            "(B) 'triumph' means a great victory or achievement." +
            "<br><br>" +
            "(D) 'victory' means an act of defeating an enemy or opponent in a battle, game, or other competition.",
        chinese_explanation: "(C) '歪曲' 一词意味着某事的虚假、荒谬或扭曲的代表。" +
            "<br><br>" +
            "(A) '成功' 意味着目标或目的的实现。" +
            "<br><br>" +
            "(B) '胜利' 意味着伟大的胜利或成就。" +
            "<br><br>" +
            "(D) '胜利' 意味着在战斗、比赛或其他比赛中击败敌人或对手的行为。"
    },
    {
        id: 6,
        question: "Their shared love for classical music created an immediate __________ between them, leading to a lasting friendship.",
        chinese_question: "他们对古典音乐的共同爱好让他们之间产生了立刻的 __________，从而形成了持久的友谊。",
        answers: [
            { option: "A", answer: "dislike", chinese_answer: "厌恶", chinese_romanization: "yànwù" },
            { option: "B", answer: "affinity", chinese_answer: "亲和力", chinese_romanization: "qīnhélì" },
            { option: "C", answer: "animosity", chinese_answer: "敌意", chinese_romanization: "díyì" },
            { option: "D", answer: "indifference", chinese_answer: "冷漠", chinese_romanization: "lěngmò" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'affinity' means a natural liking for and understanding of someone or something." +
            "<br><br>" +
            "(A) 'dislike' means a feeling of distaste or hostility." +
            "<br><br>" +
            "(C) 'animosity' means strong hostility." +
            "<br><br>" +
            "(D) 'indifference' means lack of interest, concern, or sympathy.",
        chinese_explanation: "(B) '亲和力' 一词意味着对某人或某事的自然喜爱和理解。" +
            "<br><br>" +
            "(A) '厌恶' 意味着一种厌恶或敌对的感觉。" +
            "<br><br>" +
            "(C) '敌意' 意味着强烈的敌对。" +
            "<br><br>" +
            "(D) '冷漠' 意味着缺乏兴趣、关心或同情。"
    },
    {
        id: 7,
        question: "The politician's speech was full of __________, designed to mislead the public and hide the truth.",
        chinese_question: "这位政客的演讲充满了 __________，旨在误导公众并隐藏真相。",
        answers: [
            { option: "A", answer: "honesty", chinese_answer: "诚实", chinese_romanization: "chéngshí" },
            { option: "B", answer: "chicanery", chinese_answer: "欺诈", chinese_romanization: "qīzhà" },
            { option: "C", answer: "transparency", chinese_answer: "透明", chinese_romanization: "tòumíng" },
            { option: "D", answer: "candor", chinese_answer: "坦率", chinese_romanization: "tǎnshuài" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'chicanery' means the use of trickery to achieve a political, financial, or legal purpose." +
            "<br><br>" +
            "(A) 'honesty' means the quality of being honest." +
            "<br><br>" +
            "(C) 'transparency' means the condition of being transparent." +
            "<br><br>" +
            "(D) 'candor' means the quality of being open and honest in expression; frankness.",
        chinese_explanation: "(B) '欺诈' 一词意味着使用诡计来实现政治、金融或法律目的。" +
            "<br><br>" +
            "(A) '诚实' 意味着诚实的品质。" +
            "<br><br>" +
            "(C) '透明' 意味着透明的状态。" +
            "<br><br>" +
            "(D) '坦率' 意味着表达上的开放和诚实；直率。"
    },
    {
        id: 8,
        question: "Despite the chaos around him, he maintained his __________, staying calm and composed.",
        chinese_question: "尽管周围一片混乱，他仍保持 __________，保持冷静和镇定。",
        answers: [
            { option: "A", answer: "panic", chinese_answer: "恐慌", chinese_romanization: "kǒnghuāng" },
            { option: "B", answer: "equanimity", chinese_answer: "镇定", chinese_romanization: "zhèndìng" },
            { option: "C", answer: "anxiety", chinese_answer: "焦虑", chinese_romanization: "jiāolǜ" },
            { option: "D", answer: "agitation", chinese_answer: "激动", chinese_romanization: "jīdòng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'equanimity' means mental calmness, composure, and evenness of temper, especially in a difficult situation." +
            "<br><br>" +
            "(A) 'panic' means sudden uncontrollable fear or anxiety, often causing wildly unthinking behavior." +
            "<br><br>" +
            "(C) 'anxiety' means a feeling of worry, nervousness, or unease." +
            "<br><br>" +
            "(D) 'agitation' means a state of anxiety or nervous excitement.",
        chinese_explanation: "(B) '镇定' 一词意味着精神上的冷静、镇定和情绪的平衡，尤其是在困难情况下。" +
            "<br><br>" +
            "(A) '恐慌' 意味着突然不可控制的恐惧或焦虑，常常导致疯狂的、不加思索的行为。" +
            "<br><br>" +
            "(C) '焦虑' 意味着一种担忧、紧张或不安的感觉。" +
            "<br><br>" +
            "(D) '激动' 意味着焦虑或紧张的兴奋状态。"
    },
    {
        id: 9,
        question: "After the long hike, they felt a deep sense of __________, barely able to keep their eyes open.",
        chinese_question: "长时间徒步旅行后，他们感到深深的 __________，几乎无法睁开眼睛。",
        answers: [
            { option: "A", answer: "energy", chinese_answer: "精力", chinese_romanization: "jīnglì" },
            { option: "B", answer: "enthusiasm", chinese_answer: "热情", chinese_romanization: "rèqíng" },
            { option: "C", answer: "lassitude", chinese_answer: "疲乏", chinese_romanization: "pífá" },
            { option: "D", answer: "vitality", chinese_answer: "活力", chinese_romanization: "huólì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'lassitude' means a state of physical or mental weariness; lack of energy." +
            "<br><br>" +
            "(A) 'energy' means the strength and vitality required for sustained physical or mental activity." +
            "<br><br>" +
            "(B) 'enthusiasm' means intense and eager enjoyment, interest, or approval." +
            "<br><br>" +
            "(D) 'vitality' means the state of being strong and active; energy.",
        chinese_explanation: "(C) '疲乏' 一词意味着身体或精神上的疲倦状态；缺乏能量。" +
            "<br><br>" +
            "(A) '精力' 意味着需要持续进行体力或脑力活动的力量和活力。" +
            "<br><br>" +
            "(B) '热情' 意味着强烈和热切的享受、兴趣或赞同。" +
            "<br><br>" +
            "(D) '活力' 意味着强壮和活跃的状态；能量。"
    },
    {
        id: 10,
        question: "He has a strong __________ to seafood, preferring to avoid it entirely due to an unpleasant past experience.",
        chinese_question: "他对海鲜有强烈的 __________，由于过去不愉快的经历，他宁愿完全避免食用。",
        answers: [
            { option: "A", answer: "liking", chinese_answer: "喜欢", chinese_romanization: "xǐhuān" },
            { option: "B", answer: "aversion", chinese_answer: "厌恶", chinese_romanization: "yànwù" },
            { option: "C", answer: "attraction", chinese_answer: "吸引", chinese_romanization: "xīyǐn" },
            { option: "D", answer: "preference", chinese_answer: "偏好", chinese_romanization: "piānhào" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'aversion' means a strong dislike or disinclination." +
            "<br><br>" +
            "(A) 'liking' means a feeling of regard or fondness." +
            "<br><br>" +
            "(C) 'attraction' means the action or power of evoking interest, pleasure, or liking for someone or something." +
            "<br><br>" +
            "(D) 'preference' means a greater liking for one alternative over another or others.",
        chinese_explanation: "(B) '厌恶' 一词意味着强烈的厌恶或不愿意。" +
            "<br><br>" +
            "(A) '喜欢' 意味着一种尊敬或喜爱的感觉。" +
            "<br><br>" +
            "(C) '吸引' 意味着引起某人对某事物的兴趣、愉悦或喜爱的行为或力量。" +
            "<br><br>" +
            "(D) '偏好' 意味着对一种选择的更大喜欢。"
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
