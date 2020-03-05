<?php

namespace Tests\Unit;

use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

class UsersTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function user_can_have_team() {
        $user = factory('App\User')->create();

        $user->team()->create(['name' => 'Acme Co.']);

        $this->assertEquals('Acme Co.', $user->team->name);
    }
}
