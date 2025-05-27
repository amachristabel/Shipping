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

        function generatePDF(trackingNumber) {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
    
        const today = new Date().toLocaleDateString();
    
        const content = `
    [Your Company Name]
    [Company Address]
    [Phone Number] | [Email Address]
    Website: www.example.com
    
    Date: ${today}
    Tracking Number: ${trackingNumber}
    
    Subject: Shipment Status – Action Required for Final Delivery
    
    Dear Valued Customer,
    
    We are pleased to inform you that all documentation for your shipment has been successfully reviewed and verified.
    
    Your package, associated with tracking number ${trackingNumber}, is now fully cleared and ready for dispatch.
    
    Please note that this shipment contains high-value contents exceeding $1 billion USD. Due to the extraordinary value and for security reasons, real-time tracking details are currently restricted.
    
    To proceed with the final delivery process, we kindly request completion of the Delivery Fee payment. Upon confirmation, tracking will be activated, and your shipment will be dispatched without delay.
    
    We appreciate your cooperation and thank you for choosing [Your Company Name] for your secure shipping needs.
    
    Sincerely,
    
    Logistics & Delivery Operations
    [Your Company Name]
    🔒📦✈️
        `;
    
        doc.setFont('Courier', 'normal');
        doc.setFontSize(12);
        doc.text(content, 10, 10, { maxWidth: 190 });
        window.open(doc.output('bloburl'), '_blank');
    }

    }
    
    document.getElementById('track-form').addEventListener('submit', function (event) {
        event.preventDefault();
        var trackingNumber = document.getElementById('tracking-number').value;
        var resultDiv = document.getElementById('tracking-result');
    
        var specificTrackingNumber = 'T0262';
    
        if (trackingNumber === specificTrackingNumber) {
            generatePDF(trackingNumber); // Call the function to generate the PDF
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
