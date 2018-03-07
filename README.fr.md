# Gutenberg Extensibility Workshop

Ce repository contient des exemples de patterns d'extensibility de Gutenberg. C'est organisé tel un plugin WordPress que vous pouvez installer pour jouer avec les différents patterns exposés.

## Patterns d'extensibilité pour plugins (ES6)

Le plugin est composé d'une liste séquentielle de patterns que vous pouvez activer/désactiver à votre guise. Chaque pattern est organisé comme suit:

* Un fichier php dans `lib/XX-nom-du-pattern.php` qui s'occupe essentiellement de charger les différents styles et scripts requis pour le pattern.
* Un dossier `scripts/XX-nom-du-pattern` qui contient les sources JavaScript et SASS requis pour le pattern.
* Lorsqu'on build le projet ( `npm run build` ), un fichier bundle JavaScript `scripts/XX-om-du-pattern/build/index.js` est généré pour le pattern ainsi qu'un fichier de style `scripts/XX-nom-du-pattern/build/style.css` si nécessaire.

### Utilisation

* Copier ce repository dans le dossier plugin de votre installation WordPress `wp-content/plugins/gew/`.
* Naviguer vers ce dossier dans un terminal et lancer `npm install && npm run build`.

Vous pouvez lancer `npm run dev` si vous voullez faire des modifications aux fichiers JavaScript et générer les fichiers bundle automatiquement.

Pour activer/désactiver des patterns, ouvrez le fichier `gutenberg-extensibility-workshop.php` et commenter/décommenter la ligne correspondante au pattern de votre choix.

## Patterns d'extensibilité pour thèmes

Pour exposer les patterns d'extensibilité pour thèmes, le repository contient un thème léger optimisé pour étendre Gutenberg.
Vous pouvez l'installer en copiant le dossier `theme` du repository vers le répertoire `wp-content/themes/gew` de votre installation WordPress.
