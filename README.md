# HelloWorldAngularApp

This is an Angular learning project that demonstrates HTTP services consumption, error handling, and component communication. The project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.1.0 and includes examples of working with REST APIs, custom error handling, and Bootstrap integration.

## Technology Stack

- **Angular**: 8.1.0
- **Angular CLI**: 8.1.0
- **TypeScript**: ~3.4.3
- **Bootstrap**: ^5.3.8 (for styling and responsive design)
- **RxJS**: ~6.4.0 (for reactive programming and observables)
- **Zone.js**: ~0.9.1 (for change detection)
- **Testing Frameworks**: 
  - Karma ~4.1.0 (test runner)
  - Jasmine ~3.4.0 (unit testing framework)
  - Protractor ~5.4.0 (end-to-end testing)
- **Code Quality**: 
  - TSLint ~5.15.0 (TypeScript linting)
  - Codelyzer ^5.0.0 (Angular-specific linting rules)

## Project Structure

```
hello-world-angular-app/
├── .editorconfig               # Editor configuration
├── .gitignore                  # Git ignore patterns
├── README.md                   # Project documentation
├── angular.json                # Angular CLI configuration
├── browserslist                # Browser compatibility configuration
├── karma.conf.js               # Karma test runner configuration
├── package.json                # Dependencies and scripts
├── package-lock.json           # Locked dependency versions
├── tsconfig.json               # Base TypeScript configuration
├── tsconfig.app.json           # TypeScript configuration for application
├── tsconfig.spec.json          # TypeScript configuration for tests
├── tslint.json                 # TSLint configuration
├── .github/                    # GitHub specific files
├── .vscode/                    # VS Code workspace settings
├── node_modules/               # Installed dependencies (not in git)
├── src/                        # Application source code
│   ├── index.html              # Main HTML file
│   ├── main.ts                 # Application entry point
│   ├── polyfills.ts            # Browser compatibility polyfills
│   ├── styles.css              # Global styles (includes Bootstrap import)
│   ├── test.ts                 # Test configuration
│   ├── favicon.ico             # Application favicon
│   ├── app/                    # Application module and components
│   │   ├── app.component.ts    # Root component (TypeScript)
│   │   ├── app.component.html  # Root component template
│   │   ├── app.component.css   # Root component styles
│   │   ├── app.component.spec.ts # Root component tests
│   │   ├── app.module.ts       # Root application module
│   │   ├── app-routing.module.ts # Application routing configuration
│   │   ├── github-followers.service.ts      # GitHub API service
│   │   ├── github-followers.service.spec.ts # GitHub service tests
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
│   │   ├── services/           # HTTP services layer
│   │   │   ├── data.service.ts          # Generic base data service
│   │   │   ├── post.service.ts          # Posts HTTP service
│   │   │   └── post.service.spec.ts     # Post service tests
│   │   └── common/             # Error handling classes
│   │       ├── app-error.ts             # Base error class
│   │       ├── app-error-handler.ts     # Global error handler
│   │       ├── bad-input.ts             # Bad input (400) error class
│   │       └── not-found-error.ts       # Not found (404) error class
│   ├── assets/                 # Static assets (images, etc.)
│   └── environments/           # Environment-specific configurations
│       ├── environment.ts      # Development environment
│       └── environment.prod.ts # Production environment
├── e2e/                        # End-to-end tests
│   ├── protractor.conf.js      # Protractor configuration
│   ├── tsconfig.json           # TypeScript config for e2e tests
│   └── src/
│       ├── app.e2e-spec.ts     # E2E test specs
│       └── app.po.ts           # Page object models
└── dist/                       # Build output directory (generated, not in git)
```

## Key Features

### 1. HTTP Services Integration
- **Posts Component**: Demonstrates full CRUD (Create, Read, Update, Delete) operations with a REST API
  - Create new posts
  - Retrieve and display posts
  - Update existing posts
  - Delete posts with optimistic updates
- **GitHub Followers Component**: Shows how to consume external APIs (GitHub API)
  - Fetches and displays follower data
  - Implements search/filter functionality
- **Service Architecture**: Implements proper separation of concerns with dedicated services
  - `DataService`: Generic base service with reusable HTTP methods
  - `PostService`: Extends DataService for posts-specific operations
  - `GithubFollowersService`: Handles GitHub API interactions

### 2. Error Handling
- **Global Error Handler**: Centralized error handling using Angular's `ErrorHandler` interface
  - Implemented in `AppErrorHandler` class
  - Registered as a provider in the application module
  - Logs unexpected errors for debugging
- **Custom Error Classes**: Specific error types for different HTTP status codes
  - `AppError`: Base error class for application-specific errors
  - `BadInput`: Handles 400 Bad Request errors (client-side validation failures)
  - `NotFoundError`: Handles 404 Not Found errors (resource doesn't exist)
- **User-Friendly Error Messages**: Graceful error handling in components
  - Components catch and handle errors appropriately
  - Display meaningful feedback to users
  - Prevent application crashes from HTTP errors

### 3. Reactive Programming
- **RxJS Observables**: Used throughout for asynchronous HTTP operations
  - HTTP calls return Observables for better control flow
  - Subscribe to data streams in components
  - Proper subscription management to prevent memory leaks
- **Error Recovery**: Implements optimistic updates with rollback on errors
  - Update UI immediately for better user experience
  - Revert changes if server request fails
  - Uses `catchError` operator for error handling in observable chains

### 4. UI/UX
- **Bootstrap Integration**: Responsive design with Bootstrap 5
  - Imported globally in `styles.css` via `@import "~bootstrap/dist/css/bootstrap.css"`
  - Responsive grid system for layout
  - Pre-styled components (forms, buttons, cards)
- **Form Validation**: Client-side validation with visual feedback
  - Angular Forms module integration (`FormsModule`)
  - Custom CSS for invalid form fields (`.ng-touched.ng-invalid`)
  - Real-time validation feedback
- **Dynamic Content**: Real-time updates based on user interactions
  - Immediate UI updates for actions
  - Loading states and feedback
  - Interactive components with two-way data binding

**Example: Form Validation CSS (styles.css)**
```css
@import "~bootstrap/dist/css/bootstrap.css";

body { padding: 20px; }

.form-control.ng-touched.ng-invalid {
    border: 2px solid red;
}
```

**Example: Posts Component Template**
```html
<input 
    (keyup.enter)="createPost(title)" #title
    type="text" class="form-control">

<ul class="list-group">
    <li *ngFor="let post of posts" class="list-group-item">
        <button (click)="updatePost(post)" class="btn-default btm-sm">
            Update
        </button>
        <button (click)="deletePost(post)" class="btn-default btm-sm">
            Delete
        </button>
        {{post.title}}
    </li>
</ul>
```

**Example: GitHub Followers Template with Bootstrap**
```html
<div *ngFor="let follower of followers" class="media">
    <div class="media-left">
        <a href="#">
            <img class="avatar media-object" src="{{ follower.avatar_url}}">
        </a>
    </div>
    <div class="media-body">
        <h4 class="media-heading">{{follower.login}}</h4>
        <a href="follower.html_url">{{follower.html_url}}</a>
    </div>
</div>
```

### 5. Angular Architecture Best Practices
- **Module Organization**: Clear separation of concerns with feature modules
- **Component-Based Design**: Reusable, focused components
- **Dependency Injection**: Services injected into components
- **TypeScript**: Strong typing for better code quality and IDE support
- **Routing**: Angular Router for navigation (configured in `app-routing.module.ts`)

**Example: Module Configuration (app.module.ts)**
```typescript
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { AppErrorHandler } from './common/app-error-handler';
import { GithubFollowersComponent } from './github-followers/github-followers.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    GithubFollowersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    { provide: ErrorHandler, useClass: AppErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

**Example: Angular Directives in Use**
```html
<!-- *ngFor: Structural directive for iteration -->
<li *ngFor="let post of posts" class="list-group-item">
    {{post.title}}
</li>

<!-- Event binding with template reference variable -->
<input (keyup.enter)="createPost(title)" #title type="text">

<!-- Property binding -->
<img src="{{ follower.avatar_url}}">

<!-- Two-way data binding (requires FormsModule) -->
<input [(ngModel)]="searchText" type="text">
```

## Installation

### Prerequisites
- Node.js (version 10.x or higher recommended for Angular 8)
- npm (comes with Node.js)
- Angular CLI 8.1.0

### Setup Instructions

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd hello-world-angular-app
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Install Bootstrap** (if not already installed):
   ```bash
   npm install bootstrap --save --legacy-peer-deps
   ```
   
   **Note**: The `--legacy-peer-deps` flag is required to resolve dependency conflicts between Angular 8.1.0 and newer Bootstrap versions. This is due to peer dependency resolution changes in npm 7+.

4. **Verify installation**:
   ```bash
   npm start
   ```
   Navigate to `http://localhost:4200/` to see the app running.

## Development Scripts

All scripts include `NODE_OPTIONS='--openssl-legacy-provider'` for compatibility with newer Node.js versions. This is necessary because Angular 8 uses webpack 4, which relies on older OpenSSL APIs that were deprecated in Node.js 17+.

### Available Commands

- **`npm start`** - Start development server with enhanced source maps
  - Runs on `http://localhost:4200/`
  - Auto-reloads on file changes
  - Includes source maps for debugging (`--source-map --vendor-source-map --eval-source-map`)

- **`npm run build`** - Build the project for production
  - Creates optimized bundle in `dist/` directory
  - Minifies code and removes debug information
  - Use `npm run build -- --prod` for production build with AOT compilation

- **`npm test`** - Run unit tests via Karma
  - Launches Chrome browser for testing
  - Watches files for changes
  - Displays test results in console and browser

- **`npm run lint`** - Run TSLint for code quality checks
  - Checks TypeScript code against linting rules
  - Enforces code style and best practices
  - Configuration in `tslint.json`

- **`npm run e2e`** - Run end-to-end tests via Protractor
  - Tests full application workflows
  - Simulates real user interactions
  - Requires app to be running or will start it automatically

- **`ng generate <schematic>`** - Generate Angular artifacts
  - `ng generate component <name>` - Create a new component
  - `ng generate service <name>` - Create a new service
  - `ng generate module <name>` - Create a new module
  - Plus many more: directive, pipe, class, guard, interface, enum

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

The development server includes:
- **Live Reload**: Automatic browser refresh on file changes
- **Source Maps**: Enhanced debugging with vendor and eval source maps
- **Hot Module Replacement**: Fast incremental rebuilds
- **Error Overlay**: In-browser error display for quick debugging

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use:
- `ng generate directive|pipe|service|class|guard|interface|enum|module`

The CLI will automatically:
- Create component files (`.ts`, `.html`, `.css`, `.spec.ts`)
- Update the module declarations
- Follow Angular style guide conventions
- Set up proper file structure

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/hello-world-angular-app/` directory.

### Build Options
- **Development Build**: `npm run build`
  - Faster compilation
  - Includes source maps for debugging
  - No optimization or minification

- **Production Build**: `npm run build -- --prod`
  - Ahead-of-Time (AOT) compilation for better performance
  - Tree-shaking to remove unused code
  - Minification and uglification
  - Source map generation disabled (for smaller bundle size)
  - Output hashing for cache busting
  - Optimized bundle sizes

### Build Output
The build creates:
- `main.[hash].js` - Application code
- `polyfills.[hash].js` - Browser compatibility polyfills
- `runtime.[hash].js` - Webpack runtime
- `styles.[hash].css` - Global styles
- `vendor.[hash].js` - Third-party dependencies (in dev builds)
- `index.html` - Entry point with script references

## Running unit tests

Run `npm test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Testing Setup
- **Test Framework**: Jasmine 3.4.0
- **Test Runner**: Karma 4.1.0
- **Browser**: Chrome (via karma-chrome-launcher)
- **Coverage**: Istanbul (via karma-coverage-istanbul-reporter)

### Test Configuration
- Tests are located alongside their source files (`.spec.ts`)
- Configuration in `karma.conf.js`
- TypeScript configuration in `tsconfig.spec.json`
- Tests run in watch mode by default for development

### Writing Tests
Example test structure:
```typescript
describe('ComponentName', () => {
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should perform action', () => {
    // Arrange, Act, Assert
  });
});
```

## Running end-to-end tests

Run `npm run e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### E2E Testing Setup
- **Framework**: Protractor 5.4.0 (built on WebDriverJS)
- **Configuration**: `e2e/protractor.conf.js`
- **Test Location**: `e2e/src/`
- **Page Objects**: `e2e/src/app.po.ts` for reusable page interactions

### E2E Best Practices
- Use Page Object pattern for maintainable tests
- Test user workflows, not implementation details
- Keep tests independent and isolated
- Use meaningful test descriptions

## Learning Objectives

This project demonstrates:
- **HTTP Client Usage**: Consuming REST APIs with Angular's HttpClient
- **Service-Based Architecture**: Dependency injection and service providers
- **Error Handling Strategies**: Global error handling and custom error types
- **Reactive Programming with RxJS**: Observables, operators, and subscriptions
- **Component Communication**: Input/Output properties and services
- **Form Handling and Validation**: Template-driven forms with Angular Forms
- **Bootstrap Integration**: Responsive UI with CSS framework
- **Testing Strategies**: Unit tests with Jasmine/Karma and E2E tests with Protractor
- **TypeScript Best Practices**: Interfaces, types, and strong typing
- **Angular CLI**: Project scaffolding, code generation, and build optimization

**Example: Component Lifecycle**
```typescript
export class PostsComponent implements OnInit {
  posts;

  // Constructor: Called first, used for dependency injection
  // Don't perform expensive operations here
  constructor(private service: PostService) { }

  // ngOnInit: Called after constructor
  // Best place to initialize data and make HTTP calls
  ngOnInit() {
    this.service.getAll()
      .subscribe(posts => {
        this.posts = posts;
      });
  }
}
```

### Key Concepts Covered

#### Services and Dependency Injection
- Creating injectable services with `@Injectable()` decorator
- Providing services at module level
- Service singleton pattern
- Generic service classes for code reuse

**Example: Generic Data Service**
```typescript
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadInput } from '../common/bad-input';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    constructor(private url: string, private http: HttpClient) { }

    getAll() {
        return this.http.get(this.url)
            .pipe(map(response => response), catchError(this.handleError));
    }

    create(resource) {
        return this.http.post(this.url, JSON.stringify(resource))
            .pipe(map(response => response), catchError(this.handleError));
    }

    update(resource) {
        return this.http.patch(this.url + '/' + resource['id'], 
            JSON.stringify({ isRead: true }))
            .pipe(map(response => response), catchError(this.handleError));
    }

    delete(id) {
        return this.http.delete(this.url + '/' + id)
            .pipe(map(response => response), catchError(this.handleError));
    }

    private handleError(error: Response) {
        if (error.status === 400)
            return throwError(new BadInput(error.json()));
        if (error.status === 404)
            return throwError(new NotFoundError);
        return throwError(new AppError(error.json()));
    }
}
```

**Example: Service Extending Base Service**
```typescript
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class PostService extends DataService {
  constructor(http: HttpClient) {
    super('http://jsonplaceholder.typicode.com/posts', http);
  }
}
```

**Example: GitHub Service**
```typescript
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataService } from './services/data.service';

@Injectable({
  providedIn: 'root'
})
export class GithubFollowersService extends DataService {
  constructor(http: HttpClient) {
    super('https://api.github.com/users/SagarPuneria/following', http)
  }
}
```

#### HTTP Operations
- GET requests for data retrieval
- POST requests for creating resources
- PUT/PATCH requests for updates
- DELETE requests with optimistic updates
- Error handling in HTTP calls

**Example: Component Using HTTP Service (Posts Component)**
```typescript
import { Component, OnInit } from '@angular/core';
import { AppError } from '../common/app-error';
import { BadInput } from '../common/bad-input';
import { NotFoundError } from '../common/not-found-error';
import { PostService } from '../services/post.service';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts;

  constructor(private service: PostService) { }

  ngOnInit() {
    // GET: Retrieve all posts
    this.service.getAll()
      .subscribe(
        posts => {
          this.posts = posts;
          console.log(this.posts);
        }
      );
  }

  createPost(input: HTMLInputElement) {
    let post = { title: input.value };
    this.posts.splice(0, 0, post); // Optimistic update

    input.value = '';

    // POST: Create new post
    this.service.create(post)
      .subscribe(
        newPost => {
          post['id'] = newPost['id'];
          console.log(this.posts);
        },
        (error: AppError) => {
          this.posts.splice(0, 1); // Rollback on error

          if (error instanceof BadInput) {
            // Handle validation errors
          }
          else throw error;
        }
      );
  }

  updatePost(post) {
    // PATCH: Update existing post
    this.service.update(post)
      .subscribe(
        updatedPost => {
          console.log(updatedPost);
        }
      );
  }

  deletePost(post) {
    let index = this.posts.indexOf(post);
    this.posts.splice(index, 1); // Optimistic update

    // DELETE: Remove post
    this.service.delete(post['id'])
      .subscribe(
        null,
        (error: AppError) => {
          this.posts.splice(index, 0, post); // Rollback on error

          if (error instanceof NotFoundError)
            alert('This post has already been deleted.');
          else throw error;
        }
      );
  }
}
```

**Example: Simple Component Consuming External API**
```typescript
import { Component, OnInit } from '@angular/core';
import { GithubFollowersService } from '../github-followers.service';

@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {
  followers: any = [];

  constructor(private service: GithubFollowersService) { }

  ngOnInit() {
    this.service.getAll()
      .subscribe(followers => this.followers = followers);
  }
}
```

#### Error Handling Architecture
- Global error handler implementation
- HTTP error interception
- Custom error class hierarchy
- User-friendly error messaging

**Example: Custom Error Classes**
```typescript
// Base Error Class (app-error.ts)
export class AppError {
    constructor(public originalError?: any) { }
}

// Bad Input Error (bad-input.ts)
import { AppError } from './app-error';

export class BadInput extends AppError { }

// Not Found Error (not-found-error.ts)
import { AppError } from './app-error';

export class NotFoundError extends AppError { }
```

**Example: Global Error Handler**
```typescript
import { ErrorHandler } from '@angular/core'

// Global Error Handling
export class AppErrorHandler implements ErrorHandler {
    handleError(error) {
        alert('An unexpected error occured.');
        console.log(error);
    }
}
```

**Example: Registering Global Error Handler (app.module.ts)**
```typescript
import { ErrorHandler, NgModule } from '@angular/core';
import { AppErrorHandler } from './common/app-error-handler';

@NgModule({
  // ... other configuration
  providers: [
    { provide: ErrorHandler, useClass: AppErrorHandler }
  ],
  // ...
})
export class AppModule { }
```

**Example: Error Handling in Service**
```typescript
private handleError(error: Response) {
    if (error.status === 400)
        return throwError(new BadInput(error.json()));
    
    if (error.status === 404)
        return throwError(new NotFoundError);
    
    return throwError(new AppError(error.json()));
}
```

**Example: Error Handling in Component**
```typescript
deletePost(post) {
    let index = this.posts.indexOf(post);
    this.posts.splice(index, 1);

    this.service.delete(post['id'])
      .subscribe(
        null,
        (error: AppError) => {
          this.posts.splice(index, 0, post); // Rollback

          if (error instanceof NotFoundError)
            alert('This post has already been deleted.');
          else throw error; // Re-throw to global handler
        }
      );
}
```

#### Reactive Programming Patterns
- Observable subscriptions
- Operators: `map`, `catchError`, `throwError`
- Subscription management and cleanup
- Error propagation in observable chains

**Example: RxJS Operators in Action**
```typescript
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

getAll() {
    return this.http.get(this.url)
        .pipe(
            map(response => response),
            catchError(this.handleError)
        );
}

create(resource) {
    return this.http.post(this.url, JSON.stringify(resource))
        .pipe(
            map(response => response),
            catchError(this.handleError)
        );
}

private handleError(error: Response) {
    if (error.status === 400)
        return throwError(new BadInput(error.json()));
    if (error.status === 404)
        return throwError(new NotFoundError);
    return throwError(new AppError(error.json()));
}
```

**Example: Optimistic vs Pessimistic Updates**
```typescript
// Optimistic Update: Update UI first, rollback on error
createPost(input: HTMLInputElement) {
    let post = { title: input.value };
    this.posts.splice(0, 0, post); // Update UI immediately

    this.service.create(post)
      .subscribe(
        newPost => {
          post['id'] = newPost['id']; // Update with server response
        },
        (error: AppError) => {
          this.posts.splice(0, 1); // Rollback if error occurs
          if (error instanceof BadInput) {
            // Handle validation error
          } else throw error;
        }
      );
}

// Pessimistic Update: Wait for server response before updating UI
createPostPessimistic(input: HTMLInputElement) {
    let post = { title: input.value };

    this.service.create(post)
      .subscribe(
        newPost => {
          this.posts.splice(0, 0, newPost); // Update UI after success
        },
        (error: AppError) => {
          // Handle error without rollback
        }
      );
}
```

## API Endpoints Used

### JSONPlaceholder API
- **Base URL**: `https://jsonplaceholder.typicode.com`
- **Endpoint**: `/posts`
- **Purpose**: Demonstrates CRUD operations with a fake REST API
- **Operations**:
  - GET `/posts` - Retrieve all posts
  - GET `/posts/:id` - Retrieve single post
  - POST `/posts` - Create new post
  - PUT `/posts/:id` - Update existing post
  - DELETE `/posts/:id` - Delete post

### GitHub API
- **Base URL**: `https://api.github.com`
- **Purpose**: Demonstrates consuming real-world external APIs
- **Note**: Rate limited (60 requests per hour for unauthenticated requests)
- **Used for**: Fetching follower information (demonstration purposes)

## Configuration Files

### TypeScript Configuration
- **`tsconfig.json`**: Base TypeScript configuration
- **`tsconfig.app.json`**: Application-specific settings (extends base config)
- **`tsconfig.spec.json`**: Test-specific settings (includes test types)

### Linting Configuration
- **`tslint.json`**: TSLint rules for code quality
  - Extends recommended rules
  - Custom rules for Angular projects (via Codelyzer)
  - Enforces consistent code style

### Angular Configuration
- **`angular.json`**: Workspace and project configuration
  - Build options and configurations
  - Development/production settings
  - Asset and style paths
  - Test configurations

### Browser Support
- **`browserslist`**: Target browsers for CSS/JS transpilation
  - Defines browser compatibility requirements
  - Used by Autoprefixer and Babel

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

### Additional Resources
- [Angular Documentation](https://angular.io/docs) - Official Angular documentation
- [Angular Tutorial](https://angular.io/tutorial) - Tour of Heroes tutorial
- [RxJS Documentation](https://rxjs.dev/) - Learn more about reactive programming
- [TypeScript Handbook](https://www.typescriptlang.org/docs/) - TypeScript language guide
- [Bootstrap Documentation](https://getbootstrap.com/docs/) - Bootstrap 5 documentation

## Troubleshooting

### Common Issues

**Issue**: `digital envelope routines::unsupported` error  
**Solution**: This occurs with Node.js 17+ and Angular 8. The project already includes `NODE_OPTIONS='--openssl-legacy-provider'` in all npm scripts.

**Issue**: Bootstrap styles not loading  
**Solution**: Ensure Bootstrap is imported in `src/styles.css`:
```css
@import "~bootstrap/dist/css/bootstrap.css";
```

**Issue**: Peer dependency conflicts during npm install  
**Solution**: Use `npm install --legacy-peer-deps` flag when installing packages.

**Issue**: Port 4200 already in use  
**Solution**: Either stop the process using port 4200, or run the app on a different port:
```bash
ng serve --port 4300
```

## Project Status

This is a learning project created to demonstrate Angular 8 concepts including HTTP services, error handling, and component-based architecture. It serves as a reference implementation for:
- Setting up Angular applications
- Integrating third-party libraries (Bootstrap)
- Implementing HTTP services
- Error handling patterns
- Testing strategies

**Note**: This project uses Angular 8.1.0, which is an older version. For new projects, consider using the latest Angular version with updated practices and features.

## License

This project is for educational purposes.
