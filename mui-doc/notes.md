
Bootstrapped this repo with the
[mui-view](https://github.com/stormasm/mui-view) starter kit.

* **md1** is an example of the code working without doing the remote fetch of the file.

The actual data is simply located in a **const**.

* **md2** is remote file retrieval with all of the bells and whistles associated with doing this...

This repo uses two different ways of generating Markdown..

#### View 1

Uses
[React-Markdown](https://github.com/rexxars/react-markdown)

#### View 2 and View 3

Use
[MarkdownElement](https://github.com/mui-org/material-ui/tree/master/packages/material-ui-docs/src/MarkdownElement)
which
[MarkdownDocs](https://github.com/mui-org/material-ui/blob/master/docs/src/modules/components/MarkdownDocs.js)
calls into.

**MarkdownElement** is located inside the
[docs](https://github.com/mui-org/material-ui/tree/master/packages/material-ui-docs#material-uidocs) package
which is what the core Material-UI docs are based on.
