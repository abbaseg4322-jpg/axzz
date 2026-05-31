var player;
var isPlayerReady = false;

// إعداد مشغل اليوتيوب
function onYouTubeIframeAPIReady() {
    player = new YT.Player('youtube-player', {
        height: '10',
        width: '10',
        videoId: 'jhsTFWIVu_M', 
        playerVars: {
            'autoplay': 0,
            'controls': 0,
            'showinfo': 0,
            'rel': 0,
            'playsinline': 1 
        },
        events: {
            'onReady': onPlayerReady
        }
    });
}

// عندما يكون الفيديو جاهزاً للتشغيل
function onPlayerReady(event) {
    isPlayerReady = true;
    const box = document.getElementById('magic-box');
    const boxText = document.getElementById('box-text');
    
    // تفعيل الصندوق وتغيير النص
    box.style.pointerEvents = 'auto';
    box.style.cursor = 'pointer';
    boxText.innerText = 'انقري';
}

document.addEventListener('DOMContentLoaded', () => {
    const box = document.getElementById('magic-box');
    const lines = [
        document.getElementById('line1'),
        document.getElementById('line2'),
        document.getElementById('line3')
    ];
    const finale = document.getElementById('finale');

    box.addEventListener('click', () => {
        // تشغيل الصوت إذا كان جاهزاً
        if(isPlayerReady && player && typeof player.playVideo === 'function') {
            player.playVideo();
        }

        // إخفاء الصندوق
        box.classList.add('opened');

        // تسلسل ظهور الكلمات المضيئة
        let delay = 1000; 
        
        lines.forEach((line) => {
            setTimeout(() => {
                line.classList.add('show');
                
                setTimeout(() => {
                    line.classList.remove('show');
                    line.classList.add('hide');
                }, 4500); 

            }, delay);
            delay += 5500; 
        });

        // إظهار رسالة النهاية
        setTimeout(() => {
            finale.classList.add('show');
        }, delay + 1000);
    });
});