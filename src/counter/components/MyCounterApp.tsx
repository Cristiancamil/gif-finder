import { useCounter } from "../hooks/useCounter"

/**
 * Componente de contador.
 *
 * Permite:
 * - Incrementar el contador.
 * - Decrementar el contador.
 * - Restablecer el valor inicial.
 *
 * La lógica del contador es gestionada
 * mediante el custom hook `useCounter`.
 */
export const MyCounterApp = () => {

  /**
 * Estado y acciones del contador.
 *
 * Valor inicial: 5
 */
  const { counter, handleAdd, handleSubtract, handleReset } = useCounter(5)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1>counter: {counter}</h1>
      <div style={{ display: 'flex', gap: '10px' }}>
        <button onClick={handleAdd}>+1</button>
        <button onClick={handleSubtract}>-1</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  )
}
