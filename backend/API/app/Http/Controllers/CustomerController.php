<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Customer;
use Illuminate\Support\Facades\Storage;

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
        $customer->ds_lat       =   $request->ds_lat;
        $customer->ds_long      =   $request->ds_long;
        $customer->nm_city      =   $request->nm_city;
        $customer->uf_state     =   $request->uf_state;
        $customer->cd_status    =   $request->cd_status;
        $customer->ds_servico   =   $request->ds_servico;

        $uploadFolder = 'img/api-img'; //pasta
        $image = $request->image; //arquivo

        $extension = $image->extension();
        $name = md5($request->filename . strtotime("now")) . '.' . $extension;//md5($image->image->getClientOriginalName() . strtotime("now")) . '.' . $extension;

        $request->image->move(public_path('img/api-img'), $name);
        //$image_uploaded_path = $image->public_path('img/api-img'); //caminho

        $path = url($uploadFolder . "/" . $name); //caminho que fica salvo no banco
        //$name = basename($image_uploaded_path); //nome do arquivo

        $customer->ds_photo     =   $path; // salva caminho no banco
        $customer->id_user      =   $request->id_user;

        $customer->save();

        return response()->json([
            "message" => "Customer criado com sucesso!"
        ], 201);
    }

    public function getCustomer($id){
        //pega customer pelo id
        if(Customer::where('id', $id)->exists()){
            $customer = Customer::where('id', $id)->get()->toJson(JSON_PRETTY_PRINT);
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
        if(Customer::where('id', $id)->exists()){
            $customer = Customer::find($id);
            $customer->nm_customer  =       is_null($request->nm_customer)  ?   $customer->nm_customer : $request->nm_customer;
            $customer->ds_email     =       is_null($request->ds_email)     ?   $customer->ds_email    : $request->ds_email;
            $customer->nr_telefone  =       is_null($request->nr_telefone)  ?   $customer->nr_telefone : $request->nr_telefone;
            $customer->ds_lat       =       is_null($request->ds_lat)       ?   $customer->ds_lat      : $request->ds_lat;
            $customer->ds_long      =       is_null($request->ds_long)      ?   $customer->ds_long     : $request->ds_long;
            $customer->nm_city      =       is_null($request->nm_city)      ?   $customer->nm_city     : $request->nm_city;
            $customer->uf_state     =       is_null($request->uf_state)     ?   $customer->uf_state    : $request->uf_state;
            $customer->ds_servico   =       is_null($request->ds_servico)   ?   $customer->ds_servico  : $request->ds_servico;
            $customer->cd_status    =       is_null($request->cd_status)    ?   $customer->cd_status   : $request->cd_status;
            $customer->id_user      =       is_null($request->id_user)      ?   $customer->id_user     : $request->id_user;
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
        if(Customer::where('id', $id)->exists()){
            $customer = Customer::find($id);
            $customer->delete();

            return response()->json([
                "message" => "Customer apagado com sucesso!"
            ], 404);
        }
        else{
            return response()->json([
                "message" => "Falha ao encontrar customer"
            ], 404);
        }
    }
}

