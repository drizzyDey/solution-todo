function handleStatus(status) {
  if(status == true) {
    console.log('success');
  }
  else {
    console.log('error');
  }
  fetch('https://flexxter.de/Tasks/Save', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(status)
  })
}

module.exports = handleStatus;