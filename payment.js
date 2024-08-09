document.getElementById('pay-now').addEventListener('click', function() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const model = document.getElementById('model').value;
    const payment = document.getElementById('payment').value;

    // Simple validation patterns
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^[0-9]{10}$/;
    const namePattern = /^[A-Za-z]{3,}$/;

    // Check for empty fields
    if (!name || !email || !phone || !model) {
        alert('Please fill all the required fields.');
        return;
    }

    if (!namePattern.test(name)){
        alert('Please enter a valid Name.');
        return;
    }

    // Validate email
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Validate phone number
    if (!phonePattern.test(phone)) {
        alert('Please enter a valid 10-digit phone number.');
        return;
    }

    // Placeholder for payment gateway integration
    // You would replace this with the actual payment gateway code (e.g., Stripe, Razorpay)
    alert(`Pre-booking for ${model} is successful! Amount: INR ${payment}`);
    
    // After successful payment, you can send the form data to the server
    // fetch('/api/submit-prebook', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ name, email, phone, model, payment })
    // }).then(response => {
    //     if (response.ok) {
    //         alert('Thank you for your pre-booking!');
    //     }
    // }).catch(error => {
    //     alert('There was an error processing your pre-booking. Please try again.');
    // });
});
