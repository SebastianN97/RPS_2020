

<!DOCTYPE html>

<html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie-edge">
        <link rel="stylesheet" href="rps.css">
        <title>Rock Paper Scissor</title>
    </head>

    <body>
        <h1>Rock Paper Scissor</h1>


        
            <div class="game">               
                    <h2 class="winner">Let's play!</h2>

                    <div class="hands">
                        <img 
                        class="player-hand"
                        src="pictureStarter/anger.png" 
                        alt="" 
                        style="width:200px;height:200px;"
                        >
                        <img 
                        class="computer-hand"
                        src="pictureStarter/anger.png" 
                        alt=""
                        style="width:200px;height:200px;"
                        >
                    </div>
                

                    <div class="options">
                        <button class="rock">rock</button>
                        <button class="paper">paper</button>
                        <button class="scissor">scissor</button>
                    </div>
            </div>
       
        
        <script  src="./rpsFunction.js"></script>
    </body>

</html>