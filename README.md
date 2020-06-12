# Backend usando TypeORM e Banco de Dados Sql Server

Passos para utilizar o projeto:

1. Criar um container do Sql Server

`docker run -e 'ACCEPT_EULA=Y' -e 'SA_PASSWORD=yourStrong(!)Password' -p 1433:1433 -d mcr.microsoft.com/mssql/2019-CU4-ubuntu-16.04`

2. Conectar ao banco e criar a database 

3. Clonar o projeto

4. Instalar as dependencias com o comando:
`yarn`

5. Iniciar o servidor de desenvolvimento: 
`yarn dev:server`

## Rotas 
1. [POST, GET] http://localhost:3333/cliente  
   [PATCH, DELETE] http://localhost:3333/cliente/:id
* A rota POST recebe um array em formato JSON de clientes com dois arrays dentro, o de endereços e de telefones referentes ao cliente.
* A rota GET retorna um array em formato JSON com todos os clientes, seus enderecos e telefones.
* As rotas PATCH e DELETE recebem um parametro na rota, o :id referente ao identificador do cliente a ser editado ou deletado.

### exemplo de requisicão POST
```
[	
 {
	 "nome": "teste4",
	 "endereco": [
	    {
				"logradouro":"AVENIDA VICENTE MACHADO",
				"numero":258,
				"bairro":"CENTRO",
				"cidade":"PONTA GROSSA",
				"estado":"PR"
			},
		 {
				"logradouro":"CARLOS CAVALCANTI",
				"numero":100,
				"bairro":"UVARANAS",
				"cidade":"PONTA GROSSA",
				"estado":"PR"
			}
	 ], 
	 "telefone": [
			{
				"numero":"8888888888"
			},
		 {
				"numero":"9999999999"
			}
	 ]
 }
]
```

### exemplo de requisicão PATCH

```
{
"nome": "novo nome"
}
```


2. [POST] http://localhost:3333/endereco 
   [PATCH, DELETE] http://localhost:3333/endereco/:id
* A rota POST recebe um JSON com o as propriedades do endereço e o identificador do cliente.
* A rota PATCH recebe um identificador, :id, como parâmetro na rota e um JSON com as novas propriedades do endereço a ser editado.
* A rota DELETE recebe um parametro na rota, o :id referente ao identificador do endereço a ser deletado.

### exemplo de requisicão POST

```
{
	"logradouro": "CARLOS CAVALCANTI",
	"numero": 100,
	"bairro": "UVARANAS",
	"cidade": "PONTA GROSSA",
	"estado": "PR",
	"cliente_id": 1
}
```

### exemplo de requisicão PATCH

```
{
	"logradouro": "NOVO ENDERECO",
	"numero": 100,
	"bairro": "UVARANAS",
	"cidade": "PONTA GROSSA",
	"estado": "PR",
	"cliente_id": 1
}
```

3. [POST] http://localhost:3333/telefone
   [PATCH, DELETE] http://localhost:3333/telefone/:id
* A rota POST recebe um JSON com o as propriedades do telefone e o identificador do cliente.
* A rota PATCH recebe um identificador, :id, como parâmetro na rota e um JSON com as novas propriedades do telefone a ser editado.
* A rota DELETE recebe um parâmetro na rota, o :id referente ao identificador do telefone a ser deletado.

### exemplo de requisicão POST

```
{
  "numero": "99999999999",
  "cliente_id": 1
}
```

### exemplo de requisicão PATCH

```
{
   "numero": "88888888888",
   "cliente_id": 1
}
```
