// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The comedian's __________ remarks during the roast were sharp and biting, leaving the audience both laughing and cringing.",
        chinese_question: "在吐槽大会上，这位喜剧演员的 __________ 评论尖刻辛辣，让观众既笑又皱眉。",
        answers: [
            { option: "A", answer: "mild", chinese_answer: "温和的", chinese_romanization: "wēnhé de" },
            { option: "B", answer: "caustic", chinese_answer: "尖刻的", chinese_romanization: "jiānkè de" },
            { option: "C", answer: "gentle", chinese_answer: "温柔的", chinese_romanization: "wēnróu de" },
            { option: "D", answer: "soothing", chinese_answer: "安慰的", chinese_romanization: "ānwèi de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'caustic' means sarcastic in a scathing and bitter way." +
            "<br><br>" +
            "(A) 'mild' means not severe, serious, or harsh." +
            "<br><br>" +
            "(C) 'gentle' means having or showing a mild, kind, or tender temperament or character." +
            "<br><br>" +
            "(D) 'soothing' means having a gently calming effect.",
        chinese_explanation: "(B) '尖刻的' 一词意味着讽刺的方式尖锐而苦涩。" +
            "<br><br>" +
            "(A) '温和的' 意味着不严厉、严重或苛刻。" +
            "<br><br>" +
            "(C) '温柔的' 意味着有或表现出温和、友善或温柔的性格。" +
            "<br><br>" +
            "(D) '安慰的' 意味着有轻柔的镇定效果。"
    },
    {
        id: 2,
        question: "He was __________ about every detail of the event, ensuring that nothing was overlooked.",
        chinese_question: "他对活动的每一个细节都很 __________，确保没有任何疏漏。",
        answers: [
            { option: "A", answer: "careless", chinese_answer: "粗心的", chinese_romanization: "cūxīn de" },
            { option: "B", answer: "punctilious", chinese_answer: "一丝不苟的", chinese_romanization: "yīsī bùgǒu de" },
            { option: "C", answer: "indifferent", chinese_answer: "漠不关心的", chinese_romanization: "mò bù guānxīn de" },
            { option: "D", answer: "negligent", chinese_answer: "疏忽的", chinese_romanization: "shūhū de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'punctilious' means showing great attention to detail or correct behavior." +
            "<br><br>" +
            "(A) 'careless' means not giving sufficient attention or thought to avoiding harm or errors." +
            "<br><br>" +
            "(C) 'indifferent' means having no particular interest or sympathy; unconcerned." +
            "<br><br>" +
            "(D) 'negligent' means failing to take proper care in doing something.",
        chinese_explanation: "(B) '一丝不苟的' 一词意味着对细节或正确行为表现出极大的关注。" +
            "<br><br>" +
            "(A) '粗心的' 意味着未给予充分的注意或考虑以避免伤害或错误的。" +
            "<br><br>" +
            "(C) '漠不关心的' 意味着没有特别的兴趣或同情；不关心的。" +
            "<br><br>" +
            "(D) '疏忽的' 意味着在做某事时未能采取适当的照顾。"
    },
    {
        id: 3,
        question: "The author's __________ prose was so filled with complex words and phrases that it was difficult to understand.",
        chinese_question: "作者的 __________ 文体充满了复杂的词语和短语，难以理解。",
        answers: [
            { option: "A", answer: "simple", chinese_answer: "简单的", chinese_romanization: "jiǎndān de" },
            { option: "B", answer: "clear", chinese_answer: "清晰的", chinese_romanization: "qīngxī de" },
            { option: "C", answer: "turgid", chinese_answer: "浮夸的", chinese_romanization: "fúkuā de" },
            { option: "D", answer: "concise", chinese_answer: "简洁的", chinese_romanization: "jiǎnjié de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'turgid' means swollen and distended or congested; (of language or style) tediously pompous or bombastic." +
            "<br><br>" +
            "(A) 'simple' means easily understood or done; presenting no difficulty." +
            "<br><br>" +
            "(B) 'clear' means easy to perceive, understand, or interpret." +
            "<br><br>" +
            "(D) 'concise' means giving a lot of information clearly and in a few words; brief but comprehensive.",
        chinese_explanation: "(C) '浮夸的' 一词意味着膨胀的和膨胀的或拥挤的；（语言或风格）冗长的浮夸的。" +
            "<br><br>" +
            "(A) '简单的' 意味着容易理解或完成的；没有难度。" +
            "<br><br>" +
            "(B) '清晰的' 意味着容易感知、理解或解释的。" +
            "<br><br>" +
            "(D) '简洁的' 意味着在很少的词中清楚地提供大量信息；简短但全面的。"
    },
    {
        id: 4,
        question: "Her __________ refusal to apologize strained the relationship further, making reconciliation difficult.",
        chinese_question: "她 __________ 地拒绝道歉使关系进一步紧张，和解变得困难。",
        answers: [
            { option: "A", answer: "apologetic", chinese_answer: "道歉的", chinese_romanization: "dàoqiàn de" },
            { option: "B", answer: "submissive", chinese_answer: "顺从的", chinese_romanization: "shùncóng de" },
            { option: "C", answer: "compromising", chinese_answer: "妥协的", chinese_romanization: "tuǒxié de" },
            { option: "D", answer: "obdurate", chinese_answer: "固执的", chinese_romanization: "gùzhí de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'obdurate' means stubbornly refusing to change one's opinion or course of action." +
            "<br><br>" +
            "(A) 'apologetic' means regretfully acknowledging or excusing an offense or failure." +
            "<br><br>" +
            "(B) 'submissive' means ready to conform to the authority or will of others." +
            "<br><br>" +
            "(C) 'compromising' means willing to make concessions.",
        chinese_explanation: "(D) '固执的' 意味着顽固地拒绝改变自己的观点或行动方向。" +
            "<br><br>" +
            "(A) '道歉的' 意味着遗憾地承认或原谅过错或失败。" +
            "<br><br>" +
            "(B) '顺从的' 意味着准备服从他人的权威或意愿。" +
            "<br><br>" +
            "(C) '妥协的' 意味着愿意做出让步。"
    },
    {
        id: 5,
        question: "The __________ conflict within the organization led to its eventual downfall, as members fought fiercely against one another.",
        chinese_question: "组织内部的 __________ 冲突导致其最终崩溃，因为成员们激烈地互相争斗。",
        answers: [
            { option: "A", answer: "peaceful", chinese_answer: "和平的", chinese_romanization: "hépíng de" },
            { option: "B", answer: "internecine", chinese_answer: "两败俱伤的", chinese_romanization: "liǎng bài jù shāng de" },
            { option: "C", answer: "cooperative", chinese_answer: "合作的", chinese_romanization: "hézuò de" },
            { option: "D", answer: "harmonious", chinese_answer: "和谐的", chinese_romanization: "héxié de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'internecine' means destructive to both sides in a conflict." +
            "<br><br>" +
            "(A) 'peaceful' means free from disturbance; tranquil." +
            "<br><br>" +
            "(C) 'cooperative' means involving mutual assistance in working toward a common goal." +
            "<br><br>" +
            "(D) 'harmonious' means forming a pleasing or consistent whole.",
        chinese_explanation: "(B) '两败俱伤的' 一词意味着对冲突双方都有破坏性的。" +
            "<br><br>" +
            "(A) '和平的' 意味着没有干扰的；宁静的。" +
            "<br><br>" +
            "(C) '合作的' 意味着在实现共同目标方面相互协助的。" +
            "<br><br>" +
            "(D) '和谐的' 意味着形成令人愉悦或一致的整体。"
    },
    {
        id: 6,
        question: "The concept of a utopia can often be seen as __________, an ideal but unattainable vision of society.",
        chinese_question: "乌托邦的概念常常被视为 __________，一种理想但无法实现的社会愿景。",
        answers: [
            { option: "A", answer: "realistic", chinese_answer: "现实的", chinese_romanization: "xiànshí de" },
            { option: "B", answer: "practical", chinese_answer: "实际的", chinese_romanization: "shíjì de" },
            { option: "C", answer: "chimerical", chinese_answer: "幻想的", chinese_romanization: "huànxiǎng de" },
            { option: "D", answer: "feasible", chinese_answer: "可行的", chinese_romanization: "kěxíng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'chimerical' means existing only as the product of unchecked imagination; fantastically visionary or improbable." +
            "<br><br>" +
            "(A) 'realistic' means having or showing a sensible and practical idea of what can be achieved or expected." +
            "<br><br>" +
            "(B) 'practical' means of or concerned with the actual doing or use of something rather than with theory and ideas." +
            "<br><br>" +
            "(D) 'feasible' means possible to do easily or conveniently.",
        chinese_explanation: "(C) '幻想的' 一词意味着仅作为不受控制的想象产物而存在；极具幻想或不可能的。" +
            "<br><br>" +
            "(A) '现实的' 意味着对可以实现或预期的事物有或表现出明智和实际的想法。" +
            "<br><br>" +
            "(B) '实际的' 意味着与实际操作或使用有关，而不是与理论和想法有关。" +
            "<br><br>" +
            "(D) '可行的' 意味着容易或方便地完成的。"
    },
    {
        id: 7,
        question: "The __________ boxer was known for his aggressive style and his readiness to challenge anyone who questioned his skills.",
        chinese_question: "这位 __________ 的拳击手以其攻击性风格和随时准备挑战任何质疑他技能的人而闻名。",
        answers: [
            { option: "A", answer: "docile", chinese_answer: "温顺的", chinese_romanization: "wēnshùn de" },
            { option: "B", answer: "timid", chinese_answer: "胆小的", chinese_romanization: "dǎnxiǎo de" },
            { option: "C", answer: "gentle", chinese_answer: "温柔的", chinese_romanization: "wēnróu de" },
            { option: "D", answer: "pugnacious", chinese_answer: "好斗的", chinese_romanization: "hǎodòu de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'pugnacious' means eager or quick to argue, quarrel, or fight." +
            "<br><br>" +
            "(A) 'docile' means ready to accept control or instruction; submissive." +
            "<br><br>" +
            "(B) 'timid' means showing a lack of courage or confidence; easily frightened." +
            "<br><br>" +
            "(C) 'gentle' means having or showing a mild, kind, or tender temperament or character.",
        chinese_explanation: "(D) '好斗的' 意味着急于或迅速争论、吵架或打架。" +
            "<br><br>" +
            "(A) '温顺的' 意味着准备接受控制或指示的；顺从的。" +
            "<br><br>" +
            "(B) '胆小的' 意味着表现出缺乏勇气或信心的；容易受惊的。" +
            "<br><br>" +
            "(C) '温柔的' 意味着具有或表现出温和、善良或温柔的性格。"
    },
    {
        id: 8,
        question: "The villain's __________ threats made the hero realize the seriousness of the situation.",
        chinese_question: "反派的 __________ 威胁让英雄意识到情况的严重性。",
        answers: [
            { option: "A", answer: "kind", chinese_answer: "友好的", chinese_romanization: "yǒuhǎo de" },
            { option: "B", answer: "harmless", chinese_answer: "无害的", chinese_romanization: "wúhài de" },
            { option: "C", answer: "minatory", chinese_answer: "威胁的", chinese_romanization: "wēixié de" },
            { option: "D", answer: "gentle", chinese_answer: "温柔的", chinese_romanization: "wēnróu de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'minatory' means expressing or conveying a threat." +
            "<br><br>" +
            "(A) 'kind' means having or showing a friendly, generous, and considerate nature." +
            "<br><br>" +
            "(B) 'harmless' means not able or likely to cause harm." +
            "<br><br>" +
            "(D) 'gentle' means having or showing a mild, kind, or tender temperament or character.",
        chinese_explanation: "(C) '威胁的' 一词意味着表达或传达威胁的。" +
            "<br><br>" +
            "(A) '友好的' 意味着具有或表现出友好、慷慨和体贴的性格。" +
            "<br><br>" +
            "(B) '无害的' 意味着不能或不可能造成伤害的。" +
            "<br><br>" +
            "(D) '温柔的' 意味着具有或表现出温和、友善或温柔的性格。"
    },
    {
        id: 9,
        question: "The professor's monotone voice was so __________ that half the class fell asleep during the lecture.",
        chinese_question: "教授的单调声音如此 __________，以至于半个班级在讲座中睡着了。",
        answers: [
            { option: "A", answer: "exciting", chinese_answer: "令人兴奋的", chinese_romanization: "lìng rén xīngfèn de" },
            { option: "B", answer: "engaging", chinese_answer: "有吸引力的", chinese_romanization: "yǒu xīyǐn lì de" },
            { option: "C", answer: "stimulating", chinese_answer: "刺激的", chinese_romanization: "cìjī de" },
            { option: "D", answer: "soporific", chinese_answer: "催眠的", chinese_romanization: "cuīmián de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'soporific' means tending to induce drowsiness or sleep." +
            "<br><br>" +
            "(A) 'exciting' means causing great enthusiasm and eagerness." +
            "<br><br>" +
            "(B) 'engaging' means charming and attractive." +
            "<br><br>" +
            "(C) 'stimulating' means encouraging or arousing interest or enthusiasm.",
        chinese_explanation: "(D) '催眠的' 一词意味着倾向于引起昏昏欲睡或睡眠。" +
            "<br><br>" +
            "(A) '令人兴奋的' 意味着引起极大热情和热情的。" +
            "<br><br>" +
            "(B) '有吸引力的' 意味着迷人和有吸引力的。" +
            "<br><br>" +
            "(C) '刺激的' 意味着鼓励或唤起兴趣或热情的。"
    },
    {
        id: 10,
        question: "Her __________ habits led to missed deadlines and frustrated coworkers who had to pick up the slack.",
        chinese_question: "她的 __________ 习惯导致错过截止日期，并使同事们不得不弥补不足。",
        answers: [
            { option: "A", answer: "prompt", chinese_answer: "迅速", chinese_romanization: "xùnsù" },
            { option: "B", answer: "efficient", chinese_answer: "高效", chinese_romanization: "gāoxiào" },
            { option: "C", answer: "dilatory", chinese_answer: "拖延", chinese_romanization: "tuōyán" },
            { option: "D", answer: "punctual", chinese_answer: "准时", chinese_romanization: "zhǔnshí" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'dilatory' means slow to act; intended to cause delay." +
            "<br><br>" +
            "(A) 'prompt' means done without delay; immediate." +
            "<br><br>" +
            "(B) 'efficient' means achieving maximum productivity with minimum wasted effort or expense." +
            "<br><br>" +
            "(D) 'punctual' means happening or doing something at the agreed or proper time; on time.",
        chinese_explanation: "(C) '拖延' 一词意味着行动迟缓；旨在造成延误。" +
            "<br><br>" +
            "(A) '迅速' 意味着毫不延迟地完成；立即的。" +
            "<br><br>" +
            "(B) '高效' 意味着以最少的浪费努力或费用实现最大生产力。" +
            "<br><br>" +
            "(D) '准时' 意味着在约定或适当的时间发生或做某事；按时。"
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
