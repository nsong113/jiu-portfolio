"use client";
import { supabase } from "@/lib/supabase";
// import { createSupabaseBrowserClient } from "@/lib/supabase";

interface Content {
  content: string;
}

interface Emoji {
  emoji: number;
}

//content가져오기

export const getContent = async (): Promise<Content[]> => {
  //   const supabase = createSupabaseBrowserClient();

  let { data: guestbook, error } = await supabase
    .from("guestbook")
    .select("content");

  if (error) {
    console.error("Error fetching content:", error);
    throw error;
  }

  console.log("guestbook", guestbook);
  return guestbook ?? [];
};

//emoji 가져오기
export const getEmoji = async (): Promise<Emoji[]> => {
  //   const supabase = createSupabaseBrowserClient();

  let { data: guestbook, error } = await supabase
    .from("guestbook")
    .select("emoji");

  if (error) {
    console.error("Error fetching content:", error);
    throw error;
  }

  return guestbook ?? [];
};
