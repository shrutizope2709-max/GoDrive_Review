function copyAndRedirect(id) {
    // 1. Get the text
    var reviewText = document.getElementById(id).innerText;
    
    // 2. Copy to clipboard
    navigator.clipboard.writeText(reviewText).then(function() {
        alert("Review copied! Now redirecting to Google...");
        
        // 3. Open your Google Review Link
        // REPLACE THE URL BELOW WITH YOUR ACTUAL GOOGLE REVIEW LINK
        window.location.href = "https://g.page/r/YOUR_UNIQUE_CODE/review"; 
    });
}