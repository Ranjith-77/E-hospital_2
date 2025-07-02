function showSection(id) {
  document.querySelectorAll('.section').forEach(s => s.style.display = 'none');
  document.getElementById(id).style.display = 'block';
}

// Appointment
function bookAppointment() {
  const doctor = document.getElementById('doctorSelect').value;
  document.getElementById('appointmentStatus').innerText = `Appointment requested with ${doctor}.`;
  notify(`Appointment requested with ${doctor}.`);
}

function acceptAppointment() {
  document.getElementById('appointmentStatus').innerText = "Appointment accepted.";
  notify("Appointment accepted by doctor.");
}

function rejectAppointment() {
  document.getElementById('appointmentStatus').innerText = "Appointment rejected.";
  notify("Appointment rejected by doctor.");
}

// Prescription
function savePrescription() {
  const text = document.getElementById('prescription').value;
  const list = document.getElementById('prescriptionList');
  const item = document.createElement('div');
  item.textContent = text;
  list.appendChild(item);
  notify("Prescription saved and shared with departments.");
}

// Lab
function updateLabResult() {
  const result = document.getElementById('labResult').value;
  const list = document.getElementById('labResults');
  const item = document.createElement('div');
  item.textContent = result;
  list.appendChild(item);
  notify("Lab result updated.");
}

// Pharmacy
function updateStock() {
  const stock = document.getElementById('medicineStock').value;
  const list = document.getElementById('stockList');
  const item = document.createElement('div');
  item.textContent = stock;
  list.appendChild(item);
  notify("Pharmacy stock updated.");
}

// Billing
function addBilling() {
  const entry = document.getElementById('billingEntry').value;
  const list = document.getElementById('billingHistory');
  const item = document.createElement('div');
  item.textContent = entry;
  list.appendChild(item);
  notify("Billing transaction added.");
}

// Reports
function generateReports() {
  const output = `
Doctor Availability: Dr. Smith, Dr. Johnson
Today's Patients: 10
Pharmacy Deliveries: 5
  `;
  document.getElementById('reportOutput').textContent = output;
}

// Notifications
function notify(message) {
  alert(message);
}
