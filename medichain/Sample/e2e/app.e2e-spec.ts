import { AngularTestPage } from './app.po';
import { browser, element, by } from 'protractor';

describe('Starting tests for Sample', function() {
  let page: AngularTestPage;

  beforeEach(() => {
    page = new AngularTestPage();
  });

  it('website title should be Sample', () => {
    page.navigateTo('/');
    return browser.getTitle().then((result)=>{
      expect(result).toBe('Sample');
    })
  });

  it('navbar-brand should be medichain@0.0.1',() => {
    var navbarBrand = element(by.css('.navbar-brand')).getWebElement();
    expect(navbarBrand.getText()).toBe('medichain@0.0.1');
  });

  
    it('ProfileInformation component should be loadable',() => {
      page.navigateTo('/ProfileInformation');
      var assetName = browser.findElement(by.id('assetName'));
      expect(assetName.getText()).toBe('ProfileInformation');
    });

    it('ProfileInformation table should have 20 columns',() => {
      page.navigateTo('/ProfileInformation');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(20); // Addition of 1 for 'Action' column
      });
    });

  
    it('PatientMasterData component should be loadable',() => {
      page.navigateTo('/PatientMasterData');
      var assetName = browser.findElement(by.id('assetName'));
      expect(assetName.getText()).toBe('PatientMasterData');
    });

    it('PatientMasterData table should have 6 columns',() => {
      page.navigateTo('/PatientMasterData');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(6); // Addition of 1 for 'Action' column
      });
    });

  
    it('Prescription component should be loadable',() => {
      page.navigateTo('/Prescription');
      var assetName = browser.findElement(by.id('assetName'));
      expect(assetName.getText()).toBe('Prescription');
    });

    it('Prescription table should have 18 columns',() => {
      page.navigateTo('/Prescription');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(18); // Addition of 1 for 'Action' column
      });
    });

  
    it('ConsultationInformation component should be loadable',() => {
      page.navigateTo('/ConsultationInformation');
      var assetName = browser.findElement(by.id('assetName'));
      expect(assetName.getText()).toBe('ConsultationInformation');
    });

    it('ConsultationInformation table should have 8 columns',() => {
      page.navigateTo('/ConsultationInformation');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(8); // Addition of 1 for 'Action' column
      });
    });

  
    it('InsuranceData component should be loadable',() => {
      page.navigateTo('/InsuranceData');
      var assetName = browser.findElement(by.id('assetName'));
      expect(assetName.getText()).toBe('InsuranceData');
    });

    it('InsuranceData table should have 29 columns',() => {
      page.navigateTo('/InsuranceData');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(29); // Addition of 1 for 'Action' column
      });
    });

  
    it('ImmunizationRecord component should be loadable',() => {
      page.navigateTo('/ImmunizationRecord');
      var assetName = browser.findElement(by.id('assetName'));
      expect(assetName.getText()).toBe('ImmunizationRecord');
    });

    it('ImmunizationRecord table should have 4 columns',() => {
      page.navigateTo('/ImmunizationRecord');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(4); // Addition of 1 for 'Action' column
      });
    });

  

});
