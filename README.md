use effect como unmount: fase de limpieza, el return funciona como eso
precauciones con el useffect:

!!null && 'hola mundo'
el nulo con los !! se convierte en false si no es falso pasa el hola mundo

useREf: nos puede solucionar el problema de cuando se monta y desmonta un fetch antes de que apareza y salga este error:

## index.js:1 Warning: Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function.in MultiplesCustomHooks (at RealExampleRef.js:10)

esto se esta solucionando en getFetch

useLayoutEffect: La firma es idéntica a useEffect, pero se dispara de forma síncrona después de todas las mutaciones de DOM. Use esto para leer el diseño del DOM y volver a renderizar de forma sincrónica. Las actualizaciones programadas dentro de useLayoutEffect se vaciarán sincrónicamente, antes de que el navegador tenga la oportunidad de pintar.

Prefiera el useEffect estándar cuando sea posible para evitar el bloqueo de actualizaciones visuales.

el punto es ver como quedo el codigo, los duv luegi que ocupe algo nuevo. el

memo: es una funcion que va a devolver lo memorizado de mi componente y solo se va a disparar si las properties cambian, se renederiza solo por eso

callback: el uso de este hooks tiene dos:
uno: cuadno se manda una funcion a un componente hijo. para que no genere una nueva version
dos: cuando se tiene useEFect y el efecto tiene una dependecncia y esa es una funcion, para que no se renderice

## seccion 10 Profundizando Hooks use Reducer

el useState y useReducer hacen en teoria lo mismo, pero el reducer es mas usado cuando hay que hacer mas cosas y muchas acciones en el state de la aplicacion.

El useReducer: hay que entender bien el redux.

## Introduccion al concepto del reducer:

1-nos es mas que una funcion comun y corriente, no es asincrona.
2-Es una funcion pura, todo lo que realice debe resolverse de manera interna
3-Debe retornar un nuevo estado.
recibe un stado inicial y la accion a ejecutar.

El nombre de la funcion deberia ser bien especifico.

## en la funcion pura:

no debe tener efectos secundarios.
1-No debe tener tareas asincronas
2-Debe retornar siempre un estado, no debe mutar nunca un nuevo estado
3-No debe llamar localStorage o sessionStorage, porque son conciderados efectos secundarios.
4-Para modificar el state no debe requerir mas que una accion

Usereducer es una alternativa, pero con una diferencia el state es mas simple y si es algo muy grande usen reducer.

reducer la funcion reducer
initial state
init: es usado como una funcion para inicializar el state en caso de que tenga varias acciones, lo hace mas ligero y rapido puede memorizar el estado
const [state, dispatch] = useReducer(reducer, initialState, init);

## seccion once

useContext: es ideal cuando la info va de abuelo a nieto. El useContext, ayuda a romper esta referencia donde hay que tener almacenado en el context la info para cuando algun hijo lo necesite, lo busca ahi.
Sera sin mandarlo sin props. Esto es mas para casos donde es mucha comunicacion de padre(Abuelo) y nieto

Context

Provider

useContext

React Router

Links y NavLinks

CreateContext

SPA ( Single Page Application )

El objetivo de la sección es principalmente aprender sobre el Context, el Router es un valor agregado que explotaremos mucho más en próximas secciones, pero al usar un Router, podemos explicar claramente el problema y necesidad del context.

useContext:
