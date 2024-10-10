# Shopee API Integration Web App

## Introduction

The Shopee API Integration Web App is a powerful tool designed for Shopee sellers to efficiently manage and analyze their store data. By leveraging Shopee's API, this web application provides a user-friendly interface for sellers to access critical business insights, manage product pricing, and track sales performance.

Key features include:
- Secure user authentication
- Real-time product data visualization
- Sales and pricing analysis
- Data export functionality

## Installation Instructions (on Google Cloud VM)

Follow these steps to set up and run the web app on a Google Cloud Virtual Machine (VM):

1. **Create a Google Cloud VM Instance**:
   - Go to the Google Cloud Console and navigate to Compute Engine > VM instances.
   - Click "Create Instance" and choose your preferred settings (e.g., e2-medium, Ubuntu 20.04 LTS).
   - Ensure that HTTP and HTTPS traffic is allowed in the firewall settings.

2. **Connect to Your VM**:
   - Click the "SSH" button next to your VM instance to open a browser-based SSH session.

3. **Update and Install Dependencies**:
   ```
   sudo apt update && sudo apt upgrade -y
   sudo apt install nodejs npm -y
   ```

4. **Clone the Repository**:
   ```
   git clone https://github.com/your-repo/shopee-api-integration.git
   cd shopee-api-integration
   ```

5. **Install Project Dependencies**:
   ```
   npm install
   ```

6. **Build the Project**:
   ```
   npm run build
   ```

7. **Start the Application**:
   ```
   npm start
   ```

8. **Access the Web App**:
   Open a web browser and navigate to `http://YOUR_VM_EXTERNAL_IP:3000` (replace `YOUR_VM_EXTERNAL_IP` with your VM's external IP address).

## Page Structure Overview

### Login Page
- Allows existing users to securely log in to their accounts.
- Users enter their User ID and password.
- Implements secure authentication to protect user data.

### Signup Page
- Enables new users to create an account.
- Required fields:
  - User ID
  - Password
  - Partner ID (Shopee partner ID)
  - Shop ID (Shopee shop ID)
  - Partner Key (Shopee API key)
  - Main Account ID (if applicable)
- Validates input and securely stores user information.

### Dashboard Page
- Displays comprehensive product data:
  - Product name
  - 1-year sales figures
  - Original price
  - Discounted price
  - Cost
  - Margin
- Features a line chart summarizing daily performance metrics:
  - Total sales
  - Discounted sales
  - Total cost
  - Total margin
- Includes an "Export to Excel" button for easy data export and further analysis.

## Additional Notes

1. **API Key Security**: 
   - Store your Shopee API key securely. Never expose it in client-side code.
   - Use environment variables or a secure key management system to handle API keys.

2. **IP Whitelisting**:
   - You may need to whitelist your Google Cloud VM's IP address in your Shopee partner account to allow API access.

3. **Environment Configuration**:
   - Create a `.env` file in the project root to store environment-specific variables (e.g., API endpoints, database connection strings).

4. **Regular Updates**:
   - Keep the application and its dependencies up to date to ensure security and compatibility with the Shopee API.

5. **Data Privacy**:
   - Ensure compliance with data protection regulations when handling user and sales data.

6. **Monitoring and Logging**:
   - Implement proper logging and monitoring to track application performance and troubleshoot issues.

For any additional support or questions, please contact our development team or refer to the Shopee API documentation.
