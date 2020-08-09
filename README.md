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
