
// Variable to hold request
var request;

// Bind to the submit event of our form
$("#form").submit(function (event) {

    // Abort any pending request
    if (request) {
        request.abort();
    }
    // setup some local variables
    var $form = $(this);

    // Let's select and cache all the fields
    var $inputs = $form.find("select, input, textarea, button");

    // Serialize the data in the form
    var serializedData = $form.serialize();

    // Let's disable the inputs for the duration of the Ajax request.
    // Note: we disable elements AFTER the form data has been serialized.
    // Disabled form elements will not be serialized.
    $inputs.prop("disabled", true);

    // Fire off the request to the server google app script
    request = $.ajax({
        url: "https://script.google.com/macros/s/AKfycbybnHFzGEGQiptnHpGudkCTyNt0ebOw6MuiMRvAbjsYjjSgy8Q3/exec",
        type: "post",
        data: serializedData
    });

    // Callback handler that will be called on success
    request.done(function (response, textStatus, jqXHR) {
        // Log a message to the console
        console.log("your data is sent!");
        console.log(response);
        console.log(textStatus);
        console.log(jqXHR);
        document.getElementById("postal").innerHTML = "<p style=\"text-align:center; color:#fff;\"><br><br><br>We have received your message.<br>You will hear from us shortly.<br>Thanks for visiting us.</p>";
        //Success message
    });

    // Callback handler that will be called on failure
    request.fail(function (jqXHR, textStatus, errorThrown) {
        // Log the error to the console
        console.error(
            "The following error occurred: " +
            textStatus, errorThrown
        );
        document.getElementById("warning").innerHTML = "<b style=\"color:red; text-align:center\">An error has occurred. Check your console for the error code!</b>";
        //Error message
    });

    // Callback handler that will be called regardless
    // if the request failed or succeeded
    request.always(function () {
        // Reenable the inputs
        $inputs.prop("disabled", false);
    });

    // Prevent default posting of form
    event.preventDefault();
});