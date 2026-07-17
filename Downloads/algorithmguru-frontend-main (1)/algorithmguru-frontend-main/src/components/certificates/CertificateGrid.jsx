import CertificateCard from "./CertificateCard";

const certificates = [
  {
    id: 1,
    title: "Machine Learning Fundamentals",
    date: "12 June 2026",
  },
  {
    id: 2,
    title: "Spam Email Detection Project",
    date: "18 June 2026",
  },
  {
    id: 3,
    title: "AI Chatbot with NLP",
    date: "25 June 2026",
  },
  {
    id: 4,
    title: "Computer Vision Essentials",
    date: "30 June 2026",
  },
];

export default function CertificateGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {certificates.map((item) => (
        <CertificateCard
          key={item.id}
          certificate={item}
        />
      ))}
    </div>
  );
}