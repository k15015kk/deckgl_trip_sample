import NextDocument , {Head, Html, Main, NextScript} from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head></Head>
            <body className='font-body'>
                <Main/>
                <NextScript/>
            </body>
        </Html>
    )
}