const lessons = [
  {
    id: "sounds",
    title: "1. Ecouter les sons",
    stage: "Oreille",
    focus: "Tu entends avant de lire.",
    icon: "♪",
    words: [
      { ru: "а", fr: "son ouvert, comme papa", speak: "а", example: "мама" },
      { ru: "о", fr: "son rond, comme eau", speak: "о", example: "дом" },
      { ru: "у", fr: "son ou", speak: "у", example: "тут" },
      { ru: "ы", fr: "son russe dur", speak: "ы", example: "ты" }
    ],
    exercises: [
      { type: "listen", prompt: "Ecoute. Quel son tu as entendu ?", audio: "а", answers: ["а", "о", "у"], correct: 0 },
      { type: "listen", prompt: "Ecoute. Quel son tu as entendu ?", audio: "у", answers: ["ы", "а", "у"], correct: 2 },
      { type: "repeat", prompt: "Ecoute puis repete : ы", audio: "ы", answer: "ы" }
    ]
  },
  {
    id: "first-needs",
    title: "2. Besoins simples",
    stage: "Besoins",
    focus: "Des mots utiles avant les regles.",
    icon: "Я",
    words: [
      { ru: "да", fr: "oui", speak: "да", example: "да" },
      { ru: "нет", fr: "non", speak: "нет", example: "нет" },
      { ru: "вода", fr: "eau", speak: "вода", example: "вода, пожалуйста" },
      { ru: "мама", fr: "maman", speak: "мама", example: "мама тут" }
    ],
    exercises: [
      { type: "qcm", question: "Que veut dire да ?", answers: ["oui", "non", "eau"], correct: 0 },
      { type: "listen", prompt: "Ecoute. Quel mot tu entends ?", audio: "вода", answers: ["мама", "вода", "нет"], correct: 1 },
      { type: "fill", question: "Complete : ___, пожалуйста", answer: "вода" }
    ]
  },
  {
    id: "near-world",
    title: "3. Le monde proche",
    stage: "Objets",
    focus: "Nommer ce que tu vois.",
    icon: "Д",
    words: [
      { ru: "дом", fr: "maison", speak: "дом", example: "это дом" },
      { ru: "хлеб", fr: "pain", speak: "хлеб", example: "хлеб тут" },
      { ru: "чай", fr: "the", speak: "чай", example: "дай чай" },
      { ru: "книга", fr: "livre", speak: "книга", example: "это книга" }
    ],
    exercises: [
      { type: "qcm", question: "Que veut dire дом ?", answers: ["maison", "pain", "livre"], correct: 0 },
      { type: "listen", prompt: "Ecoute. Quel mot tu entends ?", audio: "чай", answers: ["дом", "чай", "книга"], correct: 1 },
      { type: "fill", question: "Complete : это ___", answer: "книга" }
    ]
  },
  {
    id: "actions",
    title: "4. Petites actions",
    stage: "Actions",
    focus: "Dire ce que tu veux faire.",
    icon: "Х",
    words: [
      { ru: "дай", fr: "donne", speak: "дай", example: "дай воду" },
      { ru: "хочу", fr: "je veux", speak: "хочу", example: "я хочу чай" },
      { ru: "иду", fr: "je vais a pied", speak: "иду", example: "я иду домой" },
      { ru: "вижу", fr: "je vois", speak: "вижу", example: "я вижу дом" }
    ],
    exercises: [
      { type: "qcm", question: "Que veut dire хочу ?", answers: ["je veux", "je vois", "donne"], correct: 0 },
      { type: "fill", question: "Complete : я ___ чай", answer: "хочу" },
      { type: "listen", prompt: "Ecoute. Quelle action ?", audio: "дай", answers: ["вижу", "дай", "иду"], correct: 1 }
    ]
  },
  {
    id: "mini-phrases",
    title: "5. Mini phrases",
    stage: "Parler",
    focus: "Assembler sans te noyer.",
    icon: "↗",
    words: [
      { ru: "я тут", fr: "je suis ici", speak: "я тут", example: "я тут" },
      { ru: "это дом", fr: "c'est une maison", speak: "это дом", example: "это дом" },
      { ru: "я хочу воду", fr: "je veux de l'eau", speak: "я хочу воду", example: "я хочу воду" },
      { ru: "где чай?", fr: "ou est le the ?", speak: "где чай", example: "где чай?" }
    ],
    exercises: [
      { type: "qcm", question: "Que veut dire я тут ?", answers: ["je suis ici", "je veux", "ou est le the"], correct: 0 },
      { type: "fill", question: "Complete : я хочу ___", answer: "воду" },
      { type: "listen", prompt: "Ecoute. Quelle phrase ?", audio: "где чай", answers: ["это дом", "где чай?", "я тут"], correct: 1 }
    ]
  },
  {
    id: "letters",
    title: "6. Lire ce que tu connais",
    stage: "Lecture",
    focus: "Les lettres arrivent apres les sons.",
    icon: "Б",
    words: [
      { ru: "А а", fr: "a", speak: "а", example: "мама" },
      { ru: "Д д", fr: "d", speak: "дэ", example: "дом" },
      { ru: "В в", fr: "v", speak: "вэ", example: "вода" },
      { ru: "Х х", fr: "kh aspire", speak: "ха", example: "хлеб" }
    ],
    exercises: [
      { type: "qcm", question: "Quelle lettre fait le son v ?", answers: ["В", "Д", "Х"], correct: 0 },
      { type: "qcm", question: "Dans вода, quelle lettre fait v ?", answers: ["в", "д", "а"], correct: 0 },
      { type: "repeat", prompt: "Ecoute puis dis : дом", audio: "дом", answer: "дом" }
    ]
  }
];

const STORAGE_KEY = "russki-natural-v2";
const today = () => new Date().toISOString().slice(0, 10);
const normalize = (value) => value.trim().toLocaleLowerCase("ru-RU");
const allExercises = lessons.flatMap((lesson) =>
  lesson.exercises.map((exercise, index) => ({ ...exercise, lessonId: lesson.id, id: `${lesson.id}-${index}` }))
);

let state = loadState();
let currentExercise = null;
let activeLessonId = "sounds";

function loadState() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) return JSON.parse(saved);
  return {
    lastActive: "",
    completed: {},
    mistakes: [],
    srs: {},
    theme: "light"
  };
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function touchSession() {
  state.lastActive = today();
}

function speak(text) {
  if (!("speechSynthesis" in window)) {
    showToast("Audio indisponible sur ce navigateur.");
    return;
  }
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "ru-RU";
  utterance.rate = 0.78;
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);
}

function render() {
  document.body.classList.toggle("dark", state.theme === "dark");
  document.getElementById("mistakeCount").textContent = state.mistakes.length
    ? `${state.mistakes.length} a reprendre`
    : "calme";
  renderLessons();
  renderReview();
}

function renderLessons() {
  const container = document.getElementById("lessonList");
  container.innerHTML = lessons
    .map((lesson) => {
      const progress = state.completed[lesson.id] || 0;
      return `
        <article class="lesson-card">
          <div class="lesson-icon" aria-hidden="true">${lesson.icon}</div>
          <div>
            <h3>${lesson.title}</h3>
            <small>${lesson.focus}</small>
            <div class="lesson-meta">
              <span class="pill">${lesson.stage}</span>
              <span class="pill">${progress ? `${progress}% vu` : "nouveau"}</span>
            </div>
          </div>
          <button class="launch-button" type="button" data-lesson="${lesson.id}" aria-label="Lancer ${lesson.title}">›</button>
        </article>
      `;
    })
    .join("");
}

function renderLessonWords(lessonId) {
  const lesson = lessons.find((item) => item.id === lessonId);
  const card = document.getElementById("exerciseCard");
  card.innerHTML = `
    <div class="exercise-top">
      <span class="pill">${lesson.stage}</span>
      <button class="next-button compact" type="button" id="startLessonPractice">Essayer</button>
    </div>
    <p class="question">${lesson.title}</p>
    <p class="soft-text">${lesson.focus} Appuie sur les sons, ecoute plusieurs fois, puis repete doucement.</p>
    <div class="answers">
      ${lesson.words
        .map(
          (word) => `
            <div class="word-line">
              <div>
                <strong>${word.ru}</strong>
                <span>${word.fr}</span>
                <p class="example">${word.example}</p>
              </div>
              <button class="audio-button" type="button" data-speak="${word.speak}" aria-label="Ecouter ${word.ru}">▶</button>
            </div>
          `
        )
        .join("")}
    </div>
  `;
  document.getElementById("startLessonPractice").addEventListener("click", () => startExercise(lesson.exercises[0], lesson.id));
}

function renderExercise(exercise) {
  const card = document.getElementById("exerciseCard");
  currentExercise = exercise;
  const typeLabel = {
    qcm: "Comprendre",
    listen: "Ecouter",
    repeat: "Repeter",
    fill: "Completer"
  }[exercise.type];

  if (exercise.type === "qcm" || exercise.type === "listen") {
    card.innerHTML = `
      <div class="exercise-top">
        <span class="pill">${typeLabel}</span>
        ${exercise.audio ? `<button class="audio-button" type="button" data-speak="${exercise.audio}" aria-label="Ecouter">▶</button>` : `<span class="pill">${lessonTitle(exercise.lessonId)}</span>`}
      </div>
      <p class="question">${exercise.question || exercise.prompt}</p>
      <div class="answers">
        ${exercise.answers.map((answer, index) => `<button class="answer" type="button" data-answer="${index}">${answer}</button>`).join("")}
      </div>
      <p class="feedback" id="feedback"></p>
      <button class="next-button" type="button" id="nextExercise">Continuer</button>
    `;
    if (exercise.audio) window.setTimeout(() => speak(exercise.audio), 250);
    return;
  }

  card.innerHTML = `
    <div class="exercise-top">
      <span class="pill">${typeLabel}</span>
      ${exercise.audio ? `<button class="audio-button" type="button" data-speak="${exercise.audio}" aria-label="Ecouter">▶</button>` : `<span class="pill">${lessonTitle(exercise.lessonId)}</span>`}
    </div>
    <p class="question">${exercise.prompt || exercise.question}</p>
    <p class="soft-text">Ecris le mot si tu peux. Le plus important ici, c'est de l'entendre et de le redire.</p>
    <input class="text-input" id="textAnswer" autocomplete="off" autocapitalize="off" placeholder="Ta reponse" />
    <button class="next-button" type="button" id="validateText">Valider</button>
    <p class="feedback" id="feedback"></p>
    <button class="next-button" type="button" id="nextExercise">Continuer</button>
  `;
  if (exercise.audio) window.setTimeout(() => speak(exercise.audio), 250);
}

function lessonTitle(id) {
  return lessons.find((lesson) => lesson.id === id)?.title || "Revision";
}

function startExercise(exercise, lessonId = exercise.lessonId) {
  activeLessonId = lessonId;
  showTab("practice");
  renderExercise({ ...exercise, lessonId, id: exercise.id || `${lessonId}-${Date.now()}` });
}

function nextExercise() {
  const due = getDueReviews();
  const lessonPool = allExercises.filter((exercise) => exercise.lessonId === activeLessonId);
  const pool = due.length ? due : lessonPool;
  const index = Math.floor(Math.random() * pool.length);
  startExercise(pool[index] || allExercises[0], pool[index]?.lessonId || activeLessonId);
}

function validateChoice(index, button) {
  const correct = Number(index) === currentExercise.correct;
  button.classList.add(correct ? "correct" : "wrong");
  [...document.querySelectorAll(".answer")].forEach((answer) => {
    answer.disabled = true;
    if (Number(answer.dataset.answer) === currentExercise.correct) answer.classList.add("correct");
  });
  handleResult(correct, currentExercise.answers[currentExercise.correct]);
}

function validateText() {
  const input = document.getElementById("textAnswer");
  const correct = normalize(input.value) === normalize(currentExercise.answer);
  input.classList.toggle("correct", correct);
  handleResult(correct, currentExercise.answer);
}

function handleResult(correct, expected) {
  touchSession();
  const feedback = document.getElementById("feedback");
  if (correct) {
    feedback.textContent = "Oui. On garde ce son en tete.";
    updateSrs(currentExercise.id, true);
    state.mistakes = state.mistakes.filter((id) => id !== currentExercise.id);
  } else {
    feedback.textContent = `Pas grave. Reecoute : ${expected}`;
    updateSrs(currentExercise.id, false);
    if (!state.mistakes.includes(currentExercise.id)) state.mistakes.push(currentExercise.id);
  }
  updateLessonProgress(currentExercise.lessonId);
  saveState();
  render();
}

function updateLessonProgress(lessonId) {
  const lessonExercises = allExercises.filter((exercise) => exercise.lessonId === lessonId);
  const learned = lessonExercises.filter((exercise) => state.srs[exercise.id]?.correct > 0).length;
  state.completed[lessonId] = Math.round((learned / lessonExercises.length) * 100);
}

function updateSrs(id, correct) {
  const previous = state.srs[id] || { correct: 0, interval: 0, due: today() };
  const interval = correct ? Math.max(1, previous.interval * 2 || 1) : 0;
  const dueDate = new Date();
  dueDate.setDate(dueDate.getDate() + interval);
  state.srs[id] = {
    correct: correct ? previous.correct + 1 : 0,
    interval,
    due: dueDate.toISOString().slice(0, 10)
  };
}

function getDueReviews() {
  const current = today();
  const dueIds = Object.entries(state.srs)
    .filter(([, value]) => value.due <= current)
    .map(([id]) => id);
  return [...new Set([...dueIds, ...state.mistakes])]
    .map((id) => allExercises.find((exercise) => exercise.id === id))
    .filter(Boolean);
}

function renderReview() {
  const container = document.getElementById("reviewList");
  const due = getDueReviews();
  if (!due.length) {
    container.innerHTML = `<article class="review-item"><div><strong>Rien a forcer</strong><p class="example">Reviens aux sons ou continue la prochaine petite etape.</p></div></article>`;
    return;
  }
  container.innerHTML = due
    .map(
      (exercise) => `
        <article class="review-item">
          <div>
            <strong>${lessonTitle(exercise.lessonId)}</strong>
            <p class="example">${exercise.question || exercise.prompt}</p>
          </div>
          <button class="launch-button" type="button" data-review="${exercise.id}" aria-label="Reprendre">›</button>
        </article>
      `
    )
    .join("");
}

function showTab(id) {
  document.querySelectorAll(".tab").forEach((tab) => tab.classList.toggle("active", tab.dataset.tab === id));
  document.querySelectorAll(".panel").forEach((panel) => panel.classList.toggle("active", panel.id === id));
}

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  window.setTimeout(() => toast.classList.remove("show"), 2200);
}

document.addEventListener("click", (event) => {
  const target = event.target.closest("button");
  if (!target) return;

  if (target.dataset.tab) showTab(target.dataset.tab);
  if (target.dataset.lesson) {
    activeLessonId = target.dataset.lesson;
    showTab("practice");
    renderLessonWords(activeLessonId);
  }
  if (target.dataset.speak) speak(target.dataset.speak);
  if (target.dataset.answer) validateChoice(target.dataset.answer, target);
  if (target.dataset.review) {
    const exercise = allExercises.find((item) => item.id === target.dataset.review);
    startExercise(exercise, exercise.lessonId);
  }
  if (target.id === "nextExercise") nextExercise();
  if (target.id === "validateText") validateText();
  if (target.id === "quickSession") {
    const nextLesson = lessons.find((lesson) => (state.completed[lesson.id] || 0) < 100) || lessons[0];
    activeLessonId = nextLesson.id;
    renderLessonWords(nextLesson.id);
    showTab("practice");
  }
  if (target.id === "reviewMistakes") {
    const mistake = state.mistakes.map((id) => allExercises.find((exercise) => exercise.id === id)).find(Boolean);
    if (mistake) startExercise(mistake, mistake.lessonId);
    else showToast("Rien de special a reprendre.");
  }
  if (target.id === "themeToggle") {
    state.theme = state.theme === "dark" ? "light" : "dark";
    saveState();
    render();
  }
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("service-worker.js");
  });
}

render();
renderLessonWords(activeLessonId);
