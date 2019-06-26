export type TodosState = { text: string; completed: boolean; id: number }[]

export const addTodo = (state: TodosState) => (text: string): TodosState => [
  ...state,
  {
    id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
    completed: false,
    text,
  },
]

export const deleteTodo = (state: TodosState) => (id: number): TodosState =>
  state.filter(todo => todo.id !== id)

export const editTodo = (state: TodosState) => (
  id: number,
  text: string
): TodosState =>
  state.map(todo => (todo.id === id ? { ...todo, text: text } : todo))

export const completeTodo = (state: TodosState) => (id: number): TodosState =>
  state.map(todo =>
    todo.id === id ? { ...todo, completed: !todo.completed } : todo
  )

export const completeAllTodos = (state: TodosState) => (): TodosState => {
  const areAllMarked = state.every(todo => todo.completed)

  return state.map(todo => ({
    ...todo,
    completed: !areAllMarked,
  }))
}

export const clearCompleted = (state: TodosState) => (): TodosState =>
  state.filter(todo => todo.completed === false)
