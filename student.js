<script>
// Modal Functions
function showNewRequestModal() {
    document.getElementById('newRequestModal').classList.add('show');
&rbrace;

function closeModal() {
    document.getElementById('newRequestModal').classList.remove('show');
&rbrace;

function submitRequest() {
    // Validate form
    const form = document.getElementById('requestForm');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    &rbrace;
    
    // Here you would normally send the data to the server
    // For demo purposes, we'll just show an alert and close the modal
    alert('Request submitted successfully! It will be processed by the AI system.');
    closeModal();
    
    // Add a new row to the table (for demo purposes)
    const tbody = document.querySelector('.table tbody');
    const newRow = document.createElement('tr');
    
    const purpose = document.getElementById('purpose').value;
    const destination = document.getElementById('destination').value;
    
    newRow.innerHTML = `
        <td>#SP006</td>
        <td>${new Date().toLocaleDateString()}</td>
        <td>${purpose}</td>
        <td>${destination}</td>
        <td>${document.getElementById('timeOut').value}</td>
        <td>${document.getElementById('expectedTime').value}</td>
        <td><span class="badge badge-pending">Pending</span></td>
        <td>
            <button class="btn btn-sm btn-secondary">Track</button>
        </td>
    `;
    
    tbody.insertBefore(newRow, tbody.firstChild);
    
    // Reset form
    form.reset();
&rbrace;

// Close modal if user clicks outside of it
window.onclick = function(event) {
    const modal = document.getElementById('newRequestModal');
    if (event.target === modal) {
        closeModal();
    &rbrace;
&rbrace;
</script>