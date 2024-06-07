import { supabase } from "./supabase";

export const getPosts = async () => {
  let { data: posts, error } = await supabase.from("posts").select("*");
  if (error) throw new Error(error.message);
  return posts;
};
