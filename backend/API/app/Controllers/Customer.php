<?php

    namespace App\Controllers;

    use CodeIgniter\RESTful\ResourceController;
    use Exception;

    class Customer extends ResourceController{
        private $customerModel;
        private $token = '123abc';

        public function __construct()
        {
            $this->customerModel = new \App\Models\CustomerModel();
        }

        private function _validateToken()
        {
            return $this->request->getHeaderLine('token') == $this->token;
        }

        //retorna todos os customers (GET)
        public function list()
        {
            $data = $this->customerModel->findAll();

            return $this->response->setJSON($data);
        }

        //adiciona customer (POST)
        public function create()
        {
            $response = [];

            //validar o token
            /*if($this->_validateToken() == true){*/
                //pega os dados para salvar
                $newCustomer['nm_customer'] = $this->request->getPost('nome');
                $newCustomer['ds_email'] = $this->request->getPost('email');
                $newCustomer['nr_telefone'] = $this->request->getPost('telefone');
                $newCustomer['ds_local'] = $this->request->getPost('local');
                $newCustomer['nm_city'] = $this->request->getPost('city');
                $newCustomer['uf_state'] = $this->request->getPost('state');
                $newCustomer['ds_servico'] = $this->request->getPost('servico');
                $newCustomer['cd_status'] = $this->request->getPost('status');
                $newCustomer['id_user'] = $this->request->getPost('id_user');

                try{
                    if($this->customerModel->insert($newCustomer)){
                        //SE FUNCIONAR A INSERÇÃO
                        $response = [
                            'response'  =>  'success',
                            'msg'       =>  'Customer cadastrado com sucesso!'
                        ];
                    }
                    else{
                        $response = [
                            'response'  =>  'error',
                            'msg'       =>  'Erro cadastrar Customer!',
                            'errors'    =>  $this->customerModel->errors()
                        ];
                    }
                }
                catch(Exception $e){
                    $response = [
                        'response'  =>  'error',
                        'msg'       =>  'Erro cadastrar Customer!',
                        'errors'    =>  [
                            'exception'     => $e->getMessage()
                        ]
                    ];
                }
            /*}
            else{
                $response = [
                    'response'  =>  'error',
                    'msg'       =>  'Token inválido',
                ];
            }*/

            return $this->response->setJSON($response);
        }
    }
?>