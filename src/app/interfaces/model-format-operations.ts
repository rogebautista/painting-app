import { Operations} from "./Operations";

export class FormatCardOperationModel {
  "normal_operations" : Array<Operations>;
  "abnormal_operations" : Array<Operations>;
  "special_operations" : Array<Operations>;
  "human_factors" : Array<Operations>;
  "crm" : Array<Operations>;
}
