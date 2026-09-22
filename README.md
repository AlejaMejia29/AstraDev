# Astra Dev

**Ideas que construyen futuro.**

Sitio web de [Astra Dev](https://github.com/AlejaMejia29/AstraDev): estudio de **ingeniería de software** e **inteligencia artificial aplicada**. Presenta servicios, capacidades de IA, casos de éxito y un canal de contacto para cotizaciones.

## Stack

- Angular 21 (standalone, rutas lazy)
- Tailwind CSS v4
- TypeScript
- Vitest

## Arquitectura

```
src/app/
  core/layout/          header, footer y fondo de estrellas
  shared/               modelos, navegación y logo
  features/inicio/      landing modular (lazy-loaded)
    sections/           hero, servicios, IA, nosotros, proyectos, contacto
    data/               contenido de la página
```

## Cómo correrlo

```bash
npm install
npm start
```

Abre [http://localhost:4200](http://localhost:4200).

| Comando | Qué hace |
| --- | --- |
| `npm start` | Servidor de desarrollo |
| `npm run build` | Build de producción |
| `npm test` | Tests unitarios |

## Licencia

Uso privado. Todos los derechos reservados © Astra Dev.
