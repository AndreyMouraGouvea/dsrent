<?php

    namespace App\Models;

    use CodeIgniter\Model;

    class CustomerModel extends Model{
        protected $table = 'tb_customer';
        protected $primaryKey = 'id_customer';
        protected $allowedFields = ['nm_customer', 'ds_email', 'nr_telefone', 'ds_local', 'nm_city', 'uf_state', 'ds_servico', 'cd_status', 'id_user'];
        protected $validationRules = [
            'nm_customer' => 'required|min_length[3]',
            'ds_email'    => 'required|min_length[10]|is_unique[tb_customer.ds_email]',
            'nr_telefone' => 'required|min_length[8]',
            'ds_local'    => 'required|min_length[6]',
            'nm_city'     => 'required|min_length[2]',
            'uf_state'    => 'required|min_length[2]',
            'ds_servico'  => 'min_length[5]'
        ];
    } 
?>