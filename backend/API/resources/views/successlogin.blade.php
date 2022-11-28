@extends('index')
@section('content')

@if(isset(Auth::user()->ds_email))
    <h3>Bem-vindo {{ Auth::user()->ds_email }}</h3>
    <a href="/login/logout">Sair</a>
else
    <script>window.location = "/login";</script>
@endif

@stop