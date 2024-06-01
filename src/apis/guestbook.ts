"use client";
import { supabase } from "@/lib/supabase";
// import { createSupabaseBrowserClient } from "@/lib/supabase";

interface Content {
  content: string;
}

interface Emoji {
  emoji: string;
}

interface Create {
  content: string;
  emoji: string;
}

//content가져오기
export const getContent = async (): Promise<Content[]> => {
  let { data: guestbook, error } = await supabase
    .from("guestbook")
    .select("content")
    .order("id", { ascending: false });

  if (error) {
    console.error("Error fetching content:", error);
    throw error;
  }

  console.log("guestbook", guestbook);
  return guestbook ?? [];
};

//emoji 가져오기
export const getEmoji = async (): Promise<Emoji[]> => {
  let { data: guestbook, error } = await supabase
    .from("guestbook")
    .select("emoji")
    .order("id", { ascending: false });

  if (error) {
    console.error("Error fetching content:", error);
    throw error;
  }
  console.log("emoji", guestbook);
  return guestbook ?? [];
};

// 추가하기
export const createContent = async (param: Create): Promise<Create[]> => {
  console.log("param", param);
  const { data, error } = await supabase
    .from("guestbook")
    .insert([
      {
        content: param.content,
        emoji: param.emoji,
      },
    ])
    .select();

  if (error) {
    console.error("Error fetching content:", error);
    throw error;
  }

  return data ?? [];
};
