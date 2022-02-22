function handleClick() {
  var form = document.querySelector("#formElem");
  // var form = document.forms[0];
  data = {
    fullname: form.querySelector('input[name="name"]').value,
    email: form.querySelector('input[name="email"]').value,
    organization: form.querySelector('input[name="organization"]').value,
    subject: form.querySelector('input[name="subject"]').value,
    message: document.getElementById("message").value
  };

  const settings = {
    method: 'POST',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  };



  let response = fetch('http://localhost:8482/sendemail', settings);

  let ok = await response.ok; // read response body is ok
}