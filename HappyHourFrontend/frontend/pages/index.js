import Layout from "../components/Layout";
import Home from '../components/Home';
import Head from 'next/head';
import Map from '../components/Map/Map';
import HomeHeader from "../components/HomeHeader";
const Index = () => {

return (
  <>
  <Head>
  <meta name="viewport" content="width=device-width, minimum-scale=1.0"/>
  </Head>
<Layout>
  <HomeHeader/>
  <Home/>
  </Layout>
  </>
)
}
export default Index;
  

