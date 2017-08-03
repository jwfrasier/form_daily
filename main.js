// The Form Data
let formData = [
  // For demonstration purposes,
  // the first form element has been added to the HTML file as a comment
  // compare the input in the HTML file with the contents of this first object
  {
    "type": "text",
    "label": "First Name",
    "id": "user-first-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "text",
    "label": "Last Name",
    "id": "user-last-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "email",
    "label": "Email Address",
    "id": "user-email",
    "icon": "fa-envelope",
    "options": []
  },
  {
    "type": "text",
    "label": "Current Website URL",
    "id": "user-website",
    "icon": "fa-globe",
    "options": []
  },
  {
    "type": "select",
    "label": "Select Language",
    "id": "user-language",
    "icon": "",
    "options": [
      {
        "label": "English",
        "value": "EN"
      },
      {
        "label": "French",
        "value": "FR"
      },
      {
        "label": "Spanish",
        "value": "SP"
      },
      {
        "label": "Chinese",
        "value": "CH"
      },
      {
        "label": "Japanese",
        "value": "JP"
      }
    ]
  },
  {
    "type": "textarea",
    "label": "Your Comment",
    "id": "user-comment",
    "icon": "fa-comments",
    "options": []
  },
  {
    "type": "tel",
    "label": "Mobile Number",
    "id": "user-mobile",
    "icon": "fa-mobile-phone",
    "options": []
  },
  {
    "type": "tel",
    "label": "Home Number",
    "id": "user-phone",
    "icon": "fa-phone",
    "options": []
  }
];

// HINTS:
// As you can see, we access the first element in the array
// with [0] and then grab the property "label" using the "." operator
( function(){
  // Select the first element from the array
// storing the the specific field of 'fields' into fieldsDiv
  let fieldsDiv = document.querySelector("#fields")
//Looping over the array
  for(var index = 0; index < formData.length;index++) {
// Userinfo will = the data we get from that index and field
      let userInfo = formData[index]
// If it = 'texarea' we need to create a text area for a large
// text input
      if(userInfo.type == "textarea") {
          let textarea = document.createElement("textarea")
          fieldsDiv.append(textarea)
// Else if it equals a 'select' type, we make it a
// dropdown menu
      } else if(userInfo.type == "select") {
// Store that key 'select' into a variable we can call later
         let select = document.createElement("select")
// Loop over the entire array
         for (i = 0; i < userInfo.options.length; i++){
           console.log(userInfo.options[i].value)
// Store the option key into a variable to use later
           let option = document.createElement("option")
// Create 'option.value' to = what we find for the value and label since
// it has two things it is passing from the 'options' array.
           option.value = userInfo.options[i].value
           option.label = userInfo.options[i].label
           select.append(option)
         }
         fieldsDiv.append(select)
      } else {
        let textbox = document.createElement("input")
        textbox.type = userInfo.type
        textbox.placeholder = userInfo.label
        textbox.id = userInfo.id
        fieldsDiv.append(textbox)
      }
      //console.log(userInfo)
  }
} )();



// -------- Your Code Goes Below this Line --------
