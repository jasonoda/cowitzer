import { gsap } from "./greensock/all.js";

export class UI {

    setUp(e) {

        this.e = e;

        this.animatedSprites=[];

        //-----------------

        this.uiCanvas = document.getElementById('mycanvas');

        this.app = new PIXI.Application({
            view: this.uiCanvas,
            width: window.innerWidth, 
            height: window.innerHeight,
            transparent: true,
			resolution: window.devicePixelRatio,
			appDensity: true
        });

        window.addEventListener('resize', (event) => {
            this.app.renderer.resize(window.innerWidth, window.innerHeight);
        });

        // PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.LINEAR;
        PIXI.settings.RESOLUTION = window.devicePixelRatio;

        this.app.renderer.plugins.interaction.mouseOverRenderer = true;

        this.counter=0;

    }

    load() {

        console.log("LOAD IMAGES")

        this.loader = new PIXI.Loader();
        this.loader.reset();
        
        //----------------------------------------------------

        this.loader.add('white', './src/img/white.png');
        this.loader.add('black', './src/img/black.png');
        this.loader.add('red', './src/img/red.png');
        this.loader.add('red2', './src/img/red2.png');
        this.loader.add('green', './src/img/green.png');
        this.loader.add('purple', './src/img/purple.png');
        this.loader.add('blue', './src/img/blue.png');
        this.loader.add('yellow', './src/img/yellow.png');
        this.loader.add('orange', './src/img/orange.png');
        this.loader.add('fence', './src/img/fence.png');
        this.loader.add('finishLine', './src/img/finishLine.png');
        this.loader.add('landscape0', './src/img/landscape0.png');
        this.loader.add('landscape1', './src/img/landscape1.png');
        this.loader.add('landscape2', './src/img/landscape2.png');
        this.loader.add('landscape3', './src/img/landscape3.png');
        this.loader.add('landscape4', './src/img/landscape4.png');
        this.loader.add('landscape5', './src/img/landscape5.png');
        this.loader.add('vig', './src/img/vig.png');

        this.loader.add('cowHead', './src/img/cowHead.png');
        this.loader.add('cowBody', './src/img/cowBody.png');
        this.loader.add('cowArm1', './src/img/cowArm1.png');
        this.loader.add('cowArm2', './src/img/cowArm2.png');
        this.loader.add('cowLeg1', './src/img/cowLeg1.png');
        this.loader.add('cowLeg2', './src/img/cowLeg2.png');
        this.loader.add('cowShad', './src/img/cowShad.png');

        this.loader.add('cannon', './src/img/cannon.png');
        this.loader.add('cannon2', './src/img/cannon2.png');
        this.loader.add('cannon3', './src/img/cannon3.png');
        this.loader.add('cannonBody', './src/img/cannonBody.png');
        this.loader.add('cowAngel', './src/img/cowAngel.png');

        this.loader.add('mine', './src/img/mine.png');
        this.loader.add('grenade', './src/img/grenade.png');
        this.loader.add('barbedWire', './src/img/barbedWire.png');
        this.loader.add('chicken', './src/img/chicken.png');

        this.loader.add('ex1', './src/img/ex/ex_1.png');
        this.loader.add('ex2', './src/img/ex/ex_2.png');
        this.loader.add('ex3', './src/img/ex/ex_3.png');
        this.loader.add('ex4', './src/img/ex/ex_4.png');
        this.loader.add('ex5', './src/img/ex/ex_5.png');
        this.loader.add('ex6', './src/img/ex/ex_6.png');
        this.loader.add('ex7', './src/img/ex/ex_7.png');
        this.loader.add('ex8', './src/img/ex/ex_8.png');
        this.loader.add('ex9', './src/img/ex/ex_9.png');
        this.loader.add('ex10', './src/img/ex/ex_10.png');
        this.loader.add('ex11', './src/img/ex/ex_11.png');
        this.loader.add('ex12', './src/img/ex/ex_12.png');
        this.loader.add('ex13', './src/img/ex/ex_13.png');

        this.loader.add('rock1', './src/img/rock1.png');
        this.loader.add('rock2', './src/img/rock2.png');
        this.loader.add('rock3', './src/img/rock3.png');
        this.loader.add('rock4', './src/img/rock4.png');

        this.loader.add('powerMeter', './src/img/powerMeter.png');
        this.loader.add('bottomUI', './src/img/bottomUI.png');
        this.loader.add('resetBut', './src/img/resetBut.png');
        
        //----------------------------------------------------

        this.loader.load((loader, resources) => {

            console.log("UI LOADED")

            this.isLoaded_UI=true;

            //----------------------------------------------------

            this.t_white=resources.white.texture;
            this.t_black=resources.black.texture;
            this.t_red=resources.red.texture;
            this.t_red2=resources.red2.texture;
            this.t_green=resources.green.texture;
            this.t_purple=resources.purple.texture;
            this.t_blue=resources.blue.texture;
            this.t_yellow=resources.yellow.texture;
            this.t_orange=resources.orange.texture;
            this.t_fence=resources.fence.texture;
            this.t_finishLine=resources.finishLine.texture;
            this.t_landscape0=resources.landscape0.texture;
            this.t_landscape1=resources.landscape1.texture;
            this.t_landscape2=resources.landscape2.texture;
            this.t_landscape3=resources.landscape3.texture;
            this.t_landscape4=resources.landscape4.texture;
            this.t_landscape5=resources.landscape5.texture;
            this.t_vig=resources.vig.texture;

            this.t_cowHead=resources.cowHead.texture;
            this.t_cowBody=resources.cowBody.texture;
            this.t_cowArm1=resources.cowArm1.texture;
            this.t_cowArm2=resources.cowArm2.texture;
            this.t_cowLeg1=resources.cowLeg1.texture;
            this.t_cowLeg2=resources.cowLeg2.texture;
            this.t_cowShad=resources.cowShad.texture;

            this.t_cannon=resources.cannon.texture;
            this.t_cannon2=resources.cannon2.texture;
            this.t_cannon3=resources.cannon3.texture;
            this.t_cannonBody=resources.cannonBody.texture;
            this.t_cowAngel=resources.cowAngel.texture;

            this.t_mine=resources.mine.texture;
            this.t_grenade=resources.grenade.texture;
            this.t_barbedWire=resources.barbedWire.texture;
            this.t_chicken=resources.chicken.texture;

            this.t_ex1=resources.ex1.texture;
            this.t_ex2=resources.ex2.texture;
            this.t_ex3=resources.ex3.texture;
            this.t_ex4=resources.ex4.texture;
            this.t_ex5=resources.ex5.texture;
            this.t_ex6=resources.ex6.texture;
            this.t_ex7=resources.ex7.texture;
            this.t_ex8=resources.ex8.texture;
            this.t_ex9=resources.ex9.texture;
            this.t_ex10=resources.ex10.texture;
            this.t_ex11=resources.ex11.texture;
            this.t_ex12=resources.ex12.texture;
            this.t_ex13=resources.ex13.texture;

            this.t_rock1=resources.rock1.texture;
            this.t_rock2=resources.rock2.texture;
            this.t_rock3=resources.rock3.texture;
            this.t_rock4=resources.rock4.texture;

            this.t_powerMeter=resources.powerMeter.texture;
            this.t_bottomUI=resources.bottomUI.texture;
            this.t_resetBut=resources.resetBut.texture;

            this.exAni = [this.t_ex1,this.t_ex2,this.t_ex3,this.t_ex4,this.t_ex5,this.t_ex6,this.t_ex7,this.t_ex8,this.t_ex9,this.t_ex10,this.t_ex11,this.t_ex12,this.t_ex13];
            
        });

        //----------------------------------------------------
        //----------------------------------------------------
        //----------------------------------------------------

    }

    //---------------------------------------------------------------------------------------------------------

    update(){

        // //base cont
        // this.baseCont = new PIXI.Container();
        // this.baseCont.sortableChildren = true;
        // this.app.stage.addChild(this.baseCont);

        // this.tester = new PIXI.Sprite(this.white);
        // this.tester.width=50;
        // this.tester.height=50;
        // this.tester.alpha=0;
        // this.tester._zIndex=100000;
        // this.app.stage.addChild(this.tester);

        // //main cont
        // this.mainCont = new PIXI.Container();
        // this.mainCont.sortableChildren = true;
        // this.baseCont.addChild(this.mainCont);

        // //center main cont
        // this.mainCont.position.x = Math.round(window.innerWidth/2);

        this.animate();

    }

    animate() {

        for (var i = 0; i < this.animatedSprites.length; i++) {

            if (this.animatedSprites !== null) {

                var a = this.animatedSprites[i];

                if (a.aniCount === undefined) {
                    a.aniCount = 0;
                    a.curFrame = 0;
                }

                if (a.aniSpeed === undefined) {
                    a.aniSpeed = .25;
                }

                if (a.ani === undefined) {
                    a.ani = [];
                }

                if(a.aniPause!==true){
                    a.aniCount += this.e.dt;
                }

                if (a.aniCount > a.aniSpeed) {

                    a.aniCount = 0;
                    if(a.aniLoop===false){
                        if (a.curFrame < a.ani.length-1){
                            a.curFrame += 1;
                        }
                    }else{
                        a.curFrame += 1;
                    }
                    
                    if (a.curFrame >= a.ani.length && a.aniLoop!==false) {
                        a.curFrame = 0;
                    }

                    a.texture = a.ani[a.curFrame];

                }

            }

        }

    }
}