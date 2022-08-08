# Desafio -­ Lógica de Programação (Robô da Mercado Radar Space Agency).

### Enuciado: [me leve lá](#ancora1)

# Tecnologias utilizadas 
![JavaScript Badge]( https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)![Heroku Badge](https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white)	![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)

Para executar o projeto, efetive o download [clique aqui!](https://github.com/MarcelinoGarcia-NA/DesafioRoboMercadoRadar/archive/refs/heads/main.zip) , basta descompactar o projeto e abrir no navegador o arquivo "index.html",
uma vez que o projeto é desenvolvido em HTML, CSS e JavaScript "puro", ou seja nenhuma biblioteca ou framework foram utilizadas neste desafio.

Esta disponível o deploy do projeto na plataforma Heroku:

acesso: https://robot-mercado-radar.herokuapp.com/

Imagens do desafio!

![Screenshot_3](https://user-images.githubusercontent.com/64509713/183326436-83bac8c3-4b3b-43cb-b677-47dfdcb3046b.png)
(Tela inicial).

![Screenshot_4](https://user-images.githubusercontent.com/64509713/183326442-bcbf37ff-fc52-4c38-b580-ba307aece9f8.png)
(Tela apresentando a posição do Robô).

![Screenshot_5](https://user-images.githubusercontent.com/64509713/183326447-0540e173-5898-4a1d-a7b2-012aaceec829.png)
(Tela apresentando a mensagem, o robô não pode se movimentar para fora do terreno).

# Testes:
### MML----> retorno (0,2,W);
### RRM----> retorno (Comando inválido, com este comando o robô irá para fora do terreno!);
### MMMLMR------> retorno(0,1,W);
### CCC-----> retorno(Comando Inválido!);

<a id="ancora1"></a>
## Enunciado 

Desafio -­ Lógica de Programação (Frontend Junior)
 
Objetivo
 
O objetivo desse desafio é demonstrar seu conhecimento e seu raciocínio na resolução de um problema relacionado à lógica de programação, assim saberemos como você pensa e como resolve problemas na vida real.
 
O Problema
 
Um robô deve ser colocado pela MRSA (Mercado Radar Space Agency) para explorar um terreno em Marte.
 
Esse terreno, retangular, precisa ser navegado pelo robô de tal forma que suas câmeras acopladas possam obter uma visão completa da região, enviando essas imagens novamente para o QG da Mercado Radar.
 
A posição do robô é representada pela combinação de coordenadas cartesianas (x, y) e por uma letra, que pode representar uma das quatro orientações: NORTH, SOUTH, EAST e WEST.
 
Para simplificar a navegação, a região “marciana” a ser explorada foi subdividida em sub-regiões retangulares.
 
Uma posição válida do robô, seria (0, 0, N), que significa que o robô está posicionado no canto esquerdo inferior do terreno, voltado para o Norte.
Para controlar o robô, a MRSA envia uma string simples, que pode conter as letras ‘L’, ‘R’ e ‘M’. As letras ‘L’ e ‘R’ fazem o robô rotacionar em seu próprio eixo 90 graus para esquerda ou para direita, respectivamente, sem se mover da sua posição atual. A letra ‘M’ faz o robô deslocar-­se uma posição para frente.
Assuma que o robô se movimenta para o NORTE em relação ao eixo y. Ou seja, um passo para o NORTE da posição (x, y), é a posição (x, y+1)
 
Exemplo: Se o robô está na posição (0, 0, N), o comando "MML" fará ele chegar na posição (0,2,W)
 
Requisitos do desafio
 
O terreno deverá ser iniciado com 5x5 posições;
O robô inicia na coordenada (0, 0, N);
Todos os comandos enviados ao robô devem retornar a posição dele (Posição após a execução do comando);
O robô não pode se movimentar para fora da área especificada;
Não é necessário guardar o estado do robô;
 
Objetivo Final
 
Escreva um programa que permita aos engenheiros da MRSA enviar comandos para o robô e saber onde ele se encontra. Os engenheiros irão rodar testes no seu software para garantir que ele se comporta da forma esperada, antes de enviar o robô para Marte.
 
Requisitos técnicos
 
O desafio deve ser entregue escrito em qualquer linguagem de programação;
Não deverá ser utilizada qualquer biblioteca de terceiros;

### Dicas e sujestões! Vamos conversar, desta forma irei evoluir! 
[![Linkedin Badge](https://img.shields.io/badge/-Marcelino%20Garcia-6633cc?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/marcelino-garcia-2a1309219/)](https://www.linkedin.com/in/marcelino-garcia-2a1309219/) 
[![Gmail Badge](https://img.shields.io/badge/-marcelino.garcia@novaandradina.org-6633cc?style=flat-square&logo=Gmail&logoColor=white&link=mailto:marcelino.garcia@novaandradina.org)](mailto:marcelino.garcia@novaandradina.org)
[![Instagram Badge](https://img.shields.io/badge/-marcelinovitorgarcia-6633cc?style=flat-square&logo=Instagram&logoColor=white&link=https://www.instagram.com/marcelinovitorgarcia/)](https://www.instagram.com/marcelinovitorgarcia/)

