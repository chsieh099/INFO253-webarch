/* script.js */

/* When the madlib form is submitted, run this function */
$("#madlibForm").submit(function() {
    
    /* Our beginning madlib story (is empty) */
    var madlibStory = ""

    /* Start Validations */

    /* Get text from "name" input field. */
    var nameValue = $("#madlibForm input[name='name']").val();
    var gender = $("input[name=gender]:checked", "#madlibForm").val();
    var power = $("input[name=power]:checked", "#madlibForm").val();
    var city = $("#madlibForm input[name='city']").val();
    var villain = $("#madlibForm input[name='villain']").val();
    var animal = $("#madlibForm input[name='animal']").val();
    var number = $("#number").val();
    var adj1 = $("#madlibForm input[name='adj1']").val();
    var adj2 = $("#madlibForm input[name='adj2']").val();
    var adj3 = $("#madlibForm input[name='adj3']").val();
    var ending = $("input[name=ending]:checked", "#madlibForm").val();

    var numColors = 0;
    var colors = [];
    colors[0] = "other";
    var color = "";
    if ($("#check-red").is(":checked")) {
        // color = "red";
        colors[numColors] = "red";
        numColors += 1;
    } if ($("#check-orange").is(":checked")) {
        colors[numColors] = "orange";
        numColors += 1;
    } if ($("#check-yellow").is(":checked")) {
        colors[numColors] = "yellow";
        numColors += 1;
    } if ($("#check-green").is(":checked")) {
        colors[numColors] = "green";
        numColors += 1;
    } if ($("#check-blue").is(":checked")) {
        colors[numColors] = "blue";
        numColors += 1;
    } if ($("#check-purple").is(":checked")) {
        colors[numColors] = "purple";
        numColors += 1;
    } if ($("#check-white").is(":checked")) {
        colors[numColors] = "white";
        numColors += 1;
    } if ($("#check-grey").is(":checked")) {
        colors[numColors] = "grey";
        numColors += 1;
    } if ($("#check-black").is(":checked")) {
        colors[numColors] = "black";
        numColors += 1;
    }
    
    /* If the value in the text input field is empty */
    if (nameValue === "") {
        alert("Please input a name");
        /* Don't load a new page after clicking submit */
        return false;
    } if (!gender) {
        alert("Please pick a gender");
        return false;
    } if (!power) {
        alert("Please pick a superpower");
        return false;
    } if (numColors < 3) {
        alert("Please pick 3 colors");
        return false;
    } if (numColors > 3) {
        alert("Please only pick 3 colors");
        return false;
    } if (($("#number").val() == "") || (($("#number").val() <= "0"))) {
        alert("Please select a number greater than 0");
        return false;
    } if (city === "") {
        alert("Please input a city");
        return false;
    } if (villain === "") {
        alert("Please input a villan");
        return false;
    } if (animal === "") {
        alert("Please input an animal");
        return false;
    } if ((adj1 === "") || (adj2 === "") || (adj3 === "")) {
        alert("Please input all adjectives");
        return false;
    } if (!ending) {
        alert("Please choose an ending");
        return false;
    }
    /* If the value in the text input field is not empty, set that
        as the madlib story */
    else {
        var pronoun = "";
        var capPronoun = "";
        var possPronoun = "";
        var capPossPronoun = "";
        // madlibStory = nameValue;
        if (gender=="male") {
            pronoun = "he";
            capPronoun = "He";
            possPronoun = "his";
            capPossPronoun = "His";
        } else {
            pronoun = "she";
            capPronoun = "She";
            possPronoun = "her";
            capPossPronoun = "Her";
        }
        madlibStory = "Superhero ";
        madlibStory = madlibStory.concat(nameValue);
        madlibStory = madlibStory.concat(" is a ");
        madlibStory = madlibStory.concat(adj1);
        madlibStory = madlibStory.concat(" person who has ");
        madlibStory = madlibStory.concat(power);
        madlibStory = madlibStory.concat(". ");
        madlibStory = madlibStory.concat("One day, ");
        madlibStory = madlibStory.concat(nameValue);
        madlibStory = madlibStory.concat(" was walking down the streets of ");
        madlibStory = madlibStory.concat(city);
        madlibStory = madlibStory.concat(" painting the town ");
        madlibStory = madlibStory.concat(colors[0]);
        madlibStory = madlibStory.concat(", when ");
        madlibStory = madlibStory.concat(pronoun);
        madlibStory = madlibStory.concat(" encountered ");
        madlibStory = madlibStory.concat(possPronoun);
        madlibStory = madlibStory.concat(" archenemy, ");
        madlibStory = madlibStory.concat(villain);
        madlibStory = madlibStory.concat(". ");
        madlibStory = madlibStory.concat("Fortunately, ");
        madlibStory = madlibStory.concat(nameValue);
        madlibStory = madlibStory.concat(" brought ");
        madlibStory = madlibStory.concat(possPronoun);
        madlibStory = madlibStory.concat(" ");
        madlibStory = madlibStory.concat(number);
        madlibStory = madlibStory.concat(" ");
        madlibStory = madlibStory.concat(adj2);
        madlibStory = madlibStory.concat(" ");
        madlibStory = madlibStory.concat(colors[1]);
        madlibStory = madlibStory.concat(" ");
        madlibStory = madlibStory.concat(animal);
        if (number === "1") {
            madlibStory = madlibStory.concat(" and unleashed the beast on ");
        } else {
            madlibStory = madlibStory.concat("s and unleashed the beasts on ");
        }
        madlibStory = madlibStory.concat(villain);
        madlibStory = madlibStory.concat(" thus vanquishiing ");
        madlibStory = madlibStory.concat(villain);
        madlibStory = madlibStory.concat(" forever. The people cheered for they were freed of the ");
        madlibStory = madlibStory.concat(adj3);
        madlibStory = madlibStory.concat(" ");
        madlibStory = madlibStory.concat(villain);
        madlibStory = madlibStory.concat(".");
        if (ending === "happy") {
            madlibStory = madlibStory.concat(" The mayor of ");
            madlibStory = madlibStory.concat(city);
            madlibStory = madlibStory.concat(" honored Superhero ");
            madlibStory = madlibStory.concat(nameValue);
            madlibStory = madlibStory.concat(" with a statue of ");
            madlibStory = madlibStory.concat(nameValue);
            madlibStory = madlibStory.concat(" for all to see and the whole town ate cake as ");
            madlibStory = madlibStory.concat(colors[2]);
            madlibStory = madlibStory.concat(" fireworks filled the sky. The End.");
        } else {
            madlibStory = madlibStory.concat(" However, the celebration did not last long as at that moment,");
            madlibStory = madlibStory.concat(" a meteorite hit and the entire city was blown into ashes. The last thing ");
            madlibStory = madlibStory.concat(nameValue);
            madlibStory = madlibStory.concat(" saw was a ");
            madlibStory = madlibStory.concat(colors[2]);
            madlibStory = madlibStory.concat(" flower before the whole world went blank. The End.");
        }
    }

    /* If all validations pass, add the story to the page */
    $("#madlibStory").html(madlibStory);
    
    /* Don't load a new page after clicking submit */
    return false;
});