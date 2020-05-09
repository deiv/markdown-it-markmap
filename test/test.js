/*
 * @file test.js
 *
 * @brief tests
 * @author David Suárez
 * @date Sat, 09 May 20 19:45:15 +0200
 *
 * @license
 *
 * markdown-it-markmap: markdown-it markmap-lib plugin
 *
 * Copyright (c) 2020 David Suárez
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 *
 */

var assert = require('assert');
var markdownIt = require('markdown-it');
var markdownItMarkmap = require('../build/index');

const mdi = markdownIt()
mdi.use(markdownItMarkmap)

let mindmapContent1 = `
\`\`\`mindmap
# root
## child1
  - child1
## child2
  - child1
\`\`\``;

let mindmapContent2 = `
\`\`\`mindmap
# root
- child1
- child2
\`\`\``;

let mindmapContent3 = `
\`\`\`mindmap
# root
\`\`\``;

let mindmapContentResult1 = `<svg id="markmap-0"></svg><script>markmap.markmap("#markmap-0",{"t":"heading","d":1,"v":"root","c":[{"t":"heading","d":2,"v":"child1","c":[{"t":"list_item","d":3,"v":"child1"}]},{"t":"heading","d":2,"v":"child2","c":[{"t":"list_item","d":3,"v":"child1"}]}]});</script>`;
let mindmapContentResult2 = `<svg id="markmap-1"></svg><script>markmap.markmap("#markmap-1",{"t":"heading","d":1,"v":"root","c":[{"t":"list_item","d":2,"v":"child1"},{"t":"list_item","d":2,"v":"child2"}]});</script>`;
let mindmapContentResult3 = `<svg id="markmap-2"></svg><script>markmap.markmap("#markmap-2",{"t":"heading","d":1,"v":"root"});</script>`;

assert.equal(mdi.render(mindmapContent1), mindmapContentResult1);
assert.equal(mdi.render(mindmapContent2), mindmapContentResult2);
assert.equal(mdi.render(mindmapContent3), mindmapContentResult3);
