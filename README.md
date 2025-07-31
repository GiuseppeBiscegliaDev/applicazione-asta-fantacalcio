# Applicazione Asta Fantacalcio

Un'applicazione web moderna per gestire aste di fantacalcio in tempo reale con architettura a microservizi Spring Boot.

## Caratteristiche Principali

- **Aste in tempo reale** con WebSocket
- **Multi-device** - Partecipa da PC, tablet o smartphone
- **Gestione rose** - Import/export squadre
- **Notifiche push** - Rialzi e aggiornamenti istantanei
- **Architettura scalabile** - Microservizi Spring Boot
- **DevOps ready** - Docker, CI/CD, monitoring

## Architettura

### Backend (Microservizi Spring Boot)
- **api-gateway** - Spring Cloud Gateway per routing e autenticazione
- **asta-service** - Gestione aste in tempo reale con WebSocket
- **player-service** - Gestione giocatori e rose (squadre)
- **user-service** - Gestione utenti, autenticazione e autorizzazione
- **notification-service** - Notifiche real-time

### Frontend
- **web-client** - Interfaccia web principale (React + TypeScript)
- **mobile-client** - App mobile (React Native)

### DevOps
- **Docker** - Containerizzazione
- **Docker Compose** - Orchestrazione locale
- **CI/CD** - GitHub Actions
- **Monitoring** - Spring Boot Actuator

## Quick Start

### Prerequisiti
- Java 17+
- Maven 3.6+
- Node.js 18+
- PostgreSQL
- Docker (opzionale)

### Setup Rapido

```bash
# 1. Clone del repository
git clone <repository-url>
cd applicazione-asta-fantacalcio

# 2. Setup Database
createdb fantacalcio

# 3. Avvio Backend (in terminali separati)
cd backend/api-gateway && ./mvnw spring-boot:run
cd backend/asta-service && ./mvnw spring-boot:run
cd backend/player-service && ./mvnw spring-boot:run
cd backend/user-service && ./mvnw spring-boot:run
cd backend/notification-service && ./mvnw spring-boot:run

# 4. Avvio Frontend
cd frontend/web-client
npm install
npm start
```

## Funzionalità

### Pagina 1 - Configurazione Asta
- Selezione numero partecipanti (2-20)
- Tipologia asta (chiamata, alfabetico, random,)
- Configurazione struttura rose (portieri, difensori, centrocampisti, attaccanti)
- Impostazione budget per partecipante

### Pagina 2 - Gestione Asta
- Visualizzazione rose di tutti i partecipanti
- Giocatore in asta corrente con timer
- Storico operazioni e rialzi
- Import/Export rose in formato CSV/JSON
- Gestione file giocatori aggiornati

### Funzionalità Real-time
- Connessione multi-device simultanea
- Rialzi in tempo reale con WebSocket
- Notifiche push per turni e rialzi

## Stack Tecnologico

### Backend
- **Spring Boot 3.x** - Framework principale
- **Spring Cloud Gateway** - API Gateway
- **Spring Security** - Autenticazione e autorizzazione
- **Spring Data JPA** - Persistenza dati
- **Spring WebSocket** - Comunicazione real-time
- **PostgreSQL** - Database relazionale
- **Eureka Client** - Service discovery
- **Spring Boot Actuator** - Monitoring

### Frontend
- **React 18** - Framework UI
- **TypeScript** - Type safety
- **Socket.io-client** - WebSocket client
- **Material-UI** - Componenti UI
- **React Router** - Routing

### DevOps
- **Docker** - Containerizzazione
- **Docker Compose** - Orchestrazione locale
- **GitHub Actions** - CI/CD
- **Nginx** - Reverse proxy

## Metodologia AGILE

Il progetto segue metodologia AGILE con:
- **Trello**
- **Testing automatico**
- **Deployment continuo**

## Struttura Progetto

```
applicazione-asta-fantacalcio/
├── backend/
│   ├── api-gateway/          # Spring Cloud Gateway
│   ├── asta-service/       # Gestione aste real-time
│   ├── player-service/        # CRUD giocatori e rose
│   ├── user-service/          # Autenticazione utenti
│   ├── notification-service/  # Notifiche real-time
│   └── shared/               # Codice condiviso
├── frontend/
│   ├── web-client/           # React app
│   └── mobile-client/        # React Native
├── infrastructure/
│   ├── docker/               # Dockerfile e compose
│   ├── k8s/                  # Kubernetes manifests
│   └── terraform/            # Infrastructure as Code
├── docs/                     # Documentazione
├── scripts/                  # Script di automazione
└── shared/                   # Tipi e utility condivisi
```

## 🔧 Configurazione

### Database
```sql
-- Crea database unico per tutti i servizi
CREATE DATABASE fantacalcio;
```

### Porte Servizi
- **API Gateway**: 8080
- **Asta Service**: 8081
- **Player Service**: 8082
- **User Service**: 8083
- **Notification Service**: 8084
- **Frontend**: 3000

### Environment Variables
```bash
# Database
SPRING_DATASOURCE_URL=jdbc:postgresql://localhost:5432/fantacalcio
SPRING_DATASOURCE_USERNAME=postgres
SPRING_DATASOURCE_PASSWORD=password

# JWT
JWT_SECRET=your-secret-key
JWT_EXPIRATION=86400000
```

## 🧪 Testing

```bash
# Test unitari
./mvnw test

# Test integrazione
./mvnw verify

# Test end-to-end
npm run test:e2e
```

## 🚀 Deployment

### Sviluppo
```bash
# Docker Compose
docker-compose up -d

# Manuale
./mvnw spring-boot:run
```

### Produzione
```bash
# Build
./mvnw clean package

# Docker
docker build -t fantacalcio-app .

# Kubernetes
kubectl apply -f infrastructure/k8s/
```