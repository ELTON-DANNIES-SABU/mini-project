 // Toggle sidebar on mobile
 document.getElementById('menu-toggle').addEventListener('click', function() {
    document.getElementById('sidebar').classList.toggle('active');
});

// Responsive behavior
function adjustLayout() {
    const width = window.innerWidth;
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.getElementById('main-content');
    
    if (width <= 768) {
        sidebar.classList.remove('active');
        mainContent.style.marginLeft = '0';
    } else {
        sidebar.classList.add('active');
        mainContent.style.marginLeft = '250px';
    }
}

// Initial call and resize listener
window.addEventListener('resize', adjustLayout);

// Table row actions
document.querySelectorAll('.btn-approve, .btn-reject').forEach(button => {
    button.addEventListener('click', function() {
        const row = this.closest('tr');
        const status = row.querySelector('.badge');
        
        if (this.classList.contains('btn-approve')) {
            status.className = 'badge badge-approved';
            status.textContent = 'Approved';
        } else {
            status.className = 'badge badge-rejected';
            status.textContent = 'Rejected';
        }
        
        // Hide action buttons
        this.parentElement.innerHTML = '<span>Processed</span>';
    });
});

// Calendar date selection
document.querySelectorAll('.date').forEach(date => {
    date.addEventListener('click', function() {
        document.querySelectorAll('.date').forEach(d => d.classList.remove('active'));
        this.classList.add('active');
    });
});