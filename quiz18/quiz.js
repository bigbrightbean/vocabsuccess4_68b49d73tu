// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "Her __________ attitude helped her adapt to new challenges easily.",
        chinese_question: "她 __________ 的态度帮助她轻松应对新的挑战。",
        answers: [
            { option: "A", answer: "flexible", chinese_answer: "灵活的", chinese_romanization: "línghuó de" },
            { option: "B", answer: "stubborn", chinese_answer: "固执的", chinese_romanization: "gùzhí de" },
            { option: "C", answer: "indifferent", chinese_answer: "漠不关心的", chinese_romanization: "mò bù guānxīn de" },
            { option: "D", answer: "pessimistic", chinese_answer: "悲观的", chinese_romanization: "bēiguān de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'flexible' metaphorically means adaptable or versatile." +
            "<br><br>" +
            "(B) 'stubborn' means having or showing dogged determination not to change one's attitude or position on something." +
            "<br><br>" +
            "(C) 'indifferent' means having no particular interest or sympathy." +
            "<br><br>" +
            "(D) 'pessimistic' means tending to see the worst aspect of things or believe that the worst will happen.",
        chinese_explanation: "(A) '灵活的' 比喻适应性强或多才多艺的。" +
            "<br><br>" +
            "(B) '固执的' 意味着有或表现出不愿改变态度或立场的顽固决心。" +
            "<br><br>" +
            "(C) '漠不关心的' 意味着没有特别的兴趣或同情心。" +
            "<br><br>" +
            "(D) '悲观的' 意味着倾向于看到事物的最坏方面或相信最坏的事情会发生。"
    },
    {
        id: 2,
        question: "His __________ pursuit of knowledge was evident in his extensive library.",
        chinese_question: "他对知识的 __________ 追求在他的广泛藏书中显而易见。",
        answers: [
            { option: "A", answer: "indifferent", chinese_answer: "冷漠的", chinese_romanization: "lěngmò de" },
            { option: "B", answer: "superficial", chinese_answer: "表面的", chinese_romanization: "biǎomiàn de" },
            { option: "C", answer: "casual", chinese_answer: "随意的", chinese_romanization: "suíyì de" },
            { option: "D", answer: "ardent", chinese_answer: "热烈的", chinese_romanization: "rèliè de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'ardent' metaphorically means having or showing strong feelings." +
            "<br><br>" +
            "(A) 'indifferent' means having no particular interest or sympathy." +
            "<br><br>" +
            "(B) 'superficial' means existing or occurring at or on the surface." +
            "<br><br>" +
            "(C) 'casual' means relaxed and unconcerned.",
        chinese_explanation: "(D) '热烈的' 比喻具有或表现出强烈感情的。" +
            "<br><br>" +
            "(A) '冷漠的' 意味着没有特别的兴趣或同情心。" +
            "<br><br>" +
            "(B) '表面的' 意味着存在或发生在表面上。" +
            "<br><br>" +
            "(C) '随意的' 意味着放松和不关心的。"
    },
    {
        id: 3,
        question: "Her career has been __________, with many significant achievements and challenges.",
        chinese_question: "她的职业生涯 __________，有许多重要的成就和挑战。",
        answers: [
            { option: "A", answer: "eventful", chinese_answer: "多事的", chinese_romanization: "duōshì de" },
            { option: "B", answer: "stagnant", chinese_answer: "停滞的", chinese_romanization: "tíngzhì de" },
            { option: "C", answer: "monotonous", chinese_answer: "单调的", chinese_romanization: "dāndiào de" },
            { option: "D", answer: "predictable", chinese_answer: "可预测的", chinese_romanization: "kě yùcè de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'eventful' metaphorically means full of important or interesting occurrences." +
            "<br><br>" +
            "(B) 'stagnant' means showing no activity; dull and sluggish." +
            "<br><br>" +
            "(C) 'monotonous' means dull, tedious, and repetitious; lacking in variety and interest." +
            "<br><br>" +
            "(D) 'predictable' means able to be predicted.",
        chinese_explanation: "(A) '多事的' 比喻充满重要或有趣的事件。" +
            "<br><br>" +
            "(B) '停滞的' 意味着没有活动；乏味和迟钝的。" +
            "<br><br>" +
            "(C) '单调的' 意味着乏味、冗长和重复的；缺乏多样性和兴趣的。" +
            "<br><br>" +
            "(D) '可预测的' 意味着能够被预测的。"
    },
    {
        id: 4,
        question: "The company's __________ violation of environmental laws led to heavy fines.",
        chinese_question: "该公司对环境法律的__________违反导致了巨额罚款。",
        answers: [
            { option: "A", answer: "subtle", chinese_answer: "微妙的", chinese_romanization: "wēimiào de" },
            { option: "B", answer: "hidden", chinese_answer: "隐藏的", chinese_romanization: "yǐncáng de" },
            { option: "C", answer: "flagrant", chinese_answer: "明目张胆的", chinese_romanization: "míngmùzhāngdǎn de" },
            { option: "D", answer: "discreet", chinese_answer: "谨慎的", chinese_romanization: "jǐnshèn de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'flagrant' means (of something considered wrong or immoral) conspicuously or obviously offensive. Figuratively, it can mean something done openly and without shame." +
            "<br><br>" +
            "(A) 'subtle' means (especially of a change or distinction) so delicate or precise as to be difficult to analyze or describe." +
            "<br><br>" +
            "(B) 'hidden' means kept out of sight; concealed." +
            "<br><br>" +
            "(D) 'discreet' means careful and circumspect in one's speech or actions, especially in order to avoid causing offense or to gain an advantage.",
        chinese_explanation: "(C) '明目张胆的'一词意味着（被认为错误或不道德的事物）显眼或明显地冒犯。比喻地，它可以表示公开且无耻地进行的事情。" +
            "<br><br>" +
            "(A) '微妙的' 意味着（尤其是变化或区别）如此精致或准确，以至于难以分析或描述。" +
            "<br><br>" +
            "(B) '隐藏的' 意味着隐藏起来的；隐藏的。" +
            "<br><br>" +
            "(D) '谨慎的' 意味着在言语或行动中小心谨慎，尤其是为了避免冒犯或获取优势。"
    },
    {
        id: 5,
        question: "The constant failures left him feeling utterly __________ about his future prospects.",
        chinese_question: "不断的失败让他对未来的前景感到极度 __________。",
        answers: [
            { option: "A", answer: "despondent", chinese_answer: "沮丧", chinese_romanization: "jǔsàng" },
            { option: "B", answer: "encouraged", chinese_answer: "鼓励", chinese_romanization: "gǔlì" },
            { option: "C", answer: "hopeful", chinese_answer: "有希望", chinese_romanization: "yǒu xīwàng" },
            { option: "D", answer: "inspired", chinese_answer: "受启发", chinese_romanization: "shòu qǐfā" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'despondent' metaphorically means feeling or showing profound hopelessness, dejection, discouragement, or gloom." +
            "<br><br>" +
            "(B) 'encouraged' means give support, confidence, or hope to (someone)." +
            "<br><br>" +
            "(C) 'hopeful' means feeling or inspiring optimism about a future event." +
            "<br><br>" +
            "(D) 'inspired' means of extraordinary quality, as if arising from some external creative impulse.",
        chinese_explanation: "(A) '沮丧' 比喻感到或表现出极度的无望、沮丧、泄气或忧郁。" +
            "<br><br>" +
            "(B) '鼓励' 意味着给（某人）支持、信心或希望。" +
            "<br><br>" +
            "(C) '有希望' 意味着对未来事件感到或激发乐观。" +
            "<br><br>" +
            "(D) '受启发' 意味着质量非凡，仿佛源于某种外部创造性冲动。"
    },
    {
        id: 6,
        question: "She enjoys a __________ lifestyle, filled with fine dining and expensive vacations.",
        chinese_question: "她享受 __________ 的生活方式，充满了高级餐饮和昂贵的假期。",
        answers: [
            { option: "A", answer: "luxurious", chinese_answer: "奢华的", chinese_romanization: "shēhuá de" },
            { option: "B", answer: "frugal", chinese_answer: "节俭的", chinese_romanization: "jiéjiǎn de" },
            { option: "C", answer: "thrifty", chinese_answer: "节省的", chinese_romanization: "jiéshěng de" },
            { option: "D", answer: "modest", chinese_answer: "谦虚的", chinese_romanization: "qiānxū de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'luxurious' metaphorically means characterized by opulence, richness, and comfort." +
            "<br><br>" +
            "(B) 'frugal' means sparing or economical with regard to money or food." +
            "<br><br>" +
            "(C) 'thrifty' means using money and other resources carefully and not wastefully." +
            "<br><br>" +
            "(D) 'modest' means unassuming in the estimation of one's abilities or achievements.",
        chinese_explanation: "(A) '奢华的' 比喻富裕、丰富和舒适的特征。" +
            "<br><br>" +
            "(B) '节俭的' 意味着在金钱或食物方面节约的。" +
            "<br><br>" +
            "(C) '节省的' 意味着仔细且不浪费地使用金钱和其他资源的。" +
            "<br><br>" +
            "(D) '谦虚的' 意味着对自己能力或成就的估计不过分。"
    },
    {
        id: 7,
        question: "The manager's __________ honesty sometimes hurt the employees' feelings, but it was always meant to improve their performance.",
        chinese_question: "经理 __________ 的诚实有时会伤害员工的感情，但他的目的是为了提高他们的表现。",
        answers: [
            { option: "A", answer: "gentle", chinese_answer: "温柔", chinese_romanization: "wēnróu" },
            { option: "B", answer: "brutal", chinese_answer: "残酷", chinese_romanization: "cánkù" },
            { option: "C", answer: "soothing", chinese_answer: "安慰", chinese_romanization: "ānwèi" },
            { option: "D", answer: "delicate", chinese_answer: "精致", chinese_romanization: "jīngzhì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'brutal' means direct and uncomfortably honest." +
            "<br><br>" +
            "(A) 'gentle' means mild in temperament or behavior." +
            "<br><br>" +
            "(C) 'soothing' means having a gently calming effect." +
            "<br><br>" +
            "(D) 'delicate' means very fine in texture or structure; easily broken or damaged.",
        chinese_explanation: "(B) '残酷' 意味着直接和不舒服的诚实。" +
            "<br><br>" +
            "(A) '温柔' 意味着性格或行为温和。" +
            "<br><br>" +
            "(C) '安慰' 意味着具有温和的镇静作用。" +
            "<br><br>" +
            "(D) '精致' 意味着质地或结构非常细腻；容易破碎或损坏。"
    },
    {
        id: 8,
        question: "Her __________ disregard for the rules made it difficult for anyone to trust her judgment.",
        chinese_question: "她对规则的__________无视使得任何人都难以信任她的判断。",
        answers: [
            { option: "A", answer: "minor", chinese_answer: "轻微", chinese_romanization: "qīngwēi" },
            { option: "B", answer: "accidental", chinese_answer: "偶然", chinese_romanization: "ǒurán" },
            { option: "C", answer: "flagrant", chinese_answer: "公然", chinese_romanization: "gōngrán" },
            { option: "D", answer: "unnoticed", chinese_answer: "未被注意", chinese_romanization: "wèi bèi zhùyì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'flagrant' means conspicuously or obviously offensive." +
            "<br><br>" +
            "(A) 'minor' means lesser in importance, seriousness, or significance." +
            "<br><br>" +
            "(B) 'accidental' means happening by chance or unexpectedly." +
            "<br><br>" +
            "(D) 'unnoticed' means not noticed or observed.",
        chinese_explanation: "(C) '公然'一词意味着显眼或明显冒犯的。" +
            "<br><br>" +
            "(A) '轻微' 意味着重要性、严重性或意义较小。" +
            "<br><br>" +
            "(B) '偶然' 意味着偶然或意外发生。" +
            "<br><br>" +
            "(D) '未被注意' 意味着没有被注意或观察到。"
    },
    {
        id: 9,
        question: "The __________ deadlines put immense pressure on the team to deliver results quickly.",
        chinese_question: "__________ 的截止日期给团队带来了巨大的压力，要求他们快速交付成果。",
        answers: [
            { option: "A", answer: "flexible", chinese_answer: "灵活的", chinese_romanization: "línghuó de" },
            { option: "B", answer: "relaxed", chinese_answer: "放松的", chinese_romanization: "fàngsōng de" },
            { option: "C", answer: "stringent", chinese_answer: "严格的", chinese_romanization: "yángé de" },
            { option: "D", answer: "lenient", chinese_answer: "宽松的", chinese_romanization: "kuānsōng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'stringent' figuratively means demanding strict attention to rules and procedures." +
            "<br><br>" +
            "(A) 'flexible' means capable of bending easily without breaking." +
            "<br><br>" +
            "(B) 'relaxed' means free from tension and anxiety; at ease." +
            "<br><br>" +
            "(D) 'lenient' means (of punishment or a person in authority) permissive, merciful, or tolerant.",
        chinese_explanation: "(C) '严格的' 在比喻意义上意味着要求严格注意规则和程序的。" +
            "<br><br>" +
            "(A) '灵活的' 意味着能够轻松弯曲而不断裂的。" +
            "<br><br>" +
            "(B) '放松的' 意味着没有紧张和焦虑的；放松的。" +
            "<br><br>" +
            "(D) '宽松的' 意味着（惩罚或有权威的人）宽容、仁慈或宽容。"
    },
    {
        id: 10,
        question: "The new software proved to be highly __________ for the company, increasing productivity and reducing costs.",
        chinese_question: "新的软件对公司非常 __________，提高了生产力并减少了成本。",
        answers: [
            { option: "A", answer: "advantageous", chinese_answer: "有利", chinese_romanization: "yǒulì" },
            { option: "B", answer: "detrimental", chinese_answer: "有害", chinese_romanization: "yǒuhài" },
            { option: "C", answer: "negligible", chinese_answer: "微不足道", chinese_romanization: "wēibùzúdào" },
            { option: "D", answer: "trivial", chinese_answer: "不重要", chinese_romanization: "bù zhòngyào" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'advantageous' means beneficial or giving an advantage." +
            "<br><br>" +
            "(B) 'detrimental' means harmful." +
            "<br><br>" +
            "(C) 'negligible' means insignificant." +
            "<br><br>" +
            "(D) 'trivial' means unimportant.",
        chinese_explanation: "(A) '有利' 意味着有益或带来优势。" +
            "<br><br>" +
            "(B) '有害' 意味着有害。" +
            "<br><br>" +
            "(C) '微不足道' 意味着不重要。" +
            "<br><br>" +
            "(D) '不重要' 意味着无关紧要。"
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
