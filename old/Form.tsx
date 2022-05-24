import { FormEvent, useState } from "react";

export function Form() {
  const [isFormEnd, setIsFormEnd] = useState(false);
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formSubject, setFormSubject] = useState("");
  const [formCost, setFormCost] = useState("");
  const [formComment, setFormComment] = useState("");

  function handleSubmitForm(event: FormEvent) {
    event.preventDefault();
    setIsFormEnd(true);
    console.log({ formName, formEmail, formSubject, formCost, formComment });
  }

  return (
    <section className="flex flex-col justify-center items-center w-full py-10 gap-10">
      {isFormEnd ? (
        <p className="text-center">
          {" "}
          Obrigado pela mensagem! <br /> Em breve entraremos em contato!{" "}
        </p>
      ) : (
        <>
          <h1 className="text-4xl font-bold text-[#ffaa00]">
            Se interessou? Fale conosco!
          </h1>

          <form
            className="flex flex-col text-left gap-1 item font-medium"
            onSubmit={handleSubmitForm}
          >
            <label className="">Nome</label>
            <input
              type="text"
              className="min-w-[304px] w-[60vw] h-10  p-2 rounded border border-solid border-[#00324b] bg-inherit resize-none text-[#00324b] overflow-auto focus:border-[#ffaa00] focus:ring-[#ffaa00] focus:outline-none scrollbar-thumb-zinc-700 scrollbar-thin scrollbar-track-transparent mb-3"
              placeholder="Insira seu nome"
              onChange={(event) => setFormName(event.target.value)}
            />

            <label className="">Email</label>
            <input
              type="text"
              className="min-w-[304px] w-[60vw] h-10 p-2 rounded border border-solid border-[#00324b] bg-inherit resize-none text-[#00324b] overflow-auto focus:border-[#ffaa00] focus:ring-[#ffaa00] focus:outline-none scrollbar-thumb-zinc-700 scrollbar-thin scrollbar-track-transparent mb-3"
              placeholder="Insira seu Email"
              onChange={(event) => setFormEmail(event.target.value)}
            />

            <label className="">Assunto</label>
            <input
              type="text"
              className="min-w-[304px] w-[60vw] h-10 p-2 rounded border border-solid border-[#00324b] bg-inherit resize-none text-[#00324b] overflow-auto focus:border-[#ffaa00] focus:ring-[#ffaa00] focus:outline-none scrollbar-thumb-zinc-700 scrollbar-thin scrollbar-track-transparent mb-3"
              placeholder="Insira o assunto"
              onChange={(event) => setFormSubject(event.target.value)}
            />

            <label className="">Valor médio da conta de energia</label>
            <input
              type="text"
              className="min-w-[304px] w-[60vw] h-10 p-2 rounded border border-solid border-[#00324b] bg-inherit resize-none text-[#00324b] overflow-auto focus:border-[#ffaa00] focus:ring-[#ffaa00] focus:outline-none scrollbar-thumb-zinc-700 scrollbar-thin scrollbar-track-transparent mb-3"
              placeholder="Insira o valor em reais(R$) ou em energia (Kwh)"
              onChange={(event) => setFormCost(event.target.value)}
            />

            <label className="">Mensagem</label>
            <textarea
              className="min-w-[304px] w-[60vw] min-h-[160px] h-full p-2 rounded border border-solid border-[#00324b] bg-inherit resize-none text-[#00324b] overflow-auto focus:border-[#ffaa00] focus:ring-[#ffaa00] focus:outline-none scrollbar-thumb-zinc-700 scrollbar-thin scrollbar-track-transparent"
              placeholder="Digite sua mensagem aqui"
              onChange={(event) => setFormComment(event.target.value)}
            ></textarea>
            <div className="flex flex-col w-full items-end">
              <button
                type="submit"
                className="flex rounded bg-[#00324b] text-[#ffaa00] font-semibold text-lg  px-5 py-2  mt-5 justify-center hover:bg-[#174d68] transition-colors disabled:opacity-50 disabled:hover:bg-[#00324b]"
                onSubmit={() => handleSubmitForm}
                disabled={
                  formCost.length == 0 ||
                  formEmail.length == 0 ||
                  formName.length == 0
                }
              >
                {" "}
                Enviar
              </button>
            </div>
          </form>
        </>
      )}
    </section>
  );
}
