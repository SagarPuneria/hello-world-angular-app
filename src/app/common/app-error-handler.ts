import { ErrorHandler } from '@angular/core'

// Global Error Handling
export class AppErrorHandler implements ErrorHandler {
    handleError(error) {
        // do something with the exception
        alert('An unexpected error occured.');
        console.log(error);
    }
}