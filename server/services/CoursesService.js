import { dbContext } from "../db/DbContext.js"

class CoursesService {
  
  async getCoursesByStudentId(studentId) {
    const courses = await dbContext.StudentEnrollments.find({ studentId }).populate('course', 'name code').populate('student', 'name picture')
    return courses
  }

  async enrollInCourse(formData) {
    const enrollment = await dbContext.StudentEnrollments.create(formData)

    await enrollment.populate('course', 'name code')

    return enrollment

  }

  async get() {
    const courses = await dbContext.Courses.find()
    return courses
  }

  async create(formData) {
    const course = await dbContext.Courses.create(formData)
    return course
  }

}

export const coursesService = new CoursesService()


