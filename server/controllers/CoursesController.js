import { Auth0Provider } from "@bcwdev/auth0provider";
import { assignmentsService } from "../services/AssignmentsService.js";
import { coursesService } from "../services/CoursesService.js";
import BaseController from "../utils/BaseController.js";

export class CoursesController extends BaseController {
  constructor() {
    super('api/courses')
    this.router
      .get('', this.get)
      .get('/:courseId/assignments', this.getCourseAssignments)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.create)


  }


  async get(req, res, next) {
    try {
      const courses = await coursesService.get()
      res.send(courses)
    } catch (error) {
      next(error)
    }
  }

  async getCourseAssignments(req, res, next){
    try {
      const courseAssignments = await assignmentsService.getAssignmentsByCourseId(req.params.courseId)
      res.send(courseAssignments)
    } catch (error) {
      next(error)
    }

  }



  async create(req, res, next) {
    try {
      // req.body == form data
      const course = await coursesService.create(req.body)
      res.send(course)
    } catch (error) {
      next(error)
    }
  }



}
