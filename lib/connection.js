//	functions that handle login / signup

async function log_in(req, res) {
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

async function sign_up(req, res) {
 	const response = await fetch('/api/signup', {
    	method: 'POST',
    	headers: {
    		'Content-Type': 'application/json'
    	},
    	body: JSON.stringify({ 
    		username: req.username.value,
    		password: req.password.value, 
    		businessCard: JSON.strigify(req.card.id.value)
    	})
 	});
    const content = response.headers.get('Content-Type') && response.headers.get('Content-Type').includes('json') ? await response.json() : await response.text();

    if (response.ok == false) throw response;
    return content;
}

// functions that touch the personal card

async function getPersonalCard(req, res) {
}

async function updatePersonalCard(req, res) {
	const response = await fetch('/api/user/:id', {
		method: 'PUT',
		body: JSON.stringify({
			username: req.username.value,

		})
	});
    const content = response.headers.get('Content-Type') && response.headers.get('Content-Type').includes('json') ? await response.json() : await response.text();

    if (response.ok == false) throw response;
    return content;
}

// functions that touch the stack

async function addCard(req, res) {
	const response = await fetch('/api/user/:id', {
		method: 'POST',
		headers: {

		},
		body: JSON.stringify({
			username: req.username.value,
			contact: req.contact.value
		})
	});
    const content = response.headers.get('Content-Type') && response.headers.get('Content-Type').includes('json') ? await response.json() : await response.text();

    if (response.ok == false) throw response;
 	return content;
}

async function removeCard(req, res) {
	const response = await fetch('/api/user/:id', {
		method: 'DELETE',
		body: JSON.stringify({
			username: req.username.value,
			contact: req.oldContact.value
		})
	});
    const content = response.headers.get('Content-Type') && response.headers.get('Content-Type').includes('json') ? await response.json() : await response.text();

    if (response.ok == false) throw response;
    return content;
}