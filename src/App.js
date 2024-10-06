import React from 'react';
import NavBar from './components/NavBar/NavBar.js';
import SearchBar from './components/SearchBar/SearchBar.js';
import Categories from './components/Categories/Categories.js';
import Listings from './components/Listings/Listings.js';
import Footer from './components/Footer/Footer.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <SearchBar />
      <Categories />
      <Listings />
      <Footer />
    </div>
  );
}

export default App;
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
