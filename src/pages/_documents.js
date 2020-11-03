import Document, { Html, Head, Main, NextScript } from 'next/document';
import { Footer } from '../components/Footer/Footer';

class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head />
				<body className=" bg-gray-100 ">
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
