import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const QueryClienSetup = ({ Children }) => {
    return <QueryClientProvider client={queryClient}>{Children}</QueryClientProvider>;
};

export default QueryClienSetup;
