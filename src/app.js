import { LightningElement } from "lwc";

export default class App extends LightningElement {
  title = "Welcome to Lightning Web Components!";

  showFeatures = true;

  /**
   * Getter for the features property
   */
  get features() {
    return [
      {
        label: "CHamp 1 ",
        icon: "utility:edit",
        helper: "helper text 1"
      },
     {
        label: "CHamp 2 ",
        icon: "utility:edit",
        helper: "helper text 2"
      },
    {
        label: "CHamp 3",
        icon: "utility:edit",
        helper: "helper text 3"
      },
    ];
  }
}
