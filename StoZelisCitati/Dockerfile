FROM  maven:3.8.6-jdk-8 AS build
COPY . .
RUN mvn clean package -DskipTests

FROM openjdk:8-jdk-oracle
COPY --from=build /target/StoZelisCitati-0.0.1-SNAPSHOT.jar StoZelisCitati.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","demo.jar"]