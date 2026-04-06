import Monogram from "@/components/ui/Monogram";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <Monogram size={20} />
          Imdex
        </div>
        <div className="footer-copy">
          &copy; {new Date().getFullYear()} Imdex. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
