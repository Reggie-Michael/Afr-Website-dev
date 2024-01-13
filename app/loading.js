import Image from "next/image";

export default function Loading() {
  // Or a custom loading skeleton component
  return (
    <div className="bg-gradient-to-br from-[#000000] from-20% to-blue-950 bg-opacity-75 w-dvw h-screen flex items-center justify-center">
      <Image
        alt="Afripul Group Logo"
        src="/assets/icons/favicon-96x96.png"
        height={96}
        width={96}
        className="animate-pulse duration-700 drop-shadow-2xl backdrop-blur-md shadow-lg"
      />
    </div>
  );
}
