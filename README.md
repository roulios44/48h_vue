
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
Communication avec la base de données afin d'envoyer les données avec des routes en format json à la partie Front du site.

### Cron Job
Mise en place d'un script php permettant de récupérer les IP des serveurs afin de mettre à disposition le catalogue des produits de chaque serveurs.

# Infrastructure
#### Enzo ARCHARD - Florian DAGNAS - Noa LAUVRAY
### Virtualisation
Première idée : création de trois machines virtuelles pour une mise en place d'un réseau décentralisé.

### Cisco Packet Tracer
Maquettage d'une infrastructure réseau pour pouvoir imager nos idées.

### Docker
- Utilisation de conteneurs de données et gestion des conteneurs avec Docker Compose.
- Gestion de l'aspect sécurité du site.

# Data
#### (insérer nom)
insérer travail réaliser.

