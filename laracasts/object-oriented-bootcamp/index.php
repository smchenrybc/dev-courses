<?php
/**
 * index.php
 */

// turn on errors
ini_set('display_errors', 1);

// if you find yourself checking
// the type of an object you should
// instead be using "polymorphism"

// interface
interface Provider {
  public function authorize();
}


// function login(GitHubProvider $provider) {
//   $provider->authorize();
// }

// function login($provider) {
//   if ($provider === '') {
//     $provider->authorize();
//   }
// }

function login(Provider $provider) {
  $provider->authorize();
}

// the login function above doesn't
// care which provider we're using...


// are interfaces and abstract classes
// interchangeable – in some cases, yes,
// but this is not the right way to use them


interface Provider {
  public function getAuthorizationUrl();
}


// an abstract class cannot be
// instantiated on its own

abstract class AbstractProvider {
  abstract protected getAuthorizationUrl();
}

// we must create a sub class
// and leverage inheritance

class FacebookProvider extends AbstractProvider {
  protected function getAuthorizationUrl() {
    return 'Facebook URL goes here';
  }
}
class TwitterProvider extends AbstractProvider {
  protected function getAuthorizationUrl() {
    return 'Twitter URL goes here';
  }
}