document.addEventListener("DOMContentLoaded", () => {
    const benefitsDiv = document.getElementById("membershipBenefits");
    const membershipOptions = document.querySelectorAll('input[name="danger"]');
  
    const benefits = {
      nonprofit: "No fee, access to basic resources.",
      bronze: "Event discounts, newsletter promotions.",
      silver: "All Bronze benefits, training sessions, advertising slots.",
      gold: "All Silver benefits, priority support, exclusive events."
    };
  
    membershipOptions.forEach(option => {
      option.addEventListener("change", (event) => {
        const selectedValue = event.target.value;
        benefitsDiv.textContent = benefits[selectedValue] || "Select a membership level to see benefits.";
      });
    });
  
    // Initialize with default message
    benefitsDiv.textContent = "Select a membership level to see benefits.";
  });
  