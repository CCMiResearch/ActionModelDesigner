export function RegisterRuleBlock() {
  Blockly.Blocks['dascontract_rule'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Rule:")
          .appendField(new Blockly.FieldTextInput("...Name..."), "RULE_NAME");
      this.appendDummyInput()
          .appendField("When")
          .appendField(new Blockly.FieldDropdown([["T-1", "T_1"], ["T-2", "T_2"], ["T-3", "T_3"]]), "TRANSACTION_KIND")
          .appendField(new Blockly.FieldDropdown([["Requested", "REQUESTED"], ["Promised", "PROMISED"], ["Declined", "DECLINED"]]), "STATE");
      this.appendStatementInput("IF")
          .setCheck(null)
          .appendField("If");
      this.appendStatementInput("THEN")
          .setCheck(null)
          .appendField("Then");
      this.setColour(265);
      this.setTooltip('');
      this.setHelpUrl('http://www.example.com/');
      this.setMutator(new Blockly.Mutator(['text']));
    },
    //Mutator in progress
    mutationToDom: function () {
      var container = document.createElement('mutation');
      container.setAttribute('join', this.join_);
      container.setAttribute('when', this.when);
      container.setAttribute('while', this.while);
      container.setAttribute('with', this.with);
      container.setAttribute('if', this.if);
      container.setAttribute('then', this.then);
      container.setAttribute('else', this.else);
      return container;
    },

    domToMutation: function (xmlElement) {
      /*this.join_ = xmlElement.getAttribute('join');
      this.when = xmlElement.getAttribute('when');
      this.while = xmlElement.getAttribute('while');
      this.with = xmlElement.getAttribute('with');
      this.if = xmlElement.getAttribute('if');
      this.then = xmlElement.getAttribute('then');
      this.else = xmlElement.getAttribute('else');
      this.rebuildShape_();*/
    },

    decompose: function(workspace) {
      var topBlock = workspace.newBlock('rule_helper');
      topBlock.initSvg();
      var connection = topBlock.nextConnection;

      if (this.while == true) {
        var whileBlock = workspace.newBlock('while_helper');
        whileBlock.initSvg();
        connection.connect(whileBlock.previousConnection);
        connection = whileBlock.nextConnection;
      }
      if (this.with == true) {
        var withBlock = workspace.newBlock('with_helper');
        withBlock.initSvg();
        connection.connect(withBlock.previousConnection);
        connection = withBlock.nextConnection;
      }

      if (this.else == true) {
        var elseBlock = workspace.newBlock('else_helper');
        elseBlock.initSvg();
        connection.connect(elseBlock.previousConnection);
        connection = elseBlock.nextConnection;
      }

      return topBlock;
    },

    compose: function(topBlock) {

    }
  };
}
