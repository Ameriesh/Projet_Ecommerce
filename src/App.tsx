import './App.css'
import { Toaster } from 'sonner';
import Route from '../Route'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
function App() {
  const queryClient = new QueryClient

  return (
    <QueryClientProvider client={queryClient}>
      <Toaster position="top-right" richColors closeButton />
      <Route></Route>
    </QueryClientProvider>
  )
}

export default App
