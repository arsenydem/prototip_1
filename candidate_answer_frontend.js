const services = [
  { name: "Стратегическая сессия", description: "Разберём цели и наметим понятный план развития на ближайшие месяцы.", price: 18000 },
  { name: "Исследование аудитории", description: "Узнаем, что важно клиентам, и проверим ключевые гипотезы о продукте.", price: 24000 },
  { name: "Дизайн-концепция", description: "Соберём визуальное направление и прототип основных экранов продукта.", price: 32000 },
  { name: "Лендинг под запуск", description: "Подготовим структуру и страницу, которая объясняет ценность предложения.", price: 45000 },
  { name: "Настройка аналитики", description: "Подключим события, цели и отчёт, чтобы видеть путь пользователя.", price: 15000 },
  { name: "Консультация команды", description: "Разберём текущую задачу и предложим следующие практические шаги.", price: 6000 }
];

const list = document.querySelector("#service-list");
const search = document.querySelector("#service-search");
const count = document.querySelector("#result-count");
const currency = new Intl.NumberFormat("ru-RU", { style: "currency", currency: "RUB", maximumFractionDigits: 0 });

function renderServices(query = "") {
  const normalizedQuery = query.trim().toLocaleLowerCase("ru");
  const filtered = services.filter((service) => `${service.name} ${service.description}`.toLocaleLowerCase("ru").includes(normalizedQuery));

  count.textContent = `${filtered.length} ${filtered.length === 1 ? "услуга" : filtered.length > 1 && filtered.length < 5 ? "услуги" : "услуг"}`;

  if (filtered.length === 0) {
    list.innerHTML = '<p class="state-message">По вашему запросу ничего не найдено. Попробуйте изменить формулировку.</p>';
    return;
  }

  list.innerHTML = filtered.map((service, index) => `
    <article class="service-card">
      <span class="service-number">${String(index + 1).padStart(2, "0")}</span>
      <h3>${escapeHTML(service.name)}</h3>
      <p>${escapeHTML(service.description)}</p>
      <strong>от ${currency.format(service.price)}</strong>
    </article>
  `).join("");
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  }[char]));
}

search.addEventListener("input", () => renderServices(search.value));

try {
  if (!Array.isArray(services)) throw new TypeError("Каталог услуг должен быть списком");
  renderServices();
} catch (error) {
  list.innerHTML = '<p class="state-message error" role="alert">Не удалось загрузить каталог. Обновите страницу или попробуйте позже.</p>';
  count.textContent = "";
  console.error("Не удалось отобразить каталог услуг", error);
}
