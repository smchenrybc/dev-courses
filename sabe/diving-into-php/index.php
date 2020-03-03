<!DOCTYPE html>
<html>
<head>
  <title>Diving into PHP</title>
  <link href="https://unpkg.com/basscss@8.0.2/css/basscss.min.css" rel="stylesheet">
  <style>
    html {
      font-size: 20px;
    }
    body {
      color: #404040;
      background-color: #FAFAFA;
    }
    p {
      font-size: 1rem;
    }
    span {
      display: block;
    }
  </style>
</head>
<body>
  <?php
  // set constants and variables
  define( 'home_url', 'http://blank.org' );
  $string = 'This is an example string.';
  $float = 3.14159;
  $empty = NULL;

  // doing some math
  $cats = 4;
  $cats += 2;

  // PEMDAS
  $math = (5 * 3) + 10 / 2;
  ?>
  <main>
    <h1><?= "Hello, world!"; ?></h1>

    <p class="h3"><a href="<?= home_url; ?>"><?= home_url; ?></a></p>

    <p>
      <span>String length:</span>
      <span><?= strlen( $string ); ?></span>
    </p>

    <p>
      <span>String word count:</span>
      <span><?= str_word_count( $string ); ?></span>
    </p>

    <p>
      <span>Float:</span>
      <span><?= $float; ?></span>
    </p>

    <p>
      <span>Empty:</span>
      <span><?= var_dump( $empty ); ?></span>
    </p>

    <p>
      <span>Number of cats:</span>
      <span><?= $cats; ?></span>
    </p>

    <p>
      <span>PEMDAS:</span>
      <span><?= $math; ?></span>
    </p>

    <p>
      <span>Euler's number: <?= M_E; ?></span>
      <span>Pi: <?= M_PI; ?></span>
      <span>Euler's constant: <?= M_EULER; ?></span>
    </p>

    <p>
      <span>Pi rounded up:</span>
      <span><?= ceil( M_PI ); ?></span>
    </p>

    <p>
      <span>Pi rounded down:</span>
      <span><?= floor( M_PI ); ?></span>
    </p>

    <p>
      <span>Maximum:</span>
      <span><?= max( 36, 77, 89, 65, 39, 81 ); ?></span>
    </p>

    <p>
      <span>Minimum:</span>
      <span><?= min( 36, 77, 89, 65, 39, 81 ); ?></span>
    </p>

    <p>
      <span>Power:</span>
      <span><?= pow(5, 3); ?></span>
    </p>

    <p>
      <span>Dice roll:</span>
      <span><?= 'I just rolled a ' . rand( 1, 6 ); ?></span>
    </p>
  </main>
</body>
</html>
