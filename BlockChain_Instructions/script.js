document.querySelectorAll('details').forEach((detail) => {
    detail.addEventListener('toggle', function() {
      if (this.open) {
        this.style.animation = 'slideDown 0.5s ease forwards';
      } else {
        this.style.animation = 'slideUp 0.5s ease forwards';
      }
    });
  });
  