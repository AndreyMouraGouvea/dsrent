<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400"></a></p>

<p align="center">
<a href="https://travis-ci.org/laravel/framework"><img src="https://travis-ci.org/laravel/framework.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>

## API LogoAli

A API do LogoALi é feita em PHP com a framework Laravel. É projetada no
modelo RESTful.
O banco de dados foi modelado em MySQL.

## DOCUMENTAÇÃO

### Customers

- Listar todos os customers: (GET)
http://localhost:8000/api/customer

- Encontrar algum customer pelo ID: (GET)
http://localhost:8000/api/customer/(id do customer)

- Criar um novo customer: (POST)
http://localhost:8000/api/customer
(dados a serem enviados: nm_customer, ds_email, nr_telefone, ds_local, nm_city,
uf_state, ds_servico, id_user)

- Alterar dados de algum customer: (PUT)
http://localhost:8000/api/customer/(id do customer)
(dados que podem ser alterados: nm_customer, ds_email, nr_telefone, ds_local, nm_city,
uf_state, ds_servico, id_user)

- Deletar algum customer: (DELETE)
http://localhost:8000/api/customer/(id do customer)

## EM BREVE

Logo traremos mais atualizações na nossa API. Haverá várias outras ferramentas e muitas oportunidades!

## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
