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

    const nodeObject = {
      id: nodeName,
      type: nodeType,
      data: {
        label: node.node,
        testCase : node.test_case
      },
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

export default processNodes;