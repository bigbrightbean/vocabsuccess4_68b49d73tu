// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The city streets were filled with a __________ of car horns, construction noises, and shouting vendors.",
        chinese_question: "城市街道上充满了汽车喇叭声、施工噪音和叫卖小贩的 __________。",
        answers: [
            { option: "A", answer: "melody", chinese_answer: "旋律", chinese_romanization: "xuánlǜ" },
            { option: "B", answer: "harmony", chinese_answer: "和声", chinese_romanization: "héshēng" },
            { option: "C", answer: "cacophony", chinese_answer: "刺耳的声音", chinese_romanization: "cì'ěr de shēngyīn" },
            { option: "D", answer: "silence", chinese_answer: "安静", chinese_romanization: "ānjìng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'cacophony' means a harsh, discordant mixture of sounds." +
            "<br><br>" +
            "(A) 'melody' means a sequence of single notes that is musically satisfying." +
            "<br><br>" +
            "(B) 'harmony' means the combination of simultaneously sounded musical notes to produce chords and chord progressions having a pleasing effect." +
            "<br><br>" +
            "(D) 'silence' means complete absence of sound.",
        chinese_explanation: "(C) '刺耳的声音' 一词意味着刺耳的、不和谐的声音混合。" +
            "<br><br>" +
            "(A) '旋律' 意味着在音乐上令人满意的单音序列。" +
            "<br><br>" +
            "(B) '和声' 意味着同时发声的音乐音符的组合，以产生和弦和和弦进行，具有令人愉悦的效果。" +
            "<br><br>" +
            "(D) '安静' 意味着完全没有声音。"
    },
    {
        id: 2,
        question: "The doctor's soothing words served as an __________, calming the patient's anxiety before the procedure.",
        chinese_question: "医生安慰的话语起到了 __________ 的作用，在手术前安抚了病人的焦虑。",
        answers: [
            { option: "A", answer: "irritant", chinese_answer: "刺激物", chinese_romanization: "cìjī wù" },
            { option: "B", answer: "anodyne", chinese_answer: "止痛剂", chinese_romanization: "zhǐtòng jì" },
            { option: "C", answer: "stimulant", chinese_answer: "兴奋剂", chinese_romanization: "xīngfèn jì" },
            { option: "D", answer: "catalyst", chinese_answer: "催化剂", chinese_romanization: "cuīhuà jì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'anodyne' means something that soothes or relieves pain." +
            "<br><br>" +
            "(A) 'irritant' means a substance that causes slight inflammation or other discomfort to the body." +
            "<br><br>" +
            "(C) 'stimulant' means a substance that raises levels of physiological or nervous activity in the body." +
            "<br><br>" +
            "(D) 'catalyst' means a substance that increases the rate of a chemical reaction without itself undergoing any permanent chemical change.",
        chinese_explanation: "(B) '止痛剂' 一词意味着一种舒缓或缓解疼痛的东西。" +
            "<br><br>" +
            "(A) '刺激物' 意味着一种会导致身体轻微发炎或其他不适的物质。" +
            "<br><br>" +
            "(C) '兴奋剂' 意味着一种提高身体生理或神经活动水平的物质。" +
            "<br><br>" +
            "(D) '催化剂' 意味着一种增加化学反应速度但自身不发生任何永久化学变化的物质。"
    },
    {
        id: 3,
        question: "The poet wrote an __________ after the tragic death of his beloved friend, capturing his grief in the somber verses.",
        chinese_question: "诗人在心爱的朋友悲惨去世后写了一首 __________，在忧伤的诗句中表达了他的悲痛。",
        answers: [
            { option: "A", answer: "ode", chinese_answer: "颂歌", chinese_romanization: "sònggē" },
            { option: "B", answer: "elegy", chinese_answer: "挽歌", chinese_romanization: "wǎngē" },
            { option: "C", answer: "sonnet", chinese_answer: "十四行诗", chinese_romanization: "shísì háng shī" },
            { option: "D", answer: "ballad", chinese_answer: "民谣", chinese_romanization: "mínyáo" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'elegy' means a poem of serious reflection, typically a lament for the dead." +
            "<br><br>" +
            "(A) 'ode' means a lyric poem in the form of an address to a particular subject." +
            "<br><br>" +
            "(C) 'sonnet' means a poem of fourteen lines using any of a number of formal rhyme schemes." +
            "<br><br>" +
            "(D) 'ballad' means a poem or song narrating a story in short stanzas.",
        chinese_explanation: "(B) '挽歌' 一词意味着一种严肃反思的诗，通常是为死者而作的哀歌。" +
            "<br><br>" +
            "(A) '颂歌' 意味着一种抒情诗，以一种特定主题的形式。" +
            "<br><br>" +
            "(C) '十四行诗' 意味着一种使用多种正式押韵形式的十四行诗。" +
            "<br><br>" +
            "(D) '民谣' 意味着用简短诗节叙述故事的诗歌或歌曲。"
    },
    {
        id: 4,
        question: "Late at night, she thought she saw an __________ of a woman in white, which gave her chills.",
        chinese_question: "深夜，她以为看到了一个身穿白衣的 __________，让她感到寒意。",
        answers: [
            { option: "A", answer: "illusion", chinese_answer: "幻觉", chinese_romanization: "huànjué" },
            { option: "B", answer: "shadow", chinese_answer: "影子", chinese_romanization: "yǐngzi" },
            { option: "C", answer: "painting", chinese_answer: "画", chinese_romanization: "huà" },
            { option: "D", answer: "apparition", chinese_answer: "幽灵", chinese_romanization: "yōulíng" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'apparition' means a ghost or ghostlike image of a person." +
            "<br><br>" +
            "(A) 'illusion' means a thing that is or is likely to be wrongly perceived or interpreted by the senses." +
            "<br><br>" +
            "(B) 'shadow' means a dark area or shape produced by a body coming between rays of light and a surface." +
            "<br><br>" +
            "(C) 'painting' means the process or art of using paint, in a picture, as a protective coating, or as decoration.",
        chinese_explanation: "(D) '幽灵' 一词意味着一个人的鬼魂或幽灵般的形象。" +
            "<br><br>" +
            "(A) '幻觉' 意味着一种被错误感知或解释的事物。" +
            "<br><br>" +
            "(B) '影子' 意味着物体在光线和表面之间产生的黑暗区域或形状。" +
            "<br><br>" +
            "(C) '画' 意味着使用油漆的过程或艺术，用于图片、保护涂层或装饰。"
    },
    {
        id: 5,
        question: "The sculpture was a perfect __________ of the ancient statue, capturing every detail and nuance.",
        chinese_question: "这座雕塑是古代雕像的完美 __________，捕捉到了每一个细节和细微差别。",
        answers: [
            { option: "A", answer: "original", chinese_answer: "原件", chinese_romanization: "yuán jiàn" },
            { option: "B", answer: "simulacrum", chinese_answer: "仿真品", chinese_romanization: "fǎngzhēn pǐn" },
            { option: "C", answer: "imitation", chinese_answer: "模仿", chinese_romanization: "mófǎng" },
            { option: "D", answer: "forgery", chinese_answer: "伪造", chinese_romanization: "wèizào" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'simulacrum' means an image or representation of someone or something." +
            "<br><br>" +
            "(A) 'original' means present or existing from the beginning; first or earliest." +
            "<br><br>" +
            "(C) 'imitation' means a thing intended to simulate or copy something else." +
            "<br><br>" +
            "(D) 'forgery' means the action of forging or producing a copy of a document, signature, banknote, or work of art.",
        chinese_explanation: "(B) '仿真品' 一词意味着某人或某物的图像或代表。" +
            "<br><br>" +
            "(A) '原件' 意味着从一开始就存在的；最初的或最早的。" +
            "<br><br>" +
            "(C) '模仿' 意味着打算模仿或复制其他事物的东西。" +
            "<br><br>" +
            "(D) '伪造' 意味着伪造或制作文件、签名、钞票或艺术品的副本的行为。"
    },
    {
        id: 6,
        question: "The __________ of the deep ocean include strange and fascinating creatures like the anglerfish and the giant squid.",
        chinese_question: "深海的 __________ 包括像鮟鱇鱼和巨型鱿鱼这样奇特而迷人的生物。",
        answers: [
            { option: "A", answer: "intruders", chinese_answer: "侵入者", chinese_romanization: "qīnrù zhě" },
            { option: "B", answer: "denizens", chinese_answer: "居民", chinese_romanization: "jūmín" },
            { option: "C", answer: "exiles", chinese_answer: "流亡者", chinese_romanization: "liúwáng zhě" },
            { option: "D", answer: "strangers", chinese_answer: "陌生人", chinese_romanization: "mòshēng rén" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'denizens' means inhabitants or occupants of a particular place." +
            "<br><br>" +
            "(A) 'intruders' means people who intrude, especially into a building with criminal intent." +
            "<br><br>" +
            "(C) 'exiles' means people who live away from their native country, typically for political reasons." +
            "<br><br>" +
            "(D) 'strangers' means people whom one does not know or with whom one is not familiar.",
        chinese_explanation: "(B) '居民' 一词意味着特定地方的居民或居住者。" +
            "<br><br>" +
            "(A) '侵入者' 意味着入侵的人，尤其是有犯罪意图进入建筑物的人。" +
            "<br><br>" +
            "(C) '流亡者' 意味着因政治原因通常住在他们的祖国之外的人。" +
            "<br><br>" +
            "(D) '陌生人' 意味着一个人不认识或不熟悉的人。"
    },
    {
        id: 7,
        question: "His speech was full of __________, wandering off topic frequently and losing the audience's attention.",
        chinese_question: "他的演讲充满了 __________，经常偏离主题，失去了观众的注意力。",
        answers: [
            { option: "A", answer: "focus", chinese_answer: "焦点", chinese_romanization: "jiāodiǎn" },
            { option: "B", answer: "precision", chinese_answer: "精确", chinese_romanization: "jīngquè" },
            { option: "C", answer: "digression", chinese_answer: "离题", chinese_romanization: "lítí" },
            { option: "D", answer: "clarity", chinese_answer: "清晰", chinese_romanization: "qīngxī" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'digression' means a temporary departure from the main subject in speech or writing." +
            "<br><br>" +
            "(A) 'focus' means the center of interest or activity." +
            "<br><br>" +
            "(B) 'precision' means the quality, condition, or fact of being exact and accurate." +
            "<br><br>" +
            "(D) 'clarity' means the quality of being clear, in particular.",
        chinese_explanation: "(C) '离题' 一词意味着在讲话或写作中暂时离开主要主题。" +
            "<br><br>" +
            "(A) '焦点' 意味着兴趣或活动的中心。" +
            "<br><br>" +
            "(B) '精确' 意味着准确和准确的质量、条件或事实。" +
            "<br><br>" +
            "(D) '清晰' 意味着特别清晰的质量。"
    },
    {
        id: 8,
        question: "The novel reached its __________ when the main character finally confronted the villain in a dramatic showdown.",
        chinese_question: "小说在主角终于在戏剧性对决中面对反派时达到了 __________。",
        answers: [
            { option: "A", answer: "introduction", chinese_answer: "引言", chinese_romanization: "yǐnyán" },
            { option: "B", answer: "exposition", chinese_answer: "展示", chinese_romanization: "zhǎnshì" },
            { option: "C", answer: "denouement", chinese_answer: "结局", chinese_romanization: "jiéjú" },
            { option: "D", answer: "prologue", chinese_answer: "序言", chinese_romanization: "xùyán" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'denouement' means the final part of a play, film, or narrative in which the strands of the plot are drawn together and matters are explained or resolved." +
            "<br><br>" +
            "(A) 'introduction' means the beginning part of a book, play, or other text that gives a preview of what is to come." +
            "<br><br>" +
            "(B) 'exposition' means a comprehensive description and explanation of an idea or theory." +
            "<br><br>" +
            "(D) 'prologue' means a separate introductory section of a literary, dramatic, or musical work.",
        chinese_explanation: "(C) '结局' 一词意味着戏剧、电影或叙述的最后部分，其中情节的线索被拉在一起，事情被解释或解决。" +
            "<br><br>" +
            "(A) '引言' 意味着书籍、戏剧或其他文本的开头部分，预览即将发生的事情。" +
            "<br><br>" +
            "(B) '展示' 意味着对一个想法或理论的全面描述和解释。" +
            "<br><br>" +
            "(D) '序言' 意味着文学、戏剧或音乐作品的单独介绍部分。"
    },
    {
        id: 9,
        question: "The politician's __________ in refusing to compromise led to a deadlock in the negotiations.",
        chinese_question: "这位政客在谈判中拒绝妥协的 __________ 导致了僵局。",
        answers: [
            { option: "A", answer: "flexibility", chinese_answer: "灵活性", chinese_romanization: "línghuó xìng" },
            { option: "B", answer: "intransigence", chinese_answer: "不妥协", chinese_romanization: "bù tuǒxié" },
            { option: "C", answer: "openness", chinese_answer: "开放性", chinese_romanization: "kāifàng xìng" },
            { option: "D", answer: "adaptability", chinese_answer: "适应性", chinese_romanization: "shìyìng xìng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'intransigence' means refusal to change one's views or to agree about something." +
            "<br><br>" +
            "(A) 'flexibility' means the quality of bending easily without breaking." +
            "<br><br>" +
            "(C) 'openness' means lack of restriction; accessibility." +
            "<br><br>" +
            "(D) 'adaptability' means the quality of being able to adjust to new conditions.",
        chinese_explanation: "(B) '不妥协' 一词意味着拒绝改变自己的观点或同意某事。" +
            "<br><br>" +
            "(A) '灵活性' 意味着容易弯曲而不折断的品质。" +
            "<br><br>" +
            "(C) '开放性' 意味着没有限制；可访问性。" +
            "<br><br>" +
            "(D) '适应性' 意味着能够适应新环境的质量。"
    },
    {
        id: 10,
        question: "The politician faced __________ after the scandal, losing all respect and honor he once had.",
        chinese_question: "这位政客在丑闻后面临 __________，失去了他曾经拥有的所有尊重和荣誉。",
        answers: [
            { option: "A", answer: "fame", chinese_answer: "名声", chinese_romanization: "míngshēng" },
            { option: "B", answer: "glory", chinese_answer: "荣耀", chinese_romanization: "róngyào" },
            { option: "C", answer: "ignominy", chinese_answer: "耻辱", chinese_romanization: "chǐrǔ" },
            { option: "D", answer: "triumph", chinese_answer: "胜利", chinese_romanization: "shènglì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'ignominy' means public shame or disgrace." +
            "<br><br>" +
            "(A) 'fame' means the state of being known by many people." +
            "<br><br>" +
            "(B) 'glory' means high renown or honor won by notable achievements." +
            "<br><br>" +
            "(D) 'triumph' means a great victory or achievement.",
        chinese_explanation: "(C) '耻辱' 一词意味着公开的羞耻或耻辱。" +
            "<br><br>" +
            "(A) '名声' 意味着被许多人所知的状态。" +
            "<br><br>" +
            "(B) '荣耀' 意味着通过显著成就获得的高度声誉或荣誉。" +
            "<br><br>" +
            "(D) '胜利' 意味着伟大的胜利或成就。"
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
