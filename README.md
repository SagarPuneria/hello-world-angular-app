# HelloWorldAngularApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.1.0.

## Project Overview

This Angular application demonstrates fundamental Angular concepts including:
- **Component Communication**: Input/Output properties between parent and child components
- **Event Handling**: Click events and custom event emission
- **Property Binding**: Dynamic class binding and data binding
- **Template Interpolation**: Displaying dynamic data
- **Component Architecture**: Reusable UI components

### Key Features
- ⭐ **Favorite Component**: Interactive star rating with toggle functionality
- 👤 **Favorite User Component**: User-specific favorite functionality
- ❤️ **Like Component**: Interactive like button with counter
- 📋 **Panel Component**: Bootstrap-styled panel component
- 🎨 **UI Styling**: Integration with Bootstrap 5 and Font Awesome icons

## Project Structure & Components

### Generated Components
This project includes the following custom components that were generated using Angular CLI:

```bash
# Generate the main application (done automatically with ng new)
ng new hello-world-angular-app

# Generate individual components
ng generate component favorite
ng generate component favorite-user  
ng generate component like
ng generate component panel
```

### Component Details

#### 1. **FavoriteComponent** (`src/app/favorite/`)
- **Purpose**: Displays a toggleable star icon for marking items as favorite
- **Features**: 
  - Input property `[isFavorite]` for initial state
  - Output event `(change2)` for state changes
  - Font Awesome star icons with dynamic styling
- **Generated with**: `ng generate component favorite`

#### 2. **FavoriteUserComponent** (`src/app/favorite-user/`)
- **Purpose**: User-specific favorite functionality
- **Generated with**: `ng generate component favorite-user`

#### 3. **LikeComponent** (`src/app/like/`)
- **Purpose**: Interactive like button with counter functionality
- **Features**:
  - Input properties `[isActive]` and `[likes-count]`
  - Click handling to toggle like state and update counter
  - Heart icon with highlighting
- **Generated with**: `ng generate component like`

#### 4. **PanelComponent** (`src/app/panel/`)
- **Purpose**: Bootstrap-styled panel component for content display
- **Selector**: `bootstrap-panel`
- **Generated with**: `ng generate component panel`

### Dependencies Added
The following packages were added to enhance the application:

```bash
# Install Bootstrap for styling
npm install bootstrap@^5.0.2

# Install Font Awesome for icons
npm install font-awesome@^4.7.0
```

### File Structure
```
src/
├── app/
│   ├── app.component.ts          # Root component with post and tweet data
│   ├── app.component.html        # Main template using child components
│   ├── app.component.css         # Root component styles
│   ├── app.module.ts             # Module declarations and imports
│   ├── favorite/                 # Star rating component
│   │   ├── favorite.component.ts
│   │   ├── favorite.component.html
│   │   ├── favorite.component.css
│   │   └── favorite.component.spec.ts
│   ├── favorite-user/            # User favorite component
│   ├── like/                     # Like button component
│   └── panel/                    # Bootstrap panel component
├── assets/                       # Static assets
├── environments/                 # Environment configurations
└── index.html                    # Main HTML file
```

## Development Commands
```bash
# Install dependencies
npm install --legacy-peer-deps

# Build the application
npm run build
```

### Development server
```bash
ng serve
```
Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding
```bash
# Generate a new component
ng generate component component-name

# Generate other Angular elements
ng generate directive|pipe|service|class|guard|interface|enum|module
```

### Build
```bash
# Development build
ng build

# Production build
ng build --prod
```
The build artifacts will be stored in the `dist/` directory.

### Running tests
```bash
# Unit tests via Karma
ng test

# End-to-end tests via Protractor  
ng e2e

# Linting
ng lint
```

## Learning Concepts Demonstrated

### 1. Input Properties (Property Binding)
**Data Flow**: Parent Component → Child Component → DOM Element

```typescript
// src/app/favorite/favorite.component.ts:
@Input('isFavorite') isSelected2: boolean;
```
```html
<!-- src/app/app.component.html: -->
<!-- AppComponent (parent) passes data to FavoriteComponent (child) -->
<favorite [isFavorite]="post.isSelected"></favorite>
```
- Uses square brackets `[]`
- Parent component (`app.component`) passes data down to child component (`favorite.component`)
- Child receives data via `@Input()` decorator

### 2. Output Properties (Event Binding)
**Data Flow**: DOM Element → Child Component → Parent Component

```typescript
// src/app/favorite/favorite.component.ts:
@Output('change2') click2 = new EventEmitter();
```
```html
<!-- src/app/app.component.html: -->
<!-- FavoriteComponent (child) emits events to AppComponent (parent) -->
<favorite (change2)="onFavoriteChange($event)"></favorite>
```
- Uses parentheses `()`
- Child component (`favorite.component`) emits events to parent component (`app.component`)
- Child emits events via `@Output()` with `EventEmitter`
- Parent handles events with event handler methods

### 3. Event Handling
```typescript
// src/app/favorite/favorite.component.ts:
onClick() {
  this.isSelected2 = !this.isSelected2;
  this.click2.emit({ newValue: this.isSelected2 });
}
```

### 4. Dynamic Class Binding
```html
<!-- src/app/favorite/favorite.component.html: -->
<span class="fa" 
      [class.fa-star]="isSelected2" 
      [class.fa-star-o]="!isSelected2">
</span>
```

### 5. Content Projection (ng-content)
Content projection allows you to create reusable components by injecting content from the parent component into designated slots in the child component.

```html
<!-- Parent component (app.component.html) -->
<bootstrap-panel>
  <ng-container class="heading">Heading</ng-container>
  <div class="body">
    <h2>Body</h2>
    <p>Some content here ...</p>
  </div>
</bootstrap-panel>
```

```html
<!-- Child component (panel.component.html) -->
<div class="panel panel-default">
  <div class="panel-heading">
    <ng-content select=".heading"></ng-content>
  </div>
  <div class="panel-body">
    <ng-content select=".body"></ng-content>
  </div>
</div>
```

**Key Points**:
- `<ng-content select=".heading">` - Projects content with class `.heading` from parent
- `<ng-container>` - Logical container that doesn't render in DOM, but its class selector is used for projection
- This pattern enables flexible, reusable components where the parent controls the content

### 6. Component Public API
A component's **public API** consists of its `@Input()` and `@Output()` properties:
- Without these decorators, parent components cannot communicate with the component
- `@Input()` properties allow data to flow into the component
- `@Output()` properties allow events to flow out of the component

```typescript
// src/app/favorite/favorite.component.ts:
// Exporting interfaces for type safety and reusability
export interface FavoriteComponentEventArgs {
  newValue: boolean
}
```

**Benefits of exporting interfaces**:
- Provides IntelliSense support in parent components
- Ensures type safety when handling events
- Makes the event structure reusable across the application

### 7. Aliasing Input/Output Properties
```typescript
// src/app/favorite/favorite.component.ts:
// Input aliasing (preferred approach)
@Input('isFavorite') isSelected2: boolean;
// External name: 'isFavorite', Internal name: 'isSelected2'

// Output aliasing (preferred approach)  
@Output('change2') click2 = new EventEmitter();
// External name: 'change2', Internal name: 'click2'
```

**Why use aliasing?**:
- External API can remain stable while internal implementation changes
- Provides better encapsulation and flexibility

## Branch Information

**Current Branch**: `3_Building_Re-usable_Components`
This branch focuses on demonstrating data display and event handling patterns in Angular.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
