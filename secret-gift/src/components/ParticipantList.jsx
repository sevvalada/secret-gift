import ParticipantCard from './ParticipantCard'

function ParticipantList({ participants, onEdit, onDelete }) {
    if (participants.length === 0) {
        return (
            <div className="rounded-3xl border border-dashed border-pink-200 bg-white/60 p-10 text-center">
                <div className="mb-3 text-5xl">🎁</div>

                <h3 className="font-semibold text-slate-700">
                    Henüz katılımcı yok
                </h3>

                <p className="mt-2 text-sm text-slate-400">
                    Çekilişe katılacak kişileri eklemeye başla.
                </p>
            </div>
        )
    }

    return (
        <div className="space-y-3">
            {participants.map((participant) => (
                <ParticipantCard
                    key={participant.id}
                    participant={participant}
                    onEdit={onEdit}
                    onDelete={onDelete}
                />
            ))}
        </div>
    )
}

export default ParticipantList