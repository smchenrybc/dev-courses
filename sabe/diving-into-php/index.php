<!DOCTYPE html>
<html>
<head>
  <title>Diving into PHP</title>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,700;1,400;1,700&display=swap" rel="stylesheet">
  <link rel="stylesheet" type="text/css" href="style.css">
  <link href="https://unpkg.com/basscss@8.0.2/css/basscss.min.css" rel="stylesheet">
</head>
<body>
  <header>
    <div class="breadcrumbs">
      <span class="mb2">
        <a href="https://sabe.io/">Home</a> &raquo;
        <a href="https://sabe.io/classes">Classes</a> &raquo;
        <a href="https://sabe.io/classes/php">Diving into PHP</a> &raquo;
        <a href="https://sabe.io/classes/php/functions">Functions: Reuse your Code</a>
      </span>
    </div>

    <h1>Functions: Reuse your Code</h1>
  </header>

  <main class="mt3">
    <p>
      <span>Functions:</span>
      <span>
        <?php
        function my_intro( $name ) {
          echo 'Hello, my name is ' . $name . '.';
        }

        my_intro( 'Sean' );
        ?>
      </span>
    </p>

    <p>
      <span>Parameters:</span>
      <span>
        <?php
        function intro_with_locale( $greeting, $locale ) {
          echo ( $greeting . '! I am from ' . $locale . '.' );
        }

        intro_with_locale( 'Guttentag', 'Germany' );
        ?>
      </span>
    </p>
  </main>
</body>
</html>
