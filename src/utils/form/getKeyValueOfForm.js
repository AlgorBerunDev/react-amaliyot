export default function getKeyValueOfForm(formId) {
  let form = document.getElementById(formId);
  let data = new FormData(form);
  const keyValue = {};

  for (var [key, value] of data) {
    Object.assign(keyValue, { [key]: value });
  }

  return keyValue;
}
