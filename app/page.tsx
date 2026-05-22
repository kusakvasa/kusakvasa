export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-yellow-100 to-orange-100">
      <div className="flex flex-col items-center gap-6 select-none">

        {/* Солнышко */}
        <div className="relative flex items-center justify-center">
          <div className="absolute w-32 h-32 rounded-full bg-yellow-300 opacity-40 animate-ping" />
          <div className="w-24 h-24 rounded-full bg-yellow-400 flex items-center justify-center text-5xl shadow-lg">
            ☀️
          </div>
        </div>

        {/* Котик */}
        <div className="bg-white rounded-3xl shadow-xl px-10 py-8 flex flex-col items-center gap-3 border-2 border-yellow-200">
          <div className="text-8xl">🐱</div>
          <p className="text-2xl font-bold text-orange-500 tracking-wide">Привет!</p>
          <p className="text-gray-500 text-sm text-center max-w-xs">
            Котик говорит, что всё будет хорошо.<br />Особенно если почесать за ухом.
          </p>
        </div>

        {/* Лапка */}
        <p className="text-3xl animate-bounce">🐾</p>

      </div>
    </div>
  );
}
