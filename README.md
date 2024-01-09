# Placement management system

> ### Login and authentication
> - Each user (student/admin/super admin) should have a userId and password.
> - hashed password.
> - student must login with userid as registration number.
> - admin should login with userid as email.
> - forgot password for all user's which will send OTP valid for 2-min, to the respective email and let the user change password with that OTP.
> - the admin can add student and the super admin can add both admin and super admin.


> ### Student
> - persanal details update form, which will be verified and updated by a admin or super admin.
> - can update resume.
> - can see there own drive history.
> - search for company placement history.


> ### Event calender
> - show the upcoming events and past events (drive) for all users.
> - only super admin can schedule event.


> ### Resume repository
> - store the google drive link of students resume.
> - admin and super admin can view and share the resume.

> ### Admin
> - sort the student based on (CGPA/attendance/test score/skill set)
> - search for a particular student detailes.
> - verify and update student details.
> - select a company to ask for placement drive.
> - not more then one can select a sigal company.
> - Add a new company to the list.
> - update the drive conform status(pandding/rejected/done)
> - if dive is conform send a schedule request.
> - search for company placement history.

> ### Super Admin
> - can do every thing a admin can do.
> - view all admin progration on drive organization.
> - Approve the drive schedule request.

> ### Report
> - student placed status.
> - particular company placement history.
