const __ = (text, domain) => {};
const _n = (single, plural, number, domain) => {};
const _x = (text, context, domain) => {};
const _nx = (single, plural, number, context, domain) => {};

__('This is a test from file 2.js');
_n('Single text from file 2', 'Plural text from file 2', 2);

const dynamicContextName = 'file 2 dynamic context';
const dynamicNumberValue = 50;

_x('File 2 _x with static context', 'file 2 context');
_x('File 2 _x with dynamic context', dynamicContextName);

_nx('File 2 single text',  'File 2 plural text', 2, 'file 2 context');
// Parser should also pick up text with multiline formatting.
_nx(
  'File 2 single text dynamic context and number',
  'File 2 plural text dynamic context and number',
  dynamicNumberValue,
  dynamicContextName
);
