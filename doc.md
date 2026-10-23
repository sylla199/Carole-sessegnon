# Modifications front impactant le back-office

Période : 22 – 23 octobre 2026

Seules les modifications qui touchent des données à gérer côté back-office sont listées. Les ajustements de mise en page et de texte ne sont pas concernés.

> Le site est aujourd'hui une maquette sans serveur : rien de ce qui suit n'est encore enregistré. Cette liste décrit ce que le back-office devra recevoir ou gérer.

## 1. Commande : message cadeau

Commit `128a34b`

Une commande peut porter un message cadeau.

| Champ | Type | Règle |
|---|---|---|
| `gift.message` | texte | 250 caractères maximum, obligatoire s'il y a un cadeau |
| `gift.to` | texte | prénom du destinataire, facultatif, 60 caractères maximum |

- À afficher sur la fiche commande, pour que l'atelier glisse le mot dans l'écrin.
- Le message est copié dans la commande au moment du paiement.
- Absence de cadeau : `gift = null`.

## 2. Commande : livraison uniquement

Commit `5b5f684`

- Le « Retrait en boutique » est supprimé du tunnel de commande, ainsi que le choix ville / boutique.
- Le mode de retrait et la liste des boutiques ne servent plus pour les nouvelles commandes.

## 3. Adresse de livraison : civilité

Commit `5b5f684`

- Nouveau champ **civilité** dans l'adresse de livraison.

## 4. Alerte de retour en stock

Commit `5b5f684`

- Sur une pièce en rupture, le visiteur peut laisser son e-mail via « Me prévenir quand elle sera disponible ».
- Le back-office doit gérer une liste d'abonnés par pièce et l'envoi d'un e-mail quand le stock revient.
- Aujourd'hui le formulaire n'enregistre rien.

## 5. Formulaire de contact

Commits `5b5f684`, `23ff9cc`, `931838c`

Champs ajoutés :

- civilité
- téléphone (juste après l'e-mail)
- numéro de commande
- pièce jointe
- préférence de contact

Choix du champ **Objet** :

- Une pièce
- Une commande
- Le passeport numérique
- Presse
- Livraison
- Retour et échange
- Commande en ligne
- Service après-vente
- Autre demande

Les demandes reçues devraient être classables par objet et rattachées au numéro de commande.

À confirmer : les champs ont été relevés d'après les messages de commit, pas relus un par un dans la page.

## 6. Coordonnées de la Maison

Commit `5b5f684`

- E-mail : **contact@carolesessegnon.com** (remplace bonjour@)
- Téléphone : **+225 07 20 00 95 20**
- Le bloc « Réserver un rendez-vous en boutique » est remplacé par « La Maison vous accompagne » avec un bouton « Échanger avec la Maison ». Il n'y a plus de prise de rendez-vous en boutique à gérer.

## 7. Passeport numérique : 5 tentatives

Commit `c9c6718` et `1b0e8a7`

- La saisie est bloquée après **5 tentatives** erronées, au lieu de 3.
- Le message de blocage invite à écrire à contact@carolesessegnon.com.
- Si le back-office gère le déblocage d'une saisie suspendue, la règle des 5 essais s'applique.

## 8. Fiche produit : « Couleur »

Commit `5b5f684`

- Le libellé « Teinte » devient « Couleur ». Le champ correspondant dans le catalogue doit s'appeler « couleur ».

## Sans impact back-office

Mise en page de la fiche produit, de la FAQ et du toast « Ajouté au panier » ; retrait du bouton « Acheter maintenant » et du sélecteur de quantité sur la fiche produit ; renommage « Passeport numérique » ; footer, newsletter et page La Maison.
