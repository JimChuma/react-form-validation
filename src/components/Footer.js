export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="full-container">
      <div className="box-container">
        <div className="footer-div">
          <div className="route-links-div">
            <span>About</span>
            <span>Blog</span>
            <span>Jobs</span>
            <span>Help</span>
            <span>API</span>
            <span>Privacy</span>
            <span>Terms</span>
            <span>Locations</span>
            <span>Contact Us</span>
          </div>
          <div className="copyright-div">© {currentYear} Jim Oputa</div>
        </div>
      </div>
    </footer>
  );
}
