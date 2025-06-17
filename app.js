
function searchMedicine() {
  const query = document.getElementById('searchBox').value.trim();
  const resultsDiv = document.getElementById('results');
  if (query === '') {
    resultsDiv.innerHTML = '<p>Please enter a medicine name.</p>';
    return;
  }
  resultsDiv.innerHTML = `<p>Showing results for "<strong>${query}</strong>" (sample data only).</p>`;
}
