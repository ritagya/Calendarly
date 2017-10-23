document.getElementById('continue-button').addEventListener('click', submit);

function submit() {
    var email = document.getElementById("e-mail").value;
    var businessSize = document.getElementById("business-size-select").getAttribute("data-value");
    var checkedImportance = document.querySelector('input[name="importantSolution"]:checked');
    var importance = checkedImportance ? checkedImportance.value : null;

    // Validation function
    function addValidationClasses(isValidInput, inuputSelector) {
        var elementClassList = document.querySelector(inuputSelector).classList;
        if (isValidInput) {
            elementClassList.remove("error");
            elementClassList.add("success");
        } else {
            elementClassList.remove("success");
            elementClassList.add("error");
        }
    }

    var isValidEmail = checkEmail(email);
    addValidationClasses(isValidEmail, ".e-mail-container");

    var isValidBusinessSize = false;
    if (businessSize) {
        isValidBusinessSize = true;
    }
    addValidationClasses(isValidBusinessSize, ".business-size-container");

    var isValidImportance = false;
    if (importance) {
        isValidImportance = true;
    }
    addValidationClasses(isValidImportance, ".importance-indicator");

    if (!isValidEmail || !isValidBusinessSize || !isValidImportance) {
        return;
    }

    if (businessSize === "1-10" || (importance === "document storage" || importance === "full text search" || importance === "price")) {
        window.location = "unqualified.html";
    } else {
        window.location = "qualified.html";
    }

}

// Validating email on submit
function checkEmail(email) {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    return reg.test(email);
}

// Dropdown  menu code //
document.querySelector("#business-size-select").addEventListener("click", function() {
    document.querySelector("#business-size-options").style.display = "flex";
});
document.querySelector("#business-size-options").addEventListener("click", function(event) {
    document.querySelector("#business-size-options").style.display = "none";
    var selectedText = event.target.textContent;
    document.querySelector("#business-size-select span").textContent = selectedText;
    document.getElementById("business-size-select").setAttribute("data-value", selectedText);
});