// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "With a sense of __________, she approached the podium to give her first public speech, her hands shaking slightly.",
        chinese_question: "带着一丝 __________ 的感觉，她走向讲台发表她的第一次公开演讲，双手微微颤抖。",
        answers: [
            { option: "A", answer: "confidence", chinese_answer: "自信", chinese_romanization: "zìxìn" },
            { option: "B", answer: "excitement", chinese_answer: "兴奋", chinese_romanization: "xīngfèn" },
            { option: "C", answer: "trepidation", chinese_answer: "恐惧", chinese_romanization: "kǒngjù" },
            { option: "D", answer: "certainty", chinese_answer: "确定性", chinese_romanization: "quèdìngxìng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'trepidation' means a feeling of fear or agitation about something that may happen." +
            "<br><br>" +
            "(A) 'confidence' means the feeling or belief that one can rely on someone or something; firm trust." +
            "<br><br>" +
            "(B) 'excitement' means a feeling of great enthusiasm and eagerness." +
            "<br><br>" +
            "(D) 'certainty' means firm conviction that something is the case.",
        chinese_explanation: "(C) '恐惧' 意味着对可能发生的事情感到害怕或不安。" +
            "<br><br>" +
            "(A) '自信' 意味着相信自己可以依赖某人或某事；坚定的信任。" +
            "<br><br>" +
            "(B) '兴奋' 意味着极大的热情和渴望的感觉。" +
            "<br><br>" +
            "(D) '确定性' 意味着坚定地相信某事是真实的。"
    },
    {
        id: 2,
        question: "The sudden collapse of the government led to __________ in the streets as people took advantage of the lack of order.",
        chinese_question: "政府的突然倒台导致街头 __________，人们利用缺乏秩序的机会。",
        answers: [
            { option: "A", answer: "order", chinese_answer: "秩序", chinese_romanization: "zhìxù" },
            { option: "B", answer: "stability", chinese_answer: "稳定", chinese_romanization: "wěndìng" },
            { option: "C", answer: "control", chinese_answer: "控制", chinese_romanization: "kòngzhì" },
            { option: "D", answer: "anarchy", chinese_answer: "无政府状态", chinese_romanization: "wú zhèngfǔ zhuàngtài" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'anarchy' means a state of disorder due to absence or nonrecognition of authority." +
            "<br><br>" +
            "(A) 'order' means the arrangement or disposition of people or things in relation to each other according to a particular sequence, pattern, or method." +
            "<br><br>" +
            "(B) 'stability' means the state of being stable." +
            "<br><br>" +
            "(C) 'control' means the power to influence or direct people's behavior or the course of events.",
        chinese_explanation: "(D) '无政府状态' 一词意味着由于权威的缺失或不承认而导致的混乱状态。" +
            "<br><br>" +
            "(A) '秩序' 意味着根据特定的顺序、模式或方法排列或处置人或事物。" +
            "<br><br>" +
            "(B) '稳定' 意味着稳定的状态。" +
            "<br><br>" +
            "(C) '控制' 意味着影响或指导人们行为或事件进程的力量。"
    },
    {
        id: 3,
        question: "The __________ met with several senators to advocate for the new environmental regulations, hoping to influence their votes.",
        chinese_question: "__________ 会见了几位参议员，提倡新的环境法规，希望能影响他们的投票。",
        answers: [
            { option: "A", answer: "activist", chinese_answer: "活动家", chinese_romanization: "huódòng jiā" },
            { option: "B", answer: "lobbyist", chinese_answer: "说客", chinese_romanization: "shuōkè" },
            { option: "C", answer: "protester", chinese_answer: "抗议者", chinese_romanization: "kàngyì zhě" },
            { option: "D", answer: "critic", chinese_answer: "批评者", chinese_romanization: "pīpíng zhě" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'lobbyist' means a person who takes part in an organized attempt to influence legislators." +
            "<br><br>" +
            "(A) 'activist' means a person who campaigns to bring about political or social change." +
            "<br><br>" +
            "(C) 'protester' means a person who publicly demonstrates strong objection to something." +
            "<br><br>" +
            "(D) 'critic' means a person who expresses an unfavorable opinion of something.",
        chinese_explanation: "(B) '说客' 一词意味着参与有组织的试图影响立法者的活动的人。" +
            "<br><br>" +
            "(A) '活动家' 意味着为实现政治或社会变革而竞选的人。" +
            "<br><br>" +
            "(C) '抗议者' 意味着公开强烈反对某事的人。" +
            "<br><br>" +
            "(D) '批评者' 意味着对某事表达不满意见的人。"
    },
    {
        id: 4,
        question: "His __________ of the truth, through false documents and altered statements, made it difficult to trust anything he said.",
        chinese_question: "他对真相的 __________，通过伪造文件和篡改陈述，使人很难相信他说的任何话。",
        answers: [
            { option: "A", answer: "honesty", chinese_answer: "诚实", chinese_romanization: "chéngshí" },
            { option: "B", answer: "clarity", chinese_answer: "清晰", chinese_romanization: "qīngxī" },
            { option: "C", answer: "forgery", chinese_answer: "篡改", chinese_romanization: "cuàngǎi" },
            { option: "D", answer: "accuracy", chinese_answer: "准确性", chinese_romanization: "zhǔnquè xìng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'forgery' figuratively means the act of falsely altering or misrepresenting something." +
            "<br><br>" +
            "(A) 'honesty' means the quality of being honest." +
            "<br><br>" +
            "(B) 'clarity' means the quality of being clear, in particular." +
            "<br><br>" +
            "(D) 'accuracy' means the quality or state of being correct or precise.",
        chinese_explanation: "(C) '篡改' 在比喻意义上意味着虚假更改或歪曲某事的行为。" +
            "<br><br>" +
            "(A) '诚实' 意味着诚实的品质。" +
            "<br><br>" +
            "(B) '清晰' 意味着特别清晰的品质。" +
            "<br><br>" +
            "(D) '准确性' 意味着正确或精确的质量或状态。"
    },
    {
        id: 5,
        question: "The film's protagonist was a __________, often found herself in dangerous situations due to her sleepwalking episodes.",
        chinese_question: "电影的主角是一个 __________，由于她的梦游发作，她经常发现自己处于危险的境地。",
        answers: [
                { option: "A", answer: "somnambulist", chinese_answer: "梦游者", chinese_romanization: "mèngyóuzhě" },
                { option: "B", answer: "insomniac", chinese_answer: "失眠者", chinese_romanization: "shīmiánzhě" },
                { option: "C", answer: "hypochondriac", chinese_answer: "疑病症患者", chinese_romanization: "yíbìngzhèng huànzhě" },
                { option: "D", answer: "sleep therapist", chinese_answer: "睡眠治疗师", chinese_romanization: "shuìmián zhìliáoshī" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'somnambulist' is a term for a person who sleepwalks." +
            "<br><br>" +
            "(B) 'insomniac' refers to someone who struggles with insomnia." +
            "<br><br>" +
            "(C) 'hypochondriac' describes someone who is abnormally anxious about their health." +
            "<br><br>" +
            "(D) 'sleep therapist' is a professional who treats sleep disorders.",
        chinese_explanation: "(A) '梦游者' 是指梦游的人。" +
            "<br><br>" +
            "(B) '失眠者' 指的是与失眠作斗争的人。" +
            "<br><br>" +
            "(C) '疑病症患者' 描述的是对自己的健康异常焦虑的人。" +
            "<br><br>" +
            "(D) '睡眠治疗师' 是治疗睡眠障碍的专业人士。"
    },
    {
        id: 6,
        question: "The young __________ eagerly followed the senior priest, assisting him with the rituals and ceremonies.",
        chinese_question: "年轻的 __________ 热心地跟随高级神父，协助他进行仪式和典礼。",
        answers: [
            { option: "A", answer: "rival", chinese_answer: "竞争者", chinese_romanization: "jìngzhēng zhě" },
            { option: "B", answer: "acolyte", chinese_answer: "侍僧", chinese_romanization: "shìsēng" },
            { option: "C", answer: "opponent", chinese_answer: "对手", chinese_romanization: "duìshǒu" },
            { option: "D", answer: "antagonist", chinese_answer: "敌人", chinese_romanization: "dírén" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'acolyte' means a person assisting a priest in a religious service or procession." +
            "<br><br>" +
            "(A) 'rival' means a person or thing competing with another for the same objective or for superiority in the same field of activity." +
            "<br><br>" +
            "(C) 'opponent' means someone who competes against or fights another in a contest, game, or argument." +
            "<br><br>" +
            "(D) 'antagonist' means a person who actively opposes or is hostile to someone or something; an adversary.",
        chinese_explanation: "(B) '侍僧' 一词意味着在宗教服务或游行中协助神父的人。" +
            "<br><br>" +
            "(A) '竞争者' 意味着与另一个人为同一目标或在同一领域争夺优越地位的人或事物。" +
            "<br><br>" +
            "(C) '对手' 意味着在比赛、游戏或争论中与另一人竞争或对抗的人。" +
            "<br><br>" +
            "(D) '敌人' 意味着积极反对或敌视某人或某事的人；对手。"
    },
    {
        id: 7,
        question: "The doctor's interest in the __________ of the disease led him to research its origins and development extensively.",
        chinese_question: "医生对该疾病 __________ 的兴趣使他广泛研究其起源和发展。",
        answers: [
            { option: "A", answer: "cure", chinese_answer: "治愈", chinese_romanization: "zhìyù" },
            { option: "B", answer: "etiology", chinese_answer: "病因学", chinese_romanization: "bìng yīnxué" },
            { option: "C", answer: "symptoms", chinese_answer: "症状", chinese_romanization: "zhèngzhuàng" },
            { option: "D", answer: "treatment", chinese_answer: "治疗", chinese_romanization: "zhìliáo" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'etiology' means the cause, set of causes, or manner of causation of a disease or condition." +
            "<br><br>" +
            "(A) 'cure' means relieve a person or animal of the symptoms of a disease or condition." +
            "<br><br>" +
            "(C) 'symptoms' means a physical or mental feature that is regarded as indicating a condition of disease, particularly such a feature that is apparent to the patient." +
            "<br><br>" +
            "(D) 'treatment' means medical care given to a patient for an illness or injury.",
        chinese_explanation: "(B) '病因学' 一词意味着疾病或状况的原因、一组原因或病因方式。" +
            "<br><br>" +
            "(A) '治愈' 意味着解除某人或动物的疾病或状况的症状。" +
            "<br><br>" +
            "(C) '症状' 意味着被认为表明疾病状况的身体或精神特征，特别是患者明显的这种特征。" +
            "<br><br>" +
            "(D) '治疗' 意味着为疾病或受伤的患者提供的医疗护理。"
    },
    {
        id: 8,
        question: "During the debate, each __________ skillfully presented their arguments, making it difficult to determine a clear winner.",
        chinese_question: "在辩论中，每位 __________ 都巧妙地提出了自己的论点，使得很难确定一个明确的胜者。",
        answers: [
            { option: "A", answer: "observer", chinese_answer: "观察者", chinese_romanization: "guānchá zhě" },
            { option: "B", answer: "spectator", chinese_answer: "观众", chinese_romanization: "guānzhòng" },
            { option: "C", answer: "interlocutor", chinese_answer: "对话者", chinese_romanization: "duìhuà zhě" },
            { option: "D", answer: "bystander", chinese_answer: "旁观者", chinese_romanization: "pángguān zhě" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'interlocutor' means a person who takes part in a conversation or dialogue." +
            "<br><br>" +
            "(A) 'observer' means a person who watches or notices something." +
            "<br><br>" +
            "(B) 'spectator' means a person who watches at a show, game, or other event." +
            "<br><br>" +
            "(D) 'bystander' means a person who is present at an event or incident but does not take part.",
        chinese_explanation: "(C) '对话者' 一词意味着参与对话或对话的人。" +
            "<br><br>" +
            "(A) '观察者' 意味着观察或注意某事的人。" +
            "<br><br>" +
            "(B) '观众' 意味着观看表演、比赛或其他活动的人。" +
            "<br><br>" +
            "(D) '旁观者' 意味着在事件或事故现场但不参与的人。"
    },
    {
        id: 9,
        question: "Scientists are constantly researching substances that may act as a __________, causing cancer in living tissue.",
        chinese_question: "科学家们不断研究可能作为 __________ 的物质，这些物质会在活体组织中引发癌症。",
        answers: [
            { option: "A", answer: "nutrient", chinese_answer: "营养素", chinese_romanization: "yíngyǎng sù" },
            { option: "B", answer: "carcinogen", chinese_answer: "致癌物", chinese_romanization: "zhì'ái wù" },
            { option: "C", answer: "vitamin", chinese_answer: "维生素", chinese_romanization: "wéishēngsù" },
            { option: "D", answer: "antibiotic", chinese_answer: "抗生素", chinese_romanization: "kàngshēngsù" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'carcinogen' means a substance capable of causing cancer in living tissue." +
            "<br><br>" +
            "(A) 'nutrient' means a substance that provides nourishment essential for growth and the maintenance of life." +
            "<br><br>" +
            "(C) 'vitamin' means any of a group of organic compounds which are essential for normal growth and nutrition and are required in small quantities in the diet because they cannot be synthesized by the body." +
            "<br><br>" +
            "(D) 'antibiotic' means a medicine (such as penicillin or its derivatives) that inhibits the growth of or destroys microorganisms.",
        chinese_explanation: "(B) '致癌物' 一词意味着能够在活体组织中引起癌症的物质。" +
            "<br><br>" +
            "(A) '营养素' 意味着提供生长和维持生命所必需的营养的物质。" +
            "<br><br>" +
            "(C) '维生素' 意味着一组有机化合物中的任何一种，这些化合物对于正常生长和营养是必需的，并且由于身体不能合成，因此需要少量摄入饮食。" +
            "<br><br>" +
            "(D) '抗生素' 意味着抑制或破坏微生物生长的药物（如青霉素及其衍生物）。"
    },
    {
        id: 10,
        question: "The children planned a playful __________, sneaking out of their rooms to surprise their parents.",
        chinese_question: "孩子们计划了一场有趣的 __________，偷偷溜出房间给父母一个惊喜。",
        answers: [
            { option: "A", answer: "lecture", chinese_answer: "讲座", chinese_romanization: "jiǎngzuò" },
            { option: "B", answer: "chore", chinese_answer: "家务", chinese_romanization: "jiāwù" },
            { option: "C", answer: "caper", chinese_answer: "嬉闹", chinese_romanization: "xīnào" },
            { option: "D", answer: "project", chinese_answer: "项目", chinese_romanization: "xiàngmù" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'caper' means a playful skipping movement; an activity or escapade, typically one that is illicit or ridiculous." +
            "<br><br>" +
            "(A) 'lecture' means an educational talk to an audience, especially to students in a university or college." +
            "<br><br>" +
            "(B) 'chore' means a routine task, especially a household one." +
            "<br><br>" +
            "(D) 'project' means an individual or collaborative enterprise that is carefully planned to achieve a particular aim.",
        chinese_explanation: "(C) '嬉闹' 一词意味着一种嬉戏的跳跃动作；通常是非法或荒谬的活动或逃避。" +
            "<br><br>" +
            "(A) '讲座' 意味着对观众的教育性谈话，特别是对大学或学院的学生。" +
            "<br><br>" +
            "(B) '家务' 意味着一项常规任务，特别是家庭任务。" +
            "<br><br>" +
            "(D) '项目' 意味着一个精心计划的个人或合作企业，以实现特定目标。"
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
