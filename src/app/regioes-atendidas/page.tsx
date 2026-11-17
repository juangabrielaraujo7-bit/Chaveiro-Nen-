import { MapPin, ArrowUpRight } from "lucide-react";
import { Breadcrumbs, ContactButtons, FinalCta } from "@/components/ui";
import { BreadcrumbSchema } from "@/components/schema";
import { regions, company } from "@/lib/content";
import { pageMetadata } from "@/lib/site";
export const metadata = pageMetadata(
  "Regiões atendidas na Freguesia do Ó",
  "Chaveiro Nenê na Freguesia do Ó. Consulte a disponibilidade de atendimento residencial ou automotivo para o seu endereço.",
  "/regioes-atendidas",
);
export default function RegionsPage() {
  return (
    <>
      <div className="container">
        <Breadcrumbs items={[{ name: "Regiões atendidas" }]} />
        <section className="text-hero">
          <h1>
            O seu chaveiro
            <br />
            na Freguesia do Ó<br />
            <span>e nos bairros próximos.</span>
          </h1>
          <p>
            Informe seu endereço e o serviço de que precisa. A disponibilidade e
            a previsão de deslocamento são combinadas no contato.
          </p>
          <ContactButtons source="regions" />
        </section>
        <section className="content-section regions-content">
          <h2>Consulte o atendimento por bairro.</h2>
          <ul className="region-list">
            {regions.map((r, i) => (
              <li key={r}>
                <MapPin size={20} aria-hidden="true" />
                <div>
                  <strong>{r}</strong>
                  <p>
                    {i === 0
                      ? "Bairro onde fica o Chaveiro Nenê."
                      : "Consulte a disponibilidade de atendimento para seu endereço."}
                  </p>
                </div>
              </li>
            ))}
          </ul>
          <div className="prose">
            <h2>Está em outra região?</h2>
            <p>
              Envie seu bairro e endereço pelo WhatsApp para consultar a
              possibilidade de atendimento. Combine a disponibilidade e os
              detalhes do deslocamento diretamente com o Nenê.
            </p>
            <h2>Vai ao endereço?</h2>
            <p>
              {company.fullAddress}. Entre em contato antes de sair para combinar a
              visita.
            </p>
            <a
              href={company.maps}
              className="text-link"
              data-conversion="maps_click"
              data-source="regions"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver no Google Maps <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </div>
        </section>
      </div>
      <FinalCta source="regions_final" />
      <BreadcrumbSchema name="Regiões atendidas" path="/regioes-atendidas" />
    </>
  );
}
