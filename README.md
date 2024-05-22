# Gestion de Laboratoire Scientifique

Ce projet est une application web pour la gestion d'un laboratoire scientifique, développée avec React.js et TypeScript pour le front-end, et Spring Boot avec Maven pour le back-end. L'application permet à un administrateur de gérer les membres, les informations du laboratoire, les publications et les équipes via un panneau d'administration. Toutes les informations sont affichées dynamiquement sur la page principale après avoir été récupérées de la base de données.

## Fonctionnalités

- Connexion administrateur
- Gestion des membres
- Gestion des informations du laboratoire
- Gestion des publications
- Gestion des équipes
- Affichage dynamique des informations sur la page principale

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
2. Accéder à l'interface d'administration à `http://localhost:3000/admin` pour ajouter des membres, des informations sur le laboratoire, des publications et des équipes.
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
