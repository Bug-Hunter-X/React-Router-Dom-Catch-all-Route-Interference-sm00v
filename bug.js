```javascript
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* Incorrect Route causing issues */}
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() {/* ... */}
function About() {/* ... */}
function NoMatch() {/* ... */}
export default App;
```