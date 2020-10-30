import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head />
				<body id="body" className="relative ">
					<Main className="relative " />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
