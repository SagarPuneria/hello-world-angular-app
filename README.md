# HelloWorldAngularApp

This is an Angular learning project that demonstrates HTTP services consumption, error handling, and component communication. The project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.1.0 and includes examples of working with REST APIs, custom error handling, and Bootstrap integration.

## Technology Stack

- **Angular**: 8.1.0
- **TypeScript**: ~3.4.3
- **Bootstrap**: ^5.3.8 (for styling)
- **RxJS**: ~6.4.0 (for reactive programming)
- **Testing**: Karma + Jasmine for unit tests, Protractor for e2e tests

## Project Structure

```
hello-world-angular-app/
├── README.md
├── angular.json                 # Angular CLI configuration
├── package.json                 # Dependencies and scripts
├── tsconfig.json               # TypeScript configuration
├── karma.conf.js               # Karma test runner configuration
├── tslint.json                 # TSLint configuration
├── browserslist               # Browser compatibility configuration
├── src/
│   ├── index.html             # Main HTML file
│   ├── main.ts                # Application entry point
│   ├── polyfills.ts           # Browser compatibility polyfills
│   ├── styles.css             # Global styles (includes Bootstrap)
│   ├── test.ts                # Test configuration
│   ├── favicon.ico            # Application favicon
│   ├── app/
│   │   ├── app.component.*     # Root application component
│   │   ├── app.module.ts       # Root application module
│   │   ├── app-routing.module.ts # Application routing configuration
│   │   ├── posts/              # Posts component (CRUD operations demo)
│   │   │   ├── posts.component.ts
│   │   │   ├── posts.component.html
│   │   │   ├── posts.component.css
│   │   │   └── posts.component.spec.ts
│   │   ├── github-followers/   # GitHub followers component (API consumption demo)
│   │   │   ├── github-followers.component.ts
│   │   │   ├── github-followers.component.html
│   │   │   ├── github-followers.component.css
│   │   │   └── github-followers.component.spec.ts
│   │   ├── services/          # HTTP services
│   │   │   ├── data.service.ts          # Base data service
│   │   │   ├── post.service.ts          # Posts HTTP service
│   │   │   └── post.service.spec.ts
│   │   ├── common/            # Error handling classes
│   │   │   ├── app-error.ts             # Base error class
│   │   │   ├── app-error-handler.ts     # Global error handler
│   │   │   ├── bad-input.ts             # Bad input error class
│   │   │   └── not-found-error.ts       # Not found error class
│   │   ├── github-followers.service.ts  # GitHub API service
│   │   └── github-followers.service.spec.ts
│   ├── assets/                # Static assets
│   └── environments/          # Environment configurations
│       ├── environment.ts     # Development environment
│       └── environment.prod.ts # Production environment
├── e2e/                       # End-to-end tests
│   ├── protractor.conf.js
│   ├── tsconfig.json
│   └── src/
│       ├── app.e2e-spec.ts
│       └── app.po.ts
└── dist/                      # Build output directory
```

## Key Features

### 1. HTTP Services Integration
- **Posts Component**: Demonstrates full CRUD operations with a REST API
- **GitHub Followers Component**: Shows how to consume external APIs (GitHub API)
- **Service Architecture**: Implements proper separation of concerns with dedicated services

### 2. Error Handling
- **Global Error Handler**: Centralized error handling using Angular's ErrorHandler
- **Custom Error Classes**: Specific error types (BadInput, NotFoundError)
- **User-Friendly Error Messages**: Graceful error handling in components

### 3. Reactive Programming
- **RxJS Observables**: Used throughout for HTTP operations
- **Error Recovery**: Implements optimistic updates with rollback on errors

### 4. UI/UX
- **Bootstrap Integration**: Responsive design with Bootstrap 5
- **Form Validation**: Client-side validation with visual feedback
- **Dynamic Content**: Real-time updates based on user interactions

## Installation

To set up the project dependencies:

```bash
npm install
npm install bootstrap --save --legacy-peer-deps
```

Note: The `--legacy-peer-deps` flag is required to resolve dependency conflicts with the Angular 8.1.0 version and newer Bootstrap versions.

## Development Scripts

All scripts include `NODE_OPTIONS='--openssl-legacy-provider'` for compatibility with Node.js newer versions:

- `npm start` - Start development server with source maps
- `npm run build` - Build the project for production
- `npm test` - Run unit tests via Karma
- `npm run lint` - Run TSLint for code quality
- `npm run e2e` - Run end-to-end tests via Protractor

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `npm test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `npm run e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Learning Objectives

This project demonstrates:
- HTTP client usage in Angular
- Service-based architecture
- Error handling strategies
- Reactive programming with RxJS
- Component communication
- Form handling and validation
- Bootstrap integration
- Testing strategies (unit and e2e)

## API Endpoints Used

- **JSONPlaceholder**: `https://jsonplaceholder.typicode.com/posts` (for posts CRUD operations)
- **GitHub API**: For fetching followers data (demonstration purposes)

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
