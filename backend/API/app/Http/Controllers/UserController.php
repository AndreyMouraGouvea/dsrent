<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;

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
        $users->ds_password     =   MD5($request->ds_password);

        $uploadFolder = 'img/api-img'; //pasta
        $image = $request->image; //arquivo

        $extension = $image->extension();
        $name = md5($request->filename . strtotime("now")) . '.' . $extension;//md5($image->image->getClientOriginalName() . strtotime("now")) . '.' . $extension;

        $request->image->move(public_path('img/api-img'), $name);
        //$image_uploaded_path = $image->public_path('img/api-img'); //caminho

        $path = url($uploadFolder . "/" . $name); //caminho que fica salvo no banco
        //$name = basename($image_uploaded_path); //nome do arquivo

        $users->ds_photo     =   $path; // salva caminho no banco

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

            //Test
            if($request->hasfile('image')){
                $uploadFolder = 'img/api-img'; //pasta
                $image = $request->image; //arquivo

                $extension = $image->getClientOriginalExtension();
                $name = md5($request->filename . strtotime("now")) . '.' . $extension;//md5($image->image->getClientOriginalName() . strtotime("now")) . '.' . $extension;

                $request->image->move(public_path('img/api-img'), $name);
                //$image_uploaded_path = $image->public_path('img/api-img'); //caminho

                $path = url($uploadFolder . "/" . $name); //caminho que fica salvo no banco
                //$name = basename($image_uploaded_path); //nome do arquivo

                $users->ds_foto         =       is_null($request->ds_foto)          ?   $users->ds_foto         : $path;
            }

            //Fim Teste

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

    /* -------------------- Login User ------------------------------ */
    public function index(){
        return view('login');
    }
    public function checklogin(Request $request){
        $this->validate($request, [
            'nm_user'     => 'required',
            'ds_email'    => 'required',
            'ds_password' => 'required'
        ],
        [
            'nm_user.required'      => 'Nome é obrigatório',
            'ds_email.required'     => 'E-mail é obrigatório',
            'ds_password.required'  => 'Senha é obrigatória'
        ]);

        $user_data = array(
            'nm_user'       => $request->get('nm_user'),
            'ds_email'      => $request->get('ds_email'),
            'ds_password'   => md5($request->get('ds_password'))
        );

        if(Auth::attempt($user_data)){
            dd('logou');
        }else{
            return redirect()->back()->with('error', 'Dados de login errados!');
        }
    }
    public function successlogin(){
        return view('successlogin');
    }
    public function logout(){
        Auth::logout();
        return redirect('/login');
    }
}