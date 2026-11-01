export const icons = {
  'image/png': '🖼️',
  'application/zip': '🗜️',
  'text/plain': '📄',
  'application/pdf': '📕',
}

export function folderName(path) {
  return path.replace('/', '')
}

export function formatDate(s) {
  return new Date(s.replace(' ', 'T')).toLocaleDateString('fr-FR', {
    day: 'numeric', month: 'long', year: 'numeric',
  })
}