## Task: Clever to-do list
https://docs.google.com/document/d/1heFuihWrsw14bCpUdr6fla9ysqE6IrsobSMKAOpBiKA/edit#heading=h.5dt3hghpa22f

## How to run the app:

To get started, just clone the repository, install packages and run dev server:

    git clone https://github.com/Ischerba32/Innowise-Lab-Internship-Level-1-Clever-to-do-list.git
    npm install
    npm start

## How to build:

If you wanted to build this app, you should run next one script:

    npm run build
Complete bundle will store in "dist" folder

### Database snapshot:
    User id: {
        tasks: {
          {
            task id: {
              task id: string;
              title: string;
              description: string;
              date: string (format: YYYY-MM-DD);
              status: 'incomplete' | 'complete';
            }
          }
        }
    }
### Directory structure:
    Root folder:
        .husky -- implemented git lifecycle hooks
        public -- application build
        src -- source code directory
          components - components directory
                      (every component directory include
                      .tsx - component,
                      .ts - props interface,
                      .scss - styles)
            AuthForm -- login / signUp form component
            AuthRoute -- auth protected component
            Calendar -- calendar with tasks component
            CreateTask -- creation task component
            Day -- one day from calendar componnt
            Header -- header component
            Home -- main page
            Login -- login page
            SignUp -- signUp page
            TaskForm -- create / update task form component
            ToDo -- ToDo components
              ToDoItem -- toDo item component
              ToDoList -- toDo list component
            UI -- UI stateless components
          config - firebase config
          context - auth context
          helpers - date handlers
          interfaces - application interfaces
          styles - global application styles

### Application stack:
    React
    Typescript
    Firebase (auth, Realtime Database)
    Sass
    Moment - library for handling dates
    uuid - library for generating unique string id
    React Router DOM - application routing
    React hook form - library for forms handling
    React Toastify - library providing toast component
    Husky - git lifecycle hooks handling
    Classnames - library for classnames handling