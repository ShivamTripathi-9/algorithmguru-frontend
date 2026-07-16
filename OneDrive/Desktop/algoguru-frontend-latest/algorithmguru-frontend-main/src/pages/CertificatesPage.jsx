import DashboardLayout from "../components/layout/DashboardLayout";
import CertificateHero from "../components/certificates/CertificateHero";
import CertificateGrid from "../components/certificates/CertificateGrid";

export default function CertificatesPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <CertificateHero />
        <CertificateGrid />
      </div>
    </DashboardLayout>
  );
}