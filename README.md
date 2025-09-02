⚡️ LWC Lead Tracker – Template Looping
📖 Overview

This project is a Salesforce Lightning Web Component (LWC) that demonstrates:
✨ Template Looping
✨ Conditional Rendering
✨ Form Validation

It allows users to enter Lead Details (Name, Source, Annual Revenue, Email), add them to a list, and display them dynamically inside a styled Lightning Card.

🎯 Features

✅ Add Leads dynamically through input fields

✅ Clear Inputs with a button click

✅ Display Leads in a styled list using template looping

✅ Validation → Incomplete Leads are not added

✅ Fallback Message → “No Leads Added Yet” if no leads exist

✅ Works on App Page, Home Page, and Record Page

🛠️ Technologies Used

⚡ Lightning Web Components (LWC)

🎨 Salesforce Lightning Design System (SLDS)

📜 JavaScript (ES6+)

🏗️ HTML5

🎭 CSS3

☁️ Salesforce Platform

⚙️ Installation

📂 Clone this repository:

git clone (https://github.com/k-vasantharaj/lwc-lead-tracker-template-looping)


🚀 Deploy to your Salesforce Org using SFDX or VS Code.

🛠️ Open Lightning App Builder → Add the component to:

🏠 Home Page

📄 Record Page

📱 App Page

▶️ How It Works

🔹 Step 1: Enter Lead Details
Type Lead Name, Lead Source, Annual Revenue, Email in the input boxes.

🔹 Step 2: Validate & Add
Click Add → Only if all fields are filled, the Lead gets added.
If fields are missing → ❌ Validation message appears.

🔹 Step 3: Clear
Click Clear → All input fields reset.
🔹 Step 4: Display Leads
Click Display → Shows Leads in a styled card.
If no Leads → 📝 “No Leads Added Yet” message.

🚀 Example
Input:
Lead Name: John Doe
Lead Source: Web
Annual Revenue: 500000
Email: john@example.com

Output:
LeadName - John Doe
LeadSource - Web
AnnualRevenue - 500000
Email - john@example.com

📸 Screenshots

<img width="320" height="246" alt="1" src="https://github.com/user-attachments/assets/609efdb8-fae6-42d8-ae20-df0ae3d98aac" />

<img width="322" height="262" alt="2" src="https://github.com/user-attachments/assets/541aba54-b603-4a6d-ad71-b85c248af30b" />
<img width="320" height="249" alt="3" src="https://github.com/user-attachments/assets/84b61faf-449c-4293-bd7a-8abb693c9092" />
<img width="319" height="311" alt="5" src="https://github.com/user-attachments/assets/532ba08a-e6ec-40c6-9859-c6052eb3daa5" />
<img width="320" height="249" alt="6" src="https://github.com/user-attachments/assets/62c35a91-8c61-4a79-89ec-325e7799ec93" />
<img width="317" height="269" alt="7" src="https://github.com/user-attachments/assets/1d240304-a259-4864-9ce7-6f75d162f73b" />
