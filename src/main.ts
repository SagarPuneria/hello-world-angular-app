import { enableProdMode } from '@angular/core';
// import { ApplicationRef } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// import { enableDebugTools } from '@angular/platform-browser';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
/*   .then(ref => {
    console.log('Angular debugging tools are initialized during bootstrap process');
    // Enable Angular debugging tools in development mode
    if (!environment.production) {
      // Enable Angular debug tools - this is crucial for Angular 8
      const appRef = ref.injector.get(ApplicationRef);
      const componentRef = appRef.components[0];
      enableDebugTools(componentRef);
      
      // Store reference to the Angular application
      (window as any).ngRef = ref;
      
      // Initialize the global ng object with proper Angular 8 debugging
      (window as any).ng = (window as any).ng || {};
      
      // Set up Angular 8 compatible getComponent function
      (window as any).ng.getComponent = function(element: any) {
        if (!element) {
          console.warn('No element provided to getComponent');
          return null;
        }
        
        // console.log('Getting component for element:', element);
        
        // Method 1: Use ng.probe (the official Angular 8 way)
        if ((window as any).ng.probe) {
          try {
            const debugElement = (window as any).ng.probe(element);
            // console.log('ng.probe result:', debugElement);
            if (debugElement && debugElement.componentInstance) {
              // console.log('Found component via ng.probe:', debugElement.componentInstance);
              return debugElement.componentInstance;
            }
          } catch (e) {
            console.warn('ng.probe failed:', e);
          }
        }
        
        // Method 2: Direct access to Angular's internal context
        if (element.__ngContext__) {
          // console.log('Found __ngContext__:', element.__ngContext__);
          // In Angular 8, component instances are stored in the context
          const context = element.__ngContext__;
          if (Array.isArray(context)) {
            // Look for component instance in the context array
            for (let i = 0; i < context.length; i++) {
              const item = context[i];
              if (item && typeof item === 'object' && item.constructor && item.constructor.name !== 'Object' && item.constructor.name !== 'Array') {
                // console.log('Found component instance:', item);
                return item;
              }
            }
          } else if (context && typeof context === 'object') {
            // console.log('Found component instance directly:', context);
            return context;
          }
        }
        
        console.warn('Could not find Angular component for element, main.ts:', element);
        return null;
      };
      
      // Set up Angular 8 compatible getInjector function
      (window as any).ng.getInjector = function(element: any) {
        if (!element) {
          console.warn('No element provided to getInjector');
          return null;
        }
        
        // console.log('Getting injector for element:', element);
        
        // Method 1: Use ng.probe to get the injector
        if ((window as any).ng.probe) {
          try {
            const debugElement = (window as any).ng.probe(element);
            // console.log('ng.probe result for injector:', debugElement);
            if (debugElement && debugElement.injector) {
              // console.log('Found injector via ng.probe:', debugElement.injector);
              return debugElement.injector;
            }
          } catch (e) {
            console.warn('ng.probe failed for injector:', e);
          }
        }
        
        // Method 2: Get injector from the root application
        if ((window as any).ngRef && (window as any).ngRef.injector) {
          // console.log('Found root injector:', (window as any).ngRef.injector);
          return (window as any).ngRef.injector;
        }
        
        // Method 3: Try to get injector from component
        const component = (window as any).ng.getComponent(element);
        if (component && component.injector) {
          // console.log('Found injector from component:', component.injector);
          return component.injector;
        }
        
        console.warn('Could not find Angular injector for element:', element);
        return null;
      };
      
      // Set up getDirectives function
      (window as any).ng.getDirectives = function(element: any) {
        if (!element) {
          console.warn('No element provided to getDirectives');
          return [];
        }
        
        if ((window as any).ng.probe) {
          try {
            const debugElement = (window as any).ng.probe(element);
            if (debugElement && debugElement.references) {
              return Object.values(debugElement.references);
            }
          } catch (e) {
            console.warn('ng.probe failed for directives:', e);
          }
        }
        
        return [];
      };
      
      console.log('Angular 8 debugging tools enabled');
      console.log('ng object:', (window as any).ng);
      console.log('Available ng functions:', Object.keys((window as any).ng));
    }
  }) */
  .catch(err => console.error(err));
