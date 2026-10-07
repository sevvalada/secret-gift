function ParticipantCard({ participant, onEdit, onDelete }) {
    return (
        <div className="flex items-center justify-between rounded-2xl border border-pink-100 bg-white/80 p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-pink-200 hover:shadow-md">

            <div className="flex items-center gap-4">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-pink-100 text-xl">
                    🎁
                </div>

                <div>
                    <p className="font-semibold text-slate-800">
                        {participant.name}
                    </p>

                    <p className="text-sm text-slate-400">
                        Secret Santa katılımcısı
                    </p>
                </div>

            </div>

            <div className="flex gap-2">

                <button
                    onClick={() => onEdit(participant)}
                    title="Düzenle"
                    className="rounded-xl border border-pink-100 bg-pink-50 px-3 py-2 text-sm text-pink-500 transition hover:bg-pink-100 hover:text-pink-600"
                >
                    ✏️
                </button>

                <button
                    onClick={() => onDelete(participant.id)}
                    title="Sil"
                    className="rounded-xl border border-rose-100 bg-rose-50 px-3 py-2 text-sm text-rose-400 transition hover:bg-rose-100 hover:text-rose-500"
                >
                    🗑️
                </button>

            </div>

        </div>
    )
}

export default ParticipantCard