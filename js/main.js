// Footer year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Homepage search filter
function filterHobbies(event) {
  if (event) event.preventDefault();
  const input = document.getElementById('q');
  const grid = document.getElementById('hobby-grid');
  const noResults = document.getElementById('no-results');
  if (!input || !grid) return false;

  const query = input.value.trim().toLowerCase();
  let visibleCount = 0;

  grid.querySelectorAll('li').forEach(li => {
    const card = li.querySelector('.hobby-card');
    const haystack = (
      (card?.dataset.tags || '') + ' ' +
      (card?.textContent || '')
    ).toLowerCase();

    const match = !query || haystack.includes(query);
    li.hidden = !match;
    if (match) visibleCount++;
  });

  if (noResults) noResults.hidden = visibleCount > 0;
  return false;
}

const searchInput = document.getElementById('q');
if (searchInput) searchInput.addEventListener('input', () => filterHobbies());
