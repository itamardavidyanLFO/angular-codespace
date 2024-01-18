import { ErrorHandler } from "@angular/core";

export class GlobalErrorHandler extends ErrorHandler {
  public override handleError(error: any): void {
    console.log("🚀🚀🚀 ~ GlobalErrorHandler:", error.message);
    // super.handleError(error);
  }
}

export class LazyErrorHandler extends ErrorHandler {
  public override handleError(error: any): void {
    console.log("⛔⛔⛔ ~ LazyErrorHandler:", error.message);
    // super.handleError(error);
  }
}


export class FirstErrorHandler extends ErrorHandler {
  public override handleError(error: any): void {
    console.log("⛔⛔⛔ ~ FirstErrorHandler:", error.message);
    // super.handleError(error);
  }
}
