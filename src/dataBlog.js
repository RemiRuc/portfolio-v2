import Vue from "vue"

const dataBlog = new Vue({
    data: {
        chap1 : {
            title : "LES BASES DE L'ANIMATION AVEC (DES) CLASS",
            subtitle : "METTRE EN PLACE ET COMPRENDRE LA SCÈNE",
            html : `<div class="presentation">
            <div class="text">
            <div class="cp_embed_wrapper"><iframe name="cp_embed_1" src="https://codepen.io/RemiRuc/embed/preview/qLLzrj?height=600&amp;theme-id=dark&amp;slug-hash=qLLzrj&amp;default-tab=result&amp;user=RemiRuc&amp;pen-title=Chapitre%201%20-%20Mettre%20en%20place%20et%20comprendre%20la%20sc%C3%A8ne&amp;preview=true&amp;name=cp_embed_1" scrolling="no" frameborder="0" height="600" allowtransparency="true" allowfullscreen="true" allowpaymentrequest="true" title="Chapitre 1 - Mettre en place et comprendre la scène" class="cp_embed_iframe " style="width: 100%; overflow:hidden; display:block;" id="cp_embed_qLLzrj"></iframe></div>
<script async="" src="https://static.codepen.io/assets/embed/ei.js"></script>
            </div>
            <div class="text">
                <h3>Présentation : </h3>
                <p class="text">Quand j’ai commencé le développement web, j’ai toujours pensé qu’un site se devait d’avoir un but applicative (Avoir son propre compte, enregistrer des informations, faire qu’elles soient disponibles partout…) alors j’ai dosé le PHP pendant un moment en pensant qu’un site sans back-end, ça n’avait aucun intérêt. Et puis on m’a montré ça. C’est le genre de truc qui ne sert à rien du tout mais sur lequel tu passe trop de temps parce que c’est beaucoup trop stylée. En tant que jeune dév tu a en plus toujours cette réflexion qui te fait déprimer sur ton niveau : “Mais... comment il a fait ça ??”. La même semaine, en cours, le prof nous a lancé en autonomie sur un exercice de 2 jours avec pour unique consigne : “Make a generative piece, reacting to sound.”... On s’est tous dit en classe que c’était impossible, que 2 jours ce n’était pas suffisant pour arriver à produire quelque chose ! Et puis la force de cette classe, c’est aussi de s’auto-motiver les uns les autres pour surmonter ce qui 2 jours auparavant, paraissait impossible à réaliser. 2 semaines après, nous avons eu en cours la même consigne et le même délai avec cette fois comme contrainte d’utiliser Three.js (Libraire WebGL/3d). J’ai adoré faire ces 2 projets et ils m’ont donnés envie d’en apprendre plus derrière sur ce que l’on appel souvent le “Creative Coding”.</p>
                <h3>Le cours : </h3>
                <p class="text">Le but de ce cours donc est uniquement de vous montrer qu’avec peu de choses, on peut en faire beaucoup ? Je vais donc essayer de vous donner les bases de l’animation en code avec Javascript et 2 - 3 astuces que j’ai pu chopper en cours et en autodidacte pour vous permettre de vous lancer vous-même dans ce monde flippant du creative coding (generative design… appelez le comme vous voulez ^^). Pour cela je vais vous montrer 2 projets basiques qui couvriront tout ce que je veux vous montrer dans ce cours : L’un en 2D avec du canvas natif (certains utilisent P5.js pour faire du canvas mais je n’ai encore jamais utilisé), et l’autre en 3D avec la librairie Three.js (parce que le WebGL natif, c’est beaucoup trop chaud x) )</p>

                <h3>Setup</h3>
                <p class="text">Avant de commencer, nous allons mettre en place le peu de choses dont nous aurons besoin. Vous aurez besoin d'un fichier HTML, un CSS et un javascript. Pas besoin de plus ! Nous allons tout de suite remplir le HTML et le CSS car nous n'avons pas besoin de grand chose et surtout, nous n'y toucherons plus par la suite :) Dans mon exemple, je vais faire en sorte que le canvas prenne la totalité de la fenêtre. Mais nous allons gérer ça directement dans le javascript, en ce qui concerne le HTML et le CSS, je vous laisse créer vos fichier avec ce code :</p>
                <div class="code-toolbar"><pre class=" language-html"><code class=" language-html"><span class="token doctype">&lt;!DOCTYPE html&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>width=device-width, initial-scale=1.0<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>X-UA-Compatible<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>ie=edge<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>css/style.css<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>canvas</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>myCanvas<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>canvas</span><span class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!-- Pensez à placer le script JS après la déclaration du canvas dans le HTML --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>js/main.js<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="toolbar"><div class="toolbar-item"><span>HTML</span></div><div class="toolbar-item"><a>Copy</a></div></div></div>

<div class="code-toolbar"><pre class=" language-css"><code class=" language-css"><span class="token selector">body</span><span class="token punctuation">{</span>
<span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
<span class="token punctuation">}</span></code></pre><div class="toolbar"><div class="toolbar-item"><span>CSS</span></div><div class="toolbar-item"><a>Copy</a></div></div></div>
<p class="text">Et c'est tout ! On peut tout de suite passer au Javascript :)</p>

                <h3>La balise &lt; canvas &gt;</h3>
                <p class="text">Dans cette partie, on va simplement placer notre canvas de manière à ce qu’il prennent toute la taille de l’écran.</p>
                <div class="code-toolbar"><pre class=" language-javascript"><code class=" language-javascript"><span class="token keyword">let</span> canvas <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"myCanvas"</span><span class="token punctuation">)</span> <span class="token comment">//On récupère l’élément canvas du dom.</span>
<span class="token keyword">let</span> ctx <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">'2d'</span><span class="token punctuation">)</span>  <span class="token comment">/*Définit le contexte sur lequel nous allons dessiner 
                            (ici en 2d). C'est un objet qui contient plusieurs paramètres. 
                            Faite un console.log(ctx) pour savoir ce qu'il contient et vous
                            comprendrez pleins de choses par la suite*/</span>
                </code></pre><div class="toolbar"><div class="toolbar-item"><span>JavaScript</span></div><div class="toolbar-item"><a>Copy</a></div></div></div>
                <p class="text">La variable canvas va nous permettre de définir la taille de notre canvas.

Notre variable ctx sera celle que l’on utilisera pour dessiner sur notre canvas.

J’ai décidé ici que nous allons gérer la taille de notre canvas non pas dans un fichier CSS mais directement dans notre fichier javascript (c’est une pratique perso que je vous expliquerais plus tard). Dans notre cas, je veux que notre canvas prenne toute la taille de l’écran, j’utilise donc window.innerWidth et window.innerHeight pour gérer la taille du canvas (mais ce n’est pas ça la raison :D).
</p>

<div class="code-toolbar"><pre class=" language-javascript"><code class=" language-javascript">canvas<span class="token punctuation">.</span>style<span class="token punctuation">.</span>width <span class="token operator">=</span> window<span class="token punctuation">.</span>innerWidth <span class="token operator">+</span> <span class="token string">"px"</span> <span class="token comment">// Ne pas oublier de rajouter l’unité dans lequel vous définissez la taille puisque c’est du CSS. Dans le cas de window.innerWidth, la valeur renvoyée doit s’exprimer en px.</span>
canvas<span class="token punctuation">.</span>style<span class="token punctuation">.</span>height <span class="token operator">=</span> window<span class="token punctuation">.</span>innerHeight <span class="token operator">+</span> <span class="token string">"px"</span>
                </code></pre><div class="toolbar"><div class="toolbar-item"><span>JavaScript</span></div><div class="toolbar-item"><a>Copy</a></div></div></div>

                <h3>Le redimensionnement</h3>
                <p class="text">Pour s’assurer que tout fonctionne, nous allons dessiner un cercle en plein milieu de notre canvas (Je vous expliquerais en détail la méthode dans une autre partie. En attendant je vous renvoie vers cette page pour que vous compreniez). Et si tout va bien, soit vous ne verrez rien du tout, soit votre cercle sera déformé (dit comme ça c’est bizarre mais c’est normale, on va résoudre ça tout de suite :)).
</p>
<div class="code-toolbar"><pre class=" language-javascript"><code class=" language-javascript">ctx<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// Je vous l’expliquerais plus tard pourquoi on la met (elle est lié à restore() plus bas). En gros cette méthode sauvegarde les paramètres actuels du contexte. C’est une pratique qui va nous servir plus tard, surtout en animation. Prenez l’habitude dès maintenant ! :)</span>
ctx<span class="token punctuation">.</span><span class="token function">beginPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// Toujours à faire lorsque l’on commence une nouvelle forme</span>

ctx<span class="token punctuation">.</span><span class="token function">arc</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>innerWidth<span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">,</span> window<span class="token punctuation">.</span>innerHeight<span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">2</span> <span class="token operator">*</span> Math<span class="token punctuation">.</span><span class="token constant">PI</span><span class="token punctuation">)</span> <span class="token comment">// dessine la forme (mais reste invisible)</span>
ctx<span class="token punctuation">.</span>fillStyle <span class="token operator">=</span> “red” <span class="token comment">// Choisi la couleur de remplissage</span>
ctx<span class="token punctuation">.</span>strokeStyle <span class="token operator">=</span> “green” <span class="token comment">// Choisi la couleur du contour</span>
ctx<span class="token punctuation">.</span>lineWidth <span class="token operator">=</span> <span class="token number">5</span> <span class="token comment">// Défini la taille du contour</span>
ctx<span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// Remplis la forme</span>
ctx<span class="token punctuation">.</span><span class="token function">stroke</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// Dessine le contour de la forme</span>

ctx<span class="token punctuation">.</span><span class="token function">closePath</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// Toujours à faire lorsque l’on termine une forme</span>
ctx<span class="token punctuation">.</span><span class="token function">restore</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// Restaure les paramètres du contexte avec les valeurs de la dernière sauvegarde.</span>
                </code></pre><div class="toolbar"><div class="toolbar-item"><span>JavaScript</span></div><div class="toolbar-item"><a>Copy</a></div></div></div>

<p class="text">La raison pour laquelle vous ne voyez pas le cercle comme voulu, c’est que la balise canvas a deux propriété qui lui sont propre et qu’il faut aussi définir : height et width. Dans la plupart des cas, ses propriétés width et height doivent être égales aux valeurs que le canvas a dans son style css. Sinon, vos dessins auront une forme chelou, probablement pas celle que vous aurez voulu en tout cas ^^. Si je vous ai amené volontairement vers cette erreur, c’est parce que je ne savais comment vous expliquer pourquoi il fallait faire ça autrement qu’en vous montrant que si on le fait pas, bah ça marche pas. Si un jour vos dessins ont une tête bizarre dans votre canvas, vous vous rappellerais donc qu’il faut aussi définir canvas.width et canvas.height et non pas juste son style css.
</p>
<div class="code-toolbar"><pre class=" language-javascript"><code class=" language-javascript">document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">"canvas"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>width <span class="token operator">=</span> window<span class="token punctuation">.</span>innerWidth <span class="token comment">// Pas besoin de rajouter l’unité ici, les valeurs entrés ici doivent forcément être en pixels.</span>
document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">"canvas"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>height <span class="token operator">=</span> window<span class="token punctuation">.</span>innerHeight
                </code></pre><div class="toolbar"><div class="toolbar-item"><span>JavaScript</span></div><div class="toolbar-item"><a>Copy</a></div></div></div>

                <p class="text">Maintenant vous devez avoir un cercle au milieu de votre écran. Par contre, si vous redimensionner votre écran, le cercle ne vas plus se trouver au milieu de votre écran. En effet, les tailles en pixels on été défini au chargement de la page. Pour régler le problème, on pourrait mettre dans le style css du canvas des valeurs en pourcentages (100%) plutôt qu’en pixel pour gérer le responsiv. On peut, mais ça ne règle pas le problème de canvas.width et canvas.height. En effet, on a dit plus haut que ces valeurs ne peuvent être défini qu’en pixel et non pas en %. Il faudra donc dans tous les cas utiliser du javascript pour gérer le responsiv du canvas. C’est la raison pour laquel j’ai décidé plus haut de définir le style du canvas directement dans le javascript, pour centraliser au même endroit les deux actions à faire pour avoir un canvas parfaitement dimensionné. Pour cela je vais créer une fonction resizeCanvas() que je vais appeler au chargement de ma page et à chaque fois que celle-ci sera redimensionnée. Si vous essayez de redimensionner votre page juste après, votre canvas sera parfaitement redimensionné, mais votre cercle va disparaître. Je vous explique tout de suite après pourquoi.</p>
                <div class="code-toolbar"><pre class=" language-javascript"><code class=" language-javascript"><span class="token keyword">function</span> <span class="token function">resizeCanvas</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
canvas<span class="token punctuation">.</span>style<span class="token punctuation">.</span>width <span class="token operator">=</span> window<span class="token punctuation">.</span>innerWidth <span class="token operator">+</span> <span class="token string">"px"</span>
canvas<span class="token punctuation">.</span>style<span class="token punctuation">.</span>height <span class="token operator">=</span> window<span class="token punctuation">.</span>innerHeight <span class="token operator">+</span> <span class="token string">"px"</span>

canvas<span class="token punctuation">.</span>width <span class="token operator">=</span> window<span class="token punctuation">.</span>innerWidth
canvas<span class="token punctuation">.</span>height <span class="token operator">=</span> window<span class="token punctuation">.</span>innerHeight
<span class="token punctuation">}</span>

<span class="token function">resizeCanvas</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment">// On l’appel au chargement pour définir les bonnes tailles</span>

window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span>‘resize’<span class="token punctuation">,</span> resizeCanvas<span class="token punctuation">)</span> <span class="token comment">// On l’appel à chaque fois que la taille de la page change</span>
                </code></pre><div class="toolbar"><div class="toolbar-item"><span>JavaScript</span></div><div class="toolbar-item"><a>Copy</a></div></div></div>

                <p class="text">Maintenant vous avez un canvas responsiv que vous pouvez redimensionner en temps réel. Mais comme je l’ai dit, si vous essayez de redimensionner votre page maintenant, le cercle va disparaître (pas cool). En effet, modifier les attributs width ou height du canvas a pour effet de réinitialiser totalement le contexte. Et donc d’effacer tout ce qui a été dessiné dessus. Il faut donc redessiner le cercle si on veut le voir à nouveau. Cela va donc me permettre d’introduire la notion principale quand on veut faire de l’animation en javascript: la méthode requestAnimationFrame().</p>
                <h3>requestAnimationFrame</h3>
                <p class="text">La méthode requestAnimationFrame() est une méthode héritée de window (donc natif à du javascript sur navigateur). Elle permet de notifier le navigateur que l’on veut exécuter une animation. Le navigateur va ensuite gérer comme il le souhaite cette demande mais de manière général, il va tenter de jouer la fonction voulu 60 fois par secondes (60 fps) si les performances de votre PC le permette. Sinon le navigateur va réduire lui-même le nombre d’appel par seconde (chute de fps). Cette méthode prend en paramètre un seul argument, la fonction que l’on veut appeler en tant qu’animation. Cette fonction héritera automatiquement d’un argument timestamp qui correspond grossièrement au temps en ms écoulé depuis le lancement de la page. Nous allons donc créer une fonction qui va dessiner notre cercle et nous allons l’appeler avec requestAnimationFrame().</p>
                <div class="code-toolbar"><pre class=" language-javascript"><code class=" language-javascript"><span class="token keyword">function</span> <span class="token function">monAnimation</span><span class="token punctuation">(</span><span class="token parameter">timestamp</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>timestamp<span class="token punctuation">)</span> <span class="token comment">// Inutil pour le moment, mais on saura s’en servir plus tard :)</span>
ctx<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
ctx<span class="token punctuation">.</span><span class="token function">beginPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// Toujours à faire lorsque l’on commence une nouvelle forme</span>

ctx<span class="token punctuation">.</span><span class="token function">arc</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>innerWidth<span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">,</span> window<span class="token punctuation">.</span>innerHeight<span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">2</span> <span class="token operator">*</span> Math<span class="token punctuation">.</span><span class="token constant">PI</span><span class="token punctuation">)</span>
ctx<span class="token punctuation">.</span>fillStyle <span class="token operator">=</span> “red”
ctx<span class="token punctuation">.</span>strokeStyle <span class="token operator">=</span> “green”
ctx<span class="token punctuation">.</span>lineWidth <span class="token operator">=</span> <span class="token number">5</span>
ctx<span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
ctx<span class="token punctuation">.</span><span class="token function">stroke</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

ctx<span class="token punctuation">.</span><span class="token function">closePath</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
ctx<span class="token punctuation">.</span><span class="token function">restore</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token function">requestAnimationFrame</span><span class="token punctuation">(</span>monAnimation<span class="token punctuation">)</span> <span class="token comment">// Si vous voulez que l’animation continue, il faut rappeler requestAnimationFrame(monAnimation). Essayez de le retirer, vous verrez que le console.log ne marche plus. La demande d’animation n’est pas renouvelée au navigateur donc la fonction ne tourne plus.</span>
<span class="token punctuation">}</span>

<span class="token function">requestAnimationFrame</span><span class="token punctuation">(</span>monAnimation<span class="token punctuation">)</span>
</code></pre><div class="toolbar"><div class="toolbar-item"><span>JavaScript</span></div><div class="toolbar-item"><a>Copy</a></div></div></div>

<p class="text">Maintenant si vous redimensionner votre fenêtre, le cercle continuera à s’afficher. En effet, il est constamment dessiné (en moyenne 60 fois pas seconde) grâce à requestAnimationFrame. Dans ce cas ça ne sert absolument à rien puisque le cercle ne bouge pas. Mais comme dans une animation on est censé avoir du mouvement, cela nous servira pour la suite.</p>

<h3>Clear ou pas clear</h3>
<p class="text">Afin de vous montrer deux dernières petites chose, nous allons faire bouger notre cercle. Je vais vous expliquer dans le code directement ce qu’il se passe ici, nous verrons dans un autre chapitre une méthode différente. Celle-ci fonctionne mais elle est moins propre et moins maintenable. Je veux juste que vous montrer encore 2 choses, qui seront des éléments de bases pour vos futures animations.</p>
<div class="code-toolbar"><pre class=" language-javascript"><code class=" language-javascript"><span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token number">0</span>
<span class="token keyword">let</span> y <span class="token operator">=</span> <span class="token number">0</span>
<span class="token keyword">let</span> xVelocity <span class="token operator">=</span> <span class="token number">3</span> <span class="token comment">// La vitesse à laquel se déplace en x le cercle</span>
<span class="token keyword">let</span> yVelocity <span class="token operator">=</span> <span class="token number">3</span> <span class="token comment">// La vitesse à laquel se déplace en y le cercle</span>
<span class="token keyword">function</span> <span class="token function">monAnimation</span><span class="token punctuation">(</span><span class="token parameter">timestamp</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>timestamp<span class="token punctuation">)</span>
<span class="token comment">// On ajoute aux valeurs x et y la vitesse.</span>
x <span class="token operator">+=</span> xVelocity
y <span class="token operator">+=</span> yVelocity

<span class="token comment">// Si les valeurs x ou y ont des valeurs qui ne sont pas contenu dans l’écran, alors le cercle va sortir et on ne le reverra plus :o. Pour créer un effet de rebond, il suffit d’inverser la valeur de la vitesse, cela aura pour effet de faire aller le cercle dans l’autre sens.</span>
<span class="token keyword">if</span><span class="token punctuation">(</span>y <span class="token operator">&gt;=</span> window<span class="token punctuation">.</span>innerHeight <span class="token operator">||</span> y <span class="token operator">&lt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> yVelocity <span class="token operator">=</span> <span class="token operator">-</span>yVelocity
<span class="token keyword">if</span><span class="token punctuation">(</span>x<span class="token operator">&gt;=</span>window<span class="token punctuation">.</span>innerWidth <span class="token operator">||</span> x <span class="token operator">&lt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> xVelocity <span class="token operator">=</span> <span class="token operator">-</span>xVelocity

<span class="token comment">// On dessine le cercle avec les valeurs x et y, qui sont constamment mises à jours.</span>
ctx<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
ctx<span class="token punctuation">.</span><span class="token function">beginPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// Toujours à faire lorsque l’on commence une nouvelle forme</span>

ctx<span class="token punctuation">.</span><span class="token function">arc</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">2</span> <span class="token operator">*</span> Math<span class="token punctuation">.</span><span class="token constant">PI</span><span class="token punctuation">)</span>
ctx<span class="token punctuation">.</span>fillStyle <span class="token operator">=</span> “red”
ctx<span class="token punctuation">.</span>strokeStyle <span class="token operator">=</span> “green”
ctx<span class="token punctuation">.</span>lineWidth <span class="token operator">=</span> <span class="token number">5</span>
ctx<span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
ctx<span class="token punctuation">.</span><span class="token function">stroke</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

ctx<span class="token punctuation">.</span><span class="token function">closePath</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
ctx<span class="token punctuation">.</span><span class="token function">restore</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token function">requestAnimationFrame</span><span class="token punctuation">(</span>monAnimation<span class="token punctuation">)</span>

<span class="token punctuation">}</span>
</code></pre><div class="toolbar"><div class="toolbar-item"><span>JavaScript</span></div><div class="toolbar-item"><a>Copy</a></div></div></div>

<p class="text">Une fois ce code copier, vous devriez voir votre cercle bouger. Mais surtout il est en train de dessiner sur votre écran !! :O C’est peut-être ce que l’on voudra un jour, mais là pour le moment on aimerait juste voir le cercle qui se déplace sans remplir l’écran. L'explication c’est qu’à aucun moment on ne demande au canvas d’effacer ce qu’il a dessiné précédemment. Même si l’on dessine un nouveau cercle, ceux qui ont été dessinés auparavant sont toujours là. Nous avons donc dessiné pleins de petits cercles à la suite les uns par dessus les autres.

Note : Essayez de modifier la taille de votre écran, vous verrez que comme dit précédemment, votre canvas se réinitialise et donc, tout s’efface.

Pour effacer ce qui a été dessiné précédemment, je vais vous montrer 2 méthodes. Je préfère la 2ème mais selon ce que vous voulez faire, il faudra parfois utiliser la 2ème.
</p>

<h4>1ère méthode : ctx.clearRect()</h4>
<p class="text">La méthode clearRect permet de créer un rectangle de pixel transparent. Si vous l’appliquez sur l’ensemble de votre canvas, alors votre canvas entier deviendra transparent. On peut ensuite dessiner tranquillement notre cercle sur sa nouvelle position. De base, votre canvas est transparent, essayez de mettre un background sur votre body, vous verrez qu’il apparaît et que le canvas dessine par-dessus. Rajoutez cette ligne dans votre fonction pour effacer ce qui a été fait dans les frames (appel d’animation) précédentes. Attention à la placer avant de dessiner votre cercle, sinon vous aurez dessiné votre cercle et derrière vous l’effacerais, il ne s’affichera donc jamais.</p>
<div class="code-toolbar"><pre class=" language-javascript"><code class=" language-javascript">ctx<span class="token punctuation">.</span><span class="token function">clearRect</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> canvas<span class="token punctuation">.</span>width<span class="token punctuation">,</span> canvas<span class="token punctuation">.</span>height<span class="token punctuation">)</span>
</code></pre><div class="toolbar"><div class="toolbar-item"><span>JavaScript</span></div><div class="toolbar-item"><a>Copy</a></div></div></div>

<h4>2ème méthode : rect()</h4>
<p class="text">Pour ceux qui ont déjà fait du canvas, vous savez que rect permet de dessiner un rectangle. Automatiquement si vous dessinez un rectangle de la même couleur que votre fond par-dessus les cercles précédemment dessiné, alors on ne les verra plus.
</p>
<div class="code-toolbar"><pre class=" language-javascript"><code class=" language-javascript">ctx<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
ctx<span class="token punctuation">.</span><span class="token function">beginPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

ctx<span class="token punctuation">.</span><span class="token function">rect</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> canvas<span class="token punctuation">.</span>width<span class="token punctuation">,</span> canvas<span class="token punctuation">.</span>height<span class="token punctuation">)</span>
ctx<span class="token punctuation">.</span>fillStyle <span class="token operator">=</span> <span class="token string">"yellow"</span>
ctx<span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

ctx<span class="token punctuation">.</span><span class="token function">closePath</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
ctx<span class="token punctuation">.</span><span class="token function">restore</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="toolbar"><div class="toolbar-item"><span>JavaScript</span></div><div class="toolbar-item"><a>Copy</a></div></div></div>

<p class="text">Cette méthode est plus longue et elle n’efface pas ce que vous avez dessiné, elle dessine par dessus un nouveau rectangle. Ce qui veut dire que votre canvas n’est plus transparent (vous ne verrez plus votre background placé sur le body avec cette méthode). Mais je préfère cette méthode car souvent vous voudrez mettre un background à votre dessin (unis, dégradé ou même une scène avec plusieurs formes). Elle permet aussi de garder la main mise sur votre canvas grâce au contexte. Une astuce que l’on peut utiliser qu’avec cette méthode, c’est “l’effet de trainé”. En ajoutant la ligne ctx.globalAlpha = 0.3, vous verrez maintenant que le cercle a un effet de trainé.
</p>
<div class="code-toolbar"><pre class=" language-javascript"><code class=" language-javascript">ctx<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
ctx<span class="token punctuation">.</span><span class="token function">beginPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

ctx<span class="token punctuation">.</span><span class="token function">rect</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> canvas<span class="token punctuation">.</span>width<span class="token punctuation">,</span> canvas<span class="token punctuation">.</span>height<span class="token punctuation">)</span>
ctx<span class="token punctuation">.</span>fillStyle <span class="token operator">=</span> <span class="token string">"yellow"</span>
ctx<span class="token punctuation">.</span>globalAlpha <span class="token operator">=</span> <span class="token number">0.3</span>
ctx<span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

ctx<span class="token punctuation">.</span><span class="token function">closePath</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
ctx<span class="token punctuation">.</span><span class="token function">restore</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="toolbar"><div class="toolbar-item"><span>JavaScript</span></div><div class="toolbar-item"><a>Copy</a></div></div></div>
<p class="text">En effet, ctx.globalAlpha définie la transparence du contexte en entier ! Le rectangle dessiné est alors dessiné à un moment où le contexte a une opacité égale à 0.3, donc un peu transparent (1 correspond à une opacité totalement opaque et 0 totalement transparent). C’est pour cette raison entre autre que l’on utilise save() et restore(). On sauvegarde les paramètres du contexte au moment où ctx.globalAlpha = 1, on passe ctx.globalAlpha = 0.3, on dessine notre rectangle, puis on restaure les paramètres du contexte avec les valeurs de la dernière sauvegarde (ctx.globalAlpha repasse donc à 1). Mais globalAlpha n’est pas le seul paramètre à être sauvegardé, il y en a d’autres qui nous seront utiles plus tard (fillStyle, strokeStyle, translate, rotate, scale…). Essayez de ne pas save() et restore(), vous verrez que tout le canvas va passer en opacité 0.3 !</p>


<div class="cp_embed_wrapper"><iframe name="cp_embed_2" src="https://codepen.io/RemiRuc/embed/preview/qLLzrj?height=500&amp;theme-id=dark&amp;slug-hash=qLLzrj&amp;default-tab=js%2Cresult&amp;user=RemiRuc&amp;pen-title=Chapitre%201%20-%20Mettre%20en%20place%20et%20comprendre%20la%20sc%C3%A8ne&amp;preview=true&amp;name=cp_embed_2" scrolling="no" frameborder="0" height="500" allowtransparency="true" allowfullscreen="true" allowpaymentrequest="true" title="Chapitre 1 - Mettre en place et comprendre la scène" class="cp_embed_iframe " style="width: 100%; overflow:hidden; display:block;" id="cp_embed_qLLzrj"></iframe></div>
<script async="" src="https://static.codepen.io/assets/embed/ei.js"></script>

            </div>
        </div>`
        }
    }
})

export default dataBlog