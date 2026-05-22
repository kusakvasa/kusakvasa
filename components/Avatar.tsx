export default function Avatar({ size = 80 }: { size?: number }) {
  return (
    <div
      className="rounded-full bg-violet-600 text-white font-semibold flex items-center justify-center"
      style={{ width: size, height: size, fontSize: size * 0.35 }}
    >
      ВФ
    </div>
  );
}
