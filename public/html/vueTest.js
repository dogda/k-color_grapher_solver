/**
 * Created by kgaar2 on 4/10/2018.
 */

var D3Network = require('vue-d3-network')
// var CSPUTILS = require('../code/csp.js')
var Search = require('../code/search.js')
var Network = require('../code/network.js')

var network =
{ domainValues: [ 1, 2, 3 ],
  name: 'ColAustralia-conflicts',
  nodes:
   [ { id: 'NSW', _color: 'gray' },
     { id: 'NT', _color: 'gray' },
     { id: 'Q', _color: 'gray' },
     { id: 'SA', _color: 'gray' },
     { id: 'T', _color: 'gray' },
     { id: 'V', _color: 'gray' },
     { id: 'WA', _color: 'gray' } ],
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
     [ { id: 'V0', _color: 'gray' },
       { id: 'V1', _color: 'gray' },
       { id: 'V2', _color: 'gray' },
       { id: 'V3', _color: 'gray' },
       { id: 'V4', _color: 'gray' },
       { id: 'V5', _color: 'gray' },
       { id: 'V6', _color: 'gray' },
       { id: 'V7', _color: 'gray' },
       { id: 'V8', _color: 'gray' },
       { id: 'V9', _color: 'gray' },
       { id: 'V10', _color: 'gray' } ],
    links:
     [ { id: 'C0', sid: 'V0', tid: 'V1', _color: 'slategray' },
       { id: 'C1', sid: 'V0', tid: 'V3', _color: 'slategray' },
       { id: 'C2', sid: 'V0', tid: 'V6', _color: 'slategray' },
       { id: 'C3', sid: 'V0', tid: 'V8', _color: 'slategray' },
       { id: 'C4', sid: 'V1', tid: 'V2', _color: 'slategray' },
       { id: 'C5', sid: 'V1', tid: 'V5', _color: 'slategray' },
       { id: 'C6', sid: 'V1', tid: 'V7', _color: 'slategray' },
       { id: 'C7', sid: 'V2', tid: 'V4', _color: 'slategray' },
       { id: 'C8', sid: 'V2', tid: 'V6', _color: 'slategray' },
       { id: 'C9', sid: 'V2', tid: 'V9', _color: 'slategray' },
       { id: 'C10', sid: 'V3', tid: 'V4', _color: 'slategray' },
       { id: 'C11', sid: 'V3', tid: 'V5', _color: 'slategray' },
       { id: 'C12', sid: 'V3', tid: 'V9', _color: 'slategray' },
       { id: 'C13', sid: 'V4', tid: 'V7', _color: 'slategray' },
       { id: 'C14', sid: 'V4', tid: 'V8', _color: 'slategray' },
       { id: 'C15', sid: 'V5', tid: 'V10', _color: 'slategray' },
       { id: 'C16', sid: 'V6', tid: 'V10', _color: 'slategray' },
       { id: 'C17', sid: 'V7', tid: 'V10', _color: 'slategray' },
       { id: 'C18', sid: 'V8', tid: 'V10', _color: 'slategray' },
       { id: 'C19', sid: 'V9', tid: 'V10', _color: 'slategray' } ] }

var network3 = {
  'domainValues':[0,1,2,3,4],
  'name': 'queens',
  'nodes':
    [
      {'id': 'V0', '_color': 'gray'},
      {'id': 'V1', '_color': 'gray'},
      {'id': 'V2', '_color': 'gray'},
      {'id': 'V3', '_color': 'gray'},
      {'id': 'V4', '_color': 'gray'},
      {'id': 'V5', '_color': 'gray'},
      {'id': 'V6', '_color': 'gray'},
      {'id': 'V7', '_color': 'gray'},
      {'id': 'V8', '_color': 'gray'},
      {'id': 'V9', '_color': 'gray'},
      {'id': 'V10', '_color': 'gray'},
      {'id': 'V11', '_color': 'gray'},
      {'id': 'V12', '_color': 'gray'},
      {'id': 'V13', '_color': 'gray'},
      {'id': 'V14', '_color': 'gray'},
      {'id': 'V15', '_color': 'gray'},
      {'id': 'V16', '_color': 'gray'},
      {'id': 'V17', '_color': 'gray'},
      {'id': 'V18', '_color': 'gray'},
      {'id': 'V19', '_color': 'gray'},
      {'id': 'V20', '_color': 'gray'},
      {'id': 'V21', '_color': 'gray'},
      {'id': 'V22', '_color': 'gray'},
      {'id': 'V23', '_color': 'gray'},
      {'id': 'V24', '_color': 'gray'}
    ],
  'links':
    [
      {'id': 'C0', 'sid': 'V0', 'tid': 'V1', '_color': 'slategray'},
      {'id': 'C1', 'sid': 'V0', 'tid': 'V2', '_color': 'slategray'},
      {'id': 'C2', 'sid': 'V0', 'tid': 'V3', '_color': 'slategray'},
      {'id': 'C3', 'sid': 'V0', 'tid': 'V4', '_color': 'slategray'},
      {'id': 'C4', 'sid': 'V0', 'tid': 'V5', '_color': 'slategray'},
      {'id': 'C5', 'sid': 'V0', 'tid': 'V6', '_color': 'slategray'},
      {'id': 'C6', 'sid': 'V0', 'tid': 'V10', '_color': 'slategray'},
      {'id': 'C7', 'sid': 'V0', 'tid': 'V12', '_color': 'slategray'},
      {'id': 'C8', 'sid': 'V0', 'tid': 'V15', '_color': 'slategray'},
      {'id': 'C9', 'sid': 'V0', 'tid': 'V18', '_color': 'slategray'},
      {'id': 'C10', 'sid': 'V0', 'tid': 'V20', '_color': 'slategray'},
      {'id': 'C11', 'sid': 'V0', 'tid': 'V24', '_color': 'slategray'},
      {'id': 'C12', 'sid': 'V1', 'tid': 'V2', '_color': 'slategray'},
      {'id': 'C13', 'sid': 'V1', 'tid': 'V3', '_color': 'slategray'},
      {'id': 'C14', 'sid': 'V1', 'tid': 'V4', '_color': 'slategray'},
      {'id': 'C15', 'sid': 'V1', 'tid': 'V5', '_color': 'slategray'},
      {'id': 'C16', 'sid': 'V1', 'tid': 'V6', '_color': 'slategray'},
      {'id': 'C17', 'sid': 'V1', 'tid': 'V7', '_color': 'slategray'},
      {'id': 'C18', 'sid': 'V1', 'tid': 'V11', '_color': 'slategray'},
      {'id': 'C19', 'sid': 'V1', 'tid': 'V13', '_color': 'slategray'},
      {'id': 'C20', 'sid': 'V1', 'tid': 'V16', '_color': 'slategray'},
      {'id': 'C21', 'sid': 'V1', 'tid': 'V19', '_color': 'slategray'},
      {'id': 'C22', 'sid': 'V1', 'tid': 'V21', '_color': 'slategray'},
      {'id': 'C23', 'sid': 'V2', 'tid': 'V3', '_color': 'slategray'},
      {'id': 'C24', 'sid': 'V2', 'tid': 'V4', '_color': 'slategray'},
      {'id': 'C25', 'sid': 'V2', 'tid': 'V6', '_color': 'slategray'},
      {'id': 'C26', 'sid': 'V2', 'tid': 'V7', '_color': 'slategray'},
      {'id': 'C27', 'sid': 'V2', 'tid': 'V8', '_color': 'slategray'},
      {'id': 'C28', 'sid': 'V2', 'tid': 'V10', '_color': 'slategray'},
      {'id': 'C29', 'sid': 'V2', 'tid': 'V12', '_color': 'slategray'},
      {'id': 'C30', 'sid': 'V2', 'tid': 'V14', '_color': 'slategray'},
      {'id': 'C31', 'sid': 'V2', 'tid': 'V17', '_color': 'slategray'},
      {'id': 'C32', 'sid': 'V2', 'tid': 'V22', '_color': 'slategray'},
      {'id': 'C33', 'sid': 'V3', 'tid': 'V4', '_color': 'slategray'},
      {'id': 'C34', 'sid': 'V3', 'tid': 'V7', '_color': 'slategray'},
      {'id': 'C35', 'sid': 'V3', 'tid': 'V8', '_color': 'slategray'},
      {'id': 'C36', 'sid': 'V3', 'tid': 'V9', '_color': 'slategray'},
      {'id': 'C37', 'sid': 'V3', 'tid': 'V11', '_color': 'slategray'},
      {'id': 'C38', 'sid': 'V3', 'tid': 'V13', '_color': 'slategray'},
      {'id': 'C39', 'sid': 'V3', 'tid': 'V15', '_color': 'slategray'},
      {'id': 'C40', 'sid': 'V3', 'tid': 'V18', '_color': 'slategray'},
      {'id': 'C41', 'sid': 'V3', 'tid': 'V23', '_color': 'slategray'},
      {'id': 'C42', 'sid': 'V4', 'tid': 'V8', '_color': 'slategray'},
      {'id': 'C43', 'sid': 'V4', 'tid': 'V9', '_color': 'slategray'},
      {'id': 'C44', 'sid': 'V4', 'tid': 'V12', '_color': 'slategray'},
      {'id': 'C45', 'sid': 'V4', 'tid': 'V14', '_color': 'slategray'},
      {'id': 'C46', 'sid': 'V4', 'tid': 'V16', '_color': 'slategray'},
      {'id': 'C47', 'sid': 'V4', 'tid': 'V19', '_color': 'slategray'},
      {'id': 'C48', 'sid': 'V4', 'tid': 'V20', '_color': 'slategray'},
      {'id': 'C49', 'sid': 'V4', 'tid': 'V24', '_color': 'slategray'},
      {'id': 'C50', 'sid': 'V5', 'tid': 'V6', '_color': 'slategray'},
      {'id': 'C51', 'sid': 'V5', 'tid': 'V7', '_color': 'slategray'},
      {'id': 'C52', 'sid': 'V5', 'tid': 'V8', '_color': 'slategray'},
      {'id': 'C53', 'sid': 'V5', 'tid': 'V9', '_color': 'slategray'},
      {'id': 'C54', 'sid': 'V5', 'tid': 'V10', '_color': 'slategray'},
      {'id': 'C55', 'sid': 'V5', 'tid': 'V11', '_color': 'slategray'},
      {'id': 'C56', 'sid': 'V5', 'tid': 'V15', '_color': 'slategray'},
      {'id': 'C57', 'sid': 'V5', 'tid': 'V17', '_color': 'slategray'},
      {'id': 'C58', 'sid': 'V5', 'tid': 'V20', '_color': 'slategray'},
      {'id': 'C59', 'sid': 'V5', 'tid': 'V23', '_color': 'slategray'},
      {'id': 'C60', 'sid': 'V6', 'tid': 'V7', '_color': 'slategray'},
      {'id': 'C61', 'sid': 'V6', 'tid': 'V8', '_color': 'slategray'},
      {'id': 'C62', 'sid': 'V6', 'tid': 'V9', '_color': 'slategray'},
      {'id': 'C63', 'sid': 'V6', 'tid': 'V10', '_color': 'slategray'},
      {'id': 'C64', 'sid': 'V6', 'tid': 'V11', '_color': 'slategray'},
      {'id': 'C65', 'sid': 'V6', 'tid': 'V12', '_color': 'slategray'},
      {'id': 'C66', 'sid': 'V6', 'tid': 'V16', '_color': 'slategray'},
      {'id': 'C67', 'sid': 'V6', 'tid': 'V18', '_color': 'slategray'},
      {'id': 'C68', 'sid': 'V6', 'tid': 'V21', '_color': 'slategray'},
      {'id': 'C69', 'sid': 'V6', 'tid': 'V24', '_color': 'slategray'},
      {'id': 'C70', 'sid': 'V7', 'tid': 'V8', '_color': 'slategray'},
      {'id': 'C71', 'sid': 'V7', 'tid': 'V9', '_color': 'slategray'},
      {'id': 'C72', 'sid': 'V7', 'tid': 'V11', '_color': 'slategray'},
      {'id': 'C73', 'sid': 'V7', 'tid': 'V12', '_color': 'slategray'},
      {'id': 'C74', 'sid': 'V7', 'tid': 'V13', '_color': 'slategray'},
      {'id': 'C75', 'sid': 'V7', 'tid': 'V15', '_color': 'slategray'},
      {'id': 'C76', 'sid': 'V7', 'tid': 'V17', '_color': 'slategray'},
      {'id': 'C77', 'sid': 'V7', 'tid': 'V19', '_color': 'slategray'},
      {'id': 'C78', 'sid': 'V7', 'tid': 'V22', '_color': 'slategray'},
      {'id': 'C79', 'sid': 'V8', 'tid': 'V9', '_color': 'slategray'},
      {'id': 'C80', 'sid': 'V8', 'tid': 'V12', '_color': 'slategray'},
      {'id': 'C81', 'sid': 'V8', 'tid': 'V13', '_color': 'slategray'},
      {'id': 'C82', 'sid': 'V8', 'tid': 'V14', '_color': 'slategray'},
      {'id': 'C83', 'sid': 'V8', 'tid': 'V16', '_color': 'slategray'},
      {'id': 'C84', 'sid': 'V8', 'tid': 'V18', '_color': 'slategray'},
      {'id': 'C85', 'sid': 'V8', 'tid': 'V20', '_color': 'slategray'},
      {'id': 'C86', 'sid': 'V8', 'tid': 'V23', '_color': 'slategray'},
      {'id': 'C87', 'sid': 'V9', 'tid': 'V13', '_color': 'slategray'},
      {'id': 'C88', 'sid': 'V9', 'tid': 'V14', '_color': 'slategray'},
      {'id': 'C89', 'sid': 'V9', 'tid': 'V17', '_color': 'slategray'},
      {'id': 'C90', 'sid': 'V9', 'tid': 'V19', '_color': 'slategray'},
      {'id': 'C91', 'sid': 'V9', 'tid': 'V21', '_color': 'slategray'},
      {'id': 'C92', 'sid': 'V9', 'tid': 'V24', '_color': 'slategray'},
      {'id': 'C93', 'sid': 'V10', 'tid': 'V11', '_color': 'slategray'},
      {'id': 'C94', 'sid': 'V10', 'tid': 'V12', '_color': 'slategray'},
      {'id': 'C95', 'sid': 'V10', 'tid': 'V13', '_color': 'slategray'},
      {'id': 'C96', 'sid': 'V10', 'tid': 'V14', '_color': 'slategray'},
      {'id': 'C97', 'sid': 'V10', 'tid': 'V15', '_color': 'slategray'},
      {'id': 'C98', 'sid': 'V10', 'tid': 'V16', '_color': 'slategray'},
      {'id': 'C99', 'sid': 'V10', 'tid': 'V20', '_color': 'slategray'},
      {'id': 'C100', 'sid': 'V10', 'tid': 'V22', '_color': 'slategray'},
      {'id': 'C101', 'sid': 'V11', 'tid': 'V12', '_color': 'slategray'},
      {'id': 'C102', 'sid': 'V11', 'tid': 'V13', '_color': 'slategray'},
      {'id': 'C103', 'sid': 'V11', 'tid': 'V14', '_color': 'slategray'},
      {'id': 'C104', 'sid': 'V11', 'tid': 'V15', '_color': 'slategray'},
      {'id': 'C105', 'sid': 'V11', 'tid': 'V16', '_color': 'slategray'},
      {'id': 'C106', 'sid': 'V11', 'tid': 'V17', '_color': 'slategray'},
      {'id': 'C107', 'sid': 'V11', 'tid': 'V21', '_color': 'slategray'},
      {'id': 'C108', 'sid': 'V11', 'tid': 'V23', '_color': 'slategray'},
      {'id': 'C109', 'sid': 'V12', 'tid': 'V13', '_color': 'slategray'},
      {'id': 'C110', 'sid': 'V12', 'tid': 'V14', '_color': 'slategray'},
      {'id': 'C111', 'sid': 'V12', 'tid': 'V16', '_color': 'slategray'},
      {'id': 'C112', 'sid': 'V12', 'tid': 'V17', '_color': 'slategray'},
      {'id': 'C113', 'sid': 'V12', 'tid': 'V18', '_color': 'slategray'},
      {'id': 'C114', 'sid': 'V12', 'tid': 'V20', '_color': 'slategray'},
      {'id': 'C115', 'sid': 'V12', 'tid': 'V22', '_color': 'slategray'},
      {'id': 'C116', 'sid': 'V12', 'tid': 'V24', '_color': 'slategray'},
      {'id': 'C117', 'sid': 'V13', 'tid': 'V14', '_color': 'slategray'},
      {'id': 'C118', 'sid': 'V13', 'tid': 'V17', '_color': 'slategray'},
      {'id': 'C119', 'sid': 'V13', 'tid': 'V18', '_color': 'slategray'},
      {'id': 'C120', 'sid': 'V13', 'tid': 'V19', '_color': 'slategray'},
      {'id': 'C121', 'sid': 'V13', 'tid': 'V21', '_color': 'slategray'},
      {'id': 'C122', 'sid': 'V13', 'tid': 'V23', '_color': 'slategray'},
      {'id': 'C123', 'sid': 'V14', 'tid': 'V18', '_color': 'slategray'},
      {'id': 'C124', 'sid': 'V14', 'tid': 'V19', '_color': 'slategray'},
      {'id': 'C125', 'sid': 'V14', 'tid': 'V22', '_color': 'slategray'},
      {'id': 'C126', 'sid': 'V14', 'tid': 'V24', '_color': 'slategray'},
      {'id': 'C127', 'sid': 'V15', 'tid': 'V16', '_color': 'slategray'},
      {'id': 'C128', 'sid': 'V15', 'tid': 'V17', '_color': 'slategray'},
      {'id': 'C129', 'sid': 'V15', 'tid': 'V18', '_color': 'slategray'},
      {'id': 'C130', 'sid': 'V15', 'tid': 'V19', '_color': 'slategray'},
      {'id': 'C131', 'sid': 'V15', 'tid': 'V20', '_color': 'slategray'},
      {'id': 'C132', 'sid': 'V15', 'tid': 'V21', '_color': 'slategray'},
      {'id': 'C133', 'sid': 'V16', 'tid': 'V17', '_color': 'slategray'},
      {'id': 'C134', 'sid': 'V16', 'tid': 'V18', '_color': 'slategray'},
      {'id': 'C135', 'sid': 'V16', 'tid': 'V19', '_color': 'slategray'},
      {'id': 'C136', 'sid': 'V16', 'tid': 'V20', '_color': 'slategray'},
      {'id': 'C137', 'sid': 'V16', 'tid': 'V21', '_color': 'slategray'},
      {'id': 'C138', 'sid': 'V16', 'tid': 'V22', '_color': 'slategray'},
      {'id': 'C139', 'sid': 'V17', 'tid': 'V18', '_color': 'slategray'},
      {'id': 'C140', 'sid': 'V17', 'tid': 'V19', '_color': 'slategray'},
      {'id': 'C141', 'sid': 'V17', 'tid': 'V21', '_color': 'slategray'},
      {'id': 'C142', 'sid': 'V17', 'tid': 'V22', '_color': 'slategray'},
      {'id': 'C143', 'sid': 'V17', 'tid': 'V23', '_color': 'slategray'},
      {'id': 'C144', 'sid': 'V18', 'tid': 'V19', '_color': 'slategray'},
      {'id': 'C145', 'sid': 'V18', 'tid': 'V22', '_color': 'slategray'},
      {'id': 'C146', 'sid': 'V18', 'tid': 'V23', '_color': 'slategray'},
      {'id': 'C147', 'sid': 'V18', 'tid': 'V24', '_color': 'slategray'},
      {'id': 'C148', 'sid': 'V19', 'tid': 'V23', '_color': 'slategray'},
      {'id': 'C149', 'sid': 'V19', 'tid': 'V24', '_color': 'slategray'},
      {'id': 'C150', 'sid': 'V20', 'tid': 'V21', '_color': 'slategray'},
      {'id': 'C151', 'sid': 'V20', 'tid': 'V22', '_color': 'slategray'},
      {'id': 'C152', 'sid': 'V20', 'tid': 'V23', '_color': 'slategray'},
      {'id': 'C153', 'sid': 'V20', 'tid': 'V24', '_color': 'slategray'},
      {'id': 'C154', 'sid': 'V21', 'tid': 'V22', '_color': 'slategray'},
      {'id': 'C155', 'sid': 'V21', 'tid': 'V23', '_color': 'slategray'},
      {'id': 'C156', 'sid': 'V21', 'tid': 'V24', '_color': 'slategray'},
      {'id': 'C157', 'sid': 'V22', 'tid': 'V23', '_color': 'slategray'},
      {'id': 'C158', 'sid': 'V22', 'tid': 'V24', '_color': 'slategray'},
      {'id': 'C159', 'sid': 'V23', 'tid': 'V24', '_color': 'slategray'}
    ]
}

var csp = Network.networkToCsp(network)

new Vue({
  el: '#app',
  components: {
    D3Network: D3Network
  },
  data: {
    graph: network,
    options: {
      force: 3000,
      nodeSize: 20,
      nodeLabels: true,
      linkWidth: 2

    },
    csp: csp,
    backTrack: new Search.Backtrack(csp, 'lex'),
    exampleNetworks: {
      0: network,
      1: network2,
      2: network3
    },
    networkName: 'aus'
  },
  methods: {
    nextOperation: function (event) {
      this.backTrack.next()
      this.changeColors(this.backTrack.getColors())
    },
    solve: function (event) {
      this.backTrack.solve()
      this.changeColors(this.backTrack.getColors())
    },
    reset: function (event) {
      this.backTrack.reset()
      this.changeColors(this.backTrack.getColors())
    },
    changeColors: function (colors) {
      this.graph.nodes.forEach(function (e) {
        var color = colors.find(function (element) {
          return element.id === e.id
        })
        e._color = color._color
      })

      var temp = this.graph.links.pop()
      this.graph.links.push(temp)
    },
    changeHeuristic: function (heuristic) {
      this.backTrack = new Search.Backtrack(this.csp, heuristic)
      this.changeColors(this.backTrack.getColors())
    },
    changeCSP: function (network, name) {
      this.networkName = name
      this.graph = network
      var csp = Network.networkToCsp(network)
      this.csp = csp
      this.backTrack = new Search.Backtrack(csp, this.backTrack.heuristic)

      this.changeColors(this.backTrack.getColors())
    }
  },
  computed: {
    currentVariableName: function () {
      if (this.backTrack.index === this.backTrack.variables.length) {
        return 'Solved'
      } else if (this.backTrack.index > 0) {
        return 'On node ' + this.backTrack.variables[this.backTrack.index].name
      } else {
        return 'No Solution'
      }
    },
    operationCounters: function () {
      var counters = {
        nodes: this.backTrack.nodesVisited,
        constraints: this.backTrack.constraintsCompared,
        backtracks: this.backTrack.backTracks,
        heuristic: this.backTrack.heuristic
      }
      return counters
    }
  }

})
