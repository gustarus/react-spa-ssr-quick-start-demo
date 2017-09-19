React single page application with server side rendering step-by-step quick start demo.

## What is it?
This is a simple isomorphic app for list of cars.
There are four pages:
* [home page](/images/home.png);
* [cars list page](/images/cars.png);
* [car form page](/images/car.png) (the page is used for create and update actions);
* [not found page](/images/error.png).

## How to launch it?
1. Clone and install the project:
```bash
git clone https://github.com/gustarus/react-spa-ssr-quick-start-demo.git
cd react-spa-ssr-quick-start-demo
nvm use && yarn install
```

2. Launch the json server for the api:
```bash
nvm use && yarn run api
```

3. Launch the app:
```bash
nvm use && yarn run start
```

## How to use it?
You can checkout to steps via `git checkout`.
Please, run `git log` to see which steps this demo have.
You'll see something like that:

```bash
commit 5242e49fb9ff5787481d327954a2cf832644f6e4
Author: Pavel Kondratenko <iam@kondratenko.me>
Date:   Tue Sep 19 23:43:47 2017 +0300
    12. Add snapshot tests via jest.
  
commit e3cf40bb5815f2f3ad38414ec6acbfb5ebf77706
Author: Pavel Kondratenko <iam@kondratenko.me>
Date:   Tue Sep 19 23:40:55 2017 +0300
    11. Add page hoc for loading indicator.
  
commit 74ed8dc88932e7067cb23fe2c2344a72c2902567
Author: Pavel Kondratenko <iam@kondratenko.me>
Date:   Tue Sep 19 23:36:38 2017 +0300
    10. Add form, create action, update and delete actions for cars in the table.
    
...
```

This is the steps which I did to create this react js spa with ssr demo.
Then, checkout to the needed step via `git checkout`.
For example, with this command you'll see code for step number 11:

```bash
git checkout e3cf40bb5815f2f3ad38414ec6acbfb5ebf77706
```

Then you can see changes for every step via `git diff` command:
```bash
git diff 74ed8dc88932e7067cb23fe2c2344a72c2902567 
```

Or just see changes in the [commits tab](https://github.com/gustarus/react-spa-ssr-quick-start-demo/commits/master).

## Which steps this demo have?
0. [Init the repo and empty readme file.](https://github.com/gustarus/react-spa-ssr-quick-start-demo/commit/84849789418cccabab367d2dc99ad6efb00b84a4)  
1. [Init the project: package.json, editorconfig, nvmrc, .gitignore.](https://github.com/gustarus/react-spa-ssr-quick-start-demo/commit/7b4c813a72b86664c1ce303bbe88fea42b91f0e5)
2. [Add rship to the project, implement an example of server side rendering.](https://github.com/gustarus/react-spa-ssr-quick-start-demo/commit/2171cf1e930eab144da313073eff367db386e462)
3. [Add react js, implement an example for react and server side rendering.](https://github.com/gustarus/react-spa-ssr-quick-start-demo/commit/885ec749e716a905839955239bbeca007092fc62)
4. [Add styles support, enable css modules, customize the page.](https://github.com/gustarus/react-spa-ssr-quick-start-demo/commit/c8461c2f454659af185d37ae60065777d3104ca9)
5. [Add code style validation tool (eslint).](https://github.com/gustarus/react-spa-ssr-quick-start-demo/commit/2a033a024624c1592894f0489ba6bb392cb8c3ee)
6. [Add router, create mocks for pages and connect them to the router.](https://github.com/gustarus/react-spa-ssr-quick-start-demo/commit/5573778fbfdea98830980c8841754b9bac296b62)
7. [Add redux, implement table view, add table mode switcher (via redux store).](https://github.com/gustarus/react-spa-ssr-quick-start-demo/commit/695b0ba196126c1c233650d71eb248ef6898222b)
8. [Add json server for the local demo api.](https://github.com/gustarus/react-spa-ssr-quick-start-demo/commit/3c3519ce49652f7485451bca65fbe71b1a4a5e3c)
9. [Add api support for cars list via redux actions.](https://github.com/gustarus/react-spa-ssr-quick-start-demo/commit/43d018c92769cabbdbc6d7905e40dc20b11be81e)
10. [Add form, implement create, update and delete actions for cars.](https://github.com/gustarus/react-spa-ssr-quick-start-demo/commit/74ed8dc88932e7067cb23fe2c2344a72c2902567)
11. [Add page hoc for loading indicator.](https://github.com/gustarus/react-spa-ssr-quick-start-demo/commit/e3cf40bb5815f2f3ad38414ec6acbfb5ebf77706)
12. [Add snapshot tests via jest.](https://github.com/gustarus/react-spa-ssr-quick-start-demo/commit/5242e49fb9ff5787481d327954a2cf832644f6e4)
