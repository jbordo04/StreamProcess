Pequeño ejercicio para analizar, tratar y comparar inmensos datos, en el formato .csv
Se leen con el metodo readFile y se analiza los tiempos de carga, así como la cantidad de memoria que se emplea, llegando a duplicar su uso

PASOS
Primero iremos esta pagina https://www.stats.govt.nz/large-datasets/csv-files-for-download/ y nos descargaremos un archivo mínimo de 10Mb
En nuestra pagina Index.js lo leeremos con el método readFile() y con el chivato del console, analizaremos lo siguiente: tiempo y uso de memoria.

![image](https://github.com/thejbordo/StreamProcess/assets/73432659/49730c21-9b63-48a6-b0d6-7011ff496e98)
![image](https://github.com/thejbordo/StreamProcess/assets/73432659/e44526c3-ec86-4cc3-ac31-d56cd5cf64ec)

Mediante el metodo creatReadStream(), podemos trozear este archivo y hace que las lecturas sean más rápidas y por ende el uso de la memoria, 


# StreamProcess
