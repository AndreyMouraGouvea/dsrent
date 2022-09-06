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
        Schema::create('tb_feedback', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('nr_feedback');
            $table->string('ds_feedback', 255);
            $table->integer('id_user')->unsigned();
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
        Schema::dropIfExists('tb_feedback');
    }
};
