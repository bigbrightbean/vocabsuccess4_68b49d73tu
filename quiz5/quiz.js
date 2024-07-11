// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "His __________ handling of the negotiations secured a favorable deal.",
        chinese_question: "他 __________ 地处理谈判，确保了一个有利的交易。",
        answers: [
            { option: "A", answer: "astute", chinese_answer: "精明的", chinese_romanization: "jīngmíng de" },
            { option: "B", answer: "careless", chinese_answer: "粗心的", chinese_romanization: "cūxīn de" },
            { option: "C", answer: "indifferent", chinese_answer: "漠不关心的", chinese_romanization: "mò bù guānxīn de" },
            { option: "D", answer: "reckless", chinese_answer: "鲁莽的", chinese_romanization: "lǔmǎng de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'astute' metaphorically means shrewd and perceptive." +
            "<br><br>" +
            "(B) 'careless' means not giving sufficient attention or thought to avoiding harm or errors." +
            "<br><br>" +
            "(C) 'indifferent' means having no particular interest or sympathy." +
            "<br><br>" +
            "(D) 'reckless' means without thinking or caring about the consequences of an action.",
        chinese_explanation: "(A) '精明的' 比喻聪明且敏锐的。" +
            "<br><br>" +
            "(B) '粗心的' 意味着没有给予足够的注意或考虑以避免伤害或错误。" +
            "<br><br>" +
            "(C) '漠不关心的' 意味着没有特别的兴趣或同情心。" +
            "<br><br>" +
            "(D) '鲁莽的' 意味着不考虑行动的后果。"
    },
    {
        id: 2,
        question: "The benefits of exercising regularly are __________ to everyone.",
        chinese_question: "定期锻炼的好处对每个人来说都是 __________ 的。",
        answers: [
            { option: "A", answer: "obvious", chinese_answer: "明显的", chinese_romanization: "míngxiǎn de" },
            { option: "B", answer: "negligible", chinese_answer: "可忽略的", chinese_romanization: "kě hūlüè de" },
            { option: "C", answer: "debatable", chinese_answer: "有争议的", chinese_romanization: "yǒu zhēngyì de" },
            { option: "D", answer: "unclear", chinese_answer: "不清楚的", chinese_romanization: "bù qīngchǔ de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'obvious' metaphorically means easily understood or recognized as true or logical." +
            "<br><br>" +
            "(B) 'negligible' means so small or unimportant as to be not worth considering." +
            "<br><br>" +
            "(C) 'debatable' means open to discussion or argument." +
            "<br><br>" +
            "(D) 'unclear' means not easy to understand; not obvious.",
        chinese_explanation: "(A) '明显的' 比喻容易理解或被认知为真实或逻辑的。" +
            "<br><br>" +
            "(B) '可忽略的' 意味着小到或不重要以至于不值得考虑的。" +
            "<br><br>" +
            "(C) '有争议的' 意味着可以讨论或争论的。" +
            "<br><br>" +
            "(D) '不清楚的' 意味着不容易理解的；不明显的。"
    },
    {
        id: 3,
        question: "The __________ influence of his negative attitude spread throughout the team, affecting everyone’s morale.",
        chinese_question: "他负面态度的 __________ 影响蔓延到了整个团队，影响了每个人的士气。",
        answers: [
            { option: "A", answer: "positive", chinese_answer: "积极的", chinese_romanization: "jījí de" },
            { option: "B", answer: "beneficial", chinese_answer: "有益的", chinese_romanization: "yǒuyì de" },
            { option: "C", answer: "malignant", chinese_answer: "恶性的", chinese_romanization: "èxìng de" },
            { option: "D", answer: "constructive", chinese_answer: "建设性的", chinese_romanization: "jiànshè xìng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'malignant' figuratively means having a harmful influence or effect." +
            "<br><br>" +
            "(A) 'positive' means consisting in or characterized by the presence or possession of features or qualities rather than their absence." +
            "<br><br>" +
            "(B) 'beneficial' means resulting in good; favorable or advantageous." +
            "<br><br>" +
            "(D) 'constructive' means serving a useful purpose; tending to build up.",
        chinese_explanation: "(C) '恶性的' 在比喻意义上意味着具有有害影响或效果的。" +
            "<br><br>" +
            "(A) '积极的' 意味着存在或拥有特征或品质而不是它们的缺失。" +
            "<br><br>" +
            "(B) '有益的' 意味着产生好结果的；有利的或有益的。" +
            "<br><br>" +
            "(D) '建设性的' 意味着起有用目的的；倾向于建立的。"
    },
    {
        id: 4,
        question: "His views on education were considered __________ by the younger generation, who favored more progressive ideas.",
        chinese_question: "他对教育的看法被年轻一代视为 __________，他们更倾向于进步的理念。",
        answers: [
            { option: "A", answer: "revolutionary", chinese_answer: "革命性的", chinese_romanization: "gémìng xìng de" },
            { option: "B", answer: "obsolete", chinese_answer: "过时的", chinese_romanization: "guòshí de" },
            { option: "C", answer: "cutting-edge", chinese_answer: "尖端的", chinese_romanization: "jiānduān de" },
            { option: "D", answer: "contemporary", chinese_answer: "当代的", chinese_romanization: "dāngdài de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'obsolete' figuratively means outdated or no longer relevant." +
            "<br><br>" +
            "(A) 'revolutionary' means involving or causing a complete or dramatic change." +
            "<br><br>" +
            "(C) 'cutting-edge' means the latest or most advanced stage in the development of something." +
            "<br><br>" +
            "(D) 'contemporary' means living or occurring at the same time.",
        chinese_explanation: "(B) '过时的' 在比喻意义上意味着过时的或不再相关的。" +
            "<br><br>" +
            "(A) '革命性的' 意味着涉及或引起完全或剧烈的变化。" +
            "<br><br>" +
            "(C) '尖端的' 意味着某事物发展的最新或最先进阶段。" +
            "<br><br>" +
            "(D) '当代的' 意味着同时发生或存在的。"
    },
    {
        id: 5,
        question: "His __________ approach to relationships, always looking for what he could gain, left him with few true friends.",
        chinese_question: "他对待关系的 __________ 方法，总是寻找他能得到什么，使他几乎没有真正的朋友。",
        answers: [
            { option: "A", answer: "generous", chinese_answer: "慷慨的", chinese_romanization: "kāngkǎi de" },
            { option: "B", answer: "altruistic", chinese_answer: "利他的", chinese_romanization: "lìtā de" },
            { option: "C", answer: "mercenary", chinese_answer: "唯利是图的", chinese_romanization: "wéilì shìtú de" },
            { option: "D", answer: "compassionate", chinese_answer: "富有同情心的", chinese_romanization: "fùyǒu tóngqíng xīn de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'mercenary' figuratively means primarily concerned with making money at the expense of ethics." +
            "<br><br>" +
            "(A) 'generous' means showing a readiness to give more of something than is strictly necessary or expected." +
            "<br><br>" +
            "(B) 'altruistic' means showing a disinterested and selfless concern for the well-being of others." +
            "<br><br>" +
            "(D) 'compassionate' means feeling or showing sympathy and concern for others.",
        chinese_explanation: "(C) '唯利是图的' 在比喻意义上意味着主要关心赚钱而不顾道德。" +
            "<br><br>" +
            "(A) '慷慨的' 意味着表现出愿意给予比严格必要或期望的更多。" +
            "<br><br>" +
            "(B) '利他的' 意味着表现出对他人福祉的无私关注。" +
            "<br><br>" +
            "(D) '富有同情心的' 意味着感到或表现出同情和关心他人。"
    },
    {
        id: 6,
        question: "The new policy created an __________ situation, leaving many employees unsure of how to proceed.",
        chinese_question: "新政策创造了一个 __________ 的局面，许多员工不知道该如何进行。",
        answers: [
            { option: "A", answer: "smooth", chinese_answer: "顺利的", chinese_romanization: "shùnlì de" },
            { option: "B", answer: "seamless", chinese_answer: "无缝的", chinese_romanization: "wúfèng de" },
            { option: "C", answer: "awkward", chinese_answer: "困难的", chinese_romanization: "kùnnán de" },
            { option: "D", answer: "simple", chinese_answer: "简单的", chinese_romanization: "jiǎndān de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'awkward' figuratively means causing difficulty or hard to deal with." +
            "<br><br>" +
            "(A) 'smooth' means having an even and regular surface or consistency; free from perceptible projections, lumps, or indentations." +
            "<br><br>" +
            "(B) 'seamless' means (of a fabric or surface) smooth and without seams or obvious joins." +
            "<br><br>" +
            "(D) 'simple' means easily understood or done; presenting no difficulty.",
        chinese_explanation: "(C) '困难的' 在比喻意义上意味着引起困难或难以处理的。" +
            "<br><br>" +
            "(A) '顺利的' 意味着具有均匀和规则的表面或一致性；没有明显的突起、块状物或凹痕。" +
            "<br><br>" +
            "(B) '无缝的' 意味着（织物或表面）光滑且没有缝隙或明显的接合。" +
            "<br><br>" +
            "(D) '简单的' 意味着容易理解或完成的；没有难度的。"
    },
    {
        id: 7,
        question: "He was __________ to hear back from the job interview, constantly checking his email.",
        chinese_question: "他急切地想从工作面试中得到回复，不断地检查他的电子邮件。",
        answers: [
            { option: "A", answer: "anxious", chinese_answer: "急切", chinese_romanization: "jíqiè" },
            { option: "B", answer: "confident", chinese_answer: "自信", chinese_romanization: "zìxìn" },
            { option: "C", answer: "relaxed", chinese_answer: "放松", chinese_romanization: "fàngsōng" },
            { option: "D", answer: "indifferent", chinese_answer: "冷漠", chinese_romanization: "lěngmò" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'anxious' metaphorically means eager or longing for something." +
            "<br><br>" +
            "(B) 'confident' means feeling or showing certainty." +
            "<br><br>" +
            "(C) 'relaxed' means free from tension." +
            "<br><br>" +
            "(D) 'indifferent' means having no particular interest or sympathy.",
        chinese_explanation: "(A) '急切' 比喻渴望或期盼某事。" +
            "<br><br>" +
            "(B) '自信' 意味着感到确定或展示确定。" +
            "<br><br>" +
            "(C) '放松' 意味着没有紧张。" +
            "<br><br>" +
            "(D) '冷漠' 意味着没有特别的兴趣或同情。"
    },
    {
        id: 8,
        question: "Her portrayal of the character was so __________ that it brought the story to life.",
        chinese_question: "她对角色的刻画非常 __________，使故事栩栩如生。",
        answers: [
            { option: "A", answer: "accurate", chinese_answer: "精确的", chinese_romanization: "jīngquè de" },
            { option: "B", answer: "superficial", chinese_answer: "表面的", chinese_romanization: "biǎomiàn de" },
            { option: "C", answer: "flawed", chinese_answer: "有缺陷的", chinese_romanization: "yǒu quēxiàn de" },
            { option: "D", answer: "vague", chinese_answer: "模糊的", chinese_romanization: "móhú de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'accurate' metaphorically means representing or reflecting the truth or reality." +
            "<br><br>" +
            "(B) 'superficial' means existing or occurring at or on the surface." +
            "<br><br>" +
            "(C) 'flawed' means having imperfections." +
            "<br><br>" +
            "(D) 'vague' means of uncertain, indefinite, or unclear character or meaning.",
        chinese_explanation: "(A) '精确的' 比喻代表或反映真相或现实。" +
            "<br><br>" +
            "(B) '表面的' 意味着存在于或发生在表面。" +
            "<br><br>" +
            "(C) '有缺陷的' 意味着有缺陷的。" +
            "<br><br>" +
            "(D) '模糊的' 意味着不确定、不明确或不清楚的性质或意义。"
    },
    {
        id: 9,
        question: "He became __________ at navigating office politics, knowing how to handle different personalities effectively.",
        chinese_question: "他变得非常__________，善于处理办公室政治，知道如何有效地处理不同的个性。",
        answers: [
            { option: "A", answer: "inept", chinese_answer: "笨拙的", chinese_romanization: "bènzhuō de" },
            { option: "B", answer: "unskilled", chinese_answer: "无技能的", chinese_romanization: "wú jìnéng de" },
            { option: "C", answer: "adept", chinese_answer: "熟练的", chinese_romanization: "shúliàn de" },
            { option: "D", answer: "slow", chinese_answer: "慢的", chinese_romanization: "màn de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'adept' means very skilled or proficient at something. Figuratively, it can mean being highly capable in dealing with complex or delicate situations." +
            "<br><br>" +
            "(A) 'inept' means having or showing no skill." +
            "<br><br>" +
            "(B) 'unskilled' means not having or requiring special skills or training." +
            "<br><br>" +
            "(D) 'slow' means moving or operating, or designed to do so, only at a low speed; not quick or fast.",
        chinese_explanation: "(C) '熟练的'一词意味着非常熟练或擅长某事。比喻地，它可以表示在处理复杂或微妙的情况下非常有能力。" +
            "<br><br>" +
            "(A) '笨拙的' 意味着没有或表现出没有技能。" +
            "<br><br>" +
            "(B) '无技能的' 意味着没有或不需要特殊技能或训练。" +
            "<br><br>" +
            "(D) '慢的' 意味着移动或操作，或设计为这样做，只有低速；不快或不快。"
    },
    {
        id: 10,
        question: "Her __________ smile made everyone feel at ease.",
        chinese_question: "她 __________ 的微笑让每个人都感到安心。",
        answers: [
            { option: "A", answer: "benign", chinese_answer: "亲切的", chinese_romanization: "qīnqiè de" },
            { option: "B", answer: "harsh", chinese_answer: "严厉的", chinese_romanization: "yánlì de" },
            { option: "C", answer: "intimidating", chinese_answer: "吓人的", chinese_romanization: "xiàrén de" },
            { option: "D", answer: "indifferent", chinese_answer: "冷漠的", chinese_romanization: "lěngmò de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'benign' metaphorically means kind and gentle." +
            "<br><br>" +
            "(B) 'harsh' means unpleasantly rough or jarring to the senses." +
            "<br><br>" +
            "(C) 'intimidating' means having a frightening, overawing, or threatening effect." +
            "<br><br>" +
            "(D) 'indifferent' means having no particular interest or sympathy.",
        chinese_explanation: "(A) '亲切的' 比喻善良和温柔的。" +
            "<br><br>" +
            "(B) '严厉的' 意味着对感官有不愉快的粗糙或刺耳的影响。" +
            "<br><br>" +
            "(C) '吓人的' 意味着具有令人害怕、震慑或威胁的效果。" +
            "<br><br>" +
            "(D) '冷漠的' 意味着没有特别的兴趣或同情心。"
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
