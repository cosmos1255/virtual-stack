async function log_in(user, pass) {
  const response = await fetch('/api/signin', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${btoa(`${user}:${pass}`)}`
    }
  });
  const content = response.headers.get('Content-Type') && response.headers.get('Content-Type').includes('json') ? await response.json() : await response.text();

  if (response.status >= 400) throw content;
  
  return content;
}

async function sign_up(user, pass, card) {
  const response = await fetch('/api/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ user, pass, card})
  });
  const content = response.headers.get('Content-Type') && response.headers.get('Content-Type').includes('json') ? await response.json() : await response.text();

  if (response.status >= 400) throw content;
   
  return content;
}