@extends('index')
@section('content')

<div class="sobre" id="sobre">
    <h3>Sobre o C'Here</h3>
    <div class="dados">
        <div class="img">
            <img src="{{ asset('./img/logo-min.png') }}" alt="">
        </div>

        <p>A ideia do projeto surgiu no final de 2021, quando a pandemia da COVID-19 estava chegando ao fim.
            Neste período, percebemos que as pessoas estavam ansiosas para saírem de casa para se divertirem, assim como faziam antes do período pandêmico. 
            <br><br>
            Muitos eventos foram criados, sendo eles focados em músicas, tecnologias, comidas e muito mais, com o objetivo de atrair pessoas com interesses em comum.
            Porém, muitos deles tiveram poucos resultados. A maioria das pessoas não tinham ouvido falar deles e nem tiveram informações sobre tais eventos.
            <br><br>
            Com o intuito de solucionar essa falta de divulgação e de informação, surgiu a ideia de criar o C'Here, um aplicativo capaz de reunir informações de vários eventos 
            próximos ao usuário.
        </p>
    </div>
</div>

@stop