function ButtonPress(primaryControl) {
  var formContext = primaryControl;

  Xrm.Navigation.openAlertDialog({
    text: "Click",
    confirmButtonLabel: "I accept",
    title: `Dialog box for ${formContext.getAttribute("name").getValue()}`,
  }).then(function (success) {
    Xrm.Navigation.openConfirmDialog({
      text: "You have successfully clicked.",
    });
  });
  formContext.getControl("name").setLabel("name");
}
