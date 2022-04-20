<!DOCTYPE html>
<html>
 
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="./playerjs.js" type="text/javascript"></script>
    <title>KinoPlay by Ahmedov</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            width: 100%;
            height: 100%;
            overflow: hidden;
            background-color: black;
        }
 
        #player {
            width: 100%;
            height: 100%;
        }
    </style>
</head>
 
<body>
    <div id="player"></div>
 
    <script>
        var player = new Playerjs({
            id: "player",
            file: []
        });
    </script>
</body>
 
</html>
