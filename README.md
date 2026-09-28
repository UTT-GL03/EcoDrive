# Réduction de l'impact écologique du service numérique d'une plateforme de stockage de fichiers.
## Choix du sujet

Face à l'explosion du volume de données personnelles et professionnelles, le recours au stockage cloud (Google Drive, Mega, etc.) est devenu incontournable lorsque les supports physiques saturent. Nous avons choisi d'étudier ces plateformes de stockage de fichiers en raison de leur omniprésence : éducation (partage de cours, notes), santé (gestion et échange de dossiers médicaux) ou administrations publiques (centralisation de données sensibles selon les droits d'accès). Toutefois, cette demande croissante exige une mise à niveau constante des infrastructures, entraînant une hausse de leur empreinte écologique. L'objectif de notre travail est donc de proposer une plateforme dont l'impact environnemental est moindre.

## Utilité sociale

La capacité à stocker, à préserver, à classifier et à sécuriser des informations ainsi que des documents est de façon indiscutable utile à la société. Historiquement, les documents qui ont réussi à nous parvenir malgré les années sont une preuve de la nécessité d'archiver des textes et ouvrages.
Malgré cela, suite à l'arrivée d'Internet, le stockage d'information est paradoxalement plus difficile à garantir, en partie dûe à sa nature temporaire, à sa difficulté d'accès, ainsi qu'à la nature de son stockage : c'est la Dégradation des données.
Les disques durs, disquettes et bandes magnétiques se dégradent au fur et à mesure de leur utilisation, ainsi que suite à une exposition à des températures élevées. Cela provoque une dégradation ainsi qu'une corruption des données sur le long termes. Les CD/DVD peuvent également se dégrader suite à de mauvaises conditions de stockage telles que de l'humidité.

Cela cause encourage à également propager les données pour empêcher leur dégradation, notamment par le biais d'Internet : plus une donnée vraie est accessible, plus elle a de chances de perdurer dans le temps.
Cependant, cette solution a également des points faibles : attaques, empoisonnement des données, fake news, et l'arrivée de l'IA qui peuvent également répandre de fausses informations. [(source: IBM)](https://www.ibm.com/fr-fr/think/topics/data-poisoning)

Certaines mesures sont entreprises pour permettre l'archivage d'Internet (Internet Archive, concept de Lost Media, communautés d'historiens) et simplifier la préservation de documents et sites webs, mais ils se heurtent également à des problèmes.
[(source: Learn & Work EcoSystem Library)](https://learnworkecosystemlibrary.com/topics/digital-decay-internet-poisoning-and-digital-archiving/)

## Effets de la numérisation

La numérisation de documents et les solutions de type Drive sur le Cloud n'ont pas vraiment remplacé une solution existante avant Internet, dans le sens où la création de documents de façon numérique n'a pas eu besoin de services de ce type pour exister. Il n'est pas non plus possible de quantifier l'utilisation de ce type de services directement pour en tirer des conclusions (est-ce que les utilisateurs les utilisent de façon très efficace pour stocker et partager des fichiers d'importance capitale ou bient stockent-ils des fichiers non-utilisés ou redondants?). Nous pouvons simplement quantifier l'impact écologique actuel des solutions informatiques proposant ce services, que nous savons être conséquentes.

Nous pouvons toutefois instaurer des mesures afin de s'assurer que les utilisateurs en font bon usage : Limiter les documents inactifs, Optimiser la taille, Promouvoir l'efficacité (taille / information)

## Scénarios d'usage et impacts

Pour ces scénarios d'utilisation, nous prendrons pour hypothèses que l'utilisateur utilise très souvent la plateforme et y dépose des fichiers et dossiers plutôt volumineux pour certains. Nous avons donc deux cas de consultation : 
1. La consultation d'un fichier.
2. La Navigation dans l'aborescence d'un fichier.

### Scénario : "Utilisation de la rubrique 'Fichiers récents'""
1. L'utilisateur accède à la page d'accueil, sur la rubrique "fichiers récents" et ouvre un fichier.
2. L'utilisateur ferme le fichier et retourne à l'écran d'accueil / le dossier du fichier (selon les sites).

### Scénario : "Navigation dans l'aborescence de fichiers"
1. L'utilisateur accède à la page d'accueil et ouvre sur un dossier.
2. L'utilisateur accède au dossier et ouvre un sous-dossier.
3. L'utilisateur ouvre un des fichiers du sous-dossier.
4. L'utilisateur revient au dossier initialement ouvert.

## Impact de l'exécution des scénarios auprès de différents services concurrents

L'EcoIndex d'une page (de A à G) est calculé (sources : [EcoIndex](https://www.ecoindex.fr/comment-ca-marche/), [Octo](https://blog.octo.com/sous-le-capot-de-la-mesure-ecoindex), [GreenIT](https://github.com/cnumr/GreenIT-Analysis/blob/acc0334c712ba68939466c42af1514b5f448e19f/script/ecoIndex.js#L19-L44)) en fonction du positionnement de cette page parmi les pages mondiales concernant :

- le nombre de requêtes lancées,
- le poids des téléchargements,
- le nombre d'éléments du document.

Analysons l'impact écologique de l'exécution de ces scénarios chez des applications concurrentes : **MEGA**, **Google Drive**, et **Dropbox**.

| Service | Score (sur 100) | Classe | Détail des mesures
| --- | --: | --: | --:
| Dropbox | ? | F 🟪 | [(source)](https://github.com/UTT-GL03/EcoDrive/tree/main/benchmark/Dropbox/scenarios)
| MEGA| ? | G ⬛ | [(source)](https://github.com/UTT-GL03/EcoDrive/tree/main/benchmark/MEGA/scenarios)
| Google Drive | ? | G ⬛ | [(source)](https://github.com/UTT-GL03/EcoDrive/tree/main/benchmark/Google%20Drive)
