document.getElementById("login-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
        const response = await fetch("http://localhost:8080/api/users/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        });

        if (response.ok) {
            const userData = await response.json();
            // Store the user ID in session storage
            sessionStorage.setItem("userId", userData.id);
            alert("Login successful!");
            // Redirect to the dashboard or another page
            window.location.href = "discover-events.html";
        } else {
            alert("Login failed. Please check your email and password.");
        }
    } catch (error) {
        console.error("Error:", error);
        alert("An error occurred during login.");
    }
});
