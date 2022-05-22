<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class FeedbackCustomer extends Model
{
    public $timestamps = false;
    
    protected $table = 'tb_feedback_customer';

    protected $fillable = ['id_feedback', 'id_user', 'id_customer'];
}