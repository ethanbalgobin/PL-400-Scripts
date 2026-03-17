this.formOnLoad = function (executionContext) {
  var formContext = executionContext.getFormContext();
  formContext.ui.setFormNotification(
    "Hello world v6",
    "INFO",
    "IDUnique220912",
  ); // message content, type of message, id of message

  /**
   * Get the column by the logical name, if it is blank update it, else leave the existing value.
   * There are different types of contexts, examples, gridcontext, subgridcontext
   */
  if (formContext.getAttribute("fax").getValue() == null) {
    formContext.getAttribute("fax").setValue("123-4567");

    /**
     * An actions property can also be set, which will render a control for the user to use.
     * If they select the control, the relevant action will be executed
     * e.g actions: []
     */
    formContext.getControl("fax").addNotification({
      messages: ["Fax number set to default."],
      notificationLevel: "RECOMMENDATION", // type of message {recommendation, information, error}
      uniqueID: "IDUnique220912-2",
    });
  }
};

this.AddressStreet3Hide = function (executionContext) {
  var formContext = executionContext.getFormContext();

  if (formContext.getAttribute("address1_line2").getValue() == null) {
    formContext
      .getControl("address1_composite_compositionLinkControl_address1_line3")
      .setVisible(false); // when fields on a form are linked together, they are known as a composition link control
  } else {
    formContext
      .getControl("address1_composite_compositionLinkControl_address1_line3")
      .setVisible(true);
  }
};
