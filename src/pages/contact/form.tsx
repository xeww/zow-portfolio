import { ArrowRightIcon } from "lucide-react";

export default function ContactForm() {
  return (
    <form
      action="https://formspree.io/f/xpwjvkej"
      method="POST"
      className={
        "bg-light-dark mx-auto mt-12 flex w-full max-w-[640px] flex-col items-center justify-center gap-6 rounded-2xl p-4 text-white"
      }
    >
      <Input type={"text"} name={"name"} placeholder={"Your Name"} />
      <Input type={"email"} name={"email"} placeholder={"Your E-mail"} />
      <TextArea name={"message"} placeholder={"Your Message"} />
      <SubmitButton />
    </form>
  );
}

function Input({
  type,
  name,
  placeholder,
}: {
  type: string;
  name: string;
  placeholder: string;
}) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      required
      className={
        "border-green-primary font-display rounded-xl border-2 p-2 text-lg text-white transition-transform duration-300 ease-in-out focus:scale-105"
      }
    />
  );
}

function TextArea({
  name,
  placeholder,
}: {
  name: string;
  placeholder: string;
}) {
  return (
    <textarea
      name={name}
      placeholder={placeholder}
      required
      className={
        "border-green-primary font-display rounded-xl border-2 p-2 text-lg text-white transition-transform duration-300 ease-in-out focus:scale-105"
      }
    />
  );
}

function SubmitButton() {
  return (
    <button
      type="submit"
      className={
        "font-display hover:text-light-dark flex cursor-pointer items-center justify-center gap-1 rounded-3xl border-2 border-white px-8 py-2 text-lg font-bold transition duration-300 ease-in-out hover:bg-white"
      }
    >
      SUBMIT
      <ArrowRightIcon />
    </button>
  );
}
