import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://dmajjnkdsmsgvcpshifr.supabase.co';
const publicAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRtYWpqbmtkc21zZ3ZjcHNoaWZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDgwMzM0OTgsImV4cCI6MjAyMzYwOTQ5OH0.ZWeLW4fTz5R9d8vpO2yxl-n2Wc3q_YVetDNZ9QNM9fk';
const supabase = createClient(supabaseUrl, publicAnonKey);

export default supabase;
