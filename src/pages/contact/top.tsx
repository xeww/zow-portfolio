export function TopSection() {
  return (
    <section className="bg-default-dark relative h-[500px] w-full">
      <img
        src="/illustration_3.png"
        alt="background illustatrion"
        className="h-full w-full rounded-b-4xl object-cover"
      />
      <ContactText />
    </section>
  );
}

export function ContactText() {
  return (
    <div className="absolute top-30 right-0 bottom-0 left-0 z-10 flex flex-col items-center justify-center">
      <h2 className="font-display mb-4 text-center text-3xl font-bold text-white drop-shadow-[0_0_2px_black]">
        Have an idea ? Let's connect !
      </h2>
      <p className="font-display text-center text-lg text-white drop-shadow-[0_0_2px_black]">
        Fill out the form below and I’ll get back to you.
        <br />
        <i>I typically respond within 12 hours.</i>
      </p>
    </div>
  );
}
