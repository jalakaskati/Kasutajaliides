document.addEventListener('DOMContentLoaded', function() {
    const playBtn = document.querySelector('.video-thumbnail .playbtn');
    const videoWrapper = document.querySelector('.carousel-item .video-wrapper');
    const iframe = videoWrapper.querySelector('iframe');

    playBtn.addEventListener('click', function() {
      const videoUrl = 'https://www.youtube.com/embed/EngW7tLk6R8?autoplay=1&mute=1&controls=0&loop=1&playlist=EngW7tLk6R8';
      iframe.src = videoUrl;
      videoWrapper.style.display = 'block';
      this.closest('.video-thumbnail').style.display = 'none';
    });
  });