Test Data for Task Management Web Application  

Test Data: 

1. User Data: 

   - Email: testuser1@example.com 

   - Password: TestPassword1! 

  

2. Task Data: 

   - Task 1: 

     - Title: Complete Project Proposal 

     - Description: Draft the project proposal document for Project. 

     - Date: 2024-05-15 

     - isCompleted: false  

     - isImportance: true 

   - Task 2: 

     - Title: Update UI Components 

     - Description: Implement new UI components for the dashboard. 

     - Date: 2024-04-20 

     - isCompleted: true  

     - isImportance: false 

   - Task 3: 

     - Title: Review WebApp Features 

     - Description: Familiarize with all features of WebApp for testing. 

     - Deadline: 2024-04-25 

     - isCompleted: true  

     - isImportance: true 

 

  

Test Cases: 

1. User Authentication: 

   - Test Case 1: Verify successful login with valid credentials. 

   - Test Case 2: Verify error message displayed for invalid username/email or password. 

   - Test Case 3: Verify password reset functionality. 

  

2. Task Management: 

   - Test Case 4: Verify new task creation with valid data. 

   - Test Case 5: Verify task details displayed correctly after creation. 

   - Test Case 6: Verify task deletion functionality. 

   - Test Case 7: Verify task status change from incomplete to complete and vice versa. 

  

3. Dashboard Functionality: 

   - Test Case 8: Verify task list displays all tasks for the logged-in user. 

   - Test Case 9: Verify task categories (completed, important, do it now) filter tasks correctly. 

    

4. User Interface: 

   - Test Case 10: Verify UI elements (buttons, forms, navigation) are functional and responsive. 

   - Test Case 11: Verify error messages are displayed appropriately for invalid inputs. 

  

5. Security: 

   - Test Case 12: Verify data encryption for user credentials and task details. 

   - Test Case 13: Verify secure session management and logout functionality. 

  

6. Integration: 

   - Test Case 14: Verify integration with Clerk for user authentication. 

   - Test Case 15: Verify database operations using Prisma for MongoDB. 
