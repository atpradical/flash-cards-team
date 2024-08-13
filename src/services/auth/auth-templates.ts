export const createUserHTML = `
  <div style="font-family: Arial, sans-serif; color: #333;">
    <h1 style="margin-top: 0; font-size: 24px; font-weight: bold; color: #333333; text-align: left;">
      Thanks for signing up, ##name##!
    </h1>
    <p style="font-size: 16px; line-height: 1.625; margin: 0.4em 0 4em; color: #51545e;">
      We're happy you're here. Let's get your email address verified:
    </p>
    <div style="height: 30px; line-height: 30px;">&nbsp;</div> 
    <h6 style="margin-top: 0; margin-bottom: 0.4em; font-size: 20px; font-weight: bold; color: #333333; text-align: left;">
      Your code:
    </h6>
    <p style="font-size: 26px; font-weight: bold; color: #333333; margin-top: 0.4em;">##token##</p>
    <p style="font-size: 12px; line-height: 1.625; margin: 0.4em 0 1.1875em; color: #51545e;">
      Or confirm by following the link below:
    </p>
    <p>
      <a href="http://localhost:5174/confirm-email/##token##"
      
         style="display: inline-block; padding: 10px 20px; font-size: 16px; color: #fff; background-color:#8c61ff; text-decoration: none; border-radius: 5px;"
         target="_blank" rel="noopener noreferrer">
        Click to Verify Email
      </a>
    </p>
    <p style="margin-top: 30px; font-size: 12px; color: #999;">
      For your security, this link will expire in 24 hours.
    </p>
  </div>
`

export const recoveryPasswordHTML = `
  <div style="font-family: sans-serif; color: #333;">
    <h1 style="margin-top: 0; font-size: 24px; font-weight: bold; color: #333333;">
      Hello, ##name##
    </h1>
    <div style="height: 30px; line-height: 30px;">&nbsp;</div> 
    <p style="font-size: 16px; line-height: 1.625; margin: 0.4em 0 1.1875em; color: #51545e;">
      We received a request to reset your password. If you didn't make the request, just ignore this email. Otherwise, you can reset your password using this link:
    </p>
    <p>
      <a href="http://localhost:5174/reset-password/##token##"
         style="display: inline-block; width: auto; max-width: 100%; padding: 10px 20px; font-size: 16px; color: #fff; background-color:#8c61ff; text-decoration: none; border-radius: 5px;"
         target="_blank" rel="noopener noreferrer">
        Reset Password
      </a>
    </p>
    <p style="margin-top: 30px; font-size: 12px; color: #999;">
      If you have any issues, please contact our support team.
    </p>
    <p style="font-size: 12px; color: #999;">
      For your security, this link will expire in 24 hours.
    </p>
  </div>
`
