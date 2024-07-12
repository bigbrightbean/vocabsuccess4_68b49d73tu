// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The politician's __________ went on for over an hour, leaving the audience exhausted and frustrated.",
        chinese_question: "这位政客的 __________ 持续了一个多小时，让观众感到精疲力尽和沮丧。",
        answers: [
            { option: "A", answer: "speech", chinese_answer: "演讲", chinese_romanization: "yǎnjiǎng" },
            { option: "B", answer: "harangue", chinese_answer: "长篇大论", chinese_romanization: "chángpiān dàlùn" },
            { option: "C", answer: "discussion", chinese_answer: "讨论", chinese_romanization: "tǎolùn" },
            { option: "D", answer: "debate", chinese_answer: "辩论", chinese_romanization: "biànlùn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'harangue' means a lengthy and aggressive speech." +
            "<br><br>" +
            "(A) 'speech' means a formal address or discourse delivered to an audience." +
            "<br><br>" +
            "(C) 'discussion' means the action or process of talking about something to reach a decision or to exchange ideas." +
            "<br><br>" +
            "(D) 'debate' means a formal discussion on a particular topic in a public meeting or legislative assembly, in which opposing arguments are put forward.",
        chinese_explanation: "(B) '长篇大论' 一词意味着冗长且激烈的演讲。" +
            "<br><br>" +
            "(A) '演讲' 意味着向观众发表的正式讲话或演说。" +
            "<br><br>" +
            "(C) '讨论' 意味着为达成决策或交流想法而谈论某事的行为或过程。" +
            "<br><br>" +
            "(D) '辩论' 意味着在公共会议或立法议会中就特定主题进行的正式讨论，其中提出了对立的论点。"
    },
    {
        id: 2,
        question: "Her only __________ in the situation was to ask for help from her mentor.",
        chinese_question: "在这种情况下，她唯一的 __________ 是向她的导师寻求帮助。",
        answers: [
            { option: "A", answer: "recourse", chinese_answer: "求助", chinese_romanization: "qiúzhù" },
            { option: "B", answer: "luxury", chinese_answer: "奢侈", chinese_romanization: "shēchǐ" },
            { option: "C", answer: "indulgence", chinese_answer: "放纵", chinese_romanization: "fàngzòng" },
            { option: "D", answer: "whim", chinese_answer: "心血来潮", chinese_romanization: "xīnxuè láicháo" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'recourse' metaphorically means a turning to someone or something for help or protection." +
            "<br><br>" +
            "(B) 'luxury' means a state of great comfort or elegance, especially when involving great expense." +
            "<br><br>" +
            "(C) 'indulgence' means the action or fact of indulging." +
            "<br><br>" +
            "(D) 'whim' means a sudden desire or change of mind, especially one that is unusual or unexplained.",
        chinese_explanation: "(A) '求助' 比喻转向某人或某事寻求帮助或保护。" +
            "<br><br>" +
            "(B) '奢侈' 意味着极大的舒适或优雅的状态，尤其是涉及巨大费用时。" +
            "<br><br>" +
            "(C) '放纵' 意味着放纵的行为或事实。" +
            "<br><br>" +
            "(D) '心血来潮' 意味着突然的欲望或改变想法，特别是不寻常或无法解释的。"
    },
    {
        id: 3,
        question: "The billionaire's __________ was evident when he donated millions of dollars to various charities.",
        chinese_question: "这位亿万富翁的 __________ 在他向各种慈善机构捐赠数百万美元时显而易见。",
        answers: [
            { option: "A", answer: "stinginess", chinese_answer: "吝啬", chinese_romanization: "lìnsè" },
            { option: "B", answer: "munificence", chinese_answer: "慷慨", chinese_romanization: "kāngkǎi" },
            { option: "C", answer: "greed", chinese_answer: "贪婪", chinese_romanization: "tānlán" },
            { option: "D", answer: "miserliness", chinese_answer: "小气", chinese_romanization: "xiǎoqì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'munificence' means the quality or action of being lavishly generous; great generosity." +
            "<br><br>" +
            "(A) 'stinginess' means unwillingness to spend money." +
            "<br><br>" +
            "(C) 'greed' means intense and selfish desire for something, especially wealth, power, or food." +
            "<br><br>" +
            "(D) 'miserliness' means excessive desire to save money; extreme meanness.",
        chinese_explanation: "(B) '慷慨' 一词意味着慷慨大方的品质或行动；极大的慷慨。" +
            "<br><br>" +
            "(A) '吝啬' 意味着不愿意花钱。" +
            "<br><br>" +
            "(C) '贪婪' 意味着对某物的强烈和自私的渴望，尤其是财富、权力或食物。" +
            "<br><br>" +
            "(D) '小气' 意味着极度节俭的欲望；极度吝啬。"
    },
    {
        id: 4,
        question: "Creating a __________ in the workplace means striving for a perfect environment for all employees, where everyone is happy, productive, and fulfilled.",
        chinese_question: "在工作场所创造一个 __________ 意味着努力为所有员工创造一个完美的环境，每个人都感到快乐、高效和满足。",
        answers: [
            { option: "A", answer: "utopia", chinese_answer: "乌托邦", chinese_romanization: "wūtuōbāng" },
            { option: "B", answer: "dystopia", chinese_answer: "反乌托邦", chinese_romanization: "fǎn wūtuōbāng" },
            { option: "C", answer: "reality", chinese_answer: "现实", chinese_romanization: "xiànshí" },
            { option: "D", answer: "nightmare", chinese_answer: "噩梦", chinese_romanization: "èmèng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'utopia' metaphorically means an ideal or perfect place." +
            "<br><br>" +
            "(B) 'dystopia' means a bad or oppressive place." +
            "<br><br>" +
            "(C) 'reality' means the actual state of things." +
            "<br><br>" +
            "(D) 'nightmare' means a very unpleasant or frightening situation.",
        chinese_explanation: "(A) '乌托邦' 比喻一个理想或完美的地方。" +
            "<br><br>" +
            "(B) '反乌托邦' 意味着一个糟糕或压迫的地方。" +
            "<br><br>" +
            "(C) '现实' 意味着事物的实际状态。" +
            "<br><br>" +
            "(D) '噩梦' 意味着一个非常不愉快或令人害怕的情况。"
    },
    {
        id: 5,
        question: "Despite the lengthy discussion, the __________ of the argument was clear: they needed to make a decision soon.",
        chinese_question: "尽管讨论很长，但争论的__________很明确：他们需要尽快做出决定。",
        answers: [
            { option: "A", answer: "distraction", chinese_answer: "分心", chinese_romanization: "fēn xīn" },
            { option: "B", answer: "summary", chinese_answer: "总结", chinese_romanization: "zǒngjié" },
            { option: "C", answer: "gist", chinese_answer: "要点", chinese_romanization: "yàodiǎn" },
            { option: "D", answer: "confusion", chinese_answer: "混乱", chinese_romanization: "hùnluàn" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'gist' means the substance or essence of a speech or text." +
            "<br><br>" +
            "(A) 'distraction' means a thing that prevents someone from giving full attention to something else." +
            "<br><br>" +
            "(B) 'summary' means a brief statement or account of the main points of something." +
            "<br><br>" +
            "(D) 'confusion' means a lack of understanding; uncertainty.",
        chinese_explanation: "(C) '要点' 一词意味着演讲或文本的实质或精髓。" +
            "<br><br>" +
            "(A) '分心' 意味着阻止某人全神贯注于其他事情的东西。" +
            "<br><br>" +
            "(B) '总结' 意味着某事主要内容的简要陈述或说明。" +
            "<br><br>" +
            "(D) '混乱' 意味着缺乏理解；不确定。"
    },
    {
        id: 6,
        question: "Each __________ in the district had the opportunity to vote on the new policy changes, ensuring everyone's voice was heard.",
        chinese_question: "区内的每个选民都有机会对新政策的变化进行投票，确保每个人的声音都被听到__________。",
        answers: [
            { option: "A", answer: "employee", chinese_answer: "员工", chinese_romanization: "yuángōng" },
            { option: "B", answer: "student", chinese_answer: "学生", chinese_romanization: "xuéshēng" },
            { option: "C", answer: "constituent", chinese_answer: "选民", chinese_romanization: "xuǎnmín" },
            { option: "D", answer: "participant", chinese_answer: "参与者", chinese_romanization: "cānyù zhě" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'constituent' means a member of a constituency or a component part of something." +
            "<br><br>" +
            "(A) 'employee' means a person employed for wages or salary." +
            "<br><br>" +
            "(B) 'student' means a person who is studying at a school or college." +
            "<br><br>" +
            "(D) 'participant' means a person who takes part in something.",
        chinese_explanation: "(C) '选民' 一词意味着选区的成员或某物的组成部分。" +
            "<br><br>" +
            "(A) '员工' 意味着为工资或薪水而工作的人员。" +
            "<br><br>" +
            "(B) '学生' 意味着在学校或大学学习的人。" +
            "<br><br>" +
            "(D) '参与者' 意味着参加某事的人。"
    },
    {
        id: 7,
        question: "The historian's latest __________ explores the cultural evolution of ancient civilizations in a three-volume set.",
        chinese_question: "历史学家的最新__________探讨了古代文明的文化演变，分为三卷。",
        answers: [
            { option: "A", answer: "flyer", chinese_answer: "传单", chinese_romanization: "chuándān" },
            { option: "B", answer: "handout", chinese_answer: "讲义", chinese_romanization: "jiǎngyì" },
            { option: "C", answer: "leaflet", chinese_answer: "传单", chinese_romanization: "chuándān" },
            { option: "D", answer: "tome", chinese_answer: "巨著", chinese_romanization: "jùzhù" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'tome' refers to a large, heavy book, especially one containing academic, scholarly, or authoritative content." +
            "<br><br>" +
            "(A) 'flyer' is a small handbill advertising an event or product." +
            "<br><br>" +
            "(B) 'handout' is a piece of printed information provided free of charge, especially to accompany a lecture or advertisement." +
            "<br><br>" +
            "(C) 'leaflet' is a printed sheet of paper containing information or advertising and usually distributed free.",
        chinese_explanation: "(D) '巨著' 指的是一本大部头的书籍，尤其是包含学术、学术或权威内容的书籍。" +
            "<br><br>" +
            "(A) '传单' 是一个小的宣传单，广告活动或产品。" +
            "<br><br>" +
            "(B) '讲义' 是免费提供的印刷信息，特别是用于配合讲座或广告。" +
            "<br><br>" +
            "(C) '传单' 是包含信息或广告的印刷纸，一般免费分发。"
    },
    {
        id: 8,
        question: "She issued something like a __________ in her household that everyone must be home by 10 PM, enforcing this rule strictly and without exceptions.",
        chinese_question: "她在家里发布了一项像__________一样的规定，规定每个人必须在晚上10点之前回家，并严格执行这一规则，不允许有任何例外。",
        answers: [
            { option: "A", answer: "suggestion", chinese_answer: "建议", chinese_romanization: "jiànyì" },
            { option: "B", answer: "decree", chinese_answer: "法令", chinese_romanization: "fǎlìng" },
            { option: "C", answer: "plea", chinese_answer: "请求", chinese_romanization: "qǐngqiú" },
            { option: "D", answer: "request", chinese_answer: "请求", chinese_romanization: "qǐngqiú" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'decree' means an official order issued by a legal authority. Figuratively, it can mean any authoritative command or order." +
            "<br><br>" +
            "(A) 'suggestion' means an idea or plan put forward for consideration." +
            "<br><br>" +
            "(C) 'plea' means a request made in an urgent and emotional manner." +
            "<br><br>" +
            "(D) 'request' means an act of asking politely or formally for something.",
        chinese_explanation: "(B) '法令'一词意味着由法律当局发布的官方命令。比喻地，它可以表示任何权威的命令或指示。" +
            "<br><br>" +
            "(A) '建议' 意味着提出供考虑的想法或计划。" +
            "<br><br>" +
            "(C) '请求' 意味着以紧急和情绪化的方式提出的请求。" +
            "<br><br>" +
            "(D) '请求' 意味着礼貌或正式地请求某事。"
    },
    {
        id: 9,
        question: "Despite the chaos around her, she maintained a calm and composed __________.",
        chinese_question: "尽管周围一片混乱，她仍保持着冷静和镇定的 __________。",
        answers: [
            { option: "A", answer: "mien", chinese_answer: "风度", chinese_romanization: "fēngdù" },
            { option: "B", answer: "turmoil", chinese_answer: "混乱", chinese_romanization: "hùnluàn" },
            { option: "C", answer: "confusion", chinese_answer: "困惑", chinese_romanization: "kùnhuò" },
            { option: "D", answer: "frenzy", chinese_answer: "狂乱", chinese_romanization: "kuángluàn" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'mien' means a person's look or manner, especially one indicating their character or mood." +
            "<br><br>" +
            "(B) 'turmoil' means a state of great disturbance, confusion, or uncertainty." +
            "<br><br>" +
            "(C) 'confusion' means lack of understanding; uncertainty." +
            "<br><br>" +
            "(D) 'frenzy' means a state or period of uncontrolled excitement or wild behavior.",
        chinese_explanation: "(A) '风度' 意思是一个人的外貌或举止，特别是表现出他们的性格或情绪。" +
            "<br><br>" +
            "(B) '混乱' 意味着极大的动荡、混乱或不确定状态。" +
            "<br><br>" +
            "(C) '困惑' 意味着缺乏理解；不确定。" +
            "<br><br>" +
            "(D) '狂乱' 意味着不受控制的兴奋或狂野行为的状态或时期。"
    },
    {
        id: 10,
        question: "After the unexpected breakup, her dreams of a future together lay in __________, leaving her heartbroken and lost.",
        chinese_question: "在意外分手后，她对未来的梦想变成了 __________，让她心碎且迷茫。",
        answers: [
            { option: "A", answer: "rubbles", chinese_answer: "瓦砾", chinese_romanization: "wǎlì" },
            { option: "B", answer: "harmony", chinese_answer: "和谐", chinese_romanization: "héxié" },
            { option: "C", answer: "control", chinese_answer: "控制", chinese_romanization: "kòngzhì" },
            { option: "D", answer: "peace", chinese_answer: "平静", chinese_romanization: "píngjìng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'rubbles' metaphorically means a state of destruction or disarray." +
            "<br><br>" +
            "(B) 'harmony' means the combination of simultaneously sounded musical notes to produce chords and chord progressions having a pleasing effect." +
            "<br><br>" +
            "(C) 'control' means the power to influence or direct people's behavior or the course of events." +
            "<br><br>" +
            "(D) 'peace' means freedom from disturbance; tranquility.",
        chinese_explanation: "(A) '瓦砾' 比喻破坏或混乱的状态。" +
            "<br><br>" +
            "(B) '和谐' 意味着同时发出和谐的音符，以产生悦耳的和弦和和弦进程。" +
            "<br><br>" +
            "(C) '控制' 意味着影响或指引人们行为或事件进程的力量。" +
            "<br><br>" +
            "(D) '平静' 意味着没有干扰；宁静。"
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
