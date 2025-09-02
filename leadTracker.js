import { LightningElement } from 'lwc';

export default class LeadTracker extends LightningElement {
    newLeadName;
    newLeadSource;
    newAnnualRevenue;
    newEmail;
    leads = [];
    showLeads = false;

    handleLeadChange(event) {
        this.newLeadName = event.target.value;
    }
    handleSourceChange(event) {
        this.newLeadSource = event.target.value;
    }
    handleARChange(event) {
        this.newAnnualRevenue = event.target.value;
    }
    handleEmailChange(event) {
        this.newEmail = event.target.value;
    }

    handleAddClick() {
        this.showLeads = false;
        if (this.newLeadName && this.newLeadSource && this.newAnnualRevenue && this.newEmail) {
            this.leads = [
                ...this.leads,
                {
                    LeadName: this.newLeadName,
                    LeadSource: this.newLeadSource,
                    AnnualRevenue: this.newAnnualRevenue,
                    Email: this.newEmail
                }
            ];
        } else {
            alert('⚠️ Please fill all the details');
        }
    }

    handleClearClick() {
        this.newLeadName = '';
        this.newLeadSource = '';
        this.newAnnualRevenue = '';
        this.newEmail = '';
        this.showLeads = false;
    }

    handleDisplayClick() {
        this.showLeads = true;
    }

    get isArray() {
        return this.leads.length > 0;
    }
}
