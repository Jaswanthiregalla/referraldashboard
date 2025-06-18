# Referral Dashboard

A React-based referral dashboard with reusable component architecture, routing with React Router, mock data handling, and responsive layouts using CSS Modules.

## Functionalities

### 1. **Routing with React Router**
- `/login`: Login screen.
- `/dashboard`: Referral dashboard after successful login.

### 2. **Login Authentication (Hardcoded)**
- Simple client-side validation using `useState`.
- Only allows:
  - **Username**: admin
  - **Password**: admin@2021
- Redirects to `/dashboard` after successful login.

### 3. **Component-Based Design**
- Clean separation of reusable UI logic.
- Makes future scaling and reuse easier.

### 4. **Referral Table Features**
- **Mock Data Source**: The data is stored in `referralData.json`.
- **Pagination Logic**: Displays 10 entries per page. Calculates total number of pages and slices the data accordingly.
- **Filtering Logic**: Dynamic filtering by name. Filters the rows to show only matching records based on the search term.
- **Responsive Layout**: Layout adjusts on smaller screens for better usability.

### 5. **Referral Overview and Link**
- Allows users to share their unique referral link and referral code.
- **Prefilled Input Fields**: Referral URL (`https://gobusiness.com/?referral=ABCXYZ`) and referral code (`ABCXYZ`) are shown in read-only input fields.

### 6. **Responsive UI**
- Styled using **CSS Modules**.
- Mobile responsiveness through **@media queries**.
- Flexbox and Grid used for layout control.

### 7. **Footer with Social Media Links**
- Includes Facebook, LinkedIn, and Instagram icons using `react-icons`.
- Responsive stacking on smaller screens.

