import './App.css';
// lazy load components based on screen size
import { lazy, Suspense } from 'react';
const Desktop = lazy(() => import('./components/Desktop'));
const Tablet = lazy(() => import('./components/Tablet'));
const Mobile = lazy(() => import('./components/Mobile'));

// based on screen size, render the appropriate component
function App() {
  const width = window.innerWidth;
  // apply those conditions in jsx itslef
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        {width > 1024 ? (
          <Desktop />
        ) : width > 768 ? (
          <Tablet />
        ) : (
          <Mobile />
        )}
      </Suspense>
    </div>
  );
}
export default App;
