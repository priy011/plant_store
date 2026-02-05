import data from "./gram.json";
import "./gram.css";

export default function GramSection() {
  return (
    <section className="gram-section">
      <div className="gram-title">Sprout on the #Gram</div>

      <div className="gram-grid">
        {data.map((item, index) => (
          <div className="gram-item" key={index}>
            <img src={item.image} alt="" />
            {item.text && (
              <div className="gram-overlay">
                <p>{item.text}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
