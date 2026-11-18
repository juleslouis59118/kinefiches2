# Mise à jour vers la version 9

1. Dans l’application actuelle, exporte une sauvegarde JSON avant la mise à jour.
2. Décompresse ce ZIP. Remplace les fichiers du site existant par le contenu du dossier (index.html au même emplacement qu’avant).
3. Ouvre le site en ligne, puis ferme et rouvre l’application. Vérifie la version 9 (visible sur ordinateur) et la présence de l’onglet Définitions.
4. Vérifie ensuite le fonctionnement hors ligne. Ne supprime pas les données du navigateur.

Dans Définitions, « Copier » prépare le texte à coller. « Ajouter aux recommandations » ajoute le texte à la fiche en cours sans écraser les recommandations. Si tu modifies un programme enregistré, utilise ensuite « Enregistrer les modifications » dans Prescription.
Tu peux créer, modifier et supprimer tes définitions. Elles sont enregistrées sur cet appareil et incluses dans l’export JSON. Les textes déjà insérés restent indépendants de la définition d’origine.
Pour les transferts, mets tous les appareils à jour en version 9 : les anciennes versions ne connaissent pas ces nouveaux champs.

Le champ RPE (0–10) est vide et accepte lettres et symboles comme les autres paramètres. Il apparaît dans le PDF seulement si renseigné. Il ne remplace pas le RIR.

Repère éditorial pour le RPE 0–10 : CDC, How to Measure Physical Activity Intensity, https://www.cdc.gov/physical-activity-basics/measuring/index.html (consulté le 18 novembre 2026). L’échelle exprime l’effort ressenti ; aucun calcul automatique avec le RIR.

KinéFiches — version 8

MISE À JOUR
1. Dans votre application actuelle, Sauvegardes → Exporter mes données.
2. Remplacez les fichiers du site par le contenu de ce dossier, au même emplacement et à la même adresse.
3. Ouvrez l’application en ligne, fermez-la puis rouvrez-la pour charger la mise à jour.
4. Vérifiez vos exercices et programmes avant de tester hors ligne. Ne supprimez pas les données du navigateur.

NOUVEAUTÉS
Tous les paramètres acceptent chiffres, lettres et symboles. Indiquez les unités souhaitées : 30 s, 1 min, 8 / jambe, sans charge. Les anciennes valeurs de repos et durée conservent leur unité en secondes.
La fiche courante est placée avant la bibliothèque. Les boutons ↑ et ↓ changent l’ordre des exercices.
Dans Mes programmes, Modifier ouvre le programme ; Enregistrer les modifications met à jour l’original. Enregistrer une copie crée un nouvel élément.
Dupliquer crée une copie enregistrée. Enregistrer comme modèle, dans Prescription, enregistre une base réutilisable. Utiliser une copie charge une nouvelle fiche sans modifier le modèle. Le filtre permet d’afficher uniquement les modèles ou les programmes.
Les brouillons sont conservés sur cet appareil ; les modifications d’un programme doivent être enregistrées explicitement. Les sauvegardes JSON incluent les modèles. Importez les nouvelles sauvegardes dans la version 8 sur les autres appareils.
Le PDF et le partage restent disponibles. Aucun hébergement n’est modifié par la remise de ce ZIP.

VERSION 8 : bouton Créer un modèle retiré de Mes programmes. Nouveaux exercices ajoutés avec tous les paramètres vides, sans exemples ni mentions dans les cases. Saisie des paramètres centrée. Les valeurs déjà saisies ou enregistrées sont conservées.

## Vérifications de cette version

Tests automatisés réussis : migration des anciennes données, édition et duplication, saisie libre du RPE, définitions, copie et repli manuel, ajout sans écrasement, sauvegardes JSON et export PDF avec canvas simulé. Ressources du cache hors ligne et intégrité du ZIP vérifiées. Le navigateur de test n’a pas pu démarrer dans cet environnement : l’affichage et le PDF réel restent à vérifier sur ton appareil.
