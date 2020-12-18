# inf3190-final-automne-2020

## Travail à faire

Nous vous donnons une application web incomplète que vous devez compléter. Nous
fournissons le HTML, CSS et PHP du projet. Vous devez fournir le Javascript
nécessaire afin de remplir toutes les exigences de l'examen.

Comme lors de l'examen intra, votre travail consiste à produire un examen pour
un cours d'introduction à la programmation web sous forme d'application web.

## Le projet

Le fichier `index.html` contient tout le HTML du projet. Il s'agit du point
d'entrée de l'application.

Le fichier `style.css` contient un peu de CSS pour gérer les quelques éléments
de présentation de l'application.

Le fichier `correction.php` est le code qui effectue la correction de l'examen.
Ce script retourne un fichier JSON indiquant si chaque question est un succès ou
un échec à l'aide d'une valeur booléenne. Une réponse inexistante dans les
données fournies au script sera considérée comme une réponse erronée.

Le fichier `app.js` est le fichier où vous devez rédiger le code Javascript du
projet.

## La correction des réponses

Vous devez soumettre les données du formulaire au script `correction.php` en
utilisant une requête asynchrone (Ajax). Le script retournera un objet JSON avec
la structure suivante :

```json
{
  "q1": true,
  "q2": false,
  "q3": true,
  "q4": false,
  "q5": false
}
```

Chaque réponse ayant la valeur `true` est une bonne réponse. Chaque bonne
réponse vaut 20 points sur la note de l'étudiant. Vous devez calculer cette note
et l'afficher dans l'élément `#resultat` avec une phrase complète (ex. Vous
obtenez la note de 40%.).

## Validation du formulaire

Lors que l'étudiant clique sur le bouton Corriger, votre application doit
vérifier si chaque question a été répondu. Si au moins une question n'a pas été
répondu alors le formulaire ne doit pas être soumis pour la correction et les
questions non répondues doivent apparaître en rouge.

## Minuterie

L'étudiant possède 5 minutes pour répondre à toutes les questions de l'examen.
* Après 4 minutes, il faut afficher un message d'avertissement à l'étudiant à
  l'aide d'un `alert` l'avisant qu'il ne reste qu'une minute pour terminer
  l'examen.
* Après 5 minutes, il faut désactiver le bouton Corriger.

## Consignes

* Il s'agit d'une application asynchrone, il n'y a donc pas de patron
  POST-REDIRECT-GET à mettre en place.
* Le code Javascript doit être lisible, clair et compréhensible.
* Vous ne pouvez pas modifier les fichiers `correction.php`, `index.html`,
  `style.css`. Ceci implique donc que vous ne pourrez pas ajouter de librairie
  au projet.
* Le seul fichier que vous pouvez modifier est `app.js`.
* Pensez à mettre vos nom, prénom et code permanent dans le projet que vous
  allez remettre.
