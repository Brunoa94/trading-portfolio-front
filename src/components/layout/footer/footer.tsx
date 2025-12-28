import { Gradient } from "@/theme/gradient";
import { Copyright } from "lucide-react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={`${Gradient.GrayCard} border-border/50 mt-12 mt-auto flex w-full items-center justify-center gap-2 border-t bg-gradient-to-r py-5`}
    >
      <Copyright className={`text-gray-300`} />
      <p className={`text-muted-foreground text-md font-notch`}>
        © {currentYear} Dumblee. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
