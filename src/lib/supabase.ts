import { createClient, SupabaseClient } from "@supabase/supabase-js";
import { createBrowserClient } from "@supabase/ssr";
import { Database } from "../../types/supabase";

export const supabase: SupabaseClient = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

// export const createSupabaseBrowserClient = (): SupabaseClient => {
//   createBrowserClient<Database>;
//   process.env.NEXT_PUBLIC_SUPABASE_URL!;
//   process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
// };

// export const createSupabaseBrowserClient = (): SupabaseClient => {
//   const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
//   const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
//   return createClient(supabaseUrl, supabaseAnonKey);
// };
