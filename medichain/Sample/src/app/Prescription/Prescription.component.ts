import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { PrescriptionService } from './Prescription.service';
import 'rxjs/add/operator/toPromise';
@Component({
	selector: 'app-Prescription',
	templateUrl: './Prescription.component.html',
	styleUrls: ['./Prescription.component.css'],
  providers: [PrescriptionService]
})
export class PrescriptionComponent implements OnInit {

  myForm: FormGroup;

  private allAssets;
  private asset;
  private currentId;
	private errorMessage;

  
      
          prescriptionId = new FormControl("", Validators.required);
        
  
      
          patientId = new FormControl("", Validators.required);
        
  
      
          pharmacyId = new FormControl("", Validators.required);
        
  
      
          dateAdded = new FormControl("", Validators.required);
        
  
      
          dateModified = new FormControl("", Validators.required);
        
  
      
          providerId = new FormControl("", Validators.required);
        
  
      
          startDate = new FormControl("", Validators.required);
        
  
      
          drug = new FormControl("", Validators.required);
        
  
      
          dosage = new FormControl("", Validators.required);
        
  
      
          quantity = new FormControl("", Validators.required);
        
  
      
          size = new FormControl("", Validators.required);
        
  
      
          unit = new FormControl("", Validators.required);
        
  
      
          perRefil = new FormControl("", Validators.required);
        
  
      
          filledDate = new FormControl("", Validators.required);
        
  
      
          medication = new FormControl("", Validators.required);
        
  
      
          note = new FormControl("", Validators.required);
        
  
      
          active = new FormControl("", Validators.required);
        
  


  constructor(private servicePrescription:PrescriptionService, fb: FormBuilder) {
    this.myForm = fb.group({
    
        
          prescriptionId:this.prescriptionId,
        
    
        
          patientId:this.patientId,
        
    
        
          pharmacyId:this.pharmacyId,
        
    
        
          dateAdded:this.dateAdded,
        
    
        
          dateModified:this.dateModified,
        
    
        
          providerId:this.providerId,
        
    
        
          startDate:this.startDate,
        
    
        
          drug:this.drug,
        
    
        
          dosage:this.dosage,
        
    
        
          quantity:this.quantity,
        
    
        
          size:this.size,
        
    
        
          unit:this.unit,
        
    
        
          perRefil:this.perRefil,
        
    
        
          filledDate:this.filledDate,
        
    
        
          medication:this.medication,
        
    
        
          note:this.note,
        
    
        
          active:this.active
        
    
    });
  };

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(): Promise<any> {
    let tempList = [];
    return this.servicePrescription.getAll()
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
      $class: "org.medichain.mvp.Prescription",
      
        
          "prescriptionId":this.prescriptionId.value,
        
      
        
          "patientId":this.patientId.value,
        
      
        
          "pharmacyId":this.pharmacyId.value,
        
      
        
          "dateAdded":this.dateAdded.value,
        
      
        
          "dateModified":this.dateModified.value,
        
      
        
          "providerId":this.providerId.value,
        
      
        
          "startDate":this.startDate.value,
        
      
        
          "drug":this.drug.value,
        
      
        
          "dosage":this.dosage.value,
        
      
        
          "quantity":this.quantity.value,
        
      
        
          "size":this.size.value,
        
      
        
          "unit":this.unit.value,
        
      
        
          "perRefil":this.perRefil.value,
        
      
        
          "filledDate":this.filledDate.value,
        
      
        
          "medication":this.medication.value,
        
      
        
          "note":this.note.value,
        
      
        
          "active":this.active.value
        
      
    };

    this.myForm.setValue({
      
        
          "prescriptionId":null,
        
      
        
          "patientId":null,
        
      
        
          "pharmacyId":null,
        
      
        
          "dateAdded":null,
        
      
        
          "dateModified":null,
        
      
        
          "providerId":null,
        
      
        
          "startDate":null,
        
      
        
          "drug":null,
        
      
        
          "dosage":null,
        
      
        
          "quantity":null,
        
      
        
          "size":null,
        
      
        
          "unit":null,
        
      
        
          "perRefil":null,
        
      
        
          "filledDate":null,
        
      
        
          "medication":null,
        
      
        
          "note":null,
        
      
        
          "active":null
        
      
    });

    return this.servicePrescription.addAsset(this.asset)
    .toPromise()
    .then(() => {
			this.errorMessage = null;
      this.myForm.setValue({
      
        
          "prescriptionId":null,
        
      
        
          "patientId":null,
        
      
        
          "pharmacyId":null,
        
      
        
          "dateAdded":null,
        
      
        
          "dateModified":null,
        
      
        
          "providerId":null,
        
      
        
          "startDate":null,
        
      
        
          "drug":null,
        
      
        
          "dosage":null,
        
      
        
          "quantity":null,
        
      
        
          "size":null,
        
      
        
          "unit":null,
        
      
        
          "perRefil":null,
        
      
        
          "filledDate":null,
        
      
        
          "medication":null,
        
      
        
          "note":null,
        
      
        
          "active":null 
        
      
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
      $class: "org.medichain.mvp.Prescription",
      
        
          
        
    
        
          
            "patientId":this.patientId.value,
          
        
    
        
          
            "pharmacyId":this.pharmacyId.value,
          
        
    
        
          
            "dateAdded":this.dateAdded.value,
          
        
    
        
          
            "dateModified":this.dateModified.value,
          
        
    
        
          
            "providerId":this.providerId.value,
          
        
    
        
          
            "startDate":this.startDate.value,
          
        
    
        
          
            "drug":this.drug.value,
          
        
    
        
          
            "dosage":this.dosage.value,
          
        
    
        
          
            "quantity":this.quantity.value,
          
        
    
        
          
            "size":this.size.value,
          
        
    
        
          
            "unit":this.unit.value,
          
        
    
        
          
            "perRefil":this.perRefil.value,
          
        
    
        
          
            "filledDate":this.filledDate.value,
          
        
    
        
          
            "medication":this.medication.value,
          
        
    
        
          
            "note":this.note.value,
          
        
    
        
          
            "active":this.active.value
          
        
    
    };

    return this.servicePrescription.updateAsset(form.get("prescriptionId").value,this.asset)
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

    return this.servicePrescription.deleteAsset(this.currentId)
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

    return this.servicePrescription.getAsset(id)
    .toPromise()
    .then((result) => {
			this.errorMessage = null;
      let formObject = {
        
          
            "prescriptionId":null,
          
        
          
            "patientId":null,
          
        
          
            "pharmacyId":null,
          
        
          
            "dateAdded":null,
          
        
          
            "dateModified":null,
          
        
          
            "providerId":null,
          
        
          
            "startDate":null,
          
        
          
            "drug":null,
          
        
          
            "dosage":null,
          
        
          
            "quantity":null,
          
        
          
            "size":null,
          
        
          
            "unit":null,
          
        
          
            "perRefil":null,
          
        
          
            "filledDate":null,
          
        
          
            "medication":null,
          
        
          
            "note":null,
          
        
          
            "active":null 
          
        
      };



      
        if(result.prescriptionId){
          
            formObject.prescriptionId = result.prescriptionId;
          
        }else{
          formObject.prescriptionId = null;
        }
      
        if(result.patientId){
          
            formObject.patientId = result.patientId;
          
        }else{
          formObject.patientId = null;
        }
      
        if(result.pharmacyId){
          
            formObject.pharmacyId = result.pharmacyId;
          
        }else{
          formObject.pharmacyId = null;
        }
      
        if(result.dateAdded){
          
            formObject.dateAdded = result.dateAdded;
          
        }else{
          formObject.dateAdded = null;
        }
      
        if(result.dateModified){
          
            formObject.dateModified = result.dateModified;
          
        }else{
          formObject.dateModified = null;
        }
      
        if(result.providerId){
          
            formObject.providerId = result.providerId;
          
        }else{
          formObject.providerId = null;
        }
      
        if(result.startDate){
          
            formObject.startDate = result.startDate;
          
        }else{
          formObject.startDate = null;
        }
      
        if(result.drug){
          
            formObject.drug = result.drug;
          
        }else{
          formObject.drug = null;
        }
      
        if(result.dosage){
          
            formObject.dosage = result.dosage;
          
        }else{
          formObject.dosage = null;
        }
      
        if(result.quantity){
          
            formObject.quantity = result.quantity;
          
        }else{
          formObject.quantity = null;
        }
      
        if(result.size){
          
            formObject.size = result.size;
          
        }else{
          formObject.size = null;
        }
      
        if(result.unit){
          
            formObject.unit = result.unit;
          
        }else{
          formObject.unit = null;
        }
      
        if(result.perRefil){
          
            formObject.perRefil = result.perRefil;
          
        }else{
          formObject.perRefil = null;
        }
      
        if(result.filledDate){
          
            formObject.filledDate = result.filledDate;
          
        }else{
          formObject.filledDate = null;
        }
      
        if(result.medication){
          
            formObject.medication = result.medication;
          
        }else{
          formObject.medication = null;
        }
      
        if(result.note){
          
            formObject.note = result.note;
          
        }else{
          formObject.note = null;
        }
      
        if(result.active){
          
            formObject.active = result.active;
          
        }else{
          formObject.active = null;
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
      
        
          "prescriptionId":null,
        
      
        
          "patientId":null,
        
      
        
          "pharmacyId":null,
        
      
        
          "dateAdded":null,
        
      
        
          "dateModified":null,
        
      
        
          "providerId":null,
        
      
        
          "startDate":null,
        
      
        
          "drug":null,
        
      
        
          "dosage":null,
        
      
        
          "quantity":null,
        
      
        
          "size":null,
        
      
        
          "unit":null,
        
      
        
          "perRefil":null,
        
      
        
          "filledDate":null,
        
      
        
          "medication":null,
        
      
        
          "note":null,
        
      
        
          "active":null 
        
      
      });
  }

}
