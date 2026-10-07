import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav className="sticky top-0 z-50 border-b border-pink-100 bg-pink-50/95 backdrop-blur-xl">

            <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-6">

                <Link
                    to="/"
                    className="flex items-center gap-2"
                >
                    <span className="text-2xl">
                        🎁
                    </span>

                    <span className="text-xl font-black tracking-tight text-pink-600">
                        SecretGift
                    </span>
                </Link>

                <div className="hidden items-center gap-2 md:flex">

                    <Link
                        to="/"
                        className="rounded-xl px-4 py-2 text-sm font-semibold text-pink-500 transition hover:bg-white hover:text-pink-600"
                    >
                        Ana Sayfa
                    </Link>

                    <Link
                        to="/participants"
                        className="rounded-xl px-4 py-2 text-sm font-semibold text-pink-500 transition hover:bg-white hover:text-pink-600"
                    >
                        Katılımcılar
                    </Link>

                    <Link
                        to="/draw"
                        className="rounded-xl bg-pink-500 px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-pink-200 transition hover:bg-pink-600 hover:shadow-lg"
                    >
                        🎀 Çekiliş
                    </Link>

                </div>

                {/* Mobil */}
                <Link
                    to="/draw"
                    className="rounded-xl bg-pink-500 px-4 py-2 text-sm font-bold text-white shadow-md shadow-pink-200 transition hover:bg-pink-600 md:hidden"
                >
                    🎀 Çekiliş
                </Link>

            </div>

        </nav>
    )
}

export default Navbar