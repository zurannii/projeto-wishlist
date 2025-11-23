
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://dslvxuuqqsqsqknkgbsk.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRzbHZ4dXVxcXNxc3FrbmtnYnNrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM4OTQ4NTgsImV4cCI6MjA3OTQ3MDg1OH0.jsg-Luti98ihPelZ0tmtbwYCnKroKQSSDzDmty-P_5U'
export const supabase = createClient(supabaseUrl, supabaseKey)
