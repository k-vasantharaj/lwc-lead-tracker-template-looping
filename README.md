⚡ Lead Tracker - Lightning Web Component (LWC)
📖 Overview

This project is a Salesforce Lightning Web Component that demonstrates template looping, conditional rendering, and form validation.
It allows users to enter Lead details (Name, Source, Annual Revenue, Email), add them to a list, and display them dynamically inside a styled Lightning card.

✨ Built with Salesforce Lightning Design System (SLDS) for styling.

🎯 Features

✅ Add Leads dynamically through input fields
✅ Display all Leads in a styled list using template looping
✅ Show a fallback message when no Leads are added
✅ Form validation ensures incomplete Leads are not added
✅ Uses reactivity with the spread operator (...)
✅ Works on App Page, Home Page, or Record Page

🛠️ Technologies Used

Salesforce Lightning Web Components (LWC)

Salesforce Lightning Design System (SLDS)

Apex (optional, if extended for server-side storage)

JavaScript (ES6+)

HTML5

CSS3

⚙️ Installation

Clone this repository:

git clone -https://github.com/k-vasantharaj/lwc-lead-tracker-template-looping


Deploy to your Salesforce Org using SFDX or VS Code.

Open Lightning App Builder → Add the component to:

🏠 Home Page

📄 Record Page

📱 App Page

▶️ How It Works

🔹 Step 1: Enter Lead Details

Fill Lead Name, Lead Source, Annual Revenue, and Email in input fields.

Click Add.

🔹 Step 2: Validation

If any field is missing → A validation message appears and the Lead is not added.

🔹 Step 3: Manage Leads

Clear → Resets input fields.

Display → Shows all added Leads.

🔹 Step 4: View Leads

If Leads are available → They appear in a styled card 📦.

If no Leads are added → A fallback message appears ❌.
