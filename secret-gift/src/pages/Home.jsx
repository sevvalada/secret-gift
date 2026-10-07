import { Link } from 'react-router-dom'

function Home() {
    return (
        <main className="min-h-[calc(100vh-73px)] overflow-hidden bg-gradient-to-br from-rose-50 via-pink-50 to-white">

            {/* Background decorations */}
            <div className="pointer-events-none absolute left-0 top-20 h-72 w-72 rounded-full bg-pink-200/40 blur-3xl" />

            <div className="pointer-events-none absolute right-0 top-40 h-80 w-80 rounded-full bg-rose-200/50 blur-3xl" />

            <div className="pointer-events-none absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-fuchsia-100/50 blur-3xl" />

            <div className="relative mx-auto max-w-6xl px-5 py-12 sm:px-6 sm:py-16 lg:py-20">

                {/* Hero */}
                <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

                    {/* Left */}
                    <div className="text-center lg:text-left">

                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-pink-200 bg-white/80 px-4 py-2 text-sm font-medium text-pink-600 shadow-sm backdrop-blur">
                            <span>✨</span>
                            <span>Yeni yılın en tatlı çekilişi</span>
                        </div>

                        <h1 className="text-4xl font-black leading-tight tracking-tight text-slate-800 sm:text-5xl lg:text-6xl">
                            Hediyeden daha güzel
                            <span className="mt-2 block text-pink-500">
                                bir sürpriz var. 🎁
                            </span>
                        </h1>

                        <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-slate-500 sm:text-lg sm:leading-8 lg:mx-0">
                            Arkadaşların, ailen veya çalışma arkadaşlarınla
                            kolayca Secret Santa çekilişi oluştur.
                            Eşleşmeni keşfet ve yeni yılın sürprizini başlat.
                        </p>

                        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">

                            <Link
                                to="/participants"
                                className="rounded-2xl bg-pink-500 px-7 py-3.5 text-center font-bold text-white shadow-lg shadow-pink-200 transition hover:-translate-y-0.5 hover:bg-pink-600"
                            >
                                🎀 Çekiliş Oluştur
                            </Link>

                            <Link
                                to="/draw"
                                className="rounded-2xl border border-pink-200 bg-white px-7 py-3.5 text-center font-bold text-pink-600 shadow-sm transition hover:-translate-y-0.5 hover:border-pink-300 hover:bg-pink-50"
                            >
                                🔐 Sonucumu Gör
                            </Link>

                        </div>

                        {/* Features */}
                        <div className="mt-10 grid grid-cols-3 gap-3 border-t border-pink-100 pt-7 sm:max-w-lg">

                            <div>
                                <p className="text-xl font-bold text-slate-800">
                                    100%
                                </p>
                                <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                                    Kolay kullanım
                                </p>
                            </div>

                            <div className="border-x border-pink-100">
                                <p className="text-xl font-bold text-slate-800">
                                    🔐
                                </p>
                                <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                                    Gizli sonuç
                                </p>
                            </div>

                            <div>
                                <p className="text-xl font-bold text-slate-800">
                                    🎄
                                </p>
                                <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                                    Yeni yıl ruhu
                                </p>
                            </div>

                        </div>

                    </div>

                    {/* Right illustration */}
                    <div className="relative flex justify-center">

                        {/* Glow */}
                        <div className="absolute h-72 w-72 rounded-full bg-pink-300/40 blur-3xl sm:h-96 sm:w-96" />

                        {/* Main card */}
                        <div className="relative w-full max-w-md rotate-1 rounded-[2rem] border border-white bg-white/80 p-5 shadow-2xl shadow-pink-200/60 backdrop-blur-xl sm:p-7">

                            {/* Top bar */}
                            <div className="mb-6 flex items-center justify-between">

                                <div className="flex gap-1.5">
                                    <span className="h-2.5 w-2.5 rounded-full bg-pink-300" />
                                    <span className="h-2.5 w-2.5 rounded-full bg-rose-200" />
                                    <span className="h-2.5 w-2.5 rounded-full bg-pink-100" />
                                </div>

                                <span className="rounded-full bg-pink-50 px-3 py-1 text-xs font-semibold text-pink-500">
                                    SecretGift
                                </span>

                            </div>

                            {/* Gift */}
                            <div className="flex justify-center py-5 sm:py-8">

                                <div className="relative flex h-40 w-40 items-center justify-center rounded-[2.5rem] bg-gradient-to-br from-pink-100 to-rose-100 shadow-inner sm:h-48 sm:w-48">

                                    <div className="absolute -top-3 text-3xl">
                                        ✨
                                    </div>

                                    <div className="text-8xl drop-shadow-md sm:text-9xl">
                                        🎁
                                    </div>

                                </div>

                            </div>

                            <div className="text-center">

                                <p className="text-sm font-medium text-pink-500">
                                    Your Secret Santa
                                </p>

                                <h2 className="mt-2 text-2xl font-black text-slate-800">
                                    Sürpriz zamanı! 🎀
                                </h2>

                                <p className="mt-2 text-sm text-slate-400">
                                    Eşleşmeni öğrenmek için hazır ol.
                                </p>

                            </div>

                            {/* Bottom mini cards */}
                            <div className="mt-7 grid grid-cols-2 gap-3">

                                <div className="rounded-2xl bg-pink-50 p-3">
                                    <p className="text-xs text-slate-400">
                                        Katılımcılar
                                    </p>

                                    <p className="mt-1 font-bold text-slate-700">
                                        🎄 Hazır
                                    </p>
                                </div>

                                <div className="rounded-2xl bg-rose-50 p-3">
                                    <p className="text-xs text-slate-400">
                                        Sonuç
                                    </p>

                                    <p className="mt-1 font-bold text-slate-700">
                                        🔒 Gizli
                                    </p>
                                </div>

                            </div>

                        </div>

                        {/* Floating decorations */}
                        <div className="absolute -left-2 top-10 hidden rounded-2xl border border-pink-100 bg-white p-3 text-2xl shadow-lg sm:block">
                            🎄
                        </div>

                        <div className="absolute -right-2 bottom-12 hidden rounded-2xl border border-pink-100 bg-white p-3 text-2xl shadow-lg sm:block">
                            🎀
                        </div>

                    </div>

                </div>

                {/* Bottom message */}
                <div className="mt-16 text-center sm:mt-20">

                    <p className="text-sm text-slate-400">
                        ✨ Arkadaşlarınla paylaş · Çekilişi oluştur · Sürprizi keşfet
                    </p>

                </div>

            </div>

        </main>
    )
}

export default Home