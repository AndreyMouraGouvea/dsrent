<!DOCTYPE html>
<html>
<head>
    <!-- Google tag (gtag.js) -->
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9655257847798443"
     crossorigin="anonymous"></script>
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-L3QREZVY0L"></script>
    <script>
       window.dataLayer = window.dataLayer || [];
       function gtag(){dataLayer.push(arguments);}
       gtag('js', new Date());

       gtag('config', 'G-L3QREZVY0L');
    </script>
    
    
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta charset="utf-8">
    <meta name="description" content="C'Here - O melhor do país na palma da sua mão! Encontre os melhores eventos próximos de você.">
    <meta name="keywords" content="Chere, C'Here, Eventos, Evento, Turismo, Shows, Festa, Região, Feiras">
    <meta name="author" content="Desenvolvedores C'Here">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>C'Here</title>

    <link rel="stylesheet" href="{{ asset('./css/style.css') }}">
    <link rel="icon" type="image/x-icon" href="{{ asset('img/favicon.ico') }}">

    <script src="{{ asset('./js/map.js') }}"></script>
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
            <a href="./login">Entrar</a>
        </div>
    </header>

    <section class="menuLateral" id="menuLateral">
        <div class="header">
            <button id="close" onclick="closeMenu()">X</button>
        </div>
        <div class="options">
            <a href="./">Home</a>
            <a href="./mapa">Mapa</a>
            <a href="./pesquisa">Pesquisa</a>
            <a href="./sobre">Sobre nós</a>
        </div>
    </section>

    <section class="content">
        @yield('content') 
    </section>

    <footer>

    </footer>
    
    <script src="{{ asset('./js/script.js') }}"></script>
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDOnGi0UkfIpP1ofZuurWV3r1ggqCJpd28&callback=initMap"></script>
    
</body>
</html>