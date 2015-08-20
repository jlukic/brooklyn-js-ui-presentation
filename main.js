// ready
(function() {

  window.bespoke.from('#presentation', [
    window.bespoke.themes.nebula(),
    window.bespoke.plugins.bullets('li, .bullet'),
    window.bespoke.plugins.classes(),
    window.bespoke.plugins.hash(),
    window.bespoke.plugins.keys(),
    window.bespoke.plugins.progress(),
    window.bespoke.plugins.scale()
  ]);

  window.Rainbow.color();

})();