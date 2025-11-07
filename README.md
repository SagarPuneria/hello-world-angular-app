# Hello World Angular App - Project Structure Documentation

## Overview
This is an Angular 8.1.0 learning project focused on demonstrating HTTP services consumption, routing, and component architecture. The project is currently on the `8_Routing_and_Navigation` branch and showcases best practices for Angular development including error handling, service architecture, and routing.

## Project Metadata
- **Project Name**: hello-world-angular-app
- **Angular Version**: 8.1.0
- **Angular CLI Version**: 8.1.0
- **TypeScript Version**: 3.4.3
- **Current Branch**: 8_Routing_and_Navigation
- **Repository Owner**: SagarPuneria

## Technology Stack

### Core Dependencies
- **Angular Framework**: ~8.1.0 (animations, common, compiler, core, forms, platform-browser, router)
- **Bootstrap**: ^5.1.1 (UI framework)
- **RxJS**: ~6.4.0 (reactive programming)
- **Zone.js**: ~0.9.1 (change detection)
- **TypeScript**: ~3.4.3

### Development Dependencies
- **Testing**: Jasmine, Karma, Protractor
- **Linting**: TSLint with Codelyzer
- **Build Tools**: Angular DevKit Build Angular

## Project Structure

### Root Configuration Files
```
├── angular.json              # Angular CLI workspace configuration
├── package.json             # NPM package configuration with NODE_OPTIONS for legacy OpenSSL
├── tsconfig.json            # TypeScript root configuration
├── tsconfig.app.json        # App-specific TypeScript configuration
├── tsconfig.spec.json       # Testing TypeScript configuration
├── tslint.json              # TSLint configuration with Angular rules
├── karma.conf.js            # Karma test runner configuration
├── browserslist             # Supported browser targets
├── .editorconfig            # Editor configuration
├── .gitignore               # Git ignore patterns
└── README.md                # Project documentation
```

### Source Code Structure (`src/`)
```
src/
├── index.html               # Main HTML entry point
├── main.ts                  # Angular application bootstrap
├── polyfills.ts             # Browser polyfills
├── styles.css               # Global styles with Bootstrap import
├── test.ts                  # Test configuration
├── environments/            # Environment configurations
│   ├── environment.ts       # Development environment
│   └── environment.prod.ts  # Production environment
└── assets/                  # Static assets directory
```

### Application Architecture (`src/app/`)

#### Core Application Files
```
src/app/
├── app.component.ts         # Root component
├── app.component.html       # Root template with navbar and router-outlet
├── app.component.css        # Root component styles
├── app.component.spec.ts    # Root component tests
├── app.module.ts            # Main application module with routing and services
└── app-routing.module.ts    # Dedicated routing module (currently empty)
```

#### Component Architecture

##### Navigation Components
```
navbar/
├── navbar.component.ts      # Navigation bar component
├── navbar.component.html    # Bootstrap navbar with routing links
├── navbar.component.css     # Navbar styles
└── navbar.component.spec.ts # Navbar tests
```

##### Page Components
```
home/
├── home.component.ts        # Home page component
├── home.component.html      # Simple home page template
├── home.component.css       # Home page styles
└── home.component.spec.ts   # Home page tests

github-followers/
├── github-followers.component.ts    # GitHub followers list component
├── github-followers.component.html  # Followers display template with media objects
├── github-followers.component.css   # Avatar styling (80x80px rounded)
└── github-followers.component.spec.ts # Component tests

github-profile/
├── github-profile.component.ts      # Individual GitHub profile component
├── github-profile.component.html    # Profile template with navigation
├── github-profile.component.css     # Profile styles
└── github-profile.component.spec.ts # Profile tests

posts/
├── posts.component.ts       # Posts management component with CRUD operations
├── posts.component.html     # Posts interface with form inputs and list
├── posts.component.css      # Posts styling
└── posts.component.spec.ts  # Posts tests

not-found/
├── not-found.component.ts   # 404 error page component
├── not-found.component.html # Simple not found template
├── not-found.component.css  # Error page styles
└── not-found.component.spec.ts # Error page tests
```

#### Service Layer Architecture
```
services/
├── data.service.ts                    # Generic data service base class
├── post.service.ts                    # Posts service extending DataService
├── post.service.spec.ts               # Posts service tests
├── github-followers.service.ts       # GitHub followers service
└── github-followers.service.spec.ts  # GitHub followers service tests
```

#### Error Handling System
```
common/
├── app-error.ts             # Base error class
├── app-error-handler.ts     # Global error handler service
├── bad-input.ts             # Bad input error class
└── not-found-error.ts       # Not found error class
```

### Testing Structure (`e2e/`)
```
e2e/
├── protractor.conf.js       # Protractor configuration
├── tsconfig.json           # E2E TypeScript configuration
└── src/
    ├── app.e2e-spec.ts     # End-to-end test specifications
    └── app.po.ts           # Page object model
```

## Key Features and Architecture Patterns

### 1. HTTP Services Implementation
- **Generic Data Service**: Base `DataService` class providing CRUD operations
- **Service Inheritance**: Specific services (`PostService`, `GithubFollowersService`) extend `DataService`
- **HTTP Client Integration**: Uses Angular's `HttpClientModule` for API calls
- **Error Handling**: Comprehensive error handling with custom error types

### 2. Routing Configuration
The application uses Angular Router with the following route structure:
```typescript
Routes:
├── '' (root)                    → HomeComponent
├── 'followers/:id/:username'    → GithubProfileComponent
├── 'followers/:id'              → GithubFollowersComponent
├── 'posts'                      → PostsComponent
└── '**' (wildcard)              → NotFoundComponent
```

### 3. Error Handling Architecture
- **Global Error Handler**: `AppErrorHandler` implements Angular's `ErrorHandler`
- **Custom Error Classes**: Hierarchical error system with specific error types
- **HTTP Error Processing**: Specialized handling for 400, 404, and other HTTP errors
- **Optimistic vs Pessimistic Updates**: Demonstrated in CRUD operations

### 4. Component Communication
- **Route Parameters**: Dynamic routing with parameters and query parameters
- **Service Injection**: Dependency injection for data services
- **Observable Patterns**: RxJS observables for asynchronous data handling

### 5. API Integration
- **JSONPlaceholder**: Used for posts data (`http://jsonplaceholder.typicode.com/posts`)
- **GitHub API**: Integrated for followers data (`https://api.github.com/users/SagarPuneria/following`)
- **Combined Observables**: Using `combineLatest` for multiple data streams

## Development Features

### 1. Build Configuration
- **Legacy OpenSSL Support**: All npm scripts include `NODE_OPTIONS='--openssl-legacy-provider'`
- **Source Maps**: Enabled for development builds
- **Bootstrap Integration**: Global CSS import in `styles.css`

### 2. Form Handling
- **Template-driven Forms**: Using `FormsModule`
- **Reactive Forms**: Using `ReactiveFormsModule`
- **Validation Styling**: CSS classes for form validation states

### 3. Styling and UI
- **Bootstrap 5.1.1**: Modern responsive framework
- **Custom CSS**: Component-specific styling
- **Media Objects**: Used for follower listings
- **Avatar Styling**: Circular avatars (80x80px)

## API Endpoints Used

### External APIs
1. **JSONPlaceholder API**
   - Base URL: `http://jsonplaceholder.typicode.com/posts`
   - Purpose: CRUD operations demonstration
   - Methods: GET, POST, PATCH, DELETE

2. **GitHub API**
   - URL: `https://api.github.com/users/SagarPuneria/following`
   - Purpose: Real user data demonstration
   - Method: GET (read-only)

## Development Workflow

### Available Commands
```bash
npm install --legacy-peer-deps
npm start    # Development server with source maps
npm build    # Production build
npm test     # Unit tests via Karma
npm run lint # Code linting
npm run e2e  # End-to-end tests via Protractor
```

### Component Generation History
Based on comments in `app.module.ts`, the following CLI commands were used:
```bash
ng g c github-followers  # Generate GitHub followers component
ng g c navbar           # Generate navigation component
ng g c home            # Generate home component
ng g c github-profile  # Generate GitHub profile component
ng g c posts           # Generate posts component
ng g c not-found       # Generate 404 component
ng g s post            # Generate post service
ng g s github-followers # Generate GitHub followers service
```

## Learning Objectives Demonstrated

1. **HTTP Client Usage**: Consuming REST APIs with error handling
2. **Service Architecture**: Reusable service patterns and inheritance
3. **Routing**: Dynamic routes with parameters and navigation
4. **Error Handling**: Global and component-level error management
5. **Component Communication**: Service-to-component data flow
6. **Form Handling**: Both template-driven and reactive approaches
7. **Bootstrap Integration**: Modern responsive UI development
8. **Testing Setup**: Unit and E2E testing configuration

## Current Development Status

The project is actively focused on routing and navigation (branch: `8_Routing_and_Navigation`) and demonstrates:
- Complete CRUD operations with optimistic/pessimistic updates
- Real-world API integration with GitHub
- Comprehensive error handling strategies
- Modern Angular routing patterns
- Responsive UI with Bootstrap integration

This project serves as a comprehensive learning resource for Angular HTTP services, routing, and component architecture patterns.

## Development Server

Run `ng serve` or `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` or `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running Tests

- **Unit tests**: Run `ng test` or `npm test` to execute the unit tests via [Karma](https://karma-runner.github.io)
- **End-to-end tests**: Run `ng e2e` or `npm run e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/)

## Further Help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
