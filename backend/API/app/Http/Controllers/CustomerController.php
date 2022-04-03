<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Customer;

class CustomerController extends Controller
{
    public function getAllCustomers(){
        //lista todos os customers
        $customers = Customer::get()->toJson(JSON_PRETTY_PRINT);
        return response($customers, 200);
    }

    public function createCustomer(Request $request){
        //criar um customer
        $customer = new Customer;
        $customer->nm_customer  =   $request->nm_customer;
        $customer->ds_email     =   $request->ds_email;
        $customer->nr_telefone  =   $request->nr_telefone;
        $customer->ds_local     =   $request->ds_local;
        $customer->nm_city      =   $request->nm_city;
        $customer->uf_state     =   $request->uf_state;
        $customer->ds_servico   =   $request->ds_servico;
        $customer->id_user      =   $request->id_user;
        $customer->save();

        return response()->json([
            "message" => "Customer criado com sucesso!"
        ], 201);
    }

    public function getCustomer($id){
        //pega customer pelo id
        if(Customer::where('id_customer', $id)->exists()){
            $customer = Customer::where('id_customer', $id)->get()->toJson(JSON_PRETTY_PRINT);
            return response($customer, 200);
        } 
        else{
            return response()->json([
                "message" => "Falha ao buscar Customer"
            ], 404);
        }
    }

    public function updateCustomer(Request $request, $id){
        //atualizar dados do customer
        if(Customer::where('id_customer', $id)->exists()){
            $customer = Customer::find($id);
            $customer->nm_customer  =       is_null($request->nm_customer)  ?   $request->nm_customer : $request->nm_customer;
            $customer->ds_email     =       is_null($request->ds_email)     ?   $request->ds_email    : $request->ds_email;
            $customer->nr_telefone  =       is_null($request->nr_telefone)  ?   $request->nr_telefone : $request->nr_telefone;
            $customer->ds_local     =       is_null($request->ds_local)     ?   $request->ds_local    : $request->ds_local;
            $customer->nm_city      =       is_null($request->nm_city)      ?   $request->nm_city     : $request->nm_city;
            $customer->uf_state     =       is_null($request->uf_state)     ?   $request->uf_state    : $request->uf_state;
            $customer->ds_servico   =       is_null($request->ds_servico)   ?   $request->ds_servico  : $request->ds_servico;
            $customer->id_user      =       is_null($request->id_user)      ?   $request->id_user     : $request->id_user;
            $customer->save();

            return response()->json([
                "message" => "Dados atualizados com sucesso!"
            ], 200);
        }
        else{
            return response()->json([
                "message" => "Falha ao encontrar Customer"
            ], 404);
        }
    }

    public function deleteCustomer($id){
        //apaga customer
    }
}
