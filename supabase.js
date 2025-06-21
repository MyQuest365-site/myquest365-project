document.addEventListener("DOMContentLoaded", () => {
  const supabaseUrl = 'https://rcejsusqefahgctoljsp.supabase.co';
  const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJjZWpzdXNxZWZhaGdjdG9sanNwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgzMDQyMzYsImV4cCI6MjA2Mzg4MDIzNn0.JXqdGhvWaQ06U5TUD6RxXsevCBuy4OheHViagzIh7X4';

  if (window.supabase && typeof window.supabase.createClient === 'function') {
    window.supabaseClient = window.supabase.createClient(supabaseUrl, supabaseKey);
  } else {
    console.error("Supabase library not loaded.");
  }
});
    const supabaseUrl = 'https://your-project-id.supabase.co';
const supabaseKey = 'your-anon-key'; // Use anon/public key
const supabase = supabase.createClient(supabaseUrl, supabaseKey);
// Function to sort tasks based on dropdown selection
async function sortTasks() {
  const sortBy = document.getElementById('sort-tasks-dropdown').value;

  let query = supabase.from('tasks').select('*');

  if (sortBy === 'deadline') {
    query = query.order('deadline', { ascending: true });  // Sort by deadline
  } else if (sortBy === 'status') {
    query = query.order('status', { ascending: true });  // Sort by status (e.g., Not Started, In Progress, Completed)
  }

  const { data, error } = await query;

  if (error) {
    console.error('Error fetching tasks:', error);
  } else {
    displayTasks(data);  // Function to display tasks
  }
}
// Function to sort tasks based on dropdown selection
async function sortTasks() {
  const sortBy = document.getElementById('sort-tasks-dropdown').value;

  let query = supabase.from('tasks').select('*');

  if (sortBy === 'deadline') {
    query = query.order('deadline', { ascending: true });  // Sort by deadline
  } else if (sortBy === 'status') {
    query = query.order('status', { ascending: true });  // Sort by status (e.g., Not Started, In Progress, Completed)
  }

  const { data, error } = await query;

  if (error) {
    console.error('Error fetching tasks:', error);
  } else {
    displayTasks(data);  // Function to display tasks
  }
}

