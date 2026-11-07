# KinéFiches — Jules Louis

Application personnelle de prescription d’exercices, conçue pour iPad et Windows.
Pas d’abonnement, pas de compte dans l’application, pas de service distant obligatoire.
Les exercices et le programme restent stockés localement sur chaque appareil.

## Contenu de cette version (v1)

- Six exercices illustrés, avec leurs étapes distinctes (pour le curl puis développé, les deux premières positions figurent sur une même image, conformément à la demande).
- Sélection d’exercices pour une fiche patient.
- Paramètres indépendants : séries, répétitions ou durée, charge, pause, RIR, fréquence et consigne spécifique.
- Informations générales du patient et édition d’une fiche au format A4, sur une ou plusieurs pages.
- Bibliothèque modifiable : ajouter, renommer, supprimer des exercices et importer plusieurs images par exercice, les légender et les réordonner.
- Sauvegarde et restauration manuelles au format JSON **avec les images incorporées**.
- Application installable hors ligne, une fois déployée sur un site HTTPS et chargée au moins une fois avec Internet.

## Installer gratuitement sur iPad et Windows

### 1. Publier les fichiers sur GitHub Pages

1. Crée gratuitement un compte sur https://github.com/ si tu n’en as pas.
2. Crée un **nouveau dépôt public** appelé, par exemple, `kinefiches` (le dépôt doit être public pour l’option gratuite la plus simple).
3. Décompresse le ZIP de l’application. Dans le dépôt, utilise **Add file → Upload files** et dépose les **fichiers décompressés et le dossier `assets`**, pas le ZIP lui-même. Le fichier `index.html` doit être **à la racine** du dépôt, et les images dans `assets/`.
4. Valide l’ajout des fichiers avec « Commit changes ».
5. Dans **Settings → Pages**, sélectionne **Deploy from a branch**, branche `main`, dossier `/(root)`, puis **Save**.
6. GitHub Pages affiche ensuite l’adresse de ton application sous la forme `https://TON_IDENTIFIANT.github.io/kinefiches/` (utilise l’adresse affichée par GitHub, pas une adresse devinée).

**Important :** le code et les images d’origine du dépôt public sont visibles par tous. En revanche, les informations saisies dans ton application ne sont pas envoyées à GitHub : elles restent dans le stockage de ton navigateur ou de l’application installée. N’ajoute jamais de dossiers patients, noms ou autres données de santé dans le dépôt.

### 2. Sur l’iPad

1. Ouvre l’adresse HTTPS de l’application dans **Safari**, avec Internet.
2. Touche **Partager → Sur l’écran d’accueil → Ajouter**.
3. Ouvre KinéFiches depuis sa nouvelle icône pendant que tu es encore connecté. Lorsque le cache est installé, l’application peut fonctionner hors ligne.
4. Pour récupérer un PDF : **Créer la fiche PDF → Imprimer**, puis utilise l’aperçu d’impression et l’option **Partager / Enregistrer dans Fichiers** disponible sur ton iPad. Selon la version d’iPadOS, un agrandissement de l’aperçu d’impression peut faire apparaître le PDF à partager.

### 3. Sur Windows

1. Ouvre la même adresse HTTPS dans **Chrome ou Edge**.
2. Utilise **Installer cette application / Installer ce site comme application** dans le navigateur.
3. Ouvre KinéFiches une première fois en ligne, puis réessaie sans connexion.
4. Pour le PDF : **Créer la fiche PDF → Imprimer → Destination : Enregistrer au format PDF**.

## Utiliser l’application

1. Dans **Prescription**, clique sur « + Ajouter » en face des exercices souhaités.
2. Ajuste les paramètres pour chaque exercice ; l’écran n’enregistre pas le nom du patient dans les sauvegardes.
3. Clique sur **Créer le PDF**. Les feuilles A4 se répartissent automatiquement selon le nombre d’exercices et d’images.
4. Dans **Bibliothèque**, crée tes propres exercices : donne un nom, des consignes, des images par étape et des paramètres habituels.

Les valeurs par défaut (3 séries de 10 répétitions, pause 60 secondes, RIR 2) sont **des valeurs d’exemple modifiables** et non des recommandations cliniques individuelles.

## Transférer entre iPad et Windows

- Dans **Sauvegardes**, choisis **Exporter ma bibliothèque** : un fichier `KineFiches_sauvegarde_DATE.json` est téléchargé, y compris toutes les images.
- Transfère ce fichier avec une clé USB, AirDrop, câble, ou via les fichiers de ton choix.
- Sur l’autre appareil, ouvre **Sauvegardes → Importer une sauvegarde**, puis sélectionne le JSON.
- **Attention :** l’import remplace la bibliothèque et le programme actuels de cet appareil. Fais un export avant chaque import si tu ne veux rien perdre.

## Conservation et confidentialité

- L’application est gratuite et fonctionne sans API, publicité, analyse d’utilisation ni compte.
- Aucun serveur de données n’est utilisé par l’application ; les photos ajoutées, consignes et programmes restent localement sur l’appareil jusqu’à un export volontaire.
- Les données locales ne sont **pas chiffrées**. Les fichiers de sauvegarde JSON ne sont pas non plus chiffrés ; protège-les et évite d’y saisir des informations de santé identifiantes.
- Supprimer l’application, effacer le stockage d’un navigateur, ou changer d’appareil peut entraîner une perte de données. Fais des sauvegardes périodiques.
- Chaque appareil conserve ses propres données. La synchronisation est volontairement manuelle.

## Conserver ou modifier l’application

Garde l’archive ZIP en lieu sûr : elle contient **tous les fichiers** nécessaires pour reproduire et modifier cette version. Tu peux ajouter des exercices **sans retoucher au code**. Pour les évolutions du logiciel lui-même, les fichiers `index.html`, `styles.css`, `app.js` et `service-worker.js` peuvent être édités et republiés.

L’hébergement gratuit dépend des conditions du fournisseur, qui peuvent changer, mais l’application et son code ne requièrent aucun abonnement. Le fonctionnement hors ligne suppose une installation initiale sur une page HTTPS et un cache valide.
