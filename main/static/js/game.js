let game = new Phaser.Game(1280,720, Phaser.AUTO, 'game_div');
let game_state = {};

game_state.main = function() { };
game_state.main.prototype = {

    preload: function() {
        // загрузка всей необходимой статики
         //this.game.stage.backgroundColor = '#39cf20';
         this.game.load.image('backGround', '/static/img/Фон.png');
         this.game.load.image('hero', '/static/img/Тимон.png');
         this.game.load.image('PRhero', '/static/img/ПРГТимон.png');
         this.game.load.image('Lhero', '/static/img/ЛТимон.png');
         this.game.load.image('Rhero', '/static/img/ПТимон.png');

    },

    create: function() {
        // настройка игры; вызывается сразу после preload
        let txt = game.add.tex
        this.game.add.image(0,0, 'backGround');
        this.game.physics.startSystem(Phaser.Physics.P2JS);
        this.game.world.setBounds(0,0,1000,700);
        this.game.physics.p2.gravity.y = 1200;
        this.game.physics.p2.setBoundsToWorld(true,true,false,true,false);
        this.game.physics.arcade.gravity.y = 300;
        this.hero = this.game.add.sprite(10, 500, 'hero');
        this.hero.height = 200;
        this.hero.width = 100;
        let space_key = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        space_key.onDown.add(this.jump, this);
        let A_key = this.game.input.keyboard.addKey(Phaser.Keyboard.A);
        A_key.onDown.add(this.left, this);
        let D_key = this.game.input.keyboard.addKey(Phaser.Keyboard.D);
        D_key.onDown.add(this.rigth, this);
        game.physics.enable([this.hero], Phaser.Physics.P2JS);
        this.hero.angle.toFixed(0);
        this.hero.toFixed(0);
        },
    update: function() {
        let i = 0;
        let label = document.getElementById('Score');
        label.innerText = "Timer " + i;
        i++;
        if (this.hero.inWorld == false)
            this.restart_game();
    },
    jump: function() {
    // добавляем вертикальную скорость птице
    this.hero.body.velocity.y = -250;
    this.hero.loadTexture('PRhero',0);
},
    left: function() {
    // добавляем вертикальную скорость птице
    this.hero.body.velocity.x = -250;
    this.hero.loadTexture('Lhero',0);
},
    rigth: function() {
    // добавляем вертикальную скорость птице
    this.hero.body.velocity.x = +250;
    this.hero.loadTexture('Rhero',0);

},
    restart_game: function() {
    // запускаем состояние "main", которое перезапускает игру
    this.game.state.start('main');

},
};
game.state.add('main', game_state.main);
game.state.start('main');
