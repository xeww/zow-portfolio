import { MessageCircleQuestionMark } from "lucide-react";
import { Link } from "react-router";

export default function PortfolioPage() {
  return (
    <div className="relative h-[50vh] w-full">
      <img
        src="/bg.jpg"
        alt="background illustatrion"
        className="h-full w-full object-cover"
      />
      <Welcome />
    </div>
  );
}

function Welcome() {
  return (
    <div className="absolute inset-0 z-10 flex flex-col items-center justify-center">
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

function DiscordButton() {
  return (
    <Link
      to="https://discord.gg/HnPG2bVFKm"
      className="font-display text-green-primary border-green-primary mt-6 flex items-center gap-1 rounded-3xl border-2 px-8 py-2 font-bold"
    >
      <MessageCircleQuestionMark />
      <p className="text-xl">Join my Discord</p>
    </Link>
  );
}
