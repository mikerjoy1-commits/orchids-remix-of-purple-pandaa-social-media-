export default function OurWorkPage() {
  return (
    <div className="min-h-screen w-full bg-black flex items-center justify-center">
      <div style={{ position: "relative", width: "100%", height: "100vh" }}>
        <iframe
          loading="lazy"
          style={{ position: "absolute", width: "100%", height: "100%", top: 0, left: 0, border: "none", padding: 0, margin: 0 }}
          src="https://www.canva.com/design/DAHGlvmXnWg/TaXcue1YAmTlGuSVuLQ8Jg/view?embed"
          allowFullScreen
          allow="fullscreen"
        />
      </div>
    </div>
  );
}
