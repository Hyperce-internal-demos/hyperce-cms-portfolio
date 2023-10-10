import { QueryClient } from '@tanstack/svelte-query'

export const load = async () => {
    const queryClient = new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: Infinity,
            refetchOnWindowFocus: false,
            refetchOnMount: false,
            cacheTime: 200 * 1000,
          },
        },
    })

  return { queryClient }
}