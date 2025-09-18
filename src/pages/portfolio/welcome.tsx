import { Link } from "react-router";
import { MessageCircleQuestionMark } from "lucide-react";

export function Welcome() {
  return (
    <section className="bg-default-dark relative h-[600px] w-full">
      <img
        src="/illustration_1.webp"
        alt="background illustatrion"
        className="h-full w-full rounded-b-4xl object-cover"
      />
      <WelcomeText />
    </section>
  );
}

export function WelcomeText() {
  return (
    <div className="absolute top-15 right-0 bottom-0 left-0 z-10 flex flex-col items-center justify-center">
      <h2 className="font-display mb-4 text-3xl font-bold text-white">
        Welcome to my Portfolio
      </h2>
      <p className="font-display text-center text-lg text-white">
        Discover my most recent builds !
        <br />
        Any question ? Join my Discord server for support.
      </p>
      <DiscordButton />
    </div>
  );
}

export function DiscordButton() {
  return (
    <Link
      to="https://discord.gg/HnPG2bVFKm"
      className="font-display bg-green-secondary mt-6 flex items-center gap-1 rounded-3xl px-8 py-2 text-white transition duration-200 ease-in-out hover:scale-105 active:translate-y-1"
    >
      <MessageCircleQuestionMark />
      <p className="text-xl">Join my Discord</p>
    </Link>
  );
}
