@extends('index')
@section('content')

<div class="perfil">
    <div class="img">
        <img src="{{ asset('img/profile.png') }}">
    </div>

    <div class="dados">
        <label for="nm_user">Nome</label>
        <input type="text" name="nm_user" id="nm_user" value="{{ session()->get('username') }}" readonly="readonly">

        <label for="ds_email">Email</label>
        <input type="email" name="ds_email" id="ds_email" value="{{ session()->get('email') }}" readonly="readonly">

        <a href="{{ route('exit') }}" class="botao">Sair</a>
    </div>

</div>

@stop