let game = new Phaser.Game(1000,700, Phaser.AUTO, 'game_div');
let game_state = {};

game_state.main = function() { };
game_state.main.prototype = {

    preload: function() {
        // загрузка всей необходимой статики
         this.game.stage.backgroundColor = '#39cf20';
         this.game.load.image('hero', '/static/img/Hero.png');
    },

    create: function() {
        // настройка игры; вызывается сразу после preload
        this.hero = this.game.add.sprite(50, 100, 'hero');
        this.hero.body.gravity.y = 700;
        let space_key = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        space_key.onDown.add(this.jump, this);
        },

    update: function() {
        // вызывается 60 раз в секунду
        if (this.hero.inWorld == false)
            this.restart_game();
    },
};

game.state.add('main', game_state.main);
game.state.start('main');
