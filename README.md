# Aratech Backend Project

## Descripción del proyecto

## Instalación

Para ver y probar el resultado del código implementado se pueden seguir los siguientes pasos: 

1- Haz un fork del repositorio y clónalo en tu máquina:
```bash
https://github.com/xfortunyi/aratech-backend-project.git
```
2- Ejecuta npm install en la carpeta server para instalar las dependencias del proyecto.
```bash
cd server
npm install
```

## Ejecución
Una vez tengamos instalado las dependencias del proyecto en nuestra máquina local, podemos testear nuestro droide con el módulo de "ataque" implementado.

Para ello, utilizaremos Postman. Postman es una plataforma de API para que los desarrolladores diseñen, construyan, prueben e iteren sus API. En nuestro caso lo probaremos de la siguiente manera:

1- Tal y como muestra la imagen, lo primero que haremos es marcar la opción POST, seguido de la url donde se aloja el proyecto, con su respectivo puerto (8888) y endpoint (/radar). En este caso será: http://localhost:8888/radar. 
<div align=center>
<img src='./server/assets/postman/request.jpg'>
</div>

2- Seguidamente, marcaremos la opción Body, donde pondremos las instrucciones (raw) que recibirá nuestro droide en formato JSON. 
<div align=center>
<img src='./server/assets/postman/body.jpg'>
</div>

3- Cuando tengamos el body escrito, clicaremos SEND (ver imagen 1) y obtendremos las coordenadas donde nuestro droide atacará siguiendo las condiciones de los protocolos aportados. 
<div align=center>
<img src='./server/assets/postman/response.jpg'>
</div>
