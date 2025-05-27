document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menu-icon');
    const dropdownMenu = document.getElementById('dropdown-menu');

    menuIcon.addEventListener('click', function () {
        dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
    });

    const countries = [
        { name: 'United States', code: 'us' },
        { name: 'Canada', code: 'ca' },
        { name: 'United Kingdom', code: 'gb' },
        { name: 'Germany', code: 'de' },
        { name: 'Australia', code: 'au' },
        // Add more countries as needed
    ];

    const originSelect = document.getElementById('origin-country');
    const destinationSelect = document.getElementById('destination-country');

    if (originSelect && destinationSelect) {
        countries.forEach(country => {
            const option = document.createElement('option');
            option.value = country.name;
            option.innerHTML = `<span class="flag-icon flag-icon-${country.code}"></span> ${country.name}`;
            originSelect.appendChild(option.cloneNode(true));
            destinationSelect.appendChild(option);
        });
    }

    document.getElementById('track-form').addEventListener('submit', function (event) {
        event.preventDefault();
        var trackingNumber = document.getElementById('tracking-number').value;
        var resultDiv = document.getElementById('tracking-result');

        // Define the specific tracking number
        var specificTrackingNumber = 'T0262';

        if (trackingNumber === specificTrackingNumber) {
            resultDiv.innerHTML = `  
            <div style="font-family: 'Courier New', Courier, monospace;">
            Tracking Number: ${trackingNumber} <br><br>
            
            📦 <strong>Shipment Status Update</strong> <br><br>
            
            ✅ All required documentation for your shipment has been successfully verified. <br><br>
            
            🚚 Your package is now ready for delivery. <br><br>
            
            💎 <strong>High-Value Notification:</strong> This shipment contains highly valuable contents (estimated worth: over $1 billion). <br>
            For enhanced security, tracking details are temporarily restricted. <br><br>
            
            🚨 <strong>Action Required:</strong> Please complete the pending <em>Delivery Fee</em> to enable full tracking and initiate final dispatch. <br><br>
            
            Thank you for choosing our trusted and secure shipping service. 🔒✈️ <br>
            </div>

        } else {
            resultDiv.innerHTML = `Tracking number ${trackingNumber} not available.`;
        }
    });

    document.getElementById('ship-form').addEventListener('submit', function (event) {
        event.preventDefault();
        var originCountry = document.getElementById('origin-country').value;
        var destinationCountry = document.getElementById('destination-country').value;
        var weight = document.getElementById('weight').value;
        var dimensions = document.getElementById('dimensions').value;
        var phoneNumber = document.getElementById('phone-number').value;
        var resultDiv = document.getElementById('ship-result');

        resultDiv.innerHTML = `Shipping from ${originCountry} to ${destinationCountry}.<br>Weight: ${weight} kg.<br>Dimensions: ${dimensions}.<br>Phone Number: ${phoneNumber}.<br>Shipping request submitted successfully.`;
    });

    document.getElementById('email-form').addEventListener('submit', function(event) {
        event.preventDefault();
        var email = document.getElementById('email').value;
        var message = document.getElementById('message').value;
        var resultDiv = document.getElementById('email-result');

        resultDiv.innerHTML = `Email sent to ${email} with the message: "${message}".`;
    });
});

function sendMessage() {
    var userInput = document.getElementById('user-input');
    var chatLog = document.getElementById('chat-log');

    if (userInput.value.trim() !== "") {
        var userMessage = document.createElement('div');
        userMessage.className = 'user-message';
        userMessage.innerText = userInput.value;
        chatLog.appendChild(userMessage);

        // Simulate bot response
        var botMessage = document.createElement('div');
        botMessage.className = 'bot-message';
        botMessage.innerText = 'Thank you for your message. We will get back to you shortly.';
        chatLog.appendChild(botMessage);

        // Clear input field
        userInput.value = "";
        chatLog.scrollTop = chatLog.scrollHeight;
    }
}
