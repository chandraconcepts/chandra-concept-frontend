// src/components/Visualization.tsx
import React, { useState } from 'react';
import texturedPaper from "../assets/media/brushed-alum.png";

const Visualization: React.FC = () => {
  const [paperSize, setPaperSize] = useState('a4');

  const paperSizes = {
    a4: { dimensions: "A4 (210 × 297 mm)", width: "210px", height: "297px" },
    a5: { dimensions: "A5 (148 × 210 mm)", width: "148px", height: "210px" },
    a3: { dimensions: "A3 (297 × 420 mm)", width: "297px", height: "420px" },
    a2: { dimensions: "A2 (420 × 594 mm)", width: "420px", height: "594px" },
    a1: { dimensions: "A1 (594 × 841 mm)", width: "594px", height: "841px" },
    a0: { dimensions: "A0 (841 × 1189 mm)", width: "841px", height: "1189px" },
    "business-card": { dimensions: "Business Card (85 × 55 mm)", width: "85px", height: "55px" },
    letter: { dimensions: "Letter (216 × 279 mm)", width: "216px", height: "279px" },
    legal: { dimensions: "Legal (216 × 356 mm)", width: "216px", height: "356px" },
    tabloid: { dimensions: "Tabloid (279 × 432 mm)", width: "279px", height: "432px" },
    "poster-small": { dimensions: "Small Poster (457 × 610 mm)", width: "457px", height: "610px" },
    "poster-large": { dimensions: "Large Poster (610 × 914 mm)", width: "610px", height: "914px" }
  };

  const selectedSize = paperSizes[paperSize as keyof typeof paperSizes] || paperSizes.a4;

  return (
    <section id="visualization" className="py-20 px-[5%] bg-gray-50">
      <div className="section-header text-center mb-12">
        <h2 className="section-title text-5xl font-bold text-[#2b2101] opacity-0 animate-fadeInUp">
          Printing Visualization
          <span className="block w-20 h-1 bg-red-600 mx-auto mt-2 rounded"></span>

        </h2>
        <p className="section-description text-lg text-gray max-w-2xl mx-auto mt-5 leading-relaxed">
          Explore printing concepts through interactive diagrams and visual aids
        </p>
      </div>

      <div className="visualization-grid grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="visualization-content">
          <h3 className="text-2xl font-semibold mb-4 text-dark">Color Theory & Printing</h3>
          <p className="text-gray-500 mb-4 leading-relaxed">
            Understanding color is crucial for achieving the perfect print. Our
            color wheel visualization helps explain how colors interact and
            combine in the printing process.
          </p>
          <p className="text-gray-500 mb-6 leading-relaxed font-normal">
            In printing, we primarily use the CMYK color model (Cyan, Magenta,
            Yellow, Black) to create a wide spectrum of colors. This differs
            from the RGB model used in digital displays.
          </p>

          <div className="printing-process space-y-6 max-w-lg mx-auto">
            {[
              { number: "1", title: "Design Creation", description: "Artwork is created using design software, typically in RGB or CMYK mode." },
              { number: "2", title: "Color Separation", description: "The design is separated into four color plates: cyan, magenta, yellow, and black." },
              { number: "3", title: "Plate Making", description: "Each color separation is transferred to a printing plate." },
              { number: "4", title: "Printing Process", description: "Plates transfer ink to paper in sequence to create the final full-color image." }
            ].map((step, index) => (
              <div key={index} className="process-step flex items-start gap-5">
                <div className="step-number w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  {step.number}
                </div>
                <div className="step-content">
                  <h4 className="text-lg font-semibold mb-2 text-primary">{step.title}</h4>
                  <p className="text-gray leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="visualization-diagram bg-white rounded-2xl p-8 shadow-lg flex justify-center items-center min-h-96">
          <div className="color-wheel relative w-72 h-72 rounded-full bg-conic-gradient from-red via-yellow via-lime via-aqua via-blue via-magenta to-red">
            <div className="relative w-[300px] h-[300px] rounded-full bg-colorWheel">
              <div className="color-info absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full w-32 h-32 flex flex-col justify-center items-center text-center shadow-lg">
                <h4 className="text-lg font-semibold mb-1 text-dark">CMYK Model</h4>
                <p className="text-sm text-gray">Cyan, Magenta, Yellow, Black</p>
              </div>

            </div>

          </div>
        </div>
      </div>
      {/* Paper Comparison */}
      <div className="paper-comparison flex justify-between gap-5 mt-10 flex-wrap">

        {/* Glossy Paper */}
        <div className="paper-type flex-1 text-center bg-white rounded-xl p-6 shadow-md">
          <h4 className="mb-4 text-primary font-semibold text-lg">Glossy Paper</h4>

          <div className="paper-sample glossy h-40 rounded-lg mb-4 border border-gray-200 bg-glossyPaper shadow-inner"></div>

          <p className="text-gray-600">
            High shine finish, vibrant colors, ideal for photos and marketing materials
          </p>
        </div>

        {/* Matte Paper */}
        <div className="paper-type flex-1 text-center bg-white rounded-xl p-6 shadow-md">
          <h4 className="mb-4 text-primary font-semibold text-lg">Matte Paper</h4>

          <div className="paper-sample h-40 rounded-lg mb-4 border border-gray-200 bg-mattePaper"></div>

          <p className="text-gray-600">
            Non-reflective surface, reduces glare, professional look for documents
          </p>
        </div>

        {/* Recycled Paper */}
        <div className="paper-type flex-1 text-center bg-white rounded-xl p-6 shadow-md">
          <h4 className="mb-4 text-primary font-semibold text-lg">Recycled Paper</h4>

          <div className="paper-sample h-40 rounded-lg mb-4 border border-gray-200 bg-recycledPaper"></div>

          <p className="text-gray-600">
            Eco-friendly option, natural texture, perfect for sustainable branding
          </p>
        </div>

        {/* Textured Paper */}
        <div className="paper-type flex-1 text-center bg-white rounded-xl p-6 shadow-md">
          <h4 className="mb-4 text-primary font-semibold text-lg">Textured Paper</h4>

<div
  className="paper-sample h-40 rounded-lg mb-4 border border-gray-200 bg-cover bg-center"
  style={{ backgroundImage: `url(${texturedPaper})` }}
></div>

          <p className="text-gray-600">
            Adds dimension and tactile quality, excellent for premium stationery
          </p>
        </div>

      </div>

      {/* Paper Size Visualization */}
      <div className="section-header text-center mb-12 mt-12">
        <h2 className="section-title text-5xl font-bold text-[#2b2101] opacity-0 animate-fadeInUp">
          Paper Size Visualization
          <span className="block w-20 h-1 bg-red-600 mx-auto mt-2 rounded"></span>

        </h2>
        <p className="section-description text-lg text-gray max-w-2xl mx-auto mt-5 leading-relaxed">
          Select a paper size to see its dimensions visually

        </p>
        <div className="paper-demo-container max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-lg mt-16">

          <div className="paper-controls flex items-center gap-5 mb-10 flex-wrap">
            <label htmlFor="paper-size" className="font-semibold text-dark">Select Paper Size:</label>
            <select
              id="paper-size"
              value={paperSize}
              onChange={(e) => setPaperSize(e.target.value)}
              className="p-3 border-2 border-blue-500 rounded-lg bg-white text-dark min-w-64 cursor-pointer"
            >
              <option value="a4">A4 (210 × 297 mm)</option>
              <option value="a5">A5 (148 × 210 mm)</option>
              <option value="a3">A3 (297 × 420 mm)</option>
              <option value="a2">A2 (420 × 594 mm)</option>
              <option value="a1">A1 (594 × 841 mm)</option>
              <option value="a0">A0 (841 × 1189 mm)</option>
              <option value="business-card">Business Card (85 × 55 mm)</option>
              <option value="letter">Letter (216 × 279 mm)</option>
              <option value="legal">Legal (216 × 356 mm)</option>
              <option value="tabloid">Tabloid (279 × 432 mm)</option>
              <option value="poster-small">Small Poster (457 × 610 mm)</option>
              <option value="poster-large">Large Poster (610 × 914 mm)</option>
            </select>
          </div>

          <div className="paper-visualization flex flex-col items-center gap-8">
            <div
              className="paper-sheet bg-white border border-gray-300 shadow-lg flex justify-center items-center transition-all duration-500 relative overflow-hidden bg-gray-50"
              style={{
                width: selectedSize.width,
                height: selectedSize.height,
                background: 'repeating-linear-gradient(45deg, rgba(52, 152, 219, 0.05), rgba(52, 152, 219, 0.05) 10px, rgba(52, 152, 219, 0.1) 10px, rgba(52, 152, 219, 0.1) 20px)'
              }}
            ></div>
            <div className="paper-dimensions text-lg font-semibold text-dark text-center p-4 bg-blue-50 rounded-lg w-full max-w-md">
              {selectedSize.dimensions}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Visualization;