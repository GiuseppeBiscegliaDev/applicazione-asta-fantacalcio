# Usa una JDK base leggera (OpenJDK 17)
FROM eclipse-temurin:17-jre-alpine

# Crea una directory nell'immagine
WORKDIR /app

# Copia il jar costruito dentro la directory di lavoro
COPY target/api-gateway-0.0.1-SNAPSHOT.jar app.jar

# Espone la porta del server Spring Boot (8080)
EXPOSE 8080

# Comando di avvio
ENTRYPOINT ["java", "-jar", "app.jar"]