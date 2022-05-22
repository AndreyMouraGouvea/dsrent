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
        Schema::create('tb_sale', function (Blueprint $table) {
            $table->increments('id');
            $table->datetime('dt_sale');
            $table->decimal('vl_sale', $precision = 10, $scale = 2);
            $table->string('nm_plano', 25);            
            $table->boolean('cd_status'); 
            $table->integer('id_user');           
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
        Schema::dropIfExists('tb_sale');
    }
};
