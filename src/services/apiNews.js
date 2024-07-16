import axios from "axios";
import supabase, { supabaseUrl } from "./supabase";
import { PAGE_SIZE } from "../utils/constants";

const API_KEY = import.meta.env.VITE_API_KEY;

export const fetchNewsApi = async () => {
  const response = await axios.get(
    `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`
  );
  return response.data.articles;
};

export const fetchArticles = async ({ page }) => {
  let query = supabase.from("articles").select("*", { count: "exact" });

  if (page) {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;
    query = query.range(from, to);
  }

  const { data, error, count } = await query;

  if (error) throw error;

  return { data, count };
};

// Function to insert or update an article generically
export const upsertArticle = async (article) => {
  const { data, error } = await supabase.from("articles").upsert(article);

  if (error) throw error;
  return data;
};

// Function to edit an existing article with a specific id
export async function createEditArticle(newArticleData, id) {
  const { data, error } = await supabase
    .from("articles")
    .update(newArticleData)
    .eq("id", id)
    .select()
    .single();

  if (error) throw error;

  return data;
}
