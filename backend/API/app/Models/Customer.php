<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    public $timestamps = false;
    
    protected $table = 'tb_customer';

    protected $fillable = ['id_customer', 'nm_customer', 'ds_email', 'nr_telefone', 'ds_local', 'nm_city', 'uf_state', 'ds_servico', 'cd_status', 'id_user'];
}
