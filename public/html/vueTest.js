/**
 * Created by kgaar2 on 4/10/2018.
 */

var D3Network = require('vue-d3-network')
var CSPUTILS = require('../code/csp.js')
var Search = require('../code/search.js')
var Network = require('../code/network.js')

var network =
{ domainValues: [ 1, 2, 3 ],
  name: 'ColAustralia-conflicts',
  nodes:
   [ { id: 'NSW' },
     { id: 'NT' },
     { id: 'Q' },
     { id: 'SA' },
     { id: 'T' },
     { id: 'V' },
     { id: 'WA' } ],
  links:
   [ { id: 'C0', sid: 'WA', tid: 'NT', _color: 'slategray' },
     { id: 'C1', sid: 'WA', tid: 'SA', _color: 'slategray' },
     { id: 'C2', sid: 'NT', tid: 'SA', _color: 'slategray' },
     { id: 'C3', sid: 'NT', tid: 'Q', _color: 'slategray' },
     { id: 'C4', sid: 'Q', tid: 'NSW', _color: 'slategray' },
     { id: 'C5', sid: 'Q', tid: 'SA', _color: 'slategray' },
     { id: 'C6', sid: 'NSW', tid: 'SA', _color: 'slategray' },
     { id: 'C7', sid: 'NSW', tid: 'V', _color: 'slategray' },
     { id: 'C8', sid: 'SA', tid: 'V', _color: 'slategray' } ] }

var network2 =
  { domainValues: [ 0, 1, 2 ],
    name: '?',
    nodes:
     [ { id: 'V0' },
       { id: 'V1' },
       { id: 'V2' },
       { id: 'V3' },
       { id: 'V4' },
       { id: 'V5' },
       { id: 'V6' },
       { id: 'V7' },
       { id: 'V8' },
       { id: 'V9' },
       { id: 'V10' } ],
    links:
     [ { id: 'C0', sid: 'V0', tid: 'V1', _color: 'black' },
       { id: 'C1', sid: 'V0', tid: 'V3', _color: 'black' },
       { id: 'C2', sid: 'V0', tid: 'V6', _color: 'black' },
       { id: 'C3', sid: 'V0', tid: 'V8', _color: 'black' },
       { id: 'C4', sid: 'V1', tid: 'V2', _color: 'black' },
       { id: 'C5', sid: 'V1', tid: 'V5', _color: 'black' },
       { id: 'C6', sid: 'V1', tid: 'V7', _color: 'black' },
       { id: 'C7', sid: 'V2', tid: 'V4', _color: 'black' },
       { id: 'C8', sid: 'V2', tid: 'V6', _color: 'black' },
       { id: 'C9', sid: 'V2', tid: 'V9', _color: 'black' },
       { id: 'C10', sid: 'V3', tid: 'V4', _color: 'black' },
       { id: 'C11', sid: 'V3', tid: 'V5', _color: 'black' },
       { id: 'C12', sid: 'V3', tid: 'V9', _color: 'black' },
       { id: 'C13', sid: 'V4', tid: 'V7', _color: 'black' },
       { id: 'C14', sid: 'V4', tid: 'V8', _color: 'black' },
       { id: 'C15', sid: 'V5', tid: 'V10', _color: 'black' },
       { id: 'C16', sid: 'V6', tid: 'V10', _color: 'black' },
       { id: 'C17', sid: 'V7', tid: 'V10', _color: 'black' },
       { id: 'C18', sid: 'V8', tid: 'V10', _color: 'black' },
       { id: 'C19', sid: 'V9', tid: 'V10', _color: 'black' } ] }

var csp = Network.networkToCsp(network)
var bt = new Search.Backtrack(csp, 'deg')

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
            linkWidth: 2

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
        reset: function (event) {
            this.backTrack.reset();
            this.changeColors(this.backTrack.getColors());
        },
        changeColors: function (colors) {
            this.graph.nodes.forEach(function(e){
                var color = colors.find(function(element){
                    return element.id == e.id;
                });
                e._color=color._color;
            })
            this.$forceUpdate();
        }
    },
    computed: {
        currentVariableName: function () {
            if(bt.index > 0){
                return "On node " + bt.variables[bt.index].name
            } else {
                return "No Solution"
            }
        },
        graph: function () {
          return network
        }
    }

})
