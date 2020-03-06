// Frameworks
import React from 'react';
import { Route } from 'react-router-dom';
// Custom Components
import NewsView from './NewsView';
import HomeView from './HomeView';
// Styling
import styles from './CSS/App.module.css';

/* Application Container - Routing between Home and News Views
 * The home view contains the first four articles returned from the api
 * clicking  on More routes to a page similar to https://justbeerapp.com/articles/latest
 */
function App() {
  return (
    <div className={styles.OuterWrapper}>
      <Route exact path="/" component={HomeView} />
      <Route path="/articles/all" component={NewsView} />
    </div>
  );
}

export default App;
