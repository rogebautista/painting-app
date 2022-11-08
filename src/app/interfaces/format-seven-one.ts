export interface FormatSevenTwelve {

  formID?: string;
  recordID?: string;
  traineeID?: string;

  traineeName?: string;
  traineeLicenseNo?: string;
  evaluatedPosition?: string;

  normalOperations?: {
    flightPreparation?: {
      sDate: string;
      signedBy: string;
    };
  };
  abnormalOperations?: {
    singleEngClimb?: string;
  };
  specialOperations?: {};
  humanFactors?: {};
  crm?: {};

}
