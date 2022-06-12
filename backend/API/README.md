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
http://localhost:8000/api/customer/ + (id do customer)

- Criar um novo customer: (POST)
http://localhost:8000/api/customer
(dados a serem enviados: nm_customer, ds_email, nr_telefone, ds_local, nm_city,
uf_state, ds_servico, id_user)

- Alterar dados de algum customer: (PUT)
http://localhost:8000/api/customer/ + (id do customer)
(dados que podem ser alterados: nm_customer, ds_email, nr_telefone, ds_local, nm_city,
uf_state, ds_servico, id_user)

- Deletar algum customer: (DELETE)
http://localhost:8000/api/customer/ + (id do customer)

### Users

- Listar todos os users: (GET)
http://localhost:8000/api/user

- Encontrar algum user pelo ID: (GET)
http://localhost:8000/api/user/ + (id do user)

- Criar um novo user: (POST)
http://localhost:8000/api/user
(dados a serem enviados: nm_user, ds_email, ds_password, ds_foto)

- Alterar dados de algum user: (PUT)
http://localhost:8000/api/user/ + (id do user)
(dados que podem ser alterados: nm_user, ds_email, ds_password, ds_foto)

- Deletar algum user: (DELETE)
http://localhost:8000/api/user/ + (id do user)

### Feedbacks

- Retornar todos os feedbacks relacionados ao customer: (GET)
http://localhost:8000/api/feedback/customer/ + (id do customer)

- Buscar o feedback pelo id: (GET)
http://localhost:8000/api/feedback/ + (id do feedback)

- Retornar todos os feedbacks feitos pelo user: (GET)
http://localhost:8000/api/feedback/user/ + (id do user)

- Criar um novo feedback: (POST)
http://localhost:8000/api/feedback
(dados a serem enviados: nr_feedback, ds_feedback, id_user)

- Alterar dados de algum feedback: (PUT)
http://localhost:8000/api/feedback/ + (id do feedback)
(dados que podem ser alterados: nr_feedback, ds_feedback, id_user)

- Deletar algum user: (DELETE)
http://localhost:8000/api/feedback/ + (id do feedback)

## EM BREVE

Logo traremos mais atualizações na nossa API. Haverá várias outras ferramentas e muitas oportunidades!