# Functional Test Cases for The Assignment: 

## Positive Test Cases

### TC01 - Login with valid credentials

**Steps:**

1. Open the login page.
2. Enter username `student`.
3. Enter password `Password123`.
4. Click the Submit button.

**Expected Result:**

* User logs in successfully.
* Success message is displayed.
* Logout button is visible.

---

### TC02 - Check success message after login

**Steps:**

1. Login with valid credentials.

**Expected Result:**

* "Logged In Successfully" message is displayed.

---

### TC03 - Check user is redirected after login

**Steps:**

1. Login with valid credentials.

**Expected Result:**

* User is redirected to the success page.

---

### TC04 - Check Logout button after login

**Steps:**

1. Login with valid credentials.

**Expected Result:**

* Logout button is displayed.

---

### TC05 - Logout after successful login

**Steps:**

1. Login with valid credentials.
2. Click the Logout button.

**Expected Result:**

* User is logged out successfully.

---

## Negative Test Cases

### TC06 - Login with an invalid username

**Steps:**

1. Open the login page.
2. Enter an incorrect username.
3. Enter a valid password.
4. Click the Submit button.

**Expected Result:**

* Error message "Your username is invalid!" is displayed.

---

### TC07 - Login with an invalid password

**Steps:**

1. Open the login page.
2. Enter a valid username.
3. Enter an incorrect password.
4. Click the Submit button.

**Expected Result:**

* Error message "Your password is invalid!" is displayed.

---

### TC08 - Login with invalid username and password

**Steps:**

1. Open the login page.
2. Enter an invalid username.
3. Enter an invalid password.
4. Click the Submit button.

**Expected Result:**

* Login fails and an error message is displayed.

---

### TC09 - Login without entering credentials

**Steps:**

1. Open the login page.
2. Leave the username field empty.
3. Leave the password field empty.
4. Click the Submit button.

**Expected Result:**

* Login fails and an error message is displayed.

---

### TC10 - Login with spaces before or after the username

**Steps:**

1. Open the login page.
2. Enter the username with leading or trailing spaces.
3. Enter a valid password.
4. Click the Submit button.

**Expected Result:**

* Login should not be successful or the spaces should be handled correctly.
