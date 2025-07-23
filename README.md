# 📝 Formulario con Validación en Vivo

Este proyecto es un formulario HTML que valida los campos de **nombre** y **correo electrónico** en tiempo real mientras el usuario escribe. Está desarrollado con HTML, CSS y JavaScript.

## 🚀 Funcionalidades

- Validación de nombre con expresión regular:
  - Solo letras, espacios y guiones.
  - Mínimo 2 y máximo 40 caracteres.
- Validación de correo con formato estándar (`usuario@dominio.com`).
- Estilos visuales para campos válidos e inválidos.
- Mensajes de error que aparecen y desaparecen dinámicamente.
- Estilo responsivo para dispositivos móviles.

## 📸 Vista previa

![preview](/foto-prueba.png)

## 🧪 Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript (ES6)

## 🧠 Expresiones regulares utilizadas

- **Nombre:**
  ```js
  /^[A-Za-zÁÉÍÓÚÑáéíóúñ\s'-]{2,40}$/

- **Correo electrónico:**
```js
 /^[^\s@]+@[^\s@]+\.[^\s@]+$/

