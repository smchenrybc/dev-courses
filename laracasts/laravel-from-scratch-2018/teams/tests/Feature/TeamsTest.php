<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class TeamsTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function user_can_create_team() {
        // $this->withoutExceptionHandling();

        $this->actingAs(factory('App\User')->create());

        $attributes = ['name' => 'Acme Co.'];

        $this->post('/teams', $attributes);

        $this->assertDatabaseHas('teams', ['name' => 'Acme Co.']);
    }

    /** @test */
    public function guest_cannot_create_team() {
        // $this->withoutExceptionHandling();

        $this->post('/teams')->assertRedirect('/login');
    }
}
