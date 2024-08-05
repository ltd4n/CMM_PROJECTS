document.getElementById('submitBtn').addEventListener('click', async () => {
  const projectName = document.getElementById('projectName').value;
  const communicationPartner = document.getElementById('communicationPartner').value;
  // Add other fields similarly

  const token = await getAccessToken();
  
  try {
    const response = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/YOUR_SPREADSHEET_ID/values/Sheet1!A1:append?valueInputOption=RAW`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        values: [[projectName, communicationPartner]] // Add other fields here
      })
    });
    const result = await response.json();
    if (response.ok) {
      alert('Project saved successfully!');
    } else {
      alert('Failed to save project.');
      console.error(result);
    }
  } catch (error) {
    console.error('Error:', error);
    alert('Error saving project.');
  }
});

async function getAccessToken() {
  return new Promise((resolve, reject) => {
    chrome.identity.getAuthToken({ interactive: true }, (token) => {
      if (chrome.runtime.lastError || !token) {
        reject(chrome.runtime.lastError);
      } else {
        resolve(token);
      }
    });
  });
}
