<!DOCTYPE html>
<html>
<head>
  <title>Project Tracker</title>
  <style>
    body {
      width: 300px;
      font-family: Arial, sans-serif;
    }
    .form-group {
      margin-bottom: 10px;
    }
    input, button {
      width: 100%;
      padding: 8px;
      margin: 4px 0;
    }
  </style>
</head>
<body>
  <form id="projectForm">
    <div class="form-group">
      <input type="text" id="projectName" placeholder="Project Name" required />
    </div>
    <div class="form-group">
      <input type="text" id="communicationPartner" placeholder="Communication Partner" />
    </div>
    <div class="form-group">
      <input type="text" id="type" placeholder="Video or Design" />
    </div>
    <div class="form-group">
      <input type="text" id="info" placeholder="Info" />
    </div>
    <!-- Add more input fields here -->
    <button type="button" id="submitBtn">Submit</button>
  </form>
  <script src="popup.js"></script>
</body>
</html>