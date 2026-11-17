import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Breadcrumbs, FinalCta } from "@/components/ui";
import { BreadcrumbSchema } from "@/components/schema";
import { pageMetadata } from "@/lib/site";
import { company } from "@/lib/content";
export const metadata = pageMetadata(
  "Sobre o Chaveiro Nenê na Freguesia do Ó",
  "Conheça o Chaveiro Nenê, na Freguesia do Ó. Atendimento para serviços residenciais, automotivos e chaves codificadas.",
  "/sobre",
);
export default function About() {
  return (
    <>
      <div className="container">
        <Breadcrumbs items={[{ name: "Sobre o chaveiro" }]} />
        <section className="inner-hero">
          <div>
            <h1>
              Chaveiro Nenê.
              <br />
              <span>
                Atendimento na
                <br />
                Freguesia do Ó.
              </span>
            </h1>
            <p>
              Chaveiro Nenê - Freguesia do Ó. Atendimento residencial e
              automotivo. Entre em contato por WhatsApp ou telefone.
            </p>
          </div>
          <div className="about-brand">
            <Image
              src="/brand/logo-vertical-grafite.svg"
              width={360}
              height={360}
              alt="Chaveiro Nenê — logotipo"
            />
          </div>
        </section>
        <section className="content-section content-grid">
          <h2>
            Na Freguesia do Ó.
            <br />
            Presente na sua rotina.
          </h2>
          <div className="prose">
            <p>
              O Chaveiro Nenê está na {company.fullAddress}. Os serviços incluem atendimento residencial,
              automotivo, chaves codificadas e serviços tradicionais de
              chaveiro.
            </p>
            <p>
              Para consultar uma solução, descreva o problema e informe a
              localização. Quando possível, envie uma foto da chave ou da
              fechadura. Para veículos, marca, modelo e ano ajudam a verificar a
              compatibilidade.
            </p>
            <p>
              Para atendimento na Freguesia do Ó e nos bairros próximos,
              consulte a disponibilidade pelo WhatsApp. O orçamento e o
              deslocamento são combinados caso a caso.
            </p>
            <Link href="/contato" className="text-link">
              Entre em contato <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </section>
      </div>
      <FinalCta source="about" />
      <BreadcrumbSchema name="Sobre o chaveiro" path="/sobre" />
    </>
  );
}
