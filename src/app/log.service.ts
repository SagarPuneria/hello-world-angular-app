// This service was manually created
// Register this dependency(LogService) in main app module, since we are not passing this argumnet {providedIn: 'root'} in Injectable() function.
export class LogService {
    services: string[];
    logService(v: string[]) {
        this.services = v;
        return this.services;
    }
}