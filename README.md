# Gestion de Laboratoire Scientifique

Ce projet est une application web pour la gestion d'un laboratoire scientifique, développée avec React.js et TypeScript pour le front-end, et Spring Boot avec Maven pour le back-end. L'application permet à un administrateur de gérer les membres, les informations du laboratoire, les publications et les équipes via un panneau d'administration. Toutes les informations sont affichées dynamiquement sur la page principale après avoir été récupérées de la base de données.

## Table des Matières

- [Aperçu](#aperçu)
- [Fonctionnalités](#fonctionnalités)
- [Architecture Logicielle](#architecture-logicielle)
- [Prérequis](#prérequis)
- [Installation et Exécution](#installation-et-exécution)
  - [Front-end (React.js + TypeScript)](#front-end-reactjs--typescript)
  - [Back-end (Spring Boot + Maven)](#back-end-spring-boot--maven)
- [Utilisation](#utilisation)
- [Auteurs](#auteurs)
- [License](#license)

## Aperçu

Ce projet a été conçu pour simplifier la gestion d'un laboratoire scientifique. En utilisant une architecture moderne, l'application sépare le front-end et le back-end, permettant une maintenance et une scalabilité plus faciles. Les administrateurs peuvent ajouter et gérer des membres, des publications, des équipes, et des informations sur le laboratoire, qui seront ensuite affichées dynamiquement sur le site web principal.

## Fonctionnalités

- Connexion administrateur
- Gestion des membres
- Gestion des informations du laboratoire
- Gestion des publications
- Gestion des équipes
- Affichage dynamique des informations sur la page principale

## Architecture Logicielle

L'architecture logicielle de cette application est basée sur le modèle MVC (Model-View-Controller) pour le back-end et utilise React pour le front-end. Voici un diagramme technique illustrant les composants principaux et leurs interactions :

![Diagramme Technique]



<a href="https://ibb.co/z2LWfgQ"><img src="https://i.ibb.co/6tpcsSr/1-MWnj-Dit-ZVy-RYFQ81i8-Fk-BQ.jpg" alt="1-MWnj-Dit-ZVy-RYFQ81i8-Fk-BQ" border="0"></a>

1. **Base de données** : MySQL est utilisé pour stocker toutes les données de l'application.
2. **Spring Boot** : Fournit le cadre pour le back-end, gère les requêtes HTTP, et intègre les composants.
3. **Spring Data JPA** : Gère l'accès aux données et les opérations CRUD.
4. **Service Layer** : Contient la logique métier de l'application.
5. **Service Interface** : Définit les contrats pour les services.
6. **Entity Model** : Comprend les objets POJO qui représentent les entités de la base de données.
7. **REST API Controller** : Gère les requêtes HTTP des clients et renvoie les réponses appropriées.
8. **Front-end** : Développé avec React.js et TypeScript, communique avec le back-end via des appels API REST.

## Prérequis

- Node.js
- npm ou yarn
- Java JDK 21
- Maven
- MySQL

## Installation et Exécution

### Front-end (React.js + TypeScript)

1. Cloner le dépôt :
    ```bash
    git clone https://github.com/DiaeEddineJamal/Valetudo-Lab.git
    ```

2. Naviguer dans le répertoire du front-end :
    ```bash
    cd frontend
    ```

3. Installer les dépendances :
    ```bash
    npm install
    # ou
    yarn install
    ```

4. Démarrer l'application front-end :
    ```bash
    npm start
    # ou
    yarn start
    ```

### Back-end (Spring Boot + Maven)

1. Cloner le dépôt :
    ```bash
    git clone https://github.com/DiaeEddineJamal/Valetudo-Lab.git
    ```

2. Naviguer dans le répertoire du back-end :
    ```bash
    cd labbackendx
    ```

3. Configurer la base de données MySQL :

    Créez une base de données dans MySQL :
    ```sql
    CREATE DATABASE labdb;
    ```

    Mettez à jour le fichier `application.properties` avec vos informations MySQL :
    ```properties
    spring.datasource.url=jdbc:mysql://localhost:3306/labdb
    spring.datasource.username=votre-utilisateur
    spring.datasource.password=votre-mot-de-passe
    ```

4. Construire et démarrer l'application back-end :
    ```bash
    mvn clean install
    mvn spring-boot:run
    ```

## Utilisation

1. Ouvrir votre navigateur et accéder à `http://localhost:3000` pour le front-end.
   
<a href="https://ibb.co/GMNXypq"><img src="https://i.ibb.co/X5M91Lq/Screenshot-2024-05-24-114714.png" alt="Screenshot-2024-05-24-114714" border="0"></a>
   
2. Accéder à l'interface d'administration à `http://localhost:3000/admin` pour ajouter des membres, des informations sur le laboratoire, des publications et des équipes.

   <a href="https://ibb.co/s9gvq7S"><img src="https://i.ibb.co/m5RC4ps/Screenshot-2024-05-24-120526.png" alt="Screenshot-2024-05-24-120526" border="0"></a>

   <a href="https://ibb.co/bmR5cmw"><img src="https://i.ibb.co/W5pvm58/Screenshot-2024-05-24-120729.png" alt="Screenshot-2024-05-24-120729" border="0"></a>

   
3. Les informations ajoutées via le panneau d'administration seront affichées dynamiquement sur la page principale.

## Auteurs

- [Jamal Diae Eddine](https://github.com/DiaeEddineJamal)
- [Belabadia Rim](https://github.com/Rim1Belabadia1)
- [El Jouali Ali](https://github.com/AliEg999)
- [Rim Dighali](https://github.com/reemdighali)
- [Basma Boukhal](https://github.com/basmaboukhal)

## License

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

---

&copy; 2024 Votre Luziv. Tous droits réservés.
