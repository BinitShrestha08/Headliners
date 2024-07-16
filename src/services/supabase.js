import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://enlismzqnmrvknwmfaxu.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVubGlzbXpxbm1ydmtud21mYXh1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTk5NjIxNDUsImV4cCI6MjAzNTUzODE0NX0.l84jPTNRspy3-oywsvwAjoXXUfD05F02DXx7u9nE79c";
const supabase = createClient(supabaseUrl, supabaseKey);

// REACT_APP_SUPABASE_URL=https://enlismzqnmrvknwmfaxu.supabase.co
// REACT_APP_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVubGlzbXpxbm1ydmtud21mYXh1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTk5NjIxNDUsImV4cCI6MjAzNTUzODE0NX0.l84jPTNRspy3-oywsvwAjoXXUfD05F02DXx7u9nE79c

export default supabase;
