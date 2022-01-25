function GlobalStyle() {
    return (
        <style global jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Mochiy+Pop+P+One&display=swap');
        body {
            font-family: 'Mochiy Pop P One', sans-serif;
        }
    `}</style>
    )
}




export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <GlobalStyle />
            <Component {...pageProps} />
        </>
    );
}