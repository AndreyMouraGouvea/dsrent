<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class PhotoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('tb_photo')->insert([
            'nm_photo' => Str::random(100),
            'ds_url' => Str::random(50),
            'id_customer' => rand(1, 3),
        ]);
    }
}
