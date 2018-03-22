import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ConsultationInformationService } from './ConsultationInformation.service';
import 'rxjs/add/operator/toPromise';
@Component({
	selector: 'app-ConsultationInformation',
	templateUrl: './ConsultationInformation.component.html',
	styleUrls: ['./ConsultationInformation.component.css'],
  providers: [ConsultationInformationService]
})
export class ConsultationInformationComponent implements OnInit {

  myForm: FormGroup;

  private allAssets;
  private asset;
  private currentId;
	private errorMessage;

  
      
          patientId = new FormControl("", Validators.required);
        
  
      
          consultationId = new FormControl("", Validators.required);
        
  
      
          consultationType = new FormControl("", Validators.required);
        
  
      
          dateOfConsultation = new FormControl("", Validators.required);
        
  
      
          consultationDisease = new FormControl("", Validators.required);
        
  
      
          consultationPrescription = new FormControl("", Validators.required);
        
  
      
          consultationImmunization = new FormControl("", Validators.required);
        
  


  constructor(private serviceConsultationInformation:ConsultationInformationService, fb: FormBuilder) {
    this.myForm = fb.group({
    
        
          patientId:this.patientId,
        
    
        
          consultationId:this.consultationId,
        
    
        
          consultationType:this.consultationType,
        
    
        
          dateOfConsultation:this.dateOfConsultation,
        
    
        
          consultationDisease:this.consultationDisease,
        
    
        
          consultationPrescription:this.consultationPrescription,
        
    
        
          consultationImmunization:this.consultationImmunization
        
    
    });
  };

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(): Promise<any> {
    let tempList = [];
    return this.serviceConsultationInformation.getAll()
    .toPromise()
    .then((result) => {
			this.errorMessage = null;
      result.forEach(asset => {
        tempList.push(asset);
      });
      this.allAssets = tempList;
    })
    .catch((error) => {
        if(error == 'Server error'){
            this.errorMessage = "Could not connect to REST server. Please check your configuration details";
        }
        else if(error == '404 - Not Found'){
				this.errorMessage = "404 - Could not find API route. Please check your available APIs."
        }
        else{
            this.errorMessage = error;
        }
    });
  }

	/**
   * Event handler for changing the checked state of a checkbox (handles array enumeration values)
   * @param {String} name - the name of the asset field to update
   * @param {any} value - the enumeration value for which to toggle the checked state
   */
  changeArrayValue(name: string, value: any): void {
    const index = this[name].value.indexOf(value);
    if (index === -1) {
      this[name].value.push(value);
    } else {
      this[name].value.splice(index, 1);
    }
  }

	/**
	 * Checkbox helper, determining whether an enumeration value should be selected or not (for array enumeration values
   * only). This is used for checkboxes in the asset updateDialog.
   * @param {String} name - the name of the asset field to check
   * @param {any} value - the enumeration value to check for
   * @return {Boolean} whether the specified asset field contains the provided value
   */
  hasArrayValue(name: string, value: any): boolean {
    return this[name].value.indexOf(value) !== -1;
  }

  addAsset(form: any): Promise<any> {
    this.asset = {
      $class: "org.medichain.mvp.ConsultationInformation",
      
        
          "patientId":this.patientId.value,
        
      
        
          "consultationId":this.consultationId.value,
        
      
        
          "consultationType":this.consultationType.value,
        
      
        
          "dateOfConsultation":this.dateOfConsultation.value,
        
      
        
          "consultationDisease":this.consultationDisease.value,
        
      
        
          "consultationPrescription":this.consultationPrescription.value,
        
      
        
          "consultationImmunization":this.consultationImmunization.value
        
      
    };

    this.myForm.setValue({
      
        
          "patientId":null,
        
      
        
          "consultationId":null,
        
      
        
          "consultationType":null,
        
      
        
          "dateOfConsultation":null,
        
      
        
          "consultationDisease":null,
        
      
        
          "consultationPrescription":null,
        
      
        
          "consultationImmunization":null
        
      
    });

    return this.serviceConsultationInformation.addAsset(this.asset)
    .toPromise()
    .then(() => {
			this.errorMessage = null;
      this.myForm.setValue({
      
        
          "patientId":null,
        
      
        
          "consultationId":null,
        
      
        
          "consultationType":null,
        
      
        
          "dateOfConsultation":null,
        
      
        
          "consultationDisease":null,
        
      
        
          "consultationPrescription":null,
        
      
        
          "consultationImmunization":null 
        
      
      });
    })
    .catch((error) => {
        if(error == 'Server error'){
            this.errorMessage = "Could not connect to REST server. Please check your configuration details";
        }
        else{
            this.errorMessage = error;
        }
    });
  }


   updateAsset(form: any): Promise<any> {
    this.asset = {
      $class: "org.medichain.mvp.ConsultationInformation",
      
        
          
        
    
        
          
            "consultationId":this.consultationId.value,
          
        
    
        
          
            "consultationType":this.consultationType.value,
          
        
    
        
          
            "dateOfConsultation":this.dateOfConsultation.value,
          
        
    
        
          
            "consultationDisease":this.consultationDisease.value,
          
        
    
        
          
            "consultationPrescription":this.consultationPrescription.value,
          
        
    
        
          
            "consultationImmunization":this.consultationImmunization.value
          
        
    
    };

    return this.serviceConsultationInformation.updateAsset(form.get("patientId").value,this.asset)
		.toPromise()
		.then(() => {
			this.errorMessage = null;
		})
		.catch((error) => {
            if(error == 'Server error'){
				this.errorMessage = "Could not connect to REST server. Please check your configuration details";
			}
            else if(error == '404 - Not Found'){
				this.errorMessage = "404 - Could not find API route. Please check your available APIs."
			}
			else{
				this.errorMessage = error;
			}
    });
  }


  deleteAsset(): Promise<any> {

    return this.serviceConsultationInformation.deleteAsset(this.currentId)
		.toPromise()
		.then(() => {
			this.errorMessage = null;
		})
		.catch((error) => {
            if(error == 'Server error'){
				this.errorMessage = "Could not connect to REST server. Please check your configuration details";
			}
			else if(error == '404 - Not Found'){
				this.errorMessage = "404 - Could not find API route. Please check your available APIs."
			}
			else{
				this.errorMessage = error;
			}
    });
  }

  setId(id: any): void{
    this.currentId = id;
  }

  getForm(id: any): Promise<any>{

    return this.serviceConsultationInformation.getAsset(id)
    .toPromise()
    .then((result) => {
			this.errorMessage = null;
      let formObject = {
        
          
            "patientId":null,
          
        
          
            "consultationId":null,
          
        
          
            "consultationType":null,
          
        
          
            "dateOfConsultation":null,
          
        
          
            "consultationDisease":null,
          
        
          
            "consultationPrescription":null,
          
        
          
            "consultationImmunization":null 
          
        
      };



      
        if(result.patientId){
          
            formObject.patientId = result.patientId;
          
        }else{
          formObject.patientId = null;
        }
      
        if(result.consultationId){
          
            formObject.consultationId = result.consultationId;
          
        }else{
          formObject.consultationId = null;
        }
      
        if(result.consultationType){
          
            formObject.consultationType = result.consultationType;
          
        }else{
          formObject.consultationType = null;
        }
      
        if(result.dateOfConsultation){
          
            formObject.dateOfConsultation = result.dateOfConsultation;
          
        }else{
          formObject.dateOfConsultation = null;
        }
      
        if(result.consultationDisease){
          
            formObject.consultationDisease = result.consultationDisease;
          
        }else{
          formObject.consultationDisease = null;
        }
      
        if(result.consultationPrescription){
          
            formObject.consultationPrescription = result.consultationPrescription;
          
        }else{
          formObject.consultationPrescription = null;
        }
      
        if(result.consultationImmunization){
          
            formObject.consultationImmunization = result.consultationImmunization;
          
        }else{
          formObject.consultationImmunization = null;
        }
      

      this.myForm.setValue(formObject);

    })
    .catch((error) => {
        if(error == 'Server error'){
            this.errorMessage = "Could not connect to REST server. Please check your configuration details";
        }
        else if(error == '404 - Not Found'){
				this.errorMessage = "404 - Could not find API route. Please check your available APIs."
        }
        else{
            this.errorMessage = error;
        }
    });

  }

  resetForm(): void{
    this.myForm.setValue({
      
        
          "patientId":null,
        
      
        
          "consultationId":null,
        
      
        
          "consultationType":null,
        
      
        
          "dateOfConsultation":null,
        
      
        
          "consultationDisease":null,
        
      
        
          "consultationPrescription":null,
        
      
        
          "consultationImmunization":null 
        
      
      });
  }

}
