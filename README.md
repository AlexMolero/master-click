# Welcome to MasterClick

**1** Los clicks hechos por cada usuario los he guardado en el socket y desde el servidor he llamado a una funcion del cliente que sobreescribia los clicks realizados, por lo tanto en el servidor, aunque se podría haber realizado en el cliente con un contador.

**2** Los clicks totales se debe realizar en el servidor, guardando una variable cada vez que uno de los usuarios hace click.

**3** La media la he realizado en el servidor accediendo a los clicks totales y llamando a una función que lo mostraba en el cliente.

**4** Los usuarios conectados se realiza en el servidor ya que se debe escuchar cuando se conecta cada uno y mandar un mensaje al cliente cuando este se haya conectado o desconectado.

**5** El mecanismo para reiniciar la cuenta se realiza en el servidor para cuando se escucha este evento avisar a todos los clientes que deben reiniciar el contador.
