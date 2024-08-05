document.getElementById('submitBtn').addEventListener('click', async () => {
  const projectName = document.getElementById('projectName').value;
  const communicationPartner = document.getElementById('communicationPartner').value;
  const type = document.getElementById('type').value;
  const info = document.getElementById('info').value;
  // Gather all other fields similarly

  const data = {
    projectName,
    communicationPartner,
    type,
    info,
    // Add all other fields here
  };

  try {
    const response = await fetch('https://script.google.com/macros/s/AKfycbwjjaXozaO6XIeuba3a2RBzON2A1a84E-f6t6DHiIDJSvD2FwTttHdFIZ6Soc1w8n6k/exec', { // Replace with your web app URL
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    const result = await response.json();
    if (result.status === 'success') {
      alert('Project saved successfully!');
    } else {
      alert('Failed to save project.');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('Error saving project.');
  }
});
