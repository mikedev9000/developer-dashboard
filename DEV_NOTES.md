
# Adding new top-level state
For example, suppose you want a new `employees` top-level state, a simple list of employee objects that you can add to and remove from:
  - edit `initialState.js`, add `employees` entry to top-level of object
  - edit `constant/actionTypes`, define your first action type constants, like `EMPLOYEE_ADD` and `EMPLOYEE_REMOVE`
  - create `reducer/employees.js`, copying from another existing non-index reducer file
    - have the default state value point to `initialState.employees`
    - clear out all case statements except the default, which returns the incoming state
    - add case statements for each of the actionTypes you wish to respond to, making sure each returns the correct new state of `employees`
  - edit `reducer/index.js`
    - import employees from `./employees`
    - add `employees` to object passed into `combineReducers`
  - create `actions/employees.js`, copying from another existing actions file
    - create a function for each of your action types, each one should be named similarly to the action type, but lowerCamelCased, like so:
      ```
      export employeeAdd = (employee) => ({ type: types.EMPLOYEE_ADD, employee });
      ```

# Populating state from an API call
Continuing with our `employees` example... suppose you have an API endpoint at `GET /api/employees`, which can be used to retrieve all employees. Neither react nor redux has an opinion on how to get data from an API. It looks like a common pattern with redux is to hook into the redux "middleware" pattern. Let's base our steps for loading `employees` state on this example: http://www.sohamkamani.com/blog/2016/06/05/redux-apis/. Note that middleware "reacts" to actions, much like reducers, and they also can emit new actions (maybe reducers can emit actions as well?).

So, we wil create a `service/employeeDataService.js`, based on the example in the link above. In this project, I've chosen to prefix service-related action types with an underscore and I've chosen not to maintain constants for them. Time will tell me whether keeping constants for all action types is beneficial or not, since I've mixed the appraches here.