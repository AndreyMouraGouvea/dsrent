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
        Schema::create('tb_customer', function (Blueprint $table) {
            $table->increments('id');
            $table->string('nm_customer', 255);
            $table->string('ds_email', 255);
            $table->string('nr_telefone', 15);
            $table->integer('ds_lat');
            $table->integer('ds_long');
            $table->string('nm_city');
            $table->char('uf_state', 2);
            $table->string('ds_servico', 255);
            $table->boolean('cd_status');
            $table->text('ds_photo');
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
        Schema::dropIfExists('tb_customer');
    }
};
