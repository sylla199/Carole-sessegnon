# Modifications front impactant le back-office

Période : 22 – 27 octobre 2026

Seules les modifications qui touchent des données à gérer côté back-office sont listées. Les ajustements de mise en page et de texte ne sont pas concernés.

> Le site est aujourd'hui une maquette sans serveur : rien de ce qui suit n'est encore enregistré. Cette liste décrit ce que le back-office devra recevoir ou gérer.

## 1. Commande : message cadeau

Commit `128a34b` — ⚠️ **remplacé par le point 11** (une carte par pièce)

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

## 8. Fiche produit : couleur — vraies variantes par pièce, de nouveau sélectionnable

Commits `5b5f684`, `757b30c`, `4f1c981`, puis remplacé le 27/10

Historique court : un sélecteur de couleur existait (commit `5b5f684`), a été retiré à la demande de la cliente (commits `757b30c`, `4f1c981`, la couleur restant affichée en texte seul), puis remis le 27/10 — cette fois avec de vraies variantes par pièce au lieu d'un état de démonstration partagé.

Chaque pièce qui propose plusieurs couleurs porte maintenant un tableau `variants` :

```js
variants: [
  { label: 'Noir Ébène',  hex: '#2E2724' },
  { label: 'Cuir naturel', hex: '#C2A079' },
  { label: 'Bordeaux',     hex: '#6A2430' }
]
```

- Concerne **Huperano, Sikadi et Wèlè** (3 coloris chacune pour l'instant). **Radah, Nafi et Ayaba** n'ont pas de variante de couleur et n'affichent plus rien à cet endroit.
- La couleur se choisit via une pastille carrée de la couleur réelle (plus de texte seul, plus de cercle) : cliquer dessus change le libellé affiché et la photo principale de la fiche.
- **Non géré pour l'instant — à prévoir côté back-office si besoin** : le panier et la commande ne retiennent pas la couleur choisie. Le clic sur « Ajouter au panier » n'envoie que l'identifiant de la pièce et la quantité ; la couleur sélectionnée à l'écran n'est pas transmise. Si l'atelier a besoin de savoir quelle couleur préparer, il faudra ajouter un champ `variant` à la ligne de panier et le faire remonter jusqu'à la commande (même logique que le message cadeau, point 1).
- Le prix et le stock restent communs à toutes les couleurs d'une même pièce : pas de prix ni de stock par variante à ce stade. À confirmer si c'est le fonctionnement voulu.

## 9. Formulaire de contact : pièce jointe

Commit du 24/10 (non numéroté)

- Le champ « Pièce jointe » est resté un envoi de fichier classique (un seul fichier, aucun type ni poids limité côté interface) ; seul son habillage visuel a changé. Pas de nouveau champ ni de changement de contrat de données pour le back-office.

## 10. Coordonnées de contact : source unique

Commit du 27/10

- Les quatre cartes de canaux de la page Contact (WhatsApp, Téléphone, Chat en direct, Email) sont supprimées. Elles étaient décoratives : aucun lien, texte générique répété. **« Chat en direct » disparaît** — aucun chat n'était branché derrière, et rien n'est prévu côté back-office.
- WhatsApp et le téléphone sont repliés dans le bloc latéral de la page Contact, et deviennent cliquables (`mailto:`, `tel:`, `wa.me`).
- **Point important** : l'e-mail et le téléphone étaient écrits en dur à cinq endroits du site. Ils sont désormais regroupés dans une constante unique `CONTACT` en tête de `index.html` :

```js
const CONTACT = {
  email: "contact@carolesessegnon.com",
  tel: "+225 07 20 00 95 20",
  telBrut: "2250720009520",        // pour tel: et wa.me
  horaires: "Lundi – samedi, 9h – 18h (GMT)"
};
```

- Le bloc Contact, les mentions légales, la réponse FAQ « Puis-je vous joindre par téléphone ou par WhatsApp ? » et le message de blocage du passeport numérique y puisent tous. **Changer le numéro ou l'e-mail à un seul endroit le change partout sur le site.**
- Le numéro WhatsApp est le même que le numéro de téléphone. Si la Maison ouvre une ligne WhatsApp distincte, il faudra ajouter un champ séparé dans cette constante.
- Si ces coordonnées doivent un jour être pilotées depuis le back-office, c'est cette constante qu'il faudra alimenter.

## 11. Checkout : coordonnées du destinataire, code postal, moyens de paiement

Commit du 27/10

- **Adresse de livraison** : deux nouveaux champs, **e-mail** (facultatif) et **téléphone** (obligatoire) du destinataire — distincts des coordonnées de l'acheteur saisies plus haut dans « Coordonnées ». Objectif : que le livreur puisse joindre la personne qui réceptionne le colis, même si ce n'est pas elle qui a payé (cas d'un cadeau envoyé à quelqu'un d'autre).
- Nouveau champ **code postal** (facultatif), avec une note affichée sous le champ précisant qu'il ne concerne que les livraisons hors Côte d'Ivoire. Aucun champ « pays » n'a été ajouté : rien ne conditionne automatiquement l'affichage de cette note, c'est une indication textuelle.
- **Moyens de paiement** : « Carte de crédit » est renommé **« Carte bancaire »** (cohérent avec le reste du site). **« Paiement en espèces » est retiré** : il ne reste que Carte bancaire et Mobile money. Si le back-office avait prévu une réconciliation pour les règlements en espèces à la livraison, elle n'a plus lieu d'être pour les nouvelles commandes.
- **Commande sans compte** : vérifié, déjà possible aujourd'hui — aucune étape du tunnel n'exige une connexion, le bouton « Se connecter » reste une option. Rien à changer ici, mentionné pour mémoire.

## 12. Bannière de cookies

Commit du 27/10

- Une bannière s'affiche en bas de toutes les pages à la première visite, avec deux boutons **Accepter** / **Refuser** et un lien vers la Politique de confidentialité.
- Le choix est mémorisé uniquement dans le navigateur du visiteur (`localStorage`), pour ne plus réafficher la bannière. **Rien n'est envoyé ni enregistré côté serveur** : pas de champ, pas de table à prévoir pour l'instant.
- Le site n'a aujourd'hui aucun cookie de mesure d'audience ou publicitaire réellement actif derrière ce choix — la bannière anticipe un futur outil (analytics) qui n'est pas encore branché. Si un tel outil est ajouté plus tard, il devra respecter le choix mémorisé (ne pas se charger si « Refuser »).
- Si la Maison a besoin un jour de prouver le consentement (obligation légale, audit), il faudra faire remonter ce choix au serveur avec sa date — ce n'est pas le cas actuellement.

## 11. Cadeau : une carte par pièce (remplace le cadeau unique)

Commit du 27/10

**Ceci remplace le point 1.** Le message cadeau n'est plus unique pour toute la commande : **chaque pièce porte sa propre carte**.

### Ce que reçoit le back-office

Chaque ligne de commande porte un champ `gift`, soit `null`, soit :

| Champ | Type | Règle |
|---|---|---|
| `gift.kind` | `"message"` ou `"vierge"` | `"vierge"` = carte vierge, à remplir à la main par le client |
| `gift.message` | texte | 250 caractères maximum ; **vide** quand `kind` vaut `"vierge"` |
| `gift.to` | texte | prénom du destinataire, facultatif, 60 caractères maximum |

- **Une seule carte par ligne**, quelle que soit la quantité. Une ligne à 2 exemplaires reçoit une carte, pas deux.
- L'ancien champ `gift` au niveau de la commande n'est plus la source : il ne faut plus le lire.

### Point important : la règle d'héritage ne concerne pas le back-office

Dans le panier, le client dispose de deux niveaux :

1. une carte **globale** (encadré Récapitulatif, « Le plaisir d'offrir ») ;
2. une carte **par pièce**, qui prime sur la globale ;
3. un retrait par pièce (« Ne pas offrir cette pièce »), qui l'emporte sur les deux.

**Cette résolution est faite côté site avant l'envoi.** Le back-office reçoit déjà le résultat ligne par ligne et n'a aucune logique de repli à implémenter.

### Reste à faire

Rien n'est encore enregistré : comme le reste du site, la commande ne vit que dans la page. Le back-office devra stocker `gift` par ligne de commande et le faire remonter sur le bon de préparation, pour que l'atelier glisse la bonne carte dans chaque écrin.

## Sans impact back-office

Mise en page de la fiche produit (galerie, structure, alignements, centrage des sections, bouton « Ajouter aux favoris ») et de la FAQ, y compris un bug corrigé où les questions restaient invisibles après un changement de catégorie ; contenu supplémentaire ajouté dans les quatre catégories de FAQ existantes (pas de nouvelle catégorie) ; retrait de la ligne de matière (« Cuir de vachette, tannage végétal »…) de la fiche produit — la donnée existe toujours et reste utilisée dans le panier et la commande, seul l'affichage change ; reformulation du toast d'ajout au panier (« Cette pièce a été ajoutée au panier ») ; retrait du bouton « Acheter maintenant », du sélecteur de quantité et de la ligne de repères Atelier / Numérotation / Passeport numérique sur la fiche produit ; renommage « Passeport numérique » ; corrections d'orthographe ; footer, newsletter et page La Maison ; correction d'un bug d'affichage où la photo de la pièce s'étirait dans le panier et sur la page de détail de commande dès qu'une carte cadeau était ajoutée (l'image était étirée par la hauteur du bloc cadeau à côté d'elle — purement visuel, aucune donnée concernée).
