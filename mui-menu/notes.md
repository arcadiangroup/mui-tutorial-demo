
[norr](https://github.com/stormasm/florida-mui-menu-react-router-redux/tree/master/norr) means or stands for menu code with **no** react-router.

[connectd-react-router](https://github.com/supasate/connected-react-router)
does not work but my attempt is
[located here](https://github.com/stormtracks/florida-mui-menu-connected)

So I am switching to using the deprecated version of
[react-router-redux](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-redux)

Which is explained [in this link](https://github.com/ReactTraining/react-router/releases/tag/v4.3.0) for version 4.3.0.

So I broke out the react-router-redux code into my own
[directory](https://github.com/stormasm/florida-mui-menu-react-router-redux/tree/master/fl15/src/rrr).

The [released version](https://www.npmjs.com/package/react-router-redux/v/5.0.0-alpha.9) does not contain the latest code in the repo. So you have two solutions

* (1) Carry along the code with you in any repo that uses it.
* (2) Publish out your own version to NPM and then start using it.

To compare this code to the latest version of the react-router-redux
[run this script](https://github.com/stormasm/florida-mui-menu-react-router-redux/blob/master/fl15/compare)

by swapping out **tmp12** with the location of the react-router repo.

react-router-redux [npm version](https://www.npmjs.com/package/react-router-redux/v/5.0.0-alpha.9)

[react-router](https://github.com/stormdock/react-router) fork is located
here for archival reasons when react-router-redux goes away.
