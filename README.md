Functionalities

# Routing with React Router

  /login: Login screen

  /dashboard: Referral dashboard after successful login



# Login Authentication (Hardcoded)

    Simple client-side validation using useState

    Only allows:

    Username: rahul

    Password: rahul@2021

    Redirects to /dashboard after successful login

# Component-Based Design

    Clean separation of reusable UI logic

    Makes future scaling and reuse easier

# Referral Table Features

This component displays mock referral data in a structured table format with pagination.

Mock Data Source: The data is stored in referralData.json.

Pagination Logic: The component shows 10 entries per page. It calculates the total number of pages and slices the data accordingly.

Filtering Logic: The table supports dynamic filtering by name. When the search term changes, it filters the rows to display only the matching records.

Responsive Layout: The layout adjusts on smaller screens for usability.




# Referral Overview and Link

This component allows users to easily share their unique referral link and referral code. The main features include:

Prefilled Input Fields: The referral URL (https://gobusiness.com/?referral=ABCXYZ) and referral code (ABCXYZ) are shown in read-only input fields to prevent accidental changes.

Copy Functionality: Each input field has a corresponding Copy button that, when clicked, copies the respective value to the clipboard.


#  Responsive UI

Each component styled with CSS Modules

Mobile responsiveness via @media queries

Flexbox and grid used for layout control

# Footer with Social Media Links

Facebook, LinkedIn, Instagram icons using react-icons

Responsive stacking on smaller screens

