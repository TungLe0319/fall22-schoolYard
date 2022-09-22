import { assignmentsService } from "../services/AssignmentsService.js";
import BaseController from "../utils/BaseController.js";

export class AssignmentsController extends BaseController {
  constructor() {
    super('api/assignments');
    this.router.post('', this.create);
  }

  async create(req, res, next) {
    try {
      const assignment = await assignmentsService.create(req.body);
      res.send(assignment);
    } catch (error) {
      next(error);
    }
  }

  

  /**
   * {
"name": "Math Homework",
"description":"finish it or it'll ne your grades on the chopping block" ,
"points": 10,

"courseId": "632bd368e84f5a2d3602ae76"
}
   */
}
