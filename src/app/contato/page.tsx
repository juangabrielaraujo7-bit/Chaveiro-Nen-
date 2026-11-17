import { Phone, MapPin, Clock3, ArrowUpRight } from "lucide-react";
import { Breadcrumbs, ContactButtons, FaqList } from "@/components/ui";
import { BreadcrumbSchema } from "@/components/schema";
import { company, homeFaq } from "@/lib/content";
import { pageMetadata } from "@/lib/site";
export const metadata = pageMetadata(
  "Contato e localização do Chaveiro Nenê",
  `Fale com o ${company.name} pelo WhatsApp ${company.phone}. Endereço: ${company.fullAddress}.`,
  "/contato",
);
export default function Contact() {
  return (
    <>
      <div className="container">
        <Breadcrumbs items={[{ name: "Contato" }]} />
        <section className="text-hero">
          <h1>
            Conte o que aconteceu.
            <br />
            <span>Fale com o Nenê.</span>
          </h1>
          <p>
            Informe o serviço de que precisa e sua localização.
            <br />
            Para ajudar na avaliação, envie uma foto quando possível.
          </p>
          <ContactButtons source="contact" />
        </section>
        <section className="contact-grid">
          <article>
            <Phone size={26} aria-hidden="true" />
            <h2>Telefone e WhatsApp</h2>
            <a
              href={company.tel}
              data-conversion="phone_click"
              data-source="contact_details"
            >
              {company.phone}
            </a>
            <p>
              Contato para orçamento
              <br />e solicitação de atendimento.
            </p>
          </article>
          <article>
            <MapPin size={26} aria-hidden="true" />
            <h2>Onde estamos</h2>
            <p>
              {company.address}
              <br />
              {company.district} · {company.city}, {company.state}
              <br />
              CEP {company.zip}
            </p>
            <a
              className="text-link"
              href={company.maps}
              data-conversion="maps_click"
              data-source="contact"
              target="_blank"
              rel="noopener noreferrer"
            >
              Abrir rota <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </article>
          <article>
            <Clock3 size={26} aria-hidden="true" />
            <h2>Horário de atendimento</h2>
            <p>
              Ligue ou envie uma mensagem.
              <br />
              Consulte a disponibilidade e
              <br />
              combine os detalhes do atendimento.
            </p>
          </article>
        </section>
        <section className="faq-section">
          <h2>Dúvidas frequentes.</h2>
          <FaqList items={homeFaq.slice(1, 4)} />
        </section>
      </div>
      <BreadcrumbSchema name="Contato" path="/contato" />
    </>
  );
}
