// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://hczcggptulyetitnkoun.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhjemNnZ3B0dWx5ZXRpdG5rb3VuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAyMTQ3NTEsImV4cCI6MjA1NTc5MDc1MX0.8bqh_Ii0QcI-Q-bysjmj1HXwmOQjD7cIn4ki5S7OU-8";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);