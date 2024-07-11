// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "His dedication to his work was almost __________, with unwavering commitment and discipline.",
        chinese_question: "他对工作的奉献几乎是 __________ 的，具有坚定不移的承诺和纪律。",
        answers: [
            { option: "A", answer: "indifferent", chinese_answer: "无所谓的", chinese_romanization: "wúsuǒwèi de" },
            { option: "B", answer: "religious", chinese_answer: "宗教般的", chinese_romanization: "zōngjiào bān de" },
            { option: "C", answer: "apathetic", chinese_answer: "冷漠的", chinese_romanization: "lěngmò de" },
            { option: "D", answer: "casual", chinese_answer: "随意的", chinese_romanization: "suíyì de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'religious' figuratively means showing devotion or zeal comparable to religious fervor." +
            "<br><br>" +
            "(A) 'indifferent' means having no particular interest or sympathy; unconcerned." +
            "<br><br>" +
            "(C) 'apathetic' means showing or feeling no interest, enthusiasm, or concern." +
            "<br><br>" +
            "(D) 'casual' means relaxed and unconcerned.",
        chinese_explanation: "(B) '宗教般的' 在比喻意义上意味着表现出与宗教热情相当的奉献或热情。" +
            "<br><br>" +
            "(A) '无所谓的' 意味着没有特别的兴趣或同情；不关心的。" +
            "<br><br>" +
            "(C) '冷漠的' 意味着表现出或感到没有兴趣、热情或关心。" +
            "<br><br>" +
            "(D) '随意的' 意味着放松和不关心。"
    },
    {
        id: 2,
        question: "Negotiations stalled due to his __________ stance, making compromise nearly impossible.",
        chinese_question: "谈判因他 __________ 的立场而停滞不前，使得妥协几乎不可能。",
        answers: [
            { option: "A", answer: "accommodating", chinese_answer: "乐于助人的", chinese_romanization: "lèyú zhùrén de" },
            { option: "B", answer: "belligerent", chinese_answer: "好斗的", chinese_romanization: "hàodòu de" },
            { option: "C", answer: "peaceful", chinese_answer: "和平的", chinese_romanization: "hépíng de" },
            { option: "D", answer: "conciliatory", chinese_answer: "安抚的", chinese_romanization: "ānfǔ de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'belligerent' figuratively means having an aggressive or warlike attitude, hindering agreement." +
            "<br><br>" +
            "(A) 'accommodating' means willing to fit in with someone's wishes or needs." +
            "<br><br>" +
            "(C) 'peaceful' means free from disturbance; tranquil." +
            "<br><br>" +
            "(D) 'conciliatory' means intended or likely to placate or pacify.",
        chinese_explanation: "(B) '好斗的' 在比喻意义上意味着具有攻击性或好战的态度，妨碍达成协议。" +
            "<br><br>" +
            "(A) '乐于助人的' 意味着愿意满足他人的愿望或需要。" +
            "<br><br>" +
            "(C) '和平的' 意味着没有干扰的；平静的。" +
            "<br><br>" +
            "(D) '安抚的' 意味着旨在或可能安抚或平息的。"
    },
    {
        id: 3,
        question: "Her attempts to lie were so __________ that everyone could see right through them.",
        chinese_question: "她撒谎的尝试如此 __________，每个人都能看穿。",
        answers: [
            { option: "A", answer: "inept", chinese_answer: "笨拙的", chinese_romanization: "bènzhuō de" },
            { option: "B", answer: "convincing", chinese_answer: "有说服力的", chinese_romanization: "yǒu shuōfúlì de" },
            { option: "C", answer: "subtle", chinese_answer: "微妙的", chinese_romanization: "wéimiào de" },
            { option: "D", answer: "deceptive", chinese_answer: "具有欺骗性的", chinese_romanization: "jùyǒu qīpiàn xìng de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'inept' figuratively means poorly executed or unconvincing." +
            "<br><br>" +
            "(B) 'convincing' means capable of causing someone to believe that something is true or real." +
            "<br><br>" +
            "(C) 'subtle' means so delicate or precise as to be difficult to analyze or describe." +
            "<br><br>" +
            "(D) 'deceptive' means giving an appearance or impression different from the true one; misleading.",
        chinese_explanation: "(A) '笨拙的' 在比喻意义上意味着执行得不好或不令人信服的。" +
            "<br><br>" +
            "(B) '有说服力的' 意味着能够使某人相信某事是真实的。" +
            "<br><br>" +
            "(C) '微妙的' 意味着如此精致或精确以至于难以分析或描述的。" +
            "<br><br>" +
            "(D) '具有欺骗性的' 意味着给人不同于真实的外观或印象的；误导的。"
    },
    {
        id: 4,
        question: "The teacher's inspiring words left an __________ impact on her students, influencing them for years to come.",
        chinese_question: "老师鼓舞人心的话对她的学生们产生了__________的影响，影响他们多年。",
        answers: [
            { option: "A", answer: "temporary", chinese_answer: "临时的", chinese_romanization: "línshí de" },
            { option: "B", answer: "faint", chinese_answer: "模糊的", chinese_romanization: "móhu de" },
            { option: "C", answer: "indelible", chinese_answer: "难以磨灭的", chinese_romanization: "nányǐ mómiè de" },
            { option: "D", answer: "invisible", chinese_answer: "无形的", chinese_romanization: "wúxíng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'indelible' means making marks that cannot be removed. Figuratively, it can mean having a lasting impact or impression." +
            "<br><br>" +
            "(A) 'temporary' means lasting for only a limited period of time." +
            "<br><br>" +
            "(B) 'faint' means barely perceptible." +
            "<br><br>" +
            "(D) 'invisible' means unable to be seen.",
        chinese_explanation: "(C) '难以磨灭的'一词意味着留下无法去除的痕迹。比喻地，它可以表示产生持久的影响或印象。" +
            "<br><br>" +
            "(A) '临时的' 意味着只持续有限的一段时间。" +
            "<br><br>" +
            "(B) '模糊的' 意味着几乎察觉不到。" +
            "<br><br>" +
            "(D) '无形的' 意味着看不见的。"
    },
    {
        id: 5,
        question: "Her mind was __________, always open to new ideas and different perspectives.",
        chinese_question: "她的思想非常__________，总是对新观点和不同的角度保持开放。",
        answers: [
            { option: "A", answer: "tiny", chinese_answer: "很小的", chinese_romanization: "hěn xiǎo de" },
            { option: "B", answer: "cramped", chinese_answer: "狭窄的", chinese_romanization: "xiázhǎi de" },
            { option: "C", answer: "capacious", chinese_answer: "宽敞的", chinese_romanization: "kuānchǎng de" },
            { option: "D", answer: "narrow", chinese_answer: "窄的", chinese_romanization: "zhǎi de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'capacious' means having a lot of space inside; roomy. Figuratively, it can mean being open-minded and receptive to new ideas." +
            "<br><br>" +
            "(A) 'tiny' means very small." +
            "<br><br>" +
            "(B) 'cramped' means feeling or causing someone to feel uncomfortably confined or hemmed in." +
            "<br><br>" +
            "(D) 'narrow' means of small width in relation to length.",
        chinese_explanation: "(C) '宽敞的'一词意味着内部有很多空间；宽敞的。比喻地，它可以表示思想开放，能接受新观点。" +
            "<br><br>" +
            "(A) '很小的' 意味着非常小的。" +
            "<br><br>" +
            "(B) '狭窄的' 意味着让人感到不舒服地被限制在一个狭小空间里的。" +
            "<br><br>" +
            "(D) '窄的' 意味着相对于长度来说宽度小。"
    },
    {
        id: 6,
        question: "She had a __________ attitude towards change, always embracing new ideas with enthusiasm.",
        chinese_question: "她对变化持有 __________ 的态度，总是充满热情地接受新想法。",
        answers: [
            { option: "A", answer: "liberal", chinese_answer: "自由的", chinese_romanization: "zìyóu de" },
            { option: "B", answer: "rigid", chinese_answer: "僵硬的", chinese_romanization: "jiāngyìng de" },
            { option: "C", answer: "inflexible", chinese_answer: "不灵活的", chinese_romanization: "bù línghuó de" },
            { option: "D", answer: "conservative", chinese_answer: "保守的", chinese_romanization: "bǎoshǒu de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'liberal' metaphorically means open-minded and progressive." +
            "<br><br>" +
            "(B) 'rigid' means unable to bend or be forced out of shape; not flexible." +
            "<br><br>" +
            "(C) 'inflexible' means unwilling to change or compromise." +
            "<br><br>" +
            "(D) 'conservative' means holding to traditional attitudes and values and cautious about change or innovation.",
        chinese_explanation: "(A) '自由的' 比喻思想开明和进步的。" +
            "<br><br>" +
            "(B) '僵硬的' 意味着不能弯曲或被强迫变形；不灵活的。" +
            "<br><br>" +
            "(C) '不灵活的' 意味着不愿意改变或妥协的。" +
            "<br><br>" +
            "(D) '保守的' 意味着持有传统态度和价值观，并对变革或创新持谨慎态度。"
    },
    {
        id: 7,
        question: "The new system update was installed without any issues, and the IT department confirmed that everything was __________.",
        chinese_question: "新的系统更新安装没有任何问题，IT部门确认一切都很 __________。",
        answers: [
            { option: "A", answer: "faulty", chinese_answer: "有缺陷的", chinese_romanization: "yǒu quēxiàn de" },
            { option: "B", answer: "unreliable", chinese_answer: "不可靠的", chinese_romanization: "bù kěkào de" },
            { option: "C", answer: "problematic", chinese_answer: "有问题的", chinese_romanization: "yǒu wèntí de" },
            { option: "D", answer: "copacetic", chinese_answer: "非常好的", chinese_romanization: "fēicháng hǎo de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'copacetic' means in excellent order." +
            "<br><br>" +
            "(A) 'faulty' means working badly or unreliably because of imperfections." +
            "<br><br>" +
            "(B) 'unreliable' means not able to be relied upon." +
            "<br><br>" +
            "(C) 'problematic' means constituting or presenting a problem or difficulty.",
        chinese_explanation: "(D) '非常好的' 意味着一切都很顺利。" +
            "<br><br>" +
            "(A) '有缺陷的' 意味着由于不完美而运行不良或不可靠。" +
            "<br><br>" +
            "(B) '不可靠的' 意味着不能依赖的。" +
            "<br><br>" +
            "(C) '有问题的' 意味着构成或呈现问题或困难的。"
    },
    {
        id: 8,
        question: "Many considered his remarks about the beloved leader to be __________ and highly offensive.",
        chinese_question: "许多人认为他对这位受人爱戴的领导的言论是 __________ 和高度冒犯的。",
        answers: [
            { option: "A", answer: "complimentary", chinese_answer: "赞美的", chinese_romanization: "zànměi de" },
            { option: "B", answer: "sacrilegious", chinese_answer: "亵渎的", chinese_romanization: "xièdú de" },
            { option: "C", answer: "flattering", chinese_answer: "奉承的", chinese_romanization: "fèngchéng de" },
            { option: "D", answer: "admiring", chinese_answer: "钦佩的", chinese_romanization: "qīnpèi de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'sacrilegious' figuratively means showing disrespect or irreverence toward something or someone that is held in high regard." +
            "<br><br>" +
            "(A) 'complimentary' means expressing a compliment; praising or approving." +
            "<br><br>" +
            "(C) 'flattering' means full of praise and compliments." +
            "<br><br>" +
            "(D) 'admiring' means regarding with approval, respect, or satisfaction.",
        chinese_explanation: "(B) '亵渎的' 在比喻意义上意味着对被高度尊敬的事物或人的不尊重或不敬。" +
            "<br><br>" +
            "(A) '赞美的' 意味着表达赞美的；赞扬或批准的。" +
            "<br><br>" +
            "(C) '奉承的' 意味着充满赞美和恭维的。" +
            "<br><br>" +
            "(D) '钦佩的' 意味着以赞许、尊重或满意的态度看待。"
    },
    {
        id: 9,
        question: "The old mansion was filled with __________ furniture, making it difficult to move around the rooms.",
        chinese_question: "这座古老的豪宅里充满了 __________ 的家具，使得在房间里移动很困难。",
        answers: [
            { option: "A", answer: "modern", chinese_answer: "现代的", chinese_romanization: "xiàndài de" },
            { option: "B", answer: "compact", chinese_answer: "紧凑的", chinese_romanization: "jǐncòu de" },
            { option: "C", answer: "sleek", chinese_answer: "光滑的", chinese_romanization: "guānghuá de" },
            { option: "D", answer: "cumbrous", chinese_answer: "笨重的", chinese_romanization: "bènzhòng de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'cumbrous' means large or heavy and therefore difficult to carry or use; unwieldy." +
            "<br><br>" +
            "(A) 'modern' means relating to the present or recent times as opposed to the remote past." +
            "<br><br>" +
            "(B) 'compact' means closely and neatly packed together; dense." +
            "<br><br>" +
            "(C) 'sleek' means smooth and glossy.",
        chinese_explanation: "(D) '笨重的' 一词意味着大而重，因此难以携带或使用；笨拙的。" +
            "<br><br>" +
            "(A) '现代的' 意味着与现在或近期相关的，而不是遥远的过去。" +
            "<br><br>" +
            "(B) '紧凑的' 意味着紧密且整齐地包装在一起；密集的。" +
            "<br><br>" +
            "(C) '光滑的' 意味着光滑和有光泽的。"
    },
    {
        id: 10,
        question: "The __________ inspection of the factory failed to uncover the serious safety violations that were later reported.",
        chinese_question: "对工厂的 __________ 检查未能发现后来被报告的严重安全违规行为。",
        answers: [
            { option: "A", answer: "thorough", chinese_answer: "彻底的", chinese_romanization: "chèdǐ de" },
            { option: "B", answer: "perfunctory", chinese_answer: "敷衍的", chinese_romanization: "fūyǎn de" },
            { option: "C", answer: "diligent", chinese_answer: "勤勉的", chinese_romanization: "qínmiǎn de" },
            { option: "D", answer: "meticulous", chinese_answer: "一丝不苟的", chinese_romanization: "yīsī bùgǒu de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'perfunctory' means (of an action or gesture) carried out with a minimum of effort or reflection." +
            "<br><br>" +
            "(A) 'thorough' means complete with regard to every detail; not superficial or partial." +
            "<br><br>" +
            "(C) 'diligent' means having or showing care and conscientiousness in one's work or duties." +
            "<br><br>" +
            "(D) 'meticulous' means showing great attention to detail; very careful and precise.",
        chinese_explanation: "(B) '敷衍的' 一词意味着（行动或手势）以最少的努力或思考进行的。" +
            "<br><br>" +
            "(A) '彻底的' 意味着对每一个细节都完成的；不肤浅或部分的。" +
            "<br><br>" +
            "(C) '勤勉的' 意味着在工作或职责中表现出关心和认真。" +
            "<br><br>" +
            "(D) '一丝不苟的' 意味着对细节非常关注的；非常小心和精确的。"
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
