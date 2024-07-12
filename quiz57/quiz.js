// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "Her actions were in __________ with her beliefs, showing consistency between what she said and did.",
        chinese_question: "她的行动与她的信仰__________，显示了言行一致。",
        answers: [
            { option: "A", answer: "disagreement", chinese_answer: "分歧", chinese_romanization: "fēnqí" },
            { option: "B", answer: "debate", chinese_answer: "辩论", chinese_romanization: "biànlùn" },
            { option: "C", answer: "accord", chinese_answer: "一致", chinese_romanization: "yīzhì" },
            { option: "D", answer: "struggle", chinese_answer: "斗争", chinese_romanization: "dòuzhēng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'accord' means an official agreement or treaty. Figuratively, it can mean harmony or agreement between actions and beliefs." +
            "<br><br>" +
            "(A) 'disagreement' means a lack of consensus or approval." +
            "<br><br>" +
            "(B) 'debate' means a formal discussion on a particular topic." +
            "<br><br>" +
            "(D) 'struggle' means to make forceful or violent efforts to get free of restraint or constriction.",
        chinese_explanation: "(C) '一致'一词意味着正式的协议或条约。比喻地，它可以表示行为和信仰之间的和谐或一致。" +
            "<br><br>" +
            "(A) '分歧' 意味着缺乏共识或批准。" +
            "<br><br>" +
            "(B) '辩论' 意味着对特定主题的正式讨论。" +
            "<br><br>" +
            "(D) '斗争' 意味着做出强烈或暴力的努力以摆脱约束或限制。"
    },
    {
        id: 2,
        question: "His long-standing __________ against the company, fueled by unresolved issues and perceived injustices, prevented him from working effectively.",
        chinese_question: "他对公司的长期 __________，由于未解决的问题和感知的不公，阻碍了他有效工作。",
        answers: [
            { option: "A", answer: "grievances", chinese_answer: "怨恨", chinese_romanization: "yuànhèn" },
            { option: "B", answer: "alliances", chinese_answer: "联盟", chinese_romanization: "liánméng" },
            { option: "C", answer: "indifferences", chinese_answer: "漠不关心", chinese_romanization: "mò bù guānxīn" },
            { option: "D", answer: "trust", chinese_answer: "信任", chinese_romanization: "xìnrèn" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'grievances' metaphorically means a persistent feeling of resentment or complaint." +
            "<br><br>" +
            "(B) 'alliances' means a union or association formed for mutual benefit." +
            "<br><br>" +
            "(C) 'indifferences' means lack of interest, concern, or sympathy." +
            "<br><br>" +
            "(D) 'trust' means firm belief in the reliability, truth, or ability of someone or something.",
        chinese_explanation: "(A) '怨恨' 比喻持续的怨恨或抱怨。" +
            "<br><br>" +
            "(B) '联盟' 意味着为共同利益而形成的联盟或协会。" +
            "<br><br>" +
            "(C) '漠不关心' 意味着缺乏兴趣、关心或同情。" +
            "<br><br>" +
            "(D) '信任' 意味着对某人或某事的可靠性、真实性或能力的坚定信念。"
    },
    {
        id: 3,
        question: "The company's __________ of innovation has led to its success.",
        chinese_question: "公司的 __________ 创新文化导致了其成功。",
        answers: [
            { option: "A", answer: "culture", chinese_answer: "文化", chinese_romanization: "wénhuà" },
            { option: "B", answer: "absence", chinese_answer: "缺乏", chinese_romanization: "quēfá" },
            { option: "C", answer: "rejection", chinese_answer: "拒绝", chinese_romanization: "jùjué" },
            { option: "D", answer: "doubt", chinese_answer: "怀疑", chinese_romanization: "huáiyí" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'culture' metaphorically means the attitudes and behavior characteristic of a particular social group or organization." +
            "<br><br>" +
            "(B) 'absence' means the state of being away from a place or person." +
            "<br><br>" +
            "(C) 'rejection' means the dismissing or refusing of a proposal, idea, etc." +
            "<br><br>" +
            "(D) 'doubt' means a feeling of uncertainty or lack of conviction.",
        chinese_explanation: "(A) '文化' 比喻特定社会群体或组织的态度和行为特征。" +
            "<br><br>" +
            "(B) '缺乏' 意味着不在某个地方或人身边的状态。" +
            "<br><br>" +
            "(C) '拒绝' 意味着对提议、想法等的拒绝或否定。" +
            "<br><br>" +
            "(D) '怀疑' 意味着不确定或缺乏信心的感觉。"
    },
    {
        id: 4,
        question: "The overwhelming fear caused a sense of __________, preventing him from taking any action.",
        chinese_question: "压倒性的恐惧感引起了一种 __________ 感，使他无法采取任何行动。",
        answers: [
            { option: "A", answer: "confidence", chinese_answer: "信心", chinese_romanization: "xìnxīn" },
            { option: "B", answer: "motivation", chinese_answer: "动力", chinese_romanization: "dònglì" },
            { option: "C", answer: "clarity", chinese_answer: "清晰", chinese_romanization: "qīngxī" },
            { option: "D", answer: "paralysis", chinese_answer: "瘫痪", chinese_romanization: "tānhuàn" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'paralysis' figuratively means an inability to act or function normally due to fear or uncertainty." +
            "<br><br>" +
            "(A) 'confidence' means the feeling or belief that one can rely on someone or something; firm trust." +
            "<br><br>" +
            "(B) 'motivation' means the reason or reasons one has for acting or behaving in a particular way." +
            "<br><br>" +
            "(C) 'clarity' means the quality of being coherent and intelligible.",
        chinese_explanation: "(D) '瘫痪' 在比喻意义上意味着由于恐惧或不确定性而无法正常行动或运作。" +
            "<br><br>" +
            "(A) '信心' 意味着对某人或某事可以依赖的感觉或信念；坚定的信任。" +
            "<br><br>" +
            "(B) '动力' 意味着一个人以特定方式行事或行为的原因。" +
            "<br><br>" +
            "(C) '清晰' 意味着连贯和可理解的品质。"
    },
    {
        id: 5,
        question: "Patience is a __________ when dealing with children, as they often require time and understanding.",
        chinese_question: "与孩子打交道时，耐心是一种 __________，因为他们常常需要时间和理解。",
        answers: [
            { option: "A", answer: "hindrance", chinese_answer: "障碍", chinese_romanization: "zhàng'ài" },
            { option: "B", answer: "delay", chinese_answer: "延迟", chinese_romanization: "yánchí" },
            { option: "C", answer: "necessity", chinese_answer: "必需品", chinese_romanization: "bìxūpǐn" },
            { option: "D", answer: "nuisance", chinese_answer: "麻烦", chinese_romanization: "máfan" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'necessity' figuratively means something that is essential or very important." +
            "<br><br>" +
            "(A) 'hindrance' means a thing that provides resistance, delay, or obstruction to something or someone." +
            "<br><br>" +
            "(B) 'delay' means make (someone or something) late or slow." +
            "<br><br>" +
            "(D) 'nuisance' means a person, thing, or circumstance causing inconvenience or annoyance.",
        chinese_explanation: "(C) '必需品' 在比喻意义上意味着必不可少或非常重要的东西。" +
            "<br><br>" +
            "(A) '障碍' 意味着对某事或某人提供阻力、延迟或阻碍的事物。" +
            "<br><br>" +
            "(B) '延迟' 意味着使（某人或某物）迟到或缓慢。" +
            "<br><br>" +
            "(D) '麻烦' 意味着引起不便或烦恼的人、事或情况。"
    },
    {
        id: 6,
        question: "The open __________ between the two leaders helped ease tensions and fostered mutual understanding.",
        chinese_question: "两位领导人之间的开放 __________ 有助于缓解紧张局势并促进相互理解。",
        answers: [
            { option: "A", answer: "conflict", chinese_answer: "冲突", chinese_romanization: "chōngtū" },
            { option: "B", answer: "disagreement", chinese_answer: "分歧", chinese_romanization: "fēnqí" },
            { option: "C", answer: "dialogue", chinese_answer: "对话", chinese_romanization: "duìhuà" },
            { option: "D", answer: "feud", chinese_answer: "争执", chinese_romanization: "zhēngzhí" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'dialogue' figuratively means an exchange of ideas or opinions on a particular issue with a view to reaching an amicable agreement or settlement." +
            "<br><br>" +
            "(A) 'conflict' means a serious disagreement or argument." +
            "<br><br>" +
            "(B) 'disagreement' means lack of consensus or approval." +
            "<br><br>" +
            "(D) 'feud' means a prolonged and bitter quarrel or dispute.",
        chinese_explanation: "(C) '对话' 在比喻意义上意味着对特定问题进行的意见或想法的交流，以达成友好协议或解决。" +
            "<br><br>" +
            "(A) '冲突' 意味着严重的分歧或争论。" +
            "<br><br>" +
            "(B) '分歧' 意味着缺乏共识或批准。" +
            "<br><br>" +
            "(D) '争执' 意味着长期和激烈的争吵或争端。"
    },
    {
        id: 7,
        question: "The rapid changes in her life left her feeling a sense of __________, as if she couldn't find her footing.",
        chinese_question: "生活中的快速变化让她感到一种 __________，仿佛找不到立足点。",
        answers: [
            { option: "A", answer: "confidence", chinese_answer: "信心", chinese_romanization: "xìnxīn" },
            { option: "B", answer: "vertigo", chinese_answer: "眩晕", chinese_romanization: "xuànyūn" },
            { option: "C", answer: "certainty", chinese_answer: "确信", chinese_romanization: "quèxìn" },
            { option: "D", answer: "security", chinese_answer: "安全", chinese_romanization: "ānquán" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'vertigo' figuratively means a feeling of disorientation and confusion." +
            "<br><br>" +
            "(A) 'confidence' means the feeling or belief that one can rely on someone or something; firm trust." +
            "<br><br>" +
            "(C) 'certainty' means firm conviction that something is the case." +
            "<br><br>" +
            "(D) 'security' means the state of being free from danger or threat.",
        chinese_explanation: "(B) '眩晕' 在比喻意义上意味着一种迷失方向和困惑的感觉。" +
            "<br><br>" +
            "(A) '信心' 意味着相信某人或某物可以依赖的感觉或信念；坚定的信任。" +
            "<br><br>" +
            "(C) '确信' 意味着坚定的信念某事确实存在。" +
            "<br><br>" +
            "(D) '安全' 意味着没有危险或威胁的状态。"
    },
    {
        id: 8,
        question: "Despite their differing opinions, neither side was willing to compromise, showing complete __________.",
        chinese_question: "尽管意见不同，双方都不愿妥协，表现出完全的 __________。",
        answers: [
            { option: "A", answer: "flexibility", chinese_answer: "灵活性", chinese_romanization: "línghuó xìng" },
            { option: "B", answer: "intransigence", chinese_answer: "不妥协", chinese_romanization: "bù tuǒxié" },
            { option: "C", answer: "cooperation", chinese_answer: "合作", chinese_romanization: "hézuò" },
            { option: "D", answer: "agreement", chinese_answer: "协议", chinese_romanization: "xiéyì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'intransigence' means refusal to change one's views or to agree about something." +
            "<br><br>" +
            "(A) 'flexibility' means the quality of bending easily without breaking." +
            "<br><br>" +
            "(C) 'cooperation' means the process of working together to the same end." +
            "<br><br>" +
            "(D) 'agreement' means harmony or accordance in opinion or feeling.",
        chinese_explanation: "(B) '不妥协' 一词意味着拒绝改变自己的观点或同意某事。" +
            "<br><br>" +
            "(A) '灵活性' 意味着容易弯曲而不折断的质量。" +
            "<br><br>" +
            "(C) '合作' 意味着共同朝着同一个目标努力的过程。" +
            "<br><br>" +
            "(D) '协议' 意味着意见或感觉上的和谐或一致。"
    },
    {
        id: 9,
        question: "The paleontologist carefully examined the dinosaur's __________, noting its strong structure for chewing tough vegetation.",
        chinese_question: "古生物学家仔细检查了恐龙的 __________，注意到其坚固的结构适合咀嚼坚韧的植物。",
        answers: [
            { option: "A", answer: "claw", chinese_answer: "爪", chinese_romanization: "zhǎo" },
            { option: "B", answer: "mandible", chinese_answer: "下颌骨", chinese_romanization: "xiàhé gǔ" },
            { option: "C", answer: "tail", chinese_answer: "尾巴", chinese_romanization: "wěibā" },
            { option: "D", answer: "spine", chinese_answer: "脊柱", chinese_romanization: "jǐzhù" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'mandible' means the jaw or a jawbone, especially the lower jawbone in mammals and fishes." +
            "<br><br>" +
            "(A) 'claw' means a curved, pointed horny nail on each digit of the foot in birds, lizards, and some mammals." +
            "<br><br>" +
            "(C) 'tail' means the hindmost part of an animal, especially when prolonged beyond the rest of the body." +
            "<br><br>" +
            "(D) 'spine' means the backbone.",
        chinese_explanation: "(B) '下颌骨' 一词意味着颚或颌骨，尤其是哺乳动物和鱼类的下颌骨。" +
            "<br><br>" +
            "(A) '爪' 意味着鸟类、蜥蜴和某些哺乳动物脚趾上的弯曲、尖锐的角质钉。" +
            "<br><br>" +
            "(C) '尾巴' 意味着动物的最末部分，尤其是超出身体其余部分延长的部分。" +
            "<br><br>" +
            "(D) '脊柱' 意味着脊椎骨。"
    },
    {
        id: 10,
        question: "The __________ in their skill levels became apparent when they were assigned the same task, highlighting the differences in their abilities.",
        chinese_question: "当他们被分配同样的任务时，他们技能水平的 __________ 变得明显，突显了他们能力的差异。",
        answers: [
            { option: "A", answer: "similarity", chinese_answer: "相似", chinese_romanization: "xiāngsì" },
            { option: "B", answer: "parity", chinese_answer: "平等", chinese_romanization: "píngděng" },
            { option: "C", answer: "disparity", chinese_answer: "差异", chinese_romanization: "chāyì" },
            { option: "D", answer: "uniformity", chinese_answer: "一致", chinese_romanization: "yīzhì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'disparity' figuratively means a noticeable difference or inequality." +
            "<br><br>" +
            "(A) 'similarity' means the state of being similar; likeness; resemblance." +
            "<br><br>" +
            "(B) 'parity' means the state or condition of being equal, especially regarding status or pay." +
            "<br><br>" +
            "(D) 'uniformity' means the quality or state of being uniform; sameness.",
        chinese_explanation: "(C) '差异' 在比喻意义上意味着明显的差别或不平等。" +
            "<br><br>" +
            "(A) '相似' 意味着相似的状态；相似性；相似之处。" +
            "<br><br>" +
            "(B) '平等' 意味着状态的平等，特别是在地位或工资方面。" +
            "<br><br>" +
            "(D) '一致' 意味着一致的质量或状态；相同。"
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
