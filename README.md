# Applicazione Asta Fantacalcio

Un'applicazione web moderna per gestire aste di fantacalcio in tempo reale.

## Architettura

### Backend (Microservizi)
- **api-gateway**: Gestione delle richieste e routing
- **asta-service**: Logica dell'asta in tempo reale
- **player-service**: Gestione giocatori e rose
- **user-service**: Gestione utenti e sessioni
- **notifications-service**: Notifiche real-time

### Frontend 
- **web-client**: Interfaccia web princiaple (React)
- **mobile-client**: App mobile (React Native)

### DevOps
- Docker containers
- Docker Compose per sviluppo
- CI/CD pipeline
- Monitoring e logging

## Setup Sviluppo

### Prerequisiti
- Docker e Docker Compose
- Node.js 18+
- Git

### Avvio Sviluppo
```bash
# Clone del repository
git clone <repository-url>
cd applicazione-asta-fantacalcio

# Installazione dipendenze
npm install

# Avvio sviluppo
npm run dev

# Avvio solo backend
npm run dev:backend

# Avvio solo frontend
npm run dev:frontend
```

## Funzionalità