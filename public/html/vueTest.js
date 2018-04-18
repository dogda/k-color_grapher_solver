/**
 * Created by kgaar2 on 4/10/2018.
 */

var D3Network = require("vue-d3-network");
var CSPUTILS = require("../code/csp.js");
var Search = require("../code/search.js");

var colors = {
    1 : "red",
    2 : "blue",
    3 : "green",
    4 : "yellow"
};

var network = {
    nodes:
        [
            { id: 'NSW',_color: "grey" },
            { id: 'NT',_color: "grey" },
            { id: 'Q',_color: "grey" },
            { id: 'SA',_color: "grey" },
            { id: 'T',_color: "grey" },
            { id: 'V',_color: "grey" },
            { id: 'WA',_color: "grey" }
        ],
    links:
        [
            { id: 'C0', sid: 'WA', tid: 'NT',_color: "#000000"},
            { id: 'C1', sid: 'WA', tid: 'SA',_color: "#000000" },
            { id: 'C2', sid: 'NT', tid: 'SA',_color: "#000000" },
            { id: 'C3', sid: 'NT', tid: 'Q',_color: "#000000" },
            { id: 'C4', sid: 'Q', tid: 'NSW',_color: "#000000" },
            { id: 'C5', sid: 'Q', tid: 'SA',_color: "#000000" },
            { id: 'C6', sid: 'NSW', tid: 'SA',_color: "#000000" },
            { id: 'C7', sid: 'NSW', tid: 'V',_color: "#000000" },
            { id: 'C8', sid: 'SA', tid: 'V',_color: "#000000" }
        ]
};

var csp = CSPUTILS.cspFromNetwork(network,new CSPUTILS.Domain("Domain",[1,2,3]));
var bt = new Search.Backtrack(csp);

new Vue({
    el: '#app',
    components: {
        D3Network:D3Network
    },
    data: {
        graph: network,
        options: {
            force: 3000,
            //forces: {
                //Center:true,
                //ManyBody:true
            //},
            nodeSize: 20,
            nodeLabels: true,
            linkWidth: 5
        },
        backTrack: bt
    },
    methods: {
        nextOperation: function(event){
            this.backTrack.next();
            this.changeColors(this.backTrack.getColors());
        },
        solve: function(event){
            this.backTrack.solve();
            this.changeColors(this.backTrack.getColors());
        },
        reset: function(event){
            this.backTrack.reset();
            this.changeColors(this.backTrack.getColors());
        },
        changeColors:function(colors){
            this.graph.nodes.forEach(function(e){
                var color = colors.find(function(element){
                    console.log(element);
                    return element.id == e.id;
                });
                e._color=color._color;
            })
        }
    },
    computed: {
        currentVariableName: function(){
          return bt.variables[bt.index].name;
        }
    }

});
