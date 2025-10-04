const searchInput = document.getElementById('search');
const hymnList = document.getElementById('hymn-list');
const hymns = hymnList?.querySelectorAll('a');

searchInput?.addEventListener('input', () => {
  const query = searchInput.value.toLowerCase();
  hymns.forEach(hymn => {
    hymn.style.display = hymn.textContent.toLowerCase().includes(query) ? 'block' : 'none';
  });
});
