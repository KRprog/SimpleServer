# Server 

É um servidor simples com alguns endpoints protegidos por
autenticação JWT.

Como por para funcionar:

 * É necessário ter o NodeJS instalado na máquina, que pode ser adquirido no link: https://nodejs.org/en/download/
 * Faça a instalação do NodeJS.
 * Faça um git clone ou o download desse repositório.
 * Abra um terminal/cmd e vá até a pasta criada no processo anterior.
 * Execute o comando npm install, para instalar as dependencias .
 * E por último execute o comando **node index.js**

Uma vez executado os passos anteriores, abra um navegador e entre com as seguintes urls e verifique os resultados:

* http:localhost:5000/
* http:localhost:5000/json
* http:localhost:5000/authenticate?user=testepassword=123456
* http:localhost:5000//api/protected?token=(token gerado na autenticação)
* http:localhost:5000/api/users?token=(token gerado na autenticação)

Em todos os exemplos anteriores e possível usar o o ip atual da máquina no lugar do localhost,
deve se apenas manter a mesma porta, nesse caso a porta 5000.

Ex.
* http://192.168.0.100:5000/json

Assim se torna possível acessar esse servidor na sua rede local de qualquer dispositivo quee steja ana mesma rede.
Seja um outro computaodor,celular, maquina virtual ou até mesmo um emuladordo android.