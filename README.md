# Keycloak + Next.js (NextAuth) Starter

This project demonstrates how to integrate **Keycloak** with **Next.js 14 (App Router)** using **NextAuth**.  
It comes with a protected route, JWT-based sessions, and a Dockerized Keycloak setup with a pre-imported realm and client.

## ✨ Features
- Next.js 14 + TypeScript
- NextAuth with Keycloak OIDC provider
- JWT session strategy (no DB required)
- Protected page `/(protected)`
- Docker Compose setup for Keycloak with realm import
- Preconfigured realm: `myrealm`, client: `nextjs-app`

## 📂 Project Structure
```
keycloak-next-starter/
├─ app/
│  ├─ api/auth/[...nextauth]/route.ts   # NextAuth + Keycloak config
│  ├─ (protected)/page.tsx              # Protected page example
│  ├─ page.tsx                          # Home page with auth status
│  ├─ globals.css
│  └─ layout.tsx
├─ keycloak/realm-export/myrealm-realm.json
├─ docker-compose.yml
├─ .env.example
├─ package.json
└─ README.md
```

## 🛠 Prerequisites
- Node.js 18+  
- Docker + Docker Compose  

## 🚀 Quick Start

### 1. Start Keycloak
```bash
docker compose up -d
# Keycloak runs at http://localhost:8080
# Admin login: admin / admin (dev only)
```

### 2. Configure environment
```bash
cp .env.example .env
# Replace NEXTAUTH_SECRET with a random 32+ char value
```

### 3. Install & run Next.js
```bash
npm install
npm run dev
# Open http://localhost:3000
```

## ⚙️ Environment Variables
```
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=replace-with-random-32bytes
KEYCLOAK_ISSUER=http://localhost:8080/realms/myrealm
KEYCLOAK_CLIENT_ID=nextjs-app
KEYCLOAK_CLIENT_SECRET=dev-secret
```

## 🔑 Keycloak Realm
- Realm: `myrealm`
- Client: `nextjs-app` (confidential)
- Redirect URI: `http://localhost:3000/api/auth/callback/keycloak`
- Web origin: `http://localhost:3000`
- Scopes: `openid email profile`

## 🔐 Protecting Pages
```ts
const session = await getServerSession(authOptions);
if (!session) redirect('/api/auth/signin');
```

## 🧪 Test User
1. Login to Keycloak (http://localhost:8080, admin/admin)  
2. Add a new user, set password under Credentials (disable "Temporary")  
3. Sign in via the Next.js app  

## 🏭 Production Notes
- Use HTTPS everywhere  
- Replace in-memory DB with Postgres for Keycloak  
- Restrict redirect URIs to your production domain  
- Rotate secrets and admin credentials  
- Use persistent sessions if scaling Next.js horizontally  

## 📜 NPM Scripts
```
npm run dev     # Dev server
npm run build   # Build production bundle
npm run start   # Run production build
npm run lint    # Lint code
```

## 🛠 Troubleshooting
- Keycloak not loading:
  ```bash
  docker compose down -v && docker compose up -d
  ```
- Redirect URI error: update **Valid Redirect URIs** in Keycloak client  
- CORS issue: add app domain to **Web origins**  
- “next not found”: run `npm install`  

## 📄 License
Code: MIT  
Keycloak: Apache 2.0 (upstream)  
Not affiliated with Red Hat/Keycloak.

## ❤️ Support & Custom Work
If this project saved you time, please consider:
- ⭐ Starring the repo
- ☕ [Buy me a coffee](https://www.buymeacoffee.com/leposava)
- 💼 Need a **custom Keycloak theme or production setup**?  
🔑 **Need help with Keycloak?**
I offer professional setup, custom themes, and integration.  
👉 [Hire me](mailto:leposava.knez@gmail.com) 
  

