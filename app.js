const form = document.getElementById("search-form");
const resultsEl = document.getElementById("results");

const CATEGORY_LABELS = {
  groceries: "groceries",
  entertainment: "entertainment",
  diningOut: "dining out"
};

const PERIOD_LABELS = {
  daily: "day",
  weekly: "week",
  weekend: "weekend"
};

// Groceries are priced per week in the data. Convert that weekly cost into
// an equivalent cost for whichever period the user picked.
function groceryCostForPeriod(weeklyCost, period) {
  if (period === "daily") return weeklyCost / 7;
  if (period === "weekend") return (weeklyCost / 7) * 2;
  return weeklyCost; // weekly
}

// Entertainment/dining items are priced per visit — that doesn't change
// with the period, the period just describes how much total budget you have.
function costOf(item, category, period) {
  if (category === "groceries") {
    return groceryCostForPeriod(item.typicalWeeklyCost, period);
  }
  return item.typicalCost;
}

function costLabel(cost, category) {
  if (cost === 0) return "Free";
  const rounded = Math.round(cost * 100) / 100;
  return category === "groceries" ? `~$${rounded}` : `~$${rounded}`;
}

function findCity(cityKey) {
  return LIVE_WITHIN_DATA.cities[cityKey] || null;
}

function populateCityDropdown() {
  const select = document.getElementById("city");
  const entries = Object.entries(LIVE_WITHIN_DATA.cities)
    .sort((a, b) => a[1].displayName.localeCompare(b[1].displayName));
  select.innerHTML = entries
    .map(([key, city]) => `<option value="${escapeHtml(key)}">${escapeHtml(city.displayName)}</option>`)
    .join("");
}

function updateHeaderPhoto(city) {
  const header = document.querySelector("header");
  const credit = document.getElementById("photo-credit-text");
  if (city && city.photo) {
    header.classList.remove("no-photo");
    header.style.setProperty("--header-photo", `url("${city.photo}")`);
    credit.textContent = city.photoCredit || `${city.displayName} skyline photo`;
  } else {
    header.classList.add("no-photo");
    header.style.removeProperty("--header-photo");
  }
}

function render(cityInput, category, period, budget) {
  const city = findCity(cityInput);
  const items = city ? (city.categories[category] || []) : [];
  updateHeaderPhoto(city);

  if (!city) {
    const available = Object.values(LIVE_WITHIN_DATA.cities).map(c => c.displayName).join(", ");
    resultsEl.innerHTML = `
      <div class="empty-state">
        We don't have curated data for "${escapeHtml(cityInput)}" yet — right now Live Within
        covers <strong>${available}</strong>. Try one of those, or check back as we add more areas.
      </div>`;
    return;
  }

  const withCost = items.map(item => ({ item, cost: costOf(item, category, period) }));
  const sorted = withCost.sort((a, b) => a.cost - b.cost);
  const within = sorted.filter(x => x.cost <= budget);
  const over = sorted.filter(x => x.cost > budget);

  const periodWord = PERIOD_LABELS[period];
  const summary = within.length
    ? `${within.length} option${within.length === 1 ? "" : "s"} in ${city.displayName} fit your $${budget}/${periodWord} budget for ${CATEGORY_LABELS[category]}.`
    : `Nothing fits a $${budget}/${periodWord} budget for ${CATEGORY_LABELS[category]} in ${city.displayName} — here's the closest options.`;

  resultsEl.innerHTML = `<div class="summary">${summary}</div>` +
    within.map(x => cardHtml(x.item, x.cost, category, false)).join("") +
    over.slice(0, within.length ? 2 : 4).map(x => cardHtml(x.item, x.cost, category, true)).join("");
}

function dealsHtml(item) {
  if (!item.deals || !item.deals.length) return "";
  const list = item.deals.map(d => `<li>${escapeHtml(d)}</li>`).join("");
  return `
    <div class="deals">
      <div class="deals-label">This week's deals${item.dealsUpdated ? ` (as of ${escapeHtml(item.dealsUpdated)})` : ""}</div>
      <ul>${list}</ul>
      ${item.dealsNote ? `<div class="deals-note">${escapeHtml(item.dealsNote)}</div>` : ""}
    </div>`;
}

function studentTipHtml(item) {
  if (!item.studentTip) return "";
  return `<div class="student-tip"><span class="student-badge">Student tip</span> ${escapeHtml(item.studentTip)}</div>`;
}

function cardHtml(item, cost, category, overBudget) {
  return `
    <div class="result-card ${overBudget ? "over-budget" : ""}">
      <div class="result-main">
        <h3>${escapeHtml(item.name)}</h3>
        <div class="area">${escapeHtml(item.area)}</div>
        <div class="notes">${escapeHtml(item.notes)}</div>
        ${studentTipHtml(item)}
        ${dealsHtml(item)}
      </div>
      <div class="result-cost">
        <div class="price ${overBudget ? "over" : ""}">${costLabel(cost, category)}</div>
        <div class="badge">${overBudget ? "Over budget" : "Within budget"}</div>
      </div>
    </div>`;
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

function readFormAndRender() {
  const city = document.getElementById("city").value;
  const category = document.getElementById("category").value;
  const period = document.getElementById("period").value;
  const budget = Number(document.getElementById("budget").value) || 0;
  render(city, category, period, budget);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  readFormAndRender();
});

document.getElementById("city").addEventListener("change", readFormAndRender);

document.getElementById("data-updated").textContent =
  `Store and venue data last refreshed ${LIVE_WITHIN_DATA.lastUpdated}.`;

populateCityDropdown();
readFormAndRender();
