export function Services() {
  return (
    <section className="grid grid-cols-2">
      <img
        className="col-start-1 col-end-2 w-full row-start-1"
        src="/img1.webp"
        alt="Modulos"
      />
      <div className="flex flex-col items-center  justify-center gap-10">
        <h2 className="text-4xl text-center">
          Geração <br /> Solar Fotovoltaica
        </h2>
        <ul className="flex flex-col text-2xl gap-5 text-center">
          <li>✔ Projeto</li>
          <li>✔ Homologação</li>
          <li>✔ Instalação</li>
          <li>✔ Manutenção</li>
          <li>✔ Ampliações</li>
          <li>✔ Remanejamento</li>
        </ul>
      </div>

      <div className="flex flex-col items-center  justify-center gap-10">
        <h2 className="text-4xl text-center">Instalações Elétricas</h2>
        <ul className="flex flex-col text-2xl gap-5 text-center">
          <li>✔ Projetos e instalação</li>
          <li>✔ Novas instalações e reformas</li>
          <li>✔ Adequações normativas</li>
          <li>✔ Inspeções e laudos</li>
        </ul>
      </div>

      <img
        className="col-start-2 col-end-3 w-full row-start-2"
        src="/img2.webp"
        alt="Modulos"
      />

      <img
        className="col-start-1 col-end-2 w-full row-start-3"
        src="/img3.webp"
        alt="Modulos"
      />

      <div className="flex flex-col items-center  justify-center gap-10">
        <h2 className="text-4xl text-center">Eficiência energética</h2>
        <ul className="flex flex-col text-2xl gap-5 text-center">
          <li>✔ Análises de potenciais economias</li>
          <li>✔ Medições e identificações de falhas</li>
        </ul>
      </div>
    </section>
  );
}
