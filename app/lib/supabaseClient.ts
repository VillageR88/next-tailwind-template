import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_REACT_APP_SUPABASE_URL ?? '';
const publicAnonKey = process.env.NEXT_PUBLIC_REACT_APP_ANNON_KEY ?? '';
const supabase = createClient(supabaseUrl, publicAnonKey);

export default supabase;
