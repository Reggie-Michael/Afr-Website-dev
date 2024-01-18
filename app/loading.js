import Image from "next/image";

export default function Loading() {
  // Or a custom loading skeleton component
  return (
    <div className="bg-[#0D0D0D] w-dvw h-screen flex items-center justify-center loading_screen">
      <Image
        alt="Afripul Group Logo"
        src="/assets/images/LOGO-writeup-1-White 2 (1).svg"
        width={236}
        height={96}
        className="animate-pulse duration-700 drop-shadow-2xl"
      />
    </div>
  );
}
