import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type FlowerCatalog = {
  id: string
  name: string
  description: string | null
  price: number
  flower_img_url: string | null
  whatsapp_link: string | null
  created_at: string
  category: string
}
