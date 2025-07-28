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
  - Output event `(change)` for state changes
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
```typescript
@Input('isFavorite') isSelected: boolean;
```
```html
<favorite [isFavorite]="post.isSelected"></favorite>
```

### 2. Output Properties (Event Binding)
```typescript
@Output('change') click = new EventEmitter();
```
```html
<favorite (change)="onFavoriteChange($event)"></favorite>
```

### 3. Event Handling
```typescript
onClick() {
  this.isSelected = !this.isSelected;
  this.click.emit({ newValue: this.isSelected });
}
```

### 4. Dynamic Class Binding
```html
<span class="fa" 
      [class.fa-star]="isSelected" 
      [class.fa-star-o]="!isSelected">
</span>
```

## Branch Information

**Current Branch**: `2_DisplayingData_And_HandlingEvents`
This branch focuses on demonstrating data display and event handling patterns in Angular.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
