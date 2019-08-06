export function RegisterIfBlocks() {
  Blockly.Blocks['dascontract_parentheses'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("(");
      this.appendStatementInput("NAME")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(")");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(225);
      this.setTooltip('');
      this.setHelpUrl('http://www.example.com/');
    }
  };
  
  Blockly.Blocks['dascontract_not'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("NOT");
      this.appendStatementInput("NAME")
          .setCheck(null);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(225);
      this.setTooltip('');
      this.setHelpUrl('http://www.example.com/');
    }
  };
  
  Blockly.Blocks['dascontract_and'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("AND");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(225);
      this.setTooltip('');
      this.setHelpUrl('http://www.example.com/');
    }
  };
  
  Blockly.Blocks['dascontract_or'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("OR");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(225);
      this.setTooltip('');
      this.setHelpUrl('http://www.example.com/');
    }
  };
  
  Blockly.Blocks['dascontract_compval'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldDropdown([["variable1", "VARIABLE1"], ["variable2", "VARIABLE2"], ["variable3", "VARIABLE3"]]), "VARIABLE")
          .appendField(new Blockly.FieldDropdown([["==", "EQUAL"], ["<", "LESS"], [">", "MORE"]]), "OPERATOR")
          .appendField(new Blockly.FieldTextInput("data field"), "DATAFIELD");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(210);
      this.setTooltip('');
      this.setHelpUrl('http://www.example.com/');
    }
  };
  
  Blockly.Blocks['dascontract_compmem'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldDropdown([["variable1", "VARIABLE1"], ["variable2", "VARIABLE2"], ["variable3", "VARIABLE3"]]), "NAME1")
          .appendField(new Blockly.FieldDropdown([["==", "EQUAL"], ["<", "LESS"], [">", "MORE"]]), "OPERATOR")
          .appendField(new Blockly.FieldDropdown([["variable1", "VARIABLE1"], ["variable2", "VARIABLE2"], ["variable3", "VARIABLE3"]]), "3");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(210);
      this.setTooltip('');
      this.setHelpUrl('http://www.example.com/');
    }
  };
}

