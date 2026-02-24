// Authentication Logic
async function signInWithGoogle() {
    try {
        const result = await auth.signInWithPopup(provider);
        const user = result.user;
        console.log("User signed in:", user);
        updateUI(user);
    } catch (error) {
        console.error("Error signing in with Google:", error);
        alert("Failed to sign in. Please try again.");
    }
}

function signOut() {
    auth.signOut().then(() => {
        console.log("User signed out");
        updateUI(null);
    }).catch((error) => {
        console.error("Error signing out:", error);
    });
}

function updateUI(user) {
    const loginButtons = document.querySelectorAll('.login-btn, button:contains("Login")');
    const signupButtons = document.querySelectorAll('.signup-btn, button:contains("Sign Up")');
    const userProfiles = document.querySelectorAll('.user-profile');

    if (user) {
        // User is signed in
        loginButtons.forEach(btn => btn.style.display = 'none');
        signupButtons.forEach(btn => btn.style.display = 'none');
        userProfiles.forEach(profile => {
            profile.style.display = 'flex';
            const img = profile.querySelector('img');
            if (img) img.src = user.photoURL || 'https://via.placeholder.com/40';
        });
    } else {
        // User is signed out
        loginButtons.forEach(btn => btn.style.display = 'flex');
        signupButtons.forEach(btn => btn.style.display = 'flex');
        userProfiles.forEach(profile => profile.style.display = 'none');
    }
}

// Custom selector for text content since :contains is not native
function findButtonsByText(text) {
    return Array.from(document.querySelectorAll('button')).filter(btn => btn.textContent.trim().toLowerCase() === text.toLowerCase());
}

// Check auth state on load
auth.onAuthStateChanged((user) => {
    updateUI(user);

    // Attach listeners to buttons
    const loginButtons = [...document.querySelectorAll('.login-btn'), ...findButtonsByText('Login')];
    const signupButtons = [...document.querySelectorAll('.signup-btn'), ...findButtonsByText('Sign Up')];
    const signoutButtons = [...document.querySelectorAll('.signout-btn'), ...findButtonsByText('Sign Out')];

    loginButtons.forEach(btn => btn.onclick = signInWithGoogle);
    signupButtons.forEach(btn => btn.onclick = signInWithGoogle);
    signoutButtons.forEach(btn => btn.onclick = signOut);
});
