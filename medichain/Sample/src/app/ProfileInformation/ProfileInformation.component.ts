import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ProfileInformationService } from './ProfileInformation.service';
import 'rxjs/add/operator/toPromise';
@Component({
	selector: 'app-ProfileInformation',
	templateUrl: './ProfileInformation.component.html',
	styleUrls: ['./ProfileInformation.component.css'],
  providers: [ProfileInformationService]
})
export class ProfileInformationComponent implements OnInit {

  myForm: FormGroup;

  private allAssets;
  private asset;
  private currentId;
	private errorMessage;

  
      
          patientId = new FormControl("", Validators.required);
        
  
      
          userName = new FormControl("", Validators.required);
        
  
      
          firstName = new FormControl("", Validators.required);
        
  
      
          middleName = new FormControl("", Validators.required);
        
  
      
          lastName = new FormControl("", Validators.required);
        
  
      
          sex = new FormControl("", Validators.required);
        
  
      
          source = new FormControl("", Validators.required);
        
  
      
          facility = new FormControl("", Validators.required);
        
  
      
          facilityId = new FormControl("", Validators.required);
        
  
      
          currentPrescriptions = new FormControl("", Validators.required);
        
  
      
          dateOfBirth = new FormControl("", Validators.required);
        
  
      
          phoneNumber = new FormControl("", Validators.required);
        
  
      
          streetAddress = new FormControl("", Validators.required);
        
  
      
          city = new FormControl("", Validators.required);
        
  
      
          state = new FormControl("", Validators.required);
        
  
      
          country = new FormControl("", Validators.required);
        
  
      
          zipCode = new FormControl("", Validators.required);
        
  
      
          email = new FormControl("", Validators.required);
        
  
      
          numberOfConsultations = new FormControl("", Validators.required);
        
  


  constructor(private serviceProfileInformation:ProfileInformationService, fb: FormBuilder) {
    this.myForm = fb.group({
    
        
          patientId:this.patientId,
        
    
        
          userName:this.userName,
        
    
        
          firstName:this.firstName,
        
    
        
          middleName:this.middleName,
        
    
        
          lastName:this.lastName,
        
    
        
          sex:this.sex,
        
    
        
          source:this.source,
        
    
        
          facility:this.facility,
        
    
        
          facilityId:this.facilityId,
        
    
        
          currentPrescriptions:this.currentPrescriptions,
        
    
        
          dateOfBirth:this.dateOfBirth,
        
    
        
          phoneNumber:this.phoneNumber,
        
    
        
          streetAddress:this.streetAddress,
        
    
        
          city:this.city,
        
    
        
          state:this.state,
        
    
        
          country:this.country,
        
    
        
          zipCode:this.zipCode,
        
    
        
          email:this.email,
        
    
        
          numberOfConsultations:this.numberOfConsultations
        
    
    });
  };

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(): Promise<any> {
    let tempList = [];
    return this.serviceProfileInformation.getAll()
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
      $class: "org.medichain.mvp.ProfileInformation",
      
        
          "patientId":this.patientId.value,
        
      
        
          "userName":this.userName.value,
        
      
        
          "firstName":this.firstName.value,
        
      
        
          "middleName":this.middleName.value,
        
      
        
          "lastName":this.lastName.value,
        
      
        
          "sex":this.sex.value,
        
      
        
          "source":this.source.value,
        
      
        
          "facility":this.facility.value,
        
      
        
          "facilityId":this.facilityId.value,
        
      
        
          "currentPrescriptions":this.currentPrescriptions.value,
        
      
        
          "dateOfBirth":this.dateOfBirth.value,
        
      
        
          "phoneNumber":this.phoneNumber.value,
        
      
        
          "streetAddress":this.streetAddress.value,
        
      
        
          "city":this.city.value,
        
      
        
          "state":this.state.value,
        
      
        
          "country":this.country.value,
        
      
        
          "zipCode":this.zipCode.value,
        
      
        
          "email":this.email.value,
        
      
        
          "numberOfConsultations":this.numberOfConsultations.value
        
      
    };

    this.myForm.setValue({
      
        
          "patientId":null,
        
      
        
          "userName":null,
        
      
        
          "firstName":null,
        
      
        
          "middleName":null,
        
      
        
          "lastName":null,
        
      
        
          "sex":null,
        
      
        
          "source":null,
        
      
        
          "facility":null,
        
      
        
          "facilityId":null,
        
      
        
          "currentPrescriptions":null,
        
      
        
          "dateOfBirth":null,
        
      
        
          "phoneNumber":null,
        
      
        
          "streetAddress":null,
        
      
        
          "city":null,
        
      
        
          "state":null,
        
      
        
          "country":null,
        
      
        
          "zipCode":null,
        
      
        
          "email":null,
        
      
        
          "numberOfConsultations":null
        
      
    });

    return this.serviceProfileInformation.addAsset(this.asset)
    .toPromise()
    .then(() => {
			this.errorMessage = null;
      this.myForm.setValue({
      
        
          "patientId":null,
        
      
        
          "userName":null,
        
      
        
          "firstName":null,
        
      
        
          "middleName":null,
        
      
        
          "lastName":null,
        
      
        
          "sex":null,
        
      
        
          "source":null,
        
      
        
          "facility":null,
        
      
        
          "facilityId":null,
        
      
        
          "currentPrescriptions":null,
        
      
        
          "dateOfBirth":null,
        
      
        
          "phoneNumber":null,
        
      
        
          "streetAddress":null,
        
      
        
          "city":null,
        
      
        
          "state":null,
        
      
        
          "country":null,
        
      
        
          "zipCode":null,
        
      
        
          "email":null,
        
      
        
          "numberOfConsultations":null 
        
      
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
      $class: "org.medichain.mvp.ProfileInformation",
      
        
          
        
    
        
          
            "userName":this.userName.value,
          
        
    
        
          
            "firstName":this.firstName.value,
          
        
    
        
          
            "middleName":this.middleName.value,
          
        
    
        
          
            "lastName":this.lastName.value,
          
        
    
        
          
            "sex":this.sex.value,
          
        
    
        
          
            "source":this.source.value,
          
        
    
        
          
            "facility":this.facility.value,
          
        
    
        
          
            "facilityId":this.facilityId.value,
          
        
    
        
          
            "currentPrescriptions":this.currentPrescriptions.value,
          
        
    
        
          
            "dateOfBirth":this.dateOfBirth.value,
          
        
    
        
          
            "phoneNumber":this.phoneNumber.value,
          
        
    
        
          
            "streetAddress":this.streetAddress.value,
          
        
    
        
          
            "city":this.city.value,
          
        
    
        
          
            "state":this.state.value,
          
        
    
        
          
            "country":this.country.value,
          
        
    
        
          
            "zipCode":this.zipCode.value,
          
        
    
        
          
            "email":this.email.value,
          
        
    
        
          
            "numberOfConsultations":this.numberOfConsultations.value
          
        
    
    };

    return this.serviceProfileInformation.updateAsset(form.get("patientId").value,this.asset)
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

    return this.serviceProfileInformation.deleteAsset(this.currentId)
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

    return this.serviceProfileInformation.getAsset(id)
    .toPromise()
    .then((result) => {
			this.errorMessage = null;
      let formObject = {
        
          
            "patientId":null,
          
        
          
            "userName":null,
          
        
          
            "firstName":null,
          
        
          
            "middleName":null,
          
        
          
            "lastName":null,
          
        
          
            "sex":null,
          
        
          
            "source":null,
          
        
          
            "facility":null,
          
        
          
            "facilityId":null,
          
        
          
            "currentPrescriptions":null,
          
        
          
            "dateOfBirth":null,
          
        
          
            "phoneNumber":null,
          
        
          
            "streetAddress":null,
          
        
          
            "city":null,
          
        
          
            "state":null,
          
        
          
            "country":null,
          
        
          
            "zipCode":null,
          
        
          
            "email":null,
          
        
          
            "numberOfConsultations":null 
          
        
      };



      
        if(result.patientId){
          
            formObject.patientId = result.patientId;
          
        }else{
          formObject.patientId = null;
        }
      
        if(result.userName){
          
            formObject.userName = result.userName;
          
        }else{
          formObject.userName = null;
        }
      
        if(result.firstName){
          
            formObject.firstName = result.firstName;
          
        }else{
          formObject.firstName = null;
        }
      
        if(result.middleName){
          
            formObject.middleName = result.middleName;
          
        }else{
          formObject.middleName = null;
        }
      
        if(result.lastName){
          
            formObject.lastName = result.lastName;
          
        }else{
          formObject.lastName = null;
        }
      
        if(result.sex){
          
            formObject.sex = result.sex;
          
        }else{
          formObject.sex = null;
        }
      
        if(result.source){
          
            formObject.source = result.source;
          
        }else{
          formObject.source = null;
        }
      
        if(result.facility){
          
            formObject.facility = result.facility;
          
        }else{
          formObject.facility = null;
        }
      
        if(result.facilityId){
          
            formObject.facilityId = result.facilityId;
          
        }else{
          formObject.facilityId = null;
        }
      
        if(result.currentPrescriptions){
          
            formObject.currentPrescriptions = result.currentPrescriptions;
          
        }else{
          formObject.currentPrescriptions = null;
        }
      
        if(result.dateOfBirth){
          
            formObject.dateOfBirth = result.dateOfBirth;
          
        }else{
          formObject.dateOfBirth = null;
        }
      
        if(result.phoneNumber){
          
            formObject.phoneNumber = result.phoneNumber;
          
        }else{
          formObject.phoneNumber = null;
        }
      
        if(result.streetAddress){
          
            formObject.streetAddress = result.streetAddress;
          
        }else{
          formObject.streetAddress = null;
        }
      
        if(result.city){
          
            formObject.city = result.city;
          
        }else{
          formObject.city = null;
        }
      
        if(result.state){
          
            formObject.state = result.state;
          
        }else{
          formObject.state = null;
        }
      
        if(result.country){
          
            formObject.country = result.country;
          
        }else{
          formObject.country = null;
        }
      
        if(result.zipCode){
          
            formObject.zipCode = result.zipCode;
          
        }else{
          formObject.zipCode = null;
        }
      
        if(result.email){
          
            formObject.email = result.email;
          
        }else{
          formObject.email = null;
        }
      
        if(result.numberOfConsultations){
          
            formObject.numberOfConsultations = result.numberOfConsultations;
          
        }else{
          formObject.numberOfConsultations = null;
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
        
      
        
          "userName":null,
        
      
        
          "firstName":null,
        
      
        
          "middleName":null,
        
      
        
          "lastName":null,
        
      
        
          "sex":null,
        
      
        
          "source":null,
        
      
        
          "facility":null,
        
      
        
          "facilityId":null,
        
      
        
          "currentPrescriptions":null,
        
      
        
          "dateOfBirth":null,
        
      
        
          "phoneNumber":null,
        
      
        
          "streetAddress":null,
        
      
        
          "city":null,
        
      
        
          "state":null,
        
      
        
          "country":null,
        
      
        
          "zipCode":null,
        
      
        
          "email":null,
        
      
        
          "numberOfConsultations":null 
        
      
      });
  }

}
