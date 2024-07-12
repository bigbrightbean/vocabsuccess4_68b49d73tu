// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "Despite his autism, he excelled as a musical __________, composing symphonies at a young age.",
        chinese_question: "尽管他患有自闭症，他在音乐方面表现突出，年幼时就创作了交响乐。",
        answers: [
            { option: "A", answer: "layman", chinese_answer: "外行", chinese_romanization: "wàiháng" },
            { option: "B", answer: "dilettante", chinese_answer: "浅薄的涉猎者", chinese_romanization: "qiǎnbó de shèlǜe zhě" },
            { option: "C", answer: "neophyte", chinese_answer: "新手", chinese_romanization: "xīnshǒu" },
            { option: "D", answer: "savant", chinese_answer: "天才", chinese_romanization: "tiāncái" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'savant' refers to a person with profound or extensive learning, especially one with exceptional skill or knowledge in a particular field." +
            "<br><br>" +
            "(A) 'layman' refers to a person without professional or specialized knowledge in a particular subject." +
            "<br><br>" +
            "(B) 'dilettante' refers to someone who has an amateurish or superficial interest in a subject." +
            "<br><br>" +
            "(C) 'neophyte' refers to a person who is new to a subject or activity.",
        chinese_explanation: "(D) '天才' 指的是具有深厚或广泛知识的人，尤其是在特定领域具有非凡技能或知识的人。" +
            "<br><br>" +
            "(A) '外行' 指的是在某一特定学科没有专业知识的人。" +
            "<br><br>" +
            "(B) '浅薄的涉猎者' 指的是对某个主题有业余或表面兴趣的人。" +
            "<br><br>" +
            "(C) '新手' 指的是刚接触某一学科或活动的人。"
    },
    {
        id: 2,
        question: "He distributed a __________ on environmental conservation to raise awareness about the issue, detailing the importance of protecting natural resources.",
        chinese_question: "他分发了一份关于环境保护的 __________，以提高人们对该问题的认识，详细说明保护自然资源的重要性。",
        answers: [
            { option: "A", answer: "tract", chinese_answer: "小册子", chinese_romanization: "xiǎo cèzi" },
            { option: "B", answer: "chapter", chinese_answer: "章节", chinese_romanization: "zhāngjié" },
            { option: "C", answer: "paragraph", chinese_answer: "段落", chinese_romanization: "duànluò" },
            { option: "D", answer: "note", chinese_answer: "笔记", chinese_romanization: "bǐjì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'tract' means a short pamphlet or leaflet, typically on a religious or political topic." +
            "<br><br>" +
            "(B) 'chapter' means a main division of a book, typically with a number or title." +
            "<br><br>" +
            "(C) 'paragraph' means a distinct section of a piece of writing, usually dealing with a single theme and indicated by a new line, indentation, or numbering." +
            "<br><br>" +
            "(D) 'note' means a brief record of facts, topics, or thoughts, written down as an aid to memory.",
        chinese_explanation: "(A) '小册子' 意味着一本简短的小册子或传单，通常是关于宗教或政治主题的。" +
            "<br><br>" +
            "(B) '章节' 意味着一本书的主要部分，通常带有编号或标题。" +
            "<br><br>" +
            "(C) '段落' 意味着一段写作中的独特部分，通常处理一个单一主题，并通过新行、缩进或编号来表示。" +
            "<br><br>" +
            "(D) '笔记' 意味着作为记忆辅助而写下的简短记录。"
    },
    {
        id: 3,
        question: "Her latest business __________ was so intricate that only a few people understood how it worked.",
        chinese_question: "她最新的商业 __________ 如此复杂，只有少数人了解它是如何运作的。",
        answers: [
            { option: "A", answer: "failure", chinese_answer: "失败", chinese_romanization: "shībài" },
            { option: "B", answer: "success", chinese_answer: "成功", chinese_romanization: "chénggōng" },
            { option: "C", answer: "scheme", chinese_answer: "计划", chinese_romanization: "jìhuà" },
            { option: "D", answer: "hobby", chinese_answer: "爱好", chinese_romanization: "àihào" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'scheme' means a crafty, intricate, or secret plan." +
            "<br><br>" +
            "(A) 'failure' means lack of success." +
            "<br><br>" +
            "(B) 'success' means the accomplishment of an aim or purpose." +
            "<br><br>" +
            "(D) 'hobby' means an activity done regularly in one's leisure time for pleasure.",
        chinese_explanation: "(C) '计划' 意味着一个狡猾、复杂或秘密的计划。" +
            "<br><br>" +
            "(A) '失败' 意味着缺乏成功。" +
            "<br><br>" +
            "(B) '成功' 意味着实现目标或目的。" +
            "<br><br>" +
            "(D) '爱好' 意味着在闲暇时间为乐趣而定期进行的活动。"
    },
    {
        id: 4,
        question: "The famous actor received so much __________ from fans that he could hardly walk down the street without being mobbed, with people constantly asking for autographs and selfies.",
        chinese_question: "这位著名演员受到了粉丝们如此多的 __________，以至于他几乎无法在街上行走而不被围攻，人们不断地要求签名和自拍。",
        answers: [
            { option: "A", answer: "criticism", chinese_answer: "批评", chinese_romanization: "pīpíng" },
            { option: "B", answer: "adulation", chinese_answer: "奉承", chinese_romanization: "fèngchéng" },
            { option: "C", answer: "indifference", chinese_answer: "漠不关心", chinese_romanization: "mò bù guānxīn" },
            { option: "D", answer: "disdain", chinese_answer: "轻视", chinese_romanization: "qīngshì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'adulation' means excessive admiration or praise." +
            "<br><br>" +
            "(A) 'criticism' means the expression of disapproval of someone or something based on perceived faults or mistakes." +
            "<br><br>" +
            "(C) 'indifference' means lack of interest, concern, or sympathy." +
            "<br><br>" +
            "(D) 'disdain' means the feeling that someone or something is unworthy of one's consideration or respect.",
        chinese_explanation: "(B) '奉承' 一词意味着过度的钦佩或赞美。" +
            "<br><br>" +
            "(A) '批评' 意味着基于被认为的错误或缺陷对某人或某事的表示不赞成。" +
            "<br><br>" +
            "(C) '漠不关心' 意味着缺乏兴趣、关心或同情。" +
            "<br><br>" +
            "(D) '轻视' 意味着认为某人或某事不值得考虑或尊重的感觉。"
    },
    {
        id: 5,
        question: "The old law fell into __________ and was eventually repealed as it was no longer applicable.",
        chinese_question: "这条旧法律被废弃，最终被废除，因为它不再适用。",
        answers: [
            { option: "A", answer: "practice", chinese_answer: "实践", chinese_romanization: "shíjiàn" },
            { option: "B", answer: "popularity", chinese_answer: "受欢迎", chinese_romanization: "shòu huānyíng" },
            { option: "C", answer: "desuetude", chinese_answer: "废止", chinese_romanization: "fèizhǐ" },
            { option: "D", answer: "enforcement", chinese_answer: "执行", chinese_romanization: "zhíxíng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'desuetude' means a state of disuse." +
            "<br><br>" +
            "(A) 'practice' means the actual application or use of an idea, belief, or method." +
            "<br><br>" +
            "(B) 'popularity' means the state or condition of being liked, admired, or supported by many people." +
            "<br><br>" +
            "(D) 'enforcement' means the act of compelling observance of or compliance with a law, rule, or obligation.",
        chinese_explanation: "(C) '废止' 一词意味着废弃状态。" +
            "<br><br>" +
            "(A) '实践' 意味着将想法、信念或方法实际应用。" +
            "<br><br>" +
            "(B) '受欢迎' 意味着被许多人喜欢、钦佩或支持的状态或条件。" +
            "<br><br>" +
            "(D) '执行' 意味着强制遵守或遵守法律、规则或义务的行为。"
    },
    {
        id: 6,
        question: "The economic downturn acted as a __________ on the city's development, stalling progress for years.",
        chinese_question: "经济衰退对城市的发展起到了 __________ 作用，使进展停滞了多年。",
        answers: [
            { option: "A", answer: "boost", chinese_answer: "提升", chinese_romanization: "tíshēng" },
            { option: "B", answer: "benefit", chinese_answer: "益处", chinese_romanization: "yìchù" },
            { option: "C", answer: "advantage", chinese_answer: "优势", chinese_romanization: "yōushì" },
            { option: "D", answer: "blight", chinese_answer: "阻碍", chinese_romanization: "zǔ'ài" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'blight' literally means a plant disease, typically one caused by fungi such as mildews, rusts, and smuts. Figuratively, it means something that spoils or damages things severely." +
            "<br><br>" +
            "(A) 'boost' means help or encourage (something) to increase or improve." +
            "<br><br>" +
            "(B) 'benefit' means an advantage or profit gained from something." +
            "<br><br>" +
            "(C) 'advantage' means a condition or circumstance that puts one in a favorable or superior position.",
        chinese_explanation: "(D) '阻碍' 字面意思是植物疾病，通常由霉菌引起，如霉斑、锈病和煤烟病。比喻意义上意味着严重破坏或损害事物的东西。" +
            "<br><br>" +
            "(A) '提升' 意味着帮助或鼓励（某事）增加或改善。" +
            "<br><br>" +
            "(B) '益处' 意味着从某事中获得的优势或利润。" +
            "<br><br>" +
            "(C) '优势' 意味着使一个人处于有利或优越位置的条件或环境。"
    },
    {
        id: 7,
        question: "The artist was considered an __________ for his unconventional style and refusal to adhere to traditional methods.",
        chinese_question: "这位艺术家因其不拘一格的风格和拒绝遵循传统方法而被视为 __________。",
        answers: [
            { option: "A", answer: "conformist", chinese_answer: "墨守成规者", chinese_romanization: "mòshǒu chéngguī zhě" },
            { option: "B", answer: "traditionalist", chinese_answer: "传统主义者", chinese_romanization: "chuántǒng zhǔyì zhě" },
            { option: "C", answer: "iconoclast", chinese_answer: "偶像破坏者", chinese_romanization: "ǒuxiàng pòhuài zhě" },
            { option: "D", answer: "follower", chinese_answer: "追随者", chinese_romanization: "zhuīsuí zhě" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'iconoclast' means a person who attacks or criticizes cherished beliefs or institutions." +
            "<br><br>" +
            "(A) 'conformist' means a person who conforms to accepted behavior or established practices." +
            "<br><br>" +
            "(B) 'traditionalist' means a person who has deep respect for long-established cultural and religious values." +
            "<br><br>" +
            "(D) 'follower' means a person who supports and admires a particular person or set of ideas.",
        chinese_explanation: "(C) '偶像破坏者' 一词意味着攻击或批评受人珍视的信仰或制度的人。" +
            "<br><br>" +
            "(A) '墨守成规者' 意味着遵守被接受的行为或既定做法的人。" +
            "<br><br>" +
            "(B) '传统主义者' 意味着对长期确立的文化和宗教价值观有深刻尊重的人。" +
            "<br><br>" +
            "(D) '追随者' 意味着支持和钦佩特定的人或一组思想的人。"
    },
    {
        id: 8,
        question: "The doctor explained that an __________ in the patient's brain could be life-threatening if not treated promptly, as it involves the risk of a blood vessel rupturing.",
        chinese_question: "医生解释说，如果不及时治疗，患者脑部的 __________ 可能会危及生命，因为它涉及血管破裂的风险。",
        answers: [
            { option: "A", answer: "infection", chinese_answer: "感染", chinese_romanization: "gǎnrǎn" },
            { option: "B", answer: "tumour", chinese_answer: "肿瘤", chinese_romanization: "zhǒngliú" },
            { option: "C", answer: "aneurysm", chinese_answer: "动脉瘤", chinese_romanization: "dòngmàiliú" },
            { option: "D", answer: "fracture", chinese_answer: "骨折", chinese_romanization: "gǔzhé" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'aneurysm' means an excessive localized enlargement of an artery caused by a weakening of the artery wall." +
            "<br><br>" +
            "(A) 'infection' means the invasion and multiplication of microorganisms such as bacteria, viruses, and parasites that are not normally present within the body." +
            "<br><br>" +
            "(B) 'tumour' means a swelling of a part of the body, generally without inflammation, caused by an abnormal growth of tissue, whether benign or malignant." +
            "<br><br>" +
            "(D) 'fracture' means the cracking or breaking of a hard object or material.",
        chinese_explanation: "(C) '动脉瘤' 一词意味着由于动脉壁的减弱导致的动脉局部过度扩大。" +
            "<br><br>" +
            "(A) '感染' 意味着通常不在体内的微生物（如细菌、病毒和寄生虫）的侵入和繁殖。" +
            "<br><br>" +
            "(B) '肿瘤' 意味着身体某部分的肿胀，通常没有炎症，由组织的异常生长引起，无论是良性还是恶性。" +
            "<br><br>" +
            "(D) '骨折' 意味着坚硬物体或材料的断裂或破裂。"
    },
    {
        id: 9,
        question: "The idea that success is purely based on luck is a __________ that undermines hard work and effort.",
        chinese_question: "认为成功纯粹基于运气的想法是一种 __________，它削弱了努力工作和付出的价值。",
        answers: [
            { option: "A", answer: "fallacy", chinese_answer: "谬论", chinese_romanization: "miùlùn" },
            { option: "B", answer: "principle", chinese_answer: "原则", chinese_romanization: "yuánzé" },
            { option: "C", answer: "reality", chinese_answer: "现实", chinese_romanization: "xiànshí" },
            { option: "D", answer: "theory", chinese_answer: "理论", chinese_romanization: "lǐlùn" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'fallacy' means a misconception or false belief." +
            "<br><br>" +
            "(B) 'principle' means a fundamental truth or proposition that serves as the foundation for a system of belief or behavior." +
            "<br><br>" +
            "(C) 'reality' means the state of things as they actually exist." +
            "<br><br>" +
            "(D) 'theory' means a supposition or a system of ideas intended to explain something.",
        chinese_explanation: "(A) '谬论' 意味着一种误解或错误的信念。" +
            "<br><br>" +
            "(B) '原则' 意味着作为信仰或行为体系基础的基本真理或命题。" +
            "<br><br>" +
            "(C) '现实' 意味着事物实际上存在的状态。" +
            "<br><br>" +
            "(D) '理论' 意味着旨在解释某事的假设或系统的想法。"
    },
    {
        id: 10,
        question: "The company's __________ of the smaller firm expanded its market reach and product line.",
        chinese_question: "公司对较小公司的 __________ 扩大了其市场覆盖范围和产品线。",
        answers: [
            { option: "A", answer: "sale", chinese_answer: "销售", chinese_romanization: "xiāoshòu" },
            { option: "B", answer: "acquisition", chinese_answer: "收购", chinese_romanization: "shōugòu" },
            { option: "C", answer: "loss", chinese_answer: "损失", chinese_romanization: "sǔnshī" },
            { option: "D", answer: "liquidation", chinese_answer: "清算", chinese_romanization: "qīngsuàn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'acquisition' means the act of acquiring or gaining possession of something, especially a company or business." +
            "<br><br>" +
            "(A) 'sale' means the act of selling something in exchange for money." +
            "<br><br>" +
            "(C) 'loss' means the state of no longer having something or someone." +
            "<br><br>" +
            "(D) 'liquidation' means the process of closing a business and selling its assets to pay off debts.",
        chinese_explanation: "(B) '收购' 意味着获得或取得某物的行为，特别是公司或企业。" +
            "<br><br>" +
            "(A) '销售' 意味着出售某物以换取金钱的行为。" +
            "<br><br>" +
            "(C) '损失' 意味着不再拥有某物或某人的状态。" +
            "<br><br>" +
            "(D) '清算' 意味着关闭企业并出售其资产以偿还债务的过程。"
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
