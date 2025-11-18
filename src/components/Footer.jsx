import footerLinks from "../public/footerLinks"

export default function Footer() {


    return (
        <footer>
            <div className="container">
                <div className="row">
                    {footerLinks.map((el, index) => (
                        <div className="col-6 col-md-2 mb-4" key={index}>
                            <h5 className="fw-bold mb-3">{el.title}</h5>

                            <ul className="list-unstyled">
                                {el.links.map((link, i) => (
                                    <li key={i} className="mb-2">
                                        <a href={link.url} className="text-decoration-none">
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </footer>
    )
}