
## mui-menu

This demo displays a simple example of how to use Material-UI
[menus](https://material-ui.com/demos/menus/) in concert with
[react-router](https://github.com/ReactTraining/react-router)
and
[react-redux](https://github.com/reduxjs/react-redux).

This demo displays the same concept as
[mui-drawer](https://github.com/stormasm/mui-tutorial-demo/tree/master/mui-drawer) except the navigation is a function of **menus** instead of
[drawers](https://material-ui.com/demos/drawers/).

### The concept

When you read a text book in school the author breaks all of the information into higher levels called chapters and then within those chapters are more fine grained knowledge called sections.  This demo simulates that concept by building a framework to enable electronic navigation of information broken down into chapters and sections.  You can navigate around using the chapter menu drop down in the upper left hand corner of the screen and then within those chapters individual sections which are the menu items.  Play around with the demo to see how it works.

The only thing that is displayed on the screen is your location.  But that is enough to show that the navigation is working.  It is up to the developer to expand this concept if they so choose by adding in more information to your E-book.

#### Precursor to Github Worlds

You will see when you get into **Github Worlds** that the menu items are the views instead of the sections and the chapters are actually the Github
repository you wish to view.

### Adding Dynamic Routes

Inside this demo is a proof of concept for how to add dynamic routes
to your application.  In this demo, the core route which is a **chapter**
is the first part of the URL and the **section** is the second part of the URL.  The combination of these two items is what drives the react router to its final destination.  Having the ability to dynamically modify the routes by adding in chapters is accomplished via the **Admin** icon which is between the Section menu and the Github Icon.

#### Keeping things in Sync

The
[KeyContainer](https://github.com/stormasm/mui-tutorial-demo/blob/master/mui-menu/v1/src/containers/KeyContainer.js) is responsible for handling
route changes by

* changing the redux state via the Picker
* and pushing the new route onto the [History API](https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/api/history.md)

### React Router Redux

* [react-router-redux](https://github.com/ReactTraining/react-router/blob/master/packages/react-router-redux/README.md)
* [legacy react-router-redux](https://github.com/reactjs/react-router-redux)

This project has been deprecated and currently there is not a good well
known solution to keep the History API and the Redux state in sync so
I have forked the above repo and placed it inside this demo
and
[ghw-menu](https://github.com/stormasm/mui-tutorial-demo/tree/master/ghw-menu).

### Future work

Eventually we will persist the new routes or chapters to
[localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) 
and add in another button to clear out the localStorage and reset the redux state machine.

But for now each application refresh in the browser resets the redux state machine.
