export default function getFormFields(formId) {
  const formFields = {};
  const form = document.querySelector("#" + formId);

  for (var i = 0; i < form.elements.length; i++) {
    var fieldName = form.elements[i].name;
    var fieldValue = form.elements[i].value;

    if (fieldName !== "") {
      if (form.elements[i].type === "number") {
        formFields[fieldName] = +fieldValue;
        continue;
      }
      formFields[fieldName] = fieldValue;
    }
  }

  return formFields;
}
