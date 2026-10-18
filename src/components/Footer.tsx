export default function Footer() {
  return (
    <footer
      className="shadow-[0_-2px_16px_rgba(69,10,10,0.25)]"
      style={{
        background:
          "linear-gradient(90deg, #450a0a 0%, #7c2d12 50%, #9a3412 100%)",
        borderTop: "1px solid rgba(253,224,71,0.35)",
      }}
    >
      <div className="mx-auto max-w-6xl px-4 py-6 text-center text-sm text-white/85 sm:px-6">
        <p className="font-devanagari text-base font-semibold text-gold">
          ॥ जय जय श्री राधे ॥
        </p>
        <p className="mt-1.5">
          चालीसा संग्रह — छह प्रमुख चालीसाएं, पाठ हेतु एक ही पृष्ठ पर
        </p>
      </div>
    </footer>
  );
}
