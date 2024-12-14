import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

// Define the types for the renovation data
interface Renovation {
  id: number;
  before: string; // URL to the 'before' image
  after: string;  // URL to the 'after' image
  description: string; // Short description of the renovation
}

// Sample renovation data
const renovations: Renovation[] = [
  {
    id: 1,
    before: 'https://example.com/before1.jpg',
    after: 'https://example.com/after1.jpg',
    description: 'Living room transformation with modern touches.',
  },
  {
    id: 2,
    before: 'https://example.com/before2.jpg',
    after: 'https://example.com/after2.jpg',
    description: 'Kitchen renovation featuring a sleek new design.',
  },
  // Add more items as needed
];

const App: React.FC = () => {
  return (
    <div className="app-container">
      <header>
        <h1>Home Renovation Gallery</h1>
      </header>
      <main>
        <div className="gallery">
          {renovations.map((renovation) => (
            <div key={renovation.id} className="renovation-item">
              <h2>{renovation.description}</h2>
              <div className="images">
                <div className="image-container">
                  <img src={renovation.before} alt="Before" />
                  <p>Before</p>
                </div>
                <div className="image-container">
                  <img src={renovation.after} alt="After" />
                  <p>After</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <footer>
        <p>&copy; 2024 Home Renovations Inc.</p>
      </footer>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

/* CSS File: styles.css */
/* Add the following CSS in the styles.css file */

body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f4f4f4;
  color: #333;
}

.app-container {
  text-align: center;
  padding: 20px;
}

header {
  background-color: #444;
  color: white;
  padding: 10px 0;
  margin-bottom: 20px;
}

.gallery {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.renovation-item {
  background: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  max-width: 300px;
  text-align: left;
}

.images {
  display: flex;
  gap: 10px;
}

.image-container {
  flex: 1;
  text-align: center;
}

.image-container img {
  max-width: 100%;
  border-radius: 4px;
}

footer {
  margin-top: 20px;
  font-size: 0.9em;
}

/* Responsive Design */
@media (max-width: 600px) {
  .images {
    flex-direction: column;
  }
}
