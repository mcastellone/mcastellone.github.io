# Software Engineering and Design Enhancement

## Travlr Full-Stack Web Application

The Travlr full-stack web application is my selected artifact for the Software Engineering and Design category of my CS 499 Computer Science Capstone. I originally developed Travlr in CS 465 Full Stack Development using Angular, Node.js, Express, MongoDB, Mongoose, and REST APIs.

For CS 499, I enhanced the existing application to improve its security, validation, error handling, configuration, and maintainability.

## Key Enhancements

- Removed the hard-coded JWT secret and moved secure configuration to an environment variable.
- Added `.env.example` for safe application configuration.
- Protected the private `.env` file through `.gitignore`.
- Added a startup check that prevents the application from running when `JWT_SECRET` is missing.
- Added server-side validation for required trip fields.
- Improved API error handling and safe JSON error responses.
- Maintained JWT authentication for protected administrative functionality.
- Improved application configuration and removed redundant routing.
- Corrected static asset handling while preserving the existing customer-facing website.
- Documented the required Node.js environment.

## Testing

The enhanced application was tested to verify both the new functionality and the existing application behavior. Unauthorized attempts to create a trip returned HTTP 401 Unauthorized. After authentication, an invalid empty trip request returned HTTP 400 Bad Request with the missing required fields. The customer-facing website, travel page, images, MongoDB trip data, and REST API were also tested to confirm that the enhancements did not break existing functionality.

## Enhanced Code

The source files in this folder highlight the authentication, authorization, validation, API, routing, and administrative-interface improvements completed during the enhancement.

The complete original Travlr source code remains available in the root of this repository for comparison.

## Enhancement Narrative

The accompanying narrative explains why I selected Travlr, the improvements I completed, the course outcomes and skills demonstrated, the testing performed, and what I learned during the enhancement.
[View the Software Engineering and Design Enhancement Narrative](./3-2%20Milestone%20Two.docx)
