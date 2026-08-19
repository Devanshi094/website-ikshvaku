import { PAGE_NOTES } from '../content/company'

/**
 * The handwritten aside that sits under each page's opening figures.
 *
 * Decorative rather than informational — the arrow is hidden from assistive
 * tech, and the note itself repeats nothing the page has not already said in
 * plain text.
 */
const PageNote = ({ page, className = '' }) => {
    const note = PAGE_NOTES[page]
    if (!note) return null

    return (
        <div className={`flex items-center gap-2 font-script text-[18px] text-clay/90 ${className}`}>
            <span className="block animate-bob" aria-hidden="true">↓</span>
            {note}
        </div>
    )
}

export default PageNote
