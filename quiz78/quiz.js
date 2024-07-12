// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The startup incubator was like a __________ for young entrepreneurs, nurturing their ideas.",
        chinese_question: "创业孵化器就像年轻企业家的__________，培养他们的想法。",
        answers: [
            { option: "A", answer: "office", chinese_answer: "办公室", chinese_romanization: "bàngōngshì" },
            { option: "B", answer: "nursery", chinese_answer: "温床", chinese_romanization: "wēnchuáng" },
            { option: "C", answer: "factory", chinese_answer: "工厂", chinese_romanization: "gōngchǎng" },
            { option: "D", answer: "store", chinese_answer: "商店", chinese_romanization: "shāngdiàn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'nursery' means a room or place set aside for the use of babies and small children. Figuratively, it can mean a place where something is nurtured and cared for as it develops." + 
            "<br><br>" + 
            "(A) 'office' means a room, set of rooms, or building used as a place for commercial, professional, or bureaucratic work." + 
            "<br><br>" + 
            "(C) 'factory' means a building or group of buildings where goods are manufactured or assembled chiefly by machine." + 
            "<br><br>" + 
            "(D) 'store' means a retail establishment selling items to the public.",
        chinese_explanation: "(B) '温床' 一词意味着为婴儿和小孩使用而预留的房间或地方。比喻地，它可以表示一个培育和照顾某事发展的地方。" + 
            "<br><br>" + 
            "(A) '办公室' 意味着用于商业、专业或官僚工作场所的房间、一组房间或建筑物。" + 
            "<br><br>" + 
            "(C) '工厂' 意味着主要通过机器制造或组装商品的建筑或建筑群。" + 
            "<br><br>" + 
            "(D) '商店' 意味着向公众销售物品的零售机构。"
    },
    {
        id: 2,
        question: "Despite the stressful situation, she maintained a calm __________, showing no signs of panic or frustration.",
        chinese_question: "尽管情况紧张，她仍保持冷静的__________，没有表现出任何恐慌或沮丧。",
        answers: [
            { option: "A", answer: "attitude", chinese_answer: "态度", chinese_romanization: "tàidù" },
            { option: "B", answer: "disposition", chinese_answer: "性情", chinese_romanization: "xìngqíng" },
            { option: "C", answer: "outlook", chinese_answer: "观点", chinese_romanization: "guāndiǎn" },
            { option: "D", answer: "temperament", chinese_answer: "气质", chinese_romanization: "qìzhí" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'disposition' means a person's inherent qualities of mind and character. Figuratively, it can mean maintaining a particular state of mind or mood." +
            "<br><br>" +
            "(A) 'attitude' means a settled way of thinking or feeling about something." +
            "<br><br>" +
            "(C) 'outlook' means a person's point of view or general attitude to life." +
            "<br><br>" +
            "(D) 'temperament' means a person's or animal's nature, especially as it permanently affects their behavior.",
        chinese_explanation: "(B) '性情'一词意味着一个人固有的思维和性格品质。比喻地，它可以表示保持特定的心态或情绪。" +
            "<br><br>" +
            "(A) '态度' 意味着对某事的固定思维方式或感觉方式。" +
            "<br><br>" +
            "(C) '观点' 意味着一个人的观点或对生活的总体态度。" +
            "<br><br>" +
            "(D) '气质' 意味着一个人或动物的本性，尤其是它永久地影响其行为。"
    },
    {
        id: 3,
        question: "A classic example of __________ is saying “all hands on deck,” where “hands” represent the sailors.",
        chinese_question: "经典的 __________ 例子是“全体上甲板”，其中“手”代表水手。",
        answers: [
            { option: "A", answer: "metaphor", chinese_answer: "隐喻", chinese_romanization: "yǐnyù" },
            { option: "B", answer: "synecdoche", chinese_answer: "提喻", chinese_romanization: "tí yù" },
            { option: "C", answer: "simile", chinese_answer: "明喻", chinese_romanization: "míng yù" },
            { option: "D", answer: "hyperbole", chinese_answer: "夸张", chinese_romanization: "kuāzhāng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'synecdoche' means using a part to represent the whole or the whole to represent a part." +
            "<br><br>" +
            "(A) 'metaphor' means a figure of speech in which a word or phrase is applied to an object or action to which it is not literally applicable." +
            "<br><br>" +
            "(C) 'simile' means a figure of speech involving the comparison of one thing with another thing of a different kind." +
            "<br><br>" +
            "(D) 'hyperbole' means exaggerated statements or claims not meant to be taken literally.",
        chinese_explanation: "(B) '提喻' 意味着用部分代表整体或用整体代表部分。" +
            "<br><br>" +
            "(A) '隐喻' 意味着将一个词或短语应用于一个对象或动作，而不是字面上适用的修辞手法。" +
            "<br><br>" +
            "(C) '明喻' 意味着涉及将一种事物与另一种不同种类的事物进行比较的修辞手法。" +
            "<br><br>" +
            "(D) '夸张' 意味着不应被字面接受的夸大陈述或主张。"
    },
    {
        id: 4,
        question: "Her __________ of the situation, noticing every detail and change, helped her to react quickly and appropriately.",
        chinese_question: "她对情况的 __________，注意到每一个细节和变化，帮助她快速而适当地做出反应。",
        answers: [
            { option: "A", answer: "ignorance", chinese_answer: "无知", chinese_romanization: "wúzhī" },
            { option: "B", answer: "perception", chinese_answer: "感知", chinese_romanization: "gǎnzhī" },
            { option: "C", answer: "misconception", chinese_answer: "误解", chinese_romanization: "wùjiě" },
            { option: "D", answer: "oblivion", chinese_answer: "遗忘", chinese_romanization: "yíwàng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'perception' means the ability to see, hear, or become aware of something through the senses." +
            "<br><br>" +
            "(A) 'ignorance' means lack of knowledge or information." +
            "<br><br>" +
            "(C) 'misconception' means a view or opinion that is incorrect because it is based on faulty thinking or understanding." +
            "<br><br>" +
            "(D) 'oblivion' means the state of being unaware or unconscious of what is happening.",
        chinese_explanation: "(B) '感知' 一词意味着通过感官看到、听到或意识到某事的能力。" +
            "<br><br>" +
            "(A) '无知' 意味着缺乏知识或信息。" +
            "<br><br>" +
            "(C) '误解' 意味着由于错误的思考或理解而产生的不正确的观点或意见。" +
            "<br><br>" +
            "(D) '遗忘' 意味着对正在发生的事情的无意识或无意识状态。"
    },
    {
        id: 5,
        question: "In __________ to her mentor's advice, she decided to pursue a career in law rather than in business.",
        chinese_question: "出于对导师建议的 __________，她决定从事法律事业而不是商业。",
        answers: [
            { option: "A", answer: "disregard", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "B", answer: "deference", chinese_answer: "尊重", chinese_romanization: "zūnzhòng" },
            { option: "C", answer: "contempt", chinese_answer: "轻视", chinese_romanization: "qīngshì" },
            { option: "D", answer: "neglect", chinese_answer: "忽略", chinese_romanization: "hūlüè" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'deference' means humble submission and respect." +
            "<br><br>" +
            "(A) 'disregard' means pay no attention to; ignore." +
            "<br><br>" +
            "(C) 'contempt' means the feeling that a person or a thing is beneath consideration, worthless, or deserving scorn." +
            "<br><br>" +
            "(D) 'neglect' means fail to care for properly.",
        chinese_explanation: "(B) '尊重' 一词意味着谦卑的顺从和尊敬。" +
            "<br><br>" +
            "(A) '忽视' 意味着不注意；忽略。" +
            "<br><br>" +
            "(C) '轻视' 意味着认为某人或某物不值得考虑、无价值或应受鄙视的感觉。" +
            "<br><br>" +
            "(D) '忽略' 意味着未能妥善照顾。"
    },
    {
        id: 6,
        question: "The scandal involving __________, where the politician was caught in an extramarital affair, led to his downfall as it eroded public trust and damaged his reputation.",
        chinese_question: "涉及 __________ 的丑闻，这位政治家被发现有婚外情，导致了他的垮台，因为它削弱了公众的信任并损害了他的声誉。",
        answers: [
            { option: "A", answer: "fidelity", chinese_answer: "忠诚", chinese_romanization: "zhōngchéng" },
            { option: "B", answer: "loyalty", chinese_answer: "忠贞", chinese_romanization: "zhōngzhēn" },
            { option: "C", answer: "adultery", chinese_answer: "通奸", chinese_romanization: "tōngjiān" },
            { option: "D", answer: "honesty", chinese_answer: "诚实", chinese_romanization: "chéngshí" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'adultery' means voluntary sexual intercourse between a married person and a person who is not their spouse." +
            "<br><br>" +
            "(A) 'fidelity' means faithfulness to a person, cause, or belief, demonstrated by continuing loyalty and support." +
            "<br><br>" +
            "(B) 'loyalty' means a strong feeling of support or allegiance." +
            "<br><br>" +
            "(D) 'honesty' means the quality of being honest.",
        chinese_explanation: "(C) '通奸' 一词意味着已婚者与非配偶者之间自愿发生的性行为。" +
            "<br><br>" +
            "(A) '忠诚' 意味着对人、事业或信仰的忠诚表现，通过持续的忠诚和支持表现出来。" +
            "<br><br>" +
            "(B) '忠贞' 意味着对配偶或信仰的忠诚。" +
            "<br><br>" +
            "(D) '诚实' 意味着诚实的品质。"
    },
    {
        id: 7,
        question: "The treatment of the prisoners was an __________ that shocked the international community and called for immediate action.",
        chinese_question: "对囚犯的待遇是一种 __________，震惊了国际社会，并呼吁采取紧急行动。",
        answers: [
            { option: "A", answer: "delight", chinese_answer: "高兴", chinese_romanization: "gāoxìng" },
            { option: "B", answer: "pleasure", chinese_answer: "愉快", chinese_romanization: "yúkuài" },
            { option: "C", answer: "abomination", chinese_answer: "可憎", chinese_romanization: "kězēng" },
            { option: "D", answer: "enjoyment", chinese_answer: "享受", chinese_romanization: "xiǎngshòu" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'abomination' means a thing that causes disgust or hatred." +
            "<br><br>" +
            "(A) 'delight' means great pleasure." +
            "<br><br>" +
            "(B) 'pleasure' means a feeling of happy satisfaction and enjoyment." +
            "<br><br>" +
            "(D) 'enjoyment' means the state or process of taking pleasure in something.",
        chinese_explanation: "(C) '可憎' 一词意味着引起厌恶或仇恨的事物。" +
            "<br><br>" +
            "(A) '高兴' 意味着极大的愉快。" +
            "<br><br>" +
            "(B) '愉快' 意味着快乐满足和享受的感觉。" +
            "<br><br>" +
            "(D) '享受' 意味着享受某事的状态或过程。"
    },
    {
        id: 8,
        question: "In science fiction, __________ is often depicted as the process of creating entirely new forms of life from alien DNA.",
        chinese_question: "在科幻小说中，__________ 经常被描绘成从外星 DNA 创造全新生命形式的过程。",
        answers: [
            { option: "A", answer: "mutation", chinese_answer: "突变", chinese_romanization: "tǔbiàn" },
            { option: "B", answer: "evolution", chinese_answer: "进化", chinese_romanization: "jìnhuà" },
            { option: "C", answer: "xenogenesis", chinese_answer: "异种生殖", chinese_romanization: "yìzhǒng shēngzhí" },
            { option: "D", answer: "adaptation", chinese_answer: "适应", chinese_romanization: "shìyìng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'xenogenesis' means the supposed production of offspring markedly different from either parent." +
            "<br><br>" +
            "(A) 'mutation' means the changing of the structure of a gene, resulting in a variant form." +
            "<br><br>" +
            "(B) 'evolution' means the process by which different kinds of living organisms are thought to have developed." +
            "<br><br>" +
            "(D) 'adaptation' means the process of change by which an organism or species becomes better suited to its environment.",
        chinese_explanation: "(C) '异种生殖' 意味着假设产生与任何一个亲本都明显不同的后代。" +
            "<br><br>" +
            "(A) '突变' 意味着基因结构的变化，导致一种变异形式。" +
            "<br><br>" +
            "(B) '进化' 意味着不同种类的生物被认为是如何发展的过程。" +
            "<br><br>" +
            "(D) '适应' 意味着通过变化过程，生物体或物种变得更适应环境。"
    },
    {
        id: 9,
        question: "Navigating through the __________ of government regulations, with its endless paperwork and complex procedures, can be extremely frustrating and time-consuming.",
        chinese_question: "穿越政府法规的 __________，伴随着无尽的文书工作和复杂的程序，可能极其令人沮丧且耗时。",
        answers: [
            { option: "A", answer: "clarity", chinese_answer: "清晰", chinese_romanization: "qīngxī" },
            { option: "B", answer: "simplicity", chinese_answer: "简单", chinese_romanization: "jiǎndān" },
            { option: "C", answer: "bureaucracy", chinese_answer: "官僚主义", chinese_romanization: "guānliáo zhǔyì" },
            { option: "D", answer: "efficiency", chinese_answer: "效率", chinese_romanization: "xiàolǜ" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'bureaucracy' means a system of government in which most of the important decisions are made by state officials rather than by elected representatives." +
            "<br><br>" +
            "(A) 'clarity' means the quality of being coherent and intelligible." +
            "<br><br>" +
            "(B) 'simplicity' means the quality or condition of being easy to understand or do." +
            "<br><br>" +
            "(D) 'efficiency' means the state or quality of being efficient.",
        chinese_explanation: "(C) '官僚主义' 一词意味着一种政府制度，其中大部分重要决定由国家官员而不是民选代表做出。" +
            "<br><br>" +
            "(A) '清晰' 意味着连贯和可理解的质量。" +
            "<br><br>" +
            "(B) '简单' 意味着易于理解或做的质量或条件。" +
            "<br><br>" +
            "(D) '效率' 意味着高效的状态或质量。"
    },
    {
        id: 10,
        question: "Without regular exercise, muscles can __________ and weaken over time.",
        chinese_question: "如果没有定期锻炼，肌肉会随着时间的推移而 __________ 和减弱。",
        answers: [
            { option: "A", answer: "grow", chinese_answer: "生长", chinese_romanization: "shēngzhǎng" },
            { option: "B", answer: "develop", chinese_answer: "发展", chinese_romanization: "fāzhǎn" },
            { option: "C", answer: "atrophy", chinese_answer: "萎缩", chinese_romanization: "wěisuō" },
            { option: "D", answer: "strengthen", chinese_answer: "增强", chinese_romanization: "zēngqiáng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'atrophy' means (of body tissue or an organ) waste away, typically due to the degeneration of cells." +
            "<br><br>" +
            "(A) 'grow' means undergo natural development by increasing in size and changing physically." +
            "<br><br>" +
            "(B) 'develop' means grow or cause to grow and become more mature, advanced, or elaborate." +
            "<br><br>" +
            "(D) 'strengthen' means make or become stronger.",
        chinese_explanation: "(C) '萎缩' 一词意味着（身体组织或器官）由于细胞退化而浪费掉。" +
            "<br><br>" +
            "(A) '生长' 意味着通过增加体积和在身体上变化自然发展。" +
            "<br><br>" +
            "(B) '发展' 意味着生长或促使生长并变得更加成熟、先进或复杂。" +
            "<br><br>" +
            "(D) '增强' 意味着使或变得更强。"
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
