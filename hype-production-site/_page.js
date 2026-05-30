/* ============================================================
   КОНФИГ — отредактируйте под себя в одном месте
============================================================ */
const CONFIG = {
  // Вставьте сюда URL веб-приложения Apps Script после деплоя.
  // Пока пусто — опросник работает в демо-режиме (данные в консоль).
  APPS_SCRIPT_URL: "",
  INSTAGRAM: "https://instagram.com/HYPE_PROMOTION_UZ",
  PHONE: "+998935064200",
};

/* ============================================================
   I18N — все тексты сайта на 3 языках (RU / EN / UZ)
============================================================ */
const I18N = {
  ru: {
    navWorks:"Работы", navServices:"Услуги", navProcess:"Процесс", navContacts:"Контакты", navCta:"Обсудить проект",
    heroKicker:"Cinematic video production · Узбекистан",
    heroTitleA:"Кино-уровень видео ", heroTitleB:"для брендов,", heroTitleC:" которые хотят расти",
    heroLead:"Реклама, reels, бренд-фильмы, AI-видео и сайты. Снимаем и собираем то, что не просто красиво — а приносит просмотры и заявки.",
    heroBtnQuiz:"Обсудить проект →", heroBtnWorks:"Смотреть работы", scrollHint:"Листай",
    trust1lbl:"снятых роликов", trust2lbl:"направлений", trust3num:"4K", trust3lbl:"качество съёмки", trust4num:"48ч", trust4lbl:"средний ответ на заявку",
    worksKicker:"Портфолио", worksH2:"Работы, которые говорят за нас", worksP:"Выберите тип проекта — и посмотрите, как мы это делаем. Лучшее доказательство возможностей — сами ролики.",
    filterAll:"Все", filterAd:"Реклама", filterReels:"Reels", filterBrand:"Бренд-фильмы", filterAi:"AI-видео", filterClip:"Клипы",
    servKicker:"Услуги", servH2:"Что вам нужно — то и сделаем", servP:"От 30-секундного reels до сайта с вау-эффектом и автоматизации под ключ.",
    serv1Title:"Реклама", serv1Desc:"Продающие ролики для запуска товара, услуги или акции. Сценарий, съёмка, постпродакшн.",
    serv2Title:"Reels для соцсетей", serv2Desc:"Вертикальный контент, который залетает: динамика, монтаж, тренды и упор на удержание.",
    serv3Title:"Бренд-фильмы", serv3Desc:"Имиджевое кино о вашей компании — атмосфера, эмоция и характер бренда.",
    serv4Title:"AI-видео", serv4Desc:"Генеративная графика и AI-инструменты там, где обычная съёмка слишком дорогая или невозможна.",
    serv5Title:"Сайты и веб", serv5Desc:"Лендинги и сайты с вау-эффектом. Кстати — этот сайт мы сделали сами.", serv5Link:"Открыть наш cinematic-сайт →",
    serv6Title:"Автоматизация", serv6Desc:"Чат-боты, заявки в таблицы и CRM, интеграции — чтобы лиды не терялись, а рутина шла сама.",
    procKicker:"Процесс", procH2:"Как мы работаем", procP:"Прозрачно с первого сообщения — вы всегда знаете, что происходит и когда будет результат.",
    step1Title:"Бриф", step1Desc:"Отвечаете на пару вопросов — мы понимаем задачу и цель.",
    step2Title:"Сценарий и смета", step2Desc:"Идея, раскадровка и прозрачная стоимость без сюрпризов.",
    step3Title:"Съёмка", step3Desc:"Команда, техника, локации — снимаем на кино-уровне.",
    step4Title:"Монтаж и сдача", step4Desc:"Постпродакшн, правки и готовый материал под все площадки.",
    casesKicker:"Отзывы", casesH2:"Нам доверяют результат",
    case1Text:"«Качество видео — просто вау. И сайт нам сделали на том же уровне.»", case1Role:"клиент",
    case2Text:"«Картинка, монтаж и звук — всё на высоте. Работать было приятно и легко.»", case2Role:"заказчик",
    case3Text:"«Видео получилось стильным и качественным, а сайт — тоже огонь. Рекомендуем.»", case3Role:"клиент",
    ctaH2a:"Расскажите о проекте — ", ctaH2b:"предложение пришлём за 48 часов", ctaBtn:"Ответить на пару вопросов →",
    contactKicker:"Контакты", contactH2:"Напишите нам прямо сейчас", contactSub:"Удобнее в мессенджере? Пишите — отвечаем быстро. Или ответьте на пару вопросов, и мы соберём предложение под вашу задачу.",
    chPhone:"Телефон",
    contactCardH3:"Обсудить проект", contactCardP:"1 минута, 5 коротких вопросов. Поможем определиться, даже если вы пока не знаете, что именно нужно.", contactCardBtn:"Начать →",
    footerCopy:"© 2026 HYPE PRODUCTION · Узбекистан", mobileBarInsta:"Instagram",
    stepTpl:"Шаг %n из %t",
    qServiceQ:"Что вам нужно?", qServiceHint:"Выберите направление — дальше подскажем под вашу задачу.",
    qPurposeQ:"Для чего это нужно?", qPurposeHint:"Поможет точнее понять задачу и собрать смету.",
    qTimelineQ:"Когда нужен результат?", qTimelineHint:"Поможем спланировать сроки.",
    qBudgetQ:"Ориентир по бюджету", qBudgetHint:"Примерная вилка — чтобы предложить оптимальный формат.",
    qContactQ:"Куда прислать предложение?", qContactHint:"Свяжемся в течение 48 часов.",
    fName:"Ваше имя", fNamePh:"Имя", fContact:"Телефон или Instagram", fContactPh:"+998… или @username", fComment:"Пара слов о проекте (необязательно)", fCommentPh:"Коротко о задаче",
    qErr:"Заполните имя и контакт", backBtn:"← Назад", submitBtn:"Отправить заявку →", sendingTxt:"Отправляем…", doneLbl:"Готово",
    successPre:"Спасибо, ", successP1:"По вашим ответам уже готовим предложение. Свяжемся в течение 48 часов.", successP2:"Хотите быстрее — напишите нам сразу:", successBtn:"Написать в Instagram →",
    lbPlaceholder:"Здесь будет ваше видео",
    cat:{ ad:"Реклама", reels:"Reels", brand:"Бренд-фильм", ai:"AI-видео", clip:"Клип" },
    works:[
      {title:"Запуск коллекции", res:"2.1M просмотров"},
      {title:"Серия для бренда", res:"+340% охватов"},
      {title:"История компании", res:"имиджевый ролик"},
      {title:"Generative spot", res:"AI-графика"},
      {title:"Музыкальное видео", res:"cinematic"},
      {title:"Промо услуги", res:"конверсия x2"},
      {title:"Контент-пакет", res:"30 роликов/мес"},
      {title:"Атмосферное кино", res:"для соцсетей"},
      {title:"Виртуальная сцена", res:"без съёмки"},
    ],
    services:[
      {v:"video", l:"Видео"}, {v:"site", l:"Сайт"}, {v:"reels", l:"Reels для соцсетей"}, {v:"automation", l:"Автоматизация"}, {v:"unknown", l:"Не знаю — подскажите"},
    ],
    purpose:{
      video:["Реклама товара или услуги","Имидж бренда","Запуск продукта","Контент для соцсетей","Съёмка мероприятия"],
      site:["Лендинг","Интернет-магазин","Корпоративный сайт","Сайт с вау-эффектом (как этот)"],
      reels:["Продвижение продукта","Личный бренд","Прогрев аудитории","Регулярный контент"],
      automation:["Чат-боты","Заявки в CRM/таблицы","Интеграции сервисов","Пока не уверен"],
    },
    timeline:["Срочно (до 2 недель)","В течение месяца","1–3 месяца","Пока выбираю"],
    budget:["до $500","$500–1500","$1500–5000","$5000+","Обсудим индивидуально"],
  },

  en: {
    navWorks:"Work", navServices:"Services", navProcess:"Process", navContacts:"Contacts", navCta:"Discuss project",
    heroKicker:"Cinematic video production · Uzbekistan",
    heroTitleA:"Cinema-grade video ", heroTitleB:"for brands", heroTitleC:" that want to grow",
    heroLead:"Ads, reels, brand films, AI video and websites. We make work that isn't just beautiful — it brings views and leads.",
    heroBtnQuiz:"Discuss project →", heroBtnWorks:"View work", scrollHint:"Scroll",
    trust1lbl:"videos filmed", trust2lbl:"directions", trust3num:"4K", trust3lbl:"shooting quality", trust4num:"48h", trust4lbl:"avg. response to a request",
    worksKicker:"Portfolio", worksH2:"Work that speaks for us", worksP:"Pick a project type and see how we do it. The best proof of what we can do is the videos themselves.",
    filterAll:"All", filterAd:"Ads", filterReels:"Reels", filterBrand:"Brand films", filterAi:"AI video", filterClip:"Clips",
    servKicker:"Services", servH2:"Whatever you need — we'll make it", servP:"From a 30-second reel to a wow-effect website and turnkey automation.",
    serv1Title:"Advertising", serv1Desc:"Selling videos to launch a product, service or promo. Script, shooting, post-production.",
    serv2Title:"Reels for social media", serv2Desc:"Vertical content that takes off: dynamics, editing, trends and a focus on retention.",
    serv3Title:"Brand films", serv3Desc:"Image films about your company — atmosphere, emotion and brand character.",
    serv4Title:"AI video", serv4Desc:"Generative graphics and AI tools where regular shooting is too expensive or impossible.",
    serv5Title:"Websites & web", serv5Desc:"Landing pages and wow-effect websites. By the way — we built this site ourselves.", serv5Link:"Open our cinematic site →",
    serv6Title:"Automation", serv6Desc:"Chatbots, leads into sheets and CRM, integrations — so leads aren't lost and the routine runs itself.",
    procKicker:"Process", procH2:"How we work", procP:"Transparent from the first message — you always know what's happening and when the result is ready.",
    step1Title:"Brief", step1Desc:"You answer a few questions — we understand the task and the goal.",
    step2Title:"Script & quote", step2Desc:"Idea, storyboard and transparent pricing with no surprises.",
    step3Title:"Filming", step3Desc:"Team, gear, locations — we shoot at cinema level.",
    step4Title:"Editing & delivery", step4Desc:"Post-production, edits and final material for every platform.",
    casesKicker:"Reviews", casesH2:"They trust us with the result",
    case1Text:"“The video quality is just wow — and they built the site to the same level.”", case1Role:"client",
    case2Text:"“Picture, editing and sound — all top-notch. Smooth and easy to work with.”", case2Role:"client",
    case3Text:"“The video came out stylish and high-quality, and the site is fire too. Recommend.”", case3Role:"client",
    ctaH2a:"Tell us about your project — ", ctaH2b:"we'll send a proposal in 48 hours", ctaBtn:"Answer a few questions →",
    contactKicker:"Contacts", contactH2:"Message us right now", contactSub:"Prefer a messenger? Write to us — we reply fast. Or answer a few questions and we'll put together a proposal for your task.",
    chPhone:"Phone",
    contactCardH3:"Discuss project", contactCardP:"1 minute, 5 short questions. We'll help you decide, even if you don't yet know what you need.", contactCardBtn:"Start →",
    footerCopy:"© 2026 HYPE PRODUCTION · Uzbekistan", mobileBarInsta:"Instagram",
    stepTpl:"Step %n of %t",
    qServiceQ:"What do you need?", qServiceHint:"Pick a direction — we'll tailor the rest to your task.",
    qPurposeQ:"What is it for?", qPurposeHint:"Helps us understand the task and prepare a quote.",
    qTimelineQ:"When do you need the result?", qTimelineHint:"We'll help plan the timeline.",
    qBudgetQ:"Budget range", qBudgetHint:"A rough range — so we can suggest the best format.",
    qContactQ:"Where should we send the proposal?", qContactHint:"We'll get in touch within 48 hours.",
    fName:"Your name", fNamePh:"Name", fContact:"Phone or Instagram", fContactPh:"+998… or @username", fComment:"A few words about the project (optional)", fCommentPh:"Briefly about the task",
    qErr:"Please fill in name and contact", backBtn:"← Back", submitBtn:"Send request →", sendingTxt:"Sending…", doneLbl:"Done",
    successPre:"Thanks, ", successP1:"We're already preparing a proposal based on your answers. We'll be in touch within 48 hours.", successP2:"Want it faster — message us right away:", successBtn:"Message us on Instagram →",
    lbPlaceholder:"Your video will be here",
    cat:{ ad:"Ad", reels:"Reels", brand:"Brand film", ai:"AI video", clip:"Clip" },
    works:[
      {title:"Collection launch", res:"2.1M views"},
      {title:"Brand series", res:"+340% reach"},
      {title:"Company story", res:"image video"},
      {title:"Generative spot", res:"AI graphics"},
      {title:"Music video", res:"cinematic"},
      {title:"Service promo", res:"2× conversion"},
      {title:"Content pack", res:"30 videos/mo"},
      {title:"Atmospheric film", res:"for social"},
      {title:"Virtual scene", res:"no filming"},
    ],
    services:[
      {v:"video", l:"Video"}, {v:"site", l:"Website"}, {v:"reels", l:"Reels for social"}, {v:"automation", l:"Automation"}, {v:"unknown", l:"Not sure — advise me"},
    ],
    purpose:{
      video:["Product or service ad","Brand image","Product launch","Social media content","Event filming"],
      site:["Landing page","Online store","Corporate website","Wow-effect site (like this one)"],
      reels:["Product promotion","Personal brand","Warming up the audience","Regular content"],
      automation:["Chatbots","Leads into CRM/sheets","Service integrations","Not sure yet"],
    },
    timeline:["Urgent (under 2 weeks)","Within a month","1–3 months","Still deciding"],
    budget:["under $500","$500–1500","$1500–5000","$5000+","Let's discuss individually"],
  },

  uz: {
    navWorks:"Ishlar", navServices:"Xizmatlar", navProcess:"Jarayon", navContacts:"Kontaktlar", navCta:"Loyihani muhokama",
    heroKicker:"Cinematic video production · O'zbekiston",
    heroTitleA:"Kino darajasidagi video — ", heroTitleB:"o'sayotgan brendlar", heroTitleC:" uchun",
    heroLead:"Reklama, reels, brend-filmlar, AI-video va saytlar. Shunchaki chiroyli emas — ko'rishlar va arizalar keltiradigan ish qilamiz.",
    heroBtnQuiz:"Loyihani muhokama →", heroBtnWorks:"Ishlarni ko'rish", scrollHint:"Pastga",
    trust1lbl:"suratga olingan rolik", trust2lbl:"yo'nalish", trust3num:"4K", trust3lbl:"suratga olish sifati", trust4num:"48s", trust4lbl:"arizaga o'rtacha javob",
    worksKicker:"Portfolio", worksH2:"O'zi haqida gapiradigan ishlar", worksP:"Loyiha turini tanlang va qanday qilishimizni ko'ring. Eng yaxshi dalil — videolarning o'zi.",
    filterAll:"Hammasi", filterAd:"Reklama", filterReels:"Reels", filterBrand:"Brend-filmlar", filterAi:"AI-video", filterClip:"Kliplar",
    servKicker:"Xizmatlar", servH2:"Sizga nima kerak — shuni qilamiz", servP:"30 soniyalik reelsdan tortib vau-effektli sayt va kalit topshiriladigan avtomatlashtirishgacha.",
    serv1Title:"Reklama", serv1Desc:"Mahsulot, xizmat yoki aksiyani ishga tushirish uchun sotuvchi roliklar. Ssenariy, suratga olish, postprodakshn.",
    serv2Title:"Ijtimoiy tarmoq uchun Reels", serv2Desc:"Uchib ketadigan vertikal kontent: dinamika, montaj, trendlar va ushlab turishga urg'u.",
    serv3Title:"Brend-filmlar", serv3Desc:"Kompaniyangiz haqida imij kino — atmosfera, hissiyot va brend xarakteri.",
    serv4Title:"AI-video", serv4Desc:"Oddiy suratga olish juda qimmat yoki imkonsiz joyda generativ grafika va AI-vositalar.",
    serv5Title:"Saytlar va veb", serv5Desc:"Lending va vau-effektli saytlar. Aytgancha — bu saytni o'zimiz qildik.", serv5Link:"Cinematic saytimizni ochish →",
    serv6Title:"Avtomatlashtirish", serv6Desc:"Chat-botlar, jadval va CRMga arizalar, integratsiyalar — lidlar yo'qolmasligi va rutina o'zi ketishi uchun.",
    procKicker:"Jarayon", procH2:"Qanday ishlaymiz", procP:"Birinchi xabardan shaffof — har doim nima bo'layotganini va natija qachon bo'lishini bilasiz.",
    step1Title:"Brif", step1Desc:"Bir nechta savolga javob berasiz — biz vazifa va maqsadni tushunamiz.",
    step2Title:"Ssenariy va smeta", step2Desc:"G'oya, raskadrovka va kutilmagan holsiz shaffof narx.",
    step3Title:"Suratga olish", step3Desc:"Jamoa, texnika, lokatsiyalar — kino darajasida suratga olamiz.",
    step4Title:"Montaj va topshirish", step4Desc:"Postprodakshn, tuzatishlar va barcha platformalar uchun tayyor material.",
    casesKicker:"Sharhlar", casesH2:"Natijani bizga ishonishadi",
    case1Text:"“Video sifati — shunchaki vau. Saytni ham xuddi shu darajada qilib berishdi.”", case1Role:"mijoz",
    case2Text:"“Tasvir, montaj va ovoz — hammasi a'lo darajada. Ishlash yoqimli bo'ldi.”", case2Role:"mijoz",
    case3Text:"“Video chiroyli va sifatli chiqdi, sayt ham zo'r. Tavsiya qilamiz.”", case3Role:"mijoz",
    ctaH2a:"Loyihangiz haqida gapiring — ", ctaH2b:"48 soatda taklif yuboramiz", ctaBtn:"Bir nechta savolga javob bering →",
    contactKicker:"Kontaktlar", contactH2:"Hoziroq bizga yozing", contactSub:"Messenjer qulayroqmi? Yozing — tez javob beramiz. Yoki bir nechta savolga javob bering, vazifangiz uchun taklif tayyorlaymiz.",
    chPhone:"Telefon",
    contactCardH3:"Loyihani muhokama", contactCardP:"1 daqiqa, 5 ta qisqa savol. Nima kerakligini hali bilmasangiz ham, tanlashga yordam beramiz.", contactCardBtn:"Boshlash →",
    footerCopy:"© 2026 HYPE PRODUCTION · O'zbekiston", mobileBarInsta:"Instagram",
    stepTpl:"%t dan %n-qadam",
    qServiceQ:"Sizga nima kerak?", qServiceHint:"Yo'nalishni tanlang — qolganini vazifangizga moslaymiz.",
    qPurposeQ:"Bu nima uchun kerak?", qPurposeHint:"Vazifani aniqroq tushunish va smeta tuzishga yordam beradi.",
    qTimelineQ:"Natija qachon kerak?", qTimelineHint:"Muddatlarni rejalashtirishga yordam beramiz.",
    qBudgetQ:"Byudjet mo'ljali", qBudgetHint:"Taxminiy oraliq — eng maqbul formatni taklif qilish uchun.",
    qContactQ:"Taklifni qayerga yuboraylik?", qContactHint:"48 soat ichida bog'lanamiz.",
    fName:"Ismingiz", fNamePh:"Ism", fContact:"Telefon yoki Instagram", fContactPh:"+998… yoki @username", fComment:"Loyiha haqida ikki og'iz (ixtiyoriy)", fCommentPh:"Vazifa haqida qisqacha",
    qErr:"Ism va kontaktni to'ldiring", backBtn:"← Orqaga", submitBtn:"Arizani yuborish →", sendingTxt:"Yuborilmoqda…", doneLbl:"Tayyor",
    successPre:"Rahmat, ", successP1:"Javoblaringiz asosida taklif tayyorlayapmiz. 48 soat ichida bog'lanamiz.", successP2:"Tezroq xohlaysizmi — darhol yozing:", successBtn:"Instagramda yozish →",
    lbPlaceholder:"Bu yerda sizning videongiz bo'ladi",
    cat:{ ad:"Reklama", reels:"Reels", brand:"Brend-film", ai:"AI-video", clip:"Klip" },
    works:[
      {title:"Kolleksiya ishga tushirish", res:"2.1M ko'rish"},
      {title:"Brend uchun seriya", res:"+340% qamrov"},
      {title:"Kompaniya tarixi", res:"imij rolik"},
      {title:"Generative spot", res:"AI-grafika"},
      {title:"Musiqiy video", res:"cinematic"},
      {title:"Xizmat promosi", res:"konversiya x2"},
      {title:"Kontent paket", res:"oyiga 30 rolik"},
      {title:"Atmosferik kino", res:"ijtimoiy tarmoq uchun"},
      {title:"Virtual sahna", res:"suratga olishsiz"},
    ],
    services:[
      {v:"video", l:"Video"}, {v:"site", l:"Sayt"}, {v:"reels", l:"Ijtimoiy tarmoq uchun Reels"}, {v:"automation", l:"Avtomatlashtirish"}, {v:"unknown", l:"Bilmadim — maslahat bering"},
    ],
    purpose:{
      video:["Mahsulot yoki xizmat reklamasi","Brend imiji","Mahsulotni ishga tushirish","Ijtimoiy tarmoq uchun kontent","Tadbirni suratga olish"],
      site:["Lending","Onlayn-do'kon","Korporativ sayt","Vau-effektli sayt (shu kabi)"],
      reels:["Mahsulotni targ'ib qilish","Shaxsiy brend","Auditoriyani qizdirish","Muntazam kontent"],
      automation:["Chat-botlar","CRM/jadvalga arizalar","Servislar integratsiyasi","Hali aniq emas"],
    },
    timeline:["Shoshilinch (2 hafta ichida)","Bir oy ichida","1–3 oy","Hali tanlayapman"],
    budget:["$500 gacha","$500–1500","$1500–5000","$5000+","Alohida kelishamiz"],
  },
};

let curLang = "ru";
function t(){ return I18N[curLang] || I18N.ru; }

/* ---------- nav scroll ---------- */
const nav = document.getElementById("nav");
addEventListener("scroll", () => nav.classList.toggle("scrolled", scrollY > 20));

/* ---------- mobile drawer ---------- */
const burger = document.getElementById("burger");
const drawer = document.getElementById("drawer");
burger.addEventListener("click", () => {
  const open = drawer.classList.toggle("open");
  burger.style.opacity = open ? .4 : 1;
});
document.querySelectorAll(".js-drawer-link").forEach(a =>
  a.addEventListener("click", () => { drawer.classList.remove("open"); burger.style.opacity = 1; }));

/* ---------- i18n apply + language switch ---------- */
function applyStatic(){
  const d = t();
  document.querySelectorAll("[data-i18n]").forEach(e => {
    const k = e.getAttribute("data-i18n");
    if (d[k] != null) e.textContent = d[k];
  });
  document.querySelectorAll("[data-i18n-ph]").forEach(e => {
    const k = e.getAttribute("data-i18n-ph");
    if (d[k] != null) e.setAttribute("placeholder", d[k]);
  });
  document.documentElement.lang = curLang;
}
function applyLang(L){
  if (!I18N[L]) return;
  curLang = L;
  document.querySelectorAll(".lang button").forEach(x => x.classList.toggle("active", x.dataset.l === L));
  applyStatic();
  renderWorks(currentFilter);
  if (modal.classList.contains("open")) { finished ? showSuccess() : render(); }
}
document.querySelectorAll(".lang button").forEach(b =>
  b.addEventListener("click", () => applyLang(b.dataset.l)));

/* ---------- reveal on scroll ---------- */
const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: .15 });
document.querySelectorAll(".reveal").forEach(el => io.observe(el));

/* ============================================================
   ПОРТФОЛИО — цвета/категории; подписи берутся из I18N
============================================================ */
const WORKS = [
  { cat: "ad",    c1: "#6ee7ff", c2: "#9b8cff" },
  { cat: "reels", c1: "#9b8cff", c2: "#ffcd6e" },
  { cat: "brand", c1: "#ffcd6e", c2: "#6ee7ff" },
  { cat: "ai",    c1: "#6ee7ff", c2: "#9b8cff" },
  { cat: "clip",  c1: "#9b8cff", c2: "#6ee7ff" },
  { cat: "ad",    c1: "#ffcd6e", c2: "#9b8cff" },
  { cat: "reels", c1: "#6ee7ff", c2: "#ffcd6e" },
  { cat: "brand", c1: "#9b8cff", c2: "#6ee7ff" },
  { cat: "ai",    c1: "#ffcd6e", c2: "#6ee7ff" },
];
const playSvg = '<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>';
const worksGrid = document.getElementById("worksGrid");
let currentFilter = "all";
function renderWorks(filter = "all") {
  currentFilter = filter;
  const d = t();
  worksGrid.innerHTML = "";
  WORKS.forEach((w, idx) => {
    if (filter !== "all" && w.cat !== filter) return;
    const tw = (d.works && d.works[idx]) ? d.works[idx] : { title: "", res: "" };
    const catLabel = (d.cat && d.cat[w.cat]) ? d.cat[w.cat] : w.cat;
    const el = document.createElement("div");
    el.className = "work";
    el.dataset.video = "assets/user-video-" + String(idx + 1).padStart(2, "0") + ".mp4";
    el.innerHTML =
      '<div class="thumb" style="background:linear-gradient(150deg,' + w.c1 + '33,' + w.c2 + '22),radial-gradient(circle at 60% 30%,' + w.c1 + '55,transparent 60%),#0d0d12"><video src="' + el.dataset.video + '" muted loop autoplay playsinline preload="metadata"></video></div>' +
      '<div class="play">' + playSvg + '</div>' +
      '<div class="ov"><div class="cat">' + catLabel + '</div><div class="ttl">' + tw.title + '</div><div class="res">' + tw.res + '</div></div>';
    el.addEventListener("click", () => openLightbox(el.dataset.video));
    worksGrid.appendChild(el);
  });
}
document.querySelectorAll("#filters button").forEach(b => b.addEventListener("click", () => {
  document.querySelectorAll("#filters button").forEach(x => x.classList.remove("active"));
  b.classList.add("active");
  renderWorks(b.dataset.f);
}));

/* ---------- lightbox ---------- */
const lb = document.getElementById("lightbox"), lbInner = document.getElementById("lbInner");
function openLightbox(src) {
  lbInner.innerHTML =
    '<video src="' + src + '" controls autoplay playsinline onerror="this.style.display=\'none\';this.nextElementSibling.style.display=\'flex\'"></video>' +
    '<div class="lb-placeholder" style="display:none">🎬<div>' + t().lbPlaceholder + '<br><small style="opacity:.6">' + src + '</small></div></div>';
  lb.classList.add("open");
}
document.getElementById("lbClose").addEventListener("click", closeLightbox);
lb.addEventListener("click", e => { if (e.target === lb) closeLightbox(); });
function closeLightbox() { lb.classList.remove("open"); lbInner.innerHTML = ""; }

/* ============================================================
   ОПРОСНИК (наводящие вопросы → Google Sheets)
============================================================ */
// состояние хранит ИНДЕКСЫ выбора — чтобы переключение языка не сбивало выбор
const state = { service: null, purposeIdx: null, timelineIdx: null, budgetIdx: null, name: "", contact: "", comment: "" };
let flow = [], pos = 0, finished = false;

function buildFlow() {
  flow = state.service === "unknown"
    ? ["service", "timeline", "budget", "contact"]
    : ["service", "purpose", "timeline", "budget", "contact"];
}
buildFlow();

const modal = document.getElementById("quizModal");
const body = document.getElementById("quizBody");
const progBar = document.getElementById("progBar");
const stepLbl = document.getElementById("stepLbl");

function openQuiz() { pos = 0; finished = false; buildFlow(); render(); modal.classList.add("open"); document.body.style.overflow = "hidden"; }
function closeQuiz() { modal.classList.remove("open"); document.body.style.overflow = ""; }
document.querySelectorAll(".js-open-quiz").forEach(b => b.addEventListener("click", openQuiz));
document.getElementById("quizClose").addEventListener("click", closeQuiz);
modal.addEventListener("click", e => { if (e.target === modal) closeQuiz(); });

function optHTML(label, selected) {
  return '<button class="opt' + (selected ? " sel" : "") + '"><span class="bullet"></span>' + label + "</button>";
}
function stepLabel() {
  return t().stepTpl.replace("%n", pos + 1).replace("%t", flow.length);
}

function render() {
  finished = false;
  const d = t();
  const id = flow[pos];
  progBar.style.width = ((pos + 1) / flow.length * 100) + "%";
  stepLbl.textContent = stepLabel();
  let html = "";

  if (id === "service") {
    html += '<div class="quiz-q">' + d.qServiceQ + '</div><div class="quiz-hint">' + d.qServiceHint + '</div><div class="opts">';
    d.services.forEach(o => html += optHTML(o.l, state.service === o.v).replace("<button", '<button data-v="' + o.v + '"'));
    html += "</div>";
    body.innerHTML = html;
    body.querySelectorAll(".opt").forEach(b => b.addEventListener("click", () => {
      state.service = b.dataset.v;
      state.purposeIdx = null;
      buildFlow(); next();
    }));

  } else if (id === "purpose") {
    const list = (d.purpose[state.service]) || [];
    html += '<div class="quiz-q">' + d.qPurposeQ + '</div><div class="quiz-hint">' + d.qPurposeHint + '</div><div class="opts">';
    list.forEach((p, i) => html += optHTML(p, state.purposeIdx === i).replace("<button", '<button data-i="' + i + '"'));
    html += "</div>" + navHTML();
    body.innerHTML = html;
    body.querySelectorAll(".opt").forEach(b => b.addEventListener("click", () => { state.purposeIdx = +b.dataset.i; next(); }));
    wireNav();

  } else if (id === "timeline") {
    html += '<div class="quiz-q">' + d.qTimelineQ + '</div><div class="quiz-hint">' + d.qTimelineHint + '</div><div class="opts">';
    d.timeline.forEach((tx, i) => html += optHTML(tx, state.timelineIdx === i).replace("<button", '<button data-i="' + i + '"'));
    html += "</div>" + navHTML();
    body.innerHTML = html;
    body.querySelectorAll(".opt").forEach(b => b.addEventListener("click", () => { state.timelineIdx = +b.dataset.i; next(); }));
    wireNav();

  } else if (id === "budget") {
    html += '<div class="quiz-q">' + d.qBudgetQ + '</div><div class="quiz-hint">' + d.qBudgetHint + '</div><div class="opts">';
    d.budget.forEach((tx, i) => html += optHTML(tx, state.budgetIdx === i).replace("<button", '<button data-i="' + i + '"'));
    html += "</div>" + navHTML();
    body.innerHTML = html;
    body.querySelectorAll(".opt").forEach(b => b.addEventListener("click", () => { state.budgetIdx = +b.dataset.i; next(); }));
    wireNav();

  } else if (id === "contact") {
    html += '<div class="quiz-q">' + d.qContactQ + '</div><div class="quiz-hint">' + d.qContactHint + '</div>' +
      '<div class="field"><label>' + d.fName + '</label><input id="qName" value="' + esc(state.name) + '" placeholder="' + d.fNamePh + '" /></div>' +
      '<div class="field"><label>' + d.fContact + '</label><input id="qContact" value="' + esc(state.contact) + '" placeholder="' + d.fContactPh + '" /></div>' +
      '<div class="field"><label>' + d.fComment + '</label><textarea id="qComment" placeholder="' + d.fCommentPh + '">' + esc(state.comment) + '</textarea></div>' +
      '<div id="qErr" style="color:#ff8c8c;font-size:13.5px;margin-bottom:8px;display:none">' + d.qErr + '</div>' +
      navHTML(true);
    body.innerHTML = html;
    wireNav(true);
  }
}

function esc(s){ return String(s == null ? "" : s).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;"); }

function navHTML(isLast) {
  const d = t();
  return '<div class="quiz-nav">' +
    (pos > 0 ? '<button class="btn btn-back" id="qBack">' + d.backBtn + '</button>' : "<span></span>") +
    (isLast ? '<button class="btn btn-primary" id="qSubmit">' + d.submitBtn + '</button>' : "<span></span>") +
    "</div>";
}
function wireNav(isLast) {
  const back = document.getElementById("qBack");
  if (back) back.addEventListener("click", prev);
  if (isLast) document.getElementById("qSubmit").addEventListener("click", submitQuiz);
}
function next() { if (pos < flow.length - 1) { pos++; render(); } }
function prev() { if (pos > 0) { pos--; render(); } }

async function submitQuiz() {
  const name = document.getElementById("qName").value.trim();
  const contact = document.getElementById("qContact").value.trim();
  const comment = document.getElementById("qComment").value.trim();
  if (!name || !contact) { document.getElementById("qErr").style.display = "block"; return; }
  state.name = name; state.contact = contact; state.comment = comment;

  // в таблицу шлём подписи по-русски (единый язык для команды), плюс поле lang
  const ru = I18N.ru;
  const svc = ru.services.find(o => o.v === state.service);
  const purposeRu = (state.purposeIdx != null && ru.purpose[state.service]) ? ru.purpose[state.service][state.purposeIdx] : "—";
  const params = new URLSearchParams(location.search);
  const payload = {
    name, contact, comment,
    service: svc ? svc.l : "—",
    purpose: purposeRu || "—",
    timeline: state.timelineIdx != null ? ru.timeline[state.timelineIdx] : "—",
    budget: state.budgetIdx != null ? ru.budget[state.budgetIdx] : "—",
    lang: curLang,
    mode: params.get("mode") || "landing",
    source: "quiz",
    url: location.href,
    ts: new Date().toISOString(),
  };

  document.getElementById("qSubmit").textContent = t().sendingTxt;

  if (CONFIG.APPS_SCRIPT_URL) {
    try {
      await fetch(CONFIG.APPS_SCRIPT_URL, {
        method: "POST", mode: "no-cors",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(payload),
      });
    } catch (e) { console.warn("submit error", e); }
  } else {
    console.log("QUIZ DEMO — заявка (подставьте APPS_SCRIPT_URL чтобы слать в Sheets):", payload);
  }
  showSuccess();
}

function showSuccess() {
  finished = true;
  const d = t();
  progBar.style.width = "100%";
  stepLbl.textContent = d.doneLbl;
  body.innerHTML =
    '<div class="success">' +
    '<div class="check"><svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></div>' +
    "<h3>" + d.successPre + esc(state.name || "") + "!</h3>" +
    "<p>" + d.successP1 + "<br>" + d.successP2 + "</p>" +
    '<a class="btn btn-primary btn-lg" href="' + CONFIG.INSTAGRAM + '" target="_blank" rel="noopener">' + d.successBtn + "</a>" +
    "</div>";
}

/* ---------- init ---------- */
applyLang("ru");
