<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\Models\Feedback;
use App\Models\FeedbackCustomer;

class FeedbackController extends Controller
{
    public function getFeedbackCustomer($id) {
        //lista todos os feedbacks por customer
        if(FeedbackCustomer::where('id_customer', $id)->exists()){
            $feedbackCustomer = FeedbackCustomer::select('id_feedback')->where('id_customer', $id)->get()->toArray();
            
            $feedback = Feedback::whereIn('id', $feedbackCustomer)->get()->toJson(JSON_PRETTY_PRINT);

            return response($feedback, 200);
        }
        else{
            return response()->json([
                "message" => "Falha ao buscar Feedback"
            ], 404);
        }
    }
    
    public function getFeedback($id){
        //pega feedback pelo id
        if(Feedback::where('id', $id)->exists()){
            $feedback = Feedback::where('id', $id)->get()->toJson(JSON_PRETTY_PRINT);
            return response($feedback, 200);
        } 
        else{
            return response()->json([
                "message" => "Falha ao buscar Feedback"
            ], 404);
        }
    }

    public function getFeedbackUser($id){
        //lista todos os feedbacks feitos pelo user
        if(Feedback::where('id_user', $id)->exists()){
            $feedback = DB::table('tb_feedback')
                        ->select('*')
                        ->where('id_user', '=', $id)           
                        ->get()->toJson(JSON_PRETTY_PRINT);
            return response($feedback, 200);
        }
        else{
            return response()->json([
                "message" => "Falha ao buscar Feedback"
            ], 404);
        }
    }

    public function createFeedback(Request $request){
        //cria um feedback na tabela tb_feedback
        $feedback = new Feedback;

        $idUser = $request->id_user;

        $feedback->nr_feedback  =   $request->nr_feedback;
        $feedback->ds_feedback  =   $request->ds_feedback;
        $feedback->id_user      =   $idUser;
        $feedback->save();

        //cria um feedback na tabela de relacionamento tb_feedback_customer
        $feedbackCustomer = new FeedbackCustomer();

        $idFeedback = $feedback->id;
        $feedbackCustomer->id_user      =   $idUser;
        $feedbackCustomer->id_customer  =   $request->id_customer;
        $feedbackCustomer->id_feedback  =   $idFeedback;

        $feedbackCustomer->save();

        return response()->json([
            "message" => "Feedback criado com sucesso!"
        ], 201);
    }

    public function updateFeedback(Request $request, $id){
        //atualiza dados do feedback
        if(Feedback::where('id', $id)->exists()){
            $feedback = Feedback::find($id);
            $feedback->nr_feedback  =       is_null($request->nr_feedback)  ?   $feedback->nr_feedback : $request->nr_feedback;
            $feedback->ds_feedback  =       is_null($request->ds_feedback)  ?   $feedback->ds_feedback : $request->ds_feedback;
            $feedback->id_user      =       is_null($request->id_user)      ?   $feedback->id_user     : $request->id_user;
            $feedback->save();

            return response()->json([
                "message" => "Dados atualizados com sucesso!"
            ], 200);
        }
        else{
            return response()->json([
                "message" => "Falha ao encontrar Feedback"
            ], 404);
        }
    }

    public function deleteFeedback ($id) {
        //apaga um feedback pelo id
        if(Feedback::where('id', $id)->exists()){
            $feedback = Feedback::find($id);

            $feedbackCustomer = FeedbackCustomer::where('id_feedback', '=', $id);

            $feedbackCustomer->delete();
            $feedback->delete();

            return response()->json([
                "message" => "Feedback apagado com sucesso!"
            ], 404);
        }
        else{
            return response()->json([
                "message" => "Falha ao encontrar Feedback"
            ], 404);
        }
    }

}