const response = 
        {
            "node": "Registration Page",
            "test_case": {
                "action": {
                    "type": "onLoad",
                    "value": null
                },
                "expectation": {
                    "description": "1. Enter username /n 2. Enter email ",
                    "componentVisible": false,
                    "reload": false
                }
            },
            "children": [
                {
                    "node": "Cookie Consent Message",
                    "test_case": {
                        "action": {
                            "type": "onLoad",
                            "value": null
                        },
                        "expectation": {
                            "description": "Display message to enable cookies",
                            "componentVisible": false,
                            "reload": false
                        }
                    },
                    "children": [],
                    "DOM": "<div><h4>Please Enable Cookies to Continue</h4></div>"
                },
                {
                    "node": "Registration Form",
                    "test_case": {
                        "action": {
                            "type": "onSubmit",
                            "value": null
                        },
                        "expectation": {
                            "description": "Submit the registration form with user details",
                            "componentVisible": false,
                            "reload": false
                        }
                    },
                    "children": [
                        {
                            "node": "Name Input",
                            "test_case": {
                                "action": {
                                    "type": "onKeyboard",
                                    "value": "John Doe"
                                },
                                "expectation": {
                                    "description": "Enter name in the input field",
                                    "componentVisible": false,
                                    "reload": false
                                }
                            },
                            "children": [],
                            "DOM": "<input type=\"text\" name=\"name\" placeholder=\"Your name\">"
                        },
                        {
                            "node": "Email Input",
                            "test_case": {
                                "action": {
                                    "type": "onKeyboard",
                                    "value": "john.doe@example.com"
                                },
                                "expectation": {
                                    "description": "Enter email in the input field",
                                    "componentVisible": false,
                                    "reload": false
                                }
                            },
                            "children": [],
                            "DOM": "<input type=\"email\" name=\"email\" placeholder=\"Mobile number or email\">"
                        },
                        {
                            "node": "Password Input",
                            "test_case": {
                                "action": {
                                    "type": "onKeyboard",
                                    "value": "password123"
                                },
                                "expectation": {
                                    "description": "Enter password in the input field",
                                    "componentVisible": false,
                                    "reload": false
                                }
                            },
                            "children": [],
                            "DOM": "<input type=\"password\" name=\"password\" placeholder=\"Password\">"
                        },
                        {
                            "node": "Re-enter Password Input",
                            "test_case": {
                                "action": {
                                    "type": "onKeyboard",
                                    "value": "password123"
                                },
                                "expectation": {
                                    "description": "Re-enter password in the input field",
                                    "componentVisible": false,
                                    "reload": false
                                }
                            },
                            "children": [],
                            "DOM": "<input type=\"password\" name=\"confirm_password\" placeholder=\"Re-enter password\">"
                        },
                        {
                            "node": "Continue Button",
                            "test_case": {
                                "action": {
                                    "type": "onClick",
                                    "value": null
                                },
                                "expectation": {
                                    "description": "Trigger form submission",
                                    "componentVisible": false,
                                    "reload": false
                                }
                            },
                            "children": [],
                            "DOM": "<button type=\"submit\">Continue</button>"
                        }
                    ],
                    "DOM": "<form id=\"registrationForm\" method=\"novalidate\">{{child::0}}{{child::1}}{{child::2}}</form>"
                },
                {
                    "node": "Footer Links",
                    "test_case": {
                        "action": {
                            "type": "onClick",
                            "value": null
                        },
                        "expectation": {
                            "description": "Navigate to the respective footer link",
                            "componentVisible": false,
                            "reload": false
                        }
                    },
                    "children": [
                        {
                            "node": "Conditions of Use Link",
                            "test_case": {
                                "action": {
                                    "type": "onClick",
                                    "value": null
                                },
                                "expectation": {
                                    "description": "Navigate to Conditions of Use page",
                                    "componentVisible": false,
                                    "reload": false
                                }
                            },
                            "children": [],
                            "DOM": "<li><a href=\"#\">Conditions of Use</a></li>"
                        },
                        {
                            "node": "Privacy Notice Link",
                            "test_case": {
                                "action": {
                                    "type": "onClick",
                                    "value": null
                                },
                                "expectation": {
                                    "description": "Navigate to Privacy Notice page",
                                    "componentVisible": false,
                                    "reload": false
                                }
                            },
                            "children": [],
                            "DOM": "<li><a href=\"#\">Privacy Notice</a></li>"
                        },
                        {
                            "node": "Help Link",
                            "test_case": {
                                "action": {
                                    "type": "onClick",
                                    "value": null
                                },
                                "expectation": {
                                    "description": "Navigate to Help page",
                                    "componentVisible": false,
                                    "reload": false
                                }
                            },
                            "children": [],
                            "DOM": "<li><a href=\"#\">Help</a></li>"
                        }
                    ],
                    "DOM": "<div><ul>{{child::0}}{{child::1}}{{child::2}}</ul></div>"
                }
            ],
            "DOM": "<body>{{child::0}}{{child::1}}{{child::2}}</body>"
        },
        {
            "node": "Registration Page",
            "test_case": {
                "action": {
                    "type": "onLoad",
                    "value": null
                },
                "expectation": {
                    "description": "Load the registration page with all necessary fields",
                    "componentVisible": false,
                    "reload": false
                }
            },
            "children": [
                {
                    "node": "Cookie Consent Message",
                    "test_case": {
                        "action": {
                            "type": "onLoad",
                            "value": null
                        },
                        "expectation": {
                            "description": "Display message to enable cookies",
                            "componentVisible": false,
                            "reload": false
                        }
                    },
                    "children": [],
                    "DOM": "<div><h4>Please Enable Cookies to Continue</h4></div>"
                },
                {
                    "node": "Registration Form",
                    "test_case": {
                        "action": {
                            "type": "onSubmit",
                            "value": null
                        },
                        "expectation": {
                            "description": "Submit the registration form with user details",
                            "componentVisible": false,
                            "reload": false
                        }
                    },
                    "children": [
                        {
                            "node": "Name Input",
                            "test_case": {
                                "action": {
                                    "type": "onKeyboard",
                                    "value": "John Doe"
                                },
                                "expectation": {
                                    "description": "Enter name in the input field",
                                    "componentVisible": false,
                                    "reload": false
                                }
                            },
                            "children": [],
                            "DOM": "<input type=\"text\" name=\"name\" placeholder=\"Your name\">"
                        },
                        {
                            "node": "Email Input",
                            "test_case": {
                                "action": {
                                    "type": "onKeyboard",
                                    "value": "john.doe@example.com"
                                },
                                "expectation": {
                                    "description": "Enter email in the input field",
                                    "componentVisible": false,
                                    "reload": false
                                }
                            },
                            "children": [],
                            "DOM": "<input type=\"email\" name=\"email\" placeholder=\"Mobile number or email\">"
                        },
                        {
                            "node": "Password Input",
                            "test_case": {
                                "action": {
                                    "type": "onKeyboard",
                                    "value": "password123"
                                },
                                "expectation": {
                                    "description": "Enter password in the input field",
                                    "componentVisible": false,
                                    "reload": false
                                }
                            },
                            "children": [],
                            "DOM": "<input type=\"password\" name=\"password\" placeholder=\"Password\">"
                        },
                        {
                            "node": "Re-enter Password Input",
                            "test_case": {
                                "action": {
                                    "type": "onKeyboard",
                                    "value": "password123"
                                },
                                "expectation": {
                                    "description": "Re-enter password in the input field",
                                    "componentVisible": false,
                                    "reload": false
                                }
                            },
                            "children": [],
                            "DOM": "<input type=\"password\" name=\"confirm_password\" placeholder=\"Re-enter password\">"
                        },
                        {
                            "node": "Continue Button",
                            "test_case": {
                                "action": {
                                    "type": "onClick",
                                    "value": null
                                },
                                "expectation": {
                                    "description": "Trigger form submission",
                                    "componentVisible": false,
                                    "reload": false
                                }
                            },
                            "children": [],
                            "DOM": "<button type=\"submit\">Continue</button>"
                        }
                    ],
                    "DOM": "<form id=\"registrationForm\" method=\"novalidate\">{{child::0}}{{child::1}}{{child::2}}</form>"
                },
                {
                    "node": "Footer Links",
                    "test_case": {
                        "action": {
                            "type": "onClick",
                            "value": null
                        },
                        "expectation": {
                            "description": "Navigate to the respective footer link",
                            "componentVisible": false,
                            "reload": false
                        }
                    },
                    "children": [
                        {
                            "node": "Conditions of Use Link",
                            "test_case": {
                                "action": {
                                    "type": "onClick",
                                    "value": null
                                },
                                "expectation": {
                                    "description": "Navigate to Conditions of Use page",
                                    "componentVisible": false,
                                    "reload": false
                                }
                            },
                            "children": [],
                            "DOM": "<li><a href=\"#\">Conditions of Use</a></li>"
                        },
                        {
                            "node": "Privacy Notice Link",
                            "test_case": {
                                "action": {
                                    "type": "onClick",
                                    "value": null
                                },
                                "expectation": {
                                    "description": "Navigate to Privacy Notice page",
                                    "componentVisible": false,
                                    "reload": false
                                }
                            },
                            "children": [],
                            "DOM": "<li><a href=\"#\">Privacy Notice</a></li>"
                        },
                        {
                            "node": "Help Link",
                            "test_case": {
                                "action": {
                                    "type": "onClick",
                                    "value": null
                                },
                                "expectation": {
                                    "description": "Navigate to Help page",
                                    "componentVisible": false,
                                    "reload": false
                                }
                            },
                            "children": [],
                            "DOM": "<li><a href=\"#\">Help</a></li>"
                        }
                    ],
                    "DOM": "<div><ul>{{child::0}}{{child::1}}{{child::2}}</ul></div>"
                }
            ],
            "DOM": "<body>{{child::0}}{{child::1}}{{child::2}}</body>"
        },
        {
            "node": "Registration Page",
            "test_case": {
                "action": {
                    "type": "onLoad",
                    "value": null
                },
                "expectation": {
                    "description": "Load the registration page with all necessary fields",
                    "componentVisible": false,
                    "reload": false
                }
            },
            "children": [
                {
                    "node": "Cookie Consent Message",
                    "test_case": {
                        "action": {
                            "type": "onLoad",
                            "value": null
                        },
                        "expectation": {
                            "description": "Display message to enable cookies",
                            "componentVisible": false,
                            "reload": false
                        }
                    },
                    "children": [],
                    "DOM": "<div><h4>Please Enable Cookies to Continue</h4></div>"
                },
                {
                    "node": "Registration Form",
                    "test_case": {
                        "action": {
                            "type": "onSubmit",
                            "value": null
                        },
                        "expectation": {
                            "description": "Submit the registration form with user details",
                            "componentVisible": false,
                            "reload": false
                        }
                    },
                    "children": [
                        {
                            "node": "Name Input",
                            "test_case": {
                                "action": {
                                    "type": "onKeyboard",
                                    "value": "John Doe"
                                },
                                "expectation": {
                                    "description": "Enter name in the input field",
                                    "componentVisible": false,
                                    "reload": false
                                }
                            },
                            "children": [],
                            "DOM": "<input type=\"text\" name=\"name\" placeholder=\"Your name\">"
                        },
                        {
                            "node": "Email Input",
                            "test_case": {
                                "action": {
                                    "type": "onKeyboard",
                                    "value": "john.doe@example.com"
                                },
                                "expectation": {
                                    "description": "Enter email in the input field",
                                    "componentVisible": false,
                                    "reload": false
                                }
                            },
                            "children": [],
                            "DOM": "<input type=\"email\" name=\"email\" placeholder=\"Mobile number or email\">"
                        },
                        {
                            "node": "Password Input",
                            "test_case": {
                                "action": {
                                    "type": "onKeyboard",
                                    "value": "password123"
                                },
                                "expectation": {
                                    "description": "Enter password in the input field",
                                    "componentVisible": false,
                                    "reload": false
                                }
                            },
                            "children": [],
                            "DOM": "<input type=\"password\" name=\"password\" placeholder=\"Password\">"
                        },
                        {
                            "node": "Re-enter Password Input",
                            "test_case": {
                                "action": {
                                    "type": "onKeyboard",
                                    "value": "password123"
                                },
                                "expectation": {
                                    "description": "Re-enter password in the input field",
                                    "componentVisible": false,
                                    "reload": false
                                }
                            },
                            "children": [],
                            "DOM": "<input type=\"password\" name=\"confirm_password\" placeholder=\"Re-enter password\">"
                        },
                        {
                            "node": "Continue Button",
                            "test_case": {
                                "action": {
                                    "type": "onClick",
                                    "value": null
                                },
                                "expectation": {
                                    "description": "Trigger form submission",
                                    "componentVisible": false,
                                    "reload": false
                                }
                            },
                            "children": [],
                            "DOM": "<button type=\"submit\">Continue</button>"
                        }
                    ],
                    "DOM": "<form id=\"registrationForm\" method=\"novalidate\">{{child::0}}{{child::1}}{{child::2}}</form>"
                },
                {
                    "node": "Footer Links",
                    "test_case": {
                        "action": {
                            "type": "onClick",
                            "value": null
                        },
                        "expectation": {
                            "description": "Navigate to the respective footer link",
                            "componentVisible": false,
                            "reload": false
                        }
                    },
                    "children": [
                        {
                            "node": "Conditions of Use Link",
                            "test_case": {
                                "action": {
                                    "type": "onClick",
                                    "value": null
                                },
                                "expectation": {
                                    "description": "Navigate to Conditions of Use page",
                                    "componentVisible": false,
                                    "reload": false
                                }
                            },
                            "children": [],
                            "DOM": "<li><a href=\"#\">Conditions of Use</a></li>"
                        },
                        {
                            "node": "Privacy Notice Link",
                            "test_case": {
                                "action": {
                                    "type": "onClick",
                                    "value": null
                                },
                                "expectation": {
                                    "description": "Navigate to Privacy Notice page",
                                    "componentVisible": false,
                                    "reload": false
                                }
                            },
                            "children": [],
                            "DOM": "<li><a href=\"#\">Privacy Notice</a></li>"
                        },
                        {
                            "node": "Help Link",
                            "test_case": {
                                "action": {
                                    "type": "onClick",
                                    "value": null
                                },
                                "expectation": {
                                    "description": "Navigate to Help page",
                                    "componentVisible": false,
                                    "reload": false
                                }
                            },
                            "children": [],
                            "DOM": "<li><a href=\"#\">Help</a></li>"
                        }
                    ],
                    "DOM": "<div><ul>{{child::0}}{{child::1}}{{child::2}}</ul></div>"
                }
            ],
            "DOM": "<body>{{child::0}}{{child::1}}{{child::2}}</body>"
        },
        {
            "node": "Registration Page",
            "test_case": {
                "action": {
                    "type": "onLoad",
                    "value": null
                },
                "expectation": {
                    "description": "Load the registration page with all necessary fields",
                    "componentVisible": false,
                    "reload": false
                }
            },
            "children": [
                {
                    "node": "Cookie Consent Message",
                    "test_case": {
                        "action": {
                            "type": "onLoad",
                            "value": null
                        },
                        "expectation": {
                            "description": "Display message to enable cookies",
                            "componentVisible": false,
                            "reload": false
                        }
                    },
                    "children": [],
                    "DOM": "<div><h4>Please Enable Cookies to Continue</h4></div>"
                },
                {
                    "node": "Registration Form",
                    "test_case": {
                        "action": {
                            "type": "onSubmit",
                            "value": null
                        },
                        "expectation": {
                            "description": "Submit the registration form with user details",
                            "componentVisible": false,
                            "reload": false
                        }
                    },
                    "children": [
                        {
                            "node": "Name Input",
                            "test_case": {
                                "action": {
                                    "type": "onKeyboard",
                                    "value": "John Doe"
                                },
                                "expectation": {
                                    "description": "Enter name in the input field",
                                    "componentVisible": false,
                                    "reload": false
                                }
                            },
                            "children": [],
                            "DOM": "<input type=\"text\" name=\"name\" placeholder=\"Your name\">"
                        },
                        {
                            "node": "Email Input",
                            "test_case": {
                                "action": {
                                    "type": "onKeyboard",
                                    "value": "john.doe@example.com"
                                },
                                "expectation": {
                                    "description": "Enter email in the input field",
                                    "componentVisible": false,
                                    "reload": false
                                }
                            },
                            "children": [],
                            "DOM": "<input type=\"email\" name=\"email\" placeholder=\"Mobile number or email\">"
                        },
                        {
                            "node": "Password Input",
                            "test_case": {
                                "action": {
                                    "type": "onKeyboard",
                                    "value": "password123"
                                },
                                "expectation": {
                                    "description": "Enter password in the input field",
                                    "componentVisible": false,
                                    "reload": false
                                }
                            },
                            "children": [],
                            "DOM": "<input type=\"password\" name=\"password\" placeholder=\"Password\">"
                        },
                        {
                            "node": "Re-enter Password Input",
                            "test_case": {
                                "action": {
                                    "type": "onKeyboard",
                                    "value": "password123"
                                },
                                "expectation": {
                                    "description": "Re-enter password in the input field",
                                    "componentVisible": false,
                                    "reload": false
                                }
                            },
                            "children": [],
                            "DOM": "<input type=\"password\" name=\"confirm_password\" placeholder=\"Re-enter password\">"
                        },
                        {
                            "node": "Continue Button",
                            "test_case": {
                                "action": {
                                    "type": "onClick",
                                    "value": null
                                },
                                "expectation": {
                                    "description": "Trigger form submission",
                                    "componentVisible": false,
                                    "reload": false
                                }
                            },
                            "children": [],
                            "DOM": "<button type=\"submit\">Continue</button>"
                        }
                    ],
                    "DOM": "<form id=\"registrationForm\" method=\"novalidate\">{{child::0}}{{child::1}}{{child::2}}</form>"
                },
                {
                    "node": "Footer Links",
                    "test_case": {
                        "action": {
                            "type": "onClick",
                            "value": null
                        },
                        "expectation": {
                            "description": "Navigate to the respective footer link",
                            "componentVisible": false,
                            "reload": false
                        }
                    },
                    "children": [
                        {
                            "node": "Conditions of Use Link",
                            "test_case": {
                                "action": {
                                    "type": "onClick",
                                    "value": null
                                },
                                "expectation": {
                                    "description": "Navigate to Conditions of Use page",
                                    "componentVisible": false,
                                    "reload": false
                                }
                            },
                            "children": [],
                            "DOM": "<li><a href=\"#\">Conditions of Use</a></li>"
                        },
                        {
                            "node": "Privacy Notice Link",
                            "test_case": {
                                "action": {
                                    "type": "onClick",
                                    "value": null
                                },
                                "expectation": {
                                    "description": "Navigate to Privacy Notice page",
                                    "componentVisible": false,
                                    "reload": false
                                }
                            },
                            "children": [],
                            "DOM": "<li><a href=\"#\">Privacy Notice</a></li>"
                        },
                        {
                            "node": "Help Link",
                            "test_case": {
                                "action": {
                                    "type": "onClick",
                                    "value": null
                                },
                                "expectation": {
                                    "description": "Navigate to Help page",
                                    "componentVisible": false,
                                    "reload": false
                                }
                            },
                            "children": [],
                            "DOM": "<li><a href=\"#\">Help</a></li>"
                        }
                    ],
                    "DOM": "<div><ul>{{child::0}}{{child::1}}{{child::2}}</ul></div>"
                }
            ],
            "DOM": "<body>{{child::0}}{{child::1}}{{child::2}}</body>"
        },
        {
            "node": "Registration Page",
            "test_case": {
                "action": {
                    "type": "onLoad",
                    "value": null
                },
                "expectation": {
                    "description": "Load the registration page with all necessary fields",
                    "componentVisible": false,
                    "reload": false
                }
            },
            "children": [
                {
                    "node": "Cookie Consent Message",
                    "test_case": {
                        "action": {
                            "type": "onLoad",
                            "value": null
                        },
                        "expectation": {
                            "description": "Display message to enable cookies",
                            "componentVisible": false,
                            "reload": false
                        }
                    },
                    "children": [],
                    "DOM": "<div><h4>Please Enable Cookies to Continue</h4></div>"
                },
                {
                    "node": "Registration Form",
                    "test_case": {
                        "action": {
                            "type": "onSubmit",
                            "value": null
                        },
                        "expectation": {
                            "description": "Submit the registration form with user details",
                            "componentVisible": false,
                            "reload": false
                        }
                    },
                    "children": [
                        {
                            "node": "Name Input",
                            "test_case": {
                                "action": {
                                    "type": "onKeyboard",
                                    "value": "John Doe"
                                },
                                "expectation": {
                                    "description": "Enter name in the input field",
                                    "componentVisible": false,
                                    "reload": false
                                }
                            },
                            "children": [],
                            "DOM": "<input type=\"text\" name=\"name\" placeholder=\"Your name\">"
                        },
                        {
                            "node": "Email Input",
                            "test_case": {
                                "action": {
                                    "type": "onKeyboard",
                                    "value": "john.doe@example.com"
                                },
                                "expectation": {
                                    "description": "Enter email in the input field",
                                    "componentVisible": false,
                                    "reload": false
                                }
                            },
                            "children": [],
                            "DOM": "<input type=\"email\" name=\"email\" placeholder=\"Mobile number or email\">"
                        },
                        {
                            "node": "Password Input",
                            "test_case": {
                                "action": {
                                    "type": "onKeyboard",
                                    "value": "password123"
                                },
                                "expectation": {
                                    "description": "Enter password in the input field",
                                    "componentVisible": false,
                                    "reload": false
                                }
                            },
                            "children": [],
                            "DOM": "<input type=\"password\" name=\"password\" placeholder=\"Password\">"
                        },
                        {
                            "node": "Re-enter Password Input",
                            "test_case": {
                                "action": {
                                    "type": "onKeyboard",
                                    "value": "password123"
                                },
                                "expectation": {
                                    "description": "Re-enter password in the input field",
                                    "componentVisible": false,
                                    "reload": false
                                }
                            },
                            "children": [],
                            "DOM": "<input type=\"password\" name=\"confirm_password\" placeholder=\"Re-enter password\">"
                        },
                        {
                            "node": "Continue Button",
                            "test_case": {
                                "action": {
                                    "type": "onClick",
                                    "value": null
                                },
                                "expectation": {
                                    "description": "Trigger form submission",
                                    "componentVisible": false,
                                    "reload": false
                                }
                            },
                            "children": [],
                            "DOM": "<button type=\"submit\">Continue</button>"
                        }
                    ],
                    "DOM": "<form id=\"registrationForm\" method=\"novalidate\">{{child::0}}{{child::1}}{{child::2}}</form>"
                },
                {
                    "node": "Footer Links",
                    "test_case": {
                        "action": {
                            "type": "onClick",
                            "value": null
                        },
                        "expectation": {
                            "description": "Navigate to the respective footer link",
                            "componentVisible": false,
                            "reload": false
                        }
                    },
                    "children": [
                        {
                            "node": "Conditions of Use Link",
                            "test_case": {
                                "action": {
                                    "type": "onClick",
                                    "value": null
                                },
                                "expectation": {
                                    "description": "Navigate to Conditions of Use page",
                                    "componentVisible": false,
                                    "reload": false
                                }
                            },
                            "children": [],
                            "DOM": "<li><a href=\"#\">Conditions of Use</a></li>"
                        },
                        {
                            "node": "Privacy Notice Link",
                            "test_case": {
                                "action": {
                                    "type": "onClick",
                                    "value": null
                                },
                                "expectation": {
                                    "description": "Navigate to Privacy Notice page",
                                    "componentVisible": false,
                                    "reload": false
                                }
                            },
                            "children": [],
                            "DOM": "<li><a href=\"#\">Privacy Notice</a></li>"
                        },
                        {
                            "node": "Help Link",
                            "test_case": {
                                "action": {
                                    "type": "onClick",
                                    "value": null
                                },
                                "expectation": {
                                    "description": "Navigate to Help page",
                                    "componentVisible": false,
                                    "reload": false
                                }
                            },
                            "children": [],
                            "DOM": "<li><a href=\"#\">Help</a></li>"
                        }
                    ],
                    "DOM": "<div><ul>{{child::0}}{{child::1}}{{child::2}}</ul></div>"
                }
            ],
            "DOM": "<body>{{child::0}}{{child::1}}{{child::2}}</body>"
        },
        {
            "node": "Registration Page",
            "test_case": {
                "action": {
                    "type": "onLoad",
                    "value": null
                },
                "expectation": {
                    "description": "Load the registration page with all necessary fields",
                    "componentVisible": false,
                    "reload": false
                }
            },
            "children": [
                {
                    "node": "Cookie Consent Message",
                    "test_case": {
                        "action": {
                            "type": "onLoad",
                            "value": null
                        },
                        "expectation": {
                            "description": "Display message to enable cookies",
                            "componentVisible": false,
                            "reload": false
                        }
                    },
                    "children": [],
                    "DOM": "<div><h4>Please Enable Cookies to Continue</h4></div>"
                },
                {
                    "node": "Registration Form",
                    "test_case": {
                        "action": {
                            "type": "onSubmit",
                            "value": null
                        },
                        "expectation": {
                            "description": "Submit the registration form with user details",
                            "componentVisible": false,
                            "reload": false
                        }
                    },
                    "children": [
                        {
                            "node": "Name Input",
                            "test_case": {
                                "action": {
                                    "type": "onKeyboard",
                                    "value": "John Doe"
                                },
                                "expectation": {
                                    "description": "Enter name in the input field",
                                    "componentVisible": false,
                                    "reload": false
                                }
                            },
                            "children": [],
                            "DOM": "<input type=\"text\" name=\"name\" placeholder=\"Your name\">"
                        },
                        {
                            "node": "Email Input",
                            "test_case": {
                                "action": {
                                    "type": "onKeyboard",
                                    "value": "john.doe@example.com"
                                },
                                "expectation": {
                                    "description": "Enter email in the input field",
                                    "componentVisible": false,
                                    "reload": false
                                }
                            },
                            "children": [],
                            "DOM": "<input type=\"email\" name=\"email\" placeholder=\"Mobile number or email\">"
                        },
                        {
                            "node": "Password Input",
                            "test_case": {
                                "action": {
                                    "type": "onKeyboard",
                                    "value": "password123"
                                },
                                "expectation": {
                                    "description": "Enter password in the input field",
                                    "componentVisible": false,
                                    "reload": false
                                }
                            },
                            "children": [],
                            "DOM": "<input type=\"password\" name=\"password\" placeholder=\"Password\">"
                        },
                        {
                            "node": "Re-enter Password Input",
                            "test_case": {
                                "action": {
                                    "type": "onKeyboard",
                                    "value": "password123"
                                },
                                "expectation": {
                                    "description": "Re-enter password in the input field",
                                    "componentVisible": false,
                                    "reload": false
                                }
                            },
                            "children": [],
                            "DOM": "<input type=\"password\" name=\"confirm_password\" placeholder=\"Re-enter password\">"
                        },
                        {
                            "node": "Continue Button",
                            "test_case": {
                                "action": {
                                    "type": "onClick",
                                    "value": null
                                },
                                "expectation": {
                                    "description": "Trigger form submission",
                                    "componentVisible": false,
                                    "reload": false
                                }
                            },
                            "children": [],
                            "DOM": "<button type=\"submit\">Continue</button>"
                        }
                    ],
                    "DOM": "<form id=\"registrationForm\" method=\"novalidate\">{{child::0}}{{child::1}}{{child::2}}</form>"
                },
                {
                    "node": "Footer Links",
                    "test_case": {
                        "action": {
                            "type": "onClick",
                            "value": null
                        },
                        "expectation": {
                            "description": "Navigate to the respective footer link",
                            "componentVisible": false,
                            "reload": false
                        }
                    },
                    "children": [
                        {
                            "node": "Conditions of Use Link",
                            "test_case": {
                                "action": {
                                    "type": "onClick",
                                    "value": null
                                },
                                "expectation": {
                                    "description": "Navigate to Conditions of Use page",
                                    "componentVisible": false,
                                    "reload": false
                                }
                            },
                            "children": [],
                            "DOM": "<li><a href=\"#\">Conditions of Use</a></li>"
                        },
                        {
                            "node": "Privacy Notice Link",
                            "test_case": {
                                "action": {
                                    "type": "onClick",
                                    "value": null
                                },
                                "expectation": {
                                    "description": "Navigate to Privacy Notice page",
                                    "componentVisible": false,
                                    "reload": false
                                }
                            },
                            "children": [],
                            "DOM": "<li><a href=\"#\">Privacy Notice</a></li>"
                        },
                        {
                            "node": "Help Link",
                            "test_case": {
                                "action": {
                                    "type": "onClick",
                                    "value": null
                                },
                                "expectation": {
                                    "description": "Navigate to Help page",
                                    "componentVisible": false,
                                    "reload": false
                                }
                            },
                            "children": [],
                            "DOM": "<li><a href=\"#\">Help</a></li>"
                        }
                    ],
                    "DOM": "<div><ul>{{child::0}}{{child::1}}{{child::2}}</ul></div>"
                }
            ],
            "DOM": "<body>{{child::0}}{{child::1}}{{child::2}}</body>"
        },
        {
            "node": "Registration Page",
            "test_case": {
                "action": {
                    "type": "onLoad",
                    "value": null
                },
                "expectation": {
                    "description": "Load the registration page with all necessary fields",
                    "componentVisible": false,
                    "reload": false
                }
            },
            "children": [
                {
                    "node": "Cookie Consent Message",
                    "test_case": {
                        "action": {
                            "type": "onLoad",
                            "value": null
                        },
                        "expectation": {
                            "description": "Display message to enable cookies",
                            "componentVisible": false,
                            "reload": false
                        }
                    },
                    "children": [],
                    "DOM": "<div><h4>Please Enable Cookies to Continue</h4></div>"
                },
                {
                    "node": "Registration Form",
                    "test_case": {
                        "action": {
                            "type": "onSubmit",
                            "value": null
                        },
                        "expectation": {
                            "description": "Submit the registration form with user details",
                            "componentVisible": false,
                            "reload": false
                        }
                    },
                    "children": [
                        {
                            "node": "Name Input",
                            "test_case": {
                                "action": {
                                    "type": "onKeyboard",
                                    "value": "John Doe"
                                },
                                "expectation": {
                                    "description": "Enter name in the input field",
                                    "componentVisible": false,
                                    "reload": false
                                }
                            },
                            "children": [],
                            "DOM": "<input type=\"text\" name=\"name\" placeholder=\"Your name\">"
                        },
                        {
                            "node": "Email Input",
                            "test_case": {
                                "action": {
                                    "type": "onKeyboard",
                                    "value": "john.doe@example.com"
                                },
                                "expectation": {
                                    "description": "Enter email in the input field",
                                    "componentVisible": false,
                                    "reload": false
                                }
                            },
                            "children": [],
                            "DOM": "<input type=\"email\" name=\"email\" placeholder=\"Mobile number or email\">"
                        },
                        {
                            "node": "Password Input",
                            "test_case": {
                                "action": {
                                    "type": "onKeyboard",
                                    "value": "password123"
                                },
                                "expectation": {
                                    "description": "Enter password in the input field",
                                    "componentVisible": false,
                                    "reload": false
                                }
                            },
                            "children": [],
                            "DOM": "<input type=\"password\" name=\"password\" placeholder=\"Password\">"
                        },
                        {
                            "node": "Re-enter Password Input",
                            "test_case": {
                                "action": {
                                    "type": "onKeyboard",
                                    "value": "password123"
                                },
                                "expectation": {
                                    "description": "Re-enter password in the input field",
                                    "componentVisible": false,
                                    "reload": false
                                }
                            },
                            "children": [],
                            "DOM": "<input type=\"password\" name=\"confirm_password\" placeholder=\"Re-enter password\">"
                        },
                        {
                            "node": "Continue Button",
                            "test_case": {
                                "action": {
                                    "type": "onClick",
                                    "value": null
                                },
                                "expectation": {
                                    "description": "Trigger form submission",
                                    "componentVisible": false,
                                    "reload": false
                                }
                            },
                            "children": [],
                            "DOM": "<button type=\"submit\">Continue</button>"
                        }
                    ],
                    "DOM": "<form id=\"registrationForm\" method=\"novalidate\">{{child::0}}{{child::1}}{{child::2}}</form>"
                },
                {
                    "node": "Footer Links",
                    "test_case": {
                        "action": {
                            "type": "onClick",
                            "value": null
                        },
                        "expectation": {
                            "description": "Navigate to the respective footer link",
                            "componentVisible": false,
                            "reload": false
                        }
                    },
                    "children": [
                        {
                            "node": "Conditions of Use Link",
                            "test_case": {
                                "action": {
                                    "type": "onClick",
                                    "value": null
                                },
                                "expectation": {
                                    "description": "Navigate to Conditions of Use page",
                                    "componentVisible": false,
                                    "reload": false
                                }
                            },
                            "children": [],
                            "DOM": "<li><a href=\"#\">Conditions of Use</a></li>"
                        },
                        {
                            "node": "Privacy Notice Link",
                            "test_case": {
                                "action": {
                                    "type": "onClick",
                                    "value": null
                                },
                                "expectation": {
                                    "description": "Navigate to Privacy Notice page",
                                    "componentVisible": false,
                                    "reload": false
                                }
                            },
                            "children": [],
                            "DOM": "<li><a href=\"#\">Privacy Notice</a></li>"
                        },
                        {
                            "node": "Help Link",
                            "test_case": {
                                "action": {
                                    "type": "onClick",
                                    "value": null
                                },
                                "expectation": {
                                    "description": "Navigate to Help page",
                                    "componentVisible": false,
                                    "reload": false
                                }
                            },
                            "children": [],
                            "DOM": "<li><a href=\"#\">Help</a></li>"
                        }
                    ],
                    "DOM": "<div><ul>{{child::0}}{{child::1}}{{child::2}}</ul></div>"
                }
            ],
            "DOM": "<body>{{child::0}}{{child::1}}{{child::2}}</body>"
        },
        {
            "node": "Registration Page",
            "test_case": {
                "action": {
                    "type": "onLoad",
                    "value": null
                },
                "expectation": {
                    "description": "Load the registration page with all necessary fields",
                    "componentVisible": false,
                    "reload": false
                }
            },
            "children": [
                {
                    "node": "Cookie Consent Message",
                    "test_case": {
                        "action": {
                            "type": "onLoad",
                            "value": null
                        },
                        "expectation": {
                            "description": "Display message to enable cookies",
                            "componentVisible": false,
                            "reload": false
                        }
                    },
                    "children": [],
                    "DOM": "<div><h4>Please Enable Cookies to Continue</h4></div>"
                },
                {
                    "node": "Registration Form",
                    "test_case": {
                        "action": {
                            "type": "onSubmit",
                            "value": null
                        },
                        "expectation": {
                            "description": "Submit the registration form with user details",
                            "componentVisible": false,
                            "reload": false
                        }
                    },
                    "children": [
                        {
                            "node": "Name Input",
                            "test_case": {
                                "action": {
                                    "type": "onKeyboard",
                                    "value": "John Doe"
                                },
                                "expectation": {
                                    "description": "Enter name in the input field",
                                    "componentVisible": false,
                                    "reload": false
                                }
                            },
                            "children": [],
                            "DOM": "<input type=\"text\" name=\"name\" placeholder=\"Your name\">"
                        },
                        {
                            "node": "Email Input",
                            "test_case": {
                                "action": {
                                    "type": "onKeyboard",
                                    "value": "john.doe@example.com"
                                },
                                "expectation": {
                                    "description": "Enter email in the input field",
                                    "componentVisible": false,
                                    "reload": false
                                }
                            },
                            "children": [],
                            "DOM": "<input type=\"email\" name=\"email\" placeholder=\"Mobile number or email\">"
                        },
                        {
                            "node": "Password Input",
                            "test_case": {
                                "action": {
                                    "type": "onKeyboard",
                                    "value": "password123"
                                },
                                "expectation": {
                                    "description": "Enter password in the input field",
                                    "componentVisible": false,
                                    "reload": false
                                }
                            },
                            "children": [],
                            "DOM": "<input type=\"password\" name=\"password\" placeholder=\"Password\">"
                        },
                        {
                            "node": "Re-enter Password Input",
                            "test_case": {
                                "action": {
                                    "type": "onKeyboard",
                                    "value": "password123"
                                },
                                "expectation": {
                                    "description": "Re-enter password in the input field",
                                    "componentVisible": false,
                                    "reload": false
                                }
                            },
                            "children": [],
                            "DOM": "<input type=\"password\" name=\"confirm_password\" placeholder=\"Re-enter password\">"
                        },
                        {
                            "node": "Continue Button",
                            "test_case": {
                                "action": {
                                    "type": "onClick",
                                    "value": null
                                },
                                "expectation": {
                                    "description": "Trigger form submission",
                                    "componentVisible": false,
                                    "reload": false
                                }
                            },
                            "children": [],
                            "DOM": "<button type=\"submit\">Continue</button>"
                        }
                    ],
                    "DOM": "<form id=\"registrationForm\" method=\"novalidate\">{{child::0}}{{child::1}}{{child::2}}</form>"
                },
                {
                    "node": "Footer Links",
                    "test_case": {
                        "action": {
                            "type": "onClick",
                            "value": null
                        },
                        "expectation": {
                            "description": "Navigate to the respective footer link",
                            "componentVisible": false,
                            "reload": false
                        }
                    },
                    "children": [
                        {
                            "node": "Conditions of Use Link",
                            "test_case": {
                                "action": {
                                    "type": "onClick",
                                    "value": null
                                },
                                "expectation": {
                                    "description": "Navigate to Conditions of Use page",
                                    "componentVisible": false,
                                    "reload": false
                                }
                            },
                            "children": [],
                            "DOM": "<li><a href=\"#\">Conditions of Use</a></li>"
                        },
                        {
                            "node": "Privacy Notice Link",
                            "test_case": {
                                "action": {
                                    "type": "onClick",
                                    "value": null
                                },
                                "expectation": {
                                    "description": "Navigate to Privacy Notice page",
                                    "componentVisible": false,
                                    "reload": false
                                }
                            },
                            "children": [],
                            "DOM": "<li><a href=\"#\">Privacy Notice</a></li>"
                        },
                        {
                            "node": "Help Link",
                            "test_case": {
                                "action": {
                                    "type": "onClick",
                                    "value": null
                                },
                                "expectation": {
                                    "description": "Navigate to Help page",
                                    "componentVisible": false,
                                    "reload": false
                                }
                            },
                            "children": [],
                            "DOM": "<li><a href=\"#\">Help</a></li>"
                        }
                    ],
                    "DOM": "<div><ul>{{child::0}}{{child::1}}{{child::2}}</ul></div>"
                }
            ],
            "DOM": "<body>{{child::0}}{{child::1}}{{child::2}}</body>"
        }
    ],