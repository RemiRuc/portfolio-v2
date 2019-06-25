import Vue from "vue";

const dataProject = new Vue({
  data: {
    project: {
        "fr": {
            toWatchList: {
                name: "TO WATCH LIST",
                subname: "WEB APPLICATION",
                img: "towatchlist",
                presentation: "ToWatchList est une application web disponible sur navigateur. Reprenant le même principe d’une to do list adaptée aux séries télévisées, l’utilisateur peut créer plusieurs séries en y renseignant le nom et le nombre d’épisodes. Il peut ensuite cocher les épisodes qu’il aura vu ou non. A l’aide d’un compte utilisateur et d’une base de données, il aura accès à ses séries.",
    
                outils: [
                    {
                        name: "HTML/CSS",
                        img: "html"
                    },
                    {
                        name: "PHP",
                        img: "php"
                    },
                    {
                        name: "MySQL",
                        img: "mysql"
                    }
                ],
    
                col: [
                    {
                        name: "Rémi Rucojevic",
                        post: "💻 Developpeur",
                        img: "remirucojevic",
                        link: "https://remiruc.com"
                    },
                    {
                        name: "Léna Clavier",
                        post: "💻 Developpeur",
                        img: "lenaclavier",
                        link: "https://lena-clavier.com/"
                    }
                ],
    
                links: [
                    {
                        label: "Lien vers le repo GitHub",
                        icon: "fab fa-github",
                        link: "https://github.com/RemiRuc/to-watch-list"
                    },
                    {
                        label: "Lien vers le site",
                        icon: "fas fa-asterisk",
                        link: "http://towatchlist.remiruc.com/"
                    }
                ]
            },
            azbooka: {
                name: "AZBOOKA",
                subname: "APPLICATION WEB",
                img: "azbooka",
                presentation: "Azbooka est un petit projet personnel dont le but est d'aider les personnes à apprendre des alphabets. Le site a pour but de mettre a disposition des cours sur les différents alphabets qui existe dans le monde puis permet de tester ses connaissances grâce a des quiz. La version 1 beta, est disponible en ligne mais une 2ème version est en cours de réalisation et prévoit une refonte complète.",
    
                outils: [
                    {
                        name: "HTML/CSS",
                        img: "html"
                    },
                    {
                        name: "PHP",
                        img: "php"
                    },
                    {
                        name: "MySQL",
                        img: "mysql"
                    },
                    {
                        name: "Ajax",
                        img: "ajax"
                    }
                ],
    
                col: [
                    {
                        name: "Rémi Rucojevic",
                        post: "💻 Developpeur",
                        img: "remirucojevic",
                        link: "https://remiruc.com"
                    },
                ],
    
                links: [
                    {
                        label: "Lien vers la beta",
                        icon: "fas fa-asterisk",
                        link: "http://azbooka.remiruc.com/"
                    },
                    {
                        label: "Presentation de la version 2",
                        icon: "fas fa-asterisk",
                        link: "http://azbooka-team.remiruc.com/"
                    }
                ]
            },
            imaMadeNandoMo: {
                name: "IMA MADE NANDO MO",
                subname: "CREATIVE SOUND EXPERIENCE",
                img: "imamadenandomo",
                presentation: "Réaliser dans le but de s'initier aux canvas et à l'animation, l'objectif était de réaliser une animation réagissant au rythme de la musique.",
    
                outils: [
                    {
                        name: "HTML",
                        img: "html"
                    },
                    {
                        name: "Canvas",
                        img: "canvas"
                    },
                    {
                        name: "Web Audio API",
                        img: "audioapi"
                    },
                ],
    
                col: [
                    {
                        name: "Rémi Rucojevic",
                        post: "💻 Developpeur",
                        img: "remirucojevic",
                        link: "https://remiruc.com"
                    },
                ],
    
                links: [
                    {
                        label: "Lien vers le repo GitHub",
                        icon: "fab fa-github",
                        link: "https://github.com/RemiRuc/Audio-Viz-Ima-made-nando-mo"
                    },
                    {
                        label: "Lien vers le site",
                        icon: "fas fa-asterisk",
                        link: "http://projects.remiruc.com/imaMadeNandoMo"
                    },
                ]
            },
            chassingGhost: {
                name: "CHASSING GHOST",
                subname: "CREATIVE SOUND EXPERIENCE",
                img: "chassingghost",
                presentation: "Réalisé en 2 jours, le but était réaliser une nouvelle expérience auditive, cette fois-ci en 3d, en utilisant la librairie Three.js",
    
                outils: [
                    {
                        name: "HTML",
                        img: "html"
                    },
                    {
                        name: "Three.js",
                        img: "three"
                    },
                    {
                        name: "Web Audio API",
                        img: "audioapi"
                    },
                ],
    
                col: [
                    {
                        name: "Rémi Rucojevic",
                        post: "💻 Developpeur",
                        img: "remirucojevic",
                        link: "https://remiruc.com"
                    },
                ],
    
                links: [
                    {
                        label: "Lien vers le repo GitHub",
                        icon: "fab fa-github",
                        link: "https://github.com/RemiRuc/Audio-viz-Chassing-ghost"
                    },
                    {
                        label: "Lien vers le site",
                        icon: "fas fa-asterisk",
                        link: "http://projects.remiruc.com/chassingGhost"
                    },
                ]
            },
            co2planete: {
                name: "CO2 PLANETE",
                subname: "DATAVIZ 3D",
                img: "co2planete",
                presentation: "Réalisé dans le cadre de mes cours aux Gobelins, l'objectif de ce projet réalisé en 3 jours était de proposer une dataviz (visualisation de données) intéractive.",
    
                outils: [
                    {
                        name: "HTML/CSS",
                        img: "html"
                    },
                    {
                        name: "Javascript",
                        img: "javascript"
                    },
                    {
                        name: "Three.js",
                        img: "three"
                    },
                ],
    
                col: [
                    {
                        name: "Rémi Rucojevic",
                        post: "💻 Developpeur",
                        img: "remirucojevic",
                        link: "https://remiruc.com"
                    },
                    {
                        name: "Jérémy Lesdema",
                        post: "🎨 Designer",
                        img: "jeremylesdema",
                        link: "https://www.linkedin.com/in/j%C3%A9r%C3%A9my-lesdema-08873b87/"
                    },
                ],
    
                links: [
                    {
                        label: "Lien vers le repo GitHub",
                        icon: "fab fa-github",
                        link: "https://github.com/RemiRuc/co2-planete"
                    },
                    {
                        label: "Lien vers le site",
                        icon: "fas fa-asterisk",
                        link: "http://projects.remiruc.com/co2planete"
                    },
                ]
            },
            penaltyfoof: {
                name: "PENLATYFOOF",
                subname: "JEU DE PENALTY",
                img: "penaltyfoof",
                presentation: "Projet personnel réalisé afin de mettre en pratique mes compétences en Jquery, appréhender les requêtes Ajax et faire un premier test avec les canvas. Le jeu reprend donc les informations de l'API REST countries qui fournit des informations sur les pays du monde. On choisit ensuite deux pays parmis cette liste et le match débute.",
    
                outils: [
                    {
                        name: "HTML/CSS",
                        img: "html"
                    },
                    {
                        name: "Javascript",
                        img: "javascript"
                    },
                    {
                        name: "Jquery",
                        img: "jquery"
                    },
                    {
                        name: "Ajax",
                        img: "ajax"
                    },
                ],
    
                col: [
                    {
                        name: "Rémi Rucojevic",
                        post: "💻 Developpeur / 🎨 Designer",
                        img: "remirucojevic",
                        link: "https://remiruc.com"
                    },
                ],
    
                links: [
                    {
                        label: "Lien vers le repo GitHub",
                        icon: "fab fa-github",
                        link: "https://github.com/RemiRuc/Penalty-Foof"
                    },
                    {
                        label: "Lien vers le site",
                        icon: "fas fa-asterisk",
                        link: "http://projects.remiruc.com/penaltyFoof/"
                    },
                ]
            },
            japanni: {
                name: "JAPAN NI",
                subname: "APPLICATION WEB",
                img: "japanni",
                presentation: "Projet personnel réalisé afin de tester Vue.js. Ce site regroupe mes photos prises lors de mes voyages au Japon, regroupées par villes.",
    
                outils: [
                    {
                        name: "HTML/CSS",
                        img: "html"
                    },
                    {
                        name: "Javascript",
                        img: "javascript"
                    },
                    {
                        name: "Vue.JS",
                        img: "vuejs"
                    }
                ],
    
                col: [
                    {
                        name: "Rémi Rucojevic",
                        post: "💻 Developpeur / 🎨 Designer",
                        img: "remirucojevic",
                        link: "https://remiruc.com"
                    },
                ],
    
                links: [
                    {
                        label: "Lien vers le repo GitHub",
                        icon: "fab fa-github",
                        link: "https://github.com/RemiRuc/Japan-Ni"
                    },
                    {
                        label: "Lien vers le site",
                        icon: "fas fa-asterisk",
                        link: "http://japan-ni.remiruc.com/"
                    },
                ]
            },
            yamanoteline: {
                name: "YAMANOTE LINE",
                subname: "APPLICATION WEB",
                img: "yamanoteline",
                presentation: "Projet personnel. Ce site est un simulateur de train. Une sorte d'hommage à la Yamanote Line, la fameuse ligne de métro Tokyoïte et ses mélodies entétantes.",
    
                outils: [
                    {
                        name: "HTML/CSS",
                        img: "html"
                    },
                    {
                        name: "Javascript",
                        img: "javascript"
                    },
                ],
    
                col: [
                    {
                        name: "Rémi Rucojevic",
                        post: "💻 Developpeur / 🎨 Designer",
                        img: "remirucojevic",
                        link: "https://remiruc.com"
                    },
                ],
    
                links: [
                    {
                        label: "Lien vers le repo GitHub",
                        icon: "fab fa-github",
                        link: "https://github.com/RemiRuc/yamanote-line"
                    },
                    {
                        label: "Lien vers le site",
                        icon: "fas fa-asterisk",
                        link: "https://yamanoteline.remiruc.com/"
                    },
                ]
            },
            kithub: {
                name: "KIT HUB",
                subname: "APPLICATION WEB",
                img: "kithub",
                presentation: "Projet personnel. Ce site regroupe plusieurs des outils que j'utilise en développement ou en graphisme. C'est un peu ma boite à outils que je partage à tout le monde en même temps.",
    
                outils: [
                    {
                        name: "HTML/CSS",
                        img: "html"
                    },
                    {
                        name: "Javascript",
                        img: "javascript"
                    },
                    {
                        name: "PHP",
                        img: "php"
                    },
                    {
                        name: "MySQL",
                        img: "mysql"
                    },
                ],
    
                col: [
                    {
                        name: "Rémi Rucojevic",
                        post: "💻 Developpeur / 🎨 Designer",
                        img: "remirucojevic",
                        link: "https://remiruc.com"
                    },
                ],
    
                links: [
                    {
                        label: "Lien vers le repo GitHub",
                        icon: "fab fa-github",
                        link: "https://github.com/RemiRuc/KitHub"
                    },
                    {
                        label: "Lien vers le site",
                        icon: "fas fa-asterisk",
                        link: "http://kithub.remiruc.com/"
                    },
                ]
            },
            miou: {
                name: "MIOU, LA FRESQUE DU PASSE",
                subname: "APPLICATION WEB",
                img: "miou",
                presentation: "Projet Gobelins x Le Louvre. C'est un projet fait en 2 semaines à 4. Le but était de choisir une oeuvre de la Petite Galerie du Musée du Louvre et de faire une expérience interactive et immersive. Nous avons choisis comme oeuvre les momies de chats, dont nous avons essayé de raconter l'histoire à travers un plateformer. Seul les 2 premiers chapitres sont disponibles.",
    
                outils: [
                    {
                        name: "HTML/CSS",
                        img: "html"
                    },
                    {
                        name: "Javascript",
                        img: "javascript"
                    },
                ],
    
                col: [
                    {
                        name: "Mathieu Grondin",
                        post: "🎨 Designer",
                        img: "mathieugrondin",
                        link: "https://www.linkedin.com/in/mathieu-grondin-479969120/"
                    },
                    {
                        name: "Louis Lagache",
                        post: "💻 Developpeur",
                        img: "louislagache",
                        link: "https://www.linkedin.com/in/louis-lagache-a70ab210a/"
                    },
                    {
                        name: "Céline Le Provost",
                        post: "🎨 Designer",
                        img: "celineleprovost",
                        link: "https://www.linkedin.com/in/c%C3%A9line-le-provost-b3b18a148/"
                    },
                    {
                        name: "Rémi Rucojevic",
                        post: "💻 Developpeur",
                        img: "remirucojevic",
                        link: "https://remiruc.com"
                    },
                ],
    
                links: [
                    {
                        label: "Lien vers le repo GitHub",
                        icon: "fab fa-github",
                        link: "https://github.com/RemiRuc/Miou-La-fresque-du-passe"
                    },
                    {
                        label: "Lien vers le site",
                        icon: "fas fa-asterisk",
                        link: "http://projects.remiruc.com/miou"
                    },
                ]
            },
            otium: {
                name: "OTIUM",
                subname: "APPLICATION WEB / MOBILE",
                img: "otium",
                presentation: "Projet Gobelins : ",
    
                outils: [
                    {
                        name: "HTML/CSS",
                        img: "html"
                    },
                    {
                        name: "Javascript",
                        img: "javascript"
                    },
                    {
                        name: "Socket.io",
                        img: "socketio"
                    },
                    {
                        name: "Three.js",
                        img: "three"
                    },
                ],
    
                col: [
                    {
                        name: "Nadia Essoubai",
                        post: "💻 Developpeur",
                        img: "nadiassoubai",
                        link: "https://nadia-essoubai.fr/"
                    },
                    {
                        name: "Julie Marting",
                        post: "🎨 Designer",
                        img: "juliemarting",
                        link: "https://www.linkedin.com/in/julie-marting-1b231b101/"
                    },
                    {
                        name: "Rémi Rucojevic",
                        post: "💻 Developpeur",
                        img: "remirucojevic",
                        link: "https://remiruc.com"
                    },
                    {
                        name: "Julien Warin",
                        post: "🎨 Designer",
                        img: "julienwarin",
                        link: "https://www.linkedin.com/in/jlnwrn/"
                    },
                ],
    
                links: [
                    {
                        label: "Lien vers le repo GitHub",
                        icon: "fab fa-github",
                        link: "https://github.com/team-otium/bddi_otium"
                    },
                ]
            }
        },
        "en": {
            toWatchList: {
                name: "TO WATCH LIST",
                subname: "WEB APPLICATION",
                img: "towatchlist",
                presentation: "ToWatchList is a web browser application. Using the same principle of a to do list adapted to television series, the user can create several series by filling in the name and the number of episodes. He can then check the episodes he has seen or not. With the help of a user account and a database, he will have access to his series.",
    
                outils: [
                    {
                        name: "HTML/CSS",
                        img: "html"
                    },
                    {
                        name: "PHP",
                        img: "php"
                    },
                    {
                        name: "MySQL",
                        img: "mysql"
                    }
                ],
    
                col: [
                    {
                        name: "Rémi Rucojevic",
                        post: "💻 Developer",
                        img: "remirucojevic",
                        link: "https://remiruc.com"
                    },
                    {
                        name: "Léna Clavier",
                        post: "💻 Developer",
                        img: "lenaclavier",
                        link: "https://lena-clavier.com/"
                    }
                ],
    
                links: [
                    {
                        label: "GitHub link",
                        icon: "fab fa-github",
                        link: "https://github.com/RemiRuc/to-watch-list"
                    },
                    {
                        label: "Website link",
                        icon: "fas fa-asterisk",
                        link: "http://towatchlist.remiruc.com/"
                    }
                ]
            },
            azbooka: {
                name: "AZBOOKA",
                subname: "WEB APPLICATION",
                img: "azbooka",
                presentation: "Azbooka is a small personal project whose goal is to help people learn alphabets. The site aims to provide courses on the various alphabets that exists in the world and allows to test his knowledge through quizzes. Version 1 beta, is available online but a second version is in progress and provides for a complete redesign.",
    
                outils: [
                    {
                        name: "HTML/CSS",
                        img: "html"
                    },
                    {
                        name: "PHP",
                        img: "php"
                    },
                    {
                        name: "MySQL",
                        img: "mysql"
                    },
                    {
                        name: "Ajax",
                        img: "ajax"
                    }
                ],
    
                col: [
                    {
                        name: "Rémi Rucojevic",
                        post: "💻 Developer",
                        img: "remirucojevic",
                        link: "https://remiruc.com"
                    },
                ],
    
                links: [
                    {
                        label: "Beta link",
                        icon: "fas fa-asterisk",
                        link: "http://azbooka.remiruc.com/"
                    },
                    {
                        label: "V2 presentation",
                        icon: "fas fa-asterisk",
                        link: "http://azbooka-team.remiruc.com/"
                    }
                ]
            },
            imaMadeNandoMo: {
                name: "IMA MADE NANDO MO",
                subname: "CREATIVE SOUND EXPERIENCE",
                img: "imamadenandomo",
                presentation: "Realize in order to learn about canvas and animation, the goal was to create an animation that reacts to the rhythm of the music.",
    
                outils: [
                    {
                        name: "HTML",
                        img: "html"
                    },
                    {
                        name: "Canvas",
                        img: "canvas"
                    },
                    {
                        name: "Web Audio API",
                        img: "audioapi"
                    },
                ],
    
                col: [
                    {
                        name: "Rémi Rucojevic",
                        post: "💻 Developer",
                        img: "remirucojevic",
                        link: "https://remiruc.com"
                    },
                ],
    
                links: [
                    {
                        label: "GitHub link",
                        icon: "fab fa-github",
                        link: "https://github.com/RemiRuc/Audio-Viz-Ima-made-nando-mo"
                    },
                    {
                        label: "Website link",
                        icon: "fas fa-asterisk",
                        link: "http://projects.remiruc.com/imaMadeNandoMo"
                    },
                ]
            },
            chassingGhost: {
                name: "CHASSING GHOST",
                subname: "CREATIVE SOUND EXPERIENCE",
                img: "chassingghost",
                presentation: "Achieved in 2 days, the goal was to realize a new auditory experience, this time in 3d, using the library Three.js",
    
                outils: [
                    {
                        name: "HTML",
                        img: "html"
                    },
                    {
                        name: "Three.js",
                        img: "three"
                    },
                    {
                        name: "Web Audio API",
                        img: "audioapi"
                    },
                ],
    
                col: [
                    {
                        name: "Rémi Rucojevic",
                        post: "💻 Developer",
                        img: "remirucojevic",
                        link: "https://remiruc.com"
                    },
                ],
    
                links: [
                    {
                        label: "Github link",
                        icon: "fab fa-github",
                        link: "https://github.com/RemiRuc/Audio-viz-Chassing-ghost"
                    },
                    {
                        label: "Website link",
                        icon: "fas fa-asterisk",
                        link: "http://projects.remiruc.com/chassingGhost"
                    },
                ]
            },
            co2planete: {
                name: "CO2 PLANETE",
                subname: "DATAVIZ 3D",
                img: "co2planete",
                presentation: "Realized in the context of my courses at Gobelins, the objective of this project realized in 3 days was to propose an interactive dataviz (visualization of data).",
    
                outils: [
                    {
                        name: "HTML/CSS",
                        img: "html"
                    },
                    {
                        name: "Javascript",
                        img: "javascript"
                    },
                    {
                        name: "Three.js",
                        img: "three"
                    },
                ],
    
                col: [
                    {
                        name: "Rémi Rucojevic",
                        post: "💻 Developer",
                        img: "remirucojevic",
                        link: "https://remiruc.com"
                    },
                    {
                        name: "Jérémy Lesdema",
                        post: "🎨 Designer",
                        img: "jeremylesdema",
                        link: "https://www.linkedin.com/in/j%C3%A9r%C3%A9my-lesdema-08873b87/"
                    },
                ],
    
                links: [
                    {
                        label: "GitHub link",
                        icon: "fab fa-github",
                        link: "https://github.com/RemiRuc/co2-planete"
                    },
                    {
                        label: "Website link",
                        icon: "fas fa-asterisk",
                        link: "http://projects.remiruc.com/co2planete"
                    },
                ]
            },
            penaltyfoof: {
                name: "PENLATYFOOF",
                subname: "PENALTY GAME",
                img: "penaltyfoof",
                presentation: "Personal project realized to put into practice my skills in Jquery, apprehend Ajax queries and make a first test with canvas. The game therefore uses information from the REST API countries that provides information about countries around the world. We then choose two countries from this list and the match starts.",
    
                outils: [
                    {
                        name: "HTML/CSS",
                        img: "html"
                    },
                    {
                        name: "Javascript",
                        img: "javascript"
                    },
                    {
                        name: "Jquery",
                        img: "jquery"
                    },
                    {
                        name: "Ajax",
                        img: "ajax"
                    },
                ],
    
                col: [
                    {
                        name: "Rémi Rucojevic",
                        post: "💻 Developer / 🎨 Designer",
                        img: "remirucojevic",
                        link: "https://remiruc.com"
                    },
                ],
    
                links: [
                    {
                        label: "GitHub link",
                        icon: "fab fa-github",
                        link: "https://github.com/RemiRuc/Penalty-Foof"
                    },
                    {
                        label: "Website link",
                        icon: "fas fa-asterisk",
                        link: "http://projects.remiruc.com/penaltyFoof/"
                    },
                ]
            },
            japanni: {
                name: "JAPAN NI",
                subname: "WEB APPLICATION",
                img: "japanni",
                presentation: "Personal project realized to test Vue.js. This site includes my photos taken during my trips to Japan, grouped by cities.",
    
                outils: [
                    {
                        name: "HTML/CSS",
                        img: "html"
                    },
                    {
                        name: "Javascript",
                        img: "javascript"
                    },
                    {
                        name: "Vue.JS",
                        img: "vuejs"
                    }
                ],
    
                col: [
                    {
                        name: "Rémi Rucojevic",
                        post: "💻 Developpeur / 🎨 Designer",
                        img: "remirucojevic",
                        link: "https://remiruc.com"
                    },
                ],
    
                links: [
                    {
                        label: "GitHub link",
                        icon: "fab fa-github",
                        link: "https://github.com/RemiRuc/Japan-Ni"
                    },
                    {
                        label: "Website link",
                        icon: "fas fa-asterisk",
                        link: "http://japan-ni.remiruc.com/"
                    },
                ]
            },
            yamanoteline: {
                name: "YAMANOTE LINE",
                subname: "WEB APPLICATION",
                img: "yamanoteline",
                presentation: "Personnal project. This site is a train simulator. A sort of tribute to the Yamanote Line, the famous Tokyo metro line and its inciting melodies.",
    
                outils: [
                    {
                        name: "HTML/CSS",
                        img: "html"
                    },
                    {
                        name: "Javascript",
                        img: "javascript"
                    },
                ],
    
                col: [
                    {
                        name: "Rémi Rucojevic",
                        post: "💻 Developpeur / 🎨 Designer",
                        img: "remirucojevic",
                        link: "https://remiruc.com"
                    },
                ],
    
                links: [
                    {
                        label: "Lien vers le repo GitHub",
                        icon: "fab fa-github",
                        link: "https://github.com/RemiRuc/Japan-Ni"
                    },
                    {
                        label: "Lien vers le site",
                        icon: "fas fa-asterisk",
                        link: "https://yamanoteline.remiruc.com/"
                    },
                ]
            },
            kithub: {
                name: "KIT HUB",
                subname: "WEB APPLICATION",
                img: "kithub",
                presentation: "Personnal project. This site includes many of the tools I use in development or graphics. It's a bit my toolbox that I share with everyone at the same time.",
    
                outils: [
                    {
                        name: "HTML/CSS",
                        img: "html"
                    },
                    {
                        name: "Javascript",
                        img: "javascript"
                    },
                    {
                        name: "PHP",
                        img: "php"
                    },
                    {
                        name: "MySQL",
                        img: "mysql"
                    },
                ],
    
                col: [
                    {
                        name: "Rémi Rucojevic",
                        post: "💻 Developer / 🎨 Designer",
                        img: "remirucojevic",
                        link: "https://remiruc.com"
                    },
                ],
    
                links: [
                    {
                        label: "GitHub link",
                        icon: "fab fa-github",
                        link: "https://github.com/RemiRuc/KitHub"
                    },
                    {
                        label: "Website link",
                        icon: "fas fa-asterisk",
                        link: "http://kithub.remiruc.com/"
                    },
                ]
            },
            miou: {
                name: "MIOU, LA FRESQUE DU PASSE",
                subname: "WEB APPLICATION",
                img: "miou",
                presentation: "Gobelins Project x Le Louvre. It's a project done in 2 weeks at 4. The goal was to choose an artwork from the 'Petite Galerie' of Le Louvre Museum and to make an interactive and immersive experience. We chose as artwork a cats' mummies, whose story we tried to tell through a platform. Only the first 2 chapters are available.",
    
                outils: [
                    {
                        name: "HTML/CSS",
                        img: "html"
                    },
                    {
                        name: "Javascript",
                        img: "javascript"
                    },
                ],
    
                col: [
                    {
                        name: "Mathieu Grondin",
                        post: "🎨 Designer",
                        img: "mathieugrondin",
                        link: "https://www.linkedin.com/in/mathieu-grondin-479969120/"
                    },
                    {
                        name: "Louis Lagache",
                        post: "💻 Developer",
                        img: "louislagache",
                        link: "https://www.linkedin.com/in/louis-lagache-a70ab210a/"
                    },
                    {
                        name: "Céline Le Provost",
                        post: "🎨 Designer",
                        img: "celineleprovost",
                        link: "https://www.linkedin.com/in/c%C3%A9line-le-provost-b3b18a148/"
                    },
                    {
                        name: "Rémi Rucojevic",
                        post: "💻 Developer",
                        img: "remirucojevic",
                        link: "https://remiruc.com"
                    },
                ],
    
                links: [
                    {
                        label: "GitHub link",
                        icon: "fab fa-github",
                        link: "https://github.com/RemiRuc/Miou-La-fresque-du-passe"
                    },
                    {
                        label: "Website link",
                        icon: "fas fa-asterisk",
                        link: "http://projects.remiruc.com/miou"
                    },
                ]
            },
            otium: {
                name: "OTIUM",
                subname: "WEB / MOBILE APPLICATION",
                img: "otium",
                presentation: "Projet Gobelins : ",
    
                outils: [
                    {
                        name: "HTML/CSS",
                        img: "html"
                    },
                    {
                        name: "Javascript",
                        img: "javascript"
                    },
                    {
                        name: "Socket.io",
                        img: "socketio"
                    },
                    {
                        name: "Three.js",
                        img: "three"
                    },
                ],
    
                col: [
                    {
                        name: "Nadia Essoubai",
                        post: "💻 Developpeur",
                        img: "nadiassoubai",
                        link: "https://nadia-essoubai.fr/"
                    },
                    {
                        name: "Julie Marting",
                        post: "🎨 Designer",
                        img: "juliemarting",
                        link: "https://www.linkedin.com/in/julie-marting-1b231b101/"
                    },
                    {
                        name: "Rémi Rucojevic",
                        post: "💻 Developpeur",
                        img: "remirucojevic",
                        link: "https://remiruc.com"
                    },
                    {
                        name: "Julien Warin",
                        post: "🎨 Designer",
                        img: "julienwarin",
                        link: "https://www.linkedin.com/in/jlnwrn/"
                    },
                ],
    
                links: [
                    {
                        label: "Lien vers le repo GitHub",
                        icon: "fab fa-github",
                        link: "https://github.com/team-otium/bddi_otium"
                    },
                ]
            }
        }
    }
  }
});

export default dataProject;