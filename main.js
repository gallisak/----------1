const main_input = document.getElementById("main_input");
const base_input = document.getElementById("base_input");
const main_div = document.getElementById("main_div");
const main_button = document.getElementById("main_button");

function convert(num, base) {
  if (num === 0) return "0";

  const digits = "0123456789ABCDEF";
  let result = "";
  let n = num;

  while (n > 0) {
    let remainder = n % base;
    result = digits[remainder] + result;
    n = Math.floor(n / base);
  }

  return result;
}

main_button.addEventListener("click", () => {
  const input_string = main_input.value;
  const base_string = base_input.value;

  const input_int = parseInt(input_string, 10);
  const base_int = parseInt(base_string, 10);

  if (isNaN(input_int) || isNaN(base_int)) {
    main_div.innerHTML = "Введи число і основу!";
    return;
  }

  if (base_int < 2 || base_int > 16) {
    main_div.innerHTML = "Основа має бути від 2 до 16!";
    return;
  }

  const result = convert(input_int, base_int);

  main_div.innerHTML = `
    Число ${input_int} у системі ${base_int}: <b>${result}</b>
  `;
});
