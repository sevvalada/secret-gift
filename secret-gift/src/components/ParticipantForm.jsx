import { useState } from 'react'

function ParticipantForm({ onAdd }) {
    const [name, setName] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!name.trim()) {
            return
        }

        onAdd(name)
        setName('')
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="mb-8 rounded-3xl border border-pink-100 bg-white/80 p-6 shadow-xl shadow-pink-100/60 backdrop-blur-xl"
        >
            <div className="mb-5">
                <div className="mb-2 text-2xl">🎁</div>

                <h2 className="text-xl font-bold text-slate-800">
                    Katılımcı Ekle
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                    Çekilişe katılacak kişilerin isimlerini ekle.
                </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Örn. Ayşe Yılmaz"
                    className="flex-1 rounded-xl border border-pink-100 bg-pink-50/50 px-4 py-3 text-slate-700 outline-none placeholder:text-slate-400 focus:border-pink-300 focus:bg-white focus:ring-4 focus:ring-pink-100"
                />

                <button
                    type="submit"
                    className="rounded-xl bg-pink-500 px-7 py-3 font-bold text-white shadow-md shadow-pink-200 transition hover:bg-pink-600 hover:shadow-lg"
                >
                    + Katılımcı Ekle
                </button>
            </div>
        </form>
    )
}

export default ParticipantForm