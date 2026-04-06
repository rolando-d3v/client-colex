import { useState, useEffect } from "react";

const images = [
  "https://res.cloudinary.com/perusap/image/upload/v1775503946/colex/Gemini_Generated_Image_3ifhbc3ifhbc3ifh_aebc3a.png",
  "https://res.cloudinary.com/perusap/image/upload/v1775503783/colex/pepep_ngree8.png",
  "https://res.cloudinary.com/perusap/image/upload/v1775501427/colex/photo-1577896851231-70ef18881754_q8z1nk.avif",
  "https://res.cloudinary.com/perusap/image/upload/v1775501150/colex/cole_rbhtes.jpg",
  "https://res.cloudinary.com/perusap/image/upload/v1775504633/colex/Gemini_Generated_Image_737f0n737f0n737f_oxjn9g.png",
  "https://res.cloudinary.com/perusap/image/upload/v1775503509/colex/Gemini_Generated_Image_gscbrkgscbrkgscb_ap9s1e.png"
];

function Fondo() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
      }}
    >
      {images.map((img, index) => (
        <div
          key={index}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: `url(${img})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: index === currentIndex ? 1 : 0,
            transition: "opacity 1s ease-in-out",
            zIndex: index === currentIndex ? 1 : 0,
          }}
        />
      ))}
    </div>
  );
}

export default Fondo;
