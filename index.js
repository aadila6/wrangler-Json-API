addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})
/**
 * Respond with hello worker text
 * @param {Request} request
 */
function handleLinks() {
  let link = [
    { "name": "Google", "url": "https://google" },
    { "name": "Facebook", "url": "https://facebook" },
    { "name": "LinkedIn", "url": "https://linkedin" },
    { "name": "Apple", "url": "https://apple" },
]
const init = {
  headers: { 'content-type': 'application/json' },
}
const body = JSON.stringify({ links });
return new Response(body, init);
}
async function handleRequest(request) {
  return new Response('Hello worker!', {
    headers: { 'content-type': 'text/plain' },
  })
}
