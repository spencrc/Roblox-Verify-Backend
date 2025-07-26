import dotenv from 'dotenv';

dotenv.config();

export const PORT = process.env.PORT || 3000;

export const SUPABASE_URL = process.env.SUPABASE_URL!;
export const SUPABASE_KEY = process.env.SUPABASE_KEY!;

export const ROBLOX_CLIENT_ID = process.env.ROBLOX_CLIENT_ID!;
export const ROBLOX_SECRET = process.env.ROBLOX_SECRET!;
