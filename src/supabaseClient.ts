// Safe fallback client to ensure the site renders immediately without crashing
const dummyQuery = {
  select: () => dummyQuery,
  insert: async () => ({ error: null }),
  update: () => dummyQuery,
  upsert: async () => ({ error: null }),
  eq: () => dummyQuery,
  order: () => dummyQuery,
  single: async () => ({ data: null, error: null }),
};

export const supabase = {
  from: () => dummyQuery,
};
