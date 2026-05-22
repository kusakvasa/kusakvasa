export default function Avatar({ size = 80 }: { size?: number }) {
  return (
    <div
      className="avatar-piece flex items-center justify-center font-extrabold text-black"
      style={{ width: size, height: size, fontSize: size * 0.35 }}
    >
      ВФ
    </div>
  );
}
