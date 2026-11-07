BAZAR CARD SURVEY — NETLIFY FORMS VERSION

This version is set up to submit responses to Netlify Forms instead of downloading a response file.

FILES
- index.html
- style.css
- script.js

IMPORTANT SETUP STEPS
1. Upload/redeploy these updated files to the SAME Netlify site as https://bazarcard.netlify.app/.
2. In the Netlify site dashboard, open Forms.
3. Enable form detection if it is not already enabled.
4. Trigger a new deploy AFTER enabling form detection. Netlify detects forms at deploy time.
5. Open the live survey and submit one test response.
6. In Netlify dashboard > your site > Forms, open the "bazar-card-survey" form to see the test submission.
7. If desired, set an email notification in Forms > Form notifications.

IMPORTANT
- Responses submitted before this new version is deployed are not recovered retroactively.
- Test the form after deployment before sending the link to respondents.
- The form is configured for Netlify Forms. It will not automatically put answers in Google Sheets; use the Netlify Forms dashboard and export responses as CSV.
- Keep the same form name, "bazar-card-survey", when redeploying.
