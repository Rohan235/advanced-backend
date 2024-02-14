class ApiError extends Error {
   constructor(
    statsusCode,
    message = "Something went wrong",
    errors = [],
    stack = ""
  ) {
    super(message);
    this.statsusCode = statsusCode;
    this.data = null,
      this.message = message,
      this.errors = errors,
      this.success = false;

      if(stack){
        this.stack = stack
      } else{
        Error.captureStackTrace(this,this.constructor)
      }   
  }
 
}
 export{ApiError}

 //
// The ApiError class is used to create structured error objects in an Express.js application.
//  It extends the built-in Error class and includes properties such as statusCode, message, errors, and success.
//   It captures the stack trace of errors and is useful for handling and communicating 
//   error conditions between the backend and frontend of the application.