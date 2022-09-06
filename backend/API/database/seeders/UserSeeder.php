<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('tb_user')->insert([
            'nm_user'       => Str::random(10),
            'ds_email'      => Str::random(10).'@gmail.com',
            'ds_password'   => Hash::make('password'),
            'ds_photo'       => 'www.chere.com/foto.png',
        ]);
    }
}
