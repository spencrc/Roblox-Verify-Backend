# Roblox-Verify-Backend

## Note

The contents of this repository are intended to be used with its sister repository, [Roblox-Verify-Bot](https://github.com/spencrc/Roblox-Verify-Bot). However, it can be used without it but you will need to find a method to generate OAuth 2.0 links. 

## Setup

If you wish to build and run this project on your own machine, please:

1. Install Node.js. Instructions on how to install Node on your system: [Downloading and Installing Node.js and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
2. Run `npm i`.
3. Create a `.env` file inside the project's folder, and have it contain the following:
    
   ```
   SUPABASE_URL=supabase_url
   SUPABASE_KEY=supabase_api_key
   ROBLOX_CLIENT_ID=roblox_client_id
   ROBLOX_SECRET=roblox_secret_key
   ```
3. Create an OAuth 2.0 App on ROBLOX with the `openid` scope. Please ensure one of the Redirect URLs matches the url where you are hosting this repository, with /redirect added at the end (e.x.: https://example.com/redirect).
4. Create a project on Supabase. Please see the Database Setup section below for further details.
5. Obtain your `.env` variables:
    - `SUPABASE_URL` and `SUPABASE_KEY` can be found on the initial page of your new Supabase project. They can also be found under Project Settings.
    - `ROBLOX_CLIENT_ID` and `ROBLOX_SECRET` will be located on the page for your new ROBLOX OAuth 2.0 app. 
6. Build the files by running `npm run build`.
7. Finally, to start the server run `npm start`.

If you wish to host this project on Vercel, please fork this repository and visit [Vercel's website](https://vercel.com/) to select your newly forked repository to be deployed. You will need to add environment variables, and can do so by creating new variables with names that match the above `.env` file's variable's names. Of course, the values of each Vercel environmental variable should also match the corresponding `.env` file's variable's values.

## Database Setup

Please create the following tables with the following columns:

- `roblox_discord_links` (realtime)
  - `discord_id`: text (primary key)
  - `guild_id`: text
  - `roblox_id`: text
- `roblox_oauth_sessions`
  - `state`: text (primary key)
  - `discord_id`: text
  - `expires_at`: timestamp
  - `guild_id`: text
- `settings`
  - `guild_id`: text (primary key)
  - `verify_log_channel_id`: text
