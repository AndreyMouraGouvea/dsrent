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
        Schema::create('tb_customer_layout', function (Blueprint $table) {
            $table->increments('id');
            $table->string('cd_background', 7);
            $table->string('cd_fontColor', 7);
            $table->string('cd_backgroundSecondary', 7);
            $table->integer('id_customer');
            $table->foreign('id_customer')->references('id')->on('tb_customer');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tb_customer_layout');
    }
};
