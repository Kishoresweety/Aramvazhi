import Icon from "./Icon";

interface SectionBadgeProps {
  icon?: string;
  children: React.ReactNode;
  light?: boolean;
}

export default function SectionBadge({ icon, children, light = false }: SectionBadgeProps) {
  return (
    <div className={`section-badge${light ? " section-badge-light" : ""}`}>
      {icon && <Icon name={icon} size={13} />}
      {children}
    </div>
  );
}
