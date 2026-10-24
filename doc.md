# Modifications front impactant le back-office

Période : 22 – 24 octobre 2026

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

## 8. Fiche produit : « Couleur » — affichée, mais plus sélectionnable

Commits `5b5f684`, `757b30c`, `4f1c981`, et un passage ultérieur non numéroté (24/10)

- Le libellé « Teinte » devient « Couleur » (commit `5b5f684`). À l'origine, trois pastilles cliquables permettaient de choisir la couleur.
- Les pastilles ont ensuite été retirées à la demande de la cliente (commits `757b30c`, `4f1c981`) : la couleur n'est plus modifiable depuis la fiche produit.
- Une ligne de rappel « Couleur — [valeur] » a été remise en lecture seule, affichée uniquement sur les pièces marquées `hasTeinte: true`.
- **Point d'attention pour le catalogue** : il n'existe aujourd'hui aucun champ « couleur » propre à chaque pièce dans les données du site — la valeur affichée vient d'un état de démonstration partagé (toujours « Noir Ébène », quelle que soit la pièce), pas d'une donnée produit réelle. Si la couleur doit rester affichée, le back-office devra fournir un champ `couleur` par pièce (ou par variante) pour que cette ligne soit juste.

## 9. Formulaire de contact : pièce jointe

Commit du 24/10 (non numéroté)

- Le champ « Pièce jointe » est resté un envoi de fichier classique (un seul fichier, aucun type ni poids limité côté interface) ; seul son habillage visuel a changé. Pas de nouveau champ ni de changement de contrat de données pour le back-office.

## Sans impact back-office

Mise en page de la fiche produit (galerie, structure, alignements, centrage des sections, bouton « Ajouter aux favoris ») et de la FAQ ; contenu supplémentaire ajouté dans les quatre catégories de FAQ existantes (pas de nouvelle catégorie) ; toast « Ajouté au panier » ; retrait du bouton « Acheter maintenant », du sélecteur de quantité et de la ligne de repères Atelier / Numérotation / Passeport numérique sur la fiche produit ; renommage « Passeport numérique » ; corrections d'orthographe ; footer, newsletter et page La Maison.
