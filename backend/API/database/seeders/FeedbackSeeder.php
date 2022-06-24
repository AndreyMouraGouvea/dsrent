<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class FeedbackSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('tb_feedback')->insert([
            'nr_feedback' => rand(1, 9),
            'ds_feedback' => Str::random(100),
            'id_user' => rand(1, 3),
        ]);
    }
}
