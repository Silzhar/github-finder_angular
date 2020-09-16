# Angular Sesión 5 - Ejercicios

Es hora de poner en práctica nuestros conocimientos de RxJS :)

Contamos con la API pública de Github, que expone información sobre sus usuarios y repositorios. Vamos a tratar de hacer una especie de buscador de usuarios, en el que introduciremos el nombre del usuario:

![assets/Captura_de_pantalla_2020-05-19_a_las_17.28.50.png](assets/Captura_de_pantalla_2020-05-19_a_las_17.28.50.png)

Haremos una petición GET a: [https://api.github.com/users/franlindebl/repos](https://api.github.com/users/franlindebl/repos) donde podremos recuperar un JSON con la información de los repositorios del usuario (en este caso franlindebl), tendrá un pinta como esta:

```json
[
  {
    "id": 228379224,
    "node_id": "MDEwOlJlcG9zaXRvcnkyMjgzNzkyMjQ=",
    "name": "angular-sample-app",
    "full_name": "franlindebl/angular-sample-app",
    "private": false,
    "owner": {
      "login": "franlindebl",
      "id": 6452423,
      "node_id": "MDQ6VXNlcjY0NTI0MjM=",
      "avatar_url": "https://avatars0.githubusercontent.com/u/6452423?v=4",
      "gravatar_id": "",
			...
      "url": "https://api.github.com/users/franlindebl",
      "type": "User",
      "site_admin": false
    },
    "html_url": "https://github.com/franlindebl/angular-sample-app",
    "description": null,
    "fork": false,
    "url": "https://api.github.com/repos/franlindebl/angular-sample-app",
    ...
    "created_at": "2019-12-16T12:09:59Z",
    "git_url": "git://github.com/franlindebl/angular-sample-app.git",
    "language": "TypeScript",
		...
    "archived": false,
    "watchers": 0,
    "default_branch": "master"
  },
	...
]
```

Es decir, que se devuelve un array con la información de los repositorios del usuario, de manera que podremos pintar un resumen como el siguiente:

![assets/Captura_de_pantalla_2020-05-19_a_las_17.29.11.png](assets/Captura_de_pantalla_2020-05-19_a_las_17.29.11.png)

Puedes ver un ejemplo de esta aplicación hecha con HTML y JS plano (No angular) en la siguiente ruta:

[https://codepen.io/franlindebl/pen/bGVOdmz](https://codepen.io/franlindebl/pen/bGVOdmz)

También encontrarás esta aplicación de demo en este mismo repositorio, en la carpeta github-api-html-js-sample. Recuerda que al ser HTML y JS plano no te servirá de mucho, solo para que puedas trastear y hacerte una idea de lo que debes implementar, pero en Angular.

### Ejercicio

**Iteración 1:**

Realiza una implementación con Angular de esta misma aplicación. Recuerda hacer uso de lo que has aprendido:

- Formularios Reactivos
- Peticiones con HttpClient de Angular
- Map / Pipe de RxJs para mapear los datos de respuesta

**Iteración 2:**

Una vez tengas hecha la primera esta primera iteración, pasamos a complicar un poco el ejercicio.

Tienes disponible también una petición que te devolverá información del usuario, por ejemplo: [https://api.github.com/users/franlindebl](https://api.github.com/users/franlindebl)

Realiza esta petición en paralelo junto con la de los repositorios, de manera que devuelvas desde el servicio la información de ambas peticiones a la vez, para pintar en pantalla además del listado de repositorios, algo de información del usuario:

- Su imagen
- Su nombre completo
- Fecha de creación de la cuenta
- Número de seguidores