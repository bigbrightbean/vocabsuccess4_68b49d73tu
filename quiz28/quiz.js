// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The team's __________ attitude led to a decline in overall productivity.",
        chinese_question: "团队的 __________ 态度导致整体生产力下降。",
        answers: [
            { option: "A", answer: "motivated", chinese_answer: "积极的", chinese_romanization: "jījí de" },
            { option: "B", answer: "enthusiastic", chinese_answer: "热情的", chinese_romanization: "rèqíng de" },
            { option: "C", answer: "disgruntled", chinese_answer: "不满的", chinese_romanization: "bùmǎn de" },
            { option: "D", answer: "supportive", chinese_answer: "支持的", chinese_romanization: "zhīchí de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'disgruntled' figuratively means having a dissatisfied or discontented attitude." +
            "<br><br>" +
            "(A) 'motivated' means provided with a reason to act in a certain way." +
            "<br><br>" +
            "(B) 'enthusiastic' means having or showing intense and eager enjoyment, interest, or approval." +
            "<br><br>" +
            "(D) 'supportive' means providing encouragement or emotional help.",
        chinese_explanation: "(C) '不满的' 在比喻意义上意味着具有不满或不满意的态度。" +
            "<br><br>" +
            "(A) '积极的' 意味着有理由以某种方式行动的。" +
            "<br><br>" +
            "(B) '热情的' 意味着具有或表现出强烈而热切的享受、兴趣或赞同的。" +
            "<br><br>" +
            "(D) '支持的' 意味着提供鼓励或情感帮助的。"
    },
    {
        id: 2,
        question: "Her __________ speech ignited the crowd, inspiring them to take action.",
        chinese_question: "她的 __________ 演讲点燃了人群，激励他们采取行动。",
        answers: [
            { option: "A", answer: "calm", chinese_answer: "平静的", chinese_romanization: "píngjìng de" },
            { option: "B", answer: "dull", chinese_answer: "无聊的", chinese_romanization: "wúliáo de" },
            { option: "C", answer: "monotonous", chinese_answer: "单调的", chinese_romanization: "dāndiào de" },
            { option: "D", answer: "fiery", chinese_answer: "充满激情的", chinese_romanization: "chōngmǎn jīqíng de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'fiery' figuratively means full of spirit or passion." +
            "<br><br>" +
            "(A) 'calm' means not showing or feeling nervousness, anger, or other strong emotions." +
            "<br><br>" +
            "(B) 'dull' means lacking interest or excitement." +
            "<br><br>" +
            "(C) 'monotonous' means dull, tedious, and repetitious; lacking in variety and interest.",
        chinese_explanation: "(D) '充满激情的' 在比喻意义上意味着充满精神或激情的。" +
            "<br><br>" +
            "(A) '平静的' 意味着不表现或感到紧张、愤怒或其他强烈情感的。" +
            "<br><br>" +
            "(B) '无聊的' 意味着缺乏兴趣或兴奋。" +
            "<br><br>" +
            "(C) '单调的' 意味着无聊、乏味和重复的；缺乏变化和兴趣。"
    },
    {
        id: 3,
        question: "The technician's instructions were so __________ that even a beginner could set up the equipment without any problems.",
        chinese_question: "技术人员的说明是如此 __________，即使是初学者也能毫无问题地安装设备。",
        answers: [
            { option: "A", answer: "ambiguous", chinese_answer: "模棱两可的", chinese_romanization: "móléng liǎngkě de" },
            { option: "B", answer: "complicated", chinese_answer: "复杂的", chinese_romanization: "fùzá de" },
            { option: "C", answer: "cryptic", chinese_answer: "神秘的", chinese_romanization: "shénmì de" },
            { option: "D", answer: "pellucid", chinese_answer: "清晰的", chinese_romanization: "qīngxī de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'pellucid' means very clear and easy to understand." +
            "<br><br>" +
            "(A) 'ambiguous' means having more than one possible meaning." +
            "<br><br>" +
            "(B) 'complicated' means hard to understand because it has many parts." +
            "<br><br>" +
            "(C) 'cryptic' means having a meaning that is mysterious or not clear.",
        chinese_explanation: "(D) '清晰的' 意思是非常清楚且易于理解。" +
            "<br><br>" +
            "(A) '模棱两可的' 意思是有不止一种可能的意思。" +
            "<br><br>" +
            "(B) '复杂的' 意思是因为有很多部分而难以理解。" +
            "<br><br>" +
            "(C) '神秘的' 意思是意思神秘或不清楚。"
    },
    {
        id: 4,
        question: "He was __________ of his colleague's success, always trying to outdo him in every project.",
        chinese_question: "他对同事的成功感到 __________，总是试图在每个项目中超越他。",
        answers: [
            { option: "A", answer: "supportive", chinese_answer: "支持的", chinese_romanization: "zhīchí de" },
            { option: "B", answer: "envious", chinese_answer: "嫉妒的", chinese_romanization: "jídù de" },
            { option: "C", answer: "proud", chinese_answer: "骄傲的", chinese_romanization: "jiāo'ào de" },
            { option: "D", answer: "content", chinese_answer: "满足的", chinese_romanization: "mǎnzú de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'envious' figuratively means feeling a strong desire to have what someone else has." +
            "<br><br>" +
            "(A) 'supportive' means providing encouragement or emotional help." +
            "<br><br>" +
            "(C) 'proud' means feeling deep pleasure or satisfaction as a result of one's own achievements, qualities, or possessions or those of someone with whom one is closely associated." +
            "<br><br>" +
            "(D) 'content' means in a state of peaceful happiness.",
        chinese_explanation: "(B) '嫉妒的' 在比喻意义上意味着强烈渴望拥有他人拥有的东西。" +
            "<br><br>" +
            "(A) '支持的' 意味着提供鼓励或情感帮助。" +
            "<br><br>" +
            "(C) '骄傲的' 意味着因自己的成就、品质或财产或与之密切相关的人的成就、品质或财产感到深深的愉悦或满足。" +
            "<br><br>" +
            "(D) '满足的' 意味着处于和平幸福的状态。"
    },
    {
        id: 5,
        question: "Her success in the early projects was an __________ to her later achievements in her career.",
        chinese_question: "她在早期项目中的成功是她职业生涯后期成就的 __________。",
        answers: [
            { option: "A", answer: "consequence", chinese_answer: "结果", chinese_romanization: "jiéguǒ" },
            { option: "B", answer: "result", chinese_answer: "后果", chinese_romanization: "hòuguǒ" },
            { option: "C", answer: "antecedent", chinese_answer: "前因", chinese_romanization: "qiányīn" },
            { option: "D", answer: "outcome", chinese_answer: "结局", chinese_romanization: "jiéjú" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'antecedent' figuratively means something that precedes and sets the stage for future events." +
            "<br><br>" +
            "(A) 'consequence' means a result or effect of an action or condition." +
            "<br><br>" +
            "(B) 'result' means a consequence, effect, or outcome of something." +
            "<br><br>" +
            "(D) 'outcome' means the way a thing turns out; a consequence.",
        chinese_explanation: "(C) '前因' 在比喻意义上意味着在未来事件之前发生并为其铺平道路的事物。" +
            "<br><br>" +
            "(A) '结果' 意味着某事的后果或影响。" +
            "<br><br>" +
            "(B) '后果' 意味着某种行动或状况的结果或效果。" +
            "<br><br>" +
            "(D) '结局' 意味着事物的结局；后果。"
    },
    {
        id: 6,
        question: "The office environment felt __________, lacking any warmth or personal touch.",
        chinese_question: "办公室的环境感觉 __________，缺乏任何温暖或个人触感。",
        answers: [
            { option: "A", answer: "vibrant", chinese_answer: "生机勃勃的", chinese_romanization: "shēngjī bóbó de" },
            { option: "B", answer: "antiseptic", chinese_answer: "冷冰冰的", chinese_romanization: "lěngbīngbīng de" },
            { option: "C", answer: "lively", chinese_answer: "活跃的", chinese_romanization: "huóyuè de" },
            { option: "D", answer: "welcoming", chinese_answer: "欢迎的", chinese_romanization: "huānyíng de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'antiseptic' figuratively means clean and bland, lacking warmth or character." +
            "<br><br>" +
            "(A) 'vibrant' means full of energy and enthusiasm." +
            "<br><br>" +
            "(C) 'lively' means full of life and energy." +
            "<br><br>" +
            "(D) 'welcoming' means friendly or making you feel welcome.",
        chinese_explanation: "(B) '冷冰冰的' 在比喻意义上意味着干净而乏味，缺乏温暖或特色。" +
            "<br><br>" +
            "(A) '生机勃勃的' 意味着充满活力和热情的。" +
            "<br><br>" +
            "(C) '活跃的' 意味着充满生命力和能量的。" +
            "<br><br>" +
            "(D) '欢迎的' 意味着友好的或让人感到受欢迎的。"
    },
    {
        id: 7,
        question: "His grasp of the subject was __________, as he had only studied it for a short period.",
        chinese_question: "他对该主题的理解非常 __________，因为他只学习了很短的时间。",
        answers: [
            { option: "A", answer: "deep", chinese_answer: "深入的", chinese_romanization: "shēnrù de" },
            { option: "B", answer: "thorough", chinese_answer: "彻底的", chinese_romanization: "chèdǐ de" },
            { option: "C", answer: "tenuous", chinese_answer: "脆弱的", chinese_romanization: "cuìruò de" },
            { option: "D", answer: "solid", chinese_answer: "稳固的", chinese_romanization: "wěngù de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'tenuous' figuratively means weak or slight understanding or connection." +
            "<br><br>" +
            "(A) 'deep' means extending far down from the top or surface." +
            "<br><br>" +
            "(B) 'thorough' means complete with regard to every detail." +
            "<br><br>" +
            "(D) 'solid' means firm and stable in shape; not liquid or fluid.",
        chinese_explanation: "(C) '脆弱的' 在比喻意义上意味着理解或联系的薄弱或轻微。" +
            "<br><br>" +
            "(A) '深入的' 意味着从顶部或表面向下延伸很远。" +
            "<br><br>" +
            "(B) '彻底的' 意味着在每个细节上都是完整的；不表面或部分的。" +
            "<br><br>" +
            "(D) '稳固的' 意味着形状坚固和稳定的；不是液体或流体的。"
    },
    {
        id: 8,
        question: "The company was found guilty of engaging in __________ activities, including falsifying financial records.",
        chinese_question: "该公司被判从事 __________ 活动，包括伪造财务记录。",
        answers: [
            { option: "A", answer: "legitimate", chinese_answer: "合法的", chinese_romanization: "héfǎ de" },
            { option: "B", answer: "transparent", chinese_answer: "透明的", chinese_romanization: "tòumíng de" },
            { option: "C", answer: "fraudulent", chinese_answer: "欺诈的", chinese_romanization: "qīzhà de" },
            { option: "D", answer: "ethical", chinese_answer: "道德的", chinese_romanization: "dàodé de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'fraudulent' means involving or proceeding from fraud, as actions, enterprise, methods, or gains." +
            "<br><br>" +
            "(A) 'legitimate' means conforming to the law or to rules." +
            "<br><br>" +
            "(B) 'transparent' means easy to perceive or detect." +
            "<br><br>" +
            "(D) 'ethical' means relating to moral principles or the branch of knowledge dealing with these.",
        chinese_explanation: "(C) '欺诈的' 一词意味着涉及或源自欺诈的行动、企业、方法或收益。" +
            "<br><br>" +
            "(A) '合法的' 意味着符合法律或规则。" +
            "<br><br>" +
            "(B) '透明的' 意味着容易察觉或检测到的。" +
            "<br><br>" +
            "(D) '道德的' 意味着与道德原则或处理这些原则的知识分支有关的。"
    },
    {
        id: 9,
        question: "She felt __________ after hearing that she had won the prestigious award.",
        chinese_question: "听到自己获得了这个享有盛誉的奖项后，她感到 __________。",
        answers: [
            { option: "A", answer: "disappointed", chinese_answer: "失望的", chinese_romanization: "shīwàng de" },
            { option: "B", answer: "exultant", chinese_answer: "欢欣鼓舞的", chinese_romanization: "huānxīn gǔwǔ de" },
            { option: "C", answer: "indifferent", chinese_answer: "漠不关心的", chinese_romanization: "mòbù guānxīn de" },
            { option: "D", answer: "disheartened", chinese_answer: "灰心的", chinese_romanization: "huīxīn de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'exultant' means triumphantly happy." +
            "<br><br>" +
            "(A) 'disappointed' means sad or displeased because someone or something has failed to fulfill one's hopes or expectations." +
            "<br><br>" +
            "(C) 'indifferent' means having no particular interest or sympathy; unconcerned." +
            "<br><br>" +
            "(D) 'disheartened' means having lost determination or confidence; dispirited.",
        chinese_explanation: "(B) '欢欣鼓舞的' 一词意味着胜利地快乐。" +
            "<br><br>" +
            "(A) '失望的' 意味着由于某人或某事未能实现自己的希望或期望而感到悲伤或不快。" +
            "<br><br>" +
            "(C) '漠不关心的' 意味着没有特别的兴趣或同情；不关心的。" +
            "<br><br>" +
            "(D) '灰心的' 意味着失去决心或信心的；沮丧的。"
    },
    {
        id: 10,
        question: "The ancient temple stood on __________ ground, revered by all who visited.",
        chinese_question: "古老的寺庙坐落在 __________ 的土地上，受到所有访问者的尊敬。",
        answers: [
            { option: "A", answer: "hallowed", chinese_answer: "神圣的", chinese_romanization: "shénshèng de" },
            { option: "B", answer: "ordinary", chinese_answer: "普通的", chinese_romanization: "pǔtōng de" },
            { option: "C", answer: "mundane", chinese_answer: "平凡的", chinese_romanization: "píngfán de" },
            { option: "D", answer: "common", chinese_answer: "常见的", chinese_romanization: "chángjiàn de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'hallowed' means made holy; consecrated." +
            "<br><br>" +
            "(B) 'ordinary' means with no special or distinctive features; normal." +
            "<br><br>" +
            "(C) 'mundane' means lacking interest or excitement; dull." +
            "<br><br>" +
            "(D) 'common' means occurring, found, or done often; prevalent.",
        chinese_explanation: "(A) '神圣的' 一词意味着神圣的；被奉为神圣的。" +
            "<br><br>" +
            "(B) '普通的' 意味着没有特别或独特的特征的；正常的。" +
            "<br><br>" +
            "(C) '平凡的' 意味着缺乏兴趣或兴奋的；乏味的。" +
            "<br><br>" +
            "(D) '常见的' 意味着经常发生、发现或完成的；流行的。"
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
