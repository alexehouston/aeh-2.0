import "./Home.css";

export default function Home() {
  return (
    <div className="Home">
      <img className="img1" src="/assets/3d/16.png" alt="" />
      <img className="img2" src="/assets/3d/1.png" alt="" />
      <img className="img3" src="/assets/3d/9.png" alt="" />
      <img className="img4" src="/assets/3d/2.png" alt="" />
      <img className="img5" src="/assets/3d/17.png" alt="" />
      <img className="img6" src="/assets/3d/8.png" alt="" />
      <img className="img7" src="/assets/3d/7.png" alt="" />
      <img className="img8" src="/assets/3d/10.png" alt="" />

      <svg>
        <filter id="pixelate" x="0" y="0">
          <feFlood x="4" y="4" height="2" width="2" />
          <feComposite width="10" height="10" />
          <feTile result="a" />
          <feComposite in="SourceGraphic" in2="a" operator="in" />
          <feMorphology operator="dilate" radius="5" />
        </filter>
      </svg>
    </div>
  );
}
