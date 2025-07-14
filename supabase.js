import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://rcejsusqefahgctoljsp.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJjZWpzdXNxZWZhaGdjdG9sanNwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgzMDQyMzYsImV4cCI6MjA2Mzg4MDIzNn0.JXqdGhvWaQ06U5TUD6RxXsevCBuy4OheHViagzIh7X4c";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
