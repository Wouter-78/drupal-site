(function (Drupal, once) {
  Drupal.behaviors.menuToggle = {
    attach: function (context) {
      once('menuToggle', '.menu-toggle', context).forEach(function (button) {
        const menu = document.querySelector('.main-menu');
        const iconOpen = button.querySelector('.icon-open');
        const iconClose = button.querySelector('.icon-close');

        if (!menu || !iconOpen || !iconClose) return;

        button.addEventListener('click', function () {
          // Toggle menu visibility
          menu.classList.toggle('max-lg:-translate-y-[calc(100%+120px)]');
          // Toggle aria-expanded
          const expanded = button.getAttribute('aria-expanded') === 'true' || false;
          button.setAttribute('aria-expanded', !expanded);
          // Toggle icons
          iconOpen.classList.toggle('hidden', !expanded);
          iconOpen.classList.toggle('block', expanded);

          iconClose.classList.toggle('hidden', expanded);
          iconClose.classList.toggle('block', !expanded);
        });
      });
    },
  };
})(Drupal, once);
