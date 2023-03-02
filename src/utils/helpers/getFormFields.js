export default function getFormFields(formId) {
  const formFields = {};
  const form = document.querySelector("#" + formId);

  for (var i = 0; i < form.elements.length; i++) {
    var fieldName = form.elements[i].name;
    var fieldValue = form.elements[i].value;
    formFields[fieldName] = fieldValue;
  }

  return formFields;
}
