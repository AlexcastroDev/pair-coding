import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import Layout from "@/components/shared/Layout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "@/modules/UserSession/providers/AuthProvider";
import { Fragment } from "react";

const queryClient = new QueryClient()

export default function App({ Component, pageProps }: AppProps) {
  return (
		<MantineProvider>
	 		<QueryClientProvider client={queryClient}>
			<AuthProvider>
					<Fragment>
						<Layout>
						<Component {...pageProps} />
						</Layout>
					</Fragment>
			</AuthProvider>
			</QueryClientProvider>
		</MantineProvider>
  )
}