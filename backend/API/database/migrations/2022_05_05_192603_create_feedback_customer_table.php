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
        Schema::create('tb_feedback_customer', function (Blueprint $table) {
            $table->integer('id_feedback')->unsigned();
            $table->integer('id_user')->unsigned();
            $table->integer('id_customer')->unsigned();
            
            $table->foreign('id_feedback')->references('id')->on('tb_feedback');
            $table->foreign('id_user')->references('id')->on('tb_user');
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
        Schema::dropIfExists('tb_feedback_customer');
    }
};
