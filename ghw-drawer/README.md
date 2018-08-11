
### ghw-drawer

Github Worlds drawer is a visualization toolkit that provides
**Views** into JSON data that comes from the
[Github GraphQL API](https://developer.github.com/v4/).
It is called Github Worlds **drawer** because there is also a
Github Worlds **menu** which displays the same data and views
but with the
**[Menu](https://material-ui.com/demos/menus/)**
being the primary navigation element instead of the
**[Drawer](https://material-ui.com/demos/drawers/)**

This demo is an extension of
[mui-drawer](https://github.com/stormasm/mui-tutorial-demo/tree/master/mui-drawer) and it is assumed that you have already reviewed the concepts and
documentation associated with that repo.

### The Details

For simplicity it might be easier to first review the code in
[mui-drawer](https://github.com/stormasm/mui-drawer) as this
is a much simpler example of how the AppDrawer works.

withRoot.js should be an exact copy of
[withRoot.js](https://github.com/mui-org/material-ui/blob/master/examples/create-react-app/src/withRoot.js)

helpers.js should be an exact copy of
[helpers.js](https://github.com/mui-org/material-ui/blob/master/docs/src/modules/utils/helpers.js)

When ever changes happen to these (2) files you need to update this code...

[AppDrawer.js](https://github.com/mui-org/material-ui/commits/master/docs/src/modules/components/AppDrawer.js)

[AppDrawerNavItem.js](https://github.com/mui-org/material-ui/commits/master/docs/src/modules/components/AppDrawerNavItem.js)

#### AppDrawer Changes to file from original

Remove
```
import Link from 'docs/src/modules/components/Link';
import Typography from '@material-ui/core/Typography';
```

From this
```
import AppDrawerNavItem from 'docs/src/modules/components/AppDrawerNavItem';
```
to this
```
import AppDrawerNavItem from './AppDrawerNavItem';
```

From this
```
import { pageToTitle } from 'docs/src/modules/utils/helpers';
```
to this
```
import { pageToTitle } from './../utils/helpers';
```

Remove this code completely from the AppDrawer

```
<div className={classes.toolbarIe11}>
  <div className={classes.toolbar}>
    <Link className={classes.title} href="/" onClick={onClose}>
      <Typography variant="title" color="inherit">
        Material-UI
      </Typography>
    </Link>
    {process.env.LIB_VERSION ? (
      <Link className={classes.anchor} href="/versions">
        <Typography variant="caption">{`v${process.env.LIB_VERSION}`}</Typography>
      </Link>
    ) : null}
  </div>
</div>
```

#### AppDrawerNavItem Changes to file from original

From this
```
import Link from 'docs/src/modules/components/Link';
```
to this
```
import { Link } from 'react-router-dom';
```

Add in the **to** property to this line of code
```
<Link variant="button" activeClassName={classes.active} to={href} href={href} {...props} />
```
