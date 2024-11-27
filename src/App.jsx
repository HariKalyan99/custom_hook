import useFetch from "./customHook/useFetchHook"


function App() {

  const {result, pending, error} = useFetch("https://dummyjson.com/products" , {})

  const container = {
    display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", gap: "1rem"
  }

  return (
    <div style={container}>
      <h1>Use Fetch Hook</h1>
      {pending && <h1>Loading data...</h1>}
      {result?.products?.length > 0 ? result?.products?.map(({title}, ind) => <p key={ind}>{title}</p>) : <h1>{error && "Error fetching data"}</h1>} 
    </div>
  )
}

export default App
