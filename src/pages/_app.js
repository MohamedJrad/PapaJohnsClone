import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import '../styles/tailwind.css';
import '../styles/styles.css';

export default function MyApp({ Component }) {
	return (
		<div>
			<Head>
				<title>Papa John's Pizza</title>
				<link rel="shortcut icon" href={require('../assets/logos/Sonya-Swarm-Pizza.ico')} type="image/x-icon" />
			</Head>
			<Layout>{<Component className="min-h-screen" />}</Layout>
		</div>
	);
}
