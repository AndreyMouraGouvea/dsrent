@extends('index')
@section('content')

<div class="login">
    @if(session('error'))
        <div class="alert">
            {{ session('error') }}
        </div>
    @endif

    <form methods="post" action="/login/checklogin" class="form">
        @csrf
        <h3>Login</h3>
        <div class="campos">
            <label for="nm_user">Nome</label>
            <input type="text" name="nm_user" id="nm_user" pattern="[^'\x22]+" required placeholder="Informe seu nome">

            <label for="ds_email">Email</label>
            <input type="email" name="ds_email" id="ds_email" required placeholder="Informe seu e-mail">

            <label for="ds_password">Senha</label>
            <input type="password" name="ds_password" id="ds_password" pattern="[^'\x22]+" required placeholder="Informe sua senha">
        </div>
        <div class="enviar">
            <input type="submit" class="botao">
        </div>
    </form>
</div>

@stop