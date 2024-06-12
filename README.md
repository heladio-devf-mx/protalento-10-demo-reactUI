# Proyecto de React (UI) de muestra para Protalento 

## Crear el proyecto de React
1. Colocarnos en la carpeta donde vamos a crear el proyecto.
2. Ejecutar el siguiente comando para que Vite cree la estructura del proyecto
- ```npm create vite@latest . -- --template react```
3. Instalar dependencias
- ```npm install```
4. Arrancar el proyecto
- ```npm run dev```

## Inicializar el repositorio en la carpeta de mi proyecto
Ejecutar el comando:
- ```git init```
Agregar los archivos al repositorio mediante un commit.
- ```git add .```
- ```git commit -m 'Creación del proyecto de React.'```

## Crear el repositorio en Github y subimos el proyecto recién creado
Crear en Github un repositorio para el proyecto de React.
- el demo se llama: ```protalento-10-demo-reactUI```
Enlazar el repositorio de Github con el repositorio de mi ambiente local:
- Ejecutar los siguientes comandos que me da Github. Adecual la URL de cada uno de sus repositorios.

```
git remote add origin https://github.com/heladio-devf-mx/protalento-10-demo-reactUI.git
git branch -M main
git push -u origin main
```


### React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
