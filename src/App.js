import React, {Fragment, lazy, Suspense} from 'react';
import {CssBaseline} from '@material-ui/core'; //usuwa margin/padding
import {ThemeProvider, createMuiTheme} from '@material-ui/core'
import {Route, Switch} from 'react-router-dom';
import Header from './containers/Header/HeadIn';

import Footer from './components/Footer';
const Cards = lazy(() => import('./components/Cards'));
const AboutUs = lazy(() => import('./components/AboutUs'));
const Services = lazy(() => import('./components/Services'));
const Support = lazy(() => import('./components/Support'));
const Gallery = lazy(() => import('./components/Gallery'));
const Contact = lazy(() => import('./components/Contact'));

const theme = createMuiTheme({
    palette: {
      primary: {
        light: '#757ce8',
        main: "#30408d",//'#00165f',
        dark: '#002884',
        contrastText: '#fff',
      },
      secondary: {
        light: '#ff7961',
        main: '#ffffff',
        dark: '#ba000d',
        contrastText: '#000',
      },    
    },
  });

const App = () => {
  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <main style={{marginTop: "2rem", minHeight: "525px"}}> 
          <Suspense fallback={<div>ładuję...</div>}>
            <Switch>
              <Route path="/" exact component={Cards} />
              <Route path="/o-nas" component={AboutUs} />
              <Route path="/uslugi" component={Services} />
              <Route path="/mazurska-pomoc-wodna" component={Support} />
              <Route path="/galeria" component={Gallery} />
              <Route path="/kontakt" component={Contact} /> 
            </Switch>
          </Suspense>
        </main>
        <Footer />
      </ThemeProvider>
    </Fragment>
  );
}
export default App;

