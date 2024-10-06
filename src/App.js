import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import Categories from './components/Categories';
import Listings from './components/Listings';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
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
