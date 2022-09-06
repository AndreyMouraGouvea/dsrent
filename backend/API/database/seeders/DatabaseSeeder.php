<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\Customer;
use App\Models\Photo;
use App\Models\Feedback;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        //for($i = 0; $i < 5; $i++){
            $this->call([
                UserSeeder::class,
                CustomerSeeder::class,
                PhotoSeeder::class,
                FeedbackSeeder::class,
                // ProductsTableSeeder::class,
            ]);
        //}
        
    }
}
