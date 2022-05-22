<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{
    public function getAllUsers() {
        //lista todos os users
        $users = User::get()->toJson(JSON_PRETTY_PRINT);
        return response($users, 200);
    }
  
    public function createUser(Request $request) {
        //cria um user
        $users = new User;
        $users->nm_user         =   $request->nm_user;
        $users->ds_email        =   $request->ds_email;
        $users->ds_password     =   $request->ds_password;
        $users->ds_foto         =   $request->ds_foto;
        $users->save();

        return response()->json([
            "message" => "User criado com sucesso!"
        ], 201);
    }
  
    public function getUser($id) {
        //pega um user pelo id
        if(User::where('id', $id)->exists()){
            $users = User::where('id', $id)->get()->toJson(JSON_PRETTY_PRINT);
            return response($users, 200);
        } 
        else{
            return response()->json([
                "message" => "Falha ao buscar User"
            ], 404);
        }
    }
  
    public function updateUser(Request $request, $id) {
        //atualiza dados de um user pelo id
        if(User::where('id', $id)->exists()){
            $users = User::find($id);
            $users->nm_user         =       is_null($request->nm_user)          ?   $users->nm_user         : $request->nm_user;
            $users->ds_email        =       is_null($request->ds_email)         ?   $users->ds_email        : $request->ds_email;
            $users->ds_password     =       is_null($request->ds_password)      ?   $users->ds_password     : $request->ds_password;
            $users->ds_foto         =       is_null($request->ds_foto)          ?   $users->ds_foto         : $request->ds_foto;
            $users->save();

            return response()->json([
                "message" => "Dados atualizados com sucesso!"
            ], 200);
        }
        else{
            return response()->json([
                "message" => "Falha ao encontrar User"
            ], 404);
        }
    }
  
    public function deleteUser ($id) {
        //apaga um user pelo id
        if(User::where('id', $id)->exists()){
            $users = User::find($id);
            $users->delete();

            return response()->json([
                "message" => "User apagado com sucesso!"
            ], 404);
        }
        else{
            return response()->json([
                "message" => "Falha ao encontrar User"
            ], 404);
        }
    }
}