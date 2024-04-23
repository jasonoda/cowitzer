import { gsap } from "./greensock/all.js";

export class Scene {
    
  setUp(e) {

    this.e=e;

  }

  buildScene(){

    this.action="reset";
    this.count=0;
    this.winResult="";
    this.winRoll=0;
    this.winChance=0;
    this.goalDistance=0;
    this.hasWon=false;
    
    this.props=[];
    this.props2=[];

    this.saveData=[];
    this.realTime=0;
    this.mirrorTime=0;
    this.endTime=0;
    this.createBlockCount=0;
    this.makeKillerCount=0;
    this.lerpPlayerBody=false
    this.didBounce=false;

    window.addEventListener('click', (event) => {
      
      if(this.action==="wait to shoot"){

        // this.action="set shoot"

      }

    });

    window.addEventListener('touchstart', (event) => {

    });

    //-------------------------------------------------------------------------------------------------

    console.log("build scene")

    // base container - holds everything never moves aligned to top left

    this.baseCont = new PIXI.Container();
    this.baseCont.sortableChildren = true;
    this.e.ui.app.stage.addChild(this.baseCont);

    //

    this.levCont = new PIXI.Container();
    this.levCont.sortableChildren = true;
    this.baseCont.addChild(this.levCont);
    this.levCont._zIndex=10;
    // this.levCont.alpha=.1;

    this.levCont2 = new PIXI.Container();
    this.levCont2.sortableChildren = true;
    this.baseCont.addChild(this.levCont2);
    this.levCont2._zIndex=10;
    this.levCont2.alpha=0;

    this.backgroundCont = new PIXI.Container();
    this.backgroundCont.sortableChildren = true;
    this.baseCont.addChild(this.backgroundCont);
    this.backgroundCont._zIndex=9;

    //

    // for(var i=0; i<200; i++){

    //   this.tester = new PIXI.Sprite(this.e.ui.t_white);
    //   this.tester.width=10;
    //   this.tester.height=10;
    //   this.tester.anchor.y=1;
    //   this.tester.position.x=i*500;
    //   this.tester._zIndex=2;
    //   this.levCont.addChild(this.tester);
  
    // }

    this.groundLevel=150;

    //

    this.ground = new PIXI.Sprite(this.e.ui.t_green);
    this.ground.width=500000;
    this.ground.height=this.groundLevel;
    this.ground.anchor.y=1;
    this.ground.alpha=0;
    this.ground._zIndex=2;
    this.levCont.addChild(this.ground);

    this.ground2 = new PIXI.Sprite(this.e.ui.t_barbedWire);
    this.ground2.width=500000;
    this.ground2.height=this.groundLevel;
    this.ground2.anchor.y=1;
    this.ground2.alpha=.3;
    this.ground2._zIndex=2;
    this.levCont2.addChild(this.ground2);

    //

    var lsSize = .5;
    var groundOffset = -50;

    // console.log(this.e.ui.t_landscape1.orig.height);

    this.landscape0 = new PIXI.TilingSprite(this.e.ui.t_landscape0);
    this.landscape0.width=50000;
    this.landscape0.height=this.e.ui.t_landscape0.orig.height;
    this.landscape0.position.y=125+groundOffset;
    this.landscape0.anchor.y=1;
    this.landscape0._zIndex=7;
    this.landscape0.scale.x=this.landscape0.scale.y=lsSize*2;
    this.backgroundCont.addChild(this.landscape0);

    this.fence = new PIXI.TilingSprite(this.e.ui.t_fence);
    this.fence.width=50000;
    this.fence.height=this.e.ui.t_fence.orig.height;
    this.fence.position.y=-125+groundOffset;
    this.fence.anchor.y=1;
    this.fence._zIndex=6;
    this.fence.scale.x=this.fence.scale.y=lsSize*2;
    this.backgroundCont.addChild(this.fence);

    this.landscape1 = new PIXI.TilingSprite(this.e.ui.t_landscape1);
    this.landscape1.width=50000;
    this.landscape1.height=this.e.ui.t_landscape1.orig.height;
    this.landscape1.position.y=-100+groundOffset;
    this.landscape1.anchor.y=1;
    this.landscape1._zIndex=5;
    this.landscape1.scale.x=this.landscape1.scale.y=lsSize*2;
    this.backgroundCont.addChild(this.landscape1);

    this.landscape2 = new PIXI.TilingSprite(this.e.ui.t_landscape2);
    this.landscape2.width=50000;
    this.landscape2.height=this.e.ui.t_landscape2.orig.height;
    this.landscape2.position.y=-50+groundOffset;
    this.landscape2.anchor.y=1;
    this.landscape2._zIndex=4;
    this.landscape2.scale.x=this.landscape2.scale.y=lsSize*2;
    this.backgroundCont.addChild(this.landscape2);

    this.landscape3 = new PIXI.TilingSprite(this.e.ui.t_landscape3);
    this.landscape3.width=50000;
    this.landscape3.height=this.e.ui.t_landscape3.orig.height;
    this.landscape3.position.y=-120+groundOffset;
    this.landscape3.anchor.y=1;
    this.landscape3._zIndex=3;
    this.landscape3.scale.x=this.landscape3.scale.y=lsSize*2;
    this.backgroundCont.addChild(this.landscape3);

    this.landscape4 = new PIXI.TilingSprite(this.e.ui.t_landscape4);
    this.landscape4.width=50000;
    this.landscape4.height=this.e.ui.t_landscape4.orig.height;
    this.landscape4.position.y=-180+groundOffset;
    this.landscape4.anchor.y=1;
    this.landscape4._zIndex=2;
    this.landscape4.scale.x=this.landscape4.scale.y=lsSize*2;
    this.backgroundCont.addChild(this.landscape4);

    this.landscape5 = new PIXI.TilingSprite(this.e.ui.t_landscape5);
    this.landscape5.width=50000;
    this.landscape5.height=this.e.ui.t_landscape5.orig.height;
    this.landscape5.position.y=-240+groundOffset;
    this.landscape5.anchor.y=1;
    this.landscape5._zIndex=1;
    this.landscape5.scale.x=this.landscape5.scale.y=lsSize*.6;
    this.backgroundCont.addChild(this.landscape5);

    //

    this.playerBody = new PIXI.Container();
    this.playerBody.sortableChildren = true;
    this.levCont.addChild(this.playerBody);
    this.playerBody._zIndex=22
    this.playerBody.scale.x=this.playerBody.scale.y=.5

    this.cowShad = new PIXI.Sprite(this.e.ui.t_cowShad);
    this.cowShad.width=120;
    this.cowShad.height=12;
    this.cowShad.anchor.x=.5;
    this.cowShad.anchor.y=.5;
    this.cowShad.position.y=-141;
    this.cowShad.alpha=0.7;
    this.cowShad._zIndex=8;
    this.levCont.addChild(this.cowShad);

    this.cannon = new PIXI.Sprite(this.e.ui.t_cannon);
    this.cannon.anchor.x=.5;
    this.cannon.anchor.y=1;
    this.cannon.position.x=151;
    this.cannon.position.y=-146;
    this.cannon.scale.x=this.cannon.scale.y=.5;
    this.cannon._zIndex=81;
    this.levCont.addChild(this.cannon);

    this.cannon2 = new PIXI.Sprite(this.e.ui.t_cannon2);
    this.cannon2.anchor.x=.25;
    this.cannon2.anchor.y=1;
    this.cannon2.position.x=171;
    this.cannon2.position.y=-226;
    this.cannon2.rotation = this.e.u.ca(-10);
    this.cannon2.scale.x=this.cannon2.scale.y=.5;
    this.cannon2._zIndex=80;
    this.levCont.addChild(this.cannon2);
    this.cannon2.startx = this.cannon2.position.x;
    this.cannon2.starty = this.cannon2.position.y;

    
    this.cannon3 = new PIXI.Sprite(this.e.ui.t_cannon3);
    this.cannon3.anchor.x=.25;
    this.cannon3.anchor.y=1;
    this.cannon3.position.x=171;
    this.cannon3.position.y=-226;
    this.cannon3.rotation = this.e.u.ca(-10);
    this.cannon3.scale.x=this.cannon3.scale.y=.5;
    this.cannon3._zIndex=70;
    this.levCont.addChild(this.cannon3);

    this.cannonBody = new PIXI.Sprite(this.e.ui.t_cannonBody);
    this.cannonBody.anchor.x=.5;
    this.cannonBody.anchor.y=.5;
    this.cannonBody.position.x=410;
    this.cannonBody.position.y=-120;
    this.cannonBody.rotation=this.e.u.ca(90)
    this.cannonBody._zIndex=1;
    this.cannonBody.alpha=0;
    this.cannon3.addChild(this.cannonBody);

    // gsap.to( this.cannonBody, { rotation: this.e.u.ca(-180),  duration: 1, repeat: -1, yoyo: true});

    this.cowAd = 30;

    this.playerTemp = new PIXI.Sprite(this.e.ui.t_black);
    this.playerTemp.width=90;
    this.playerTemp.height=90;
    this.playerTemp.anchor.x=.5;
    this.playerTemp.anchor.y=.5;
    this.playerTemp.alpha=0;
    this.playerTemp._zIndex=2;
    this.playerBody.addChild(this.playerTemp);

    this.cowBody = new PIXI.Sprite(this.e.ui.t_cowBody);
    this.cowBody.anchor.x=.5;
    this.cowBody.anchor.y=.5;
    this.cowBody.position.y=40-this.cowAd;
    this.cowBody._zIndex=6;
    this.playerBody.addChild(this.cowBody);

    this.cowHead = new PIXI.Sprite(this.e.ui.t_cowHead);
    this.cowHead.anchor.x=.5;
    this.cowHead.anchor.y=.5;
    this.cowHead.position.y=-100+this.cowAd;;
    this.cowHead._zIndex=6;
    this.playerBody.addChild(this.cowHead);

    this.cowArm1 = new PIXI.Sprite(this.e.ui.t_cowArm1);
    this.cowArm1.anchor.x=.7;
    this.cowArm1.anchor.y=.15;
    this.cowArm1.position.y=-55+this.cowAd;;
    this.cowArm1.position.x=-35;
    this.cowArm1._zIndex=4;
    this.playerBody.addChild(this.cowArm1);

    this.cowArm2 = new PIXI.Sprite(this.e.ui.t_cowArm2);
    this.cowArm2.anchor.x=.3;
    this.cowArm2.anchor.y=.15;
    this.cowArm2.position.y=-55+this.cowAd;;
    this.cowArm2.position.x=35;
    this.cowArm2._zIndex=4;
    this.playerBody.addChild(this.cowArm2);

    this.cowLeg1 = new PIXI.Sprite(this.e.ui.t_cowLeg1);
    this.cowLeg1.anchor.x=.7;
    this.cowLeg1.anchor.y=.15;
    this.cowLeg1.position.y=10+this.cowAd;;
    this.cowLeg1.position.x=-20;
    this.cowLeg1._zIndex=14;
    this.playerBody.addChild(this.cowLeg1);

    this.cowLeg2 = new PIXI.Sprite(this.e.ui.t_cowLeg2);
    this.cowLeg2.anchor.x=.3;
    this.cowLeg2.anchor.y=.15;
    this.cowLeg2.position.y=10+this.cowAd;;
    this.cowLeg2.position.x=20;
    this.cowLeg2._zIndex=14;
    this.playerBody.addChild(this.cowLeg2);

    //----

    this.playerCont = new PIXI.Container();
    this.playerCont.sortableChildren = true;
    this.levCont.addChild(this.playerCont);
    this.playerCont._zIndex=20

    this.player = new PIXI.Sprite(this.e.ui.t_black);
    this.player.width=50;
    this.player.height=50;
    this.player.anchor.x=.5;
    this.player.anchor.y=.5;
    this.player.alpha=0;
    this.player._zIndex=5;
    this.playerCont.addChild(this.player);

    //----

    this.playerCont2 = new PIXI.Container();
    this.playerCont2.sortableChildren = true;
    this.levCont2.addChild(this.playerCont2);
    this.playerCont2._zIndex=20

    this.player2 = new PIXI.Sprite(this.e.ui.t_black);
    this.player2.width=50;
    this.player2.height=50;
    this.player2.anchor.x=.5;
    this.player2.anchor.y=.5;
    this.player2.alpha=1;
    this.player2._zIndex=5;
    this.playerCont2.addChild(this.player2);

    //----

    this.powerMeter2 = new PIXI.Sprite(this.e.ui.t_powerMeter);
    this.powerMeter2.scale.x=.5;
    this.powerMeter2.scale.y=.5;
    this.powerMeter2.position.x=150;
    this.powerMeter2.position.y=-450;
    // this.powerMeter2.alpha=0;
    this.powerMeter2._zIndex=21;
    // this.levCont.addChild(this.powerMeter2);

    this.powerMeter = new PIXI.Sprite(this.e.ui.t_red);
    this.powerMeter.width=100;
    this.powerMeter.height=10;
    this.powerMeter.position.x=155;
    this.powerMeter.position.y=-420;
    // this.powerMeter.alpha=0;
    this.powerMeter._zIndex=20;
    // this.levCont.addChild(this.powerMeter);

    this.pmObject = new Object();
    this.pmObject.power=100;
    gsap.to( this.pmObject, { power: 0,  duration: .25, repeat: -1, yoyo: true});

    this.resetButton = new PIXI.Sprite(this.e.ui.t_resetBut);
    this.resetButton.scale.x=.5
    this.resetButton.scale.y=.5;
    this.resetButton.anchor.x=.5;
    // this.resetButton.anchor.y=.5;
    this.resetButton.alpha=1;
    this.resetButton._zIndex=20;
    this.baseCont.addChild(this.resetButton);

    this.finishLine = new PIXI.Sprite(this.e.ui.t_finishLine);
    this.finishLine.anchor.x=.5;
    this.finishLine.anchor.y=1;
    this.finishLine._zIndex=5;
    this.finishLine.position.x=200;
    this.finishLine.position.y=-this.groundLevel;
    this.backgroundCont.addChild(this.finishLine);

    this.explosion = new PIXI.Sprite(this.e.ui.t_red);
    this.explosion.anchor.x=.5;
    this.explosion.anchor.y=.5;
    this.explosion._zIndex=115;
    this.explosion.position.x=-1200;
    this.explosion.position.y=-this.groundLevel;
    this.levCont.addChild(this.explosion);

    this.explosion.ani = this.e.ui.exAni;
    this.explosion.aniSpeed = .05;
    this.e.ui.animatedSprites.push(this.explosion)
    this.explosion.aniLoop=false;

    this.vig = new PIXI.Sprite(this.e.ui.t_vig);
    this.vig.anchor.x=0
    this.vig.anchor.y=0
    this.vig._zIndex=1000
    this.vig.alpha=.3;
    this.baseCont.addChild(this.vig);
    
    this.bottomUI = new PIXI.Sprite(this.e.ui.t_bottomUI);
    this.bottomUI.anchor.x=0.5
    this.bottomUI.anchor.y=1
    this.bottomUI.scale.x=.5
    this.bottomUI.scale.y=.5
    this.bottomUI._zIndex=1000
    this.baseCont.addChild(this.bottomUI);
    
    this.resetButton.on('mousedown', (event) => {

      console.log("reset button")
      this.action="reset";
      this.e.s.p("chime")
        
    })

    this.resetButton.on('touchstart', (event) => {

      this.action="reset";
      this.e.s.p("chime")
        
    })

    this.rockPool=[];

    for(var i=0; i<50; i++){

      this.rockType=this.e.u.ran(4);

      if(this.rockType===0){
        this.rock = new PIXI.Sprite(this.e.ui.t_rock1);
      }else if(this.rockType===1){
        this.rock = new PIXI.Sprite(this.e.ui.t_rock2);
      }else if(this.rockType===2){
        this.rock = new PIXI.Sprite(this.e.ui.t_rock3);
      }else if(this.rockType===3){
        this.rock = new PIXI.Sprite(this.e.ui.t_rock4);
      }

      this.rockScale = .3+(this.e.u.ran(7)/10)
      // this.rock.scale.x=this.rock.scale.y=this.rockScale;

      this.rock.anchor.x=.5;
      this.rock.anchor.y=.5;
      this.rock.width=40*this.rockScale;
      this.rock.height=40*this.rockScale;
      this.rock._zIndex=115;
      this.rock.position.x=-1200;
      this.rock.position.y=-this.groundLevel;
      this.rock.action="ready"
      this.levCont.addChild(this.rock);

      this.rockPool.push(this.rock);

    }

  }

  alignParts(){

    this.vig.width = window.innerWidth;
    this.vig.height = window.innerHeight;

    this.finishLine.position.x =  this.landscape0.position.x + this.goalDistance-200;

    this.landscape0.position.x = this.e.u.lerp( this.landscape0.position.x, this.levCont.position.x, .5 );
    this.fence.position.x = this.e.u.lerp( this.fence.position.x, this.levCont.position.x*.9, .5 );
    this.landscape1.position.x = this.e.u.lerp( this.landscape1.position.x, this.levCont.position.x*.8, .5 );
    this.landscape2.position.x = this.e.u.lerp( this.landscape2.position.x, this.levCont.position.x*.6, .5 );
    this.landscape3.position.x = this.e.u.lerp( this.landscape3.position.x, this.levCont.position.x*.4, .5 );
    this.landscape4.position.x = this.e.u.lerp( this.landscape4.position.x, this.levCont.position.x*.2, .5 );
    this.landscape5.position.x = this.e.u.lerp( this.landscape5.position.x, this.levCont.position.x*.1, .5 );

    if(this.lerpPlayerBody===true){
      this.playerBody.position.x = this.e.u.lerp( this.playerBody.position.x, this.playerCont.position.x, .6 );
      this.playerBody.position.y = this.e.u.lerp( this.playerBody.position.y, this.playerCont.position.y, .6 );
    }
   
    this.levCont.position.y = window.innerHeight;
    this.levCont2.position.y = window.innerHeight;
    this.backgroundCont.position.y = window.innerHeight;

    this.bottomUI.position.x = window.innerWidth/2;
    this.bottomUI.position.y = window.innerHeight;

    if(this.playerCont.position.x<window.innerWidth/2){

      // hold in place

    }else{

      if(this.hasWon===false){
        this.levCont.position.x = this.e.u.lerp( this.levCont.position.x, -this.playerCont.position.x + (window.innerWidth/2), .5 );
      }
      
    }

    if(this.playerCont2.position.x<window.innerWidth/2){

      // hold in place

    }else{

      if(this.hasWon===false){
        this.levCont2.position.x = this.e.u.lerp( this.levCont2.position.x, -this.playerCont2.position.x + (window.innerWidth/2), .5 );
      }
      
      // this.levCont2.position.x = -this.playerCont2.position.x + (window.innerWidth/2)

    }

    this.resetButton.position.x=window.innerWidth/2;
    this.resetButton.position.y=(window.innerHeight/2)-100;

    // this.backgroundCont.position.x = window.innerWidth/2

  }

  createLevel(){

    console.log("create new level")

    for(var i=0; i<this.props.length; i++){

      this.props[i].action="off";
      this.levCont.removeChild(this.props[i]);
      // this.props[i].destroy({ children: true,  baseTexture: true });

    }

    for(var i=0; i<this.props2.length; i++){

      this.props2[i].action="off";
      this.levCont2.removeChild(this.props2[i]);
      // this.props2[i].destroy({ children: true,  baseTexture: true });

    }

    this.props=[];
    this.props2=[];

    this.badPropsStartAt=5000;
    this.cantGoPast=10000;

    //----------------------------------------------------------------------------------------------------------

    // lay out props

    this.propDist = 1200;

    while(this.propDist<50000){

      // console.log(this.propDist);

      this.allProps = [];
      this.goodProps = ["purple","blue"];
      this.badProps = ["red", "yellow","red", "yellow"];
      // this.badProps = [];

      if(this.propDist<this.badPropsStartAt){
        
        this.e.u.copyInto(this.allProps, this.goodProps);

      }else{
        
        this.e.u.copyInto(this.allProps, this.goodProps);
        this.e.u.copyInto(this.allProps, this.badProps);

      }

      //----------------------------------------------------------------------------

      this.propType=this.e.u.ranPick(this.allProps);

      //----------------------------------------------------------------------------

      this.makeNewProp(this.propType, this.propDist, "build");

      //----------------------------------------------------------------------------

      this.propDist+=300+this.e.u.ran(300);

    }

    this.tweenOb = new Object();
    this.tweenOb.yellowHeight = -this.groundLevel;
    gsap.to( this.tweenOb, { yellowHeight: -800,  duration: 1, repeat: -1, yoyo: true});

  }

  makeNewProp(type, x, command){

    // console.log("make new prop")

    if(this.propPool===undefined){

      this.propPool = [];

    }

    for(var i=0; i<2; i++){
          
      //--------------------------------------------------------

      this.foundProp=undefined;

      for(var j=0; j<this.propPool.length; j++){

        if(this.propPool[j].action==="off"){

          // console.log("recycle "+command+" / "+this.propDist)
          this.foundProp=this.propPool[j];
          this.foundProp.action="wait";
          j=100000;

        }

      }

      //--------------------------------------------------------

      if(this.foundProp===undefined){

        // console.log("newprop")
        this.foundProp = new PIXI.Sprite(this.e.ui.t_grenade);
        this.propPool.push(this.foundProp);

      }

      this.prop = this.foundProp;

      //--------------------------------------------------------

      if(type==="purple"){

        // this.prop = new PIXI.Sprite(this.e.ui.t_grenade);
        this.prop.texture=this.e.ui.t_grenade;
        this.prop.xspeed= 5 + this.e.u.ran(5);
        this.prop.yspeed= -8 - this.e.u.ran(7);

      }else if(type==="blue"){

        // this.prop = new PIXI.Sprite(this.e.ui.t_mine);
        this.prop.texture=this.e.ui.t_mine;
        this.prop.xspeed= 5 + this.e.u.ran(5);
        this.prop.yspeed= -5 - this.e.u.ran(5);

      }else if(type==="green"){

        // this.prop = new PIXI.Sprite(this.e.ui.t_mine);
        this.prop.texture=this.e.ui.t_green;
        this.prop.xspeed= 5 + this.e.u.ran(5);
        this.prop.yspeed= -5 - this.e.u.ran(5);

      }else if(type==="red"){

        // this.prop = new PIXI.Sprite(this.e.ui.t_barbedWire);
        this.prop.texture=this.e.ui.t_barbedWire;
        this.prop.xspeed= 5 + this.e.u.ran(5);
        this.prop.yspeed= -10 - this.e.u.ran(10);

      }else if(type==="yellow"){

        // this.prop = new PIXI.Sprite(this.e.ui.t_chicken);
        this.prop.texture=this.e.ui.t_chicken;

      }

      this.prop.width=75;
      this.prop.height=75;
      this.prop.anchor.y=1;
      this.prop.position.y=-this.groundLevel;
      this.prop.position.x=x;
      this.prop._zIndex=1;
      this.prop.alpha=1;
      this.prop.rotation=this.e.u.ca(0);
      this.prop.type=type;
      this.prop.action="wait"

      
      if( i===0 ){

        this.levCont.addChild(this.prop);
        this.props.push(this.prop);
        this.saveMirror=this.prop;
        this.prop.propSet=1;

      }else{

        this.levCont2.addChild(this.prop);
        this.props2.push(this.prop);
        this.prop.mirror=this.saveMirror;
        this.saveMirror.mirror=this.prop;
        this.prop.propSet=2;

      }

      if(type==="green"){
        
        if( i===0 ){
          this.prop.position.y = -( this.groundLevel * 2 )- this.e.u.ran(500)
          this.prop.width=125;
          this.prop.height=125;
        }else{
          this.prop.position.y = this.prop.mirror.position.y;
          this.prop.width=125;
          this.prop.height=125;
        }

      }

      if(command==="killer" && i===1){

        console.log("KILLER2")

        this.killerProp=this.prop;

        // this.prop.rotation = 45;
        // this.prop.alpha = .5;
        // this.prop.position.y=-170

      }

    }

    if(type==="blue" || type==="purple"){

      if(x<this.goalDistance*.66 && x>this.goalDistance*.2){

        this.ranRocket = this.e.u.ran(100);
        if(this.ranRocket<50){
  
          console.log("make rocket")
  
          this.makeNewProp("green", x + this.e.u.nran(100), "build")
  
        }
  
      }

    }

  }

  countSprites(container) {

    this.propCount = 0;

    container.children.forEach(child => {
        if (child instanceof PIXI.Sprite) {
          this.propCount++;
        }else if (child instanceof PIXI.Container) {
          this.propCount += this.countSprites(child);
        }
    });

    return this.propCount;
  }

  update(){

    this.slider = document.getElementById("betSlider");
    this.sliderVal = this.slider.value;
    this.winChance = 100-this.sliderVal;

    this.winningsNumber = (100/this.winChance) * .99;

    this.goalDistance = ((this.slider.value)*500)+5000

    document.getElementById("winnings").innerHTML = "WINNINGS: "+this.e.u.roundToFourDigits( this.winningsNumber );
    document.getElementById("winChance").innerHTML = "WIN CHANCE: "+this.winChance;

    document.getElementById("controlContainer").style.top = ((window.innerHeight/3)-50)+"px";
    document.getElementById("powerMeter").style.width = (this.pmObject.power * 1.5)+"px";

    if(this.levCont.position.x===0){
      document.getElementById("score").innerHTML = 0;
    }else{
      document.getElementById("score").innerHTML = Math.round(this.score)+" / "+Math.round(this.goalDistance);
    }
    

    this.cannonAngle = document.getElementById("cannonAngle").value;

    this.cannon2.rotation = this.e.u.ca(-10) - this.e.u.ca(this.cannonAngle * .3);
    this.cannon3.rotation = this.cannon2.rotation;

    if(this.cowShad.alpha!==0){
      this.cowShad.alpha = .8 + (this.playerCont.position.y+150)/2500;
    }

    if(this.playerCont2.position.y<-1100){
      this.playerCont2.position.y=-1100
      this.yspeed=0;
    }
   
    this.cowShad.position.x = this.playerCont.position.x;

    if(this.action==="pause"){

      //

    }else if(this.action==="reset"){

      this.winResult="";
      this.winRoll=0;
      this.hasWon=false;
      this.winSoundOnce=true

      document.getElementById("winText").style.opacity="0"

      document.getElementById("controlContainer").style.display="inline";

      this.cowHead.rotation=0;
      this.cowArm1.rotation=0;
      this.cowArm2.rotation=0;
      this.cowLeg1.rotation=0;
      this.cowLeg2.rotation=0;

      this.cowShad.width=120;
      this.cowShad.height=12;
      this.cowShad.position.y=-141;

      this.playerCont.position.x=360
      this.playerCont.position.y=-190

      this.playerCont2.position.x=250
      this.playerCont2.position.y=-300

      this.playerBody.rotation = 0;  
      this.playerBody.position.x=360
      this.playerBody.position.y=-190

      this.cannonBody.position.x=410;

      this.cannon2.position.x=this.cannon2.startx
      this.cannon2.position.y=this.cannon2.starty

      this.levCont.position.x=0;
      this.levCont2.position.x=0;

      this.createLevel();

      this.resetButton.buttonMode=false;
      this.resetButton.interactive=false;
      this.resetButton.alpha=0;

      this.xspeed=0;
      this.yspeed=0;
      this.xspeedMax=30;
      
      this.lerpPlayerBody=false

      gsap.killTweensOf(this.pmObject)
      this.pmObject.power=100;
      gsap.to( this.pmObject, { power: 0,  duration: .25, repeat: -1, yoyo: true});
  
      this.score=0;

      document.getElementById("betSlider").style.pointerEvents="auto";

      for(var i=0; i<this.props.length; i++){
        this.props[i].alpha=1;
        this.props[i].flipCount=0;;
        
      }

      for(var i=0; i<this.props2.length; i++){
        this.props2[i].alpha=1;
        this.props2[i].flipCount=0;;
          
      }

      this.action="wait to shoot"

    }else if(this.action==="wait to shoot"){

      if(this.e.input.keySpace===true){

        this.action="set shoot"

      }

    }else if(this.action==="set shoot"){

      // this.finishLine.position.x = this.goalDistance-200;

      this.winRoll = this.e.u.getRandomDecimal(0,100,20);
      if(this.winRoll<this.winChance){
        this.winResult="win";
      }else{
        this.winResult="lose";
      }
      // this.winResult="win";
      this.makeLoser=false;
  
      document.getElementById("betSlider").style.pointerEvents="none";

      gsap.killTweensOf(this.pmObject);
      
      this.cowShad.width=120;
      this.cowShad.height=25;
      this.cowShad.position.y=-151;

      this.powerPerc = this.pmObject.power/100;
      this.anglePerc = document.getElementById("cannonAngle").value/100;

      this.xspeed=20+(this.powerPerc*20);
      this.yspeed=-5-(this.powerPerc*5)-(this.anglePerc*7);

      this.saveData=[];
      this.mirrorTime=0;
      this.realTime=0;
      this.endTime=0;
      this.movePlayer=true;
      this.convertToLossOnce=true;

      this.cowAniAction="start"
      this.cowAniCount=0;

      for(var i=0; i<this.props.length; i++){
        // console.log(this.props[i].position.x+" / "+this.goalDistance)
        if(this.props[i].position.x>this.goalDistance){
          this.props[i].position.x=-200;
          this.props[i].action="done";
          this.props[i].alpha=0;
        }
      }
      
      for(var i=0; i<this.props2.length; i++){
        if(this.props2[i].position.x>this.goalDistance){
          this.props2[i].position.x=-200;
          this.props2[i].action="done";
          this.props2[i].alpha=0;
        }
      }
      
      this.action="shoot"

    }else if(this.action==="shoot"){

      // ----------------------------------------------------------------------------------------------------------------

      // mirror recording

      this.timeObject = new Object();
      this.timeObject.time = this.mirrorTime;
      this.timeObject.x = this.playerCont2.position.x;
      this.timeObject.y = this.playerCont2.position.y;
      this.timeObject.yellowHeight = this.tweenOb.yellowHeight;
      this.timeObject.movePlayer = this.movePlayer;
      this.timeObject.xspeed = this.xspeed;
      this.timeObject.didBounce = this.didBounce;

      if(this.didBounce===true){
        this.didBounce=false;
      }

      this.saveData.push(this.timeObject);

      this.mirrorTime+=this.e.dt;

      // ----------------------------------------------------------------------------------------------------------------

      if(this.cowAniAction==="start"){

        this.cannonBody.alpha=1;
        this.playerBody.alpha=0;
        this.cowShad.alpha=0;
        this.playerBody.position.x=340;
        this.playerBody.position.y=-330;
        this.playerBody.rotation = this.e.u.ca(80);

        this.gp = this.cannonBody.getGlobalPosition();
        this.playerCont2.position.x=this.gp.x;
        this.playerCont2.position.y=this.gp.y-window.innerHeight;

        document.getElementById("controlContainer").style.display="none";

        this.e.s.p("cork");
        
        gsap.to( this.cannonBody.position, { x: this.cannonBody.position.x-30,  duration: 1.9, ease: "sine.out"});

        this.cowAniAction="wait"

      }else if(this.cowAniAction==="wait"){

        this.cowAniCount+=this.e.dt;
        if(this.cowAniCount>2){

          this.e.s.p("exp3");
          this.e.s.p("moo");

          this.explosion.curFrame=0;
  
          this.cowAniTime=.25;

          this.lerpPlayerBody=true

          this.cowShad.alpha=1;
          this.cannonBody.alpha=0;
          this.playerBody.alpha=1;

          this.cowHead.rotation = this.e.u.ca(-10)
          this.cowLeg1.rotation = this.e.u.ca(-30)
          this.cowLeg2.rotation = this.e.u.ca(30)
          gsap.to( this.cowHead, { rotation: this.e.u.ca(10),  duration: this.cowAniTime, repeat: -1, yoyo: true, ease: "sine.out"});
          gsap.to( this.cowArm1, { rotation: this.e.u.ca(120),  duration: this.cowAniTime, repeat: -1, yoyo: true, ease: "sine.out"});
          gsap.to( this.cowArm2, { rotation: this.e.u.ca(-120),  duration: this.cowAniTime, delay: this.cowAniTime, repeat: -1, yoyo: true, ease: "sine.out"});
          gsap.to( this.cowLeg1, { rotation: this.e.u.ca(60),  duration: this.cowAniTime, delay: this.cowAniTime, repeat: -1, yoyo: true, ease: "sine.out"});
          gsap.to( this.cowLeg2, { rotation: this.e.u.ca(-60),  duration: this.cowAniTime, repeat: -1, yoyo: true, ease: "sine.out"});

          gsap.to( this.cannon2.position, { x: this.cannon2.position.x-20*3, y: this.cannon2.position.y+5*3,  duration: .1, ease: "sine.out"});
          gsap.to( this.cannon2.position, { x: this.cannon2.position.x+20*3, y: this.cannon2.position.y-5*3,  delay: .1, duration: .4, ease: "sine.out"});

          this.gp = this.cannonBody.getGlobalPosition();
          this.explosion.position.x=this.gp.x;
          this.explosion.position.y=this.gp.y-window.innerHeight;

          this.cowAniAction="flying"
      
        }

      }

      // ----------------------------------------------------------------------------------------------------------------

      // set other to position

      if(this.mirrorTime>2){

        this.realTime+=this.e.dt;

        //find closest time object

        this.closestEntry=null;
        this.closestDif=10000;
        this.closestNum=0;

        for(var i=0; i<this.saveData.length; i++){

          this.dif = Math.abs(this.realTime - this.saveData[i].time);

          if(this.dif<this.closestDif){

            this.closestEntry = this.saveData[i];
            this.closestDif = this.dif
            this.closestNum = i

          }

        }

        if(this.closestEntry!==null){

          if(this.closestEntry.didBounce===true && this.hasWon===false){
            this.e.s.p("hitGround")
          }
            
          this.playerCont.position.x = this.closestEntry.x;
          this.playerCont.position.y = this.closestEntry.y;

          this.playerBody.rotation+= this.closestEntry.xspeed*this.e.dt*.3;

          if(this.closestEntry.movePlayer===true){
              
            for(var i=0; i<this.props.length; i++){

              if(this.props[i].type==="yellow"){
                this.props[i].position.y = this.closestEntry.yellowHeight;
              }
              
            }

          }else{

            gsap.killTweensOf(this.tweenOb);

          }
          // console.log(this.closestNum+" / "+this.closestEntry.time)
          // console.log(this.realTime)

        }else{

          console.log("no entry")

        }

      }

      // ----------------------------------------------------------------------------------------------------------------

      // score

      this.score = this.playerCont.position.x+200;

      if(this.score>this.goalDistance){

        gsap.killTweensOf(this.cowHead);
        gsap.killTweensOf(this.cowBody);
        gsap.killTweensOf(this.cowArm1);
        gsap.killTweensOf(this.cowArm2);
        gsap.killTweensOf(this.cowLeg1);
        gsap.killTweensOf(this.cowLeg2);

        if(this.winSoundOnce===true){
          this.e.s.p("win")
          this.winSoundOnce=false
              
          // if(this.hasWon===true){
            document.getElementById("winText").style.opacity="1"
          // }

        }
        

        // this.action="result"
        this.hasWon=true;

        this.levCont.position.x = -this.goalDistance+(window.innerWidth/2)+200;

      }
      
      // control player

      if(this.xspeed>this.xspeedMax){
        this.xspeed=this.xspeedMax;
      }

      if(this.movePlayer===true){
        this.playerCont2.position.x+=this.xspeed;
        this.playerCont2.position.y+=this.yspeed;
      }

      
     
      this.yspeed+=this.e.dt*10;

      // bounce off of ground

      if(this.e.u.hitTest(this.player2, this.ground)===true && this.yspeed>0){

        this.xspeed*=.75;
        this.yspeed=-this.yspeed*.5;
        this.didBounce=true;

      }

      // rocks

      this.moveRocks();

      this.moveChickens();

      // cycle through

      for(var i=0; i<this.props2.length; i++){

        var p = this.props2[i]

        // every frame

        if(p.action==="used"){

          if(p.flipCount===undefined){
            p.flipCount=0;
          }

          p.flipCount+=this.e.dt;
          if(p.flipCount>2){

            if(p.type==="blue" || p.type==="green"){
              this.e.s.p("exp2")
            }else if(p.type==="purple"){
              this.e.s.p("exp1")
            }else if(p.type==="red"){
              this.e.s.p("barbedWire")
            }else if(p.type==="yellow"){
              this.e.s.p("chicken")
            } 

            p.action="done"
            if(p.type==="blue" || p.type==="purple" || p.type==="green"){

              this.explosion.position.x=p.mirror.position.x;
              this.explosion.position.y=p.mirror.position.y;
              this.explosion.curFrame=0;

              for(var j=0; j<15; j++){

                for(var k=0; k<this.rockPool.length; k++){

                  if( this.rockPool[k].action==="ready" ){

                    this.rockPool[k].xspeed=this.e.u.nran(50);
                    this.rockPool[k].yspeed=-this.e.u.ran(50);
                    this.rockPool[k].action="go";
                    this.rockPool[k].position.x=p.mirror.position.x;
                    this.rockPool[k].position.y=p.mirror.position.y;

                  }

                }

              }

              p.mirror.alpha = 0;
              // p.mirror.rotation = this.e.u.ca(180)

            }

          }

        }

        // hit props

        if( Math.abs( this.playerCont2.position.x - p.position.x )<200 ){

          if(this.e.u.hitTest(this.player2, p)===true && p.action==="wait"){

            p.action="used";
            
            if(p.type==="purple"){

              // console.log("p")
              // console.log(p)

              this.xspeed+=p.xspeed;
              if(this.yspeed>0){
                this.yspeed=0;
              }
              this.yspeed+=p.yspeed;

              p.alpha=0;

            }else if(p.type==="blue"){

              // console.log("b")
              // console.log(p)

              this.xspeed+=p.xspeed;
              if(this.yspeed>0){
                this.yspeed=0;
              }
              this.yspeed+=p.yspeed;

              p.alpha=0;

            }else if(p.type==="green"){

              console.log("g")
              // console.log(p)

              this.xspeed+=p.xspeed;
              if(this.yspeed>0){
                this.yspeed=0;
              }
              this.yspeed+=p.yspeed;

              p.alpha=0;

            }else if(p.type==="red"){

              if(this.winResult==="win"){

                // if win switch to purple

                console.log("SWITCH PURPLE")

                this.xspeed+=p.xspeed;
                if(this.yspeed>0){
                  this.yspeed=0;
                }
                this.yspeed+=p.yspeed;

                p.type="purple";
                p.texture=this.e.ui.t_grenade;

                p.mirror.type="purple";
                p.mirror.texture=this.e.ui.t_grenade;

              }else{

                this.xspeed=0;
                this.yspeed=0;
  
                this.movePlayer=false;
  
              }

            }else if(p.type==="yellow"){

              if(this.winResult==="win"){

                console.log("SWITCH YELLOW")

                p.alpha=0;
                p.mirror.alpha=0;
                p.action="done"

              }else{

                this.xspeed=0;
                this.yspeed=0;
  
                this.movePlayer=false;
  
                gsap.killTweensOf( p.position );
                gsap.killTweensOf( p.mirror.position );
  
              }

            }

          }

        }

      }

      // ----------------------------------------------------------------------------------------------------------------

      // if a lose and getting too far

      if( this.winResult==="lose" ){

        if(this.makeKillerCount>0){

          this.makeKillerCount-=this.e.dt;

        }

        if(this.playerCont2.position.x>this.goalDistance*.7 && this.makeKillerCount<=0){

          if(this.playerCont2.position.y>-180){

            console.log("MAKE KILLER")

            this.makeNewProp("red", this.playerCont2.position.x, "killer")

            for(var i=0; i<this.props.length; i++){

              if(this.props[i]!==this.killerProp && this.props2[i]!==this.killerProp){
                  
                if( Math.abs( this.killerProp.position.x - this.props[i].position.x )<40 ){

                  this.props[i].alpha=0;
                  this.props[i].mirror.alpha=0;
                  console.log("extra red kill")

                }

              }

            }

            this.makeKillerCount=21;

          }

        }

      }

      // if a lose convert all later props to bad if over 80% of the way

      if(this.makeLoser===true){

        if(this.playerCont2.position.x>this.goalDistance*.6){

          this.winResult="lose"

        }

      }

      if(this.convertToLossOnce===true && this.winResult==="lose" || this.convertToLossOnce===true && this.makeLoser===true){

        this.convertToLossOnce=false;

        for(var i=0; i<this.props2.length; i++){

          var p = this.props2[i];

          this.makeSomeGoodRan = this.e.u.ran(4);

          if(p.position.x>this.goalDistance*.6 && this.makeSomeGoodRan!==0){

            if(p.type==="blue"){

              p.type="red";
              p.texture=this.e.ui.t_barbedWire;
              p.mirror.texture=this.e.ui.t_barbedWire;

            }else if(p.type==="purple"){

              p.type="yellow";
              p.texture=this.e.ui.t_chicken;
              p.mirror.texture=this.e.ui.t_chicken;

            }

          }

        }

      }

      // ----------------------------------------------------------------------------------------------------------------

      // if a win and slowing down too much

      if(this.winResult==="win"){

        if(this.createBlockCount>0){
          this.createBlockCount-=this.e.dt;
        }
        
        if(this.xspeed<5 && this.playerCont2.position.y>-180 && this.createBlockCount<=0){

          console.log("MAKE NEW PROP")

          this.createBlockCount=1.5;
          this.makeNewProp("purple", this.playerCont2.position.x+25, "win")

        }

      }

      // check for being stopped

      if(this.xspeed<.001 || this.hasWon===true){

        this.endTime+=this.e.dt;
        if(this.endTime>2.2){

          gsap.killTweensOf(this.cowHead);
          gsap.killTweensOf(this.cowBody);
          gsap.killTweensOf(this.cowArm1);
          gsap.killTweensOf(this.cowArm2);
          gsap.killTweensOf(this.cowLeg1);
          gsap.killTweensOf(this.cowLeg2);

          if(this.hasWon===false){
            // this.e.s.p("moo")
          }

          this.action="result"

        }

      }

      if(this.score>this.goalDistance){
        this.score=this.goalDistance
      }

    }else if(this.action==="result"){

      this.moveChickens();
      this.moveRocks();

      this.resetButton.alpha=1;
      this.resetButton.interactive=true;
      this.resetButton.buttonMode=true;

    }

    this.winColor();

  }

  winColor(){

    if(this.winNum===undefined){
      this.winNum=1;
      this.winCount=0;
    }

    this.winCount+=this.e.dt;
    if(this.winCount>.02){

      this.winCount=0;

      if(this.winNum===1){
        this.winNum=2;
        document.getElementById("winText").style.color="#FFFFFF"
      }else if(this.winNum===2){
        this.winNum=3;
        document.getElementById("winText").style.color="#FFFF00"
      }else if(this.winNum===3){
        this.winNum=4;
        document.getElementById("winText").style.color="#FFFF00"
      }else if(this.winNum===4){
        this.winNum=1;
        document.getElementById("winText").style.color="#00FFFF"
      }

    }


  }

  moveRocks(){

    for(var i=0; i<this.rockPool.length; i++){

      if(this.rockPool[i].action==="go"){

        this.rockPool[i].position.x+=this.rockPool[i].xspeed*this.e.dt*50;
        this.rockPool[i].position.y+=this.rockPool[i].yspeed*this.e.dt*50;
        this.rockPool[i].rotation+=this.rockPool[i].xspeed*this.e.dt*.2;

        this.rockPool[i].yspeed+=this.e.dt*10;

        if(this.rockPool[i].position.y>20){
          this.rockPool[i].action="ready"
        }

      }

    }

  }

  moveChickens(){

    for(var i=0; i<this.props2.length; i++){

      var p = this.props2[i]

      if(p.type==="yellow"){

        p.position.y = this.tweenOb.yellowHeight;
        p.mirror.position.y = this.tweenOb.yellowHeight;

      }

    }

  }

}