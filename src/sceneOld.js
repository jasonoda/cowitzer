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
    
    this.props=[];
    this.props2=[];

    this.saveData=[];

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

    this.levCont2 = new PIXI.Container();
    this.levCont2.sortableChildren = true;
    this.baseCont.addChild(this.levCont2);
    this.levCont2._zIndex=10;

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
    this.ground.alpha=.3;
    this.ground._zIndex=2;
    this.levCont.addChild(this.ground);

    this.ground2 = new PIXI.Sprite(this.e.ui.t_red);
    this.ground2.width=500000;
    this.ground2.height=this.groundLevel;
    this.ground2.anchor.y=1;
    this.ground2.alpha=.3;
    this.ground2._zIndex=2;
    this.levCont2.addChild(this.ground2);

    //

    this.playerCont = new PIXI.Container();
    this.playerCont.sortableChildren = true;
    this.levCont.addChild(this.playerCont);
    this.playerCont._zIndex=20

    this.player = new PIXI.Sprite(this.e.ui.t_black);
    this.player.width=50;
    this.player.height=50;
    this.player.anchor.x=.5;
    this.player.anchor.y=.5;
    this.player.alpha=1;
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

    this.powerMeter = new PIXI.Sprite(this.e.ui.t_red);
    this.powerMeter.width=100;
    this.powerMeter.height=10;
    this.powerMeter.position.x=150;
    this.powerMeter.position.y=-100;
    this.powerMeter.alpha=1;
    this.powerMeter._zIndex=20;
    this.levCont.addChild(this.powerMeter);

    this.resetButton = new PIXI.Sprite(this.e.ui.t_black);
    this.resetButton.width=200;
    this.resetButton.height=50;
    this.resetButton.anchor.x=.5;
    this.resetButton.anchor.y=.5;
    this.resetButton.alpha=1;
    this.resetButton._zIndex=20;
    this.baseCont.addChild(this.resetButton);

    this.finishLine = new PIXI.Sprite(this.e.ui.t_finishLine);
    this.finishLine.anchor.y=1;
    this.finishLine._zIndex=4;
    this.finishLine.position.x=2000;
    this.finishLine.position.y=-this.groundLevel;
    this.levCont.addChild(this.finishLine);

    this.resetButton.on('mousedown', (event) => {

      console.log("reset button")
      this.action="reset";
        
    })

    this.resetButton.on('touchstart', (event) => {

      this.action="reset";
        
    })

  }

  alignParts(){

    this.levCont.position.y = window.innerHeight;
    this.levCont2.position.y = window.innerHeight;

    if(this.playerCont.position.x<window.innerWidth/2){

      // hold in place

    }else{

      this.levCont.position.x = -this.playerCont.position.x + (window.innerWidth/2)
      this.levCont2.position.x = -this.playerCont.position.x + (window.innerWidth/2)

    }

    this.resetButton.position.x=window.innerWidth/2;
    this.resetButton.position.y=window.innerHeight/2;

  }

  createLevel(){

    for(var i=0; i<this.props.length; i++){

      this.levCont.removeChild(this.props[i]);
      this.props[i].destroy({ children: true,  baseTexture: true });

    }

    for(var i=0; i<this.props2.length; i++){

      this.levCont.removeChild(this.props2[i]);
      this.props2[i].destroy({ children: true,  baseTexture: true });

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
      this.badProps = ["red", "yellow"];

      if(this.propDist<this.badPropsStartAt){
        
        this.e.u.copyInto(this.allProps, this.goodProps);

      }else{
        
        this.e.u.copyInto(this.allProps, this.goodProps);
        this.e.u.copyInto(this.allProps, this.badProps);

      }

      //----------------------------------------------------------------------------

      this.propType=this.e.u.ranPick(this.allProps);

      //----------------------------------------------------------------------------

      for(var i=0; i<2; i++){
          
        if(this.propType==="purple"){

          this.prop = new PIXI.Sprite(this.e.ui.t_purple);
          this.prop.xspeed= 5 - this.e.u.ran(5);
          this.prop.yspeed= -10 - this.e.u.ran(10);
  
        }else if(this.propType==="blue"){

          this.prop = new PIXI.Sprite(this.e.ui.t_blue);
          this.prop.xspeed= 5 + this.e.u.ran(5);
          this.prop.yspeed= -5 - this.e.u.ran(5);
  
        }else if(this.propType==="red"){

          this.prop = new PIXI.Sprite(this.e.ui.t_red);

        }else if(this.propType==="yellow"){

          this.prop = new PIXI.Sprite(this.e.ui.t_yellow);
          gsap.to( this.prop.position, { y: -800,  duration: 1, repeat: -1, yoyo: true});

        }

        this.prop.width=50;
        this.prop.height=50;
        this.prop.anchor.y=1;
        this.prop.position.y=-this.groundLevel;
        this.prop.position.x=this.propDist;
        this.prop._zIndex=2;
        this.prop.alpha=1;
        this.prop.type=this.propType;
        this.prop.action="wait"

        if( i===0 ){

          this.levCont.addChild(this.prop);
          this.props.push(this.prop);
          this.saveMirror=this.prop;
  
        }else{

          this.levCont2.addChild(this.prop);
          this.props2.push(this.prop);
          this.prop.mirror=this.saveMirror;
          this.saveMirror.mirror=this.prop;
  
        }

      }

      //----------------------------------------------------------------------------

      this.propDist+=400+this.e.u.ran(400);

    }

  }

  update(){

    this.slider = document.getElementById("betSlider");
    this.sliderVal = this.slider.value;
    this.winChance = 100-this.sliderVal;

    this.winningsNumber = (100/this.winChance) * .99;

    this.goalDistance = ((this.slider.value)*500)+5000

    document.getElementById("winnings").innerHTML = "WINNINGS: "+this.e.u.roundToFourDigits( this.winningsNumber );
    document.getElementById("winChance").innerHTML = "WIN CHANCE: "+this.winChance;

    document.getElementById("score").innerHTML = Math.round(this.score)+" / "+Math.round(this.goalDistance)

    if(this.action==="reset"){

      this.winResult="";
      this.winRoll=0;

      this.playerCont.position.x=200
      this.playerCont.position.y=-200

      this.playerCont2.position.x=200
      this.playerCont2.position.y=-200

      this.levCont.position.x=0;
      this.levCont2.position.x=0;

      this.createLevel();

      this.resetButton.buttonMode=false;
      this.resetButton.interactive=false;
      this.resetButton.alpha=0;

      this.xspeed=0;
      this.yspeed=0;
      this.xspeedMax=30;
      
      this.powerMeter.width=100;
      gsap.to( this.powerMeter, { width: 0,  duration: .25, repeat: -1, yoyo: true});

      this.score=0;

      document.getElementById("betSlider").style.pointerEvents="auto";

      this.action="wait to shoot"

    }else if(this.action==="wait to shoot"){

      if(this.e.input.keySpace===true){

        this.action="set shoot"

      }

    }else if(this.action==="set shoot"){

      this.finishLine.position.x = this.goalDistance-200;

      this.winRoll = this.e.u.getRandomDecimal(0,100,20);
      if(this.winRoll<this.winChance){
        this.winResult="win";
      }else{
        this.winResult="lose";
      }
  
      document.getElementById("betSlider").style.pointerEvents="none";

      gsap.killTweensOf(this.powerMeter);

      this.powerPerc = this.powerMeter.width/100;

      this.xspeed=10+(this.powerPerc*20);
      this.yspeed=-10-(this.powerPerc*10);

      this.action="shoot"

    }else if(this.action==="shoot"){

      // score

      this.score = this.playerCont.position.x+200;

      if(this.score>this.goalDistance){

        this.action="result"

      }
      
      // control player

      if(this.xspeed>this.xspeedMax){
        this.xspeed=this.xspeedMax;
      }

      this.playerCont.position.x+=this.xspeed;
      this.playerCont.position.y+=this.yspeed;
      this.yspeed+=this.e.dt*10;

      // bounce off of ground

      if(this.e.u.hitTest(this.player, this.ground)===true && this.yspeed>0){

        this.xspeed*=.75;
        this.yspeed=-this.yspeed*.5;

      }

      // if(this.playerCont.position.y>-500 && this.yspeed>0){
      //   this.player.alpha=.5;
      // }else{
      //   this.player.alpha=1;
      // }

      // hit props

      for(var i=0; i<this.props.length; i++){

        // switch props

        // if( this.props[i].position.x - this.playerCont.position.x<500 && this.props[i].position.x - this.playerCont.position.x>0){

        //   this.props[i].alpha=.8;

        //   if(this.playerCont.position.y>-500 && this.yspeed>0 && this.props[i].type==="red"){

        //     this.props[i].texture = this.e.ui.t_red2;
        //     this.props[i].type="red2"

        //   }else if(this.props[i].type==="yellow" && this.props[i].moveOnce===undefined){

        //     this.props[i].moveOnce=true;

        //     if(this.playerCont.position.y<-500){

        //       this.props[i].position.y=-150
        //       this.props[i].dir="up"

        //     }else{

        //       this.props[i].position.y=-800
        //       this.props[i].dir="down"

        //     }

        //   }

        // }

        // move yellow

        // if(this.props[i].type==="yellow" && this.props[i].moveOnce===true){

          // this.yellowSpeed=400;

          // if(this.e.u.getDistance(this.playerCont.position.x, this.playerCont.position.y, this.props[i].position.x, this.props[i].position.y ) < 300){

            // if(this.playerCont.position.y>this.props[i].position.y && this.props[i].dir==="down"){

            //   this.yellowSpeed=2400;

            // }else if(this.playerCont.position.y<this.props[i].position.y && this.props[i].dir==="up"){

            //   this.yellowSpeed=2400;

            // }

          // }else{

            // if(this.props[i].dir==="up"){

            //   this.props[i].position.y-=this.e.dt*this.yellowSpeed;
            //   if(this.props[i].position.y<-800){
            //     this.props[i].dir="down"
            //   }
  
            // }else if(this.props[i].dir==="down"){
  
            //   this.props[i].position.y+=this.e.dt*this.yellowSpeed;
            //   if(this.props[i].position.y>-this.groundLevel){
            //     this.props[i].dir="up"
            //   }
  
            // }

            // this.props[i].position.y = this.playerCont.position.y

          // }

          

        // }

        // hit props

        if( Math.abs( this.playerCont.position.x - this.props[i].position.x )<200 ){

          if(this.e.u.hitTest(this.player, this.props[i])===true && this.props[i].action==="wait"){

            this.props[i].action="used";
            
            if(this.props[i].type==="purple" || this.props[i].type==="red2"){

              this.xspeed+=this.props[i].xspeed;
              if(this.yspeed>0){
                this.yspeed=0;
              }
              this.yspeed+=this.props[i].yspeed;

              // this.xspeed+=5 + this.e.u.ran(5);
              // this.yspeed-=10 + this.e.u.ran(10);

              this.props[i].alpha=0;

            }else if(this.props[i].type==="blue"){

              this.xspeed+=this.props[i].xspeed;
              if(this.yspeed>0){
                this.yspeed=0;
              }
              this.yspeed+=this.props[i].yspeed;

              // this.xspeed+=5 + this.e.u.ran(5);
              // this.yspeed-=5 + this.e.u.ran(5);

              this.props[i].alpha=0;

            }else if(this.props[i].type==="red"){

              this.xspeed=0;
              this.yspeed=0;

            }else if(this.props[i].type==="yellow"){

              this.xspeed=0;
              this.yspeed=0;

              gsap.killTweensOf( this.props[i].position );
              gsap.killTweensOf( this.props[i].mirror.position );

            }

          }

        }

      }

      // check for being stopped

      if(this.xspeed<.001){

        this.action="result"

      }

    }else if(this.action==="result"){

      this.resetButton.alpha=1;
      this.resetButton.interactive=true;
      this.resetButton.buttonMode=true;

    }

  }

}