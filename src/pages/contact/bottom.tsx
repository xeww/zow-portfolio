import ContentWrapper from "@/components/contentWrapper.tsx";
import { Mail, MessageCircleCode } from "lucide-react";
import type { JSX } from "react";
import ContactForm from "@/pages/contact/form.tsx";

export default function BottomSection() {
  return (
    <section className={"bg-default-dark px-4 pt-4 pb-12"}>
      <ContentWrapper maxWidth={"1480px"} px={0} py={0}>
        <h1
          className={
            "font-special mb-4 text-center text-6xl font-bold text-white"
          }
        >
          GET IN TOUCH
        </h1>
        <div className={"flex flex-col justify-center gap-2 sm:flex-row"}>
          <ContactWay
            icon={<MessageCircleCode color={"white"} size={30} />}
            title={"Discord"}
            text={"Username: @ikwqz"}
            color={"#5662F6"}
          />
          <ContactWay
            icon={<Mail color={"white"} size={30} />}
            title={"E-mail"}
            text={"zowsbuild@gmail.com"}
            color={"#EA4335"}
          />
        </div>
        <ContactForm />
      </ContentWrapper>
    </section>
  );
}

function ContactWay({
  icon,
  title,
  text,
  color,
}: {
  icon: JSX.Element;
  title: string;
  text: string;
  color: string;
}) {
  return (
    <div
      style={{ backgroundColor: color }}
      className={
        "flex cursor-default items-center justify-center gap-4 rounded-xl px-8 py-2 transition-opacity duration-300 ease-in-out hover:opacity-90"
      }
    >
      {icon}
      <div className={"font-display text-white"}>
        <p className={"text-lg font-bold"}>{title}</p>
        <p>{text}</p>
      </div>
    </div>
  );
}
