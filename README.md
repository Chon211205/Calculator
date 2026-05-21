# Calculadora React + Vite + TypeScript

Proyecto de una calculadora simple desarrollada con React, Vite y TypeScript.

La calculadora utiliza una interfaz basada en componentes, pruebas automatizadas, Storybook y configuración de linting.

## Link de la aplicación publicada

```txt
http://35.239.29.236/241203/calculadora/
```

## Link del repositorio

```txt
https://github.com/Chon211205/Calculator.git
```

## Tecnologías utilizadas

- React
- Vite
- TypeScript
- Bun
- ESLint
- Storybook
- bun:test

## Funcionalidades principales

La calculadora cuenta con:

- Display para mostrar números y resultados.
- Teclado numérico compuesto por botones HTML.
- Entrada únicamente por medio de botones.
- Suma.
- Resta.
- Multiplicación.
- Igualdad.
- División.
- Módulo.
- Punto decimal.
- Botón `+/-`.
- Manejo de errores con la palabra `ERROR`.

## Reglas implementadas

La calculadora cumple con las siguientes reglas:

- El display no permite ingresar más de 9 caracteres.
- Si un resultado es negativo, se muestra `ERROR`.
- Si un resultado es mayor a `999999999`, se muestra `ERROR`.
- El punto decimal cuenta como un carácter dentro del límite de 9.
- El signo menos de `+/-` cuenta como un carácter dentro del límite de 9.
- Resultados decimales largos, como `22 / 7`, se recortan a 9 caracteres.

## Estructura del proyecto

```txt
src/
├── components/
│   ├── Button.tsx
│   ├── Calculator.tsx
│   ├── Display.tsx
│   ├── Keypad.tsx
│   └── RepoButton.tsx
├── hooks/
│   └── useCalculator.ts
├── logic/
│   └── calculatorLogic.ts
├── stories/
│   └── Display.stories.tsx
├── tests/
│   └── calculatorLogic.test.ts
├── App.tsx
├── main.tsx
├── styles.css
└── vite-env.d.ts
```

## Instalación

Este proyecto usa Bun como package manager.

```bash
bun install
```

## Ejecutar en modo desarrollo

```bash
bun run dev
```

## Ejecutar tests

```bash
bun test
```

## Ejecutar lint

```bash
bun run lint
```

## Ejecutar build

```bash
bun run build
```

## Ejecutar Storybook

```bash
bun run storybook
```

## Tests implementados

El proyecto incluye pruebas para:

- Suma.
- Resta.
- Multiplicación.
- División.
- Módulo.
- Resultado negativo.
- Resultado mayor a `999999999`.
- Valor máximo permitido.
- División entre cero.
- Decimales largos como `22 / 7`.

## Historias de Storybook

El proyecto incluye 5 historias para el componente `Display`:

- Initial
- WithNumber
- WithDecimal
- WithMaxValue
- WithError

## Linting

El proyecto incluye configuración de ESLint con reglas para:

- Prohibir puntos y coma.
- No permitir líneas de más de 120 caracteres.
- Revisar archivos `.js`, `.jsx`, `.ts` y `.tsx`.

Comando:

```bash
bun run lint
```

## Publicación

Para publicar la app se genera la carpeta `dist`:

```bash
bun run build
```

Luego se sube el contenido de `dist` al servidor en:

```txt
/var/www/html/241203/calculadora/
```

## Importante

No se debe subir la carpeta:

```txt
node_modules/
```

El proyecto incluye el lockfile de Bun para poder instalar las dependencias correctamente.
