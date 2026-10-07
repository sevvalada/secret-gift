import { useEffect, useState } from 'react'
import ParticipantForm from '../components/ParticipantForm'
import ParticipantList from '../components/ParticipantList'
import { createParticipant } from '../interfaces/participant'

function Participants() {
    const [participants, setParticipants] = useState(() => {
        const savedParticipants = localStorage.getItem(
            'secretGiftParticipants'
        )

        return savedParticipants
            ? JSON.parse(savedParticipants)
            : []
    })

    useEffect(() => {
        localStorage.setItem(
            'secretGiftParticipants',
            JSON.stringify(participants)
        )
    }, [participants])

    const handleAdd = (name) => {
        const trimmedName = name.trim()

        if (!trimmedName) {
            return
        }

        const isDuplicate = participants.some(
            (participant) =>
                participant.name.toLowerCase() ===
                trimmedName.toLowerCase()
        )

        if (isDuplicate) {
            alert('⚠️ Bu isim zaten katılımcı listesinde.')
            return
        }

        const newParticipant = createParticipant(trimmedName)

        setParticipants((current) => [
            ...current,
            newParticipant,
        ])

        // Yeni kişi eklendiğinde eski çekilişi temizle
        localStorage.removeItem('secretGiftResults')
    }

    const handleDelete = (id) => {
        setParticipants((current) =>
            current.filter(
                (participant) => participant.id !== id
            )
        )

        // Katılımcı değiştiği için eski çekilişi temizle
        localStorage.removeItem('secretGiftResults')
    }

    const handleEdit = (participant) => {
        const newName = window.prompt(
            'Katılımcının yeni adını gir:',
            participant.name
        )

        if (!newName || !newName.trim()) {
            return
        }

        const trimmedName = newName.trim()

        const isDuplicate = participants.some(
            (item) =>
                item.id !== participant.id &&
                item.name.toLowerCase() ===
                trimmedName.toLowerCase()
        )

        if (isDuplicate) {
            alert('⚠️ Bu isim zaten katılımcı listesinde.')
            return
        }

        setParticipants((current) =>
            current.map((item) =>
                item.id === participant.id
                    ? {
                        ...item,
                        name: trimmedName,
                    }
                    : item
            )
        )

        // İsim değiştiği için eski çekilişi temizle
        localStorage.removeItem('secretGiftResults')
    }

    return (
        <main className="min-h-[calc(100vh-73px)] overflow-hidden bg-gradient-to-br from-rose-50 via-pink-50 to-white px-5 py-12 sm:px-6" >
            <div className="mx-auto max-w-4xl">

                <div className="mb-10">
                    <p className="mb-2 text-sm font-medium text-pink-500">
                        🎀 Secret Santa
                    </p>

                    <h1 className="text-4xl font-bold text-slate-800">
                        Katılımcılar
                    </h1>

                    <p className="mt-3 text-slate-500">
                        Çekilişe katılacak kişileri ekle, düzenle veya
                        listeden çıkar.
                    </p>
                </div>

                <ParticipantForm onAdd={handleAdd} />

                <div className="mb-4 flex items-center justify-between">
                    <div>
                        <h2 className="text-xl font-semibold text-slate-800">
                            Katılımcı Listesi
                        </h2>

                        <p className="mt-1 text-sm text-slate-500">
                            Çekilişe dahil olan kişiler
                        </p>
                    </div>

                    <span className="rounded-full bg-pink-100 px-4 py-2 text-sm font-medium text-pink-600">
                        {participants.length} kişi
                    </span>
                </div>

                <ParticipantList
                    participants={participants}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                />

            </div>
        </main >
    )
}

export default Participants