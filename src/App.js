import './App.css';
import { Row, Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import News from './components/News/News';

function App() {
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch("https://newsapi.org/v2/everything?domains=wsj.com&apiKey=97fee09a75c1435e9920e3da04514ada")
      .then(response => response.json())
      .then(jsonData => setNews(jsonData.articles))
  }, [])
  return (
    <div className="App">
      {
        news.length === 0 ?
          <Spinner animation="border" />
          :
          <Row xs={2} md={4} className="g-4">
            {
              news.map(nw => <News news={nw} />)
            }
          </Row>
      }
    </div>
  );
}

export default App;
