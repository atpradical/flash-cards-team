export const emailConfirmationBodyHTML = `<b>Hi, ##name##!</b><br/>Please confirm your email by clicking on the link below:<br/><a href="https://flash-cards-team-atpradicals-projects.vercel.app/confirm-email/##token##">Confirm email</a>. If it doesn't work, copy and paste the following link in your browser:<br/>https://flash-cards-team-atpradicals-projects.vercel.app/confirm-email/##token##`

export const emailConfirmationRequestSubjectHTML = 'Flashcards-app: email confirmation request'

export const pwdRecoverRequestSubjectHTML = 'Flashcards-app: password recovery request'

export const pwdRecoverRequestBodyHTML = `<h1>Hi, ##name##</h1><p>Click <a href="https://flash-cards-team-atpradicals-projects.vercel.app/reset-password/##token##">here</a> to recover your password</p> If it doesn't work, copy and paste the following link in your browser:<br/>https://flash-cards-team-atpradicals-projects.vercel.app/reset-password/##token##`
