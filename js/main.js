// Footer year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Homepage search filter
function filterHobbies(event) {
  if (event) event.preventDefault();
  const input = document.getElementById('q');
  const grids = document.querySelectorAll('.hobby-grid');
  const noResults = document.getElementById('no-results');
  if (!input || grids.length === 0) return false;

  const query = input.value.trim().toLowerCase();
  let visibleCount = 0;

  grids.forEach(grid => {
    let visibleInGrid = 0;

    grid.querySelectorAll('li').forEach(li => {
      const card = li.querySelector('.hobby-card');
      const haystack = (
        (card?.dataset.tags || '') + ' ' +
        (card?.textContent || '')
      ).toLowerCase();

      const match = !query || haystack.includes(query);
      li.hidden = !match;
      if (match) {
        visibleCount++;
        visibleInGrid++;
      }
    });

    // Hide the whole category (heading included) when empty
    const category = grid.closest('.hobby-category');
    if (category) category.hidden = visibleInGrid === 0;
  });

  if (noResults) noResults.hidden = visibleCount > 0;
  return false;
}

const searchInput = document.getElementById('q');
if (searchInput) searchInput.addEventListener('input', () => filterHobbies());
