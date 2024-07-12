// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "Her decision to invest in the failing company, despite all the warnings and signs of bankruptcy, turned out to be a costly __________.",
        chinese_question: "她决定投资失败的公司，尽管有所有的警告和破产迹象，结果是一个代价高昂的 __________。",
        answers: [
            { option: "A", answer: "blunder", chinese_answer: "错误", chinese_romanization: "cuòwù" },
            { option: "B", answer: "triumph", chinese_answer: "胜利", chinese_romanization: "shènglì" },
            { option: "C", answer: "breakthrough", chinese_answer: "突破", chinese_romanization: "túpò" },
            { option: "D", answer: "achievement", chinese_answer: "成就", chinese_romanization: "chéngjiù" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'blunder' metaphorically means a serious mistake typically caused by ignorance or confusion." +
            "<br><br>" +
            "(B) 'triumph' means a great victory or achievement." +
            "<br><br>" +
            "(C) 'breakthrough' means a sudden, dramatic, and important discovery or development." +
            "<br><br>" +
            "(D) 'achievement' means a thing done successfully, typically by effort, courage, or skill.",
        chinese_explanation: "(A) '错误' 比喻通常由无知或困惑引起的严重错误。" +
            "<br><br>" +
            "(B) '胜利' 意味着伟大的胜利或成就。" +
            "<br><br>" +
            "(C) '突破' 意味着突然的、戏剧性的和重要的发现或发展。" +
            "<br><br>" +
            "(D) '成就' 意味着通过努力、勇气或技巧成功完成的事情。"
    },
    {
        id: 2,
        question: "He used a __________ in the business world to create a distinct persona and avoid past associations.",
        chinese_question: "他在商业世界中使用 __________，以创造一个独特的形象并避免与过去的联系。",
        answers: [
            { option: "A", answer: "friend", chinese_answer: "朋友", chinese_romanization: "péngyǒu" },
            { option: "B", answer: "enemy", chinese_answer: "敌人", chinese_romanization: "dírén" },
            { option: "C", answer: "pseudonym", chinese_answer: "假名", chinese_romanization: "jiǎmíng" },
            { option: "D", answer: "relative", chinese_answer: "亲戚", chinese_romanization: "qīnqī" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'pseudonym' means a false name used to create a new identity." +
            "<br><br>" +
            "(A) 'friend' means a person with whom one has a bond of mutual affection." +
            "<br><br>" +
            "(B) 'enemy' means a person who is actively opposed or hostile to someone or something." +
            "<br><br>" +
            "(D) 'relative' means a person connected by blood or marriage.",
        chinese_explanation: "(C) '假名' 意味着用来创建新身份的假名。" +
            "<br><br>" +
            "(A) '朋友' 意味着一个与自己有相互情感联系的人。" +
            "<br><br>" +
            "(B) '敌人' 意味着一个积极反对或敌对某人或某事的人。" +
            "<br><br>" +
            "(D) '亲戚' 意味着通过血缘或婚姻关系的人。"
    },
    {
        id: 3,
        question: "The process of __________ is a step towards sainthood in the Catholic Church, recognizing a person's holy life.",
        chinese_question: "__________ 的过程是天主教迈向圣人地位的一步，承认一个人的圣洁生活。",
        answers: [
            { option: "A", answer: "vilification", chinese_answer: "诋毁", chinese_romanization: "dǐhuǐ" },
            { option: "B", answer: "beatification", chinese_answer: "宣福", chinese_romanization: "xuānfú" },
            { option: "C", answer: "condemnation", chinese_answer: "谴责", chinese_romanization: "qiǎnzé" },
            { option: "D", answer: "excommunication", chinese_answer: "逐出教会", chinese_romanization: "zhú chū jiàohuì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'beatification' means the recognition by the Catholic Church of a dead person's entrance into heaven and capacity to intercede on behalf of individuals who pray in his or her name." +
            "<br><br>" +
            "(A) 'vilification' means abusively disparaging speech or writing." +
            "<br><br>" +
            "(C) 'condemnation' means the expression of very strong disapproval; censure." +
            "<br><br>" +
            "(D) 'excommunication' means officially excluding someone from participation in the sacraments and services of the Christian Church.",
        chinese_explanation: "(B) '宣福' 一词意味着天主教会承认一位已故人士进入天堂并有能力代表以他或她的名义祈祷的人进行调解。" +
            "<br><br>" +
            "(A) '诋毁' 意味着带有侮辱性的贬低言论或文字。" +
            "<br><br>" +
            "(C) '谴责' 意味着非常强烈的不赞成；责难。" +
            "<br><br>" +
            "(D) '逐出教会' 意味着正式将某人排除在参与基督教会的圣礼和礼拜之外。"
    },
    {
        id: 4,
        question: "The author's frequent __________ to classical mythology enriched the narrative and added deeper meaning to the story.",
        chinese_question: "作者经常 __________ 古典神话，丰富了叙述，并为故事增添了更深的意义。",
        answers: [
            { option: "A", answer: "references", chinese_answer: "参考", chinese_romanization: "cānkǎo" },
            { option: "B", answer: "plots", chinese_answer: "情节", chinese_romanization: "qíngjié" },
            { option: "C", answer: "characters", chinese_answer: "角色", chinese_romanization: "juésè" },
            { option: "D", answer: "settings", chinese_answer: "场景", chinese_romanization: "chǎngjǐng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'references' means the action of mentioning or alluding to something." +
            "<br><br>" +
            "(B) 'plots' means the main events of a play, novel, movie, or similar work, devised and presented by the writer as an interrelated sequence." +
            "<br><br>" +
            "(C) 'characters' means the mental and moral qualities distinctive to an individual." +
            "<br><br>" +
            "(D) 'settings' means the place or type of surroundings where something is positioned or where an event takes place.",
        chinese_explanation: "(A) '参考' 一词意味着提及或暗指某事的行为。" +
            "<br><br>" +
            "(B) '情节' 意味着戏剧、小说、电影或类似作品的主要事件，由作家设计和呈现为相互关联的序列。" +
            "<br><br>" +
            "(C) '角色' 意味着个人独特的精神和道德品质。" +
            "<br><br>" +
            "(D) '场景' 意味着某物所在的位置或环境类型或事件发生的地方。"
    },
    {
        id: 5,
        question: "The renowned __________ designed a stunning gown for the celebrity to wear at the red carpet event.",
        chinese_question: "这位著名的 __________ 为这位名人设计了一件惊艳的礼服，供她在红毯活动上穿。",
        answers: [
            { option: "A", answer: "tailor", chinese_answer: "裁缝", chinese_romanization: "cáiféng" },
            { option: "B", answer: "seamstress", chinese_answer: "缝纫师", chinese_romanization: "féngrèn shī" },
            { option: "C", answer: "couturier", chinese_answer: "高级女装设计师", chinese_romanization: "gāojí nǚzhuāng shèjì shī" },
            { option: "D", answer: "patternmaker", chinese_answer: "打样师", chinese_romanization: "dǎ yàng shī" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'couturier' means a fashion designer who manufactures and sells clothes that have been tailored to a client's specific requirements and measurements." +
            "<br><br>" +
            "(A) 'tailor' means a person whose occupation is making fitted clothes such as suits, pants, and jackets to fit individual customers." +
            "<br><br>" +
            "(B) 'seamstress' means a woman who sews, especially one who earns her living by sewing." +
            "<br><br>" +
            "(D) 'patternmaker' means a person who makes patterns, especially for sewing or carpentry.",
        chinese_explanation: "(C) '高级女装设计师' 一词意味着根据客户的具体要求和测量定制和销售衣服的时装设计师。" +
            "<br><br>" +
            "(A) '裁缝' 意味着职业是制作合身衣服（如西装、裤子和夹克）以适应个别客户的人。" +
            "<br><br>" +
            "(B) '缝纫师' 意味着一个缝纫的女人，尤其是一个靠缝纫谋生的人。" +
            "<br><br>" +
            "(D) '打样师' 意味着制作图案的人，尤其是缝纫或木工用的图案。"
    },
    {
        id: 6,
        question: "The photographer’s use of __________, capturing the old building next to a new skyscraper, highlighted the city's blend of history and modernity.",
        chinese_question: "摄影师通过 __________，将老建筑与新摩天大楼并排拍摄，突出了这座城市历史与现代的融合。",
        answers: [
            { option: "A", answer: "separation", chinese_answer: "分离", chinese_romanization: "fēnlí" },
            { option: "B", answer: "juxtaposition", chinese_answer: "并置", chinese_romanization: "bìng zhì" },
            { option: "C", answer: "isolation", chinese_answer: "隔离", chinese_romanization: "gélí" },
            { option: "D", answer: "division", chinese_answer: "分割", chinese_romanization: "fēngē" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'juxtaposition' means the fact of two things being seen or placed close together with contrasting effect." +
            "<br><br>" +
            "(A) 'separation' means the action or state of moving or being moved apart." +
            "<br><br>" +
            "(C) 'isolation' means the process or fact of isolating or being isolated." +
            "<br><br>" +
            "(D) 'division' means the action of separating something into parts, or the process of being separated.",
        chinese_explanation: "(B) '并置' 一词意味着将两件事物放在一起以形成对比效果的事实。" +
            "<br><br>" +
            "(A) '分离' 意味着移动或被移动开的动作或状态。" +
            "<br><br>" +
            "(C) '隔离' 意味着隔离或被隔离的过程或事实。" +
            "<br><br>" +
            "(D) '分割' 意味着将某物分成部分的动作，或被分割的过程。"
    },
    {
        id: 7,
        question: "His deep __________ was not physical but emotional, stemming from years of regret and unresolved guilt.",
        chinese_question: "他的深深的 __________ 不是身体上的，而是情感上的，源于多年的遗憾和未解的内疚。",
        answers: [
            { option: "A", answer: "affliction", chinese_answer: "痛苦", chinese_romanization: "tòngkǔ" },
            { option: "B", answer: "delight", chinese_answer: "高兴", chinese_romanization: "gāoxìng" },
            { option: "C", answer: "ease", chinese_answer: "容易", chinese_romanization: "róngyì" },
            { option: "D", answer: "peace", chinese_answer: "和平", chinese_romanization: "hépíng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'affliction' metaphorically means a state of being in pain, distress, or misery." +
            "<br><br>" +
            "(B) 'delight' means great pleasure." +
            "<br><br>" +
            "(C) 'ease' means absence of difficulty or effort." +
            "<br><br>" +
            "(D) 'peace' means freedom from disturbance; tranquility.",
        chinese_explanation: "(A) '痛苦' 比喻处于痛苦、痛苦或不幸的状态。" +
            "<br><br>" +
            "(B) '高兴' 意味着极大的愉快。" +
            "<br><br>" +
            "(C) '容易' 意味着没有困难或努力。" +
            "<br><br>" +
            "(D) '和平' 意味着没有干扰的自由；宁静。"
    },
    {
        id: 8,
        question: "After years of dedication and hard work, she finally reached the __________ of her career, solidifying her position as a respected leader in the industry.",
        chinese_question: "经过多年的奉献和努力，她终于达到了事业的__________，在行业中确立了自己作为一名受人尊敬的领导者的地位。",
        answers: [
            { option: "A", answer: "summit", chinese_answer: "巅峰", chinese_romanization: "diānfēng" },
            { option: "B", answer: "conflict", chinese_answer: "冲突", chinese_romanization: "chōngtú" },
            { option: "C", answer: "breakdown", chinese_answer: "瓦解", chinese_romanization: "wǎjiě" },
            { option: "D", answer: "meeting", chinese_answer: "会议", chinese_romanization: "huìyì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'summit' metaphorically refers to the pinnacle or highest point in one's career." + 
            "<br><br>" + 
            "(B) 'conflict' means a serious disagreement or argument, typically a protracted one." + 
            "<br><br>" + 
            "(C) 'breakdown' means a failure of a relationship, system, or discussion." + 
            "<br><br>" + 
            "(D) 'meeting' means an assembly of people, especially the members of a society or committee, for discussion or entertainment.",
        chinese_explanation: "(A) '巅峰' 比喻事业上的最高点或顶峰。" + 
            "<br><br>" + 
            "(B) '冲突' 意味着严重的分歧或争论，通常是长期的。" + 
            "<br><br>" + 
            "(C) '瓦解' 意味着关系、系统或讨论的失败。" + 
            "<br><br>" + 
            "(D) '会议' 意味着一群人（特别是社会或委员会的成员）聚集在一起进行讨论或娱乐。"
    },
    {
        id: 9,
        question: "The boarding school, with its strict rules and rigid structure, felt like a __________ to the students.",
        chinese_question: "寄宿学校的严格规定和僵化结构让学生感觉像 __________。",
        answers: [
            { option: "A", answer: "sanctuary", chinese_answer: "庇护所", chinese_romanization: "bìhù suǒ" },
            { option: "B", answer: "penitentiary", chinese_answer: "监狱", chinese_romanization: "jiānyù" },
            { option: "C", answer: "paradise", chinese_answer: "天堂", chinese_romanization: "tiāntáng" },
            { option: "D", answer: "retreat", chinese_answer: "静修地", chinese_romanization: "jìngxiū dì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'penitentiary' figuratively means a place where one feels confined or restricted, much like a prison." +
            "<br><br>" +
            "(A) 'sanctuary' means a place of refuge or safety." +
            "<br><br>" +
            "(C) 'paradise' means an ideal or idyllic place or state." +
            "<br><br>" +
            "(D) 'retreat' means a quiet or secluded place in which one can rest and relax.",
        chinese_explanation: "(B) '监狱' 在比喻意义上意味着一个人感到被禁锢或受限的地方，就像监狱一样。" +
            "<br><br>" +
            "(A) '庇护所' 意味着避难或安全的地方。" +
            "<br><br>" +
            "(C) '天堂' 意味着理想或田园诗般的地方或状态。" +
            "<br><br>" +
            "(D) '静修地' 意味着一个人可以休息和放松的安静或隐蔽的地方。"
    },
    {
        id: 10,
        question: "The overwhelming stress from her personal life was a major __________ to her studying.",
        chinese_question: "个人生活中的巨大压力是她学习的一大 __________。",
        answers: [
            { option: "A", answer: "benefit", chinese_answer: "好处", chinese_romanization: "hǎochù" },
            { option: "B", answer: "assistance", chinese_answer: "帮助", chinese_romanization: "bāngzhù" },
            { option: "C", answer: "hindrance", chinese_answer: "障碍", chinese_romanization: "zhàng'ài" },
            { option: "D", answer: "advantage", chinese_answer: "优势", chinese_romanization: "yōushì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'hindrance' means a thing that provides resistance, delay, or obstruction to something or someone." +
            "<br><br>" +
            "(A) 'benefit' means an advantage or profit gained from something." +
            "<br><br>" +
            "(B) 'assistance' means the action of helping someone by sharing work." +
            "<br><br>" +
            "(D) 'advantage' means a condition or circumstance that puts one in a favorable or superior position.",
        chinese_explanation: "(C) '障碍' 意味着对某事或某人提供抵抗、延迟或阻碍的事物。" +
            "<br><br>" +
            "(A) '好处' 意味着从某事中获得的优势或利益。" +
            "<br><br>" +
            "(B) '帮助' 意味着通过分担工作来帮助某人的行为。" +
            "<br><br>" +
            "(D) '优势' 意味着使某人处于有利或优越位置的条件或环境。"
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
