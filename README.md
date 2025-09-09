# 🎮 StacksPlays Frontend

StacksPlays is a *decentralized gaming dApp* built on the *Stacks blockchain*.  
This frontend (React + TypeScript + Tailwind CSS) provides the user interface for playing games, managing NFTs, and interacting with the backend API.

---

## 🚀 Features

- *Landing Page* – Introduction to StacksPlays with navigation to Minting or App.  
- *Dashboard Layout* – Responsive sidebar navigation with theme toggle, profile dropdown, and modular pages.  
- *Casino & Mini-Games* – Interactive game cards with timers, states (open/closed), and Play Now functionality.  
- *NFT Minting Page* – Connect wallet, mint NFTs, and showcase owned assets.  
- *Leaderboard Page* – Dynamic leaderboard with filters (daily/weekly/season), player ranks, and podium view.  
- *Admin Tools* – Secure admin dashboard with game scheduling/reset functionality.  

---

## 🛠 Tech Stack

- *Framework:* React + Vite + TypeScript  
- *Styling:* Tailwind CSS + shadcn/ui + Radix Primitives  
- *Icons:* Tabler Icons  
- *State & Context:* React Context API (AuthContext for roles)  
- *Routing:* React Router v6  
- *Blockchain Integration:* Stacks Wallet / Leather Wallet (planned)  
- *Backend Integration:* REST API (Node.js/Express)  

---

## 📂 Project Structure

frontend/ ├── public/                # Static assets (logos, images, icons) ├── src/ │   ├── components/        # Reusable UI components │   ├── contexts/          # AuthContext, ThemeProvider │   ├── Pages/             # Main pages (Landing, Minting, Dashboard, etc.) │   │   └── DashboardPage/ # Dashboard subpages (Home, Casino, Leaderboard, etc.) │   ├── App.tsx            # Main app router │   └── main.tsx           # Entry point ├── .env                   # API URL + frontend config ├── package.json └── tailwind.config.js

---

## 🔑 Environment Variables

Create a .env file in the root:

```bash
VITE_API_URL=http://localhost:4000    # Backend API URL


---

💻 Installation & Setup

# Clone the repo
git clone https://github.com/POA200/stacksplays.git
cd stacksplays

# Install dependencies
npm install

# Start dev server
npm run dev

The app will be available at http://localhost:5173.


---

🔌 API Integration

This frontend consumes the StacksPlays Backend API:

GET /api/games/:id → Fetch game status & countdown timer.

POST /api/games/:id/reset → Reset game schedule (admin-only).

GET /api/leaderboard?period=season → Fetch leaderboard data.

POST /api/leaderboard/submit → Submit player score (protected/admin).


Ensure the backend is running before launching the frontend.

---

🛡 Security & Best Practices

Secrets (API keys, admin tokens) are stored in .env (excluded via .gitignore).

Admin-only features (like scheduling games) require proper role from AuthContext.

Game state (open/closed) is fetched from backend to ensure consistency across all clients.

---

📌 Roadmap

[ ] Connect with Leather Wallet for blockchain login.

[ ] On-chain leaderboard storage (Stacks smart contracts).

[ ] Add multiplayer casino-style games.

[ ] Live chat integration for community interaction.

[ ] Expand NFT gallery with rarity filters.



---

👤 Author

Developed by iPeter (StacksPlays Project).
Frontend for Stacks blockchain GameFi dApp.