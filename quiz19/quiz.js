// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "Her __________ career was marked by numerous awards and recognitions, reflecting her hard work and dedication.",
        chinese_question: "她的 __________ 职业生涯以众多奖项和荣誉为标志，反映了她的努力和奉献。",
        answers: [
            { option: "A", answer: "stagnant", chinese_answer: "停滞的", chinese_romanization: "tíngzhì de" },
            { option: "B", answer: "struggling", chinese_answer: "奋斗的", chinese_romanization: "fèndòu de" },
            { option: "C", answer: "prosperous", chinese_answer: "繁荣的", chinese_romanization: "fánróng de" },
            { option: "D", answer: "unremarkable", chinese_answer: "不显著的", chinese_romanization: "bù xiǎnzhù de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'prosperous' figuratively means flourishing and successful." +
            "<br><br>" +
            "(A) 'stagnant' means showing no activity; dull and sluggish." +
            "<br><br>" +
            "(B) 'struggling' means making strenuous efforts in the face of difficulties." +
            "<br><br>" +
            "(D) 'unremarkable' means not particularly interesting or surprising.",
        chinese_explanation: "(C) '繁荣的' 在比喻意义上意味着繁荣和成功。" +
            "<br><br>" +
            "(A) '停滞的' 意味着没有活动的；沉闷和迟钝的。" +
            "<br><br>" +
            "(B) '奋斗的' 意味着在困难面前做出艰苦努力的。" +
            "<br><br>" +
            "(D) '不显著的' 意味着没有特别有趣或惊讶的。"
    },
    {
        id: 2,
        question: "Despite the mounting problems, the CEO remained __________, focusing only on the company's immediate profits.",
        chinese_question: "尽管问题不断增加，CEO 仍然 __________，只关注公司的直接利润。",
        answers: [
            { option: "A", answer: "concerned", chinese_answer: "关心的", chinese_romanization: "guānxīn de" },
            { option: "B", answer: "oblivious", chinese_answer: "无视的", chinese_romanization: "wúshì de" },
            { option: "C", answer: "proactive", chinese_answer: "积极主动的", chinese_romanization: "jījí zhǔdòng de" },
            { option: "D", answer: "responsive", chinese_answer: "反应灵敏的", chinese_romanization: "fǎnyìng língmǐn de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'oblivious' figuratively means unaware or indifferent to important issues." +
            "<br><br>" +
            "(A) 'concerned' means worried, troubled, or anxious." +
            "<br><br>" +
            "(C) 'proactive' means creating or controlling a situation by causing something to happen rather than responding to it after it has happened." +
            "<br><br>" +
            "(D) 'responsive' means reacting quickly and positively.",
        chinese_explanation: "(B) '无视的' 在比喻意义上意味着对重要问题没有意识或不关心。" +
            "<br><br>" +
            "(A) '关心的' 意味着担心、烦恼或焦虑。" +
            "<br><br>" +
            "(C) '积极主动的' 意味着通过引发某事而不是在其发生后作出反应来创造或控制一种情况。" +
            "<br><br>" +
            "(D) '反应灵敏的' 意味着迅速和积极地反应。"
    },
    {
        id: 3,
        question: "Creative ideas were __________ in the brainstorming session, making it difficult to come up with a solid plan.",
        chinese_question: "头脑风暴会议上的创意__________，使得很难制定一个可靠的计划。",
        answers: [
            { option: "A", answer: "abundant", chinese_answer: "丰富", chinese_romanization: "fēngfù" },
            { option: "B", answer: "plentiful", chinese_answer: "充足", chinese_romanization: "chōngzú" },
            { option: "C", answer: "scarce", chinese_answer: "稀缺", chinese_romanization: "xīquē" },
            { option: "D", answer: "available", chinese_answer: "可用", chinese_romanization: "kě yòng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'scarce' means insufficient for the demand." +
            "<br><br>" +
            "(A) 'abundant' means existing or available in large quantities." +
            "<br><br>" +
            "(B) 'plentiful' means existing in or yielding great quantities." +
            "<br><br>" +
            "(D) 'available' means able to be used or obtained.",
        chinese_explanation: "(C) '稀缺'一词意味着不足以满足需求。" +
            "<br><br>" +
            "(A) '丰富' 意味着大量存在或可获得。" +
            "<br><br>" +
            "(B) '充足' 意味着存在或提供大量的。" +
            "<br><br>" +
            "(D) '可用' 意味着可以使用或获得的。"
    },
    {
        id: 4,
        question: "Her __________ approach to life kept her grounded and focused.",
        chinese_question: "她对生活的 __________ 态度使她保持脚踏实地和专注。",
        answers: [
            { option: "A", answer: "conservative", chinese_answer: "保守的", chinese_romanization: "bǎoshǒu de" },
            { option: "B", answer: "adventurous", chinese_answer: "冒险的", chinese_romanization: "màoxiǎn de" },
            { option: "C", answer: "impulsive", chinese_answer: "冲动的", chinese_romanization: "chōngdòng de" },
            { option: "D", answer: "reckless", chinese_answer: "鲁莽的", chinese_romanization: "lǔmǎng de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'conservative' metaphorically means cautious and careful." +
            "<br><br>" +
            "(B) 'adventurous' means willing to take risks or to try out new methods, ideas, or experiences." +
            "<br><br>" +
            "(C) 'impulsive' means acting or done without forethought." +
            "<br><br>" +
            "(D) 'reckless' means without thinking or caring about the consequences of an action.",
        chinese_explanation: "(A) '保守的' 比喻谨慎和小心的。" +
            "<br><br>" +
            "(B) '冒险的' 意味着愿意冒险或尝试新的方法、想法或经验。" +
            "<br><br>" +
            "(C) '冲动的' 意味着不经思考或计划就做出的。" +
            "<br><br>" +
            "(D) '鲁莽的' 意味着不考虑行动后果的。"
    },
    {
        id: 5,
        question: "His __________ reason for missing the meeting was a doctor's appointment, but he was actually at a job interview.",
        chinese_question: "他缺席会议的 __________ 原因是看医生，实际上他在参加工作面试。",
        answers: [
            { option: "A", answer: "genuine", chinese_answer: "真正的", chinese_romanization: "zhēnzhèng de" },
            { option: "B", answer: "hidden", chinese_answer: "隐藏的", chinese_romanization: "yǐncáng de" },
            { option: "C", answer: "unintentional", chinese_answer: "无意的", chinese_romanization: "wúyì de" },
            { option: "D", answer: "ostensible", chinese_answer: "表面的", chinese_romanization: "biǎomiàn de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'ostensible' means stated or appearing to be true, but not necessarily so." +
            "<br><br>" +
            "(A) 'genuine' means truly what something is said to be; authentic." +
            "<br><br>" +
            "(B) 'hidden' means kept out of sight; concealed." +
            "<br><br>" +
            "(C) 'unintentional' means not done on purpose.",
        chinese_explanation: "(D) '表面的' 意味着陈述的或看起来是真的，但不一定如此。" +
            "<br><br>" +
            "(A) '真正的' 意味着确实如所说的那样；真实的。" +
            "<br><br>" +
            "(B) '隐藏的' 意味着藏在视线之外；隐藏的。" +
            "<br><br>" +
            "(C) '无意的' 意味着不是故意的。"
    },
    {
        id: 6,
        question: "The __________ tour guide kept interrupting the group's conversations to point out insignificant details.",
        chinese_question: "那个 __________ 的导游不断打断团队的对话，指出无关紧要的细节。",
        answers: [
            { option: "A", answer: "knowledgeable", chinese_answer: "博学的", chinese_romanization: "bóxué de" },
            { option: "B", answer: "indifferent", chinese_answer: "冷漠的", chinese_romanization: "lěngmò de" },
            { option: "C", answer: "considerate", chinese_answer: "体贴的", chinese_romanization: "tǐtiē de" },
            { option: "D", answer: "officious", chinese_answer: "多管闲事的", chinese_romanization: "duōguǎnxiánshì de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'officious' means assertive of authority in an annoyingly domineering way, especially with regard to petty or trivial matters." +
            "<br><br>" +
            "(A) 'knowledgeable' means intelligent and well-informed." +
            "<br><br>" +
            "(B) 'indifferent' means having no particular interest or sympathy; unconcerned." +
            "<br><br>" +
            "(C) 'considerate' means careful not to cause inconvenience or hurt to others.",
        chinese_explanation: "(D) '多管闲事的' 意味着以一种令人恼火的专横方式行使权威，尤其是在琐碎或微不足道的事情上。" +
            "<br><br>" +
            "(A) '博学的' 意味着聪明和知识渊博的。" +
            "<br><br>" +
            "(B) '冷漠的' 意味着没有特别的兴趣或同情；不关心的。" +
            "<br><br>" +
            "(C) '体贴的' 意味着小心不引起不便或伤害他人的。"
    },
    {
        id: 7,
        question: "The new business venture proved to be __________, generating substantial profits within the first year.",
        chinese_question: "新的商业冒险被证明是 __________ 的，在第一年就产生了可观的利润。",
        answers: [
            { option: "A", answer: "unprofitable", chinese_answer: "无利可图的", chinese_romanization: "wúlì kě tú de" },
            { option: "B", answer: "risky", chinese_answer: "风险大的", chinese_romanization: "fēngxiǎn dà de" },
            { option: "C", answer: "lucrative", chinese_answer: "有利可图的", chinese_romanization: "yǒulì kě tú de" },
            { option: "D", answer: "marginal", chinese_answer: "边缘的", chinese_romanization: "biānyuán de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'lucrative' means producing a great deal of profit." +
            "<br><br>" +
            "(A) 'unprofitable' means not yielding profit or financial gain." +
            "<br><br>" +
            "(B) 'risky' means full of the possibility of danger, failure, or loss." +
            "<br><br>" +
            "(D) 'marginal' means of secondary or minor importance; not central.",
        chinese_explanation: "(C) '有利可图的' 意味着产生大量利润。" +
            "<br><br>" +
            "(A) '无利可图的' 意味着没有产生利润或经济收益。" +
            "<br><br>" +
            "(B) '风险大的' 意味着充满危险、失败或损失的可能性。" +
            "<br><br>" +
            "(D) '边缘的' 意味着次要的或次要的重要性；不重要的。"
    },
    {
        id: 8,
        question: "Despite facing many challenges, the team remained __________ and quickly adapted to new circumstances.",
        chinese_question: "尽管面临许多挑战，团队依然 __________，并迅速适应了新环境。",
        answers: [
            { option: "A", answer: "fragile", chinese_answer: "脆弱的", chinese_romanization: "cuìruò de" },
            { option: "B", answer: "weak", chinese_answer: "虚弱的", chinese_romanization: "xūruò de" },
            { option: "C", answer: "resilient", chinese_answer: "有弹性的", chinese_romanization: "yǒu tánxìng de" },
            { option: "D", answer: "inflexible", chinese_answer: "不灵活的", chinese_romanization: "bù línghuó de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'resilient' means able to withstand or recover quickly from difficult conditions." +
            "<br><br>" +
            "(A) 'fragile' means easily broken or damaged." +
            "<br><br>" +
            "(B) 'weak' means lacking the power to perform physically demanding tasks." +
            "<br><br>" +
            "(D) 'inflexible' means unwilling to change or compromise.",
        chinese_explanation: "(C) '有弹性的' 一词意味着能够承受或迅速从困难的条件中恢复。" +
            "<br><br>" +
            "(A) '脆弱的' 意味着容易破碎或损坏的。" +
            "<br><br>" +
            "(B) '虚弱的' 意味着缺乏执行体力任务的能力。" +
            "<br><br>" +
            "(D) '不灵活的' 意味着不愿意改变或妥协的。"
    },
    {
        id: 9,
        question: "In informal settings, people often use __________ language rather than formal speech.",
        chinese_question: "在非正式场合，人们常常使用 __________ 语言而不是正式演讲。",
        answers: [
            { option: "A", answer: "archaic", chinese_answer: "古老的", chinese_romanization: "gǔlǎo de" },
            { option: "B", answer: "colloquial", chinese_answer: "口语的", chinese_romanization: "kǒuyǔ de" },
            { option: "C", answer: "scientific", chinese_answer: "科学的", chinese_romanization: "kēxué de" },
            { option: "D", answer: "technical", chinese_answer: "技术的", chinese_romanization: "jìshù de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'colloquial' means (of language) used in ordinary or familiar conversation; not formal or literary." +
            "<br><br>" +
            "(A) 'archaic' means very old or old-fashioned." +
            "<br><br>" +
            "(C) 'scientific' means based on or characterized by the methods and principles of science." +
            "<br><br>" +
            "(D) 'technical' means relating to a particular subject, art, or craft, or its techniques.",
        chinese_explanation: "(B) '口语的' 一词意味着在普通或熟悉的对话中使用的语言；不正式或不文学的。" +
            "<br><br>" +
            "(A) '古老的' 意味着非常古老或老式的。" +
            "<br><br>" +
            "(C) '科学的' 意味着基于科学的方法和原则。" +
            "<br><br>" +
            "(D) '技术的' 意味着与特定学科、艺术或手艺或其技术有关的。"
    },
    {
        id: 10,
        question: "Known for his __________ responses, John simply said 'Yes' when asked if he liked the movie.",
        chinese_question: "以 __________ 回应而闻名，当被问及是否喜欢这部电影时，约翰只是简单地说了“是”。",
        answers: [
            { option: "A", answer: "verbose", chinese_answer: "冗长的", chinese_romanization: "rǒngcháng de" },
            { option: "B", answer: "detailed", chinese_answer: "详细的", chinese_romanization: "xiángxì de" },
            { option: "C", answer: "elaborate", chinese_answer: "精细的", chinese_romanization: "jīngxì de" },
            { option: "D", answer: "laconic", chinese_answer: "简洁的", chinese_romanization: "jiǎnjié de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'laconic' means using very few words. It describes someone who is brief and to the point in their speech or writing. A laconic person avoids unnecessary words and gets straight to the point." +
            "<br><br>" +
            "(A) 'verbose' means using or expressed in more words than are needed." +
            "<br><br>" +
            "(B) 'detailed' means including many details or facts." +
            "<br><br>" +
            "(C) 'elaborate' means involving many carefully arranged parts or details; detailed and complicated in design and planning.",
        chinese_explanation: "(D) '简洁的' 意味着使用很少的词语。它描述了一个人在讲话或写作时简短明了。简洁的人避免使用不必要的词语，直奔主题。" +
            "<br><br>" +
            "(A) '冗长的' 意味着使用或表达的词比需要的多。" +
            "<br><br>" +
            "(B) '详细的' 意味着包括很多细节或事实。" +
            "<br><br>" +
            "(C) '精细的' 意味着涉及许多精心安排的部分或细节；在设计和计划上详细而复杂的。"
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
