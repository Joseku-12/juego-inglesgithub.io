const questions = [
  {type:"VOCABULARY",question:'What does “Apple” mean?',hint:"Elige la traducción correcta.",answers:["Naranja","Manzana","Plátano","Uva"],correct:1,explanation:"Apple significa “manzana”. Es una fruta."},
  {type:"VOCABULARY",question:'How do you say “perro” in English?',hint:"Busca la palabra en inglés.",answers:["Cat","Bird","Dog","Fish"],correct:2,explanation:"“Perro” en inglés es dog."},
  {type:"GRAMMAR",question:"Choose the correct sentence.",hint:"Elige la oración gramaticalmente correcta.",answers:["She are happy.","She is happy.","She am happy.","She be happy."],correct:1,explanation:"Con he, she e it usamos “is”: She is happy."},
  {type:"EXPRESSIONS",question:'What does “Good morning” mean?',hint:"¿En qué momento del día se utiliza?",answers:["Buenas noches","Buenas tardes","Hasta mañana","Buenos días"],correct:3,explanation:"“Good morning” significa “buenos días” y se usa por la mañana."},
  {type:"VOCABULARY",question:'What is the opposite of “big”?',hint:"Piensa en el tamaño contrario.",answers:["Tall","Small","Long","Fast"],correct:1,explanation:"El opuesto de “big” (grande) es “small” (pequeño)."},
  {type:"GRAMMAR",question:"Complete: “I ___ a student.”",hint:"Elige la forma correcta del verbo to be.",answers:["is","are","am","be"],correct:2,explanation:"Con “I” se utiliza “am”: I am a student."},
  {type:"EXPRESSIONS",question:'How do you say “Muchas gracias”?',hint:"Selecciona la expresión equivalente.",answers:["See you later","Thank you very much","Excuse me","You are welcome"],correct:1,explanation:"“Thank you very much” significa “muchas gracias”."},
  {type:"VOCABULARY",question:'What does “Library” mean?',hint:"Es un lugar donde puedes leer o pedir libros prestados.",answers:["Librería","Laboratorio","Biblioteca","Oficina"],correct:2,explanation:"“Library” significa “biblioteca”. Una tienda de libros es “bookstore”."},
  {type:"GRAMMAR",question:"Choose the correct question.",hint:"¿Cómo preguntas si alguien habla inglés?",answers:["Do you speak English?","You do speak English?","Does you speak English?","Are you speak English?"],correct:0,explanation:"En preguntas en presente simple con “you”, usamos “Do”: Do you speak English?"},
  {type:"EXPRESSIONS",question:'Someone says “How are you?” What can you reply?',hint:"Elige una respuesta natural.",answers:["I am twelve years.","I fine, thanks.","I am fine, thank you.","My name fine."],correct:2,explanation:"Una respuesta natural es “I am fine, thank you” (Estoy bien, gracias)."},
  {type:"VOCABULARY",question:'What does “Beautiful” mean?',hint:"Es una palabra para describir algo bonito.",answers:["Difícil","Hermoso/a","Ruidoso/a","Temprano"],correct:1,explanation:"“Beautiful” significa “hermoso/a” o “bonito/a”."},
  {type:"GRAMMAR",question:"Complete: “They ___ playing football.”",hint:"Usa el verbo to be con “they”.",answers:["is","am","be","are"],correct:3,explanation:"Con “they” usamos “are”: They are playing football."},
  {type:"EXPRESSIONS",question:'What does “I don’t understand” mean?',hint:"¿Qué dices cuando algo no te queda claro?",answers:["No estoy de acuerdo","No tengo tiempo","No entiendo","No me gusta"],correct:2,explanation:"“I don’t understand” significa “no entiendo”."},
  {type:"VOCABULARY",question:'Which word means “ventana”?',hint:"Es una parte de una casa o edificio.",answers:["Door","Wall","Floor","Window"],correct:3,explanation:"“Window” significa “ventana”; “door” significa “puerta”."},
  {type:"GRAMMAR",question:"Choose the correct plural of “child”.",hint:"Esta palabra tiene un plural irregular.",answers:["Childs","Children","Childes","Childrens"],correct:1,explanation:"El plural irregular de “child” es “children”."},
  {type:"EXPRESSIONS",question:'How do you say “¿Puedes ayudarme?”',hint:"Selecciona la pregunta cortés.",answers:["Can you help me?","You help I?","Can help you me?","Do you helping me?"],correct:0,explanation:"“Can you help me?” significa “¿Puedes ayudarme?”."},
  {type:"VOCABULARY",question:'What does “Hungry” mean?',hint:"Lo sientes cuando necesitas comer.",answers:["Cansado","Sediento","Hambriento","Enojado"],correct:2,explanation:"“Hungry” significa “hambriento”; “thirsty” significa “sediento”."},
  {type:"GRAMMAR",question:"Complete: “He ___ to school every day.”",hint:"En presente simple, recuerda la tercera persona.",answers:["go","going","goes","gone"],correct:2,explanation:"Con he/she/it, el verbo suele añadir -s o -es: He goes."},
  {type:"EXPRESSIONS",question:'What does “See you soon” mean?',hint:"Es una despedida.",answers:["Nos vemos pronto","Mucho gusto","Que tengas hambre","Hasta nunca"],correct:0,explanation:"“See you soon” significa “nos vemos pronto”."},
  {type:"VOCABULARY",question:'Which one is a “chair”?',hint:"Es un mueble para sentarse.",answers:["Mesa","Silla","Cama","Puerta"],correct:1,explanation:"“Chair” significa “silla”; “table” significa “mesa”."},
  {type:"GRAMMAR",question:"Choose the correct sentence.",hint:"Comprueba el uso de “does” en una pregunta.",answers:["Does he likes music?","Do he like music?","Does he like music?","He does like music?"],correct:2,explanation:"Con he en una pregunta usamos “Does” + verbo base: Does he like music?"},
  {type:"EXPRESSIONS",question:'What does “You’re welcome” mean?',hint:"Se dice después de que alguien te da las gracias.",answers:["Bienvenido a casa","Tienes razón","No lo sé","De nada"],correct:3,explanation:"“You’re welcome” significa “de nada”."},
  {type:"VOCABULARY",question:'What is the English word for “lluvia”?',hint:"Es agua que cae de las nubes.",answers:["Snow","Wind","Rain","Cloud"],correct:2,explanation:"“Rain” significa “lluvia”; “snow” significa “nieve”."},
  {type:"GRAMMAR",question:"Complete: “There ___ two books on the table.”",hint:"Para hablar de dos o más cosas usamos...",answers:["is","are","am","be"],correct:1,explanation:"Usamos “there are” con sustantivos plurales: There are two books."},
  {type:"EXPRESSIONS",question:'How do you say “Lo siento” in English?',hint:"Una expresión para disculparse.",answers:["I’m sorry","I’m sleepy","I’m ready","I’m sorry you"],correct:0,explanation:"“I’m sorry” significa “lo siento”."},
  {type:"VOCABULARY",question:'What does “Early” mean?',hint:"Lo contrario de “late”.",answers:["Lento","Temprano","Cerca","Fácil"],correct:1,explanation:"“Early” significa “temprano”; “late” significa “tarde”."},
  {type:"GRAMMAR",question:"Choose the correct past form: “Yesterday, I ___ at home.”",hint:"Usa el pasado del verbo to be con “I”.",answers:["were","am","was","be"],correct:2,explanation:"El pasado de “am/is” es “was”: Yesterday, I was at home."},
  {type:"EXPRESSIONS",question:'What does “Could you repeat that, please?” mean?',hint:"Pides a alguien que diga algo otra vez.",answers:["¿Puedes escribir eso?","¿Puedes repetir eso, por favor?","¿Puedes venir mañana?","¿Puedes escucharme?"],correct:1,explanation:"La frase significa “¿Podrías repetir eso, por favor?”."},
  {type:"VOCABULARY",question:'Which word means “siempre”?',hint:"Es un adverbio de frecuencia.",answers:["Never","Sometimes","Usually","Always"],correct:3,explanation:"“Always” significa “siempre”; “never” significa “nunca”."},
  {type:"GRAMMAR",question:"Choose the correct sentence.",hint:"Con “she” en presente simple, el verbo cambia.",answers:["She study English.","She studies English.","She studying English.","She studys English."],correct:1,explanation:"La forma correcta es “She studies English”. En study, la y cambia a ies."}
];

const $ = id => document.getElementById(id);
const homeScreen = $("home-screen"), quizScreen = $("quiz-screen"), resultScreen = $("result-screen");
let quizQuestions = [], current = 0, score = 0, correctCount = 0, lives = 3, selected = null, answered = false;
let bombMode = false, timeLeft = 15, timerInterval = null;
let currentLevel = 1;
const BOMB_SECONDS = 15;
const LEVELS = [
  {name:"Primeros pasos", desc:"Palabras básicas y frases simples", timer:false},
  {name:"Principiante", desc:"Vocabulario cotidiano y oraciones", timer:false},
  {name:"En progreso", desc:"Preguntas y gramática básica", timer:false},
  {name:"¡La bomba se activa!", desc:"Preguntas más difíciles · 15 segundos", timer:true},
  {name:"Desafío final", desc:"Nivel avanzado · 10 segundos", timer:true}
];
let unlockedLevel = Number(localStorage.getItem("englishChallengeUnlocked") || 1);
function stopTimer() {
  if (timerInterval !== null) { clearInterval(timerInterval); timerInterval = null; }
}
function startTimer() {
  stopTimer();
  if (!bombMode) return;
  timeLeft = currentLevel === 5 ? 10 : BOMB_SECONDS;
  updateTimerDisplay();
  timerInterval = setInterval(() => {
    if (answered) { stopTimer(); return; }
    timeLeft--;
    updateTimerDisplay();
    if (timeLeft <= 0) { stopTimer(); timeExpired(); }
  }, 1000);
}
function updateTimerDisplay() {
  $("timer-value").textContent = timeLeft;
  $("timer-fill").style.width = `${Math.max(0, timeLeft / BOMB_SECONDS * 100)}%`;
  $("timer-panel").classList.toggle("urgent", timeLeft <= 5);
  $("timer-value").parentElement.style.color = timeLeft <= 5 ? "#c51f38" : "#a52d40";
}
function timeExpired() {
  if (answered) return;
  answered = true;
  selected = null;
  lives--;
  const q = quizQuestions[current];
  const buttons = [...document.querySelectorAll(".answer-option")];
  buttons.forEach((button, i) => { button.disabled = true; if (i === q.correct) button.classList.add("correct"); });
  const feedback = $("feedback");
  feedback.className = "feedback bad";
  feedback.textContent = `¡Se acabó el tiempo! La respuesta correcta era: ${q.answers[q.correct]}. ${q.explanation}`;
  $("lives").innerHTML = [0,1,2].map(i => `<span class="${i >= lives ? "lost" : ""}">♥</span>`).join(" ");
  $("next-btn").innerHTML = current === quizQuestions.length - 1 || lives === 0 ? 'Ver resultados <span>→</span>' : 'Siguiente pregunta <span>→</span>';
  $("next-btn").disabled = false;
}

function shuffle(items) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}
function showScreen(screen) {
  if (screen !== quizScreen) stopTimer();
  [homeScreen, quizScreen, resultScreen].forEach(s => s.classList.add("hidden"));
  screen.classList.remove("hidden");
  window.scrollTo({top: 0, behavior: "smooth"});
}
function startQuiz(level = 1) {
  stopTimer();
  currentLevel = level;
  bombMode = level >= 4;
  quizScreen.classList.toggle("bomb-active", bombMode);
  $("timer-panel").classList.toggle("hidden", !bombMode);
  const startIndex = (level - 1) * 6;
  quizQuestions = shuffle(questions.slice(startIndex, startIndex + 6));
  current = 0; score = 0; correctCount = 0; lives = 3; selected = null; answered = false;
  $("score").textContent = score;
  showScreen(quizScreen);
  renderQuestion();
}
function renderLevels() {
  const container = $("level-list");
  container.innerHTML = "";
  LEVELS.forEach((level, index) => {
    const number = index + 1;
    const locked = number > unlockedLevel;
    const button = document.createElement("button");
    button.className = "level-card" + (locked ? " level-locked" : "") + (number >= 4 ? " level-bomb" : "");
    button.disabled = locked;
    button.innerHTML = `<span class="level-number">${locked ? "🔒" : String(number).padStart(2,"0")}</span><span class="level-copy"><strong>Nivel ${number}: ${level.name}</strong><small>${level.desc}</small></span><span class="level-arrow">${number >= 4 ? "💣" : "→"}</span>`;
    if (!locked) button.addEventListener("click", () => startQuiz(number));
    container.appendChild(button);
  });
}
function renderQuestion() {
  const q = quizQuestions[current];
  selected = null; answered = false;
  $("category-chip").textContent = q.type;
  $("question-number").textContent = `QUESTION ${String(current + 1).padStart(2, "0")}`;
  $("question-text").textContent = q.question;
  $("question-hint").textContent = q.hint;
  $("progress-text").textContent = `Nivel ${currentLevel} · Pregunta ${current + 1} de ${quizQuestions.length}`;
  $("timer-value").textContent = currentLevel === 5 ? "10" : "15";
  $("timer-copy").innerHTML = `<span>💣 NIVEL ${currentLevel} · MODO BOMBA</span><strong><span id="timer-value">${currentLevel === 5 ? 10 : 15}</span> segundos</strong>`;
  $("progress-percent").textContent = `${Math.round((current + 1) / quizQuestions.length * 100)}%`;
  $("progress-fill").style.width = `${(current + 1) / quizQuestions.length * 100}%`;
  $("lives").innerHTML = [0,1,2].map(i => `<span class="${i >= lives ? "lost" : ""}">♥</span>`).join(" ");
  $("feedback").className = "feedback hidden";
  $("feedback").textContent = "";
  $("next-btn").disabled = true;
  $("next-btn").innerHTML = 'Comprobar respuesta <span>→</span>';
  $("answers").innerHTML = "";
  q.answers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "answer-option";
    const letter = document.createElement("span");
    letter.className = "answer-letter";
    letter.textContent = String.fromCharCode(65 + index);
    const label = document.createElement("span");
    label.textContent = answer;
    button.append(letter, label);
    button.addEventListener("click", () => {
      if (answered) return;
      selected = index;
      document.querySelectorAll(".answer-option").forEach((b, i) => b.classList.toggle("selected", i === index));
      $("next-btn").disabled = false;
    });
    $("answers").appendChild(button);
  });
  if (bombMode) { timeLeft = currentLevel === 5 ? 10 : BOMB_SECONDS; startTimer(); } else stopTimer();
}
function checkAnswer() {
  if (selected === null || answered) return;
  answered = true;
  stopTimer();
  const q = quizQuestions[current];
  const buttons = [...document.querySelectorAll(".answer-option")];
  buttons.forEach((button, i) => {
    button.disabled = true;
    if (i === q.correct) button.classList.add("correct");
    else if (i === selected) button.classList.add("wrong");
  });
  const feedback = $("feedback");
  feedback.classList.remove("hidden");
  if (selected === q.correct) {
    score += 10; correctCount++;
    feedback.className = "feedback good";
    feedback.textContent = `¡Correcto! ${q.explanation}`;
  } else {
    lives--;
    feedback.className = "feedback bad";
    feedback.textContent = `No exactamente. ${q.explanation}`;
  }
  $("score").textContent = score;
  $("lives").innerHTML = [0,1,2].map(i => `<span class="${i >= lives ? "lost" : ""}">♥</span>`).join(" ");
  $("next-btn").innerHTML = current === quizQuestions.length - 1 || lives === 0 ? 'Ver resultados <span>→</span>' : 'Siguiente pregunta <span>→</span>';
  $("next-btn").disabled = false;
}
function nextQuestion() {
  if (!answered) { checkAnswer(); return; }
  if (current >= quizQuestions.length - 1 || lives === 0) { showResults(); return; }
  current++;
  renderQuestion();
}
function showResults() {
  showScreen(resultScreen);
  const total = quizQuestions.length;
  const accuracy = Math.round(correctCount / total * 100);
  const passed = correctCount >= 4;
  if (passed && currentLevel < 5 && currentLevel >= unlockedLevel) { unlockedLevel = currentLevel + 1; localStorage.setItem("englishChallengeUnlocked", String(unlockedLevel)); }
  renderLevels();
  $("final-score").textContent = score;
  $("final-correct").textContent = `${correctCount}/${total}`;
  $("final-accuracy").textContent = `${accuracy}%`;
  let title, message, medal, note;
  if (accuracy >= 80) {
    title = "Excellent work!"; message = "¡Lo hiciste genial! Tienes una buena base de inglés."; medal = "🏆";
    note = "Sigue practicando para ampliar tu vocabulario y dominar nuevas estructuras.";
  } else if (accuracy >= 50) {
    title = "Good effort!"; message = "¡Buen trabajo! Ya estás avanzando."; medal = "🌟";
    note = "Revisa las explicaciones de las respuestas incorrectas e inténtalo de nuevo.";
  } else {
    title = "Keep practicing!"; message = "Cada intento es una oportunidad para aprender."; medal = "💪";
    note = "Empieza repasando vocabulario básico y vuelve a jugar. ¡Tú puedes!";
  }
  $("result-title").textContent = title;
  $("result-message").textContent = message;
  $("result-medal").textContent = medal;
  if (passed && currentLevel < 5) note += ` ¡Nivel ${currentLevel} superado! Se desbloqueó el nivel ${currentLevel + 1}.`;
  else if (passed && currentLevel === 5) note += " ¡Completaste los cinco niveles! Eres un English Champion.";
  else note += " Necesitas al menos 4 respuestas correctas de 6 para desbloquear el siguiente nivel.";
  $("result-note").textContent = note;
}
renderLevels();
$("retry-btn").addEventListener("click", () => startQuiz(currentLevel));
$("home-btn").addEventListener("click", () => showScreen(homeScreen));
$("exit-btn").addEventListener("click", () => {
  if (confirm("¿Quieres salir del desafío? Se perderá el progreso de esta partida.")) { stopTimer(); showScreen(homeScreen); }
});
$("next-btn").addEventListener("click", nextQuestion);
$("how-btn").addEventListener("click", () => $("how-dialog").showModal());
$("close-dialog").addEventListener("click", () => $("how-dialog").close());
$("how-dialog").addEventListener("click", e => { if (e.target === $("how-dialog")) $("how-dialog").close(); });
