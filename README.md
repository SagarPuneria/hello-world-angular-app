# HelloWorldAngularApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.1.0.

## Project Overview

This is an Angular learning project that demonstrates fundamental Angular concepts including:
- Component creation and management
- Data binding (string interpolation, property binding, event binding)
- Custom pipes for data transformation
- Component interaction and state management
- Bootstrap and Font Awesome integration

## Project Structure & Angular CLI Commands

### Initial Project Setup
```bash
# Create the initial Angular application
ng new hello-world-angular-app

# Navigate to project directory
cd hello-world-angular-app

# Add Bootstrap and Font Awesome dependencies
npm install bootstrap@^5.0.1 font-awesome@^4.7.0
```

### Generated Components
The following components were created using Angular CLI:

```bash
# Generate the favorite component with its own folder
ng generate component favorite
```

### Generated Pipes
Custom pipes were created for data transformation:

```bash
# Generate custom pipes
ng generate pipe title-case
ng generate pipe summary
```

### Manual Components
Several components were created manually for learning purposes:
- `courses.component.ts` - Demonstrates basic property binding and string interpolation
- `courses2.component.ts` through `courses10.component.ts` - Progressive learning examples

## Project File Structure

```
hello-world-angular-app/
├── src/
│   ├── app/
│   │   ├── app.component.* (root component)
│   │   ├── app.module.ts (main module configuration)
│   │   ├── courses.component.ts (manual component - property binding demo)
│   │   ├── courses2-10.component.ts (learning progression components)
│   │   ├── summary.pipe.ts (custom pipe for text summarization)
│   │   ├── title-case.pipe.ts (custom pipe for title case conversion)
│   │   └── favorite/
│   │       ├── favorite.component.ts
│   │       ├── favorite.component.html
│   │       ├── favorite.component.css
│   │       └── favorite.component.spec.ts
│   ├── assets/ (static assets)
│   ├── environments/ (environment configurations)
│   ├── index.html (main HTML file)
│   ├── main.ts (bootstrap file)
│   ├── polyfills.ts (browser compatibility)
│   ├── styles.css (global styles)
│   └── test.ts (test configuration)
├── e2e/ (end-to-end test configuration)
├── angular.json (Angular workspace configuration)
├── package.json (dependencies and scripts)
├── tsconfig.json (TypeScript configuration)
├── tslint.json (TSLint configuration)
└── karma.conf.js (Karma test runner configuration)
```

## Development Commands

### Development server
```bash
ng serve
# Navigate to http://localhost:4200/
# The app will automatically reload if you change any source files
```

### Code scaffolding
```bash
# Generate a new component
ng generate component component-name

# Generate other Angular artifacts
ng generate directive|pipe|service|class|guard|interface|enum|module
```

### Build
```bash
# Development build
ng build

# Production build
ng build --prod
```

### Testing
```bash
# Run unit tests via Karma
ng test

# Run end-to-end tests via Protractor
ng e2e

# Run linting
ng lint
```

## Dependencies

### Main Dependencies
- **Angular 8.1.0** - Core framework
- **Bootstrap 5.0.1** - CSS framework for styling
- **Font Awesome 4.7.0** - Icon library
- **RxJS 6.4.0** - Reactive Extensions for JavaScript

### Development Dependencies
- **Angular CLI 8.1.0** - Command line interface
- **TypeScript 3.4.3** - Programming language
- **Karma & Jasmine** - Testing framework
- **Protractor** - End-to-end testing framework
- **TSLint** - TypeScript linter

## Learning Concepts Demonstrated

1. **String Interpolation** - `{{ title }}` syntax for displaying component properties
2. **Property Binding** - `[src]="imageUrl"` syntax for binding to element properties
3. **Event Binding** - Handling user interactions
4. **Custom Pipes** - Data transformation with `TitleCasePipe` and `SummaryPipe`
5. **Component Communication** - State management in `FavoriteComponent`
6. **Forms Module** - Two-way data binding with `ngModel`

## Branch Information

Current branch: `2_DisplayingData_And_HandlingEvents`
This branch focuses on data binding and event handling concepts in Angular.

## Further Help

To get more help on the Angular CLI use `ng help` or check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
