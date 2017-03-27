# Server

� servidor simples com alguns endpoints protegidos por um
token JWT para usu�rio.

Como por para funcionar:

 * � necess�rio ter o NodeJS instalado na m�quina, que pode ser aquirido no link: https://nodejs.org/en/download/
 * Fa�a a instala��o do NodeJS
 * Fa�a o git clone ou o download desse reposit�rio
 * Abra um terminal/cmd e va at� a pasta criada no processo anterior
 * Execute o comando npm install, para instalar as dependencias 
 * E por �ltimo execute o comando **node index.js**

Uma vez executado os passos anteriores, abra um navegador e entre com as seguintes urls, e verifique os resultados:

* http:localhost:5000/
* http:localhost:5000/json
* http:localhost:5000/authenticate?user=testepassword=123456
* http:localhost:5000//api/protected?token=(token gerado na autentica��o)
* http:localhost:5000/api/users?token=(token gerado na autentica��o)

Em todos os exemplos anteriores e poss�vel usar o o ip atual da m�quina no lugar do localhost,
deve se apenas manter a mesma porta, nesse caso a porta 5000.

Ex.
* http://192.168.0.100:5000/json

Assim se torna poss�vel acessar esse servidor na sua rede local de qualquer dispositivo quee steja ana mesma rede.
Seja um outro computaodor,celular, maquina virtual ou at� mesmo um emuladordo android.