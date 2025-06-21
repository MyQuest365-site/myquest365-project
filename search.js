document.getElementById('searchBox').addEventListener('input', async (e) => {
  const query = e.target.value.toLowerCase();
  const { data, error } = await supabaseClient
    .from('college')
    .select('*')
    .ilike('name', `%${query}%`);

  const results = document.getElementById('results');
  results.innerHTML = '';
  if (data) {
    data.forEach(college => {
      const li = document.createElement('li');
      li.textContent = college.name;
      results.appendChild(li);
    });
  }
});