const events = [
  {
    title: "Festival de Jazz en Barrio Estacion",
    category: "Musica",
    date: "Vie 28 Mar · 19:30",
    place: "Teatro Biobio",
    audience: "Todo publico",
    image: "images/teatro.svg"
  },
  {
    title: "Ruta Fotografica por murales de Concepcion",
    category: "Cultura",
    date: "Sab 29 Mar · 11:00",
    place: "Plaza Peru",
    audience: "Mayores de 14",
    image: "images/mural.svg"
  },
  {
    title: "Feria de emprendedores del Gran Concepcion",
    category: "Comunidad",
    date: "Dom 30 Mar · 10:00",
    place: "Parque Ecuador",
    audience: "Familiar",
    image: "images/feria.svg"
  },
  {
    title: "Ciclo de cine al aire libre",
    category: "Cine",
    date: "Mie 02 Abr · 20:00",
    place: "Costanera del Biobio",
    audience: "Todo publico",
    image: "images/costanera.svg"
  }
];

const cardsContainer = document.querySelector("[data-events]");
const filterButtons = document.querySelectorAll(".filter-btn");
const eventCount = document.querySelector("[data-event-count]");

function buildCard(eventItem, index) {
  return `
    <article class="event-card" style="animation-delay:${index * 90}ms">
      <img src="${eventItem.image}" alt="Evento: ${eventItem.title}">
      <div class="event-body">
        <p class="event-type">${eventItem.category}</p>
        <h3 class="event-title">${eventItem.title}</h3>
        <div class="meta">
          <p class="meta-row"><img src="icons/calendar.svg" alt="">${eventItem.date}</p>
          <p class="meta-row"><img src="icons/pin.svg" alt="">${eventItem.place}</p>
          <p class="meta-row"><img src="icons/users.svg" alt="">${eventItem.audience}</p>
        </div>
      </div>
    </article>
  `;
}

function renderCards(category = "Todos") {
  const filtered =
    category === "Todos"
      ? events
      : events.filter((eventItem) => eventItem.category === category);

  cardsContainer.innerHTML = filtered
    .map((eventItem, index) => buildCard(eventItem, index))
    .join("");

  eventCount.textContent = `${filtered.length} eventos publicados`;
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
    renderCards(button.dataset.filter);
  });
});

renderCards();

document.querySelector("[data-year]").textContent = new Date().getFullYear();
