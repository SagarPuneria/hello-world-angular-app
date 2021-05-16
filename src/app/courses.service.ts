// This service was manually created
// Register this dependency(CoursesService) in main app module, since we are not passing this argumnet {providedIn: 'root'} in Injectable() function.
export class CoursesService {
    getCourses() {
        return ["course service 1", "course service 2", "course service 3"];
    }
}