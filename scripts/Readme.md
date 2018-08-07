
These scripts are not needed to build and run the demos
in this repository.  They are simply here in case you would
like to automate some of your tasks.

The scripts in this directory must be run in this order

```
bash yarnrc
bash buildme
```

### Step 1

You must modify the **.yarnrc** file found in this directory first
before modifying the **yarnrc** script ROOT variable.

So in the example inside this directory the node_modules
directory will end up in the /tmpXX directory and so
therefore the ROOT script variable is set to /tmpXX
which is where the **.yarnrc** files will be copied.

### Step 2

Same will be held true for the ROOT variable found in the
**buildme** script.
