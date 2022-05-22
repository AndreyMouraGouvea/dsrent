<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tb_category_user', function (Blueprint $table) {
            $table->integer('id_category');
            $table->integer('id_user');
            
            $table->foreign('id_category')->references('id')->on('tb_category');
            $table->foreign('id_user')->references('id')->on('tb_user');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tb_category_user');
    }
};
