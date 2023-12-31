"use client"
import Header from '@/components/layout/Header/Header'
import './globals.scss'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { MiniCart } from '@/components/MiniBasket/MiniBasket'
import { SnackbarProvider } from 'notistack';
import { QueryClient, QueryClientProvider } from 'react-query'
import { Provider } from 'react-redux'
import { store } from '../store/store'
import { IconContext } from "react-icons";


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Home Page',
  description: 'Generated by create next app',
}
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    }
  }
})
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider store={store}>

          <IconContext.Provider value={{ color: 'black', size:'1.7em' }}>

            <SnackbarProvider>
              <QueryClientProvider client={queryClient}>

                <Header />
                {children}

              </QueryClientProvider>
            </SnackbarProvider>

          </IconContext.Provider>

        </Provider>
      </body>
    </html >
  )
}
