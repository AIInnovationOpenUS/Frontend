const reponse = {
        "node": "html",
        "test_case": {
          "description": "Verify the HTML root node and its structure",
          "input": {},
          "expected_output": {
            "tagName": "HTML",
            "childCount": 2
          }
        },
        "children": [
          {
            "node": "head",
            "test_case": {
              "description": "Check the head element contains a title element",
              "input": {},
              "expected_output": {
                "childCount": 1,
                "childNodeName": "title"
              }
            },
            "children": [
              {
                "node": "title",
                "test_case": {
                  "description": "Verify the title content is correct",
                  "input": {},
                  "expected_output": {
                    "textContent": "DOM Tree Example"
                  }
                },
                "children": [
                  {
                    "node": "text",
                    "content": "DOM Tree Example",
                    "test_case": {
                      "description": "Ensure the title text matches expected content",
                      "input": {},
                      "expected_output": {
                        "textContent": "DOM Tree Example"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "node": "body",
            "test_case": {
              "description": "Verify the body element and its main structure",
              "input": {},
              "expected_output": {
                "childCount": 3
              }
            },
            "children": [
              {
                "node": "h1",
                "test_case": {
                  "description": "Check the h1 element content",
                  "input": {},
                  "expected_output": {
                    "textContent": "Title"
                  }
                },
                "children": [
                  {
                    "node": "text",
                    "content": "Title",
                    "test_case": {
                      "description": "Ensure h1 text matches expected content",
                      "input": {},
                      "expected_output": {
                        "textContent": "Title"
                      }
                    }
                  }
                ]
              },
              {
                "node": "p",
                "test_case": {
                  "description": "Verify the paragraph content",
                  "input": {},
                  "expected_output": {
                    "textContent": "This is a paragraph."
                  }
                },
                "children": [
                  {
                    "node": "text",
                    "content": "This is a paragraph.",
                    "test_case": {
                      "description": "Ensure paragraph text matches expected content",
                      "input": {},
                      "expected_output": {
                        "textContent": "This is a paragraph."
                      }
                    }
                  }
                ]
              },
              {
                "node": "ul",
                "test_case": {
                  "description": "Verify unordered list structure and content",
                  "input": {},
                  "expected_output": {
                    "childCount": 2,
                    "firstChildNodeName": "li"
                  }
                },
                "children": [
                  {
                    "node": "li",
                    "test_case": {
                      "description": "Check first list item content",
                      "input": {},
                      "expected_output": {
                        "textContent": "Item 1"
                      }
                    },
                    "children": [
                      {
                        "node": "text",
                        "content": "Item 1",
                        "test_case": {
                          "description": "Ensure list item 1 text matches expected content",
                          "input": {},
                          "expected_output": {
                            "textContent": "Item 1"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "node": "li",
                    "test_case": {
                      "description": "Check second list item content",
                      "input": {},
                      "expected_output": {
                        "textContent": "Item 2"
                      }
                    },
                    "children": [
                      {
                        "node": "text",
                        "content": "Item 2",
                        "test_case": {
                          "description": "Ensure list item 2 text matches expected content",
                          "input": {},
                          "expected_output": {
      
                            "textContent": "Item 2"
                          }
                        }
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }      

const getReponse = () =>{
    return new Promise((resolve) => {
      setTimeout(() => {
        const data = reponse;
        resolve(data);
      }, 1000);
    });
  }

export default getReponse;