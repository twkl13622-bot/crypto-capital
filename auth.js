// ثبت نام کاربر
async function registerUser(email, password) {
  const { data, error } = await supabaseClient.auth.signUp({
    email: email,
    password: password
  });

  if (error) {
    alert("خطا: " + error.message);
    return;
  }

  alert("ثبت نام انجام شد. ایمیل خود را بررسی کنید.");
  return data;
}

// ورود کاربر
async function loginUser(email, password) {
  const { data, error } = await supabaseClient.auth.signInWithPassword({
    email: email,
    password: password
  });

  if (error) {
    alert("خطا: " + error.message);
    return;
  }

  alert("ورود موفقیت آمیز بود");
  return data;
}

// خروج کاربر
async function logoutUser() {
  const { error } = await supabaseClient.auth.signOut();

  if (error) {
    alert(error.message);
    return;
  }

  alert("خارج شدید");
}
