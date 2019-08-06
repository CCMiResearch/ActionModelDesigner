export function RegisterWithBlocks() {
  Blockly.Blocks['dascontract_with'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldDropdown([["Mortage.Ammount", "MORTAGE_AMMOUNT"], ["Mortage.Client", "MORTAGE_CLIENT"], ["Client.Age", "CLIENT_AGE"]]), "With");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(115);
      this.setTooltip('');
      this.setHelpUrl('http://www.example.com/');
    }
  };
}