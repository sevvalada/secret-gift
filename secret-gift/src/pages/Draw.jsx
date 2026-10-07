import { useState } from 'react'

function Draw() {
    const [selectedParticipant, setSelectedParticipant] = useState('')
    const [result, setResult] = useState(null)
    const [error, setError] = useState('')

    const savedParticipants = localStorage.getItem(
        'secretGiftParticipants'
    )

    const participants = savedParticipants
        ? JSON.parse(savedParticipants)
        : []

    const existingResults = localStorage.getItem(
        'secretGiftResults'
    )

    const hasDraw = Boolean(existingResults)

    const startDraw = () => {
        if (participants.length < 2) {
            setError('Çekiliş için en az 2 katılımcı eklemelisin.')
            return
        }

        let shuffled = []
        let valid = false

        while (!valid) {
            shuffled = [...participants].sort(
                () => Math.random() - 0.5
            )

            valid = participants.every(
                (participant, index) =>
                    participant.id !== shuffled[index].id
            )
        }

        const drawResults = participants.map((participant, index) => ({
            participant: participant.name,
            recipient: shuffled[index].name,
        }))

        localStorage.setItem(
            'secretGiftResults',
            JSON.stringify(drawResults)
        )

        setError('')
        alert('🎉 Çekiliş başarıyla oluşturuldu!')
        window.location.reload()
    }

    const showResult = () => {
        if (!selectedParticipant) {
            setError('Lütfen önce adını seç.')
            return
        }

        const savedResults = localStorage.getItem(
            'secretGiftResults'
        )

        if (!savedResults) {
            setError('Önce çekilişi başlatmalısın.')
            return
        }

        const results = JSON.parse(savedResults)

        const myResult = results.find(
            (item) => item.participant === selectedParticipant
        )

        setResult(myResult)
        setError('')
    }

    return (
        <main className="min-h-[calc(100vh-73px)] overflow-hidden bg-gradient-to-br from-rose-50 via-pink-50 to-white px-5 py-12 sm:px-6">
            <div className="mx-auto max-w-4xl">

                {/* Başlık */}
                <div className="mb-10 text-center">

                    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-pink-200 bg-white/80 px-4 py-2 text-sm font-medium text-pink-500 shadow-sm">
                        🎀 Secret Santa
                    </div>

                    <h1 className="text-4xl font-black tracking-tight text-slate-800 sm:text-5xl">
                        Gizli Çekiliş 🎁
                    </h1>

                    <p className="mx-auto mt-4 max-w-xl text-slate-500">
                        Çekilişi oluştur ve herkesin yalnızca kendi
                        eşleşmesini öğrenmesini sağla.
                    </p>

                </div>

                {/* Ana kart */}
                <div className="rounded-[2rem] border border-pink-100 bg-white/80 p-6 shadow-2xl shadow-pink-100/70 backdrop-blur-xl sm:p-8">

                    <div className="mb-8 text-center">

                        <div className="mx-auto mb-5 flex h-28 w-28 items-center justify-center rounded-[2rem] bg-gradient-to-br from-pink-100 to-rose-100 text-6xl shadow-inner">
                            {hasDraw ? '🎉' : '🎁'}
                        </div>

                        <h2 className="text-2xl font-black text-slate-800">
                            {hasDraw
                                ? 'Çekiliş hazır!'
                                : 'Çekilişi oluşturmaya hazır mısın?'}
                        </h2>

                        <p className="mt-3 text-slate-500">
                            {hasDraw
                                ? 'Adını seçerek kendi Secret Santa sonucunu görebilirsin.'
                                : `${participants.length} kişi çekilişe dahil.`}
                        </p>

                    </div>

                    {!hasDraw && (
                        <button
                            onClick={startDraw}
                            className="w-full rounded-2xl bg-pink-500 px-6 py-4 font-bold text-white shadow-lg shadow-pink-200 transition hover:-translate-y-0.5 hover:bg-pink-600 hover:shadow-xl"
                        >
                            🎲 Çekilişi Başlat
                        </button>
                    )}

                    {hasDraw && (
                        <div className="border-t border-pink-100 pt-8">

                            <label className="mb-3 block text-sm font-semibold text-slate-600">
                                Sonucunu görmek için adını seç
                            </label>

                            <select
                                value={selectedParticipant}
                                onChange={(e) => {
                                    setSelectedParticipant(e.target.value)
                                    setResult(null)
                                    setError('')
                                }}
                                className="w-full rounded-xl border border-pink-100 bg-pink-50/50 px-4 py-3 text-slate-700 outline-none focus:border-pink-300 focus:bg-white focus:ring-4 focus:ring-pink-100"
                            >
                                <option value="">
                                    Adını seç...
                                </option>

                                {participants.map((participant) => (
                                    <option
                                        key={participant.id}
                                        value={participant.name}
                                    >
                                        {participant.name}
                                    </option>
                                ))}
                            </select>

                            <button
                                onClick={showResult}
                                className="mt-4 w-full rounded-xl border border-pink-200 bg-pink-50 px-6 py-4 font-bold text-pink-600 transition hover:bg-pink-100"
                            >
                                🔐 Sonucumu Göster
                            </button>

                        </div>
                    )}

                    {error && (
                        <p className="mt-5 rounded-xl bg-rose-50 px-4 py-3 text-center text-sm font-medium text-rose-500">
                            {error}
                        </p>
                    )}

                </div>

                {/* Sonuç */}
                {result && (
                    <div className="mt-8 rounded-[2rem] border border-pink-100 bg-white/90 p-8 text-center shadow-2xl shadow-pink-100/70">

                        <div className="mx-auto mb-5 flex h-24 w-24 items-center justify-center rounded-full bg-pink-100 text-5xl">
                            🎁
                        </div>

                        <p className="text-sm text-slate-400">
                            {result.participant}, senin Secret Santa eşleşmen
                        </p>

                        <p className="mt-6 text-sm font-medium text-slate-400">
                            Hediye alacağın kişi
                        </p>

                        <h2 className="mt-2 text-4xl font-black text-pink-500">
                            {result.recipient}
                        </h2>

                        <p className="mt-5 text-sm text-slate-400">
                            🤫 Bu sonucu gizli tutmayı unutma!
                        </p>

                    </div>
                )}

            </div>
        </main>
    )
}

export default Draw