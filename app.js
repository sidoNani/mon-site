const alphabet = [
  { upper: "А", lower: "а", sound: "a", example: "мама", speak: "а" },
  { upper: "Б", lower: "б", sound: "b", example: "брат", speak: "бэ" },
  { upper: "В", lower: "в", sound: "v", example: "вода", speak: "вэ" },
  { upper: "Г", lower: "г", sound: "g", example: "город", speak: "гэ" },
  { upper: "Д", lower: "д", sound: "d", example: "дом", speak: "дэ" },
  { upper: "Е", lower: "е", sound: "ye", example: "нет", speak: "е" },
  { upper: "Ё", lower: "ё", sound: "yo", example: "ещё", speak: "ё" },
  { upper: "Ж", lower: "ж", sound: "j dur", example: "жизнь", speak: "жэ" },
  { upper: "З", lower: "з", sound: "z", example: "зима", speak: "зэ" },
  { upper: "И", lower: "и", sound: "i", example: "имя", speak: "и" },
  { upper: "Й", lower: "й", sound: "y court", example: "мой", speak: "и краткое" },
  { upper: "К", lower: "к", sound: "k", example: "как", speak: "ка" },
  { upper: "Л", lower: "л", sound: "l", example: "лампа", speak: "эль" },
  { upper: "М", lower: "м", sound: "m", example: "мама", speak: "эм" },
  { upper: "Н", lower: "н", sound: "n", example: "нет", speak: "эн" },
  { upper: "О", lower: "о", sound: "o", example: "он", speak: "о" },
  { upper: "П", lower: "п", sound: "p", example: "папа", speak: "пэ" },
  { upper: "Р", lower: "р", sound: "r roule", example: "рука", speak: "эр" },
  { upper: "С", lower: "с", sound: "s", example: "сын", speak: "эс" },
  { upper: "Т", lower: "т", sound: "t", example: "тут", speak: "тэ" },
  { upper: "У", lower: "у", sound: "ou", example: "утро", speak: "у" },
  { upper: "Ф", lower: "ф", sound: "f", example: "фото", speak: "эф" },
  { upper: "Х", lower: "х", sound: "kh", example: "хлеб", speak: "ха" },
  { upper: "Ц", lower: "ц", sound: "ts", example: "центр", speak: "цэ" },
  { upper: "Ч", lower: "ч", sound: "tch", example: "чай", speak: "че" },
  { upper: "Ш", lower: "ш", sound: "ch dur", example: "школа", speak: "ша" },
  { upper: "Щ", lower: "щ", sound: "ch long", example: "ещё", speak: "ща" },
  { upper: "Ъ", lower: "ъ", sound: "signe dur", example: "объект", speak: "твёрдый знак" },
  { upper: "Ы", lower: "ы", sound: "i dur", example: "ты", speak: "ы" },
  { upper: "Ь", lower: "ь", sound: "signe mou", example: "день", speak: "мягкий знак" },
  { upper: "Э", lower: "э", sound: "e ouvert", example: "это", speak: "э" },
  { upper: "Ю", lower: "ю", sound: "you", example: "юг", speak: "ю" },
  { upper: "Я", lower: "я", sound: "ya", example: "я", speak: "я" }
];

const dialogues = [
  {
    title: "Se presenter",
    level: "A1",
    lines: [
      { ru: "Привет! Как тебя зовут?", fr: "Salut ! Comment tu t'appelles ?" },
      { ru: "Меня зовут Анна. А тебя?", fr: "Je m'appelle Anna. Et toi ?" },
      { ru: "Меня зовут Иван. Очень приятно.", fr: "Je m'appelle Ivan. Enchante." }
    ]
  },
  {
    title: "Au cafe",
    level: "A1-A2",
    lines: [
      { ru: "Здравствуйте. Можно чай?", fr: "Bonjour. Je peux avoir un the ?" },
      { ru: "Да, конечно. Чёрный или зелёный?", fr: "Oui, bien sur. Noir ou vert ?" },
      { ru: "Зелёный, пожалуйста. Сколько стоит?", fr: "Vert, s'il vous plait. Combien ca coute ?" }
    ]
  },
  {
    title: "Demander son chemin",
    level: "A2",
    lines: [
      { ru: "Извините, где метро?", fr: "Excusez-moi, ou est le metro ?" },
      { ru: "Идите прямо, потом направо.", fr: "Allez tout droit, puis a droite." },
      { ru: "Спасибо большое!", fr: "Merci beaucoup !" }
    ]
  },
  {
    title: "Parler de sa journee",
    level: "B1",
    lines: [
      { ru: "Сегодня я работал и потом читал книгу.", fr: "Aujourd'hui j'ai travaille puis j'ai lu un livre." },
      { ru: "Что ты делал вечером?", fr: "Qu'est-ce que tu as fait le soir ?" },
      { ru: "Я встретился с другом и мы говорили о планах.", fr: "J'ai vu un ami et nous avons parle de projets." }
    ]
  },
  {
    title: "Donner son avis",
    level: "B2",
    lines: [
      { ru: "Я думаю, что это важная проблема.", fr: "Je pense que c'est un probleme important." },
      { ru: "С одной стороны, это сложно. Однако решение возможно.", fr: "D'un cote, c'est difficile. Cependant une solution est possible." },
      { ru: "Мне кажется, стоит учитывать контекст.", fr: "Il me semble qu'il faut prendre le contexte en compte." }
    ]
  },
  {
    title: "Debat nuance",
    level: "C1",
    lines: [
      { ru: "С моей точки зрения, это спорный вопрос.", fr: "De mon point de vue, c'est une question controversee." },
      { ru: "Нельзя отрицать, что ситуация изменилась.", fr: "On ne peut pas nier que la situation a change." },
      { ru: "Тем не менее, стоит учитывать долгосрочные последствия.", fr: "Neanmoins, il faut prendre en compte les consequences a long terme." }
    ]
  }
];

const grammarSheets = [
  {
    title: "Accusatif",
    level: "A2",
    rule: "On l'utilise apres voir, vouloir, prendre, lire, manger. Le feminin en -а devient souvent -у.",
    examples: ["я вижу маму", "я хочу воду", "я читаю книгу"]
  },
  {
    title: "Genitif",
    level: "A2-B1",
    rule: "On l'utilise apres нет, pour les quantites et pour dire de quelque chose.",
    examples: ["у меня нет книги", "много воды", "чашка чая"]
  },
  {
    title: "Datif",
    level: "B1",
    rule: "Il repond souvent a la question a qui ? et sert aussi dans мне нравится.",
    examples: ["я даю маме книгу", "мне нравится русский", "ему холодно"]
  },
  {
    title: "Instrumental",
    level: "B1",
    rule: "Il sert pour avec qui, avec quoi, et apres certains verbes comme быть.",
    examples: ["с другом", "чай с молоком", "он был врачом"]
  },
  {
    title: "Locatif",
    level: "B1",
    rule: "Il apparait apres в, на, о quand on parle d'un lieu ou d'un sujet.",
    examples: ["в школе", "на работе", "говорить о Москве"]
  },
  {
    title: "Aspect verbal",
    level: "B1-B2",
    rule: "Imperfectif = processus ou repetition. Perfectif = resultat ou action complete.",
    examples: ["я читал книгу", "я прочитал книгу", "я буду делать / я сделаю"]
  },
  {
    title: "Verbes de mouvement",
    level: "B1-B2",
    rule: "идти/ехать = maintenant dans une direction. ходить/ездить = habitude ou aller-retour.",
    examples: ["я иду домой", "я хожу в школу", "я еду в метро"]
  },
  {
    title: "Subordonnees C1",
    level: "C1",
    rule: "Pour nuancer, utilise чтобы, несмотря на то что, в то время как, как только.",
    examples: ["я учу, чтобы говорить", "несмотря на то что трудно, я продолжаю", "как только я приду"]
  }
];

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
      { ru: "ы", fr: "son russe dur", speak: "ы", example: "ты" },
      { ru: "р", fr: "r roule", speak: "р", example: "рука" },
      { ru: "х", fr: "kh aspire", speak: "х", example: "хлеб" }
    ],
    exercises: [
      { type: "listen", prompt: "Ecoute. Quel son tu as entendu ?", audio: "а", answers: ["а", "о", "у"], correct: 0 },
      { type: "listen", prompt: "Ecoute. Quel son tu as entendu ?", audio: "у", answers: ["ы", "а", "у"], correct: 2 },
      { type: "listen", prompt: "Ecoute. Quel son tu as entendu ?", audio: "х", answers: ["р", "х", "м"], correct: 1 },
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
      { ru: "мама", fr: "maman", speak: "мама", example: "мама тут" },
      { ru: "папа", fr: "papa", speak: "папа", example: "папа тут" },
      { ru: "ещё", fr: "encore", speak: "ещё", example: "ещё воды" },
      { ru: "стоп", fr: "stop", speak: "стоп", example: "стоп" }
    ],
    exercises: [
      { type: "qcm", question: "Que veut dire да ?", answers: ["oui", "non", "eau"], correct: 0 },
      { type: "listen", prompt: "Ecoute. Quel mot tu entends ?", audio: "вода", answers: ["мама", "вода", "нет"], correct: 1 },
      { type: "qcm", question: "Que veut dire ещё ?", answers: ["encore", "stop", "papa"], correct: 0 },
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
      { ru: "книга", fr: "livre", speak: "книга", example: "это книга" },
      { ru: "стол", fr: "table", speak: "стол", example: "это стол" },
      { ru: "телефон", fr: "telephone", speak: "телефон", example: "мой телефон" },
      { ru: "дверь", fr: "porte", speak: "дверь", example: "где дверь?" }
    ],
    exercises: [
      { type: "qcm", question: "Que veut dire дом ?", answers: ["maison", "pain", "livre"], correct: 0 },
      { type: "listen", prompt: "Ecoute. Quel mot tu entends ?", audio: "чай", answers: ["дом", "чай", "книга"], correct: 1 },
      { type: "qcm", question: "Que veut dire дверь ?", answers: ["porte", "table", "telephone"], correct: 0 },
      { type: "fill", question: "Complete : это ___", answer: "книга" }
    ]
  },
  {
    id: "people",
    title: "4. Les personnes",
    stage: "Personnes",
    focus: "Dire qui est la.",
    icon: "К",
    words: [
      { ru: "я", fr: "je / moi", speak: "я", example: "я тут" },
      { ru: "ты", fr: "tu / toi", speak: "ты", example: "ты тут" },
      { ru: "он", fr: "il", speak: "он", example: "он дома" },
      { ru: "она", fr: "elle", speak: "она", example: "она тут" },
      { ru: "мы", fr: "nous", speak: "мы", example: "мы дома" },
      { ru: "друг", fr: "ami", speak: "друг", example: "мой друг" }
    ],
    exercises: [
      { type: "qcm", question: "Que veut dire я ?", answers: ["je", "tu", "nous"], correct: 0 },
      { type: "listen", prompt: "Ecoute. Quel mot tu entends ?", audio: "она", answers: ["он", "она", "мы"], correct: 1 },
      { type: "fill", question: "Complete : ___ тут", answer: "я" }
    ]
  },
  {
    id: "actions",
    title: "5. Petites actions",
    stage: "Actions",
    focus: "Dire ce que tu veux faire.",
    icon: "Х",
    words: [
      { ru: "дай", fr: "donne", speak: "дай", example: "дай воду" },
      { ru: "хочу", fr: "je veux", speak: "хочу", example: "я хочу чай" },
      { ru: "иду", fr: "je vais a pied", speak: "иду", example: "я иду домой" },
      { ru: "вижу", fr: "je vois", speak: "вижу", example: "я вижу дом" },
      { ru: "ем", fr: "je mange", speak: "ем", example: "я ем хлеб" },
      { ru: "пью", fr: "je bois", speak: "пью", example: "я пью воду" },
      { ru: "сплю", fr: "je dors", speak: "сплю", example: "я сплю" }
    ],
    exercises: [
      { type: "qcm", question: "Que veut dire хочу ?", answers: ["je veux", "je vois", "donne"], correct: 0 },
      { type: "fill", question: "Complete : я ___ чай", answer: "хочу" },
      { type: "listen", prompt: "Ecoute. Quelle action ?", audio: "дай", answers: ["вижу", "дай", "иду"], correct: 1 },
      { type: "qcm", question: "Que veut dire я пью воду ?", answers: ["je bois de l'eau", "je mange du pain", "je dors"], correct: 0 }
    ]
  },
  {
    id: "colors",
    title: "6. Couleurs",
    stage: "Voir",
    focus: "Ajouter des details simples.",
    icon: "Ц",
    words: [
      { ru: "красный", fr: "rouge", speak: "красный", example: "красный дом" },
      { ru: "синий", fr: "bleu", speak: "синий", example: "синий стол" },
      { ru: "белый", fr: "blanc", speak: "белый", example: "белый хлеб" },
      { ru: "чёрный", fr: "noir", speak: "чёрный", example: "чёрный чай" },
      { ru: "зелёный", fr: "vert", speak: "зелёный", example: "зелёный чай" }
    ],
    exercises: [
      { type: "qcm", question: "Que veut dire красный ?", answers: ["rouge", "bleu", "vert"], correct: 0 },
      { type: "listen", prompt: "Ecoute. Quelle couleur ?", audio: "зелёный", answers: ["чёрный", "зелёный", "белый"], correct: 1 },
      { type: "fill", question: "Complete : ___ чай", answer: "зелёный" }
    ]
  },
  {
    id: "time",
    title: "7. Temps simple",
    stage: "Temps",
    focus: "Comprendre maintenant, demain, hier.",
    icon: "С",
    words: [
      { ru: "сейчас", fr: "maintenant", speak: "сейчас", example: "я тут сейчас" },
      { ru: "потом", fr: "apres", speak: "потом", example: "потом чай" },
      { ru: "сегодня", fr: "aujourd'hui", speak: "сегодня", example: "сегодня я дома" },
      { ru: "завтра", fr: "demain", speak: "завтра", example: "завтра я иду" },
      { ru: "вчера", fr: "hier", speak: "вчера", example: "вчера я был дома" }
    ],
    exercises: [
      { type: "qcm", question: "Que veut dire сейчас ?", answers: ["maintenant", "demain", "hier"], correct: 0 },
      { type: "listen", prompt: "Ecoute. Quel mot tu entends ?", audio: "завтра", answers: ["сегодня", "завтра", "вчера"], correct: 1 },
      { type: "fill", question: "Complete : ___ я дома", answer: "сегодня" }
    ]
  },
  {
    id: "mini-phrases",
    title: "8. Mini phrases",
    stage: "Parler",
    focus: "Assembler sans te noyer.",
    icon: "↗",
    words: [
      { ru: "я тут", fr: "je suis ici", speak: "я тут", example: "я тут" },
      { ru: "это дом", fr: "c'est une maison", speak: "это дом", example: "это дом" },
      { ru: "я хочу воду", fr: "je veux de l'eau", speak: "я хочу воду", example: "я хочу воду" },
      { ru: "где чай?", fr: "ou est le the ?", speak: "где чай", example: "где чай?" },
      { ru: "как дела?", fr: "comment ca va ?", speak: "как дела", example: "привет, как дела?" },
      { ru: "всё хорошо", fr: "tout va bien", speak: "всё хорошо", example: "у меня всё хорошо" },
      { ru: "я не понимаю", fr: "je ne comprends pas", speak: "я не понимаю", example: "извините, я не понимаю" }
    ],
    exercises: [
      { type: "qcm", question: "Que veut dire я тут ?", answers: ["je suis ici", "je veux", "ou est le the"], correct: 0 },
      { type: "fill", question: "Complete : я хочу ___", answer: "воду" },
      { type: "listen", prompt: "Ecoute. Quelle phrase ?", audio: "где чай", answers: ["это дом", "где чай?", "я тут"], correct: 1 },
      { type: "qcm", question: "Comment dire je ne comprends pas ?", answers: ["я не понимаю", "как дела?", "всё хорошо"], correct: 0 }
    ]
  },
  {
    id: "daily-life",
    title: "9. Vie quotidienne",
    stage: "A1",
    focus: "Parler de la maison, du rythme et des habitudes.",
    icon: "У",
    words: [
      { ru: "утро", fr: "matin", speak: "утро", example: "доброе утро" },
      { ru: "день", fr: "journee", speak: "день", example: "хороший день" },
      { ru: "вечер", fr: "soir", speak: "вечер", example: "добрый вечер" },
      { ru: "работа", fr: "travail", speak: "работа", example: "я иду на работу" },
      { ru: "школа", fr: "ecole", speak: "школа", example: "я иду в школу" },
      { ru: "домой", fr: "a la maison", speak: "домой", example: "я иду домой" }
    ],
    exercises: [
      { type: "qcm", question: "Que veut dire вечер ?", answers: ["soir", "matin", "travail"], correct: 0 },
      { type: "listen", prompt: "Ecoute. Quel mot tu entends ?", audio: "школа", answers: ["работа", "школа", "домой"], correct: 1 },
      { type: "fill", question: "Complete : я иду ___", answer: "домой" }
    ]
  },
  {
    id: "politeness",
    title: "10. Politesse et survie",
    stage: "A1",
    focus: "Demander sans bloquer.",
    icon: "П",
    words: [
      { ru: "пожалуйста", fr: "s'il vous plait", speak: "пожалуйста", example: "чай, пожалуйста" },
      { ru: "спасибо", fr: "merci", speak: "спасибо", example: "спасибо большое" },
      { ru: "извините", fr: "excusez-moi", speak: "извините", example: "извините, где метро?" },
      { ru: "можно?", fr: "c'est possible ?", speak: "можно", example: "можно воду?" },
      { ru: "помогите", fr: "aidez-moi", speak: "помогите", example: "помогите, пожалуйста" },
      { ru: "медленно", fr: "lentement", speak: "медленно", example: "говорите медленно" }
    ],
    exercises: [
      { type: "qcm", question: "Comment dire excusez-moi ?", answers: ["извините", "спасибо", "можно"], correct: 0 },
      { type: "fill", question: "Complete : говорите ___", answer: "медленно" },
      { type: "listen", prompt: "Ecoute. Quelle phrase ?", audio: "помогите", answers: ["можно", "помогите", "спасибо"], correct: 1 }
    ]
  },
  {
    id: "questions",
    title: "11. Questions de base",
    stage: "A1",
    focus: "Comprendre qui, quoi, ou, quand, pourquoi.",
    icon: "?",
    words: [
      { ru: "кто?", fr: "qui ?", speak: "кто", example: "кто это?" },
      { ru: "что?", fr: "quoi ?", speak: "что", example: "что это?" },
      { ru: "где?", fr: "ou ?", speak: "где", example: "где дом?" },
      { ru: "когда?", fr: "quand ?", speak: "когда", example: "когда урок?" },
      { ru: "почему?", fr: "pourquoi ?", speak: "почему", example: "почему нет?" },
      { ru: "как?", fr: "comment ?", speak: "как", example: "как дела?" }
    ],
    exercises: [
      { type: "qcm", question: "Que veut dire почему ?", answers: ["pourquoi", "ou", "quand"], correct: 0 },
      { type: "fill", question: "Complete : ___ это?", answer: "что" },
      { type: "listen", prompt: "Ecoute. Quel mot interrogatif ?", audio: "когда", answers: ["кто", "когда", "как"], correct: 1 }
    ]
  },
  {
    id: "numbers-money",
    title: "12. Nombres et argent",
    stage: "A1",
    focus: "Acheter, compter, comprendre un prix.",
    icon: "5",
    words: [
      { ru: "один", fr: "un", speak: "один", example: "один билет" },
      { ru: "два", fr: "deux", speak: "два", example: "два кофе" },
      { ru: "три", fr: "trois", speak: "три", example: "три дня" },
      { ru: "десять", fr: "dix", speak: "десять", example: "десять минут" },
      { ru: "сто", fr: "cent", speak: "сто", example: "сто рублей" },
      { ru: "сколько стоит?", fr: "combien ca coute ?", speak: "сколько стоит", example: "сколько стоит чай?" }
    ],
    exercises: [
      { type: "qcm", question: "Que veut dire сто ?", answers: ["cent", "dix", "trois"], correct: 0 },
      { type: "fill", question: "Complete : сколько ___?", answer: "стоит" },
      { type: "listen", prompt: "Ecoute. Quel nombre ?", audio: "десять", answers: ["два", "десять", "сто"], correct: 1 }
    ]
  },
  {
    id: "places-city",
    title: "13. Ville et direction",
    stage: "A2",
    focus: "Se deplacer et demander son chemin.",
    icon: "М",
    words: [
      { ru: "улица", fr: "rue", speak: "улица", example: "эта улица" },
      { ru: "метро", fr: "metro", speak: "метро", example: "где метро?" },
      { ru: "магазин", fr: "magasin", speak: "магазин", example: "магазин там" },
      { ru: "налево", fr: "a gauche", speak: "налево", example: "идите налево" },
      { ru: "направо", fr: "a droite", speak: "направо", example: "идите направо" },
      { ru: "прямо", fr: "tout droit", speak: "прямо", example: "идите прямо" }
    ],
    exercises: [
      { type: "qcm", question: "Que veut dire прямо ?", answers: ["tout droit", "a droite", "magasin"], correct: 0 },
      { type: "fill", question: "Complete : идите ___", answer: "налево" },
      { type: "listen", prompt: "Ecoute. Quelle direction ?", audio: "направо", answers: ["налево", "направо", "прямо"], correct: 1 }
    ]
  },
  {
    id: "accusative",
    title: "14. Accusatif",
    stage: "A2",
    focus: "Dire ce que tu vois, veux ou prends.",
    icon: "В",
    words: [
      { ru: "я вижу дом", fr: "je vois une maison", speak: "я вижу дом", example: "дом ne change pas" },
      { ru: "я вижу маму", fr: "je vois maman", speak: "я вижу маму", example: "мама devient маму" },
      { ru: "я хочу воду", fr: "je veux de l'eau", speak: "я хочу воду", example: "вода devient воду" },
      { ru: "я читаю книгу", fr: "je lis un livre", speak: "я читаю книгу", example: "книга devient книгу" }
    ],
    exercises: [
      { type: "qcm", question: "Apres я вижу, мама devient...", answers: ["маму", "мама", "мамы"], correct: 0 },
      { type: "fill", question: "Complete : я хочу ___", answer: "воду" },
      { type: "qcm", question: "я читаю книгу signifie...", answers: ["je lis un livre", "je vois maman", "je bois de l'eau"], correct: 0 }
    ]
  },
  {
    id: "genitive",
    title: "15. Genitif",
    stage: "A2-B1",
    focus: "Dire absence, possession et quantite.",
    icon: "Н",
    words: [
      { ru: "у меня есть книга", fr: "j'ai un livre", speak: "у меня есть книга", example: "у меня есть..." },
      { ru: "у меня нет книги", fr: "je n'ai pas de livre", speak: "у меня нет книги", example: "нет + genitif" },
      { ru: "много воды", fr: "beaucoup d'eau", speak: "много воды", example: "quantite + genitif" },
      { ru: "чашка чая", fr: "une tasse de the", speak: "чашка чая", example: "de quelque chose" }
    ],
    exercises: [
      { type: "qcm", question: "Apres нет, книга devient...", answers: ["книги", "книга", "книгу"], correct: 0 },
      { type: "fill", question: "Complete : у меня нет ___", answer: "книги" },
      { type: "qcm", question: "чашка чая signifie...", answers: ["une tasse de the", "un the noir", "je veux du the"], correct: 0 }
    ]
  },
  {
    id: "dative-instrumental",
    title: "16. Datif et instrumental",
    stage: "B1",
    focus: "Dire a qui, avec quoi, avec qui.",
    icon: "С",
    words: [
      { ru: "мне нравится", fr: "ca me plait", speak: "мне нравится", example: "мне нравится чай" },
      { ru: "я даю маме", fr: "je donne a maman", speak: "я даю маме", example: "мама devient маме" },
      { ru: "с другом", fr: "avec un ami", speak: "с другом", example: "я иду с другом" },
      { ru: "с водой", fr: "avec de l'eau", speak: "с водой", example: "чай с водой" }
    ],
    exercises: [
      { type: "qcm", question: "Comment dire avec un ami ?", answers: ["с другом", "к другу", "друга"], correct: 0 },
      { type: "fill", question: "Complete : мне ___ чай", answer: "нравится" },
      { type: "qcm", question: "я даю маме signifie...", answers: ["je donne a maman", "je vois maman", "je suis avec maman"], correct: 0 }
    ]
  },
  {
    id: "prepositional",
    title: "17. Locatif",
    stage: "B1",
    focus: "Dire ou l'on est et de quoi on parle.",
    icon: "О",
    words: [
      { ru: "в доме", fr: "dans la maison", speak: "в доме", example: "дом devient доме" },
      { ru: "в школе", fr: "a l'ecole", speak: "в школе", example: "школа devient школе" },
      { ru: "о Москве", fr: "a propos de Moscou", speak: "о Москве", example: "говорить о..." },
      { ru: "на работе", fr: "au travail", speak: "на работе", example: "я на работе" }
    ],
    exercises: [
      { type: "qcm", question: "Comment dire dans la maison ?", answers: ["в доме", "в дом", "дом"], correct: 0 },
      { type: "fill", question: "Complete : я ___ работе", answer: "на" },
      { type: "listen", prompt: "Ecoute. Quelle expression ?", audio: "в школе", answers: ["в доме", "в школе", "на работе"], correct: 1 }
    ]
  },
  {
    id: "movement-verbs",
    title: "18. Verbes de mouvement",
    stage: "B1",
    focus: "Distinguer aller maintenant, souvent, en transport.",
    icon: "И",
    words: [
      { ru: "идти", fr: "aller a pied maintenant", speak: "идти", example: "я иду домой" },
      { ru: "ходить", fr: "aller a pied habituellement", speak: "ходить", example: "я хожу в школу" },
      { ru: "ехать", fr: "aller en transport maintenant", speak: "ехать", example: "я еду в метро" },
      { ru: "ездить", fr: "aller en transport habituellement", speak: "ездить", example: "я езжу на работу" },
      { ru: "приходить", fr: "venir / arriver", speak: "приходить", example: "я прихожу домой" },
      { ru: "уходить", fr: "partir", speak: "уходить", example: "я ухожу" }
    ],
    exercises: [
      { type: "qcm", question: "Aller a pied habituellement ?", answers: ["ходить", "идти", "ехать"], correct: 0 },
      { type: "fill", question: "Complete : я ___ в школу каждый день", answer: "хожу" },
      { type: "qcm", question: "я еду signifie...", answers: ["je vais en transport", "je marche souvent", "je pars"], correct: 0 }
    ]
  },
  {
    id: "aspect",
    title: "19. Aspect verbal",
    stage: "B1-B2",
    focus: "Comprendre processus, resultat et repetition.",
    icon: "З",
    words: [
      { ru: "читать", fr: "lire, processus", speak: "читать", example: "я читаю книгу" },
      { ru: "прочитать", fr: "lire jusqu'au bout", speak: "прочитать", example: "я прочитал книгу" },
      { ru: "делать", fr: "faire, processus", speak: "делать", example: "я делаю урок" },
      { ru: "сделать", fr: "faire, resultat", speak: "сделать", example: "я сделал урок" },
      { ru: "говорить", fr: "parler", speak: "говорить", example: "я говорю по-русски" },
      { ru: "сказать", fr: "dire une fois", speak: "сказать", example: "скажи, пожалуйста" }
    ],
    exercises: [
      { type: "qcm", question: "Quel verbe insiste sur le resultat ?", answers: ["сделать", "делать", "говорить"], correct: 0 },
      { type: "fill", question: "Complete : я ___ книгу до конца", answer: "прочитал" },
      { type: "qcm", question: "сказать veut dire...", answers: ["dire une fois", "parler longtemps", "lire"], correct: 0 }
    ]
  },
  {
    id: "past-future",
    title: "20. Passe et futur",
    stage: "B1",
    focus: "Raconter hier et prevoir demain.",
    icon: "Б",
    words: [
      { ru: "я был дома", fr: "j'etais a la maison", speak: "я был дома", example: "masculin" },
      { ru: "я была дома", fr: "j'etais a la maison", speak: "я была дома", example: "feminin" },
      { ru: "я буду читать", fr: "je lirai / vais lire", speak: "я буду читать", example: "futur imperfectif" },
      { ru: "я прочитаю", fr: "je lirai jusqu'au bout", speak: "я прочитаю", example: "futur perfectif" },
      { ru: "мы говорили", fr: "nous parlions", speak: "мы говорили", example: "passe pluriel" }
    ],
    exercises: [
      { type: "qcm", question: "Futur de processus ?", answers: ["я буду читать", "я был дома", "я прочитал"], correct: 0 },
      { type: "fill", question: "Complete : вчера я ___ дома", answer: "был" },
      { type: "qcm", question: "я прочитаю implique...", answers: ["un resultat", "une habitude", "une absence"], correct: 0 }
    ]
  },
  {
    id: "emotions-opinions",
    title: "21. Emotions et opinions",
    stage: "B1-B2",
    focus: "Exprimer un ressenti, un accord, un doute.",
    icon: "Э",
    words: [
      { ru: "я думаю, что...", fr: "je pense que...", speak: "я думаю что", example: "я думаю, что это важно" },
      { ru: "мне кажется", fr: "il me semble", speak: "мне кажется", example: "мне кажется, это хорошо" },
      { ru: "я согласен", fr: "je suis d'accord", speak: "я согласен", example: "я согласен с тобой" },
      { ru: "я не согласен", fr: "je ne suis pas d'accord", speak: "я не согласен", example: "я не согласен" },
      { ru: "я сомневаюсь", fr: "j'ai des doutes", speak: "я сомневаюсь", example: "я сомневаюсь в этом" },
      { ru: "это важно", fr: "c'est important", speak: "это важно", example: "это очень важно" }
    ],
    exercises: [
      { type: "qcm", question: "Comment dire il me semble ?", answers: ["мне кажется", "я согласен", "это важно"], correct: 0 },
      { type: "fill", question: "Complete : я думаю, ___ это важно", answer: "что" },
      { type: "qcm", question: "я сомневаюсь signifie...", answers: ["j'ai des doutes", "je suis d'accord", "je comprends"], correct: 0 }
    ]
  },
  {
    id: "connectors",
    title: "22. Connecteurs logiques",
    stage: "B2",
    focus: "Relier tes idees pour parler longtemps.",
    icon: "Л",
    words: [
      { ru: "потому что", fr: "parce que", speak: "потому что", example: "я учу русский, потому что мне интересно" },
      { ru: "поэтому", fr: "donc / c'est pourquoi", speak: "поэтому", example: "я устал, поэтому я дома" },
      { ru: "однако", fr: "cependant", speak: "однако", example: "это сложно, однако возможно" },
      { ru: "например", fr: "par exemple", speak: "например", example: "например, сегодня" },
      { ru: "кроме того", fr: "de plus", speak: "кроме того", example: "кроме того, это полезно" },
      { ru: "с одной стороны", fr: "d'un cote", speak: "с одной стороны", example: "с одной стороны, это верно" }
    ],
    exercises: [
      { type: "qcm", question: "Que veut dire однако ?", answers: ["cependant", "par exemple", "parce que"], correct: 0 },
      { type: "fill", question: "Complete : я устал, ___ я дома", answer: "поэтому" },
      { type: "listen", prompt: "Ecoute. Quel connecteur ?", audio: "потому что", answers: ["поэтому", "потому что", "например"], correct: 1 }
    ]
  },
  {
    id: "work-study",
    title: "23. Travail et etudes",
    stage: "B2",
    focus: "Parler de projets, competences, organisation.",
    icon: "Р",
    words: [
      { ru: "опыт", fr: "experience", speak: "опыт", example: "у меня есть опыт" },
      { ru: "навык", fr: "competence", speak: "навык", example: "важный навык" },
      { ru: "задача", fr: "tache", speak: "задача", example: "сложная задача" },
      { ru: "срок", fr: "delai", speak: "срок", example: "короткий срок" },
      { ru: "цель", fr: "objectif", speak: "цель", example: "моя цель" },
      { ru: "развитие", fr: "developpement", speak: "развитие", example: "личное развитие" }
    ],
    exercises: [
      { type: "qcm", question: "Que veut dire цель ?", answers: ["objectif", "delai", "experience"], correct: 0 },
      { type: "fill", question: "Complete : у меня есть ___", answer: "опыт" },
      { type: "listen", prompt: "Ecoute. Quel mot ?", audio: "развитие", answers: ["задача", "развитие", "срок"], correct: 1 }
    ]
  },
  {
    id: "media-society",
    title: "24. Medias et societe",
    stage: "B2-C1",
    focus: "Comprendre des sujets d'actualite.",
    icon: "Ж",
    words: [
      { ru: "общество", fr: "societe", speak: "общество", example: "современное общество" },
      { ru: "новости", fr: "nouvelles / actualite", speak: "новости", example: "читать новости" },
      { ru: "источник", fr: "source", speak: "источник", example: "надежный источник" },
      { ru: "мнение", fr: "opinion", speak: "мнение", example: "мое мнение" },
      { ru: "проблема", fr: "probleme", speak: "проблема", example: "важная проблема" },
      { ru: "решение", fr: "solution / decision", speak: "решение", example: "найти решение" }
    ],
    exercises: [
      { type: "qcm", question: "Que veut dire источник ?", answers: ["source", "opinion", "solution"], correct: 0 },
      { type: "fill", question: "Complete : найти ___", answer: "решение" },
      { type: "qcm", question: "современное общество signifie...", answers: ["la societe moderne", "une source fiable", "mon opinion"], correct: 0 }
    ]
  },
  {
    id: "subordinate-clauses",
    title: "25. Phrases complexes",
    stage: "C1",
    focus: "Nuancer avec que, lorsque, meme si.",
    icon: "Ч",
    words: [
      { ru: "несмотря на то что", fr: "malgre le fait que", speak: "несмотря на то что", example: "несмотря на то что трудно, я продолжаю" },
      { ru: "в то время как", fr: "alors que", speak: "в то время как", example: "он читает, в то время как я пишу" },
      { ru: "если бы", fr: "si seulement / si conditionnel", speak: "если бы", example: "если бы у меня было время" },
      { ru: "чтобы", fr: "pour que / afin de", speak: "чтобы", example: "я учу, чтобы говорить" },
      { ru: "как только", fr: "des que", speak: "как только", example: "как только я приду" }
    ],
    exercises: [
      { type: "qcm", question: "Que veut dire несмотря на то что ?", answers: ["malgre le fait que", "des que", "afin de"], correct: 0 },
      { type: "fill", question: "Complete : я учу, ___ говорить", answer: "чтобы" },
      { type: "qcm", question: "как только signifie...", answers: ["des que", "alors que", "malgre"], correct: 0 }
    ]
  },
  {
    id: "participles",
    title: "26. Participes",
    stage: "C1",
    focus: "Comprendre le russe ecrit plus dense.",
    icon: "Щ",
    words: [
      { ru: "человек, который читает", fr: "l'homme qui lit", speak: "человек который читает", example: "forme simple" },
      { ru: "читающий человек", fr: "l'homme lisant", speak: "читающий человек", example: "participe present actif" },
      { ru: "прочитанная книга", fr: "le livre lu", speak: "прочитанная книга", example: "participe passe passif" },
      { ru: "написанное письмо", fr: "la lettre ecrite", speak: "написанное письмо", example: "texte plus formel" }
    ],
    exercises: [
      { type: "qcm", question: "читающий человек veut dire...", answers: ["l'homme lisant", "le livre lu", "la lettre ecrite"], correct: 0 },
      { type: "fill", question: "Complete : ___ книга", answer: "прочитанная" },
      { type: "qcm", question: "написанное письмо signifie...", answers: ["la lettre ecrite", "l'homme qui lit", "le livre ouvert"], correct: 0 }
    ]
  },
  {
    id: "formal-style",
    title: "27. Style formel",
    stage: "C1",
    focus: "Parler et ecrire de maniere precise.",
    icon: "Ф",
    words: [
      { ru: "следовательно", fr: "par consequent", speak: "следовательно", example: "следовательно, это важно" },
      { ru: "в частности", fr: "en particulier", speak: "в частности", example: "в частности, этот вопрос" },
      { ru: "согласно", fr: "selon", speak: "согласно", example: "согласно источнику" },
      { ru: "в связи с этим", fr: "en lien avec cela", speak: "в связи с этим", example: "в связи с этим нужно..." },
      { ru: "предположим", fr: "supposons", speak: "предположим", example: "предположим, что это верно" }
    ],
    exercises: [
      { type: "qcm", question: "Que veut dire следовательно ?", answers: ["par consequent", "selon", "supposons"], correct: 0 },
      { type: "fill", question: "Complete : ___ источнику", answer: "согласно" },
      { type: "qcm", question: "в частности signifie...", answers: ["en particulier", "malgre cela", "a gauche"], correct: 0 }
    ]
  },
  {
    id: "debate",
    title: "28. Debattre en russe",
    stage: "C1",
    focus: "Defendre une idee sans parler trop simplement.",
    icon: "Ю",
    words: [
      { ru: "с моей точки зрения", fr: "de mon point de vue", speak: "с моей точки зрения", example: "с моей точки зрения, это полезно" },
      { ru: "я бы сказал, что", fr: "je dirais que", speak: "я бы сказал что", example: "я бы сказал, что это сложно" },
      { ru: "это спорный вопрос", fr: "c'est une question controversee", speak: "это спорный вопрос", example: "это спорный вопрос" },
      { ru: "нельзя отрицать", fr: "on ne peut pas nier", speak: "нельзя отрицать", example: "нельзя отрицать, что..." },
      { ru: "стоит учитывать", fr: "il faut prendre en compte", speak: "стоит учитывать", example: "стоит учитывать контекст" }
    ],
    exercises: [
      { type: "qcm", question: "Comment dire de mon point de vue ?", answers: ["с моей точки зрения", "нельзя отрицать", "стоит учитывать"], correct: 0 },
      { type: "fill", question: "Complete : это ___ вопрос", answer: "спорный" },
      { type: "qcm", question: "стоит учитывать signifie...", answers: ["il faut prendre en compte", "on ne peut pas nier", "je suis fatigue"], correct: 0 }
    ]
  },
  {
    id: "idioms",
    title: "29. Expressions naturelles",
    stage: "C1",
    focus: "Sonner moins scolaire.",
    icon: "Ы",
    words: [
      { ru: "честно говоря", fr: "honnetement", speak: "честно говоря", example: "честно говоря, я не знаю" },
      { ru: "дело в том, что", fr: "le fait est que", speak: "дело в том что", example: "дело в том, что времени мало" },
      { ru: "всё равно", fr: "quand meme / peu importe", speak: "всё равно", example: "мне всё равно" },
      { ru: "по крайней мере", fr: "au moins", speak: "по крайней мере", example: "по крайней мере, попробуй" },
      { ru: "так или иначе", fr: "d'une maniere ou d'une autre", speak: "так или иначе", example: "так или иначе, мы продолжим" }
    ],
    exercises: [
      { type: "qcm", question: "Que veut dire честно говоря ?", answers: ["honnetement", "au moins", "peu importe"], correct: 0 },
      { type: "fill", question: "Complete : дело в том, ___ времени мало", answer: "что" },
      { type: "qcm", question: "так или иначе signifie...", answers: ["d'une maniere ou d'une autre", "selon la source", "a droite"], correct: 0 }
    ]
  },
  {
    id: "letters",
    title: "30. Lire ce que tu connais",
    stage: "Lecture",
    focus: "Les lettres arrivent apres les sons.",
    icon: "Б",
    words: [
      { ru: "А а", fr: "a", speak: "а", example: "мама" },
      { ru: "Д д", fr: "d", speak: "дэ", example: "дом" },
      { ru: "В в", fr: "v", speak: "вэ", example: "вода" },
      { ru: "Х х", fr: "kh aspire", speak: "ха", example: "хлеб" },
      { ru: "Ч ч", fr: "tch", speak: "че", example: "чай" },
      { ru: "Я я", fr: "ya", speak: "я", example: "я" }
    ],
    exercises: [
      { type: "qcm", question: "Quelle lettre fait le son v ?", answers: ["В", "Д", "Х"], correct: 0 },
      { type: "qcm", question: "Dans вода, quelle lettre fait v ?", answers: ["в", "д", "а"], correct: 0 },
      { type: "qcm", question: "Quelle lettre commence чай ?", answers: ["Ч", "Х", "Ц"], correct: 0 },
      { type: "repeat", prompt: "Ecoute puis dis : дом", audio: "дом", answer: "дом" }
    ]
  }
];

const STORAGE_KEY = "russki-natural-v3";
const today = () => new Date().toISOString().slice(0, 10);
const normalize = (value) => value.trim().toLocaleLowerCase("ru-RU");
const allExercises = lessons.flatMap((lesson) =>
  lesson.exercises.map((exercise, index) => ({ ...exercise, lessonId: lesson.id, id: `${lesson.id}-${index}` }))
);

let state = loadState();
let currentExercise = null;
let activeLessonId = "sounds";
let activeTool = "search";
let flashcardIndex = 0;
let searchQuery = "";

function loadState() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    const parsed = JSON.parse(saved);
    return { known: {}, difficult: {}, ...parsed };
  }
  return {
    lastActive: "",
    completed: {},
    mistakes: [],
    srs: {},
    known: {},
    difficult: {},
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
  renderAlphabet();
  renderTools();
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

function renderAlphabet() {
  const container = document.getElementById("alphabetGrid");
  if (!container) return;
  container.innerHTML = alphabet
    .map(
      (letter) => `
        <button class="letter-card" type="button" data-speak="${letter.speak}" aria-label="Ecouter ${letter.upper}">
          <strong>${letter.upper} ${letter.lower}</strong>
          <span>${letter.sound}</span>
          <small>${letter.example}</small>
        </button>
      `
    )
    .join("");
}

function getAllWords() {
  return lessons.flatMap((lesson) =>
    lesson.words.map((word, index) => ({
      ...word,
      id: `${lesson.id}-word-${index}`,
      lessonId: lesson.id,
      lessonTitle: lesson.title,
      stage: lesson.stage
    }))
  );
}

function renderTools() {
  const container = document.getElementById("toolContent");
  if (!container) return;
  document.querySelectorAll(".tool-tab").forEach((tab) => tab.classList.toggle("active", tab.dataset.tool === activeTool));
  if (activeTool === "search") renderSearch(container);
  if (activeTool === "flashcards") renderFlashcards(container);
  if (activeTool === "dialogs") renderDialogues(container);
  if (activeTool === "grammar") renderGrammar(container);
}

function renderSearch(container) {
  const query = normalize(searchQuery);
  const words = getAllWords();
  const results = query
    ? words.filter((word) =>
        normalize(`${word.ru} ${word.fr} ${word.example} ${word.lessonTitle}`).includes(query)
      )
    : words.slice(0, 12);
  container.innerHTML = `
    <input class="search-input" id="searchInput" value="${searchQuery}" placeholder="Cherche en francais ou en russe" autocomplete="off" />
    <div class="tool-list">
      ${results
        .map(
          (word, index) => `
            <article class="tool-card">
              <div class="word-line">
                <div>
                  <strong>${word.ru}</strong>
                  <span>${word.fr}</span>
                  <p class="example">${word.example} · ${word.lessonTitle}</p>
                </div>
                <button class="audio-button" type="button" data-speak="${word.speak}" aria-label="Ecouter ${word.ru}">▶</button>
              </div>
            </article>
          `
        )
        .join("")}
    </div>
  `;
  document.getElementById("searchInput").addEventListener("input", (event) => {
    searchQuery = event.target.value;
    renderTools();
    const input = document.getElementById("searchInput");
    input.focus();
    input.setSelectionRange(input.value.length, input.value.length);
  });
}

function renderFlashcards(container) {
  const words = getAllWords();
  const word = words[flashcardIndex % words.length];
  const known = state.known[word.id];
  const difficult = state.difficult[word.id];
  container.innerHTML = `
    <article class="tool-card flashcard">
      <div>
        <strong>${word.ru}</strong>
        <span>${word.fr}</span>
        <p class="example">${word.example}</p>
        <p class="example">${word.lessonTitle}${known ? " · connu" : ""}${difficult ? " · a revoir" : ""}</p>
        <button class="audio-button" type="button" data-speak="${word.speak}" aria-label="Ecouter ${word.ru}">▶</button>
      </div>
    </article>
    <div class="flash-actions">
      <button class="memory-button unknown" type="button" data-memory="unknown" data-word="${word.id}">Je ne connais pas</button>
      <button class="memory-button known" type="button" data-memory="known" data-word="${word.id}">Je connais</button>
    </div>
    <button class="next-button" type="button" id="nextFlashcard">Carte suivante</button>
  `;
}

function renderDialogues(container) {
  container.innerHTML = `
    <div class="tool-list">
      ${dialogues
        .map(
          (dialogue) => `
            <article class="dialogue-card">
              <h3>${dialogue.title}</h3>
              <span class="pill">${dialogue.level}</span>
              ${dialogue.lines
                .map(
                  (line) => `
                    <div class="dialogue-line">
                      <div>
                        <strong>${line.ru}</strong>
                        <span>${line.fr}</span>
                      </div>
                      <button class="audio-button" type="button" data-speak="${line.ru}" aria-label="Ecouter">▶</button>
                    </div>
                  `
                )
                .join("")}
            </article>
          `
        )
        .join("")}
    </div>
  `;
}

function renderGrammar(container) {
  container.innerHTML = `
    <div class="grammar-grid">
      ${grammarSheets
        .map(
          (sheet) => `
            <article class="grammar-card">
              <h3>${sheet.title}</h3>
              <span class="pill">${sheet.level}</span>
              <p class="soft-text">${sheet.rule}</p>
              ${sheet.examples
                .map(
                  (example) => `
                    <div class="dialogue-line">
                      <strong>${example}</strong>
                      <button class="audio-button" type="button" data-speak="${example}" aria-label="Ecouter ${example}">▶</button>
                    </div>
                  `
                )
                .join("")}
            </article>
          `
        )
        .join("")}
    </div>
  `;
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
          (word, index) => `
            <div class="word-line">
              <div>
                <strong>${word.ru}</strong>
                <span>${word.fr}</span>
                <p class="example">${word.example}</p>
              </div>
              <button class="audio-button" type="button" data-speak="${word.speak}" aria-label="Ecouter ${word.ru}">▶</button>
              <div class="memory-actions">
                <button class="memory-button unknown" type="button" data-memory="unknown" data-word="${lesson.id}-word-${index}">Je ne connais pas</button>
                <button class="memory-button known" type="button" data-memory="known" data-word="${lesson.id}-word-${index}">Je connais</button>
              </div>
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

function markMemory(wordId, status) {
  if (status === "known") {
    state.known[wordId] = true;
    delete state.difficult[wordId];
    showToast("Marque comme connu.");
  } else {
    state.difficult[wordId] = true;
    delete state.known[wordId];
    showToast("Ajoute aux points a reprendre.");
  }
  saveState();
  render();
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
  if (target.dataset.tool) {
    activeTool = target.dataset.tool;
    renderTools();
  }
  if (target.dataset.memory) {
    markMemory(target.dataset.word, target.dataset.memory);
  }
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
  if (target.id === "nextFlashcard") {
    flashcardIndex += 1;
    renderTools();
  }
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

document.addEventListener(
  "touchmove",
  (event) => {
    if (event.touches.length > 1) event.preventDefault();
  },
  { passive: false }
);

document.addEventListener("gesturestart", (event) => {
  event.preventDefault();
});

let lastTouchX = 0;
let lastTouchY = 0;

document.addEventListener(
  "touchstart",
  (event) => {
    if (!event.touches.length) return;
    lastTouchX = event.touches[0].clientX;
    lastTouchY = event.touches[0].clientY;
  },
  { passive: true }
);

document.addEventListener(
  "touchmove",
  (event) => {
    if (!event.touches.length || event.target.closest(".tabs")) return;
    const deltaX = Math.abs(event.touches[0].clientX - lastTouchX);
    const deltaY = Math.abs(event.touches[0].clientY - lastTouchY);
    if (deltaX > deltaY) event.preventDefault();
  },
  { passive: false }
);

render();
renderLessonWords(activeLessonId);
