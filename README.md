# Ghost AI MVP
A platform to create and interact with AI-powered digital replicas of loved ones.

## Setup
1. **Frontend**:
   - `cd frontend`
   - `npm install`
   - Create a Tally.so form (use `tally_form.json` template) and update `signup.js` with the form ID.
   - Deploy on Vercel: `vercel --prod`
2. **Backend**:
   - `cd backend`
   - `npm install`
   - Set up `.env` with Supabase, OpenRouter, and PlayHT keys.
   - Deploy on Render: `render deploy`
3. **APIs**:
   - Sign up for Supabase (auth/storage), OpenRouter (LLM), PlayHT (TTS).
   - Run ChromaDB: `docker run -p 8000:8000 chromadb/chroma`
4. **Tally.so**:
   - Create a form using `tally_form.json`.
   - Set webhook to `/api/upload` endpoint.

## Running Locally
- Frontend: `cd frontend && npm run dev`
- Backend: `cd backend && node server.js`

## Environment Variables
- Frontend: `.env.local` (Supabase URL, anon key)
- Backend: `.env` (Supabase, OpenRouter, PlayHT keys)

## Deployment
- Frontend: Vercel (static site)
- Backend: Render (Node.js)
- Database: Supabase (Postgres + Storage)