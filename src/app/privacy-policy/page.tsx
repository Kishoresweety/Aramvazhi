import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = { title: "Privacy Policy" };

const sections = [
  { title:"Information We Collect",     body:"We collect only the information you voluntarily provide when filling out volunteer applications, contact forms, or subscribing to updates — including name, email, LinkedIn profile, and areas of interest. We do not collect personal data automatically beyond basic anonymized analytics." },
  { title:"How We Use Your Information", body:"Your information is used solely to respond to inquiries, review volunteer applications, send relevant updates about Aram Vazhi programs, and improve our community initiatives. We never sell, rent, or share your personal information with third parties for commercial purposes." },
  { title:"Data Security",              body:"All information shared with us is stored securely and accessed only by authorized team members. We implement appropriate technical and organizational measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal data." },
  { title:"Your Rights",                body:"You have the right to access, correct, or delete your personal data at any time. You may also withdraw consent to receive communications. To exercise these rights, please reach out through our contact page and we will respond promptly." },
  { title:"Third-Party Links",          body:"Our website may contain links to external platforms such as LinkedIn, Instagram, YouTube, and X (Twitter). We are not responsible for the privacy practices of these external sites and encourage you to review their respective privacy policies." },
  { title:"Updates to This Policy",     body:"We may update this Privacy Policy periodically. Any significant changes will be communicated through our official channels. Continued use of our platforms after updates constitutes acceptance of the revised policy." },
];

export default function PrivacyPolicyPage() {
  return <LegalPage title="Privacy Policy" icon="lock" badge="Legal" sections={sections} updated="January 2025" />;
}
