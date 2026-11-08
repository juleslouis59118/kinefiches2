# KinéFiches — version 4 (8 novembre 2026)

Application gratuite de prescription d’exercices pour Windows et iPad. Les données restent dans le navigateur ou l’application installée et sont transférées manuellement par sauvegarde JSON.

## Modifications de cette version

- Export en **véritable PDF direct**, sans fenêtre d’impression et **sans date, heure, URL ou titre du site**.
- Fiche A4 calquée sur le modèle validé : **jusqu’à 3 exercices par page** lorsque les consignes et commentaires le permettent ; si le contenu est trop long, la fiche passe automatiquement sur plusieurs pages.
- Photos d’étapes horizontales **l’une au-dessus de l’autre**, photos verticales **côte à côte**, sans déformation.
- Titres non gras, typographie Aptos ou équivalent disponible sur l’appareil, fond blanc, filets bleu-gris très discrets.
- Commentaires sous les tableaux, sans fond grisé, et « Recommandation : » en haut si renseignée.
- Tous les champs facultatifs non renseignés **disparaissent complètement** de la fiche, y compris RIR et repos.
- Seule signature sur le PDF : « Exercices prescrits par Jules Louis ».
- Conservation de l’onglet Mes programmes, des doublons d’exercices, du RIR vide par défaut, de la bibliothèque modifiable et de l’export/import JSON.
- Photos initiales des trois premiers exercices rétablies avec des orientations cohérentes.

## Mettre à jour ton site GitHub Pages

1. **Sauvegarde avant mise à jour :** dans le site actuel, ouvre « Sauvegardes » puis « Exporter mes données ». Garde le fichier JSON précieusement.
2. Télécharge et décompresse le ZIP de la version 4 sur Windows.
3. Dans ton dépôt GitHub `kinefiches`, ouvre l’onglet **Code**.
4. Clique sur **Add file** → **Upload files** et importe **le contenu du dossier décompressé**, pas le fichier ZIP lui-même. Les fichiers `index.html`, `app.js`, `pdf-export.js`, `styles.css`, `manifest.webmanifest`, `service-worker.js` doivent être **à la racine** du dépôt ; les images dans `assets/`.
5. Si GitHub propose de remplacer les fichiers existants, confirme puis clique sur **Commit changes**.
6. Ouvre ton adresse GitHub Pages habituelle. **Ne change pas** le réglage de Settings → Pages.
7. Actualise une fois, puis ferme/réouvre la page si la mise à jour n’apparaît pas immédiatement : le cache hors ligne met parfois un chargement à se remplacer.

### Vérification rapide

Dans « Prescription », sélectionne le soulevé de terre roumain, le rowing puis les fentes. Ajoute `RIR = 1` au premier, laisse le RIR des deux autres vide et supprime le repos du troisième. Ajoute une recommandation et, si besoin, des commentaires. Clique sur **Créer le PDF** : tu obtiendras normalement trois exercices sur une page A4, sans date ni titre du site.

### Pour iPad

Ouvre d’abord le site dans Safari avec Internet, puis utilise Partager → Sur l’écran d’accueil → Ajouter. Ouvre l’application une fois en ligne et teste ensuite avec le Wi-Fi désactivé.

### Confidentialité et sauvegardes

- Ne publie jamais de noms de patients, de bilans ni de données médicales personnelles dans ce dépôt **public**.
- Les données locales ne sont pas automatiquement sauvegardées sur GitHub. Exporte régulièrement tes données avec le fichier JSON.
- Le JSON n’est pas chiffré : évite d’y stocker des informations de santé identifiantes.
- Lors du transfert sur un autre appareil, **Importer une sauvegarde** remplace les données de l’appareil cible après confirmation.
- Les conditions de l’hébergement GitHub Pages peuvent changer, mais l’application elle-même ne nécessite ni paiement ni dépendance réseau après installation.

## Fichiers

- `index.html` — interface ; `styles.css` — apparence ; `app.js` — bibliothèque, fiches et sauvegardes ; `pdf-export.js` — génération PDF autonome ; `service-worker.js` — cache hors ligne ; `manifest.webmanifest` — installation ; `assets/` — illustrations et icônes.


## Mise à jour vers la version 5
1. Dans l’application actuelle, exportez vos données dans Sauvegardes.
2. Remplacez les fichiers du site GitHub Pages par le contenu de ce dossier (avec assets), à la même adresse.
3. Ouvrez le site en ligne pour charger la mise à jour, puis fermez et rouvrez l’application. Si nécessaire, actualisez une seconde fois.
4. Vos données restent dans le stockage du même site. Ne supprimez pas les données du navigateur. Vérifiez les nouvelles recherches puis le fonctionnement hors ligne.

Dans Mes programmes, Aperçu ouvre les pages de la fiche et Télécharger le PDF exporte directement le programme enregistré. Ces actions ne changent pas la fiche en cours.
