/**
 * Created by kgaar2 on 4/10/2018.
 */

var D3Network = require("vue-d3-network");
var CSPUTILS = require("../code/csp.js");



new Vue({
    el: '#app',
    components: {
        D3Network:D3Network
    },
    data: {
        //graph: CSPUTILS.getNetwork( CSPUTILS.createCSPFromFile("../../testProblems/ColK4-conflicts.xml")),
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
        graph: CSPUTILS.getNetwork( CSPUTILS.createCSPFromFile("./public/testProblems/ColK4-conflicts.xml"))
    }

});