Pequeño ejercicio para analizar, tratar y comparar inmensos datos, en el formato .csv
Se leen con el metodo readFile y se analiza los tiempos de carga, así como la cantidad de memoria que se emplea, llegando a duplicar su uso

PASOS

Primero iremos esta pagina https://www.stats.govt.nz/large-datasets/csv-files-for-download/ y nos descargaremos un archivo mínimo de 10Mb
En nuestra pagina Index.js importaremos el método readFile() y con el chivato del console.time(), analizaremos lo siguiente: tiempo y uso de memoria (mi media es 1500Mb, se que es bastante alto)

![image](https://github.com/thejbordo/StreamProcess/assets/73432659/49730c21-9b63-48a6-b0d6-7011ff496e98)

El uso de la memoria se ha duplicado y pero apenas 1s

![image](https://github.com/thejbordo/StreamProcess/assets/73432659/e44526c3-ec86-4cc3-ac31-d56cd5cf64ec)

![image](https://github.com/thejbordo/StreamProcess/assets/73432659/0a88609b-d9fe-482d-816c-0151fae88bbd)



Ahora vamos a compararlo mediante una lectura no entera, sino por trozos, mediante el método createReadStream(), podemos trozear este archivo y hace que las lecturas sean más rápidas y por ende el uso de la memoria, pero cuidado, porque queremos ver la lectura original y no trozos inconexos entre ellos, así, lo hiremos juntando y mostrandolo bien unido mediante un buen FOR

![image](https://github.com/thejbordo/StreamProcess/assets/73432659/76669fc6-a096-4f5d-89b7-b21ab82af21f)


Al empezar la lectura, ya se puede ver claramente la diferencia de uso de la memoria, apenas ha subido el uso de la memoria y se queda estabilidado con el paso de los minutos!

![image](https://github.com/thejbordo/StreamProcess/assets/73432659/79c02f1a-eac4-44bb-ba92-ece64440eee2)

![image](https://github.com/thejbordo/StreamProcess/assets/73432659/714ff388-5bd2-482f-b209-482480053231)

EL tiempo ha tardado más, si miramos el codigo estamos concatenando cada carácter uno por uno, código que destruye el rendimiento. 

Lo voy a actualizar, pero ya se aprecia claramente las bondades de leer a trozos un buena base de datos!



# StreamProcess
