(function () {
  'use strict';

  function Boot() {}

  Boot.prototype = {
    
    preload: function () {
      this.load.image('preloader', 'assets/preloader.gif');
    },

    create: function () {
      this.game.input.maxPointers = 1;

      this.game.state.start('preloader');
    }
  };

  window['making-a-game-with-phaser'] = window['making-a-game-with-phaser'] || {};
  window['making-a-game-with-phaser'].Boot = Boot;

}());

