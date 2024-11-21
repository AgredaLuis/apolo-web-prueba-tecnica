# Prueba Técnica de Apollo Web- Luis Agreda

Este proyecto es una prueba técnica desarrollada con **React**, **TypeScript**, y **Vite**, utilizando **Tailwind CSS** como framework de estilos. La aplicación incluye manejo de formularios con **React Hook Form**, integración con APIs externas, y un flujo de login con gestión de estado global.

## Tabla de Contenidos

- [Requisitos](#requisitos)
- [Instalación](#instalación)
- [Pantallas de la Aplicación](#Pantallas-de-la-Aplicación)
- [Tecnologías Utilizadas](#Tecnologías-Utilizadas)



## Instalación

Sigue los pasos a continuación para configurar el proyecto en tu máquina local:

1. **Clona el repositorio:**

   ```bash
   git clone https://github.com/AgredaLuis/apollo-web-prueba.git

2. **Accede al directorio del proyecto:**

   ```bash
   cd apollo-web-prueba

3. **Instala las dependencias:**

     ```bash
     npm install

4. **Inicia el servidor de desarrollo:**

     ```bash
     npm run dev


## Pantallas de la Aplicación

El proyecto incluye cuatro pantallas principales:

### 1. **Login**
- Es la página de inicio que contiene el formulario de Iniciar Sesion.
- Permite registrar un nuevo usuario al ser oprimido "Registrarse".
- Los usuarios Registrados estan guardados en el LocalStorage

### 2. **Home**
- Pantalla donde se muestra los elementos traidos por la API de Rick and Morty.
- Incluye :
  - **Input**: donde puedes filtrar por nombre en tiempo real.
  - **boton para editar**: Cada elemento contiene un boton para editar el contenido de dicho elemento.
  - **bonton para crear**: Un boton para crear un nuevo elemento
### 3. **EditCreate**
- Pagina que contiene el formulario para poder crear o editar un componente.

### 4. **404**
- Página de error que aparece cuando un usuario intenta acceder a una ruta no existente.
- Contiene un diseño simple e informativo, junto con un botón para regresar al Home.

---

### Flujo de Navegación

- Al cargar la pagina el usuario sera dirigido a la pagina de **Login**.
- Una vez que el usuario inicia sesión, sera redireccionado a la pagina de Home para ver los elementos llamados a traves de una api.
- Una vez dentro de la pagina del home el usuario puede filtrar a escribir nombre de algun personaje dentro del Input inicial
- Una vez el usuario dentro de la pantalla del Home podra agregar o Editar algun elemento renderizado de la API
- Al darle algun boton como Editar o Crear se le redireccionara a una pagina con un formaluario para su dicha creacion o edicion.

### Consideracion
- Por motivos de tiempo, no se agregaron mejoras como:
- Utilizar mejor los estados con un Context API que englobe la aplicacion y maneje los usuario y adicional otro para el manejo de la edicion del listado de componente del HOME
- Modularizar La pagina de EditCreate en componentes para que su lectura sea mas sencillo
- Creacion de componente UI como botones e Input que son muy reutilizados en la aplicacion


### Valoraciones
- Los usuarios creados son guardados el LocalStorage
- Los elemtos cambiados y agregados del Home son guardados localmente , de modo que al recargar los cambios hechos seran borrados

## Tecnologías Utilizadas

- **Vite**: Herramienta de desarrollo rápido para aplicaciones modernas de frontend.
- **React 18**: Librería para construir interfaces de usuario.
- **TypeScript**: Superset de JavaScript para un desarrollo más robusto.
- **Tailwind CSS**: Framework para el diseño responsivo y utilitario.
- **React Router Dom**: Manejo de la rutas dentro de la aplicacion.


