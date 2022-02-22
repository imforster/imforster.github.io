function handleClick() {
  var form = document.querySelector("#formElem");
  // var form = document.forms[0];
  const settings = {
    method: 'POST',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    }
  };

  data = {
    fullname: form.querySelector('input[name="name"]').value,
    email: form.querySelector('input[name="email"]').value,
    organization: form.querySelector('input[name="organization"]').value,
    subject: form.querySelector('input[name="subject"]').value,
    message: document.getElementById("message").value
  };

  let response = fetch('http://localhost:8482/sendemail', settings);

  let ok = response.ok; // read response body is ok
}