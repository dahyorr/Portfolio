import Document, {Html, Head, Main, NextScript} from 'next/document'

class MyDocument extends Document{
	render(){
		return(
			<Html lang='en'>
				<Head>
					<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
					<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
					<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
					<link rel="manifest" href="/site.webmanifest"/>
					<link rel="preconnect" href="https://fonts.googleapis.com"/>
					<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=''/>
					<link 
						href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;500;700&family=Permanent+Marker&family=La+Belle+Aurore&display=optional" 
						rel="stylesheet"
					/>
				</Head>

				<body>
					<noscript>
						<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MLFGRTZ" height="0" width="0" style={{
							display:"none",
							visibility:"hidden"
						}}></iframe>
					</noscript>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default MyDocument