function Validator(options) {
  // ham thuc hien validate
  function validate(inputEl, rule) {
    const errorMessageEl =
      inputEl.parentElement.querySelector(".form__message");
    const errorMessage = rule.test(inputEl.value);
    errorMessage
      ? (errorMessageEl.innerText = errorMessage)
      : (errorMessageEl.innerText = "");
  }

  // lay element cua form
  const formEl = document.querySelector(options.form);
  if (formEl) {
    options.rules.forEach((rule) => {
      const inputEl = formEl.querySelector(rule.selector);
      if (inputEl) {
        // xu li moi khi nguoi dung blur
        inputEl.onblur = function () {
          validate(inputEl, rule);
        };

        // xu li moi khi nguoi dung nhap vao input
        inputEl.oninput = function () {
          console.log(inputEl.value);
        };
      }
    });
  }
}

Validator.isRequired = function (selector) {
  return {
    selector,
    test: function (value) {
      return value.trim() ? undefined : "Vui long nhap truong nay";
    },
  };
};

Validator.isFullName = function (selector) {
  return {
    selector,
    test: function (value) {
      const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      return regex.test(value) ? undefined : "nhap dung truong email";
    },
  };
};

Validator({
  form: "#form-1",
  rules: [Validator.isRequired("#first_name"), Validator.isFullName("#email")],
});
