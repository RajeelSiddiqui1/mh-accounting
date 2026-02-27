import { Phone, MapPin, Mail } from "lucide-react";

export const TopBar = () => {
  return (
    <div className="bg-topbar py-2.5 px-4 md:px-8 lg:px-16">
      <div className="container-custom flex flex-wrap items-center justify-between text-sm text-topbar-foreground">
        <div className="flex items-center gap-2">
          <Phone className="w-4 h-4 text-primary" />
          <span>+1 (604) 555-0198</span>
        </div>
        <div className="hidden md:flex items-center gap-2">
          <MapPin className="w-4 h-4 text-primary" />
          <span>123 Main Street, Vancouver, BC V6B 1A1</span>
        </div>
        <div className="flex items-center gap-2">
          <Mail className="w-4 h-4 text-primary" />
          <span>info@mheaccounting.ca</span>
        </div>
      </div>
    </div>
  );
};
