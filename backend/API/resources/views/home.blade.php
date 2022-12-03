@extends('index')
@section('content')
<div class="welcome" id="welcome">
    <div class="info">
        <h3>O melhor do país<br>na palma da sua mão!</h3>
        <p>Um APP para te deixar por dentro de todos os eventos próximos de você!</p>
        <a href="./mapa" class="git"><img align="center" height="30" width="30" src="{{ asset('img/marker.png') }}"> Veja o melhor próximo de você</a>
        <a href="https://github.com/AndreyMouraGouvea/dsrent" target="_blank" class="git"><img align="center" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg"> Acessar GitHub</a>
    </div>
    <div class="smartphone">
        <img src="{{ asset('img/celular-min.png') }}" alt="">
    </div>
</div>

@stop