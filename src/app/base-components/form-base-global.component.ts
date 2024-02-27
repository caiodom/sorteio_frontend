import { SharedService } from "../utils/shared-variables";
import { FormBaseComponent } from "./form-base.component";

export abstract class FormBaseGlobalComponent extends FormBaseComponent{

  constructor(protected sharedService: SharedService){
    super();

    this.sharedService.setMenuValue(true);
  }
}
