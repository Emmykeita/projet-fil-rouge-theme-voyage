
function menuHamburger(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display ='flex'
}

function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display ='none'
}
// sidebar



// videos
var destinations = ['afrique','asie','oceanie','amerique-du-nord','amerique-du-sud','europe']



var videoA = {
    titre : 'Venez decouvrir Afrique avec vibes voyages',
    urlImage: './images/afrique1.jpg',
    description : "Créez des souvenirs inoubliables en famille. Des plages paradisiaques aux parcs d'attractions, en passant par les sites historiques, il y en a pour tous les goûts.",
    date : 2024,
    ladestination:['afrique']
};

var videoB = {
    titre : "Venez decouvrir l'Afrique le nouvel eldorado ",
    urlImage: './images/afrique2.jpg',
    description : "Créez des souvenirs inoubliables en famille. Des plages paradisiaques aux parcs d'attractions, en passant par les sites historiques, il y en a pour tous les goûts.",
    annee : 2023,
    ladestination:['afrique']
};

var videoC = {
    titre : "L'europe une nouvelle facette avec vibes vibes ?",
    urlImage: './images/europe1.jpg',
    description : "Créez des souvenirs inoubliables en famille. Des plages paradisiaques aux parcs d'attractions, en passant par les sites historiques, il y en a pour tous les goûts",
    annee : 2024,
    ladestination:['europe']
};

var videoD = {
    titre : ' Venez decouvrir et Voyager en Europe',
    urlImage: './images/europe2.jpg',
    description : "Créez des souvenirs inoubliables en famille. Des plages paradisiaques aux parcs d'attractions, en passant par les sites historiques, il y en a pour tous les goûts.",
    annee : 2024,
    ladestination:['europe'],
};


var videoE = {
    titre : ' Venez decouvrir et Voyager en Asie',
    urlImage: './images/asie1.jpg',
    description : "Créez des souvenirs inoubliables en famille. Des plages paradisiaques aux parcs d'attractions, en passant par les sites historiques, il y en a pour tous les goûts.",
    annee : 2024,
    ladestination:['asie'],
};

var videoF = {
    titre : ' Venez Voyage en Amerique-du-sud ',
    urlImage: './images/sud1.jpg',
    description : "Créez des souvenirs inoubliables en famille. Des plages paradisiaques aux parcs d'attractions, en passant par les sites historiques, il y en a pour tous les goûts.",
    annee : 2024,
    ladestination:['amerique-du-sud'],
};

var videos = [
    videoA,videoB,videoC,videoD,videoE,videoF
];

//gestionnaire d'evenement.

$(".btn-select").on('click',function(){
    var continentSelectionne = $(this).data('conti')
    // console.log(continentSelectionne);

    //ON VIDE LA DIV
    $('.carte-container').html("");

    //boucle for pour parcourir le tableau



    for(var i = 0; i<videos.length;i=i+1){
        // filtre avec if
        if(videos[i]['ladestination'].includes(continentSelectionne)){
            var elementHtml = '<div class="carte">';
            elementHtml += '<img src="'+ videos[i]['urlImage'] + '" alt="Image de la destination">';
            elementHtml += '<h3 class="carte-titre">'+ videos[i]['titre'] + '</h3>';
            elementHtml += '<p class="description">'+ videos[i]['description'] + '</p>';
            elementHtml += 'a href="pageafrique.html">Voir vidéo</a>';
            elementHtml += '</div>';
            //on ajoute tous ce que je viens de construire dans produit
            $('.carte-container').append(elementHtml)
            
        }
        
    }
})




















