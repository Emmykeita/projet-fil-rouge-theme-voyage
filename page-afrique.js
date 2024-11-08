
document.addEventListener("DOMContentLoaded", function() {
    const gallery = document.querySelector('.gallery-video');
    const videos = Array.from(gallery.querySelectorAll('.video'));

    // Trier les vidéos par nombre de vues (du plus grands au plus petit)
    videos.sort((a, b) => {
        const viewsA = parseInt(a.getAttribute('data-views'), 10);
        const viewsB = parseInt(b.getAttribute('data-views'), 10);
        return viewsB - viewsA;
    });

    // Réorganiser les vidéos dans le DOM et ajouter dynamiquement le conteneur pour les vues
    videos.forEach(video => {
        // Ajouter dynamiquement le conteneur du nombre de vues 
        let viewCount = video.querySelector('.view-count');
        if (!viewCount) {
            viewCount = document.createElement('div');
            viewCount.classList.add('view-count');
            video.appendChild(viewCount);
        }

        // Ajouter le nombre de vues
        const views = video.getAttribute('data-views');
        viewCount.textContent = `${views} vues`; // Affiche "1200 vues"par exemple

        // la il faut réinsérer les vidéos triées dans la galerie
        gallery.appendChild(video);
    });
});
// utiliser let view count pour le css





