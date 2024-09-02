// const reponse = 
// {
//     "node": "Amazon Registration Form",
//     "test_case": {
//         "action": {
//             "type": "onClick"
//         },
//         "expectation": {
//             "description": "User submits the registration form",
//             "isComponentVisible": true
//         }
//     },
//     "DOM": "<form id=\"ap_register_form\" name=\"register\" method=\"post\" action=\"https://www.amazon.com/ap/register\" class=\"auth-validate-form-moa auth-real-time-validation\">{{child::0}}</form>",
//     "children": [
//         {
//             "node": "Input Name",
//             "test_case": {
//                 "action": {
//                     "type": "onKeyboard",
//                     "value": "John Doe"
//                 },
//                 "expectation": {
//                     "description": "User enters their name"
//                 }
//             },
//             "DOM": "<div class=\"a-row a-spacing-base\"><label for=\"ap_customer_name\">Your name</label><input type=\"text\" maxlength=\"50\" id=\"ap_customer_name\" name=\"customerName\" placeholder=\"First and last name\" class=\"a-input-text a-span12 auth-required-field\" aria-required=\"true\">{{child::0}}</div>",
//             "children": [
//                 {
//                     "node": "Name Error Alert",
//                     "test_case": {
//                         "action": {
//                             "type": "onReload"
//                         },
//                         "expectation": {
//                             "description": "Error alert appears if the name is missing",
//                             "isComponentVisible": true
//                         }
//                     },
//                     "DOM": "<div id=\"auth-customerName-missing-alert\" class=\"a-box a-alert-inline a-alert-inline-error auth-inlined-error-message\" role=\"alert\"><div class=\"a-box-inner a-alert-container\"><i class=\"a-icon a-icon-alert\"></i><div class=\"a-alert-content\">Enter your name</div></div></div>",
//                     "children": []
//                 }
//             ]
//         },
//         {
//             "node": "Input Email",
//             "test_case": {
//                 "action": {
//                     "type": "onKeyboard",
//                     "value": "example@example.com"
//                 },
//                 "expectation": {
//                     "description": "User enters their email"
//                 }
//             },
//             "DOM": "<div class=\"a-row a-spacing-base\"><label for=\"ap_email\">Mobile number or email</label><input type=\"email\" maxlength=\"64\" id=\"ap_email\" name=\"email\" class=\"a-input-text a-span12 auth-required-field\" aria-required=\"true\">{{child::0}}{{child::1}}</div>",
//             "children": [
//                 {
//                     "node": "Email Missing Alert",
//                     "test_case": {
//                         "action": {
//                             "type": "onReload"
//                         },
//                         "expectation": {
//                             "description": "Error alert appears if the email is missing",
//                             "isComponentVisible": true
//                         }
//                     },
//                     "DOM": "<div id=\"auth-email-missing-alert\" class=\"a-box a-alert-inline a-alert-inline-error auth-inlined-error-message\" role=\"alert\"><div class=\"a-box-inner a-alert-container\"><i class=\"a-icon a-icon-alert\"></i><div class=\"a-alert-content\">Enter your email or mobile phone number</div></div></div>",
//                     "children": []
//                 },
//                 {
//                     "node": "Email Invalid Alert",
//                     "test_case": {
//                         "action": {
//                             "type": "onReload"
//                         },
//                         "expectation": {
//                             "description": "Error alert appears if the email is invalid",
//                             "isComponentVisible": true
//                         }
//                     },
//                     "DOM": "<div id=\"auth-email-invalid-claim-alert\" class=\"a-box a-alert-inline a-alert-inline-error auth-inlined-error-message\" role=\"alert\"><div class=\"a-box-inner a-alert-container\"><i class=\"a-icon a-icon-alert\"></i><div class=\"a-alert-content\">Wrong or Invalid email address or mobile phone number. Please correct and try again.</div></div></div>",
//                     "children": []
//                 }
//             ]
//         },
//         {
//             "node": "Input Password",
//             "test_case": {
//                 "action": {
//                     "type": "onKeyboard",
//                     "value": "Password123"
//                 },
//                 "expectation": {
//                     "description": "User enters their password"
//                 }
//             },
//             "DOM": "<div class=\"a-row a-spacing-base\"><label for=\"ap_password\">Password</label><input type=\"password\" maxlength=\"1024\" id=\"ap_password\" name=\"password\" placeholder=\"At least 6 characters\" class=\"a-input-text a-span12 auth-required-field\" aria-required=\"true\">{{child::0}}</div>",
//             "children": [
//                 {
//                     "node": "Password Error Alert",
//                     "test_case": {
//                         "action": {
//                             "type": "onReload"
//                         },
//                         "expectation": {
//                             "description": "Error alert appears if the password is missing or invalid",
//                             "isComponentVisible": true
//                         }
//                     },
//                     "DOM": "<div id=\"auth-password-missing-alert\" class=\"a-box a-alert-inline a-alert-inline-error auth-inlined-error-message\" role=\"alert\"><div class=\"a-box-inner a-alert-container\"><i class=\"a-icon a-icon-alert\"></i><div class=\"a-alert-content\">Minimum 6 characters required</div></div></div>",
//                     "children": []
//                 }
//             ]
//         },
//         {
//             "node": "Re-enter Password",
//             "test_case": {
//                 "action": {
//                     "type": "onKeyboard",
//                     "value": "Password123"
//                 },
//                 "expectation": {
//                     "description": "User re-enters their password"
//                 }
//             },
//             "DOM": "<div class=\"a-row a-spacing-base\"><label for=\"ap_password_check\">Re-enter password</label><input type=\"password\" maxlength=\"1024\" id=\"ap_password_check\" name=\"passwordCheck\" class=\"a-input-text a-span12 auth-required-field\" aria-required=\"true\">{{child::0}}{{child::1}}</div>",
//             "children": [
//                 {
//                     "node": "Password Check Error Alert",
//                     "test_case": {
//                         "action": {
//                             "type": "onReload"
//                         },
//                         "expectation": {
//                             "description": "Error alert appears if the password check is missing or does not match",
//                             "isComponentVisible": true
//                         }
//                     },
//                     "DOM": "<div id=\"auth-passwordCheck-missing-alert\" class=\"a-box a-alert-inline a-alert-inline-error auth-inlined-error-message\" role=\"alert\"><div class=\"a-box-inner a-alert-container\"><i class=\"a-icon a-icon-alert\"></i><div class=\"a-alert-content\">Type your password again</div></div></div>",
//                     "children": []
//                 },
//                 {
//                     "node": "Password Mismatch Alert",
//                     "test_case": {
//                         "action": {
//                             "type": "onReload"
//                         },
//                         "expectation": {
//                             "description": "Error alert appears if the passwords do not match",
//                             "isComponentVisible": true
//                         }
//                     },
//                     "DOM": "<div id=\"auth-password-mismatch-alert\" class=\"a-box a-alert-inline a-alert-inline-error auth-inlined-error-message\" role=\"alert\"><div class=\"a-box-inner a-alert-container\"><i class=\"a-icon a-icon-alert\"></i><div class=\"a-alert-content\">Passwords must match</div></div></div>",
//                     "children": []
//                 }
//             ]
//         },
//         {
//             "node": "Submit Button",
//             "test_case": {
//                 "action": {
//                     "type": "onClick"
//                 },
//                 "expectation": {
//                     "description": "User clicks the continue button to submit the form",
//                     "isReload": true
//                 }
//             },
//             "DOM": "<div class=\"a-section a-spacing-extra-large\"><span id=\"auth-continue\" class=\"a-button a-button-span12 a-button-primary auth-requires-verify-modal\"><span class=\"a-button-inner\"><input id=\"continue\" type=\"submit\" class=\"a-button-input\"><span class=\"a-button-text\">Continue</span></span></span></div>",
//             "children": []
//         }
//     ]
// }

import { response as responseData }  from "../mock";

const response = responseData;

const getResponse = () =>{
    return new Promise((resolve) => {
      setTimeout(() => {
        const data = response;
        resolve(data);
      }, 1000);
    });
  }

export default getResponse;