class ApiError extends Error {
  Constructor(
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
        Error.captureStackTrace(this,this.Constructor)
      }   
  }
 
}
 export{ApiError}