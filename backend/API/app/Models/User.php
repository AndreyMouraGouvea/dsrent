<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    public $timestamps = false;
    
    protected $table = 'tb_user';

    protected $fillable = ['id', 'nm_user', 'ds_email', 'ds_password', 'ds_photo'];
}
