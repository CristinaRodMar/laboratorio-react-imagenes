export function Footer() {
    return (
        <footer className="footer">
        <div className="footer-content">
            <p className="copyright"> © {new Date().getFullYear()} Mi App de Animales </p>
            <div className="footer-logo">
            <span className="material-symbols-outlined">pets</span>
            </div>
        </div>
        </footer>
    );
    }