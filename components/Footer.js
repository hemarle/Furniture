import FooterLink from "./FooterLink";
import { services, social, furniture } from "../static/js/footer.js";
function Footer({ title, about }) {
  return (
    <div className="footer p-[118px] bg-light-grey ">
      <section className="md:flex items-center">
        <div className="footer__Left flex-[1] mx-6">
          <h3 className="mb-4.5">{title}</h3>

          <p className=""> {about}</p>
        </div>

        <FooterLink data={services} title="Services" />
        <FooterLink data={furniture} title="Furniture" />
        <FooterLink data={social} title="Social" icon />
      </section>
      <section></section>
    </div>
  );
}

export default Footer;
