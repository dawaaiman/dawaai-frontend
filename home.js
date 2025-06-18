
export function renderHomePage() {
  const root = document.getElementById('root');
  root.innerHTML = `
    <header>
      <h1>Dawaai</h1>
      <input type="text" placeholder="Search for medicine...">
    </header>
    <section>
      <h2>Top Categories</h2>
      <ul>
        <li>Pain Relief</li>
        <li>Antibiotics</li>
        <li>Diabetes</li>
      </ul>
    </section>
  `;
}
