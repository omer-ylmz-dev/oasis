export function sanitizeFilters(filters: Record<string, string | string[] | undefined>): Record<string, string | null> {
    return Object.fromEntries(
        Object.entries(filters).map(([k, v]) => [
            k, 
            typeof v === 'string' ? v : Array.isArray(v) ? v[0] : null
        ])
    );
}