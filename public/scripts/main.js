const filters = {
  vendor: document.getElementById('vendor'),
  level: document.getElementById('level'),
  category: document.getElementById('category'),
  status: document.getElementById('status'),
};

const cardsGrid = document.getElementById('certifications-grid');
const cards = Array.from(cardsGrid.querySelectorAll('.cert-card'));

function applyFilters() {
  const activeFilters = Object.entries(filters).reduce((acc, [key, input]) => {
    if (input.value) acc[key] = input.value;
    return acc;
  }, {});

  cards.forEach((card) => {
    const cardData = {
      vendor: card.className.match(/vendor-([\w-]+)/)?.[1]?.replace(/-/g, ' '),
      level: card.querySelector('.card-meta span:nth-child(1)').textContent,
      category: card.querySelector('.card-meta span:nth-child(2)').textContent,
      status: card.querySelector('.status-badge').textContent,
    };

    const visible = Object.entries(activeFilters).every(([key, value]) =>
      cardData[key].toLowerCase().includes(value.toLowerCase())
    );

    card.style.display = visible ? '' : 'none';
  });
}

Object.values(filters).forEach((input) => {
  input.addEventListener('change', applyFilters);
});
