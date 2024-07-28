export const emailConfirmationBodyHTML = `<b>Hello, ##name##!</b><br/>Please confirm your email by clicking on the link below:<br/><a href=\\"http://localhost:5173/confirm-email/##token##\\">Confirm email</a>. If it doesn'\\''t work, copy and paste the following link in your browser:<br/>http://localhost:5173/confirm-email/##token##`

export const emailConfirmationRequestSubjectHTML = 'Email confirmation request'

export const pwdRecoverRequestSubjectHTML = 'Password recovery request'

export const pwdRecoverRequestBodyHTML = `<h1>Hi, ##name##</h1><p>Click <a href=\\"http://localhost:5173/reset-password/##token##\\">here</a> to recover your password</p> If it doesn'\\''t work, copy and paste the following link in your browser:<br/>http://localhost:5173/reset-password/##token##`
