
/**function for loading all the files*/;
function preload() {
    /**Helicoptor image loaded*/;
    helicopterImage = loadImage("helicopter.png");
    /**package image loaded*/;
    packageImage = loadImage("package.png");
    /**Background imgage loaded*/;
    backImage = loadImage("image3.jpg");
    ZombieSound = loadSound("sound2.mp3");
    helicopterSound = loadSound("sound1.mp3");
    zombie = loadImage("zombie.png")
}
/**function for creating all the sprites*/;
function setup() {
    /**startup function for all basic projects*/;
    startup1();
    /**An array for infinite packages*/;
    packagesArray2 = [];
    /**helicoptor sprite created*/;
    heli2 = new Box(300, 200, 200, 200, true, helicopterImage);
    /**ground sprite created*/;
    ground = new Ground(0, 800, 6000, 20, true);
    c1 = confirm("You have to leave all the six parcels from the helicoptor for the people");
    c2 = confirm("Though the people are not there but they will come after some time");
    c3 = confirm("Press the DOWN key to leave the parcels");
}
function draw() {
    /**startup function for all basic projects*/;
if (c3 === true){
        ZombieSound.play();
        ZombieSound.setVolume(0.3);
        helicopterSound.play();
        helicopterSound.setVolume(0.3);
    }
    /**show the ground*/;
    ground.show()


    /**show the background*/;
    imageMode(CENTER)
    image(backImage, 400, 200, 2500, 1600);

    /**incrementing the x*/;
    y++;
    /**making packages fall when up arrow is pressed*/;
    if (keyWentDown(DOWN_ARROW)) {
       
        /**restricting it to 6 packages*/;
        if (box_Delevered2 < 5) {
            packagesArray2.push(new Box(y, 210, 40, 40, false, packageImage));
        }

    }
    /**making packages*/;
    for (k = 0; k < packagesArray2.length; k++) {
        packagesArray2[k].show();
        box_Delevered2 = k;
    }
    if (box_Delevered2 === 5) {
        console.log("Thank you for delivering the parcels to the city.");
        box_Delevered2 = 0;

    }
    /*showing as well as moving the helicoptor*/;
    heli2.show();
    heli2.move3();
    /*inserted a while loop for making zombies*/;
    var i = 0;
    while (i < 4) {

        var zombies = createSprite(200 + (i * 250), 600, 200, 300);
        zombies.addImage(zombie)
        zombies.scale = 0.5;
        i = i + 1;
    }
    drawSprites();
}


