import React from 'react';
import './SearchTable.css';

const SearchTable = () => {
  return (
    <div id="custom-table36">
      <div className="single-model-search37">
        <h2>Select Year</h2>
        <select className="form-control38">
          <option value="default">Year</option>
          <option value="2025">2025</option>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
        </select>
      </div>
      <div className="single-model-search37">
        <h2>Select Make</h2>
        <select className="form-control38">
          <option value="default">Make</option>
          <option value="toyota">Toyota</option>
          <option value="ford">Ford</option>
          <option value="porsche">Porsche</option>
          <option value="honda">Honda</option>
        </select>
      </div>
      <div className="single-model-search37">
        <h2>Select Model</h2>
        <select className="form-control38">
          <option value="default">Model</option>
          <option value="ALTIS">ALTIS</option>
          <option value="MARK X">MARK X</option>
          <option value="PREMIO">PREMIO</option>
          <option value="GRANDE">GRANDE</option>
          <option value="YARIS">YARIS</option>
        </select>
      </div>
      <div className="single-model-search37">
        <h2>Body Style</h2>
        <select className="form-control38">
          <option value="default">Style</option>
          <option value="sedan">Sedan</option>
          <option value="suv">SUV</option>
          <option value="roadster">Roadster</option>
          <option value="sport">Sport</option>
        </select>
      </div>
      <div className="single-model-search37">
        <h2>Car Condition</h2>
        <select className="form-control38">
          <option value="default">Condition</option>
          <option value="used">Used</option>
          <option value="brand new">Brand New</option>
        </select>
      </div>
      <div className="single-model-search37">
        <h2>Select Price</h2>
        <select className="form-control38">
          <option value="default">Price</option>
          <option value="$41,500">$41,500</option>
          <option value="$16,605">$16,605</option>
          <option value="$40,000">$40,000</option>
          <option value="$20,000">$20,000</option>
          <option value="$10,000">$10,000</option>
        </select>
      </div>
      <div className="search-button-container39">
        <button type="submit">Search</button>
      </div>
    </div>
  );
};

export default SearchTable;