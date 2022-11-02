import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { SWRConfig } from 'swr';
import { apiInstanceFetcher } from './../core/clients';
import { SnackProvider, AuthContextProvider } from './../core/helpers';
import { ThemeProvider } from './../core/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <SnackProvider>
        <SWRConfig
          value={{
            fetcher: apiInstanceFetcher,
          }}>
          <AuthContextProvider>
            <Component {...pageProps} />
          </AuthContextProvider>
        </SWRConfig>
      </SnackProvider>
    </ThemeProvider>
  );
}

export default MyApp;
