import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { InsuranceDataService } from './InsuranceData.service';
import 'rxjs/add/operator/toPromise';
@Component({
	selector: 'app-InsuranceData',
	templateUrl: './InsuranceData.component.html',
	styleUrls: ['./InsuranceData.component.css'],
  providers: [InsuranceDataService]
})
export class InsuranceDataComponent implements OnInit {

  myForm: FormGroup;

  private allAssets;
  private asset;
  private currentId;
	private errorMessage;

  
      
          patientId = new FormControl("", Validators.required);
        
  
      
          typeOfInsurance = new FormControl("", Validators.required);
        
  
      
          provider = new FormControl("", Validators.required);
        
  
      
          plan_name = new FormControl("", Validators.required);
        
  
      
          policy_number = new FormControl("", Validators.required);
        
  
      
          group_number = new FormControl("", Validators.required);
        
  
      
          subscriber_lname = new FormControl("", Validators.required);
        
  
      
          subscriber_mname = new FormControl("", Validators.required);
        
  
      
          subscriber_fname = new FormControl("", Validators.required);
        
  
      
          subscriber_relationship = new FormControl("", Validators.required);
        
  
      
          subscriber_ss = new FormControl("", Validators.required);
        
  
      
          subscriber_DOB = new FormControl("", Validators.required);
        
  
      
          subscriber_street = new FormControl("", Validators.required);
        
  
      
          subscriber_postal_code = new FormControl("", Validators.required);
        
  
      
          subscriber_city = new FormControl("", Validators.required);
        
  
      
          subscriber_state = new FormControl("", Validators.required);
        
  
      
          subscriber_country = new FormControl("", Validators.required);
        
  
      
          subscriber_phone = new FormControl("", Validators.required);
        
  
      
          subscriber_employer = new FormControl("", Validators.required);
        
  
      
          subscriber_employer_street = new FormControl("", Validators.required);
        
  
      
          subscriber_employer_postal_code = new FormControl("", Validators.required);
        
  
      
          subscriber_employer_state = new FormControl("", Validators.required);
        
  
      
          subscriber_employer_country = new FormControl("", Validators.required);
        
  
      
          subscriber_employer_city = new FormControl("", Validators.required);
        
  
      
          copay = new FormControl("", Validators.required);
        
  
      
          date = new FormControl("", Validators.required);
        
  
      
          subscriber_sex = new FormControl("", Validators.required);
        
  
      
          accept_assignment = new FormControl("", Validators.required);
        
  


  constructor(private serviceInsuranceData:InsuranceDataService, fb: FormBuilder) {
    this.myForm = fb.group({
    
        
          patientId:this.patientId,
        
    
        
          typeOfInsurance:this.typeOfInsurance,
        
    
        
          provider:this.provider,
        
    
        
          plan_name:this.plan_name,
        
    
        
          policy_number:this.policy_number,
        
    
        
          group_number:this.group_number,
        
    
        
          subscriber_lname:this.subscriber_lname,
        
    
        
          subscriber_mname:this.subscriber_mname,
        
    
        
          subscriber_fname:this.subscriber_fname,
        
    
        
          subscriber_relationship:this.subscriber_relationship,
        
    
        
          subscriber_ss:this.subscriber_ss,
        
    
        
          subscriber_DOB:this.subscriber_DOB,
        
    
        
          subscriber_street:this.subscriber_street,
        
    
        
          subscriber_postal_code:this.subscriber_postal_code,
        
    
        
          subscriber_city:this.subscriber_city,
        
    
        
          subscriber_state:this.subscriber_state,
        
    
        
          subscriber_country:this.subscriber_country,
        
    
        
          subscriber_phone:this.subscriber_phone,
        
    
        
          subscriber_employer:this.subscriber_employer,
        
    
        
          subscriber_employer_street:this.subscriber_employer_street,
        
    
        
          subscriber_employer_postal_code:this.subscriber_employer_postal_code,
        
    
        
          subscriber_employer_state:this.subscriber_employer_state,
        
    
        
          subscriber_employer_country:this.subscriber_employer_country,
        
    
        
          subscriber_employer_city:this.subscriber_employer_city,
        
    
        
          copay:this.copay,
        
    
        
          date:this.date,
        
    
        
          subscriber_sex:this.subscriber_sex,
        
    
        
          accept_assignment:this.accept_assignment
        
    
    });
  };

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(): Promise<any> {
    let tempList = [];
    return this.serviceInsuranceData.getAll()
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
      $class: "org.medichain.mvp.InsuranceData",
      
        
          "patientId":this.patientId.value,
        
      
        
          "typeOfInsurance":this.typeOfInsurance.value,
        
      
        
          "provider":this.provider.value,
        
      
        
          "plan_name":this.plan_name.value,
        
      
        
          "policy_number":this.policy_number.value,
        
      
        
          "group_number":this.group_number.value,
        
      
        
          "subscriber_lname":this.subscriber_lname.value,
        
      
        
          "subscriber_mname":this.subscriber_mname.value,
        
      
        
          "subscriber_fname":this.subscriber_fname.value,
        
      
        
          "subscriber_relationship":this.subscriber_relationship.value,
        
      
        
          "subscriber_ss":this.subscriber_ss.value,
        
      
        
          "subscriber_DOB":this.subscriber_DOB.value,
        
      
        
          "subscriber_street":this.subscriber_street.value,
        
      
        
          "subscriber_postal_code":this.subscriber_postal_code.value,
        
      
        
          "subscriber_city":this.subscriber_city.value,
        
      
        
          "subscriber_state":this.subscriber_state.value,
        
      
        
          "subscriber_country":this.subscriber_country.value,
        
      
        
          "subscriber_phone":this.subscriber_phone.value,
        
      
        
          "subscriber_employer":this.subscriber_employer.value,
        
      
        
          "subscriber_employer_street":this.subscriber_employer_street.value,
        
      
        
          "subscriber_employer_postal_code":this.subscriber_employer_postal_code.value,
        
      
        
          "subscriber_employer_state":this.subscriber_employer_state.value,
        
      
        
          "subscriber_employer_country":this.subscriber_employer_country.value,
        
      
        
          "subscriber_employer_city":this.subscriber_employer_city.value,
        
      
        
          "copay":this.copay.value,
        
      
        
          "date":this.date.value,
        
      
        
          "subscriber_sex":this.subscriber_sex.value,
        
      
        
          "accept_assignment":this.accept_assignment.value
        
      
    };

    this.myForm.setValue({
      
        
          "patientId":null,
        
      
        
          "typeOfInsurance":null,
        
      
        
          "provider":null,
        
      
        
          "plan_name":null,
        
      
        
          "policy_number":null,
        
      
        
          "group_number":null,
        
      
        
          "subscriber_lname":null,
        
      
        
          "subscriber_mname":null,
        
      
        
          "subscriber_fname":null,
        
      
        
          "subscriber_relationship":null,
        
      
        
          "subscriber_ss":null,
        
      
        
          "subscriber_DOB":null,
        
      
        
          "subscriber_street":null,
        
      
        
          "subscriber_postal_code":null,
        
      
        
          "subscriber_city":null,
        
      
        
          "subscriber_state":null,
        
      
        
          "subscriber_country":null,
        
      
        
          "subscriber_phone":null,
        
      
        
          "subscriber_employer":null,
        
      
        
          "subscriber_employer_street":null,
        
      
        
          "subscriber_employer_postal_code":null,
        
      
        
          "subscriber_employer_state":null,
        
      
        
          "subscriber_employer_country":null,
        
      
        
          "subscriber_employer_city":null,
        
      
        
          "copay":null,
        
      
        
          "date":null,
        
      
        
          "subscriber_sex":null,
        
      
        
          "accept_assignment":null
        
      
    });

    return this.serviceInsuranceData.addAsset(this.asset)
    .toPromise()
    .then(() => {
			this.errorMessage = null;
      this.myForm.setValue({
      
        
          "patientId":null,
        
      
        
          "typeOfInsurance":null,
        
      
        
          "provider":null,
        
      
        
          "plan_name":null,
        
      
        
          "policy_number":null,
        
      
        
          "group_number":null,
        
      
        
          "subscriber_lname":null,
        
      
        
          "subscriber_mname":null,
        
      
        
          "subscriber_fname":null,
        
      
        
          "subscriber_relationship":null,
        
      
        
          "subscriber_ss":null,
        
      
        
          "subscriber_DOB":null,
        
      
        
          "subscriber_street":null,
        
      
        
          "subscriber_postal_code":null,
        
      
        
          "subscriber_city":null,
        
      
        
          "subscriber_state":null,
        
      
        
          "subscriber_country":null,
        
      
        
          "subscriber_phone":null,
        
      
        
          "subscriber_employer":null,
        
      
        
          "subscriber_employer_street":null,
        
      
        
          "subscriber_employer_postal_code":null,
        
      
        
          "subscriber_employer_state":null,
        
      
        
          "subscriber_employer_country":null,
        
      
        
          "subscriber_employer_city":null,
        
      
        
          "copay":null,
        
      
        
          "date":null,
        
      
        
          "subscriber_sex":null,
        
      
        
          "accept_assignment":null 
        
      
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
      $class: "org.medichain.mvp.InsuranceData",
      
        
          
        
    
        
          
            "typeOfInsurance":this.typeOfInsurance.value,
          
        
    
        
          
            "provider":this.provider.value,
          
        
    
        
          
            "plan_name":this.plan_name.value,
          
        
    
        
          
            "policy_number":this.policy_number.value,
          
        
    
        
          
            "group_number":this.group_number.value,
          
        
    
        
          
            "subscriber_lname":this.subscriber_lname.value,
          
        
    
        
          
            "subscriber_mname":this.subscriber_mname.value,
          
        
    
        
          
            "subscriber_fname":this.subscriber_fname.value,
          
        
    
        
          
            "subscriber_relationship":this.subscriber_relationship.value,
          
        
    
        
          
            "subscriber_ss":this.subscriber_ss.value,
          
        
    
        
          
            "subscriber_DOB":this.subscriber_DOB.value,
          
        
    
        
          
            "subscriber_street":this.subscriber_street.value,
          
        
    
        
          
            "subscriber_postal_code":this.subscriber_postal_code.value,
          
        
    
        
          
            "subscriber_city":this.subscriber_city.value,
          
        
    
        
          
            "subscriber_state":this.subscriber_state.value,
          
        
    
        
          
            "subscriber_country":this.subscriber_country.value,
          
        
    
        
          
            "subscriber_phone":this.subscriber_phone.value,
          
        
    
        
          
            "subscriber_employer":this.subscriber_employer.value,
          
        
    
        
          
            "subscriber_employer_street":this.subscriber_employer_street.value,
          
        
    
        
          
            "subscriber_employer_postal_code":this.subscriber_employer_postal_code.value,
          
        
    
        
          
            "subscriber_employer_state":this.subscriber_employer_state.value,
          
        
    
        
          
            "subscriber_employer_country":this.subscriber_employer_country.value,
          
        
    
        
          
            "subscriber_employer_city":this.subscriber_employer_city.value,
          
        
    
        
          
            "copay":this.copay.value,
          
        
    
        
          
            "date":this.date.value,
          
        
    
        
          
            "subscriber_sex":this.subscriber_sex.value,
          
        
    
        
          
            "accept_assignment":this.accept_assignment.value
          
        
    
    };

    return this.serviceInsuranceData.updateAsset(form.get("patientId").value,this.asset)
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

    return this.serviceInsuranceData.deleteAsset(this.currentId)
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

    return this.serviceInsuranceData.getAsset(id)
    .toPromise()
    .then((result) => {
			this.errorMessage = null;
      let formObject = {
        
          
            "patientId":null,
          
        
          
            "typeOfInsurance":null,
          
        
          
            "provider":null,
          
        
          
            "plan_name":null,
          
        
          
            "policy_number":null,
          
        
          
            "group_number":null,
          
        
          
            "subscriber_lname":null,
          
        
          
            "subscriber_mname":null,
          
        
          
            "subscriber_fname":null,
          
        
          
            "subscriber_relationship":null,
          
        
          
            "subscriber_ss":null,
          
        
          
            "subscriber_DOB":null,
          
        
          
            "subscriber_street":null,
          
        
          
            "subscriber_postal_code":null,
          
        
          
            "subscriber_city":null,
          
        
          
            "subscriber_state":null,
          
        
          
            "subscriber_country":null,
          
        
          
            "subscriber_phone":null,
          
        
          
            "subscriber_employer":null,
          
        
          
            "subscriber_employer_street":null,
          
        
          
            "subscriber_employer_postal_code":null,
          
        
          
            "subscriber_employer_state":null,
          
        
          
            "subscriber_employer_country":null,
          
        
          
            "subscriber_employer_city":null,
          
        
          
            "copay":null,
          
        
          
            "date":null,
          
        
          
            "subscriber_sex":null,
          
        
          
            "accept_assignment":null 
          
        
      };



      
        if(result.patientId){
          
            formObject.patientId = result.patientId;
          
        }else{
          formObject.patientId = null;
        }
      
        if(result.typeOfInsurance){
          
            formObject.typeOfInsurance = result.typeOfInsurance;
          
        }else{
          formObject.typeOfInsurance = null;
        }
      
        if(result.provider){
          
            formObject.provider = result.provider;
          
        }else{
          formObject.provider = null;
        }
      
        if(result.plan_name){
          
            formObject.plan_name = result.plan_name;
          
        }else{
          formObject.plan_name = null;
        }
      
        if(result.policy_number){
          
            formObject.policy_number = result.policy_number;
          
        }else{
          formObject.policy_number = null;
        }
      
        if(result.group_number){
          
            formObject.group_number = result.group_number;
          
        }else{
          formObject.group_number = null;
        }
      
        if(result.subscriber_lname){
          
            formObject.subscriber_lname = result.subscriber_lname;
          
        }else{
          formObject.subscriber_lname = null;
        }
      
        if(result.subscriber_mname){
          
            formObject.subscriber_mname = result.subscriber_mname;
          
        }else{
          formObject.subscriber_mname = null;
        }
      
        if(result.subscriber_fname){
          
            formObject.subscriber_fname = result.subscriber_fname;
          
        }else{
          formObject.subscriber_fname = null;
        }
      
        if(result.subscriber_relationship){
          
            formObject.subscriber_relationship = result.subscriber_relationship;
          
        }else{
          formObject.subscriber_relationship = null;
        }
      
        if(result.subscriber_ss){
          
            formObject.subscriber_ss = result.subscriber_ss;
          
        }else{
          formObject.subscriber_ss = null;
        }
      
        if(result.subscriber_DOB){
          
            formObject.subscriber_DOB = result.subscriber_DOB;
          
        }else{
          formObject.subscriber_DOB = null;
        }
      
        if(result.subscriber_street){
          
            formObject.subscriber_street = result.subscriber_street;
          
        }else{
          formObject.subscriber_street = null;
        }
      
        if(result.subscriber_postal_code){
          
            formObject.subscriber_postal_code = result.subscriber_postal_code;
          
        }else{
          formObject.subscriber_postal_code = null;
        }
      
        if(result.subscriber_city){
          
            formObject.subscriber_city = result.subscriber_city;
          
        }else{
          formObject.subscriber_city = null;
        }
      
        if(result.subscriber_state){
          
            formObject.subscriber_state = result.subscriber_state;
          
        }else{
          formObject.subscriber_state = null;
        }
      
        if(result.subscriber_country){
          
            formObject.subscriber_country = result.subscriber_country;
          
        }else{
          formObject.subscriber_country = null;
        }
      
        if(result.subscriber_phone){
          
            formObject.subscriber_phone = result.subscriber_phone;
          
        }else{
          formObject.subscriber_phone = null;
        }
      
        if(result.subscriber_employer){
          
            formObject.subscriber_employer = result.subscriber_employer;
          
        }else{
          formObject.subscriber_employer = null;
        }
      
        if(result.subscriber_employer_street){
          
            formObject.subscriber_employer_street = result.subscriber_employer_street;
          
        }else{
          formObject.subscriber_employer_street = null;
        }
      
        if(result.subscriber_employer_postal_code){
          
            formObject.subscriber_employer_postal_code = result.subscriber_employer_postal_code;
          
        }else{
          formObject.subscriber_employer_postal_code = null;
        }
      
        if(result.subscriber_employer_state){
          
            formObject.subscriber_employer_state = result.subscriber_employer_state;
          
        }else{
          formObject.subscriber_employer_state = null;
        }
      
        if(result.subscriber_employer_country){
          
            formObject.subscriber_employer_country = result.subscriber_employer_country;
          
        }else{
          formObject.subscriber_employer_country = null;
        }
      
        if(result.subscriber_employer_city){
          
            formObject.subscriber_employer_city = result.subscriber_employer_city;
          
        }else{
          formObject.subscriber_employer_city = null;
        }
      
        if(result.copay){
          
            formObject.copay = result.copay;
          
        }else{
          formObject.copay = null;
        }
      
        if(result.date){
          
            formObject.date = result.date;
          
        }else{
          formObject.date = null;
        }
      
        if(result.subscriber_sex){
          
            formObject.subscriber_sex = result.subscriber_sex;
          
        }else{
          formObject.subscriber_sex = null;
        }
      
        if(result.accept_assignment){
          
            formObject.accept_assignment = result.accept_assignment;
          
        }else{
          formObject.accept_assignment = null;
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
        
      
        
          "typeOfInsurance":null,
        
      
        
          "provider":null,
        
      
        
          "plan_name":null,
        
      
        
          "policy_number":null,
        
      
        
          "group_number":null,
        
      
        
          "subscriber_lname":null,
        
      
        
          "subscriber_mname":null,
        
      
        
          "subscriber_fname":null,
        
      
        
          "subscriber_relationship":null,
        
      
        
          "subscriber_ss":null,
        
      
        
          "subscriber_DOB":null,
        
      
        
          "subscriber_street":null,
        
      
        
          "subscriber_postal_code":null,
        
      
        
          "subscriber_city":null,
        
      
        
          "subscriber_state":null,
        
      
        
          "subscriber_country":null,
        
      
        
          "subscriber_phone":null,
        
      
        
          "subscriber_employer":null,
        
      
        
          "subscriber_employer_street":null,
        
      
        
          "subscriber_employer_postal_code":null,
        
      
        
          "subscriber_employer_state":null,
        
      
        
          "subscriber_employer_country":null,
        
      
        
          "subscriber_employer_city":null,
        
      
        
          "copay":null,
        
      
        
          "date":null,
        
      
        
          "subscriber_sex":null,
        
      
        
          "accept_assignment":null 
        
      
      });
  }

}
