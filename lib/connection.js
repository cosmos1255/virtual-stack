//	login / signup

async function log_in(user, pass) {
	const response = await fetch('/api/signin', {
    	method: 'POST',
    	headers: {
      		Authorization: `Basic ${btoa(`${user}:${pass}`)}`
    	}
 	});
  	const content = response.headers.get('Content-Type') && response.headers.get('Content-Type').includes('json') ? await response.json() : await response.text();

    if (response.ok == false) throw response;
  	return content;
}

async function sign_up(user, pass, card) {
 	const response = await fetch('/api/signup', {
    	method: 'POST',
    	headers: {
    		'Content-Type': 'application/json'
    	},
    	body: JSON.stringify({ 
    		user,
    		pass, 
    		card
    	})
 	});
    const content = response.headers.get('Content-Type') && response.headers.get('Content-Type').includes('json') ? await response.json() : await response.text();

    if (response.ok == false) throw response;
    return content;
}

// personal card

async function getPersonalCard(user) {
}

async function updatePersonalCard(user, card) {
	const response = await fetch('/api/user/:id', {
		method: 'PUT',
		body: JSON.stringify({
			user,

		})
	});
    const content = response.headers.get('Content-Type') && response.headers.get('Content-Type').includes('json') ? await response.json() : await response.text();

    if (response.ok == false) throw response;
    return content;
}

// stack

async function addCard(user, newContact) {
	const response = await fetch('/api/user/:id', {
		method: 'POST',
		headers: {

		},
		body: JSON.stringify({
			user,
			newContact
		})
	});
    const content = response.headers.get('Content-Type') && response.headers.get('Content-Type').includes('json') ? await response.json() : await response.text();

    if (response.ok == false) throw response;
 	return content;
}

async function removeCard(user, oldContact) {
	const response = await fetch('/api/user/:id', {
		method: 'DELETE',
		body: JSON.stringify({
			user,
			oldContact
		})
	});
    const content = response.headers.get('Content-Type') && response.headers.get('Content-Type').includes('json') ? await response.json() : await response.text();

    if (response.ok == false) throw response;
    return content;
}