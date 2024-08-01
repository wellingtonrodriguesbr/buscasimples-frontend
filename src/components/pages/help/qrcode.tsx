export function QRCode() {
  return (
    <div className="hidden md:flex flex-col gap-4 w-48 h-56 rounded-md bg-white border p-4">
      <div className="w-full h-full bg-black"></div>
      <span className="text-sm text-center">
        Scaneie o <strong>QRCode</strong> para contribuir
      </span>
    </div>
  );
}
