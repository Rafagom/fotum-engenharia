// import "react-app-polyfill/ie11";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Formik, Field, Form, FormikHelpers } from "formik";

interface Values {
  firstName: string;
  lastName: string;
  email: string;
}

export function Form2() {
  return (
    <section className="flex flex-col justify-center items-center w-full py-10 gap-10">
      <h1 className="text-4xl font-bold text-[#ffaa00]">
        Se interessou? Fale conosco!
      </h1>

      <Formik
        initialValues={{
          name: "Pudim",
          email: "",
          subject: "",
          cost: "",
          message: "",
        }}
        onSubmit={(
          values: Values,
          { setSubmitting }: FormikHelpers<Values>
        ) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 500);
        }}
      >
        <Form className="flex flex-col text-left gap-1 item font-medium">
          <label htmlFor="name">Nome</label>
          <Field
            className="min-w-[304px] w-[60vw] h-10  p-2 rounded border border-solid border-[#00324b] bg-inherit resize-none text-[#00324b] overflow-auto focus:border-[#ffaa00] focus:ring-[#ffaa00] focus:outline-none scrollbar-thumb-zinc-700 scrollbar-thin scrollbar-track-transparent mb-3"
            id="name"
            name="name"
            placeholder="Qual o seu nome?"
          />

          <label htmlFor="email">Email</label>
          <Field
            className="min-w-[304px] w-[60vw] h-10  p-2 rounded border border-solid border-[#00324b] bg-inherit resize-none text-[#00324b] overflow-auto focus:border-[#ffaa00] focus:ring-[#ffaa00] focus:outline-none scrollbar-thumb-zinc-700 scrollbar-thin scrollbar-track-transparent mb-3"
            id="email"
            name="email"
            placeholder="john@acme.com"
            type="email"
          />
          <label htmlFor="subject">Assunto</label>
          <Field
            className="min-w-[304px] w-[60vw] h-10  p-2 rounded border border-solid border-[#00324b] bg-inherit resize-none text-[#00324b] overflow-auto focus:border-[#ffaa00] focus:ring-[#ffaa00] focus:outline-none scrollbar-thumb-zinc-700 scrollbar-thin scrollbar-track-transparent mb-3"
            id="subject"
            name="subject"
            placeholder="Sobre o que gostaria de conversar?"
          />
          <label htmlFor="cost">Valor médio da conta de energia</label>
          <Field
            className="min-w-[304px] w-[60vw] h-10  p-2 rounded border border-solid border-[#00324b] bg-inherit resize-none text-[#00324b] overflow-auto focus:border-[#ffaa00] focus:ring-[#ffaa00] focus:outline-none scrollbar-thumb-zinc-700 scrollbar-thin scrollbar-track-transparent mb-3"
            id="cost"
            name="cost"
            placeholder="Insira o valor em reais(R$) ou em energia (Kwh)"
          />
          <label htmlFor="message">Mensagem</label>
          <Field
            className="min-w-[304px] w-[60vw] min-h-[160px] h-full p-2 rounded border border-solid border-[#00324b] bg-inherit resize-none text-[#00324b] overflow-auto focus:border-[#ffaa00] focus:ring-[#ffaa00] focus:outline-none scrollbar-thumb-zinc-700 scrollbar-thin scrollbar-track-transparent"
            id="message"
            name="message"
            as="textarea"
            placeholder="Insira o valor em reais(R$) ou em energia (Kwh)"
          />
          <div className="flex flex-col w-full items-end">
            <button
              className="flex rounded bg-[#00324b] text-[#ffaa00] font-semibold text-lg  px-5 py-2  mt-5 justify-center hover:bg-[#174d68] transition-colors disabled:opacity-50 disabled:hover:bg-[#00324b]"
              type="submit"
            >
              Submit
            </button>
          </div>
        </Form>
      </Formik>
    </section>
  );
}
