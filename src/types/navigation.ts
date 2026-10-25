export const PAGE_PATHS = ['/', '/quienes-somos', '/por-que-mushin', '/contacto'] as const

export type PagePath = (typeof PAGE_PATHS)[number]

export interface PageLink {
  path: PagePath
  label: string
}

export const PAGE_LINKS: readonly PageLink[] = [
  { path: '/', label: 'Inicio' },
  { path: '/quienes-somos', label: 'Quiénes somos' },
  { path: '/por-que-mushin', label: 'Por qué Mushin' },
  { path: '/contacto', label: 'Contacto' },
]

export function isPagePath(path: string): path is PagePath {
  return PAGE_PATHS.some((pagePath) => pagePath === path)
}

export function getCurrentPagePath(): PagePath {
  const hashPath = window.location.hash.slice(1)
  return hashPath && isPagePath(hashPath) ? hashPath : '/'
}
