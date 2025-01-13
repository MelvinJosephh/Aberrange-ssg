// src/pages/_app.js (or pages/_app.js if not in src/)
import '../styles/globals.css';
import Header from '../pages/layout/header';
import Footer from '../pages/layout/footer';
import { StepProvider } from '../context/step-context';

function MyApp({ Component, pageProps }) {
  return (
    <StepProvider>
      <Header />
      {/* <Component {...pageProps} /> */}
      <Footer />
    </StepProvider>
  );
}

export default MyApp;
