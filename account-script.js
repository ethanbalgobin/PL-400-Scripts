this.formOnLoad = function (executionContext) {
  var formContext = executionContext.getFormContext();
  formContext.ui.setFormNotification(
    "Hello world v3",
    "INFO",
    "IDUnique220912",
  ); // message content, type of message, id of message

  /**
   * Get the column by the logical name, if it is blank update it, else leave the existing value.
   * There are different types of contexts, examples, gridcontext, subgridcontext
   */
  if (formContext.getAttribute("fax").getValue() == null) {
    formContext.getAttribute("fax").setValue("123-4567");
  }
};
