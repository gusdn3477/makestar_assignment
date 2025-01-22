import { ErrorBoundary } from 'react-error-boundary';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Router from './Router';

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary fallback={<div>에러 발생</div>}>
        <Router />
      </ErrorBoundary>
    </QueryClientProvider>
  );
}

export default App;
