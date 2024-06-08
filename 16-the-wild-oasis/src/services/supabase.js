import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://zhgcozyfjmjzkbvvsufb.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpoZ2Nvenlmam1qemtidnZzdWZiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc4NDI1NDksImV4cCI6MjAzMzQxODU0OX0.yGsuRRB-ABoZ-ryxKu0L7TUHBL-gHaiAaqf4djkbNGo";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
