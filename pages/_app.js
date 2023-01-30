import '../styles/globals.css';
import Navigation from '../components/navigation';
import SimpleBottomNavigation from '../components/layouts/bottom-nav-mobile';
import Footer from '../components/footer';
import { Provider } from 'react-redux';
import { store } from '../store';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }) {
  const router = useRouter();
  if (router.pathname.startsWith('/auth')){
    return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    );
  }
  return (
    <Provider store={store}>
      <Navigation />
      <Component {...pageProps} />
      <Footer />
      <SimpleBottomNavigation />
    </Provider>
  );
}
