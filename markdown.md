# **Markdown GUIAFAST**
    NOTA1: markdown no necesita escribir etiquetas, solo almohadilla

## ENCABEZADOS
    # encabezado h1
    ## encabezado h2
    ###  encabezado h3
    ####  encabezado h4
    #####  encabezado h5
    ###### encabezado h6

## Citas
    >ESTO ES UNA CITA
    >continuacion de la cita
>ESTO ES UNA CITA
> continuacion de la cita
> > otra cita dentro de la anterior
> 
> La cita principal llega hasta aca 


## LISTAS
### Desordenadas
    - elemento 1
    - - elemento 2
    - - - elemento 3

- elemento 1
- - elemento 2
- - - elemento 3

### Numeradas
    1. elemento 1
        - elemento 2
    1. elemento 3

1. elemento1
   - elemnto2
2. elemento3

## Separaciones
    ___ 3 giones bajos
___

## Negritas y cursivas 
    *negrita*
    **cursiva**
    ***ambas***
*Negrita*
**cursiva**
***ambas***

## Enlaces 
entre corchetes la palabra que se quiere usar como link seguido de parentesis para el link

        [piratadelrock](piratadelrock.github.io)
y podemos añadir un title al enlace con las comillas

        [piratadelrock](piratadelrock.github.io"Repositorio")
si se desea solo la url basta con poner 

        <https://piratadelrock.github.io>
Resultado:
[blog](https://piratadelrock.github.io"Repositorio")
<https://piratadelrock.github.io>

y adicinando el enlace en las frases como la 
[web][wb]     

[wb]: https://piratadelrock.github.io

## Imagenes 
escribir el texto alternativo asociado a la imagen en corchete y seguido de parentesis la ruta
    
    ![nombreImagen](imagenUrl)
añadiendo un simbolo de exclamacion, sin el simbolo quedara solo como enlace

![Markdown](https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Markdown-mark.svg/1200px-Markdown-mark.svg.png)

## Código
Cajetines de codigo de cualquier lenguaje solo es poner 4 espacios en blanco o tab
    esto es un codigo 
pero cuando tenemos mucho texto de codigo es mejor iniciarlo con virgulilla ~~~ al inicio y al final 
~~~
div p {
    color:aquamarine;
}

div h2,div h3 {
    color:brown;
}

* {
    font-size: 24px;
    color: black;
}
~~~ 

TAMBIEN se puede tener codigo dentro de una misma frase

## Anular Markdown
De esta forma \*anulas markdown*

