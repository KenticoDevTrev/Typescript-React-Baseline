import { SampleHelper } from "../Helpers/sample-helpers";
// declare my helper in the window interface
declare global {
    interface Window {
        MyHelper: SampleHelper
    }
  }