# KinéFiches — version 2 (8 novembre 2026)

Application gratuite de prescription d'exercices pour iPad et Windows, utilisable hors connexion après installation.

## Ce qui a changé

- Nouvelle interface épurée, médicale, avec touches bleu ciel (`#77B5FE`) et typographie proche d'Aptos.
- Le RIR est **vide par défaut** chaque fois que tu ajoutes un exercice.
- Tu peux ajouter plusieurs fois le même exercice à une fiche (réglages indépendants).
- Nouvel onglet **Mes programmes** : enregistrer, utiliser, mettre à jour, renommer ou supprimer des programmes types.
- Champ **Recommandation générale** pour la fiche entière.
- Champ **Commentaire** indépendant sous chaque exercice.
- Sur le PDF : seuls les paramètres effectivement renseignés sont visibles. Un RIR ou un repos vide ne crée **aucune colonne**.
- PDF : trois zones par exercice (illustrations, nom + consignes complètes, paramètres, commentaire éventuel). Aucun nom d'application, date, heure ou mention du praticien ailleurs qu'en pied de page : « Exercices prescrits par Jules Louis ».
- Sauvegardes JSON comprenant désormais les programmes préenregistrés, la fiche en cours, la bibliothèque et toutes les images.
- Compatibilité avec les sauvegardes de la version 1.

## IMPORTANT : avant de mettre à jour le site

Si tu as déjà créé des exercices ou des programmes dans l'ancienne application, ouvre d'abord la version 1 et réalise **Sauvegardes → Exporter ma bibliothèque**. Conserve le fichier `.json`.

Les données de l'application sont conservées localement dans le navigateur ou l'appareil (IndexedDB), pas dans les fichiers GitHub. L'application version 2 conserve le même nom de base locale, et reprend normalement ces données en place. L'export préalable sert de sécurité.

## Mettre à jour la version déjà publiée sur GitHub Pages

1. Décompresse le ZIP de cette version 2 sur Windows (clic droit → **Extraire tout**).
2. Ouvre ton dépôt GitHub `kinefiches` (le même qu'avant, il n'est pas nécessaire d'en créer un autre).
3. Depuis l'onglet **Code**, clique **Add file** (= Ajouter un fichier), puis **Upload files** (= Importer des fichiers).
4. Dépose les fichiers **décompressés** et le dossier `assets`. Le fichier `index.html` doit se trouver directement à la racine du dépôt. Le dossier `assets` doit rester un dossier contenant les images et icônes.
5. Valide via **Commit changes** (= Enregistrer les modifications). Les fichiers portant le même nom doivent remplacer les anciens. Si GitHub te demande de confirmer un remplacement, confirme.
6. Retourne sur le même site GitHub Pages que la version 1. **Ne change pas** les réglages de `Settings → Pages`.
7. Actualise une fois la page, puis une seconde fois si l'ancienne version apparaît (le cache hors ligne doit se mettre à jour). Si le site reste ancien, ferme le navigateur, rouvre-le et recharge la page. Sur iPad, relance aussi l'application installée.

Tu peux vérifier la version 2 à la présence de l'onglet **Mes programmes**.

## Utilisation

- **Prescription** → « + Ajouter » autant de fois que nécessaire. Complète les champs. Le RIR et le repos vides n'apparaîtront pas sur le PDF.
- **Recommandation générale** → texte affiché au début du PDF seulement s'il est renseigné.
- **Commentaire** de chaque exercice → texte affiché sous son tableau seulement s'il est renseigné.
- **Créer le PDF** → dans la boîte d'impression, choisis l'enregistrement en PDF (sous Windows : destination « Enregistrer au format PDF » ; sur iPad : impression puis partage/enregistrement dans Fichiers).
- **Enregistrer ce programme** → choisis un nom générique sans nom de patient. Dans **Mes programmes**, « Utiliser » restaure les exercices de ce modèle dans une fiche modifiable.
- **Bibliothèque** → « + Nouvel exercice » pour ajouter une consigne et tes propres photos, sans reprogrammer l'application.
- **Sauvegardes** → « Exporter mes données » pour transférer manuellement un `.json` entre Windows et iPad.

## Bonnes pratiques

- N'ajoute **jamais** de noms de patients, de bilans, de fichiers patients ou d'informations de santé personnelles dans ton dépôt GitHub public. Toutes les images et le code mis sur GitHub sont publics.
- N'enregistre pas de données patients identifiantes dans les commentaires, les programmes enregistrés, ou le fichier JSON non chiffré.
- Les données locales peuvent être perdues si le stockage du navigateur est effacé ou si l'application est supprimée : réalise régulièrement une sauvegarde JSON externe.
- Pour utiliser hors ligne, ouvre l'application **une première fois avec Internet sur chaque appareil**, puis installe-la comme application ; vérifie hors ligne.
- La génération PDF utilise l'impression native du navigateur ; elle fonctionne hors connexion.

## Fichiers

- `index.html` : interface et onglets.
- `styles.css` : design et styles de la fiche PDF A4.
- `app.js` : logique de l'application (bibliothèque, exercices, programmes, PDF, sauvegardes).
- `service-worker.js` : mise en cache hors ligne, version 2.
- `manifest.webmanifest` : installation comme application.
- `assets/` : illustrations des exercices et icônes.

Aucun abonnement, aucun serveur et aucune bibliothèque JavaScript distante ne sont nécessaires à l'application. L'hébergement gratuit de GitHub Pages reste soumis aux conditions de GitHub.
