// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "He considered it a __________ to be part of the groundbreaking research team, feeling honoUred and grateful for the opportunity.",
        chinese_question: "他认为能成为开创性研究团队的一员是一种荣幸和感激__________。",
        answers: [
            { option: "A", answer: "burden", chinese_answer: "负担", chinese_romanization: "fùdān" },
            { option: "B", answer: "challenge", chinese_answer: "挑战", chinese_romanization: "tiǎozhàn" },
            { option: "C", answer: "privilege", chinese_answer: "特权", chinese_romanization: "tèquán" },
            { option: "D", answer: "obligation", chinese_answer: "义务", chinese_romanization: "yìwù" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'privilege' figuratively means a special honor or benefit." +
            "<br><br>" +
            "(A) 'burden' means a heavy load." +
            "<br><br>" +
            "(B) 'challenge' means a call to take part in a contest or competition." +
            "<br><br>" +
            "(D) 'obligation' means an act or course of action to which a person is morally or legally bound.",
        chinese_explanation: "(C) '特权' 在比喻意义上意味着一种特别的荣誉或利益。" +
            "<br><br>" +
            "(A) '负担' 意味着沉重的负荷。" +
            "<br><br>" +
            "(B) '挑战' 意味着参加竞赛的号召。" +
            "<br><br>" +
            "(D) '义务' 意味着一个人道德上或法律上有责任的行为或行动。"
    },
    {
        id: 2,
        question: "The city's new policy aimed to provide shelter and support for every __________, ensuring no one had to sleep on the streets.",
        chinese_question: "该市的新政策旨在为每一位 __________ 提供住所和支持，确保没有人不得不露宿街头。",
        answers: [
                { option: "A", answer: "vagrant", chinese_answer: "流浪者", chinese_romanization: "liúlàngzhě" },
                { option: "B", answer: "entrepreneur", chinese_answer: "企业家", chinese_romanization: "qǐyèjiā" },
                { option: "C", answer: "scholar", chinese_answer: "学者", chinese_romanization: "xuézhě" },
                { option: "D", answer: "politician", chinese_answer: "政治家", chinese_romanization: "zhèngzhìjiā" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'vagrant' refers to a person who has no settled home or regular work and wanders from place to place." +
            "<br><br>" +
            "(B) 'entrepreneur' means a person who sets up a business, taking on financial risks in the hope of profit." +
            "<br><br>" +
            "(C) 'scholar' refers to a specialist in a particular branch of study, especially the humanities." +
            "<br><br>" +
            "(D) 'politician' means a person who is professionally involved in politics, especially as a holder of or a candidate for an elected office.",
        chinese_explanation: "(A) '流浪者' 指的是没有固定住所或经常工作、四处漂泊的人。" +
            "<br><br>" +
            "(B) '企业家' 指的是创办企业的人，承担财务风险以期望盈利。" +
            "<br><br>" +
            "(C) '学者' 指的是某一特定学科领域的专家，尤其是人文学科。" +
            "<br><br>" +
            "(D) '政治家' 指的是专业从事政治活动的人，尤其是担任公职或竞选公职的人。"
    },
    {
        id: 3,
        question: "Her __________ for helping others made her a beloved member of the community.",
        chinese_question: "她帮助他人的 __________ 使她成为社区中受人爱戴的成员。",
        answers: [
            { option: "A", answer: "indifference", chinese_answer: "冷漠", chinese_romanization: "lěngmò" },
            { option: "B", answer: "propensity", chinese_answer: "倾向", chinese_romanization: "qīngxiàng" },
            { option: "C", answer: "detachment", chinese_answer: "超然", chinese_romanization: "chāorán" },
            { option: "D", answer: "apathy", chinese_answer: "漠不关心", chinese_romanization: "mòbù guānxīn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'propensity' figuratively means a natural tendency or inclination." +
            "<br><br>" +
            "(A) 'indifference' means lack of interest, concern, or sympathy." +
            "<br><br>" +
            "(C) 'detachment' means the state of being objective or aloof." +
            "<br><br>" +
            "(D) 'apathy' means lack of interest, enthusiasm, or concern.",
        chinese_explanation: "(B) '倾向' 在比喻意义上意味着自然的倾向或爱好。" +
            "<br><br>" +
            "(A) '冷漠' 意味着缺乏兴趣、关心或同情。" +
            "<br><br>" +
            "(C) '超然' 意味着客观或超然的状态。" +
            "<br><br>" +
            "(D) '漠不关心' 意味着缺乏兴趣、热情或关心。"
    },
    {
        id: 4,
        question: "There was a __________ among the team that they needed to improve their communication strategies.",
        chinese_question: "团队中达成 __________，他们需要改进沟通策略。",
        answers: [
            { option: "A", answer: "division", chinese_answer: "分裂", chinese_romanization: "fēnliè" },
            { option: "B", answer: "consensus", chinese_answer: "共识", chinese_romanization: "gòngshí" },
            { option: "C", answer: "confusion", chinese_answer: "混乱", chinese_romanization: "hùnluàn" },
            { option: "D", answer: "separation", chinese_answer: "分离", chinese_romanization: "fēnlí" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'consensus' figuratively means a general agreement or unified opinion within a group." +
            "<br><br>" +
            "(A) 'division' means the action of separating something into parts or the process of being separated." +
            "<br><br>" +
            "(C) 'confusion' means lack of understanding; uncertainty." +
            "<br><br>" +
            "(D) 'separation' means the action or state of moving or being moved apart.",
        chinese_explanation: "(B) '共识' 在比喻意义上意味着群体内的普遍同意或统一意见。" +
            "<br><br>" +
            "(A) '分裂' 意味着将某物分成部分的行为或过程。" +
            "<br><br>" +
            "(C) '混乱' 意味着缺乏理解；不确定性。" +
            "<br><br>" +
            "(D) '分离' 意味着移动或被分开状态的动作。"
    },
    {
        id: 5,
        question: "The __________ between their political views made any productive discussion nearly impossible.",
        chinese_question: "他们的政治观点之间的 __________ 使任何富有成效的讨论几乎不可能。",
        answers: [
            { option: "A", answer: "harmony", chinese_answer: "和谐", chinese_romanization: "héxié" },
            { option: "B", answer: "dissonance", chinese_answer: "不和谐", chinese_romanization: "bù héxié" },
            { option: "C", answer: "accord", chinese_answer: "协议", chinese_romanization: "xiéyì" },
            { option: "D", answer: "consonance", chinese_answer: "一致", chinese_romanization: "yīzhì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'dissonance' means lack of harmony among musical notes; a tension or clash resulting from the combination of two disharmonious or unsuitable elements." +
            "<br><br>" +
            "(A) 'harmony' means the combination of simultaneously sounded musical notes to produce a pleasing effect." +
            "<br><br>" +
            "(C) 'accord' means an official agreement or treaty." +
            "<br><br>" +
            "(D) 'consonance' means agreement or compatibility between opinions or actions.",
        chinese_explanation: "(B) '不和谐' 一词意味着音乐音符之间缺乏和谐；由于两个不和谐或不合适的元素的组合而产生的紧张或冲突。" +
            "<br><br>" +
            "(A) '和谐' 意味着同时发出的音乐音符的组合以产生悦耳的效果。" +
            "<br><br>" +
            "(C) '协议' 意味着正式的协议或条约。" +
            "<br><br>" +
            "(D) '一致' 意味着意见或行动之间的一致或兼容性。"
    },
    {
        id: 6,
        question: "The __________ of her new habits helped her achieve a healthier lifestyle.",
        chinese_question: "新习惯的 __________ 帮助她实现了更健康的生活方式。",
        answers: [
            { option: "A", answer: "neglect", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "B", answer: "formation", chinese_answer: "养成", chinese_romanization: "yǎngchéng" },
            { option: "C", answer: "abandonment", chinese_answer: "放弃", chinese_romanization: "fàngqì" },
            { option: "D", answer: "destruction", chinese_answer: "破坏", chinese_romanization: "pòhuài" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'formation' figuratively means the development or creation of something." +
            "<br><br>" +
            "(A) 'neglect' means fail to care for properly." +
            "<br><br>" +
            "(C) 'abandonment' means the action or fact of abandoning or being abandoned." +
            "<br><br>" +
            "(D) 'destruction' means the action or process of causing so much damage to something that it no longer exists or cannot be repaired.",
        chinese_explanation: "(B) '养成' 在比喻意义上意味着某事的发展或创造。" +
            "<br><br>" +
            "(A) '忽视' 意味着未能适当照顾。" +
            "<br><br>" +
            "(C) '放弃' 意味着放弃或被放弃的行为或事实。" +
            "<br><br>" +
            "(D) '破坏' 意味着造成如此大的损害，以至于某物不再存在或无法修复的行为或过程。"
    },
    {
        id: 7,
        question: "The politician's __________ was evident when he preached about honesty while secretly engaging in corrupt practices.",
        chinese_question: "这位政客的 __________ 显而易见，当他宣扬诚实时，暗地里却从事腐败行为。",
        answers: [
            { option: "A", answer: "integrity", chinese_answer: "诚信", chinese_romanization: "chéngxìn" },
            { option: "B", answer: "hypocrisy", chinese_answer: "虚伪", chinese_romanization: "xūwěi" },
            { option: "C", answer: "sincerity", chinese_answer: "真诚", chinese_romanization: "zhēnchéng" },
            { option: "D", answer: "transparency", chinese_answer: "透明", chinese_romanization: "tòumíng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'hypocrisy' means the practice of claiming to have moral standards or beliefs to which one's own behavior does not conform; pretense." +
            "<br><br>" +
            "(A) 'integrity' means the quality of being honest and having strong moral principles." +
            "<br><br>" +
            "(C) 'sincerity' means the quality of being free from pretense, deceit, or hypocrisy." +
            "<br><br>" +
            "(D) 'transparency' means the condition of being transparent.",
        chinese_explanation: "(B) '虚伪' 一词意味着声称拥有道德标准或信仰，而自己的行为不符合；伪装。" +
            "<br><br>" +
            "(A) '诚信' 意味着诚实和有强烈道德原则的品质。" +
            "<br><br>" +
            "(C) '真诚' 意味着没有伪装、欺骗或虚伪的品质。" +
            "<br><br>" +
            "(D) '透明' 意味着透明的状态。"
    },
    {
        id: 8,
        question: "He was the __________ of wisdom, always providing insightful advice to those around him.",
        chinese_question: "他是智慧的 __________，总是为周围的人提供有见地的建议。",
        answers: [
            { option: "A", answer: "symbol", chinese_answer: "象征", chinese_romanization: "xiàngzhēng" },
            { option: "B", answer: "essence", chinese_answer: "本质", chinese_romanization: "běnzhí" },
            { option: "C", answer: "personification", chinese_answer: "拟人", chinese_romanization: "nǐrén" },
            { option: "D", answer: "representation", chinese_answer: "代表", chinese_romanization: "dàibiǎo" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'personification' figuratively means the embodiment of a quality, concept, or thing in a human form." +
            "<br><br>" +
            "(A) 'symbol' means a thing that represents or stands for something else." +
            "<br><br>" +
            "(B) 'essence' means the intrinsic nature or indispensable quality of something." +
            "<br><br>" +
            "(D) 'representation' means the action of speaking or acting on behalf of someone or the state of being so represented.",
        chinese_explanation: "(C) '拟人' 在比喻意义上意味着以人类形式体现某种品质、概念或事物。" +
            "<br><br>" +
            "(A) '象征' 意味着代表或代表其他事物的事物。" +
            "<br><br>" +
            "(B) '本质' 意味着某物的内在性质或不可或缺的品质。" +
            "<br><br>" +
            "(D) '代表' 意味着代表某人说话或行动的行为或状态。"
    },
    {
        id: 9,
        question: "The __________ of the repetitive chores left him longing for a more dynamic lifestyle.",
        chinese_question: "重复性家务的 __________ 让他渴望更有活力的生活方式。",
        answers: [
                { option: "A", answer: "tedium", chinese_answer: "沉闷", chinese_romanization: "chénmèn" },
                { option: "B", answer: "variety", chinese_answer: "多样性", chinese_romanization: "duōyàngxìng" },
                { option: "C", answer: "adventure", chinese_answer: "冒险", chinese_romanization: "màoxiǎn" },
                { option: "D", answer: "freedom", chinese_answer: "自由", chinese_romanization: "zìyóu" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'tedium' means the quality or state of being tedious." +
            "<br><br>" +
            "(B) 'variety' refers to the quality or state of being different or diverse." +
            "<br><br>" +
            "(C) 'adventure' is an unusual and exciting, typically hazardous, experience or activity." +
            "<br><br>" +
            "(D) 'freedom' is the power or right to act, speak, or think as one wants without hindrance or restraint.",
        chinese_explanation: "(A) '沉闷' 指的是乏味的性质或状态。" +
            "<br><br>" +
            "(B) '多样性' 指的是不同或多样的性质或状态。" +
            "<br><br>" +
            "(C) '冒险' 是一种不寻常和令人兴奋的，通常是危险的经历或活动。" +
            "<br><br>" +
            "(D) '自由' 是在没有障碍或约束的情况下行事、说话或思考的权力或权利。"
    },
    {
        id: 10,
        question: "The gradual __________ of sediment in the riverbed eventually led to the formation of a small island.",
        chinese_question: "河床中沉积物的逐渐 __________ 最终导致了一个小岛的形成。",
        answers: [
            { option: "A", answer: "erosion", chinese_answer: "侵蚀", chinese_romanization: "qīnshí" },
            { option: "B", answer: "accretion", chinese_answer: "积累", chinese_romanization: "jīlěi" },
            { option: "C", answer: "depletion", chinese_answer: "消耗", chinese_romanization: "xiāohào" },
            { option: "D", answer: "reduction", chinese_answer: "减少", chinese_romanization: "jiǎnshǎo" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'accretion' means the process of growth or increase, typically by the gradual accumulation of additional layers or matter." +
            "<br><br>" +
            "(A) 'erosion' means the process of eroding or being eroded by wind, water, or other natural agents." +
            "<br><br>" +
            "(C) 'depletion' means the reduction in the number or quantity of something." +
            "<br><br>" +
            "(D) 'reduction' means the action or fact of making something smaller or less in amount, degree, or size.",
        chinese_explanation: "(B) '积累' 一词意味着通常通过逐渐积累附加层或物质而增长或增加的过程。" +
            "<br><br>" +
            "(A) '侵蚀' 意味着被风、水或其他自然因素侵蚀的过程。" +
            "<br><br>" +
            "(C) '消耗' 意味着数量的减少。" +
            "<br><br>" +
            "(D) '减少' 意味着使某物变小或减少数量、程度或规模的行为或事实。"
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
