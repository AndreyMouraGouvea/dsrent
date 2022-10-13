<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Storage;
use App\Models\Photo;
use Illuminate\Support\Facades\DB;

class PhotoController extends Controller
{
    public function getAllPhotos($idCustomer) {
        //lista todas as fotos do customer pelo id
        if(DB::table('tb_customer')->where('id', $idCustomer)->exists()) { //se o customer existe na tb_customer
            if(Photo::where('id_customer', $idCustomer)->exists()){ //se o customer existe na tb_photo
                $photos = Photo::where('id_customer', $idCustomer)->get()->toJson(JSON_PRETTY_PRINT);
                return response($photos, 200);
            } 
            else{
                return response()->json([
                    "message" => "Falha ao buscar imagens!"
                ], 404);
            }
        }
        else{
            return response()->json([
                "message" => "Customer inexistente!"
            ], 404);
        }
    }
  
    public function uploadPhoto(Request $request) {
        //Faz upload de photos
        $photos = new Photo;
        
        if(DB::table('tb_customer')->where('id', $request->id_customer)->exists()) { //se o customer existe
            $validator = Validator::make($request->all(), [ 
                'image' => 'required|image:jpeg,png,jpg,gif,svg' //verifica a extenção do arquivo e seu tamanho máximo
            ]);
            if($validator->fails()) { //se não for imagem ou tiver uma extenção desconhecida
                return response()->json([
                    "message" => "Falha ao realizar upload!"
                ], 404);
            }

            $uploadFolder = 'img/api-img'; //pasta
            $image = $request->image; //arquivo

            $extension = $image->extension();
            $name = md5($request->filename . strtotime("now")) . '.' . $extension;//md5($image->image->getClientOriginalName() . strtotime("now")) . '.' . $extension;

            $request->image->move(public_path('img/api-img'), $name);
            //$image_uploaded_path = $image->public_path('img/api-img'); //caminho

            $path = url($uploadFolder . "/" . $name); //caminho que fica salvo no banco
            //$name = basename($image_uploaded_path); //nome do arquivo

            $photos->id_customer    =  $request->id_customer; //id do customer
            $photos->nm_photo       =  $name; //nome do arquivo  
            $photos->ds_url         =  $path; // salva caminho no banco
            
            $photos->save(); 

            return response()->json([
                "message" => "Photo enviada com sucesso!"
            ], 201);
        }
        else{
            return response()->json([
                "message" => "Customer inexistente!"
            ], 404);
        }
    }
  
    public function getPhoto($id) {
        //pega uma imagem pelo id
        if(Photo::where('id', $id)->exists()){
            $photos = Photo::where('id', $id)->get()->toJson(JSON_PRETTY_PRINT);
            return response($photos, 200);
        } 
        else{
            return response()->json([
                "message" => "Falha ao buscar imagem!"
            ], 404);
        }
    }
  
    public function updatePhoto(Request $request, $id) {
        //atualiza dados de uma imagem pelo id
        if(Photo::where('id', $id)->exists()){
            $photos = Photo::find($id);
            $photos->nm_photo       =       is_null($request->nm_photo)        ?   $photos->nm_photo       : $request->nm_photo;
            $photos->ds_url         =       is_null($request->ds_url)          ?   $photos->ds_url         : $request->ds_url;
            $photos->id_customer    =       is_null($request->id_customer)     ?   $photos->id_customer    : $request->id_customer;
            $photos->save();

            return response()->json([
                "message" => "Dados atualizados com sucesso!"
            ], 200);
        }
        else{
            return response()->json([
                "message" => "Falha ao encontrar imagem!"
            ], 404);
        }
    }
  
    public function deletePhoto ($id) {
        //apaga uma iamgem pelo id
        if(Photo::where('id', $id)->exists()){
            $photos = Photo::find($id);
            $deletePhoto = Storage::disk('public')->delete(['/img/'.$photos->nm_photo]); //apaga imagem do diretório
            $photos->delete(); //apaga dados do banco referente à imagem

            if($deletePhoto){                
                return response()->json([
                    "message" => "Imagem apagada com sucesso!"
                ], 404);
            }
            else{
                return response()->json([
                    "message" => "Falha ao apagar imagem!"
                ], 404);
            }
        }
        else{
            return response()->json([
                "message" => "Falha ao encontrar imagem!"
            ], 404);
        }
    }
}