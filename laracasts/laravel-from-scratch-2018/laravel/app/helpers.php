<?php
/**
 * helpers.php
 */

function flash($message) {
  session()->flash('message', $message);
}
