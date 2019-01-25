<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="/css/app.css">
        <link href="https://unpkg.com/basscss@8.0.2/css/basscss.min.css" rel="stylesheet">

        <title>My App</title>
    </head>
    <body>
        <div id="app">
            {{-- <input class="p2 bg-white border rounded" type="text" v-model="coupon"> --}}
            {{-- <input class="p2 bg-white border rounded" type="text" :value="coupon" @input="coupon = $event.target.value"> --}}

            <coupon v-model="coupon"></coupon>
        </div>

        <script src="https://unpkg.com/vue@2.1.8/dist/vue.js"></script>
        <script src="/js/app.js"></script>
     </body>
</html>
