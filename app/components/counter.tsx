export function Counter() {
  let counter = 0

  function Inc() {
    counter++
    console.log(counter)
  }

  function Dec() {
    counter--
    console.log(counter)
  }

  return (
    <div
      style={{
        width: '100%',
        margin: '0 auto',
      }}
    >
      <h1 style={{ textAlign: 'center' }}>{counter}</h1>
      <button
        style={{
          margin: '20px 40px',
          padding: '10px 20px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
        }}
        onClick={Inc}
      >
        Inc
      </button>
      <button
        style={{
          margin: '20px 40px',
          padding: '10px 20px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
        }}
        onClick={Dec}
      >
        Dec
      </button>
    </div>
  )
}
