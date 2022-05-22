<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Feedback extends Model
{
    public $timestamps = false;
    
    protected $table = 'tb_feedback';

    protected $fillable = ['id', 'nr_feedback', 'ds_feedback', 'id_user'];
}