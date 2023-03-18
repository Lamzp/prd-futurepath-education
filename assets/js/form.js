function Validator(options) {
  const selectorRules = {};
  // ham thuc hien validate
  function validate(inputEl, rule) {
    const errorMessageEl = inputEl.parentElement.querySelector(
      ".form__message--err"
    );
    let errorMessage;

    const rules = selectorRules[rule.selector];

    for (let i = 0; i < rules.length; i++) {
      errorMessage = rules[i](inputEl.value);
      if (errorMessage) break;
    }
    console.log(rules);
    errorMessage
      ? (errorMessageEl.innerHTML = errorMessage)
      : (errorMessageEl.innerHTML = "");
  }

  // lay element cua form
  const formEl = document.querySelector(options.form);
  if (formEl) {
    formEl.onsubmit = function (e) {
      e.preventDefault();

      options.rules.forEach((rule) => {
        const inputEl = formEl.querySelector(rule.selector);
        validate(inputEl, rule);
      });
      console.log("submit");
    };

    options.rules.forEach((rule) => {
      // luu lai cac rule moi lan input
      if (Array.isArray(selectorRules[rule.selector])) {
        selectorRules[rule.selector].push(rule.test);
      } else {
        selectorRules[rule.selector] = [rule.test];
      }
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
  console.log(selectorRules);
}
const tt = `<p class="form__test-err"><i class="fa-solid fa-xmark"></i>required</p>`;
const test = document.createElement("div");
Validator.isRequired = function (selector, message) {
  return {
    selector,
    test: function (value) {
      return value.trim() ? undefined : message || `${typeof test}`;
    },
  };
};

Validator.isEmail = function (selector, message) {
  return {
    selector,
    test: function (value) {
      const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      return regex.test(value)
        ? undefined
        : message || "nhap dung truong email";
    },
  };
};

Validator({
  form: "#form-1",
  rules: [
    Validator.isRequired(
      "#first_name",
      `<p class="form__test-err"><i class="fa-solid fa-xmark"></i>required</p>`
    ),
    Validator.isRequired("#email", "vui long nhap truong nay"),
    Validator.isEmail("#email", "Vui long nhap dung truong email"),
  ],
});
