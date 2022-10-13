<!DOCTYPE html>
<html>
<head>
    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-L3QREZVY0L"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-L3QREZVY0L');
    </script>
    
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="description" content="C'Here - O melhor do país na palma da sua mão! Encontre os melhores eventos próximos de você.">
    <meta name="keywords" content="Chere, C'Here, Eventos, Evento, Turismo, Shows, Festa, Região, Feiras">
    <meta name="author" content="Desenvolvedores C'Here">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>C'Here</title>

    <link rel="stylesheet" href="{{ asset('./css/style.css') }}">
    <link rel="icon" type="image/x-icon" href="{{ asset('img/favicon.ico') }}">
</head>
<body>
    <header class="header">
        <div class="options">
            <button class="menu" id="menu" onclick="openMenu()">
                <div class="bar1"></div>
                <div class="bar2"></div>
                <div class="bar1"></div>
            </button>
        </div>        
        <h3>C'Here</h3>

        <div class="perfil">
            
        </div>
    </header>

    <section class="menuLateral" id="menuLateral">
        <div class="header">
            <button id="close" onclick="closeMenu()">X</button>
        </div>
        <div class="options">
            <a href="#welcome">Home</a>
            <a href="#pesquisa">Pesquisa</a>
            <a href="#sobre">Sobre nós</a>
        </div>
    </section>

    <section class="content">
        <div class="welcome" id="welcome">
            <div class="info">
                <h3>O melhor do país<br>na palma da sua mão!</h3>
                <p>Um APP para te deixar por dentro de todos os eventos próximos de você!</p>
            </div>
            <div class="smartphone">
                <img src="{{ asset('img/celular-min.png') }}" alt="">
            </div>
        </div>

        <div class="formArea" id="pesquisa">
            <h3>Pesquisa sobre relevância</h3>
            <p>Nosso projeto está em fase de desenvolvimento.<br>Com o intuito de oferecermos um APP com 
                um melhor desempenho, nós da C'Here pedimos que você responda este formulário com algumas 
                perguntas simples que são de grande importância para nós.<br>Agradecemos sua compreensão!
            </p>
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfxgGRXHGIg6_z6rRkIXSpKCLe0OlAyv2M9NJN-UjVBBDyrLQ/viewform?embedded=true" frameborder="0" marginheight="0" marginwidth="0">Carregando…</iframe>
        </div>

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
        
    </section>

    <footer>

    </footer>
    
    <script src="{{ asset('./js/script.js') }}"></script>
</body>
</html>