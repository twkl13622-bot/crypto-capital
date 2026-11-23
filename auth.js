// ثبت نام کاربر
async function registerUser(email, password) {
const { data, error } = await supabaseClient.auth.signUp({
email: email,
password: password
});

if (error) {
alert("خطا در ثبت نام: " + error.message);
return null;
}

alert("ثبت نام موفق بود. اکنون می‌توانید وارد شوید.");
return data;
}

// ورود کاربر
async function loginUser(email, password) {
const { data, error } = await supabaseClient.auth.signInWithPassword({
email: email,
password: password
});

if (error) {
alert("خطا در ورود: " + error.message);
return null;
}

alert("ورود موفقیت آمیز بود");
return data;
}

// خروج کاربر
async function logoutUser() {
const { error } = await supabaseClient.auth.signOut();

if (error) {
alert("خطا: " + error.message);
return;
}

alert("با موفقیت خارج شدید");
}

// بررسی وضعیت ورود کاربر
async function checkUser() {
const { data, error } = await supabaseClient.auth.getUser();

if (error) {
console.error(error.message);
return null;
}

return data.user;
}
