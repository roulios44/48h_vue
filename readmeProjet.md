# Baleine Bleu

Baleine Bleu est un site de E-commerce qui communique sur plusieurs serveur.



# Développement
#### Alan JORDY - Jules CROIZIER
## Front - Vue.js

Le site propose un service de E-commerce avec une création de compte, l'authentification, un catalogue de produit interserveur et un panier.

### Création de compte 
Formulaire d'inscription qui insère les valeurs dans la base de données afin de créer un compte. Un compte possède des rôles pour différencier leurs fonctionnalitées.

### Connexion 
Formulaire de connexion qui vérifie dans la base de données si l'utilisateur existe et enregistre les valeurs utile tel que le rôle de l'utilisateur afin de lui attribuer les fonctionnalitées qui lui seront dédié.

#### Client
Peut réalisé des achats via le catalogue.

#### Commerçant
Peut ajouter des nouveaux produit dans son catalogue.

#### Administrateur
Peut black-lister les serveurs concurrent et ajouter un serveur partenaire.

### Catalogue produit 
Un catalogue produit est mit à disposition des utilisateurs afin de leurs permettrent de réaliser des commandes.

## Back - php

### Envoie des données avec le front
Communication avec la base de données afin d'envoyer les données via des routes en format json à la partie Front du site.

### Cron Job
Mise en place d'un script php permettant de récupérer les IP des serveurs afin de mettre à disposition le catalogue des produits de chaque serveurs.

# Réseaux
#### Florian DAGNAS - Enzo ARCHARD - Noa LAUVRAY
    
## Infrastructure - Cisco Packet Tracer   
Réalisation de l'infrastructure réseau visualisé dans le projet   
    
## Cybersécurité - Sécurisation de docker   
Réalisation d'une documentation sur comment sécurisé ses containers Docker    
    
## DevOps - Docker-Compose    
Réalisation du docker-compose.yml et des différents Dokerfile utilisé pour les différents containers demander   

# Data
#### Christian NGONO ABANDA - Younes HAMMOUTENE
## Recommandation de produits:

Ce code PHP implémente une logique pour recommander des produits similaires à un produit donné. Il utilise <ins> approche basée sur la distance entre les identificateurs de produits pour trouver le produit le plus proche dans la même catégorie </ins>, puis recommande d'autres produits appartenant à cette même catégorie.

## Prérequis :

-Avoir un serveur PHP exécutant.
-Avoir accès à une base de données de produits avec les colonnes "id", "name" et "categoryId".

## Installation:

-Téléchargez ou clonez ce repository sur votre ordinateur.
-Assurez-vous d'avoir accès à une base de données de produits et configurez-la dans le fichier "dbHandler.php".
-Exécutez le code sur votre serveur PHP.

## utilisation:

-Les données de formation sont récupérées à partir de la base de données en utilisant la méthode getInDBWithInner de la classe dbHandler.
-Les catégories et les IDs de produits sont enregistrés dans des tableaux pour être utilisés pour les prédictions.
-Le produit le plus proche est trouvé en utilisant une boucle foreach pour parcourir les données d'entraînement et en comparant la distance absolue entre l'ID du produit test (ici, 6) et les autres IDs de produits.
-Les produits recommandés sont déterminés en parcourant à nouveau les données d'entraînement et en enregistrant tous les produits appartenant à la même catégorie que le produit le plus proche.
-Les produits recommandés sont affichés à l'utilisateur en utilisant la fonction print_r.
"Lorsque le code est exécuté, il affichera les produits recommandés pour le produit avec l'identificateur de produit 6. Vous pouvez changer la valeur de $testProductId pour recommander des produits similaires à un autre produit.""


## Remarques:

Ce code est fourni à titre d'exemple et peut nécessiter des modifications en fonction de vos besoins spécifiques.

## Conclusion:

Ce code peut être utilisé comme point de départ pour un projets de recommandation de produits plus avancés en ajoutant des algorithmes de classification ou arbres de décision plus sophistiqués et en utilisant des données plus volumineuses.
