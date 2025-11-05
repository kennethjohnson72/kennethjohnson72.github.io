$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(150,650,100,10);
    createPlatform(300,550,100,10);
    createPlatform(100,420,100,10);
    createPlatform(350,300,100,10);
    createPlatform(620,160,100,10);
    createPlatform(820,270,100,10);
    createPlatform(980,160,100,10);
    createPlatform(1250,270,100,10);
    createPlatform(1100,400,100,10);
    createPlatform(1250,520,100,10);
    createPlatform(1100,620,100,10);





    // TODO 3 - Create Collectables
    createCollectable("diamond", 190, 600, 0.5, 0.7);
    createCollectable("diamond",320,510, 0.5, 0.7);
    createCollectable("diamond", 120, 380, 0.5, 0.7);
    createCollectable("diamond", 380, 260, 0.5, 0.7);
    createCollectable("diamond", 670, 100, 0.5, 0.7);
    createCollectable("diamond", 840, 220, 0.5, 0.7);
    createCollectable("diamond", 1000, 110, 0.5, 0.7);
    createCollectable("diamond", 1290, 220, 0.5, 0.7);
    createCollectable("diamond", 1130, 320, 0.5, 0.7);
    createCollectable("diamond", 1280, 480, 0.5, 0.7);
    createCollectable("diamond", 1130, 580, 0.5, 0.7);
    createCollectable("database", 1300, 680, 0.5, 0.7);
    createCollectable("database", 1290, 660, 0.5, 0.7);
    createCollectable("database",1320, 680, 0.5, 0.7);
   


    
    // TODO 4 - Create Cannons
    createCannon("left", 300, 1500);
    createCannon("bottom", 700, 2000);
    createCannon("bottom", 500, 1500);
    createCannon("bottom", 300, 1500);
    createCannon("bottom", 900, 2000);
    createCannon("top", 1200, 500);
    createCannon("top", 1350, 500);
    createCannon("left", 150, 1500);
    createCannon("left", 50, 1500);
    createCannon("left", 500, 1500);
    createCannon("left", 420, 1500);
    createCannon("left", 230, 1500);
    createCannon("left", 580, 1500);
    createCannon("bottom", 120, 1500);


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
