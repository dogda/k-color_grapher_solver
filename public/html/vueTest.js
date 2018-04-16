/**
 * Created by kgaar2 on 4/10/2018.
 */

var D3Network = require("vue-d3-network");
//var CSPUTILS = require("../code/csp.js");

//var make = CSPUTILS.createCSPFromFile("../../testProblems/ColK4-conflicts.xml", function(csp){
   // console.log(csp.variables);
//});
//var tempGraph = CSPUTILS.getNetwork( CSPUTILS.createCSPFromURL("../../testProblems/ColK4-conflicts.xml"));

var colors = {
    1 : "red",
    2 : "blue",
    3 : "green",
    4 : "yellow"
};

var tempCSP = {
    nodes:
        [
            { id: 'NSW' },
            { id: 'NT' },
            { id: 'Q' },
            { id: 'SA' },
            { id: 'T' },
            { id: 'V' },
            { id: 'WA' }
        ],
    links:
        [
            { id: 'C0', sid: 'WA', tid: 'NT',_color: "#aa00bb"},
            { id: 'C1', sid: 'WA', tid: 'SA',_color: "#aa00bb" },
            { id: 'C2', sid: 'NT', tid: 'SA',_color: "#aa00bb" },
            { id: 'C3', sid: 'NT', tid: 'Q',_color: "#aa00bb" },
            { id: 'C4', sid: 'Q', tid: 'NSW',_color: "#aa00bb" },
            { id: 'C5', sid: 'Q', tid: 'SA',_color: "#aa00bb" },
            { id: 'C6', sid: 'NSW', tid: 'SA',_color: "#aa00bb" },
            { id: 'C7', sid: 'NSW', tid: 'V',_color: "#aa00bb" },
            { id: 'C8', sid: 'SA', tid: 'V',_color: "#aa00bb" }
        ]
};


new Vue({
    el: '#app',
    components: {
        D3Network:D3Network
    },
    data: {
        graph: tempCSP,
        /*nodes: [
            {id: 1, name: 'my node 1'},
            {id: 2, name: 'my node 2'},
            {id: 3, _color: 'orange'},
            {id: 4},
            {id: 5},
            {id: 6},
            {id: 7},
            {id: 8},
            {id: 9}
        ],
        links: [
            {sid: 1, tid: 2, _color: 'red'},
            {sid: 2, tid: 8, _color: 'f0f'},
            {sid: 3, tid: 4, _color: 'rebeccapurple'},
            {sid: 4, tid: 5},
            {sid: 5, tid: 6},
            {sid: 7, tid: 8},
            {sid: 5, tid: 8},
            {sid: 3, tid: 8},
            {sid: 7, tid: 9}
        ],*/
        options: {
            force: 3000,
            nodeSize: 20,
            nodeLabels: true,
            linkWidth: 5
        }
    },
    computed: {
        //graph: CSPUTILS.getNetwork( CSPUTILS.createCSPFromFile("./public/testProblems/ColK4-conflicts.xml"))
    }

});