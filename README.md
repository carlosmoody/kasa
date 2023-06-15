# Kasa app

## 1.Routing

Le router intègre le header et le footer en permanence, avec un global style qui permet de passer notamment les couleurs.

## 2. Organisation du projet

Le style utilise les modules CSS par composants/pages, et va les couleurs sont accessibles à travers des variables globales.
Chaque composant est dans son dossier avec son module CSS associé.

## 3. Gestion des erreurs

Quand une route n'existe pas, le composant Error est appelé. De même lorsque l'id du logement appelé n'existe pas, on est redirigé vers ce composant à travers le composant Navigate.

## 4. Notes sur les composants

- Banner : le composant bannière s'affiche différement en fonction du paramètre _location_ qui lui est passé. Si le paramètre est égal à _home_, alors la version mobile s'affichera moins haute. Il est possible de l'utiliser avec ou sans texte en overlay.

  - location : _home_ si la bannière doit être moins haute en mobile
  - picture : URL de l'image à utiliser
  - altText : texte alternatif pour accessibilité
  - title : texte à afficher en overlay

- Avatar

  - name : nom de l'utilisateur
  - url : URL de l'image de l'utilisateur

- Card : un dégradé est appliqué sur l'image de couverture

  - cover : URL de l'image de couverture du logement
  - title : titre du logement

- Dropdown : ce composant s'affiche en deux versions légèrement différentes en fonction de la page où il est utilisé. Les différences sont minimes : la hauteur, la largeur max, la taille de la police et l'arrondi.

  - location : _details_ si le dropdown est utilisé dans la fiche détails du logement
  - title : titre du dropdown
  - content : contenu texte une fois ouvert

- Slideshow : la galerie d'image change légèrement en version mobile où, en plus de la taille, l'indication de position dans les photos n'apparait plus.

  - images : tableau contenant les URL vers les photos de la galerie

- Stars

  - rating : note du logement, avec vérification du chiffre pour s'assurer qu'il est dans l'écart 0 - 5.

- Tags
  - content : texte à afficher dans le tag

## 5. Notes

Comme sur la maquette, la barre de navigation passe en majuscules en version mobile.
La navigation sur chaque page va également s'afficher dans le titre de la page.
Les favicons sont prêtes pour tous les supports.
