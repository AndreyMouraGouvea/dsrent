<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class CustomerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('tb_customer')->insert([
            'nm_customer' => Str::random(45),
            'ds_email' => Str::random(10).'@gmail.com',
            'nr_telefone' => rand(123456789, 987654321),
            'ds_lat' => '12345678',
            'ds_long' => '87654321',
            'nm_city' => Str::random(12),
            'uf_state' => Str::random(2),
            'ds_servico' => Str::random(250),
            'cd_status' => rand(0, 1),
            'ds_photo' => 'www.chere.com/exemplo1.png',
            'id_user' => 1,
        ]);
    }
}
