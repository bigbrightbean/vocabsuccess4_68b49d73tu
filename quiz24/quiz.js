// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The hero's journey is an __________ narrative, embodying the quintessential elements of adventure and self-discovery.",
        chinese_question: "英雄的旅程是一个 __________ 的叙事，体现了冒险和自我发现的典型元素。",
        answers: [
            { option: "A", answer: "unique", chinese_answer: "独特的", chinese_romanization: "dútè de" },
            { option: "B", answer: "archetypal", chinese_answer: "典型的", chinese_romanization: "diǎnxíng de" },
            { option: "C", answer: "unconventional", chinese_answer: "非传统的", chinese_romanization: "fēi chuántǒng de" },
            { option: "D", answer: "atypical", chinese_answer: "非典型的", chinese_romanization: "fēi diǎnxíng de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'archetypal' means very typical of a certain kind of person or thing." +
            "<br><br>" +
            "(A) 'unique' means being the only one of its kind; unlike anything else." +
            "<br><br>" +
            "(C) 'unconventional' means not based on or conforming to what is generally done or believed." +
            "<br><br>" +
            "(D) 'atypical' means not representative of a type, group, or class.",
        chinese_explanation: "(B) '典型的' 一词意味着某种类型的人或事物的非常典型。" +
            "<br><br>" +
            "(A) '独特的' 意味着是同类中唯一的；与众不同的。" +
            "<br><br>" +
            "(C) '非传统的' 意味着不基于或不符合通常所做或所信的。" +
            "<br><br>" +
            "(D) '非典型的' 意味着不代表一种类型、群体或类别的。"
    },
    {
        id: 2,
        question: "The judge dismissed the lawsuit as __________, stating that it lacked any serious legal basis.",
        chinese_question: "法官认为这起诉讼 __________，称其没有任何严肃的法律依据。",
        answers: [
            { option: "A", answer: "important", chinese_answer: "重要的", chinese_romanization: "zhòngyào de" },
            { option: "B", answer: "substantial", chinese_answer: "实质性的", chinese_romanization: "shízhì xìng de" },
            { option: "C", answer: "significant", chinese_answer: "有意义的", chinese_romanization: "yǒu yìyì de" },
            { option: "D", answer: "frivolous", chinese_answer: "无关紧要的", chinese_romanization: "wúguān jìnyào de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'frivolous' means not having any serious purpose or value." +
            "<br><br>" +
            "(A) 'important' means of great significance or value." +
            "<br><br>" +
            "(B) 'substantial' means of considerable importance, size, or worth." +
            "<br><br>" +
            "(C) 'significant' means sufficiently great or important to be worthy of attention.",
        chinese_explanation: "(D) '无关紧要的' 一词意味着没有任何严肃目的或价值。" +
            "<br><br>" +
            "(A) '重要的' 意味着具有重大意义或价值。" +
            "<br><br>" +
            "(B) '实质性的' 意味着相当重要、规模或价值的。" +
            "<br><br>" +
            "(C) '有意义的' 意味着足够伟大或重要，值得关注。"
    },
    {
        id: 3,
        question: "The ancient ruins contained many __________ symbols, reflecting a language no longer in use.",
        chinese_question: "古代遗址包含许多 __________ 符号，反映了一种不再使用的语言。",
        answers: [
            { option: "A", answer: "modern", chinese_answer: "现代的", chinese_romanization: "xiàndài de" },
            { option: "B", answer: "archaic", chinese_answer: "古老的", chinese_romanization: "gǔlǎo de" },
            { option: "C", answer: "contemporary", chinese_answer: "当代的", chinese_romanization: "dāngdài de" },
            { option: "D", answer: "current", chinese_answer: "当前的", chinese_romanization: "dāngqián de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'archaic' means very old or old-fashioned." +
            "<br><br>" +
            "(A) 'modern' means relating to the present or recent times as opposed to the remote past." +
            "<br><br>" +
            "(C) 'contemporary' means living or occurring at the same time." +
            "<br><br>" +
            "(D) 'current' means belonging to the present time; happening or being used or done now.",
        chinese_explanation: "(B) '古老的' 一词意味着非常古老或过时的。" +
            "<br><br>" +
            "(A) '现代的' 意味着与现在或最近的时间有关，而不是遥远的过去。" +
            "<br><br>" +
            "(C) '当代的' 意味着在同一时间生活或发生的。" +
            "<br><br>" +
            "(D) '当前的' 意味着属于现在的时间；正在发生或被使用或完成的。"
    },
    {
        id: 4,
        question: "The perfume's __________ notes were subtle but lingering, creating a lasting impression.",
        chinese_question: "香水的 __________ 气味微妙但持久，留下了深刻的印象。",
        answers: [
            { option: "A", answer: "visual", chinese_answer: "视觉的", chinese_romanization: "shìjué de" },
            { option: "B", answer: "tactile", chinese_answer: "触觉的", chinese_romanization: "chùjué de" },
            { option: "C", answer: "olfactory", chinese_answer: "嗅觉的", chinese_romanization: "xiùjué de" },
            { option: "D", answer: "auditory", chinese_answer: "听觉的", chinese_romanization: "tīngjué de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'olfactory' means relating to the sense of smell." +
            "<br><br>" +
            "(A) 'visual' means relating to seeing or sight." +
            "<br><br>" +
            "(B) 'tactile' means connected with the sense of touch." +
            "<br><br>" +
            "(D) 'auditory' means relating to the sense of hearing.",
        chinese_explanation: "(C) '嗅觉的' 一词意味着与嗅觉有关的。" +
            "<br><br>" +
            "(A) '视觉的' 意味着与看或视力有关的。" +
            "<br><br>" +
            "(B) '触觉的' 意味着与触觉有关的。" +
            "<br><br>" +
            "(D) '听觉的' 意味着与听觉有关的。"
    },
    {
        id: 5,
        question: "The company's disregard for environmental regulations was an __________ violation, resulting in hefty fines.",
        chinese_question: "公司对环境法规的漠视是 __________ 的违规行为，导致了巨额罚款。",
        answers: [
            { option: "A", answer: "minor", chinese_answer: "轻微的", chinese_romanization: "qīngwēi de" },
            { option: "B", answer: "egregious", chinese_answer: "极其严重的", chinese_romanization: "jíqí yánzhòng de" },
            { option: "C", answer: "negligible", chinese_answer: "微不足道的", chinese_romanization: "wēibùzúdào de" },
            { option: "D", answer: "trivial", chinese_answer: "琐碎的", chinese_romanization: "suǒsuì de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'egregious' means outstandingly bad; shocking." +
            "<br><br>" +
            "(A) 'minor' means lesser in importance, seriousness, or significance." +
            "<br><br>" +
            "(C) 'negligible' means so small or unimportant as to be not worth considering; insignificant." +
            "<br><br>" +
            "(D) 'trivial' means of little value or importance.",
        chinese_explanation: "(B) '极其严重的' 一词意味着极其坏的；令人震惊的。" +
            "<br><br>" +
            "(A) '轻微的' 意味着在重要性、严重性或意义上较小的。" +
            "<br><br>" +
            "(C) '微不足道的' 意味着如此小或不重要，以至于不值得考虑的；无关紧要的。" +
            "<br><br>" +
            "(D) '琐碎的' 意味着价值或重要性很小的。"
    },
    {
        id: 6,
        question: "The __________ man proudly displayed his thick beard, which had taken years to grow.",
        chinese_question: "这位 __________ 的男子骄傲地展示他厚厚的胡须，这花了他多年时间才留长。",
        answers: [
            { option: "A", answer: "bald", chinese_answer: "秃头的", chinese_romanization: "tūtóu de" },
            { option: "B", answer: "hirsute", chinese_answer: "多毛的", chinese_romanization: "duō máo de" },
            { option: "C", answer: "clean-shaven", chinese_answer: "刮得干干净净的", chinese_romanization: "guā de gān gānjìng jìng de" },
            { option: "D", answer: "hairless", chinese_answer: "无毛的", chinese_romanization: "wú máo de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'hirsute' means hairy." +
            "<br><br>" +
            "(A) 'bald' means having a scalp wholly or partly lacking hair." +
            "<br><br>" +
            "(C) 'clean-shaven' means having no facial hair, as a result of shaving." +
            "<br><br>" +
            "(D) 'hairless' means having no hair.",
        chinese_explanation: "(B) '多毛的' 一词意味着毛发浓密的。" +
            "<br><br>" +
            "(A) '秃头的' 意味着头皮部分或完全缺乏毛发的。" +
            "<br><br>" +
            "(C) '刮得干干净净的' 意味着没有面部毛发，因为刮过胡子。" +
            "<br><br>" +
            "(D) '无毛的' 意味着没有毛发的。"
    },
    {
        id: 7,
        question: "The __________ village life was a sharp contrast to the bustling urban environment she had always known.",
        chinese_question: "__________ 的乡村生活与她一直熟悉的繁忙城市环境形成了鲜明对比。",
        answers: [
            { option: "A", answer: "urban", chinese_answer: "城市的", chinese_romanization: "chéngshì de" },
            { option: "B", answer: "sophisticated", chinese_answer: "复杂的", chinese_romanization: "fùzá de" },
            { option: "C", answer: "agrestic", chinese_answer: "乡村的", chinese_romanization: "xiāngcūn de" },
            { option: "D", answer: "cosmopolitan", chinese_answer: "世界性的", chinese_romanization: "shìjiè xìng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'agrestic' means relating to the countryside; rustic." +
            "<br><br>" +
            "(A) 'urban' means relating to or characteristic of a city or town." +
            "<br><br>" +
            "(B) 'sophisticated' means having, revealing, or involving a great deal of worldly experience and knowledge of fashion and culture." +
            "<br><br>" +
            "(D) 'cosmopolitan' means familiar with and at ease in many different countries and cultures.",
        chinese_explanation: "(C) '乡村的' 一词意味着与乡村有关的；质朴的。" +
            "<br><br>" +
            "(A) '城市的' 意味着与城市或城镇有关的。" +
            "<br><br>" +
            "(B) '复杂的' 意味着拥有、透露或涉及丰富的世俗经验和时尚文化知识。" +
            "<br><br>" +
            "(D) '世界性的' 意味着熟悉并适应许多不同国家和文化的。"
    },
    {
        id: 8,
        question: "It was __________ that he found a taxi right when the rain started pouring.",
        chinese_question: "他在大雨开始倾盆时找到一辆出租车是 __________ 的。",
        answers: [
            { option: "A", answer: "unfortunate", chinese_answer: "不幸", chinese_romanization: "bùxìng" },
            { option: "B", answer: "predictable", chinese_answer: "可预测的", chinese_romanization: "kě yùcè de" },
            { option: "C", answer: "deliberate", chinese_answer: "故意的", chinese_romanization: "gùyì de" },
            { option: "D", answer: "fortuitous", chinese_answer: "偶然的", chinese_romanization: "ǒurán de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'fortuitous' means happening by accident or chance rather than design." +
            "<br><br>" +
            "(A) 'unfortunate' means having or marked by bad fortune; unlucky." +
            "<br><br>" +
            "(B) 'predictable' means able to be predicted." +
            "<br><br>" +
            "(C) 'deliberate' means done consciously and intentionally.",
        chinese_explanation: "(D) '偶然的' 一词意味着偶然发生而非设计的。" +
            "<br><br>" +
            "(A) '不幸' 意味着有或标志着坏运气；不幸的。" +
            "<br><br>" +
            "(B) '可预测的' 意味着能够预测的。" +
            "<br><br>" +
            "(C) '故意的' 意味着有意识地和故意地完成的。"
    },
    {
        id: 9,
        question: "His __________ desire to impress led him to brag endlessly about his minor achievements.",
        chinese_question: "他 __________ 的欲望导致他无休止地吹嘘自己微不足道的成就。",
        answers: [
            { option: "A", answer: "humble", chinese_answer: "谦逊", chinese_romanization: "qiānxùn" },
            { option: "B", answer: "modest", chinese_answer: "谦虚", chinese_romanization: "qiānxū" },
            { option: "C", answer: "braggadocio", chinese_answer: "吹牛", chinese_romanization: "chuīniú" },
            { option: "D", answer: "truthful", chinese_answer: "诚实", chinese_romanization: "chéngshí" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'braggadocio' means boastful or arrogant behavior." +
            "<br><br>" +
            "(A) 'humble' means having or showing a modest or low estimate of one's importance." +
            "<br><br>" +
            "(B) 'modest' means unassuming or moderate in the estimation of one's abilities or achievements." +
            "<br><br>" +
            "(D) 'truthful' means telling or expressing the truth; honest.",
        chinese_explanation: "(C) '吹牛' 一词意味着自夸或傲慢的行为。" +
            "<br><br>" +
            "(A) '谦逊' 意味着对自己重要性的谦逊或低估。" +
            "<br><br>" +
            "(B) '谦虚' 意味着对自己能力或成就的谦逊或中度估计。" +
            "<br><br>" +
            "(D) '诚实' 意味着说或表达真相；诚实。"
    },
    {
        id: 10,
        question: "Her __________ decision to save a portion of her salary every month ensured she had a comfortable emergency fund.",
        chinese_question: "她每个月 __________ 地决定存一部分工资，确保她有一个舒适的应急基金。",
        answers: [
            { option: "A", answer: "reckless", chinese_answer: "鲁莽的", chinese_romanization: "lǔmǎng de" },
            { option: "B", answer: "imprudent", chinese_answer: "轻率的", chinese_romanization: "qīngshuài de" },
            { option: "C", answer: "prudent", chinese_answer: "谨慎的", chinese_romanization: "jǐnshèn de" },
            { option: "D", answer: "hasty", chinese_answer: "匆忙的", chinese_romanization: "cōngmáng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'prudent' means acting with or showing care and thought for the future." +
            "<br><br>" +
            "(A) 'reckless' means without thinking or caring about the consequences of an action." +
            "<br><br>" +
            "(B) 'imprudent' means not showing care for the consequences of an action; rash." +
            "<br><br>" +
            "(D) 'hasty' means done or acting with excessive speed or urgency; hurried.",
        chinese_explanation: "(C) '谨慎的' 一词意味着对未来表现出关心和思考。" +
            "<br><br>" +
            "(A) '鲁莽的' 意味着不考虑行动后果的。" +
            "<br><br>" +
            "(B) '轻率的' 意味着不为行动后果表现出关心的；轻率的。" +
            "<br><br>" +
            "(D) '匆忙的' 意味着过快或紧急地完成或行动的；匆忙的。"
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
