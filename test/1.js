const __ = (text, domain) => {};
const _n = (single, plural, number, domain) => {};
const _x = (text, context, domain) => {};
const _nx = (single, plural, number, context, domain) => {};

__('This is a simple test', 'file1 domain');
_n( '%d banana', '%d bananas', 3, 'file1 domain' );
_x( 'This is a simple test with a static context', 'file1 context', 'file1 domain' );
_nx( '%d banana with context', '%d bananas with context', 3, 'file1 context', 'file1 domain' );

// Dynamic function calls potentially generated by transpilers.
(__)('Dynamic __ function call 1');
(window['property1']['property2'].__)('Dynamic __ function call 2');
(window['property1']['property2']._n)('dynamic single', 'dynamic plural', 7);
Object(__)('Object __ function call 3');
window.demoObject.__('Dynamic __ property function call');
