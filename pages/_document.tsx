// eslint-disable-next-line @next/next/no-document-import-in-page
import Document, {Html, Head, Main, NextScript} from 'next/document'

class MyDocument extends Document{
    render(){
        return(
            <Html lang='en'>
                <Head>
                    <link
                        rel="stylesheet"
                        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
                    />              
                </Head>
                <body>
                    <Main />
                    <NextScript />
                    <div id="navModal"></div>
                    <div id="modal"></div>
                </body>
            </Html>
        )
    }
}

export default MyDocument