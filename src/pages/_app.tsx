import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/header/Header';
import InfoPersonal from '../components/infoPersonal/InfoPersonal';
import Proyectos from '../components/proyectos/Proyectos';
import CallToAction from '../components/callToAction/CallToAction';
import Footer from '../components/footer/Footer';
export default function App({ Component, pageProps }: AppProps) {
  return (

      <div>

      <Header></Header>
      <InfoPersonal></InfoPersonal>
      <Proyectos></Proyectos>
      <CallToAction></CallToAction>
      <Footer></Footer>


      </div>
  );
}