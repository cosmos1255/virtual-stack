async function log_in(username, password) {
  const response = await fetch('/api/signin', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${btoa(`${username}:${password}`)}`
    }
  });
  const content = response.headers.get('Content-Type') && response.headers.get('Content-Type').includes('json') ? await response.json() : await response.text();

  if (response.status >= 400) throw content;
  
  return content;
}

async function sign_up(username, password, card) {
  const response = await fetch('/api/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password, card})
  });
  const content = response.headers.get('Content-Type') && response.headers.get('Content-Type').includes('json') ? await response.json() : await response.text();

  if (response.status >= 400) throw content;
   
  return content;
}