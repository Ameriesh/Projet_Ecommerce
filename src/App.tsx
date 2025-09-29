import './App.css'
import Route from '../Route'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
function App() {
  const queryClient = new QueryClient

  return (
    <QueryClientProvider client={queryClient}>
      <Route></Route>
    </QueryClientProvider>
  )
}

export default App
