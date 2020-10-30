import React from 'react';
import Layout from '../components/Layout';
import '../styles/tailwind.css';
import '../styles/styles.css';

export default function MyApp({ Component, pageProps }) {
	return <Layout>{<Component {...pageProps} />}</Layout>;
}
