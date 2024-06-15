import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppBar, Container, Toolbar } from '@material-ui/core';
import AlbumOverview from './components/AlbumOverview';
import AlbumDetail from './components/AlbumDetail';
import CreateAlbum from './components/CreateAlbum';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppBar>
          <Toolbar>
            <a href="/">Rens zijn coole albums😎</a>
          </Toolbar>
        </AppBar>
        <br />
        <br />
        <Container>
          <Routes>
            <Route path="/" element={<AlbumOverview />} />
            <Route path="/new" element={<CreateAlbum />} />
            <Route path="/album/:id" element={<AlbumDetail />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
