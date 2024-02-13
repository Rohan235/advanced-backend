class ApiError extends Error {
  Constructor(
    statsusCode,
    message = "Something went wrong",
    errors = [],
    statck = ""
  ) {
    super(message);
    this.statsusCode = statsusCode;
    this.data = null,
      this.message = message,
      this.errors = errors,
      this.success = false;

      if(statck){
        this.statck = statck
      } else{
        Error.captureStackTrace(this,this.Constructor)
      }   
  }
 
}
 export{ApiError}