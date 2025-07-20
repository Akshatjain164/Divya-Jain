document.addEventListener('DOMContentLoaded', function () {
  // Smooth page transitions
  const links = document.querySelectorAll('.nav-link');
  links.forEach(link => {
    link.addEventListener('click', function (e) {
      const href = link.getAttribute('href');
      if (href && href !== window.location.pathname.replace(/^\//, '')) {
        e.preventDefault();
        document.body.classList.remove('animate-fadeIn');
        document.body.style.transition = 'opacity 0.5s';
        document.body.style.opacity = 0;
        setTimeout(() => {
          window.location.href = href;
        }, 500);
      }
    });
  });

  // Highlight active nav link
  const path = window.location.pathname.split('/').pop();
  links.forEach(link => {
    if (link.getAttribute('href') === path) {
      link.classList.add('text-purple-700', 'border-b-2', 'border-purple-700');
    } else {
      link.classList.remove('text-purple-700', 'border-b-2', 'border-purple-700');
    }
  });
}); 