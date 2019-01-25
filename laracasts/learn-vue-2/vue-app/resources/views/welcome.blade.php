<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="/css/app.css">

        <title>My App</title>
    </head>
    <body>
        <div id="one">
            <h1>@{{ shared.user.name }}</h1>
        </div>

        <div id="two">
            <h1>@{{ shared.user.name }}</h1>
        </div>

        <script src="/js/app.js"></script>
     </body>
</html>
