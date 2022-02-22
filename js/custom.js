function handleClick() {
  var form = document.querySelector("#formElem");
  // var form = document.forms[0];

  data = {
    fullname: form.querySelector('input[name="name"]').value,
    email: form.querySelector('input[name="email"]').value,
    organization: form.querySelector('input[name="organization"]').value,
        subject: form.querySelector('input[name="subject"]').value,
        message: form.querySelector('input[name="message"]').value
  }

  let response = await fetch('http://localhost:8482/sendemail', {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })

  let ok = await response.ok; // read response body is ok
}

