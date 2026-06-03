import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = { title: "Community Guidelines" };

const sections = [
  { title:"Be Respectful",           body:"Treat every community member with dignity and respect. Disagreements are natural but should be handled constructively and with empathy. Personal attacks, insults, and disrespectful language have no place in our community." },
  { title:"Stay On Topic",           body:"Keep discussions relevant to digital welfare, technology ethics, cybersecurity, media literacy, and related areas. Off-topic content, spam, or unsolicited promotional messages disrupt the quality of our shared conversations." },
  { title:"Share Knowledge Freely",  body:"Aram Vazhi thrives on the open exchange of ideas. Share resources, research, and insights generously. Credit original authors and sources appropriately to maintain trust and intellectual integrity." },
  { title:"Protect Privacy",         body:"Never share personal information about yourself or others without explicit consent. Be mindful of what you post — once shared, information can be difficult to fully control. Respect the digital boundaries of all members." },
  { title:"Report Issues",           body:"If you witness harassment, misinformation, or unethical behavior, please report it to the team promptly. We rely on community members to help maintain the integrity and safety of our shared spaces." },
  { title:"Support New Members",     body:"Everyone starts somewhere. Experienced members are encouraged to welcome newcomers, answer questions patiently, and foster a culture of learning, inclusion, and mutual growth." },
  { title:"No Spam or Self-Promotion",body:"Unsolicited promotional content, repeated messages, or irrelevant links are not permitted. All contributions should add genuine value, insight, or learning opportunities to the community." },
];

export default function CommunityGuidelinesPage() {
  return <LegalPage title="Community Guidelines" icon="users" badge="Community" sections={sections} updated="January 2025" />;
}
