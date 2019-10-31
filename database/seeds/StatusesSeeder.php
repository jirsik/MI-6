<?php

use Illuminate\Database\Seeder;

class StatusesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $inputs = ['Active', 'Alive', 'Arrested', 'Deceased', 'In Custody', 'Incarcerated', 'Retired', 'Unknown'];
        foreach ($inputs as $input) {
            DB::table('statuses')->insert([
                'status' => $input,
            ]);
        }
    }
}
