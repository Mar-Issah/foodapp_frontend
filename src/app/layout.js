'use client';
import { Inter } from 'next/font/google';
import NextAuthProvider from './Provider';
import '../styles/globals.css';
import { Provider } from 'react-redux';
import store from '@/redux/store';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
// import { store, persistor } from '@/redux/store';
// import { PersistGate } from 'redux-persist/integration/react';

const queryClient = new QueryClient();
const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
      <QueryClientProvider client={queryClient}>
        <html lang='en'>
          <head>
            <title>H.A.M</title>
            <meta name='H.A.M foods' content='Call now to make your food order' />
            <link
              rel='icon'
              href='https://res.cloudinary.com/dytnpjxrd/image/upload/v1698682275/HAMFOODS/headicon_gd57zk.png'
            />
          </head>
          <body className={inter.className}>{children}</body>
        </html>
        {/* </PersistGate> */}
      </QueryClientProvider>
    </Provider>
  );
}
