// import { pool } from './pg-pool.js';

// const createRobloxOauthSessionsTable = async (): Promise<void> => {
//     await pool.query(`
//         CREATE TABLE IF NOT EXISTS "roblox_oauth_sessions" (
//             discord_user_id TEXT,
//             code_verifier TEXT,
//             state TEXT PRIMARY KEY,
//             expires_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP + INTERVAL '5 minutes'
//         );
//     `);
// }

// export const migrate = async (): Promise<void> => {
//     await pool.query(`BEGIN`);

//     await createRobloxOauthSessionsTable();

//     await pool.query(`COMMIT`);
// }