
export class Input {
    
    setUp(e) {

        this.e=e;

        this.keyRight = false;
        this.keyLeft = false;
        this.keyUp = false;
        this.keyDown = false;

        document.addEventListener("keydown", event => {

            //---arrow keyes---------------------------------------

            if (event.key === "ArrowRight" || event.key === "d" || event.key === "D") {

                console.log("a")
                this.e.scene.moveMode = true;
                this.keyRight = true;

            } else if (event.key === "ArrowLeft" || event.key === "a" || event.key === "A") {

                this.keyLeft = true;

            } else if (event.key === "ArrowUp" || event.key === "w" || event.key === "W") {

                this.keyUp = true;

            } else if (event.key === "ArrowDown" || event.key === "s" || event.key === "S") {

                this.keyDown = true;

            } else if (event.key === "f") {

                this.e.scene.action="pause"

            } else if (event.key === "g") {

                this.e.scene.action="shoot"

            } else if (event.key === "z") {

                // console.log(this.e.scene.saveData);

                // for(var i=0; i<this.e.scene.saveData.length; i++){

                //     console.log( i+" / "+this.e.u.roundToTwoDigits( this.e.scene.saveData[i].time) +" / "+ this.e.u.roundToTwoDigits(this.e.scene.saveData[i].x) +" / "+ this.e.u.roundToTwoDigits(this.e.scene.saveData[i].y) );

                // }

                this.e.scene.winResult="win"

            } else if (event.key === "x") {

                this.e.scene.winResult="lose"

            } else if (event.key === "1") {

                this.e.scene.levCont.alpha=0;
                this.e.scene.levCont2.alpha=1;
                this.e.scene.backgroundCont.alpha=0;

            } else if (event.key === "2") {

                this.e.scene.levCont.alpha=1;
                this.e.scene.levCont2.alpha=0;
                this.e.scene.backgroundCont.alpha=1;

            } else if (event.key === "3") {

                this.e.scene.backgroundCont.alpha=0;

            } else if (event.key === "4") {

                this.e.scene.action="angel1";

            } else if (event.key === " ") {

                this.keySpace = true;

            }

        });

        document.addEventListener("keyup", event => {

            //---arrow keyes---------------------------------------

            if (event.key === "ArrowRight" || event.key === "d" || event.key === "D") {

                this.keyRight = false;

            } else if (event.key === "ArrowLeft" || event.key === "a" || event.key === "A") {

                this.keyLeft = false;

            } else if (event.key === "ArrowUp" || event.key === "w" || event.key === "W") {

                this.keyUp = false;

            } else if (event.key === "ArrowDown" || event.key === "s" || event.key === "S") {

                this.keyDown = false;

            } else if (event.key === "v") {

               var vv = this.e.scene.countSprites(this.e.ui.app.stage);
               console.log(vv);

            } else if (event.key === " ") {

                this.keySpace = false;

            }

        });

        //---touchstart--------------------------------------------------------------------------------------------------------------

        this.ongoingTouches = [];

        document.addEventListener("touchstart", evt => {

            for (var i = 0; i < evt.touches.length; i++) {
                var found = false;

                //only add the touch if it is not listed yet, prevent doubles

                for (var j = 0; j < this.ongoingTouches.length; j++) {

                    if (evt.touches[i].identifier === this.ongoingTouches[j].identifier) {
                        found = true;
                    }

                }

                if (found === false) {
                    this.ongoingTouches.push(evt.touches[i]);

                    
                }
            }

        });

        //---touchmove--------------------------------------------------------------------------------------------------------------

        this.ongoingTouches = [];

        document.addEventListener("touchmove", evt => {

            for (var i = 0; i < evt.touches.length; i++) {
            
                this.e.touch.x=evt.touches[i].clientX
                this.e.touch.y=evt.touches[i].clientY

                this.e.mouse.x = evt.touches[i].clientX
                this.e.mouse.y = evt.touches[i].clientY

            }

        });

        //---touchend--------------------------------------------------------------------------------------------------------------

        document.addEventListener("touchend", evt => {

            //evt.preventDefault();
            var touches = evt.changedTouches;

            for (var i = 0; i < touches.length; i++) {

                for (var j = 0; j < this.ongoingTouches.length; j++) {

                    if (touches[i].identifier === this.ongoingTouches[j].identifier) {
                        this.ongoingTouches.splice(j, 1);
                    }
                }
            }

        });

        //---touchcancel--------------------------------------------------------------------------------------------------------------

        document.addEventListener("touchcancel", evt => {

            //evt.preventDefault();
            var touches = evt.changedTouches;

            for (var i = 0; i < touches.length; i++) {

                for (var j = 0; j < this.ongoingTouches.length; j++) {

                    if (touches[i].identifier === this.ongoingTouches[j].identifier) {
                        this.ongoingTouches.splice(j, 1);
                    }

                }

            }

        });

    }

}