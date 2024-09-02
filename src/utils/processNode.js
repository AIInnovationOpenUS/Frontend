import { responseSchema } from "../mock/reponse";

//@ Input: Tree-structure response data
//@ Output: List of node objects and edge objects (using for React-flow)
//@ More:
//  - Node object: {id, type, data: node data in tree, position} 
//  - Edge object: {id, type, source, target} 
function processNodes(node, parentName = "") {
    const nodes = [];
    const edges = [];
    const nodeName = parentName ? `${parentName}.${node.node}` : node.node;
    const edgeId = parentName ? `${parentName}.${node.node}` : node.node;

  
    let nodeType = "default";
    if (parentName === "") {
      nodeType = "input";
    } else if (!node.children || node.children.length === 0) {
      nodeType = "output";
    }

    const keys = Object.keys(responseSchema);

    const nodeObject = {
      id: nodeName,
      type: nodeType,
    //   data: {
    //     label: node.node,
    //     testCase : node.test_case,
    //     DOM: node.DOM,
    //     selectore: node.selector,
    //     imageBase64: node.imageBase64
    //   },
      data: keys.reduce((obj, key) => {
            if (node.hasOwnProperty(key)) {
            obj[key] = node[key];
            }
            obj['label'] = node?.node
            return obj;
        }, {}),
      position: { x: 0, y: 0 }
    };

    const edgeObject = {
        id: edgeId,
        type: 'bezier',
        source: parentName,
        target: nodeName
    };
  
    nodes.push(nodeObject); 
    edges.push(edgeObject)
  
    if (node.children && node.children.length > 0) {
      for (const child of node.children) {
        nodes.push(...processNodes(child, nodeName)[0]);
        edges.push(...processNodes(child, nodeName)[1]); 
      }
    }

    return [nodes, edges];
}
function deleteAllWhiteLines(text) {
    return text.replace(/^\s*[\r\n]/gm, '');
}

function domStringToChildrenArray(domString) {
    const tempContainer = document.createElement('div');
    tempContainer.innerHTML = domString;
  
    const childrenArray = [];
    childrenArray.push(`${domString}`);
    for (const child of tempContainer.childNodes) {
      if (child.nodeType === Node.ELEMENT_NODE) { // Consider only element nodes
        childrenArray.push(child.outerHTML); 
      }
    }
  
    return childrenArray.map(child => `${child}`);
  }

export {deleteAllWhiteLines, domStringToChildrenArray};

export default processNodes;