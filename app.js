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

const immersionStories = [
  {
    title: "Утро Анны",
    level: "A1",
    image: "☕",
    ru: "Анна дома. Сейчас утро. Она пьёт чай и читает книгу. Потом Анна идёт на работу.",
    fr: "Anna est a la maison. C'est le matin. Elle boit du the et lit un livre. Ensuite Anna va au travail."
  },
  {
    title: "В метро",
    level: "A2",
    image: "🚇",
    ru: "Иван едет в метро. Он слушает русскую речь и понимает не всё, но каждый день понимает больше.",
    fr: "Ivan prend le metro. Il ecoute du russe et ne comprend pas tout, mais chaque jour il comprend davantage."
  },
  {
    title: "Планы на завтра",
    level: "B1",
    image: "📅",
    ru: "Завтра мы встречаемся с другом. Сначала мы пойдём в кафе, а потом будем говорить о наших планах.",
    fr: "Demain nous retrouvons un ami. D'abord nous irons au cafe, puis nous parlerons de nos projets."
  },
  {
    title: "Спорный вопрос",
    level: "B2-C1",
    image: "💬",
    ru: "С моей точки зрения, это спорный вопрос. Нельзя отрицать, что проблема сложная, однако решение возможно, если учитывать контекст.",
    fr: "De mon point de vue, c'est une question controversee. On ne peut pas nier que le probleme est complexe, cependant une solution est possible si l'on prend le contexte en compte."
  },
  {
    title: "Семья Ивана",
    level: "A1",
    image: "👨‍👩‍👧‍👦",
    ru: "Иван дома. С ним мама, папа и сестра. Они едят вместе. Бабушка готовит суп. Иван говорит: — Спасибо, бабушка!",
    fr: "Ivan est à la maison. Sa mère, son père et sa sœur sont avec lui. Ils mangent ensemble. La grand-mère fait de la soupe. Ivan dit : — Merci grand-mère !"
  },
  {
    title: "В магазине",
    level: "A1",
    image: "🛒",
    ru: "Анна идёт в магазин. Она хочет купить хлеб и молоко. — Сколько стоит молоко? — Пятьдесят рублей. — Хорошо, возьму.",
    fr: "Anna va au magasin. Elle veut acheter du pain et du lait. — Combien coûte le lait ? — Cinquante roubles. — Bien, je le prends."
  },
  {
    title: "Погода сегодня",
    level: "A1",
    image: "🌧️",
    ru: "Сегодня холодно. Идёт дождь. Анна надевает куртку и шапку. Она берёт зонт. На улице ветер. Дома тепло и хорошо.",
    fr: "Aujourd'hui il fait froid. Il pleut. Anna met sa veste et son bonnet. Elle prend un parapluie. Dehors il y a du vent. À la maison il fait chaud et c'est bien."
  },
  {
    title: "У врача",
    level: "A1-A2",
    image: "🏥",
    ru: "Иван болен. У него болит горло и температура. Он идёт к врачу. Врач говорит: — Пейте лекарство три раза в день. Иван покупает лекарство в аптеке.",
    fr: "Ivan est malade. Il a mal à la gorge et de la fièvre. Il va chez le médecin. Le médecin dit : — Prenez le médicament trois fois par jour. Ivan achète le médicament à la pharmacie."
  },
  {
    title: "Новый друг",
    level: "A1",
    image: "🤝",
    ru: "Привет! Меня зовут Саша. Я студент. Я учусь в Москве. Откуда ты? — Я из Франции. Я изучаю русский язык. — Здорово! Будем друзьями.",
    fr: "Bonjour ! Je m'appelle Sacha. Je suis étudiant. J'étudie à Moscou. D'où es-tu ? — Je viens de France. J'apprends le russe. — Super ! Soyons amis."
  },
  {
    title: "Дома вечером",
    level: "A1",
    image: "🏠",
    ru: "Вечером Анна дома. Она ест суп и смотрит телевизор. Потом она читает книгу. В десять часов она ложится спать. Завтра опять работа.",
    fr: "Le soir Anna est à la maison. Elle mange de la soupe et regarde la télévision. Ensuite elle lit un livre. À dix heures elle va se coucher. Demain c'est encore le travail."
  },
  {
    title: "На рынке",
    level: "A2",
    image: "🥦",
    ru: "Иван идёт на рынок. Там много фруктов и овощей. Он покупает яблоки, картошку и лук. — Дайте мне килограмм яблок. — Пожалуйста. С вас сто рублей.",
    fr: "Ivan va au marché. Il y a beaucoup de fruits et légumes. Il achète des pommes, des pommes de terre et des oignons. — Donnez-moi un kilo de pommes. — Voilà. Ça vous fait cent roubles."
  },
  {
    title: "Поездка на поезде",
    level: "A2",
    image: "🚆",
    ru: "Завтра Анна едет в Петербург. Она покупает билет на поезд. Поезд отправляется в восемь утра. В дороге она слушает музыку и смотрит в окно.",
    fr: "Demain Anna part à Saint-Pétersbourg. Elle achète un billet de train. Le train part à huit heures du matin. Pendant le trajet elle écoute de la musique et regarde par la fenêtre."
  },
  {
    title: "Мой день",
    level: "A2",
    image: "🌅",
    ru: "Я встаю в семь утра. Я пью кофе и ем яйца. Потом я иду на работу на автобусе. На работе я говорю с коллегами. Вечером я иду домой и отдыхаю.",
    fr: "Je me lève à sept heures du matin. Je bois du café et mange des œufs. Ensuite je vais au travail en bus. Au travail je parle avec mes collègues. Le soir je rentre à la maison et me repose."
  },
  {
    title: "В кафе с другом",
    level: "A2",
    image: "☕",
    ru: "Иван встречает друга в кафе. Они заказывают кофе и пирожки. — Как дела? — Всё хорошо. Много работы. А у тебя? — Я устал. Хочу в отпуск. — Скоро лето!",
    fr: "Ivan retrouve un ami dans un café. Ils commandent un café et des petits gâteaux. — Comment ça va ? — Tout va bien. Beaucoup de travail. Et toi ? — Je suis fatigué. Je veux des vacances. — L'été arrive bientôt !"
  },
  {
    title: "Учить русский",
    level: "A2",
    image: "📖",
    ru: "Каждый день я учу новые русские слова. Утром я слушаю подкаст. Вечером я читаю простые тексты. Иногда я говорю сам с собой по-русски. Это трудно, но интересно.",
    fr: "Chaque jour j'apprends de nouveaux mots russes. Le matin j'écoute un podcast. Le soir je lis des textes simples. Parfois je parle russe tout seul. C'est difficile, mais intéressant."
  }
];

const speakingPrompts = [
  { title: "Repete lentement", ru: "я хочу воду", fr: "je veux de l'eau" },
  { title: "Repete naturellement", ru: "извините, где метро?", fr: "excusez-moi, ou est le metro ?" },
  { title: "Shadowing", ru: "я думаю, что это важно", fr: "je pense que c'est important" },
  { title: "C1 nuance", ru: "с моей точки зрения, стоит учитывать контекст", fr: "de mon point de vue, il faut prendre le contexte en compte" }
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
  },
  {
    id: "family",
    title: "31. La famille",
    stage: "A1",
    focus: "Nommer les personnes de ta famille.",
    icon: "С",
    words: [
      { ru: "мама", fr: "mère", speak: "мама", example: "моя мама дома" },
      { ru: "папа", fr: "père", speak: "папа", example: "папа работает" },
      { ru: "брат", fr: "frère", speak: "брат", example: "мой брат тут" },
      { ru: "сестра", fr: "sœur", speak: "сестра", example: "моя сестра читает" },
      { ru: "бабушка", fr: "grand-mère", speak: "бабушка", example: "бабушка готовит" },
      { ru: "дедушка", fr: "grand-père", speak: "дедушка", example: "дедушка отдыхает" },
      { ru: "сын", fr: "fils", speak: "сын", example: "мой сын маленький" },
      { ru: "дочь", fr: "fille", speak: "дочь", example: "моя дочь учится" },
      { ru: "муж", fr: "mari", speak: "муж", example: "мой муж работает" },
      { ru: "жена", fr: "épouse", speak: "жена", example: "моя жена врач" }
    ],
    exercises: [
      { type: "qcm", question: "Que veut dire бабушка ?", answers: ["grand-mère", "sœur", "fille"], correct: 0 },
      { type: "listen", prompt: "Ecoute. Qui entends-tu ?", audio: "брат", answers: ["сестра", "брат", "сын"], correct: 1 },
      { type: "qcm", question: "Comment dit-on mari ?", answers: ["муж", "сын", "дедушка"], correct: 0 },
      { type: "fill", question: "Complete : моя ___ дома (mère)", answer: "мама" }
    ]
  },
  {
    id: "body",
    title: "32. Le corps",
    stage: "A1",
    focus: "Nommer les parties du corps.",
    icon: "Т",
    words: [
      { ru: "голова", fr: "tête", speak: "голова", example: "у меня болит голова" },
      { ru: "рука", fr: "main / bras", speak: "рука", example: "моя рука тут" },
      { ru: "нога", fr: "pied / jambe", speak: "нога", example: "болит нога" },
      { ru: "глаз", fr: "œil (глаза = yeux)", speak: "глаз", example: "у меня голубые глаза" },
      { ru: "нос", fr: "nez", speak: "нос", example: "у меня болит нос" },
      { ru: "рот", fr: "bouche", speak: "рот", example: "открой рот" },
      { ru: "ухо", fr: "oreille", speak: "ухо", example: "болит ухо" },
      { ru: "спина", fr: "dos", speak: "спина", example: "болит спина" },
      { ru: "живот", fr: "ventre", speak: "живот", example: "болит живот" },
      { ru: "сердце", fr: "cœur", speak: "сердце", example: "моё сердце" }
    ],
    exercises: [
      { type: "qcm", question: "Que veut dire голова ?", answers: ["tête", "main", "dos"], correct: 0 },
      { type: "listen", prompt: "Ecoute. Quelle partie du corps ?", audio: "нога", answers: ["рука", "нога", "нос"], correct: 1 },
      { type: "fill", question: "Complete : у меня болит ___ (tête)", answer: "голова" },
      { type: "qcm", question: "Comment dit-on oreille ?", answers: ["ухо", "рот", "спина"], correct: 0 }
    ]
  },
  {
    id: "food",
    title: "33. La nourriture",
    stage: "A1",
    focus: "Nommer ce que tu manges et bois.",
    icon: "Е",
    words: [
      { ru: "еда", fr: "nourriture / repas", speak: "еда", example: "хочу еду" },
      { ru: "молоко", fr: "lait", speak: "молоко", example: "я пью молоко" },
      { ru: "мясо", fr: "viande", speak: "мясо", example: "я ем мясо" },
      { ru: "рыба", fr: "poisson", speak: "рыба", example: "я люблю рыбу" },
      { ru: "яйцо", fr: "œuf", speak: "яйцо", example: "одно яйцо" },
      { ru: "суп", fr: "soupe", speak: "суп", example: "горячий суп" },
      { ru: "рис", fr: "riz", speak: "рис", example: "я ем рис" },
      { ru: "картошка", fr: "pomme de terre", speak: "картошка", example: "жареная картошка" },
      { ru: "яблоко", fr: "pomme", speak: "яблоко", example: "красное яблоко" },
      { ru: "кофе", fr: "café", speak: "кофе", example: "чёрный кофе" }
    ],
    exercises: [
      { type: "qcm", question: "Que veut dire рыба ?", answers: ["poisson", "viande", "lait"], correct: 0 },
      { type: "listen", prompt: "Ecoute. Qu'est-ce que c'est ?", audio: "яблоко", answers: ["рис", "яблоко", "яйцо"], correct: 1 },
      { type: "qcm", question: "Comment dit-on soupe ?", answers: ["суп", "еда", "мясо"], correct: 0 },
      { type: "fill", question: "Complete : я пью ___ (lait)", answer: "молоко" }
    ]
  },
  {
    id: "emotions",
    title: "34. Les émotions",
    stage: "A1-A2",
    focus: "Exprimer ce que tu ressens.",
    icon: "Р",
    words: [
      { ru: "я рад", fr: "je suis content (masc.)", speak: "я рад", example: "я рад тебя видеть" },
      { ru: "я рада", fr: "je suis contente (fém.)", speak: "я рада", example: "я так рада!" },
      { ru: "грустно", fr: "c'est triste / je suis triste", speak: "грустно", example: "мне грустно" },
      { ru: "устал", fr: "fatigué (masc.)", speak: "устал", example: "я очень устал" },
      { ru: "устала", fr: "fatiguée (fém.)", speak: "устала", example: "я устала" },
      { ru: "боюсь", fr: "j'ai peur", speak: "боюсь", example: "я боюсь" },
      { ru: "злой", fr: "en colère", speak: "злой", example: "я не злой" },
      { ru: "удивлён", fr: "surpris (masc.)", speak: "удивлён", example: "я удивлён" },
      { ru: "скучно", fr: "c'est ennuyeux", speak: "скучно", example: "мне скучно" },
      { ru: "хорошо", fr: "bien / ça va", speak: "хорошо", example: "мне хорошо" }
    ],
    exercises: [
      { type: "qcm", question: "Comment dire je suis content ?", answers: ["я рад", "я злой", "мне скучно"], correct: 0 },
      { type: "listen", prompt: "Ecoute. Quelle émotion ?", audio: "грустно", answers: ["хорошо", "злой", "грустно"], correct: 2 },
      { type: "fill", question: "Complete : я ___ (fatigué, masc.)", answer: "устал" },
      { type: "qcm", question: "Que veut dire боюсь ?", answers: ["j'ai peur", "je suis triste", "je suis surpris"], correct: 0 }
    ]
  },
  {
    id: "weather",
    title: "35. La météo",
    stage: "A1-A2",
    focus: "Parler du temps qu'il fait.",
    icon: "П",
    words: [
      { ru: "погода", fr: "météo / temps", speak: "погода", example: "какая погода?" },
      { ru: "солнце", fr: "soleil", speak: "солнце", example: "светит солнце" },
      { ru: "дождь", fr: "pluie", speak: "дождь", example: "идёт дождь" },
      { ru: "снег", fr: "neige", speak: "снег", example: "идёт снег" },
      { ru: "ветер", fr: "vent", speak: "ветер", example: "сильный ветер" },
      { ru: "тепло", fr: "il fait chaud / c'est chaud", speak: "тепло", example: "сегодня тепло" },
      { ru: "облако", fr: "nuage", speak: "облако", example: "много облаков" },
      { ru: "лето", fr: "été", speak: "лето", example: "я люблю лето" },
      { ru: "зима", fr: "hiver", speak: "зима", example: "зима холодная" },
      { ru: "весна", fr: "printemps", speak: "весна", example: "красивая весна" }
    ],
    exercises: [
      { type: "qcm", question: "Que veut dire дождь ?", answers: ["pluie", "neige", "vent"], correct: 0 },
      { type: "listen", prompt: "Ecoute. Quel temps fait-il ?", audio: "снег", answers: ["дождь", "снег", "ветер"], correct: 1 },
      { type: "fill", question: "Complete : сегодня ___ (il fait chaud)", answer: "тепло" },
      { type: "qcm", question: "Comment dire hiver ?", answers: ["зима", "лето", "весна"], correct: 0 }
    ]
  },
  {
    id: "house",
    title: "36. La maison",
    stage: "A1-A2",
    focus: "Nommer les pièces et objets chez toi.",
    icon: "К",
    words: [
      { ru: "квартира", fr: "appartement", speak: "квартира", example: "моя квартира маленькая" },
      { ru: "комната", fr: "pièce / chambre", speak: "комната", example: "в этой комнате" },
      { ru: "кухня", fr: "cuisine", speak: "кухня", example: "я на кухне" },
      { ru: "ванная", fr: "salle de bain", speak: "ванная", example: "ванная там" },
      { ru: "спальня", fr: "chambre à coucher", speak: "спальня", example: "я сплю в спальне" },
      { ru: "кровать", fr: "lit", speak: "кровать", example: "я лежу на кровати" },
      { ru: "диван", fr: "canapé", speak: "диван", example: "он сидит на диване" },
      { ru: "окно", fr: "fenêtre", speak: "окно", example: "смотрю в окно" },
      { ru: "холодильник", fr: "réfrigérateur", speak: "холодильник", example: "в холодильнике молоко" },
      { ru: "лампа", fr: "lampe", speak: "лампа", example: "включи лампу" }
    ],
    exercises: [
      { type: "qcm", question: "Que veut dire кухня ?", answers: ["cuisine", "salle de bain", "chambre"], correct: 0 },
      { type: "listen", prompt: "Ecoute. Quelle pièce ?", audio: "спальня", answers: ["кухня", "ванная", "спальня"], correct: 2 },
      { type: "fill", question: "Complete : моя ___ маленькая (appartement)", answer: "квартира" },
      { type: "qcm", question: "Comment dire lit ?", answers: ["кровать", "диван", "комната"], correct: 0 }
    ]
  },
  {
    id: "transport",
    title: "37. Les transports",
    stage: "A1-A2",
    focus: "Se déplacer et comprendre les trajets.",
    icon: "А",
    words: [
      { ru: "машина", fr: "voiture", speak: "машина", example: "я еду на машине" },
      { ru: "автобус", fr: "bus", speak: "автобус", example: "я еду на автобусе" },
      { ru: "поезд", fr: "train", speak: "поезд", example: "поезд в Москву" },
      { ru: "самолёт", fr: "avion", speak: "самолёт", example: "я лечу на самолёте" },
      { ru: "такси", fr: "taxi", speak: "такси", example: "вызови такси" },
      { ru: "велосипед", fr: "vélo", speak: "велосипед", example: "еду на велосипеде" },
      { ru: "остановка", fr: "arrêt de bus", speak: "остановка", example: "где остановка?" },
      { ru: "билет", fr: "billet / ticket", speak: "билет", example: "один билет, пожалуйста" },
      { ru: "вокзал", fr: "gare", speak: "вокзал", example: "где вокзал?" },
      { ru: "аэропорт", fr: "aéroport", speak: "аэропорт", example: "я в аэропорту" }
    ],
    exercises: [
      { type: "qcm", question: "Que veut dire поезд ?", answers: ["train", "avion", "bus"], correct: 0 },
      { type: "listen", prompt: "Ecoute. Quel transport ?", audio: "самолёт", answers: ["автобус", "машина", "самолёт"], correct: 2 },
      { type: "fill", question: "Complete : один ___, пожалуйста (billet)", answer: "билет" },
      { type: "qcm", question: "Comment dire gare ?", answers: ["вокзал", "аэропорт", "остановка"], correct: 0 }
    ]
  },
  {
    id: "health",
    title: "38. La santé",
    stage: "A1-A2",
    focus: "Dire où tu as mal et aller chez le médecin.",
    icon: "В",
    words: [
      { ru: "болит", fr: "ça fait mal", speak: "болит", example: "у меня болит голова" },
      { ru: "больной", fr: "malade", speak: "больной", example: "я больной" },
      { ru: "врач", fr: "médecin", speak: "врач", example: "мне нужен врач" },
      { ru: "аптека", fr: "pharmacie", speak: "аптека", example: "где аптека?" },
      { ru: "лекарство", fr: "médicament", speak: "лекарство", example: "дайте лекарство" },
      { ru: "температура", fr: "fièvre / température", speak: "температура", example: "у меня температура" },
      { ru: "горло", fr: "gorge", speak: "горло", example: "болит горло" },
      { ru: "кашель", fr: "toux", speak: "кашель", example: "у меня кашель" },
      { ru: "скорая", fr: "ambulance", speak: "скорая", example: "вызовите скорую" },
      { ru: "мне плохо", fr: "je ne me sens pas bien", speak: "мне плохо", example: "мне очень плохо" }
    ],
    exercises: [
      { type: "qcm", question: "Que veut dire врач ?", answers: ["médecin", "pharmacie", "médicament"], correct: 0 },
      { type: "listen", prompt: "Ecoute. De quoi s'agit-il ?", audio: "аптека", answers: ["врач", "аптека", "скорая"], correct: 1 },
      { type: "fill", question: "Complete : у меня болит ___ (gorge)", answer: "горло" },
      { type: "qcm", question: "Comment dire j'ai de la fièvre ?", answers: ["у меня температура", "мне плохо", "болит горло"], correct: 0 }
    ]
  },
  {
    id: "clothing",
    title: "39. Les vêtements",
    stage: "A1-A2",
    focus: "Décrire ce que tu portes.",
    icon: "О",
    words: [
      { ru: "рубашка", fr: "chemise", speak: "рубашка", example: "белая рубашка" },
      { ru: "брюки", fr: "pantalon", speak: "брюки", example: "чёрные брюки" },
      { ru: "платье", fr: "robe", speak: "платье", example: "красное платье" },
      { ru: "куртка", fr: "veste / manteau", speak: "куртка", example: "тёплая куртка" },
      { ru: "обувь", fr: "chaussures", speak: "обувь", example: "новая обувь" },
      { ru: "шапка", fr: "bonnet / chapeau", speak: "шапка", example: "тёплая шапка" },
      { ru: "носки", fr: "chaussettes", speak: "носки", example: "белые носки" },
      { ru: "надевать", fr: "mettre / enfiler", speak: "надевать", example: "я надеваю куртку" },
      { ru: "снимать", fr: "enlever", speak: "снимать", example: "я снимаю куртку" },
      { ru: "размер", fr: "taille / pointure", speak: "размер", example: "какой у вас размер?" }
    ],
    exercises: [
      { type: "qcm", question: "Que veut dire куртка ?", answers: ["veste", "robe", "pantalon"], correct: 0 },
      { type: "listen", prompt: "Ecoute. Quel vêtement ?", audio: "платье", answers: ["рубашка", "платье", "брюки"], correct: 1 },
      { type: "fill", question: "Complete : белая ___ (chemise)", answer: "рубашка" },
      { type: "qcm", question: "Comment dire chaussures ?", answers: ["обувь", "шапка", "носки"], correct: 0 }
    ]
  },
  {
    id: "professions",
    title: "40. Les professions",
    stage: "A1-A2",
    focus: "Parler des métiers.",
    icon: "П",
    words: [
      { ru: "студент", fr: "étudiant(e)", speak: "студент", example: "я студент" },
      { ru: "учитель", fr: "enseignant(e)", speak: "учитель", example: "она учитель" },
      { ru: "повар", fr: "cuisinier / chef", speak: "повар", example: "хороший повар" },
      { ru: "продавец", fr: "vendeur / vendeuse", speak: "продавец", example: "продавец в магазине" },
      { ru: "инженер", fr: "ingénieur", speak: "инженер", example: "он инженер" },
      { ru: "журналист", fr: "journaliste", speak: "журналист", example: "она журналист" },
      { ru: "программист", fr: "développeur / programmeur", speak: "программист", example: "я программист" },
      { ru: "работать", fr: "travailler", speak: "работать", example: "я работаю в офисе" },
      { ru: "учиться", fr: "étudier / apprendre", speak: "учиться", example: "я учусь в университете" },
      { ru: "офис", fr: "bureau / open space", speak: "офис", example: "я работаю в офисе" }
    ],
    exercises: [
      { type: "qcm", question: "Que veut dire учитель ?", answers: ["enseignant", "médecin", "cuisinier"], correct: 0 },
      { type: "listen", prompt: "Ecoute. Quelle profession ?", audio: "повар", answers: ["студент", "повар", "врач"], correct: 1 },
      { type: "fill", question: "Complete : я ___ в офисе (travailler, je...)", answer: "работаю" },
      { type: "qcm", question: "Comment dire développeur ?", answers: ["программист", "инженер", "журналист"], correct: 0 }
    ]
  },
  {
    id: "nature",
    title: "41. La nature",
    stage: "A1-A2",
    focus: "Parler du monde naturel autour de toi.",
    icon: "Л",
    words: [
      { ru: "дерево", fr: "arbre", speak: "дерево", example: "высокое дерево" },
      { ru: "цветок", fr: "fleur", speak: "цветок", example: "красивый цветок" },
      { ru: "море", fr: "mer", speak: "море", example: "я у моря" },
      { ru: "река", fr: "rivière / fleuve", speak: "река", example: "большая река" },
      { ru: "гора", fr: "montagne", speak: "гора", example: "высокая гора" },
      { ru: "лес", fr: "forêt", speak: "лес", example: "мы в лесу" },
      { ru: "кошка", fr: "chat", speak: "кошка", example: "моя кошка" },
      { ru: "собака", fr: "chien", speak: "собака", example: "большая собака" },
      { ru: "птица", fr: "oiseau", speak: "птица", example: "красивая птица" },
      { ru: "небо", fr: "ciel", speak: "небо", example: "голубое небо" }
    ],
    exercises: [
      { type: "qcm", question: "Que veut dire море ?", answers: ["mer", "montagne", "forêt"], correct: 0 },
      { type: "listen", prompt: "Ecoute. Qu'est-ce que c'est ?", audio: "собака", answers: ["кошка", "птица", "собака"], correct: 2 },
      { type: "fill", question: "Complete : мы в ___ (forêt, locatif)", answer: "лесу" },
      { type: "qcm", question: "Comment dire fleur ?", answers: ["цветок", "дерево", "река"], correct: 0 }
    ]
  },
  {
    id: "shopping",
    title: "42. Faire les courses",
    stage: "A1-A2",
    focus: "Acheter, payer, demander le prix.",
    icon: "М",
    words: [
      { ru: "купить", fr: "acheter", speak: "купить", example: "я хочу купить хлеб" },
      { ru: "дорого", fr: "c'est cher", speak: "дорого", example: "это дорого" },
      { ru: "дёшево", fr: "pas cher / bon marché", speak: "дёшево", example: "это дёшево" },
      { ru: "касса", fr: "caisse", speak: "касса", example: "где касса?" },
      { ru: "чек", fr: "reçu / ticket de caisse", speak: "чек", example: "дайте чек" },
      { ru: "платить", fr: "payer", speak: "платить", example: "я плачу картой" },
      { ru: "карта", fr: "carte bancaire", speak: "карта", example: "можно картой?" },
      { ru: "рубль", fr: "rouble", speak: "рубль", example: "сто рублей" },
      { ru: "скидка", fr: "réduction / solde", speak: "скидка", example: "есть скидка?" },
      { ru: "овощи", fr: "légumes", speak: "овощи", example: "свежие овощи" }
    ],
    exercises: [
      { type: "qcm", question: "Que veut dire купить ?", answers: ["acheter", "payer", "vendre"], correct: 0 },
      { type: "listen", prompt: "Ecoute. Quel mot ?", audio: "дорого", answers: ["дёшево", "дорого", "скидка"], correct: 1 },
      { type: "fill", question: "Complete : я плачу ___ (par carte)", answer: "картой" },
      { type: "qcm", question: "Comment dire caisse ?", answers: ["касса", "чек", "рубль"], correct: 0 }
    ]
  },
  {
    id: "calendar",
    title: "43. Jours et mois",
    stage: "A1",
    focus: "Comprendre les dates et planifier.",
    icon: "К",
    words: [
      { ru: "понедельник", fr: "lundi", speak: "понедельник", example: "в понедельник" },
      { ru: "среда", fr: "mercredi", speak: "среда", example: "в среду" },
      { ru: "пятница", fr: "vendredi", speak: "пятница", example: "в пятницу" },
      { ru: "суббота", fr: "samedi", speak: "суббота", example: "в субботу" },
      { ru: "воскресенье", fr: "dimanche", speak: "воскресенье", example: "в воскресенье" },
      { ru: "неделя", fr: "semaine", speak: "неделя", example: "эта неделя" },
      { ru: "месяц", fr: "mois", speak: "месяц", example: "этот месяц" },
      { ru: "январь", fr: "janvier", speak: "январь", example: "в январе" },
      { ru: "июль", fr: "juillet", speak: "июль", example: "в июле" },
      { ru: "год", fr: "année / an", speak: "год", example: "этот год" }
    ],
    exercises: [
      { type: "qcm", question: "Que veut dire пятница ?", answers: ["vendredi", "samedi", "dimanche"], correct: 0 },
      { type: "listen", prompt: "Ecoute. Quel jour ?", audio: "суббота", answers: ["пятница", "суббота", "понедельник"], correct: 1 },
      { type: "fill", question: "Complete : в ___ (en janvier)", answer: "январе" },
      { type: "qcm", question: "Comment dire semaine ?", answers: ["неделя", "месяц", "год"], correct: 0 }
    ]
  },
  {
    id: "verbs-essential",
    title: "44. Verbes essentiels",
    stage: "A2",
    focus: "Les verbes les plus utiles au quotidien.",
    icon: "Г",
    words: [
      { ru: "знать", fr: "savoir / connaître", speak: "знать", example: "я знаю" },
      { ru: "мочь", fr: "pouvoir", speak: "мочь", example: "я могу" },
      { ru: "говорить", fr: "parler / dire", speak: "говорить", example: "я говорю по-русски" },
      { ru: "слышать", fr: "entendre", speak: "слышать", example: "я слышу тебя" },
      { ru: "думать", fr: "penser", speak: "думать", example: "я думаю" },
      { ru: "любить", fr: "aimer", speak: "любить", example: "я люблю русский" },
      { ru: "помнить", fr: "se souvenir", speak: "помнить", example: "я помню" },
      { ru: "начинать", fr: "commencer", speak: "начинать", example: "я начинаю учиться" },
      { ru: "забывать", fr: "oublier", speak: "забывать", example: "я забываю слова" },
      { ru: "находить", fr: "trouver", speak: "находить", example: "я нахожу решение" }
    ],
    exercises: [
      { type: "qcm", question: "Que veut dire понимать ?", answers: ["comprendre", "entendre", "penser"], correct: 0 },
      { type: "listen", prompt: "Ecoute. Quel verbe ?", audio: "любить", answers: ["знать", "любить", "мочь"], correct: 1 },
      { type: "fill", question: "Complete : я ___ по-русски (parler, je...)", answer: "говорю" },
      { type: "qcm", question: "Comment dire pouvoir ?", answers: ["мочь", "знать", "думать"], correct: 0 }
    ]
  },
  {
    id: "adjectives-core",
    title: "45. Adjectifs essentiels",
    stage: "A2",
    focus: "Décrire les personnes et les choses.",
    icon: "Б",
    words: [
      { ru: "большой", fr: "grand / gros", speak: "большой", example: "большой дом" },
      { ru: "маленький", fr: "petit", speak: "маленький", example: "маленький ребёнок" },
      { ru: "хороший", fr: "bon / bien", speak: "хороший", example: "хороший день" },
      { ru: "плохой", fr: "mauvais", speak: "плохой", example: "плохая погода" },
      { ru: "красивый", fr: "beau / joli", speak: "красивый", example: "красивый город" },
      { ru: "новый", fr: "nouveau / neuf", speak: "новый", example: "новый телефон" },
      { ru: "старый", fr: "vieux / ancien", speak: "старый", example: "старый дом" },
      { ru: "быстрый", fr: "rapide", speak: "быстрый", example: "быстрый поезд" },
      { ru: "медленный", fr: "lent", speak: "медленный", example: "медленный интернет" },
      { ru: "интересный", fr: "intéressant", speak: "интересный", example: "интересная книга" }
    ],
    exercises: [
      { type: "qcm", question: "Que veut dire большой ?", answers: ["grand", "petit", "vieux"], correct: 0 },
      { type: "listen", prompt: "Ecoute. Quel adjectif ?", audio: "красивый", answers: ["новый", "красивый", "плохой"], correct: 1 },
      { type: "fill", question: "Complete : ___ телефон (nouveau)", answer: "новый" },
      { type: "qcm", question: "Comment dire intéressant ?", answers: ["интересный", "быстрый", "старый"], correct: 0 }
    ]
  }
];

const alphabetGroups = [
  {
    id: "voyelles",
    title: "🔴 Voyelles",
    subtitle: "10 lettres. Leur son change selon l'accent — règle fondamentale du russe.",
    letters: [
      {
        upper: "А", lower: "а", name: "а", ipa: "/a/",
        fr: "Comme le 'a' dans 'patte'.",
        variants: [
          { label: "Accentué", sound: "а → /a/ clair", ex: "мáма" },
          { label: "Non accentué", sound: "а → /ə/ bref", ex: "вода" }
        ],
        examples: ["мама", "папа", "страна"],
        tip: "Toujours clair quand accentué. Bref et réduit sinon."
      },
      {
        upper: "Е", lower: "е", name: "е", ipa: "/je/ ou /ɛ/",
        fr: "Début de mot ou après voyelle : 'yé'. Après consonne : 'é' (et mouille la consonne).",
        variants: [
          { label: "Début / après voyelle", sound: "е → /je/", ex: "ем" },
          { label: "Après consonne", sound: "е → /ɛ/ + mouillage", ex: "нет" },
          { label: "Non accentué", sound: "е → /ji/ réduit", ex: "река" }
        ],
        examples: ["нет", "дерево", "ем"],
        tip: "Mouille TOUJOURS la consonne qui précède. Нет → 'ньет'."
      },
      {
        upper: "Ё", lower: "ё", name: "ё", ipa: "/jo/",
        fr: "Comme 'yò'. TOUJOURS accentué — jamais réduit.",
        variants: [
          { label: "Toujours accentué", sound: "ё → /jo/", ex: "всё" }
        ],
        examples: ["ёж", "всё", "ещё"],
        tip: "Les deux points = accent obligatoire. Jamais de réduction possible."
      },
      {
        upper: "И", lower: "и", name: "и", ipa: "/i/",
        fr: "Comme le 'i' dans 'vie'. Mouille la consonne précédente.",
        variants: [
          { label: "Standard", sound: "и → /i/", ex: "иметь" },
          { label: "Après Ж/Ш/Ц (toujours durs)", sound: "и → /ɨ/ (son de Ы)", ex: "жить" }
        ],
        examples: ["идти", "жить", "иметь"],
        tip: "Après Ж, Ш, Ц : écrit И mais prononcé Ы ! Жить → 'жыть'."
      },
      {
        upper: "О", lower: "о", name: "о", ipa: "/o/ ou /ʌ/",
        fr: "Accentué : 'ô'. Non accentué : sonne comme 'a' ! Règle d'or du russe.",
        variants: [
          { label: "Accentué", sound: "о → /o/", ex: "дóм" },
          { label: "1re syllabe avant accent", sound: "о → /ʌ/ (comme a)", ex: "Москва" },
          { label: "Autres positions", sound: "о → /ə/ très bref", ex: "хорошо" }
        ],
        examples: ["дом", "он", "Москва"],
        tip: "Москва se prononce 'Масква'. О non accentué → A. Règle fondamentale !"
      },
      {
        upper: "У", lower: "у", name: "у", ipa: "/u/",
        fr: "Comme 'ou' dans 'loup'. Toujours stable, jamais réduit.",
        variants: [
          { label: "Toujours stable", sound: "у → /u/", ex: "утро" }
        ],
        examples: ["утро", "рука", "улица"],
        tip: "La voyelle la plus facile ! Toujours 'ou', accentué ou non."
      },
      {
        upper: "Ы", lower: "ы", name: "ы", ipa: "/ɨ/",
        fr: "Son unique : 'i' dur avec la langue en arrière. Jamais en début de mot.",
        variants: [
          { label: "Standard", sound: "ы → /ɨ/", ex: "ты" },
          { label: "Non accentué", sound: "ы → /ɨ/ réduit", ex: "рыба" }
        ],
        examples: ["ты", "мы", "рыба"],
        tip: "Dis 'i' en repoussant la langue vers le fond de la bouche. Unique au russe !"
      },
      {
        upper: "Э", lower: "э", name: "э", ipa: "/ɛ/",
        fr: "Comme 'è' ouvert dans 'être'. Souvent en début de mot.",
        variants: [
          { label: "Standard", sound: "э → /ɛ/ sans mouillage", ex: "это" }
        ],
        examples: ["это", "эхо", "экран"],
        tip: "Différence avec Е : Э ne mouille PAS la consonne. Это vs нет."
      },
      {
        upper: "Ю", lower: "ю", name: "ю", ipa: "/ju/",
        fr: "Comme 'you' (anglais). Début de mot → 'you'. Après consonne → mouille + 'ou'.",
        variants: [
          { label: "Début / après voyelle", sound: "ю → /ju/", ex: "юг" },
          { label: "Après consonne", sound: "ю → /u/ mouillé", ex: "люблю" }
        ],
        examples: ["юг", "люблю", "июль"],
        tip: "Mouille la consonne précédente, comme Е et Я."
      },
      {
        upper: "Я", lower: "я", name: "я", ipa: "/ja/",
        fr: "Comme 'ya' dans 'yaourt'. Aussi le mot JE en russe.",
        variants: [
          { label: "Début / après voyelle", sound: "я → /ja/", ex: "я" },
          { label: "Après consonne", sound: "я → /a/ mouillé", ex: "пять" },
          { label: "Non accentué", sound: "я → /ji/ réduit", ex: "семья" }
        ],
        examples: ["я", "пять", "дядя"],
        tip: "Я = 'je' en russe. Commence et finit par ce son. Mouille toujours."
      }
    ]
  },
  {
    id: "familieres",
    title: "🟢 Consonnes familières",
    subtitle: "Proches du français/latin. Attention : toutes se mouillent devant И/Е/Ё/Ю/Я/Ь. Et les consonnes sonores s'assourdissent en fin de mot.",
    letters: [
      {
        upper: "Б", lower: "б", name: "бэ", ipa: "/b/",
        fr: "Comme 'b' dans 'bon'.",
        variants: [
          { label: "Standard", sound: "б → /b/", ex: "брат" },
          { label: "Fin de mot (assourdissement)", sound: "б → /p/", ex: "хлеб" }
        ],
        examples: ["брат", "хлеб", "большой"],
        tip: "Хлеб (pain) se prononce 'хлеп'. Règle : consonne sonore finale → sourde."
      },
      {
        upper: "В", lower: "в", name: "вэ", ipa: "/v/",
        fr: "Comme 'v' dans 'vie'.",
        variants: [
          { label: "Standard", sound: "в → /v/", ex: "вода" },
          { label: "Fin de mot", sound: "в → /f/", ex: "кровь" }
        ],
        examples: ["вода", "врач", "вечер"],
        tip: "Кровь (sang) se prononce 'крофь'. В → Ф en fin de mot."
      },
      {
        upper: "Г", lower: "г", name: "гэ", ipa: "/g/",
        fr: "Comme 'g' dans 'gare'.",
        variants: [
          { label: "Standard", sound: "г → /g/", ex: "год" },
          { label: "Fin de mot", sound: "г → /k/", ex: "друг" },
          { label: "Dans -ого/-его (génitif adj.)", sound: "г → /v/", ex: "моего" }
        ],
        examples: ["год", "город", "друг"],
        tip: "Моего (de moi) = 'маево'. Le Г du génitif adjectival se prononce В !"
      },
      {
        upper: "Д", lower: "д", name: "дэ", ipa: "/d/",
        fr: "Comme 'd' dans 'dans'.",
        variants: [
          { label: "Standard", sound: "д → /d/", ex: "дом" },
          { label: "Fin de mot", sound: "д → /t/", ex: "год" }
        ],
        examples: ["дом", "день", "год"],
        tip: "Год (année) se prononce 'гот'. Д → Т en fin de mot."
      },
      {
        upper: "З", lower: "з", name: "зэ", ipa: "/z/",
        fr: "Comme 'z' dans 'zéro'.",
        variants: [
          { label: "Standard", sound: "з → /z/", ex: "зима" },
          { label: "Fin de mot", sound: "з → /s/", ex: "мороз" }
        ],
        examples: ["зима", "здесь", "мороз"],
        tip: "Мороз (gel) se prononce 'морос'. З → С en fin de mot."
      },
      {
        upper: "К", lower: "к", name: "ка", ipa: "/k/",
        fr: "Comme 'k' dans 'kilo'. Stable.",
        variants: [
          { label: "Dur (standard)", sound: "к → /k/", ex: "как" },
          { label: "Mou (devant И/Е/Ь)", sound: "к → /kj/ mouillé", ex: "кино" }
        ],
        examples: ["как", "кто", "кино"],
        tip: "Toujours /k/, juste mouillé devant les voyelles douces. Facile !"
      },
      {
        upper: "Л", lower: "л", name: "эль", ipa: "/l/ ou /lj/",
        fr: "Deux sons : Л dur (l arrière, comme en anglais 'ball') et Л mou (l avant, comme en français).",
        variants: [
          { label: "Dur (devant А/О/У/Ы ou final)", sound: "л → /ɫ/ vélarisé", ex: "лампа" },
          { label: "Mou (devant И/Е/Ё/Ю/Я/Ь)", sound: "л → /lj/ mouillé", ex: "люди" }
        ],
        examples: ["лампа", "люди", "стол"],
        tip: "Стол (table) : Л final est DUR. Люди (gens) : Л est MOU. Entraîne l'oreille !"
      },
      {
        upper: "М", lower: "м", name: "эм", ipa: "/m/",
        fr: "Comme 'm' dans 'maman'.",
        variants: [
          { label: "Dur / mou selon contexte", sound: "м → /m/ ou /mj/", ex: "мама / мир" }
        ],
        examples: ["мама", "мир", "место"],
        tip: "Identique au français. Se mouille devant Е/И/Ь : мир → 'мьир'."
      },
      {
        upper: "Н", lower: "н", name: "эн", ipa: "/n/",
        fr: "Comme 'n' dans 'non'.",
        variants: [
          { label: "Dur", sound: "н → /n/", ex: "нос" },
          { label: "Mou (devant Е/И/Ь)", sound: "н → /nj/", ex: "нет" }
        ],
        examples: ["нос", "нет", "ночь"],
        tip: "Нет (non) → 'ньет' : Н se mouille devant Е."
      },
      {
        upper: "П", lower: "п", name: "пэ", ipa: "/p/",
        fr: "Comme 'p' dans 'papa'. Non aspiré (pas de souffle).",
        variants: [
          { label: "Standard", sound: "п → /p/", ex: "папа" }
        ],
        examples: ["папа", "привет", "пять"],
        tip: "Non aspiré contrairement à l'anglais 'p'. Met la main devant la bouche pour tester."
      },
      {
        upper: "Р", lower: "р", name: "эр", ipa: "/r/ roulé",
        fr: "R roulé alvéolaire, comme en espagnol ou en italien. La pointe de la langue vibre.",
        variants: [
          { label: "Dur", sound: "р → /r/ roulé", ex: "рука" },
          { label: "Mou (devant И/Е/Ь)", sound: "р → /rj/ roulé mouillé", ex: "рис" }
        ],
        examples: ["рука", "рыба", "рис"],
        tip: "Fais vibrer la POINTE de la langue derrière les dents. Jamais le R français du fond de la gorge !"
      },
      {
        upper: "С", lower: "с", name: "эс", ipa: "/s/",
        fr: "Comme 's' dans 'sol' (jamais 'z' entre voyelles, contrairement au français).",
        variants: [
          { label: "Standard", sound: "с → /s/", ex: "сын" },
          { label: "Devant consonne sonore (assimilation)", sound: "с → /z/", ex: "с другом" }
        ],
        examples: ["сын", "сейчас", "спасибо"],
        tip: "С другом → 'з другом'. Assimilation de voisement devant consonne sonore."
      },
      {
        upper: "Т", lower: "т", name: "тэ", ipa: "/t/",
        fr: "Comme 't' dans 'table'. Non aspiré.",
        variants: [
          { label: "Standard", sound: "т → /t/", ex: "тут" },
          { label: "Dans -ться/-тся (verbes réfléchis)", sound: "тьс/тс → /ts/", ex: "учиться" }
        ],
        examples: ["тут", "там", "учиться"],
        tip: "Учиться se prononce 'учицца' ! -ться → /ts/ est une règle de prononciation clé."
      },
      {
        upper: "Ф", lower: "ф", name: "эф", ipa: "/f/",
        fr: "Comme 'f' dans 'fond'. Souvent dans les mots d'emprunt.",
        variants: [
          { label: "Standard", sound: "ф → /f/", ex: "фото" }
        ],
        examples: ["фото", "факт", "кофе"],
        tip: "Simple et stable. Surtout dans les mots d'origine étrangère."
      }
    ]
  },
  {
    id: "speciales",
    title: "🟡 Sons spéciaux russes",
    subtitle: "Ces sons n'existent pas en français. Priorité absolue d'apprentissage !",
    letters: [
      {
        upper: "Ж", lower: "ж", name: "жэ", ipa: "/ʐ/",
        fr: "Comme 'j' (jeu) mais dur, langue reculée. JAMAIS mouillé — toujours dur.",
        variants: [
          { label: "Standard — toujours dur", sound: "ж → /ʐ/ dur", ex: "жить" },
          { label: "Fin de mot", sound: "ж → /ʂ/ (ch dur)", ex: "муж" }
        ],
        examples: ["жизнь", "жара", "муж"],
        tip: "Жизнь = 'жЫзнь' à l'oreille : même devant И, Ж reste dur !"
      },
      {
        upper: "Ц", lower: "ц", name: "цэ", ipa: "/ts/",
        fr: "Comme 'ts' dans 'tsé-tsé' ou 'pizza' en italien. Toujours dur.",
        variants: [
          { label: "Toujours dur", sound: "ц → /ts/", ex: "центр" }
        ],
        examples: ["центр", "цена", "цирк"],
        tip: "Цирк (cirque) → 'цЫрк' à l'oreille. Ц est toujours dur, même devant И."
      },
      {
        upper: "Ч", lower: "ч", name: "чэ", ipa: "/tɕ/",
        fr: "Comme 'tch' (tchin-tchin). Toujours mou — jamais dur.",
        variants: [
          { label: "Toujours mou", sound: "ч → /tɕ/ mouillé", ex: "чай" },
          { label: "Dans что / конечно (oral courant)", sound: "ч → /ʂ/", ex: "что → 'што'" }
        ],
        examples: ["чай", "ночь", "часть"],
        tip: "ЧТО se prononce 'ШТО' ! Et конечно → 'конешно'. Exceptions orales importantes."
      },
      {
        upper: "Ш", lower: "ш", name: "ша", ipa: "/ʂ/",
        fr: "Comme 'ch' mais dur, langue reculée et arrondie. JAMAIS mouillé.",
        variants: [
          { label: "Toujours dur", sound: "ш → /ʂ/ dur", ex: "школа" }
        ],
        examples: ["школа", "шум", "хорошо"],
        tip: "Ш = ch dur. Щ = ch mouillé long. Les deux lettres sœurs — ne pas les confondre !"
      },
      {
        upper: "Щ", lower: "щ", name: "ща", ipa: "/ɕː/",
        fr: "Comme un 'ch' français très long, langue en avant et levée. Toujours mou.",
        variants: [
          { label: "Toujours mou et long", sound: "щ → /ɕː/", ex: "ещё" }
        ],
        examples: ["щи", "ещё", "вещь"],
        tip: "Prononce un 'ch' français longtemps en avançant la langue. Ш est le frère dur de Щ."
      },
      {
        upper: "Х", lower: "х", name: "ха", ipa: "/x/",
        fr: "Comme le 'j' espagnol (jota) ou le 'ch' allemand de 'Bach'. Frottement du voile du palais.",
        variants: [
          { label: "Dur", sound: "х → /x/", ex: "хлеб" },
          { label: "Mou (devant И/Е)", sound: "х → /xj/ mouillé", ex: "химия" }
        ],
        examples: ["хлеб", "хорошо", "химия"],
        tip: "Pas le H anglais ! Un frottement rauque gorge-palais. Pense à ronfler doucement."
      }
    ]
  },
  {
    id: "semi",
    title: "🔵 Semi-voyelle",
    subtitle: "Une seule lettre. Toujours après une voyelle, jamais en position initiale seule.",
    letters: [
      {
        upper: "Й", lower: "й", name: "и краткое", ipa: "/j/",
        fr: "Comme 'y' dans 'yeux' ou 'voyage'. Très bref, glisse vers la voyelle précédente.",
        variants: [
          { label: "Après voyelle", sound: "й → /j/ bref", ex: "мой" }
        ],
        examples: ["мой", "чай", "новый"],
        tip: "Мой = 'mo+y' très bref. Jamais prononcé seul — toujours appuyé sur la voyelle avant."
      }
    ]
  },
  {
    id: "signes",
    title: "⚪ Signes & Ы",
    subtitle: "Pas de son propre, mais transforment la consonne précédente. Essentiels pour le sens !",
    letters: [
      {
        upper: "Ъ", lower: "ъ", name: "твёрдый знак", ipa: "— (séparateur dur)",
        fr: "Signe dur : sépare la consonne de la voyelle suivante. La consonne reste dure. Rare.",
        variants: [
          { label: "Séparateur dur (après préfixe)", sound: "Ъ + е/я/ю/ё → consonne dure + /je/ja/ju/jo/", ex: "объект" }
        ],
        examples: ["объект", "съезд", "подъезд"],
        tip: "Rare — surtout dans les mots avec préfixe. Empêche le mouillage de la consonne."
      },
      {
        upper: "Ь", lower: "ь", name: "мягкий знак", ipa: "— (mouillage)",
        fr: "Signe mou : mouille (palatalise) la consonne qui précède. Change souvent le sens du mot !",
        variants: [
          { label: "Palatalisation", sound: "consonne + Ь → consonne mouillée", ex: "мать vs мат" },
          { label: "Séparateur (devant е/я/ю/ё)", sound: "Ь → glide /j/ + voyelle", ex: "семья" }
        ],
        examples: ["день", "мать", "семья"],
        tip: "Мать (mère) ≠ мат (juron). Ь change le sens ! Essentiel à maîtriser."
      },
      {
        upper: "Ы", lower: "ы", name: "ы", ipa: "/ɨ/",
        fr: "Voyelle du fond. 'i' dur avec la langue en arrière. Jamais en début de mot. Son sans équivalent.",
        variants: [
          { label: "Standard", sound: "ы → /ɨ/", ex: "ты" }
        ],
        examples: ["ты", "мы", "рыба"],
        tip: "Dis 'i' en reculant la langue au maximum. Comme un 'euh-i' tendu. Unique en russe !"
      }
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
let activeTool = "repeat";
let flashcardIndex = 0;
let searchQuery = "";
let vocabQuery = "";
let activeVocabTab = "alphabet";

function loadState() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    const parsed = JSON.parse(saved);
    return { known: {}, difficult: {}, revealedStories: {}, revealedMeanings: {}, ...parsed };
  }
  return {
    lastActive: "",
    completed: {},
    mistakes: [],
    srs: {},
    known: {},
    difficult: {},
    revealedStories: {},
    revealedMeanings: {},
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
    ? `${state.mistakes.length} due`
    : "pret";
  renderLessons();
  renderVocabPanel();
  renderTools();
  renderGrammarPanel();
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

function renderVocabPanel() {
  const alphabetSection = document.getElementById("alphabetSection");
  const vocabSection = document.getElementById("vocabSection");
  document.querySelectorAll("[data-vocab-tab]").forEach(btn =>
    btn.classList.toggle("active", btn.dataset.vocabTab === activeVocabTab)
  );
  if (alphabetSection) alphabetSection.style.display = activeVocabTab === "alphabet" ? "block" : "none";
  if (vocabSection) vocabSection.style.display = activeVocabTab === "vocab" ? "block" : "none";
  if (activeVocabTab === "alphabet") renderAlphabetFull();
  else renderVocabulary();
}

function renderAlphabetFull() {
  const container = document.getElementById("alphabetSection");
  if (!container) return;
  container.innerHTML = alphabetGroups.map(group => `
    <div class="alphabet-group">
      <div class="alphabet-group-header">
        <h3>${group.title}</h3>
        <p>${group.subtitle}</p>
      </div>
      <div class="letter-detail-list">
        ${group.letters.map(letter => `
          <article class="letter-detail-card">
            <div class="letter-detail-top">
              <div class="letter-glyph">
                <span class="letter-upper">${letter.upper}</span>
                <span class="letter-lower">${letter.lower}</span>
              </div>
              <div class="letter-info">
                <strong>${letter.name}</strong>
                <span class="pill ipa-pill">${letter.ipa}</span>
              </div>
              <button class="audio-button" type="button" data-speak="${letter.upper}" aria-label="Ecouter ${letter.upper}">▶</button>
            </div>
            <p class="letter-desc">${letter.fr}</p>
            ${letter.variants.length ? `
              <div class="variant-list">
                ${letter.variants.map(v => `
                  <div class="sound-variant">
                    <span class="variant-label">${v.label}</span>
                    <span class="variant-sound">${v.sound}</span>
                    <button class="audio-button mini-audio" type="button" data-speak="${v.ex}" aria-label="Ecouter ${v.ex}">▶ ${v.ex}</button>
                  </div>
                `).join("")}
              </div>
            ` : ""}
            <div class="letter-examples">
              ${letter.examples.map(ex => `
                <button class="pill example-pill" type="button" data-speak="${ex}">${ex}</button>
              `).join("")}
            </div>
            <p class="letter-tip">💡 ${letter.tip}</p>
          </article>
        `).join("")}
      </div>
    </div>
  `).join("");
}

function renderVocabulary() {
  const container = document.getElementById("alphabetGrid");
  if (!container) return;
  const input = document.getElementById("vocabSearchInput");
  if (input && input.value !== vocabQuery) input.value = vocabQuery;
  const query = normalize(vocabQuery);
  const words = getAllWords();
  const filtered = query
    ? words.filter((word) => normalize(`${word.ru} ${word.fr} ${word.example} ${word.lessonTitle}`).includes(query))
    : words.slice(0, 60);
  container.classList.add("vocab-grid");
  container.innerHTML = filtered
    .map(
      (word) => `
        <button class="letter-card vocab-card" type="button" data-speak="${word.speak}" aria-label="Ecouter ${word.ru}">
          <strong>${word.ru}</strong>
          <span>${word.example}</span>
          <small>${word.fr}</small>
        </button>
      `
    )
    .join("");
  if (input && !input.dataset.bound) {
    input.dataset.bound = "true";
    input.addEventListener("input", (event) => {
      vocabQuery = event.target.value;
      renderVocabulary();
      const nextInput = document.getElementById("vocabSearchInput");
      nextInput.focus();
      nextInput.setSelectionRange(nextInput.value.length, nextInput.value.length);
    });
  }
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
  if (activeTool === "repeat") renderSpeaking(container, "repeat");
  if (activeTool === "shadowing") renderSpeaking(container, "shadowing");
  if (activeTool === "dialogs") renderDialogues(container);
}

function renderSpeaking(container, mode) {
  const prompts = mode === "shadowing" ? speakingPrompts.slice(1) : speakingPrompts;
  container.innerHTML = `
    <div class="tool-list">
      ${prompts
        .map(
          (prompt) => `
            <article class="tool-card">
              <h3>${prompt.title}</h3>
              <p class="question">${prompt.ru}</p>
              <p class="soft-text">${prompt.fr}</p>
              <div class="flash-actions">
                <button class="audio-button" type="button" data-speak="${prompt.ru}" aria-label="Ecouter">▶</button>
                <button class="memory-button known" type="button" data-speaking="${prompt.ru}">Je l'ai repete</button>
              </div>
            </article>
          `
        )
        .join("")}
    </div>
  `;
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

function renderSrsPanel() {
  const card = document.getElementById("exerciseCard");
  if (!card || document.getElementById("practice")?.classList.contains("active") === false) return;
  const due = getDueReviews();
  const words = getAllWords();
  const difficultWords = Object.keys(state.difficult || {})
    .map((id) => words.find((word) => word.id === id))
    .filter(Boolean);
  const pool = [...difficultWords, ...words].filter(Boolean);
  const word = pool[flashcardIndex % pool.length];
  card.innerHTML = `
    <div class="exercise-top">
      <span class="pill">SRS</span>
      <span class="pill">${due.length ? `${due.length} exercices dus` : "revision libre"}</span>
    </div>
    <article class="tool-card flashcard">
      <div>
        <strong>${word.ru}</strong>
        <span>${word.example}</span>
        <p class="example">${word.fr}</p>
        <button class="audio-button" type="button" data-speak="${word.speak}" aria-label="Ecouter ${word.ru}">▶</button>
      </div>
    </article>
    <div class="flash-actions">
      <button class="memory-button unknown" type="button" data-memory="unknown" data-word="${word.id}">Difficile</button>
      <button class="memory-button known" type="button" data-memory="known" data-word="${word.id}">Facile</button>
    </div>
    <button class="next-button" type="button" id="nextFlashcard">Carte suivante</button>
    ${due[0] ? `<button class="next-button" type="button" data-review="${due[0].id}">Exercice du</button>` : ""}
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

function renderGrammarPanel() {
  const container = document.getElementById("grammarContent");
  if (!container) return;
  renderGrammar(container);
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
                <span class="${state.revealedMeanings?.[`${lesson.id}-word-${index}`] ? "" : "hidden-meaning"}">${word.fr}</span>
                <p class="example">${word.example}</p>
              </div>
              <button class="audio-button" type="button" data-speak="${word.speak}" aria-label="Ecouter ${word.ru}">▶</button>
              <div class="memory-actions">
                <button class="memory-button" type="button" data-meaning="${lesson.id}-word-${index}">Sens</button>
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
  if (!container) return;
  container.innerHTML = immersionStories
    .map(
      (story, index) => `
        <article class="dialogue-card">
          <div>
            <h3>${story.image} ${story.title}</h3>
            <span class="pill">${story.level}</span>
            <p class="question">${story.ru}</p>
            <p class="soft-text ${state.revealedStories?.[index] ? "" : "hidden-meaning"}">${story.fr}</p>
          </div>
          <div class="flash-actions">
            <button class="audio-button" type="button" data-speak="${story.ru}" aria-label="Ecouter ${story.title}">▶</button>
            <button class="memory-button" type="button" data-story="${index}">Voir le sens</button>
          </div>
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

  if (target.dataset.vocabTab) {
    activeVocabTab = target.dataset.vocabTab;
    renderVocabPanel();
  }
  if (target.dataset.tab) showTab(target.dataset.tab);
  if (target.dataset.tab === "practice") renderSrsPanel();
  if (target.dataset.tab === "alphabet") renderVocabPanel();
  if (target.dataset.tool) {
    activeTool = target.dataset.tool;
    renderTools();
  }
  if (target.dataset.story) {
    state.revealedStories[target.dataset.story] = !state.revealedStories[target.dataset.story];
    saveState();
    renderReview();
  }
  if (target.dataset.meaning) {
    state.revealedMeanings[target.dataset.meaning] = !state.revealedMeanings[target.dataset.meaning];
    saveState();
    renderLessonWords(activeLessonId);
  }
  if (target.dataset.speaking) {
    showToast("Bien. Pas de penalite, juste de la repetition.");
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
    if (document.getElementById("practice")?.classList.contains("active")) renderSrsPanel();
    else renderTools();
  }
  if (target.id === "validateText") validateText();
  if (target.id === "quickSession") {
    const nextLesson = lessons.find((lesson) => (state.completed[lesson.id] || 0) < 100) || lessons[0];
    activeLessonId = nextLesson.id;
    renderLessonWords(nextLesson.id);
    showTab("practice");
  }
  if (target.id === "reviewMistakes") {
    showTab("practice");
    renderSrsPanel();
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
