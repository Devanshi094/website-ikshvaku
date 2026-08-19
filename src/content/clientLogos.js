/**
 * Client logos, resolved at build time.
 *
 * Deliberately NOT loaded from /public. A file under /public is fetched by URL
 * at runtime, and this site serves an SPA fallback — so a *missing* logo comes
 * back as `200 text/html` (the index page) rather than a 404. The <img> then
 * neither loads nor cleanly errors, and the card is left with an empty slot.
 *
 * import.meta.glob resolves against the filesystem when the bundle is built, so
 * a logo that has not been added simply is not in this map: nothing is
 * requested, and the card falls back to the wordmark. Files that are present
 * get hashed and cache-busted like any other asset.
 */
const files = import.meta.glob('../assets/logos/*.{svg,png,webp}', {
    eager: true,
    query: '?url',
    import: 'default',
})

/** slug (filename without extension) -> resolved asset URL */
export const CLIENT_LOGOS = Object.fromEntries(
    Object.entries(files).map(([path, url]) => [
        path.split('/').pop().replace(/\.[^.]+$/, ''),
        url,
    ])
)
