export function RegisterActionBlocks() {
  Blockly.Blocks['dascontract_action_assign'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Assign")
          .appendField(new Blockly.FieldTextInput("..."), "A")
          .appendField("=")
          .appendField(new Blockly.FieldTextInput("..."), "B");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(0);
      this.setTooltip('');
      this.setHelpUrl('http://www.example.com/');
    }
  };
  
  Blockly.Blocks['dascontract_action_trans'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldDropdown([["option", "1"], ["option", "2"], ["option", "3"]]), "A")
          .appendField(new Blockly.FieldDropdown([["option", "1"], ["option", "2"], ["option", "3"]]), "B");
      this.appendStatementInput("NAME")
          .setCheck(null);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(30);
      this.setTooltip('');
      this.setHelpUrl('http://www.example.com/');
    }
  };
  
  Blockly.Blocks['dascontract_action_param'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldTextInput("default"), "NAME")
          .appendField(":")
          .appendField(new Blockly.FieldDropdown([["option", "OPTIONNAME"], ["option", "OPTIONNAME"], ["option", "OPTIONNAME"]]), "rrrrr");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(65);
      this.setTooltip('');
      this.setHelpUrl('http://www.example.com/');
    }
  };
}