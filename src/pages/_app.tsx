import '../styles/globals.css';
import { CombinedProviders } from '../context/CombinetProviders';

function MyApp({ Component, pageProps }) {
  return (
    <CombinedProviders>
      <Component {...pageProps} />
    </CombinedProviders>
  );
}

export default MyApp;
