import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ImmunizationRecordService } from './ImmunizationRecord.service';
import 'rxjs/add/operator/toPromise';
@Component({
	selector: 'app-ImmunizationRecord',
	templateUrl: './ImmunizationRecord.component.html',
	styleUrls: ['./ImmunizationRecord.component.css'],
  providers: [ImmunizationRecordService]
})
export class ImmunizationRecordComponent implements OnInit {

  myForm: FormGroup;

  private allAssets;
  private asset;
  private currentId;
	private errorMessage;

  
      
          immunizationId = new FormControl("", Validators.required);
        
  
      
          subTypeOfImmunization = new FormControl("", Validators.required);
        
  
      
          dateOfImmunization = new FormControl("", Validators.required);
        
  


  constructor(private serviceImmunizationRecord:ImmunizationRecordService, fb: FormBuilder) {
    this.myForm = fb.group({
    
        
          immunizationId:this.immunizationId,
        
    
        
          subTypeOfImmunization:this.subTypeOfImmunization,
        
    
        
          dateOfImmunization:this.dateOfImmunization
        
    
    });
  };

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(): Promise<any> {
    let tempList = [];
    return this.serviceImmunizationRecord.getAll()
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
      $class: "org.medichain.mvp.ImmunizationRecord",
      
        
          "immunizationId":this.immunizationId.value,
        
      
        
          "subTypeOfImmunization":this.subTypeOfImmunization.value,
        
      
        
          "dateOfImmunization":this.dateOfImmunization.value
        
      
    };

    this.myForm.setValue({
      
        
          "immunizationId":null,
        
      
        
          "subTypeOfImmunization":null,
        
      
        
          "dateOfImmunization":null
        
      
    });

    return this.serviceImmunizationRecord.addAsset(this.asset)
    .toPromise()
    .then(() => {
			this.errorMessage = null;
      this.myForm.setValue({
      
        
          "immunizationId":null,
        
      
        
          "subTypeOfImmunization":null,
        
      
        
          "dateOfImmunization":null 
        
      
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
      $class: "org.medichain.mvp.ImmunizationRecord",
      
        
          
        
    
        
          
            "subTypeOfImmunization":this.subTypeOfImmunization.value,
          
        
    
        
          
            "dateOfImmunization":this.dateOfImmunization.value
          
        
    
    };

    return this.serviceImmunizationRecord.updateAsset(form.get("immunizationId").value,this.asset)
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

    return this.serviceImmunizationRecord.deleteAsset(this.currentId)
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

    return this.serviceImmunizationRecord.getAsset(id)
    .toPromise()
    .then((result) => {
			this.errorMessage = null;
      let formObject = {
        
          
            "immunizationId":null,
          
        
          
            "subTypeOfImmunization":null,
          
        
          
            "dateOfImmunization":null 
          
        
      };



      
        if(result.immunizationId){
          
            formObject.immunizationId = result.immunizationId;
          
        }else{
          formObject.immunizationId = null;
        }
      
        if(result.subTypeOfImmunization){
          
            formObject.subTypeOfImmunization = result.subTypeOfImmunization;
          
        }else{
          formObject.subTypeOfImmunization = null;
        }
      
        if(result.dateOfImmunization){
          
            formObject.dateOfImmunization = result.dateOfImmunization;
          
        }else{
          formObject.dateOfImmunization = null;
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
      
        
          "immunizationId":null,
        
      
        
          "subTypeOfImmunization":null,
        
      
        
          "dateOfImmunization":null 
        
      
      });
  }

}
