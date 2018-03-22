import {Asset} from './org.hyperledger.composer.system';
import {Participant} from './org.hyperledger.composer.system';
import {Transaction} from './org.hyperledger.composer.system';
import {Event} from './org.hyperledger.composer.system';
// export namespace org.medichain.mvp{
   export enum TypeOfConsultation {
      CLINICAL,
      SURGERY,
      IMMUNIZATION,
   }
   export enum ImmunizationType {
      HEPATITISB,
      DTP,
      HAEMOPHILLIUSINFLUENZA,
      PNEUOMACOCAL,
      POLIO,
      ROTAVIRUS,
      MMRS,
      VARICELLA,
      HEPATITISA,
      MENINGCOCAL,
   }
   export enum Disease {
      CARDIOVASCULAR,
      CANCER,
      CHRONIC_LOWER_RESPIRATORY_DISEASE,
      STROKE,
      ANDROPAUSE,
      ARTHRITIS,
      ACUTE_BRONCHITIS,
      BURN,
      CROHNS,
      DEPRESSION,
      DIARRHEA,
      DERMATITIS,
      ENDOMETRIOSIS,
      EPILEPSY,
      FIBROMYALGIA,
      DVT,
      HERPES,
      GONORRHEA,
      GOUT,
      GYNECOMASTIA,
      MYOCARDIAL_INFARCTION,
      HEMORRHOIDS,
      HIV,
      AIDS,
   }
   export enum Gender {
      Male,
      Female,
      Undisclosed,
   }
   export enum DataAccessorType {
      ACADEMIC_RESEARCHER,
      COMMERCIAL_ENTITY,
   }
   export abstract participant Member {
    o String companyName
  }
  
   export class Patient extends Member {
      patientId: string;
      patientDoctor: MedicalPractitioner;
      patientPractice: MedicalPractice;
   }
   export class MedicalPractice extends Participant {
      practiceId: string;
      practiceName: string;
      practiceRegistrationNumber: number;
   }
   export class MedicalPractitioner extends Member {
      practitionerId: string;
      userName: string;
      firstName: string;
      lastName: string;
      registrationNumber: number;
      speciality: string;
      assistant: string;
      practicionerPlaceOfWork: MedicalPractice;
      authorized: string[];
   }
   export class DataAccessor extends Member {
      accessorId: string;
      typeOfDataAccessor: DataAccessor;
      name: string;
      authorized: string[];
   }
   export class ProfileInformation extends Asset {
      patientId: string;
      userName: string;
      firstName: string;
      middleName: string;
      lastName: string;
      sex: Gender;
      source: string;
      facility: string;
      facilityId: string;
      currentPrescriptions: Prescription[];
      dateOfBirth: Date;
      phoneNumber: number;
      streetAddress: string;
      city: string;
      state: string;
      country: string;
      zipCode: string;
      email: string;
      numberOfConsultations: number[];
   }
   export class PatientMasterData extends Asset {
      masterDataId: string;
      patientPrescriptions: Prescription[];
      patientImmunizationHistory: ImmunizationRecord[];
      patientConsultationHistory: ConsultationInformation;
      patientInsuranceInfo: InsuranceData;
   }
   export class Prescription extends Asset {
      prescriptionId: string;
      patientId: string;
      pharmacyId: number;
      dateAdded: Date;
      dateModified: Date;
      providerId: number;
      startDate: Date;
      drug: string;
      dosage: string;
      quantity: string;
      size: number;
      unit: number;
      perRefil: string;
      filledDate: Date;
      medication: string;
      note: string;
      active: boolean;
   }
   export class ConsultationInformation extends Asset {
      patientId: string;
      consultationId: string;
      consultationType: TypeOfConsultation;
      dateOfConsultation: Date;
      consultationDisease: Disease;
      consultationPrescription: Prescription[];
      consultationImmunization: ImmunizationRecord[];
   }
   export class InsuranceData extends Asset {
      patientId: string;
      typeOfInsurance: string;
      provider: string;
      plan_name: string;
      policy_number: string;
      group_number: number;
      subscriber_lname: string;
      subscriber_mname: string;
      subscriber_fname: string;
      subscriber_relationship: string;
      subscriber_ss: string;
      subscriber_DOB: Date;
      subscriber_street: string;
      subscriber_postal_code: string;
      subscriber_city: string;
      subscriber_state: string;
      subscriber_country: string;
      subscriber_phone: string;
      subscriber_employer: string;
      subscriber_employer_street: string;
      subscriber_employer_postal_code: string;
      subscriber_employer_state: string;
      subscriber_employer_country: string;
      subscriber_employer_city: string;
      copay: string;
      date: Date;
      subscriber_sex: string;
      accept_assignment: string;
   }
   export class ImmunizationRecord extends Asset {
      immunizationId: string;
      subTypeOfImmunization: string;
      dateOfImmunization: Date;
   }
   export class updateConsultationCount extends Transaction {
      addNewConsultation: number;
      numberOfConsultations: ProfileInformation;
   }
   export class updateConsultationInfo extends Transaction {
      updatedDatedInfo: ConsultationInformation;
   }
   export class updatePatientMedicalHistory extends Transaction {
      patientMasterData: PatientMasterData;
   }
   export abstract class PermissionControl extends Transaction {
      accessorId: string;
   }
   export class GrantAccess extends PermissionControl {
   }
   export class RevokeAccess extends PermissionControl {
   }
   export class MemberEvent extends Event {
      permissionControl: PermissionControl;
   }
// }
