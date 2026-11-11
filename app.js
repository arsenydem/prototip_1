const candidates = [
  { id: 1, name: "Мария Соколова", role: "Маркетолог", vacancy: "Младший маркетолог", date: "Сегодня, 10:24", status: "На оценке", score: null, initials: "МС", answer: "", files: [{ name: "Решение Марии Соколовой.pdf", url: "candidate_answer_marketing.pdf", type: "application/pdf" }] },
  { id: 2, name: "Илья Воронов", role: "Frontend-разработчик", vacancy: "Стажёр Frontend", date: "Сегодня, 09:16", status: "На оценке", score: null, initials: "ИВ", answer: "", files: [{ name: "Каталог услуг.html", url: "candidate_answer_frontend.html", type: "text/html" }, { name: "Стили каталога.css", url: "candidate_answer_frontend.css", type: "text/css" }, { name: "Логика каталога.js", url: "candidate_answer_frontend.js", type: "text/javascript" }] },
  { id: 3, name: "Алина Сергеева", role: "Юрист", vacancy: "Помощник юриста", date: "Вчера, 16:42", status: "На оценке", score: null, initials: "АС", answer: "", files: [{ name: "Разбор договора Алины Сергеевой.pdf", url: "candidate_answer_legal.pdf", type: "application/pdf" }] },
  { id: 4, name: "Дмитрий Павлов", role: "Маркетолог", vacancy: "Младший маркетолог", date: "Вчера, 12:08", status: "Оценён", score: 86, initials: "ДП", answer: "Сначала уточнил бы цель кампании и ограничения по бюджету. Затем выбрал бы один сегмент, проверил несколько рекламных сообщений на небольшой аудитории и перераспределил бюджет в пользу варианта с лучшей конверсией." },
  { id: 5, name: "Софья Лебедева", role: "Frontend-разработчик", vacancy: "Стажёр Frontend", date: "12 ноя, 14:31", status: "На оценке", score: null, initials: "СЛ", answer: "Сначала посмотрела бы, какие данные приходят от сервера, и обработала пустое состояние. Компоненты разделила бы по смыслу, чтобы карточки можно было переиспользовать на других страницах." },
  { id: 6, name: "Кирилл Егоров", role: "Юрист", vacancy: "Помощник юриста", date: "11 ноя, 11:02", status: "Оценён", score: 72, initials: "КЕ", answer: "Сверил бы условия договора с исходной договорённостью и проверил наличие сроков и порядка приёмки. Неясные пункты вынес бы в список вопросов для ответственного коллеги." },
  { id: 7, name: "Полина Волкова", role: "Маркетолог", vacancy: "Младший маркетолог", date: "10 ноя, 17:20", status: "На оценке", score: null, initials: "ПВ", answer: "Для начала изучу продукт и конкурентов, затем уточню портрет аудитории. Проверю гипотезу через небольшую серию публикаций и сравню охваты и переходы." },
  { id: 8, name: "Артём Никитин", role: "Frontend-разработчик", vacancy: "Стажёр Frontend", date: "10 ноя, 13:55", status: "На оценке", score: null, initials: "АН", answer: "Сначала уточнил бы структуру данных и проверил пограничные случаи. Сделал бы простой компонент списка и добавил состояния для загрузки, пустого результата и ошибки." }
];

const vacancies = [
  { id: 1, title: "Младший маркетолог", team: "Маркетинг", applicants: 3, status: "Активна", task: "Запуск рекламной кампании", company: "Компания из сферы электронной коммерции" },
  { id: 2, title: "Стажёр Frontend", team: "Разработка", applicants: 3, status: "Активна", task: "Собрать страницу каталога", company: "Продуктовая IT-команда" },
  { id: 3, title: "Помощник юриста", team: "Юридический отдел", applicants: 2, status: "Активна", task: "Проверка договора поставки", company: "Компания с внутренней юридической командой" }
];

const tasks = [
  {
    title: "Запуск рекламной кампании", type: "Маркетинг", role: "Младший маркетолог",
    duration: "60–90 минут", candidates: 3, icon: "↗", caseFile: "case_marketing.pdf",
    context: "Небольшая компания запускает новую онлайн-услугу. На тест продвижения есть 30 000 ₽ и две недели. Есть лендинг и база подписчиков, но ещё нет статистики по платной рекламе.",
    prompt: "Предложите план первого рекламного теста. Нам важно увидеть ход ваших мыслей, а не угадать единственно правильный ответ.",
    requirements: [
      "Опишите, какую аудиторию и почему проверите первой.",
      "Предложите 2 рекламные гипотезы и каналы для их проверки.",
      "Распределите тестовый бюджет и объясните выбор.",
      "Назовите метрики и условия, по которым решите продолжить или остановить тест."
    ],
    deliverable: "Короткий план на 1–2 страницы или до 5 слайдов. Можно указать допущения и вопросы, которые вы бы задали заказчику.",
    criteria: [
      { name: "Аудитория и гипотезы", description: "Связь сегмента аудитории с проверяемыми предположениями", weight: 30 },
      { name: "План и бюджет", description: "Реалистичный план тестирования в заданных ограничениях", weight: 25 },
      { name: "Метрики и решения", description: "Понятные критерии успеха и следующие шаги", weight: 30 },
      { name: "Ясность объяснения", description: "Структурированная аргументация и обозначенные допущения", weight: 15 }
    ]
  },
  {
    title: "Собрать страницу каталога", type: "IT", role: "Стажёр Frontend",
    duration: "до 2 часов", candidates: 3, icon: "⌘", caseFile: "case_frontend.html",
    context: "В каталоге нужно показать список услуг, полученный от API. Считайте, что API возвращает массив объектов с полями name, description и price. Макета и готового API нет.",
    prompt: "Сделайте небольшой адаптивный экран каталога. Выберите удобный для вас формат результата: рабочий прототип, ссылка на репозиторий или описание решения с фрагментами кода.",
    requirements: [
      "Покажите карточки услуг с названием, кратким описанием и ценой.",
      "Предусмотрите состояния загрузки, пустого списка и ошибки.",
      "Опишите, как экран будет выглядеть на узком мобильном экране.",
      "Кратко объясните структуру компонентов и как запустить или проверить результат."
    ],
    deliverable: "Ссылка на прототип или код и короткая инструкция по запуску. Если не успеваете реализовать всё, опишите оставшиеся шаги.",
    criteria: [
      { name: "Рабочее решение", description: "Корректный вывод карточек и обработка состояний", weight: 35 },
      { name: "Структура кода", description: "Понятное разделение компонентов и логики", weight: 25 },
      { name: "Адаптивность и удобство", description: "Читаемый интерфейс на разных размерах экрана", weight: 20 },
      { name: "Объяснение решения", description: "Понятные инструкции, допущения и дальнейшие шаги", weight: 20 }
    ]
  },
  {
    title: "Проверка договора поставки", type: "Юриспруденция", role: "Помощник юриста",
    duration: "45–60 минут", candidates: 2, icon: "§", caseFile: "case_legal.pdf",
    context: "Компания планирует заказать 200 единиц товара. Поставщик обещает доставить заказ за 20 дней; по переписке стороны обсуждали предоплату 50%. В проекте договора не описаны последствия задержки и порядок приёмки товара.",
    prompt: "Подготовьте краткий разбор проекта условий для руководителя. Это учебная ситуация: не нужно ссылаться на конкретные нормы права, если для ответа не хватает данных — обозначьте это.",
    requirements: [
      "Назовите условия, которые стоит уточнить до подписания.",
      "Объясните, какие практические риски возникают из-за пробелов в условиях.",
      "Сформулируйте вопросы поставщику или заказчику.",
      "Предложите, что стоит зафиксировать в договоре про срок, приёмку и задержку поставки."
    ],
    deliverable: "Краткая записка до одной страницы: риски, вопросы и предлагаемые уточнения. Отделяйте известные факты от предположений.",
    criteria: [
      { name: "Выявление рисков", description: "Замечены существенные пробелы в исходных условиях", weight: 35 },
      { name: "Практические предложения", description: "Предложены понятные способы уточнить условия", weight: 30 },
      { name: "Работа с неопределённостью", description: "Факты отделены от предположений, заданы уместные вопросы", weight: 20 },
      { name: "Ясность записки", description: "Выводы краткие, структурированные и понятные бизнесу", weight: 15 }
    ]
  }
];

let currentPage = "overview";
let activeCandidateId = null;
let selectedCandidateVacancy = "";
let audience = "employer";
const applications = [];
let toastTimer;

const pageNames = { overview: "Обзор", vacancies: "Вакансии", candidates: "Кандидаты", tasks: "Задания", evaluation: "Оценка", browse: "Вакансии и задания", "my-applications": "Мои отклики" };
const escapeHTML = (value) => String(value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char]));
const candidateById = (id) => candidates.find((candidate) => candidate.id === Number(id));

function statusClass(status) {
  return ({ "На оценке": "review", "Оценён": "done" })[status] || "new";
}

function renderCandidateRow(candidate) {
  return `<tr data-candidate="${candidate.id}">
    <td><div class="candidate-cell"><span class="candidate-avatar">${escapeHTML(candidate.initials)}</span><div><div class="candidate-name">${escapeHTML(candidate.name)}</div><div class="candidate-role">${escapeHTML(candidate.role)}</div></div></div></td>
    <td>${escapeHTML(candidate.vacancy)}</td>
    <td>${escapeHTML(candidate.date)}</td>
    <td>${candidate.score === null ? '<span class="score-muted">—</span>' : `<span class="score">${candidate.score}/100</span>`}</td>
    <td><span class="status ${statusClass(candidate.status)}">${escapeHTML(candidate.status)}</span></td>
  </tr>`;
}

function renderOverview() {
  const pending = candidates.filter((candidate) => candidate.status === "На оценке");
  return `<div class="page-heading">
    <div><div class="eyebrow" id="overview-date"></div><h1>Добро пожаловать! <span aria-hidden="true">✳</span></h1><p class="page-subtitle">Вот что происходит с наймом в вашей команде.</p></div>
    <button class="primary-button" data-action="new-vacancy"><span class="plus">+</span> Новая вакансия</button>
  </div>
  <section class="welcome-banner">
    <div class="welcome-copy"><div class="eyebrow">Найм по реальным навыкам</div><h2>Смотрите на то, что человек умеет</h2><p>Практические задания помогают оценить кандидата по работе, а не только по резюме. Вы уже на верном пути.</p><button class="text-button" data-page="tasks">Посмотреть задания <span>→</span></button></div>
    <div class="banner-art" aria-hidden="true"><div class="art-circle"></div><div class="art-card one"><div class="art-line short"></div><div class="art-line"></div><div class="art-line short"></div><div class="art-score">Задание <span>✓</span></div></div><div class="art-card two"><div class="art-line short"></div><div class="art-line"></div><div class="art-score">Оценка <span>86</span></div></div></div>
  </section>
  <section class="stats-grid" aria-label="Статистика найма">
    <div class="stat-card"><div class="stat-top"><span>Кандидаты</span><span class="stat-icon">♙</span></div><div class="stat-number">${candidates.length}<span class="stat-trend">+3 за неделю</span></div><div class="stat-foot">по всем активным вакансиям</div></div>
    <div class="stat-card"><div class="stat-top"><span>Ждут вашей оценки</span><span class="stat-icon">◷</span></div><div class="stat-number">${pending.length}<span class="stat-trend">требуют внимания</span></div><div class="stat-foot">с выполненным заданием</div></div>
    <div class="stat-card"><div class="stat-top"><span>Средний балл</span><span class="stat-icon">↗</span></div><div class="stat-number">79<span class="stat-trend">из 100</span></div><div class="stat-foot">по оценённым кандидатам</div></div>
    <div class="stat-card"><div class="stat-top"><span>Активные вакансии</span><span class="stat-icon">▤</span></div><div class="stat-number">${vacancies.length}<span class="stat-trend">в работе</span></div><div class="stat-foot">в 3 направлениях</div></div>
  </section>
  <div class="content-grid">
    <section class="panel">
      <div class="panel-header"><div><h2 class="panel-title">Кандидаты</h2><p class="panel-subtitle">Последние отклики и результаты заданий</p></div><button class="text-button" data-page="candidates">Все кандидаты →</button></div>
      <div class="active-job"><div class="job-copy"><div><strong>Младший маркетолог</strong><span>3 кандидата · задание: запуск кампании</span></div></div><select class="job-select" aria-label="Выбрать вакансию"><option>Все вакансии</option><option>Маркетинг</option><option>Frontend</option><option>Юриспруденция</option></select></div>
      <div class="panel-body"><div class="table-wrap"><table class="candidate-table"><thead><tr><th>Кандидат</th><th>Вакансия</th><th>Отклик</th><th>Балл</th><th>Статус</th></tr></thead><tbody>${candidates.slice(0, 4).map(renderCandidateRow).join("")}</tbody></table></div><div class="table-footer"><button class="text-button" data-page="candidates">Показать всех кандидатов <span>↓</span></button></div></div>
    </section>
    <div class="right-column">
      <section class="panel"><div class="panel-header"><div><h2 class="panel-title">Нужна ваша оценка</h2><p class="panel-subtitle">Выполненные задания</p></div><span class="nav-count" style="color:#6e7c71;background:#f0f5ef">${pending.length}</span></div><div class="panel-body review-list">${pending.length ? pending.map((candidate) => `<div class="review-item"><span class="candidate-avatar">${escapeHTML(candidate.initials)}</span><div class="review-info"><strong>${escapeHTML(candidate.name)}</strong><span>${escapeHTML(candidate.vacancy)}</span></div><button class="review-action" data-candidate="${candidate.id}" aria-label="Оценить ${escapeHTML(candidate.name)}">→</button></div>`).join("") : '<div class="empty-state">Пока всё оценено!</div>'}<button class="text-button section-spacer" data-page="evaluation">Перейти к оценке →</button></div></section>
    </div>
  </div>`;
}

function renderCandidates(showOnlyPending = false) {
  const filtered = candidates.filter((candidate) =>
    (!selectedCandidateVacancy || candidate.vacancy === selectedCandidateVacancy) &&
    (!showOnlyPending || candidate.status === "На оценке")
  );
  return `<div class="page-heading"><div><div class="eyebrow">Воронка найма</div><h1>${showOnlyPending ? "Оценка кандидатов" : "Кандидаты"}</h1><p class="page-subtitle">${showOnlyPending ? "Задания выполнены — осталось оценить результат по критериям." : "Все отклики и результаты практических заданий в одном месте."}</p></div><button class="secondary-button" data-page="vacancies">Посмотреть вакансии</button></div>
  <div class="toolbar"><label class="search-box"><input id="candidate-search" type="search" placeholder="Поиск по имени или вакансии..." aria-label="Поиск кандидатов"></label><select class="filter-select" id="status-filter" aria-label="Фильтр по статусу"><option value="">Все статусы</option><option>На оценке</option><option>Оценён</option></select><select class="filter-select" id="vacancy-filter" aria-label="Фильтр по вакансии"><option value="">Все вакансии</option>${vacancies.map((vacancy) => `<option value="${escapeHTML(vacancy.title)}" ${selectedCandidateVacancy === vacancy.title ? "selected" : ""}>${escapeHTML(vacancy.title)}</option>`).join("")}</select></div>
  <section class="panel full-table-panel"><div class="table-wrap"><table class="candidate-table"><thead><tr><th>Кандидат</th><th>Вакансия</th><th>Отклик</th><th>Балл</th><th>Статус</th></tr></thead><tbody id="candidate-rows">${filtered.map(renderCandidateRow).join("")}</tbody></table></div><div id="candidate-empty" class="empty-state" style="display:none"><strong>Ничего не найдено</strong>Попробуйте изменить поисковый запрос или фильтр.</div></section>`;
}

function renderVacancies() {
  return `<div class="page-heading"><div><div class="eyebrow">Рабочие пространства</div><h1>Вакансии</h1><p class="page-subtitle">Каждая вакансия связана с задачей, похожей на реальную работу.</p></div><button class="primary-button" data-action="new-vacancy"><span class="plus">+</span> Новая вакансия</button></div>
  <div class="vacancy-grid">${vacancies.map((vacancy) => `<article class="vacancy-card" data-open-vacancy="${escapeHTML(vacancy.title)}" tabindex="0" role="button" aria-label="Открыть кандидатов на вакансию ${escapeHTML(vacancy.title)}"><div class="vacancy-card-top"><span class="status done">${escapeHTML(vacancy.status)}</span></div><h3>${escapeHTML(vacancy.title)}</h3><p>${escapeHTML(vacancy.team)} · начальный уровень</p><div class="vacancy-meta"><span>♙ ${vacancy.applicants} кандидата</span><span>▧ Задание готово</span></div><div class="vacancy-footer"><span class="tag">${escapeHTML(vacancy.team)}</span><span class="text-button" aria-hidden="true">Открыть →</span></div></article>`).join("")}</div>`;
}

function renderTasks() {
  return `<div class="page-heading"><div><div class="eyebrow">Практическая оценка</div><h1>Задания</h1><p class="page-subtitle">Рабочие ситуации, адаптированные под начинающих специалистов.</p></div><button class="primary-button" data-action="new-task"><span class="plus">+</span> Создать задание</button></div>
  <div class="task-grid">${tasks.map((task) => `<article class="task-card"><span class="task-type">${escapeHTML(task.icon)}</span><h3><button class="task-title task-title-button" data-task-title="${escapeHTML(task.title)}">${escapeHTML(task.title)}</button></h3><p>${escapeHTML(task.role)} · ${escapeHTML(task.type)}</p><div class="task-meta">Время: ${escapeHTML(task.duration)}</div><div class="vacancy-meta"><span>${task.candidates} кандидата</span><span>${task.criteria.length} критерия оценки</span></div><div class="vacancy-footer"><span class="tag">Готово к отправке</span><button class="text-button" data-task-title="${escapeHTML(task.title)}">Открыть задание →</button></div></article>`).join("")}</div>`;
}

function renderSpecialist() {
  if (currentPage === "my-applications") {
    const submitted = applications.map((application) => {
      const task = tasks.find((item) => item.title === application.taskTitle);
      const vacancy = vacancies.find((item) => item.task === application.taskTitle);
      const submittedFiles = application.files.map((file) => `<a class="text-button" href="${escapeHTML(file.url)}" download="${escapeHTML(file.name)}">${escapeHTML(file.name)} ↓</a>`).join("");
      return `<article class="application-card"><span class="task-type">${escapeHTML(task?.icon || "▧")}</span><div class="application-card-copy"><h3>${escapeHTML(task?.role || application.taskTitle)}</h3><p>${escapeHTML(vacancy?.company || "Работодатель")} · ${escapeHTML(task?.type || "Задание")}</p><span class="status done">Отклик отправлен</span></div><div class="application-files">${submittedFiles}</div><button class="text-button" data-task-title="${escapeHTML(application.taskTitle)}" data-candidate-view="true">Открыть задание →</button></article>`;
    }).join("");
    return `<div class="page-heading"><div><div class="eyebrow">Ваш поиск</div><h1>Мои отклики</h1><p class="page-subtitle">Задания, на которые вы уже откликнулись.</p></div><button class="secondary-button" data-page="browse">Найти вакансию</button></div>${submitted ? `<div class="application-list">${submitted}</div>` : `<section class="panel empty-applications"><div class="empty-state"><strong>Пока нет откликов</strong>Выберите вакансию, откройте задание и отправьте решение работодателю.<div><button class="primary-button" data-page="browse">Посмотреть вакансии</button></div></div></section>`}`;
  }

  return `<div class="specialist-hero"><div class="eyebrow">Работа для начинающих специалистов</div><h1>Покажите, как вы решаете реальные задачи</h1><p>Выберите направление, познакомьтесь с работодателем и попробуйте практическое задание до отклика.</p></div>
  <div class="specialist-toolbar">
    <label class="search-box"><input id="job-search" type="search" placeholder="Профессия, компания или направление" aria-label="Поиск вакансий"></label>
    <select class="filter-select" id="profession-filter" aria-label="Фильтр по профессии"><option value="">Все профессии</option>${[...new Set(vacancies.map((vacancy) => vacancy.title))].map((title) => `<option>${escapeHTML(title)}</option>`).join("")}</select>
    <select class="filter-select" id="company-filter" aria-label="Фильтр по компании"><option value="">Все компании</option>${[...new Set(vacancies.map((vacancy) => vacancy.company))].map((company) => `<option>${escapeHTML(company)}</option>`).join("")}</select>
  </div>
  <div class="specialist-layout">
    <section class="specialist-jobs"><div class="section-heading"><div><h2>Открытые задания</h2><p>Откликайтесь результатом, а не только резюме.</p></div><span class="tag">${vacancies.length} вакансии</span></div><div id="job-list" class="job-list">${renderJobCards(vacancies)}</div></section>
  </div>`;
}

function renderJobCards(list) {
  return list.map((vacancy) => {
    const task = tasks.find((item) => item.title === vacancy.task);
    if (!task) return "";
    return `<article class="job-card"><div class="job-card-heading"><span class="tag">${escapeHTML(task.type)}</span></div><h3>${escapeHTML(vacancy.title)}</h3><div class="job-company">${escapeHTML(vacancy.company || "Компания")}</div><p>${escapeHTML(task.prompt)}</p><div class="job-card-meta"><span>${escapeHTML(task.duration)}</span><span>${task.criteria.length} критерия оценки</span><span>Начальный уровень</span></div><div class="job-card-actions"><button class="secondary-button" data-task-title="${escapeHTML(task.title)}" data-candidate-view="true">Посмотреть кейс</button><button class="primary-button" data-task-title="${escapeHTML(task.title)}" data-candidate-view="true" data-start-task="true">Откликнуться</button></div></article>`;
  }).join("") || '<div class="empty-state"><strong>Ничего не найдено</strong>Измените поисковый запрос или фильтр.</div>';
}

function applyJobFilters() {
  const search = (document.getElementById("job-search")?.value || "").trim().toLocaleLowerCase("ru");
  const profession = document.getElementById("profession-filter")?.value || "";
  const company = document.getElementById("company-filter")?.value || "";
  const filtered = vacancies.filter((vacancy) => {
    const task = tasks.find((item) => item.title === vacancy.task);
    const text = `${vacancy.title} ${vacancy.company} ${vacancy.team} ${task?.type || ""}`.toLocaleLowerCase("ru");
    return text.includes(search) && (!profession || vacancy.title === profession) && (!company || vacancy.company === company);
  });
  document.getElementById("job-list").innerHTML = renderJobCards(filtered);
}

function openTaskModal(title, forCandidate = false, startTask = false) {
  const task = tasks.find((item) => item.title === title);
  if (!task) {
    showToast("Не удалось найти это задание");
    return;
  }
  const vacancy = vacancies.find((item) => item.task === task.title);
  const files = task.caseFile ? `<div class="case-file-links"><a href="${escapeHTML(task.caseFile)}" target="_blank" rel="noopener">Открыть файл задания ↗</a></div>` : "";
  const candidateForm = forCandidate ? `<form id="candidate-task-form" class="candidate-answer-form"><label for="candidate-answer">Комментарий к решению</label><textarea id="candidate-answer" name="answer" placeholder="Кратко опишите ваш подход к задаче (необязательно)…"></textarea><label for="candidate-files">Файл решения</label><input id="candidate-files" name="files" type="file" multiple><span class="upload-hint">Прикрепите файл любого типа — например, PDF, документ, таблицу, архив или исходный код. Можно выбрать несколько файлов, до 5 МБ каждый. Без файла можно отправить комментарий: он будет приложен как TXT.</span><button type="submit" class="primary-button">Отправить решение</button></form>` : "";
  const employerAction = forCandidate ? "" : `<button class="primary-button" data-action="adapt-task" data-task-title="${escapeHTML(task.title)}">Использовать для вакансии</button>`;
  document.getElementById("modal-root").innerHTML = `<div class="modal-backdrop" data-action="backdrop-close"><section class="modal task-modal" role="dialog" aria-modal="true" aria-labelledby="task-modal-title"><div class="modal-header"><div><div class="eyebrow">${escapeHTML(task.type)} · ${escapeHTML(task.role)}</div><h2 id="task-modal-title">${escapeHTML(task.title)}</h2><p>${escapeHTML(vacancy?.company || "Компания")} · ${escapeHTML(task.duration)} на выполнение · ${task.criteria.length} критерия оценки</p></div><button class="close-button" data-action="close-modal" aria-label="Закрыть">×</button></div><div class="modal-body">
    <section class="task-detail-section"><h3>Ситуация</h3><p>${escapeHTML(task.context)}</p></section>
    <section class="task-detail-section"><h3>Задача кандидату</h3><p>${escapeHTML(task.prompt)}</p><ul>${task.requirements.map((requirement) => `<li>${escapeHTML(requirement)}</li>`).join("")}</ul></section>
    <section class="task-detail-section"><h3>Что нужно сдать</h3><p>${escapeHTML(task.deliverable)}</p></section>
    <section class="task-detail-section"><h3>Как будем оценивать</h3><div class="rubric-list">${task.criteria.map((criterion) => `<div class="rubric-row"><span class="rubric-name">${escapeHTML(criterion.name)}</span><span class="rubric-desc">${escapeHTML(criterion.description)}</span><span class="rubric-weight">${criterion.weight}%</span></div>`).join("")}</div></section>
    ${files}${candidateForm}<div class="modal-actions"><button class="secondary-button" data-action="close-modal">Закрыть</button>${employerAction}</div>
  </div></section></div>`;
}

function renderPage() {
  document.body.classList.toggle("specialist-mode", audience === "specialist");
  document.getElementById("breadcrumb-current").textContent = pageNames[currentPage];
  document.querySelector(".breadcrumb > span").textContent = audience === "specialist" ? "Кабинет специалиста" : "Компания";
  document.getElementById("workspace-avatar").textContent = audience === "specialist" ? "С" : "К";
  document.getElementById("workspace-name").textContent = audience === "specialist" ? "Мой профиль" : "Компания";
  document.getElementById("workspace-description").textContent = audience === "specialist" ? "Поиск первой работы" : "Рабочее пространство";
  document.getElementById("profile-avatar").textContent = audience === "specialist" ? "С" : "К";
  document.getElementById("profile-name").textContent = audience === "specialist" ? "Начинающий специалист" : "Представитель компании";
  document.getElementById("profile-role").textContent = audience === "specialist" ? "Кандидат" : "Команда найма";
  document.getElementById("application-count").textContent = applications.length;
  document.querySelectorAll(".mode-button").forEach((button) => button.classList.toggle("active", button.dataset.mode === audience));
  const content = audience === "specialist" ? renderSpecialist()
    : currentPage === "overview" ? renderOverview()
    : currentPage === "vacancies" ? renderVacancies()
    : currentPage === "candidates" ? renderCandidates()
    : currentPage === "evaluation" ? renderCandidates(true)
    : renderTasks();
  document.getElementById("page-content").innerHTML = content;
  document.querySelectorAll(".nav-item").forEach((item) => item.classList.toggle("active", item.dataset.page === currentPage));
  const count = document.getElementById("candidate-count");
  if (count) count.textContent = candidates.length;
  const now = new Date();
  document.getElementById("today-label").textContent = new Intl.DateTimeFormat("ru-RU", { day: "numeric", month: "long", year: "numeric" }).format(now);
  const overviewDate = document.getElementById("overview-date");
  if (overviewDate) overviewDate.textContent = new Intl.DateTimeFormat("ru-RU", { weekday: "long", day: "numeric", month: "long" }).format(now);
}

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2800);
}

function openVacancyModal() {
  document.getElementById("modal-root").innerHTML = `<div class="modal-backdrop" data-action="backdrop-close"><section class="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title"><div class="modal-header"><div><h2 id="modal-title">Новая вакансия</h2><p>Создайте вакансию и подберите к ней практическое задание.</p></div><button class="close-button" data-action="close-modal" aria-label="Закрыть">×</button></div><form id="vacancy-form" class="modal-body"><div class="form-grid"><div class="form-field full"><label for="vacancy-title">Название вакансии</label><input id="vacancy-title" name="title" placeholder="Например, младший аналитик" required maxlength="70"></div><div class="form-field"><label for="vacancy-team">Направление</label><select id="vacancy-team" name="team"><option>Маркетинг</option><option>IT</option><option>Юриспруденция</option><option>Другое</option></select></div><div class="form-field"><label for="vacancy-level">Уровень</label><select id="vacancy-level" name="level"><option>Начинающий специалист</option><option>Стажёр</option><option>Junior</option></select></div><div class="form-field full"><label for="vacancy-description">Чем будет заниматься сотрудник?</label><textarea id="vacancy-description" name="description" placeholder="Опишите основные задачи — это поможет подобрать практический кейс."></textarea></div><div class="form-field full"><label for="vacancy-task">Практическое задание</label><select id="vacancy-task" name="task" required><option value="" disabled selected>Выберите задание</option>${tasks.map((task) => `<option value="${escapeHTML(task.title)}">${escapeHTML(task.title)}</option>`).join("")}</select></div></div><p class="form-note">Нет подходящего задания? Сначала создайте его в разделе «Задания», затем вернитесь к вакансии.</p><div class="modal-actions"><button type="button" class="secondary-button" data-action="close-modal">Отмена</button><button type="submit" class="primary-button">Создать вакансию</button></div></form></section></div>`;
  document.getElementById("vacancy-title").focus();
}

function openTaskCreationModal() {
  document.getElementById("modal-root").innerHTML = `<div class="modal-backdrop" data-action="backdrop-close"><section class="modal" role="dialog" aria-modal="true" aria-labelledby="create-task-title"><div class="modal-header"><div><h2 id="create-task-title">Новое задание</h2><p>Опишите рабочую ситуацию, задачу кандидату и критерии оценки.</p></div><button class="close-button" data-action="close-modal" aria-label="Закрыть">×</button></div><form id="task-form" class="modal-body"><div class="form-grid"><div class="form-field full"><label for="new-task-title">Название задания</label><input id="new-task-title" name="title" placeholder="Например, анализ рекламной кампании" required maxlength="90"></div><div class="form-field"><label for="new-task-role">Профессия / роль</label><input id="new-task-role" name="role" placeholder="Младший маркетолог" required maxlength="70"></div><div class="form-field"><label for="new-task-type">Направление</label><select id="new-task-type" name="type"><option>Маркетинг</option><option>IT</option><option>Юриспруденция</option><option>Другое</option></select></div><div class="form-field full"><label for="new-task-duration">Время на выполнение</label><input id="new-task-duration" name="duration" placeholder="Например, 60–90 минут" required maxlength="40"></div><div class="form-field full"><label for="new-task-context">Рабочая ситуация</label><textarea id="new-task-context" name="context" placeholder="Опишите контекст и вводные данные задачи." required maxlength="1200"></textarea></div><div class="form-field full"><label for="new-task-prompt">Задача кандидату</label><textarea id="new-task-prompt" name="prompt" placeholder="Что именно нужно сделать?" required maxlength="800"></textarea></div><div class="form-field full"><label for="new-task-requirements">Что нужно сделать (каждый пункт с новой строки)</label><textarea id="new-task-requirements" name="requirements" placeholder="Изучите исходные данные&#10;Предложите решение&#10;Обоснуйте выбор" required maxlength="1200"></textarea></div><div class="form-field full"><label for="new-task-deliverable">Что нужно сдать</label><textarea id="new-task-deliverable" name="deliverable" placeholder="Опишите ожидаемый результат и формат." required maxlength="500"></textarea></div><div class="form-field full"><label for="new-task-criteria">Критерии оценки</label><textarea id="new-task-criteria" name="criteria" placeholder="Название критерия | Что оцениваем | вес в %&#10;Анализ | Работа с исходными данными | 40&#10;Решение | Обоснованность предложения | 35&#10;Ясность | Структура ответа | 25" required maxlength="1000"></textarea><span class="upload-hint">Одна строка на критерий: название | описание | вес. Сумма весов должна быть 100%.</span></div></div><div class="modal-actions"><button type="button" class="secondary-button" data-action="close-modal">Отмена</button><button type="submit" class="primary-button">Сохранить задание</button></div></form></section></div>`;
  document.getElementById("new-task-title").focus();
}

function openCandidateModal(id) {
  const candidate = candidateById(id);
  if (!candidate) return;
  activeCandidateId = candidate.id;
  const task = tasks.find((item) => item.title === candidate.taskTitle) || tasks.find((item) => item.role === candidate.vacancy) || tasks[0];
  const files = candidate.files || [];
  const candidateFiles = files.length
    ? `<div class="submission-files"><h3>Файл решения кандидата</h3>${files.map((file) => `<div class="submission-file"><span class="file-icon">↗</span><span class="submission-file-name">${escapeHTML(file.name)}</span><a class="secondary-button" href="${escapeHTML(file.url)}" target="_blank" rel="noopener">Открыть файл</a><a class="text-button" href="${escapeHTML(file.url)}" download="${escapeHTML(file.name)}">Скачать</a></div>`).join("")}</div>`
    : `<div class="submission-files"><h3>Решение кандидата</h3><p class="page-subtitle">Кандидат пока не приложил файл.</p></div>`;
  const candidateComment = candidate.answer ? `<div class="answer-box"><strong>Комментарий кандидата</strong>${escapeHTML(candidate.answer)}</div>` : "";
  document.getElementById("modal-root").innerHTML = `<div class="modal-backdrop" data-action="backdrop-close"><section class="modal candidate-modal" role="dialog" aria-modal="true" aria-labelledby="candidate-modal-title"><div class="modal-header"><div class="candidate-detail-head"><span class="candidate-avatar">${escapeHTML(candidate.initials)}</span><div><h2 id="candidate-modal-title">${escapeHTML(candidate.name)}</h2><p>${escapeHTML(candidate.vacancy)} · отклик ${escapeHTML(candidate.date)}</p></div></div><button class="close-button" data-action="close-modal" aria-label="Закрыть">×</button></div><div class="modal-body"><div class="detail-grid"><div class="detail-box"><span>Текущий статус</span><strong><span class="status ${statusClass(candidate.status)}">${escapeHTML(candidate.status)}</span></strong></div><div class="detail-box"><span>Практическое задание</span><strong>${escapeHTML(task.title)}</strong></div></div>${candidateFiles}${candidateComment}<h3 class="criteria-title">Оценка по критериям <span>Поставьте балл от 1 до 5</span></h3><form id="score-form">${task.criteria.map((criterion, index) => `<div class="criterion"><label for="criterion-${index}">${escapeHTML(criterion.name)}<small>${escapeHTML(criterion.description)} · вес ${criterion.weight}%</small></label><div class="score-control"><input id="criterion-${index}" name="criterion" type="range" min="1" max="5" value="${candidate.score ? Math.max(1, Math.min(5, Math.round(candidate.score / 20) + (index === 0 ? 1 : 0))) : 3}"><output for="criterion-${index}"></output></div></div>`).join("")}<div class="modal-actions"><button type="button" class="secondary-button" data-action="close-modal">Закрыть</button><button type="submit" class="primary-button">Сохранить оценку</button></div></form></div></section></div>`;
  document.querySelectorAll('.score-control input[type="range"]').forEach((input) => {
    const output = input.nextElementSibling;
    output.textContent = input.value;
    input.addEventListener("input", () => { output.textContent = input.value; });
  });
}

function applyCandidateFilters() {
  const search = (document.getElementById("candidate-search")?.value || "").trim().toLocaleLowerCase("ru");
  const status = document.getElementById("status-filter")?.value || "";
  const vacancy = document.getElementById("vacancy-filter")?.value || "";
  const visible = candidates.filter((candidate) => {
    const matchesText = `${candidate.name} ${candidate.vacancy} ${candidate.role}`.toLocaleLowerCase("ru").includes(search);
    return matchesText && (!status || candidate.status === status) && (!vacancy || candidate.vacancy === vacancy) && (currentPage !== "evaluation" || candidate.status === "На оценке");
  });
  document.getElementById("candidate-rows").innerHTML = visible.map(renderCandidateRow).join("");
  document.getElementById("candidate-empty").style.display = visible.length ? "none" : "block";
}

document.addEventListener("click", (event) => {
  const vacancyCard = event.target.closest("[data-open-vacancy]");
  if (vacancyCard) {
    selectedCandidateVacancy = vacancyCard.dataset.openVacancy;
    currentPage = "candidates";
    renderPage();
    return;
  }
  const modeButton = event.target.closest("[data-mode]");
  if (modeButton) {
    audience = modeButton.dataset.mode;
    currentPage = audience === "specialist" ? "browse" : "overview";
    document.getElementById("modal-root").innerHTML = "";
    renderPage();
    return;
  }
  const pageButton = event.target.closest("[data-page]");
  if (pageButton) {
    currentPage = pageButton.dataset.page;
    if (currentPage === "candidates" || currentPage === "evaluation") selectedCandidateVacancy = "";
    renderPage();
    return;
  }
  const candidateButton = event.target.closest("[data-candidate]");
  if (candidateButton) {
    openCandidateModal(candidateButton.dataset.candidate);
    return;
  }
  const taskButton = event.target.closest("[data-task-title]");
  if (taskButton) {
    if (taskButton.dataset.action === "adapt-task") {
      document.getElementById("modal-root").innerHTML = "";
      currentPage = "vacancies";
      renderPage();
      openVacancyModal();
      const taskSelect = document.getElementById("vacancy-task");
      if (taskSelect) taskSelect.value = taskButton.dataset.taskTitle;
    } else {
      openTaskModal(taskButton.dataset.taskTitle, taskButton.dataset.candidateView === "true", taskButton.dataset.startTask === "true");
    }
    return;
  }
  const actionButton = event.target.closest("[data-action]");
  if (!actionButton) return;
  const action = actionButton.dataset.action;
  if (action === "new-vacancy") openVacancyModal();
  if (action === "new-task") openTaskCreationModal();
  if (action === "close-modal" || (action === "backdrop-close" && event.target === actionButton)) document.getElementById("modal-root").innerHTML = "";
  if (action === "help") showToast("Напишите нам: hello@praktika.team");
});

document.addEventListener("keydown", (event) => {
  const vacancyCard = event.target.closest("[data-open-vacancy]");
  if (vacancyCard && (event.key === "Enter" || event.key === " ")) {
    event.preventDefault();
    vacancyCard.click();
  }
});

document.addEventListener("input", (event) => {
  if (event.target.id === "candidate-search") applyCandidateFilters();
  if (event.target.id === "job-search") applyJobFilters();
});
document.addEventListener("change", (event) => {
  if (event.target.id === "status-filter" || event.target.id === "vacancy-filter") {
    if (event.target.id === "vacancy-filter") selectedCandidateVacancy = event.target.value;
    applyCandidateFilters();
  }
  if (event.target.id === "profession-filter" || event.target.id === "company-filter") applyJobFilters();
});

document.addEventListener("submit", (event) => {
  if (event.target.id === "candidate-task-form") {
    event.preventDefault();
    const taskTitle = document.getElementById("task-modal-title")?.textContent;
    const formData = new FormData(event.target);
    const answer = String(formData.get("answer") || "").trim();
    const selectedFiles = [...(document.getElementById("candidate-files")?.files || [])];
    if (!taskTitle || (!answer && selectedFiles.length === 0)) {
      showToast("Приложите файл решения или напишите комментарий");
      return;
    }
    if (selectedFiles.some((file) => file.size > 5 * 1024 * 1024)) {
      showToast("Размер каждого файла не должен превышать 5 МБ");
      return;
    }
    const submittedFiles = selectedFiles.map((file) => ({
      name: file.name,
      url: URL.createObjectURL(file),
      type: file.type || "application/octet-stream"
    }));
    if (submittedFiles.length === 0) {
      submittedFiles.push({
        name: "Текстовый ответ.txt",
        url: URL.createObjectURL(new Blob([answer], { type: "text/plain;charset=utf-8" })),
        type: "text/plain"
      });
    }
    const vacancy = vacancies.find((item) => item.task === taskTitle);
    const task = tasks.find((item) => item.title === taskTitle);
    const candidateNumber = candidates.length + 1;
    const candidate = {
      id: Date.now(),
      name: `Кандидат ${candidateNumber}`,
      role: task?.role || taskTitle,
      vacancy: vacancy?.title || taskTitle,
      taskTitle,
      date: "Только что",
      status: "На оценке",
      score: null,
      initials: `К${candidateNumber}`,
      answer,
      files: submittedFiles
    };
    candidates.unshift(candidate);
    if (vacancy) vacancy.applicants += 1;
    applications.unshift({ taskTitle, answer, files: submittedFiles, submittedAt: new Date().toISOString() });
    document.getElementById("modal-root").innerHTML = "";
    currentPage = "my-applications";
    renderPage();
    showToast("Отклик с решением отправлен работодателю");
  }
  if (event.target.id === "vacancy-form") {
    event.preventDefault();
    const formData = new FormData(event.target);
    const title = String(formData.get("title") || "").trim();
    if (!title) return;
    const taskTitle = String(formData.get("task") || "");
    if (!tasks.some((task) => task.title === taskTitle)) {
      showToast("Сначала выберите или создайте практическое задание");
      return;
    }
    vacancies.unshift({ id: Date.now(), title, team: String(formData.get("team")), applicants: 0, status: "Активна", task: taskTitle, company: "Ваша компания" });
    document.getElementById("modal-root").innerHTML = "";
    currentPage = "vacancies";
    renderPage();
    showToast("Вакансия создана — теперь можно настроить задание");
  }
  if (event.target.id === "task-form") {
    event.preventDefault();
    const formData = new FormData(event.target);
    const title = String(formData.get("title") || "").trim();
    const role = String(formData.get("role") || "").trim();
    const type = String(formData.get("type") || "").trim();
    const duration = String(formData.get("duration") || "").trim();
    const context = String(formData.get("context") || "").trim();
    const prompt = String(formData.get("prompt") || "").trim();
    const requirements = String(formData.get("requirements") || "").split(/\r?\n/).map((item) => item.trim()).filter(Boolean);
    const deliverable = String(formData.get("deliverable") || "").trim();
    const criteriaLines = String(formData.get("criteria") || "").split(/\r?\n/).map((item) => item.trim()).filter(Boolean);
    const criteria = criteriaLines.map((line) => {
      const [name, description, weightText] = line.split("|").map((part) => part.trim());
      return { name, description, weight: Number(weightText) };
    });
    if (tasks.some((task) => task.title.toLocaleLowerCase("ru") === title.toLocaleLowerCase("ru"))) {
      showToast("Задание с таким названием уже есть");
      return;
    }
    if (criteria.some((criterion) => !criterion.name || !criterion.description || !Number.isFinite(criterion.weight) || criterion.weight <= 0) ||
      Math.abs(criteria.reduce((sum, criterion) => sum + criterion.weight, 0) - 100) > 0.001) {
      showToast("Проверьте критерии: заполните название, описание и веса, сумма должна быть 100%");
      return;
    }
    const icon = type === "Маркетинг" ? "↗" : type === "IT" ? "⌘" : type === "Юриспруденция" ? "§" : "▧";
    tasks.unshift({
      title,
      role,
      type,
      duration,
      context,
      prompt,
      requirements,
      deliverable,
      criteria,
      candidates: 0,
      icon,
      caseFile: ""
    });
    document.getElementById("modal-root").innerHTML = "";
    currentPage = "tasks";
    renderPage();
    showToast("Задание создано");
  }
  if (event.target.id === "score-form") {
    event.preventDefault();
    const candidate = candidateById(activeCandidateId);
    if (!candidate) return;
    const task = tasks.find((item) => item.title === candidate.taskTitle) || tasks.find((item) => item.role === candidate.vacancy) || tasks[0];
    const scores = [...event.target.querySelectorAll('input[type="range"]')].map((input) => Number(input.value));
    const weightedScore = Math.round(scores.reduce((sum, score, index) => sum + score * task.criteria[index].weight, 0) / 5);
    candidate.score = weightedScore;
    candidate.status = "Оценён";
    document.getElementById("modal-root").innerHTML = "";
    renderPage();
    showToast(`Оценка сохранена: ${weightedScore}/100`);
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") document.getElementById("modal-root").innerHTML = "";
});

renderPage();
