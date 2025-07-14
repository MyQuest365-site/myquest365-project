import supabase from './supabase.js';
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".interest-button");
  const resultsDiv = document.getElementById("results");

  buttons.forEach(button => {
    button.addEventListener("click", async () => {
      const interest = button.textContent.trim();
      resultsDiv.innerHTML = `<p>🔍 Searching for "${interest}"...</p>`;
      await handleInterest(interest);
    });
  });

  async function handleInterest(interest) {
    const { data, error } = await supabase
      .from("college") // your table name
      .select("*")
      .ilike("interests", `%${interest}%`);

    if (error) {
      resultsDiv.innerHTML = `<p style="color:red;">Error: ${error.message}</p>`;
      return;
    }

    if (data.length === 0) {
      resultsDiv.innerHTML = `<p>😕 No colleges found matching "${interest}".</p>`;
    } else {
      resultsDiv.innerHTML = `<h3>🎓 Colleges matching "${interest}"</h3>`;
      data.forEach(college => {
        resultsDiv.innerHTML += `<p>🏫 ${college.name}</p>`;
      });
    }
  }
});
