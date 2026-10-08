import react from 'react'

export default function App() {
  const sum = (a, b) => {
    return a + b
  }

  return (
    <>
      <div>
        <h1> This is the react function component example</h1>
      </div>
      <div>
        Sum is: {sum(100, 200)}
      </div>
      <div>
        <Sum/>
      </div>
    </>
  )
}
