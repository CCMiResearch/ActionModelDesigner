import { RegisterIfBlocks } from './blocks/if_blocks.js'
import { RegisterWithBlocks } from './blocks/with_blocks.js'
import { RegisterActionBlocks } from './blocks/action_blocks.js'
import { RegisterRuleBlock } from './blocks/rule_block.js'

RegisterIfBlocks();
RegisterActionBlocks();
RegisterWithBlocks();
RegisterRuleBlock();
var demoWorkspace = Blockly.inject('blocklyDiv',
    {
        media: 'node_modules/blockly/media/',
        toolbox: document.getElementById('toolbox'),
        sounds: false
    });