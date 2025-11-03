import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://zukehtdkdjbeyttgbkvj.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp1a2VodGRrZGpiZXl0dGdia3ZqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIxOTIyOTQsImV4cCI6MjA3Nzc2ODI5NH0.XwtN9_MWkjcKCT3Xw_Qbv4TreNVvSq1CPabJgQaYcT8";

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
