/**
 * These rules relate to possible syntax or logic errors in JavaScript code.
 * 
 * {@link https://eslint.org/docs/rules/#possible-errors Documentation on ESLint rules related to possible errors}
 */
module.exports = {
  rules: {

    /**
     * Enforce linebreaks after opening and before closing array brackets.
     * 
     * {@link https://eslint.org/docs/rules/array-bracket-newline See rule documentation}
     */
    'array-bracket-newline': [ 'error', { 'multiline': true } ],

    /**
     * Enforce consistent spacing inside array brackets.
     * 
     * {@link https://eslint.org/docs/rules/array-bracket-spacing See rule documentation}
     */
    'array-bracket-spacing': [ 'error', 'always' ],

    /**
     * Enforce line breaks after each array element.
     * 
     * {@link https://eslint.org/docs/rules/array-element-newline See rule documentation}
     */
    'array-element-newline': [ 'error', 'consistent' ],

    /**
     * Disallow or enforce spaces inside of blocks after opening block and before closing block.
     * 
     * {@link https://eslint.org/docs/rules/block-spacing See rule documentation}
     */
    'block-spacing': [ 'error', 'always' ],

    /**
     * Enforce consistent brace style for blocks.
     * 
     * {@link https://eslint.org/docs/rules/brace-style See rule documentation}
     */
    'brace-style': [ 'error', '1tbs' ],

    /**
     * Enforce camelcase naming convention.
     * 
     * {@link https://eslint.org/docs/rules/camelcase See rule documentation}
     */
    'camelcase': [
      'error', 
      {
        'properties': 'always',
        'ignoreDestructuring': true,
        'ignoreImports': true,
      },
    ],

    /**
     * Enforce or disallow capitalization of the first letter of a comment.
     * 
     * {@link https://eslint.org/docs/rules/capitalized-comments See rule documentation}
     */
    'capitalized-comments': [ 'error', 'always' ],

    /**
     * Require or disallow trailing commas.
     * 
     * {@link https://eslint.org/docs/rules/comma-dangle See rule documentation}
     */
    'comma-dangle': [ 'error', 'always-multiline' ],

    /**
     * Enforce consistent spacing before and after commas.
     * 
     * {@link https://eslint.org/docs/rules/comma-spacing See rule documentation}
     */
    'comma-spacing': [ 'error', { 'before': false, 'after': true } ],

    /**
     * Enforce consistent comma style.
     * 
     * {@link https://eslint.org/docs/rules/comma-style See rule documentation}
     */
    'comma-style': [ 'error', 'last' ],

  },
};