// scripts.js

document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("payment-form");
    
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission
        
        // Perform your form validation here
        var fullName = document.getElementById("full-name").value;
        var address1 = document.getElementById("address1").value;
        var city = document.getElementById("city").value;
        var country = document.getElementById("country").value;
        var state = document.getElementById("state").value;
        var zip = document.getElementById("zip").value;
        var cardNumber = document.getElementById("card-number").value;
        var expiry = document.getElementById("expiry").value;
        var cvv = document.getElementById("cvv").value;
        var terms = document.getElementById("terms").checked;
        
        // Example of basic form validation (you can add more)
        if (!fullName || !address1 || !city || !country || !state || !zip || !cardNumber || !expiry || !cvv || !terms) {
            alert("Please fill in all required fields.");
            return;
        }
        
        // If form validation passes, you can proceed with form submission
        // Here, you might submit the form data to your server-side processing script or API
        
        // For demonstration purposes, let's just log the form data
        console.log("Form submitted with the following data:");
        console.log("Full Name:", fullName);
        console.log("Address 1:", address1);
        console.log("City:", city);
        console.log("Country:", country);
        console.log("State:", state);
        console.log("ZIP Code:", zip);
        console.log("Card Number:", cardNumber);
        console.log("Expiry Date:", expiry);
        console.log("CVV:", cvv);
        console.log("Terms and Conditions Accepted:", terms);
        
        // You can redirect the user to a thank you page or display a success message here
        // Example:
        // window.location.href = "thank-you.html";
        // Or
        // alert("Payment successful!");
    });
});
// JavaScript
// payment.js

document.addEventListener("DOMContentLoaded", function() {
    var countryInput = document.getElementById("country");
    
    var autocomplete = new google.maps.places.Autocomplete(countryInput, {
        types: ["(regions)"], // Restrict to countries
        componentRestrictions: { country: "us" } // Restrict to specific country if needed
    });
});

