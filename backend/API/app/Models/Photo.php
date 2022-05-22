<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Photo extends Model
{
    public $timestamps = false;
    
    protected $table = 'tb_photo';

    protected $fillable = ['id', 'nm_photo', 'ds_url', 'id_customer'];
}