export function Advantages() {
  return (
    <section className="flex flex-col justify-center pt-10 gap-10">
      <ul className="flex flex-col  text-5xl font-bold text-[#ffaa00]  text-center gap-5">
        <p className="mb-5">
          {" "}
          Aproveite a luz do sol e <br /> gere sua própria energia!
        </p>
        <li className="font-semibold text-[#00324b] text-3xl ">
          - Até 95% de economia na conta de energia
        </li>
        <li className="font-semibold text-[#00324b] text-3xl">
          - Livre de ajustes tarifários
        </li>
        <li className="font-semibold text-[#00324b] text-3xl">
          - Investimento de baixo risco
        </li>
        <li className="font-semibold text-[#00324b] text-3xl">
          - Valorização do imóvel e da marca
        </li>
        <li className="font-semibold text-[#00324b] text-3xl">
          - Compromisso socioambiental
        </li>
        <li className="font-semibold text-[#00324b] text-3xl">
          - Baixa manutenção
        </li>
      </ul>
      <img
        className="w-full h-[75vh]"
        src="/img-bottom.jpeg"
        alt="Modulos Fotovoltaicos"
      />
    </section>
  );
}
