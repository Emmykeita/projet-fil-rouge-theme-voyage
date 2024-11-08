var destinations = ['afrique','asie','oceanie','amerique-du-nord','amerique-du-sud','europe']

var videoA = {
    titre : 'titre1',
    urlvideo: 'url',
    description : 'description',
    annee : 2024,
    ladestination:['afrique']
};

var videoB = {
    titre : 'titre2',
    urlvideo: 'url',
    description : 'description',
    annee : 2023,
    ladestination:['afrique']
};

var videoC = {
    titre : 'titre3',
    urlvideo: 'url',
    description : 'description',
    annee : 2024,
    ladestination:['oceanie']
};

var videoD = {
    titre : 'titre4',
    urlvideo: 'url',
    description : 'description',
    annee : 2024,
    ladestination:['europe'],
};

var videos = [
    videoA,videoB,videoC,videoD,
];

  //GESTIONNAIRE D'EVENEMENT
$(".btn-ajout").on('click', function(){
     var continentSelectionne = $(this).data("conti");
      console.log(continentSelectionne);
     
  // on vide la div contenant les films
  $('#films').html("");

//TABLEAU PARCOURU 
 for (var i = 0; i< videos.length; i=i+1){
  //FILTRE CONDITIONS
    if(videos[i]['ladestination'].includes(continentSelectionne)) {

            var elementHtml = '<div class="col-3">';
            elementHtml = elementHtml + ' <div class="card" style="width: 18rem;">';
           //  elementHtml = elementHtml + '<img src="'+ films[i]+ '" class="card-img-top" alt="...">';
            elementHtml = elementHtml + ' <div class="card-body">';
            elementHtml = elementHtml + ' <h5 class="card-title">' + videos[i]["titre"]+'</h5>';
            elementHtml = elementHtml + '<p class="card-text">'+videos[i]["description"]+'</p>'
            elementHtml = elementHtml + ' <a href="#" class="btn btn-primary">Voir video</a>';
            elementHtml = elementHtml + ' </div> </div>'
        //on ajoute tous ce que je viens de construire dans produit
            $("#films").append(elementHtml)
            

    }

}

});