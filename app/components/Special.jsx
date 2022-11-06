import { HeartIcon, MicrophoneIcon, MusicNoteIcon, FireIcon } from "./Icon";

export default function Special({ special, index }) {
    return (
        <div className={`${index === 0 || index === 3 ? 'bg-a11y-1 text-a11y-2' : 'bg-white text-light-black'}   max-w-xs p-5 flex flex-col gap-2 rounded-lg`}>
            {
                special.title === 'Date Night'
                    ? <HeartIcon className="w-9 h-9" />
                    : special.title === 'Karaoke Night'
                        ? <MicrophoneIcon className="w-9 h-9 text-brand-green" />
                        : special.title === 'Afrobeats Night'
                            ? <MusicNoteIcon className="w-9 h-9 text-brand-green" />
                            : special.title === 'Deejay Showdown'
                                ? <FireIcon className="w-9 h-9" />
                                : ''
            }

            <h3 className="text-xl lg:text-2xl font-heading">{special.title}</h3>
            <p><span className="font-bold mr-1">{special.day}</span> {special.time}</p>
        </div>
    )
}