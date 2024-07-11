// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
         question: "He lived a __________ lifestyle, avoiding unnecessary purchases and focusing on essentials.",
        chinese_question: "他过着 __________ 的生活方式，避免不必要的购买，专注于必需品。",
        answers: [
            { option: "A", answer: "thrifty", chinese_answer: "节俭的", chinese_romanization: "jiéjiǎn de" },
            { option: "B", answer: "lavish", chinese_answer: "奢华的", chinese_romanization: "shēhuá de" },
            { option: "C", answer: "indulgent", chinese_answer: "放纵的", chinese_romanization: "fàngzòng de" },
            { option: "D", answer: "reckless", chinese_answer: "鲁莽的", chinese_romanization: "lǔmǎng de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'thrifty' metaphorically means economical and frugal." +
            "<br><br>" +
            "(B) 'lavish' means sumptuously rich, elaborate, or luxurious." +
            "<br><br>" +
            "(C) 'indulgent' means having or indicating a tendency to be overly generous to or lenient with someone." +
            "<br><br>" +
            "(D) 'reckless' means without thinking or caring about the consequences of an action.",
        chinese_explanation: "(A) '节俭的' 比喻经济和节俭。" +
            "<br><br>" +
            "(B) '奢华的' 意味着极其富有、复杂或奢侈。" +
            "<br><br>" +
            "(C) '放纵的' 意味着有过于慷慨或宽容倾向的。" +
            "<br><br>" +
            "(D) '鲁莽的' 意味着不考虑或不关心行为后果的。"
    },
    {
        id: 2,
        question: "Corruption seems __________ in the political system, affecting all levels of government.",
        chinese_question: "腐败似乎在政治系统中是 __________ 的，影响到政府的各个层面。",
        answers: [
            { option: "A", answer: "rare", chinese_answer: "罕见", chinese_romanization: "hǎnjiàn" },
            { option: "B", answer: "absent", chinese_answer: "缺席", chinese_romanization: "quēxí" },
            { option: "C", answer: "endemic", chinese_answer: "地方性", chinese_romanization: "dìfāng xìng" },
            { option: "D", answer: "foreign", chinese_answer: "外来", chinese_romanization: "wàilái" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'endemic' means a widespread and regularly occurring problem within a particular area or group." +
            "<br><br>" +
            "(A) 'rare' means not occurring very often." +
            "<br><br>" +
            "(B) 'absent' means not present." +
            "<br><br>" +
            "(D) 'foreign' means from another country.",
        chinese_explanation: "(C) '地方性' 意味着在特定地区或群体中广泛和经常发生的问题。" +
            "<br><br>" +
            "(A) '罕见' 意味着不经常发生。" +
            "<br><br>" +
            "(B) '缺席' 意味着不在场。" +
            "<br><br>" +
            "(D) '外来' 意味着来自另一个国家。"
    },
    {
        id: 3,
        question: "Her thoughts were always __________, allowing her to communicate clearly and effectively.",
        chinese_question: "她的想法总是很__________，使她能够清晰有效地交流。",
        answers: [
            { option: "A", answer: "chaotic", chinese_answer: "混乱的", chinese_romanization: "hùnluàn de" },
            { option: "B", answer: "messy", chinese_answer: "凌乱的", chinese_romanization: "língluàn de" },
            { option: "C", answer: "organized", chinese_answer: "有条理的", chinese_romanization: "yǒu tiáolǐ de" },
            { option: "D", answer: "cluttered", chinese_answer: "杂乱的", chinese_romanization: "záluàn de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'organized' means arranged in a systematic way, especially on a large scale. Figuratively, it can mean being methodical and efficient." +
            "<br><br>" +
            "(A) 'chaotic' means in a state of complete confusion and disorder." +
            "<br><br>" +
            "(B) 'messy' means untidy or dirty." +
            "<br><br>" +
            "(D) 'cluttered' means crowded and untidy.",
        chinese_explanation: "(C) '有条理的'一词意味着系统地安排，尤其是在大规模上。比喻地，它可以表示方法论和高效的。" +
            "<br><br>" +
            "(A) '混乱的' 意味着处于完全混乱和无序的状态。" +
            "<br><br>" +
            "(B) '凌乱的' 意味着不整洁或肮脏的。" +
            "<br><br>" +
            "(D) '杂乱的' 意味着拥挤和不整洁的。"
    },
    {
        id: 4,
        question: "In her novel, the author takes a __________ view of human behavior, suggesting that every action is driven by a specific purpose.",
        chinese_question: "在她的小说中，作者采取了一种 __________ 的人类行为观，认为每一个行为都是由特定目的驱动的。",
        answers: [
            { option: "A", answer: "chaotic", chinese_answer: "混乱的", chinese_romanization: "hùnluàn de" },
            { option: "B", answer: "spontaneous", chinese_answer: "自发的", chinese_romanization: "zìfā de" },
            { option: "C", answer: "random", chinese_answer: "随机的", chinese_romanization: "suíjī de" },
            { option: "D", answer: "teleological", chinese_answer: "目的论的", chinese_romanization: "mùdìlùn de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'teleological' means explaining phenomena by their purpose rather than their cause." +
            "<br><br>" +
            "(A) 'chaotic' means completely disordered and unpredictable." +
            "<br><br>" +
            "(B) 'spontaneous' means performed or occurring as a result of a sudden impulse." +
            "<br><br>" +
            "(C) 'random' means made or done without method or conscious decision.",
        chinese_explanation: "(D) '目的论的' 意思是通过目的而不是原因来解释现象。" +
            "<br><br>" +
            "(A) '混乱的' 意思是完全无序和不可预测的。" +
            "<br><br>" +
            "(B) '自发的' 意思是由于突然的冲动而进行或发生的。" +
            "<br><br>" +
            "(C) '随机的' 意思是没有方法或有意识决定的。"
    },
    {
        id: 5,
        question: "Her __________ attention to detail made her an excellent editor but often delayed the project's completion.",
        chinese_question: "她对细节的 __________ 关注使她成为一名出色的编辑，但往往延迟了项目的完成。",
        answers: [
            { option: "A", answer: "minimal", chinese_answer: "最低的", chinese_romanization: "zuìdī de" },
            { option: "B", answer: "excessive", chinese_answer: "过度的", chinese_romanization: "guòdù de" },
            { option: "C", answer: "adequate", chinese_answer: "适当的", chinese_romanization: "shìdàng de" },
            { option: "D", answer: "insufficient", chinese_answer: "不足的", chinese_romanization: "bùzú de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'excessive' figuratively means too much; more than is reasonable." +
            "<br><br>" +
            "(A) 'minimal' means of a minimum amount, quantity, or degree; negligible." +
            "<br><br>" +
            "(C) 'adequate' means satisfactory or acceptable in quality or quantity." +
            "<br><br>" +
            "(D) 'insufficient' means not enough; inadequate.",
        chinese_explanation: "(B) '过度的' 在比喻意义上意味着太多的；超出合理的。" +
            "<br><br>" +
            "(A) '最低的' 意味着最小的数量、数量或程度；微不足道的。" +
            "<br><br>" +
            "(C) '适当的' 意味着质量或数量令人满意或可接受的。" +
            "<br><br>" +
            "(D) '不足的' 意味着不够的；不充足的。"
    },
    {
        id: 6,
        question: "The artist's latest sculpture was an __________ mass of clay, lacking any distinct shape or form.",
        chinese_question: "艺术家的最新雕塑是一团 __________ 的粘土，缺乏任何明确的形状或形式。",
        answers: [
            { option: "A", answer: "rigid", chinese_answer: "刚性的", chinese_romanization: "gāngxìng de" },
            { option: "B", answer: "symmetrical", chinese_answer: "对称的", chinese_romanization: "duìchènde" },
            { option: "C", answer: "amorphous", chinese_answer: "无定形的", chinese_romanization: "wú dìngxíng de" },
            { option: "D", answer: "defined", chinese_answer: "明确的", chinese_romanization: "míngquè de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'amorphous' means without a clearly defined shape or form." +
            "<br><br>" +
            "(A) 'rigid' means unable to bend or be forced out of shape; not flexible." +
            "<br><br>" +
            "(B) 'symmetrical' means made up of exactly similar parts facing each other or around an axis." +
            "<br><br>" +
            "(D) 'defined' means clearly characterized or delimited.",
        chinese_explanation: "(C) '无定形的' 一词意味着没有明确的形状或形式。" +
            "<br><br>" +
            "(A) '刚性的' 意味着不能弯曲或被迫变形；不灵活的。" +
            "<br><br>" +
            "(B) '对称的' 意味着由完全相似的部分组成，彼此面对或围绕轴线。" +
            "<br><br>" +
            "(D) '明确的' 意味着清晰界定的或明确的。"
    },
    {
        id: 7,
        question: "Taking on too many responsibilities at once can be __________ to your mental health.",
        chinese_question: "一次承担太多责任可能对你的心理健康 __________。",
        answers: [
            { option: "A", answer: "beneficial", chinese_answer: "有益的", chinese_romanization: "yǒuyì de" },
            { option: "B", answer: "hazardous", chinese_answer: "有害的", chinese_romanization: "yǒuhài de" },
            { option: "C", answer: "supportive", chinese_answer: "支持的", chinese_romanization: "zhīchí de" },
            { option: "D", answer: "reassuring", chinese_answer: "安慰的", chinese_romanization: "ānwèi de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'hazardous' figuratively means potentially harmful or dangerous." +
            "<br><br>" +
            "(A) 'beneficial' means favorable or advantageous; resulting in good." +
            "<br><br>" +
            "(C) 'supportive' means providing encouragement or emotional help." +
            "<br><br>" +
            "(D) 'reassuring' means serving or intended to remove someone's doubts or fears.",
        chinese_explanation: "(B) '有害的' 在比喻意义上意味着可能有害或危险的。" +
            "<br><br>" +
            "(A) '有益的' 意味着有利或有益的；带来好处的。" +
            "<br><br>" +
            "(C) '支持的' 意味着提供鼓励或情感帮助的。" +
            "<br><br>" +
            "(D) '安慰的' 意味着消除某人的疑虑或恐惧的。"
    },
    {
        id: 8,
        question: "The villagers were outraged by the __________ act of vandalism at their sacred temple.",
        chinese_question: "村民们对他们的神庙遭受 __________ 破坏行为感到愤怒。",
        answers: [
            { option: "A", answer: "respectful", chinese_answer: "尊敬的", chinese_romanization: "zūnjìng de" },
            { option: "B", answer: "holy", chinese_answer: "神圣的", chinese_romanization: "shénshèng de" },
            { option: "C", answer: "reverent", chinese_answer: "虔诚的", chinese_romanization: "qiánchéng de" },
            { option: "D", answer: "sacrilegious", chinese_answer: "亵渎的", chinese_romanization: "xièdú de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'sacrilegious' means involving or committing sacrilege, which is a violation or misuse of what is regarded as sacred." +
            "<br><br>" +
            "(A) 'respectful' means feeling or showing deference and respect." +
            "<br><br>" +
            "(B) 'holy' means dedicated or consecrated to God or a religious purpose; sacred." +
            "<br><br>" +
            "(C) 'reverent' means feeling or showing deep and solemn respect.",
        chinese_explanation: "(D) '亵渎的' 一词意味着涉及或犯亵渎行为，这是对被视为神圣的东西的违反或滥用。" +
            "<br><br>" +
            "(A) '尊敬的' 意味着感到或表现出敬意和尊重。" +
            "<br><br>" +
            "(B) '神圣的' 意味着奉献给上帝或宗教目的的；神圣的。" +
            "<br><br>" +
            "(C) '虔诚的' 意味着感到或表现出深切和庄重的尊重。"
    },
    {
        id: 9,
        question: "The pianist's __________ performance left the audience in awe, showcasing her exceptional skill and passion.",
        chinese_question: "钢琴家的 __________ 表演让观众惊叹不已，展示了她非凡的技艺和热情。",
        answers: [
            { option: "A", answer: "mediocre", chinese_answer: "平庸的", chinese_romanization: "píngyōng de" },
            { option: "B", answer: "bravura", chinese_answer: "精湛的", chinese_romanization: "jīngzhàn de" },
            { option: "C", answer: "timid", chinese_answer: "胆小的", chinese_romanization: "dǎnxiǎo de" },
            { option: "D", answer: "lackluster", chinese_answer: "平淡的", chinese_romanization: "píngdàn de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'bravura' means great technical skill and brilliance shown in a performance or activity." +
            "<br><br>" +
            "(A) 'mediocre' means of only moderate quality; not very good." +
            "<br><br>" +
            "(C) 'timid' means showing a lack of courage or confidence; easily frightened." +
            "<br><br>" +
            "(D) 'lackluster' means lacking in vitality, force, or conviction; uninspired or uninspiring.",
        chinese_explanation: "(B) '精湛的' 一词意味着在表演或活动中展示的高超技术和辉煌。" +
            "<br><br>" +
            "(A) '平庸的' 意味着质量一般；不是很好。" +
            "<br><br>" +
            "(C) '胆小的' 意味着表现出缺乏勇气或信心；容易受惊。" +
            "<br><br>" +
            "(D) '平淡的' 意味着缺乏活力、力量或信念；无创意或无激励的。"
    },
    {
        id: 10,
        question: "The novel delves into __________ questions about the meaning of life and the nature of existence.",
        chinese_question: "这部小说深入探讨了关于生命意义和存在本质的 __________ 问题。",
        answers: [
            { option: "A", answer: "trivial", chinese_answer: "琐碎的", chinese_romanization: "suǒsuì de" },
            { option: "B", answer: "superficial", chinese_answer: "表面的", chinese_romanization: "biǎomiàn de" },
            { option: "C", answer: "existential", chinese_answer: "存在的", chinese_romanization: "cúnzài de" },
            { option: "D", answer: "minor", chinese_answer: "次要的", chinese_romanization: "cìyào de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'existential' means relating to existence, especially human existence." +
            "<br><br>" +
            "(A) 'trivial' means of little value or importance." +
            "<br><br>" +
            "(B) 'superficial' means existing or occurring at or on the surface." +
            "<br><br>" +
            "(D) 'minor' means lesser in importance, seriousness, or significance.",
        chinese_explanation: "(C) '存在的' 一词意味着与存在有关，特别是人类的存在。" +
            "<br><br>" +
            "(A) '琐碎的' 意味着价值或重要性很小的。" +
            "<br><br>" +
            "(B) '表面的' 意味着存在或发生在表面上。" +
            "<br><br>" +
            "(D) '次要的' 意味着重要性、严重性或意义较小的。"
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
