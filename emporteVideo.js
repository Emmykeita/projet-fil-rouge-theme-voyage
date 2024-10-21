const videoForm = document.getElementById('videoForm');
const videoUrlInput = document.getElementById('videoUrlInput');
const videoTitleInput = document.getElementById('videoTitleInput');
const videoDescriptionInput = document.getElementById('videoDescriptionInput');
const videosContainer = document.getElementById('videosContainer');


function convertToEmbedUrl(url) {
    const youtubeRegex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const vimeoRegex = /(?:https?:\/\/)?(?:www\.)?vimeo\.com\/([0-9]{9})/;

    const youtubeMatch = url.match(youtubeRegex);
    const vimeoMatch = url.match(vimeoRegex);

    if (youtubeMatch && youtubeMatch[1]) {
        return `https://www.youtube.com/embed/${youtubeMatch[1]}`;
    } else if (vimeoMatch && vimeoMatch[1]) {
        return `https://player.vimeo.com/video/${vimeoMatch[1]}`;
    }

    return null; 
}

function save(videos) {
    localStorage.setItem('userVideos', JSON.stringify(videos));
}


function loadVideos() {
    const storedVideos = localStorage.getItem('userVideos');
    return storedVideos ? JSON.parse(storedVideos) : [];
}


if (videoForm) {
    videoForm.addEventListener('submit', function (e) {
        e.preventDefault(); 

        const videoUrl = videoUrlInput.value;
        const videoTitle = videoTitleInput.value;
        const videoDescription = videoDescriptionInput.value;
        const embedUrl = convertToEmbedUrl(videoUrl);

        if (embedUrl) {
            const videos = loadVideos(); 
            const newVideo = {
                url: embedUrl,
                title: videoTitle,
                description: videoDescription
            };

            videos.push(newVideo);
            save(videos); 

            videoTitleInput.value = '';
            videoDescriptionInput.value = '';
            videoUrlInput.value = '';


            window.location.href = 'mesVideosJo.html';
        } else {
            const message = document.getElementById('message');
            message.textContent = 'Entrez un lien valide.';
            message.style.color = 'red';
        }
    });
}
function displayVideos(videos) {
    videosContainer.innerHTML = ''; 
    
    videos.forEach(video => {
    
        const videoElement = document.createElement('div');
        videoElement.classList.add('video-item');


        const titleElement = document.createElement('h2');
        titleElement.textContent = video.title;


        const descriptionElement = document.createElement('p');
        descriptionElement.textContent = video.description;


        const iframeElement = document.createElement('iframe');
        iframeElement.src = video.url;
        iframeElement.width = '260';
        iframeElement.height = '215';
        iframeElement.frameBorder = '0';
        iframeElement.style.borderRadius = '27px';
        iframeElement.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
        iframeElement.allowFullscreen = true;


        videoElement.appendChild(titleElement);
        videoElement.appendChild(descriptionElement);
        videoElement.appendChild(iframeElement);


        videosContainer.appendChild(videoElement);
    });
}


if (window.location.pathname.includes('mesVideosJo.html')) {
    const videos = loadVideos(); 
    if (videos.length > 0) {
        displayVideos(videos);
    } else {
        videosContainer.innerHTML = '<p>Auncun vidéo à voir.</p>';
    }
}
