/**
 * @file
 * starter behaviors.
 */
(function (Drupal, once) {
  Drupal.behaviors.aosInit = {
    attach: function (context, settings) {
      once('aosInit', 'body', context).forEach(function () {
        if (typeof AOS !== 'undefined') {
          AOS.init({
            duration: 800,
            offset: 100,
            once: true,
          });
        }
      });
    },
  };
})(Drupal, once);

