import React, { useCallback, useEffect, useState } from 'react';
import {
  ReactFlow,
  addEdge,
  ConnectionLineType,
  Panel,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
} from '@xyflow/react';
import dagre from 'dagre';
import '@xyflow/react/dist/style.css';
import processNodes from '../../utils/index.js';

const dagreGraph = new dagre.graphlib.Graph();
dagreGraph.setDefaultEdgeLabel(() => ({}));

const nodeWidth = 172;
const nodeHeight = 36;

const getLayoutedElements = (nodes, edges, direction = 'TB') => {
    console.log(1);
    const isHorizontal = direction === 'LR';
    console.log(2);
    dagreGraph.setGraph({ rankdir: direction });

    console.log(3);
    nodes.forEach((node) => {
        dagreGraph.setNode(node.id, { width: nodeWidth, height: nodeHeight });
    });

    console.log(4)
    edges.forEach((edge) => {
        dagreGraph.setEdge(edge.source, edge.target);
    });

    console.log(5);
    console.log(dagreGraph)
    dagre.layout(dagreGraph);

    console.log(6);
    const newNodes = nodes.map((node) => {
        const nodeWithPosition = dagreGraph.node(node.id);
        const newNode = {
        ...node,
        targetPosition: isHorizontal ? 'left' : 'top',
        sourcePosition: isHorizontal ? 'right' : 'bottom',
        // We are shifting the dagre node position (anchor=center center) to the top left
        // so it matches the React Flow node anchor point (top left).
        position: {
            x: nodeWithPosition.x - nodeWidth / 2,
            y: nodeWithPosition.y - nodeHeight / 2,
        },
        };

        return newNode;
    });

    return { nodes: newNodes, edges };
};


const LayoutFlow = ({data}) => {
    // const [nodesData, setNodesData] = useState();
    // const [edgesData, setEdgesData] = useState();
    // useEffect(()=>{
    //     const {nodesData, edgesData} = processNodes(data);
    //     setNodes(nodes);
    //     setEdges(edges);
    //     console.log(nodesData);
    //     console.log(edgesData);
    // },[])

    // console.log(data)
    const [nodesData, edgesData] = processNodes(data);
    console.log(nodesData, edgesData.shift());

    const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(
        nodesData,
        edgesData,
    );

    const [nodes, setNodes, onNodesChange] = useNodesState(layoutedNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(layoutedEdges);

    const onConnect = useCallback(
        (params) =>
        setEdges((eds) =>
            addEdge(
            { ...params, type: ConnectionLineType.SmoothStep, animated: true },
            eds,
            ),
        ),
        [],
    );
    const onLayout = useCallback(
        (direction) => {
        const { nodes: layoutedNodes, edges: layoutedEdges } =
            getLayoutedElements(nodes, edges, direction);

        setNodes([...layoutedNodes]);
        setEdges([...layoutedEdges]);
        },
        [nodes, edges],
    );

    return (
        <div className="w-2/3 h-full rounded-tl-lg rounded-bl-lg border-2 border-solid border-white">
             <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                //   connectionLineType={ConnectionLineType.SmoothStep}
                fitView
                >
                <Panel position="top-right">
                    <div class="inline-flex">
                        <button 
                            onClick={() => onLayout('TB')}
                            class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
                            Vertical
                        </button>
                        <button 
                            onClick={() => onLayout('LR')}
                            class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">
                            Horizontal
                        </button>
                    </div>
                </Panel>    
                <MiniMap />
                <Controls />
                <Background />
            </ReactFlow>
        </div>
       
    );
};

export default LayoutFlow;
