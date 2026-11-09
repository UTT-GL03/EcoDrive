export const icons = {
  'image/png': '🖼️',
  'application/zip': '🗜️',
  'text/plain': '📄',
  'application/pdf': '📕',
}

export function folderName(path) {
  console.log(path)
  if(path!=undefined){
    return path.replace('/', '')
  }
  return ("")
}

export function formatDate(s) {
  console.log(s)
  if(s!=undefined){
  return new Date(s.replace(' ', 'T')).toLocaleDateString('fr-FR', {
    day: 'numeric', month: 'long', year: 'numeric',
  })
  }
  return 
}