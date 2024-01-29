import Link from "next/link";

export default function Header() {
  return (
    <>
      <div id="section-one" className="">
        <div id="contact-content">
          <img
            src="/assets/ContactImg.png"
            className="section-header"
            alt="contact image"
          ></img>
          <span>
            {" "}
            <h1 style={{ display: "block" }}>Contact</h1>If you want to get in touch, drop me an email
            at <span className="green-colour">Livikj1996@gmail.com</span>.
            <div style={{ display: "block", marginTop: "2vw" }}>
              <div id="contact-links">
                <Link href="https://github.com/Livi-96" target="_blank">
                  <img
                    src="/assets/GitHub.png"
                    className="nav-btn"
                    alt="git hub button"
                  />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/olivia-johnson-7465301b0/"
                  target="_blank"
                >
                  <img
                    src="/assets/LinkedIn.png"
                    className="nav-btn"
                    alt="LinkedInButton"
                  />
                </Link>
              </div>
            </div>
          </span>
        </div>
      </div>
    </>
  );
}
