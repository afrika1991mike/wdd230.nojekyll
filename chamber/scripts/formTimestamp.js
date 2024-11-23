document.addEventListener("DOMContentLoaded", function() {
    const timestampField = document.getElementById("formTimestamp");
    
    // Check if the element exists before trying to set its value
    if (timestampField) {
        const currentTimestamp = new Date().toISOString(); // Format: YYYY-MM-DDTHH:mm:ss.sssZ
        timestampField.value = currentTimestamp;
    } else {
        console.error('Timestamp field not found!');
    }
});
