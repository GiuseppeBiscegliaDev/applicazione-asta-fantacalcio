#!/bin/bash

# Script per generare automaticamente i microservizi Spring Boot
# Per l'applicazione asta fantacalcio

echo "🚀 Generazione microservizi Spring Boot..."

# Configurazioni comuni
GROUP_ID="com.fantacalcio"
JAVA_VERSION="17"
PACKAGING="jar"

# Funzione per generare un servizio
generate_service() {
    local service_name=$1
    local dependencies=$2
    local description=$3
    
    echo "📦 Generando $service_name..."
    
    curl -sG https://start.spring.io/starter.zip \
        -d dependencies=$dependencies \
        -d name=$service_name \
        -d groupId=$GROUP_ID \
        -d artifactId=$service_name \
        -d javaVersion=$JAVA_VERSION \
        -d packaging=$PACKAGING \
        -d description="$description" \
        -o temp-$service_name.zip
    
    # Estrai nella cartella corretta
    unzip -q temp-$service_name.zip -d backend/$service_name
    rm temp-$service_name.zip
    
    echo "✅ $service_name generato con successo!"
}

# Genera tutti i servizi
echo "🔧 Generando API Gateway..."
generate_service "api-gateway" "cloud-gateway,eureka-client,security,actuator" "API Gateway per routing e autenticazione"

echo "🔧 Generando Auction Service..."
generate_service "auction-service" "web,websocket,data-jpa,postgresql,validation,actuator,eureka-client" "Servizio per gestione aste in tempo reale"

echo "🔧 Generando Player Service..."
generate_service "player-service" "web,data-jpa,postgresql,validation,actuator,eureka-client" "Servizio per gestione giocatori e rose"

echo "🔧 Generando User Service..."
generate_service "user-service" "web,data-jpa,postgresql,security,validation,actuator,eureka-client" "Servizio per gestione utenti e autenticazione"

echo "🔧 Generando Notification Service..."
generate_service "notification-service" "web,websocket,actuator,eureka-client" "Servizio per notifiche real-time"

echo "🎉 Tutti i microservizi sono stati generati!"
echo ""
echo "📁 Struttura creata:"
echo "backend/"
echo "├── api-gateway/"
echo "├── auction-service/"
echo "├── player-service/"
echo "├── user-service/"
echo "└── notification-service/"
echo ""
echo "🚀 Prossimi passi:"
echo "1. cd backend/api-gateway && ./mvnw spring-boot:run"
echo "2. cd backend/auction-service && ./mvnw spring-boot:run"
echo "3. cd backend/player-service && ./mvnw spring-boot:run"
echo "4. cd backend/user-service && ./mvnw spring-boot:run"
echo "5. cd backend/notification-service && ./mvnw spring-boot:run"
echo ""
echo "📝 Ricorda di configurare:"
echo "- application.yml per ogni servizio"
echo "- Database PostgreSQL"
echo "- Redis per cache"
echo "- Eureka Server per service discovery" 